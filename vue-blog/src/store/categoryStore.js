import axios from '../assets/js/axios'
export default {
  state: {
    classCount: 0,
    list: []
  },
  mutations: {},
  actions: {
    getArticleClassify ({commit, state}, url) {
      axios.GET({
        url: url,
        callback: (response) => {
          let data = response.data
          data.forEach((item, index) => {
            state.list.push(item[1])
          })
          state.classCount = state.list.length
        }
      })
    }
  }
}
