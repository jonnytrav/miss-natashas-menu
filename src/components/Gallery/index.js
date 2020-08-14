import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = () => {
  return (
    <div className="border border-red-600">
      <LazyLoadImage
        src="../../images/gallery/FullSizeRender 4.jpeg"
        className="w-full h-screen"
        height={500}
      />
    </div>
  );
};

export default Gallery;
