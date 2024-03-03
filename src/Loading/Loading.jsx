import React from "react";
import Masonry from "react-masonry-css";
import '../Loading/Loading.scss';

export const Loading = () => {
  return (
    <>
      <Masonry
        breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
        className="gallery"
      >
        <div className="photo-style">
          <img src="" alt="" />
          <p></p>
        </div>
      </Masonry>
    </>
  );
};
