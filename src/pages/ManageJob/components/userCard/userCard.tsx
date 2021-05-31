import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Icon } from '../../../../assets/icons';
import { Typography } from '../../../../components';

import { Container } from './styles';

interface IProps {
  cardId: string;
  index: number;
}

const UserCardComponent: React.FC<IProps> = ({ cardId, index }) => {
  return (
    <Draggable draggableId={cardId} index={index}>
      {provided => (
        <Container
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Typography>Luciel Santos BS</Typography>

          <Icon name="message" size="sm" clickable />
        </Container>
      )}
    </Draggable>
  );
};

export const UserCard = React.memo(UserCardComponent);
