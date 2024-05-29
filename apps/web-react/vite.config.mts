// import path from 'node:path'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react'
/// <reference types='vitest' />
import { defineConfig } from 'vite'

// import tamaguiComponentsConfig from './src/tamagui.config.ts'

// const monorepoRoot = path.resolve(__dirname, '..', '..')
// const tamaguiConfigPath = path.resolve(
// 	monorepoRoot,
// 	'apps/web-react/src/tamagui.config.ts',
// )

export default defineConfig(({ mode }) => ({
	root: __dirname,
	cacheDir: '../../node_modules/.vite/apps/web-react',

	server: {
		port: 4200,
		host: 'localhost',
	},

	preview: {
		port: 4300,
		host: 'localhost',
	},

	plugins: [
		nxViteTsPaths(),

		react({
			// For React and Tamagui
			babel: {
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
			},
		}),

		// For Tamagui
		tamaguiPlugin({ config: './tamagui.config.ts' }),
		// tamaguiPlugin({ config: tamaguiConfigPath }),

		// Adds the optimizing compiler
		mode === 'production'
			? tamaguiExtractPlugin({ config: './tamagui.config.ts' })
			: null,
	],

	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [ nxViteTsPaths() ],
	// },

	build: {
		outDir: '../../dist/apps/web-react',
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},

	define: {
		'import.meta.vitest': undefined,
	},
	test: {
		globals: true,
		cache: {
			dir: '../../node_modules/.vitest',
		},
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		includeSource: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		reporters: ['default'],
		coverage: {
			reportsDirectory: '../../coverage/apps/web-react',
			provider: 'v8',
		},
	},
}))
