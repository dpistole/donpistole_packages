import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/pro-duotone-svg-icons';

import { Paragraph } from '../../../../components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ErrorMessageContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  flex: 0 0 auto;
  padding: 0 1.6rem;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Open Sans';
  font-size: 3.2rem;
  color: ${({ theme }) => theme.dangerColor};
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.dangerColor};
`;

export const ThankYouContainer = styled.div`
  padding: 4.8rem 0;
  width: 30rem;
`;

export const ErrorMessage = () => (
  <Container>
    <ErrorMessageContainer>
      <IconContainer>
        <ErrorIcon icon={faBug} size="3x" />
      </IconContainer>
      <MessageContainer>Oops! How embarrassing...</MessageContainer>
    </ErrorMessageContainer>
    <ThankYouContainer>
      <Paragraph>
        It looks like something went wrong, which means I won't get your
        message. Sorry about that.
      </Paragraph>
      <Paragraph>
        If you'd like, you can email me at donald dot pistole at gmail dot com.
      </Paragraph>
    </ThankYouContainer>
  </Container>
);
