import Banner from "./Banner";
import BecomeFarmer from "./BecomeFarmer";
import IotTechnology from "./IotTechnology";
import OurGoods from "./OurGoods";
import Review from "./Review";
import Statistics from "./Statistics";

const Home = () => {
  return (
    <div className="space-y-5 md:space-y-10">
      <Banner></Banner>
      <OurGoods></OurGoods>
      <IotTechnology></IotTechnology>
      <BecomeFarmer></BecomeFarmer>
      <Review></Review>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
