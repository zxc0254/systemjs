export const moduleHome = {
  namespaced: true,
  state: {
    username: window.sessionStorage.username,
    userId: window.sessionStorage.userId
  },
  mutations: {
    increment (state, payload) {
      if (window.sessionStorage.userId && payload.username && payload.userId) {
        window.sessionStorage.username = payload.username
        window.sessionStorage.userId = payload.userId
        state.username = payload.username
        state.userId = payload.userId
      } else if (window.sessionStorage.userId && !payload.username && !payload.userId) {
        state.username = window.sessionStorage.username
        state.userId = window.sessionStorage.userId
      } else {
        window.sessionStorage.username = payload.username
        window.sessionStorage.userId = payload.userId
        state.username = payload.username
        state.userId = payload.userId
      }
    },
    clear (state, payload) {
      state.userId = ''
      state.username = ''
    }
  },
  actions: {
    increment (context, payload) {
      console.log(payload)
      context.commit('increment', payload)
    },
    clear (context, payload) {
      context.commit('clear', payload)
    }
  },
  getters: {

  }
}
