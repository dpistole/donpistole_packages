import React from 'react';
import styled from 'styled-components';

export interface AskMeAboutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  padding: 1.6rem 4.8rem;
  max-width: 60rem;
`;

const AskMeAboutLabel = styled.div`
  color: ${({ theme }) => theme.accentColor4};
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 1.8rem;
`;

const TopicsContainer = styled.div`
  padding: 1.6rem;
`;

export const AskMeAbout = ({ children }: AskMeAboutProps) => (
  <Container>
    <AskMeAboutLabel>Ask Me About</AskMeAboutLabel>
    <TopicsContainer>{children}</TopicsContainer>
  </Container>
);

export * from './components/AskMeaboutTopic';
