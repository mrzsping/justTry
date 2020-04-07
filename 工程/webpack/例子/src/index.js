import './css/style.css'

let a = 34;
console.log(a)
if (module.hot) {
  // 实现热更新
  module.hot.accept();
}