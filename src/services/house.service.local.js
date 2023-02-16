
import { storageService } from './async-storage.service.js'
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
    var houses = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        houses = houses.filter(house => regex.test(house.type) || regex.test(house.description))
    }
    if (filterBy.price) {
        houses = houses.filter(house => house.price <= filterBy.price)
    }
    return houses
}

function getById(houseId) {
    return storageService.get(STORAGE_KEY, houseId)
}

async function remove(houseId) {
    await storageService.remove(STORAGE_KEY, houseId)
}

async function save(house) {
    var savedHouse
    if (house._id) {
        savedHouse = await storageService.put(STORAGE_KEY, house)
    } else {
        // Later, owner is set by the backend
        house.owner = userService.getLoggedinUser()
        savedHouse = await storageService.post(STORAGE_KEY, house)
    }
    return savedHouse
}

async function addHouseMsg(houseId, txt) {
    // Later, this is all done by the backend
    const house = await getById(houseId)
    if (!house.msgs) house.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    house.msgs.push(msg)
    await storageService.put(STORAGE_KEY, house)

    return msg
}

function getEmptyHouse() {
    return {
        type: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// ; (async () => {
//     await storageService.post(STORAGE_KEY, { type: 'Seaview studio in Coral Bay by the Sea', price: 180, kmDistance: 3318, dateFree: ' Mar 19 - 24' })
//     await storageService.post(STORAGE_KEY, { type: 'Socrates stone house, Triantaros', price: 240, kmDistance: 3318, dateFree: 'Mar 19 - 24' })
// })()



// <span class="distance-prev">
// <!-- 3,318 kilometers away -->
// {{ house.kmDistance }} kilometers away
// <!-- ${{ house.price?.toLocaleString() }} -->
// </span>

// <span class="date-prev">
// Mar 19 - 24
// {{ house.dateFree }}
// </span>
