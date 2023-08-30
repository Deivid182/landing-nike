import Button from '../components/button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import { shoes } from '../constants';
import ShoeCard from '../components/shoe-card';
import { useState } from 'react';
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='hero'
      className='w-full flex flex-col xl:flex-row justify-center min-h-screen max-container gap-10'
    >
      <div className='relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our summer collection
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative xl:z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3 '>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop Now' iconUrl={arrowRight} />
        <div className='flex flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leadint-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className='
        relative 
        flex-1 
        flex 
        justify-center 
        items-center 
        xl:min-h-screen 
        max-xl:py-40 
        bg-primary 
        bg-hero 
        bg-cover 
        bg-center'
      >
        <img
          width={610}
          height={500}
          className='object-contain relative z-10'
          src={bigShoeImg}
          alt='big-shoe-1'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgUrl={shoe}
                onChange={(shoe: string) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
