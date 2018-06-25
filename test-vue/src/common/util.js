// 设置cookie
let setCookie = function (name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}

// 获取cookie
let getCookie = function (name) {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return (arr[2])
  } else {
    return null
  }
}

// 删除cookie
let delCookie = function (name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

export default{
  setCookie,
  delCookie,
  getCookie
}
