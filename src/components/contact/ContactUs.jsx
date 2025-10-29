import Button from '../Button';

const ContactUs = () => {
  return (
    <section className='contact-container'>
      <div className='contact-content'>
        <h4 className='section-title'>Get in Touch</h4>
        <h3 className='title'>Get Personalized Assistance – Contact Us</h3>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
        </p>
        <div className='image-container'></div>
      </div>
      <div className='form-container'>
        <form action=''>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              your name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Your name'
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <div className='form-row'>
              <label htmlFor='email' className='form-label'>
                email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Email'
                pattern='.+@example\.com'
                className='form-input'
              />
            </div>
            <div className='form-row'>
              <label htmlFor='phone' className='form-label'>
                telephone
              </label>
              <input
                type='tel'
                id='phone'
                placeholder='Telephone'
                pattern='[0-9]{3}-[0-9]{3} [0-9]{4}'
                className='form-input'
              />
            </div>
          </div>
          <div className='form-row'>
            <label htmlFor='subject' className='form-label'>
              subject
            </label>
            <input
              type='text'
              id='subject'
              placeholder='How can we help you?'
              className='form-input'
            />
          </div>
          <div className='message-container'>
            <label htmlFor='message' className='form-label'>
              Comments / Questions
            </label>
            <textarea
              id='message'
              rows={5}
              placeholder='Comments'
              className='form-message'
            ></textarea>
          </div>
          <Button btnText={'Submit'} />
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
