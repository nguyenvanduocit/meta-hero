<template>
  <div class="preview">
    <pre v-highlightjs><code class="html" v-text="code"></code></pre>
  </div>
</template>
<script>
  import '../../node_modules/highlight.js/styles/darkula.css'
  export default {
    computed: {
      code () {
        return '<meta charset="UTF-8">'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .preview{
    pre{
      margin: 0;
    }
  }
</style>
