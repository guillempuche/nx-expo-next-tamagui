export default (config) => ({
	...config,
	name: 'Expo App',
	slug: 'expo-app',
	version: '1.0.0',
	orientation: 'portrait',
	scheme: 'expo-app',
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
	},
	web: {
		bundler: 'metro',
		favicon: './src/assets/images/favicon.png',
	},
	plugins: ['expo-router'],
	experiments: {
		typedRoutes: true,
	},
});
