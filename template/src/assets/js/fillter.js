import Vue from 'vue'

//显示小数
Vue.filter("showDecimal",function(value,num){
  if(!isNaN(value)&&value.toString().replace(/ /g,'')!=""){
    return value.toFixed(num);
  }else{
    return value;
  }
});
//显示时间
Vue.filter("showTime",function(value,fmt){
  //兼容ios 移除横杆、移除毫秒
  var date;
  value = value+"";
  if(value==value*1){
    //直接传入的时间戳
    date = value;
  }else{
    if(value.indexOf(".")>=0){
      //毫秒的时间格式 "2012-12-12 12:12:12.123"
      var ms = value.split(".")[1];
      date = new Date(value.split(".")[0].replace(/-/g,'/')).getTime();
      date += ms*1;
    }else{
      //不带毫秒的时间格式 "2012-12-12 12:12:12"
      date = new Date(value.replace(/-/g,'/')).getTime();
    }
  }
  date = new Date(date*1);
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt; 
});