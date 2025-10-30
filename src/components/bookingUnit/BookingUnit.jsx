import Button from '../Button';

const BookingUnit = () => {
  return (
    <section className='booking-container'>
      <h4 className='section-title'>Booking Unit</h4>
      <div className='content-container '>
        <h3 className='title'>
          Book Your Storage Unit Now & Simplify Your Life!
        </h3>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>
      <div className='booking-unit-container'>
        <div className='image-container'></div>
        <div className='form-container'>
          <form action=''>
            <div className='form-group'>
              <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                  your name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Your Name'
                  className='form-input'
                />
              </div>
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
            </div>
            <div className='form-row'>
              <label htmlFor='unit' className='form-label'>
                Choose Unit
              </label>
              <input
                type='text'
                id='unit'
                placeholder='Choose Unit'
                className='form-input'
              />
            </div>
            <div className='message-container'>
              <label htmlFor='message' className='form-label'>
                Storage purpose
              </label>
              <textarea
                id='message'
                rows={5}
                placeholder='Describe your storage purpose so that we can match your request'
                className='form-message'
              ></textarea>
            </div>

            <Button btnText={'Book Unit'} />
          </form>
        </div>
      </div>
    </section>
  );
};
export default BookingUnit;
