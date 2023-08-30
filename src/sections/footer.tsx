import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer id='footer' className='max-contaniner'>
      <div className='flex justify-between gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col'>
          <a href='/'>
            <img src={footerLogo} alt='footer-logo' width={150} height={45} />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex mt-6 gap-4 items-center'>
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className='flex justify-center items-center bg-white rounded-full w-12 h-12'
              >
                <img src={icon.src} alt={icon.alt} className='w-6 h-6' />
              </div>
            ))}
          </div>
        </div>

        <div className='flex-1 flex justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{footerLink.title}</h4>
              <ul>
                {footerLink.links.map(link => (
                  <li
                    className='mt-3 text-white-400 font-montserrat leading-normal text-base hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex-1 flex items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="copyright-sign" className='w-6 h-6 rounded-full m-0' />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms and Conditions</p>
      </div>

    </footer>
  );
};

export default Footer;
