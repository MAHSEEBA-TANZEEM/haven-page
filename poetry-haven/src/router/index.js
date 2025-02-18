// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home/Home.vue';
import ExplorePoets from '../components/Navigation/ExplorePoets.vue';
import Marketplace from '../components/Navigation/MarketPlace.vue';
import SubscriptionPlans from '../components/Navigation/SubscriptionPlans.vue';
import CommunityEvents from '../components/Navigation/CommunityEvents.vue';
import Blog from '../components/Navigation/Blog.vue';
import AboutUs from '../components/Navigation/AboutUs.vue';
import HelpCenter from '../components/Navigation/HelpCenter.vue';



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/explore-poets', name: 'ExplorePoets', component: ExplorePoets },
  { path: '/marketplace', name: 'Marketplace', component: Marketplace },
  { path: '/subscription-plans', name: 'SubscriptionPlans', component: SubscriptionPlans },
  { path: '/community-events', name: 'CommunityEvents', component: CommunityEvents },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/about-us', name: 'AboutUs', component: AboutUs },
  { path: '/help-center', name: 'HelpCenter', component: HelpCenter },

  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
