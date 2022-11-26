import Router from "./pages/Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools";
import { getProductData, getCouponData } from "./api/api";
import { useQuery } from "react-query";

const GlobalStyle = createGlobalStyle`
${reset}
* {box-sizing:border-box;color: #333333;}
body{
  font-family: "Spoqa Han Sans Neo";
}
a{
  color:inherit;
  text-decoration:none;
}

`;

function App() {
  const { isLoading: isProductLoading, data: productData } = useQuery("ProductData", getProductData);
  const { isLoading: isCouponLoading, data: couponData } = useQuery("CouponData", getCouponData);
  let productProps = {
    isProductLoading,
    isCouponLoading,
    productData,
    couponData,
  };
  return (
    <>
      <GlobalStyle />
      <Router productProps={productProps} />
      <ReactQueryDevtools />
    </>
  );
}
export default App;
