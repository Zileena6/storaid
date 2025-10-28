import SubPageHero from '../components/hero/SubPageHero';
import Marketing from '../components/marketing/Marketing';
import Newsletter from '../components/newsletter/Newsletter';
import PerfectFit from '../components/perfectFit/PerfectFit';

const Booking = () => {
  return (
    <div>
      <SubPageHero id={'booking'} />
      {/* booking unit */}
      <Marketing />
      <PerfectFit />
      {/* FAQs */}
      <Newsletter />
    </div>
  );
};
export default Booking;
