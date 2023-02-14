import { createApp } from 'vue'
import {App} from "./App";
import {Home} from "./view/home";
import {About} from "./view/about";
import { createRouter,createWebHashHistory } from "vue-router"

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
const app = createApp(App)
app.use(router)

app.mount('#app')

