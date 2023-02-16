<template>
  <header>

    <logo-row />
    <!-- todo: hide this (<sort-by/>) cmp when go to details cmp -->
    <sort-by v-if="this.$store.getters.displaySortBy" />
    <!-- {{ this.$store.getters.displaySortBy }} 12222 -->

</header>
</template>
<script>







name: "app-header"
import sortBy from './sort-by.cmp.vue'
import logoRow from './logo-row.vue'

export default {
  data() {
    return {
      // displaySortBy: false
      // imgsUrls:[]
      // langUrl: "../assets/imgs/svgs/lang.svg"
    }
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
  }

}
</script>
