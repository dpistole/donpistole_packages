import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { NavLink } from 'react-router-dom';

import { breakpoints } from 'constants/breakpoints';

export interface NavBarProps {
  children: React.ReactNode;
}

const Container = styled.div`
  height: 7.5rem;
  width: 100%;
  flex: 0 0 5rem;
  background: ${({ theme }) => Color(theme.background).darken(0.05).hex()};
  display: flex;
  flex-direction: row;
  padding: 1.6rem 1.6rem;

  justify-content: flex-start;
`;

const LinkContainer = styled.div`
  &:not(:last-child) {
    padding-right: 1.6rem;
  }
`;

export const NavBarLink = styled(NavLink)`
  border-radius: 0.25rem;
  font-size: 2.4rem;
  padding: 0.8rem 1.6rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  color: ${({ theme }) => theme.textColor};
  outline: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) =>
      Color(theme.background).darken(0.1).string()};
  }

  &.active {
    background-color: ${({ theme }) =>
      Color(theme.background).darken(0.15).string()};
  }
`;

export const NavBar = ({ children }: NavBarProps) => (
  <Container>
    <LinkContainer>{children}</LinkContainer>
  </Container>
);
