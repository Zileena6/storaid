import AboutUs from '../components/about/AboutUs';
import Hero from '../components/hero/Hero';
import LogoBanner from '../components/LogoBanner';
import Marketing from '../components/marketing/Marketing';
import OurServices from '../components/services/OurServices';
import Testimonials from '../components/testimonials/testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <LogoBanner />
      <OurServices />
      <Testimonials />
      <Marketing />
    </div>
  );
};
export default Home;
