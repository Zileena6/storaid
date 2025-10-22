import { FaCircleChevronRight } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='copyright'>
          <p>&copy; 2025 StorAid, All rights reserved.</p>
        </div>
        <div className='terms-policy'>
          <p className='terms'>
            <FaCircleChevronRight />
            Terms & Conditions
          </p>
          <p className='policy'>
            <FaCircleChevronRight />
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
