/* eslint-disable react/prop-types */
const SectionTitle = ({ subHeading, heading }) => {
    return (
      <div className="max-w-2xl">
        <h1 className="text-3xl uppercase py-1 text-green-800 font-medium">{heading}</h1>
        <p className="text-lg text-gray-700 my-1">{subHeading}</p>
      </div>
    );
  };
  
  export default SectionTitle;