import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { breakpoints } from 'constants/breakpoints';

export interface AskMeAboutTopicProps {
  children: string;
}

const Container = styled.div`
  display: flex;
  padding: 0.8rem 0;
`;

const TopicContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  padding: 0.8rem 1.6rem;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => Color(theme.textColor).lighten(1).string()};

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    padding-left: 0;
  }
`;

export const AskMeAboutTopic = ({ children }: AskMeAboutTopicProps) => (
  <Container>
    <TopicContainer>{children}</TopicContainer>
  </Container>
);
