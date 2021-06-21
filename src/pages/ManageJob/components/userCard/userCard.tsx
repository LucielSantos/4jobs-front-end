import React, { useCallback } from 'react';

import { useDrag } from 'react-dnd';

import { Icon } from '../../../../assets/icons';
import { Tooltip, Typography } from '../../../../components';
import {
  jobResponseTypes,
  jobResponseTypesLabels,
  TJobResponseValues,
} from '../../../../constants';
import { ICandidateByJob } from '../../../../types';

import { Container, StatusDot, StatusContainer } from './styles';

interface IProps {
  cardId: string;
  columnName: string;
  index: number;
  candidate: ICandidateByJob;
  columnId: TJobResponseValues;
  onClickCandidate(candidateId: ICandidateByJob, columnId: TJobResponseValues): void;
  onClickMessage(candidate: ICandidateByJob): void;
}

const UserCardComponent: React.FC<IProps> = ({
  columnId,
  candidate,
  columnName,
  onClickCandidate,
  onClickMessage,
}) => {
  const [, dragRef] = useDrag(
    () => ({
      type: `${columnId}`,
      item: { candidate, column: columnId, columnName },
      collect: monitor => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  const onClickCard = useCallback(() => {
    onClickCandidate(candidate, columnId);
  }, [onClickCandidate, candidate, columnId]);

  const onClickMessageIcon = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onClickMessage(candidate);
    },
    [candidate, onClickMessage]
  );

  return (
    <Container ref={dragRef} onClick={onClickCard}>
      <Typography>{candidate.name}</Typography>

      <Icon name="message" size="sm" clickable onClick={onClickMessageIcon} />

      {(columnId === jobResponseTypes.answering ||
        columnId === jobResponseTypes.answered ||
        columnId === jobResponseTypes.returned) && (
        <StatusContainer>
          <Tooltip text={jobResponseTypesLabels[candidate.status]} placement="top">
            <StatusDot status={candidate.status} />
          </Tooltip>
        </StatusContainer>
      )}
    </Container>
  );
};

export const UserCard = React.memo(UserCardComponent);
