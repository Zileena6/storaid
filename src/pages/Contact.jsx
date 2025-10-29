import FAQ from '../components/faq/FAQ';
import SubPageHero from '../components/hero/SubPageHero';
import Newsletter from '../components/newsletter/Newsletter';

const Contact = () => {
  return (
    <div>
      <SubPageHero id={'contact'} />
      {/* Get in touch */}
      {/* Find us on */}
      <FAQ />
      <Newsletter />
    </div>
  );
};
export default Contact;
