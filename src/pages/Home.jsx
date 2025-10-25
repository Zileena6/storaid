import AboutUs from '../components/about/AboutUs';
import Hero from '../components/hero/Hero';
import LogoBanner from '../components/LogoBanner';
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
    </div>
  );
};
export default Home;
