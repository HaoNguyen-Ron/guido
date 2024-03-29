import { createApp } from 'vue'
import './style.css'
import Root from './Root.vue'
import router from './router'

const app = createApp(Root)
app.use(router)

router.isReady().then(() => {
    app.mount('#root')
})
