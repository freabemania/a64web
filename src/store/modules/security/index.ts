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

const actions : ActionTree<UserState, RootState> = {
    withPassword({commit}): any {
        console.log('12333')
        axios({
            url: WEB_BASE + '/user/login/lite2/freabe@gmail.com/fredde2002',
        }).then((response: AxiosResponse)=> {
            commit('loginOk',response.data);
            axios({
                url: WEB_BASE + '/user/avatar/189', //your url
                headers: {
                    'token': response.data.token,
                },
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                commit('setAvatar', window.URL.createObjectURL(new Blob([response.data])))
            })
        },(error : any) => {
            commit('loginError');
        })
    }, getAvatar({commit,state}) : any {
        console.log('get avatar')
        axios({
            url: WEB_BASE + '/user/avatar/189' + state.user.id, //your url
            headers: {
              email: state.user.email,
              token: state.user.token
            },
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            commit('setAvatar', window.URL.createObjectURL(new Blob([response.data])))

            //const link = document.createElement('a');
            //link.href = url;
            //link.setAttribute('download', 'file.pdf'); //or any other extension
            //document.body.appendChild(link);
            //link.click();
        });
    }
}

const mutations : MutationTree<UserState> = {
    loginOk(state,payload) : any {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.country = payload.country;
        state.user.token = payload.token;
        state.user.loginError = false;
        state.user.authenticated = true;
        console.log('uname:' + state.user.token)

    },
    loginError(state) {
        state.user.authenticated = false;
        state.user.loginError = true;
    },
    setAvatar(state,avatarUrl) {
        state.avatarUrl = avatarUrl
        console.log('url',state)
    }
}

export const security: Module<UserState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}