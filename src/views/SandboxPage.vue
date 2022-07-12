<template>
  <div>
    <slot name="header">
      Default header
    </slot>
  </div>
  <div>
    <slot name="main">
      Default main
    </slot>
  </div>
  <div>
    <slot name="footer">
      Default footer
    </slot>
  </div>
  <div>
    <h1 v-for="platform in names" :key="platform.id">
      <slot name="extra" :platform="platform.name">
        {{platform.id}} - {{platform.name}}
      </slot>

    </h1>
  </div>



  <!--
  <h3>Available {{platforms}}</h3>

  <h4 v-for="item in names" :key="item.id">
    {{item.name}}
  </h4>
  -->

</template>

<script setup>
  import {ref} from "vue";
  const platforms = ref('platforms')
  const name2 = ref({
    name: 'Fredrik2'
  })
  const names = ref([
    {
      id: 1,
      name: 'Commodore'
    },
    {
      id: 2,
      name: 'MSX'
    }
  ]
  )


</script>