(function (window, undefined) {

  var arr = [];

  var document = window.document;

  var getProto = Object.getPrototypeOf;

  var slice = arr.slice;

  var concat = arr.concat;

  var push = arr.push;

  var indexOf = arr.indexOf;

  var class2type = {};

  var classList = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol', 'Null', 'Undefined', 'Window'];

  var toString = class2type.toString;

  var hasOwn = class2type.hasOwnProperty;

  var fnToString = hasOwn.toString;

  var ObjectFunctionString = fnToString.call(Object);

  // var support = {};

  var jQuery = (function () {
    var jQuery = function (selector, context) {
      var rootjQuery = '';
      return new jQuery.fn.init(selector, context, rootjQuery);
    };

    jQuery.fn = jQuery.prototype = {
      constructor: jQuery,
      init: function (selector, context, rootjQuery) { }
    };

    jQuery.fn.init.prototype = jQuery.fn;

    // 用于合并两个或多个对象的属性到第一个对象
    jQuery.extend = jQuery.fn.extend = function () {
      var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;

      // 是否deepcopy
      if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      };

      // 如果target是个字符串 或者别的非函数非对象
      if (typeof target !== 'object' && !jQuery.isFunction(target)) {
        target = {};
      };

      // 如果只传了目标对象而没有传源对象，则把jQuery作为目标对象，并且i--，这样通过下边的循环，把目标对象的属性和方法拷贝给jQuery对象
      if (length === i) {
        target = this;
        i--;
      };

      for (; i < length; i++) {
        // 把源对象赋值给options
        if ( (options = arguments[i]) != null ) {
          for (name in options) {
            // 目标对象的键值
            src = target[name];
            // 第i个源对象的键值
            copy = options[name];

            // 避免死循环 比如
            // var o = {};
            // o.n1 = o;
            // $.extend(true, o, {n2:o});
            if (target === copy) {
              continue;
            }

            // 深拷贝
            if (deep && copy && ( jQuery.isPlainObject(copy) || ( copyIsArray = jQuery.isArray(copy) ) ) ) {
              // 如果源对象的键值是数组
              if (copyIsArray) {
                copyIsArray = false;
                // 如果目标对象的键值存在,且与源对象的键值一样都是数组,就返回目标对象的键值,否则返回空数组
                clone = src && jQuery.isArray(src) ? src : [];

              } else {
                // 如果目标对象的键值存在,且与源对象的键值一样都是纯对象,就返回目标对象的键值,否则返回空对象
                clone = src && jQuery.isPlainObject(src) ? src : {};
              }

              // Never move original objects, clone them
              target[name] = jQuery.extend(deep, clone, copy);

              // 浅拷贝
            } else if (copy !== undefined) {
              target[name] = copy;
            }

          }

        }

      }

      // 返回目标对象
      return target;

    };
    jQuery.extend({
      type: function (obj) {
        return class2type[toString.call(obj)];
      },
      // 只有通过对象直接量{}或者new Object()创建的对象，才返回true
      isPlainObject: function (obj) {
        var proto, Ctor;

        // 可以过滤掉undefined null new Date()等等
        if (!obj || jQuery.type(obj) !== "object") {
          return false;
        }

        // 获取原型
        proto = getProto(obj);

        // Object.create( null )创建的对象原型为空，但也是纯粹对象
        if (!proto) {
          return true;
        }

        // 通过其他构造函数生成的对象就不是纯粹对象
        return obj.constructor === Object;
      },
      isArray: Array.isArray || function (obj) {
        return jQuery.type(obj) === "array";
      },
      isFunction: function (obj) {
        return jQuery.type(obj) === "function";
      },
      isWindow:function (obj){
        return jQuery.type(obj) === "window";
      },
      // 合法的数字且是有限大小的数字
      isNumeric:function (val){
        return jQuery.type(val) === "number" && isFinite(val);
      }
    });

    // 生成类型对象
    classList.forEach(function (name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });


    return jQuery;
  })();


  window.jQuery = window.$ = jQuery;

})(window)


