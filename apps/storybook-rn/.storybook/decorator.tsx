import {
	TamaguiProvider,
	YStack,
	tamaguiComponentsConfig,
} from '@nx-expo-next-tamagui/components'
import { UniversalThemeProvider } from '@nx-expo-next-tamagui/pages/provider'
import type { Decorator } from '@storybook/react'
// import { ToastProvider } from 'app/provider/toast'

export const StorybookDecorator: Decorator = (Story, args) => {
	return (
		<UniversalThemeProvider>
			<TamaguiProvider config={tamaguiComponentsConfig} defaultTheme='light'>
				{/* <ToastProvider noSafeArea> */}
				<YStack bc='$background' f={1}>
					<Story />
				</YStack>
				{/* </ToastProvider> */}
			</TamaguiProvider>
		</UniversalThemeProvider>
	)
}
