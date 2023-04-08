import React from "react";

const Partner = () => {
  return (
    <div className="container mx-auto m-10">
      <div className="grid grid-cols-2 ">
        <div>
          <h1 className="text-2xl font-bold m-5 mr-3">
            Bdesh Jobs, in trust and reliance
          </h1>
          {/* youtube video embed  */}
          <iframe
            className="rounded-xl ml-10"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/e3wpqRBmWGU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h1 className="text-2xl font-bold m-5 mr-3">Jointly Organized</h1>
          <div className="flex ml-8">
            <img
              className="bg-white p-4 h-20 w-36 shadow-md mr-5 rounded-md"
              src="https://bdesh.bdjobs.com/images/Bdjobs-logo.png"
              alt="bdjobs logo"
            />
            <img
              className="bg-white p-4 h-20 w-36 shadow-md mr-5 rounded-md"
              src="https://bdesh.bdjobs.com/images/IOM.png"
              alt="iom logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
