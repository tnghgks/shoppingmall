import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import CartPage from "./CartPage/CartPage";
import NotFound from "./NotFound/NotFound";

const Router = () => {
  return (
    <>
      <BrowserRouter basename="/shoppingmall">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
