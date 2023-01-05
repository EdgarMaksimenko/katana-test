import React, {FC} from 'react';
import styles from './PopUp.module.css';
import { useAppSelector } from '../../hooks';

const PopUp: FC = () => {
  const popupActive = useAppSelector(state => state.cartList.showPopUp);

  return (
    <div className={popupActive ? styles.popup + ' ' + styles.active : styles.popup}>
      <p>Ваше замовлення оформлено!</p>
      <p>Наш менеджер зв'яжеться з вами!</p>
    </div>
  )
};

export default PopUp;