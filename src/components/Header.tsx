import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

type PageType = {
  url: string;
  name: string;
};

export default function Header({
  isOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const pages: PageType[] = [
    { url: '/', name: 'Romain Laurent' },
    { url: '/xp', name: 'My Experience' },
  ];
  const [headerProps, setHeaderProps] = useState({
    left: '-100vw',
    fontVariationSettings:
      "'wght' 1000, 'wdth' 25, 'opsz' 8, 'GRAD' -200, 'XTRA' 323, 'slnt' -10",
  });

  useEffect(() => {
    if (isOpen) {
      setHeaderProps({
        left: '0vw',
        fontVariationSettings:
          "'wght' 1000, 'wdth' 151, 'opsz' 144, 'GRAD' 150, 'XTRA' 603, 'slnt' -10",
      });
    } else {
      setHeaderProps({
        left: '-100vw',
        fontVariationSettings:
          "'wght' 1000, 'wdth' 25, 'opsz' 8, 'GRAD' -200, 'XTRA' 323, 'slnt' -10",
      });
    }
  }, [isOpen]);

  return (
    <motion.div
      className={`flex flex-col items-center bg-black text-white w-screen h-screen overflow-auto absolute top-0 z-40`}
      initial={{
        left: '-100vw',
      }}
      animate={{ left: headerProps.left }}
      transition={{
        type: 'Inertia',
        duration: 1,
      }}
    >
      {pages.map((page) => (
        <NavLink
          to={page.url}
          key={`url-${page.name}`}
          className={`flex-1 hover:bg-slate-800 transition duration-300 linear w-full`}
        >
          {({ isActive }) => (
            <motion.span
              className={`h-full flex items-center justify-center text-9xl`}
              initial={{
                ...headerProps,
                color: isActive ? '#b790f5' : 'white',
              }}
              animate={{
                ...headerProps,
                color: isActive ? '#b790f5' : 'white',
              }}
              transition={{
                type: 'Inertia',
                duration: 1,
              }}
              whileHover={{
                fontVariationSettings:
                  "'wght' 1000, 'wdth' 151, 'opsz' 144, 'GRAD' 150, 'XTRA' 603, 'slnt' 0",
                color: '#b790f5',
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
