import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {SearchState, Item, DefaulItem} from "@/store/modules/search/types";
import {RootState} from "@/store/types";
import axios, {AxiosResponse} from "axios";

const WEB_BASE = 'https://hackerswithstyle.se/leet'

export const state: SearchState = {
    searchResult : Array<Item>(),
    selectedItem : undefined
}

const getters : GetterTree<SearchState, RootState> = {
    items(state) : Array<Item> {
        return state.searchResult;
    },
    selectedItem(state) : Item {
        return state.selectedItem!;
    }
}

const mutations : MutationTree<SearchState> = {
    searchOk(state,searchResult) : any {
        state.searchResult = searchResult;
    },
    selectItem(state,contentKey) : any {
        state.selectedItem = state.searchResult.find(item => item.id === contentKey.id && item.category === contentKey.category)
    },
}

const actions : ActionTree<SearchState, RootState> = {
    executeSearch({commit},searchCriteria) : any {
        axios({
            url : WEB_BASE + '/search/v2?or=Y&name=' + searchCriteria
        }).then((response:AxiosResponse) => {
            commit('searchOk',response.data);
        },(error:any) => {
            console.error(error)
        })
    },
    selectItem({commit}, idAndCategory) {
        console.log('1a')
        commit('selectItem',idAndCategory)
    },
}

const namespaced: boolean = true;

export const search : Module<SearchState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}