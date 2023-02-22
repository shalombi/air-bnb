
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

    if (filterBy.sort) {

        // if (filterBy.sort.filter(c => c === 'All').length){
        //     const regex = new RegExp('All', 'i')
        //     houses = houses.filter(house => regex.test(house.type) )
        // }
        
        const regex = new RegExp(filterBy.sort, 'i')
        houses = houses.filter(house => regex.test(house.type) || regex.test(house.description))
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



// TEST DATA
// testData()
async function testData() {

    await storageService.post(STORAGE_KEY, {
        name: 'Panoramic View Villa in OliveGroves',
        type: 'Farm',
        price: 180, kmDistance: 3318,
        dateFree: 'Mar 19 - 24',
        imgs: {
            heroImgUrl: "https://a0.muscache.com/im/pictures/c8c8324d-2799-42f2-a8d1-7bfa0cdff0a1.jpg?im_w=1200",
            sleep: [
                { imgUrlSleep1: 'https://a0.muscache.com/im/pictures/d117fa2c-1e39-4e62-bfb1-980b16217ab3.jpg?im_w=720' },
                { imgUrlSleep2: 'https://a0.muscache.com/im/pictures/94da52b7-7de5-4cd9-9473-ecb41597482a.jpg?im_w=720' }
            ],
            restImgsUrl: {
                imgUrl1: 'https://a0.muscache.com/im/pictures/86c3493e-5018-4e2d-95eb-22104969e7cf.jpg?im_w=720',
                imgUrl2: 'https://a0.muscache.com/im/pictures/d117fa2c-1e39-4e62-bfb1-980b16217ab3.jpg?im_w=720',
                imgUrl3: 'https://a0.muscache.com/im/pictures/11224ec9-9a27-4fc2-acf6-931843c420d7.jpg?im_w=720',
                imgUrl4: 'https://a0.muscache.com/im/pictures/94da52b7-7de5-4cd9-9473-ecb41597482a.jpg?im_w=720',
            }
        }
    })


    await storageService.post(STORAGE_KEY, {
        name: 'Sea view villa with Private pool Near the beach 3',
        type: 'Amazing pools',
        price: 514, kmDistance: 1057,
        dateFree: 'Mar 19 - 24',
        imgs: {
            heroImgUrl: "https://a0.muscache.com/im/pictures/e42482af-706f-40e4-bc2c-13f801c49c39.jpg?im_w=1200",
            sleep: [
                { imgUrlSleep1: 'https://a0.muscache.com/im/pictures/miso/Hosting-43475351/original/70d2a13b-1d3b-4647-8c15-ac7dc0036686.jpeg?im_w=720' },
                { imgUrlSleep2: 'https://a0.muscache.com/im/pictures/miso/Hosting-43475351/original/794e3c62-7b89-417d-b70c-87016ef25bf9.jpeg?im_w=720' }
            ],
            restImgsUrl: {
                imgUrl1: 'https://a0.muscache.com/im/pictures/8946dce6-2d0f-46f9-a12d-566bed2d412e.jpg?im_w=720',
                imgUrl2: 'https://a0.muscache.com/im/pictures/1ed4af45-aef2-482b-bd65-585004fcb723.jpg?im_w=720',
                imgUrl3: 'https://a0.muscache.com/im/pictures/d9607726-99e3-49dd-b427-846619c15d04.jpg?im_w=720',
                imgUrl4: 'https://a0.muscache.com/im/pictures/1c38b4bb-3a00-4a1e-91c7-fefdcd011c09.jpg?im_w=720',
            }
        }
    })

    await storageService.post(STORAGE_KEY, {
        name: 'Villa Merina Heated Pool',
        type: 'Farm',
        price: 514, kmDistance: 1057,
        dateFree: 'Mar 19 - 24',
        imgs: {
            heroImgUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-18595007/original/01af60f5-287e-4f95-97e3-a898f98ab08b.jpeg?im_w=1200",
            sleep: [
                { imgUrlSleep1: 'https://a0.muscache.com/im/pictures/ca52f413-476c-4424-863b-e13c08f2a5fd.jpg?im_w=720' },
                { imgUrlSleep2: 'https://a0.muscache.com/im/pictures/3f056837-3020-428d-a666-a354e8c44799.jpg?im_w=720' }
            ],
            restImgsUrl: {
                imgUrl1: 'https://a0.muscache.com/im/pictures/miso/Hosting-18595007/original/63993d90-314a-4cef-abb4-c2abc03e32ce.jpeg?im_w=720',
                imgUrl2: 'https://a0.muscache.com/im/pictures/miso/Hosting-1…b37ce3-fde5-47f3-81d4-f39cafff7629.jpeg?im_w=1200',
                imgUrl3: 'https://a0.muscache.com/im/pictures/miso/Hosting-18595007/original/9b5b8baa-065b-4f16-aae3-682cb489b3ea.jpeg?im_w=720',
                imgUrl4: 'https://a0.muscache.com/im/pictures/miso/Hosting-18595007/original/35b37ce3-fde5-47f3-81d4-f39cafff7629.jpeg?im_w=1200',
            }
        }
    })





    // https://a0.muscache.com/im/pictures/c8c8324d-2799-42f2-a8d1-7bfa0cdff0a1.jpg?im_w=1200

    // await storageService.post(STORAGE_KEY, {
    //     type: 'Socrates stone house, Triantaros',
    //     price: 240,
    //     kmDistance: 3318,
    //     dateFree: 'Mar 19 - 24'
    // })
}



// // TEST DATA
// // testData()
// async function testData() {
//     await storageService.post(STORAGE_KEY, {
//         type: 'Seaview studio in Coral Bay by the Sea',
//         price: 180, kmDistance: 3318,
//         dateFree: 'Mar 19 - 24',
//         imgs: {
//             heroImgUrl: "../assets/imgs/all-house-example/Farms/0/0.webp",
//             sleep: [
//                 { imgUrlSleep1: '../assets/imgs/all-house-example/Farms/0/sleep.webp' },
//                 { imgUrlSleep1: '../assets/imgs/all-house-example/Farms/0/sleep2.webp' }
//             ],
//             restImgsUrl: [{
//                 imgUrl1: '../assets/imgs/all-house-example/Farms/0/1.webp',
//                 imgUrl2: '../assets/imgs/all-house-example/Farms/0/2.webp',
//                 imgUrl3: '../assets/imgs/all-house-example/Farms/0/3.webp',
//                 imgUrl4: '../assets/imgs/all-house-example/Farms/0/4.webp',
//             }]
//         }
//     })

//     // https://a0.muscache.com/im/pictures/c8c8324d-2799-42f2-a8d1-7bfa0cdff0a1.jpg?im_w=1200

//     // await storageService.post(STORAGE_KEY, {
//     //     type: 'Socrates stone house, Triantaros',
//     //     price: 240,
//     //     kmDistance: 3318,
//     //     dateFree: 'Mar 19 - 24'
//     // })
// }



