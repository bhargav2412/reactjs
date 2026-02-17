import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products List</h1>
      <Link to="mobiles" className="nav-link">
        Mobiles
      </Link>{" "}
      |
      <Link to="laptops" className="nav-link">
        Laptops
      </Link>{" "}
      <Outlet />
    </div>
  );
};

export default Products;
