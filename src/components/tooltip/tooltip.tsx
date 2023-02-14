import React from 'react';

import { Tooltip as TooltipMUI, TooltipProps } from '@material-ui/core';

interface IProps {
  text: TooltipProps['title'];
  children: TooltipProps['children'];
  placement?: TooltipProps['placement'];
}

const TooltipComponent: React.FC<IProps> = ({
  text,
  children,
  placement = 'bottom',
}) => {
  return (
    <TooltipMUI
      arrow
      placement={placement}
      title={text}
      disableHoverListener={!text}
      disableFocusListener={!text}
      disableTouchListener={!text}
    >
      <span>{children}</span>
    </TooltipMUI>
  );
};

export const Tooltip = React.memo(TooltipComponent);
