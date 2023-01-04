import React, { FC } from 'react';
import About from '../../components/About/About';
import Advantages from '../../components/Advantages/Advantages';
import styles from './Main.module.css';

const Main: FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);
  
  return (
    <>
      <div className={styles.intro}>
        <h1>eight by KATANA — змініть ваше уявлення про електронні сигарети та куріння в цілому</h1>
      </div>
      <Advantages />
      <About/>
    </>

  )
};

export default Main;