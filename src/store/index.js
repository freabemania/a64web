import Vuex from 'vuex'

export default new Vuex.Store({
    state() {
        return {
            count : 0,
            loggedIn: false
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        online(state) {
            return state.count;
        },
        loginWithPass({state}, credentials) {
            console.log('Login ' + credentials.username + ' ' + credentials.password )
            console.log('state' + state)
            state.loggedIn = true
        }
    },
    actions: {
        loginWithPassword({commit},credentials) {
            commit('loginWithPass',credentials)
        }
    },
    getters: {
        loggedIn : state => {
            return state.loggedIn
        }
    }
})