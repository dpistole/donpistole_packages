import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { donpistoleTheme } from '../theme';

export interface WithProvidersProps {
  children: React.ReactChild;
}

const WithProviders = ({ children }: WithProvidersProps) => {
  return <ThemeProvider theme={donpistoleTheme}>{children}</ThemeProvider>;
};

const useRender = (ui: React.ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: WithProviders, ...options });

// eslint throwing error re: duplicate render exports, but we override with customRender
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// eslint throwing error re: duplicate render exports, but we override with customRender
// eslint-disable-next-line import/export
export { useRender as render };
