import { navLinks } from './links.js';

const NavLinks = () => {
  return (
    <div className='navlinks'>
      <ul>
        {navLinks.map((link) => {
          return (
            <>
              <li key={link.id}>
                <a href={link.href} className='navlink'>
                  {link.text}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default NavLinks;
