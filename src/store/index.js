import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
        { nomRestaurant: 'Pommes', numero: 0, localisation:'Lyon', mail:'test1',mdp:'test1',nom:'jojo1',prenom:'toto1' },
        { nomRestaurant: 'Amour', numero: 6, localisation:'Lyon', mail:'test2',mdp:'test2',nom:'jojo2',prenom:'toto2' },
        { nomRestaurant: 'Berk', numero: 8, localisation:'Lyon', mail:'test3@gmail.com',mdp:'test3',nom:'jojo3',prenom:'toto3' },
        { nomRestaurant: 'Pommes', numero: 0, localisation:'Lyon', mail:'test5',mdp:'test5',nom:'jojo1',prenom:'toto1' }
    ],
    atelier: [
      { nom: 'Atelier Crêpes', date: '19 jan.21', restaurant:'La crêperie', chef:'Chef Martin',tarif:'20 euros/p',duree:'2h',nombrePersonne:'7', index: 1 },
      { nom: 'Atelier sushi', date: '1 fev.21', restaurant:'Chez Monique', chef:'Chef Monique',tarif:'25 euros/p',duree:'3h',nombrePersonne:'4', index: 2 },
      { nom: 'Atelier pasta', date: '25 jan.21', restaurant:'Italia', chef:'Chef Robert',tarif:'15 euros/p',duree:'1h',nombrePersonne:'3', index: 3 },
      { nom: 'Atelier burger', date: '30 jan.21', restaurant:'BurgerLand', chef:'Chef Dafond',tarif:'20 euros/p',duree:'2h',nombrePersonne:'7', index: 4 }
    ]


  },
  mutations: {

    ajoutsUsers(state, users ) {
      state.users.push( users )
    }


  },
  actions: {
  },
  modules: {
  }
})
