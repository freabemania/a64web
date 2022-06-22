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
          <v-list max-height="150px" class="overflow-y-auto" :items="contentEntries" item-title="id" item-value="id">
          


          </v-list>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="d-flex pa-3">
      <v-row>
        <v-col cols="8">
          <div class="text-uppercase text-shades-white text-h6">Preview</div>
          <v-img v-if="metadata.images.length > 0" :src="metadata.images[0].target" max-width="600"/>
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
      console.log(contentKey,store)
      store.dispatch('search/selectItem', contentKey)
      store.dispatch('search/fetchFiles',contentKey)
      store.dispatch('search/fetchMetadataDetails',contentKey)
    },
    computed: {
      ...mapGetters('search',['selectedItem','contentEntries','metadata']),
      ...mapActions('search',['selectItem'])
    },
    methods: {
      back() {
        router.push('/search')
      },
      handle(e) {
        console.log('ssss ' + e)
      }
    }
  }

</script>