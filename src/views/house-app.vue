<template>


  <!-- <div class="container home"> -->

  <section class="grid house-list-container">
    <section></section>

    <section class="house-list">
      <div class="house flex column" v-for="house in houses" :key="house._id">

        <div class="flex center">
          <img
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656456202599059844/original/4dd9802c-0f7b-4eae-b535-e28c7904f332.jpeg?im_w=1200"
            class="image_">
        </div>

        <!-- https://a0.muscache.com/im/pictures/miso/Hosting-6…53bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720 -->

        <!-- <div class="grid"> -->

        <div class="prev-desc flex column">


          <span class="location-prev">
            Harlingen, Netherlands
          </span>

          <span class="distance-prev">
            3,318 kilometers away
            <!-- ${{ house.price?.toLocaleString() }} -->
          </span>

          <span class="date-prev">
            Mar 19 - 24
          </span>

          <span class="price-prev">
            <span class="sum">₪1,397</span> <span class="per-night-txt">night</span>
          </span>
        </div>
        <!-- </div> -->

        <!-- <button @click="removeHouse(house._id)">x</button>
      <button @click="updateHouse(house)">Update</button>
      <hr />
      <button @click="addHouseMsg(house._id)">Add house msg</button>
      <button @click="printHouseToConsole(house)">Print msgs to console</button> -->

      </div>
    </section>
  </section>

  <!-- <hr />

    <form @submit.prevent="addHouse()">
      <h2>Add house</h2>
      <input type="text" v-model="houseToAdd.vendor" />
      <button>Save</button>
    </form>
  </div>

  <nav>
    <router-link to="/">
      <span role="img" aria-label="logo">🙏</span>
    </router-link>
    <router-link to="/house">Cars</router-link>
    <router-link to="/review">Reviews</router-link>
    <router-link to="/chat">Chat</router-link>
    <router-link to="/login">Login / Signup</router-link>
  </nav> -->

  <section></section>

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
        await this.$store.dispatch({ type: 'loadHouses' })
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

<style>
.image_ {
  border-radius: 14px;
  width: 305px;
  height: 292px;
}
</style>
