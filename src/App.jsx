import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/home/Home';
import { Login } from 'pages/login/Login';

import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { ProductedRoute } from 'components/protected-route';
import { DefaultRoute } from 'components/default-route';

import { CartProvider } from 'shared/store/CartProvider';

function App() {
  return (
    <>
      <Header />
      <CartProvider>
        <Routes>
          <Route
            path='/'
            element={
              <DefaultRoute defaultPath='/home'>
                <Login />
              </DefaultRoute>
            }
          />
          <Route
            path='/home'
            element={
              <ProductedRoute>
                <Home />
              </ProductedRoute>
            }
          />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
