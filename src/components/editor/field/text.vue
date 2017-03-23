<template>
  <div class="field field-text">
    <label class="field--title" v-text="value.label"></label>
    <textarea v-model="value.value" v-if="value.line" line="value.line"></textarea>
    <input v-model="value.value" v-else type="text">
  </div>
</template>
<script>
export default {
  props: {
    value: Object
  }
}
</script>
