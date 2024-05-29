import {
	H1,
	ListItem,
	ScrollView,
	YStack,
} from '@nx-expo-next-tamagui/components'

export function ResourcesScreen() {
	return (
		<ScrollView>
			<YStack padding='$4' space='$4'>
				<H1>Useful Resources</H1>
				<ListItem>Explore Nx for Monorepo Management</ListItem>
				<ListItem>Discover Expo for Universal React Apps</ListItem>
				<ListItem>Learn about Next.js for Web Development</ListItem>
				<ListItem>Visit Tamagui for Cross-Platform UI</ListItem>
				<ListItem>Check Out Solito for Navigation</ListItem>
			</YStack>
		</ScrollView>
	)
}
