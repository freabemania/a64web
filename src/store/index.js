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
            console.log('increment count')
            state.count++
        },
        online(state) {
            return state.count;
        }
    },
    getters: {
        loggedIn : state => {
            return state.loggedIn
        }
    }


})