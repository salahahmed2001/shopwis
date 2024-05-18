import { Fragment, useEffect, useState } from "react";
import "./App.css";
import HomeRoutes from "./Routes/HomeRoutes";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductsRoutes from "./Routes/ProductsRoutes";
import SingleProductRoutes from "./Routes/SingleProductRoutes";
import CartRoutes from "./Routes/CartRoutes";
import LoaderComp from "./Components/loader/LoaderComp";
function App() {
  let [loader, setloader] = useState(true);
  useEffect(() => {
    setloader(false);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Fragment>
      {loader ? (
        <LoaderComp />
      ) : (
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/products" element={<ProductsRoutes />} />
          <Route path="/singleproduct/:id" element={<SingleProductRoutes />} />
          <Route path="/cartRoutes" element={<CartRoutes />} />
        </Routes>
      )}
    </Fragment>
  );
}

export default App;
