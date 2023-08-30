
import ProductCard from '../components/product-card'
import { useAppSelector } from '../state/hooks'
import Button from '../components/button'
import { formatter } from '../helpers'
import { ItemCart } from '../state/cart-slice'

const Cart = () => {

  const { cart }  = useAppSelector(state => state)

  const total = cart.reduce((acc: number, item: ItemCart) => acc + item.price * item.count, 0)

  return (
    <div className='padding flex items-center justify-between lg:items-start max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex-1 flex flex-col gap-8 lg:gap-4 items-center justify-start'>
        {cart.length === 0 && (
          <h2 className='text-3xl font-palanquin font-semibold'>Your cart is empty</h2>
        )}
        {cart.map(item => (
          <ProductCard 
            key={item.id}
            id={item.id}
            imgURL={item.imgURL}
            name={item.name}
            price={item.price}
            rating={item.rating}
            count={item.count}
          />
        ))}
      </div>
      <div className='flex-1 flex items-center justify-between sticky top-28 '>
        <div className='bg-pale-blue p-4 rounded-md shadow-sm w-full'>
          <h2 className='text-3xl font-palanquin font-semibold'>Order Summary</h2>
          <hr className='my-4'/>
          <div className='flex items-center justify-between'>
            <p className='text-2xl font-light'>Total</p>
            <span className='text-2xl font-semibold text-slate-gray'>{formatter.format(total)}</span>
          </div>
          <hr className='my-4'/>
          <Button 
            label='Checkout'
            fullWidth
            backgroundColor='bg-black'
            textColor='text-white'
            borderColor='border-black'
            type='submit'
          />
        </div>
      </div>
    </div>
  )
}

export default Cart