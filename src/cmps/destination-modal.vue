<template><!-- <section class="loggedin-user" v-if="loggedInUser">
    <router-link :to="`/user/${loggedInUser._id}`">
      {{ loggedInUser.fullname }}
    </router-link>
    <span>{{ loggedInUser.score.toLocaleString() }}</span>
    <img :src="loggedInUser.imgUrl" />
</section> -->
    <header class="">


        <section class="head-container grid">

            <section>


                <section class="head-page">

                    <div class="logo pointer">
                        <router-link to="/house">
                            <img src="../assets/logo.svg" alt="">
                        </router-link>
                    </div>
                    <!-- border -->
                    <div class="grid modal">
                        <button class="btn-navigation-left stays-btn">
                            <span>Stays</span>
                        </button>

                        <!-- <span>|</span> -->

                        <button class="btn-navigation-mid">
                            <span>Experiences</span>
                        </button>

                        <!-- <span>|</span> -->

                        <button class="btn-navigation-mid">
                            <span>Online Experiences</span>
                        </button>


                    </div>







                    <section class="actions grid">

                        <button class="pill left-action-btn hover-pill"> <span class="">Airbnb your home</span> </button>

                        <button class="container--lang-img pill flex align-center justify-center">
                            <img class="lang-img" src="../assets/imgs/svgs/lang.svg" alt="">
                        </button>

                        <div class="flex right-action-div pill border">

                            <!-- <button class="burger-nav pill flex align-center"> -->
                            <img class="burger-nav-img pill" src="../assets/imgs/svgs/nav.svg" alt="">
                            <!-- </button> -->

                            <button class="user-btn pill flex align-center justify-center">
                                <img class="user pill" src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3">
                            </button>

                        </div>

                    </section>
                </section>
            </section>

            <section class="grid container-actions-nav">



                <section class="grid actions-nav">

                    <button class="btn-navigation-left">

                        <div class="flex column">
                            <div>
                                <span>Ankywhere</span>
                            </div>
                            <div>
                                <span>Ankywhere</span>
                            </div>
                        </div>

                    </button>

                    <span>|</span>

                    <button class="btn-navigation-mid">
                        <div class="flex column">
                            <div>
                                <span>Any week</span>
                            </div>
                            <div>
                                <span>Any week</span>
                            </div>
                        </div>
                        <!-- <span>Any week</span> -->
                    </button>

                    <span>|</span>

                    <button class="btn-navigation-mid">
                        <div class="flex column">
                            <div>
                                <span>Any week</span>
                            </div>
                            <div>
                                <span>Any week</span>
                            </div>
                        </div>
                        <!-- <span>Any week</span> -->
                    </button>
                    <span>|</span>

                    <div class="flex div-right-navigation justify-content">
                        <button class="btn-navigation-right">
                            <span>Add guests</span>
                        </button>

                        <div class="search-container-icon">
                            <img class="icon-search" src="../assets/imgs/svgs/icon-search.svg" alt="">
                        </div>
                    </div>



                </section>
            </section>


        </section>


    </header>
</template>
<!-- <logo-row /> -->


  
<script>
import logoRow from './logo-row.vue'

export default {
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    components: {
        logoRow
    }
}
</script>


