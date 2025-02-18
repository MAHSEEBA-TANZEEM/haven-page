// src/stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: 'Guest',
  }),
  actions: {
    setUsername(name) {
      this.username = name;
    },
  },
});
