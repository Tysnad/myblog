<template>
  <div class="category">
    <div class="borderStyle container">
      <h1 class="title">文章分类</h1>
      <div class="content">
        <p><strong>Tysnad</strong>目前共有分类：{{classCount}}</p>
        <div class="classify">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <a>{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'categoty',
  data: function () {
    return {}
  },
  computed: {
    ...mapState({
      classCount: state => state.categoryStore.classCount,
      list: state => state.categoryStore.list
    })
  },
  methods: {
    ...mapActions(['getArticleClassify'])
  },
  created: function () {
    this.getArticleClassify('get_articleclassify')
  }
}
</script>

<style scoped src="../css/category.css"></style>
