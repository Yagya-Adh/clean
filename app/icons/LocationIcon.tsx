import { IiconsProps } from "../types/IconsLists";

const LocationIcon = ({ className }: IiconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#050505"
        d="M12 15q1.4 0 2.525-.687T16.3 12.5q-.875-.725-1.975-1.112T12 11t-2.325.388T7.7 12.5q.65 1.125 1.775 1.813T12 15m0-5q.825 0 1.413-.587T14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10m0 12q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
      />
    </svg>
  );
};

export default LocationIcon;
