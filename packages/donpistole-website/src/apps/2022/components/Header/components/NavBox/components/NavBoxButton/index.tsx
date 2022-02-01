import React from 'react';
import styled from 'styled-components';
import Color from 'color';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface NavBoxButtonProps {
  icon?: IconProp | null;
  disabled?: boolean;
  active?: boolean;
  onClick: () => void;
  [extraProp: string]: unknown;
}

const Container = styled.div<NavBoxButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  .navbox--icon {
    color: ${({ theme, disabled, active }) => {
      if (disabled) {
        return Color(theme.background).fade(0.95).string();
      }

      if (active) {
        return theme.accentColor;
      }

      return theme.background;
    }};
  }
`;

export const NavBoxButton = ({
  icon = null,
  disabled = false,
  active = false,
  onClick,
  ...extraProps
}: NavBoxButtonProps) => {
  return (
    <Container
      role="button"
      tabindex={0}
      onClick={() => {
        if (disabled) {
          return;
        }

        onClick();
      }}
      disabled={disabled}
      active={active}
      {...extraProps}
    >
      {icon !== null && (
        <FontAwesomeIcon className="navbox--icon" icon={icon} size="2x" />
      )}
    </Container>
  );
};
