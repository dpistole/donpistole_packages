import React from 'react';
import styled from 'styled-components';
import Color from 'color';

export const Container = styled.div`
  padding: 1.6rem 4.8rem;
  color: ${({ theme }) => Color(theme.textColor).string()};
`;

export interface ResumeBodyProps {
  children: React.ReactNode;
}

export const ResumeBody = ({ children }: ResumeBodyProps) => (
  <Container>{children}</Container>
);
