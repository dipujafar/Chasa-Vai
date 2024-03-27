import TopBanner from "../../components/TopBanner";
import bgImg from "../../assets/image/aboutBg.jpeg"
import Container from "../../shared/Container";
import aboutBg from "../../assets/image/aboutBg.png"
import AboutUs from "./AboutUs";
import AboutMission from "./AboutMission";


const About = () => {
    return (
        <div>
            <TopBanner img={bgImg} title={"Who We Are"} description={"Know about our mission, vision, values how to we work and meet our team."}></TopBanner>
            <div style={{ backgroundImage: `url(${aboutBg})` }} className="bg-cover">
                <Container>
                    <AboutUs></AboutUs>
                    <AboutMission></AboutMission>
                </Container>
            </div>
        </div>
    );
};

export default About;