module.exports = () => ({
	presets: ['@nx/next/babel'],
	plugins: [
		[
			'@tamagui/babel-plugin',
			{
				config: './tamagui.config.ts',
				components: [
					'@nx-expo-next-tamagui/pages/provider',
					'@nx-expo-next-tamagui/pages/benefits',
					'@nx-expo-next-tamagui/pages/resources',
					'@nx-expo-next-tamagui/pages/welcome',
					'@nx-expo-next-tamagui/components',
					'tamagui',
				],
				logTimings: true,
				disableExtraction: process.env.NODE_ENV === 'development',
			},
		],
	],
})
