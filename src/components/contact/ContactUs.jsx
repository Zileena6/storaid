import Button from '../Button';
import image from '../../assets/contact-personalized.jpg';
import { useState } from 'react';
import axios from 'axios';

const url = import.meta.env.VITE_API_CONTACT;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    if (name === 'name' && !/^[A-Öa-ö\s-]{2,}$/.test(value)) {
      error = 'Must be at least 2 characters long, no numbers';
    } else if (
      name === 'email' &&
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value)
    ) {
      error = 'Must be a valid email (eg. name@example.com)';
    } else if (name === 'subject' && !/^[A-Öa-ö\s-]{2,}$/.test(value)) {
      error = 'Please select a unit';
    } else if (name === 'comment' && !/^[A-Öa-ö\s-]{2,}$/.test(value)) {
      error = 'Please add a comment';
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Öa-ö\s-]{2,}$/.test(formData.name)) {
      newErrors.name = 'Must be at least 2 characters long, no numbers';
    }

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Must be a valid email (eg. name@example.com)';
    }

    if (!/^[A-Öa-ö\s-]{2,}$/.test(formData.subject)) {
      newErrors.subject = 'Please add a subject';
    }

    if (!/^[A-Öa-ö\s-]{2,}$/.test(formData.comment)) {
      newErrors.comment = 'Please add a comment';
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
        phoneNumber: '',
        subject: '',
        comment: '',
      });

      setMessage(res.data?.message || 'Thank you!');
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error);
      return { success: false, message: 'error.message' };
    }
  };

  if (submitted) {
    const [heading, ...rest] = message.split('. ');
    return (
      <div className='submit-message'>
        <h2>{heading}</h2>
        <p>{rest.join('. ')}</p>
        <Button btnText={'close'} onClick={handleSuccess} />
      </div>
    );
  }

  return (
    <section className='contact-container'>
      <div className='contact-content'>
        <h3 className='section-title'>Get in Touch</h3>
        <h4 className='title'>Get Personalized Assistance – Contact Us</h4>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
        </p>
        <div className='image-container'>
          <img src={image} alt='' />
        </div>
      </div>
      <div className='form-container'>
        <form action='' onSubmit={handleSubmit}>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              your name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your name'
              value={formData.name}
              onChange={handleInputChange}
              className='form-input'
            />
            <div className='box-of-error'>
              {errors.name && (
                <span className='validation-error'>{errors.name}</span>
              )}
            </div>
          </div>
          <div className='form-group'>
            <div className='form-row'>
              <label htmlFor='email' className='form-label'>
                email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleInputChange}
                className='form-input'
              />
            </div>
            <div className='form-row'>
              <label htmlFor='phoneNumber' className='form-label'>
                telephone
              </label>
              <input
                type='tel'
                name='phoneNumber'
                id='phoneNumber'
                placeholder='Telephone'
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className='form-input'
              />
            </div>
          </div>
          <div className='box-of-error'>
            {errors.email && (
              <span className='validation-error'>{errors.email}</span>
            )}
            {errors.phoneNumber && (
              <span className='validation-error'>{errors.phoneNumber}</span>
            )}
          </div>
          <div className='form-row'>
            <label htmlFor='subject' className='form-label'>
              subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='How can we help you?'
              value={formData.subject}
              onChange={handleInputChange}
              className='form-input'
            />
            <div className='box-of-error'>
              {errors.subject && (
                <span className='validation-error'>{errors.subject}</span>
              )}
            </div>
          </div>
          <div className='message-container'>
            <label htmlFor='comment' className='form-label'>
              Comments / Questions
            </label>
            <textarea
              id='comment'
              name='comment'
              rows={5}
              placeholder='Comments'
              value={formData.comment}
              onChange={handleInputChange}
              className='form-message'
            ></textarea>
            <div className='box-of-error'>
              {errors.comment && (
                <span className='validation-error'>{errors.comment}</span>
              )}
            </div>
          </div>
          <Button btnText={'Submit'} type='submit' />
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
