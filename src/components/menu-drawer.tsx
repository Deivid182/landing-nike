import { Dialog, Transition } from '@headlessui/react';
import { navLinks } from '../constants';
import { Fragment } from 'react';
import { CloseIcon } from './icons';
interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as='div' onClose={onClose} className={'relative z-50'}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-20' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto w-screen max-sm:max-w-xs max-w-md'>
                    <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl py-6'>
                      <div className='px-4 sm:px-6'>
                        <div className='flex items-center justify-end h-12'>
                          <button
                            type='button'
                            onClick={onClose}
                            className='rounded-md 
                            bg-white 
                            flex 
                            items-center 
                            justify-center 
                            text-slate-gray 
                            hover:text-coral-red 
                            hover:focus:outline-none'
                          >
                            <CloseIcon className='w-8 h-8' />
                          </button>
                        </div>
                      </div>
                      <div className='relative flex-1 mt-6 px-4 sm:px-6'>
                        <ul className='flex flex-col gap-y-4'>
                          {navLinks.map((item) => (
                            <li key={item.href}>
                              <a
                                href={item.href}
                                className='font-montserrat 
                                font-semibold 
                                leading-normal 
                                text-2xl 
                                text-slate-gray 
                                hover:text-coral-red'
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                          <div
                            className='flex 
                          gap-2 
                          text-lg 
                          leading-normal 
                          font-medium 
                          font-montserrat 
                          max-lg:hidden 
                          wide:mr-24'
                          >
                            <a href='/'>Sign in</a>
                            <span>/</span>
                            <a href='/'>Explore now</a>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default MenuDrawer;
