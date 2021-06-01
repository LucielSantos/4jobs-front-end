import React from 'react';

import { Container } from './styles';
import { Column } from '../';
import { IListCandidateByJob } from '../../../../types';
import { jobResponseTypes } from '../../../../constants';
import { TJobResponseValues } from '../../../../constants/job';

interface IProps {
  candidates: IListCandidateByJob;
}

const BodyComponent: React.FC<IProps> = ({ candidates }) => {
  return (
    <Container>
      <Column
        title="Pré avaliação"
        columnId={jobResponseTypes.registered as TJobResponseValues}
        candidates={candidates.registered}
      />

      <Column
        title="Em resolução"
        columnId={jobResponseTypes.answering as TJobResponseValues}
        candidates={candidates.answering}
      />

      <Column
        title="Em avaliação"
        columnId={jobResponseTypes.inEvaluation as TJobResponseValues}
        candidates={candidates.inEvaluation}
      />

      <Column
        title="Encerrados"
        columnId={jobResponseTypes.finished as TJobResponseValues}
        candidates={candidates.finished}
      />
    </Container>
  );
};

export const Body = React.memo(BodyComponent);
