import { CloseIcon } from './icons'
import { formatter } from '../helpers'
import { useAppDispatch } from '../state/hooks'
import { removeFromCart } from '../state/cart-slice'

interface ProductCardProps {
  id: number
  imgURL: string
  price: number
  rating: number
  count: number
  name: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  id, imgURL, price, count, name
}) => {

  const dispatch = useAppDispatch()


  return (
    <div className='grid grid-cols-3 gap-4 relative'>
      <div className='flex items-center col-span-3 lg:col-span-1'>
        <img src={imgURL} alt={name} className='object-contain col-span-1 w-full h-full' />
      </div>
      <div className='flex flex-col justify-center col-span-3 lg:col-span-2 gap-4'>
        <div 
          onClick={() => dispatch(removeFromCart(id))}
          className='absolute -top-8 lg:top-0 right-0 p-2 rounded-full lg:right-4 cursor-pointer hover:bg-coral-red transition-colors hover:text-white'>
          <CloseIcon />
        </div>
        <h2 className='text-3xl font-semibold'>{name}</h2>
        <p className='text-xl font-medium text-slate-gray font-montserrat'>
          Quantity: 
          <span className='font-semibold text-coral-red'> {count}</span>
        </p>
        <p className='text-xl font-medium text-slate-gray font-montserrat'>
          Price: 
          <span className='font-semibold text-coral-red'> {formatter.format(price)}</span>
        </p>
        <p className='text-xl font-medium text-slate-gray font-montserrat'>
          Subtotal: 
          <span className='font-semibold text-coral-red'> {formatter.format(price * count)}</span>
        </p>
      </div>
    </div>
  )
}

export default ProductCard