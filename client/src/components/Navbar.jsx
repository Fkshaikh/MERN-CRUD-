import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background: #67001a;
  position:static;
`;

const Tabs = styled(NavLink)`
  font-size: 16px;
  margin-right: 10px;
  text-decoration:none;
  color:inherit;
`;
const NavBar = () => {
  return (
    <Header>
      <Toolbar>
        <Tabs to="/">MERN Application</Tabs>
        <Tabs to="/alluser">All User</Tabs>
        <Tabs to="/adduser">Create User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
