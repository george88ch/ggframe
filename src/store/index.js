import Vue from 'vue'
import { vuexfireMutations } from 'vuexfire'
import Vuex from 'vuex'

import auth from './modules/auth'


// import example from './module-example'

Vue.use(Vuex)

/*
* If not building with SSR mode, you can
* directly export the Store instantiation;
*
* The function below can be async too; either use
* async/await or return a Promise which resolves
* with the Store instance.
*/

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({

    mutations: {
      // other mutations
      ...vuexfireMutations,
    },
    modules: {
      auth,


    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
