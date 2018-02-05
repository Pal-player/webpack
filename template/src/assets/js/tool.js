const Tool = {
  //神策埋点
  track(evtname, obj) {
    var tmp = {};
    for (let key in obj) {
      tmp[key] = obj[key];
    }
    tmp.plat = page_plat;
    tmp.create_time = new Date();
    sa.track(evtname, tmp);
  },
  getCookie(){
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg))
      return unescape(arr[2])
    else
      return null
  },
  setCookie(name, value, time, path, domain){
    var exp = new Date();
    if (time) {
      exp.setTime(exp.getTime() + time * 60 * 60 * 1000);
    } else {
      exp.setTime(exp.getTime() + 4 * 60 * 60 * 1000);
    }
    if (time == 0) {
      var ctime = ""
    } else {
      var ctime = ";expires=" + exp.toGMTString()
    }
    document.cookie.path = path;
    document.cookie.setDomain = domain;
    document.cookie = name + "=" + escape(value) + ctime + "; path=/;domain=" + domain;
  },
  delCookie(name,domain){
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=a; expires=" + date.toGMTString() + "; path=/;domain=" + domain;
  }
}

export default Tool