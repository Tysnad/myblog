<template>
  <div class="rightbox">
    <div class="boxs">
      <div class="borderStyle" id="slogan">" Doesn't matter where you come from, what you have or don't have. Make sure you live in the moment. And work your butt off every single day " <br/><span id="name">——Stephen Curry</span></div>
      <div class="borderStyle">
        <p class="title">文章归档</p>
        <ul class='classify'>
          <li v-for="(item, index) in list" :key="index">
            <div @click="toggleListItem(item)" class="change">
              {{item.year}}年{{item.month}}月({{item.count}})
            </div>
            <ul class="children" v-show="item.checked">
              <li v-for="child in item.children" :key="child.id">
                {{child.day}}日:<router-link :to="{name:'specificartical',params:{id:child.id}}">{{child.title}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="borderStyle">
        <p class="title">近期文章</p>
        <ul class='classify'>
          <li v-for="(item) in currentList" :key="item.id">
            <router-link :to="{name:'specificartical',params:{id:item.id}}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'rightBox',
  components: {
  },
  data: function () {
    return {
    }
  },
  computed: {
    ...mapState({
      list: state => state.archiveStore.list,
      currentList: state => state.rightBoxStore.currentList
    })
  },
  methods: {
    ...mapActions(['getArticles', 'toggleListItem', 'getCurrentArticles'])
  },
  created: function () {
    this.getArticles()
    this.getCurrentArticles()
  }
}
</script>

<style scoped src="../css/rightBox.css"></style>
