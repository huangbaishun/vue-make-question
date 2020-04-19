import Vue from "vue";
import VueRouter from "vue-router";
import startPage from "../views/startPage.vue";
import processPage from "../views/processPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/startPage"
  },
  {
    path: "/startPage",
    name: startPage,
    component: startPage
  },
  {
    path: "/item",
    name: "item",
    component: processPage
  },
  {
    path: "*",
    component: startPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
