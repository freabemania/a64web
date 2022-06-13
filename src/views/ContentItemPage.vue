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
          <v-list style="max-height: 300px" class="overflow-y-auto" :items="items"></v-list>
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
  import {formatYear} from '@/helpers/contentHelper.ts'

  export default {
    data: () => ({
      items: [
        {
          title: 'Item #1',
          value: 1,
        },
        {
          title: 'Item #2',
          value: 2,
        },
        {
          title: 'Item #3',
          value: 3,
        },
      ],
    }),
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
      //console.log(this.id + ' ' + store.getters["search"].selec)
      //store.state.search.
      //store.state.search.getters.selectedItem(this.id, this.category)
      console.log('for ' + formatYear('123'))
      console.log(btoa('208845') )
      store.dispatch('search/selectItem', {
        id: this.id,
        category: this.category
      })

    },
    computed: {
      ...mapGetters('search',['selectedItem']),
      ...mapActions('search',['selectItem'])
    },
    methods: {
      back() {
        router.push('/search')
      }
    }
  }

</script>