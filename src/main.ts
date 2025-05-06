import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/normalize.css'
import router from './router'
// element-plus 样式文件
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'element-plus/dist/index.css'
import 'highlight.js/lib/common'
import 'highlight.js/styles/atom-one-dark.css'

const app = createApp(App)
app.use(router)
app.use(hljsVuePlugin)
app.mount('#app')
