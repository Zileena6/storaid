import { heroContent } from './heroContent';

const SubPageHero = ({ id }) => {
  return (
    <section className='subpage-hero-section'>
      {heroContent
        .filter((hero) => hero.id === id)
        .map(({ id, title, description }) => (
          <div key={id} className='subpage-hero-content'>
            <h1 className='title'>{title}</h1>
            <p className='description'>{description}</p>
          </div>
        ))}
    </section>
  );
};
export default SubPageHero;
