import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { houseStore } from './house.store.js'
import { reviewStore } from './review.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    houseStore,
    reviewStore
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
