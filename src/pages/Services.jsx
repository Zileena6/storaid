import SubPageHero from '../components/hero/SubPageHero';
import OurServices from '../components/services/OurServices';
import Testimonials from '../components/testimonials/Testimonials';
import PerfectFit from '../components/perfectFit/PerfectFit';
import Newsletter from '../components/newsletter/Newsletter';
import FAQ from '../components/faq/FAQ';

const Services = () => {
  return (
    <div>
      <SubPageHero id={'services'} />
      <OurServices />
      <Testimonials />
      <FAQ />
      <PerfectFit />
      <Newsletter />
    </div>
  );
};
export default Services;
