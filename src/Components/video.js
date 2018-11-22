// example Layout.js
import React from "react";

export default ({ src, autoPlay, loop }) => (
  <video
    style={{
      width: "100%",
      objectFit: "cover"
    }}
    autoPlay
    loop
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);
