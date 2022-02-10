import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../constants/breakpoints';

export interface SingleColumnLayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.pageBackground};
  overflow-y: auto;
  padding: 5rem 0;

  // on mobile devices we remove the top and bottom padding
  @media only screen and (min-width: 0px) and (max-width: ${breakpoints.mobile}px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Content = styled.div`
  max-width: 90rem;
  margin: 0 auto 0 auto;
  border-right: 0.2rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow()};
`;

export const SingleColumnLayout = ({ children }: SingleColumnLayoutProps) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);
