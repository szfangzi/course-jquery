(function(window, undefined){
  var jQuery = (function(){
    var jQuery = function(selector, context){
      var rootjQuery = '';
      return new jQuery.fn.init(selector, context, rootjQuery);
    };

    // 检测selector是否是复杂的html代码
    var quickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;

    jQuery.fn = jQuery.prototype = {
      constructor:jQuery,
      init:function(selector, context, rootjQuery){
        var match, elem, ret, doc;
        // jQuery入口函数12分支
        // 分支1 $(""), $(null), $(undefined)
        if (!selector) {
          return this;
        }

        // 分支2 $(DOMElement)
        if(selector.nodeType){
          this.context = this[0] = selector;
          this.length = 1;
          return this;
        }

        // 分支3 字符串 body
        if(selector === 'body' && !context && document.body){
          this.context = document;
          this[0] = document.body;
          this.selector = selector;
          this.length = 1;
          return this;
        }

        // 分支 其他字符串
        if(typeof selector === 'string'){
          // 是简单html标签 还是id或者其他选择器等复杂html代码？
          if(selector.charAt(0) === '<' && selector.charAt(selector.length - 1) === '>' && selector.length >= 3 ){
            match = [null, selector, null];
          }else{
            // 数组match 第一个元素为selector，第二个元素为匹配的html代码或undefined，第三个元素为匹配的id或undefined
            match = quickExpr.exec(selector);
          }

          // 如果match[1]不是undefined，或者match[2]不是undefined且未传入context
          if( match && (match[1] || match[2] && !context) ){

            if(match[1]){
              context = context instanceof jQuery ? context[0] : context;
              doc = (context ? context.ownerDocument || context : document);

              // 检测是否是单独的标签，不包含尖括号，不包含属性，可以自关闭或不关闭
              // 数组ret第一个元素为selector，第二个元素为标签名
              ret = rsingleTag.exec(selector);
              // 分支4 单独标签
              if(ret){
                // if(jQuery.isPlainObject(context)){
                //   selector = [doc.createElement(ret[1])];
                //   jQuery.fn.attr.call(selector, context, true);
                // }else{
                //   selector = [doc.createElement(ret[1])];
                // }

              // 分支5 复杂的html代码
              }else{
                // ret = jQuery.buildFragment( [ match[1] ], [doc] );
                // selector = (ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment).childNodes;
              }
              // return jQuery.merge(this, selector);

            // 分支6 是#id，且未传入context
            }else{
              elem = document.getElementById(match[2]);
              if(elem){
                // ie6 ie7 部分老版本opera会根据name找而不是id,如果遇到这种情况,则调用sizzle去匹配
                if(elem.id !== match[2]){
                  // return rootjQuery.find(selector)
                }

                this.length = 1;
                this[0] = elem;
              }

              this.context = document;
              this.selector = selector;
              return this;
            }

          // 分支7 选择器表达式 例如$('#app .a b')
          }else if(!context || context.jQuery){
            return (context || rootjQuery).find(selector);
          }else{
            return this.constructor(context).find(selector);
          }

        // 分支8 函数
        }else if(jQuery.isFunction(selector)){
          return rootjQuery.ready(selector);
        }

        // 分支9 jQuery对象
        if(selector.selector !== undefined){
          this.selector = selector.selector;
          this.context = selector.context;
        }

        // 分支10 任意其他值
        return jQuery.makeArray(selector, this);

      }

    };

    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function(){};
    jQuery.extend({

    });

    jQuery.buildFragment = function (args, nodes, scripts){
      var fragment, cacheable, cacheresults, doc, first = args[0];

      if(nodes && nodes[0]){
        doc = nodes[0].ownerDocument || nodes[0];
      }

      if(!doc.createDocumentFragment){
        doc = document;
      }

    };

    return jQuery;
  })();


  window.jQuery = window.$ = jQuery;

})(window)
