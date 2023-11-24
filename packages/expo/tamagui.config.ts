import {
  tamaguiComponentsConfig,
  ITamaguiComponentsConfig,
} from '@nx-next-reactnative-tamagui/components';

/// Customized Tamagui. This replace the import of `tamagui` package for our customization.
declare module 'tamagui' {
  interface TamaguiCustomConfig extends ITamaguiComponentsConfig {}
}

export default tamaguiComponentsConfig;
