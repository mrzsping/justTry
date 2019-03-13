
  //引擎、平台、Windows 操作系统、移动设备和游戏系统
  var client = function(){
    //呈现引擎
    var engine = {
      ie: 0,
      gecko: 0,
      webkit: 0,
      khtml: 0,
      opera: 0,
      //完整的版本号
      ver: null
    };
//浏览器
    var browser = {
      //主要浏览器
      ie: 0,
      firefox: 0,
      safari: 0,
      konq: 0,
      opera: 0,
      chrome: 0,
      //具体的版本号
      ver: null
    };
//平台、设备和操作系统
    var system = {
      win: false,
      mac: false,
      x11: false,
      //移动设备
      iphone: false,
      ipod: false,
      ipad: false,
      ios: false,
      android: false,
      nokiaN: false,
      winMobile: false,
      //游戏系统
      wii: false,
      ps: false
    };
//检测呈现引擎和浏览器
    var ua = navigator.userAgent;
    if (window.opera){
      engine.ver = browser.ver = window.opera.version();
      engine.opera = browser.opera = parseFloat(engine.ver);
    } else if (/AppleWebKit\/(\S+)/.test(ua)){
      engine.ver = RegExp["$1"];
      engine.webkit = parseFloat(engine.ver);
      //确定是Chrome 还是Safari
      if (/Chrome\/(\S+)/.test(ua)){
        browser.ver = RegExp["$1"];
        browser.chrome = parseFloat(browser.ver);
      } else if (/Version\/(\S+)/.test(ua)){
        browser.ver = RegExp["$1"];
        browser.safari = parseFloat(browser.ver);
      } else {
        //近似地确定版本号
        var safariVersion = 1;
        if (engine.webkit < 100){
          safariVersion = 1;
        } else if (engine.webkit < 312){
          safariVersion = 1.2;
        } else if (engine.webkit < 412){
          safariVersion = 1.3;
        } else {
          safariVersion = 2;
        }
          browser.safari = browser.ver = safariVersion;
      }
    } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
      engine.ver = browser.ver = RegExp["$1"];
      engine.khtml = browser.konq = parseFloat(engine.ver);
    } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
      engine.ver = RegExp["$1"];
      engine.gecko = parseFloat(engine.ver);
      //确定是不是Firefox
      if (/Firefox\/(\S+)/.test(ua)){
        browser.ver = RegExp["$1"];
        browser.firefox = parseFloat(browser.ver);
      }
    } else if (/MSIE ([^;]+)/.test(ua)){
      engine.ver = browser.ver = RegExp["$1"];
      engine.ie = browser.ie = parseFloat(engine.ver);
    }
    //检测浏览器
    browser.ie = engine.ie;
    browser.opera = engine.opera;
    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    //检测Windows 操作系统
    if (system.win){
      if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
        if (RegExp["$1"] == "NT"){
          switch(RegExp["$2"]){
            case "5.0":
              system.win = "2000";
            break;
            case "5.1":
              system.win = "XP";
            break;
            case "6.0":
              system.win = "Vista";
            break;
            case "6.1":
              system.win = "7";
            break;
            default:
              system.win = "NT";
            break;
          }
        } else if (RegExp["$1"] == "9x"){
          system.win = "ME";
        } else {
          system.win = RegExp["$1"];
        }
      }
    }
    //移动设备
    system.iphone = ua.indexOf("iPhone") > -1;
    system.ipod = ua.indexOf("iPod") > -1;
    system.ipad = ua.indexOf("iPad") > -1;
    system.nokiaN = ua.indexOf("NokiaN") > -1;
    //windows mobile
    if (system.win == "CE"){
      system.winMobile = system.win;
    } else if (system.win == "Ph"){
      if(/Windows Phone OS (\d+.\d+)/.test(ua)){;
        system.win = "Phone";
        system.winMobile = parseFloat(RegExp["$1"]);
      }
    }
    //检测iOS 版本
    if (system.mac && ua.indexOf("Mobile") > -1){
      if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
        system.ios = parseFloat(RegExp.$1.replace("_", "."));
      } else {
        system.ios = 2; //不能真正检测出来，所以只能猜测
      }
    }
    //检测Android 版本
    if (/Android (\d+\.\d+)/.test(ua)){
      system.android = parseFloat(RegExp.$1);
    }
    //游戏系统
    system.wii = ua.indexOf("Wii") > -1;
    system.ps = /playstation/i.test(ua);
    //返回这些对象
    return {
      engine: engine,
      browser: browser,
      system: system
    };
  }();

  // 节点contains方法
  function contains(refNode, otherNode){
    if (typeof refNode.contains == "function" &&
    (!client.engine.webkit || client.engine.webkit >= 522)){
      return refNode.contains(otherNode);
    } else if (typeof refNode.compareDocumentPosition == "function"){
      return !!(refNode.compareDocumentPosition(otherNode) & 16);
    } else {
      var node = otherNode.parentNode;
    do {
      if (node === refNode){
      return true;
      } else {
      node = node.parentNode;
      }
    } while (node !== null);
      return false;
    }
  }
