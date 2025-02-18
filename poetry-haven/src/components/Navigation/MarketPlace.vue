<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Poetry Storefront</h1>

    <!-- Category Cards Section -->
    <div class="grid gap-6">
      <PoetryCategoryCard
        v-for="(category, index) in categories"
        :key="index"
        :title="category.title"
        :items="category.items"
      />
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
      <Payment />
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
    <section class="mt-8">
      <h2 class="text-3xl font-bold mb-4">Analytics Dashboard for Poets</h2>
      <ul>
        <li class="mb-2">Sales tracking</li>
        <li class="mb-2">Engagement metrics (views, likes, shares)</li>
        <li class="mb-2">Revenue breakdown</li>
      </ul>
    </section>

    <!-- Marketplace Content Section -->
    <MarketplaceContent />
  </div>
</template>

<script>
import Payment from './Payment.vue';
import PoetryCategoryCard from './PoetryCategoryCard.vue';
import MarketplaceContent from './MarketplaceContent.vue';

export default {
  name: 'Marketplace',
  components: {
    Payment,
    PoetryCategoryCard,
    MarketplaceContent,
  },
  data() {
    return {
      categories: [
        {
          title: 'Poetry Books',
          items: ['Sell poetry books', 'Prints', 'Digital downloads'],
        },
        {
          title: 'Personalized Poetry Services',
          items: ['Custom poems', 'Readings', 'Performances'],
        },
        {
          title: 'Merchandise Store',
          items: ['Apparel', 'Mugs', 'Posters'],
        },
      ],
    };
  },
};
</script>

<style scoped>
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
