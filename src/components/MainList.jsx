import { NavLink } from 'react-router-dom';

const MainList = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <NavLink to='/' className='nav-link'>
          <i className='ri-home-4-line'></i>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/shop' className='nav-link'>
          <i className='ri-store-2-line'></i>
          Shop
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/blog' className='nav-link'>
          <i className='ri-news-line'></i>
          Blog
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/contact' className='nav-link'>
          <i className='ri-contacts-book-2-line'></i>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default MainList;
