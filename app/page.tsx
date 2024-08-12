import { Hero } from '@/components/page/hero/hero';
import { FeatureTags } from '@/components/page/features/feature-tags';
import { Pricing } from '@/components/page/pricing/pricing';
import { AppHeader } from '@/components/page/header/app-header';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureTags />
      <Pricing />
    </main>
  );
}
