<template>
  <div class="group card">
    <div class="card__title">
      <h1 v-text="group.title"></h1>
    </div>
    <div class="card__body">
      <component v-for="(field, key) in group.fields" v-if="(!field.condition || (field.condition && field.condition())) && (field.type !== 'hidden')" v-model="group.fields[key]" :value="field" :is="'field-'+ field.type" :key="key"></component>
    </div>
  </div>
</template>
<script>
import fieldText from './field/text'
import fieldRadio from './field/radio'
export default {
  props: ['group'],
  components: {
    fieldText,
    fieldRadio
  }
}
</script>
