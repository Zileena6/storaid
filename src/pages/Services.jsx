import SubPageHero from '../components/hero/SubPageHero';
import OurServices from '../components/services/OurServices';
import Testimonials from '../components/testimonials/Testimonials';
import PerfectFit from '../components/perfectFit/PerfectFit';
import Newsletter from '../components/newsletter/Newsletter';

const Services = () => {
  return (
    <div>
      <SubPageHero id={'services'} />
      <OurServices />
      <Testimonials />
      {/* FAQs */}
      <PerfectFit />
      <Newsletter />
    </div>
  );
};
export default Services;
