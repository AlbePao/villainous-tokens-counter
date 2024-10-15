import { Villain } from '../models/villain';
import { TokensCounter } from './TokensCounter';
import { UpperButtons } from './UpperButtons';

export type VillainProps = Villain & {
  onCancel: () => void;
};

export const VillainDashboard2 = (props: VillainProps) => {
  const { image, name, customToken } = props;

  return (
    <div className='w-full mx-auto md:m-auto md:max-w-[22.5rem] flex flex-col items-start md:items-center justify-start md:justify-center gap-6'>
      <div className='relative'>
        <img src={image} alt={name} width='1080' height='1080' />
        <UpperButtons />
      </div>
      <TokensCounter />
      {customToken && <TokensCounter customToken={customToken} />}
    </div>
  );
};

export const VillainDashboard = (props: VillainProps) => {
  const { image, customToken } = props;

  return (
    <div
      className='w-full mx-auto md:m-auto md:max-w-[22.5rem] flex flex-col items-start md:items-center justify-start md:justify-center    bg-contain bg-no-repeat md:min-h-[512px]'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='flex flex-col justify-center flex-grow w-full gap-4 bg-gradient-to-t from-black from-50%'>
        <UpperButtons />
        <TokensCounter />
        {customToken && <TokensCounter customToken={customToken} />}
      </div>
    </div>
  );
};
