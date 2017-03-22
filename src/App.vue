<template>
  <div id="app">
    <site-header></site-header>
    <main>
      <preview></preview>
      <editor></editor>
    </main>
  </div>
</template>

<script>
import editor from './components/editor'
import preview from './components/preview'
import siteHeader from './components/site-header'
import './scss/app.scss'
export default {
  name: 'app',
  components: {
    editor,
    preview,
    siteHeader
  },
  data () {
    return {
      metaTags: [
        {
          code: '<meta charset="value">',
          type: 'text'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  max-width: 950px;
  margin: 0 auto;

  .site-header{
    margin-bottom: 50px;
  }

  main{
    display: flex;
    justify-content: center;
    align-items: center;
    .editor, .preview{
      flex: 1 1 auto;
      width: 50%;
      height:100%;
      padding: 0 30px;
    }
    .editor{
      border-left: 1px solid rgba(49, 137, 99, 0.39);

    }
  }
}
</style>
