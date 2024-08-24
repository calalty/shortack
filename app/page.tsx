import { Hero } from '@/components/page/hero/hero';
import { FeatureTags } from '@/components/page/features/feature-tags';
import { Pricing } from '@/components/page/pricing/pricing';
import { GuideLines } from '@/components/page/hero/guide-lines';
import { FeatureCards } from '@/components/page/features/feature-cards';
import { Features } from '@/components/page/features/features';
import { Problem } from '@/components/page/problem/problem';

export default function Home() {
  return (
    <main>
      <GuideLines />
      <Hero />
      {/* <FeatureTags />
      <Pricing /> */}
      <Problem />
      <Features />
    </main>
  );
}
