import { SvgProps } from '../models/svg-props';

export const SvgFlashOff = (props: SvgProps) => {
  const { className, width, height } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={`${height}px`}
      viewBox='0 -960 960 960'
      width={`${width}px`}
      className={className}
    >
      <path d='M280-880h400l-80 280h160L643-431l-57-57 22-32h-54l-47-47 67-233H360v86l-80-80v-86ZM400-80v-320H280v-166L55-791l57-57 736 736-57 57-241-241L400-80Zm73-521Z' />
    </svg>
  );
};
