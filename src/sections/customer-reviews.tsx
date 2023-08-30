import ReviewCard from '../components/review-card';
import { reviews } from '../constants';

const CustomerReviews = () => {
  return (
    <div className='max-container'>
      <h3 className='font-palanquin leading-normal text-4xl font-bold text-center'>
        What Our
        <span className='text-coral-red'> Customers</span> Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center text-info'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map(review => (
          <ReviewCard
            key={review.imgURL}  
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
