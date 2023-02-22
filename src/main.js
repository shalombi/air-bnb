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

// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import component and stylesheet
// import Vue from 'vue'
// import App from './App.vue'


// import component and stylesheet
// import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
// import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

// see docs for available options
// const datepickerOptions = {}

// make sure we can use it in our components


// main.js
// import { createApp } from 'vue';
// import App from '@/App.vue';
import '../index.css'
import LitepieDatepicker from 'litepie-datepicker';


// import VueAirbnbStyleDatepicker from 'vue-airbnb-style-datepicker';
// import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css';

// ...

// const app = createApp(App);
// module.exports = {
//     plugins: [
//       require('tailwindcss'),
//       require('autoprefixer'),
//     ]
//   }
// import Vue from 'vue'
// import App from './App.vue'

// import component and stylesheet
// import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
// import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

// see docs for available options
// const datepickerOptions = {}

// make sure we can use it in our components

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
// app.mount('#app');





// import App from './App.vue'
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense("ORg4AjUWIQA/Gnt2VVhiQlFaclxJVHxIe0x0RWFbb1x6cVZMYFVBNQtUQF1hS35bd0NjX31XcX1QR2FY")
// createApp(App).mount('#app')

const app = createApp(rootCmp)
app.use(LitepieDatepicker);
app.use(router)
app.use(store)
app.mount('#app')


// app.use(AirbnbStyleDatepicker, datepickerOptions)
// app.use(VCalendar);
// app.use(AirbnbStyleDatepicker, datepickerOptions)
// app.use(ElementPlus)







// 
// import { createApp } from 'vue'
// import FullCalendar from '@fullcalendar/vue'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// const app = createApp(App)
// app.mount('#app')


//  use FullCalendar
// app.use(FullCalendar, {
//     plugins: [dayGridPlugin, timeGridPlugin]
// })



// import App from './App.vue'



// new Vue({
//   el: '#app',
//   render: h => h(App),
// })

// main.js
// import { createApp } from 'vue';
// import App from '@/App.vue';
// import LitepieDatepicker from 'litepie-datepicker';
// ...

// const app = createApp(App);

// app.use(LitepieDatepicker);
// app.mount('#app');