import { useState } from 'react';
import Button from '../Button';
import InputField from './InputField';
import axios from 'axios';

const url = import.meta.env.VITE_API_SUBSCRIBE;

const Newsletter = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';

    if (
      name === 'email' &&
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value)
    ) {
      error = 'Must be a valid email (eg. username@example.com)';
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Must be a valid email (eg. username@example.com)';
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
        email: '',
      });

      setMessage(res.data?.message || 'Thank you!');
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error);
      return { success: false, message: 'error.message' };
    }
  };

  // if (submitted) {
  //   return (
  //     <div className='submit-message'>
  //       <p>{message}</p>
  //       <Button btnText={'close'} onClick={handleSuccess} />
  //     </div>
  //   );
  // }

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
        <div className='form-container'>
          {submitted ? (
            <div className='submit-message'>
              <p>{message}</p>
              <Button btnText={'close'} onClick={handleSuccess} />
            </div>
          ) : (
            <form
              action={''}
              onSubmit={handleSubmit}
              className='subscribe-container'
              noValidate
            >
              <InputField
                type={'email'}
                label={<span className='visually-hidden'>email</span>}
                name={'email'}
                id={'email'}
                placeholder={'Enter email'}
                onChange={handleInputChange}
                value={formData.email}
              />
              {errors.email && (
                <span className='validation-error'>{errors.email}</span>
              )}

              <Button btnText={'submit'} type='submit' />
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
