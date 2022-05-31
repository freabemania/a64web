import axios from 'axios'
import router from '../../router'
const WEB_BASE = 'https://hackerswithstyle.se/leet'

const state = {
    user: {
        email : '',
        token : ''
    },
    authenticated: false,
    loginError: false
}

const getters = {
    authenticated : state => {
        return state.authenticated
    },
    loginError : state => {
        return state.loginError
    }
}

//function getSessionData() {
//    return JSON.parse(localStorage.getItem('sessionData'))
//}

//function storeSessionData(email,token) {
//    localStorage.setItem('sessionData',JSON.stringify({
//        token : token,
//        mail : email
//    }))
//}

const mutations = {
    withPassword(state, credentials) {
        console.log(credentials)
        //axios.get(WEB_BASE + '/user/login/lite/' + credentials.username + '/' + credentials.password)
        axios.get(WEB_BASE + '/user/login/lite/freabe@gmail.com/fredde2002')
            .then(function (response) {
                console.log('Ok ' + response.data)
                state.authenticated = true
                state.user.token = response.data.token
                state.user.email = 'freabe@gmail.com'
                state.loginError = false;
            })
            .catch(function (error) {
                console.log('Err ' + error)
                state.authenticated = false
                state.loginError = true
                router.push('/')
            })
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