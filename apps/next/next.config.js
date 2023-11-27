//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withTamagui } = require('@tamagui/next-plugin');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    'solito',
    'react-native-web',
    'expo-linking',
    'expo-web-browser',
    'react-native-gesture-handler',
    '@nx-expo-next-tamagui/components',
  ],
  modularizeImports: {
    '@tamagui/lucide-icons': {
      transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
      skipDefaultConversion: true,
    },
  },
  experimental: {
    forceSwcTransforms: true,
    swcTraceProfiling: true,
    scrollRestoration: true,
  },
};

const plugins = [
  withNx,
  withTamagui({
    platform: 'web',
    themeBuilder: {
      input: '../../packages/components/src/themes/theme.ts',
      output: '../../packages/components/src/themes/theme-generated.ts',
    },
    config: './tamagui.config.ts',
    components: ['tamagui', '@nx-expo-next-tamagui/components'],
    importsWhitelist: ['constants.js', 'colors.js'],
    outputCSS:
      process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    logTimings: true,
    // [Experiment] Reduced bundle size react-native-web
    useReactNativeWebLite: false,
    excludeReactNativeWebExports: [
      'VirtualizedList',
      'Switch',
      'ProgressBar',
      'Picker',
      'CheckBox',
      'Touchable',
      'Animated',
      'FlatList',
      'Modal',
    ],
  }),
];

module.exports = composePlugins(...plugins)(nextConfig);
