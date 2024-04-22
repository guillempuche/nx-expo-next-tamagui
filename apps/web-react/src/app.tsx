import { Link, Navigate, Route, Routes } from 'react-router-dom'

import { BenefitsScreen } from '@nx-expo-next-tamagui/app/benefits'
import { Provider } from '@nx-expo-next-tamagui/app/provider'
import { WelcomeScreen } from '@nx-expo-next-tamagui/app/welcome'
import { Button, XStack, YStack } from '@nx-expo-next-tamagui/components'

const NavBar = () => (
	<XStack tag='nav' padding='$4' bt='1px solid $borderColor'>
		<Button
			as={Link}
			to={'/welcome'}
			ghost
			size='2'
			marginHorizontal='1'
			paddingVertical='0'
		/>
		<Button
			as={Link}
			to={'/benefits'}
			ghost
			size='2'
			marginHorizontal='1'
			paddingVertical='0'
		/>
	</XStack>
)

export function App() {
	return (
		<Provider>
			<YStack>
				<NavBar />
				<Routes>
					<Route path='/' element={<Navigate replace to='/welcome' />} />
					<Route path='/welcome' element={<WelcomeScreen />} />
					<Route path='/benefits' element={<BenefitsScreen />} />
				</Routes>
			</YStack>
		</Provider>
	)
}
