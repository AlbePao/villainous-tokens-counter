import { useState } from 'react';
import closeIcon from '../assets/close.svg';
import fateIcon from '../assets/thunderstorm.svg';

export const ExitButton = () => {
  const [confirmOpened, toggleConfirm] = useState(false);

  return (
    <>
      {confirmOpened && (
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
          <div className='flex items-center justify-center rounded-full shadow-lg w-36 h-36 bg-slate-50/90 shadow-yellow-500/30'>
            <img src={fateIcon} width='88' height='88' alt='Gettone Fato' />
          </div>
        </div>
      )}
      {/* TODO: open confirm dialog */}
      <button
        onClick={() => toggleConfirm(true)}
        className='absolute bottom-0 flex items-center justify-center w-16 h-16 border rounded-full shadow-md bg-gray-950 left-4 shadow-red-500/60 active:shadow-red-500 border-red-600/40 active:border-red-600/60'
      >
        <img src={closeIcon} width='48' height='48' alt='Gettone Fato' />
      </button>
    </>
  );
};
