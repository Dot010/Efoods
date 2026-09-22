import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { CartContainer, Overlay, Sidebar, CartItem, Prices, BotaoFinalizar } from "./style";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(close());
  };
  if (!isOpen) {
    return null;
  }

  function removeItem(id: number): void {
    dispatch(remove(id));
  }

  return (
    <CartContainer className={isOpen ? "is-Open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.title} />
              <div>
                <h3>{item.title}</h3>

                <span>R${item.preco}</span>
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
                  <span>R${items.reduce((total, item) => total + (item.preco ?? 0), 0).toFixed(2)}</span>
              </Prices>
              
        <BotaoFinalizar>Continuar com a entrega</BotaoFinalizar>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
