import React from "react";
import "../../css/tailwind.output.css";

const LandingPage = () => {
  return (
    <div className="flex flex-row flex-no-wrap justify-around">
      <div className="w-1/4 p-8 rounded-lg shadow-xl bg-customGray text-purple-900">
        <h3 className="text-lg text-center mb-6">
          <strong>About Me</strong>
        </h3>
        <p className="text-center">
          With more than a decade of culinary experience under my belt, I like
          to think I've now found my niche. Got a sweet tooth? You've come to
          the right place. I combine my professional training with copius
          creativity, themed thinking, precise planning, and loads of love to
          ensure delivery of a five-star, personalized product, every time. We
          gon' take care of you.
        </p>
      </div>

      <div className="w-1/4">
        <div className="">Profile Picture Here</div>
      </div>

      <div className="w-1/4 p-8 rounded-lg shadow-xl bg-customGray text-purple-900">
        <h3 className="text-lg text-center mb-6">
          <strong>Details</strong>
        </h3>

        <div className="flex flex-row justify-between mb-2">
          <span>
            <strong>Name: </strong>
          </span>
          <span>LaTasha Williams</span>
        </div>

        <div className="flex flex-row justify-between mb-2">
          <span>
            <strong>Age: </strong>
          </span>
          <span>25</span>
        </div>

        <div className="flex flex-row justify-between mb-2">
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
