import BookingUnit from '../components/bookingUnit/BookingUnit';
import FAQ from '../components/faq/FAQ';
import SubPageHero from '../components/hero/SubPageHero';
import Marketing from '../components/marketing/Marketing';
import Newsletter from '../components/newsletter/Newsletter';
import PerfectFit from '../components/perfectFit/PerfectFit';

const Booking = () => {
  return (
    <div>
      <SubPageHero id={'booking'} />
      <BookingUnit />
      <Marketing />
      <PerfectFit />
      <FAQ />
      <Newsletter />
    </div>
  );
};
export default Booking;
