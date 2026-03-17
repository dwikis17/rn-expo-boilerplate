import { Redirect, Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useMockAuth } from '@/src/auth/mock-auth';

export default function TabLayout() {
  const { session } = useMockAuth();
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.canvas,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          color: colors.text,
        },
        sceneStyle: {
          backgroundColor: colors.canvas,
        },
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.tabIconDefault,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Protected',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="chevron.left.forwardslash.chevron.right"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
