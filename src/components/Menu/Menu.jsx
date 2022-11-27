import arrow from "../../publick/arrowMenu.svg";
import styled from "styled-components";
import { useState } from "react";

const MenuDrop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
`;

const ArrowImage = styled.img`
  margin-left: 5px;
  margin-right: 15px;
`;

const ArrowImageDeg = styled.img`
  margin-left: 5px;
  margin-right: 15px;
  transform: rotate(180deg);
  transition: transform 0.2s ease-in-out;
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
`;

const MenuItem = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 22px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #8c939f;
`;

const Item = styled.p`
  margin-top: 18px;
`;

export const Menu = ({ menuTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuDrop onClick={() => setIsOpen(!isOpen)}>
      <MenuTitle>
        {isOpen ? (
          <ArrowImageDeg src={arrow} />
        ) : (
          <ArrowImage src={arrow} alt="" />
        )}
        {menuTitle}
      </MenuTitle>
      {isOpen ? (
        <MenuItem onClick={(event) => event.stopPropagation()}>
          <Item>Marketing</Item>
          <Item>Mobile App</Item>
        </MenuItem>
      ) : null}
    </MenuDrop>
  );
};
