<template>
  <div class="d-flex align-center">
    <v-row>
      <v-col cols="2">
        <v-text-field on
            label="Outlined"
            v-model="searchCriteria"
            clearable
            placeholder="Placeholder"
            @click:append="search"
            variant="outlined" append-icon="mdi-magnify" class="shrink"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>

  <v-table class="bg-grey-darken-4">
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
        v-for="item in items" :key="item.id"
    >
      <td>{{ item.name }}</td>
      <td>{{ item.group }}</td>
      <td>{{ item.year }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
import {mapGetters} from 'vuex'
import store from '@/store'

  export default {
    data() {
      return {
        searchCriteria: null
      }
    }, methods: {
      search() {
        store.commit('search/executeSearch',this.searchCriteria)
        console.log('search')
      }
    },
    computed: {
      ...mapGetters('search',['items'])
    }
  }

</script>