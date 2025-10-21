import logo1 from '../assets/Logoipsum-1.svg';
import logo2 from '../assets/Logoipsum-2.svg';
import logo3 from '../assets/Logoipsum-3.svg';
import logo4 from '../assets/Logoipsum-4.svg';
import logo5 from '../assets/Logoipsum-5.svg';

const logos = [logo1, logo2, logo3, logo4, logo5];

const LogoBanner = () => {
  return (
    <div className='logo-banner'>
      <div className='logo-container'>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
export default LogoBanner;
