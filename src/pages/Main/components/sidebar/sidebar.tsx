import React, { useCallback } from 'react';
import { History } from 'history';

import { Icon } from '../../../../assets/icons';
import { TUserTypeNum } from '../../../../constants';
import { sidebarRoutes } from '../../../../routes';

import { Container, IconContainer } from './styles';

interface IProps {
  userType: TUserTypeNum;
  history: History;
}

const SidebarComponent: React.FC<IProps> = ({ userType, history }) => {
  const onClickIcon = useCallback(
    (route) => {
      history.push(route);
    },
    [history]
  );

  return (
    <Container>
      {sidebarRoutes[userType].map((route, index) => (
        <IconContainer
          key={`IconContainer,${route.icon},${index}`}
          active={history.location.pathname === route.route}
        >
          <Icon
            name={route.icon}
            key={`${route.icon},${index}`}
            color="four"
            size="sm"
            clickable
            onClick={() => onClickIcon(route.route)}
          />
        </IconContainer>
      ))}
    </Container>
  );
};

export const Sidebar = React.memo(SidebarComponent);
