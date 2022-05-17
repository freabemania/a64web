import axios from 'axios'

const state = {
    user: {

    },
    authenticated: false
}

const getters = {
    authenticated : state => {
        return state.authenticated
    }
}

const mutations = {
    withPassword(state, credentials) {
        axios.get('https://hackerswithstyle.se/leet/user/donations')
            .then(function (response) {
                console.log('Ok ' + response.data)
                state.authenticated = true
            })
            .catch(function (error) {
                console.log('Err ' + error)
                state.authenticated = false
            })
        console.log('Login ' + credentials.username + ' ' + credentials.password )
        console.log('state' + state)

    }
}

const actions = {
    withPassword({commit},credentials) {
        commit('withPassword',credentials)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}