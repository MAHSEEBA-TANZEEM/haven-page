<template>
  <section class="py-12 text-black md:py-24">
    <div class="container mx-auto px-4 text-center md:px-8">
      <h2 class="mb-8 text-xl font-bold md:text-2xl">
        Spotlighting the Best Voices in Poetry
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="card transform rounded-lg bg-purple-300 p-4 shadow-lg transition-transform hover:scale-105"
        >
          <h3 class="mb-2 text-lg font-bold md:text-xl">
            Featured Poets of the Month
          </h3>
          <!-- Add content for Featured Poets of the Month -->
        </div>
        <div
          class="card transform rounded-lg bg-purple-300 p-4 shadow-lg transition-transform hover:scale-105"
        >
          <h3 class="mb-2 text-lg font-bold md:text-xl">
            Top-Selling Poetry Books
          </h3>
          <!-- Add content for Top-Selling Poetry Books -->
        </div>
        <div
          class="card transform rounded-lg bg-purple-300 p-4 shadow-lg transition-transform hover:scale-105"
        >
          <h3 class="mb-2 text-lg font-bold md:text-xl">
            Trending Merchandise
          </h3>
          <!-- Add content for Trending Merchandise -->
        </div>
      </div>
      <button
        class="mt-8 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Explore Now
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedSection",
};
</script>

<style scoped>
/* Add your custom styles here */

.card.bg-purple-300 {
  background-color: #d8b4fe;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
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
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
