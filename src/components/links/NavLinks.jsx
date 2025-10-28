import { Link } from 'react-router-dom';
import { navLinks } from './links.js';

const NavLinks = () => {
  return (
    <div className='navlinks'>
      <ul>
        {navLinks.map((link, id) => {
          return (
            <li key={id}>
              <Link to={link.href} className='navlink'>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default NavLinks;
