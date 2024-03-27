import SectionTitle from "../../components/SectionTitle";
import Container from "../../shared/Container";

const IotTechnology = () => {
  return (
    <Container>
      <SectionTitle
        heading={"IoT in Agriculture"}
        subHeading={
          "We’ve only just begun to tap the power of digital tools in improving how we farm. Here are some of the countless ways that digital farming is creating a more efficient, transparent and sustainable global food system"
        }
      ></SectionTitle>
      <div className="max-w-5xl mx-auto mt-5">
        <div className="carousel w-full min-h-screen md:h-[500px] overflow-y-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <div></div>
            <img
              src="https://i.ibb.co/xMNkwXy/image-gal-01-RETOUCH.jpg"
              className="w-full h-5/6"
            />
            <div className="absolute -bottom-40 md:bottom-10 md:right-0 max-w-xl  px-10 md:px-24 py-5 text-white bg-gradient-to-r from-green-700 to-green-950  md:rounded-tl-full lg:text-xl">
              <p>
                Specialized robots are being developed to provide farmers with
                labor-saving automation, from working together to plant seeds,
                tend fields, and even selectively harvest fruits at the perfect
                time.{" "}
              </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-0 right-0 bottom-8 ">
              <a href="#slide4" className="btn btn-circle bg-pink-500 mr-3">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-pink-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/7YW2L6h/image-gal-02-RETOUCH.jpg"
              className="w-full h-5/6"
            />
            <div className="absolute -bottom-40 md:bottom-10 md:right-0 max-w-xl  px-10 md:px-24 py-5 text-white bg-gradient-to-r from-green-700 to-green-950  md:rounded-tl-full lg:text-xl">
              <p>
                By providing the ability to pinpoint the location, prevalence,
                and manner of crop pests, digital tools enable precision crop
                protection strategies which saves time, cuts costs, and reduces
                agriculture’s impact on the environment.
              </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-0 right-5 bottom-12 md:bottom-8 ">
              <a href="#slide1" className="btn btn-circle bg-pink-500 mr-3">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-pink-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/WsK4Vjt/image-gal-03-RETOUCH3.jpg"
              className="w-full h-5/6"
            />
            <div className="absolute -bottom-40 md:bottom-10 md:right-0 max-w-xl  px-10 md:px-24 py-5 text-white bg-gradient-to-r from-green-700 to-green-950 md:rounded-tl-full  lg:text-xl">
              <p>
                Ongoing advancements in data analytics will continue to provide
                unprecedented insights that enable farmers to make more informed
                and sustainable decisions, like pinpointing the perfect time to
                plant crops to maximize their growth potential.
              </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-0 right-5 bottom-12 md:bottom-8">
              <a href="#slide2" className="btn btn-circle bg-pink-500 mr-3">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-pink-500">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/yyXrMqd/image-gal-04.jpg"
              className="w-full h-5/6"
            />
            <div className="absolute -bottom-40 md:bottom-10 md:right-0 max-w-xl  px-10 md:px-24 py-5 text-white bg-gradient-to-r from-green-700 to-green-950  md:rounded-tl-full lg:text-xl">
              <p>
                With tracking tools that help monitor the food supply chain,
                digital technologies are improving food security while also
                providing everyday consumers with the ability to see exactly how
                and where their food is grown.
              </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-0 right-5 bottom-8 ">
              <a href="#slide3" className="btn btn-circle bg-pink-500 mr-3">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-pink-500">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IotTechnology;
