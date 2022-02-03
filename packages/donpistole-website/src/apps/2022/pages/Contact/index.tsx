import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { useDonPistoleApi } from 'hooks';
import * as statuses from 'constants/status';
import { Paragraph, NavBar } from 'apps/2022/components';
import { Loader } from './components/Loader';
import { Success } from './components/Success';
import { ErrorMessage } from './components/ErrorMessage';
import {
  Container,
  TextContainer,
  ButtonContainer,
  FormContainer,
  InputGroupContainer,
  LabelContainer,
  ErrorContainer,
  InputContainer,
  SubmitButton,
} from './styled';
export const Contact = () => {
  const api = useDonPistoleApi();

  const handleSubmit = ({ email }: Record<'email', string>) =>
    api.requestIntroduction({ email });

  return (
    <Container>
      <NavBar />
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
            {statuses.isNotLoaded(api.requestIntroductionStatus) && (
              <Form>
                <TextContainer>
                  <Paragraph>Want to get in touch?</Paragraph>
                  <Paragraph>
                    Enter your email address and I&apos;ll have some robots at
                    AWS introduce us.
                  </Paragraph>
                </TextContainer>
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
                  <SubmitButton
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    send it
                  </SubmitButton>
                </ButtonContainer>
              </Form>
            )}
            {statuses.isLoading(api.requestIntroductionStatus) && <Loader />}
            {statuses.didSucceed(api.requestIntroductionStatus) && <Success />}
            {statuses.didFail(api.requestIntroductionStatus) && (
              <ErrorMessage />
            )}
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};
