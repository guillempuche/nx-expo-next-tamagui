module.exports = function (api) {
  api.cache(true);

  return {
    // // Generate inline source maps
    // sourceMaps: 'inline',
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          config: './tamagui.config.ts',
          components: [
            '@nx-next-reactnative-tamagui/app/provider',
            '@nx-next-reactnative-tamagui/app/home',
            '@nx-next-reactnative-tamagui/components',
            'tamagui',
          ],
          logTimings: true,
        },
      ],
      'expo-router/babel',

      // Reanimated plugin has to be listed last according to the documentation https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
      'react-native-reanimated/plugin',
    ],
  };
};
