import React from 'react';
import Color from 'color';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import { routing } from 'apps/2022/routing';
import { faCamera, faTruckMonster } from '@fortawesome/free-solid-svg-icons';
import {
  faHouse,
  faMailbox,
  faBriefcase,
} from '@fortawesome/pro-duotone-svg-icons';
import { NavBoxButton } from './components/NavBoxButton';

const Container = styled.div`
  height: 15rem;
  width: 15rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  background: ${({ theme }) => Color(theme.background).darken(0.5).hex()};
`;

const NavBoxButtonContainer = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const NavBox = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navBoxConfig = [
    {
      icon: faHouse,
      title: 'Home',
      route: routing.Home.index(),
      onClick: () => {
        navigate(routing.Home.index());
      },
    },
    {
      icon: faBriefcase,
      title: 'Career',
      route: routing.Career.index(),
      onClick: () => {
        navigate(routing.Career.index());
      },
    },
    null,
    // row 2
    null,
    {
      disabled: true,
      icon: faTruckMonster,
      title: 'Truk',
      route: '/truk',
      onClick: () => {
        navigate(routing.Truck.index());
      },
    },
    null,
    // row 3
    null,
    {
      disabled: true,
      icon: faCamera,
      title: 'Pics',
      onClick: () => {
        navigate(routing.Pics.index());
      },
    },
    {
      icon: faMailbox,
      title: 'Contact Me',
      route: routing.Contact.index(),
      onClick: () => {
        navigate(routing.Contact.index());
      },
    },
  ];

  return (
    <Container>
      {
        // TODO fix typing
        // @ts-ignore
        navBoxConfig.map((boxConfig, index) => (
          <NavBoxButtonContainer key={index}>
            {boxConfig === null ? null : (
              <NavBoxButton
                onClick={boxConfig.onClick}
                icon={boxConfig.icon}
                title={boxConfig.title}
                active={boxConfig.route === location.pathname}
                disabled={boxConfig.disabled}
              />
            )}
          </NavBoxButtonContainer>
        ))
      }
    </Container>
  );
};