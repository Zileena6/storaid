import { socialLinks } from './links';

const SocialLinks = () => {
  return (
    <div className='sociallinks'>
      <ul>
        {/* eslint-disable-next-line no-unused-vars */}
        {socialLinks.map(({ id, href, icon: Icon }) => (
          <li key={id}>
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='sociallink'
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SocialLinks;
