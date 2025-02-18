<template>
  <nav class="background-image p-4">
    <div class="container mx-auto flex items-center justify-between">
      <router-link
        class="text-2xl font-bold text-black"
        to="/"
        :class="{ hidden: menuOpen && isSmallScreen }"
      >
        <img src="/images/image4.jpg" alt="logo" class="h-10 w-20 rounded-full object-cover bg-pink">
      </router-link>
      <button
        class="block lg:hidden text-black focus:outline-none"
        @click="toggleMenu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div
        :class="menuOpen ? 'block' : 'hidden'"
        class="w-full lg:flex lg:items-center lg:w-auto"
      >
        <ul class="lg:flex lg:justify-between text-center lg:text-left lg:space-x-6 mt-4 lg:mt-0">
          <li>
            <router-link to="/" class="text-black hover:text-gray-600">Home</router-link>
          </li>
          <li>
            <router-link to="/explore-poets" class="text-black hover:text-gray-600">Explore Poets</router-link>
          </li>
          <li>
            <router-link to="/marketplace" class="text-black hover:text-gray-600">Marketplace</router-link>
          </li>
          <li>
            <router-link to="/subscription-plans" class="text-black hover:text-gray-600">Subscription Plans</router-link>
          </li>
          <li>
            <router-link to="/community-events" class="text-black hover:text-gray-600">Community & Events</router-link>
          </li>
          <li>
            <router-link to="/blog" class="text-black hover:text-gray-600">Blog</router-link>
          </li>
          <li>
            <router-link to="/about-us" class="text-black hover:text-gray-600">About Us</router-link>
          </li>
          <li>
            <router-link to="/help-center" class="text-black hover:text-gray-600">Help Center</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu',
  data() {
    return {
      menuOpen: false,
      isSmallScreen: window.innerWidth < 1024
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth < 1024;
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
.form-input {
  margin-right: 0.5rem;
}
.background-image {
  background-image: url('/images/background2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: auto;
}
</style>
