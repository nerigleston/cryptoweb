import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Criptos', href: '/', current: true },
  { name: 'Moedas', href: '/moedas', current: false },
  { name: 'Calculadora', href: '/calculadora', current: false },
  { name: 'Sobre', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const [currentNavItem, setCurrentNavItem] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentNavItem(path);
  }, []);

  return (
    <Disclosure as="nav" className="justify-center flex bg-neutral-300">
      {({ open }) => (
        <>
          <div className="to max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-star">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === currentNavItem ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        onClick={() => setCurrentNavItem(item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === currentNavItem ? 'bg-black text-white' : 'text-black hover:bg-black hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  onClick={() => setCurrentNavItem(item.href)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}