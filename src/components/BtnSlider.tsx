import React from "react";
import "../assets/css/Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

interface BtnSliderParams {
  direction: string;
  moveSlide: () => void;
}

export default function BtnSlider({direction, moveSlide} : BtnSliderParams ) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt='' />
    </button>
  );
}
