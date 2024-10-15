import { useState } from 'react';
import fateOff from '../assets/flash_off.svg';
import fateOn from '../assets/flash_on.svg';
import fateIcon from '../assets/thunderstorm.svg';

export const ToggleFateToken = () => {
  const [hasFateToken, toggleFateToken] = useState(false);

  return (
    <>
      {hasFateToken && (
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
          <div className='flex items-center justify-center rounded-full shadow-lg w-36 h-36 bg-slate-50/90 shadow-yellow-500/30'>
            <img src={fateIcon} width='88' height='88' alt='Gettone Fato' />
          </div>
        </div>
      )}
      <button
        onClick={() => toggleFateToken(!hasFateToken)}
        className='absolute bottom-0 flex items-center justify-center w-16 h-16 rounded-full shadow-md bg-slate-50 active:shadow-yellow-500 right-4 shadow-yellow-500/60 active:bg-slate-100'
      >
        <img src={hasFateToken ? fateOff : fateOn} width='48' height='48' alt='Gettone Fato' />
      </button>
    </>
  );
};
