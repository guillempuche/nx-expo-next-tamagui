import {
	Button,
	H1,
	ScrollView,
	Text,
	YStack,
} from '@nx-expo-next-tamagui/components'
import { Plus } from '@tamagui/lucide-icons'

export function WelcomeScreen() {
	return (
		<ScrollView>
			<YStack padding='$4' space='$4' jc='center'>
				<H1>Welcome</H1>
				<Text fontSize='$4'>You managed to run the app. Bravo 🥳</Text>
				<Text fontSize='$4'>
					Explore the benefits of cross-platform development with Expo, NextJS,
					Tamagui, and Solito.
				</Text>
			</YStack>
		</ScrollView>
	)
}
