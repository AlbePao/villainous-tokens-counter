import { Villain } from '../models/villain';
import { TokensCounter } from './TokensCounter';
import { UpperButtons } from './UpperButtons';

export type VillainProps = Villain & {
  onCancel: () => void;
};

export const VillainDashboard = (props: VillainProps) => {
  const { image, customToken, onCancel } = props;

  return (
    <div
      className='w-full h-full flex mx-auto md:m-auto md:max-w-[22.5rem] bg-contain bg-no-repeat md:min-h-[512px]'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='mt-auto w-full gap-4 bg-gradient-to-t from-black from-50%'>
        <UpperButtons onCancel={onCancel} />
        <TokensCounter />
        {customToken && <TokensCounter customToken={customToken} />}
      </div>
    </div>
  );
};
