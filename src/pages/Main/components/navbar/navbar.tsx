import React from 'react';
import { navbarStates } from '../../../../constants';
import { INavbar } from '../../../../store/ducks/main/types';

import { Container } from './styles';

interface IProps {
  navbarState: INavbar;
}

const NavbarComponent: React.FC<IProps> = ({ navbarState }) => {
  if (navbarState.state === navbarStates.hidden) {
    return null;
  }

  return <Container>NavbarComponent</Container>;
};

export const Navbar = React.memo(NavbarComponent);
