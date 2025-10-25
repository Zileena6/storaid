import IconBlock from '../icon/IconBlock';

const Marketing = () => {
  return (
    <section className='marketing-container'>
      <div className='marketing-content'>
        <h4 className='section-title'>Why Choose Us</h4>
        <div className='marketing-intro'>
          <h3 className='title'>Choose Us for Exceptional Storage Solutions</h3>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>
        <div className='details-content'>
          <IconBlock />
          <div className='image'></div>
        </div>
      </div>
    </section>
  );
};
export default Marketing;
