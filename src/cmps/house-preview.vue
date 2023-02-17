
<template>

    <section class="house-preview">

        <div class="flex center">
          <img
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656456202599059844/original/4dd9802c-0f7b-4eae-b535-e28c7904f332.jpeg?im_w=1200"
            class="image_">
        </div>

        <div class="prev-desc flex column">

          <span class="location-prev">
            {{ house.type }}
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
    props: ['house'],
    data() {
        return {
        }
    }
}
</script>