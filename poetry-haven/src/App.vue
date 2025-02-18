<template>
  <div id="app" class="background-image">
    <NavigationMenu />
    <router-view />
  </div>
</template>

<script>
import NavigationMenu from './components/Home/NavigationMenu.vue';
import HeroSection from './components/Home/HeroSection.vue';
import IntroductionSection from './components/Home/IntroductionSection.vue';
import FeaturedSection from './components/Home/FeaturedSection.vue';
import HowItWorksSection from './components/Home/HowItWorksSection.vue';
import TestimonialsSection from './components/Home/TestimonialsSection.vue';

export default {
  name: 'App',
  components: {
    NavigationMenu,
    HeroSection,
    IntroductionSection,
    FeaturedSection,
    HowItWorksSection,
    TestimonialsSection
  }
};
</script>


<style>
.background-image {
  background-image: url('/images/background2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

</style>
