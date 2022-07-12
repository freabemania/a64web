<template>

  <v-container>
    <v-row>
      <v-col cols="12">
        Playlists
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-row>
          <v-list width="150px">
            <v-list-item v-for="(item,i) in playlists" :key="i" @click="toItem(item)">
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-row>
      </v-col>
      <v-col cols="9">
        <v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

  import {useStore} from "vuex";
  import {computed} from "vue";
  import router from "@/router";

  let store = useStore();
  const playlists = computed(() => store.getters["sidify/getPlaylists"]);
  store.dispatch('sidify/getPlaylists');

  function toItem(item) {
    router.push('/sidify/playlist/' + item.id)
  }
</script>