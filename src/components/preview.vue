<template>
  <div class="preview card">
    <div class="card__title">
      <h1>Your source code</h1>
    </div>
    <pre v-highlightjs="code"><code class="HTML"></code></pre>
  </div>
</template>
<script>
  import '../../node_modules/highlight.js/styles/darkula.css'
  export default {
    props: ['code']
  }
</script>
<style lang="scss" scoped>
  .preview{
    .card__title{
      /* background: */
      background-image: linear-gradient(-225deg, #FEC180 0%, #FF8993 100%);
    }
    pre{
      margin: 0;
      .hljs{
        min-height: 500px;
        padding: 30px;
      }
    }
  }
</style>
