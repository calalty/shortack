import { Hero } from '@/components/page/hero/hero';
import { Features } from '@/components/page/features/features';
import { Problem } from '@/components/page/problem/problem';
import { Tech } from '@/components/page/tech/tech';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <Tech />
    </main>
  );
}
