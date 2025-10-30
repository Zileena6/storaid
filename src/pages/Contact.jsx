import ContactUs from '../components/contact/ContactUs';
import FAQ from '../components/faq/FAQ';
import FindUs from '../components/findUs/FindUs';
import SubPageHero from '../components/hero/SubPageHero';
import Newsletter from '../components/newsletter/Newsletter';

const Contact = () => {
  return (
    <div>
      <SubPageHero id={'contact'} />
      <ContactUs />
      <FindUs />
      <FAQ />
      <Newsletter />
    </div>
  );
};
export default Contact;
