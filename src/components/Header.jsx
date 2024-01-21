import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import MainList from './MainList';
import IconList from './IconList';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='d-flex align-items-center justify-content-between'>
          {/* MOBILE-MENU */}
          <div className='d-lg-none d-block'>
            <MobileMenu />
          </div>

          {/* BRAND-LOGO */}
          <BrandLogo />

          {/* ICON-LIST */}
          <IconList />
        </nav>
      </div>

      {/* DESKTOP-LIST */}
      <div className='d-none d-lg-block'>
        <hr className='m-0' />

        <div className='mymainlist'>
          <div className='container'>
            <MainList />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
