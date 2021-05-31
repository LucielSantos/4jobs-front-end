import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { Typography } from '../../../../components';
import { UserCard } from '../';
import { Container, Body } from './styles';

interface IProps {
  title: string;
  columnId: string;
}

const ColumnComponent: React.FC<IProps> = ({ title, columnId }) => {
  return (
    <Droppable droppableId={columnId}>
      {provided => (
        <Container ref={provided.innerRef} {...provided.droppableProps}>
          <Typography size="lg">{title}</Typography>

          <Body>
            <UserCard index={1} cardId={`${columnId}-one`} />

            <UserCard index={2} cardId={`${columnId}-two`} />
          </Body>

          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

export const Column = React.memo(ColumnComponent);
