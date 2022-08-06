
import {Route, Routes} from "react-router-dom";
import LogIn from "../pages/logInPage/LogIn";
import CartManage from "../pages/cartManage/CartManage";
import DashBoard from "../pages/dashBoard/DashBoard";
import ProductManage from "../pages/productManage/ProductManage";
import UserRegistration from "../pages/userRegistration/UserRegistration";

function App() {
  return (
      <Routes>
        <Route exact path='/login' element={<LogIn/>}/>
        <Route path='/cart' element={<CartManage/>}/>
        <Route path='/dashBoard' element={<DashBoard/>}/>
        <Route path='/product' element={<ProductManage/>}/>
        <Route path='/register' element={<UserRegistration/>}/>
      </Routes>
  );
}

export default App;
