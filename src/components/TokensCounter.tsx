import { useState } from 'react';
import { CustomToken } from '../models/villain';

export const TokensCounter = (props: { customToken?: CustomToken }) => {
  const { customToken } = props;
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((state) => state - 1);
  };

  const increment = () => {
    setCount((state) => state + 1);
  };

  const isDecrementDisabled = count === 0;

  const textColor = customToken?.color.text ?? 'text-yellow-500/60';
  const buttonClassBorder = customToken?.color.border ?? 'border-yellow-600/40 active:border-yellow-600/60';
  const buttonClassShadow = customToken?.color.shadow ?? 'active:shadow-yellow-500/60';
  const buttonClass = `flex items-center justify-center w-16 h-16 border-2 rounded-full shadow-inner ${buttonClassBorder} bg-gray-950 active:bg-gray-950 ${buttonClassShadow}`;

  return (
    <div className='w-full my-4'>
      <div className={`text-4xl font-semibold mb-4 text-center w-full ${textColor}`}>
        {customToken?.name ?? 'Potere'}
      </div>
      <div className='flex flex-row items-center w-full justify-evenly'>
        <button
          onClick={decrement}
          disabled={isDecrementDisabled}
          className={`${buttonClass}${isDecrementDisabled && ' opacity-50'}`}
        >
          <span className={`text-4xl font-bold ${textColor}`}>-</span>
        </button>
        <div className='flex items-center justify-center w-32 h-32 p-2 rounded-full shadow shadow-yellow-500/30 bg-gray-950'>
          <div
            className={`flex items-center justify-center w-full h-full border-8 border-double rounded-full ${buttonClassBorder}`}
          >
            <span className={`text-6xl ${textColor}`}>{count}</span>
          </div>
        </div>
        <button onClick={increment} className={buttonClass}>
          <span className={`text-4xl font-bold ${textColor}`}>+</span>
        </button>
      </div>
    </div>
  );
};
