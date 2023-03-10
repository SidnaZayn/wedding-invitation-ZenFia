import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './axios/axios.js'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net-bs5';
 
DataTable.use(DataTablesLib);

const app = createApp(App)

app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap';
