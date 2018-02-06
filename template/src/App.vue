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
import { mapState, mapMutations,mapActions } from "vuex";
{{/vuex}}
export default {
  name: 'App',
  created(){
    var channel = this.tool.request("channel");
    if(channel){
      this.set_base({key:"channel",val:channel});
    }
    var env = this.tool.request("env");
    if(location.href.indexOf("localhost")>=0){
      env = "dev";
    }else{
      if(env==null||env==undefined){
        env = "for";
      }
    }
    this.set_env(env);
  },
  mounted () {
    var _this = this;
    this.set_base({key:'isApp',val:sharePlug.isApp})
    if (this.base.isApp) {
      sharePlug.checkLogin({
        success(data) {
          _this.set_base({key:'ukey',val:data.ukey})
          _this.getUserInfo();
        },
        fail() {
          sharePlug.login({
            success: function (data) {
              _this.set_base({key:'ukey',val:data.ukey})
              _this.getUserInfo();
            }
          })
        }
      })
    } else {
      {{#if_eq channel 'qh'}}
      var ukey = this.tool.request("qhukey");
      {{/if_eq}}
      {{#if_eq channel 'jds'}}
      var ukey = this.tool.request("ukey");
      {{/if_eq}}
      if (ukey) {
        //url
        this.set_base({key:'ukey',val:ukey})
      }else{
        //cookie
        {{#if_eq channel 'qh'}}
        ukey = this.tool.getCookie('qhukey');
        {{/if_eq}}
        {{#if_eq channel 'jds'}}
        ukey = this.tool.request("ukey");
        {{/if_eq}}
        this.set_base({key:'ukey',val:ukey});
      }
      if(!ukey) {
        location.href = this.base.login+'&backurl='+location.href;
      } else {
        _this.getUserInfo();
      }
    }
  },
  methods:{
    ...mapMutations(['set_env','set_base']),
    ...mapActions(['httpJsonp']),
    getUserInfo(){
      
    }
  },
  computed:{
    ...mapState(['base'])
  }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
