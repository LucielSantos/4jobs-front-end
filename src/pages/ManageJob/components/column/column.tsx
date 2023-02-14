import React, { useMemo } from 'react';

import { Typography } from '../../../../components';
import { UserCard } from '../';
import { Container, Body } from './styles';
import { ICandidateByJob, IDropData } from '../../../../types';
import {
  jobResponseTypes,
  TJobResponseValues,
} from '../../../../constants/job';
import { useDrop } from 'react-dnd';

interface IProps {
  title: string;
  columnId: TJobResponseValues;
  candidates: ICandidateByJob[];
  columnName: string;
  handleDropCard(dropData: IDropData): void;
  onClickCandidate(
    candidateId: ICandidateByJob,
    columnId: TJobResponseValues
  ): void;
  onClickMessage(candidate: ICandidateByJob, columnName: string): void;
}

const ColumnComponent: React.FC<IProps> = ({
  title,
  columnId,
  candidates,
  columnName,
  handleDropCard,
  onClickCandidate,
  onClickMessage,
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
      accept: accept
        .filter((value) => value !== columnId)
        .map((value) => `${value}`),
      drop: ({
        candidate,
        column,
        columnName: candidateColumnName,
      }: {
        candidate: ICandidateByJob;
        column: TJobResponseValues;
        columnName: string;
      }) => {
        handleDropCard({
          candidate: {
            ...candidate,
            status:
              columnId === jobResponseTypes.answering
                ? jobResponseTypes.answering
                : candidate.status,
          },
          newStatus: columnId,
          oldStatus: column,
          newColumnName: columnName,
          oldColumnName: candidateColumnName,
        });
      },
      collect: (monitor) => ({
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
            onClickCandidate={onClickCandidate}
            index={index}
            cardId={candidate.id}
            candidate={candidate}
            key={`${candidate.id}-${index}`}
            columnId={columnId}
            columnName={columnName}
            onClickMessage={onClickMessage}
          />
        ))}
      </Body>
    </Container>
  );
};

export const Column = React.memo(ColumnComponent);
