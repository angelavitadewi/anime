import styled from '@emotion/styled';
import colors from '../../theme/colors';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background-color: ${colors.black};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

const HeaderNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
  padding: 0;
  @media (max-width: 594.98px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  @media (max-width: 594.98px) {
    flex: 1 1 calc(100% - 40px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export interface NavbarList {
  name: string;
  link: string;
}

interface INavbarProps {
  navbarList: NavbarList[];
}

export const Navbar = ({ navbarList }: INavbarProps) => (
  <Header>
    <HeaderNav>
      <NavList>
        {navbarList.map((item, index) => (
          <NavItem key={index}>
            <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              {item.name}
            </Link>
          </NavItem>
        ))}
      </NavList>
    </HeaderNav>
  </Header>
);
