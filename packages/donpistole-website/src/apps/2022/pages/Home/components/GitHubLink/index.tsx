import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  border-radius: 1.2rem;
  padding: 1.2rem;
`;

const IconContainer = styled.div`
  flex: 0 0 auto;
  width: 5rem;
`;
const TextContainer = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.6rem;
`;

export const GitHubLink = () => (
  <Container>
    <ButtonContainer>
      <IconContainer>
        <FontAwesomeIcon size="3x" icon={faGithubAlt} />
      </IconContainer>
      <TextContainer>
        <a href="https://github.com/dpistole/donpistole_packages" target="_new">
          Want to see the code? Click here.
        </a>
      </TextContainer>
    </ButtonContainer>
  </Container>
);
