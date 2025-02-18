<template>
    <section class="py-12 text-black md:py-24">
      <div class="container mx-auto px-4 text-center md:px-8">
        <h2 class="mb-8 text-xl font-bold md:text-2xl">Testimonials & Success Stories</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="card transform rounded-lg bg-yellow-200 p-4 shadow-lg transition-transform hover:scale-105">
            <p class="italic">"The Peoples Poetry Haven transformed my poetry journey. The community is supportive and vibrant!"</p>
            <h3 class="mt-2 text-lg font-bold md:text-xl">- Shakespeare</h3>
          </div>
          <div class="card transform rounded-lg bg-yellow-200 p-4 shadow-lg transition-transform hover:scale-105">
            <p class="italic">"I've sold more poetry books here than anywhere else. Highly recommend for all poets!"</p>
            <h3 class="mt-2 text-lg font-bold md:text-xl">- Milton</h3>
          </div>
          <div class="card transform rounded-lg bg-yellow-200 p-4 shadow-lg transition-transform hover:scale-105">
            <p class="italic">"The events and challenges keep me motivated and inspired. Love this platform!"</p>
            <h3 class="mt-2 text-lg font-bold md:text-xl">- Wordsworth</h3>
          </div>
        </div>
      </div>
    </section>
</template>
  
<script>
  export default {
    name: 'TestimonialsSection',
  };
</script>
  
<style scoped>
  /* Add your custom styles here */
  .card.bg-yellow-200 {
    background-color: #FEF08A;
  }
 .grid {
    display: grid;
    grid-template-columns: 1fr;
  gap: 16px;
  }
  @media (min-width: 768px) {
    grid {
     grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1024px) {
   .grid {
     grid-template-columns: repeat(3, 1fr);
   }
 }
 .grid .italic {
  font-style: italic;
 }
</style>
  