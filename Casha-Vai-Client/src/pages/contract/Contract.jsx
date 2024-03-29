import TopBanner from "../../components/TopBanner";
import contractBg from "../../assets/image/contractBg.jpg";
import Container from "../../shared/Container";
import ContractAddress from "./ContractAddress";
import ContractFrom from "./ContractFrom";
import bgImg from "../../assets/image/aboutBg.png";

const Contract = () => {
  return (
    <div>
      <TopBanner
        img={contractBg}
        title={"Contract Us Today"}
        description={"So that we can provide a smart solution for your needs."}
      ></TopBanner>
      <div  style={{ backgroundImage: `url(${bgImg})` }}>
      <Container>
        <div
         
          className="mt-10 flex flex-col md:flex-row"
        >
          <div className="flex-1">
            <ContractAddress></ContractAddress>
          </div>
          <div className="flex-1">
            <ContractFrom></ContractFrom>
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
};

export default Contract;
