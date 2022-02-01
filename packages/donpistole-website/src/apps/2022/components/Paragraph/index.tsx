import React from 'react';
import styled from 'styled-components';

export interface ParagraphProps {
  children: React.ReactNode;
}

const Container = styled.p`
  font-size: 2rem;
  text-indent: 3.2rem;
  line-height: 2.8rem;
  margin-top: 1.2rem;
  margin-bottom: 3.2rem;
`;

export const Paragraph = ({ children }: ParagraphProps) => {
  return <Container>{children}</Container>;
};
