import { TamaguiProvider as TamaguiProviderOG } from '@nx-expo-next-tamagui/components'
import type React from 'react'

import { tamaguiComponentsConfig } from '@nx-expo-next-tamagui/components'
import { useRootTheme } from '../theme/UniversalThemeProvider'

export const TamaguiProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [rootTheme] = useRootTheme()

	return (
		<TamaguiProviderOG
			config={tamaguiComponentsConfig}
			disableInjectCSS
			disableRootThemeClass
			defaultTheme={rootTheme}
		>
			{children}
		</TamaguiProviderOG>
	)
}
