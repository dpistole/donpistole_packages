import React from 'react';
import styled from 'styled-components';
import Color from 'color';

export interface SectionHeaderProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  font-size: 3.6rem;
  font-weight: bold;
  color: ${({ theme }) => Color(theme.textColor).lighten(1).string()};
  margin-bottom: 2.4rem;
`;

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <Container>{children}</Container>;
};
