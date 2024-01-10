import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='d-flex align-items-center justify-content-between'>
          <Link to='/'>
            <img src='/logo.svg' alt='brand-logo' />
          </Link>

          <ul className='nav'>
            <li className='nav-item'>
              <Link
                to='/shop'
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Shop
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blog' className='nav-link'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/cart' className='nav-link'>
                Cart
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
