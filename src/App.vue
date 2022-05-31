<template>
  <v-app v-if="authenticated">
    <v-app-bar app>
      <v-app-bar-title class="headline text-uppercase">
        <span>Assembly64</span>

      </v-app-bar-title>
      <!-- -->
    </v-app-bar>
    <v-navigation-drawer app>
      <v-card>
        <v-layout>
          <v-navigation-drawer
              expand-on-hover
              rail
          >
            <v-list>
              <v-list-item
                  prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                  title="Sandra Adams"
                  subtitle="sandra_a88@gmailcom"
              ></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
              <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
              <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
            </v-list>
          </v-navigation-drawer>

          <v-main style="height: 250px"></v-main>
        </v-layout>
      </v-card>
      <!-- -->
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
  <v-app v-if="!authenticated" class="bg-grey-darken-4">
    <v-toolbar app class="bg-grey-darken-3">
      <v-toolbar-title class="headline text-uppercase">Assembly64</v-toolbar-title>
      <v-btn flat href="http://download" target="_blank" icon="mdi-download-circle">
      </v-btn>
    </v-toolbar>
    <div class="d-flex align-center flex-column">
      <v-card
          width="400"
          title="Assembly64 Login" class="bg-grey-darken-4 align-center"
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
            class="bg-grey-darken-4"
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
    </div>
  </v-app>
</template>

<style lang="less">
.sidify-main {
  background-color: aquamarine;
}

</style>

<script>
import { mapGetters} from 'vuex'
import store from '@/store'

  export default {
    name: 'App',
    beforeMount() {
      this.showLoginButton = false
    },
    data: () => ({
      username : '',
      password : '',
      showLoginButton : false
      //
    }),
    computed: {
      ...mapGetters('login',['withPassword','authenticated','loginError'])
    },
    methods: {
      login() {
        let credentials = {
          username : this.username,
          password : this.password
        }
        store.dispatch('login/withPassword',credentials)
      },
      toggleLoginButton() {
        this.showLoginButton = this.username.length > 0 && this.password.length > 0
      }
    }
  }
</script>
