
interface ShoeCardProps {
  imgUrl: {
    thumbnail: string
    bigShoe: string
  }
  onChange: (item: string) => void
  bigShoeImg?: string

}

const ShoeCard: React.FC<ShoeCardProps> = ({ imgUrl, onChange, bigShoeImg }) => {

  const handleClick = () => {
    if(bigShoeImg !== imgUrl.bigShoe){
      onChange(imgUrl.bigShoe)
    }
  }

  return (
    <div 
      onClick={handleClick}
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
      ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'}`}
    >
      <div className='flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgUrl.thumbnail} alt="thumbnail" width={127} height={103} className='object-contain' />
      </div>
    </div>
  )
}

export default ShoeCard