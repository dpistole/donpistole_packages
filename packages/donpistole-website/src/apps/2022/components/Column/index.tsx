import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

export interface ColumnProps {
  isHiddenOnMobile?: boolean;
}

const Container = styled.div.attrs<ColumnProps>((p) => p)`
  flex: 1 1 50%;
  padding: 0 2.4rem;

  ${({ isHiddenOnMobile = false }: ColumnProps) => {
    if (isHiddenOnMobile) {
      return `
      @media only screen and (min-width: 0px) and (max-width: ${breakpoints.mobile}px) {
        display: none;
      }
    `;
    }

    return '';
  }}
`;

export const Column = Container;
