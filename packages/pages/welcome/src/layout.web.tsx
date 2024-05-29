import { ScrollView, Text, YStack } from '@nx-expo-next-tamagui/components'

export function WelcomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<YStack f={1} backgroundColor='$background'>
			<ScrollView>
				<YStack padding='$4' space='$4' jc='center'>
					{children}
				</YStack>
			</ScrollView>
			<Footer />
		</YStack>
	)
}

function Footer() {
	return (
		<YStack padding='$4' ai='center'>
			<Text>Footer Content</Text>
		</YStack>
	)
}
