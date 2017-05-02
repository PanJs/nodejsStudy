/*
用于将当前位置处的栈信息作为标准错误信息进行输出，
*/
var user = new Object()
user.name = 'test'
user.getName = function () {
  return this.name
}
user.setName = function (name) {
  this.name = name
}
console.trace('type')