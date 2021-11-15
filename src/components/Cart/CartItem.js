import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cart';
import classes from './CartItem.module.css';

const CartItem = props => {
  const dispatch = useDispatch();
  const { id, title, quantity, total, price } = props.item;

  const handleIncrement = () => {
    dispatch(cartActions.incrementProductQuantity({ productId: id }));
  };

  const handleDecrement = () => {
    dispatch(cartActions.decrementProductQuantity({ productId: id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
