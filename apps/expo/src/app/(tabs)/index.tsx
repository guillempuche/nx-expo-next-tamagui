import { WelcomeScreen } from '@nx-expo-next-tamagui/pages/welcome'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabOneScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'top']}>
			<WelcomeScreen />
		</SafeAreaView>
	)
}
