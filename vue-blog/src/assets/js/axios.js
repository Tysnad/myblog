import axios from 'axios'
import getURL from './getURL'
export default {
// 重新基于axios封装GET和PSOT方法
//  以下是请求的相应包含的信息
// {
//   // `data` 由服务器提供的响应
//   data: {},
//
//   // `status` 来自服务器响应的 HTTP 状态码
//   status: 200,
//
//     // `statusText` 来自服务器响应的 HTTP 状态信息
//     statusText: 'OK',
//
//   // `headers` 服务器响应的头
//   headers: {},
//
//   // `config` 是为请求提供的配置信息
//   config: {}
// }
  GET (config) {
    axios({
      method: 'get',
      url: getURL(config.url),
      params: config.params

    }).then(
      (res) => {
        stateDetection(res)
        config.callback && config.callback(res)
      }
    )
  },
  POST (config) {
    axios({
      method: 'post',
      url: getURL(config.URL)
    }).then(
      (res) => {
        stateDetection(res)
        config.callback && config.callback(res)
      }
    )
  }
}

// 状态响应码探测
function stateDetection (data, callback) {
  let state = data.status_code
  switch (state) {
    case 101 :
      break
    case 103 : {
      alert(data.content)
      break
    }
    case 404 : {
      window.location.href = data.url
    }
  }
}
