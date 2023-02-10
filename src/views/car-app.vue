<template>
  <div class="container home">
    <ul class="house-list">
      <li v-for="house in houses" :key="house._id">
        <p>
          {{ house.vendor }}
        </p>
        <p>
          ${{ house.price?.toLocaleString() }}
        </p>
        <button @click="removeHouse(house._id)">x</button>
        <button @click="updateHouse(house)">Update</button>
        <hr />
        <button @click="addHouseMsg(house._id)">Add house msg</button>
        <button @click="printHouseToConsole(house)">Print msgs to console</button>

      </li>
    </ul>
    <hr />
    <form @submit.prevent="addHouse()">
      <h2>Add house</h2>
      <input type="text" v-model="houseToAdd.vendor" />
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { houseService } from '../services/house.service.local'
import { getActionRemoveHouse, getActionUpdateHouse, getActionAddHouseMsg } from '../store/house.store'

export default {
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
  }


}
</script>
