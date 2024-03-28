import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import axios from "axios";

const Team = () => {
  const { data: team = [], isLoading } = useQuery({
    queryKey: ["TeamMembers"],
    queryFn: async () => {
      const res = await axios.get("OurTeam.json");
      return res?.data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }
  return (
    <div className="mt-10">
      <SectionTitle
        heading={"Our Team"}
        subHeading={"They Lead this platform and work for smart farming "}
      ></SectionTitle>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {
            team.map((member,inx)=><div key={inx} className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={member?.image} alt="memberImage" /></figure>
            <div className="card-body">
              <h2 className="card-title">{member?.name}</h2>
              <div className="text-lg text-gray-600">
              <p>{member?.position}</p>
              <p>{member?.education}</p>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Team;
