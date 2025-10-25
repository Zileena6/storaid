import { socialLinks } from './socialLinks';

const SocialList = () => {
  return (
    <div className='sociallinks'>
      <ul>
        {/* eslint-disable-next-line no-unused-vars */}
        {socialLinks.map(({ i, title, href, icon: Icon }) => (
          <li key={i}>
            <a
              aria-label={title}
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
export default SocialList;
