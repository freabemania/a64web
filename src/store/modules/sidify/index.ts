import {Playlist, PlaylistState, Track} from "@/store/modules/sidify/types";
import {ActionTree, GetterTree, Module, MutationTree, useStore} from "vuex";
import {RootState} from "@/store/types";
import axios from "axios";
import {getHost} from "@/helpers/ContentHelper";

export const state : PlaylistState = {
    collections : [],
    tracks : [],
    sidifyActive : false
}

const namespaced: boolean = true;

const getters : GetterTree<PlaylistState, RootState> = {
    getPlaylists(state) : Array<Playlist> {
        return state.collections!
    },
    getTracks(state) : Array<Track> {
        return state.tracks!
    },
    sidifyActive(state): Boolean {
        return state.sidifyActive
    }
}

const mutations : MutationTree<PlaylistState> = {
    storePlaylists(state,payload) {
        state.collections = payload.collections
    },
    storeTracksForPlaylist(state,payload) {
        state.tracks = payload
    },
    sidifyActive(state, status) {
        state.sidifyActive = status
    }
}

const actions : ActionTree<PlaylistState, RootState> = {
    getPlaylists({commit}) {
        axios({
           url: getHost() + '/contentcollections/PL',
            headers: {
               token: useStore().state.security.user.token
            }
        }).then(response => {
            commit('storePlaylists',response.data)
        },(error => {
            alert('Error')
        }))
    },
    getTacksForPlaylist({commit}, id) {
        axios(
        {
            url: getHost() + '/contentcollections/id/' + id,
            headers: {
                token: useStore().state.security.user.token
            }
        }).then(response => {
            commit('storeTracksForPlaylist', response.data)
        },(error => {
            alert('Error')
        }))
    },
    async clearCurrentTracks({commit,state}) {
        state.tracks = []
    },
    sidifyActive({commit},status) {
        commit('sidifyActive', status)
    }
}

export const sidify : Module<PlaylistState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}