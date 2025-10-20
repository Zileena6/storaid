import padlock from '../assets/padlock-icon.svg';
// import duster from '../assets/duster-icon.svg';
// import moneybag from '../assets/moneybag-icon.svg';
// import clock from '../assets/clock-icon.svg';
// TODO: Unfinished!
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
