import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Color from 'color';
import { breakpoints } from 'constants/breakpoints';
import { routing } from '../../routing';
import { NavBar, Paragraph, SectionHeader, Column } from 'apps/2022/components';
import { GitHubLink } from './components/GitHubLink';
import LeftProgrammerImageSrc from 'assets/images/stock_programmer_left.jpg';
import RightProgrammerImageSrc from 'assets/images/stock_programmer_right.jpg';
import LeftProgrammerImage2Src from 'assets/images/stock_programmer_left2.jpg';

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.contentBackground};
`;

const Row = styled.div`
  display: flex;
  padding: 6rem 1.6rem 3.6rem 1.6rem;
`;

const IntroductionContainer = styled.div``;

const ImageContainer = styled.div`
  padding: 1.6rem;
  box-shadow: ${({ theme }) => theme.boxShadow()};
  margin: 2.4rem;
`;

const ResponsiveImage = styled.img`
  height: auto;
  width: 100%;
`;

export const Home = () => (
  <Container>
    <NavBar />
    <Row>
      <Column isHiddenOnMobile>
        <ImageContainer>
          <ResponsiveImage src={LeftProgrammerImageSrc} />
        </ImageContainer>
      </Column>
      <Column>
        <IntroductionContainer>
          <SectionHeader>Welcome.</SectionHeader>
          <Paragraph>
            I&apos;m Don, I build things on the internet. I built this website.
          </Paragraph>
          <GitHubLink />
        </IntroductionContainer>
      </Column>
    </Row>
    <Row>
      <Column>
        <SectionHeader>How can I help?</SectionHeader>
        <Paragraph>
          If you're a recruiter, or potential employer, may I suggest my{' '}
          <Link to={routing.Career.index()}>career page</Link>.
        </Paragraph>
        <Paragraph>
          If not, well... perhaps you can use the{' '}
          <Link to={routing.Contact.index()}>contact page</Link> to let me know
          what you're looking for.
        </Paragraph>
      </Column>
      <Column isHiddenOnMobile>
        <ImageContainer>
          <ResponsiveImage src={RightProgrammerImageSrc} />
        </ImageContainer>
      </Column>
    </Row>
    <Row>
      <Column></Column>
      <Column></Column>
    </Row>
  </Container>
);
