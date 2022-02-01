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
  display: inline;
  font-size: 4.8rem;
  font-family: 'Fredoka One';
  color: ${({ theme, isToggled }) => {
    if (isToggled) {
      return theme.accentColor1;
    }

    return Color(theme.contentBackground).darken(0.5).string();
  }};
  cursor: pointer;
  user-select: none;
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
