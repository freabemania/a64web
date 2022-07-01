<template>
  <v-app v-if="authenticated" theme="dark">
      <v-navigation-drawer v-model="drawer" app>
        <v-list class="bg-grey-darken-4">
          <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
              class="bg-grey-darken-4"
          ></v-list-item>
        </v-list>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" @click="toSearch" title="Search" value="search"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" @click="toStart" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
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
  <v-app v-if="!authenticated" theme="dark">
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
  </v-app>
</template>

<style lang="less">
.sidify-main {
  background-color: aquamarine;
}
</style>

<script setup>
import router from '@/router'
import {onMounted, ref, computed} from 'vue'
import {useStore} from "vuex";

  const showLoginButton = ref(false)
  const username = ref('')
  const password = ref('')
  const drawer = ref()

  const store = useStore()
  const authenticated = computed(() => store.getters["security/authenticated"])
  const loginError = computed(() => store.getters["security/loginError"])
  const loading = computed(() => store.getters["search/loading"])

  onMounted(() => {
    router.push("/landingpage")
  })

  function login() {
    let credentials = {
      username : username.value,
      password : password.value
    }
    store.dispatch('security/withPassword',credentials)
  }

  function toggleLoginButton() {
    showLoginButton.value = username.value.length > 0 && password.value.length > 0
  }

  function toSearch() {
    router.push("/search")
  }

  function toStart() {
    router.push("/")
  }
</script>
