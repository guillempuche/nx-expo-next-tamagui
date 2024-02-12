module.exports = () => ({
	presets: ['@nx/next/babel'],
	plugins: [
		[
			'@tamagui/babel-plugin',
			{
				config: './tamagui.config.ts',
				components: [
					'@nx-expo-next-tamagui/app/provider',
					'@nx-expo-next-tamagui/app/benefits',
					'@nx-expo-next-tamagui/app/resources',
					'@nx-expo-next-tamagui/app/welcome',
					'@nx-expo-next-tamagui/components',
					'tamagui',
				],
				logTimings: true,
				disableExtraction: process.env.NODE_ENV === 'development',
			},
		],
	],
});
