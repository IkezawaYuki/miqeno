import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GAuth from 'vue3-google-oauth2'


const app = createApp(App);

const gAuthOptions = {
    clientId: '970785010398-5aftj1e8nacdaeiqlfm12kj1phe6dumg.apps.googleusercontent.com',
    prompt: 'consent',
}
app.use(GAuth, gAuthOptions)

app.mount('#app')
