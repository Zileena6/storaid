import SocialList from '../links/SocialList';
import FindUsImage from '../../assets/findUs-image.webp';
import { PiEnvelopeLight } from 'react-icons/pi';
import { MdPhone, MdLocationOn } from 'react-icons/md';

const FindUs = () => {
  return (
    <section className='find-us-section'>
      <div className='content-container'>
        <div className='image-container'>
          <img src={FindUsImage} alt='silhouette of a man' />
        </div>
        <div className='info-container'>
          <h3 className='title'>Find Us On:</h3>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className='contact-block'>
            <div className='find-us-icon'>
              <MdPhone />
            </div>
            <div className='call-center'>
              <h5>call center</h5>
              <p>+46 8 123 122 44</p>
            </div>
          </div>
          <div className='contact-block'>
            <div className='find-us-icon'>
              <PiEnvelopeLight />
            </div>
            <div className='email-address'>
              <h5>email address</h5>
              <p>contact@domain.com</p>
            </div>
          </div>
          <div className='contact-block'>
            <div className='find-us-icon'>
              <MdLocationOn />
            </div>
            <div className='location'>
              <h5>location</h5>
              <p>Klarabergsviadukten 90, Stockholm</p>
            </div>
          </div>
          <div className='social-container'>
            <h5>our social media</h5>
            <div className='line'></div>
            <SocialList />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FindUs;
