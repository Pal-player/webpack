
const mutations = {
  set_env(state,obj){
    state.env = obj;
    if(obj=="dev"){
      //测试环境
      //期货
      state.base["qhcms"] = "http://test-qhcms.jindashi.cn";
      state.base["qhhdapi"] = "http://test-qhhdapi.jindashi.cn";
      state.base["qhzbs"] = "http://test-qhzbs.jindashi.cn";
      //金大师
      state.base["cms"] = "http://test.cms.jindashi.cn";
      state.base["hdapi"] = "http://test.hdapi.jindashi.cn";
      state.base["zbs"] = "http://test.zbs.jindashi.cn";
    }else if(obj=="pre"){
      //preview
      //期货
      state.base["qhcms"] = "http://preview-qhcms.jindashi.cn";
      state.base["qhhdapi"] = "http://preview-qds-hdapi.jindashi.cn";
      state.base["qhzbs"] = "http://preview-qhzbs.jindashi.cn";
      //金大师
      state.base["cms"] = "http://preview-cms.jindashi.cn";
      state.base["hdapi"] = "http://preview-hdapi.jindashi.cn";
      state.base["zbs"] = "http://preview-zbs.jindashi.cn";
    }else{
      //正式
      //期货
      state.base["qhcms"] = "http://qhcms.jindashi.cn";
      state.base["qhhdapi"] = "http://qds-hdapi.jindashi.cn";
      state.base["qhzbs"] = "http://qhzbs.jindashi.cn";
      //金大师
      state.base["cms"] = "http://cms.jindashi.cn";
      state.base["hdapi"] = "http://hdapi.jindashi.cn";
      state.base["zbs"] = "http://zbs.jindashi.cn";
    }
  },
  set_base(state, obj){
    state.base[obj.prop] = obj.val
  },
}

export default mutations
