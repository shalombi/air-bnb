<template>
  <img
    src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656456202599059844/original/4dd9802c-0f7b-4eae-b535-e28c7904f332.jpeg?im_w=1200"
    class="image_">
</template>

<style>
.image {
  width: 100%;
  display: block;
}

.element-row {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin-left: 80px;
  margin-right: 80px;

}

.image_ {
  border-radius: 10px;
  max-width: 250px;
}
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
