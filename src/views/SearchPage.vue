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

  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
    >

      <v-card>
        <v-toolbar
            dark
            color="primary"
        >
          <v-btn
              icon
              dark
              @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Close</v-toolbar-title>
        </v-toolbar>
        <v-label>{{selectedItem.name}}</v-label>
        <v-card>
          <v-card-title>{{ selectedItem.name }}</v-card-title>
        </v-card>

      </v-card>
    </v-dialog>
  </v-row>



</template>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>

<script>
import {mapGetters} from 'vuex'
import store from '@/store'

  export default {
    data() {
      return {
        selectedItem : null,
        dialog: false,
        searchCriteria: null,
        notifications: false,
        sound: true,
        widgets: false,
        olle: 'djdjdjd'
      }
    }, methods: {
      search() {
        store.commit('search/executeSearch',this.searchCriteria)
        console.log('search')
      }, rowClick(item) {
        this.selectedItem = item
        this.dialog = true
        console.log('e',item,this.selectedItem)
      }
    },
    computed: {
      ...mapGetters('search',['items'])
    }
  }

</script>