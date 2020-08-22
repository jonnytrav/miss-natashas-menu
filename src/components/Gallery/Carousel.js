import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Carousel = () => {
  return (
    <div className="h-full">
      <Slide className="h-full">
        {/* USE @APPLY FOR THESE CLASSES LATER */}
        <div className="each-slide h-64 basic-gal-img gallery-1 bg-center rounded-sm"></div>
        <div className="each-slide h-64 basic-gal-img gallery-2 bg-center rounded-sm"></div>
        <div className="each-slide h-64 basic-gal-img gallery-3 bg-center rounded-sm"></div>
        <div className="each-slide h-64 basic-gal-img gallery-4 bg-center rounded-sm"></div>
        <div className="each-slide h-64 basic-gal-img gallery-5 bg-center rounded-sm"></div>
        <div className="each-slide h-64 basic-gal-img gallery-6 bg-center rounded-sm"></div>
        <div className="each-slide h-64 basic-gal-img gallery-7 bg-center rounded-sm"></div>
        <div className="each-slide h-64 basic-gal-img gallery-8 bg-center rounded-sm"></div>
        <div className="each-slide h-64 basic-gal-img gallery-9 bg-center rounded-sm"></div>
      </Slide>
    </div>
  );
};

export default Carousel;
