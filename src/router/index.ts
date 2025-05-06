import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../components/Home.vue'),
            },
            {
                path: 'fast',
                name: 'fastStart',
                component: () => import('../components/FastStart.vue'),
            },
            {
                path: 'components/accordion',
                name: 'components_accordion',
                component: () => import('../components/Accordion.vue'),
            },
            {
                path: 'components/alert',
                name: 'components_alert',
                component: () => import('../components/Alert.vue'),
            },
            {
                path: 'components/appBar',
                name: 'components_appBar',
                component: () => import('../components/AppBar.vue'),
            },
            {
                path: 'components/noticeBar',
                name: 'components_noticeBar',
                component: () => import('../components/NoticeBar.vue'),
            },
            {
                path: 'components/button',
                name: 'components_button',
                component: () => import('../components/Button.vue'),
            },
            {
                path: 'components/dialog',
                name: 'components_dialog',
                component: () => import('../components/Dialog.vue'),
            },
            {
                path: 'components/image',
                name: 'components_image',
                component: () => import('../components/Image.vue'),
            },
            {
                path: 'components/input',
                name: 'components_input',
                component: () => import('../components/Input.vue'),
            },
            {
                path: 'components/loading',
                name: 'components_loading',
                component: () => import('../components/Loading.vue'),
            },
            {
                path: 'components/picker',
                name: 'components_picker',
                component: () => import('../components/Picker.vue'),
            },
            {
                path: 'components/popover',
                name: 'components_popover',
                component: () => import('../components/Popover.vue'),
            },
            {
                path: 'components/popupMessage',
                name: 'components_popupMessage',
                component: () => import('../components/PopupMessage.vue'),
            },
            {
                path: 'components/radio',
                name: 'components_radio',
                component: () => import('../components/Radio.vue'),
            },
            {
                path: 'components/rating',
                name: 'components_rating',
                component: () => import('../components/Rating.vue'),
            },
            {
                path: 'components/refresh',
                name: 'components_refresh',
                component: () => import('../components/Refresh.vue'),
            },
            {
                path: 'components/citySelect',
                name: 'components_citySelect',
                component: () => import('../components/CitySelect.vue'),
            },
            {
                path: 'components/statusView',
                name: 'components_statusView',
                component: () => import('../components/StatusView.vue'),
            },
            {
                path: 'components/tag',
                name: 'components_tag',
                component: () => import('../components/Tag.vue'),
            },
            {
                path: 'components/expandableText',
                name: 'components_expandableText',
                component: () => import('../components/ExpandableText.vue'),
            },
            {
                path: 'components/marqueeText',
                name: 'components_marqueeText',
                component: () => import('../components/MarqueeText.vue'),
            },
            {
                path: 'extensions',
                name: 'extensions',
                component: () => import('../components/Extensions.vue'),
            },
            {
                path: 'utils',
                name: 'utils',
                component: () => import('../components/Utils.vue'),
            },
        ]
    },
    {
        path: '/:pathMatch(.*)',
        name: 'empty',
        component: () => import('../views/Empty.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 前置路由守卫
// const whiteList = ['/login'];
// router.beforeEach((to, from, next) => {
//     const isLogin = useAppStore().isLogin;
//     if (isLogin) {
//         if (to.path === '/login') {
//             next('/');
//         } else {
//             next();
//         }
//     } else {
//         if (whiteList.includes(to.path)) {
//             next();
//         } else {
//             next('/login');
//         }
//     }
// })

export default router