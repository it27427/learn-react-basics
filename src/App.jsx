import { Route, Routes } from 'react-router-dom';

// Components
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import WishPage from './pages/WishPage';
import ContactPage from './pages/ContactPage';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

// Layouts
import Layout from './layouts/Layout';
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
