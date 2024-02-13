import { ScrollView, SimpleCard } from '@nx-expo-next-tamagui/components'

export function BenefitsScreen() {
	return (
		<ScrollView>
			<SimpleCard
				title='Unified Codebase'
				description='Write once and maintain one codebase for both iOS and Android.'
				link='https://nx.dev/nx-api/expo'
			/>
			<SimpleCard
				title='Seamless Integration'
				description='Integrate with existing web projects seamlessly using Solito and NextJS.'
				link='https://solito.dev/'
				withImages={false}
			/>
		</ScrollView>
	)
}
