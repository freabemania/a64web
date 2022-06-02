const WEB_BASE = 'https://hackerswithstyle.se/leet'
import axios from 'axios'

const state = {
    searchResult : null
}

const getters = {
    items : state => {
        return state.searchResult
    }
}

const mutations = {
    executeSearch(state, searchCriteria) {
        axios.get(WEB_BASE + '/search/v2?or=Y&name=' + searchCriteria)
            .then(function(response) {
                console.log('got resp')
                state.searchResult = response.data
            })
            .catch(function(error) {
                console.error(error)
            })
    }
}

const actions = {
    search({commit}, searchCriteria) {
        commit('saerch',searchCriteria)
    }
}



export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}