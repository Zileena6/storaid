import { FaChevronDown } from 'react-icons/fa6';

const FAQ = () => {
  return (
    <section className='faqs-container'>
      <div className='faqs-content'>
        <h4 className='section-title'>FAQs</h4>
        <h3 className='title'>Frequently Ask Questions</h3>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className='accordion'>
        <div className='question'>
          <p>Can I access my stored iterns anytime?</p>
          <div className='icon'>
            <FaChevronDown />
          </div>
        </div>
        {/* <div className='answer'>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast.
          </p>
        </div> */}
        <div className='question'>
          <p>Do you offer climate-controlled storage units?</p>
          <div className='icon'>
            <FaChevronDown />
          </div>
        </div>
        {/* <div className='answer'>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast.
          </p>
        </div> */}
        <div className='question'>
          <p>How long can I rent a storage unit?</p>
          <div className='icon'>
            <FaChevronDown />
          </div>
        </div>
        {/* <div className='answer'>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast.
          </p>
        </div> */}
        <div className='question'>
          <p>Can I change the size of my storage unit if I need more space?</p>
          <div className='icon'>
            <FaChevronDown />
          </div>
        </div>
        {/* <div className='answer'>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast.
          </p>
        </div> */}
        <div className='question'>
          <p>How do I pay for my storage unit?</p>
          <div className='icon'>
            <FaChevronDown />
          </div>
        </div>
        {/* <div className='answer'>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast.
          </p>
        </div> */}
      </div>
    </section>
  );
};
export default FAQ;
