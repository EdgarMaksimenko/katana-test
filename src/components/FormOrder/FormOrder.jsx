import React from 'react';
import styles from './FormOrder.module.css';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { postToTelegram } from '../../services/telegram.js';
import { cartClear, closeFormOrder, togglePopUp } from '../../store/slices/cartSlice';



const FormOrder = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cartList);
  const confirmed = useAppSelector(state => state.cartList.confirmed);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    setValue,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    postToTelegram(data, cart);
    reset();
    dispatch(closeFormOrder());
    dispatch(cartClear());
    dispatch(togglePopUp());
    setTimeout(() => dispatch(togglePopUp()), 2000);
  };

  return (
    <div className={confirmed ? styles.order + ' ' + styles.active : styles.order}>
      <p className={styles.title}>Оформити замовлення</p>
      <button className={styles.close} onClick={() => dispatch(closeFormOrder())}>&#10006;</button>
      <form id='order_form' onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="name">Отримувач</label>
          <input
            {...register('name', {
              required: 'This field is required',
            })}
            placeholder="Ігор Макаренко"
            required={true}
            autoComplete='off'
            id='name'
          />
        </div>
        <div className={styles.input__error}>{errors?.name && (<p className={styles.error}>{errors.name.message}</p>)}</div>

        <div className={styles.field}>
          <label htmlFor="phone">Номер телефону</label>
          <input
            {...register('phone', {
              required: 'This field is required',
            })}
            placeholder="0978885522"
            required={true}
            autoComplete='off'
            id='phone'
          />
        </div>
        <div className={styles.input__error}>{errors?.phone && (<p className={styles.error}>{errors.phone.message}</p>)}</div>

        <div className={styles.field}>
          <label htmlFor="place">Відділення Нової пошти</label>
          <input
            {...register('place', {
              required: 'This field is required',
            })}
            placeholder="55"
            required={true}
            autoComplete='off'
            id='place'
          />
        </div>
        <div className={styles.input__error}>{errors?.place && (<p className={styles.error}>{errors.place.message}</p>)}</div>

        <button type='submit' className={styles.confirm}>Підтвердити</button>
      </form>
    </div>
  )
};

export default FormOrder;