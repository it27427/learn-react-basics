import { Link } from 'react-router-dom';

const BrandLogo = () => {
  return (
    <Link to='/' className='brand-logo'>
      <img src='/logo.svg' alt='brand-logo' className='img-fluid' />
    </Link>
  );
};

export default BrandLogo;
