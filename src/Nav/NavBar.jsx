import React,{useContext} from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import toggleContext from "../Store/toggleContext";

const NavBar = () => {
  const show = useContext(toggleContext)
  return (
    <Menu inverted fixed top>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" />
          Re-Vents
        </Menu.Item>
        <Menu.Item name="events" />
        <Menu.Item>
          <Button positive inverted content="Create Event" onClick={show.toggleHandler} />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
