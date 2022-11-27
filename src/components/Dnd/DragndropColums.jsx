import styled from "styled-components";
import { DraganddropItem } from "./DraganddropItem";

const DndContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-basis: 25%;
  padding: 40px 20px;
  border-right: 1px solid #f3f3f3;
`;
export const DragndropColums = ({arr}) => {

  return (
    <DndContentColumn>
      {arr.map((item) => (
        <DraganddropItem id={item.id} key={item.id} children={item.title} />
      ))}
    </DndContentColumn>
  );
};
