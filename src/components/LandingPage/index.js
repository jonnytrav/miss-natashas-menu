import React from "react";
import "../../css/tailwind.output.css";

const LandingPage = () => {
  return (
    <div className="flex flex-row flex-no-wrap">
      <div className="w-1/3">
        <h3 className="">
          <strong>About Me</strong>
        </h3>
        <p>
          With more than a decade of culinary experience under my belt, I like
          to think I've now found my niche. Got a sweet tooth? You've come to
          the right place. I combine my professional training with copius
          creativity, themed thinking, precise planning, and loads of love to
          ensure delivery of a five-star, personalized product, every time. We
          gon' take care of you.
        </p>
      </div>

      <div className="w-1/3">
        <div className="">Profile Picture Here</div>
      </div>

      <div className="w-1/3">
        {/* NAME */}
        <div>
          <span>
            <strong>Name: </strong>
          </span>
          <span>LaTasha Williams</span>
        </div>
        {/* AGE */}
        <div>
          <span>
            <strong>Age: </strong>
          </span>
          <span>25</span>
        </div>
        {/* LOCATION */}
        <div>
          <span>
            <strong>Location: </strong>
          </span>
          <span>Charlotte, NC</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
