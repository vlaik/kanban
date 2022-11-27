import SearchIcon from "../../publick/inputIcon.svg";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const InputSearch = styled.input`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  height: 40px;
  width: 100%;
  background: #f5f8fa;
  border-radius: 50px;
  outline: none;
  border: none;
  padding: 0 16px;
`;

const InputSearchDark = styled.input`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  height: 32px;
  width: 100%;
  background: #2d4071;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 0 16px;
`;

const InputIcon = styled.span`
  position: absolute;
  bottom: 8px;
  right: 9px;
`;

const InputIconDark = styled.span`
  position: absolute;
  bottom: 5px;
  right: 9px;
`;

export const Input = ({ switchType, type, placeholder, value, onChange }) => {
  switch (switchType) {
    case "dark":
      return (
        <InputWrapper>
          <InputSearchDark
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <InputIconDark>
            <img src={SearchIcon} alt="SearchIcon" />
          </InputIconDark>
        </InputWrapper>
      );
    default:
      return (
        <InputWrapper>
          <InputSearch
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <InputIcon>
            <img src={SearchIcon} alt="SearchIcon" />
          </InputIcon>
        </InputWrapper>
      );
  }
};
