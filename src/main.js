// import App from './App.vue'


import { createApp } from 'vue'


import { router } from './router.js'
import { store } from './store/store.js'

// FullCalendar
// import FullCalendar from '@fullcalendar/vue'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'


import './assets/styles/main.scss'
import rootCmp from './root-cmp.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(rootCmp)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')







// 
// import { createApp } from 'vue'
// import FullCalendar from '@fullcalendar/vue'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// const app = createApp(App)
// app.mount('#app')


//  use FullCalendar
app.use(FullCalendar, {
    plugins: [dayGridPlugin, timeGridPlugin]
})