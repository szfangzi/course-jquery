(function (window, undefined) {

  var class2type = {};
  var classList = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol', 'Null', 'Undefined'];
  var toString = class2type.toString;


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

      // 如果只传了目标对象而没有传源对象，则把jQuery作为目标对象
      if (length === i) {
        target = this;
        i--;
      };

      for (; i < length; i++) {
        // 把源对象赋值给options
        if ((options = arguments[i]) != null) {
          for (name in options) {
            src = target[name];
            copy = options[name];

            // 避免死循环
            if (target === copy) {
              continue;
            }

            // 深拷贝
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && jQuery.isArray(src) ? src : [];

              } else {
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
      // type: function (obj) {
      //   if (obj == null) {
      //     return obj + "";
      //   }
      //   return typeof obj === "object" || typeof obj === "function" ?
      //     class2type[toString.call(obj)] || "object" :
      //     typeof obj;
      // },
      type: function (obj) {
        return class2type[toString.call(obj)];
      },
      isPlainObject: function () {

      },
      isArray: Array.isArray,
      isFunction: function (obj) {
        return jQuery.type(obj) === "function";
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

