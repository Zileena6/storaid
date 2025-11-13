import quotes from '../../assets/quotes.svg';
import { MdStar, MdStarOutline } from 'react-icons/md';

const ReviewCard = ({ comment, rating, name, companyName, avatarUrl }) => {
  return (
    <div className='review-card'>
      <div>
        <div className='rating-stars'>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}> {i < rating ? <MdStar /> : <MdStarOutline />} </span>
          ))}
        </div>

        <p className='review-post'>{comment}</p>
      </div>
      <div className='user-container'>
        <div className='author-info'>
          <div className='avatar'>
            <img src={avatarUrl} alt='' />
          </div>

          <div className='user'>
            <h6>{name}</h6>
            <p>{companyName}</p>
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
