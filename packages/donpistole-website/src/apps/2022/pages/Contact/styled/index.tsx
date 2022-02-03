import styled from 'styled-components';
import Color from 'color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'apps/2022/components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.contentBackground};
  padding-bottom: 12rem;
`;

export const TextContainer = styled.div`
  padding: 5rem 2.4rem 3.2rem 2.4rem;
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6rem 3.2rem;
`;

export const InputGroupContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
`;

export const LabelContainer = styled.div`
  flex: 1 0 0;
  font-size: 1.2rem;
`;

export const ErrorContainer = styled.div`
  height: 2.4rem;
  p {
    color: ${({ theme }) => theme.dangerColor};
  }
`;

export const InputContainer = styled.div`
  flex: 1 0 0;
  width: 100%;
  padding: 0.8rem 0;

  input {
    font-size: 1.6rem;
    outline: none;
    border: solid thin ${({ theme }) => theme.textColor};
    width: 100%;
    height: 4.8rem;
    padding: 0.8rem;
    background: ${({ theme }) => theme.contentBackground};
    box-shadow: 0 0 1.6rem -0.4rem ${({ theme }) => Color(theme.pageBackground).lighten(0.2).string()};

    &:hover,
    &:focus {
      box-shadow: 0 0 3.2rem -0.4rem ${({ theme }) => theme.pageBackground};
    }
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.accentColor2};
  color: ${({ theme }) => theme.accentColor2Text};
`;
