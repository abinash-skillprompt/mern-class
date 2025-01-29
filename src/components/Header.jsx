import { LOGO_URL } from '../utils/constants';
import { NavLink } from 'react-router';
const Header = () => {
  return (
    <div className="header bg-orange-500 flex justify-between h-12 items-center">
      <div className="logo-container mx-4">
        <img src={LOGO_URL} className="logo w-24" />
      </div>
      <div className="nav-bar ">
        <ul className="nav-items flex gap-5 mx-4 text-xl ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-500 px-4' : 'black-white px-4'
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-500 px-4' : 'black-white px-4'
            }
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-500 px-4' : 'black-white px-4'
            }
          >
            <li>Contact </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
