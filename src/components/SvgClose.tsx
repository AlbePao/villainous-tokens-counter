import { SvgProps } from '../models/svg-props';

export const SvgClose = (props: SvgProps) => {
  const { className, width, height } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={`${height}px`}
      viewBox='0 -960 960 960'
      width={`${width}px`}
      className={className}
    >
      <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
    </svg>
  );
};
