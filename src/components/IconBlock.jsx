import padlock from '../../public/padlock-icon.svg';
// import duster from '../../public/duster-icon.svg';
// import moneybag from '../../public/moneybag-icon.svg';
// import clock from '../../public/clock-icon.svg';

const IconBlock = () => {
  return (
    <>
      <div className='icon-block'>
        <div className='icon'>
          <img src={padlock} alt='yellow padlock' />
        </div>
        <div className='content'>
          <h5 className='title'>Security and Safety</h5>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </>
  );
};
export default IconBlock;
