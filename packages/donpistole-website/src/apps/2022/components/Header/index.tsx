import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { NavBox } from './components/NavBox';
import { ToggleLetter } from './components/ToggleLetter';

const Container = styled.div`
  height: 15rem;
  width: 100%;
  flex: 0 0 15rem;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.background};
`;

const LogoContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5rem;
`;

const Spacer = styled.div`
  flex: 1 1 auto;
  min-width: 5rem;
`;

const NavBoxContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        {'don pistole'
          .split('')
          .map((c, index) =>
            /[a-zA-Z]/.test(c) ? (
              <ToggleLetter key={index}>{c}</ToggleLetter>
            ) : (
              c
            ),
          )}
      </LogoContainer>
      <Spacer />
      <NavBoxContainer>
        <NavBox />
      </NavBoxContainer>
    </Container>
  );
};
