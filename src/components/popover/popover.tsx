import React, { useCallback, useMemo } from 'react';

import { Popover as PopoverMUI } from '@material-ui/core';

import { Icon } from '../../assets/icons';
import { Flex } from '../flex';

import { Body, Line } from './styles';

interface IOption {
  onClick(): void;
  children: React.ReactNode;
}

interface IProps {
  options: IOption[];
}

const PopoverComponent: React.FC<IProps> = ({ options }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const id = useMemo(() => (open ? 'simple-popover' : undefined), [open]);

  const handleClick = useCallback((event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback((event?: any) => {
    event && event.preventDefault();
    event && event.stopPropagation();
    setAnchorEl(null);
  }, []);

  const handleClickLine = useCallback(
    fc => (event?: any) => {
      event && event.preventDefault();
      event && event.stopPropagation();
      handleClose();
      fc();
    },
    [handleClose]
  );

  return (
    <Flex notFullWidth>
      <Icon onClick={handleClick} color={open ? 'three' : 'six'} name="moreVert" size="xs" />

      <PopoverMUI
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Body>
          {options.map((item, index) => (
            <Line key={`popover-line-${index}`} onClick={handleClickLine(item.onClick)}>
              {item.children}
            </Line>
          ))}
        </Body>
      </PopoverMUI>
    </Flex>
  );
};

export const Popover = React.memo(PopoverComponent);
