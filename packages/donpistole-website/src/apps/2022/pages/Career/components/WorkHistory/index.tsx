import React from 'react';
import styled from 'styled-components';
import { KubraResume } from './components/KubraResume';
import { NMAResume } from './components/NMAResume';
import { SectionHeader } from 'apps/2022/components/SectionHeader';
import { breakpoints } from 'constants/breakpoints';

const Container = styled.div`
  width: 100%;
  padding: 0 6rem;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    padding: 1.6rem;
  }
`;

export const WorkHistory = () => {
  return (
    <Container>
      <SectionHeader>Work History</SectionHeader>
      <KubraResume />
      <NMAResume />
    </Container>
  );
};
