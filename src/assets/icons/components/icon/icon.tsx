import React, { useMemo } from 'react';

import { icons, IIcon } from '../../icons';

type TIconName = keyof typeof icons;

export interface IIconProps extends IIcon {
  name: TIconName;
  size?: IIcon['sizeParam'];
  onClick?(): void;
}

const IconComponent: React.FC<IIconProps> = ({
  name = 'close',
  color = 'one',
  size = 'md',
  clickable,
  onClick,
}) => {
  const Component = useMemo(() => icons[name], [name]);

  return (
    <Component
      color={color}
      sizeParam={size}
      clickable={clickable}
      onClick={onClick}
    />
  );
};

export const Icon = React.memo(IconComponent);
