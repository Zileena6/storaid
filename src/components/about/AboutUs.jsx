import Tiles from '../Tiles';
import Button from '../Button';
import StatsCard from '../StatsCard';

const AboutUs = () => {
  return (
    <section className='about-container'>
      <div className='image-container'>
        <div className='img'></div>
        <StatsCard />
      </div>
      <div className='content-container'>
        <h4>About Us</h4>
        <h3>Providing a Safe Space for Your Treasured Items</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi, non sodales augue. Phasellus eget elit gravida.
        </p>
        <div className='tiles'>
          <Tiles />
          <Tiles />
        </div>
        <div className='info-container'>
          <Button btnText={'Discover More'} />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
