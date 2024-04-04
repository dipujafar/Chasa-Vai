import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../shared/Container";
import axios from "axios";
import { Link } from "react-router-dom";


const OurGoods = () => {
  const {data: goods = [], isLoading} = useQuery({
    queryKey:  ["goodsType"],
    queryFn: async()=>{
      const res = await axios.get('GoodsType.json');
      return res?.data
    }
  })

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
        heading={"Here are the types of goods you can sell and buy."}
        subHeading={"Order now to get all the freshest goods"}
      ></SectionTitle>
      
      <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-2 overflow-x-auto relative">
        {
          goods?.map((product,inx)=><div key={inx} className="card card-compact w-72 bg-base-100 shadow-xl">
            <Link to={`/order/${product?.name}`}>
          <figure><img src={product?.image} alt="goodsType" className="w-full h-52 " /></figure>
          <div className="absolute bg-gray-200 px-2 rounded-r-full top-0 left-0 ">
            <h2 className="card-title">{product?.name}</h2>
          </div>
          </Link>
        </div>)
        }
      </div>
    </Container>
  );
};

export default OurGoods;
