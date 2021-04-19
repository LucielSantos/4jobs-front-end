import React from 'react';
import { Label } from '../../label';
import { ITypography } from '../../typography';

import { StyledInput, Container } from './styles';

interface Props {
  separatedLabel?: boolean;
  label?: string | React.Component;
  labelColor?: ITypography['color'];
  placeholder?: string;
}

const InputComponent: React.FC<Props> = ({
  label,
  placeholder,
  labelColor = 'three',
  separatedLabel = false,
}) => {
  return (
    <Container>
      {separatedLabel && label && <Label color={labelColor}>{label}</Label>}

      <StyledInput
        label={separatedLabel ? false : label}
        variant="outlined"
        size="small"
        fullWidth
        placeholder={placeholder}
      />
    </Container>
  );
};

export const Input = React.memo(InputComponent);
