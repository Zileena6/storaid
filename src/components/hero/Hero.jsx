import Button from '../Button';
import heroImage from '../../assets/hero-image.svg';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='content-container'>
          <h4>Welcome to StorAid</h4>
          <h1>Space Simplified, Storage Perfected</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras
            lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at
            euismod sem ipsum ac dolor.
          </p>
          <Button btnText={'Discover More'} />
        </div>
        <div className='image-container'>
          <img src={heroImage} alt='silhouette of a man' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
