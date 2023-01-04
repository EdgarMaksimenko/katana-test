import React, {FC} from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p>© 2022 eight by KATANA.All rights reserved.</p>
    </div>
  )
};

export default Footer;