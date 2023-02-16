

<template>
    <section class="container">
        <h1 class="title">Villa SUER- Maviye açilan eşsiz bir villa sizlerle</h1>
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
        <div class="grid grid-imgs">
            <div class="left-side-grid">
                <img class="hero-grid-left" src="../assets/imgs/img_house_example/55d736c8-0a50-43f4-aefd-9d5ce6ae4870.webp"
                    alt="">
            </div>

            <div class="grid right-side-grid">
                <img class="left-top" src="../assets/imgs/img_house_example/0da3d0ef-a7b1-4363-ab9b-6adcadab0738.webp"
                    alt="">
                <img class="right-top" src="../assets/imgs/img_house_example/8bc72225-3220-4b5d-af7e-d4c62a7c94b5.webp"
                    alt="">
                <img class="left-bottom" src="../assets/imgs/img_house_example/d7c9656c-339b-42fc-b830-8d32a3deb7dc.webp"
                    alt="">
                <img class="right-bottom" src="../assets/imgs/img_house_example/d3707a62-24bb-4a3f-a3d2-2e6812fa3194.webp"
                    alt="">
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

</section>
</template>


<script>
export default {

    data() {
        return {
            displaySortBy: null
        }
    },
    created() {
        this.displaySortBy = this.$store.getters.displaySortBy
        this.$store.commit({ type: 'displaySortBy', displaySortBy: false })

    },
    unmounted() {
        this.$store.commit({ type: 'displaySortBy', displaySortBy: true })
    }
}
</script>