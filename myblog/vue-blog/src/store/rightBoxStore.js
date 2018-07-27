import axios from '../assets/js/axios'
export default {
  state: {
    currentList: [],
    year: 0,
    month: 0
  },
  mutations: {
  },
  actions: {
    getRightboxContent ({commit, state}, url) {
      axios.GET({
        url: url,
        callback: (data) => {
          console.log(data)
        }
      })
    },
    getCurrentArticles ({commit, state}) {
      let date = new Date()
      state.year = date.getFullYear()
      state.month = date.getMonth() + 1
      axios.GET({
        url: 'get_articles_for_date',
        params: {
          year: state.year,
          month: state.month
        },
        callback: (response) => {
          state.currentList = response.data.list
        }
      })
    }
  }
}
