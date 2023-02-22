
<template>
  <!-- {{ house }} -->
  <section class="house-preview">
    <!-- {{house.imgs.heroImgUrl }} -->
    <!-- {{ house.imgs?.heroImgUrl }} -->
    <!-- imgUrls:{{ imgUrls }} -->
    <div v-if="house" class="flex center">
      <img v-if="house" :src="house.imgs.heroImgUrl" class="image_">
    </div>

    <div class="prev-desc flex column">

      <span class="location-prev">
        {{ house.name }}
      </span>

      <span class="distance-prev">
        {{ house.kmDistance.toLocaleString('en-US') }} kilometers away
      </span>

      <span class="date-prev">
        {{ house.dateFree }}
      </span>

      <span class="price-prev">
        <span class="sum">₪{{ house.price.toLocaleString('en-US') }}</span> <span class="per-night-txt">night</span>
      </span>

    </div>
  </section>
</template>


<script>
export default {
  props: ['house','houseUrl'],
  data() {
    return {
      imgUrls: null
    }
  },
  created() {
    console.log(this.house.imgs.sleep[0].imgUrlSleep1    ,'*****');
    // JSON.parse(JSON.stringify(this.house?.imgs?.heroImgUrl));
    this.imgUrls = this.houseUrl
    // this.imgUrls = JSON.parse(JSON.stringify(this.house.imgs.heroImgUrl));

  },
  mounted(){
    // console.log(this.house.imgs.heroImgUrl,'##');

    // this.imgUrls = this.house.imgs.heroImgUrl

  }
}
</script>