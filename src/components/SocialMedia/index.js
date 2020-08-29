import React from "react";
import { twitter } from "../../images/icons/twitter-logo.eps";

const SocialMedia = () => {
  return (
    <div className="h-full">
      <div>Icons for various platforms would go here.</div>
      <div className="h-64 border border-red-600">
        <img src={twitter} className="h-full" />
      </div>
    </div>
  );
};

export default SocialMedia;
