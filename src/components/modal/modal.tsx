import React, { useCallback } from 'react';

import { Dialog, DialogProps } from '@material-ui/core';

import { Container, Header, CloseIconContainer, Body } from './styles';
import { Typography } from '../';
import { Icon } from '../../assets/icons';

export interface IModalProps {
  open: boolean;
  handleClose(value?: false): void;
}

export interface IModalCompleteProps extends IModalProps {
  children: React.ReactNode;
  width?: DialogProps['maxWidth'];
  title?: string;
  handleClose(value: false): void;
}

const ModalComponent: React.FC<IModalCompleteProps> = ({
  children,
  open,
  handleClose,
  width = 'sm',
  title,
}) => {
  const onClickClose = useCallback(() => {
    console.log('click close');
    handleClose(false);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      PaperComponent={Container}
      maxWidth={width}
    >
      <Header>
        {title && <Typography size="lg">{title}</Typography>}

        <CloseIconContainer>
          <Icon
            name="close"
            size="md"
            color="two"
            clickable
            onClick={onClickClose}
          />
        </CloseIconContainer>
      </Header>

      <Body>{children}</Body>
    </Dialog>
  );
};

export const Modal = React.memo(ModalComponent);
