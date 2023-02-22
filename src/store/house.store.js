import { houseService } from '../services/house.service.local'

export function getActionRemoveHouse(houseId) {
    return {
        type: 'removeHouse',
        houseId
    }
}
export function getActionAddHouse(house) {
    return {
        type: 'addHouse',
        house
    }
}
export function getActionUpdateHouse(house) {
    return {
        type: 'updateHouse',
        house
    }
}

export function getActionAddHouseMsg(houseId) {
    return {
        type: 'addHouseMsg',
        houseId,
        txt: 'Stam txt'
    }
}

export const houseStore = {
    state: {
        displaySortBy: true,
        houses: [],
        filterBy: {
            label: 'All',
            sort: 'name',
            inStock: true,
          },
    },
    getters: {
        houses({ houses }) { return houses },
        displaySortBy({ displaySortBy }) { return displaySortBy },

    },
    mutations: {
        displaySortBy(state,  payload ) {
            state.displaySortBy = payload.displaySortBy
        },
        setHouses(state, { houses }) {
            state.houses = houses
        },
        addHouse(state, { house }) {
            state.houses.push(house)
        },
        updateHouse(state, { house }) {
            const idx = state.houses.findIndex(c => c.id === house._id)
            state.houses.splice(idx, 1, house)
        },
        removeHouse(state, { houseId }) {
            state.houses = state.houses.filter(house => house._id !== houseId)
        },
        addHouseMsg(state, { houseId, msg }) {
            const house = state.houses.find(house => house._id === houseId)
            if (!house.msgs) house.msgs = []
            house.msgs.push(msg)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
          },

        // setSortBy
    },
    actions: {
        async addHouse(context, { house }) {
            try {
                house = await houseService.save(house)
                context.commit(getActionAddHouse(house))
                return house
            } catch (err) {
                console.log('houseStore: Error in addHouse', err)
                throw err
            }
        },
        async updateHouse(context, { house }) {
            try {
                house = await houseService.save(house)
                context.commit(getActionUpdateHouse(house))
                return house
            } catch (err) {
                console.log('houseStore: Error in updateHouse', err)
                throw err
            }
        },
        async loadHouses(context) {
            try {
                console.log('context.state.filterBy',context.state.filterBy)
                const houses = await houseService.query(context.state.filterBy)
                context.commit({ type: 'setHouses', houses })
            } catch (err) {
                console.log('houseStore: Error in loadHouses', err)
                throw err
            }
        },
        // loadToys({ commit, state }) {
        //     toyService.query(state.filterBy)
        //       .then((toys) => {
        //         commit({ type: 'setToys', toys })
        //       })
        //   },
        async removeHouse(context, { houseId }) {
            try {
                await houseService.remove(houseId)
                context.commit(getActionRemoveHouse(houseId))
            } catch (err) {
                console.log('houseStore: Error in removeHouse', err)
                throw err
            }
        },
        async addHouseMsg(context, { houseId, txt }) {
            try {
                const msg = await houseService.addHouseMsg(houseId, txt)
                context.commit({ type: 'addHouseMsg', houseId, msg })
            } catch (err) {
                console.log('houseStore: Error in addHouseMsg', err)
                throw err
            }
        },
        async setFilter({ commit, dispatch }, { filterBy }) {
            try{
                commit({ type: 'setFilter', filterBy })
                dispatch({ type: 'loadHouses' })
            }
            catch (err) {
                console.log('houseStore: Error in addHouseMsg', err)
                throw err
            }
          }

    }
}