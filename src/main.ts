import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.scss'
import App from './App.vue'
import { Button, Input, Select } from 'ant-design-vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Button)
app.use(Select)
app.use(Input)
app.mount('#app')
