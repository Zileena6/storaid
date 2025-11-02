import { FaRegCalendarMinus, FaArrowRight } from 'react-icons/fa6';

const BlogCard = ({
  id,
  created,
  title,
  description,
  imageUrl,
  isOpen,
  setOpenId,
}) => {
  const handleClick = () => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className='blog-card' onClick={handleClick}>
      <div className='image-container'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='content-container'>
        <div className='date-stamp'>
          <FaRegCalendarMinus />
          <p>{created}</p>
        </div>
        <h6>{title}</h6>
        <div className={`content ${isOpen ? 'no-line-clamp' : ''} `}>
          <p>{description}</p>
        </div>

        <p className='read-more'>
          Read more <FaArrowRight />
        </p>
      </div>
    </div>
  );
};
export default BlogCard;
