<template>
    <section class="py-12 text-black md:py-24">
      <div class="container mx-auto px-4 text-center md:px-8">
        <h2 class="mb-8 text-xl font-bold md:text-2xl">How It Works</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="card transform rounded-lg bg-green-200 p-4 shadow-lg transition-transform hover:scale-105">
            <h3 class="mb-2 text-lg font-bold md:text-xl">Create a Profile</h3>
            <p>Showcase your poetry, bio, and artistic journey.</p>
          </div>
          <div class="card transform rounded-lg bg-green-200 p-4 shadow-lg transition-transform hover:scale-105">
            <h3 class="mb-2 text-lg font-bold md:text-xl">Monetize Your Craft</h3>
            <p>Sell books, prints, and poetry-inspired merchandise.</p>
          </div>
          <div class="card transform rounded-lg bg-green-200 p-4 shadow-lg transition-transform hover:scale-105">
            <h3 class="mb-2 text-lg font-bold md:text-xl">Engage & Collaborate</h3>
            <p>Connect with poets, join discussions, and grow your audience.</p>
          </div>
          <div class="card transform rounded-lg bg-green-200 p-4 shadow-lg transition-transform hover:scale-105">
            <h3 class="mb-2 text-lg font-bold md:text-xl">Participate in Events</h3>
            <p>Compete in challenges, attend live readings, and gain recognition.</p>
          </div>
        </div>
        <button class="mt-8 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Join The Peoples Poetry Haven Today!</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HowItWorksSection',
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  /* How It Works Section Styles */
.card.bg-green-200 {
  background-color: #BBF7D0;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
  </style>
  