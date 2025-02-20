<template>
  <div class="container mx-auto px-4 py-8 mb-5">
    <h1 class="text-3xl font-bold text-center mt-6 mb-6">
      Explore & Support Poets
    </h1>
    <p class="text-center text-gray-600 mb-8">
      Find your next favorite poem, book, or poetry-inspired product!
    </p>

    <!-- Category Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="category in categories"
        :key="category.id"
        class="bg-yellow-200 rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        <img
          :src="category.image"
          :alt="category.name"
          class="w-full h-40 object-cover mb-4 rounded-md"
        />
        <h2 class="text-xl font-semibold mb-2">{{ category.name }}</h2>
        <p class="text-gray-600 mb-4">{{ category.description }}</p>
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Browse
        </button>
      </div>
    </div>

    <!-- Payment Section -->
    <section class="mt-8">
      <h2 class="text-3xl font-bold mb-4">Payment Gateway</h2>
      <ul class="mb-4">
        <li class="mb-2">
          Multiple payment options (credit card, PayPal, cryptocurrency, etc.)
        </li>
        <li class="mb-2">Secure checkout</li>
      </ul>
    </section>

    <!-- Pricing & Discount System Section -->
    <section class="mt-8">
      <h2 class="text-3xl font-bold mb-4">Pricing & Discount System</h2>
      <ul class="mb-4">
        <li class="mb-2">Custom pricing for products</li>
        <li class="mb-2">Promo codes and discount offers</li>
      </ul>
    </section>

    <!-- Analytics Dashboard Section -->
    <section className="mt-6">
      <h1 class="text-3xl font-bold text-center mt-6 mb-6">
        📊 Analytics Dashboard
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="bg-purple-300 rounded-lg shadow-md p-6 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-xl font-semibold">💰 Sales Tracking</h3>
          <p class="text-gray-600">Monitor your poetry sales performance.</p>
        </div>
        <div
          class="bg-purple-300 rounded-lg shadow-md p-6 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-xl font-semibold">📈 Engagement Metrics</h3>
          <p class="text-gray-600">Track views, likes, and shares.</p>
        </div>
        <div
          class="bg-purple-300 rounded-lg shadow-md p-6 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <h3 class="text-xl font-semibold">💵 Revenue Breakdown</h3>
          <p class="text-gray-600">See earnings from different sources.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
  {
    id: 1,
    name: "Digital Poems",
    description: "Purchase exclusive digital poetry pieces",
    image: "/images/digital-poetry.jpg",
  },
  {
    id: 2,
    name: "Printed Works",
    description: "Buy poetry books, chapbooks, and limited-edition prints",
    image: "/images/print-book.jpg",
  },
  {
    id: 3,
    name: "Poetry Merchandise",
    description: "Shop apparel, posters, mugs, and more",
    image: "/images/mugs.webp",
  },
  {
    id: 4,
    name: "Custom Poetry Requests",
    description: "Order personalized poetry from your favorite writers",
    image: "/images/paper-books.png",
  },
]);
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
.bg-purple-300 {
  background-color: #d8b4fe;
}
.bg-yellow-200 {
  background-color: #bb8588;
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

/* Analytics dashboard */
.analytics-card {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 1000px;
  margin: 20px auto;
}

.metric-card {
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.metric-card:hover {
  transform: scale(1.08);
}
</style>
