
import { star } from '../assets/icons'

interface ReviewCardProps {
  imgURL: string
  customerName: string
  rating: number
  feedback: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  imgURL, customerName, rating, feedback
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src={imgURL}
        alt={customerName}
        className='w-32 h-32 object-cover rounded-full'
      />
      <p className='mt-4 info-text text-center max-w-sm'>{feedback}</p>
      <div className='mt-4 flex justify-center items-center gap-2'>
        <img
          src={star}
          alt="rating"
          className='w-6 h-6 m-0 object-contain' 
        />
        <p>({rating})</p>
      </div>
      <h3 className='mt-2 font-palanquin text-3xl font-bold text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard