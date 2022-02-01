import React from 'react';
import styled from 'styled-components';

import { NavBar, NavBarLink } from '../../components';
import { WorkHistory } from './components/WorkHistory';
import { Introduction } from './components/Introduction';

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
`;

export const Career = () => (
  <Container>
    <NavBar>
      <NavBarLink to="/career">Career</NavBarLink>
    </NavBar>
    <Introduction />
    <WorkHistory />
  </Container>
);
