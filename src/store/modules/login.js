const state = {
    user: {

    },
    loggedIn: false
}

const getters = {
    loggedIn : state => {
        return state.loggedIn
    }
}

const mutations = {
    loginWithPass(state, credentials) {
        console.log('Login ' + credentials.username + ' ' + credentials.password )
        console.log('state' + state)
        state.loggedIn = true
    }
}

const actions = {
    loginWithPassword({commit},credentials) {
        commit('loginWithPass',credentials)
    },
    loggedIn : state => {
        return state.loggedIn
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}