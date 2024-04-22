import type { Meta, StoryObj } from '@storybook/react'
import { SimpleCard } from './SimpleCard'

const meta: Meta<typeof SimpleCard> = {
	title: 'ui/SimpleCard',
	parameters: { layout: 'centered' },
	component: SimpleCard,
}

type Story = StoryObj<typeof SimpleCard>

export const Basic: Story = {
	args: {
		withImages: true,
		title: 'Why you should use Tamagui',
		$gtMd: { width: 340 },
		description:
			'Tamagui is the best way to develop performant cross-platform apps with one codebase...',
		tag: 'React',
		authors: [
			{
				id: 1,
				name: 'John Doe',
				avatar: 'https://i.pravatar.cc/150?img=67/32/32?ca=1',
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar: 'https://i.pravatar.cc/150?img=30/32/32?ca=1',
			},
		],
	},
}

export default meta
