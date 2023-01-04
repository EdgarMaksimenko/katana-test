import React, { FC } from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import logo from '../../static/katanalogo.svg';
import cart from '../../static/cart.png'
import { useAppDispatch } from '../../hooks';
import { toggleCart } from '../../store/slices/cartSlice';


const Header: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav className={styles.navi}>
        <ul>
          <li><NavLink to={`/`}>Головна</NavLink></li>
          <li><NavLink to={`/podsystem`}>POD-Системи</NavLink></li>
          <li><NavLink to={`/liquids`}>Сольові рідини</NavLink></li>
          <li><NavLink to={`/contacts`}>Контакти</NavLink></li>
          <li><NavLink to={`/shop`}>Магазин</NavLink></li>
          <div className={styles.language}>
            <button>UA</button>
            <button>EN</button>
            <button onClick={() => dispatch(toggleCart())}className={styles.cart}><img src={cart} alt="cart" /></button>
          </div>
        </ul>
      </nav>
    </div>
  )
};

export default Header;