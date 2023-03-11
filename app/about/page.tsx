'use client';
import { useCount, useDispatchCount } from '@/Context/store';
import Link from 'next/link';
import type { MouseEvent } from 'react';

const page = () => {
  const count = useCount();
  const dispatch = useDispatchCount();

  const handleIncrease = (event: MouseEvent<HTMLButtonElement>) =>
    dispatch({
      type: 'INCREASE',
    });
  const handleIncrease15 = (event: MouseEvent<HTMLButtonElement>) =>
    dispatch({
      type: 'INCREASE_BY',
      payload: 15,
    });

  return (
    <>
      <h1>ABOUT</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
};

export default page;
