import { useState } from "react";
import arrow from "../../publick/arrowblack.svg";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  height: 40px;
  background: #e1e4e7;
  border-radius: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #222222;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  position: absolute;
  width: 135px;
  bottom: -160px;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 18px 14px;
`;

const DropdownContentItem = styled.div`
  border-radius: 4px;
  padding: 12px 8px;
  &:hover {
    background: #f5f8fa;
  }
`;
const ArrowImage = styled.img`
  margin-left: 15px;
`;

const ArrowImageDeg = styled.img`
  margin-left: 15px;
  transform: rotate(180deg);
  transition: transform 0.2s ease-in-out;
`;

export const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
      {children}{" "}
      {isOpen ? (
        <ArrowImageDeg src={arrow} />
      ) : (
        <ArrowImage src={arrow} alt="" />
      )}
      {isOpen ? (
        <DropdownContent>
          <DropdownContentItem>
            <p>{children === "Filter" ? "Filter 1" : "Board view"}</p>
          </DropdownContentItem>
          <DropdownContentItem>
            <p>{children === "Filter" ? "Filter 2" : "Table view"}</p>
          </DropdownContentItem>
          <DropdownContentItem>
            <p>{children === "Filter" ? "Filter 3" : "Kanban"}</p>
          </DropdownContentItem>
        </DropdownContent>
      ) : null}
    </DropdownContainer>
  );
};
