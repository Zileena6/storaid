import quotes from '../assets/quotes.svg';
import { MdStar } from 'react-icons/md';

// TODO: Unfinished!

const ReviewCard = () => {
  return (
    <div className='review-card'>
      <div className='rating-stars'>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
      </div>

      <p className='review-post'>
        Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ut libero
        lectus, porta nec turpis sit amet, lobortis fringilla ante.
      </p>

      <div className='user-container'>
        <div className='author-info'>
          <div className='avatar'></div>

          <div className='user'>
            <h6>Aiden Harvey</h6>
            <p>customer</p>
          </div>
        </div>
        <div>
          <img src={quotes} alt='yellow quotes icon' />
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
