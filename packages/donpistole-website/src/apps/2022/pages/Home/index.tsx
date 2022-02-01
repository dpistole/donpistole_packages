import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Color from 'color';
import { breakpoints } from 'constants/breakpoints';
import { routing } from '../../routing';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 2.4rem 1.6rem 3.6rem 1.6rem;

  p {
    padding: 1.6rem 0;
    line-height: 2rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1 1 50%;

  // on mobile devices we hide this column
  @media only screen and (min-width: 0px) and (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

const RightColumn = styled.div`
  flex: 1 1 50%;

  // on mobile this column takes up the full width
  @media only screen and (min-width: 0px) and (max-width: ${breakpoints.mobile}px) {
    flex-basis: 100%;
  }
`;

const HelloWorldContainer = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => Color(theme.textColor).lighten(1).string()};
`;

const IntroductionContainer = styled.div``;

export const Home = () => (
  <Container>
    <LeftColumn></LeftColumn>
    <RightColumn>
      <IntroductionContainer>
        <HelloWorldContainer>
          <p>Hello World.</p>
        </HelloWorldContainer>
        <p>
          Welcome, I&apos;m Don, I build things on the internet. I built this
          website.
        </p>
        <p>
          I imagine you&apos;re here because you&apos;re me. If so, keep up the
          good work dude.
        </p>
        <p>
          If you&apos;re not me, maybe you&apos;re a recruiter or potential
          employer? Check out my{' '}
          <Link to={routing.Career.index()}>career page</Link>.
        </p>
      </IntroductionContainer>
    </RightColumn>
  </Container>
);
