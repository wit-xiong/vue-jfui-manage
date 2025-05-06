<script setup lang="ts">
import {
    Briefcase,
    HelpFilled,
    HomeFilled,
    Menu,
} from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
interface IMenu {
    index: string,
    icon?: any,
    name: string,
    path?: string,
    children: {
        index: string,
        icon?: any,
        name: string,
        path: string
    }[],
}
const menus = ref<IMenu[]>([
    {
        index: '0',
        icon: HomeFilled,
        name: '快速开始',
        path: '/fast',
        children: [],
    },
    {
        index: '1',
        icon: Menu,
        name: '通用组件',
        children: [
            {
                index: '1-1',
                name: 'Accordion',
                path: '/components/accordion',
            }, {
                index: '1-2',
                name: 'Alert',
                path: '/components/alert',
            }, {
                index: '1-3',
                name: 'AppBar',
                path: '/components/appBar',
            }, {
                index: '1-4',
                name: 'NoticeBar',
                path: '/components/noticeBar',
            }, {
                index: '1-5',
                name: 'Button',
                path: '/components/button',
            }, {
                index: '1-6',
                name: 'Dialog',
                path: '/components/dialog',
            }, {
                index: '1-7',
                name: 'Image',
                path: '/components/image',
            }, {
                index: '1-8',
                name: 'Input',
                path: '/components/input',
            }, {
                index: '1-9',
                name: 'Loading',
                path: '/components/loading',
            }, {
                index: '1-10',
                name: 'Picker',
                path: '/components/picker',
            }, {
                index: '1-11',
                name: 'Popover',
                path: '/components/popover',
            }, {
                index: '1-12',
                name: 'PopupMessage',
                path: '/components/popupMessage',
            }, {
                index: '1-13',
                name: 'Radio',
                path: '/components/radio',
            }, {
                index: '1-14',
                name: 'Rating',
                path: '/components/rating',
            }, {
                index: '1-15',
                name: 'Refresh',
                path: '/components/refresh',
            }, {
                index: '1-16',
                name: 'CitySelect',
                path: '/components/citySelect',
            }, {
                index: '1-17',
                name: 'StatusView',
                path: '/components/statusView',
            }, {
                index: '1-18',
                name: 'Tag',
                path: '/components/tag',
            }, {
                index: '1-19',
                name: 'ExpandableText',
                path: '/components/expandableText',
            }, {
                index: '1-20',
                name: 'MarqueeText',
                path: '/components/marqueeText',
            },
        ],
    },
    {
        index: '2',
        icon: HelpFilled,
        name: '系统扩展',
        children: [{
            index: '2-1',
            name: 'Extensions',
            path: '/extensions',
        }],
    },
    {
        index: '3',
        icon: Briefcase,
        name: '便捷工具',
        children: [{
            index: '3-1',
            name: 'Utils',
            path: '/utils',
        }],
    },
])
const onLogoTap = () => {
    router.push('/')
}
</script>

<template>
    <el-container>
        <!-- 头部 -->
        <el-header>
            <el-image src="/src/assets/images/logo.png" @click="onLogoTap" />
        </el-header>
        <!-- 左侧菜单 -->
        <el-container>
            <el-aside width="200px">
                <el-menu class="el-menu-vertical" unique-opened router default-active="">
                    <template v-for="menu in menus" :key="menu.name">
                        <!-- 有子菜单 -->
                        <el-sub-menu v-if="menu.children.length > 0" :index="menu.index">
                            <template #title>
                                <el-icon>
                                    <component :is="menu.icon"></component>
                                </el-icon>
                                <span>{{ menu.name }}</span>
                            </template>
                            <el-menu-item v-for="submenu in menu.children" :key="submenu.name" :index="submenu.index"
                                :route="submenu.path">
                                {{ submenu.name }}
                            </el-menu-item>
                        </el-sub-menu>
                        <!-- 无子菜单 -->
                        <el-menu-item v-else :route="menu.path" :index="menu.index">
                            <template #title>
                                <el-icon>
                                    <component :is="menu.icon"></component>
                                </el-icon>
                                <span>{{ menu.name }}</span>
                            </template>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <!-- 右侧内容 -->
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.el-header {
    background-color: white;
    height: 100px;
    padding: 0;
    border-bottom: 0.5px solid #F0F0F0;

    .el-image {
        cursor: pointer;
        width: 90px;
        height: 90px;
        margin-left: 60px;
    }
}

.el-container {
    height: 100%;
}

.el-menu-vertical {
    padding-top: 10px;
    border-right: none;
}

.el-aside {
    background-color: white;
}
</style>
