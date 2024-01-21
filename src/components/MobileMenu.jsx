import { Link } from 'react-router-dom';
import MainList from './MainList';
import BrandLogo from './BrandLogo';

const MobileMenu = () => {
  return (
    <>
      <button
        className='btn btn-primary'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#mobileMenu'
        aria-controls='mobileMenu'
      >
        <i className='ri-menu-2-fill'></i>
      </button>

      <div
        className='offcanvas offcanvas-start'
        tabIndex='-1'
        id='mobileMenu'
        aria-labelledby='mobileMenuLabel'
      >
        <div className='offcanvas-header'>
          <BrandLogo />

          <button
            type='button'
            className='btn-close m-0 p-0'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            <i className='ri-close-line'></i>
          </button>
        </div>

        <div className='offcanvas-body'>
          <MainList />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
