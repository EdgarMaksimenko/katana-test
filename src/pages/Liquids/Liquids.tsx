import React, {FC} from 'react';
import Liquidsinfo from '../../components/Liquidsinfo/Liquidsinfo';
import styles from './Liquids.module.css';

const Liquids: FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);
  
  return (
    <div className={styles.liquids}>
      <div className={styles.intro}>
        <p>Рідина - серце будь-якої електронної сигарети, чи то одноразова чи підсистема.</p>
      </div>
      <Liquidsinfo/>
    </div>
  )
};

export default Liquids;