import Tiles from '../tiles/Tiles';

const OurServices = () => {
  return (
    <section className='services-container'>
      <h4 className='section-title'>Our Services</h4>
      <div className='text-content'>
        <h3 className='title'>Specialized Storage for Every Special Item</h3>

        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
      </div>
      <div className='details-container'>
        <div className='detail-content'>
          <Tiles ids={[3, 4]} />
        </div>
        <div className='image-container'>{/* Find suitable image */}</div>
        <div className='detail-content'>
          <Tiles ids={[5, 6]} />
        </div>
      </div>
    </section>
  );
};
export default OurServices;
