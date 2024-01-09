import { Route, Routes } from 'react-router-dom';

// PAGES
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import WishPage from './pages/WishPage';
import ContactPage from './pages/ContactPage';

// SIGNIN-PAGES
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// ADMIN-PAGES
import Dashboard from './pages/Dashboard';

// ERROR-PAGE
import ErrorPage from './pages/ErrorPage';

// LAYOUTS
import Layout from './layouts/Layout';
import SignInLayout from './layouts/SignInLayout';
import AdminLayout from './layouts/AdminLayout';
import ErrorLayout from './layouts/ErrorLayout';

const App = () => {
  return (
    <Routes>
      {/* PAGE-ROUTES */}
      <Route
        path='/'
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path='/blog'
        element={
          <Layout>
            <BlogPage />
          </Layout>
        }
      />
      <Route
        path='/cart'
        element={
          <Layout>
            <CartPage />
          </Layout>
        }
      />
      <Route
        path='/wishlist'
        element={
          <Layout>
            <WishPage />
          </Layout>
        }
      />
      <Route
        path='/contact'
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />

      {/* SIGNIN-ROUTES */}
      <Route
        path='/login'
        element={
          <SignInLayout>
            <LoginPage />
          </SignInLayout>
        }
      />

      <Route
        path='/register'
        element={
          <SignInLayout>
            <RegisterPage />
          </SignInLayout>
        }
      />

      {/* ADMIN-ROUTES */}
      <Route
        path='/dashboard'
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />

      {/* ERROR-ROUTE */}
      <Route
        path='/*'
        element={
          <ErrorLayout>
            <ErrorPage />
          </ErrorLayout>
        }
      />
    </Routes>
  );
};

export default App;
