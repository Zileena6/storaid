import { useEffect } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import { useState } from 'react';

const url = import.meta.env.VITE_API_TESTIMONIALS;

const Testimonials = ({ variant = null }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios(url);
        setTestimonials(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className={`testimonials-container overlay ${variant}`}>
      <div className='testimonials-intro'>
        <h4 className='section-title'>Testimonials</h4>
        <h3 className='title'>See What Our Client Have to Say</h3>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>
      <div className='review-cards'>
        {testimonials.map((testimonial) => {
          const { id, comment, rating, avatarUrl, name, companyName } =
            testimonial;
          return (
            <ReviewCard
              key={id}
              comment={comment}
              rating={rating}
              avatarUrl={avatarUrl}
              name={name}
              companyName={companyName}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Testimonials;
