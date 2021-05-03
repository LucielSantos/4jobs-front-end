import React, { useCallback, useMemo } from 'react';

import { History } from 'history';

import { navbarStates, userType } from '../../../../constants';
import { INavbar } from '../../../../store/ducks/main/types';
import { routePaths } from '../../../../routes';
import { Icon } from '../../../../assets/icons';
import { clearStorage, getLoggedUser, getUserType } from '../../../../utils';

import { Typography } from '../../../../components';
import { Container, Logo, Divider, ProfileImage, ProfileImageContainer } from './styles';
import { ConditionalNavRender } from './components';

interface IProps {
  navbarState: INavbar;
  history: History;
}

const NavbarComponent: React.FC<IProps> = ({ navbarState, history }) => {
  // eslint-disable-next-line
  const loggedUser = useMemo(() => getLoggedUser(), [navbarState]);
  // eslint-disable-next-line
  const loggedUserType = useMemo(() => getUserType(), [navbarState]);

  const onClickLogo = useCallback(() => {
    history.push(routePaths.LOGIN);
  }, [history]);

  const handleLogout = useCallback(() => {
    clearStorage();
    history.push(routePaths.LOGIN);
  }, [history]);

  if (navbarState.state === navbarStates.hidden) {
    return null;
  }

  return (
    <Container>
      <Logo onClick={onClickLogo} />

      <ConditionalNavRender
        navbarState={navbarState.state}
        showIn={['candidate', 'company']}
      >
        <>
          {loggedUser && 'profileImage' in loggedUser ? (
            <ProfileImageContainer>
              <ProfileImage src={loggedUser.profileImage} />
            </ProfileImageContainer>
          ) : null}
        </>

        <Typography
          marginLeft={loggedUserType === userType.company ? 'sm' : 'auto'}
          color="two"
        >
          {loggedUser?.name || null}
        </Typography>

        <Divider />

        <Icon name="exit" color="four" size="xs" clickable onClick={handleLogout} />
      </ConditionalNavRender>
    </Container>
  );
};

export const Navbar = React.memo(NavbarComponent);
