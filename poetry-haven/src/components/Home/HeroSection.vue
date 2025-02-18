<template>
    <section class="hero-section py-12 text-center text-black md:py-24">
      <div class="container mx-auto flex flex-col items-center px-4 md:flex-row">
        <!-- Video Card -->
        <div class="video-card w-full p-4 md:w-1/2 mb-8 md:mb-0">
          <div class="overflow-hidden rounded-lg bg-white shadow-lg">
            <video class="video-loop w-full" loop autoplay muted playsinline>
              <source src="/vedio/writing vedio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
  
        <!-- Title and Subtitle -->
        <div class="text-content w-full p-4 md:w-1/2">
          <h1 class="mb-4 text-2xl font-bold md:text-4xl">WHERE <span class="text-blue-500">WORDS</span> FIND THEIR HAVEN</h1>
          <p class="mb-6 text-base md:text-lg">Join a thriving community of poets. Share your work, connect with fellow artists, and turn your passion into profit.</p>
          <div class="mb-6 flex flex-col items-center justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <button class="w-full rounded-full bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700 md:w-auto">For Poets: Create Your Profile</button>
            <button class="w-full rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 md:w-auto">For Readers: Discover Poetry</button>
          </div>
          <!-- Search Bar -->
          <div class="mx-auto mt-6 w-full md:w-1/2">
            <input type="text" placeholder="Search for poets, poetry, and merchandise" class="bg-pink-500 w-1/2 rounded-full border border-gray-300 p-2 text-black transition-all duration-300 focus:w-full focus:outline-none" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
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
  margin-left: 36px;
}
.text-content h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
}
.text-content p {
  font-size: 16px;
  margin-bottom: 24px;
}
.flex {
  display: flex;
}
.space-y-2 > * + * {
  margin-top: 8px;
}
.space-x-4 > * + * {
  margin-left: 16px;
}
.mt-6 {
  margin-top: 24px;
}
#search-input {
  width: 50%;
  padding: 8px;
  border: 1px solid #cbd5e0;
  border-radius: 9999px;
  color: #2d3748;
  transition: all 0.3s;
}
#search-input:focus {
  width: 100%;
}
.text-black {
  color: #000;
}
.bg-pink-500{
  color: pink;
}
</style>
  