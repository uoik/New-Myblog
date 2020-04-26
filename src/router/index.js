import Router from 'vue-router'
import Vue from 'vue'
import store from '../store/index'

Vue.use(Router);

const Main = () => import('../pages/Main.vue');
const EditBlog = () => import('../pages/EditBlog.vue');
const Login = () => import('../pages/Login.vue');

const Home = () => import('../components/Main/Home.vue');
const Archive = () => import('../components/Main/Archive.vue');
const Talk = () => import('../components/Main/Talk.vue');
const About = () => import('../components/Main/About.vue');
const Friends = () => import('../components/Main/Friends.vue');
const Details = () => import('../components/Main/Details.vue');

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/main',
            component: Main,
            children: [
                {
                    // 首页
                    path: '/home',
                    name: 'Home',
                    component: Home
                },
                {
                    // 目录地图
                    path: '/archive',
                    name: 'Archive',
                    component: Archive
                },
                {
                    // 留言区
                    path: '/talk',
                    name: 'Talk',
                    component: Talk
                },
                {
                    // 关于我
                    path: '/about',
                    name: 'About',
                    component: About
                },
                {
                    // 友情链接
                    path: '/friends',
                    name: 'Friends',
                    component: Friends
                },
                {
                    // 文章详情页
                    path: '/details/:id',
                    name: 'Details',
                    component: Details
                }
            ]
        },
        {
            path: '/editBlog',
            component: EditBlog,
            name: 'editBlog'
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name == 'editBlog') {
        if (store.state.loginUser.loginUser) {
            next();
        } else {
            next('/login');
        }
    } else if(to.fullPath == '/' || to.fullPath == '/main'){
        next('/home');
    }else {
        next();
    }
})

export default router;