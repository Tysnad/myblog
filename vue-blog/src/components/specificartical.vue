<template>
  <div class="specificartical borderStyle container">
    <h1 class="title">{{specific.title}}</h1>
    <div class="content">
      <div>
        <span class="annotation"><i></i>{{specific.date}}</span>
      </div>
      <div v-html="specific.content"></div>
      <div class="attention"><i>@Tysnad</i></div>
      <div class="lable"><i></i><a v-for="(tag,index) in specific.tags" :key="index">{{index!=0?',':''}}{{tag}}</a></div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'specificartical',
  data: function () {
    return {}
  },
  computed: {
    ...mapState({
      specific: state => state.archiveStore.specific,
      loading: state => state.archiveStore.loading
    })
  },
  methods: {
    ...mapActions(['getArticlesSpecific']),
    ...mapMutations([])
  },
  activated: function () {
    this.loading = true
    this.getArticlesSpecific(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.loading = true
    this.getArticlesSpecific(to.params.id)
    next()
  }
}
</script>

<style scoped src="../css/specificartical.css"></style>
