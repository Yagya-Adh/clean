import { IiconsProps } from "@/app/types/IconsLists";

const EfficientIcon = ({ className }: IiconsProps) => {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#050505"
        d="M15 20q-3.35 0-5.675-2.325T7 12q0-3.325 2.325-5.663T15 4q3.325 0 5.663 2.338T23 12q0 3.35-2.337 5.675T15 20m1-8.4V9q0-.425-.288-.712T15 8t-.712.288T14 9v3.025q0 .2.088.388t.212.312L16.575 15q.3.3.713.3T18 15t.3-.712t-.3-.713zM3 9q-.425 0-.712-.288T2 8t.288-.712T3 7h2q.425 0 .713.288T6 8t-.288.713T5 9zm-1 4q-.425 0-.712-.288T1 12t.288-.712T2 11h3q.425 0 .713.288T6 12t-.288.713T5 13zm1 4q-.425 0-.712-.288T2 16t.288-.712T3 15h2q.425 0 .713.288T6 16t-.288.713T5 17z"
      />
    </svg>
  );
};

export default EfficientIcon;
