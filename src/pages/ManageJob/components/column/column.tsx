import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { Typography } from '../../../../components';
import { UserCard } from '../';
import { Container, Body } from './styles';
import { ICandidateByJob } from '../../../../types';
import { TJobResponseValues } from '../../../../constants/job';

interface IProps {
  title: string;
  columnId: TJobResponseValues;
  candidates: ICandidateByJob[];
}

const ColumnComponent: React.FC<IProps> = ({ title, columnId, candidates }) => {
  return (
    <Container>
      <Typography size="lg">{title}</Typography>
      <Droppable droppableId={`${columnId}`}>
        {provided => (
          <Body ref={provided.innerRef} {...provided.droppableProps}>
            {candidates.map((candidate, index) => (
              <UserCard
                index={index}
                cardId={candidate.id}
                candidate={candidate}
                key={`${candidate.id}-${index}`}
              />
            ))}

            {provided.placeholder}
          </Body>
        )}
      </Droppable>
    </Container>
  );
};

export const Column = React.memo(ColumnComponent);
