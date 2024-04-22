import type React from 'react'

export const UniversalThemeProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return <>{children}</>
}

export { useRootTheme, useThemeSetting } from '@tamagui/next-theme'
