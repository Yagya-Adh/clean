import { IiconsProps } from "@/app/types/IconsLists";

const SprayIcon = ({ className }: IiconsProps) => {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#050505"
        d="m9 7l1-2V4H9V2h6q.425 0 .713.288T16 3v1l-1 2h-3V5l-2 2zM8 22v-6.85q0-.275.088-.587T8.3 14L12 7h3q.35.35.675.938T16 9v13z"
      />
    </svg>
  );
};

export default SprayIcon;
