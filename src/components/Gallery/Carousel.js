import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Pic1 from "../../images/gallery/FullSizeRender4.jpeg";

const GalleryCarousel = () => {
  return (
    <div>
      <Carousel className="">
        <image src={Pic1} alt="first pic" />
        {/* <image src={} />
        <image src={} /> */}
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;
