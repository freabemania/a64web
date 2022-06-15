import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import {ContentKey,Test,TestImpl,print} from "@/models/ContentKey";

const t : Test = new TestImpl('kalle',1);
print()


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
