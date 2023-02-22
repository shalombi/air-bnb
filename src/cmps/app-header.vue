<template><!-- < destination-modal /> -->

  <header v-if="!showDestinationModal" >

    <logo-row @click="displayDestinationModal"/>
    <!-- todo: hide this (<sort-by/>) cmp when go to details cmp -->
    <sort-by @setFilter="setFilter" v-if="this.$store.getters.displaySortBy" />
    <!-- {{ this.$store.getters.displaySortBy }} 12222 -->

  </header>

<destination-modal v-if="showDestinationModal" @click="displayDestinationModal"/>

</template>
<script>



name: "app-header"
import sortBy from './sort-by.cmp.vue'
import logoRow from './logo-row.vue'

import destinationModal from './destination-modal.vue'

export default {
  data() {
    return {
      showDestinationModal:false
      // displaySortBy: false
      // imgsUrls:[]
      // langUrl: "../assets/imgs/svgs/lang.svg"
    }
  },
  methods: {
    setFilter(filterBy) {
      console.log('filterBy', filterBy);
      this.$store.dispatch({ type: 'setFilter', filterBy })
      // this.$store.dispatch({ type: 'loadToys' })
    },
    displayDestinationModal(){
      this.showDestinationModal = !this.showDestinationModal
    }
    // setFilter(filterBy) {
    //   this.$store.dispatch({ type: 'filterBy', setSortBy })

    // },
  },
  created() {
    // this.displaySortBy = this.$store.getters.displaySortBy

  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    }
  }, unmounted() {
    console.log('unm...');
  },
  components: {
    sortBy,
    logoRow,
    destinationModal,
  }

}
</script>
