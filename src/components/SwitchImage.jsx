import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { addImage } from "../Redux/Sneakers";

function SwitchImage() {
  const image = useSelector((state) => state.images.activeImage);
  const dispatch = useDispatch();
  const previous = () => {
    if (image == 1) {
      dispatch(addImage(4));
    }
    if (image == 2) {
      dispatch(addImage(1));
    }
    if (image == 3) {
      dispatch(addImage(2));
    }
    if (image == 4) {
      dispatch(addImage(3));
    }
  };

  const next = () => {
    if (image == 1) {
      dispatch(addImage(2));
    }
    if (image == 2) {
      dispatch(addImage(3));
    }
    if (image == 3) {
      dispatch(addImage(4));
    }
    if (image == 4) {
      dispatch(addImage(1));
    }
  };

  return (
    <>
      <div className="relative w-full block md:hidden ">
        <img
          className="max-w-full"
          src={`/product${image}-big.jg`}
          alt=""
        />
        <div className="absolute top-[45%] px-[16px]  w-full flex justify-between items-center">
          <button
            onClick={previous}
            className="w-[43px] h-[43px] hover:opacity-[0.7] rounded-[999px] bg-white flex justify-center items-center"
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-[43px] h-[43px] hover:opacity-[0.7] rounded-[999px] bg-white flex justify-center items-center"
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default SwitchImage;
