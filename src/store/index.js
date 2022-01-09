import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
        { nomRestaurant: 'Pommes', numero: 0, localisation:'Lyon', mail:'test1@gmail.com',mdp:'test1',nom:'jojo1',prenom:'toto1' },
        { nomRestaurant: 'Amour', numero: 6, localisation:'Lyon', mail:'test2@gmail.com',mdp:'test2',nom:'jojo2',prenom:'toto2' },
        { nomRestaurant: 'Berk', numero: 8, localisation:'Lyon', mail:'test3@gmail.com',mdp:'test3',nom:'jojo3',prenom:'toto3' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
