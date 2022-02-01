import React from 'react';
import styled from 'styled-components';
import Color from 'color';

const Container = styled.div`
  width: 100%;
  min-height: 22.5rem;
  background: ${({ theme }) => Color(theme.background).darken(0.35).string()};
`;

export const Footer = () => <Container />;
