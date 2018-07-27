import axios from '../assets/js/axios'
export default {
  state: {
    count: {}
    // searchList: [],
    // error_msg: '',
    // message: '搜索一下',
    // show: false
  },
  mutations: {

  },
  actions: {
    getCount ({commit, state}, url) {
      axios.GET({
        url: url,
        callback: (res) => {
          state.count = res.data
        }
      })
    }
    // searchArticles ({commit, state}, event) {
    //   state.show = false
    //   axios.GET({
    //     url: 'search_articles',
    //     params: {
    //       key: event.target.value
    //     },
    //     callback: (response) => {
    //       console.log(response)
    //       state.searchList = response.data.list
    //       state.error_msg = response.data.err_msg
    //     }
    //   })
    // }
  }
}
