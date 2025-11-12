import PriceList from './PriceList';

const PricingPlan = () => {
  return (
    <section className='pricing-plan-container'>
      <h3 className='section-title'>Pricing Plan</h3>
      <h4 className='title'>Find the Perfect Plan for Your Storage Needs</h4>

      <div className='price-cards-container'>
        <PriceList />
      </div>
    </section>
  );
};
export default PricingPlan;
