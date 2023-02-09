
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'house'

export const houseService = {
    query,
    getById,
    save,
    remove,
    getEmptyHouse,
    addHouseMsg
}
window.cs = houseService


async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)

    // var houses = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     houses = houses.filter(house => regex.test(house.type) || regex.test(house.description))
    // }
    // if (filterBy.price) {
    //     houses = houses.filter(house => house.price <= filterBy.price)
    // }
    // return houses

}
function getById(houseId) {
    // return storageService.get(STORAGE_KEY, houseId)
    return httpService.get(`house/${houseId}`)
}

async function remove(houseId) {
    // await storageService.remove(STORAGE_KEY, houseId)
    return httpService.delete(`house/${houseId}`)
}
async function save(house) {
    var savedHouse
    if (house._id) {
        // savedHouse = await storageService.put(STORAGE_KEY, house)
        savedHouse = await httpService.put(`house/${house._id}`, house)

    } else {
        // Later, owner is set by the backend
        house.owner = userService.getLoggedinUser()
        // savedHouse = await storageService.post(STORAGE_KEY, house)
        savedHouse = await httpService.post('house', house)
    }
    return savedHouse
}

async function addHouseMsg(houseId, txt) {
    const savedMsg = await httpService.post(`house/${houseId}/msg`, { txt })
    return savedMsg
}


function getEmptyHouse() {
    return {
        type: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}