// 添加事件
  var EventUtil = {
    // 添加事件
    addHandler: function(element, type, handler){
      if (element.addEventListener){
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent){
        element.attachEvent("on" + type, handler);// 兼容ie
      } else {
        element["on" + type] = handler;// 兼容ie8更早版本
      }
    },// 移除事件
    removeHandler: function(element, type, handler){
      if (element.removeEventListener){
        element.removeEventListener(type, handler, false);
      } else if (element.detachEvent){
        element.detachEvent("on" + type, handler);// 兼容ie
      } else {
        element["on" + type] = null;// 兼容ie8更早版本
      }
    },// 获取事件对象
    getEvent: function(event){
      return event ? event : window.event;// 兼容ie
    },// 获取事件目标对象
    getTarget: function(event){
      return event.target || event.srcElement;// 兼容ie
    },// 阻止默认时间
    preventDefault: function(event){
      if (event.preventDefault){
        event.preventDefault();
      } else {
        event.returnValue = false;// 兼容ie
      }
    },// 阻止冒泡
    stopPropagation: function(event){
      if (event.stopPropagation){
        event.stopPropagation();
      } else {
        event.cancelBubble = true;// 兼容ie
      }
    },
    // getButton: function(event){
    //   if (document.implementation.hasFeature("MouseEvents", "2.0")){
    //     return event.button;
    //   } else {
    //     switch(event.button){
    //       case 0:
    //       case 1:
    //       case 3:
    //       case 5:
    //       case 7:
    //       return 0;
    //       case 2:
    //       case 6:
    //       return 2;
    //       case 4:
    //       return 1;
    //     }
    //   }
    // },// 滚轮最小滚动值
    getWheelDelta: function(event){
      if (event.wheelDelta){
        return (client.engine.opera && client.engine.opera < 9.5 ?
        -event.wheelDelta : event.wheelDelta);
      } else {
        return -event.detail * 40;
      }
    },// 获取按键编码
    getCharCode: function(event){
      if (typeof event.charCode == "number"){
        return event.charCode;
      } else {
        return event.keyCode;
      }
    },// 剪切板
    getClipboardText: function(event){
      var clipboardData = (event.clipboardData || window.clipboardData);
      return clipboardData.getData("text");
    },
    setClipboardText: function(event, value){
      if (event.clipboardData){
        return event.clipboardData.setData("text/plain", value);
      } else if (window.clipboardData){
        return window.clipboardData.setData("text", value);
      }
    }
  };
  var CookieUtil = {
    get: function (name){
      var cookieName = encodeURIComponent(name) + "=",
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
      if (cookieStart > -1){
        var cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1){
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
      }
      return cookieValue;
    },
    set: function (name, value, expires, path, domain, secure) {
      var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      if (expires instanceof Date) {
        cookieText += "; expires=" + expires.toGMTString();
      }
      if (path) {
        cookieText += "; path=" + path;
      }
      if (domain) {
        cookieText += "; domain=" + domain;
      }
      if (secure) {
        cookieText += "; secure";
      }
      document.cookie = cookieText;
    },
    unset: function (name, path, domain, secure){
      this.set(name, "", new Date(0), path, domain, secure);
    }
  };

  // 子cookie
  var SubCookieUtil = {
    set: function (name, subName, value, expires, path, domain, secure) {
      var subcookies = this.getAll(name) || {};
      subcookies[subName] = value;
    this.setAll(name, subcookies, expires, path, domain, secure);
    },
    setAll: function(name, subcookies, expires, path, domain, secure){
      var cookieText = encodeURIComponent(name) + "=",
      subcookieParts = new Array(),
      subName;
      for (subName in subcookies){
        if (subName.length > 0 && subcookies.hasOwnProperty(subName)){
          subcookieParts.push(encodeURIComponent(subName) + "=" +
          encodeURIComponent(subcookies[subName]));
        }
      }
      if (cookieParts.length > 0){
        cookieText += subcookieParts.join("&");
        if (expires instanceof Date) {
          cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
          cookieText += "; path=" + path;
        }
        if (domain) {
          cookieText += "; domain=" + domain;
        }
        if (secure) {
          cookieText += "; secure";
        }
      } else {
        cookieText += "; expires=" + (new Date(0)).toGMTString();
      }
      document.cookie = cookieText;
    },
    get: function (name, subName){
      var subCookies = this.getAll(name);
      if (subCookies){
        return subCookies[subName];
      } else {
        return null;
      }
    },
    getAll: function(name){
      var cookieName = encodeURIComponent(name) + "=",
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null,
      cookieEnd,
      subCookies,
      i,
      parts,
      result = {};
      if (cookieStart > -1){
        cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1){
          cookieEnd = document.cookie.length;
        }
        cookieValue = document.cookie.substring(cookieStart + cookieName.length, cookieEnd);
        if (cookieValue.length > 0){
          subCookies = cookieValue.split("&");
          for (i=0, len=subCookies.length; i < len; i++){
            parts = subCookies[i].split("=");
            result[decodeURIComponent(parts[0])] =
            decodeURIComponent(parts[1]);
          }
          return result;
        }
      }
      return null;
    },
    unset: function (name, subName, path, domain, secure){
      var subcookies = this.getAll(name);
      if (subcookies){
        delete subcookies[subName];
        this.setAll(name, subcookies, null, path, domain, secure);
      }
    },
    unsetAll: function(name, path, domain, secure){
      this.setAll(name, null, new Date(0), path, domain, secure);
    }
  };