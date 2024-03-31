import TopBanner from "../../components/TopBanner";
import productBg from "../../assets/image/freshFood.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Products = () => {
  return (
    <div>
      <TopBanner
        img={productBg}
        title={"Order Fresh Food Form Direct Farmer"}
      ></TopBanner>
      <div className="max-w-2xl mx-auto">
        <Tabs>
          <TabList>
            <Tab>Vegetable</Tab>
            <Tab>Fruits</Tab>
            <Tab>Farm Product</Tab>
            <Tab>Fish</Tab>
            <Tab>Cereals</Tab>
            <Tab>Dairy</Tab>
            <Tab>Other</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
