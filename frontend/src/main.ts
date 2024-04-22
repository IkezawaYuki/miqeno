import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: "970785010398-e2jtvbhme9p4r3vk0cs6mjh6l4p8g0ak.apps.googleusercontent.com"
})

app.mount('#app')
