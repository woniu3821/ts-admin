export const routes = [
  {
    path: "/",
    redirect: "/home",
    name: "home",
    component: () => import("@/views/home/Home.vue"),
    meta: {
      name: "首页",
      icon: "home"
    }
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user/User.vue"),
    meta: {
      name: "用户",
      icon: "home"
    }
  },
  {
    path: "/about",
    name: "about", // which is lazy-loaded when the route is visited. // this generates a separate chunk (about.[hash].js) for this route // route level code-splitting
    component: () => import("@/views/About.vue"),
    meta: {
      name: "关于",
      icon: "home"
    }
  }
];
