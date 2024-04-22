import {
	type ITamaguiComponentsConfig,
	tamaguiComponentsConfig,
} from '@nx-expo-next-tamagui/components'

/// Customized Tamagui. This replace the import of `tamagui` package for our customization.
declare module 'tamagui' {
	interface TamaguiCustomConfig extends ITamaguiComponentsConfig {}
}

export default tamaguiComponentsConfig
