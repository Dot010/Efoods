import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
  close,
  clear,
  remove,
  goToDelivery,
  goToPayment,
  goToSuccess,
  goToCart,
} from "../../store/reducers/cart";
import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  Prices,
  BotaoFinalizar,
  InputGroup,
  Row,
  ButtonGroup,
} from "./style";
import { usePurchaseMutation } from "../../services/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, type ChangeEvent } from "react";

const Cart = () => {
  const { isOpen, items, step } = useSelector((state: RootState) => state.cart);
  const [purchase, { isLoading }] = usePurchaseMutation();
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState<string | null>(null);

  const onlyDigits = (value: string) => value.replace(/\D/g, "");

  const formatCardNumber = (value: string) => {
    const digits = onlyDigits(value).slice(0, 16);
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(" ") : "";
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("cardNumber", formatCardNumber(event.target.value));
  };

  const handleCardCVVChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("cardCVV", onlyDigits(event.target.value).slice(0, 4));
  };

  const handleCardMonthChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("cardMonth", onlyDigits(event.target.value).slice(0, 2));
  };

  const handleCardYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("cardYear", onlyDigits(event.target.value).slice(0, 2));
  };


  const form = useFormik({
    initialValues: {
      fullname: "",
      address: "",
      city: "",
      zip: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCVV: "",
      cardMonth: "",
      cardYear: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(3, "O nome completo deve ter pelo menos 3 caracteres")
        .required("O nome completo é obrigatório"),
      address: Yup.string().required("O endereço é obrigatório"),
      city: Yup.string().required("A cidade é obrigatória"),
      zip: Yup.string().required("O CEP é obrigatório"),
      number: Yup.string().required("O número é obrigatório"),
      complement: Yup.string(),
      cardName:
        step === "payment"
          ? Yup.string().required("O nome no cartão é obrigatório")
          : Yup.string(),
      cardNumber:
        step === "payment"
          ? Yup.string().required("O número do cartão é obrigatório")
          : Yup.string(),
      cardCVV:
        step === "payment"
          ? Yup.string()
            .matches(/^\d{3,4}$/, "O CVV deve ter 3 dígitos")
            .required("O CVV do cartão é obrigatório")
          : Yup.string(),
      cardMonth:
        step === "payment"
          ? Yup.string()
            .matches(/^(0[1-9]|1[0-2])$/, "O mês deve estar entre 01 e 12")
            .required("O mês é obrigatório")
          : Yup.string(),
      cardYear:
        step === "payment"
          ? Yup.string()
            .matches(/^\d{2}$/, "O ano deve ter 2 dígitos")
            .required("O ano é obrigatório")
          : Yup.string(),
    }),
    onSubmit: (values) => {
      console.log("Formulário enviado com sucesso:", values);
    },
  });

  if (!isOpen) {
    return null;
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.preco ?? 0), 0);
  };

  const closeCart = () => {
    dispatch(close());
  };

  function removeItem(id: number): void {
    dispatch(remove(id));
  }

  function handleContinue() {
    if (items.length > 0) {
      dispatch(goToDelivery());
    }
  }

  async function handleContinuePayment() {
    if (items.length === 0) {
      dispatch(goToCart());
      return;
    }

    const deliveryFields = [
      "fullname",
      "address",
      "city",
      "zip",
      "number",
    ] as const;

    form.setTouched({
      fullname: true,
      address: true,
      city: true,
      zip: true,
      number: true,
      complement: true,
    });

    const errors = await form.validateForm();
    const hasDeliveryErrors = deliveryFields.some((field) => Boolean(errors[field]));

    if (hasDeliveryErrors) {
      dispatch(goToDelivery());
      return;
    }

    dispatch(goToPayment());
  }

  async function handleSubmitOrder() {
    const paymentFields = [
      "cardName",
      "cardNumber",
      "cardCVV",
      "cardMonth",
      "cardYear",
    ] as const;

    form.setTouched({
      ...form.touched,
      cardName: true,
      cardNumber: true,
      cardCVV: true,
      cardMonth: true,
      cardYear: true,
    });

    const errors = await form.validateForm();
    const hasPaymentErrors = paymentFields.some((field) =>
      Boolean(errors[field])
    );

    if (hasPaymentErrors) return;

    const payload = {
      billing: {
        name: form.values.fullname,
      },
      delivery: {
        receiver: form.values.fullname,
        address: {
          description: form.values.address,
          city: form.values.city,
          zipCode: form.values.zip,
          number: Number(form.values.number),
          complement: form.values.complement || undefined,
        },
      },
      payment: {
        installments: 1,
        card: {
          active: true,
          owner: {
            name: form.values.fullname,
          },
          name: form.values.cardName,
          number: onlyDigits(form.values.cardNumber),
          expires: {
            month: Number(form.values.cardMonth),
            year: Number(form.values.cardYear),
          },
          code: Number(onlyDigits(form.values.cardCVV)),
        },
      },
      products: items.map((item) => ({
        id: item.id,
        price: item.preco ?? 0,
      })),
    };

    try {
      const response = await purchase(payload).unwrap();
      setOrderId(response.orderId);
      dispatch(goToSuccess());
    } catch {
      alert("Erro ao processar o pedido. Por favor, tente novamente.");
    }
  }


  function handleBackToCart() {
    dispatch(goToCart());
  }

  function handleBackToDelivery() {
    dispatch(goToDelivery());
  }

  function handleConcludeOrder() {
    dispatch(clear());
    setOrderId(null);
    form.resetForm();
    dispatch(close());
  }

  return (
    <CartContainer className={isOpen ? "is-Open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
       
        {step === "cart" && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <span>R$ {item.preco?.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                    aria-label="Remover item"
                    title="Remover item"
                  />
                </CartItem>
              ))}
            </ul>

            <Prices>
              <h3>Valor Total</h3>
              <span>R$ {getTotalPrice().toFixed(2)}</span>
            </Prices>

            <BotaoFinalizar
              type="button"
              onClick={handleContinue}
              disabled={items.length === 0}
            >
              Continuar com a entrega
            </BotaoFinalizar>
          </>
        )}

        {step === "delivery" && (
          <div>
            <h2>Entrega</h2>
            <InputGroup>
              <label htmlFor="fullname">Quem irá receber</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={form.values.fullname}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.fullname && form.errors.fullname && (
                <small>{form.errors.fullname}</small>
              )}
            </InputGroup>

            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.address && form.errors.address && (
                <small>{form.errors.address}</small>
              )}
            </InputGroup>

            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.city && form.errors.city && (
                <small>{form.errors.city}</small>
              )}
            </InputGroup>

            <Row>
              <InputGroup>
                <label htmlFor="zip">CEP</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={form.values.zip}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.touched.zip && form.errors.zip && (
                  <small>{form.errors.zip}</small>
                )}
              </InputGroup>

              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.touched.number && form.errors.number && (
                  <small>{form.errors.number}</small>
                )}
              </InputGroup>
            </Row>

            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.complement && form.errors.complement && (
                <small>{form.errors.complement}</small>
              )}
            </InputGroup>

            <ButtonGroup>
              <BotaoFinalizar type="button" onClick={handleContinuePayment}>
                Continuar com o pagamento
              </BotaoFinalizar>
              <BotaoFinalizar type="button" onClick={handleBackToCart}>
                Voltar para o carrinho
              </BotaoFinalizar>
            </ButtonGroup>
          </div>
        )}


        {step === "payment" && (
          <div>
            <h2>
              Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}
            </h2>

            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.cardName && form.errors.cardName && (
                <small>{form.errors.cardName}</small>
              )}
            </InputGroup>

            <Row $columns="2.5fr 1fr">
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={handleCardNumberChange}
                  onBlur={form.handleBlur}
                  inputMode="numeric"
                  maxLength={19}
                  placeholder="0000 0000 0000 0000"
                />
                {form.touched.cardNumber && form.errors.cardNumber && (
                  <small>{form.errors.cardNumber}</small>
                )}
              </InputGroup>

              <InputGroup>
                <label htmlFor="cardCVV">CVV</label>
                <input
                  type="text"
                  id="cardCVV"
                  name="cardCVV"
                  value={form.values.cardCVV}
                  onChange={handleCardCVVChange}
                  onBlur={form.handleBlur}
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="123"
                />
                {form.touched.cardCVV && form.errors.cardCVV && (
                  <small>{form.errors.cardCVV}</small>
                )}
              </InputGroup>
            </Row>

            <Row>
              <InputGroup>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <input
                  type="text"
                  id="cardMonth"
                  name="cardMonth"
                  value={form.values.cardMonth}
                  onChange={handleCardMonthChange}
                  onBlur={form.handleBlur}
                  inputMode="numeric"
                  maxLength={2}
                  placeholder="MM"
                />
                {form.touched.cardMonth && form.errors.cardMonth && (
                  <small>{form.errors.cardMonth}</small>
                )}
              </InputGroup>

              <InputGroup>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <input
                  type="text"
                  id="cardYear"
                  name="cardYear"
                  value={form.values.cardYear}
                  onChange={handleCardYearChange}
                  onBlur={form.handleBlur}
                  inputMode="numeric"
                  maxLength={2}
                  placeholder="AA"
                />
                {form.touched.cardYear && form.errors.cardYear && (
                  <small>{form.errors.cardYear}</small>
                )}
              </InputGroup>
            </Row>

            <ButtonGroup>
              <BotaoFinalizar type="button" onClick={handleSubmitOrder} disabled={isLoading}>
                {isLoading ? "Enviando pedido..." : "Finalizar pagamento"}
              </BotaoFinalizar>
              <BotaoFinalizar type="button" onClick={handleBackToDelivery}>
                Voltar para a edição de endereço
              </BotaoFinalizar>
            </ButtonGroup>
          </div>
        )}

   
        {step === "success" && (
          <div>
            <h2>Pedido realizado com sucesso! - {orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. Lembre-se da importância
              de higienizar as mãos após o recebimento do pedido.
            </p>
            <BotaoFinalizar type="button" onClick={handleConcludeOrder}>
              Concluir
            </BotaoFinalizar>
          </div>
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;