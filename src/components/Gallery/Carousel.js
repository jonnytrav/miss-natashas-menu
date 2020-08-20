import React, { useState } from "react";
// import Carousel, { Dots } from "@brainhubeu/react-carousel"
// import "@brainhubeu/react-carousel/lib/style.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// import Pic1 from "../../images/gallery/FullSizeRender4.jpeg";

const galleryImages = [
  "../../images/gallery/FullSizeRender4.jpeg",
  "../../images/gallery/FullSizeRender5.jpeg",
  "../../images/cookies-n-pink.jpg"
];

const GalleryCarousel = () => {
  return (
    <div>
      <Slide>
        <div className="each-slide w-full h-64">
          <div className="h-full gallery1"></div>
        </div>
        <div className="each-slide">
          <div className="gallery4"></div>
        </div>
      </Slide>
    </div>
  );
};

export default GalleryCarousel;
