import React from 'react';
import Color from 'color';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

export interface ResumeHeaderProps {
  employerName: string;
  employerLogo: string;
  title: string;
  tenure: string;
  showEmployerName?: boolean;
}

const Container = styled.div`
  display: flex;
  padding: 3.2rem;
  flex-direction: row;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

const EmployerContainer = styled.div`
  flex: 1 0 auto;
  font-size: 3.2rem;
  display: flex;
`;

const EmployerLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmployerLogoImage = styled.img`
  height: 5rem;
  width: auto;
`;

const EmployerName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1.6rem;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    font-size: 2.4rem;
  }
`;

const EmploymentDetailsContainer = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.6rem 0;
`;

const TenureContainer = styled.div`
  font-size: 1.6.rem;
  text-align: right;
  font-style: italic;
  line-height: 2.4rem;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    text-align: left;
  }
`;

const TitleContainer = styled.div`
  flex: 0 1 auto;
  font-size: 2.8rem;
  font-weight: bold;
  padding: 0.8rem 0;
  color: ${({ theme }) => Color(theme.textColor).lighten(0.25).string()};
`;

export const ResumeHeader = ({
  employerName,
  employerLogo,
  tenure,
  title,
  showEmployerName = false,
}: ResumeHeaderProps) => (
  <Container>
    <EmployerContainer>
      <EmployerLogoContainer>
        <EmployerLogoImage src={employerLogo} title={`${employerName} Logo`} />
      </EmployerLogoContainer>
      {showEmployerName && <EmployerName>{employerName}</EmployerName>}
    </EmployerContainer>
    <EmploymentDetailsContainer>
      <TitleContainer>{title}</TitleContainer>
      <TenureContainer>{tenure}</TenureContainer>
    </EmploymentDetailsContainer>
  </Container>
);
