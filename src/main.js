import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import axios from './api/basic/default.js'
import './assets/js/error.js'

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
