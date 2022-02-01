import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDonPistoleApi } from 'hooks';
import * as statuses from 'constants/status';
import { Paragraph } from 'apps/2022/components/Paragraph';

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding-bottom: 12rem;
`;

const TextContainer = styled.div`
  padding: 5rem 2.4rem 3.2rem 2.4rem;
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

const FormContainer = styled.div``;

const InputGroupContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
`;

const LabelContainer = styled.div`
  flex: 1 0 0;
  font-size: 1.2rem;
`;

const InputContainer = styled.div`
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
    background: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0 0 1.6rem -0.4rem ${({ theme }) => Color(theme.fontColor).lighten(0.2).string()};

    &:hover,
    &:focus {
      box-shadow: 0 0 3.2rem -0.4rem ${({ theme }) => theme.fontColor};
    }
  }
`;

const SubmitButton = styled.button.attrs({ type: 'button' })`
  outline: none;
  border: solid thin ${({ theme }) => theme.textColor};
  height: 4.8rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  box-shadow: 0 0 1.6rem -0.4rem ${({ theme }) => theme.fontColor};
  &:hover,
  &:focus {
    box-shadow: 0 0 3.2rem -0.4rem ${({ theme }) => theme.fontColor};
  }
  &:active {
    box-shadow: 0 0 1.2rem -0.4rem ${({ theme }) => theme.fontColor};
  }
`;

const ErrorContainer = styled.div`
  height: 2.4rem;
  p {
    color: ${({ theme }) => theme.dangerColor};
  }
`;

export const Contact = () => {
  const api = useDonPistoleApi();

  const handleSubmit = ({ email }: Record<'email', string>) =>
    api.requestIntroduction({ email });

  return (
    <Container>
      <TextContainer>
        <Paragraph>Want to get in touch?</Paragraph>
        <Paragraph>
          Enter your email address and I&apos;ll have some robots at AWS
          introduce us.
        </Paragraph>
      </TextContainer>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('invalid email').required('missing email'),
        })}
      >
        {({ handleSubmit, values, errors, setFieldValue }) => (
          <FormContainer>
            <Form>
              <InputGroupContainer>
                <LabelContainer>
                  <label htmlFor="">Your Email</label>
                </LabelContainer>
                <InputContainer>
                  <input
                    name="email"
                    type="text"
                    value={values.email}
                    onChange={(event) => {
                      setFieldValue('email', event.target.value);
                    }}
                  />
                </InputContainer>
                <ErrorContainer>
                  <p>{errors.email}</p>
                </ErrorContainer>
              </InputGroupContainer>
              <ButtonContainer>
                {statuses.isNotLoaded(api.requestIntroductionStatus) && (
                  <SubmitButton
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    send it
                  </SubmitButton>
                )}
                {statuses.isLoading(api.requestIntroductionStatus) && (
                  <p>Sending it...</p>
                )}
                {statuses.didSucceed(api.requestIntroductionStatus) && (
                  <p>Hmm, seems like it worked.</p>
                )}
                {statuses.didFail(api.requestIntroductionStatus) && (
                  <p>An error occurred. Someone should fix that...</p>
                )}
              </ButtonContainer>
            </Form>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};
