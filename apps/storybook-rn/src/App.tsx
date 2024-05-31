import { ThemeProvider } from '@nx-react-native/shared-ui'
import StorybookUIRoot from '../storybook/storybook'

export const App = () => {
	return (
		<ThemeProvider>
			<StorybookUIRoot />
		</ThemeProvider>
	)
}
