import { useForm } from "react-hook-form";
import { FaCamera } from "react-icons/fa";

const BeFarmerForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
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
            <label className="md:w-40">
            Card Number (if have):
            </label>
            <input
              type="number"
              name="cardNum"
              {...register("cardNum")}
              id=""
              placeholder="Farmer Card Number"
              className="w-full md:w-3/4 mx-auto py-1 px-2   rounded"
            />
          </div>

          {/* Experience input */}
          <div className="flex flex-col md:flex-row gap-1 mb-5 ">
            <label className="md:w-40">
              Experience <sup className="text-red-600">*</sup> :
            </label>
            <select
              {...register("experience", { required: true })}
              className="w-full md:w-3/4 mx-auto py-1 px-2   rounded "
            >
              <option value="beginner">beginner</option>
              <option value="intermediate"> intermediate</option>
              <option value="experienced">experienced</option>
            </select>
          </div>
          {errors.experience?.type === "required" && (
            <span className="text-red-600 ml-10">Experience is required</span>
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
        
            <button
              className={`w-full btn bg-gradient-to-r from-pink-500 to-pink-700 text-white btn-sm`}
            >
              <input
                type="submit"
                value="Submit for review"
                className="w-full"
              />
            </button>
        </form>
      </div>
    </div>
  );
};

export default BeFarmerForm;
