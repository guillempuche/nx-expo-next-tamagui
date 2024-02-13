module.exports = api => {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'@tamagui/babel-plugin',
				{
					config: '../../packages/components/src/tamagui.config.ts',
					components: [
						'@nx-expo-next-tamagui/app/provider',
						'@nx-expo-next-tamagui/app/benefits',
						'@nx-expo-next-tamagui/app/resources',
						'@nx-expo-next-tamagui/app/welcome',
						'@nx-expo-next-tamagui/components',
						'tamagui',
					],
					disable: true,
				},
			],
		],
	}
}
