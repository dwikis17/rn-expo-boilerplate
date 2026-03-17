import { Link } from 'expo-router';
import { Pressable, ScrollView, View } from 'react-native';

import { AppCard } from '@/components/ui/app-card';
import { AppPill } from '@/components/ui/app-pill';
import { AppText } from '@/components/ui/app-text';
import { Colors, DesignPrinciples, type AppTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const paletteLabels = [
  ['Canvas', 'canvas'],
  ['Surface', 'surfaceRaised'],
  ['Accent', 'accent'],
  ['Signal', 'signal'],
] as const satisfies readonly (readonly [string, keyof typeof Colors.light])[];

const typographySamples = [
  {
    label: 'Display',
    preview: 'Rounded headlines for hero moments and major section anchors.',
    variant: 'hero',
  },
  {
    label: 'Body',
    preview: 'Readable, generous copy for product flows and explanatory text.',
    variant: 'body',
  },
  {
    label: 'Mono',
    preview: 'Token names, metrics, helper copy, and technical accents.',
    variant: 'code',
  },
] as const;

export default function FoundationsScreen() {
  const colorScheme = (useColorScheme() ?? 'light') as AppTheme;
  const colors = Colors[colorScheme];

  return (
    <ScrollView
      className="flex-1 bg-canvas"
      contentContainerClassName="gap-6 px-5 pt-4 pb-24"
      contentInsetAdjustmentBehavior="automatic">
      <AppCard className="gap-5">
        <View className="gap-3">
          <AppText tone="accent" variant="label">
            Design Direction
          </AppText>
          <AppText variant="display">Build future screens with warmth, depth, and clear intent.</AppText>
          <AppText tone="muted">
            The system pairs warm neutrals with a sea-glass accent so the app feels polished without
            reading as generic startup UI.
          </AppText>
        </View>

        <View className="gap-3">
          <View className="rounded-[30px] border border-accent/15 bg-accent-tint p-4">
            <View className="gap-3 rounded-[24px] bg-background p-4">
              <View className="flex-row items-center justify-between">
                <AppPill label="Future-ready foundation" tone="accent" />
                <AppText tone="accent" variant="code">
                  {colorScheme}
                </AppText>
              </View>
              <AppText variant="hero">A tactile system for product screens, dashboards, and flows.</AppText>
              <AppText tone="muted">
                Keep canvas colors soft, lift important surfaces to `surfaceRaised`, and let accent
                carry the primary actions.
              </AppText>
            </View>
          </View>

          <View className="flex-row gap-3">
            <View className="min-h-28 flex-1 rounded-[24px] border border-border bg-surface p-4">
              <AppText tone="soft" variant="label">
                Primary Accent
              </AppText>
              <View className="mt-3 h-14 rounded-[18px] bg-accent" />
            </View>
            <View className="min-h-28 flex-1 rounded-[24px] border border-border bg-surface p-4">
              <AppText tone="soft" variant="label">
                Highlight Tone
              </AppText>
              <View className="mt-3 h-14 rounded-[18px] bg-signal" />
            </View>
          </View>
        </View>

        <Link href="/modal" asChild>
          <Pressable className="rounded-full border border-border-strong bg-surface px-5 py-4">
            <View className="gap-1">
              <AppText variant="bodyStrong">Open the principle sheet</AppText>
              <AppText tone="muted" variant="code">
                Review the rules before building new routes and features.
              </AppText>
            </View>
          </Pressable>
        </Link>
      </AppCard>

      <View className="gap-3">
        <AppText variant="title">Color System</AppText>
        <AppText tone="muted">
          These semantic colors are the base layer for pages, cards, accents, and system states in
          both light and dark mode.
        </AppText>
        <View className="gap-3">
          {paletteLabels.map(([label, key]) => (
            <AppCard key={key} className="gap-4">
              <View className="flex-row items-start justify-between gap-4">
                <View className="flex-1 gap-1">
                  <AppText variant="subtitle">{label}</AppText>
                  <AppText tone="muted" variant="code">
                    {String(key)}
                  </AppText>
                </View>
                <View
                  className="h-16 w-16 rounded-[22px] border border-border"
                  style={{ backgroundColor: colors[key] }}
                />
              </View>
              <AppText tone="soft" variant="code">
                {colors[key]}
              </AppText>
            </AppCard>
          ))}
        </View>
      </View>

      <View className="gap-3">
        <AppText variant="title">Typography</AppText>
        <AppCard tone="muted" className="gap-4">
          {typographySamples.map((sample) => (
            <View key={sample.label} className="gap-1">
              <AppText tone="accent" variant="label">
                {sample.label}
              </AppText>
              <AppText variant={sample.variant}>{sample.preview}</AppText>
            </View>
          ))}
        </AppCard>
      </View>

      <View className="gap-3">
        <AppText variant="title">Principles</AppText>
        <View className="gap-3">
          {DesignPrinciples.map((principle) => (
            <AppCard key={principle.title} className="gap-2">
              <AppText variant="subtitle">{principle.title}</AppText>
              <AppText tone="muted">{principle.description}</AppText>
            </AppCard>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
