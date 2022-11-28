import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import CartPage from "./CartPage/CartPage";
import NotFound from "./NotFound/NotFound";
import ProductDetailPage from "./ProductDetailPage/ProductDetailPage";
const Router = ({ productProps }) => {
  return (
    <>
      <BrowserRouter basename="/shoppingmall">
        <Routes>
          <Route path="/" element={<Home productProps={productProps} />} />
          <Route path="/cartpage" element={<CartPage couponData={productProps.couponData} />} />
          <Route path="/productDetail/:id" element={<ProductDetailPage productProps={productProps} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
