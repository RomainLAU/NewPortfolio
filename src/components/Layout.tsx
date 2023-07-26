import { ReactNode, useState } from 'react';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl text-white z-50 fixed"
      >
        {isOpen ? 'Fermer' : 'Ouvrir'}
      </div>
      {children}
    </div>
  );
}
