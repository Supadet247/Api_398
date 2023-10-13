import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: 'The Good View', img:"https://www.reviewchiangmai.com/wp-content/uploads/2021/12/01_Goodview.png",
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=66af6261484edc25c7b1b61803d7547c'},
  {name:'Too Nice Nimman', img:"https://www.reviewchiangmai.com/wp-content/uploads/2021/12/02_Too-Nice-Nimman.jpg",
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.884067360988016&lon=99.01340628045365&appid=66af6261484edc25c7b1b61803d7547c'},
  {name:'The PARK Society Bar & Hostel', img:"https://www.reviewchiangmai.com/wp-content/uploads/2021/12/03_The-park-society.jpg",
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.879198960518284&lon=99.01400969350873&appid=66af6261484edc25c7b1b61803d7547c'},
  {name:'Lism cafe Chiangmai', img:"https://www.reviewchiangmai.com/wp-content/uploads/2021/12/04_Lism-cafe.jpg",
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88680552840249&lon=99.00700527133165&appid=66af6261484edc25c7b1b61803d7547c'},
  {name:'Porjai Bar Chiangmai', img:"https://www.reviewchiangmai.com/wp-content/uploads/2021/12/05_-PORJAI-BAR.jpg",
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.80202637792063&lon=98.99512191864117&appid=66af6261484edc25c7b1b61803d7547c'},
  {name:'บางขวาง Cafe’ Chiangmai', img:"https://www.reviewchiangmai.com/wp-content/uploads/2021/12/06_%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%A7%E0%B8%B2%E0%B8%87-%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88.jpg",
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.795914426649965&lon=98.96570372658144&appid=66af6261484edc25c7b1b61803d7547c'},
])

return { travel_list }
})