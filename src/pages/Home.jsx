import AboutUs from '../components/about/AboutUs';
import Hero from '../components/hero/Hero';
import LogoBanner from '../components/LogoBanner';
import OurServices from '../components/services/OurServices';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <LogoBanner />
      <OurServices />
    </div>
  );
};
export default Home;
