<!-- <template>
    <div class="flex">
        <litepie-datepicker v-model="dateValue"></litepie-datepicker>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import LitepieDatepicker from 'litepie-datepicker';
//import dayjs from 'dayjs' // ES 2015

export default {
    components: {
        LitepieDatepicker
    },
    setup() {

        // const dayjs = require('dayjs')
        const dateValue = ref([]);

        return {
            dateValue
        };
    },
    created() {
        // dayjs().format()
    }
}
</script> -->


<!-- @submit="$event => console.log('lol')"  -->

<template>
    <div class="wrapper">
        <ejs-daterangepicker placeholder="Select a date range" v-model="datel" :startDate="startValue" :endDate="endValue"
            :min="minDate" format="dd-MMM-yy">
        </ejs-daterangepicker>
    </div>

    <div v-if="datel">
        <pre> datel:{{ datel[0] }} </pre>
        <pre> datel:{{ datel[1] }} </pre>

        <!-- <pre>{{ makeOrderDate(datel[1]) }}</pre> -->
    </div>
</template>
  
<script>
import { DateRangePickerComponent } from '@syncfusion/ej2-vue-calendars';
export default {
    name: 'App',
    components: {
        'ejs-daterangepicker': DateRangePickerComponent
    },
    data() {
        return {
            datel: null,
            currData: 'Thu Mar 30 2023 00:00:00 GMT+0300',
            // startValue: new Date("09/15/2022"),
            // endValue: new Date("10/22/2022"),
            // minDate: new Date("09/12/2022"),
            // maxDate: new Date("10/26/2022")
        }
    }, 
    created(){

    },
    methods: {

        // togglePanel() {
        //     this.panelOpen = !this.panelOpen;
        // }
    },
    computed: {
        makeOrderDate(d) {
            // console.log(data)
            // return d.slice(1, 4)
        }
    }

}
</script>
  
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";

.wrapper {
    max-width: 300px;
    margin: auto;
}
</style>