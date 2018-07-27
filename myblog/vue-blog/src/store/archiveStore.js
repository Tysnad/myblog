import axios from '../assets/js/axios'
export default {
  state: {
    allCount: 0, // 文章总数
    list: [], // 文章列表
    specific: { // 文章信息
      browse: 0,
      content: '',
      title: '',
      date: '',
      tags: []
    },
    loading: false
  },
  mutations: { // 同步checked状态变更
    toggleListItem (state, item) {
      item.checked = !item.checked
    }
  },
  actions: {
    getArticles ({commit, state}) {
      axios.GET({
        url: 'get_articles',
        callback: (res) => {
          state.allCount = res.data['allCount']
          res.data['list'].forEach((ele) => {
            ele['checked'] = true
            ele['children'] = []
          })
          state.list = res.data['list']
        }
      })
    },
    toggleListItem ({commit, state}, item) { // 获取指定年月文章并显示
      if (item.children.length === 0) {
        axios.GET({
          url: 'get_articles_for_date',
          params: {
            year: item.year,
            month: item.month
          },
          callback: (res) => {
            item.children = res.data.list
            commit('toggleListItem', item)
          }
        })
      } else {
        commit('toggleListItem', item)
      }
    },
    getArticlesSpecific ({commit, state}, id) { // 获取文章的详细信息
      axios.GET({
        url: 'get_article_specific',
        params: {
          id: id
        },
        callback: (res) => {
          let data = res.data
          state.specific = {
            browse: data['browse'],
            content: data['content'],
            title: data['title'],
            date: data['date'],
            tags: data['tags']
          }
          state.loading = false
        }
      })
    }
  }
}
