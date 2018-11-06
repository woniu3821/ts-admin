export const routes = [
  { path: "/", redirect: "/user-list" },
  {
    path: "/user-list",
    name: "user-list",
    component: () => import("@/views/user/UserList.vue"),
    meta: { name: "管理员设置", icon: "home" }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: { name: "关于", icon: "home" }
  }
]; // which is lazy-loaded when the route is visited. // this generates a separate chunk (about.[hash].js) for this route // route level code-splitting
