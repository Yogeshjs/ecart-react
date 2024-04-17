import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/home/Home';
import { Login } from 'pages/login/Login';

import { Header } from 'components/header';
import { Footer } from 'components/footer';

import { CartProvider } from 'shared/store/CartProvider';

function App() {
  return (
    <>
      <Header />
      <CartProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
