import React, { FC } from 'react';
import styles from './App.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import Podsystem from '../../pages/Podsystem/Podsystem';
import Liquids from '../../pages/Liquids/Liquids';
import Contacts from '../../pages/Contacts/Contacts';
import Shop from '../../pages/Shop/Shop';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';
import FormOrder from '../FormOrder/FormOrder';
import PopUp from '../PopUp/PopUp';

const App: FC = () => {
  return (
    <div className='body-wrapper'>
      <Header />
      <Cart/>
      <FormOrder/>
      <PopUp/>
      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/podsystem' element={<Podsystem />} />
          <Route path='/liquids' element={<Liquids />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
      <Footer />
        {/* <Route path='*' element={<Navigate to='/404' />} />
          <Route path ='/404' element={<NotFound/>}/>  */}
    </div>
  )
};

export default App;