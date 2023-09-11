import { motion } from 'framer-motion';
import { useState } from 'react';
import Input from '../components/Input';

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="flex justify-center h-screen items-center flex-col gap-y-8">
      <h1 className="text-mainPurple font-bold">Hello world</h1>
      <motion.div
        className={'w-96 h-96 bg-mainPurple rounded-3xl'}
        initial={{ x: 0, y: 0, rotate: 0 }}
        animate={{
          x,
          y,
          rotate,
        }}
        transition={{ type: 'spring', delay: 0 }}
      />
      <div>
        <Input value={x} setValue={setX} min={-200} max={200} key={'input-x'} />
        <Input value={y} setValue={setY} min={-200} max={200} key={'input-y'} />
        <Input
          value={rotate}
          setValue={setRotate}
          min={-180}
          max={180}
          key={'input-rotate'}
        />
      </div>
    </div>
  );
}
