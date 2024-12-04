import Image from "next/image";
import SocialGroup from "../social/SocialGroup";
import ourTeamData from "@/lib/data/OurTeamData.json";
interface IOurTeamData {
  id: number;
  isActive: boolean;
  name: string;
  job: string;
  describe: string;
  photo: string;
}
const data: IOurTeamData[] = ourTeamData;

const OurTeam = () => {
  return (
    <section className="max-w-screen-2xl px-10">
      <div className="flex flex-col justify-center items-center py-20 overflow-hidden max-w-screen-xl">
        <div className="grid grid-cols-4 gap-10 place-items-center py-5 overflow-x-auto">
          {data?.slice(0, 4).map((list) => (
            <div
              className="flex flex-col justify-center text-center h-full "
              key={list.id}
            >
              <Image
                src={list.photo}
                alt="team_photo"
                width={800}
                height={800}
                className="object-center object-cover rounded-2xl h-auto w-auto"
              />
              <h2 className="text-3xl lg:text-5xl text-clean-black-10">
                {list.name}
              </h2>
              <h3 className="text-clean-black-10 lg:text-xl uppercase py-4">
                {list.job}
              </h3>
              <p className="text-clean-black-10/60 lg:text-xl max-w-sm uppercase">
                {list.describe}
              </p>
              <div className="flex flex-col items-center justify-center py-4">
                <SocialGroup />
              </div>
            </div>
          ))}
        </div>
        <section className="py-5">
          {data?.slice(0, 4).map((click) => (
            <button
              type="button"
              className={`rounded-full p-2 mx-0.5
              ${click.isActive ? "bg-clean-black-10" : "bg-clean-gray-10"}
              `}
              key={click.id}
            />
          ))}{" "}
        </section>
      </div>
    </section>
  );
};

export default OurTeam;
