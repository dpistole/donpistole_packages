import React from 'react';
import styled from 'styled-components';
import { NavBox } from './components/NavBox';
import { ToggleLetter } from './components/ToggleLetter';
import { breakpoints } from '../../../../constants/breakpoints';

const Container = styled.div`
  height: 15rem;
  width: 100%;
  flex: 0 0 15rem;
  display: flex;
  flex-direction: row;
`;

const LogoContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5rem;
  background: ${({ theme }) => theme.contentBackground};
`;

const Logo = styled.div``;

const Spacer = styled.div`
  flex: 1 1 auto;
  min-width: 5rem;
  background: ${({ theme }) => theme.contentBackground};
  border-bottom-right-radius: 2rem;
`;

const NavBoxContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.pageBackground};
`;

const MobileBreak = styled.br`
  display: none;
  @media only screen and (min-width: 0px) and (max-width: ${breakpoints.mobile}px) {
    display: inline;
  }
`;

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo>
          {'don'
            .split('')
            .map((c, index) =>
              /[a-zA-Z]/.test(c) ? (
                <ToggleLetter key={index}>{c}</ToggleLetter>
              ) : (
                c
              ),
            )}
          <MobileBreak />
          {'pistole'
            .split('')
            .map((c, index) =>
              /[a-zA-Z]/.test(c) ? (
                <ToggleLetter key={index}>{c}</ToggleLetter>
              ) : (
                c
              ),
            )}
        </Logo>
      </LogoContainer>
      <Spacer />
      <NavBoxContainer>
        <NavBox />
      </NavBoxContainer>
    </Container>
  );
};
