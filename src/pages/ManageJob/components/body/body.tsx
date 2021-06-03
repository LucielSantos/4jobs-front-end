import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Container } from './styles';
import { Column } from '../';
import { IListCandidateByJob } from '../../../../types';
import { jobResponseTypes } from '../../../../constants';
import { TJobResponseValues } from '../../../../constants/job';
import { IDropData } from '../../manageJob';

interface IProps {
  candidates: IListCandidateByJob;
  handleDropCard(dropData: IDropData): void;
}

const BodyComponent: React.FC<IProps> = ({ candidates, handleDropCard }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Column
          title="Pré avaliação"
          columnId={jobResponseTypes.registered as TJobResponseValues}
          candidates={candidates.registered}
          handleDropCard={handleDropCard}
        />

        <Column
          title="Em resolução"
          columnId={jobResponseTypes.answering as TJobResponseValues}
          candidates={candidates.answering}
          handleDropCard={handleDropCard}
        />

        <Column
          title="Em avaliação"
          columnId={jobResponseTypes.inEvaluation as TJobResponseValues}
          candidates={candidates.inEvaluation}
          handleDropCard={handleDropCard}
        />

        <Column
          title="Encerrados"
          columnId={jobResponseTypes.finished as TJobResponseValues}
          candidates={candidates.finished}
          handleDropCard={handleDropCard}
        />
      </Container>
    </DndProvider>
  );
};

export const Body = React.memo(BodyComponent);
