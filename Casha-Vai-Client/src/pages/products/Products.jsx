import TopBanner from "../../components/TopBanner";
import productBg from "../../assets/image/freshFood.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../hooks/useProducts";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import Container from "../../shared/Container";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const [products,  isLoading] = useProducts();
  const categories = [
    "vegetable",
    "fruit",
    "farmProducts",
    "fish",
    "cereals",
    "dairy",
    "other",
  ];
  const { category } = useParams();
  const initialIndx = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndx);
  const vegetable = products?.filter((item) => item.category === "vegetable");
  const fruit = products?.filter((item) => item.category === "fruit");
  const farmProducts = products?.filter(
    (item) => item.category === "farmProducts"
  );
  const fish = products?.filter((item) => item.category === "fish");
  const cereals = products?.filter((item) => item.category === "cereals");
  const dairy = products?.filter((item) => item.category === "dairy");
  const other = products?.filter((item) => item.category === "other");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>FarmEr | Products</title>
        </Helmet>
      <TopBanner
        img={productBg}
        title={"Order Fresh Food Form Direct Farmer"}
      ></TopBanner>
      <div className=" mt-5 ">
        <Container>
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="max-w-xl mx-auto">
              <Tab>Vegetable</Tab>
              <Tab>Fruits</Tab>
              <Tab>Farm Product</Tab>
              <Tab>Fish</Tab>
              <Tab>Cereals</Tab>
              <Tab>Dairy</Tab>
              <Tab>Other</Tab>
            </TabList>
            <div className="mt-10">
              <TabPanel>
                <div className="grid grid-cols-3 gap-5">
                  {vegetable?.map((product) => (
                    <ProductsCard
                      key={product?._id}
                      product={product}
                    ></ProductsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5">
                  {fruit?.map((product) => (
                    <ProductsCard
                      key={product?._id}
                      product={product}
                    ></ProductsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5">
                  {farmProducts.length ? (
                    farmProducts?.map((product) => (
                      <ProductsCard
                        key={product?._id}
                        product={product}
                      ></ProductsCard>
                    ))
                  ) : (
                    <h1 className="text-2xl min-h-[50vh] flex items-center justify-center">
                      No product available at this moment
                    </h1>
                  )}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5">
                  {fish?.map((product) => (
                    <ProductsCard
                      key={product?._id}
                      product={product}
                    ></ProductsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5">
                  {cereals?.map((product) => (
                    <ProductsCard
                      key={product?._id}
                      product={product}
                    ></ProductsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5">
                  {dairy?.map((product) => (
                    <ProductsCard
                      key={product?._id}
                      product={product}
                    ></ProductsCard>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5">
                  {other?.map((product) => (
                    <ProductsCard
                      key={product?._id}
                      product={product}
                    ></ProductsCard>
                  ))}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </Container>
      </div>
    </div>
  );
};

export default Products;
