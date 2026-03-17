import { ScrollView, View } from 'react-native';

import { AppButton } from '@/components/ui/app-button';
import { AppCard } from '@/components/ui/app-card';
import { AppPill } from '@/components/ui/app-pill';
import { AppText } from '@/components/ui/app-text';
import { Radius, Spacing } from '@/constants/theme';

const usageRules = [
  'Reach for `AppCard` before building a one-off container so spacing and elevation stay consistent.',
  'Use the primary button once per screen section; secondary buttons support adjacent actions without competing.',
  'Treat coral as a supporting tone for urgency, highlights, and progress moments rather than default CTA color.',
  'Keep body copy on `textMuted` when the goal is explanation, and promote to `text` only for high-priority content.',
] as const;

export default function LibraryScreen() {
  return (
    <ScrollView
      className="flex-1 bg-canvas"
      contentContainerClassName="gap-6 px-5 pt-4 pb-24"
      contentInsetAdjustmentBehavior="automatic">
      <AppCard className="gap-4">
        <View className="gap-2">
          <AppText tone="accent" variant="label">
            Reusable Primitives
          </AppText>
          <AppText variant="hero">A small component base that future product features can extend.</AppText>
          <AppText tone="muted">
            The goal is consistency first: a shared language for cards, pills, and buttons before
            the app grows into more specialized flows.
          </AppText>
        </View>

        <View className="gap-3">
          <AppButton detail="Primary CTA" label="Start a flow" />
          <AppButton detail="Secondary action" label="Review settings" variant="secondary" />
          <AppButton detail="Low emphasis action" label="Read guidelines" variant="ghost" />
        </View>
      </AppCard>

      <View className="gap-3">
        <AppText variant="title">Component Recipes</AppText>
        <View className="gap-3">
          <AppCard className="gap-3">
            <View className="flex-row flex-wrap gap-2">
              <AppPill label="semantic tokens" tone="accent" />
              <AppPill label="continuous radii" tone="neutral" />
              <AppPill label="future forms" tone="signal" />
            </View>
            <AppText variant="subtitle">Cards carry the system.</AppText>
            <AppText tone="muted">
              Use raised cards for key sections, muted cards for grouping, and accent-tinted cards
              when you need to call attention without shouting.
            </AppText>
          </AppCard>

          <AppCard tone="accent" className="gap-2">
            <AppText variant="subtitle">Accent surfaces highlight progress or direction.</AppText>
            <AppText tone="muted">
              This is the right treatment for onboarding, summaries, checkpoints, and focused empty
              states.
            </AppText>
          </AppCard>
        </View>
      </View>

      <View className="gap-3">
        <AppText variant="title">Tokens In Practice</AppText>
        <AppCard tone="muted" className="gap-4">
          <View className="gap-2">
            <AppText tone="accent" variant="label">
              Spacing
            </AppText>
            <AppText tone="muted" variant="code">
              xs {Spacing.xs} | sm {Spacing.sm} | md {Spacing.md} | lg {Spacing.lg} | xl{' '}
              {Spacing.xl} | xxl {Spacing.xxl}
            </AppText>
          </View>
          <View className="gap-2">
            <AppText tone="accent" variant="label">
              Radius
            </AppText>
            <AppText tone="muted" variant="code">
              sm {Radius.sm} | md {Radius.md} | lg {Radius.lg} | xl {Radius.xl}
            </AppText>
          </View>
        </AppCard>
      </View>

      <View className="gap-3">
        <AppText variant="title">Usage Rules</AppText>
        <View className="gap-3">
          {usageRules.map((rule, index) => (
            <AppCard key={rule} className="flex-row gap-4">
              <View className="mt-0.5 h-8 w-8 items-center justify-center rounded-full bg-accent-tint">
                <AppText tone="accent" variant="bodyStrong">
                  {index + 1}
                </AppText>
              </View>
              <View className="flex-1">
                <AppText tone="muted">{rule}</AppText>
              </View>
            </AppCard>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
