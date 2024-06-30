import Vue from "vue";
import VueRouter from "vue-router";
import User from "@/views/User.vue";
import NotFound from "@/views/NotFound.vue";
import Home from "@/views/Home.vue";
Vue.use(VueRouter);
const routes = [
    {
        path: "/myUser",
        component: MyUser
    },
    {
        path: "/",
        redirect:"/user"
    },

    {
        path: "/user",
        component: User
    },
    {
        path: "*", //匹配上述两条规则之外的所有路径
        component: NotFound
    }
]

const router = new VueRouter({
    routes: routes //在 VueRouter 实例中使用该路由规则数组
});
    export default router;