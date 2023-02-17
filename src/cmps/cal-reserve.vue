<template>
    mmmm
    <div class="calendar">
        <div class="header">
            <button @click="previousMonth">&lt;</button>
            <h2>{{ month }} {{ year }}</h2>
            <button @click="nextMonth">&gt;</button>
        </div>
        <div class="days">
            <div class="day" v-for="day in days">{{ day }}</div>
        </div>
        <div class="dates">
            <div class="date" v-for="(date, index) in calendar"
                :class="{ today: isToday(date), available: isAvailable(date) }" :key="index" @click="selectDate(date)">
                {{ date.getDate() }}
            </div>
        </div>
        <div class="order-form" v-if="selectedDate">
            <h3>Place your order for {{ selectedDate.toDateString() }}</h3>
            <form @submit.prevent="placeOrder">
                <label>
                    Name:
                    <input type="text" v-model="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" v-model="email" required />
                </label>
                <label>
                    Room type:
                    <select v-model="roomType" required>
                        <option value="">-- Select room type --</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                    </select>
                </label>
                <button type="submit">Place order</button>
            </form>
        </div>
</div>
</template>
  
<script>
export default {
    data() {
        return {
            year: 2023,
            month: "February",
            selectedDate: null,
            name: "",
            email: "",
            roomType: "",
            availableDates: [
                new Date(2023, 1, 6),
                new Date(2023, 1, 8),
                new Date(2023, 1, 13),
                new Date(2023, 1, 16),
                new Date(2023, 1, 21),
                new Date(2023, 1, 23),
                new Date(2023, 1, 28),
            ],
        };
    },
    computed: {
        days() {
            return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        },
        calendar() {
            const daysInMonth = new Date(this.year, this.getMonthIndex(), 0).getDate();
            const calendar = [];
            for (let i = 1; i <= daysInMonth; i++) {
                calendar.push(new Date(this.year, this.getMonthIndex(), i));
            }
            return calendar;
        },
    },
    methods: {
        getMonthIndex() {
            return new Date(Date.parse(`${this.month} 1, ${this.year}`)).getMonth();
        },
        previousMonth() {
            const currentDate = new Date(Date.parse(`${this.month} 1, ${this.year}`));
            currentDate.setMonth(currentDate.getMonth() - 1);
            this.year = currentDate.getFullYear();
            this.month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(currentDate);
        },
        nextMonth() {
            const currentDate = new Date(Date.parse(`${this.month} 1, ${this.year}`));
            currentDate.setMonth(currentDate.getMonth() + 1)
      }
    }
}

</script>
