import React, {FC} from 'react';
import styles from './Contacts.module.css';
import call from './../../static/call.svg';
import point from './../../static/point.svg';
import time from './../../static/time.svg';
import mail from './../../static/mail.svg';

const Contacts: FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  return (
   <div className={styles.contacts__block}>
      <div className={styles.dealer}>
        <p>Щоб стати партнером KATANA в Україні, зв'яжіться з нами будь-яким зручним для вас способом</p>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contacts__item}>
          <img src={time} alt="time" />
          <p>Пн-Нд 10:00-18:00</p>
        </div>
        <div className={styles.contacts__item}>
          <img src={mail} alt="mail" />
          <p>eightbykatana1@gmail.com</p>
        </div>
        <div className={styles.contacts__item}>
          <img src={point} alt="point" />
          <p>Одесса , Делова 8а/2</p>
        </div>
        <div className={styles.contacts__item}>
          <img src={call} alt="call" />
          <p>+38 098 12 61 998</p>
        </div>
      </div>
   </div>
  )
};

export default Contacts;