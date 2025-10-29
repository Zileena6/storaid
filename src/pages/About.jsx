import AboutUs from '../components/about/AboutUs';
import SubPageHero from '../components/hero/SubPageHero';
import LogoBanner from '../components/LogoBanner';
import Marketing from '../components/marketing/Marketing';
import Newsletter from '../components/newsletter/Newsletter';
import Testimonials from '../components/testimonials/Testimonials';

const About = () => {
  return (
    <div>
      <SubPageHero id={'about'} />
      <AboutUs />
      <LogoBanner />
      <Testimonials />
      <Marketing variant={'white'} />
      <Newsletter />
    </div>
  );
};
export default About;
