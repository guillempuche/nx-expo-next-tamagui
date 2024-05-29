module.exports = api => {
	api.cache(true)

	return {
		presets: ['babel-preset-expo'],
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
				},
			],
		],
	}
}
