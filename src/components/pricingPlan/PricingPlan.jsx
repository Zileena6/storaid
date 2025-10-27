import PriceList from './PriceList';

const PricingPlan = () => {
  return (
    <section className='pricing-plan-container'>
      <h4 className='section-title'>Pricing Plan</h4>
      <h3 className='title'>Find the Perfect Plan for Your Storage Needs</h3>

      <div className='price-cards-container'>
        <PriceList />
        <PriceList />
        <PriceList />
        <PriceList />
      </div>
    </section>
  );
};
export default PricingPlan;
