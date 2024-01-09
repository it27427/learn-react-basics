import { Route, Routes } from 'react-router-dom';

// CLIENT-PAGES
import HomePage from './pages/Clients/HomePage';
import BlogPage from './pages/Clients/BlogPage';
import CartPage from './pages/Clients/CartPage';
import WishPage from './pages/Clients/WishPage';
import ContactPage from './pages/Clients/ContactPage';

// SIGNIN-PAGES
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

// ADMIN-PAGES
import Dashboard from './pages/Admin/Dashboard';

// ERROR-PAGE
import ErrorPage from './pages/Error/ErrorPage';

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
