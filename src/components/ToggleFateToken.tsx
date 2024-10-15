import { useState } from 'react';
import { SvgFlashOff } from './SvgFlashOff';
import { SvgFlashOn } from './SvgFlashOn';
import { SvgThunderstorm } from './SvgThunderstorm';

export const ToggleFateToken = () => {
  const [hasFateToken, toggleFateToken] = useState(false);

  const FlashIcon = hasFateToken ? SvgFlashOff : SvgFlashOn;

  return (
    <>
      {hasFateToken && (
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'>
          <div className='flex items-center justify-center rounded-full shadow-lg w-36 h-36 bg-slate-50/90 shadow-yellow-500/30'>
            <SvgThunderstorm width='88' height='88' className='fill-amber-400' />
          </div>
        </div>
      )}
      <button
        onClick={() => toggleFateToken(!hasFateToken)}
        className='absolute bottom-0 flex items-center justify-center w-16 h-16 rounded-full shadow-md bg-slate-50 active:shadow-yellow-500 right-4 shadow-yellow-500/60 active:bg-slate-100'
      >
        <FlashIcon width='48' height='48' className='fill-amber-400' />
      </button>
    </>
  );
};
