import {Playlist, PlaylistState} from "@/store/modules/sidify/types";
import {ActionTree, GetterTree, Module, MutationTree, useStore} from "vuex";
import {RootState} from "@/store/types";
import axios, {AxiosResponse} from "axios";
import {getHost} from "@/helpers/ContentHelper";

export const state : PlaylistState = {
    collections : []
}

const namespaced: boolean = true;

const getters : GetterTree<PlaylistState, RootState> = {
    getPlaylists(state) : Array<Playlist> {
        return state.collections!;
    }
}

const mutations : MutationTree<PlaylistState> = {
    storePlaylists(state,payload) : any {
        state.collections = payload.collections
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
            console.log('data',response.data)
            commit('storePlaylists',response.data)
        },(error => {

        }))
    }
}
/*

async withPassword({commit},credentials) {
    await axios({
        url: WEB_BASE + '/user/login/lite2/freabe@gmail.com/fredde2002',
    }).then((response: AxiosResponse)=> {
        commit('loginOk',response.data);
    },(error : any) => {
        commit('loginError');
    })

}

 */

export const sidify : Module<PlaylistState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}