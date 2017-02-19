// 把window和undefined作为形参，可以缩短作用域链的搜索，以及方便压缩jQuery代码
(function(window, undefined){
  var jQuery = (function(){

    // jQuery构造函数
    var jQuery = function(selector, context){
      var rootjQuery = '';
      // 如果不通过返回其他构造函数的实例对象，那么就无法实现简写 - $()创建jQuery对象，得通过new $()来创建了
      return new jQuery.fn.init(selector, context, rootjQuery);
    };
    // 一堆局部变量，通过自调用匿名函数把这些局部变量跟其他模块隔离开来

    // 构造函数的原型对象，jQuery.fn是jQuery.prototype的简写，可以少写7个字符，以方便拼写
    jQuery.fn = jQuery.prototype = {
      constructor:jQuery,
      init:function(selector, context, rootjQuery){}
      // 一堆原型属性和方法，比如selector、length、size()、toArray()
    };

    // 这样通过init创建的jQuery对象就可以访问jQuery.fn的属性和方法了
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function(){};
    jQuery.extend({
      // 一堆静态属性和方法，比如noConflict()、isReady等
    });
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

// 不传递undefined，是因为老版本浏览器undefined允许被修改的，万一在外部undefined被修改了还传进来了
})(window)
