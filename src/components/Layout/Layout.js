import React from "react";

import LayoutHeader from "../LayoutHeader/LayoutHeader.jsx";
import LayoutMain from "../LayoutMain/LayoutMain.jsx";
import LayoutFooter from "../LayoutFooter/LayoutFooter.jsx";

function Layout() {
  return (
    <div className="container mx-auto flex flex-col justify-between min-h-screen bg-gray-200 text-white">
      <LayoutHeader />
      {/* <h1 className="text-2xl font-bold text-black text-center">Leagues</h1>

            <div className="my-2 p-2 bg-gray-400 rounded">
                <label className="text-black">
                    <input type="text" className="w-28 p-1 text-black" placeholder="Search" />
                </label>
            </div> */}
      <LayoutMain />
      <LayoutFooter />
    </div>
  );
}

export default Layout;
