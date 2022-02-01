import React, { useState } from 'react';
import styled from 'styled-components';
import Color from 'color';

interface ToggleLetterProps {
  children: React.ReactNode;
}

interface ToggleLetterContainerProps {
  isToggled: boolean;
}

const ToggleLetterContainer = styled.div.attrs(
  ({ isToggled }: ToggleLetterContainerProps) => ({ isToggled }),
)`
  font-size: 4.8rem;
  font-family: 'Fredoka One';
  color: ${({ theme, isToggled }) => {
    if (isToggled) {
      return theme.accentColor;
    }

    return Color(theme.background).darken(0.5).string();
  }};
  cursor: pointer;
`;

export const ToggleLetter = ({ children }: ToggleLetterProps) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <ToggleLetterContainer
      role="button"
      isToggled={isToggled}
      onClick={() => {
        setIsToggled(!isToggled);
      }}
    >
      {children}
    </ToggleLetterContainer>
  );
};
