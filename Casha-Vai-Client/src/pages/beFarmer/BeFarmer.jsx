import TopBanner from "../../components/TopBanner";
import bg from "../../assets/image/beFarmerbg.jpg";
import BeFarmerForm from "./BeFarmerForm";
import { Helmet } from "react-helmet-async";

const BeFarmer = () => {
  return (
    <div>
        <Helmet>
        <title>FarmEr | Be A Farmer</title>
        </Helmet>
      <TopBanner
        img={bg}
        title={"Be a Smart Farmer With Us"}
        description={
          "Sell produce, connect with fellow farmers, and solve challenges. Embrace innovation. Empowerment awaits. Welcome to the future of farming."
        }
      ></TopBanner>
      <div>
        <BeFarmerForm></BeFarmerForm>
      </div>
    </div>
  );
};

export default BeFarmer;
