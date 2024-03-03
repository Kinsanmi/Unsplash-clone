import React from "react";
import { Search } from "../Icon/Search";
import { Capture } from "../Icon/Capture";
import { Notify } from "../Icon/Notify";
import "../style/header.scss";

export const Header = () => {
  return (
    <>
      <header className="container">
        <img
          src="https://res.cloudinary.com/dkngsthge/image/upload/v1709333615/unsplash_k4prdl.png"
          alt="unsplash icon"
        />
        <div className="search">
          <Search />
          <input
            type="text"
            placeholder="Search high-resolution images"
            autoComplete="on"
          />
          <Capture />
        </div>

        <div className="blog">
          <a href="#">Advertise</a>
          <a href="#">Blog</a>
          <a href="#">Unsplash+</a>
          <button>Submit a photo</button>
          <Notify />
        </div>
      </header>
    </>
  );
};
