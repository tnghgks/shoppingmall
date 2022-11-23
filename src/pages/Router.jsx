import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import NotFound from "./NotFound/NotFound";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
