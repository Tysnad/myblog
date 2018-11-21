<template>
  <div class="tags">
    <div class="borderStyle container">
      <h1 class="title">标签</h1>
      <div class="content">
        <p><strong>Tysnad</strong>目前共有标签: {{tags.length}}个</p>
        <div class="tags">
          <a v-for="item in tags" class="item" :key="item.id" :style="item.size">{{item.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'tags',
  data: () => {
    return {}
  },
  computed: {
    ...mapState({
      tags: state => state.tagStore.tags
    })
  },
  methods: {
    ...mapActions([
      'getTags'
    ])
  },
  created: function () {
    this.getTags('get_tags')
  }
}
</script>

<style scoped src="../css/tags.css"></style>
