module.exports = ({ config }) => {
	return {
		...config,
		name: 'storybook-rn',
		slug: 'storybook-rn',
		version: '0.0.0',
		orientation: 'portrait',
		userInterfaceStyle: 'automatic',
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: true,
			bundleIdentifier: 'com.acme.storybook-rn',
		},
		android: {
			package: 'com.acme.storybook-rn',
		},
		web: {
			bundler: 'metro',
		},
	}
}
