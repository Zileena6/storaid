import { Link } from 'react-router-dom';
import { navLinks } from './links.js';
import { useState } from 'react';

const NavLinks = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(true);
  };

  return (
    <div className='navlinks'>
      <ul>
        {navLinks.map((link, id) => {
          return (
            <li key={id}>
              <Link
                to={link.href}
                className={`navlink ${isActive ? 'active' : ''} `}
                onClick={handleActive}
              >
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
