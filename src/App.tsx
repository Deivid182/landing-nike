import { Hero, PopularProducts, CustomerReviews, Services, SpecialOffers, Subscribe, SuperQuality } from './sections'

const App = () => {
  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b'>
         <Hero />
      </section>
      <section className='padding'>
        <PopularProducts /> 
      </section>
      <section className='padding'>
        <SuperQuality /> 
      </section>
      <section className='padding-x'>
        <Services /> 
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
    </main>
  )
}

export default App