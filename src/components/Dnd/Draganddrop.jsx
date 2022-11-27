import { useState } from "react";
import styled from "styled-components";
import { DragndropColums } from "./DragndropColums";

const MainDnd = styled.div`
  height: 100%;
  width: 70%;
  background: #f5f8fa;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #222222;
`;

const DndHeader = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  height: 60px;
`;

const DndHeaderTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 25%;
`;

const DndContent = styled.div`
  display: flex;
  border: 1px solid #f3f3f3;
  width: 100%;
  height: calc(100% - 60px);
  background: #fff;
`;

export const Draganddrop = () => {
  const [newTask, setNewTask] = useState([
    {
      id: 0,
      title: "Check email",
    },
    {
      id: 1,
      title: "Compare PPC agencies and make a report for Steven",
    },
    {
      id: 2,
      title: "Meeting with Amanda (PR department)",
    },
    {
      id: 3,
      title: "Get Patrick's approval for homepage new design",
    },
  ]);
  return (
    <MainDnd>
      <DndHeader>
        <DndHeaderTitle>New task</DndHeaderTitle>
        <DndHeaderTitle>Scheduled</DndHeaderTitle>
        <DndHeaderTitle>In progress</DndHeaderTitle>
        <DndHeaderTitle>Completed</DndHeaderTitle>
      </DndHeader>
      <DndContent>
        <DragndropColums arr={newTask} />
        <DragndropColums arr={newTask} />
        <DragndropColums arr={newTask} />
        <DragndropColums arr={newTask} />
      </DndContent>
    </MainDnd>
  );
};
