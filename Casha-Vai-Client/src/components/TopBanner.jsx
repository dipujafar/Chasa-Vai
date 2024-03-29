/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Container from "../shared/Container";

const TopBanner = ({ img, title, description, button, to }) => {
  return (
    <div
      className="hero  min-h-screen bg-fixed bg-cover relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Container>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="absolute md:w-full  flex items-center h-full   left-0 bottom-0 bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0.00]">
            <div className="text-white  space-y-3 md:pl-12 px-1">
              <h1 className="max-w-xl lg:text-6xl md:text-5xl text-3xl font-medium text-green-500 ">
                {title}
              </h1>
              <p className="md:text-3xl text-2xl font-medium max-w-xl mt-2 text-green-100">{description}</p>
              <div>
                {button && (
                  <Link to={to}>
                    <button className="btn text-white bg-gradient-to-r from-cyan-600 to-cyan-800 ">
                      {button}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBanner;
