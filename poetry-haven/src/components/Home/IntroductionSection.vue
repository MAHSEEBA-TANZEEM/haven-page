<template>
    <section class="py-12 text-center text-white-800 md:py-24">
      <div class="container mx-auto px-4 md:px-8">
        <h2 class="mb-4 text-xl font-bold md:text-2xl">Welcome to The Peoples Poetry Haven – A Digital Sanctuary for Poets!</h2>
        <p class="mb-6">Whether you’re an emerging poet or an established wordsmith, our platform gives you the tools to showcase, sell, and collaborate on your poetry. Create your profile, publish your work, and let the world experience the magic of your words.</p>
        <!-- Displaying the Username from Pinia Store -->
        <p class="mb-6 text-lg font-semibold">Welcome, {{ userStore.username }}!</p>
      </div>
    </section>
  </template>
  
  <script setup>
  import { useUserStore } from '../../stores/user';
  const userStore = useUserStore();
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
.text-content {
  text-align: center;
  padding: 16px;
}
.text-content h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
.text-content p {
  font-size: 16px;
  margin-bottom: 24px;
}
  </style>
  