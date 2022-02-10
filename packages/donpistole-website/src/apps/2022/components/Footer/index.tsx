import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 22.5rem;
  background: ${({ theme }) => theme.contentBackground};
`;

export const Footer = () => <Container />;
