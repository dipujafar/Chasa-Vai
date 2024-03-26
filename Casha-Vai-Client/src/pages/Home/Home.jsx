import Banner from "./Banner";
import IotTechnology from "./IotTechnology";
import OurGoods from "./OurGoods";

const Home = () => {
  return (
    <div className="space-y-5 md:space-y-10">
      <Banner></Banner>
      <OurGoods></OurGoods>
      <IotTechnology></IotTechnology>
    </div>
  );
};

export default Home;
