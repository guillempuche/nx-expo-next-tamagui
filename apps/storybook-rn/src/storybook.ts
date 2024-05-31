import { configure, getStorybookUI } from '@storybook/react-native'

// import { loadStories } from '../../../../.storybook/story-loader' // https://github.com/anli/nx-react-native-v11/blob/f402f9c58119bb59edc0bb1bfed42a6ffd59919d/.storybook/story-loader.js

import '@storybook/addon-ondevice-controls/register'

// configure(() => loadStories(), module) //

const StorybookUIRoot = getStorybookUI({})

export default StorybookUIRoot
