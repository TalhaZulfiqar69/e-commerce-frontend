import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./commons/Navbar.jsx";
import { Footer } from "./commons/Footer.jsx";
import { Loader } from "./commons/Loader.jsx";
import { routes } from "./routes/index.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes &&
            routes?.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<route.component />}
              />
            ))}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
