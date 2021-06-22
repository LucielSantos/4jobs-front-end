export type TJobResponseValues = 1 | 2 | 3 | 4 | 5 | 6;

export interface IJobResponseTypes {
  [key: string]: TJobResponseValues;
}

export const jobResponseTypes = {
  registered: 1,
  answering: 2,
  answered: 3,
  returned: 4,
  inEvaluation: 5,
  finished: 6,
};

export const jobResponseTypesLabels = {
  [jobResponseTypes.registered]: 'Triagem',
  [jobResponseTypes.answering]: 'Pendente resposta',
  [jobResponseTypes.answered]: 'Respondido',
  [jobResponseTypes.inEvaluation]: 'Em avaliação',
  [jobResponseTypes.returned]: 'Desafio devolvido',
};

export type TJobStatus = 1 | 2;

export const jobStatus = {
  opened: 1,
  closed: 2,
};
