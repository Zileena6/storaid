import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='accordion-item'>
        <div
          className={`item-title ${isOpen ? 'active' : ''} `}
          onClick={toggleAccordion}
        >
          <p>{item.title}</p>
          <div className='icon-btn'>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        {isOpen && (
          <p className={`item-description ${isOpen ? 'active' : ''} `}>
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};
export default AccordionItem;
