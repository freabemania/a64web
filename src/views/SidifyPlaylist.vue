<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        Tracks
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-row>
          <v-list height="400px" width="550px" lines="two">
            <v-list-item v-for="(item,i) in tracks" :key="i" @click="play(item)">
              <v-list-item-header>
                <v-list-item-title>{{item.name}}</v-list-item-title>
                <v-list-item-subtitle>{{item.group}}</v-list-item-subtitle>
              </v-list-item-header>
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
  import {computed, onBeforeMount} from "vue";

  const store = useStore()

  const props = defineProps({
    id: {
      type: String,
      required: Boolean
    }
  })

  function play(item) {
    console.log('play ' + item.id)
    store.dispatch('sidify/sidifyActive',true)
  }

  onBeforeMount(() => {
    fetchData()
  })

  async function fetchData() {
    store.dispatch('sidify/clearCurrentTracks')
    store.dispatch('sidify/getTacksForPlaylist',props.id)
  }

  const tracks = computed(() => store.getters["sidify/getTracks"])

</script>