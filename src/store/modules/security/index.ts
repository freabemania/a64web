const WEB_BASE = 'https://hackerswithstyle.se/leet'

import {User, UserState} from "./types";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store/types";
import axios, {AxiosResponse} from "axios";

export const state: UserState = {
    user: {
        id : -1,
        email : '',
        token : '',
        name : '',
        country : '',
        loginError : false,
        authenticated: false,
    },
    avatarUrl : ''
}

const namespaced: boolean = true;

const getters : GetterTree<UserState, RootState> = {
    authenticated(state) : boolean {
        return state.user.authenticated;
    },
    userInfo(state) : User {
      return state.user;
    },
    loginError(state) : boolean {
        return state.user.loginError;
    },
    avatarUrl(state) : string {
        return state.avatarUrl;
    }
}

const mutations : MutationTree<UserState> = {
    loginOk(state,payload) : any {
        state.user.id = payload.id;
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.country = payload.country;
        state.user.token = payload.token;
        state.user.loginError = false;
        state.user.authenticated = true;
    },
    loginError(state) {
        state.user.authenticated = false;
        state.user.loginError = true;
    },
    setAvatar(state,avatarUrl) {
        state.avatarUrl = avatarUrl
    }
}

const actions : ActionTree<UserState, RootState> = {
    async withPassword({commit},credentials) {
        await axios({
            url: WEB_BASE + '/user/login/lite2/freabe@gmail.com/fredde2002',
        }).then((response: AxiosResponse)=> {
            commit('loginOk',response.data);
        },(error : any) => {
            commit('loginError');
        })
    }, async getAvatar({commit,state}) {
        console.log('gest avatar' + state.user.token)
        await axios({
            url: WEB_BASE + '/user/avatar/' + state.user.id,
            headers: {
                'token': state.user.token
            },
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            commit('setAvatar', window.URL.createObjectURL(new Blob([response.data])))
        })
    }
}


export const security: Module<UserState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}