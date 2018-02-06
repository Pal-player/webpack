
const mutations = {
  set_env(state,obj){
    state.env = obj;
    if(obj=="dev"){
      //测试环境
      {{#if_eq channel 'qh'}}
        //期货
        state.base["cms"] = "http://test-qhcms.jindashi.cn";
        state.base["hdapi"] = "http://test-qhhdapi.jindashi.cn";
        state.base["zbs"] = "http://test-qhzbs.jindashi.cn";
        state.base["login"] = "http://hd.jindashi.cn/qhLogin/login.html?test=a&t="+new Date().getTime();
      {{/if_eq}}
      {{#if_eq channel 'jds'}}
        //金大师
        state.base["cms"] = "http://test.cms.jindashi.cn";
        state.base["hdapi"] = "http://test.hdapi.jindashi.cn";
        state.base["zbs"] = "http://test.zbs.jindashi.cn";
        state.base["login"] = "http://hd.jindashi.cn/test/login/login.html?test=test&t="+new Date().getTime();
      {{/if_eq}}
    }else if(obj=="pre"){
      //preview
      {{#if_eq channel 'qh'}}
        //期货
        state.base["cms"] = "http://preview-qhcms.jindashi.cn";
        state.base["hdapi"] = "http://preview-qds-hdapi.jindashi.cn";
        state.base["zbs"] = "http://preview-qhzbs.jindashi.cn";
        state.base["login"] = "http://hd.jindashi.cn/qhLogin/login.html?t="+new Date().getTime();
      {{/if_eq}}
      {{#if_eq channel 'jds'}}
        //金大师
        state.base["cms"] = "http://preview-cms.jindashi.cn";
        state.base["hdapi"] = "http://preview-hdapi.jindashi.cn";
        state.base["zbs"] = "http://preview-zbs.jindashi.cn";
        state.base["login"] = "http://hd.jindashi.cn/login/login.html?t="+new Date().getTime();
      {{/if_eq}}
    }else{
      //正式
      {{#if_eq channel 'qh'}}
        //期货
        state.base["cms"] = "http://qhcms.jindashi.cn";
        state.base["hdapi"] = "http://qds-hdapi.jindashi.cn";
        state.base["zbs"] = "http://qhzbs.jindashi.cn";
        state.base["login"] = "http://hd.jindashi.cn/qhLogin/login.html?t="+new Date().getTime();
      {{/if_eq}}
      {{#if_eq channel 'jds'}}
        //金大师
        state.base["cms"] = "http://cms.jindashi.cn";
        state.base["hdapi"] = "http://hdapi.jindashi.cn";
        state.base["zbs"] = "http://zbs.jindashi.cn";
        state.base["login"] = "http://hd.jindashi.cn/login/login.html?t="+new Date().getTime();
      {{/if_eq}}
    }
  },
  set_base(state, obj){
    state.base[obj.key] = obj.val
  },
}

export default mutations
