import React, { FC } from 'react';
import styles from './About.module.css';
import about1 from './../../static/about_1.jpg';
import about2 from './../../static/about_2.jpg';

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__item}>
        <div className={styles.text}>
          <p className={styles.title}>Одноразова Pod система: eight by KATANA</p>
          <p className={styles.description}>KATANA - це свіжий вдих на ринок електронних сигарет та відмінна альтернатива тютюновим виробам. Ваше ширяння стане простим і безтурботним. Не Потрібно розбиратися в роботі девайса, достатньо лише відкрити і насолоджуватися!</p>
        </div>
        <img src={about1} alt="" />
      </div>
      <div className={styles.about__item}>
        <img src={about2} alt="" />
        <div className={styles.text}>
          <p className={styles.title}>Насолода</p>
          <p className={styles.description}>50 міліграмів нікотину, що містяться в одному єдиному екземплярі, звільненому від нікотинового голодування. При цьому легені не забиваються димом, і людина отримує незабутній смак.</p>
        </div>
      </div>

    </div>
  )
};

export default About;