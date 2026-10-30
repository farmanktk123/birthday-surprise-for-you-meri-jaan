import React from "react";
import { Outlet } from "react-router-dom";
import BackgroundMusic from "./components/BackgroundMusic.jsx";

function RootLayout() {
  return (
    <>
      <BackgroundMusic />
      <Outlet />
    </>
  );
}

export default RootLayout;