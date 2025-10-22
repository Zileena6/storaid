import { Link } from 'react-router-dom';
import { navLinks } from './links.js';

const NavLinks = () => {
  return (
    <div className='navlinks'>
      <ul>
        {navLinks.map((link, i) => {
          return (
            <>
              <li key={i}>
                <Link to={link.href} className='navlink'>
                  {link.text}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default NavLinks;
