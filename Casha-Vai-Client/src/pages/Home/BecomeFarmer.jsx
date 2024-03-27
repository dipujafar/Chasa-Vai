import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../shared/Container";
import { useEffect } from "react";
import Aos from "aos";
import farmer from "../../assets/image/farmer1.jpg";
import bgImg from "../../assets/image/aboutBg.png"

const BecomeFarmer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="w-full bg-cover  py-2 rounded">
      <Container>
        <SectionTitle heading={"Become a farmer"} subHeading={"Apply to be a farmer in FarmEr and received our services. "}></SectionTitle>

        <div className="mt-5 flex flex-col md:flex-row  justify-center items-center gap-5 md:gap-16">
          <div className="w-1/2">
            <img
              src={farmer}
              alt="teacherImg"
              className="lg:h-72 w-full"
              data-aos="fade-right"
              data-aos-duration="2000"
            />
          </div>
          <div className="flex-1  max-w-md">
            <h1 className="text-3xl font-medium mb-5">
              Join with us be a smart farmer
            </h1>
            <p>
            Join FramEr unleash your farming potential with IoT solutions. Sell produce, connect with fellow farmers, and solve challenges. Embrace innovation. Empowerment awaits. Welcome to the future of farming.
            </p>
            <Link to="/beFarmer">
              <button className="mt-3 btn text-white bg-gradient-to-r from-pink-500 to-pink-700 space-y-5 md:space-y-10">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BecomeFarmer;
