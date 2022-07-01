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
          <div class="text-uppercase text-shades-white text-h6">Namse</div>
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
          <v-list max-height="150px" active-class="">
              <v-list-item
                  v-for="(item, i) in contentEntries"
                  :key="i"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-title>{{item.id}}</v-list-item-title>
                  <v-list-item-action>
                    <v-icon
                        v-if="!active"
                        color="red"
                    >
                      mdi-star-outline
                    </v-icon>

                    <v-icon
                        v-else
                        color="yellow"
                    >
                      mdi-star
                    </v-icon>
                  </v-list-item-action>

                </template>

              </v-list-item>
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

<script setup>
  import { computed, onBeforeMount } from "vue"
  import {toContentKey} from '@/helpers/ContentHelper.ts'
  import { useStore } from 'vuex'

  const store = useStore()
  const selectedItem = computed(() => store.getters["search/selectedItem"])
  const contentEntries = computed(() => store.getters["search/contentEntries"])
  const metadata = computed(() => store.getters["search/metadata"])

  const props = defineProps({
    id : {
      type: String,
      required: true
    },
    category : {
      type: Number,
      required: true
    }
  })

  onBeforeMount(() => {
    const contentKey = toContentKey(props.id,props.category)
    store.dispatch('search/selectItem', contentKey)
    store.dispatch('search/fetchFiles',contentKey)
    store.dispatch('search/fetchMetadataDetails',contentKey)
  })
</script>