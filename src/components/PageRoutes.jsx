import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import CartPage from '../pages/CartPage';
import WishPage from '../pages/WishPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/wishlist' element={<WishPage />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
