import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import axios from "axios"; // pour requete http



const app = createApp(App)

app.use(router)



app.mount('#app')




