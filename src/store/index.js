import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList(state, data) {
      state.paymentsList.push(data)
    },

    setCategories(state, payload) {
      state.categoryList = payload

    }
    // РЕАКТИВНОЕ ИЗМЕНЕНИЕ ЭЛЕМЕНТА МАССИВА ПО ИНДЕКСУ 
    // editFirstPatmentItem(state, payload){
    //   Vue.set{state.paymentsList,0, payload}
    //   // state.paymentsList[0] = payload
    // }
  },
  actions: {

    // ИМИТАЦИЯ ЗАПРОСА НА СЕРВЕР. ЭКШОНС ИСПОЛЬЗУЕМ ДЛЯ АСИНК ЗАПРОСОВ
    fetchData({ commit }) {
      return new Promise((resolve) => {
          setTimeout(() => {

            resolve([
              {
                date: '28.03.2020',
                category: 'Food',
                value: 169,
              },
              {
                date: '24.03.2020',
                category: 'Transport',
                value: 360,
              },
              {
                date: '24.03.2020',
                category: 'Food',
                value: 532,
              },
            ])
          }, 1500)
        })
        .then(res => {
          commit('setPaymentsListData', res)

        })

    },
    LoadCategories ({ commit }) {
      return new Promise((resolve) => {
        // имитируем работу с сетью
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Sports'])
        }, 1500)
      })
        .then(res => {
          // запускаем изменение состояния через commit
          commit('setCategories', res)
        })
    },
   

  },
  getters: {
    getCategoryList: state => state.categoryList,
    getPaymentList: state => state.paymentsList,
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0)
    }
  }
})