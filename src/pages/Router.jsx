import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import NotFound from "./NotFound/NotFound";

const Router = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
