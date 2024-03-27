import aboutImg1 from "../../assets/image/aboutImage1.jpeg"

const AboutUs = () => {
    return (
        <div className="mt-10 md:mt-20 flex flex-col-reverse lg:flex-row gap-5 lg:gap-10">
            <h1 className="flex-1 text-2xl font-medium">FramEr where IoT meets farming. Our platform offers cutting-edge IoT solutions for agriculture, empowering farmers to optimize their practices. Sell goods directly to consumers and engage with a supportive community to solve challenges. Join us to revolutionize farming, enhance productivity, and cultivate sustainable growth in agriculture. Welcome to FramEr, where innovation meets the soil.</h1>
            <img src={aboutImg1} alt="aboutImg" className="flex-1 w-full rounded-tr-[200px] lg:mt-28 max-h-[500px]" />
        </div>
    );
};

export default AboutUs;