import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import styled from 'styled-components';

import { routing } from './routing';
import { SingleColumnLayout } from '../../layouts/SingleColumnLayout';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home, Career, Contact } from './pages';

const Container = styled.div`
  font-family: 'Open Sans';
  color: ${({ theme }) => theme.textColor};
`;

export const App = (): any => {
  return (
    <Container>
      <Router>
        <SingleColumnLayout>
          <Header />
          <Routes>
            <Route path={routing.Home.index()} element={<Home />} />
            <Route path={routing.Career.index()} element={<Career />} />
            <Route path={routing.Contact.index()} element={<Contact />} />
            <Route path="*" element={<Navigate to={routing.Home.index()} />} />
          </Routes>
          <Footer />
        </SingleColumnLayout>
      </Router>
    </Container>
  );
};
