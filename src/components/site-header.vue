<template>
  <header class="site-header">
    <div class="container">
      <nav class="inner">
        <div class="left">
          <a class="site-brand" href="#" >Meta Tag Generator</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .site-header{
    border-bottom: 1px solid rgba(74, 82, 95, 0.1);
    .inner{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .site-brand{
        display: block;
        padding: 20px 0;
        text-decoration: none;
        color: #318963;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
</style>
