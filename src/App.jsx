import React from "react";
import { Box, Tooltip } from "react-ui-essentials";
import Poster from "./components/Poster/Poster";
import FootPrint from "./Components/FootPrint/FootPrint";
import IndianFlag from "./Components/FootPrint/IndianFlag";
import { products } from "./data/products";
import ProductList from "./Components/ProductList/ProductList";
import FlexboxPlayGround from "./Components/FlexboxController/FlexboxPlayGround";

function App() {
  return (
    <Box>
      <Poster title="Flex Box Playground" width="100%" height="350px" />
      <FlexboxPlayGround />
      <Box padding="10px" backgroundColor="#f1ede9">
        <ProductList title="OTHER PRODUCTS" products={products} />
      </Box>
      <Box
        padding="5px"
        margin="5px 20px"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <FootPrint
          tag="Made In"
          flag={
            <Tooltip text="India" variant="info" position="right">
              <IndianFlag
                width="20px"
                height="20px"
                style={{ margin: "0px 4px -4px 4px" }}
              />
            </Tooltip>
          }
        />
        <FootPrint tag="Developed by" name="Ravi Teja Ladi" />
      </Box>
    </Box>
  );
}

export default App;
