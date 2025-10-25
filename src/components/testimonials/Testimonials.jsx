import ReviewCard from '../ReviewCard';

const Testimonials = () => {
  return (
    <section className='testimonials-container overlay'>
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
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};
export default Testimonials;
