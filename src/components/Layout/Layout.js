import React from "react";

import LayoutHeader from "../LayoutHeader/LayoutHeader.jsx";
import LayoutMain from "../LayoutMain/LayoutMain.jsx";
import LayoutFooter from "../LayoutFooter/LayoutFooter.jsx";

function Layout() {
  return (
    <div className="container mx-auto flex flex-col justify-between min-h-screen bg-gray-200 text-white">
      <LayoutHeader />
      <LayoutMain />
      <LayoutFooter />
    </div>
  );
}

export default Layout;
