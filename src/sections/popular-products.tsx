import PopularProductCard from '../components/popular-product-card';
import { useAppSelector } from '../state/hooks';
import { useNavigate } from 'react-router-dom';

const PopularProducts = () => {

  const navigate = useNavigate()

  const products = useAppSelector(state => state.items)

  const onClick = (id: number) => {
    navigate(`/${id}`);
  }

  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-6'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4'>
        {products.map(product => (
          <PopularProductCard
            key={product.id}
            id={product.id}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            rating={product.rating}
            onClick={onClick}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
