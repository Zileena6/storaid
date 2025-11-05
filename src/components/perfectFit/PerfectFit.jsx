import { Link } from 'react-router-dom';
import Button from '../Button';

const PerfectFit = () => {
  return (
    <section className='section-container'>
      <div className='content-container'>
        <h3 className='title'>
          Looking for Secure and Flexible Storage? Find Your Perfect Fit With
          Us.
        </h3>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
        <Link to='/booking'>
          <Button btnText={'book now'} variant='dark-bg' />
        </Link>
      </div>
    </section>
  );
};
export default PerfectFit;
