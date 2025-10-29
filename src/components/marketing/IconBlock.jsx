import { blockContent } from './content';

const IconBlock = () => {
  return (
    <>
      <div className='icon-blocks'>
        {blockContent.map(({ id, icon, title, description }) => (
          <div key={id} className='icon-block'>
            <div className='icon'>
              <img src={icon} alt={title} />
            </div>
            <div className='content'>
              <h5 className='title'>{title}</h5>
              <p className='description'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default IconBlock;
