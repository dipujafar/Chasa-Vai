import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import CountUp from "react-countup";
import Container from "../../shared/Container";
import ScrollTrigger from "react-scroll-trigger";

const Statistics = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <Container>
      <SectionTitle
        heading={"Our statistics"}
        subHeading={"It's Show Our Impact"}
      ></SectionTitle>
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div className="mt-5">
          <div>
            <div className="stats w-full p-10 md:px-14 bg-gradient-to-r from-pink-500 to-green-700 text-white stats-vertical lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-value flex items-center justify-center">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={300}
                      duration={3}
                      delay={0}
                    ></CountUp>
                  )}{" "}
                  +
                </div>
                <div className="stat-title text-white  text-2xl">
                  Total User
                </div>
              </div>

              <div className="stat ">
                <div className="stat-value flex items-center justify-center  ">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={80}
                      duration={3}
                      delay={0}
                    ></CountUp>
                  )}{" "}
                  +
                </div>
                <div className="stat-title text-white text-2xl">
                  Registered Farmer
                </div>
              </div>

              <div className="stat">
                <div className="stat-value flex items-center justify-center  ">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={500}
                      duration={3}
                      delay={0}
                    ></CountUp>
                  )}{" "}
                  +
                </div>
                <div className="stat-title text-white text-2xl">Customers</div>
              </div>

              <div className="stat">
                <div className="stat-value flex items-center justify-center  ">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={50}
                      duration={3}
                      delay={0}
                    ></CountUp>
                  )}{" "}
                  +
                </div>
                <div className="stat-title text-white text-2xl">Analyst</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </Container>
  );
};

export default Statistics;
