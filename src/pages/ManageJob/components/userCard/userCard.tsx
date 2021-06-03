import React from 'react';

import { useDrag } from 'react-dnd';

import { Icon } from '../../../../assets/icons';
import { Typography } from '../../../../components';
import { TJobResponseValues } from '../../../../constants';
import { ICandidateByJob } from '../../../../types';

import { Container } from './styles';

interface IProps {
  cardId: string;
  index: number;
  candidate: ICandidateByJob;
  columnId: TJobResponseValues;
}

const UserCardComponent: React.FC<IProps> = ({ columnId, candidate }) => {
  const [, dragRef] = useDrag(
    () => ({
      type: `${columnId}`,
      item: { ...candidate },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  return (
    <Container ref={dragRef}>
      <Typography>{candidate.name}</Typography>

      <Icon name="message" size="sm" clickable />
    </Container>
  );
};

export const UserCard = React.memo(UserCardComponent);
