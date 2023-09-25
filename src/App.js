import React from 'react';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Termeni from './pages/termeni/Termeni';
import Login from './pages/login/Login';
import Fav from './pages/fav/Fav';
import Page404 from './pages/page404/Page404';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import './utils/utility-classes.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/about" element={<About />} />
        <Route path="/termeni" element={<Termeni />} />
        <Route
          path="/category/:categoryName"
          element={<Category />}
        />
        <Route
          path="/product/:id"
          element={<Product />}
        />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;