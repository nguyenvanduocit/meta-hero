<template>
  <div class="container">
    <header class="site-footer">
        <nav class="inner">
          <div class="left">
            <a class="site-brand" href="#" ><img src="/static/logo.svg"></a>
          </div>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .site-footer{
    border-top: 1px solid rgba(74, 82, 95, 0.1);
    margin-top: 80px;
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
        line-height: 0;
        display: block;
        padding: 30px 0;
        text-decoration: none;
        color: #318963;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        img{
          height: 20px;
        }
      }
    }
  }
</style>
