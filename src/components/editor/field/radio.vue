<template>
  <div class="field field-radio">
    <label class="field--title" v-text="value.label"></label>
    <div class="radio-group">
      <div class="radio" v-for="(radio, key) in value.options" :key="key">
        <label>
          <input type="radio" v-model="value.value" :value="radio.value"><span class="label" v-text="radio.label"></span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'field',
    event: 'change'
  },
  props: {
    value: Object
  }
}
</script>
<style lang="scss" scoped>
  .field-radio{
    .radio-group{
      margin-top: 5px;
      .radio{
        .label{
          font-size: 14px;
          color: #8E8E8E;
          display: inline-block;
          margin-left: 10px;
        }
      }
    }
  }
</style>
