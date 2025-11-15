import Tiles from '../tiles/Tiles';
import Button from '../Button';
import StatsCard from './StatsCard';
import phone from '../../assets/phone-icon.svg';
import { Link } from 'react-router-dom';
import image from '../../assets/about-safe.webp';

const AboutUs = () => {
  return (
    <section className='about-container'>
      <div className='image-container'>
        <div className='image'>
          <img src={image} alt='safe storage unit' />
        </div>
        <StatsCard />
      </div>
      <div className='content-container'>
        <h3 className='section-title'>About Us</h3>
        <h4>Providing a Safe Space for Your Treasured Items</h4>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi, non sodales augue. Phasellus eget elit gravida.
        </p>
        <div className='tiles'>
          <Tiles ids={[1, 2]} />
        </div>
        <div className='discover-more'>
          <Link
            to='/about'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Button btnText={'Discover More'} />
          </Link>
          <div className='info-container'>
            <img src={phone} alt='yellow phone icon' />
            <div className='more-info'>
              <h5>more information</h5>
              <h6>+46 8 123 122 44</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
