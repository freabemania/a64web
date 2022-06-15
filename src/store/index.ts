import Vuex from 'vuex'

import { RootState} from './types'
import { security } from "@/store/modules/security";
import { search } from "@/store/modules/search";

export default new Vuex.Store<RootState>({
    state: {
        version : '1.0.0'
    },
    modules: {
        security,
        search
    }
})