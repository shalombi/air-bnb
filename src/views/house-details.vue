

<template><!-- {{ house }} -->
    <!-- <div class="bg-litepie-primary-500 text-white p-4">
        Hello, world!
    </div> -->
    <section class="container" v-if="house">
        <h1 class="title">{{ house.name }}</h1>
        <section class="flex justify-content">

            <div class="left-sub-title flex">
                <div class="flex">
                    <div class="flex">
                        <img class="star" src="../assets/imgs/svgs/star.svg" />
                        <span class="rate">5.0</span>
                    </div>

                    <span>Superhost</span>
                    <span class="location-txt">Kaş, Antalya, Turkey</span>
                </div>
            </div>
            <!-- <section></section> -->


            <div class="flex right-sub-title">
                <div class="action-sub-title flex">
                    <div>
                        <span>Share</span>
                    </div>
                    <img class="row-up" src="../assets/imgs/svgs/up-row.svg" alt="">
                </div>
                <div class="action-sub-title flex">
                    <div>
                        <span>Save</span>
                    </div>
                    <img class="like" src="../assets/imgs/svgs/like.svg" alt="">
                </div>

            </div>
        </section>
    </section>

    <section>
        <!-- <pre>{{house}}</pre> -->
        <div class="grid grid-imgs">
            <div class="left-side-grid">
                <img class="hero-grid-left" :src="house?.imgs?.heroImgUrl" alt="">
            </div>
            <!-- ../assets/imgs/ -->
            <div class="grid right-side-grid">
                <!-- <img class="left-top" :src="house.imgs.restImgsUrl.imgUrl1"
                        alt=""> -->
                <img class="left-top" :src="house.imgs.restImgsUrl.imgUrl1" alt="">
                <img class="right-top" :src="house.imgs.restImgsUrl.imgUrl2" alt="">
                <img class="left-bottom" :src="house.imgs.restImgsUrl.imgUrl3" alt="">
                <img class="right-bottom" :src="house.imgs.restImgsUrl.imgUrl4" alt="">
            </div>
        </div>
    </section>

    <section class="grid container-details">

        <section class="details">

            <div class="bottom-title flex">
                <span class="bottom-title-span">Entire condo hosted by Estéa</span>
                <div>
                    <span class="desc-brief">2 guests studio1 bed1 bath</span>
                </div>
            </div>
            <hr />
            <!-- .services div img {max-width:50px} -->
            <section class="services">
                <div class="flex">
                    <img src="../assets/imgs/details/check-in.svg" alt="">
                    <div class="flex column">
                        <span>Self check-in</span>
                        <span class="brief-service">Check yourself in with the lockbox.</span>
                    </div>
                </div>

                <div class="flex">
                    <img src="../assets/imgs/details/super-host.svg" alt="">
                    <div class="flex column">
                        <span>Estéa is a Superhost</span>
                        <span class="brief-service">Superhosts are experienced, highly rated hosts who are committed to
                            providing great stays for guests.</span>
                    </div>
                </div>

                <div class="flex">
                    <img src="../assets/imgs/details/location.svg" alt="">
                    <div class="flex column">
                        <span>Great location</span>
                        <span class="brief-service">90% of recent guests gave the location a 5-star rating.</span>
                    </div>
                </div>
            </section>

            <hr />

            <section class="flex column air-cover">
                <div>
                    <img src="../assets/imgs/details/aircover.webp" alt="">
                </div>

                <div>
                    <span>Every booking includes free protection from Host cancellations, listing inaccuracies, and other
                        issues like trouble checking in.
                    </span>
                </div>

                <div class="container-learn-more">
                    <span class="Learn-more">
                        Learn more
                    </span>
                </div>

            </section>

            <hr />

            <section class="desc-txt">
                <span>A special seaview apartment in the heart of Coral Bay. Go to sleep with the sunset and wake up with
                    the beautiful ocean waves. Walk to the nearby bars and restaurants, and take a stroll down to the rocky
                    beach.</span>
            </section>

            <hr />

            <!-- specific -->

            <section class="flex column where-sleep-container">
                <div class="txt-container ">
                    <span class="where-sleep-txt">Where you'll sleep</span>
                </div>

                <!-- <div class="bed-imgs grid">
                        <div>

                            <img class="bed-img"
                            :src="house.imgs.sleep[0].imgUrlSleep1" alt="">
                        </div>
                        <div>

                            <img class="bed-img"
                            :src="house.imgs.sleep[1].imgUrlSleep2" alt="">
                        </div>
                    </div> -->


                <div class="desc flex column">
                    <span>Bedroom area</span>
                    <span>1 queen bed</span>
                </div>

            </section>

            <hr />

            <section class="all-services">
                <div class="container-title">
                    <span class="title">What this place offers</span>
                </div>

                <section class="grid all-services-grid">

                    <section class="left-side-grid">

                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src="../assets/imgs/details/services/sea-view.svg" alt="">
                                <div><span>Sea-view</span> </div>
                            </div>
                        </div>

                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src="../assets/imgs/details/services/kitchen.svg" alt="">
                                <div><span>Kitchen</span> </div>
                            </div>
                        </div>

                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src="../assets/imgs/details/services/free parking-on-premises.svg"
                                    alt="">
                                <div><span>Free parking-on-premises</span> </div>
                            </div>
                        </div>

                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src='../assets/imgs/details/services/55"-HDTV-with Netflix.svg'
                                    alt="">
                                <div><span>55"-HDTV-with Netflix</span> </div>
                            </div>
                        </div>

                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src="../assets/imgs/details/services/carbon-monoxide-alarm.svg"
                                    alt="">
                                <div><span>Carbon-monoxide-alarm</span> </div>
                            </div>
                        </div>

                    </section>


                    <section class="left-side-grid">


                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src="../assets/imgs/details/services/public-or-shared .svg" alt="">
                                <div><span>Public or shared beach access</span> </div>
                            </div>
                        </div>

                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src="../assets/imgs/details/services/wifi.svg" alt="">
                                <div><span>Wifi</span> </div>
                            </div>
                        </div>

                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src="../assets/imgs/details/services/shared-pool.svg" alt="">
                                <div><span>Shared-pool</span> </div>
                            </div>
                        </div>
                        <!-- shared-pool -->
                        <!-- smoke-alarm -->
                        <div class="sol-service-container">
                            <div class="sol-service flex">
                                <img class="service-img" src="../assets/imgs/details/services/window-AC-unit.svg" alt="">
                                <div><span>Window AC unit</span> </div>
                            </div>
                        </div>

                        <div class="sol-service-container">
                            <div class="sol-service smoke-alarm-container flex">
                                <img class="service-img" src="../assets/imgs/details/services/smoke-alarm.svg" alt="">
                                <div><span>Smoke alarm</span> </div>
                            </div>
                        </div>


                    </section>





                </section>

                <hr />

                <!-- <section class="cal-container"> -->
                <!-- </section> -->

                <vue-cal :events="events"></vue-cal>

                <!-- <cal-reserve/> -->
            </section>

            <!-- <date-picker /> -->


        </section>


        <section class="reserve-box">
            <div class="flex column">

                <div class="flex justify-content summary-details">
                    <div class="left-content">
                        <span class="price">₪5,613 <span class="">night</span> </span>
                    </div>

                    <div class="right-content">
                        <img class="star-review-img" src="../assets/imgs/svgs/star.svg" alt=""><span
                            class="star-review-txt"> 4.81 ·</span> <span class="reviews-amount">37 reviews</span>
                    </div>

                </div>

                <div class="container-date-reserve flex column">


                    <div class="flex date-reserve">

                        <!-- <div class="flex"> -->
                        <div class="check-in flex column">
                            <div><span class="check-in-txt">CHECK-IN</span></div>
                            <div><span class="date-txt">3/16/202</span></div>
                        </div>

                        <div class="check-out flex column">
                            <div><span class="check-out-txt">CHECKOUT</span></div>
                            <div><span class="date-txt">3/22/202</span></div>
                        </div>
                    </div>

                    <div class="guests">
                        <div><span class="guests-txt">guests</span></div>
                        <div> <span class="amount-guests-txt">1 guest</span></div>

                    </div>
                    <!-- </div> -->




                </div>

                <div>
                    <button class="btn-reserve">Reserve</button>
                </div>

                <div class="status">
                    <span>
                        You won't be charged yet
                    </span>
                </div>

                <!-- margin-bottom: 12px; -->
                <!-- .details div span{margin-bottom: 12px;} -->
                <div class="details">
                    <div class="info flex justify-content">
                        <span class="info-txt">₪5,613 x 6 nights </span>
                        <span class="info-txt">₪33,680</span>
                    </div>


                    <div class="info flex justify-content">
                        <span class="info-txt"> Weekly discount </span>
                        <span class="info-txt">-₪76</span>
                    </div>


                    <div class="info flex justify-content">
                        <span class="info-txt">Cleaning fee </span>
                        <span class="info-txt">₪189</span>
                    </div>



                    <!-- ₪218 x 7 nights
                                                                                                                                                                                  Show price breakdown
                                                                                                                                                                                  ₪1,526

                                                                                                                                                                                  Weekly discount
                                                                                                                                                                                  Show price breakdown
                                                                                                                                                                                  -₪76

                                                                                                                                                                                  Cleaning fee
                                                                                                                                                                                  Show price breakdown
                                                                                                                                                                                  ₪189 -->

                    <!-- <div class="flex justify-content">
                                                                                                                                                                                                                                                                      <span>₪5,613 x 6 nights </span>
                                                                                                                                                                                                                                                                      <span>₪33,680</span>
                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                  <div class="flex justify-content">
                                                                                                                                                                                                                                                                      <span>₪5,613 x 6 nights </span>                                           <span>₪33,680</span> -->
                    <!-- </div> -->

                </div>


            </div>

        </section>
        
        <!-- <section class="reviews">i am review </section> -->

        
        
        
    </section>
    
    <section class="map-container">
       <map-cmp />
   </section>

    <!-- <section class="map-container flex center"> -->
        <!-- <section class="map grid">
            <section></section>
            <map-cmp />
            <section></section>
        </section> -->
    <!-- </section> -->

</template>


<script>
import mapCmp from "../cmps/map-cmp.vue";

import { houseService } from "../services/house.service.local.js"
// import VueCal from 'vue-cal'
// import calReserve from '../cmps/cal-reserve.vue'
// import Datepicker from '@chenfengyuan/vue-datepicker';
// import datePicker from '../cmps/date-picker.vue'

export default {
    data() {
        return {
            house: null,
            displaySortBy: null,

        }
    },
    created() {
        this.displaySortBy = this.$store.getters.displaySortBy
        this.$store.commit({ type: 'displaySortBy', displaySortBy: false })

        const id = this.$route.params.id
        houseService.getById(id)
            .then(house => this.house = house)

    },
    unmounted() {
        this.$store.commit({ type: 'displaySortBy', displaySortBy: true })
    },
    components: {
        // datePicker,
        mapCmp
    },
}
</script>

<!-- <style>
.map{
    max-width: 300px;
}
</style> -->