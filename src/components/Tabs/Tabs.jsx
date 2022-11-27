import tabsMap from "../../publick/tabsMap.svg";
import tabsFiles from "../../publick/tabsFiles.svg";
import tabsCalendar from "../../publick/tabsCalendar.svg";
import tabsNotes from "../../publick/tabsNotes.svg";
import tabsTask from "../../publick/tabsTask.svg";

import styled from "styled-components";

const TabsNav = styled.div`
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

const TabsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 14px;
  width: 100%;
  height: 50px;
  cursor: pointer;
`;
const TabsItemActive = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  cursor: pointer;
  padding-left: 14px;
  width: 95%;
  height: 50px;
  background: #fff;
  border-radius: 0px 8px 8px 0px;
  color: #0094ff;
`;
const TabsActiveLine = styled.div`
  position: absolute;
  background: #0094ff;
  border-radius: 0px 10px 10px 0px;
  height: 50px;
  width: 5px;
  top: 0;
  left: 0;
`;
export const Tabs = () => {
  return (
    <TabsNav>
      <TabsItem>
        <img src={tabsMap} alt="tabsMap" />
        <p>Roadmap</p>
      </TabsItem>
      <TabsItemActive>
        <TabsActiveLine></TabsActiveLine>
        <img src={tabsCalendar} alt="tabsMap" />
        <p>Schedule</p>
      </TabsItemActive>
      <TabsItem>
        <img src={tabsTask} alt="tabsMap" />
        <p>Tasks</p>
      </TabsItem>
      <TabsItem>
        <img src={tabsNotes} alt="tabsMap" />
        <p>Notes</p>
      </TabsItem>
      <TabsItem>
        <img src={tabsFiles} alt="tabsMap" />
        <p>Files</p>
      </TabsItem>
    </TabsNav>
  );
};
