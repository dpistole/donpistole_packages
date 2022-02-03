import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophyAlt } from '@fortawesome/pro-duotone-svg-icons';

import { Paragraph } from 'apps/2022/components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SuccessMessageContainer = styled.div`
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
  font-family: 'Fredoka One';
  font-size: 3.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor4};
`;

export const SuccessIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.accentColor4};
`;

export const ThankYouContainer = styled.div`
  padding: 4.8rem 0;
  width: 30rem;
`;

export const Success = () => (
  <Container>
    <SuccessMessageContainer>
      <IconContainer>
        <SuccessIcon icon={faTrophyAlt} size="3x" />
      </IconContainer>
      <MessageContainer>You did it!</MessageContainer>
    </SuccessMessageContainer>
    <ThankYouContainer>
      <Paragraph>
        Thank you for reaching out. I will get back to you as soon as possible.
      </Paragraph>
    </ThankYouContainer>
  </Container>
);
