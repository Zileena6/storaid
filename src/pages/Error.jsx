import Button from '../components/Button';
import Newsletter from '../components/newsletter/Newsletter';

const Error = () => {
  return (
    <>
      <div className='error-container'>
        <h5>Oops!</h5>
        <h1 className='title'>page not found</h1>
        <p className='description'>
          Sorry, the page you are looking for does not exist. It may have been
          moved, removed altogether or is temporarily unavailable.
        </p>
        <Button btnText={'back to home'} />
      </div>
      <Newsletter />
    </>
  );
};
export default Error;
