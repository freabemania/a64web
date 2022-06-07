<template>
  Welcome
  <!-- bad -->
  <span>Multiline message is: {{message}}</span>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>
</template>


<script>

  export default {
    data() {
      return {
        message : null
      };
    }
}

</script>