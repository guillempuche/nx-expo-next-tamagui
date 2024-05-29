import { ResourcesScreen } from '@nx-expo-next-tamagui/pages/resources'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import { View } from 'tamagui'

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

export default function ModalScreen() {
	return (
		<View f={1} ai='center' jc='center'>
			<ResourcesScreen />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	)
}
