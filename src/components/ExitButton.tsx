import { useState } from 'react';
import { SvgCheck } from './SvgCheck';
import { SvgClose } from './SvgClose';

export const ExitButton = () => {
  const [confirmOpened, toggleConfirm] = useState(false);

  return (
    <>
      {confirmOpened && (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-neutral-900/90 '>
          <div className='flex flex-col items-center justify-center w-11/12 p-8 shadow-lg max-w-96 rounded-3xl bg-neutral-900/90 shadow-yellow-500/30'>
            <div className='mb-6 text-2xl text-center text-slate-50'>
              Se esci, i progressi del tuo cattivo andranno perduti.
              <br />
              Confermi di volere uscire?
            </div>
            <div className='flex flex-row justify-around w-full'>
              <button
                onClick={() => toggleConfirm(false)}
                className='flex items-center justify-center w-16 h-16 border rounded-full shadow-md bg-gray-950 left-4 shadow-red-500/60 active:shadow-red-500 border-red-600/40 active:border-red-600/60'
              >
                <SvgClose width='48' height='48' className='fill-red-800' />
              </button>
              <button
                onClick={() => toggleConfirm(true)}
                className='flex items-center justify-center w-16 h-16 border rounded-full shadow-md bg-gray-950 left-4 shadow-green-500/60 active:shadow-green-500 border-green-600/40 active:border-green-600/60'
              >
                <SvgCheck width='48' height='48' className='fill-green-800' />
              </button>
            </div>
          </div>
        </div>
      )}
      {/* TODO: open confirm dialog */}
      <button
        onClick={() => toggleConfirm(true)}
        className='absolute bottom-0 flex items-center justify-center w-16 h-16 border rounded-full shadow-md bg-gray-950 left-4 shadow-red-500/60 active:shadow-red-500 border-red-600/40 active:border-red-600/60'
      >
        <SvgClose width='48' height='48' className='fill-red-800' />
      </button>
    </>
  );
};
