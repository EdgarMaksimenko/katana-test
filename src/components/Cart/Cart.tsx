import React, { FC } from 'react';
import styles from './Cart.module.css';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { confirm, countMinus, countPlus, removeFromCart, toggleCart } from '../../store/slices/cartSlice';

const Cart: FC = () => {
  const isOpened = useAppSelector(state => state.cartList.isOpened);
  const cartItems = useAppSelector(state => state.cartList.items);
  const total = useAppSelector(state => state.cartList.total);
  const dispatch = useAppDispatch();

  return (
    <div className={isOpened ? styles.cart + ' ' + styles.opened : styles.cart}>
      <p className={styles.title}>К О Ш И К</p>
      <button className={styles.close} onClick={() => dispatch(toggleCart())}>&#10006;</button>
      <div className={styles.product__box}>
        {cartItems && cartItems.map(item => (
          <div className={styles.product} key={item.id}>
            <button
              className={styles.delete} onClick={() => dispatch(removeFromCart(item.id))}>&#10006;</button>
            <img src={require(`../../static/shop/${item.image}`)} alt={`cartitem${item.id}`} />
            <div className={styles.text}>
              <p>Смак: {item.taste}</p>
              <p>Кількість тяг: {item.capacity}</p>
              <p>Ціна: {item.price} грн</p>
              <div className={styles.count}>
                <p>Кількість:</p>
                <button onClick={() => dispatch(countMinus(item.id))}>&lt;</button>
                <p>{item.count}</p>
                <button onClick={() => dispatch(countPlus(item.id))}>&gt;</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {total > 0 &&
        <div className={styles.buy}>
          <p>Сума замовлення: {total} грн</p>
          <button onClick={() => dispatch(confirm())}>Замовити</button>
        </div>
      }
    </div>
  )
};

export default Cart;