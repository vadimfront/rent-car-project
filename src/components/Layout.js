import React, { Suspense } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Preloader } from "./Preloader";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
