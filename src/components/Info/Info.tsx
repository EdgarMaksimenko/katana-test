import React, { FC } from 'react';
import styles from './Info.module.css';
import img1 from '../../static/about_1.jpg';
import img2 from '../../static/about_2.jpg';
import img3 from '../../static/about_3.jpg';
import img4 from '../../static/about_4.jpg';


const Info: FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <div className={styles.img__block}>
          <img src={img1} alt="charge" />
        </div>
        <div className={styles.text__block}>
          <p className={styles.number}>1</p>
          <p className={styles.title}>Живлення</p>
          <p className={styles.text}>Ємності акумулятора достатньо, щоб на кілька днів або навіть тижнів забути про вибір нового пристрою</p>
        </div>
      </div>
      <div className={styles.info__item}>
        <div className={styles.text__block}>
          <p className={styles.number}>2</p>
          <p className={styles.title}>Потужність</p>
          <p className={styles.text}>Наші пристрої мають супер потужність і кожна модель видає великі хмари пари та вашого улюбленого смаку</p>
        </div>
        <div className={styles.img__block}>
          <img src={img2} alt="charge" />
        </div>
      </div>
      <div className={styles.info__item}>
        <div className={styles.img__block}>
          <img src={img3} alt="charge" />
        </div>
        <div className={styles.text__block}>
          <p className={styles.number}>3</p>
          <p className={styles.title}>Тривалість</p>
          <p className={styles.text}>1000 тяг - до 3 днів<br/>2000 тяг - до 6 днів<br/>5000 тяг у розробці у Ілона Маска</p>
        </div>
      </div>
      <div className={styles.info__item}>
        <div className={styles.text__block}>
          <p className={styles.number}>4</p>
          <p className={styles.title}>Зручність</p>
          <p className={styles.text}>За рахунок правильно підібраної потужності тяга йде легко і приємно, доповнюючи образ ідеальної підсистеми.</p>
        </div>
        <div className={styles.img__block}>
          <img src={img4} alt="charge" />
        </div>
      </div>
    </div>
  )
};

export default Info;