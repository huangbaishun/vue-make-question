import Vue from "vue";
import VueRouter from "vue-router";
import startPage from "../views/startPage.vue";
import processPage from "../views/processPage.vue";
import endPage from "../views/endPage.vue";

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
    path: "/endPage",
    name: "endPage",
    component: endPage
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
