<template>
  <v-app v-if="userInfo.authenticated" theme="dark">
      <v-navigation-drawer v-model="drawer" app>
        <v-list class="bg-grey-darken-4">
          <v-list-item
              :prepend-avatar="avatarUrl"
              :title="userInfo.name"
              :subtitle="userInfo.email"
              class="bg-grey-darken-4"
          ></v-list-item>
        </v-list>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-magnify-plus" @click="route('search')" title="Search" value="search"></v-list-item>
          <v-list-item prepend-icon="mdi-music-clef-treble" @click="route('sidify')" title="Sidify" value="starred"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" @click="route('')" title="Shared with me" value="shared"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>ASSEMBLY64</v-toolbar-title>
      </v-app-bar>
      <v-main class="bg-grey-darken-4">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    <v-bottom-navigation height="100" v-model="value" v-if="sidifyActive">
      <v-progress-linear
          :model-value="progess"
          color="light-blue"
          height="10"
          striped
      ></v-progress-linear>
      <v-btn value="favorites">
        <v-icon>mdi-skip-backward</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-step-backward</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-play</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <v-icon>mdi-step-forward</v-icon>
      </v-btn>


      <v-btn value="favorites">
        <v-icon>mdi-skip-forward</v-icon>
      </v-btn>


    </v-bottom-navigation>

      <v-dialog v-model="loading" persistent >
        <v-card width="500" dark>
          <v-card-text class=text-center>
            <div>Processing...</div>
            <v-progress-circular
                :size="100"
                :width="7"
                color="purple"
                indeterminate
            ></v-progress-circular>
          </v-card-text>
        </v-card>
      </v-dialog>
  </v-app>
  <v-app v-else theme="dark">
    <v-app-bar app>
      <v-toolbar-title>ASSEMBLY64</v-toolbar-title>
    </v-app-bar>
    <v-main class="bg-grey-darken-4">
      <v-container class="align-center">
        <v-card
            width="400"
            title="Assembly64 Login" class="align-center"
        >
          <v-label v-if="loginError" class="text-red-accent-1">Invalid credentials</v-label>
          <v-spacer v-if="loginError" ></v-spacer>
          <v-text-field
              v-model="username"
              @keyup="toggleLoginButton"
              label="Username"
              variant="outlined"
              clearable
              clear-icon="mdi-cancel"
          ></v-text-field>
          <v-text-field @keyup="toggleLoginButton"
                        v-model="password"
                        label="Password"
                        variant="outlined"
                        clearable
                        clear-icon="mdi-cancel"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="login" v-if="showLoginButton" class="red--text">
            Login
          </v-btn>
        </v-card>
      </v-container>
    </v-main>

    <!--
    <SandboxPage>
      <template v-slot:header>
        Header 1
      </template>
      <template v-slot:main>
        Main 1
      </template>
      <template v-slot:footer>
        Footer 1
      </template>
      <template v-slot:extra="slotProps">
        Platform: {{slotProps.platform}}
      </template>
    </SandboxPage>
    -->
  </v-app>

</template>

<style lang="less">
.sidify-main {
  background-color: aquamarine;
}
</style>

<script setup>
/*
import jssidsidplayer from '@/../public/jsSID/js/jssid.sidplayer.js'
import jssidresid from '@/../public/jsSID/js/jssid.resid.js'
import jsxcompressor from '@/../public/jsSID/js/jsxcompressor.js'
import stream from '@/../public/jsSID/js/stream.js'
import jssidcore from '@/../public/jsSID/js/jssid.core.js'
import jssidtinysid from '@/../public/jsSID/js/jssid.tinysid.js'
import jssidfastsid from '@/../public/jsSID/js/jssid.fastsid.js'
import jssidmos6510 from '@/../public/jsSID/js/jssid.mos6510.js'
*/


import router from '@/router'
import SandboxPage from '@/views/SandboxPage'
import {onMounted, ref, computed} from 'vue'
import {useStore} from "vuex";
//import {ReSID} from '@/../public/jsSID/js/jssid.resid'
//import {SIDPlayer} from '@/../public/jsSID/js/jssid.core'

  const showLoginButton = ref(false)
  const username = ref('')
  const password = ref('')
  const drawer = ref()
  const progess = ref(20)

  const store = useStore()
  const loginError = computed(() => store.getters["security/loginError"])
  const loading = computed(() => store.getters["search/loading"])
  const userInfo = computed(() => store.getters["security/userInfo"])
  const avatarUrl = computed(() => store.getters["security/avatarUrl"])
  const sidifyActive = computed(() => store.getters["sidify/sidifyActive"])


  onMounted(() => {
    console.log('start');

    //let reSID = ReSID();
    //var sidPlayer = new SIDPlayer({
    //  quality : 'good',
    //  clock: 'PAL',
    //  model: 'MOS8580'
    //});



    //router.push("/landingpage")

  })

  async function login() {
    let credentials = {
      username : username.value,
      password : password.value
    }
    await store.dispatch('security/withPassword',credentials)
    await store.dispatch('security/getAvatar')
  }

  function toggleLoginButton() {
    showLoginButton.value = username.value.length > 0 && password.value.length > 0
  }

  function route(route) {
    router.push("/" + route)
  }

</script>
