import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { desktop } from "../utils/Responsive";
import { css } from "@emotion/react";
import { ShowImg } from "../utils/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addImageProduct, addProduct } from "../Redux/cart";

const StyledDesktop = styled.div`
  display: block;

  ${desktop} {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const Select = styled.img`
  display: none;
  border-radius: 1px;

  ${desktop} {
    display: block;
    width: 88px;
    height: 88px;
    border-radius: 10px;
    cursor: pointer;
    ${(props) =>
      props.sselect
        ? css`
            border: 2px solid #ff7e1b;
            background: linear-gradient(
                0deg,
                rgba(255, 255, 255, 0.75) 0%,
                rgba(255, 255, 255, 0.75) 100%
              ),
              url(<path-to-image>), lightgray 50% / cover no-repeat;
            opacity: 0.4;
          `
        : ""}
  }
`;
function Image() {
  const dispatch = useDispatch();
  const img = useSelector((state) => state.cart.how);
  const [selected, setSelected] = useState(1);
  const images = [
    {
      id: 1,
      selected: false,
    },
    {
      id: 2,
      selected: false,
    },
    {
      id: 3,
      selected: false,
    },
    {
      id: 4,
      selected: false,
    },
  ];
  const search = () => {
    const newImg = images.find((i) => i.id === img);
    dispatch(addImageProduct(newImg.id));
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <StyledDesktop>
        <img
          onClick={() => ShowImg()}
          className="w-[445px] h-[445px] rounded-[15px] cursor-pointer"
          src={`product${img}-big.jpg`}
          alt=""
        />

        <div className="flex   gap-[31px]">
          {images.map((i) => (
            <Select
              key={i.id}
              onClick={() => dispatch(addImageProduct(i.id))}
              className="hover:opacity-[0.6]"
              sselect={i.id === img}
              src={`product${i.id}-small.jpg`}
            />
          ))}
        </div>
      </StyledDesktop>
    </>
  );
}

export default Image;
