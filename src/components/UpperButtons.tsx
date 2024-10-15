import { ExitButton } from './ExitButton';
import { ToggleFateToken } from './ToggleFateToken';

export const UpperButtons = () => {
  return (
    <div className='relative w-full h-40'>
      <ExitButton />
      <ToggleFateToken />
    </div>
  );
};
