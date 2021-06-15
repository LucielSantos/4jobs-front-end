import styled from 'styled-components';
import { jobResponseTypes, TJobResponseValues } from '../../../../constants';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.four};
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;
`;

export const StatusDot = styled.div<{ status: TJobResponseValues }>`
  background-color: ${({ theme, status }) => {
    if (status === jobResponseTypes.answering) {
      return '#ffe600';
    }

    if (status === jobResponseTypes.answered) {
      return '#00cc00';
    }
  }};
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;

export const StatusContainer = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
`;
