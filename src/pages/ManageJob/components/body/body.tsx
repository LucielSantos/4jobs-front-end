import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Container } from './styles';
import { Column } from '../';
import { ICandidateByJob, IDropData, IListCandidateByJob } from '../../../../types';
import { jobResponseTypes } from '../../../../constants';
import { TJobResponseValues } from '../../../../constants/job';

interface IProps {
  candidates: IListCandidateByJob;
  handleDropCard(dropData: IDropData): void;
  onClickCandidate(candidateId: ICandidateByJob, columnId: TJobResponseValues): void;
  onClickMessage(candidate: ICandidateByJob): void;
}

const BodyComponent: React.FC<IProps> = ({
  candidates,
  handleDropCard,
  onClickCandidate,
  onClickMessage,
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Column
          title="Pré avaliação"
          columnName="registered"
          columnId={jobResponseTypes.registered as TJobResponseValues}
          candidates={candidates.registered}
          handleDropCard={handleDropCard}
          onClickCandidate={onClickCandidate}
          onClickMessage={onClickMessage}
        />

        <Column
          title="Em resolução"
          columnName="answering"
          columnId={jobResponseTypes.answering as TJobResponseValues}
          candidates={candidates.answering}
          handleDropCard={handleDropCard}
          onClickCandidate={onClickCandidate}
          onClickMessage={onClickMessage}
        />

        <Column
          title="Em avaliação"
          columnName="inEvaluation"
          columnId={jobResponseTypes.inEvaluation as TJobResponseValues}
          candidates={candidates.inEvaluation}
          handleDropCard={handleDropCard}
          onClickCandidate={onClickCandidate}
          onClickMessage={onClickMessage}
        />

        <Column
          title="Encerrados"
          columnName="finished"
          columnId={jobResponseTypes.finished as TJobResponseValues}
          candidates={candidates.finished}
          handleDropCard={handleDropCard}
          onClickCandidate={onClickCandidate}
          onClickMessage={onClickMessage}
        />
      </Container>
    </DndProvider>
  );
};

export const Body = React.memo(BodyComponent);
