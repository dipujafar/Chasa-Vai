import TopBanner from "../../components/TopBanner";
import bgImg from "../../assets/image/aboutBg.jpeg";
import Container from "../../shared/Container";
import aboutBg from "../../assets/image/aboutBg.png";
import AboutUs from "./AboutUs";
import AboutMission from "./AboutMission";
import Team from "./Team";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>FarmEr | About</title>
        </Helmet>
      <TopBanner
        img={bgImg}
        title={"Who We Are"}
        description={
          "Know about our mission, vision, values how to we work and meet our team."
        }
      ></TopBanner>

      <Container>
        <div
          style={{ backgroundImage: `url(${aboutBg})` }}
          className="bg-cover"
        >
          <AboutUs></AboutUs>
          <AboutMission></AboutMission>
          <Team></Team>
        </div>
      </Container>
    </div>
  );
};

export default About;
