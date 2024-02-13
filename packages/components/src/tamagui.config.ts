// The v2 config imports the css driver on web and react-native on native
// - for reanimated: @tamagui/config/v2-reanimated
// - for react-native only: @tamagui/config/v2-native
import { config } from '@tamagui/config/v2'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes'
import { createTamagui, setupDev } from 'tamagui'

// import * as themesIn from './themes/theme-generated';
import { bodyFont, headingFont } from './themes/fonts'
import { themes } from './themes/theme'

// Hold down Option for a second to see some helpful visuals
setupDev({
	visualizer: true,
})

// /**
//  * This avoids shipping themes as JS. Instead, Tamagui will hydrate them from CSS.
//  */
// const themes = process.env.TAMAGUI_IS_SERVER
//   ? themesIn
//   : ({} as typeof themesIn);

export const tamaguiComponentsConfig = createTamagui({
	...config,
	// themeClassNameOnRoot: true,
	shorthands,
	themes,
	tokens,
	defaultFont: 'body',
	fonts: {
		heading: headingFont,
		body: bodyFont,
	},
})

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore - passing this directly breaks TS types
// conf.mediaQueryDefaultActive = mediaQueryDefaultActive;

export type ITamaguiComponentsConfig = typeof tamaguiComponentsConfig

/// Customized Tamagui. This replace the import of `tamagui` package for our customization.
declare module 'tamagui' {
	interface TamaguiCustomConfig extends ITamaguiComponentsConfig {}
}

export default tamaguiComponentsConfig
