import { Route, Routes } from "react-router-dom";

import AboutUs from "../../pages/AboutUs/AboutUs";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import QandA from "../../pages/QandA/QandA";
import SignUp from "../../pages/SignUp/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="qa" element={<QandA />} />
    </Routes>
  );
};

export default AppRoutes;
