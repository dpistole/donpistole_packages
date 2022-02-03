import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/pro-duotone-svg-icons';

const Container = styled.div`
  padding: 6rem 0;
`;

export const LoadingIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.accentColor3};
`;

export const Loader = () => (
  <Container>
    <LoadingIcon icon={faSatellite} size="3x" spin />
  </Container>
);
