import styled from 'styled-components';

export const Button = styled.button.attrs({ type: 'button' })`
  outline: none;
  border: solid thin ${({ theme }) => theme.textColor};
  height: 4.8rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.contentBackground};
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  box-shadow: 0 0 1.6rem -0.4rem ${({ theme }) => theme.pageBackground};
  &:hover,
  &:focus {
    box-shadow: 0 0 3.2rem -0.4rem ${({ theme }) => theme.pageBackground};
  }
  &:active {
    box-shadow: 0 0 1.2rem -0.4rem ${({ theme }) => theme.pageBackground};
  }
`;
