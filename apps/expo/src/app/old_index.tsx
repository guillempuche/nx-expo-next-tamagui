// import { Avatar, Circle, Theme, YStack, useThemeName } from '@my/ui'
import { HomeScreen } from '@nx-expo-next-tamagui/app/home';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { LinearGradient } from '@tamagui/linear-gradient';
import { Home, Plus } from '@tamagui/lucide-icons';
// import { useUser } from 'app/utils/useUser'
import { Tabs } from 'expo-router';
import { SolitoImage } from 'solito/image';
import { useRouter } from 'solito/router';
import { Stack, YStack, Text } from 'tamagui';

export default function LandingScreen() {
  // return <Stack>This is the first viewed page</Stack>;
  return (
    <YStack flex={1} alignItems="center" justifyContent="center">
      <Text fontSize={24}>Welcome to the Home Screen</Text>
    </YStack>
  );
}
