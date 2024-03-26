import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";

const ContractAddress = () => {
  return (
    <div className="flex flex-col gap-2 py-20 px-10 bg-base-200 md:min-h-[462px] ">
      <h1 className="mb-2 text-2xl font-medium text-green-700">FIND US</h1>
      <p className="flex text-xl gap-4 items-center">
        <FiPhoneCall /> +88018.........
      </p>
      <p className="flex text-xl gap-4 items-center">
        <AiOutlineMail /> FarmEr@gmail.com
      </p>
      <p className="flex text-xl gap-4 ">
        <MdAccessTime className="text-2xl" /> Monday, Tuesday, Thursday 8:30am - 4:30pm <br /> Wednesday 8am
        - 5pm <br /> Friday 9am - 4pm
      </p>
    </div>
  );
};

export default ContractAddress;
