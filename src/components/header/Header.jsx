import { FaPhoneAlt } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';
import SocialList from '../links/SocialList';
import Logo from '../../assets/storaid-logo.webp';
import NavLinks from '../links/NavLinks';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='contact-banner'>
        <div className='contact'>
          <FaPhoneAlt />
          <p>+46 8 123 122 44</p>
          <IoMailOpen className='mail' />
          <p>contact@domain.com</p>
        </div>
        <div className='social'>
          <SocialList />
        </div>
      </div>
      <nav>
        <Link to='/'>
          <img src={Logo} alt='StorAid Company Logo' />
        </Link>
        <NavLinks />
        <Link
          to='/booking'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Button btnText={'Book Now'} />
        </Link>
      </nav>
    </header>
  );
};
export default Header;
