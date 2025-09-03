import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <h1>
        <Navbar />
        <Outlet />
      </h1>
    </div>
  );
}
