<template>
  <div class="preview card">
    <div class="card__title">
      <h1>Your source code</h1>
    </div>
    <pre><code class="HTML" v-text="code"></code></pre>
  </div>
</template>
<script>
  export default {
    props: ['code']
  }
</script>
<style lang="scss" scoped>
  .preview{
    .card__title{
      background-image: linear-gradient(-225deg, #FEC180 0%, #FF8993 100%);
    }
    pre{
      margin: 0;
      padding: 30px;
      background: #4B4F56;
      color: #ffffff;
      .HTML{
        min-height: 500px;
      }
    }
  }
</style>
