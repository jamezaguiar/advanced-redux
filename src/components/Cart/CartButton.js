import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/slices/cart';

import classes from './CartButton.module.css';

const CartButton = props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);

  const handleToggleCart = () => {
    dispatch(cartActions.toggleShowCart());
  };

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{products.length}</span>
    </button>
  );
};

export default CartButton;
