import type { StorybookConfig } from '@storybook/react-native'
// import type { StorybookConfig } from '@storybook/react-vite';
// import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
// import { mergeConfig } from 'vite'

const config: StorybookConfig = {
	stories: ['../../../packages/components/**/*.stories.@(ts|tsx|mdx)'],
	addons: ['@storybook/addon-essentials'],
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
