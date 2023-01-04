import React, { FC } from 'react';
import styles from './Shop.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToCart } from '../../store/slices/cartSlice';

const Shop: FC = () => {
  const product = useAppSelector(state => state.productList.product);
  const dispatch = useAppDispatch();
  const [podType, setPodType] = React.useState(1000);

  return (
    <div className={styles.shop}>
      <div className={styles.category}>
        <button
          style={podType === 1000 ? { background: '#b21623af' } : { background: 'transparent' }}
          onClick={() => setPodType(1000)}
        >Katana 1000</button>
        <button
          style={podType === 2000 ? { background: '#b21623af' } : { background: 'transparent' }}
          onClick={() => setPodType(2000)}
        >Katana 2000</button>
        <button
          style={podType === 3000 ? { background: '#b21623af' } : { background: 'transparent' }}
          onClick={() => setPodType(3000)}
        >Katana 3000</button>
      </div>

      <div className={styles.products}>
        {
          product.filter(item => item.capacity === podType).map(item => (
            <div className={styles.products__item} key={item.id}>
              <img src={require(`../../static/shop/${item.image}`)} alt={`${item.id}product`} />
              <div className={styles.poructs__item__text}>
                <p className={styles.taste}>{item.taste}</p>
                <p className={styles.price}>{item.price} UAH</p>
                <button onClick={() => dispatch(addToCart(item))}>В кошик</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Shop;