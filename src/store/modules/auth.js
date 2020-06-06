import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/show-error-message'

const state = {
    loggedIn: false,
    loggedInUser: 'Unbekannter',
    loggedInUserId: ''
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    },
    setLoggedInUser(state, name) {
        state.loggedInUser = name
    },
    setLoggedInUserId(state, userid) {
        state.loggedInUserId = userid
    }
}

const actions = {
    registerUser({ }, payload) {
        Loading.show()
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log('response: ', response)
            })
            .catch(error => {
                showErrorMessage(error.message)
            })
    },
    loginUser({ }, payload) {
        Loading.show()
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                Loading.hide()
            })
            .catch(error => {
                Loading.hide()
                showErrorMessage(error.message)
            })
    },
    logoutUser() {
        firebaseAuth.signOut()
    },
    handleAuthStateChange({ commit, dispatch }) {
        firebaseAuth.onAuthStateChanged(user => {
            Loading.hide()
            if (user) {
                // console.log("user: ", )
                commit('setLoggedIn', true)
                commit('setLoggedInUser', user.email)
                commit('setLoggedInUserId', user.uid)
                LocalStorage.set('loggedIn', true)
                // this.$router.push('/')
                this.$router.push('/').catch(err => { })
            }
            else {
                // commit('tasks/clearTasks', null, { root: true })
                // commit('tasks/setTasksDownloaded', false, { root: true })
                commit('setLoggedIn', false)
                commit('setLoggedInUser', 'unbekannter')
                LocalStorage.set('loggedIn', false)
                this.$router.replace('/home')
            }
        })
    }
}

const getters = {
    getLoggedInUserId(state) {
        console.log('auth - getter ', state.loggedInUserId)
        return state.loggedInUserId
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}