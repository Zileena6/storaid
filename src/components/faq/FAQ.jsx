import { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem';

const FAQ = () => {
  const [accordion, setAccordion] = useState([]);

  const fetchFaq = async () => {
    const res = await fetch(
      'https://win25-jsf-assignment.azurewebsites.net/api/faqs'
    );
    const data = await res.json();
    setAccordion(data);
  };

  useEffect(() => {
    fetchFaq();
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
        {accordion.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
export default FAQ;
