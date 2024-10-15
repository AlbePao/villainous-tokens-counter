import { Villain } from './villain';

export type VillainCardProps = Villain & {
  onClick: () => void;
};

export const VillainCard = (props: VillainCardProps) => {
  const { image, name, onClick } = props;

  return (
    <div className='flex cursor-pointer' onClick={onClick} role='button'>
      <img src={image} alt={name} width='1080' height='1080' />
    </div>
  );
};
