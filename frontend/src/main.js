import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '970785010398-5aftj1e8nacdaeiqlfm12kj1phe6dumg.apps.googleusercontent.com'
})

app.mount('#app')