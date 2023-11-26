import { BenefitsScreen } from '@nx-expo-next-tamagui/app/benefits';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'top']}>
      <BenefitsScreen />
    </SafeAreaView>
  );
}
