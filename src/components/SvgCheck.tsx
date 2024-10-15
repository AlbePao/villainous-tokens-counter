import { SvgProps } from '../models/svg-props';

export const SvgCheck = (props: SvgProps) => {
  const { className, width, height } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={`${height}px`}
      viewBox='0 -960 960 960'
      width={`${width}px`}
      className={className}
    >
      <path d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' />
    </svg>
  );
};
