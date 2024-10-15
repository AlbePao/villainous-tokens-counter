import { SvgProps } from '../models/svg-props';

export const SvgFlashOn = (props: SvgProps) => {
  const { className, width, height } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={`${height}px`}
      viewBox='0 -960 960 960'
      width={`${width}px`}
      className={className}
    >
      <path d='m480-336 128-184H494l80-280H360v320h120v144ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm80-400H360h120Z' />
    </svg>
  );
};
