import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';
import MenuDrawer from './menu-drawer';
import { useAppSelector } from '../state/hooks';
import { CartIcon } from './icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <MenuDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <header className='padding-x py-8 header z-20 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <a href='/'>
            <img src={headerLogo} alt='header-logo' width={130} height={30} />
          </a>
          <ul className='flex-1 max-lg:hidden flex justify-center items-center gap-x-16'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-4 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
            <div className='flex gap-2'>
              <a href='/'>Sign in</a>
              <span>/</span>
              <a href='/'>Explore now</a>
            </div>
            <Link
              className='font-montserrat leading-normal text-lg font-semibold relative flex items-center rounded-full bg-black px-4 py-2'
              to={'/cart'}
            >
              <CartIcon className='' />
              <span className='ml-2 font-medium text-white'>{cart.length}</span>
            </Link>
          </div>
          <div className='max-lg:flex hidden items-center gap-x-4'>
            <Link
              className='font-montserrat leading-normal text-lg font-semibold relative flex items-center rounded-full bg-black px-4 py-2'
              to={'/cart'}
            >
              <CartIcon className='' />
              <span className='ml-2 font-medium text-white'>{cart.length}</span>
            </Link>
            <img
              onClick={() => setIsOpen(true)}
              src={hamburger}
              className='cursor-pointer'
              alt='menu-mobile'
              width={30}
              height={30}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
