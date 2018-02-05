/**
 * Created by rainyiwo on 2017/8/8.
 */

import Vue from 'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.http.options.emulateJSON = true;

const actions = {
  httpGet({commit, state}, obj){
    return new Promise((resolve, reject) => {
      Vue.http.get(obj.url,obj.data).then(res => {
        resolve(res.body)
      }).catch(res => {
        reject(res)
      })
    })
  },
  httpPost({commit, state}, obj){
    return new Promise((resolve, reject) => {
      Vue.http.post(obj.url,obj.data).then(res => {
        resolve(res.body)
      }).catch(res => {
        reject(res)
      })
    })
  },
  httpJsonp({commit, state}, obj){
    return new Promise((resolve, reject) => {
      Vue.http.jsonp(obj.url,obj.data).then(res => {
        resolve(res.body)
      }).catch(res => {
        reject(res)
      })
    })
  }
}

export default actions
