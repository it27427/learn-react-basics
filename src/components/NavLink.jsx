import { Link } from 'react-router-dom';

const NavLink = () => {
  return <Link {...this.props} activeClassName='active' />;
};

export default NavLink;
