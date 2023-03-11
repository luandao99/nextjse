'use client';
import { useGlobalContext } from '@/Context/store';
import Link from 'next/link';

const page = () => {
  //   const count = useCount();
  //   const dispatch = useDispatchCount();
  const { state } = useGlobalContext();
  console.log('🚀 ~ file: page.tsx:10 ~ Home ~ state:', state);
  //   const count = useCount();

  //   const handleIncrease = (event: MouseEvent<HTMLButtonElement>) =>
  //     dispatch({
  //       type: 'INCREASE',
  //     });
  //   const handleIncrease15 = (event: MouseEvent<HTMLButtonElement>) =>
  //     dispatch({
  //       type: 'INCREASE_BY',
  //       payload: 15,
  //     });

  return (
    <>
      <h1>ABOUT</h1>
      <p>Name: {state?.username}</p>
      {/* <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button> */}
      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
};

export default page;
