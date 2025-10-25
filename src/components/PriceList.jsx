import { Link } from 'react-router-dom';
import Button from './Button';
import { FaCircleCheck } from 'react-icons/fa6';

const PriceList = () => {
  // TODO: unfinished!
  return (
    <div className='price-card'>
      <h5>Small Unit</h5>
      <div className='price-span'>
        <span>$</span>
        <h3>50</h3>
        <div className='month'>
          <h6>/month</h6>
        </div>
      </div>
      <p>
        Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
        suscipit.
      </p>
      <div className='line'></div>
      <ul>
        <li>
          <FaCircleCheck className='check-icon' />
          Nam nec ipsum in dolor
        </li>
        <li>
          <FaCircleCheck className='check-icon' />
          Fusce nec ligula ut arcu
        </li>
        <li>
          <FaCircleCheck className='check-icon' />
          Aliquam pulvinar arcu in
        </li>
        <li>
          <FaCircleCheck className='check-icon' />
          Duis gravida enim porta
        </li>
        <li>
          <FaCircleCheck className='check-icon' />
          Etiam eget libero non ligula
        </li>
      </ul>
      <Link to='/booking'>
        <Button btnText={'Rent Now'} />
      </Link>
    </div>
  );
};
export default PriceList;
