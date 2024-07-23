import { FeatureTags } from './feature-tags';

export const Features = () => {
  return (
    <section aria-labelledby='features-heading'>
      <div className='container mx-auto px-4'>
        <header className='text-center mb-12'>
          <h2 id='features-heading' className='text-4xl font-bold text-black'>
            Key Features
          </h2>
        </header>

        <FeatureTags />
      </div>
    </section>
  );
};
