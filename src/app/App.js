
import {Route, Routes} from "react-router-dom";
import LogIn from "../pages/logInPage/LogIn";
import CartManage from "../pages/cartManage/CartManage";
import DashBoard from "../pages/dashBoard/DashBoard";
import ProductManage from "../pages/productManage/ProductManage";
import UserRegistration from "../pages/userRegistration/UserRegistration";
import ResponsiveAppBar from "../pages/appBar";

function App() {
  return (

      <Routes>
        <Route path="/" element={<ResponsiveAppBar />}>
          <Route index element={<DashBoard />} />
          <Route path="cart" element={<CartManage />} />
          <Route path="product" element={<ProductManage />} />
          <Route path="register" element={<UserRegistration />} />
          <Route path="logIn" element={<LogIn />} />
        </Route>
      </Routes>
  );
}

export default App;
