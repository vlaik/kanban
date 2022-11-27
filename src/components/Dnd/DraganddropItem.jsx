import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #abe9ce;
  border-radius: 8px;
  cursor: pointer;
  padding: 15px;
`;

export const DraganddropItem = ({ id, children }) => {
  return <Container id={id}>{children}</Container>;
};
