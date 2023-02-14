import React, { useCallback, useState } from 'react';
import { IInputProps } from '../';
import { Icon } from '../../../assets/icons';
import { Input } from '../input/input';

interface IInputPasswordProps extends IInputProps {}

type TInputType = 'password' | 'text';

const InputPasswordComponent: React.FC<IInputPasswordProps> = ({
  ...props
}) => {
  const [type, setType] = useState<TInputType>('password');

  const onClickIcon = useCallback(() => {
    setType(type === 'password' ? 'text' : 'password');
  }, [type]);

  return (
    <Input
      endAdornment={
        type === 'password' ? (
          <Icon onClick={onClickIcon} name="eye" size="xs" clickable />
        ) : (
          <Icon onClick={onClickIcon} name="eyeOff" size="xs" clickable />
        )
      }
      type={type}
      {...props}
    />
  );
};

export const InputPassword = React.memo(InputPasswordComponent);
