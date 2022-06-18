import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {SearchState, Item, DefaulItem} from "@/store/modules/search/types";
import {RootState} from "@/store/types";
import axios, {AxiosResponse} from "axios";
import {ContentKey} from "@/models/ContentKey";
import {ContentEntryContainer, Id} from "@/models/ContentEntry";
import {SearchEntry} from "@/models/SearchEntry";

const WEB_BASE = 'https://hackerswithstyle.se/leet'

export const state: SearchState = {
    searchResult : undefined,
    selectedItem : undefined,
    contentEntries : undefined
}

const getters : GetterTree<SearchState, RootState> = {
    items(state) : Array<Item> {
        return state.searchResult!;
    },
    selectedItem(state) : Item {
        return state.selectedItem!;
    },
    contentEntries(state) : Array<Id> {
        state.contentEntries!.contentEntry.forEach(item => console.log(':::' +item.id));
        return state.contentEntries!.contentEntry;
    }
}

const mutations : MutationTree<SearchState> = {
    searchOk(state,searchResult : SearchEntry[]) : any {
        state.searchResult = searchResult;
    },
    selectItem(state,contentKey : ContentKey) : any {
        state.selectedItem = state.searchResult!.find(item => item.id === contentKey.id && item.category === contentKey.category)
    },
    fetchFiles(state, contentEntries: ContentEntryContainer) : any {
        state.contentEntries = contentEntries;
        state.contentEntries.contentEntry.forEach(item => console.log(item.id));
    }
}

const actions : ActionTree<SearchState, RootState> = {
    executeSearch({commit},searchCriteria) : any {
        axios({
            url : WEB_BASE + '/search/v2?or=Y&name=' + searchCriteria
        }).then((response:AxiosResponse) => {
            commit('searchOk',response.data);
        },(error:any) => {
            console.error(error);
        })
    },
    selectItem({commit}, contentKey : ContentKey) {
        commit('selectItem',contentKey);
    },
    fetchFiles({commit}, contentKey : ContentKey) {
            console.log(btoa(contentKey.id));
        axios({
            url : WEB_BASE + '/search/v2/contententries/' + btoa(contentKey.id) + '/' + contentKey.category
        }).then((response:AxiosResponse) => {
            console.log(response.data)
            commit('fetchFiles',response.data)
        },(error:any) => {
            console.error(error);
        })

    }
}

const namespaced: boolean = true;

export const search : Module<SearchState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}