import React from 'react';
import styled from 'styled-components';

export interface SectionHeaderProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  font-size: 3.6rem;
  color: ${({ theme }) => theme.accentColor};
`;

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <Container>{children}</Container>;
};
