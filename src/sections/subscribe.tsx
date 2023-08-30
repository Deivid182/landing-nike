import Button from '../components/button'

const Subscribe = () => {
  return (
    <section
      className='max-container flex items-center flex-col gap-10 '
      id='contact-us'
    >
      <h3 className='leading-[68px] text-4xl w-full lg:max-w-xl font-palanquin font-bold'>
        Sign Up from
        <span className='text-coral-red'> Updates</span> & Newsletter
      </h3>
      <div className='lg:max-w-[70%] w-full flex items-center max-sm:flex-col gap-5 p-4 sm:border sm:border-slate-gray rounded-full'>
        <input type="email" placeholder='Enter your email' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button 
            label='SignUp'
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe