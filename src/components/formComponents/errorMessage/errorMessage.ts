import styled, { css } from 'styled-components';

interface IErrorMessage {
  floatingError?: boolean;
}

export const ErrorMessage = styled.div<IErrorMessage>`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors.seven};
  margin-top: ${({ theme }) => theme.spacings.xs};
  margin-left: ${({ theme }) => theme.spacings.xs};
  margin-bottom: ${({ theme }) => theme.spacings.xs};
  min-height: ${({ theme }) => theme.typography.sizes.xs};

  ${({ floatingError, theme }) =>
    floatingError &&
    css`
      position: absolute;
      bottom: calc(-${theme.spacings.xs} - ${theme.typography.sizes.xs} - 0.5rem);
    `}
`;
