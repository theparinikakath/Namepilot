import React from "react";
import notFoundImage from "../assets/404.png"; // adjust path if needed

const NotFound = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-white">
      <img
        src={notFoundImage}
        alt="404 Not Found"
        className="max-h-[60vh] w-auto object-contain"
      />
    </div>
  );
};

export default NotFound;
