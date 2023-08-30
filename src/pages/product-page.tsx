import { star } from '../assets/icons';
import Button from '../components/button';
import { products } from '../constants';
import { useParams } from 'react-router-dom';
import { cart } from '../assets/icons';
import { formatter } from '../helpers';
import { useState } from 'react';
import { useAppDispatch } from '../state/hooks';
import { addToCart } from '../state/cart-slice';

const ProductPage = () => {
  const [count, setCount] = useState(0);

  const params = useParams();
  const product = products.find((product) => product.id === Number(params.id));

  const dispatch = useAppDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!product) return alert('Product not found');

    if(count < 1) return alert('Please enter a valid quantity');

    const productSelected = {
      id: Number(product?.id),
      name: product?.name,
      price: product?.price,
      imgURL: product?.imgURL,
      rating: product?.rating,
      count
    }

    dispatch(addToCart(productSelected));
  }

  return (
    <div className='padding flex justify-between items-center lg:items-start max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 items-center justify-center'>
        <img
          src={product?.imgURL}
          alt={product?.name}
          className='object-contain w-full h-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-semibold'>
          {product?.name}
        </h2>
        <div className='mt-8 flex justify-start gap-2.5'>
          <img src={star} alt='rating' width={24} height={24} />
          <p className='font-montserrat leading-normal text-slate-gray'>
            {product?.rating}
          </p>
        </div>
        <p className='mt-4 font-montserrat info-text text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
          quae veritatis. Saepe sed provident, fugiat quaerat, in dolores
          laborum iusto, animi hic sequi debitis?
        </p>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-4xl leading-normal'>
          {formatter.format(Number(product?.price))}
        </p>
        <div className='mt-10 flex items-center'>
          <form 
            onSubmit={onSubmit}
            className='flex flex-col gap-4'>
            <label
              className='block text-base leading-7 font-montserrat text-slate-gray'
              htmlFor='quantity'
            >
              Quantity
            </label>
            <select
              className='outline-none rounded-md p-4 border-none text-base leading-7 font-montserrat text-slate-gray text-center'
              id='cantidad'
              onChange={(e) => setCount(+e.target.value)}
            >
              <option value='0'>--Choose a quantity--</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <Button type='submit' label='Add to cart' iconUrl={cart} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
