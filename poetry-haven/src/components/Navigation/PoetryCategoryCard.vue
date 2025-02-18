<template>
    <div class="card transform rounded-lg bg-purple-300 p-4 shadow-lg transition-transform hover:scale-105">
      <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index" class="mb-2">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PoetryCategoryCard',
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card.bg-purple-300 {
    background-color: #D8B4FE;
  }
  </style>
  