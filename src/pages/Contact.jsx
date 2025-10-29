import ContactUs from '../components/contact/ContactUs';
import FAQ from '../components/faq/FAQ';
import SubPageHero from '../components/hero/SubPageHero';
import Newsletter from '../components/newsletter/Newsletter';

const Contact = () => {
  return (
    <div>
      <SubPageHero id={'contact'} />
      <ContactUs />
      {/* Find us on */}
      <FAQ />
      <Newsletter />
    </div>
  );
};
export default Contact;
