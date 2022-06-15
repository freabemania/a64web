const WEB_BASE = 'https://hackerswithstyle.se/leet'

import {User, UserState} from "./types";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store/types";
import axios, {AxiosResponse} from "axios";

export const state: UserState = {
    user: {
        email : '',
        token : '',
        loginError : false,
        authenticated: false
    }
}

const namespaced: boolean = true;

const getters : GetterTree<UserState, RootState> = {
    authenticated(state) : boolean {
        return state.user.authenticated;
    },
    loginError(state) : boolean {
        return state.user.loginError;
    }
}

const actions : ActionTree<UserState, RootState> = {
    withPassword({commit}): any {
        axios({
            url: WEB_BASE + '/user/login/lite/freabe@gmail.com/fredde2002'
        }).then((response: AxiosResponse)=> {
            console.log('Ok ' + response.data)
            commit('loginOk',response.data);
            //state.user = {
            //    token : response.data.token,
            //    email : 'freabe@gmail.com',
            //    loginError : false,
            //    authenticated : true
            //}
        },(error : any) => {
            //state.user.loginError = true;
            //state.user.authenticated = false;
            commit('loginError');
        })
    }
}

const mutations : MutationTree<UserState> = {
    loginOk(state,payload) : any {
        state.user.email = payload.email;
        state.user.token = payload.token;
        state.user.loginError = false;
        state.user.authenticated = true;
    },
    loginError(state) {
        state.user.authenticated = false;
        state.user.loginError = true;
    },
    withPassword(state,credentials): any {
        axios({
            url: WEB_BASE + '/user/login/lite/freabe@gmail.com/fredde2002'
        }).then((response)=> {
            console.log('Ok ' + response.data)
            state.user = {
                token : response.data.token,
                email : 'freabe@gmail.com',
                loginError : false,
                authenticated : true
            }
        },(error) => {
            state.user.loginError = true;
            state.user.authenticated = false;
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