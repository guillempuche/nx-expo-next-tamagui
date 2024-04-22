import { Linking } from 'react-native'
import { Link } from 'solito/link'
import {
	Button,
	Card,
	type CardProps,
	H4,
	Image,
	Paragraph,
	Text,
	YStack,
} from 'tamagui'

export const SimpleCard = ({
	title,
	description,
	link,
	withImages = true,
	...props
}: {
	title: string
	description: string
	link: string
	withImages?: boolean
} & CardProps) => {
	return (
		<Card borderRadius='$8' bordered overflow='hidden' {...props}>
			<Card.Header>
				{withImages && (
					<Image
						source={{
							uri: `https://picsum.photos/seed/${title}/1000/500`,
						}}
						height={150}
						$sm={{
							height: 100,
						}}
					/>
				)}
				<YStack px='$4' pt='$4' gap='$2'>
					<H4 size='$5' textTransform='capitalize'>
						{title}
					</H4>
					{!!description && <Paragraph size='$3'>{description}</Paragraph>}
				</YStack>
			</Card.Header>
			<Card.Footer padded px='$4'>
				<Link href={link}>
					<Button onPress={() => Linking.openURL(link)}>Explore More</Button>
				</Link>
			</Card.Footer>
		</Card>
	)
}
