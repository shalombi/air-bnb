

<template>
    DETAILS...
{{ this.$store.getters.displaySortBy }}
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