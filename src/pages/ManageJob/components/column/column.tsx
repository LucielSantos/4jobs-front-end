import React, { useMemo } from 'react';

import { Typography } from '../../../../components';
import { UserCard } from '../';
import { Container, Body } from './styles';
import { ICandidateByJob } from '../../../../types';
import { jobResponseTypes, TJobResponseValues } from '../../../../constants/job';
import { useDrop } from 'react-dnd';
import { IDropData } from '../../manageJob';
interface IProps {
  title: string;
  columnId: TJobResponseValues;
  candidates: ICandidateByJob[];
  handleDropCard(dropData: IDropData): void;
}

const ColumnComponent: React.FC<IProps> = ({
  title,
  columnId,
  candidates,
  handleDropCard,
}) => {
  const accept = useMemo(
    () => [
      jobResponseTypes.answered,
      jobResponseTypes.answering,
      jobResponseTypes.finished,
      jobResponseTypes.inEvaluation,
      jobResponseTypes.registered,
      jobResponseTypes.returned,
    ],
    []
  );

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: accept.filter(value => value !== columnId).map(value => `${value}`),
      drop: (candidate: ICandidateByJob) => {
        handleDropCard({ candidate, newStatus: columnId });
      },
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <Container>
      <Typography size="lg">{title}</Typography>

      <Body ref={dropRef} isOver={isOver}>
        {candidates.map((candidate, index) => (
          <UserCard
            index={index}
            cardId={candidate.id}
            candidate={candidate}
            key={`${candidate.id}-${index}`}
            columnId={columnId}
          />
        ))}
      </Body>
    </Container>
  );
};

export const Column = React.memo(ColumnComponent);
