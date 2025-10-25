import { tileContent } from './tileContent';

const Tiles = ({ ids }) => {
  return (
    <>
      {tileContent
        .filter((tile) => ids.includes(tile.id))
        .map(({ id, title, description }) => (
          <div key={id} className='tiles-container'>
            <h5 className='title'>{title}</h5>
            <p className='description'>{description}</p>
          </div>
        ))}
    </>
  );
};
export default Tiles;
