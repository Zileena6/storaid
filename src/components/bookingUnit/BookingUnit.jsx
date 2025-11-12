import Button from '../Button';
import image from '../../assets/booking-unit.jpg';
import { useState } from 'react';
import axios from 'axios';

const url = import.meta.env.VITE_API_BOOKING;

const BookingUnit = () => {
  const [options, _setOptions] = useState([
    { id: 1, text: 'Small Unit' },
    { id: 2, text: 'Medium Unit' },
    { id: 3, text: 'Large Unit' },
    { id: 4, text: 'Executive Unit' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedUnit: '',
    purpose: '',
  });

  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';

    if (name === 'name' && !/^[A-Öa-ö\s-]{2,}$/.test(value)) {
      error = 'must be at least 2 characters long, no numbers';
    } else if (
      name === 'email' &&
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value)
    ) {
      error = 'must be a valid email (eg. name@example.com)';
    } else if (name === 'selectedUnit' && value.trim() === '') {
      error = 'Please select a unit';
    } else if (name === 'purpose' && !/^[A-Öa-ö\s-]{2,}$/.test(value)) {
      error = 'Please add a purpose';
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Öa-ö\s-]{2,}$/.test(formData.name)) {
      newErrors.name = 'must be at least 2 characters long, no numbers';
    }

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'must be a valid email (eg. name@example.com)';
    }

    if (!formData.selectedUnit || formData.selectedUnit.trim() === '') {
      newErrors.selectedUnit = 'Please select a unit';
    }

    if (!/^[A-Öa-ö\s-]{2,}$/.test(formData.purpose)) {
      newErrors.purpose = 'Please add a purpose';
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    validateField(name, value);
  };

  const handleSuccess = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    try {
      const res = await axios.post(url, formData);

      if (res.status === 200) {
        setSubmitted(true);
      }

      setFormData({
        name: '',
        email: '',
        selectedUnit: '',
        purpose: '',
      });

      setMessage(res.data?.message || 'Thank you!');
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error);
      return { success: false, message: 'error.message' };
    }
  };

  return (
    <section className='booking-container'>
      <h3 className='section-title'>Booking Unit</h3>
      <div className='content-container '>
        <h4 className='title'>
          Book Your Storage Unit Now & Simplify Your Life!
        </h4>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>
      <div className='booking-unit-container'>
        <div className='image-container'>
          <img src={image} alt='' />
        </div>
        <div className='form-container'>
          {submitted ? (
            <div className='submit-message'>
              <h6>{message}</h6>
              <Button btnText={'close'} onClick={handleSuccess} />
            </div>
          ) : (
            <form action='' onSubmit={handleSubmit}>
              <div className='form-group'>
                <div className='form-row'>
                  <label htmlFor='name' className='form-label'>
                    your name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Your Name'
                    className='form-input'
                  />
                  <div className='box-of-error'>
                    {errors.name && (
                      <span className='validation-error'>{errors.name}</span>
                    )}
                  </div>
                </div>
                <div className='form-row'>
                  <label htmlFor='email' className='form-label'>
                    email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Email'
                    className='form-input'
                  />
                  <div className='box-of-error'>
                    {errors.email && (
                      <span className='validation-error'>{errors.email}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className='form-row'>
                <label htmlFor='selectedUnit' className='form-label'>
                  Choose Unit
                </label>
                <select
                  id='selectedUnit'
                  name='selectedUnit'
                  value={formData.selectedUnit}
                  onChange={handleInputChange}
                  className='form-input'
                >
                  <option value=''>Choose Unit</option>
                  {options.map((option) => (
                    <option key={option.id} value={option.text}>
                      {option.text}
                    </option>
                  ))}
                </select>
                <div className='box-of-error'>
                  {errors.selectedUnit && (
                    <span className='validation-error'>
                      {errors.selectedUnit}
                    </span>
                  )}
                </div>
              </div>
              <div className='message-container'>
                <label htmlFor='purpose' className='form-label'>
                  Storage purpose
                </label>
                <textarea
                  id='purpose'
                  name='purpose'
                  rows={5}
                  value={formData.purpose}
                  onChange={handleInputChange}
                  placeholder='Describe your storage purpose so that we can match your request'
                  className='form-message'
                ></textarea>
                <div className='box-of-error'>
                  {errors.purpose && (
                    <span className='validation-error'>{errors.purpose}</span>
                  )}
                </div>
              </div>

              <Button btnText={'Book Unit'} type='submit' />
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default BookingUnit;
