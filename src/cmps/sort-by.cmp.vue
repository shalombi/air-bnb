<template><!-- <button class="scroll-btn-left" @click="scrollLeft">Left</button> -->
  <section class="sort flex con">

    <div class="el-sorting first" @click="setFilter('Farm')">
      <img src="../assets/imgs/main-bar-imgs/Farms.jpeg" alt="">
      <span class="el-label-sorting">Farm</span>
    </div>

    <div class="el-sorting first" @click="setFilter('Amazing pools')">
      <img src="../assets/imgs/main-bar-imgs/Amazing pools.jpeg" alt="">
      <span class="el-label-sorting">Amazing pools</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/  Luxe.jpeg" alt="">
      <span class="el-label-sorting">Luxe</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/ Trending.jpeg" alt="">
      <span class="el-label-sorting">Trending</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Beach.jpeg" alt="">
      <span class="el-label-sorting">Beach</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Cabins.jpeg" alt="">
      <span class="el-label-sorting">Cabins</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Boats.jpeg" alt="">
      <span class="el-label-sorting">Boats</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Amazing views.jpeg" alt="">
      <span class="el-label-sorting">Amazing views</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/ Design.jpeg" alt="">
      <span class="el-label-sorting">Design</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Castles.jpeg" alt="">
      <span class="el-label-sorting">Castles</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Earth homes.jpeg" alt="">
      <span class="el-label-sorting">Earth homes</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Play.jpeg" alt="">
      <span class="el-label-sorting">Play</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/OMG!.jpeg" alt="">
      <span class="el-label-sorting">OMG!</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Private rooms.jpeg" alt="">
      <span class="el-label-sorting">Private rooms</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Boats.jpeg" alt="">
      <span class="el-label-sorting">Boats</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Amazing views.jpeg" alt="">
      <span class="el-label-sorting">Amazing views</span>
    </div>


    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Ski-in:out.jpeg" alt="">
      <span class="el-label-sorting">Ski-in:out</span>
    </div>




    <!-- todo: add more img ,these img repear -->

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Boats.jpeg" alt="">
      <span class="el-label-sorting">Boats</span>
    </div>

    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Amazing views.jpeg" alt="">
      <span class="el-label-sorting">Amazing views</span>
    </div>


    <div class="el-sorting">
      <img src="../assets/imgs/main-bar-imgs/Ski-in:out.jpeg" alt="">
      <span class="el-label-sorting">Ski-in:out</span>
    </div>

    <!--
      <div class="el-sorting">
        <img src="../assets/imgs/main-bar-imgs/Boats.jpeg" alt="">
        <span class="el-label-sorting">Boats</span>
      </div>

      <div class="el-sorting">
        <img src="../assets/imgs/main-bar-imgs/Amazing views.jpeg" alt="">
        <span class="el-label-sorting">Amazing views</span>
      </div>


      <div class="el-sorting">
        <img src="../assets/imgs/main-bar-imgs/Ski-in:out.jpeg" alt="">
        <span class="el-label-sorting">Ski-in:out</span>
      </div> -->


    <!-- <button class="scroll-btn-right" @click="scrollRight">Right</button> -->
    <button class="el-sorting filter">
      <img src="../assets/imgs/svgs/filter.svg" alt="">
      <span class="el-label-sorting">filter</span>
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      properties: [
        {
          name: "Property 1",
          price: 100,
          reviewCount: 20,
          isSuperhost: true
        },
        {
          name: "Property 2",
          price: 150,
          reviewCount: 15,
          isSuperhost: false
        },
        {
          name: "Property 3",
          price: 200,
          reviewCount: 10,
          isSuperhost: true
        }
      ],
      filterBy: {
        name: '',
        label: 'All',
        sort: 'name',
        inStock: false,
      },
      // sortBy: null
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy.sort = filterBy
      console.log('setFilter',this.filterBy);
      this.$emit('setFilter', { ...this.filterBy })
    },
    scrollLeft() {
      this.$el.scrollLeft -= 200;
    },
    scrollRight() {
      this.$el.scrollLeft += 200;
    },
  },
  computed: {
    sortedProperties() {
      return this.properties.sort((a, b) => {
        if (a.isSuperhost && !b.isSuperhost) {
          return -1;
        } else if (!a.isSuperhost && b.isSuperhost) {
          return 1;
        } else if (a.reviewCount !== b.reviewCount) {
          return b.reviewCount - a.reviewCount;
        } else {
          return a.price - b.price;
        }
      });
    }
  }
};
</script>