import Vuex from 'vuex'

import { RootState} from './types'
import { security } from "@/store/modules/security";
import { search } from "@/store/modules/search";
import { sidify } from "@/store/modules/sidify";

export default new Vuex.Store<RootState>({
    state: {
        version : '1.0.0'
    },
    modules: {
        security,
        search,
        sidify
    }
})