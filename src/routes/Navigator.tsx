import { NavLink } from 'react-router-dom';
import { Nav, Header, NavList, NavItem } from './styles';

export const Navigator = () => {
  return (
    <Header>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/home">Crz 官网</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/current">本期赛事</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/history">往期赛事</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Header>
  );
};
