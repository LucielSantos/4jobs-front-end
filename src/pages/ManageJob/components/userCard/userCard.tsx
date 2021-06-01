import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Icon } from '../../../../assets/icons';
import { Typography } from '../../../../components';
import { ICandidateByJob } from '../../../../types';

import { Container } from './styles';

interface IProps {
  cardId: string;
  index: number;
  candidate: ICandidateByJob;
}

const UserCardComponent: React.FC<IProps> = ({ cardId, index, candidate }) => {
  return (
    <Draggable draggableId={cardId} index={index}>
      {provided => (
        <Container
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Typography>{candidate.name}</Typography>

          <Icon name="message" size="sm" clickable />
        </Container>
      )}
    </Draggable>
  );
};

export const UserCard = React.memo(UserCardComponent);
