import { Redirect } from 'expo-router';

import { useMockAuth } from '@/src/auth/mock-auth';

export default function IndexScreen() {
  const { session } = useMockAuth();

  if (session) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/login" />;
}
