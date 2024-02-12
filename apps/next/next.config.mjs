//@ts-check

import { composePlugins, withNx } from '@nx/next';

import tamagui from '@tamagui/next-plugin';
// Instead of direct import, do this because of '@tamagui/next-plugin' is a CommonJS module.
const { withTamagui } = tamagui;

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	nx: {
		// Set this to true if you would like to to use SVGR
		// See: https://github.com/gregberge/svgr
		svgr: false,
	},
	reactStrictMode: true,
	swcMinify: true,
	transpilePackages: [
		'solito',
		'react-native-web',
		'expo-linking',
		'expo-web-browser',
		'react-native-gesture-handler',
		'@nx-expo-next-tamagui/components',
		'@nx-expo-next-tamagui/app/provider',
		'@nx-expo-next-tamagui/app/benefits',
		'@nx-expo-next-tamagui/app/resources',
		'@nx-expo-next-tamagui/app/welcome',
	],
	modularizeImports: {
		'@tamagui/lucide-icons': {
			transform: '@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}',
			skipDefaultConversion: true,
		},
	},
	experimental: {
		// Enable SWC
		forceSwcTransforms: true,
		swcTraceProfiling: true,
		scrollRestoration: true,
	},
};

const plugins = [
	withNx,
	withTamagui({
		config: './tamagui.config.ts',
		platform: 'web',
		themeBuilder: {
			input: '../../packages/components/src/themes/theme.ts',
			output: '../../packages/components/src/themes/theme-generated.ts',
		},
		components: ['tamagui', '@nx-expo-next-tamagui/components'],
		importsWhitelist: ['constants.js', 'colors.js'],
		outputCSS:
			process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
		logTimings: true,
		// Disable static extraction, faster to iterate in dev mode (default false)
		disableExtraction: process.env.NODE_ENV === 'development',

		// [Experiment] Reduced bundle size react-native-web
		useReactNativeWebLite: false,
		// excludeReactNativeWebExports: [
		// 	'VirtualizedList',
		// 	'Switch',
		// 	'ProgressBar',
		// 	'Picker',
		// 	'CheckBox',
		// 	'Touchable',
		// 	'Animated',
		// 	'FlatList',
		// 	'Modal',
		// ],
	}),
];

export default composePlugins(...plugins)(nextConfig);
