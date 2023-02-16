

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
                <div class="flex">
                    <span>Share</span>
                    <img class="row-up" src="../assets/imgs/svgs/up-row.svg" alt="">
                </div>
                <div class="flex">
                    <span>Save</span>
                    <img class="like" src="../assets/imgs/svgs/like.svg" alt="">
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