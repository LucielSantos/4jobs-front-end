import React, { useCallback } from 'react';

import { History } from 'history';

import { navbarStates } from '../../../../constants';
import { INavbar } from '../../../../store/ducks/main/types';

import { Container, Logo } from './styles';
import { routePaths } from '../../../../routes';

interface IProps {
  navbarState: INavbar;
  history: History;
}

const NavbarComponent: React.FC<IProps> = ({ navbarState, history }) => {
  const onClickLogo = useCallback(() => {
    history.push(routePaths.LOGIN);
  }, [history]);

  if (navbarState.state === navbarStates.hidden) {
    return null;
  }

  return (
    <Container>
      <Logo onClick={onClickLogo} />
    </Container>
  );
};

export const Navbar = React.memo(NavbarComponent);
