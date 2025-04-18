import React from "react";
import "./Roadmap.scss";

function Roadmap() {

  return <>
      <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
        {["HTML", "CSS", "JS", "BootStrap", "React"].map((category, index) => (
          <div
            key={index}
            className="imgs position-relative text-white text-center"
          >
            <img
              src={`/imgs/${category.toLowerCase()}.png`}
              alt={category}
              className="w-100 h-100"
            />

            <div className="p position-absolute top-50 start-50 translate-middle fw-semibold fs-5 text-white">
              {category}
            </div>
          </div>
        ))}
      </div>
    </>
  
}

export default Roadmap;
