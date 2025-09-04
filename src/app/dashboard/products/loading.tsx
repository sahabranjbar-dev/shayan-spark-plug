import React from "react";

const loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border-2 border-r-blue-600 rounded-full animate-spin w-5 h-5"></div>
    </div>
  );
};

export default loading;
