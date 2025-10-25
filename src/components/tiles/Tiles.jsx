import { aboutTiles } from './tileContent';

const Tiles = () => {
  return (
    <>
      {aboutTiles.map(({ i, title, description }) => (
        <div key={i} className='tiles-container'>
          <h5 className='title'>{title}</h5>
          <p className='description'>{description}</p>
        </div>
      ))}
    </>
  );
};
export default Tiles;
