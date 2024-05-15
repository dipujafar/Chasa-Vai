import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";
import { imageUpload } from "../../api/image";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useFarmer from "../../hooks/useFarmer";
import { toast } from "react-toastify";
import useFarmerReq from "../../hooks/useFarmerReq";
import { useLocation, useNavigate } from "react-router-dom";

const BeFarmerForm = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isFarmer] = useFarmer();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [farmerReq] = useFarmerReq();
  const isReq = farmerReq?.find((req) => req?.email === user?.email);

  const onSubmit = async (data) => {
    const {
      name,
      farmName,
      nidNum,
      cardNum,
      experience,
      category,
      image,
      location,
    } = data || {};

    const imageFile = image[0];
    const imageData = await imageUpload(imageFile);

    const reqData = {
      name,
      email: user?.email,
      farmName,
      nidNum,
      cardNum,
      experience,
      category,
      image: imageData?.data?.url,
      location,
      status: "pending",
    };

    const res = await axiosSecure.post("/farmerReq", reqData);
    if (res?.data?.insertedId) {
      toast("Your request is pending. Please wait for approve");
      reset();
    }
  };

  if (isAdmin) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <div>
          <h1 className="text-3xl mb-2 text-center">Your are an Admin </h1>
          <p className="text-xl   text-center">
            You are not eligible for the application
          </p>
        </div>
      </div>
    );
  }

  if (isFarmer) {
    return (
      <div className=" min-h-[50vh] flex justify-center items-center">
        <div>
          <h1 className="text-3xl mb-2 text-center">
            Your are already a registered farmer
          </h1>
          <p className="text-xl   text-center">
            You are not eligible for the application
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className=" min-h-[50vh] flex justify-center items-center">
        <div>
          <h1 className="text-3xl mb-2 text-center">
            Your are not a register user. Please Login first.
          </h1>
          <p className="text-xl   text-center">
            You are not eligible for the application before login.
          </p>
          <button onClick={()=>{navigate("/login", {state: location.pathname})}} className="mt-5 btn text-white bg-gradient-to-r from-pink-500 to-pink-700 space-y-5 md:space-y-10 w-full">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <>
        {isReq?.status === "pending" ? (
          <div className="text-center text-white  p-3 bg-gray-500 text-2xl uppercase">
            Your a application is pending
          </div>
        ) : (
          ""
        )}
      </>
      <>
        {isReq?.status === "rejected" ? (
          <div className="text-center text-white  p-3 bg-gray-500 text-2xl uppercase">
            Your a application is Rejected
          </div>
        ) : (
          ""
        )}
      </>
      <div>
        <div className="mt-5 md:mt-10 md:w-3/4 bg-base-300   mx-auto border  rounded shadow-lg shadow-gray-300 p-5 ">
          <h1 className="text-2xl font-medium mb-5 uppercase text-center">
            Apply Now
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name input */}
            <div className="flex flex-col md:flex-row gap-1 mb-5 ">
              <label className="md:w-40">
                Full Name <sup className="text-red-600">*</sup> :
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                id=""
                placeholder="Your Name"
                className="w-full md:w-3/4 mx-auto py-1 px-2  rounded"
              />
            </div>
            {errors.name?.type === "required" && (
              <span className="text-red-600 ml-10">Name is required</span>
            )}

            {/* Farm Name input */}
            <div className="flex flex-col md:flex-row gap-1 mb-5 ">
              <label className="md:w-40">
                Farm Title <sup className="text-red-600">*</sup> :
              </label>
              <input
                type="text"
                name="title"
                {...register("farmName", { required: true })}
                id=""
                placeholder="Farm Name"
                className="w-full md:w-3/4 mx-auto py-1 px-2   rounded"
              />
            </div>
            {errors.title?.type === "required" && (
              <span className="text-red-600 ml-10">Farm Name is required</span>
            )}
            {/* Nid number input */}
            <div className="flex flex-col md:flex-row gap-1 mb-5 ">
              <label className="md:w-40">
                NID No. <sup className="text-red-600">*</sup> :
              </label>
              <input
                type="text"
                name="nidNum"
                {...register("nidNum", { required: true })}
                id=""
                placeholder="NID Number"
                className="w-full md:w-3/4 mx-auto py-1 px-2   rounded"
              />
            </div>
            {errors.nidNum?.type === "required" && (
              <span className="text-red-600 ml-10">NID Number is required</span>
            )}

            {/* Card Number input */}
            <div className="flex flex-col md:flex-row gap-1 mb-5 ">
              <label className="md:w-40">Card Number (if have):</label>
              <input
                type="number"
                name="cardNum"
                {...register("cardNum")}
                id=""
                placeholder="Farmer Card Number"
                className="w-full md:w-3/4 mx-auto py-1 px-2   rounded"
              />
            </div>

            {/* Location input */}
            <div className="flex flex-col md:flex-row gap-1 mb-5 ">
              <label className="md:w-40">
                Location<sup className="text-red-600">*</sup> :
              </label>
              <input
                type="text"
                name="location"
                {...register("location", { required: true })}
                id=""
                placeholder="Districts, Area/Upazilla, Word/Village"
                className="w-full md:w-3/4 mx-auto py-1 px-2  rounded"
              />
            </div>
            {errors.location?.type === "required" && (
              <span className="text-red-600 ml-10">Location is required</span>
            )}

            {/* Category input */}
            <div className="flex flex-col md:flex-row gap-1 mb-5 ">
              <label className="md:w-40">
                Type of Goods <sup className="text-red-600">*</sup> :
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full md:w-3/4 mx-auto py-1 px-2   rounded "
              >
                <option value="vegetable">vegetable</option>
                <option value="fruits">fruits</option>
                <optin value="farm_product">farm product</optin>
                <option value="fish">fish</option>
                <option value="cereals">cereals</option>
                <option value="dairy">dairy</option>
                <option value="other">other</option>
              </select>
            </div>
            {errors.category?.type === "required" && (
              <span className="text-red-600 ml-10">Category is required</span>
            )}

            {/* profile image */}
            <div className="mb-5">
              <label className="flex gap-2 items-center mb-2">
                <FaCamera className="text-2xl" />
                Profile <sup className="text-red-600">*</sup> :
              </label>
              <input
                type="file"
                name="image"
                {...register("image", { required: true })}
                id=""
                accept="image/*"
              />
            </div>
            {errors.image?.type === "required" && (
              <span className="text-red-600 ml-10">Image is required</span>
            )}

            {isReq?.status === "rejected" ? (
              <button
                className={`w-full btn bg-blue-100 btn-sm ${
                  isReq?.status === "pending" && "btn-disabled"
                }`}
              >
                <input
                  type="submit"
                  value="Request Another"
                  className="w-full"
                />
              </button>
            ) : (
              <button
                className={`w-full btn bg-blue-100 btn-sm ${
                  isReq?.status === "pending" && "btn-disabled"
                }`}
              >
                <input
                  type="submit"
                  value="Submit for review"
                  className="w-full"
                />
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BeFarmerForm;
