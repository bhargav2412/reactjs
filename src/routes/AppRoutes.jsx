import { Routes, Route, useParams } from "react-router-dom";
import Home from "../components/ReactRouterDom/Home";
import About from "../components/ReactRouterDom/About";
import Contact from "../components/ReactRouterDom/Contact";
import Products from "../components/ReactRouterDom/Products";
import Mobiles from "../components/ReactRouterDom/Mobiles";
import Laptops from "../components/ReactRouterDom/Laptops";

function User() {
  const { id } = useParams();
  return <h1>User profile Id: {id}</h1>;
}

function NotFoundPage() {
  return <h1>404 - Page not found!</h1>;
}

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/user/:id" element={<User />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/products" element={<Products />}>
      <Route path="mobiles" element={<Mobiles />} />
      <Route path="laptops" element={<Laptops />} />
    </Route>
  </Routes>
);

export default AppRoutes;
