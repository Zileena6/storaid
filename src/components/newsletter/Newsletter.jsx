import Button from '../Button';
import InputField from './InputField';

const Newsletter = () => {
  return (
    <section className='newsletter-container'>
      <div className='content-container'>
        <div className='text-content'>
          <h3>Subscribe Our Newsletter</h3>
          <p>
            Subscribe to our newsletter to receive early discount offers,
            updates and info
          </p>
        </div>
        <div className='subscribe-container'>
          <InputField />
          <Button btnText={'submit'} />
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
