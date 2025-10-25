import AboutUs from '../components/about/AboutUs';
import Blog from '../components/blog/Blog';
import Hero from '../components/hero/Hero';
import LogoBanner from '../components/LogoBanner';
import Marketing from '../components/marketing/Marketing';
import Newsletter from '../components/newsletter/Newsletter';
import PerfectFit from '../components/perfectFit/PerfectFit';
import PricingPlan from '../components/pricingPlan/PricingPlan';
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
      <PricingPlan />
      <PerfectFit />
      <Blog />
      <Newsletter />
    </div>
  );
};
export default Home;
