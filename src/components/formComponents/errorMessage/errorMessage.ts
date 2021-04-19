import styled from 'styled-components';

export const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors.seven};
  margin-top: ${({ theme }) => theme.spacings.xs};
  margin-left: ${({ theme }) => theme.spacings.xs};
  margin-bottom: ${({ theme }) => theme.spacings.xs};

  min-height: ${({ theme }) => theme.typography.sizes.xs};
`;
