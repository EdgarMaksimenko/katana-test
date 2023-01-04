import React, {FC} from 'react';
import styles from './Liquidsinfo.module.css';
import img1 from '../../static/about_5.jpg';
import img2 from '../../static/about_6.jpg';

const Liquidsinfo: FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <div className={styles.img__block}>
          <img src={img1} alt="charge" />
        </div>
        <div className={styles.text__block}>
          <p className={styles.number}>1</p>
          <p className={styles.title}>Насиченість</p>
          <p className={styles.text}>Кращий нікотин та ароматизатори разом з вашим улюбленим смаком принесуть купу позитивних емоцій під час ширяння. Кожен знайде щось своє</p>
        </div>
      </div>
      <div className={styles.info__item}>
        <div className={styles.text__block}>
          <p className={styles.number}>2</p>
          <p className={styles.title}>Міцність та баланс</p>
          <p className={styles.text}>Міцність 50 міліграм дає повністю насититися нікотином, досить кількох затяжок<br/><br/>Адекватна щільність пари, помірний смак по горлу і приємна насолода - це те, що формує найкраще уявлення про сольову рідину КАТАНА</p>
        </div>
        <div className={styles.img__block}>
          <img src={img2} alt="charge" />
        </div>
      </div>
    </div>
  )
};

export default Liquidsinfo;