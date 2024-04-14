import React from "react";
// import logo from "../path/to/logo.png"; // Import the logo image
import { BsBrilliance } from "react-icons/bs";

export const Appbar = (props) => {
  return (
    <div className="shadow h-14 flex justify-between items-center"> {/* Updated to align items center */}
      {/* Logo and EduTech */}
      <div className="flex items-center ml-4"> {/* Updated to align items center */}
      <BsBrilliance />
        <div className="flex flex-col justify-center h-full">
          EduTech 
        </div>
      </div>
      {/* User icon */}
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          Hi
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
     
        user 
          </div>
        </div>
      </div>
    </div>
  );
};
