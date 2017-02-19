(function(window, undefined){
  var jQuery = (function(){
    var jQuery = function(selector, context){
      return new jQuery.fn.init(selector, context, rootjQuery);
    };
    return jQuery;
  })();

  // 工具方法 Utilities
  // 回调函数列表 Callbacks Object
  // 异步队列 Deferred Object
  // 浏览器功能测试 Support
  // 数据缓存 Data
  // 队列 Queue
  // 属性操作 Attributes
  // 事件系统 Events
  // 选择器 Sizzle
  // DOM 遍历 Traversing
  // DOM 操作 Manipulation
  // 样式操作 CSS(计算样式、内联样式)
  // 异步请求 Ajax
  // 动画 Effects
  // 坐标 Offset、 尺寸 Dimensions

  window.jQuery = window.$ = jQuery;


})(window)
