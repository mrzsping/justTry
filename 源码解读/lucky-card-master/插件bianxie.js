// 1.插件基本格式 
(function(window, documnet){

})(window, documnet)

// 2.插件导出 define module
if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
  define(function() {
      return LuckyCard;
  });
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = LuckyCard.case;
  module.exports.LuckyCard = LuckyCard;
} else {
  window.LuckyCard = LuckyCard;
}