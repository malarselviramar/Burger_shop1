import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";
import Menu from "./components/home/Menu";
import DropdownMenu from "./components/layout/DropdownMenu";
import Shipping from "./components/cart/Shipping";







import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";

function App() {

  return (
    <div>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/profile" element={<Profile />} />  
        <Route path="/menu" element={<Menu />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        
      
      </Routes>
      <DropdownMenu />
      <Footer/>
    </div>
  );
}

export default App;

