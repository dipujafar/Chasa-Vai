import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../shared/Container";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Review = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("Reviews.json");
      return res?.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }
  return (
    <Container>
      <SectionTitle
        heading={"What they say"}
        subHeading={"They review about out platform and our services."}
      ></SectionTitle>
      <div className="mt-5">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews?.map((review, inx) => (
            <SwiperSlide key={inx}>
              <div className="card bg-base-300 shadow-xl py-10 p-4 md:p-10 ">
                <div className="md:card-body max-w-3xl mx-auto mb-4 md:mb-0 ">
                  <FaQuoteLeft className="text-5xl text-gray-400 mx-auto" />
                  <p className="text-lg">{review?.review}</p>
                </div>
                <figure>
                  <img
                    src={review?.image}
                    alt="userImage"
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="">
                    <p className="ml-5 text-xl font-medium">{review?.name}</p>
                    <p className="ml-5 text-xl text-green-700 ">
                      - {review?.userCategory}
                    </p>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Review;
