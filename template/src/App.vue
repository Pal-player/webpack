<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<script>
import fontsize from "./assets/js/setsize.js";

{{#vuex}}
import { mapState, mapMutations } from "vuex";
{{/vuex}}
export default {
  name: 'App',
  created(){
    let arr1 = location.search.substr(1).split('&');
    var searchObj = (() => {
      var obj = {}
      for (let i = 0; i < arr1.length; i++) {
          let narr = arr1[i].split('=');
          obj[narr[0]] = narr[1]
      }
      return obj
    })();
    var href = location.href;
    var env = searchObj.env;
    if(href.indexOf("localhost")>=0){
      env = "dev";
    }else{
      if(env==undefined){
        env = "for";
      }
    }
    // env = "for";
    this.set_env(env);
  },
  methods:{
    ...mapMutations(['set_env']),
  }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
