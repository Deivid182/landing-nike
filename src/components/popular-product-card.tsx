import { star } from '../assets/icons'
import { formatter } from '../helpers'

interface PopularProductCardProps {
  imgURL: string
  name: string
  price: number
  rating: number
  id: number
  onClick: (id: number) => void
}

const PopularProductCard: React.FC<PopularProductCardProps> = ({
  imgURL, name, price, rating, onClick, id
}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img 
        onClick={() => onClick(id)}
        src={imgURL} alt={name} className='w-[280px] h-[280px] cursor-pointer'
      />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" width={24} height={24} />
        <p className='font-montserrat leading-normal text-slate-gray'>{rating}</p>
      </div>
      <h3 className='mt-2 text-3xl leading-normal font-palanquin font-semibold'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{formatter.format(price)}</p>
    </div>
  )
}

export default PopularProductCard