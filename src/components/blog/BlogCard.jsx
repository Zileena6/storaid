import { FaRegCalendarMinus, FaArrowRight } from 'react-icons/fa6';
// TODO: Unfinished!
const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='image-container'>
        <img src='' alt='' />
      </div>
      <div className='content-container'>
        <div className='date-stamp'>
          <FaRegCalendarMinus />
          <p>August 17, 2025</p>
        </div>
        <h6>Safe and Secure: The Importance of Choosing the Right Storage</h6>
        <p className='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem
          magna. Etiam ac odio sit amet lorem…
        </p>
        <a href=''>
          Read more <FaArrowRight />
        </a>
      </div>
    </div>
  );
};
export default BlogCard;
