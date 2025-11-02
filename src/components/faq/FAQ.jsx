import { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem';
import axios from 'axios';

const url = import.meta.env.VITE_API_FAQS;

const FAQ = () => {
  const [accordion, setAccordion] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios(url);
        setAccordion(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchFAQs();
  }, []);

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
        {accordion.map((faq) => (
          <AccordionItem
            key={faq.id}
            item={faq}
            id={faq.id}
            isOpen={openId === faq.id}
            setOpenId={setOpenId}
          />
        ))}
      </div>
    </section>
  );
};
export default FAQ;
