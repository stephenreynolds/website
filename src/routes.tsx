import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./views/home"));

const AppRoutes = () => (
  <Suspense fallback="Loading...">
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;