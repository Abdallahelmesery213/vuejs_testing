import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import Blog from "../views/Blog.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/help",
    name: "help",
    component: Help,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
