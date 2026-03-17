import '@/global.css';

import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { NavigationThemes } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { MockAuthProvider } from '@/src/auth/mock-auth';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <MockAuthProvider>
      <ThemeProvider value={NavigationThemes[colorScheme]}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: 'modal', title: 'Design Principles' }}
          />
        </Stack>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
    </MockAuthProvider>
  );
}
