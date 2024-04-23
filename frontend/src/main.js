import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: 'YOUR_GOOGLE_CLIENT_ID'
})

app.mount('#app')