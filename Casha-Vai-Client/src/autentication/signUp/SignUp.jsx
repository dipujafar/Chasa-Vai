import SignUpForm from "./SignUpForm";
import signImg from "../../assets/image/signImg2.png";
import Container from "../../shared/Container";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  return (
    <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white min-h-screen  ">
      <Helmet>
        <title>FarmEr | SignUp</title>
        </Helmet>
      <Container>
        <div className="w-full flex flex-col lg:flex-row gap-3 justify-center items-center">
          <div className="flex-1">
            <SignUpForm></SignUpForm>
          </div>
          <div className="flex-1">
            <img src={signImg} alt="farmerImg" className="w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
