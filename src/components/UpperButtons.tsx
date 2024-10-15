import { ExitButton } from './ExitButton';
import { ToggleFateToken } from './ToggleFateToken';

type UpperButtonsProps = {
  onCancel: () => void;
};

export const UpperButtons = (props: UpperButtonsProps) => {
  const { onCancel } = props;

  return (
    <div className='relative w-full h-40'>
      <ExitButton onCancel={onCancel} />
      <ToggleFateToken />
    </div>
  );
};
