import IconBlock from '../marketing/IconBlock';
import image from '../../assets/choose-exceptional.webp';

const Marketing = ({ variant = null }) => {
  return (
    <section className={`marketing-container ${variant} `}>
      <div className='marketing-content'>
        <h3 className='section-title'>Why Choose Us</h3>
        <div className='marketing-intro'>
          <h4 className='title'>Choose Us for Exceptional Storage Solutions</h4>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>
        <div className='details-content'>
          <IconBlock />
          <div className='image'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Marketing;
