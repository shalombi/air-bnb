<template>
  <!-- <section class="house-filter">
    <input v-model="filterBy.name" @input="setFilter" type="text" class="form-input" placeholder="Search name..." />
    <select @change="setFilter" v-model="filterBy.label">
      <option value="All">All</option>
      <option value="Doll">Doll</option>
      <option value="Battery Powered">Battery Powered</option>
      <option value="Baby">Baby</option>
    </select>
    <select @change="setFilter" v-model="filterBy.sort">
      <option value="name">name</option>
      <option value="price">price</option>
      <option value="createdAt">created</option>
    </select>
    <label>
      Show only houses in stock

      <input name="inStock" @change="setFilter" type="checkbox" />
    </label>
  </section> -->
</template>

<script>
export default {
  name: 'house-filter',
  data() {
    return {
      filterBy: {
        name: '',
        label: 'All',
        sort: 'name',
        inStock: false,
      },
    }
  },
  methods: {
    setFilter({ target }) {
      if (target.name === 'inStock') {
        this.filterBy.inStock = !this.filterBy.inStock
      }
      this.$emit('setFilter', { ...this.filterBy })
    },
  },
}
</script>
