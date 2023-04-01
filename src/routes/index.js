import { lazy } from "react";

const Login = lazy(() => import("../components/auth/Login.jsx"));
const Register = lazy(() => import("../components/auth/Register.jsx"));
const Landing = lazy(() => import("../components/public/Landing.jsx"));
const NotFound = lazy(() => import("../components/public/NotFound.jsx"));
const Products = lazy(() => import("../components/products/Product.jsx"));
const ProductsDetail = lazy(() =>
  import("../components/products/ProductDetail.jsx")
);

export const routes = [
  { name: "Landing", path: "/", component: Landing },
  { name: "Login", path: "/signin", component: Login },
  { name: "Register", path: "/signup", component: Register },
  { name: "Products", path: "/products", component: Products },
  {
    name: "ProductsDetail",
    path: "/product-detail",
    component: ProductsDetail,
  },
  { name: "NotFound", path: "*", component: NotFound },
];
