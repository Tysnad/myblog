<template>
  <div class="archive">
    <div class="borderStyle container">
      <h1 class="title">文章</h1>
      <div class="content">
        <p><strong>Tysnad</strong>目前共有文章{{allCount}}篇</p>
        <div class="archive">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <div @click="toggleListItem(item)" class="change"><span>+</span>{{item.year}}年{{item.month}}月（共{{item.count}}篇文章）</div>
              <ul class="children" v-show="item.checked">
                <li v-for="child in item.children" :key="child.id">
                  {{child.day}}日:<router-link :to="{name:'specificartical',params:{id:child.id}}">{{child.title}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'archive',
  data: function () {
    return {

    }
  },
  computed: mapState({
    allCount: state => state.archiveStore.allCount,
    list: state => state.archiveStore.list
  }),
  methods: {
    ...mapActions([
      'getArticles',
      'toggleListItem',
      'getListItem'
    ]),
    ...mapMutations([])
  },
  created: function () { // 创建created钩子，在created阶段
    this.getArticles()
  }
}
</script>
<!--使用本地样式-->
<style scoped src="../css/archive.css"></style>
