
import { Fragment, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "./App.css";
import "aos/dist/aos.css";
import HomeRoutes from "./Routes/HomeRoutes";
import ProductsRoutes from "./Routes/ProductsRoutes";
import SingleProductRoutes from "./Routes/SingleProductRoutes";
import CartRoutes from "./Routes/CartRoutes";
import LoaderComp from "./Components/loader/LoaderComp";
import NotFound from "./Components/notfound/NotFound";
import jwt_decode from "jwt-decode";
import LogIn from './Components/login/LogIn'
function App() {
  const [loader, setLoader] = useState(true);
  const [userData,setuserData]=useState(null)
  function saveUser() {
    let token =localStorage.getItem("token");
   let decoded= jwt_decode(token);
   setuserData(decoded)
    
  }
  function ProtectedRoute(props) {
    if (localStorage.getItem("token")) {
      return props.children
    }else{
      return <Navigate to="/login"/>
    }
  }
  function logOut(){
    localStorage.removeItem("token")
    setuserData(null)
    return <Navigate to="/login"/>
  }
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      saveUser()
    }
  },[])

  useEffect(() => {
    setLoader(false);
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
          <Route path="/home" element={<ProtectedRoute><HomeRoutes userData={userData} logOut={logOut}  /> </ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><ProductsRoutes /></ProtectedRoute>} />
          <Route path="/singleproduct/:id" element={<ProtectedRoute><SingleProductRoutes /></ProtectedRoute>} />
          <Route path="/cartRoutes" element={<ProtectedRoute><CartRoutes /></ProtectedRoute>} />
          <Route path="/login" element={<LogIn saveUser={saveUser} />} />
          <Route path="/" element={<LogIn saveUser={saveUser}/>} />
          <Route path="/*" element={<NotFound />} />
          
          
        </Routes>
      )}
    </Fragment>
  );
}

export default App;
