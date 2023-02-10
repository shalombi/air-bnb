
<template>
    <!-- <section class="grid"> -->

  


    <section class="house-list">
        {{ houses }}

        <ul>
            <li v-for="house in houses" :key="house._id">
                <house-preview :house="house" />
                <section class="actions">
                    <router-link :to="'/house/' + house._id">Details</router-link> |
                    <router-link :to="'/house/edit/' + house._id">Edit</router-link> |
                    <button @click="remove(house._id)">x</button>
                </section>
            </li>
        </ul>

    </section>

<!-- </section> -->

</template>


<script>

// house-list.cmp.vue
import housePreview from './house-preview.vue'
// import houseList from '../cmps/house-list.vue'

export default {
    props: ['houses'],
    data() {
        return {
            houseToAdd: houseService.getEmptyHouse()
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedinUser
        },
        houses() {
            return this.$store.getters.houses
        }
    },
    created() {
        this.$store.dispatch({ type: 'loadHouses' })
    },
    methods: {
        async addHouse() {
            try {
                await this.$store.dispatch({ type: 'addHouse', house: this.houseToAdd })
                showSuccessMsg('House added')
                this.houseToAdd = houseService.getEmptyHouse()
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot add house')
            }
        },
        async removeHouse(houseId) {
            try {
                await this.$store.dispatch(getActionRemoveHouse(houseId))
                showSuccessMsg('House removed')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot remove house')
            }
        },
        async updateHouse(house) {
            try {
                house = { ...house }
                house.price = +prompt('New price?', house.price)
                await this.$store.dispatch(getActionUpdateHouse(house))
                showSuccessMsg('House updated')

            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot update house')
            }
        },
        async addHouseMsg(houseId) {
            try {
                await this.$store.dispatch(getActionAddHouseMsg(houseId))
                showSuccessMsg('House msg added')
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot add house msg')
            }
        },
        printHouseToConsole(house) {
            console.log('House msgs:', house.msgs)
        }
    },
    components: {
        // houseList,
        housePreview,
    }
}
</script>




