import bgVideo from '../../assets/video/bgVideo.mp4'

const Banner = () => {
    return (
        <div className='h-screen relative text-white'>
            <div className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-20'></div>
            <video src={bgVideo} autoPlay loop muted className='h-full w-full object-cover' ></video>
            <div className='absolute top-0 w-full h-full flex justify-center items-center '>
                <h1 className='max-w-4xl text-center text-3xl md:text-4xl lg:text-6xl font-medium'>Buy or sell goods from direct farm and crop field by FarmEr</h1>
            </div>
        </div>
    );
};

export default Banner;