import * as LucideIcons from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Link } from 'solito/link'

type TabBarIconProps = {
	name: keyof typeof LucideIcons
	color: string
	size?: number
}

function TabBarIcon({ name, color, size = 28 }: TabBarIconProps) {
	const IconComponent = LucideIcons[name]

	if (!IconComponent) {
		// Optionally handle the case where the icon name is not found
		console.error(`Icon "${name}" not found in LucideIcons`)
		return null
	}

	return <IconComponent size={size} color={color} />
}

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Tab One',
					tabBarIcon: ({ color }) => <TabBarIcon name='Home' color={color} />,
					headerRight: () => (
						<Link href='/modal'>
							<Pressable>
								{({ pressed }) => (
									<LucideIcons.Info
										size={25}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <TabBarIcon name='Code' color={color} />,
				}}
			/>
		</Tabs>
	)
}
