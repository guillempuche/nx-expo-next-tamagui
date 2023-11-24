import React from 'react';
import { TamaguiProvider } from './tamagui';
import { UniversalThemeProvider } from './theme';
import { SafeAreaProvider } from './safe_area';

export function Provider({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}

const compose = (providers: React.FC<{ children: React.ReactNode }>[]) =>
  providers.reduce((Prev, Curr) => ({ children }) => {
    const Provider = Prev ? (
      <Prev>
        <Curr>{children}</Curr>
      </Prev>
    ) : (
      <Curr>{children}</Curr>
    );
    return Provider;
  });

export const Providers = compose([
  UniversalThemeProvider,
  SafeAreaProvider,
  TamaguiProvider,
]);
