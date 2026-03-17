import { Stack, useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { AppButton } from '@/components/ui/app-button';
import { AppCard } from '@/components/ui/app-card';
import { AppPill } from '@/components/ui/app-pill';
import { AppText } from '@/components/ui/app-text';
import { useMockAuth } from '@/src/auth/mock-auth';

const quickActions = [
  {
    title: 'Mock profile',
    detail: 'Signed in with a temporary local session',
  },
  {
    title: 'Protected content',
    detail: 'This page only renders when the in-memory auth state exists',
  },
  {
    title: 'Future expansion',
    detail: 'Real OAuth, OTP verification, and profile bootstrapping can plug in later',
  },
] as const;

export default function ProtectedHomeScreen() {
  const router = useRouter();
  const { session, signOut } = useMockAuth();

  if (!session) {
    return null;
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Protected Home' }} />
      <ScrollView
        className="flex-1 bg-canvas"
        contentContainerClassName="gap-6 px-5 pt-4 pb-24"
        contentInsetAdjustmentBehavior="automatic">
        <AppCard className="gap-5">
          <View className="gap-3">
            <AppPill className="self-start" label="Protected Route" tone="accent" />
            <AppText variant="display">You are inside the mock authenticated area.</AppText>
            <AppText tone="muted">
              This screen stands in for the post-login experience. It is guarded by the mock auth
              provider and can be replaced with your real app shell later.
            </AppText>
          </View>

          <AppCard tone="muted" className="gap-3">
            <View className="flex-row items-center justify-between gap-4">
              <View className="flex-1 gap-1">
                <AppText tone="accent" variant="label">
                  Active Session
                </AppText>
                <AppText variant="title">{session.displayName}</AppText>
              </View>
              <AppPill
                label={session.method === 'google' ? 'Google' : 'Phone'}
                tone={session.method === 'google' ? 'accent' : 'signal'}
              />
            </View>
            <AppText tone="muted" variant="code">
              {session.phoneNumber ?? 'google-oauth-mock@connectx.local'}
            </AppText>
          </AppCard>

          <View className="gap-3">
            <AppButton
              detail="Open the component examples tab"
              label="Browse the Library"
              onPress={() => {
                router.push('/explore');
              }}
              variant="secondary"
            />
            <AppButton
              detail="Return to the login mock"
              label="Sign Out"
              onPress={() => {
                signOut();
                router.replace('/login');
              }}
              variant="ghost"
            />
          </View>
        </AppCard>

        <View className="gap-3">
          <AppText variant="title">Inside The Guard</AppText>
          {quickActions.map((item) => (
            <AppCard key={item.title} className="gap-2">
              <AppText variant="subtitle">{item.title}</AppText>
              <AppText tone="muted">{item.detail}</AppText>
            </AppCard>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
