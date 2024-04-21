import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useFarmer from "../../../hooks/useFarmer";
import Container from "../../../shared/Container";

const Profile = () => {
    const [isFarmer] = useFarmer();
    const [isAdmin] = useAdmin();
    const { user } = useAuth();
    return (
      <Container>
        <div className=" flex flex-col justify-center items-center gap-3">
          <img
            src={user?.photoURL}
            alt="profile_photo"
            className="rounded-full w-52 md:w-72 md:h-72"
          />
          <h1 className="text-4xl">{user?.displayName}</h1>
          <p className="text-4xl">Email : {user?.email}</p>
          {user && isFarmer && <p className="text-4xl">Role : Teacher</p>}
          {user && isAdmin && <p className="text-4xl">Role : Admin</p>}
          {user && ! isFarmer && !isAdmin && <p className="text-4xl">Role : Student</p>}
         <p className="text-4xl">Phone : N/A</p>
          
        </div>
      </Container>
    );
  };
  
  export default Profile;