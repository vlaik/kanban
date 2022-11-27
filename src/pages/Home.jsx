import {
  Input,
  Logo,
  Button,
  Menu,
  Avatar,
  Tabs,
  Dropdown,
  Draganddrop,
} from "../components";
import styled from "styled-components";
import notification from "../publick/notification.svg";

const MainWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #f5f8fa;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 219px;
  height: 100%;
  padding: 26px 16px 0 16px;
  background: #0f1d40;
  gap: 70px;
`;

const MenuBarConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MyWorkSpace = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position absolute;
top: 135px;
left: 0;
padding: 0 50px 0 16px;
background: #2D4071;
height: 34px;
width: 100%;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
`;

const Tools = styled.div`
  width: 155px;
  height: 100%;
  background: #f5f8fa;
`;

const TitleTools = styled.p`
  padding: 24px 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: 100%;
  gap: 5px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 20px;
  background: #fff;
`;

const ContentHeaderLeftRight = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
`;

const HeaderNotificationContainer = styled.div`
  position: relative;
`;

const HeaderNotificationValue = styled.div`
  top: -14px;
  right: -15px;
  position: absolute;
  padding: 5px 3px 5px 4px;
  background: #f21247;
  border: 1px solid #ffffff;
  border-radius: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

const HeaderNotification = styled.img`
  width: 18px;
  height: 20px;
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
`;

const CreateStatus = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 30%;
  border-bottom: 1px solid #f3f3f3;
`;
export const Home = () => {
  return (
    <MainWrapper>
      <MenuBar>
        <MenuBarConteiner>
          <Logo />
          <Input type={"text"} placeholder={"Search..."} switchType={"dark"} />
          <MyWorkSpace>
            <Avatar height={"22px"} width={"22px"} />
            <p>My workspace</p>
          </MyWorkSpace>
        </MenuBarConteiner>
        <MenuBarConteiner>
          <Menu menuTitle={"Favorites"} />
          <Menu menuTitle={"My Projects"} />
        </MenuBarConteiner>
      </MenuBar>
      <Tools>
        <TitleTools>Tools</TitleTools>
        <Tabs />
      </Tools>
      <Content>
        <HeaderContent>
          <ContentHeaderLeftRight>
            <Button type={"blue"} children={"Add new"} />
            <Dropdown children={"Kanban"} />
            <Dropdown children={"Filter"} />
          </ContentHeaderLeftRight>
          <ContentHeaderLeftRight>
            <Input type={"text"} placeholder={"Search..."} />
            <HeaderNotificationContainer>
              <HeaderNotification src={notification} alt="Notification" />
              <HeaderNotificationValue>99+</HeaderNotificationValue>
            </HeaderNotificationContainer>
            <Avatar height={"40px"} width={"40px"} />
          </ContentHeaderLeftRight>
        </HeaderContent>
        <MainContent>
          <Draganddrop />
          <CreateStatus>
            <Button children={"Create status"} />
          </CreateStatus>
        </MainContent>
      </Content>
      {/* <Logo />
      <Input type={"text"} placeholder={"Search..."}/>
      <Input type={"text"} placeholder={"Search..."} switchType={"dark"} />
      <Button type={"blue"} children={"Add new"}/>
      <Button children={"Create status"}/>
      <Menu menuTitle={"Favorites"}/> */}
    </MainWrapper>
  );
};
