import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GAuth from 'vue3-google-oauth2'



const app = createApp(App);

const gAuthOptions = {
    clientId: '970785010398-o1b0f7ege5q0rk1asotl9nmno86807rv.apps.googleusercontent.com',
    prompt: 'consent',
}
app.use(GAuth, gAuthOptions)

app.mount('#app')
