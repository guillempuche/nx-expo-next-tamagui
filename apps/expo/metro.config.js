const { withNxMetro } = require('@nx/expo')
const { getDefaultConfig } = require('@expo/metro-config')
const { mergeConfig } = require('metro-config')
const exclusionList = require('metro-config/src/defaults/exclusionList')

const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration and https://docs.expo.dev/guides/customizing-metro/
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
	transformer: {
		babelTransformerPath: require.resolve('react-native-svg-transformer'),
	},
	resolver: {
		assetExts: assetExts.filter(ext => ext !== 'svg'),
		sourceExts: [
			...sourceExts,
			'svg',
			// Needed in Expo 49 according to https://tamagui.dev/docs/guides/expo#update-babel--metro
			'mjs',
		],
		blockList: exclusionList([/^(?!.*node_modules).*\/dist\/.*/]),
		unstable_enableSymlinks: true,
	},
}

module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
	// Change this to true to see debugging info.
	// Useful if you have issues resolving modules
	debug: false,
	// all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
	extensions: [],
	// Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
	watchFolders: [],
})
