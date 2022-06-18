<template>
  <v-container >
    <v-row align="start" no-gutters>
      <v-col cols="12">
        <v-btn @click="back()" target="_blank" icon="mdi-arrow-left"/>
      </v-col>
    </v-row>

    <v-card class="d-flex pa-3">
      <v-row>
        <v-col cols="4">
          <div class="text-uppercase text-shades-white text-h6">Name</div>
          <div class="text-grey">{{selectedItem.name}}</div>
        </v-col>
        <v-col cols="4">
          <div class="text-uppercase text-shades-white text-h6">Group</div>
          <div class="text-grey">{{selectedItem.group}}</div>
        </v-col>
        <v-col cols="2">
          <div class="text-uppercase text-shades-white text-h6">Year</div>
          <div class="text-grey">{{selectedItem.year}}</div>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="d-flex pa-3">
      <v-row>
        <v-col cols="4">
          <div class="text-uppercase text-shades-white text-h6">Files</div>
          <v-list style="max-height: 300px" class="overflow-y-auto" :items="contentEntries" item-title="id" item-value="id"></v-list>
        </v-col>
        <v-col cols="8">
          <div class="text-uppercase text-shades-white text-h6">Image</div>
          <v-img src="https://picsum.photos/200/300" max-width="200"/>
        </v-col>
      </v-row>
    </v-card>

  </v-container>
</template>

<script>
  import router from '@/router'
  import {mapGetters,mapActions} from 'vuex'
  import store from '@/store'
  import {toContentKey} from '@/helpers/ContentHelper.ts'

  export default {
    props: {
      id : {
        type: String,
        required: true
      },
      category : {
        type: Number,
        required: true
      }
    },
    beforeMount() {
      const contentKey = toContentKey(this.id,this.category);
      store.dispatch('search/selectItem', contentKey)
      store.dispatch('search/fetchFiles',contentKey)
    },
    computed: {
      ...mapGetters('search',['selectedItem','contentEntries']),
      ...mapActions('search',['selectItem'])
    },
    methods: {
      back() {
        router.push('/search')
      }
    }
  }

</script>