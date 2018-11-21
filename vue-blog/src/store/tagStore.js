import axios from '../assets/js/axios'
export default {
  state: {
    tags: []
  },
  mutations: {
    tagsAddSize (state) {
      let size = ['14px', '16px', '20px']
      let sizeIndex = 0
      state.tags.forEach((tag, index) => {
        if (index % 3 === 2) {
          sizeIndex = 2
        } else if (index % 3 === 1) {
          sizeIndex = 1
        }
        tag['size'] = {fontSize: size[sizeIndex]}
      })
    }
  },
  actions: {
    getTags ({commit, state}, url) {
      axios.GET({
        url: url,
        callback: (res) => {
          state.tags = res.data.tags
          commit('tagsAddSize')
        }
      })
    }
  }
}
