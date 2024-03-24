import Container from "../../shared/Container";
import LoginForm from "./LoginForm";
import loginImg from "../../assets/image/signUpimg2.png"

const Login = () => {
    return (
        <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white min-h-screen  ">
        <Container>
          <div className="w-full flex flex-col gap-3 md:flex-row justify-center items-center">
            <div className="flex-1">
              <LoginForm></LoginForm>
            </div>
            <div className="flex-1">
              <img src={loginImg} alt="farmerImg" className="w-full" />
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Login;