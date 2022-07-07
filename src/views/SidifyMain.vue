<template>
  
  <v-table >
    <tr v-for="item in playlists" :key="item.id">
      {{item.name}}
    </tr>
    
    
  </v-table>


</template>

<script setup>

  import {useStore} from "vuex";
  import {computed} from "vue";

  let store = useStore();
  const playlists = computed(() => store.getters["sidify/getPlaylists"]);
  console.log('get lists')
  store.dispatch('sidify/getPlaylists');
  



</script>