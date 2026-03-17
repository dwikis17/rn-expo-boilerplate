import React from 'react';

type AuthMethod = 'google' | 'phone';

type AuthSession = {
  displayName: string;
  method: AuthMethod;
  phoneNumber?: string;
};

type MockAuthContextValue = {
  signInWithGoogle: () => void;
  signInWithPhone: (phoneNumber: string) => void;
  signOut: () => void;
  session: AuthSession | null;
};

const MockAuthContext = React.createContext<MockAuthContextValue | null>(null);

export function MockAuthProvider({ children }: React.PropsWithChildren) {
  const [session, setSession] = React.useState<AuthSession | null>(null);

  const value = React.useMemo<MockAuthContextValue>(
    () => ({
      session,
      signInWithGoogle: () => {
        setSession({
          displayName: 'Alya Hartono',
          method: 'google',
        });
      },
      signInWithPhone: (phoneNumber: string) => {
        setSession({
          displayName: 'Phone Member',
          method: 'phone',
          phoneNumber,
        });
      },
      signOut: () => {
        setSession(null);
      },
    }),
    [session]
  );

  return <MockAuthContext value={value}>{children}</MockAuthContext>;
}

export function useMockAuth() {
  const value = React.use(MockAuthContext);

  if (!value) {
    throw new Error('useMockAuth must be used inside MockAuthProvider');
  }

  return value;
}
