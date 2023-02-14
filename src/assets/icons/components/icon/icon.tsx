import React, { useMemo } from 'react';
import { Badge, BadgeProps } from '@material-ui/core';

import { icons, IIcon } from '../../icons';

type TIconName = keyof typeof icons;

export interface IIconProps extends IIcon {
  name: TIconName;
  size?: IIcon['sizeParam'];
  badge?: boolean;
  onClick?(event: any): void;
  badgeProps?: BadgeProps;
}

const IconComponent: React.FC<IIconProps> = ({
  name = 'close',
  color = 'one',
  size = 'md',
  onClick,
  badge = false,
  badgeProps,
  ...props
}) => {
  const Component = useMemo(() => icons[name], [name]);

  if (badge) {
    return (
      <Badge color="error" variant="dot" invisible={!badge} {...badgeProps}>
        <Component
          color={color}
          sizeParam={size}
          onClick={onClick}
          {...props}
        />
      </Badge>
    );
  }

  return (
    <Component color={color} sizeParam={size} onClick={onClick} {...props} />
  );
};

export const Icon = React.memo(IconComponent);
