import { motion, motionValue } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

type PageType = {
  url: string;
  name: string;
};

export default function Header({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const pages: PageType[] = [
    { url: '/', name: 'Romain Laurent' },
    { url: '/xp', name: 'My Experience' },
  ];
  const [headerWidth, setHeaderWidth] = useState('0vw');

  useEffect(() => {
    if (isOpen) {
      setHeaderWidth('100vw');
    } else {
      setHeaderWidth('0vw');
    }
  }, [isOpen]);

  return (
    <motion.div
      className={`flex flex-col items-center bg-black text-white h-screen fixed z-40 ${
        isOpen ? 'w-screen' : 'w-0'
      }`}
      animate={{
        width: headerWidth,
      }}
      transition={{
        type: 'Inertia',
        duration: 1,
        x: { duration: 10 },
      }}
    >
      {pages.map((page) => (
        <NavLink
          to={page.url}
          key={`url-${page.name}`}
          className={`flex-1 hover:bg-slate-800 transition duration-300 linear ${
            isOpen ? 'opacity-100 w-full' : 'opacity-0 w-0'
          }`}
        >
          {({ isActive }) => (
            <motion.span
              className={`${
                isActive ? 'text-red-500' : 'text-grey-500'
              } h-full flex items-center justify-center text-9xl`}
              initial={{
                x: '-500%',
                fontSize: '4rem',
              }}
              animate={{
                x: '0%',
                fontSize: '8rem',
              }}
            >
              {page.name}
            </motion.span>
          )}
        </NavLink>
      ))}
    </motion.div>
  );
}
