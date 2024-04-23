import logo from "../assets/image/logo.png";
import moment from 'moment'
import { Link } from "react-router-dom";
import Container from "./Container";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" mt-5 md:p-10 bg-gradient-to-r from-green-700 to-green-600 space-y-5 md:space-y-10 text-neutral-content">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <aside>
            <Link to="/">
            <img src={logo} alt="" className="w-20" />
            
            <p className="md:text-xl">
              <span className="text-green-200">FramEr</span>
              
              <br />
              Delivering fresh produce and serving farmers since 2024.
            </p>
            </Link>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
            <FaXTwitter className="text-xl" />
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
        <aside className="text-center mt-4 md:text-xl">
          <p>Copyright © {moment().format("Y")} - All right reserved by  FarmEr</p>
        </aside>
      </Container>
    </footer>
  );
};

export default Footer;
