import React, {FC} from 'react';
import styles from './Advantages.module.css';
import comfort from '../../static/comfort.png';
import quality from '../../static/quality.png';
import lessharm from '../../static/lessharm.png';

const Advantages: FC = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantages__item}>
      <img src={lessharm} alt="lessharm" />
        <p className={styles.title}>Менше шкоди</p>
        <p className={styles.text}>Завдяки відсутності побічних продуктів горіння наша продукція завдає набагато меншої шкоди вашому здоров'ю через відсутність продуктів горіння та використання найкращих компонентів!</p>
      </div>
      <div className={styles.advantages__item}>
        <img src={quality} alt="quality" />
        <p className={styles.title}>Якість</p>
        <p className={styles.text}>Ідеально підібрана міцність рідини на першосортному сольовому нікотині разом із правильно налагодженою потужністю дає найкращий результат</p>
      </div>
      <div className={styles.advantages__item}>
        <img src={comfort} alt="comfort" />
        <p className={styles.title}>Зручно</p>
        <p className={styles.text}>Забудьте про зарядні пристрої, флакон з рідиною, згорілій ваті, випарниках і кнопках просто відкрийте і насолоджуйтесь!</p>
      </div>
    </div>
  )
};

export default Advantages;