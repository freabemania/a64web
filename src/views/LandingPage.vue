<template>
  Welcome
  <!-- bad -->
  <span>Multiline message is: {{message}}</span>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>
</template>


<script>
/*
  import jsxcompressor from '../../public/jsSID/js/jsxcompressor.js'
  import stream from '../../public/jsSID/js/stream.js'
  import jssidcore from '../../public/jsSID/js/jssid.core.js'
  import jssidtinysid from '../../public/jsSID/js/jssid.tinysid.js'
  import jssidfastsid from '../../public/jsSID/js/jssid.fastsid.js'
  import jssidresid from '../../public/jsSID/js/jssid.resid.js'
  import jssidmos6510 from '../../public/jsSID/js/jssid.mos6510.js'
  import jssidsidplayer from '../../public/jsSID/js/jssid.sidplayer.js'


 */
  export default {
    data() {
      return {
        message : null
      };
    }
}

</script>