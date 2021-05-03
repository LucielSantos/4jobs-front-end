import React, { MouseEvent } from 'react';
import { Icon, IIconProps } from '../../assets/icons';

import { IStyledButton, StyledButton, IconContainer } from './styles';

interface IProps extends IStyledButton {
  children: React.ReactNode;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  leftIcon?: IIconProps;
  rightIcon?: IIconProps;
}

const ButtonComponent: React.FC<IProps> = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <StyledButton {...props}>
      {leftIcon ? (
        <IconContainer isLeft>
          <Icon {...leftIcon} />{' '}
        </IconContainer>
      ) : null}

      {children}

      {rightIcon ? (
        <IconContainer>
          <Icon {...rightIcon} />
        </IconContainer>
      ) : null}
    </StyledButton>
  );
};

export const Button = React.memo(ButtonComponent);
