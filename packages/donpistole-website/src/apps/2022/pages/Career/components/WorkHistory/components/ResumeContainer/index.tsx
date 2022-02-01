import React from 'react';
import styled from 'styled-components';

export const Container = styled.div``;

export interface ResumeBodyProps {
  children: React.ReactNode;
}

export const ResumeContainer = ({ children }: ResumeBodyProps) => (
  <Container>{children}</Container>
);
