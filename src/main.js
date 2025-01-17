import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import axios from './api/basic/default.js'
import './assets/js/error.js'
import "./assets/css/main.min.css";
import "./assets/css/questions.min.css";
import "./assets/css/testResult.min.css";
import "./assets/css/award.min.css";
import "./assets/css/partTime.min.css";
import "./assets/css/description.min.css";
import "./assets/css/index.min.css";



const app = createApp(App)
app.config.errorHandler = function (err, vm, info) {
    let error = {
        name: 'VueError',
        source: vm._.type.__file,
        message: err,
        error: info,
        type: 3
    }

    throw error
}
app.use(createPinia())
app.use(router)
app.provide('$http', axios)
app.mount('#app')
