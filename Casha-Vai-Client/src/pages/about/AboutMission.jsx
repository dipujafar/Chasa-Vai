import aboutImg1 from "../../assets/image/farmar2.jpg"

const AboutMission = () => {
    return (
        <div className="mt-10 md:mt-20  flex flex-col lg:flex-row gap-5 lg:gap-10">
            <img src={aboutImg1} alt="aboutImg" className="flex-1  rounded-tr-[200px] max-h-[500px] " />
            <div className=" lg:mt-52 flex-1 text-2xl font-medium bg-lime-500 text-green-800 rounded py-20  px-2 rounded-bl-[100px]">
            <h1 className="text-center text-5xl font-medium">Our Mission</h1>
            <p className="mt-2 max-w-lg mx-auto text-center">To create a world where farmers use technology and data to build prosperous communities and farmer can sell his produce at fair price. </p>    
            </div> 
        </div>
    );
};

export default AboutMission;