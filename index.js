import Vue from "vue";
import Router from "vue-router";
import VueRouter from "vue-router";
Vue.use(Router);

const router = new VueRouter({

    routes: [{
            path: "/index",
            component: () => import("@/views/Index"),
            name: "index",
            meta: {
                isMenu: true, //是否展示在目录结构上
                cn: "首页"
            }
        },
        {
            path: "/one",
            component: () => import("@/views/One"),
            name: "one",
            meta: {
                isMenu: true,
                cn: "一级目录"
            }
        },
        {
            path: "/two",
            component: () => import("@/views/Two"),
            name: "two",
            meta: {
                isMenu: false,
                cn: "一级目录"
            }
        },
        {
            path: "/three",
            component: () => import("@/views/Three"),
            name: "three",
            meta: {
                isMenu: false,
                cn: "二级目录",
            },
            children: [{
                    path: "/three/child",
                    component: () => import("@/views/Child"),
                    name: "child",
                    meta: {
                        isMenu: true,
                        cn: "子目录"
                    }
                },
                {
                    path: "/three/child",
                    component: () => import("@/views/Child"),
                    name: "child",
                    meta: {
                        isMenu: false,
                        cn: "子目录"
                    }
                }
            ]
        }
    ]
});