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

const Container = styled.div.attrs<NavBoxButtonProps>((p) => {
  console.log('using props: ', p);

  return {
    disabled: p.disabled || false,
    active: p.active || false,
  };
})`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: ${({ disabled }: NavBoxButtonProps) =>
    disabled ? 'default' : 'pointer'};

  .navbox--icon {
    color: ${({ theme, disabled, active }) => {
      if (disabled) {
        return Color(theme.pageBackground).darken(0.1).fade(0.2).string();
      }

      if (active) {
        return theme.accentColor1;
      }

      return Color(theme.accentColor1).grayscale().string();
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
      tabIndex={0}
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
