import Button from '../components/button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide you
          <span className='text-coral-red'> super </span>
          <span className='text-coral-red'>quality</span> shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-4 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-10'>
          <Button label='View details' />
        </div>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <img 
          src={shoe8} 
          alt="product-detail" 
          width={570}
          height={122}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
