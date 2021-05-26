export type TJobResponseValues = 1 | 2;

export interface IJobResponseTypes {
  [key: string]: TJobResponseValues;
}

export const jobResponseTypes = {
  registered: 1,
  answering: 2,
  answered: 3,
  returned: 4,
};

export const jobResponseTypesLabels = {
  [jobResponseTypes.registered]: 'Triagem',
  [jobResponseTypes.answering]: 'Pendente resposta',
  [jobResponseTypes.answered]: 'Em avaliação',
  [jobResponseTypes.returned]: 'Desafio devolvido',
};
