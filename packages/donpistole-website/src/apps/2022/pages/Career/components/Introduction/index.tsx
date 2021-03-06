import React from 'react';
import styled from 'styled-components';
import { SectionHeader, Paragraph } from '../../../../components';

const Container = styled.div`
  padding: 6rem 6rem 2.4rem 6rem;
`;

export const Introduction = () => {
  return (
    <Container>
      <SectionHeader>Introduction</SectionHeader>
      <Paragraph>
        I am a full stack web developer, specializing in writing Typescript
        (fancy javascript) for the Front End (web browsers), and entirely
        capable full stack.
      </Paragraph>
    </Container>
  );
};
