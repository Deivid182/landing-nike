import ServiceCard from '../components/service-card'
import { services } from '../constants'
const Services = () => {
  return (
    <section id='services' className='max-container flex justify-center flex-wrap gap-8 '>
      {services.map(service => (
        <ServiceCard
          key={service.label}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
          />
      ))}   
    </section>
  )
}

export default Services