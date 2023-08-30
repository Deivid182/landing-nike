import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.tsx';
import ProductPage from './pages/product-page.tsx';
import CartProvider from './providers/cart-provider.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './state/store.ts';
import Footer from './sections/footer.tsx';
import Cart from './pages/cart.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/:id' element={<ProductPage />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <section className='bg-black padding-x padding-t pb-8'>
            <Footer />
          </section>
        </BrowserRouter>
      </PersistGate>
    </CartProvider>
  </React.StrictMode>
);
