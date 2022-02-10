import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { NavLink } from 'react-router-dom';

export interface NavBarProps {
  children?: React.ReactNode;
}

const Container = styled.div`
  height: 7.5rem;
  width: 100%;
  flex: 0 0 5rem;
  background: ${({ theme }) =>
    Color(theme.pageBackground).lighten(0.2).string()};
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
  font-family: 'Fredoka One';
  padding: 0.8rem 1.6rem;
  border-radius: 1.25rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: 'Open Sans'; */
  color: ${({ theme }) => theme.textColor};
  outline: none;

  color: ${({ theme }) => theme.accentColor1Text};

  &:hover,
  &:focus {
    border: 0.25rem solid
      ${({ theme }) => Color(theme.accentColor2).grayscale().string()};
    background-color: ${({ theme }) =>
      Color(theme.accentColor2).grayscale().string()};
  }

  &.active {
    border: 0.25rem solid
      ${({ theme }) => Color(theme.accentColor2).darken(0.5).string()};
    background-color: ${({ theme }) =>
      Color(theme.accentColor2).darken(0.1).string()};
  }
`;

export const NavBar = ({ children }: NavBarProps) => (
  <Container>
    <LinkContainer>{children}</LinkContainer>
  </Container>
);
