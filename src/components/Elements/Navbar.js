import React from "react";

const Test = () => {
  return (
    <div className="bg-white w-full h-20 flex items-center justify-between px-20">
      <img src="/images/logo-kemenag.png" className="w-12 h-[44px]" />
      <div className="flex items-center gap-4">
        <div className="rounded-full overflow-hidden object-cover w-12 h-12">
          <img src="/images/ihwan.jpg" />
        </div>
        <p className="font-medium">IHWAN ARIFANDI</p>
      </div>
    </div>
  );
};

export default Test;
