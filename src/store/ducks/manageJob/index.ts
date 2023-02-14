import { Reducer } from 'redux';
import { ICandidateByJob } from '../../../types';
import { ManageJobActionTypes, IManageJobState } from './types';

const INITIAL_STATE: IManageJobState = {
  loadings: {
    loadCandidates: true,
    changeCandidateStatus: false,
  },
  candidates: {
    answering: [],
    inEvaluation: [],
    registered: [],
    finished: [],
  },
};

const reducer: Reducer<IManageJobState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case ManageJobActionTypes.HANDLE_SET_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          [payload.field]: payload.value,
        },
      };

    case ManageJobActionTypes.HANDLE_SET_CANDIDATES:
      return {
        ...state,
        candidates: payload,
      };

    case ManageJobActionTypes.HANDLE_CHANGE_CANDIDATE_STATUS:
      return {
        ...state,
        candidates: {
          ...state.candidates,
          [payload.newColumnName]: [
            ...state.candidates[payload.newColumnName],
            payload.candidate,
          ],
          [payload.oldColumnName]: state.candidates[
            payload.oldColumnName
          ].filter(
            (candidate: ICandidateByJob) =>
              candidate.id !== payload.candidate.id
          ),
        },
      };

    case ManageJobActionTypes.HANDLE_CLEAR_MESSAGE:
      return {
        ...state,
        candidates: {
          ...state.candidates,
          [payload.columnName]: state.candidates[payload.columnName].map(
            (candidate: ICandidateByJob) =>
              candidate.id === payload.candidateId
                ? { ...candidate, hasCandidateMessage: false }
                : candidate
          ),
        },
      };

    default:
      return state;
  }
};

export default reducer;
