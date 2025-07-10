import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.scss'
import App from './App.vue'
import { Button, Input, Select } from 'ant-design-vue'
import vueDebounce from 'vue-debounce'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(Button)
app.use(Select)
app.use(Input)
app.directive('debounce', vueDebounce({ lock: true })).mount('#app')
