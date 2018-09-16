<template>
  <div class="tabnavigation">
    <div class="borderStyle tabNavigation">
      <div class="head">
        <img class="defaultImg" :src="logoSrc"/>
        <h1>
          <a>Tysnad</a>
        </h1>
      </div>
      <p class='content'>
        博主联系方式：Tysnad@163.com。<br/>
        Github：https://github.com/Tysnad 。
      </p>
      <div class="centerItems">
        <div>
          <router-link to="/"><span>{{count.article}}</span><i class="iconfont icon-wenzhang"></i></router-link>
          <div class="tooltip">
            <span class="triangle"></span>
            <span class="text">文章</span>
          </div>
        </div>
        <div>
          <router-link to="/category"><span>{{count.articleClassify}}</span><i class="iconfont icon-fenlei"></i> </router-link>
          <div class="tooltip">
            <span class="triangle"></span>
            <span class="text">分类</span>
          </div>
        </div>
        <div>
          <router-link to="/tags"><span>{{count.tag}}</span><i class="iconfont icon-biaoqian"></i> </router-link>
          <div class="tooltip">
            <span class="triangle"></span>
            <span class="text">标签</span>
          </div>
        </div>
      </div>
      <ul class="bottomItems">
        <router-link to="/category"><li>分类</li></router-link>
        <router-link to="/tags"><li>标签</li></router-link>
      </ul>
      <!--<form  class='searchform'>-->
        <!--<input  placeholder="搜索一下" type="text" @keyup.13="searchArticles" @focus="focus" @blur="blur">-->
      <!--</form>-->
      <!--<div v-if="error_msg !==''" class="error">{{error_msg}}</div>-->
      <!--<div v-else-if="show" class="searchResult">-->
        <!--<ul>-->
          <!--<li v-for="(item) in searchList" :key="item.id">-->
            <!--<router-link :to="{name: 'specificartical', params:{id:child.id}}">{{item.title}}</router-link>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import logoSrc from '../assets/defalut.jpg'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'tabNavigation',
  data: () => {
    return {
      logoSrc: logoSrc
    }
  },
  computed: {
    ...mapState({
      // message: state => state.tabNavigationStore.message,
      count: state => state.tabNavigationStore.count
      // error_msg: state => state.tabNavigationStore.error_msg,
      // show: state => state.tabNavigationStore.show,
      // searchList: state => state.tabNavigationStore.searchList
    })
  },
  methods: {
    ...mapActions([
      'getCount'
      // , 'searchArticles'
    ])
    // blur () {
    //   this.show = false
    // },
    // focus () {
    //   this.show = (this.error_msg === '') && true
    // }
  },
  created: function () {
    this.getCount('get_count')
  }
}
</script>

<style scoped src="../css/tabNavigation.css"></style>
