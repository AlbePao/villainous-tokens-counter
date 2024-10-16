import { useEffect } from 'react';
import { useWakeLock } from 'react-screen-wake-lock';
import { Villain } from '../models/villain';
import { TokensCounter } from './TokensCounter';
import { UpperButtons } from './UpperButtons';

export type VillainProps = Villain & {
  onCancel: () => void;
};

export const VillainDashboard = (props: VillainProps) => {
  const { image, customToken, onCancel } = props;

  const { request, release } = useWakeLock();

  useEffect(() => {
    request();

    return () => {
      release();
    };
  }, [release, request]);

  return (
    <div
      className='w-full mx-auto md:m-auto md:max-w-[22.5rem] flex flex-col items-start md:items-center justify-start md:justify-center bg-contain bg-no-repeat md:min-h-[512px]'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='flex flex-col justify-center flex-grow w-full gap-4 bg-gradient-to-t from-black from-50%'>
        <UpperButtons onCancel={onCancel} />
        <TokensCounter />
        {customToken && <TokensCounter customToken={customToken} />}
      </div>
    </div>
  );
};
