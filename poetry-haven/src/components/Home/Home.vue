<!-- src/components/Home/Home.vue -->
<template>
    <div>
      <HeroSection />
      <IntroductionSection />
      <FeaturedSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  </template>
  
  <script>
  import HeroSection from './HeroSection.vue';
  import IntroductionSection from './IntroductionSection.vue';
  import FeaturedSection from './FeaturedSection.vue';
  import HowItWorksSection from './HowItWorksSection.vue';
  import TestimonialsSection from './TestimonialsSection.vue';
  
  export default {
    name: 'Home',
    components: {
      HeroSection,
      IntroductionSection,
      FeaturedSection,
      HowItWorksSection,
      TestimonialsSection,
    },
  };
  </script>
  