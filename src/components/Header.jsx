import React from "react";
import Container from "./Container";
import { styled } from "styled-components";
import { desktop } from "../utils/Responsive";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import BadgeAva from "./BadgeAva";

const HeaderStyle = styled.div`
  padding-top: 20px;
  margin-bottom: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10;
  left: 0;
  padding-bottom: 20px;
  padding-inline: 24px;
  background-color: white;

  ${desktop} {
    padding-bottom: 30px;
    padding-top: 43px;
    padding-inline: 165px;

    border-bottom: 1px solid #e4e9f2;
  }
`;

function Header() {
  return (
    <>
      <Container>
        <HeaderStyle>
          <MobileHeader />
          <Sidebar />
          <BadgeAva />
        </HeaderStyle>
      </Container>
    </>
  );
}

export default Header;
