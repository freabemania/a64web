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

  <v-table theme="dark" v-on:click="rowClick" v-model="selected">
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

  <v-dialog
      v-model="dialog"
  >
    <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>



</template>

<script>
import {mapGetters} from 'vuex'
import store from '@/store'

  export default {
    data() {
      return {
        selected : null,
        dialog: false,
        searchCriteria: null
      }
    }, methods: {
      search() {
        store.commit('search/executeSearch',this.searchCriteria)
        console.log('search')
      }, rowClick() {
        this.dialog = true
        console.log('item ',this.selected)
      }
    },
    computed: {
      ...mapGetters('search',['items'])
    }
  }

</script>