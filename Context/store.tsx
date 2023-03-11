'use client';
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
type CounterState = any;
type actionProps = {
  type: 'UPDATE_USER';
  payload: any;
};

const userGlobalContext = createContext<CounterState>({
  state: {},
});
// export const GlobalContext = createContext(null);
const userDispatchContext = createContext<Dispatch<actionProps>>(() => null);
interface UserProviderProps {
  children: ReactNode;
  initialData: any;
}
const reducer = (state: any, action: actionProps) => {
  console.log('🚀 ~ file: store.tsx:25 ~ reducer ~ action:', action);
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        state: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${JSON.stringify(action)}`);
  }
};

export const GlobalContextProvider = ({
  children,
  initialData = { username: '', password: '' },
}: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <userDispatchContext.Provider value={dispatch}>
      <userGlobalContext.Provider value={state}>
        {children}
      </userGlobalContext.Provider>
    </userDispatchContext.Provider>
  );
};

export const useGlobalContext = () => useContext(userGlobalContext);
export const useGlobalDispatchContext = () => useContext(userDispatchContext);
// 'use client';
// import {
//   createContext,
//   Dispatch,
//   ReactNode,
//   useContext,
//   useReducer,
// } from 'react';

// type CounterState = number;
// type CounterAction =
//   | {
//       type: 'INCREASE' | 'DECREASE';
//     }
//   | {
//       type: 'INCREASE_BY';
//       payload: number;
//     };

// const CounterStateContext = createContext<CounterState>(0);
// const CounterDispatchContext = createContext<Dispatch<CounterAction>>(
//   () => null
// );

// const reducer = (state: CounterState, action: CounterAction) => {
//   console.log('🚀 ~ file: store.tsx:77 ~ reducer ~ action:', action);
//   switch (action.type) {
//     case 'INCREASE':
//       return state + 1;
//     case 'DECREASE':
//       return state - 1;
//     case 'INCREASE_BY':
//       return state + action.payload;
//     default:
//       throw new Error(`Unknown action: ${JSON.stringify(action)}`);
//   }
// };

// type CounterProviderProps = {
//   children: ReactNode;
//   initialValue?: number;
// };

// export const CounterProvider = ({
//   children,
//   initialValue = 0,
// }: CounterProviderProps) => {
//   const [state, dispatch] = useReducer(reducer, initialValue);
//   return (
//     <CounterDispatchContext.Provider value={dispatch}>
//       <CounterStateContext.Provider value={state}>
//         {children}
//       </CounterStateContext.Provider>
//     </CounterDispatchContext.Provider>
//   );
// };

// export const useCount = () => useContext(CounterStateContext);
// export const useDispatchCount = () => useContext(CounterDispatchContext);
