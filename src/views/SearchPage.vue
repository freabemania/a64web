<template>
  <div class="d-flex align-center">
    <v-row>
      <v-col cols="4">
        <v-text-field on
            label="Searchcritera"
            v-model="searchCriteria"
            clearable
            placeholder="What are you interested in?"
                      onsubmit="search"
            @click:append="search"
            variant="outlined" append-icon="mdi-magnify" class="shrink"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>

  <v-table theme="dark" model-value="selectedRows">
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Group
      </th>
      <th class="text-left">
        Year
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in items" :key="item.id" @click="rowClick(item)"
    >
      <td>{{ item.name }}</td>
      <td>{{ item.group }}</td>
      <td>{{ item.year }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<style>
</style>

<script>
import {mapGetters,mapActions} from 'vuex'
import store from '@/store'
import router from '@/router'

  export default {
    data() {
      return {
        searchCriteria: null
      }
    }, methods: {
      search() {
        store.dispatch('search/executeSearch',this.searchCriteria)
      }, rowClick(item) {
        router.push('/contentItem/' + item.category + '/' + item.id)
      }
    },
    computed: {
      ...mapGetters('search',['items']),
      ...mapActions('search',['executeSearch'])
    }
  }

</script>