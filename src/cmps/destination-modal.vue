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

                    <button class="btn-navigation-left" @click.stop="displaySection('A')">
                        <div class="flex column">
                            <div>
                                <span>A</span>
                            </div>
                            <div>
                                <span>Ankywhere</span>
                            </div>
                        </div>

                        <span class="">is span</span>
                    </button>



                    <span>|</span>

                    <button class="btn-navigation-mid" @click.stop="displaySection('B')">
                        <div class="flex column">
                            <div>
                                <span>B</span>
                            </div>
                            <div>
                                <span>Any week</span>
                            </div>
                        </div>
                        <!-- <span>Any week</span> -->
                    </button>

                    <span>|</span>

                    <button class="btn-navigation-mid" @click.stop="displaySection('C')">
                        <div class="flex column">
                            <div>
                                <span>C</span>
                            </div>
                            <div>
                                <span>Any week</span>
                            </div>
                        </div>
                        <!-- <span>Any week</span> -->
                    </button>
                    <span>|</span>

                    <div class="flex div-right-navigation justify-content" @click.stop="displaySection('D')">
                        <button class="btn-navigation-right" >
                            <span>D</span>
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
            // display: {
            //     A: false,
            //     B: false,
            //     C: false,
            //     D: false,
            // },


            display: [
                { A: false, },

                { B: false },
                { C: false },
                { D: false },
            ]



            // displayA: false,
            // displayB: false,
            // displayC: false,
            // displayD: false,
            // sectionShowed

        }
    },
    methods: {
        displaySection(section, sectionToHide = ['A', 'B', 'C', 'D']) {
            console.log('section', section);
            // const displaySection = this.display.filter(d => d[section])[0] || this.display.filter(d => d[section])[0] === section 
            // console.log('d[section])[0]',displaySection);

            // console.log(displaySection, 'displaySection')
            // console.log(displaySection[section], 'displaySection[section]')

            // Rest display
            // const ABCD = ['A','B','C','D']
            this.display.forEach(d => {
                // console.log(d, 'd')

                sectionToHide.forEach(sectionChar => {
                    // console.log('sectionChar', sectionChar)
                    d[sectionChar] = false
                    // console.log(d)
                    // d[sectionChar] = false

                    // console.log(d[sectionChar], section);
                })
                // console.log('d',d);
                // console.log('d.section',d[section]);
                // console.log('section',section)
                // if (d[section] === section) console.log('popo');

            })
            // displaySection[section] = true
            // console.log(this.display[0], 'this.display')
            // 

            // const displaySection = this.display.forEach(d => if (d[section] === section)console.log('find'))
            // const display_ = this.display.find(d => console.log(d) )
            // console.log('d[section]',display_)

            // console.log('d.section',d[section]);
            this.display[0][section] = true
            console.log(this.display[0])



        }

    },
    computed: {
        displayToShow() {
            // console.log(this.display.filter(d => d.A)[0])
            return this.display.filter(d => d.A)[0]
        }
    },
    components: {
        logoRow
    }
}
</script>


