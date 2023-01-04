import React, {FC} from 'react';
import Info from '../../components/Info/Info';
import styles from './Podsystem.module.css';

const Podsystem: FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);
  
  return (
    <div className={styles.podsystem}>
      <div className={styles.intro}>
        <p>Pod-системи KATANA легко поміщаються в кишеню будь-якого розміру, але мають велику кількість затяжок і виробляють достатню кількість пари, яка допоможе вам відчувати кращі відчуття і занурюватися з головою в улюблений смак. Для виробництва рідини використовуються тільки високоякісні та безпечні інгредієнти.</p>
      </div>
      <Info/>
    </div>
  )
};

export default Podsystem;