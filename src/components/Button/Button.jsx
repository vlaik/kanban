import sumIcon from "../../publick/sumIcon.svg";
import unicon from "../../publick/Union.svg";
import styled from "styled-components";

const ButtonWraper = styled.div`
  position: relative;
  height: 40px;
`;

const ButtonBlue = styled.button`
  background: #0094ff;
  border-radius: 50px;
  padding: 12px 20px 12px 44px;
  border: none;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #ffffff;
  transition: 0.2s;
  &:active {
    transition: 0.5s;
    background: #0045ff;
  }
`;

const ButtonWhite = styled.button`
  background: #fff;
  border-radius: 50px;
  padding: 12px 20px 12px 44px;
  border: none;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #8c939f;
  transition: 0.2s;
  &:active {
    transition: 0.5s;
    background: #ffb;
  }
`;

const ButtonIcon = styled.span`
  position: absolute;
  top: 12px;
  left: 27px;
`;

const ButtonIconBlue = styled.span`
  position: absolute;
  top: 10px;
  left: 27px;
`;
export const Button = ({ children, type }) => {
  switch (type) {
    case "blue":
      return (
        <ButtonWraper>
          <ButtonIconBlue>
            <img src={sumIcon} alt="sumIcon" />
          </ButtonIconBlue>
          <ButtonBlue>{children}</ButtonBlue>
        </ButtonWraper>
      );
    default:
      return (
        <ButtonWraper>
          <ButtonIcon>
            <img src={unicon} alt="union" />
          </ButtonIcon>
          <ButtonWhite>{children}</ButtonWhite>
        </ButtonWraper>
      );
  }
};
