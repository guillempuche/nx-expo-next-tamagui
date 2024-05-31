const IS_PROD = process.env.APP_VARIANT === 'production'

module.exports = ({ config }) => {
	return {
		...config,
		name: IS_PROD ? 'Tempalate' : 'Tempalate Dev',
		slug: 'nx-template',
		version: '1.0.0',
		orientation: 'portrait',
		scheme: 'example',
		icon: './src/assets/images/icon.png',
		splash: {
			image: './src/assets/images/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff',
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './src/assets/images/adaptive-icon.png',
				backgroundColor: '#FFFFFF',
			},
			// package: IS_PROD ? 'es.example.app' : 'es.example.appdev',
			package: 'es.example.appdev',
		},
		experiments: {
			typedRoutes: true,
		},
		expo: {
			extra: {
				eas: {
					// projectId: process.env.EAS_ID,
					projectId: 'cf7be7fd-1ae1-4139-800f-e7e82b872cff',
				},
			},
			// owner: process.env.EAS_OWNER,
			owner: 'guillem-test',
			slug: 'nx-template',
		},
		runtimeVersion: {
			policy: 'appVersion',
		},
		plugins: [
			'expo-router',
			[
				'expo-dev-launcher',
				{
					launchModeExperimental: 'most-recent',
				},
			],
			[
				'expo-build-properties',
				{
					android: {
						minSdkVersion: 26,
						compileSdkVersion: 34,
						targetSdkVersion: 34,
					},
					ios: {
						deploymentTarget: '13.4',
					},
				},
			],
		],
		web: {
			bundler: 'metro',
			favicon: './src/assets/images/favicon.png',
		},
	}
}
