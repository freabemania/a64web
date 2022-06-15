const WEB_BASE = 'https://hackerswithstyle.se/leet'
import axios from 'axios'

const state = {
    searchResult : null,
    selectedItem : null
}

const getters = {
    items : state => {
        return state.searchResult
    },
    selectedItem: state => {
        return state.selectedItem
    }
}

const mutations = {
    executeSearch(state, searchCriteria) {
        axios.get(WEB_BASE + '/search/v2?or=Y&name=' + searchCriteria)
            .then(function(response) {
                console.log('got resp',response.data)
                state.searchResult = response.data
            })
            .catch(function(error) {
                console.error(error)
            })
    },
    selectItem(state,contentKey) {
        state.selectedItem = state.searchResult.find(item => item.id === contentKey.id && item.category === contentKey.category)
    },
    fetchFiles(state,contentKey) {
        console.log(state,contentKey)
        
    }
}

const actions = {
    executeSearch({commit}, searchCriteria) {
        commit('executeSearch',searchCriteria)
    },
    selectItem({commit}, idAndCategory) {
        commit('selectItem',idAndCategory)
    },
    fetchFilesAsync({commit}) {
        commit('fetchFiles')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}