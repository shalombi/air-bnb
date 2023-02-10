<template>
  <element-row class="element-row">
    <el-col_ class="element-col" :span="8" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 2 : 0">
      <el-card_ :body-style="{ padding: '0px' }">
        <img
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-656456202599059844/original/4dd9802c-0f7b-4eae-b535-e28c7904f332.jpeg?im_w=1200"
          class="image_">
        <div style="padding: 14px;">
          <span>Yummy hamburger</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card_>
    </el-col_>
  </element-row>
</template>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-col_ {
  width: 250px;
}

.el-col-8 {
  max-width: unset;
}

.element-row {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;


  margin-left: 80px;
  margin-right: 80px;

}

.el-card_ {
  border-radius: unset;
  border: unset;
  background-color: unset;
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
