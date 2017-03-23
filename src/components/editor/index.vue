<template>
  <div class="editor">
    <group v-for="(group, key) in groups" v-if="!group.condition || (group.condition && group.condition())" :group="group" :key="key"></group>
  </div>
</template>
<script>
import group from './group'
export default {
  components: {
    group
  },
  props: ['groups']
}
</script>
<style lang="scss" scoped>
  .editor{
    .group{
      & + .group{
        margin-top: 40px;
      }
    }
  }
</style>
