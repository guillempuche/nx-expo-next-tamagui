// The v2 config imports the css driver on web and react-native on native
// - for reanimated: @tamagui/config/v2-reanimated
// - for react-native only: @tamagui/config/v2-native
import { config } from '@tamagui/config/v2';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';
import { createTamagui } from 'tamagui';

export const tamaguiComponentsConfig = createTamagui({
  ...config,
  shorthands,
  themes,
  tokens,
});
export type ITamaguiComponentsConfig = typeof tamaguiComponentsConfig;

/// Customized Tamagui. This replace the import of `tamagui` package for our customization.
declare module 'tamagui' {
  interface TamaguiCustomConfig extends ITamaguiComponentsConfig {}
}

export default tamaguiComponentsConfig;
