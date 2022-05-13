<template>
  <v-app v-if="loggedIn">
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
  <v-app v-if="!loggedIn">
    <div class="d-flex align-center flex-column">
      <v-card
          width="400"
          title="Assembly64 Login"
      >
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
        <v-btn color="primary" @click="login" v-if="showLoginButton">
          Login
        </v-btn>
      </v-card>

    </div>
  </v-app>
</template>

<script>
import { mapGetters} from 'vuex'

  export default {
    name: 'App',
    mounted() {
      this.showLoginButton = false
    },
    data: () => ({
      username : '',
      password : '',
      showLoginButton : false
      //
    }),
    computed: {
      ...mapGetters(['increment','online','loggedIn'])
    },
    methods: {
      login() {
        console.log('login ' + this.username)
      },
      toggleLoginButton() {
        this.showLoginButton = this.username.length > 0 && this.password.length > 0
      }

    }
  }
</script>
