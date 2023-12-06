var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/macy/dist/macy.js
var require_macy = __commonJS((exports, module) => {
  (function(t, n) {
    typeof exports == "object" && typeof module != "undefined" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : t.Macy = n();
  })(exports, function() {
    function t(t2, n2) {
      var e2 = undefined;
      return function() {
        e2 && clearTimeout(e2), e2 = setTimeout(t2, n2);
      };
    }
    function n(t2, n2) {
      for (var e2 = t2.length, r2 = e2, o2 = [];e2--; )
        o2.push(n2(t2[r2 - e2 - 1]));
      return o2;
    }
    function e(t2, n2) {
      var e2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      if (window.Promise)
        return A(t2, n2, e2);
      t2.recalculate(true, true);
    }
    function r(t2) {
      for (var { options: n2, responsiveOptions: e2, keys: r2, docWidth: o2 } = t2, i2 = undefined, s2 = 0;s2 < r2.length; s2++) {
        var a2 = parseInt(r2[s2], 10);
        o2 >= a2 && (i2 = n2.breakAt[a2], O(i2, e2));
      }
      return e2;
    }
    function o(t2) {
      for (var { options: n2, responsiveOptions: e2, keys: r2, docWidth: o2 } = t2, i2 = undefined, s2 = r2.length - 1;s2 >= 0; s2--) {
        var a2 = parseInt(r2[s2], 10);
        o2 <= a2 && (i2 = n2.breakAt[a2], O(i2, e2));
      }
      return e2;
    }
    function i(t2) {
      var n2 = t2.useContainerForBreakpoints ? t2.container.clientWidth : window.innerWidth, e2 = { columns: t2.columns };
      b(t2.margin) ? e2.margin = { x: t2.margin.x, y: t2.margin.y } : e2.margin = { x: t2.margin, y: t2.margin };
      var i2 = Object.keys(t2.breakAt);
      return t2.mobileFirst ? r({ options: t2, responsiveOptions: e2, keys: i2, docWidth: n2 }) : o({ options: t2, responsiveOptions: e2, keys: i2, docWidth: n2 });
    }
    function s(t2) {
      return i(t2).columns;
    }
    function a(t2) {
      return i(t2).margin;
    }
    function c(t2) {
      var n2 = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1], e2 = s(t2), r2 = a(t2).x, o2 = 100 / e2;
      if (!n2)
        return o2;
      if (e2 === 1)
        return "100%";
      var i2 = "px";
      if (typeof r2 == "string") {
        var c2 = parseFloat(r2);
        i2 = r2.replace(c2, ""), r2 = c2;
      }
      return r2 = (e2 - 1) * r2 / e2, i2 === "%" ? o2 - r2 + "%" : "calc(" + o2 + "% - " + r2 + i2 + ")";
    }
    function u(t2, n2) {
      var e2 = s(t2.options), r2 = 0, o2 = undefined, i2 = undefined;
      if (++n2 === 1)
        return 0;
      i2 = a(t2.options).x;
      var u2 = "px";
      if (typeof i2 == "string") {
        var l2 = parseFloat(i2, 10);
        u2 = i2.replace(l2, ""), i2 = l2;
      }
      return o2 = (i2 - (e2 - 1) * i2 / e2) * (n2 - 1), r2 += c(t2.options, false) * (n2 - 1), u2 === "%" ? r2 + o2 + "%" : "calc(" + r2 + "% + " + o2 + u2 + ")";
    }
    function l(t2) {
      var n2 = 0, e2 = t2.container, r2 = t2.rows;
      v(r2, function(t3) {
        n2 = t3 > n2 ? t3 : n2;
      }), e2.style.height = n2 + "px";
    }
    function p(t2, n2) {
      var e2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2], r2 = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3], o2 = s(t2.options), i2 = a(t2.options).y;
      M(t2, o2, e2), v(n2, function(n3) {
        var e3 = 0, o3 = parseInt(n3.offsetHeight, 10);
        isNaN(o3) || (t2.rows.forEach(function(n4, r3) {
          n4 < t2.rows[e3] && (e3 = r3);
        }), n3.style.position = "absolute", n3.style.top = t2.rows[e3] + "px", n3.style.left = "" + t2.cols[e3], t2.rows[e3] += isNaN(o3) ? 0 : o3 + i2, r2 && (n3.dataset.macyComplete = 1));
      }), r2 && (t2.tmpRows = null), l(t2);
    }
    function f(t2, n2) {
      var e2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2], r2 = !(arguments.length > 3 && arguments[3] !== undefined) || arguments[3], o2 = s(t2.options), i2 = a(t2.options).y;
      M(t2, o2, e2), v(n2, function(n3) {
        t2.lastcol === o2 && (t2.lastcol = 0);
        var e3 = C(n3, "height");
        e3 = parseInt(n3.offsetHeight, 10), isNaN(e3) || (n3.style.position = "absolute", n3.style.top = t2.rows[t2.lastcol] + "px", n3.style.left = "" + t2.cols[t2.lastcol], t2.rows[t2.lastcol] += isNaN(e3) ? 0 : e3 + i2, t2.lastcol += 1, r2 && (n3.dataset.macyComplete = 1));
      }), r2 && (t2.tmpRows = null), l(t2);
    }
    var h = function t(n2, e2) {
      if (!(this instanceof t))
        return new t(n2, e2);
      if (n2 && n2.nodeName)
        return n2;
      if (n2 = n2.replace(/^\s*/, "").replace(/\s*$/, ""), e2)
        return this.byCss(n2, e2);
      for (var r2 in this.selectors)
        if (e2 = r2.split("/"), new RegExp(e2[1], e2[2]).test(n2))
          return this.selectors[r2](n2);
      return this.byCss(n2);
    };
    h.prototype.byCss = function(t2, n2) {
      return (n2 || document).querySelectorAll(t2);
    }, h.prototype.selectors = {}, h.prototype.selectors[/^\.[\w\-]+$/] = function(t2) {
      return document.getElementsByClassName(t2.substring(1));
    }, h.prototype.selectors[/^\w+$/] = function(t2) {
      return document.getElementsByTagName(t2);
    }, h.prototype.selectors[/^\#[\w\-]+$/] = function(t2) {
      return document.getElementById(t2.substring(1));
    };
    var v = function(t2, n2) {
      for (var e2 = t2.length, r2 = e2;e2--; )
        n2(t2[r2 - e2 - 1]);
    }, m = function() {
      var t2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      this.running = false, this.events = [], this.add(t2);
    };
    m.prototype.run = function() {
      if (!this.running && this.events.length > 0) {
        var t2 = this.events.shift();
        this.running = true, t2(), this.running = false, this.run();
      }
    }, m.prototype.add = function() {
      var t2 = this, n2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      return !!n2 && (Array.isArray(n2) ? v(n2, function(n3) {
        return t2.add(n3);
      }) : (this.events.push(n2), void this.run()));
    }, m.prototype.clear = function() {
      this.events = [];
    };
    var d = function(t2) {
      var n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.instance = t2, this.data = n2, this;
    }, y = function() {
      var t2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      this.events = {}, this.instance = t2;
    };
    y.prototype.on = function() {
      var t2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0], n2 = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      return !(!t2 || !n2) && (Array.isArray(this.events[t2]) || (this.events[t2] = []), this.events[t2].push(n2));
    }, y.prototype.emit = function() {
      var t2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0], n2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!t2 || !Array.isArray(this.events[t2]))
        return false;
      var e2 = new d(this.instance, n2);
      v(this.events[t2], function(t3) {
        return t3(e2);
      });
    };
    var g = function(t2) {
      return !(("naturalHeight" in t2) && t2.naturalHeight + t2.naturalWidth === 0) || t2.width + t2.height !== 0;
    }, E = function(t2, n2) {
      var e2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      return new Promise(function(t3, e3) {
        if (n2.complete)
          return g(n2) ? t3(n2) : e3(n2);
        n2.addEventListener("load", function() {
          return g(n2) ? t3(n2) : e3(n2);
        }), n2.addEventListener("error", function() {
          return e3(n2);
        });
      }).then(function(n3) {
        e2 && t2.emit(t2.constants.EVENT_IMAGE_LOAD, { img: n3 });
      }).catch(function(n3) {
        return t2.emit(t2.constants.EVENT_IMAGE_ERROR, { img: n3 });
      });
    }, w = function(t2, e2) {
      var r2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      return n(e2, function(n2) {
        return E(t2, n2, r2);
      });
    }, A = function(t2, n2) {
      var e2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      return Promise.all(w(t2, n2, e2)).then(function() {
        t2.emit(t2.constants.EVENT_IMAGE_COMPLETE);
      });
    }, I = function(n2) {
      return t(function() {
        n2.emit(n2.constants.EVENT_RESIZE), n2.queue.add(function() {
          return n2.recalculate(true, true);
        });
      }, 100);
    }, N = function(t2) {
      if (t2.container = h(t2.options.container), t2.container instanceof h || !t2.container)
        return !!t2.options.debug && console.error("Error: Container not found");
      t2.container.length && (t2.container = t2.container[0]), t2.options.container = t2.container, t2.container.style.position = "relative";
    }, T = function(t2) {
      t2.queue = new m, t2.events = new y(t2), t2.rows = [], t2.resizer = I(t2);
    }, L = function(t2) {
      var n2 = h("img", t2.container);
      window.addEventListener("resize", t2.resizer), t2.on(t2.constants.EVENT_IMAGE_LOAD, function() {
        return t2.recalculate(false, false);
      }), t2.on(t2.constants.EVENT_IMAGE_COMPLETE, function() {
        return t2.recalculate(true, true);
      }), t2.options.useOwnImageLoader || e(t2, n2, !t2.options.waitForImages), t2.emit(t2.constants.EVENT_INITIALIZED);
    }, _ = function(t2) {
      N(t2), T(t2), L(t2);
    }, b = function(t2) {
      return t2 === Object(t2) && Object.prototype.toString.call(t2) !== "[object Array]";
    }, O = function(t2, n2) {
      b(t2) || (n2.columns = t2), b(t2) && t2.columns && (n2.columns = t2.columns), b(t2) && t2.margin && !b(t2.margin) && (n2.margin = { x: t2.margin, y: t2.margin }), b(t2) && t2.margin && b(t2.margin) && t2.margin.x && (n2.margin.x = t2.margin.x), b(t2) && t2.margin && b(t2.margin) && t2.margin.y && (n2.margin.y = t2.margin.y);
    }, C = function(t2, n2) {
      return window.getComputedStyle(t2, null).getPropertyValue(n2);
    }, M = function(t2, n2) {
      var e2 = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      if (t2.lastcol || (t2.lastcol = 0), t2.rows.length < 1 && (e2 = true), e2) {
        t2.rows = [], t2.cols = [], t2.lastcol = 0;
        for (var r2 = n2 - 1;r2 >= 0; r2--)
          t2.rows[r2] = 0, t2.cols[r2] = u(t2, r2);
      } else if (t2.tmpRows) {
        t2.rows = [];
        for (var r2 = n2 - 1;r2 >= 0; r2--)
          t2.rows[r2] = t2.tmpRows[r2];
      } else {
        t2.tmpRows = [];
        for (var r2 = n2 - 1;r2 >= 0; r2--)
          t2.tmpRows[r2] = t2.rows[r2];
      }
    }, V = function(t2) {
      var n2 = arguments.length > 1 && arguments[1] !== undefined && arguments[1], e2 = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2], r2 = n2 ? t2.container.children : h(':scope > *:not([data-macy-complete="1"])', t2.container);
      r2 = Array.from(r2).filter(function(t3) {
        return t3.offsetParent !== null;
      });
      var o2 = c(t2.options);
      return v(r2, function(t3) {
        n2 && (t3.dataset.macyComplete = 0), t3.style.width = o2;
      }), t2.options.trueOrder ? (f(t2, r2, n2, e2), t2.emit(t2.constants.EVENT_RECALCULATED)) : (p(t2, r2, n2, e2), t2.emit(t2.constants.EVENT_RECALCULATED));
    }, R = function() {
      return !!window.Promise;
    }, x = Object.assign || function(t2) {
      for (var n2 = 1;n2 < arguments.length; n2++) {
        var e2 = arguments[n2];
        for (var r2 in e2)
          Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
      }
      return t2;
    };
    Array.from || (Array.from = function(t2) {
      for (var n2 = 0, e2 = [];n2 < t2.length; )
        e2.push(t2[n2++]);
      return e2;
    });
    var k = { columns: 4, margin: 2, trueOrder: false, waitForImages: false, useImageLoader: true, breakAt: {}, useOwnImageLoader: false, onInit: false, cancelLegacy: false, useContainerForBreakpoints: false };
    (function() {
      try {
        document.createElement("a").querySelector(":scope *");
      } catch (t2) {
        (function() {
          function t3(t4) {
            return function(e3) {
              if (e3 && n2.test(e3)) {
                var r3 = this.getAttribute("id");
                r3 || (this.id = "q" + Math.floor(9000000 * Math.random()) + 1e6), arguments[0] = e3.replace(n2, "#" + this.id);
                var o2 = t4.apply(this, arguments);
                return r3 === null ? this.removeAttribute("id") : r3 || (this.id = r3), o2;
              }
              return t4.apply(this, arguments);
            };
          }
          var n2 = /:scope\b/gi, e2 = t3(Element.prototype.querySelector);
          Element.prototype.querySelector = function(t4) {
            return e2.apply(this, arguments);
          };
          var r2 = t3(Element.prototype.querySelectorAll);
          Element.prototype.querySelectorAll = function(t4) {
            return r2.apply(this, arguments);
          };
        })();
      }
    })();
    var q = function t() {
      var n2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : k;
      if (!(this instanceof t))
        return new t(n2);
      this.options = {}, x(this.options, k, n2), this.options.cancelLegacy && !R() || _(this);
    };
    return q.init = function(t2) {
      return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "), new q(t2);
    }, q.prototype.recalculateOnImageLoad = function() {
      var t2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      return e(this, h("img", this.container), !t2);
    }, q.prototype.runOnImageLoad = function(t2) {
      var n2 = arguments.length > 1 && arguments[1] !== undefined && arguments[1], r2 = h("img", this.container);
      return this.on(this.constants.EVENT_IMAGE_COMPLETE, t2), n2 && this.on(this.constants.EVENT_IMAGE_LOAD, t2), e(this, r2, n2);
    }, q.prototype.recalculate = function() {
      var t2 = this, n2 = arguments.length > 0 && arguments[0] !== undefined && arguments[0], e2 = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
      return e2 && this.queue.clear(), this.queue.add(function() {
        return V(t2, n2, e2);
      });
    }, q.prototype.remove = function() {
      window.removeEventListener("resize", this.resizer), v(this.container.children, function(t2) {
        t2.removeAttribute("data-macy-complete"), t2.removeAttribute("style");
      }), this.container.removeAttribute("style");
    }, q.prototype.reInit = function() {
      this.recalculate(true, true), this.emit(this.constants.EVENT_INITIALIZED), window.addEventListener("resize", this.resizer), this.container.style.position = "relative";
    }, q.prototype.on = function(t2, n2) {
      this.events.on(t2, n2);
    }, q.prototype.emit = function(t2, n2) {
      this.events.emit(t2, n2);
    }, q.constants = { EVENT_INITIALIZED: "macy.initialized", EVENT_RECALCULATED: "macy.recalculated", EVENT_IMAGE_LOAD: "macy.image.load", EVENT_IMAGE_ERROR: "macy.image.error", EVENT_IMAGE_COMPLETE: "macy.images.complete", EVENT_RESIZE: "macy.resize" }, q.prototype.constants = q.constants, q;
  });
});

// client/utils/type.ts
var isPosition = function(pos) {
  return pos == "absolute" || pos == "relative" || pos == "static" || pos == "fixed" || pos == "inherit" || pos == "sticky";
};
var isWidget = function(thing) {
  return thing instanceof Widget_default;
};
var isHTMLElement = function(thing) {
  return thing instanceof HTMLElement;
};

// client/utils/elman.ts
var registerElement = function(element, id) {
  elementList[id] = element;
};
var findEl = function(id) {
  return elementList[id];
};
var createElement = function(element, classes, attr) {
  let el = document.createElement(element);
  if (attr)
    setAttributeMap(el, attr);
  if (classes)
    setClasses(el, classes);
  return el;
};
var setAttributeMap = function(element, attr) {
  for (var i in attr) {
    if (attr[i])
      element.setAttribute(i, attr[i].toString());
    else if (attr[i] == false)
      element.removeAttribute(i);
  }
};
var setObjectProps = function(element, attr) {
  for (var i in attr) {
    element[i] = attr[i];
  }
};
var setClasses = function(element, classes, type = "add") {
  if (!classes.trim())
    return;
  const classNames = classes.trim().match(" ") ? classes.trim().split(" ") : [classes.trim()];
  classNames.forEach((className) => element.classList[type](className));
};
var setCss = function(element, values, value = null) {
  if (typeof values === "string") {
    if (value === null) {
      return window.getComputedStyle(element).getPropertyValue(values);
    } else {
      if (typeof value == "number")
        value = value + "px";
      element.style[values] = value;
    }
  } else if (typeof values === "object") {
    for (const prop in values) {
      let value2 = values[prop];
      if (!prop.startsWith("--") && typeof value2 == "number")
        value2 = value2 + "px";
      if (prop in element.style)
        element.style[prop] = value2;
      else
        element.style.setProperty(prop, value2);
    }
  }
};
var emptyElement = function(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
var siblings = function(element) {
  return Array.from(element.parentNode?.children || []).filter((child) => child !== element).map((el) => el);
};
var elementList = {};
var specificTypes = "large|transparent|outline".split("|");
var typedElements = "button|input".split("|");

// client/utils/id.ts
var generateRandomID = function(length = 12) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let randomID = "";
  for (let i = 0;i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    randomID += characters.charAt(randomIndex);
  }
  return elementList[randomID] ? generateRandomID(length) : randomID;
};
var id_default = generateRandomID;

// client/utils/options.ts
var _merge = function(defaults, options) {
  let o = { ...defaults };
  for (let i in options) {
    if (o[i]) {
      if (typeof o[i] == typeof options[i]) {
        if (typeof o[i] == "object") {
          if (Array.isArray(o[i])) {
            if (mergableOptions.includes(i))
              o[i].push(...options[i]);
            else
              o[i] = options[i];
          } else {
            mergeOptions(o[i], options[i]);
          }
        } else if (mergableOptions.includes(i)) {
          o[i] += (mergeSeparator[i] || "") + options[i];
        } else {
          o[i] = options[i];
        }
      } else {
        o[i] = options[i];
      }
    } else {
      o[i] = options[i];
    }
  }
  return o;
};
function mergeOptions(defaults, options) {
  return _merge(defaults, options);
}
function getDefaults(opts) {
  let defaults = {
    element: {
      name: "div",
      html: null,
      raw: null,
      selector: null
    },
    class: "widget",
    style: {},
    position: {
      type: "default",
      centered: false,
      top: null,
      left: null,
      bottom: null,
      right: null
    },
    size: {
      width: null,
      height: null
    },
    private: false,
    reset: false,
    value: null,
    icon: null,
    children: [],
    accepts: true,
    events: {},
    type: []
  };
  return {
    ...defaults,
    ...opts
  };
}
var mergableOptions = "class|type|_setters|children".split("|");
var mergeSeparator = {
  class: " "
};

// client/modules/anime.js
var minMax = function(val, min, max) {
  return Math.min(Math.max(val, min), max);
};
var stringContains = function(str, text) {
  return str.indexOf(text) > -1;
};
var applyArguments = function(func, args) {
  return func.apply(null, args);
};
var parseEasingParameters = function(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(",").map(function(p) {
    return parseFloat(p);
  }) : [];
};
var spring = function(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], 0.1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], 0.1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], 0.1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], 0.1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) {
      return t;
    }
    return 1 - progress;
  }
  function getDuration() {
    var cached = cache.springs[string];
    if (cached) {
      return cached;
    }
    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;
    while (true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }
    var duration2 = elapsed * frame * 1000;
    cache.springs[string] = duration2;
    return duration2;
  }
  return duration ? solver : getDuration;
};
var steps = function(steps2) {
  if (steps2 === undefined)
    steps2 = 10;
  return function(t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps2) * (1 / steps2);
  };
};
var parseEasings = function(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }
  var name = easing.split("(")[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case "spring":
      return spring(easing, duration);
    case "cubicBezier":
      return applyArguments(bezier, args);
    case "steps":
      return applyArguments(steps, args);
    default:
      return applyArguments(ease, args);
  }
};
var selectString = function(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
};
var filterArray = function(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : undefined;
  var result = [];
  for (var i = 0;i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
};
var flattenArray = function(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
};
var toArray = function(o) {
  if (is.arr(o)) {
    return o;
  }
  if (is.str(o)) {
    o = selectString(o) || o;
  }
  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }
  return [o];
};
var arrayContains = function(arr, val) {
  return arr.some(function(a) {
    return a === val;
  });
};
var cloneObject = function(o) {
  var clone = {};
  for (var p in o) {
    clone[p] = o[p];
  }
  return clone;
};
var replaceObjectProps = function(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }
  return o;
};
var mergeObjects = function(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }
  return o;
};
var rgbToRgba = function(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
};
var hexToRgba = function(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function(m, r2, g2, b2) {
    return r2 + r2 + g2 + g2 + b2 + b2;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
};
var hslToRgba = function(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p2, q2, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p2 + (q2 - p2) * 6 * t;
    }
    if (t < 1 / 2) {
      return q2;
    }
    if (t < 2 / 3) {
      return p2 + (q2 - p2) * (2 / 3 - t) * 6;
    }
    return p2;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
};
var colorToRgb = function(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }
  if (is.hex(val)) {
    return hexToRgba(val);
  }
  if (is.hsl(val)) {
    return hslToRgba(val);
  }
};
var getUnit = function(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) {
    return split[1];
  }
};
var getTransformUnit = function(propName) {
  if (stringContains(propName, "translate") || propName === "perspective") {
    return "px";
  }
  if (stringContains(propName, "rotate") || stringContains(propName, "skew")) {
    return "deg";
  }
};
var getFunctionValue = function(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }
  return val(animatable.target, animatable.id, animatable.total);
};
var getAttribute = function(el, prop) {
  return el.getAttribute(prop);
};
var convertPxToUnit = function(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, "deg", "rad", "turn"], valueUnit)) {
    return value;
  }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) {
    return cached;
  }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = "absolute";
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
};
var getCSSValue = function(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
};
var getAnimationType = function(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return "attribute";
  }
  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return "transform";
  }
  if (is.dom(el) && (prop !== "transform" && getCSSValue(el, prop))) {
    return "css";
  }
  if (el[prop] != null) {
    return "object";
  }
};
var getElementTransforms = function(el) {
  if (!is.dom(el)) {
    return;
  }
  var str = el.style.transform || "";
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map;
  var m;
  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }
  return transforms;
};
var getTransformValue = function(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms["last"] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
};
var getOriginalTargetValue = function(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case "transform":
      return getTransformValue(target, propName, animatable, unit);
    case "css":
      return getCSSValue(target, propName, unit);
    case "attribute":
      return getAttribute(target, propName);
    default:
      return target[propName] || 0;
  }
};
var getRelativeValue = function(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) {
    return to;
  }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ""));
  switch (operator[0][0]) {
    case "+":
      return x + y + u;
    case "-":
      return x - y + u;
    case "*":
      return x * y + u;
  }
};
var validateValue = function(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }
  if (/\s/g.test(val)) {
    return val;
  }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) {
    return unitLess + unit;
  }
  return unitLess;
};
var getDistance = function(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};
var getCircleLength = function(el) {
  return Math.PI * 2 * getAttribute(el, "r");
};
var getRectLength = function(el) {
  return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
};
var getLineLength = function(el) {
  return getDistance({ x: getAttribute(el, "x1"), y: getAttribute(el, "y1") }, { x: getAttribute(el, "x2"), y: getAttribute(el, "y2") });
};
var getPolylineLength = function(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0;i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }
    previousPos = currentPos;
  }
  return totalLength;
};
var getPolygonLength = function(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
};
var getTotalLength = function(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }
  switch (el.tagName.toLowerCase()) {
    case "circle":
      return getCircleLength(el);
    case "rect":
      return getRectLength(el);
    case "line":
      return getLineLength(el);
    case "polyline":
      return getPolylineLength(el);
    case "polygon":
      return getPolygonLength(el);
  }
};
var setDashoffset = function(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute("stroke-dasharray", pathLength);
  return pathLength;
};
var getParentSvgEl = function(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
};
var getParentSvg = function(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
};
var getPath = function(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
};
var getPathProgress = function(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === undefined)
      offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case "x":
      return (p.x - svg.x) * scaleX;
    case "y":
      return (p.y - svg.y) * scaleY;
    case "angle":
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
};
var decomposeValue = function(val, unit) {
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
};
var parseTargets = function(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function(item, pos, self2) {
    return self2.indexOf(item) === pos;
  });
};
var getAnimatables = function(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function(t, i) {
    return { target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
};
var normalizePropertyTweens = function(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);
    if (!isFromTo) {
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      prop = { value: prop };
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function(v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : { value: v };
    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    }
    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }
    return obj;
  }).map(function(k) {
    return mergeObjects(k, settings);
  });
};
var flattenKeyframes = function(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function(key) {
    return Object.keys(key);
  })), function(p) {
    return is.key(p);
  }).reduce(function(a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }
    return a;
  }, []);
  var properties = {};
  var loop = function(i2) {
    var propName = propertyNames[i2];
    properties[propName] = keyframes.map(function(key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };
  for (var i = 0;i < propertyNames.length; i++)
    loop(i);
  return properties;
};
var getProperties = function(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
};
var normalizeTweenValues = function(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function(v) {
        return getFunctionValue(v, animatable);
      });
      if (value.length === 1) {
        value = value[0];
      }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
};
var normalizeTweens = function(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function(t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) {
      to = previousValue;
    }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) {
      tween.round = 1;
    }
    previousTween = tween;
    return tween;
  });
};
var setTargetsValue = function(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function(animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
};
var createAnimation = function(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable,
      tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
};
var getAnimations = function(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function(animatable) {
    return properties.map(function(prop) {
      return createAnimation(animatable, prop);
    });
  })), function(a) {
    return !is.und(a);
  });
};
var getInstanceTimings = function(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
};
var createNewInstance = function(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id,
    children: [],
    animatables,
    animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
};
var isDocumentHidden = function() {
  return !!document && document.hidden;
};
var anime = function(params) {
  if (params === undefined)
    params = {};
  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;
  function makePromise(instance2) {
    var promise2 = window.Promise && new Promise(function(_resolve) {
      return resolve = _resolve;
    });
    instance2.finished = promise2;
    return promise2;
  }
  var instance = createNewInstance(params);
  var promise = makePromise(instance);
  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== "alternate") {
      instance.direction = direction !== "normal" ? "normal" : "reverse";
    }
    instance.reversed = !instance.reversed;
    children.forEach(function(child) {
      return child.reversed = instance.reversed;
    });
  }
  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }
  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }
  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }
  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0;i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength;i$1--; ) {
        seekChild(time, children[i$1]);
      }
    }
  }
  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      if (tweenLength) {
        tween = filterArray(tweens, function(t) {
          return insTime < t.end;
        })[0] || tween;
      }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = undefined;
      for (var n = 0;n < toNumbersLength; n++) {
        var value = undefined;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0;s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + " ";
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }
  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }
  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }
  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) {
      syncInstanceChildren(insTime);
    }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback("begin");
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback("loopBegin");
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback("changeBegin");
      }
      setCallback("change");
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback("changeComplete");
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) {
      setCallback("update");
    }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback("loopComplete");
          setCallback("complete");
          if (!instance.passThrough && ("Promise" in window)) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback("loopComplete");
        instance.loopBegan = false;
        if (instance.direction === "alternate") {
          toggleInstanceDirection();
        }
      }
    }
  }
  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === "reverse";
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength;i--; ) {
      instance.children[i].reset();
    }
    if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) {
      instance.remaining++;
    }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };
  instance._onDocumentVisibility = resetTime;
  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };
  instance.tick = function(t) {
    now = t;
    if (!startTime) {
      startTime = now;
    }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };
  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };
  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };
  instance.play = function() {
    if (!instance.paused) {
      return;
    }
    if (instance.completed) {
      instance.reset();
    }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };
  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };
  instance.restart = function() {
    instance.reset();
    instance.play();
  };
  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };
  instance.reset();
  if (instance.autoplay) {
    instance.play();
  }
  return instance;
};
var removeTargetsFromAnimations = function(targetsArray, animations) {
  for (var a = animations.length;a--; ) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
};
var removeTargetsFromInstance = function(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length;c--; ) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }
  if (!animations.length && !children.length) {
    instance.pause();
  }
};
var removeTargetsFromActiveInstances = function(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length;i--; ) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
};
var stagger = function(val, params) {
  if (params === undefined)
    params = {};
  var direction = params.direction || "normal";
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === "first";
  var fromCenter = fromIndex === "center";
  var fromLast = fromIndex === "last";
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function(el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }
    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }
    if (fromLast) {
      fromIndex = t - 1;
    }
    if (!values.length) {
      for (var index = 0;index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === "x") {
            value = -distanceX;
          }
          if (axis === "y") {
            value = -distanceY;
          }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) {
        values = values.map(function(val3) {
          return easing(val3 / maxValue) * maxValue;
        });
      }
      if (direction === "reverse") {
        values = values.map(function(val3) {
          return axis ? val3 < 0 ? val3 * -1 : -val3 : Math.abs(maxValue - val3);
        });
      }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
};
var timeline = function(params) {
  if (params === undefined)
    params = {};
  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }
    function passThrough(ins2) {
      ins2.passThrough = true;
    }
    for (var i = 0;i < children.length; i++) {
      passThrough(children[i]);
    }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) {
      tl.play();
    }
    return tl;
  };
  return tl;
};
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: "normal",
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
};
var validTransforms = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"];
var cache = {
  CSS: {},
  springs: {}
};
var is = {
  arr: function(a) {
    return Array.isArray(a);
  },
  obj: function(a) {
    return stringContains(Object.prototype.toString.call(a), "Object");
  },
  pth: function(a) {
    return is.obj(a) && a.hasOwnProperty("totalLength");
  },
  svg: function(a) {
    return a instanceof SVGElement;
  },
  inp: function(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function(a) {
    return a.nodeType || is.svg(a);
  },
  str: function(a) {
    return typeof a === "string";
  },
  fnc: function(a) {
    return typeof a === "function";
  },
  und: function(a) {
    return typeof a === "undefined";
  },
  nil: function(a) {
    return is.und(a) || a === null;
  },
  hex: function(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function(a) {
    return /^rgb/.test(a);
  },
  hsl: function(a) {
    return /^hsl/.test(a);
  },
  col: function(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== "targets" && a !== "keyframes";
  }
};
var bezier = function() {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
  }
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0;i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function bezier2(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }
    var sampleValues = new Float32Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0;i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }
    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;
      for (;currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return function(x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }
      if (x === 0 || x === 1) {
        return x;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  }
  return bezier2;
}();
var penner = function() {
  var eases = { linear: function() {
    return function(t) {
      return t;
    };
  } };
  var functionEasings = {
    Sine: function() {
      return function(t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function() {
      return function(t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function() {
      return function(t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function() {
      return function(t) {
        var pow2, b = 4;
        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {
        }
        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function(amplitude, period) {
      if (amplitude === undefined)
        amplitude = 1;
      if (period === undefined)
        period = 0.5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, 0.1, 2);
      return function(t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  baseEasings.forEach(function(name, i) {
    functionEasings[name] = function() {
      return function(t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function(name) {
    var easeIn = functionEasings[name];
    eases["easeIn" + name] = easeIn;
    eases["easeOut" + name] = function(a, b) {
      return function(t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };
    eases["easeInOut" + name] = function(a, b) {
      return function(t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };
    eases["easeOutIn" + name] = function(a, b) {
      return function(t) {
        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
      };
    };
  });
  return eases;
}();
var setProgressValue = {
  css: function(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function(t, p, v) {
    return t[p] = v;
  },
  transform: function(t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = "";
      transforms.list.forEach(function(value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
};
var instanceID = 0;
var activeInstances = [];
var engine = function() {
  var raf;
  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    var i = 0;
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }
  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) {
      return;
    }
    if (isDocumentHidden()) {
      raf = cancelAnimationFrame(raf);
    } else {
      activeInstances.forEach(function(instance) {
        return instance._onDocumentVisibility();
      });
      engine();
    }
  }
  if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }
  return play;
}();
anime.version = "3.2.1";
anime.speed = 1;
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var anime_default = anime;

// client/components/Animate.ts
var makeOps = function(animations) {
  for (var i in animations) {
    let anim = animations[i];
    if (typeof anim == "function") {
      animations[i] = (el, ...args) => {
        return anim(el.GUIWIDGET, ...args);
      };
    }
    if (typeof anim == "string") {
      let func = anim.match(/(random|stagger)\(([^)]+)\)/);
      let funcs = "random|none".split("|");
      if (func) {
        let args = func[2].match(",") ? func[2].split(",").map((i2) => i2.trim()) : [func[2]];
        args = args.map((g) => isNaN(parseInt(g)) ? g : parseInt(g)).map((g) => {
          if (typeof g == "string") {
            try {
              return JSON.parse(g);
            } catch (e) {
              return g;
            }
          }
          return g;
        });
        animations[i] = funcs.includes(func[1]) ? () => anime_default[func[1]](...args) : anime_default[func[1]](...args);
      }
    }
  }
  console.log(animations);
  return animations;
};
var animateWidgets = function(widgets, animations) {
  animations = makeOps(animations);
  return anime_default({
    targets: widgets.map((widget) => findEl(widget.id).at(0)),
    ...animations
  });
};
var animateWidget = function(widget, animations) {
  return animateWidgets([widget], animations);
};

// client/utils/eventtarget.ts
class WidgetEventTarget {
  _events = [];
  _eventEmitMethod = "normal";
  constructor() {
    this._events = [];
    if (("afterConstruct" in this) && typeof this.afterConstruct == "function") {
      this.afterConstruct();
    }
  }
  on(event, eventCallback) {
    let events = [];
    if (Array.isArray(event))
      events.push(...event);
    else
      events.push(event);
    events.forEach((event2) => {
      this._events.push({ event: event2, eventCallback });
    });
    return this;
  }
  once(event, eventCallback) {
    let events = [];
    if (Array.isArray(event))
      events.push(...event);
    else
      events.push(event);
    events.forEach((event2) => {
      let foundEvent = this._events.find((e) => e.event == event2 && e.eventCallback.toString() == eventCallback.toString());
      if (!foundEvent)
        this._events.push({ event: event2, eventCallback });
    });
    return this;
  }
  off(event, eventCallback) {
    let events = [];
    if (Array.isArray(event))
      events.push(...event);
    else
      events.push(event);
    events.forEach((event2) => {
      if (eventCallback) {
        let foundEvent = this._events.find((e) => e.event == event2 && e.eventCallback == eventCallback);
        if (foundEvent) {
          this._events.splice(this._events.indexOf(foundEvent));
        }
      } else {
        this._events.filter((e) => e.event == event2).forEach((foundEvent) => {
          this._events.splice(this._events.indexOf(foundEvent));
        });
      }
    });
    return this;
  }
  emit(event, eventData, init, raw) {
    if (raw == null)
      raw = this._eventEmitMethod == "raw";
    let data = eventData || null;
    let events = [];
    if (Array.isArray(event))
      events.push(...event);
    else
      events.push(event);
    events.forEach((event2) => {
      this._events.filter((e) => e.event == event2).forEach((event3) => {
        let eventInstance = eventData instanceof CustomEvent ? eventData : new CustomEvent(event3.event, {
          ...init,
          detail: data
        });
        event3.eventCallback(raw ? data : eventInstance, raw ? undefined : data);
      });
    });
    return this;
  }
}

// client/modules/voca.js
var _extends = function() {
  _extends = Object.assign || function(target) {
    for (var i = 1;i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
};
var _slicedToArray = function(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
};
var _toConsumableArray = function(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
};
var _arrayWithoutHoles = function(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length);i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  }
};
var _arrayWithHoles = function(arr) {
  if (Array.isArray(arr))
    return arr;
};
var _iterableToArray = function(iter) {
  if ((Symbol.iterator in Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]")
    return Array.from(iter);
};
var _iterableToArrayLimit = function(arr, i) {
  if (!((Symbol.iterator in Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s;!(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
};
var _nonIterableSpread = function() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
};
var _nonIterableRest = function() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
var isNil = function(value) {
  return value === undefined || value === null;
};
var coerceToBoolean = function(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (isNil(value)) {
    return defaultValue;
  }
  return Boolean(value);
};
var isString = function(subject) {
  return typeof subject === "string";
};
var coerceToString = function(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  if (isNil(value)) {
    return defaultValue;
  }
  if (isString(value)) {
    return value;
  }
  return String(value);
};
var capitalize = function(subject, restToLower) {
  var subjectString = coerceToString(subject);
  var restToLowerCaseBoolean = coerceToBoolean(restToLower);
  if (subjectString === "") {
    return "";
  }
  if (restToLowerCaseBoolean) {
    subjectString = subjectString.toLowerCase();
  }
  return subjectString.substr(0, 1).toUpperCase() + subjectString.substr(1);
};
var lowerCase = function(subject) {
  var subjectString = coerceToString(subject, "");
  return subjectString.toLowerCase();
};
var nilDefault = function(value, defaultValue) {
  return value == null ? defaultValue : value;
};
var toString = function(value) {
  if (isNil(value)) {
    return null;
  }
  if (isString(value)) {
    return value;
  }
  return String(value);
};
var words = function(subject, pattern, flags) {
  var subjectString = coerceToString(subject);
  var patternRegExp;
  if (isNil(pattern)) {
    patternRegExp = REGEXP_EXTENDED_ASCII.test(subjectString) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  } else if (pattern instanceof RegExp) {
    patternRegExp = pattern;
  } else {
    var flagsString = toString(nilDefault(flags, ""));
    patternRegExp = new RegExp(toString(pattern), flagsString);
  }
  return nilDefault(subjectString.match(patternRegExp), []);
};
var wordToCamel = function(word, index) {
  return index === 0 ? lowerCase(word) : capitalize(word, true);
};
var camelCase = function(subject) {
  var subjectString = coerceToString(subject);
  if (subjectString === "") {
    return "";
  }
  return words(subjectString).map(wordToCamel).join("");
};
var decapitalize = function(subject) {
  var subjectString = coerceToString(subject);
  if (subjectString === "") {
    return "";
  }
  return subjectString.substr(0, 1).toLowerCase() + subjectString.substr(1);
};
var kebabCase = function(subject) {
  var subjectString = coerceToString(subject);
  if (subjectString === "") {
    return "";
  }
  return words(subjectString).map(lowerCase).join("-");
};
var snakeCase = function(subject) {
  var subjectString = coerceToString(subject);
  if (subjectString === "") {
    return "";
  }
  return words(subjectString).map(lowerCase).join("_");
};
var upperCase = function(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.toUpperCase();
};
var swapCase = function(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.split("").reduce(swapAndConcat, "");
};
var swapAndConcat = function(swapped, character) {
  var lowerCase2 = character.toLowerCase();
  var upperCase2 = character.toUpperCase();
  return swapped + (character === lowerCase2 ? upperCase2 : lowerCase2);
};
var titleCase = function(subject, noSplit) {
  var subjectString = coerceToString(subject);
  var noSplitArray = Array.isArray(noSplit) ? noSplit : [];
  var wordsRegExp = REGEXP_EXTENDED_ASCII.test(subjectString) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  return subjectString.replace(wordsRegExp, function(word, index) {
    var isNoSplit = index > 0 && noSplitArray.indexOf(subjectString[index - 1]) >= 0;
    return isNoSplit ? word.toLowerCase() : capitalize(word, true);
  });
};
var clipNumber = function(value, downLimit, upLimit) {
  if (value <= downLimit) {
    return downLimit;
  }
  if (value >= upLimit) {
    return upLimit;
  }
  return value;
};
var toInteger = function(value) {
  if (value === Infinity) {
    return MAX_SAFE_INTEGER;
  }
  if (value === (-Infinity)) {
    return -MAX_SAFE_INTEGER;
  }
  return ~~value;
};
var truncate = function(subject, length, end) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? subjectString.length : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var endString = coerceToString(end, "...");
  if (lengthInt >= subjectString.length) {
    return subjectString;
  }
  return subjectString.substr(0, length - endString.length) + endString;
};
var charAt = function(subject, position) {
  var subjectString = coerceToString(subject);
  return subjectString.charAt(position);
};
var isHighSurrogate = function(codePoint) {
  return codePoint >= HIGH_SURROGATE_START && codePoint <= HIGH_SURROGATE_END;
};
var isLowSurrogate = function(codePoint) {
  return codePoint >= LOW_SURROGATE_START && codePoint <= LOW_SURROGATE_END;
};
var getAstralNumberFromSurrogatePair = function(highSurrogate, lowSurrogate) {
  return (highSurrogate - HIGH_SURROGATE_START) * 1024 + lowSurrogate - LOW_SURROGATE_START + 65536;
};
var coerceToNumber = function(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (isNil(value)) {
    return defaultValue;
  }
  if (typeof value === "number") {
    return value;
  }
  return Number(value);
};
var nanDefault = function(value, defaultValue) {
  return value !== value ? defaultValue : value;
};
var codePointAt = function(subject, position) {
  var subjectString = coerceToString(subject);
  var subjectStringLength = subjectString.length;
  var positionNumber = coerceToNumber(position);
  positionNumber = nanDefault(positionNumber, 0);
  if (positionNumber < 0 || positionNumber >= subjectStringLength) {
    return;
  }
  var firstCodePoint = subjectString.charCodeAt(positionNumber);
  var secondCodePoint;
  if (isHighSurrogate(firstCodePoint) && subjectStringLength > positionNumber + 1) {
    secondCodePoint = subjectString.charCodeAt(positionNumber + 1);
    if (isLowSurrogate(secondCodePoint)) {
      return getAstralNumberFromSurrogatePair(firstCodePoint, secondCodePoint);
    }
  }
  return firstCodePoint;
};
var first = function(subject, length) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 1 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  if (subjectString.length <= lengthInt) {
    return subjectString;
  }
  return subjectString.substr(0, lengthInt);
};
var graphemeAt = function(subject, position) {
  var subjectString = coerceToString(subject);
  var positionNumber = coerceToNumber(position);
  var graphemeMatch;
  var graphemeMatchIndex = 0;
  positionNumber = nanDefault(positionNumber, 0);
  while ((graphemeMatch = REGEXP_UNICODE_CHARACTER.exec(subjectString)) !== null) {
    if (graphemeMatchIndex === positionNumber) {
      REGEXP_UNICODE_CHARACTER.lastIndex = 0;
      return graphemeMatch[0];
    }
    graphemeMatchIndex++;
  }
  return "";
};
var last = function(subject, length) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 1 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  if (subjectString.length <= lengthInt) {
    return subjectString;
  }
  return subjectString.substr(subjectString.length - lengthInt, lengthInt);
};
var prune = function(subject, length, end) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? subjectString.length : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var endString = coerceToString(end, "...");
  if (lengthInt >= subjectString.length) {
    return subjectString;
  }
  var pattern = REGEXP_EXTENDED_ASCII.test(subjectString) ? REGEXP_LATIN_WORD : REGEXP_WORD;
  var truncatedLength = 0;
  subjectString.replace(pattern, function(word, offset) {
    var wordInsertLength = offset + word.length;
    if (wordInsertLength <= lengthInt - endString.length) {
      truncatedLength = wordInsertLength;
    }
  });
  return subjectString.substr(0, truncatedLength) + endString;
};
var slice = function(subject, start, end) {
  return coerceToString(subject).slice(start, end);
};
var substr = function(subject, start, length) {
  return coerceToString(subject).substr(start, length);
};
var substring = function(subject, start, end) {
  return coerceToString(subject).substring(start, end);
};
var count = function(subject) {
  return coerceToString(subject).length;
};
var countGrapheme = function(subject) {
  return coerceToString(subject).replace(REGEXP_COMBINING_MARKS, "*").replace(REGEXP_SURROGATE_PAIRS, "*").length;
};
var countSubstrings = function(subject, substring2) {
  var subjectString = coerceToString(subject);
  var substringString = coerceToString(substring2);
  var substringLength = substringString.length;
  var count2 = 0;
  var matchIndex = 0;
  if (subjectString === "" || substringString === "") {
    return count2;
  }
  do {
    matchIndex = subjectString.indexOf(substringString, matchIndex);
    if (matchIndex !== -1) {
      count2++;
      matchIndex += substringLength;
    }
  } while (matchIndex !== -1);
  return count2;
};
var countWhere = function(subject, predicate, context) {
  var subjectString = coerceToString(subject);
  if (subjectString === "" || typeof predicate !== "function") {
    return 0;
  }
  var predicateWithContext = predicate.bind(context);
  return reduce.call(subjectString, function(countTruthy, character, index) {
    return predicateWithContext(character, index, subjectString) ? countTruthy + 1 : countTruthy;
  }, 0);
};
var countWords = function(subject, pattern, flags) {
  return words(subject, pattern, flags).length;
};
var ReplacementIndex = function() {
  this.index = 0;
};
var repeat = function(subject, times) {
  var subjectString = coerceToString(subject);
  var timesInt = isNil(times) ? 1 : clipNumber(toInteger(times), 0, MAX_SAFE_INTEGER);
  var repeatString = "";
  while (timesInt) {
    if (timesInt & 1) {
      repeatString += subjectString;
    }
    if (timesInt > 1) {
      subjectString += subjectString;
    }
    timesInt >>= 1;
  }
  return repeatString;
};
var buildPadding = function(padCharacters, length) {
  var padStringRepeat = toInteger(length / padCharacters.length);
  var padStringRest = length % padCharacters.length;
  return repeat(padCharacters, padStringRepeat + padStringRest).substr(0, length);
};
var padLeft = function(subject, length, pad) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 0 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var padString = coerceToString(pad, " ");
  if (lengthInt <= subjectString.length) {
    return subjectString;
  }
  return buildPadding(padString, lengthInt - subjectString.length) + subjectString;
};
var padRight = function(subject, length, pad) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 0 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var padString = coerceToString(pad, " ");
  if (lengthInt <= subjectString.length) {
    return subjectString;
  }
  return subjectString + buildPadding(padString, lengthInt - subjectString.length);
};
var alignAndPad = function(subject, conversion) {
  var width = conversion.width;
  if (isNil(width) || subject.length >= width) {
    return subject;
  }
  var padType = conversion.alignmentSpecifier === LITERAL_MINUS ? padRight : padLeft;
  return padType(subject, width, conversion.getPaddingCharacter());
};
var addSignToFormattedNumber = function(replacementNumber, formattedReplacement, conversion) {
  if (conversion.signSpecifier === LITERAL_PLUS && replacementNumber >= 0) {
    formattedReplacement = LITERAL_PLUS + formattedReplacement;
  }
  return formattedReplacement;
};
var float = function(replacement, conversion) {
  var replacementNumber = parseFloat(replacement);
  var formattedReplacement;
  if (isNaN(replacementNumber)) {
    replacementNumber = 0;
  }
  var precision = coerceToNumber(conversion.precision, 6);
  switch (conversion.typeSpecifier) {
    case TYPE_FLOAT:
      formattedReplacement = replacementNumber.toFixed(precision);
      break;
    case TYPE_FLOAT_SCIENTIFIC:
      formattedReplacement = replacementNumber.toExponential(precision);
      break;
    case TYPE_FLOAT_SCIENTIFIC_UPPERCASE:
      formattedReplacement = replacementNumber.toExponential(precision).toUpperCase();
      break;
    case TYPE_FLOAT_SHORT:
    case TYPE_FLOAT_SHORT_UPPERCASE:
      formattedReplacement = formatFloatAsShort(replacementNumber, precision, conversion);
      break;
  }
  formattedReplacement = addSignToFormattedNumber(replacementNumber, formattedReplacement, conversion);
  return coerceToString(formattedReplacement);
};
var formatFloatAsShort = function(replacementNumber, precision, conversion) {
  if (replacementNumber === 0) {
    return "0";
  }
  var nonZeroPrecision = precision === 0 ? 1 : precision;
  var formattedReplacement = replacementNumber.toPrecision(nonZeroPrecision).replace(REGEXP_TRAILING_ZEROS, "");
  if (conversion.typeSpecifier === TYPE_FLOAT_SHORT_UPPERCASE) {
    formattedReplacement = formattedReplacement.toUpperCase();
  }
  return formattedReplacement;
};
var integerBase = function(replacement, conversion) {
  var integer = parseInt(replacement);
  if (isNaN(integer)) {
    integer = 0;
  }
  integer = integer >>> 0;
  switch (conversion.typeSpecifier) {
    case TYPE_INTEGER_ASCII_CHARACTER:
      integer = String.fromCharCode(integer);
      break;
    case TYPE_INTEGER_BINARY:
      integer = integer.toString(RADIX_BINARY);
      break;
    case TYPE_INTEGER_OCTAL:
      integer = integer.toString(RADIX_OCTAL);
      break;
    case TYPE_INTEGER_HEXADECIMAL:
      integer = integer.toString(RADIX_HEXADECIMAL);
      break;
    case TYPE_INTEGER_HEXADECIMAL_UPPERCASE:
      integer = integer.toString(RADIX_HEXADECIMAL).toUpperCase();
      break;
  }
  return coerceToString(integer);
};
var integerDecimal = function(replacement, conversion) {
  var integer = parseInt(replacement);
  if (isNaN(integer)) {
    integer = 0;
  }
  return addSignToFormattedNumber(integer, toString(integer), conversion);
};
var stringFormat = function(replacement, conversion) {
  var formattedReplacement = replacement;
  var precision = conversion.precision;
  if (!isNil(precision) && formattedReplacement.length > precision) {
    formattedReplacement = truncate(formattedReplacement, precision, "");
  }
  return formattedReplacement;
};
var compute = function(replacement, conversion) {
  var formatFunction;
  switch (conversion.typeSpecifier) {
    case TYPE_STRING:
      formatFunction = stringFormat;
      break;
    case TYPE_INTEGER_DECIMAL:
    case TYPE_INTEGER:
      formatFunction = integerDecimal;
      break;
    case TYPE_INTEGER_ASCII_CHARACTER:
    case TYPE_INTEGER_BINARY:
    case TYPE_INTEGER_OCTAL:
    case TYPE_INTEGER_HEXADECIMAL:
    case TYPE_INTEGER_HEXADECIMAL_UPPERCASE:
    case TYPE_INTEGER_UNSIGNED_DECIMAL:
      formatFunction = integerBase;
      break;
    case TYPE_FLOAT:
    case TYPE_FLOAT_SCIENTIFIC:
    case TYPE_FLOAT_SCIENTIFIC_UPPERCASE:
    case TYPE_FLOAT_SHORT:
    case TYPE_FLOAT_SHORT_UPPERCASE:
      formatFunction = float;
      break;
  }
  var formattedString = formatFunction(replacement, conversion);
  return alignAndPad(formattedString, conversion);
};
var ConversionSpecification = function(properties) {
  this.percent = properties.percent;
  this.signSpecifier = properties.signSpecifier;
  this.paddingSpecifier = properties.paddingSpecifier;
  this.alignmentSpecifier = properties.alignmentSpecifier;
  this.width = properties.width;
  this.precision = properties.precision;
  this.typeSpecifier = properties.typeSpecifier;
};
var validate = function(index, replacementsLength, conversion) {
  if (isNil(conversion.typeSpecifier)) {
    throw new Error("sprintf(): Unknown type specifier");
  }
  if (index > replacementsLength - 1) {
    throw new Error("sprintf(): Too few arguments");
  }
  if (index < 0) {
    throw new Error("sprintf(): Argument number must be greater than zero");
  }
};
var match = function(replacementIndex, replacements, conversionSpecification, percent, position, signSpecifier, paddingSpecifier, alignmentSpecifier, widthSpecifier, precisionSpecifier, typeSpecifier) {
  var conversion = new ConversionSpecification({
    percent,
    signSpecifier,
    paddingSpecifier,
    alignmentSpecifier,
    width: coerceToNumber(widthSpecifier, null),
    precision: coerceToNumber(precisionSpecifier, null),
    typeSpecifier
  });
  if (conversion.isPercentLiteral()) {
    return conversionSpecification.slice(1);
  }
  var actualReplacementIndex = replacementIndex.getIndexByPosition(position);
  replacementIndex.incrementOnEmptyPosition(position);
  validate(actualReplacementIndex, replacements.length, conversion);
  return compute(replacements[actualReplacementIndex], conversion);
};
var sprintf = function(format) {
  var formatString = coerceToString(format);
  if (formatString === "") {
    return formatString;
  }
  for (var _len = arguments.length, replacements = new Array(_len > 1 ? _len - 1 : 0), _key = 1;_key < _len; _key++) {
    replacements[_key - 1] = arguments[_key];
  }
  var boundReplacementMatch = match.bind(undefined, new ReplacementIndex, replacements);
  return formatString.replace(REGEXP_CONVERSION_SPECIFICATION, boundReplacementMatch);
};
var vprintf = function(format, replacements) {
  return sprintf.apply(undefined, [format].concat(_toConsumableArray(nilDefault(replacements, []))));
};
var replaceSpecialCharacter = function(character) {
  return escapeCharactersMap[character];
};
var escapeHtml = function(subject) {
  return coerceToString(subject).replace(REGEXP_HTML_SPECIAL_CHARACTERS, replaceSpecialCharacter);
};
var escapeRegExp = function(subject) {
  return coerceToString(subject).replace(REGEXP_SPECIAL_CHARACTERS, "\\$&");
};
var reduceUnescapedString = function(string, key) {
  return string.replace(unescapeCharactersMap[key], key);
};
var unescapeHtml = function(subject) {
  var subjectString = coerceToString(subject);
  return characters.reduce(reduceUnescapedString, subjectString);
};
var indexOf = function(subject, search, fromIndex) {
  var subjectString = coerceToString(subject);
  return subjectString.indexOf(search, fromIndex);
};
var lastIndexOf = function(subject, search, fromIndex) {
  var subjectString = coerceToString(subject);
  return subjectString.lastIndexOf(search, fromIndex);
};
var search = function(subject, pattern, fromIndex) {
  var subjectString = coerceToString(subject);
  var fromIndexNumber = isNil(fromIndex) ? 0 : clipNumber(toInteger(fromIndex), 0, subjectString.length);
  var matchIndex = subjectString.substr(fromIndexNumber).search(pattern);
  if (matchIndex !== -1 && !isNaN(fromIndexNumber)) {
    matchIndex += fromIndexNumber;
  }
  return matchIndex;
};
var insert = function(subject, toInsert, position) {
  var subjectString = coerceToString(subject);
  var toInsertString = coerceToString(toInsert);
  var positionNumber = coerceToNumber(position);
  if (positionNumber < 0 || positionNumber > subjectString.length || toInsertString === "") {
    return subjectString;
  }
  return subjectString.slice(0, positionNumber) + toInsertString + subjectString.slice(positionNumber);
};
var getDiacriticsMap = function() {
  if (diacriticsMap !== null) {
    return diacriticsMap;
  }
  diacriticsMap = {};
  Object.keys(diacritics).forEach(function(key) {
    var characters = diacritics[key];
    for (var index = 0;index < characters.length; index++) {
      var character = characters[index];
      diacriticsMap[character] = key;
    }
  });
  return diacriticsMap;
};
var getLatinCharacter = function(character) {
  var characterWithoutDiacritic = getDiacriticsMap()[character];
  return characterWithoutDiacritic ? characterWithoutDiacritic : character;
};
var removeCombiningMarks = function(character, cleanCharacter) {
  return cleanCharacter;
};
var latinise = function(subject) {
  var subjectString = coerceToString(subject);
  if (subjectString === "") {
    return "";
  }
  return subjectString.replace(REGEXP_NON_LATIN, getLatinCharacter).replace(REGEXP_COMBINING_MARKS, removeCombiningMarks);
};
var pad = function(subject, length, pad2) {
  var subjectString = coerceToString(subject);
  var lengthInt = isNil(length) ? 0 : clipNumber(toInteger(length), 0, MAX_SAFE_INTEGER);
  var padString = coerceToString(pad2, " ");
  if (lengthInt <= subjectString.length) {
    return subjectString;
  }
  var paddingLength = lengthInt - subjectString.length;
  var paddingSideLength = toInteger(paddingLength / 2);
  var paddingSideRemainingLength = paddingLength % 2;
  return buildPadding(padString, paddingSideLength) + subjectString + buildPadding(padString, paddingSideLength + paddingSideRemainingLength);
};
var replace = function(subject, search2, replace2) {
  var subjectString = coerceToString(subject);
  return subjectString.replace(search2, replace2);
};
var replaceAll = function(subject, search2, replace2) {
  var subjectString = coerceToString(subject);
  if (search2 instanceof RegExp) {
    if (search2.flags.indexOf("g") === -1) {
      throw new TypeError("search argument is a non-global regular expression");
    }
    return subjectString.replace(search2, replace2);
  }
  var searchString = coerceToString(search2);
  var isFunctionalReplace = typeof replace2 === "function";
  if (!isFunctionalReplace) {
    replace2 = coerceToString(replace2);
  }
  var searchLength = searchString.length;
  if (searchLength === 0) {
    return replaceAll(subject, /(?:)/g, replace2);
  }
  var advanceBy = searchLength > 1 ? searchLength : 1;
  var matchPositions = [];
  var position = subjectString.indexOf(searchString, 0);
  while (position !== -1) {
    matchPositions.push(position);
    position = subjectString.indexOf(searchString, position + advanceBy);
  }
  var endOfLastMatch = 0;
  var result = "";
  for (var i = 0;i < matchPositions.length; i++) {
    var _position = matchPositions[i];
    var replacement = replace2;
    if (isFunctionalReplace) {
      replacement = coerceToString(replace2.call(undefined, searchString, _position, subjectString));
    }
    result += subjectString.slice(endOfLastMatch, _position) + replacement;
    endOfLastMatch = _position + searchLength;
  }
  if (endOfLastMatch < subjectString.length) {
    result += subjectString.slice(endOfLastMatch);
  }
  return result;
};
var reverse = function(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.split("").reverse().join("");
};
var reverseGrapheme = function(subject) {
  var subjectString = coerceToString(subject);
  subjectString = subjectString.replace(REGEXP_COMBINING_MARKS, function($0, $1, $2) {
    return reverseGrapheme($2) + $1;
  }).replace(REGEXP_SURROGATE_PAIRS, "$2$1");
  var reversedString = "";
  var index = subjectString.length;
  while (index--) {
    reversedString += subjectString.charAt(index);
  }
  return reversedString;
};
var slugify = function(subject) {
  var subjectString = coerceToString(subject);
  if (subjectString === "") {
    return "";
  }
  var cleanSubjectString = latinise(subjectString).replace(REGEXP_NON_LATIN, "-");
  return kebabCase(cleanSubjectString);
};
var splice = function(subject, start, deleteCount, toAdd) {
  var subjectString = coerceToString(subject);
  var toAddString = coerceToString(toAdd);
  var startPosition = coerceToNumber(start);
  if (startPosition < 0) {
    startPosition = subjectString.length + startPosition;
    if (startPosition < 0) {
      startPosition = 0;
    }
  } else if (startPosition > subjectString.length) {
    startPosition = subjectString.length;
  }
  var deleteCountNumber = coerceToNumber(deleteCount, subjectString.length - startPosition);
  if (deleteCountNumber < 0) {
    deleteCountNumber = 0;
  }
  return subjectString.slice(0, startPosition) + toAddString + subjectString.slice(startPosition + deleteCountNumber);
};
var tr = function(subject, from, to) {
  var subjectString = coerceToString(subject);
  var keys;
  var values;
  if (isString(from) && isString(to)) {
    keys = from.split("");
    values = to.split("");
  } else {
    var _extractKeysAndValues = extractKeysAndValues(nilDefault(from, {}));
    var _extractKeysAndValues2 = _slicedToArray(_extractKeysAndValues, 2);
    keys = _extractKeysAndValues2[0];
    values = _extractKeysAndValues2[1];
  }
  var keysLength = keys.length;
  if (keysLength === 0) {
    return subjectString;
  }
  var result = "";
  var valuesLength = values.length;
  for (var index = 0;index < subjectString.length; index++) {
    var isMatch = false;
    var matchValue = undefined;
    for (var keyIndex = 0;keyIndex < keysLength && keyIndex < valuesLength; keyIndex++) {
      var key = keys[keyIndex];
      if (subjectString.substr(index, key.length) === key) {
        isMatch = true;
        matchValue = values[keyIndex];
        index = index + key.length - 1;
        break;
      }
    }
    result += isMatch ? matchValue : subjectString[index];
  }
  return result;
};
var extractKeysAndValues = function(object) {
  var keys = Object.keys(object);
  var values = keys.sort(sortStringByLength).map(function(key) {
    return object[key];
  });
  return [keys, values];
};
var sortStringByLength = function(str1, str2) {
  if (str1.length === str2.length) {
    return 0;
  }
  return str1.length < str2.length ? 1 : -1;
};
var includes = function(subject, search2, position) {
  var subjectString = coerceToString(subject);
  var searchString = toString(search2);
  if (searchString === null) {
    return false;
  }
  if (searchString === "") {
    return true;
  }
  position = isNil(position) ? 0 : clipNumber(toInteger(position), 0, subjectString.length);
  return subjectString.indexOf(searchString, position) !== -1;
};
var trimLeft = function(subject, whitespace) {
  var subjectString = coerceToString(subject);
  if (whitespace === "" || subjectString === "") {
    return subjectString;
  }
  var whitespaceString = toString(whitespace);
  if (isNil(whitespaceString)) {
    return subjectString.replace(REGEXP_TRIM_LEFT, "");
  }
  var matchWhitespace = true;
  return reduce$1.call(subjectString, function(trimmed, character) {
    if (matchWhitespace && includes(whitespaceString, character)) {
      return trimmed;
    }
    matchWhitespace = false;
    return trimmed + character;
  }, "");
};
var trimRight = function(subject, whitespace) {
  var subjectString = coerceToString(subject);
  if (whitespace === "" || subjectString === "") {
    return subjectString;
  }
  var whitespaceString = toString(whitespace);
  if (isNil(whitespaceString)) {
    return subjectString.replace(REGEXP_TRIM_RIGHT, "");
  }
  var matchWhitespace = true;
  return reduceRight.call(subjectString, function(trimmed, character) {
    if (matchWhitespace && includes(whitespaceString, character)) {
      return trimmed;
    }
    matchWhitespace = false;
    return character + trimmed;
  }, "");
};
var trim = function(subject, whitespace) {
  var subjectString = coerceToString(subject);
  if (whitespace === "" || subjectString === "") {
    return subjectString;
  }
  var whitespaceString = toString(whitespace);
  if (isNil(whitespaceString)) {
    return subjectString.trim();
  }
  return trimRight(trimLeft(subjectString, whitespaceString), whitespaceString);
};
var wordWrap = function(subject) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var subjectString = coerceToString(subject);
  var _determineOptions = determineOptions(options), width = _determineOptions.width, newLine = _determineOptions.newLine, indent = _determineOptions.indent, cut = _determineOptions.cut;
  if (subjectString === "" || width <= 0) {
    return indent;
  }
  var subjectLength = subjectString.length;
  var substring2 = subjectString.substring.bind(subjectString);
  var offset = 0;
  var wrappedLine = "";
  while (subjectLength - offset > width) {
    if (subjectString[offset] === " ") {
      offset++;
      continue;
    }
    var spaceToWrapAt = subjectString.lastIndexOf(" ", width + offset);
    if (spaceToWrapAt >= offset) {
      wrappedLine += indent + substring2(offset, spaceToWrapAt) + newLine;
      offset = spaceToWrapAt + 1;
    } else {
      if (cut) {
        wrappedLine += indent + substring2(offset, width + offset) + newLine;
        offset += width;
      } else {
        spaceToWrapAt = subjectString.indexOf(" ", width + offset);
        if (spaceToWrapAt >= 0) {
          wrappedLine += indent + substring2(offset, spaceToWrapAt) + newLine;
          offset = spaceToWrapAt + 1;
        } else {
          wrappedLine += indent + substring2(offset);
          offset = subjectLength;
        }
      }
    }
  }
  if (offset < subjectLength) {
    wrappedLine += indent + substring2(offset);
  }
  return wrappedLine;
};
var determineOptions = function(options) {
  return {
    width: coerceToNumber(options[OPTION_WIDTH], 75),
    newLine: coerceToString(options[OPTION_NEW_LINE], "\n"),
    indent: coerceToString(options[OPTION_INDENT], ""),
    cut: coerceToBoolean(options[OPTION_CUT], false)
  };
};
var endsWith = function(subject, end, position) {
  if (isNil(end)) {
    return false;
  }
  var subjectString = coerceToString(subject);
  var endString = coerceToString(end);
  if (endString === "") {
    return true;
  }
  position = isNil(position) ? subjectString.length : clipNumber(toInteger(position), 0, subjectString.length);
  position -= endString.length;
  var lastIndex = subjectString.indexOf(endString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var isAlpha = function(subject) {
  var subjectString = coerceToString(subject);
  return REGEXP_ALPHA.test(subjectString);
};
var isAlphaDigit = function(subject) {
  var subjectString = coerceToString(subject);
  return REGEXP_ALPHA_DIGIT.test(subjectString);
};
var isBlank = function(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.trim().length === 0;
};
var isDigit = function(subject) {
  var subjectString = coerceToString(subject);
  return REGEXP_DIGIT.test(subjectString);
};
var isEmpty = function(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.length === 0;
};
var isLowerCase = function(subject) {
  var valueString = coerceToString(subject);
  return isAlpha(valueString) && valueString.toLowerCase() === valueString;
};
var isNumeric = function(subject) {
  var valueNumeric = typeof subject === "object" && !isNil(subject) ? Number(subject) : subject;
  return (typeof valueNumeric === "number" || typeof valueNumeric === "string") && !isNaN(valueNumeric - parseFloat(valueNumeric));
};
var isUpperCase = function(subject) {
  var subjectString = coerceToString(subject);
  return isAlpha(subjectString) && subjectString.toUpperCase() === subjectString;
};
var matches = function(subject, pattern, flags) {
  var subjectString = coerceToString(subject);
  var flagsString = coerceToString(flags);
  var patternString;
  if (!(pattern instanceof RegExp)) {
    patternString = toString(pattern);
    if (patternString === null) {
      return false;
    }
    pattern = new RegExp(patternString, flagsString);
  }
  return pattern.test(subjectString);
};
var startsWith = function(subject, start, position) {
  var subjectString = coerceToString(subject);
  var startString = toString(start);
  if (startString === null) {
    return false;
  }
  if (startString === "") {
    return true;
  }
  position = isNil(position) ? 0 : clipNumber(toInteger(position), 0, subjectString.length);
  return subjectString.substr(position, startString.length) === startString;
};
var chars = function(subject) {
  var subjectString = coerceToString(subject);
  return subjectString.split("");
};
var codePoints = function(subject) {
  var subjectString = coerceToString(subject);
  var subjectStringLength = subjectString.length;
  var codePointArray = [];
  var index = 0;
  var codePointNumber;
  while (index < subjectStringLength) {
    codePointNumber = codePointAt(subjectString, index);
    codePointArray.push(codePointNumber);
    index += codePointNumber > 65535 ? 2 : 1;
  }
  return codePointArray;
};
var graphemes = function(subject) {
  var subjectString = coerceToString(subject);
  return nilDefault(subjectString.match(REGEXP_UNICODE_CHARACTER), []);
};
var split = function(subject, separator, limit) {
  var subjectString = coerceToString(subject);
  return subjectString.split(separator, limit);
};
var trim$1 = function(subject) {
  var subjectString = coerceToString(subject);
  if (subjectString === "") {
    return "";
  }
  if (subjectString[0] === BYRE_ORDER_MARK) {
    return subjectString.substring(1);
  }
  return subjectString;
};
var hasSubstringAtIndex = function(subject, substring2, index) {
  var lookBehind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var indexOffset = 0;
  if (lookBehind) {
    indexOffset = -substring2.length + 1;
  }
  var extractedSubstring = subject.substr(index + indexOffset, substring2.length);
  return extractedSubstring.toLowerCase() === substring2;
};
var parseTagList = function(tags) {
  var tagsList = [];
  var match2;
  while ((match2 = REGEXP_TAG_LIST.exec(tags)) !== null) {
    tagsList.push(match2[1]);
  }
  return tagsList;
};
var parseTagName = function(tagContent) {
  var state = STATE_START_TAG;
  var tagName = "";
  var index = 0;
  while (state !== STATE_DONE) {
    var char = tagContent[index++].toLowerCase();
    switch (char) {
      case "<":
        break;
      case ">":
        state = STATE_DONE;
        break;
      default:
        if (REGEXP_WHITESPACE.test(char)) {
          if (state === STATE_NON_WHITESPACE) {
            state = STATE_DONE;
          }
        } else {
          if (state === STATE_START_TAG) {
            state = STATE_NON_WHITESPACE;
          }
          if (char !== "/") {
            tagName += char;
          }
        }
        break;
    }
  }
  return tagName;
};
var trim$2 = function(subject, allowableTags, replacement) {
  subject = coerceToString(subject);
  if (subject === "") {
    return "";
  }
  if (!Array.isArray(allowableTags)) {
    var allowableTagsString = coerceToString(allowableTags);
    allowableTags = allowableTagsString === "" ? [] : parseTagList(allowableTagsString);
  }
  var replacementString = coerceToString(replacement);
  var length = subject.length;
  var hasAllowableTags = allowableTags.length > 0;
  var hasSubstring = hasSubstringAtIndex.bind(null, subject);
  var state = STATE_OUTPUT;
  var depth = 0;
  var output = "";
  var tagContent = "";
  var quote = null;
  for (var index = 0;index < length; index++) {
    var char = subject[index];
    var advance = false;
    switch (char) {
      case "<":
        if (quote) {
          break;
        }
        if (hasSubstring("< ", index, false)) {
          advance = true;
          break;
        }
        if (state === STATE_OUTPUT) {
          advance = true;
          state = STATE_HTML;
          break;
        }
        if (state === STATE_HTML) {
          depth++;
          break;
        }
        advance = true;
        break;
      case "!":
        if (state === STATE_HTML && hasSubstring("<!", index)) {
          state = STATE_EXCLAMATION;
          break;
        }
        advance = true;
        break;
      case "-":
        if (state === STATE_EXCLAMATION && hasSubstring("!--", index)) {
          state = STATE_COMMENT;
          break;
        }
        advance = true;
        break;
      case '"':
      case "'":
        if (state === STATE_HTML) {
          if (quote === char) {
            quote = null;
          } else if (!quote) {
            quote = char;
          }
        }
        advance = true;
        break;
      case "E":
      case "e":
        if (state === STATE_EXCLAMATION && hasSubstring("doctype", index)) {
          state = STATE_HTML;
          break;
        }
        advance = true;
        break;
      case ">":
        if (depth > 0) {
          depth--;
          break;
        }
        if (quote) {
          break;
        }
        if (state === STATE_HTML) {
          quote = null;
          state = STATE_OUTPUT;
          if (hasAllowableTags) {
            tagContent += ">";
            var tagName = parseTagName(tagContent);
            if (allowableTags.indexOf(tagName.toLowerCase()) !== -1) {
              output += tagContent;
            } else {
              output += replacementString;
            }
            tagContent = "";
          } else {
            output += replacementString;
          }
          break;
        }
        if (state === STATE_EXCLAMATION || state === STATE_COMMENT && hasSubstring("-->", index)) {
          quote = null;
          state = STATE_OUTPUT;
          tagContent = "";
          break;
        }
        advance = true;
        break;
      default:
        advance = true;
    }
    if (advance) {
      switch (state) {
        case STATE_OUTPUT:
          output += char;
          break;
        case STATE_HTML:
          if (hasAllowableTags) {
            tagContent += char;
          }
          break;
      }
    }
  }
  return output;
};
var getGlobalObject = function() {
  if (globalObject !== null) {
    return globalObject;
  }
  if (typeof global === "object" && global.Object === Object) {
    globalObject = global;
  } else if (typeof self === "object" && self.Object === Object) {
    globalObject = self;
  } else {
    globalObject = new Function("return this")();
  }
  return globalObject;
};
var noConflict = function() {
  if (this === globalObject$1.v) {
    globalObject$1.v = previousV;
  }
  return this;
};
var ChainWrapper = function(subject, explicitChain) {
  this._wrappedValue = subject;
  this._explicitChain = explicitChain;
};
var makeFunctionChainable = function(functionInstance) {
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var result = functionInstance.apply(undefined, [this._wrappedValue].concat(args));
    if (this._explicitChain || typeof result === "string") {
      return new ChainWrapper(result, this._explicitChain);
    } else {
      return result;
    }
  };
};
var chain = function(subject) {
  return new ChainWrapper(subject, true);
};
var Voca = function(subject) {
  return new ChainWrapper(subject, false);
};
var digit = "\\d";
var whitespace = "\\s\\uFEFF\\xA0";
var highSurrogate = "\\uD800-\\uDBFF";
var lowSurrogate = "\\uDC00-\\uDFFF";
var diacriticalMark = "\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F";
var base = "\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF";
var REGEXP_COMBINING_MARKS = new RegExp("([" + base + "]|[" + highSurrogate + "][" + lowSurrogate + "]|[" + highSurrogate + "](?![" + lowSurrogate + "])|(?:[^" + highSurrogate + "]|^)[" + lowSurrogate + "])([" + diacriticalMark + "]+)", "g");
var REGEXP_SURROGATE_PAIRS = new RegExp("([" + highSurrogate + "])([" + lowSurrogate + "])", "g");
var REGEXP_UNICODE_CHARACTER = new RegExp("((?:[" + base + "]|[" + highSurrogate + "][" + lowSurrogate + "]|[" + highSurrogate + "](?![" + lowSurrogate + "])|(?:[^" + highSurrogate + "]|^)[" + lowSurrogate + "])(?:[" + diacriticalMark + "]+))|([" + highSurrogate + "][" + lowSurrogate + "])|([\\n\\r\\u2028\\u2029])|(.)", "g");
var REGEXP_WHITESPACE = new RegExp("[" + whitespace + "]");
var REGEXP_TRIM_LEFT = new RegExp("^[" + whitespace + "]+");
var REGEXP_TRIM_RIGHT = new RegExp("[" + whitespace + "]+$");
var REGEXP_DIGIT = new RegExp("^" + digit + "+$");
var REGEXP_SPECIAL_CHARACTERS = /[-[\]{}()*+!<=:?./\\^$|#,]/g;
var REGEXP_NON_LATIN = /[^A-Za-z0-9]/g;
var REGEXP_HTML_SPECIAL_CHARACTERS = /[<>&"'`]/g;
var REGEXP_CONVERSION_SPECIFICATION = /(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g;
var REGEXP_TRAILING_ZEROS = /\.?0+$/g;
var REGEXP_TAG_LIST = /<([A-Za-z0-9]+)>/g;
var generalPunctuationBlock = "\\u2000-\\u206F";
var nonCharacter = "\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7";
var dingbatBlock = "\\u2700-\\u27BF";
var lowerCaseLetter = "a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F";
var upperCaseLetter = "\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e";
var REGEXP_WORD = new RegExp("(?:[" + upperCaseLetter + "][" + diacriticalMark + "]*)?(?:[" + lowerCaseLetter + "][" + diacriticalMark + "]*)+|(?:[" + upperCaseLetter + "][" + diacriticalMark + "]*)+(?![" + lowerCaseLetter + "])|[" + digit + "]+|[" + dingbatBlock + "]|[^" + nonCharacter + generalPunctuationBlock + whitespace + "]+", "g");
var REGEXP_LATIN_WORD = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
var REGEXP_ALPHA = new RegExp("^(?:[" + lowerCaseLetter + upperCaseLetter + "][" + diacriticalMark + "]*)+$");
var REGEXP_ALPHA_DIGIT = new RegExp("^((?:[" + lowerCaseLetter + upperCaseLetter + "][" + diacriticalMark + "]*)|[" + digit + "])+$");
var REGEXP_EXTENDED_ASCII = /^[\x01-\xFF]*$/;
var MAX_SAFE_INTEGER = 9007199254740991;
var HIGH_SURROGATE_START = 55296;
var HIGH_SURROGATE_END = 56319;
var LOW_SURROGATE_START = 56320;
var LOW_SURROGATE_END = 57343;
var reduce = Array.prototype.reduce;
ReplacementIndex.prototype.increment = function() {
  this.index++;
};
ReplacementIndex.prototype.incrementOnEmptyPosition = function(position) {
  if (isNil(position)) {
    this.increment();
  }
};
ReplacementIndex.prototype.getIndexByPosition = function(position) {
  return isNil(position) ? this.index : position - 1;
};
var TYPE_INTEGER = "i";
var TYPE_INTEGER_BINARY = "b";
var TYPE_INTEGER_ASCII_CHARACTER = "c";
var TYPE_INTEGER_DECIMAL = "d";
var TYPE_INTEGER_OCTAL = "o";
var TYPE_INTEGER_UNSIGNED_DECIMAL = "u";
var TYPE_INTEGER_HEXADECIMAL = "x";
var TYPE_INTEGER_HEXADECIMAL_UPPERCASE = "X";
var TYPE_FLOAT_SCIENTIFIC = "e";
var TYPE_FLOAT_SCIENTIFIC_UPPERCASE = "E";
var TYPE_FLOAT = "f";
var TYPE_FLOAT_SHORT = "g";
var TYPE_FLOAT_SHORT_UPPERCASE = "G";
var TYPE_STRING = "s";
var LITERAL_SINGLE_QUOTE = "'";
var LITERAL_PLUS = "+";
var LITERAL_MINUS = "-";
var LITERAL_PERCENT_SPECIFIER = "%%";
var RADIX_BINARY = 2;
var RADIX_OCTAL = 8;
var RADIX_HEXADECIMAL = 16;
ConversionSpecification.prototype.isPercentLiteral = function() {
  return LITERAL_PERCENT_SPECIFIER === this.percent;
};
ConversionSpecification.prototype.getPaddingCharacter = function() {
  var paddingCharacter = nilDefault(this.paddingSpecifier, " ");
  if (paddingCharacter.length === 2 && paddingCharacter[0] === LITERAL_SINGLE_QUOTE) {
    paddingCharacter = paddingCharacter[1];
  }
  return paddingCharacter;
};
var escapeCharactersMap = {
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};
var unescapeCharactersMap = {
  "<": /(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,
  ">": /(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,
  "&": /(&amp;)|(&#x0*26;)|(&#0*38;)/gi,
  '"': /(&quot;)|(&#x0*22;)|(&#0*34;)/gi,
  "'": /(&#x0*27;)|(&#0*39;)/gi,
  "`": /(&#x0*60;)|(&#0*96;)/gi
};
var characters = Object.keys(unescapeCharactersMap);
var diacritics = {
  "3": "\u039E\u03BE",
  "8": "\u0398\u03B8",
  A: "A\xC0\xC1\xC2\xC3\xC4\xC5\u0100\u0102\u0104\u01CD\u01DE\u01E0\u01FA\u0200\u0202\u0226\u023A\u0386\u0391\u0410",
  B: "B\u0181\u0182\u0243\u0392\u0411",
  C: "C\xC7\u0106\u0108\u010A\u010C\u0187\u023B\u0426",
  D: "D\u010E\u0110\u0189\u018A\u018B\xD0\u0394\u0414",
  E: "E\xC8\xC9\xCA\xCB\u0112\u0114\u0116\u0118\u011A\u018E\u0190\u0204\u0206\u0228\u0388\u0395\u0415\u042D",
  F: "F\u0191\u03A6\u0424",
  G: "G\u011C\u011E\u0120\u0122\u0193\u01E4\u01E6\u01F4\u0393\u0413\u0490",
  H: "H\u0124\u0126\u021E\u0389\u0397\u0425",
  I: "I\xCC\xCD\xCE\xCF\u0128\u012A\u012C\u012E\u0130\u0197\u01CF\u0208\u020A\u038A\u0399\u03AA\u0406\u0418",
  J: "J\u0134\u0248\u0419",
  K: "K\u0136\u0198\u01E8\u039A\u041A",
  L: "L\u0139\u013B\u013D\u013F\u0141\u023D\u039B\u041B",
  M: "M\u019C\u039C\u041C",
  N: "N\xD1\u0143\u0145\u0147\u019D\u01F8\u0220\u039D\u041D",
  O: "O\xD2\xD3\xD4\xD5\xD6\xD8\u014C\u014E\u0150\u0186\u019F\u01A0\u01D1\u01EA\u01EC\u01FE\u020C\u020E\u022A\u022C\u022E\u0230\u038C\u039F\u041E",
  P: "P\u01A4\u03A0\u041F",
  Q: "Q\u024A",
  R: "R\u0154\u0156\u0158\u0210\u0212\u024C\u03A1\u0420",
  S: "S\u015A\u015C\u015E\u0160\u0218\u03A3\u0421",
  T: "T\u0162\u0164\u0166\u01AC\u01AE\u021A\u023E\u03A4\u0422",
  U: "U\xD9\xDA\xDB\xDC\u0168\u016A\u016C\u016E\u0170\u0172\u01AF\u01D3\u01D5\u01D7\u01D9\u01DB\u0214\u0216\u0244\u0423\u042A",
  V: "V\u01B2\u0245\u0412",
  W: "W\u0174\u038F\u03A9",
  X: "X\u03A7",
  Y: "Y\xDD\u0176\u0178\u01B3\u0232\u024E\u038E\u03A5\u03AB\u042B",
  Z: "Z\u0179\u017B\u017D\u01B5\u0224\u0396\u0417",
  a: "a\xE0\xE1\xE2\xE3\xE4\xE5\u0101\u0103\u0105\u01CE\u01DF\u01E1\u01FB\u0201\u0203\u0227\u0250\u03AC\u03B1\u0430",
  b: "b\u0180\u0183\u0253\u03B2\u0431",
  c: "c\xE7\u0107\u0109\u010B\u010D\u0188\u023C\u0446",
  d: "d\u010F\u0111\u018C\u0256\u0257\xF0\u03B4\u0434",
  e: "e\xE8\xE9\xEA\xEB\u0113\u0115\u0117\u0119\u011B\u01DD\u0205\u0207\u0229\u0247\u025B\u03AD\u03B5\u0435\u044D",
  f: "f\u0192\u03C6\u0444",
  g: "g\u011D\u011F\u0121\u0123\u01E5\u01E7\u01F5\u0260\u03B3\u0433\u0491",
  h: "h\u0125\u0127\u021F\u0265\u03AE\u03B7\u0445",
  i: "i\xEC\xED\xEE\xEF\u0129\u012B\u012D\u012F\u0131\u01D0\u0209\u020B\u0268\u0390\u03AF\u03B9\u03CA\u0438\u0456",
  j: "j\u0135\u01F0\u0249\u0439",
  k: "k\u0137\u0199\u01E9\u03BA\u043A",
  l: "l\u013A\u013C\u013E\u0140\u0142\u017F\u019A\u026B\u03BB\u043B",
  m: "m\u026F\u0271\u03BC\u043C",
  n: "n\xF1\u0144\u0146\u0148\u0149\u019E\u01F9\u0272\u03BD\u043D",
  o: "o\xF2\xF3\xF4\xF5\xF6\xF8\u014D\u014F\u0151\u01A1\u01D2\u01EB\u01ED\u01FF\u020D\u020F\u022B\u022D\u022F\u0231\u0254\u0275\u03BF\u03CC\u043E",
  p: "p\u01A5\u03C0\u043F",
  q: "q\u024B",
  r: "r\u0155\u0157\u0159\u0211\u0213\u024D\u027D\u03C1\u0440",
  s: "s\xDF\u015B\u015D\u015F\u0161\u0219\u023F\u03C2\u03C3\u0441",
  t: "t\u0163\u0165\u0167\u01AD\u021B\u0288\u03C4\u0442",
  u: "u\xF9\xFA\xFB\xFC\u0169\u016B\u016D\u016F\u0171\u0173\u01B0\u01D4\u01D6\u01D8\u01DA\u01DC\u0215\u0217\u0289\u0443\u044A",
  v: "v\u028B\u028C\u0432",
  w: "w\u0175\u03C9\u03CE",
  x: "x\u03C7",
  y: "y\xFD\xFF\u0177\u01B4\u0233\u024F\u03B0\u03C5\u03CB\u03CD\u044B",
  z: "z\u017A\u017C\u017E\u01B6\u0225\u0240\u03B6\u0437",
  OE: "\x8C\u0152",
  oe: "\x9C\u0153",
  AE: "\xC6\u01E2\u01FC",
  ae: "\xE6\u01E3\u01FD",
  hv: "\u0195",
  OI: "\u01A2",
  oi: "\u01A3",
  DZ: "\u01C4\u01F1",
  Dz: "\u01C5\u01F2",
  dz: "\u01C6\u01F3",
  LJ: "\u01C7",
  Lj: "\u01C8",
  lj: "\u01C9",
  NJ: "\u01CA",
  Nj: "\u01CB",
  nj: "\u01CC",
  OU: "\u0222",
  ou: "\u0223",
  TH: "\xDE",
  th: "\xFE",
  PS: "\u03A8",
  ps: "\u03C8",
  Yo: "\u0401",
  Ye: "\u0404",
  Yi: "\u0407",
  Zh: "\u0416",
  Ch: "\u0427",
  Sh: "\u0428\u0429",
  "": "\u042A\u042C\u044C",
  Yu: "\u042E",
  Ya: "\u042F",
  zh: "\u0436",
  ch: "\u0447",
  sh: "\u0448\u0449",
  yu: "\u044E",
  ya: "\u044F",
  yo: "\u0451",
  ye: "\u0454",
  yi: "\u0457"
};
var diacriticsMap = null;
var reduce$1 = Array.prototype.reduce;
var reduceRight = Array.prototype.reduceRight;
var OPTION_WIDTH = "width";
var OPTION_NEW_LINE = "newLine";
var OPTION_INDENT = "indent";
var OPTION_CUT = "cut";
var BYRE_ORDER_MARK = "\uFEFF";
var STATE_START_TAG = 0;
var STATE_NON_WHITESPACE = 1;
var STATE_DONE = 2;
var STATE_OUTPUT = 0;
var STATE_HTML = 1;
var STATE_EXCLAMATION = 2;
var STATE_COMMENT = 3;
var globalObject = null;
var globalObject$1 = getGlobalObject();
var previousV = globalObject$1.v;
var version = "1.4.0";
var functions = {
  camelCase,
  capitalize,
  decapitalize,
  kebabCase,
  lowerCase,
  snakeCase,
  swapCase,
  titleCase,
  upperCase,
  count,
  countGraphemes: countGrapheme,
  countSubstrings,
  countWhere,
  countWords,
  escapeHtml,
  escapeRegExp,
  unescapeHtml,
  sprintf,
  vprintf,
  indexOf,
  lastIndexOf,
  search,
  charAt,
  codePointAt,
  first,
  graphemeAt,
  last,
  prune,
  slice,
  substr,
  substring,
  truncate,
  insert,
  latinise,
  pad,
  padLeft,
  padRight,
  repeat,
  replace,
  replaceAll,
  reverse,
  reverseGrapheme,
  slugify,
  splice,
  tr,
  trim,
  trimLeft,
  trimRight,
  wordWrap,
  endsWith,
  includes,
  isAlpha,
  isAlphaDigit,
  isBlank,
  isDigit,
  isEmpty,
  isLowerCase,
  isNumeric,
  isString,
  isUpperCase,
  matches,
  startsWith,
  chars,
  codePoints,
  graphemes,
  split,
  words,
  stripBom: trim$1,
  stripTags: trim$2,
  noConflict,
  version
};
ChainWrapper.prototype.value = function() {
  return this._wrappedValue;
};
ChainWrapper.prototype.valueOf = function() {
  return this.value();
};
ChainWrapper.prototype.toJSON = function() {
  return this.value();
};
ChainWrapper.prototype.toString = function() {
  return String(this.value());
};
ChainWrapper.prototype.chain = function() {
  return new ChainWrapper(this._wrappedValue, true);
};
ChainWrapper.prototype.thru = function(changer) {
  if (typeof changer === "function") {
    return new ChainWrapper(changer(this._wrappedValue), this._explicitChain);
  }
  return this;
};
ChainWrapper.prototype._explicitChain = true;
Object.keys(functions).forEach(function(name) {
  ChainWrapper.prototype[name] = makeFunctionChainable(functions[name]);
});
_extends(Voca, functions, {
  chain
});
var voca_default = {
  ...functions,
  voca: Voca
};

// client/components/Style.ts
var trimRules = function(rules) {
  return rules;
};
var colorProp = function(prop) {
  if (typeof prop == "number") {
    if (prop.toString(16).match(/[0-9a-f]{6}|[0-9a-f]{3}|[0-9a-f]{5}/))
      prop = "#" + (prop.toString(16).length == 5 ? "0" + prop.toString(16) : prop.toString(16));
  }
  return prop;
};
var variableProp = function(prop) {
  if (typeof prop == "string") {
    if (prop.toLocaleLowerCase() in variables)
      prop = variables[prop];
  }
  return prop;
};
var cssProperty = function(prop, fixArray = true) {
  prop = colorProp(prop);
  prop = variableProp(prop);
  if (Array.isArray(prop)) {
    prop = prop.map((f) => typeof f == "number" && fixArray ? f + "px" : cssProperty(f)).join(" ");
  }
  return prop;
};
var setCss2 = function(name, map) {
  if (!css[name])
    css[name] = {};
  for (var i in map) {
    css[name][i] = cssProperty(map[i]);
  }
};
var getCss = function(name, prop = null) {
  if (!css[name])
    css[name] = {};
  if (!prop)
    return css[name];
  return css[name][prop];
};
var css = {};
var variables = {};

class Style extends WidgetEventTarget {
  name = "";
  values = {};
  constructor(name, map = null) {
    super();
    if (typeof name == "object" && !map) {
      map = name;
      name = null;
    }
    if (!name)
      name = "style-" + Object.keys(css).length;
    this.name = name;
    if (map) {
      this.set(map);
    }
    this.values = new Proxy({}, {
      get: (target, propName) => this[propName] || this.all[propName]
    });
  }
  addProperty(prop, value) {
    let p = trimRules({ [prop]: value });
    if (p[prop])
      this[prop] = value;
  }
  get all() {
    return getCss(this.name);
  }
  set all(all) {
    for (var i in all) {
      if (i in this)
        this[i] = all[i];
      else
        this.variable(i, all[i]);
    }
    this._updated();
  }
  set(all) {
    all = trimRules(all);
    this.all = all;
  }
  set accentColor(value) {
    setCss2(this.name, {
      accentColor: value
    });
    this._updated();
  }
  get accentColor() {
    return getCss(this.name, "accentColor");
  }
  setAccentColor(value) {
    this.accentColor = value;
    return this;
  }
  set additiveSymbols(value) {
    setCss2(this.name, {
      additiveSymbols: value
    });
    this._updated();
  }
  get additiveSymbols() {
    return getCss(this.name, "additiveSymbols");
  }
  setAdditiveSymbols(value) {
    this.additiveSymbols = value;
    return this;
  }
  set alignContent(value) {
    setCss2(this.name, {
      alignContent: value
    });
    this._updated();
  }
  get alignContent() {
    return getCss(this.name, "alignContent");
  }
  setAlignContent(value) {
    this.alignContent = value;
    return this;
  }
  set alignItems(value) {
    setCss2(this.name, {
      alignItems: value
    });
    this._updated();
  }
  get alignItems() {
    return getCss(this.name, "alignItems");
  }
  setAlignItems(value) {
    this.alignItems = value;
    return this;
  }
  set alignSelf(value) {
    setCss2(this.name, {
      alignSelf: value
    });
    this._updated();
  }
  get alignSelf() {
    return getCss(this.name, "alignSelf");
  }
  setAlignSelf(value) {
    this.alignSelf = value;
    return this;
  }
  set alignmentBaseline(value) {
    setCss2(this.name, {
      alignmentBaseline: value
    });
    this._updated();
  }
  get alignmentBaseline() {
    return getCss(this.name, "alignmentBaseline");
  }
  setAlignmentBaseline(value) {
    this.alignmentBaseline = value;
    return this;
  }
  set animation(value) {
    setCss2(this.name, {
      animation: value
    });
    this._updated();
  }
  get animation() {
    return getCss(this.name, "animation");
  }
  setAnimation(value) {
    this.animation = value;
    return this;
  }
  set animationComposition(value) {
    setCss2(this.name, {
      animationComposition: value
    });
    this._updated();
  }
  get animationComposition() {
    return getCss(this.name, "animationComposition");
  }
  setAnimationComposition(value) {
    this.animationComposition = value;
    return this;
  }
  set animationDelay(value) {
    setCss2(this.name, {
      animationDelay: value
    });
    this._updated();
  }
  get animationDelay() {
    return getCss(this.name, "animationDelay");
  }
  setAnimationDelay(value) {
    this.animationDelay = value;
    return this;
  }
  set animationDirection(value) {
    setCss2(this.name, {
      animationDirection: value
    });
    this._updated();
  }
  get animationDirection() {
    return getCss(this.name, "animationDirection");
  }
  setAnimationDirection(value) {
    this.animationDirection = value;
    return this;
  }
  set animationDuration(value) {
    setCss2(this.name, {
      animationDuration: value
    });
    this._updated();
  }
  get animationDuration() {
    return getCss(this.name, "animationDuration");
  }
  setAnimationDuration(value) {
    this.animationDuration = value;
    return this;
  }
  set animationFillMode(value) {
    setCss2(this.name, {
      animationFillMode: value
    });
    this._updated();
  }
  get animationFillMode() {
    return getCss(this.name, "animationFillMode");
  }
  setAnimationFillMode(value) {
    this.animationFillMode = value;
    return this;
  }
  set animationIterationCount(value) {
    setCss2(this.name, {
      animationIterationCount: value
    });
    this._updated();
  }
  get animationIterationCount() {
    return getCss(this.name, "animationIterationCount");
  }
  setAnimationIterationCount(value) {
    this.animationIterationCount = value;
    return this;
  }
  set animationName(value) {
    setCss2(this.name, {
      animationName: value
    });
    this._updated();
  }
  get animationName() {
    return getCss(this.name, "animationName");
  }
  setAnimationName(value) {
    this.animationName = value;
    return this;
  }
  set animationPlayState(value) {
    setCss2(this.name, {
      animationPlayState: value
    });
    this._updated();
  }
  get animationPlayState() {
    return getCss(this.name, "animationPlayState");
  }
  setAnimationPlayState(value) {
    this.animationPlayState = value;
    return this;
  }
  set animationRange(value) {
    setCss2(this.name, {
      animationRange: value
    });
    this._updated();
  }
  get animationRange() {
    return getCss(this.name, "animationRange");
  }
  setAnimationRange(value) {
    this.animationRange = value;
    return this;
  }
  set animationRangeEnd(value) {
    setCss2(this.name, {
      animationRangeEnd: value
    });
    this._updated();
  }
  get animationRangeEnd() {
    return getCss(this.name, "animationRangeEnd");
  }
  setAnimationRangeEnd(value) {
    this.animationRangeEnd = value;
    return this;
  }
  set animationRangeStart(value) {
    setCss2(this.name, {
      animationRangeStart: value
    });
    this._updated();
  }
  get animationRangeStart() {
    return getCss(this.name, "animationRangeStart");
  }
  setAnimationRangeStart(value) {
    this.animationRangeStart = value;
    return this;
  }
  set animationTimeline(value) {
    setCss2(this.name, {
      animationTimeline: value
    });
    this._updated();
  }
  get animationTimeline() {
    return getCss(this.name, "animationTimeline");
  }
  setAnimationTimeline(value) {
    this.animationTimeline = value;
    return this;
  }
  set animationTimingFunction(value) {
    setCss2(this.name, {
      animationTimingFunction: value
    });
    this._updated();
  }
  get animationTimingFunction() {
    return getCss(this.name, "animationTimingFunction");
  }
  setAnimationTimingFunction(value) {
    this.animationTimingFunction = value;
    return this;
  }
  set appRegion(value) {
    setCss2(this.name, {
      appRegion: value
    });
    this._updated();
  }
  get appRegion() {
    return getCss(this.name, "appRegion");
  }
  setAppRegion(value) {
    this.appRegion = value;
    return this;
  }
  set appearance(value) {
    setCss2(this.name, {
      appearance: value
    });
    this._updated();
  }
  get appearance() {
    return getCss(this.name, "appearance");
  }
  setAppearance(value) {
    this.appearance = value;
    return this;
  }
  set ascentOverride(value) {
    setCss2(this.name, {
      ascentOverride: value
    });
    this._updated();
  }
  get ascentOverride() {
    return getCss(this.name, "ascentOverride");
  }
  setAscentOverride(value) {
    this.ascentOverride = value;
    return this;
  }
  set aspectRatio(value) {
    setCss2(this.name, {
      aspectRatio: value
    });
    this._updated();
  }
  get aspectRatio() {
    return getCss(this.name, "aspectRatio");
  }
  setAspectRatio(value) {
    this.aspectRatio = value;
    return this;
  }
  set backdropFilter(value) {
    setCss2(this.name, {
      backdropFilter: value
    });
    this._updated();
  }
  get backdropFilter() {
    return getCss(this.name, "backdropFilter");
  }
  setBackdropFilter(value) {
    this.backdropFilter = value;
    return this;
  }
  set backfaceVisibility(value) {
    setCss2(this.name, {
      backfaceVisibility: value
    });
    this._updated();
  }
  get backfaceVisibility() {
    return getCss(this.name, "backfaceVisibility");
  }
  setBackfaceVisibility(value) {
    this.backfaceVisibility = value;
    return this;
  }
  set background(value) {
    setCss2(this.name, {
      background: value
    });
    this._updated();
  }
  get background() {
    return getCss(this.name, "background");
  }
  setBackground(value) {
    this.background = value;
    return this;
  }
  set backgroundAttachment(value) {
    setCss2(this.name, {
      backgroundAttachment: value
    });
    this._updated();
  }
  get backgroundAttachment() {
    return getCss(this.name, "backgroundAttachment");
  }
  setBackgroundAttachment(value) {
    this.backgroundAttachment = value;
    return this;
  }
  set backgroundBlendMode(value) {
    setCss2(this.name, {
      backgroundBlendMode: value
    });
    this._updated();
  }
  get backgroundBlendMode() {
    return getCss(this.name, "backgroundBlendMode");
  }
  setBackgroundBlendMode(value) {
    this.backgroundBlendMode = value;
    return this;
  }
  set backgroundClip(value) {
    setCss2(this.name, {
      backgroundClip: value
    });
    this._updated();
  }
  get backgroundClip() {
    return getCss(this.name, "backgroundClip");
  }
  setBackgroundClip(value) {
    this.backgroundClip = value;
    return this;
  }
  set backgroundColor(value) {
    setCss2(this.name, {
      backgroundColor: value
    });
    this._updated();
  }
  get backgroundColor() {
    return getCss(this.name, "backgroundColor");
  }
  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  set backgroundImage(value) {
    setCss2(this.name, {
      backgroundImage: value
    });
    this._updated();
  }
  get backgroundImage() {
    return getCss(this.name, "backgroundImage");
  }
  setBackgroundImage(value) {
    this.backgroundImage = value;
    return this;
  }
  set backgroundOrigin(value) {
    setCss2(this.name, {
      backgroundOrigin: value
    });
    this._updated();
  }
  get backgroundOrigin() {
    return getCss(this.name, "backgroundOrigin");
  }
  setBackgroundOrigin(value) {
    this.backgroundOrigin = value;
    return this;
  }
  set backgroundPosition(value) {
    setCss2(this.name, {
      backgroundPosition: value
    });
    this._updated();
  }
  get backgroundPosition() {
    return getCss(this.name, "backgroundPosition");
  }
  setBackgroundPosition(value) {
    this.backgroundPosition = value;
    return this;
  }
  set backgroundPositionX(value) {
    setCss2(this.name, {
      backgroundPositionX: value
    });
    this._updated();
  }
  get backgroundPositionX() {
    return getCss(this.name, "backgroundPositionX");
  }
  setBackgroundPositionX(value) {
    this.backgroundPositionX = value;
    return this;
  }
  set backgroundPositionY(value) {
    setCss2(this.name, {
      backgroundPositionY: value
    });
    this._updated();
  }
  get backgroundPositionY() {
    return getCss(this.name, "backgroundPositionY");
  }
  setBackgroundPositionY(value) {
    this.backgroundPositionY = value;
    return this;
  }
  set backgroundRepeat(value) {
    setCss2(this.name, {
      backgroundRepeat: value
    });
    this._updated();
  }
  get backgroundRepeat() {
    return getCss(this.name, "backgroundRepeat");
  }
  setBackgroundRepeat(value) {
    this.backgroundRepeat = value;
    return this;
  }
  set backgroundRepeatX(value) {
    setCss2(this.name, {
      backgroundRepeatX: value
    });
    this._updated();
  }
  get backgroundRepeatX() {
    return getCss(this.name, "backgroundRepeatX");
  }
  setBackgroundRepeatX(value) {
    this.backgroundRepeatX = value;
    return this;
  }
  set backgroundRepeatY(value) {
    setCss2(this.name, {
      backgroundRepeatY: value
    });
    this._updated();
  }
  get backgroundRepeatY() {
    return getCss(this.name, "backgroundRepeatY");
  }
  setBackgroundRepeatY(value) {
    this.backgroundRepeatY = value;
    return this;
  }
  set backgroundSize(value) {
    setCss2(this.name, {
      backgroundSize: value
    });
    this._updated();
  }
  get backgroundSize() {
    return getCss(this.name, "backgroundSize");
  }
  setBackgroundSize(value) {
    this.backgroundSize = value;
    return this;
  }
  set basePalette(value) {
    setCss2(this.name, {
      basePalette: value
    });
    this._updated();
  }
  get basePalette() {
    return getCss(this.name, "basePalette");
  }
  setBasePalette(value) {
    this.basePalette = value;
    return this;
  }
  set baselineShift(value) {
    setCss2(this.name, {
      baselineShift: value
    });
    this._updated();
  }
  get baselineShift() {
    return getCss(this.name, "baselineShift");
  }
  setBaselineShift(value) {
    this.baselineShift = value;
    return this;
  }
  set baselineSource(value) {
    setCss2(this.name, {
      baselineSource: value
    });
    this._updated();
  }
  get baselineSource() {
    return getCss(this.name, "baselineSource");
  }
  setBaselineSource(value) {
    this.baselineSource = value;
    return this;
  }
  set blockSize(value) {
    setCss2(this.name, {
      blockSize: value
    });
    this._updated();
  }
  get blockSize() {
    return getCss(this.name, "blockSize");
  }
  setBlockSize(value) {
    this.blockSize = value;
    return this;
  }
  set border(value) {
    setCss2(this.name, {
      border: value
    });
    this._updated();
  }
  get border() {
    return getCss(this.name, "border");
  }
  setBorder(value) {
    this.border = value;
    return this;
  }
  set borderBlock(value) {
    setCss2(this.name, {
      borderBlock: value
    });
    this._updated();
  }
  get borderBlock() {
    return getCss(this.name, "borderBlock");
  }
  setBorderBlock(value) {
    this.borderBlock = value;
    return this;
  }
  set borderBlockColor(value) {
    setCss2(this.name, {
      borderBlockColor: value
    });
    this._updated();
  }
  get borderBlockColor() {
    return getCss(this.name, "borderBlockColor");
  }
  setBorderBlockColor(value) {
    this.borderBlockColor = value;
    return this;
  }
  set borderBlockEnd(value) {
    setCss2(this.name, {
      borderBlockEnd: value
    });
    this._updated();
  }
  get borderBlockEnd() {
    return getCss(this.name, "borderBlockEnd");
  }
  setBorderBlockEnd(value) {
    this.borderBlockEnd = value;
    return this;
  }
  set borderBlockEndColor(value) {
    setCss2(this.name, {
      borderBlockEndColor: value
    });
    this._updated();
  }
  get borderBlockEndColor() {
    return getCss(this.name, "borderBlockEndColor");
  }
  setBorderBlockEndColor(value) {
    this.borderBlockEndColor = value;
    return this;
  }
  set borderBlockEndStyle(value) {
    setCss2(this.name, {
      borderBlockEndStyle: value
    });
    this._updated();
  }
  get borderBlockEndStyle() {
    return getCss(this.name, "borderBlockEndStyle");
  }
  setBorderBlockEndStyle(value) {
    this.borderBlockEndStyle = value;
    return this;
  }
  set borderBlockEndWidth(value) {
    setCss2(this.name, {
      borderBlockEndWidth: value
    });
    this._updated();
  }
  get borderBlockEndWidth() {
    return getCss(this.name, "borderBlockEndWidth");
  }
  setBorderBlockEndWidth(value) {
    this.borderBlockEndWidth = value;
    return this;
  }
  set borderBlockStart(value) {
    setCss2(this.name, {
      borderBlockStart: value
    });
    this._updated();
  }
  get borderBlockStart() {
    return getCss(this.name, "borderBlockStart");
  }
  setBorderBlockStart(value) {
    this.borderBlockStart = value;
    return this;
  }
  set borderBlockStartColor(value) {
    setCss2(this.name, {
      borderBlockStartColor: value
    });
    this._updated();
  }
  get borderBlockStartColor() {
    return getCss(this.name, "borderBlockStartColor");
  }
  setBorderBlockStartColor(value) {
    this.borderBlockStartColor = value;
    return this;
  }
  set borderBlockStartStyle(value) {
    setCss2(this.name, {
      borderBlockStartStyle: value
    });
    this._updated();
  }
  get borderBlockStartStyle() {
    return getCss(this.name, "borderBlockStartStyle");
  }
  setBorderBlockStartStyle(value) {
    this.borderBlockStartStyle = value;
    return this;
  }
  set borderBlockStartWidth(value) {
    setCss2(this.name, {
      borderBlockStartWidth: value
    });
    this._updated();
  }
  get borderBlockStartWidth() {
    return getCss(this.name, "borderBlockStartWidth");
  }
  setBorderBlockStartWidth(value) {
    this.borderBlockStartWidth = value;
    return this;
  }
  set borderBlockStyle(value) {
    setCss2(this.name, {
      borderBlockStyle: value
    });
    this._updated();
  }
  get borderBlockStyle() {
    return getCss(this.name, "borderBlockStyle");
  }
  setBorderBlockStyle(value) {
    this.borderBlockStyle = value;
    return this;
  }
  set borderBlockWidth(value) {
    setCss2(this.name, {
      borderBlockWidth: value
    });
    this._updated();
  }
  get borderBlockWidth() {
    return getCss(this.name, "borderBlockWidth");
  }
  setBorderBlockWidth(value) {
    this.borderBlockWidth = value;
    return this;
  }
  set borderBottom(value) {
    setCss2(this.name, {
      borderBottom: value
    });
    this._updated();
  }
  get borderBottom() {
    return getCss(this.name, "borderBottom");
  }
  setBorderBottom(value) {
    this.borderBottom = value;
    return this;
  }
  set borderBottomColor(value) {
    setCss2(this.name, {
      borderBottomColor: value
    });
    this._updated();
  }
  get borderBottomColor() {
    return getCss(this.name, "borderBottomColor");
  }
  setBorderBottomColor(value) {
    this.borderBottomColor = value;
    return this;
  }
  set borderBottomLeftRadius(value) {
    setCss2(this.name, {
      borderBottomLeftRadius: value
    });
    this._updated();
  }
  get borderBottomLeftRadius() {
    return getCss(this.name, "borderBottomLeftRadius");
  }
  setBorderBottomLeftRadius(value) {
    this.borderBottomLeftRadius = value;
    return this;
  }
  set borderBottomRightRadius(value) {
    setCss2(this.name, {
      borderBottomRightRadius: value
    });
    this._updated();
  }
  get borderBottomRightRadius() {
    return getCss(this.name, "borderBottomRightRadius");
  }
  setBorderBottomRightRadius(value) {
    this.borderBottomRightRadius = value;
    return this;
  }
  set borderBottomStyle(value) {
    setCss2(this.name, {
      borderBottomStyle: value
    });
    this._updated();
  }
  get borderBottomStyle() {
    return getCss(this.name, "borderBottomStyle");
  }
  setBorderBottomStyle(value) {
    this.borderBottomStyle = value;
    return this;
  }
  set borderBottomWidth(value) {
    setCss2(this.name, {
      borderBottomWidth: value
    });
    this._updated();
  }
  get borderBottomWidth() {
    return getCss(this.name, "borderBottomWidth");
  }
  setBorderBottomWidth(value) {
    this.borderBottomWidth = value;
    return this;
  }
  set borderCollapse(value) {
    setCss2(this.name, {
      borderCollapse: value
    });
    this._updated();
  }
  get borderCollapse() {
    return getCss(this.name, "borderCollapse");
  }
  setBorderCollapse(value) {
    this.borderCollapse = value;
    return this;
  }
  set borderColor(value) {
    setCss2(this.name, {
      borderColor: value
    });
    this._updated();
  }
  get borderColor() {
    return getCss(this.name, "borderColor");
  }
  setBorderColor(value) {
    this.borderColor = value;
    return this;
  }
  set borderEndEndRadius(value) {
    setCss2(this.name, {
      borderEndEndRadius: value
    });
    this._updated();
  }
  get borderEndEndRadius() {
    return getCss(this.name, "borderEndEndRadius");
  }
  setBorderEndEndRadius(value) {
    this.borderEndEndRadius = value;
    return this;
  }
  set borderEndStartRadius(value) {
    setCss2(this.name, {
      borderEndStartRadius: value
    });
    this._updated();
  }
  get borderEndStartRadius() {
    return getCss(this.name, "borderEndStartRadius");
  }
  setBorderEndStartRadius(value) {
    this.borderEndStartRadius = value;
    return this;
  }
  set borderImage(value) {
    setCss2(this.name, {
      borderImage: value
    });
    this._updated();
  }
  get borderImage() {
    return getCss(this.name, "borderImage");
  }
  setBorderImage(value) {
    this.borderImage = value;
    return this;
  }
  set borderImageOutset(value) {
    setCss2(this.name, {
      borderImageOutset: value
    });
    this._updated();
  }
  get borderImageOutset() {
    return getCss(this.name, "borderImageOutset");
  }
  setBorderImageOutset(value) {
    this.borderImageOutset = value;
    return this;
  }
  set borderImageRepeat(value) {
    setCss2(this.name, {
      borderImageRepeat: value
    });
    this._updated();
  }
  get borderImageRepeat() {
    return getCss(this.name, "borderImageRepeat");
  }
  setBorderImageRepeat(value) {
    this.borderImageRepeat = value;
    return this;
  }
  set borderImageSlice(value) {
    setCss2(this.name, {
      borderImageSlice: value
    });
    this._updated();
  }
  get borderImageSlice() {
    return getCss(this.name, "borderImageSlice");
  }
  setBorderImageSlice(value) {
    this.borderImageSlice = value;
    return this;
  }
  set borderImageSource(value) {
    setCss2(this.name, {
      borderImageSource: value
    });
    this._updated();
  }
  get borderImageSource() {
    return getCss(this.name, "borderImageSource");
  }
  setBorderImageSource(value) {
    this.borderImageSource = value;
    return this;
  }
  set borderImageWidth(value) {
    setCss2(this.name, {
      borderImageWidth: value
    });
    this._updated();
  }
  get borderImageWidth() {
    return getCss(this.name, "borderImageWidth");
  }
  setBorderImageWidth(value) {
    this.borderImageWidth = value;
    return this;
  }
  set borderInline(value) {
    setCss2(this.name, {
      borderInline: value
    });
    this._updated();
  }
  get borderInline() {
    return getCss(this.name, "borderInline");
  }
  setBorderInline(value) {
    this.borderInline = value;
    return this;
  }
  set borderInlineColor(value) {
    setCss2(this.name, {
      borderInlineColor: value
    });
    this._updated();
  }
  get borderInlineColor() {
    return getCss(this.name, "borderInlineColor");
  }
  setBorderInlineColor(value) {
    this.borderInlineColor = value;
    return this;
  }
  set borderInlineEnd(value) {
    setCss2(this.name, {
      borderInlineEnd: value
    });
    this._updated();
  }
  get borderInlineEnd() {
    return getCss(this.name, "borderInlineEnd");
  }
  setBorderInlineEnd(value) {
    this.borderInlineEnd = value;
    return this;
  }
  set borderInlineEndColor(value) {
    setCss2(this.name, {
      borderInlineEndColor: value
    });
    this._updated();
  }
  get borderInlineEndColor() {
    return getCss(this.name, "borderInlineEndColor");
  }
  setBorderInlineEndColor(value) {
    this.borderInlineEndColor = value;
    return this;
  }
  set borderInlineEndStyle(value) {
    setCss2(this.name, {
      borderInlineEndStyle: value
    });
    this._updated();
  }
  get borderInlineEndStyle() {
    return getCss(this.name, "borderInlineEndStyle");
  }
  setBorderInlineEndStyle(value) {
    this.borderInlineEndStyle = value;
    return this;
  }
  set borderInlineEndWidth(value) {
    setCss2(this.name, {
      borderInlineEndWidth: value
    });
    this._updated();
  }
  get borderInlineEndWidth() {
    return getCss(this.name, "borderInlineEndWidth");
  }
  setBorderInlineEndWidth(value) {
    this.borderInlineEndWidth = value;
    return this;
  }
  set borderInlineStart(value) {
    setCss2(this.name, {
      borderInlineStart: value
    });
    this._updated();
  }
  get borderInlineStart() {
    return getCss(this.name, "borderInlineStart");
  }
  setBorderInlineStart(value) {
    this.borderInlineStart = value;
    return this;
  }
  set borderInlineStartColor(value) {
    setCss2(this.name, {
      borderInlineStartColor: value
    });
    this._updated();
  }
  get borderInlineStartColor() {
    return getCss(this.name, "borderInlineStartColor");
  }
  setBorderInlineStartColor(value) {
    this.borderInlineStartColor = value;
    return this;
  }
  set borderInlineStartStyle(value) {
    setCss2(this.name, {
      borderInlineStartStyle: value
    });
    this._updated();
  }
  get borderInlineStartStyle() {
    return getCss(this.name, "borderInlineStartStyle");
  }
  setBorderInlineStartStyle(value) {
    this.borderInlineStartStyle = value;
    return this;
  }
  set borderInlineStartWidth(value) {
    setCss2(this.name, {
      borderInlineStartWidth: value
    });
    this._updated();
  }
  get borderInlineStartWidth() {
    return getCss(this.name, "borderInlineStartWidth");
  }
  setBorderInlineStartWidth(value) {
    this.borderInlineStartWidth = value;
    return this;
  }
  set borderInlineStyle(value) {
    setCss2(this.name, {
      borderInlineStyle: value
    });
    this._updated();
  }
  get borderInlineStyle() {
    return getCss(this.name, "borderInlineStyle");
  }
  setBorderInlineStyle(value) {
    this.borderInlineStyle = value;
    return this;
  }
  set borderInlineWidth(value) {
    setCss2(this.name, {
      borderInlineWidth: value
    });
    this._updated();
  }
  get borderInlineWidth() {
    return getCss(this.name, "borderInlineWidth");
  }
  setBorderInlineWidth(value) {
    this.borderInlineWidth = value;
    return this;
  }
  set borderLeft(value) {
    setCss2(this.name, {
      borderLeft: value
    });
    this._updated();
  }
  get borderLeft() {
    return getCss(this.name, "borderLeft");
  }
  setBorderLeft(value) {
    this.borderLeft = value;
    return this;
  }
  set borderLeftColor(value) {
    setCss2(this.name, {
      borderLeftColor: value
    });
    this._updated();
  }
  get borderLeftColor() {
    return getCss(this.name, "borderLeftColor");
  }
  setBorderLeftColor(value) {
    this.borderLeftColor = value;
    return this;
  }
  set borderLeftStyle(value) {
    setCss2(this.name, {
      borderLeftStyle: value
    });
    this._updated();
  }
  get borderLeftStyle() {
    return getCss(this.name, "borderLeftStyle");
  }
  setBorderLeftStyle(value) {
    this.borderLeftStyle = value;
    return this;
  }
  set borderLeftWidth(value) {
    setCss2(this.name, {
      borderLeftWidth: value
    });
    this._updated();
  }
  get borderLeftWidth() {
    return getCss(this.name, "borderLeftWidth");
  }
  setBorderLeftWidth(value) {
    this.borderLeftWidth = value;
    return this;
  }
  set borderRadius(value) {
    setCss2(this.name, {
      borderRadius: value
    });
    this._updated();
  }
  get borderRadius() {
    return getCss(this.name, "borderRadius");
  }
  setBorderRadius(value) {
    this.borderRadius = value;
    return this;
  }
  set borderRight(value) {
    setCss2(this.name, {
      borderRight: value
    });
    this._updated();
  }
  get borderRight() {
    return getCss(this.name, "borderRight");
  }
  setBorderRight(value) {
    this.borderRight = value;
    return this;
  }
  set borderRightColor(value) {
    setCss2(this.name, {
      borderRightColor: value
    });
    this._updated();
  }
  get borderRightColor() {
    return getCss(this.name, "borderRightColor");
  }
  setBorderRightColor(value) {
    this.borderRightColor = value;
    return this;
  }
  set borderRightStyle(value) {
    setCss2(this.name, {
      borderRightStyle: value
    });
    this._updated();
  }
  get borderRightStyle() {
    return getCss(this.name, "borderRightStyle");
  }
  setBorderRightStyle(value) {
    this.borderRightStyle = value;
    return this;
  }
  set borderRightWidth(value) {
    setCss2(this.name, {
      borderRightWidth: value
    });
    this._updated();
  }
  get borderRightWidth() {
    return getCss(this.name, "borderRightWidth");
  }
  setBorderRightWidth(value) {
    this.borderRightWidth = value;
    return this;
  }
  set borderSpacing(value) {
    setCss2(this.name, {
      borderSpacing: value
    });
    this._updated();
  }
  get borderSpacing() {
    return getCss(this.name, "borderSpacing");
  }
  setBorderSpacing(value) {
    this.borderSpacing = value;
    return this;
  }
  set borderStartEndRadius(value) {
    setCss2(this.name, {
      borderStartEndRadius: value
    });
    this._updated();
  }
  get borderStartEndRadius() {
    return getCss(this.name, "borderStartEndRadius");
  }
  setBorderStartEndRadius(value) {
    this.borderStartEndRadius = value;
    return this;
  }
  set borderStartStartRadius(value) {
    setCss2(this.name, {
      borderStartStartRadius: value
    });
    this._updated();
  }
  get borderStartStartRadius() {
    return getCss(this.name, "borderStartStartRadius");
  }
  setBorderStartStartRadius(value) {
    this.borderStartStartRadius = value;
    return this;
  }
  set borderStyle(value) {
    setCss2(this.name, {
      borderStyle: value
    });
    this._updated();
  }
  get borderStyle() {
    return getCss(this.name, "borderStyle");
  }
  setBorderStyle(value) {
    this.borderStyle = value;
    return this;
  }
  set borderTop(value) {
    setCss2(this.name, {
      borderTop: value
    });
    this._updated();
  }
  get borderTop() {
    return getCss(this.name, "borderTop");
  }
  setBorderTop(value) {
    this.borderTop = value;
    return this;
  }
  set borderTopColor(value) {
    setCss2(this.name, {
      borderTopColor: value
    });
    this._updated();
  }
  get borderTopColor() {
    return getCss(this.name, "borderTopColor");
  }
  setBorderTopColor(value) {
    this.borderTopColor = value;
    return this;
  }
  set borderTopLeftRadius(value) {
    setCss2(this.name, {
      borderTopLeftRadius: value
    });
    this._updated();
  }
  get borderTopLeftRadius() {
    return getCss(this.name, "borderTopLeftRadius");
  }
  setBorderTopLeftRadius(value) {
    this.borderTopLeftRadius = value;
    return this;
  }
  set borderTopRightRadius(value) {
    setCss2(this.name, {
      borderTopRightRadius: value
    });
    this._updated();
  }
  get borderTopRightRadius() {
    return getCss(this.name, "borderTopRightRadius");
  }
  setBorderTopRightRadius(value) {
    this.borderTopRightRadius = value;
    return this;
  }
  set borderTopStyle(value) {
    setCss2(this.name, {
      borderTopStyle: value
    });
    this._updated();
  }
  get borderTopStyle() {
    return getCss(this.name, "borderTopStyle");
  }
  setBorderTopStyle(value) {
    this.borderTopStyle = value;
    return this;
  }
  set borderTopWidth(value) {
    setCss2(this.name, {
      borderTopWidth: value
    });
    this._updated();
  }
  get borderTopWidth() {
    return getCss(this.name, "borderTopWidth");
  }
  setBorderTopWidth(value) {
    this.borderTopWidth = value;
    return this;
  }
  set borderWidth(value) {
    setCss2(this.name, {
      borderWidth: value
    });
    this._updated();
  }
  get borderWidth() {
    return getCss(this.name, "borderWidth");
  }
  setBorderWidth(value) {
    this.borderWidth = value;
    return this;
  }
  set bottom(value) {
    setCss2(this.name, {
      bottom: value
    });
    this._updated();
  }
  get bottom() {
    return getCss(this.name, "bottom");
  }
  setBottom(value) {
    this.bottom = value;
    return this;
  }
  set boxShadow(value) {
    setCss2(this.name, {
      boxShadow: value
    });
    this._updated();
  }
  get boxShadow() {
    return getCss(this.name, "boxShadow");
  }
  setBoxShadow(value) {
    this.boxShadow = value;
    return this;
  }
  set boxSizing(value) {
    setCss2(this.name, {
      boxSizing: value
    });
    this._updated();
  }
  get boxSizing() {
    return getCss(this.name, "boxSizing");
  }
  setBoxSizing(value) {
    this.boxSizing = value;
    return this;
  }
  set breakAfter(value) {
    setCss2(this.name, {
      breakAfter: value
    });
    this._updated();
  }
  get breakAfter() {
    return getCss(this.name, "breakAfter");
  }
  setBreakAfter(value) {
    this.breakAfter = value;
    return this;
  }
  set breakBefore(value) {
    setCss2(this.name, {
      breakBefore: value
    });
    this._updated();
  }
  get breakBefore() {
    return getCss(this.name, "breakBefore");
  }
  setBreakBefore(value) {
    this.breakBefore = value;
    return this;
  }
  set breakInside(value) {
    setCss2(this.name, {
      breakInside: value
    });
    this._updated();
  }
  get breakInside() {
    return getCss(this.name, "breakInside");
  }
  setBreakInside(value) {
    this.breakInside = value;
    return this;
  }
  set bufferedRendering(value) {
    setCss2(this.name, {
      bufferedRendering: value
    });
    this._updated();
  }
  get bufferedRendering() {
    return getCss(this.name, "bufferedRendering");
  }
  setBufferedRendering(value) {
    this.bufferedRendering = value;
    return this;
  }
  set captionSide(value) {
    setCss2(this.name, {
      captionSide: value
    });
    this._updated();
  }
  get captionSide() {
    return getCss(this.name, "captionSide");
  }
  setCaptionSide(value) {
    this.captionSide = value;
    return this;
  }
  set caretColor(value) {
    setCss2(this.name, {
      caretColor: value
    });
    this._updated();
  }
  get caretColor() {
    return getCss(this.name, "caretColor");
  }
  setCaretColor(value) {
    this.caretColor = value;
    return this;
  }
  set clear(value) {
    setCss2(this.name, {
      clear: value
    });
    this._updated();
  }
  get clear() {
    return getCss(this.name, "clear");
  }
  setClear(value) {
    this.clear = value;
    return this;
  }
  set clip(value) {
    setCss2(this.name, {
      clip: value
    });
    this._updated();
  }
  get clip() {
    return getCss(this.name, "clip");
  }
  setClip(value) {
    this.clip = value;
    return this;
  }
  set clipPath(value) {
    setCss2(this.name, {
      clipPath: value
    });
    this._updated();
  }
  get clipPath() {
    return getCss(this.name, "clipPath");
  }
  setClipPath(value) {
    this.clipPath = value;
    return this;
  }
  set clipRule(value) {
    setCss2(this.name, {
      clipRule: value
    });
    this._updated();
  }
  get clipRule() {
    return getCss(this.name, "clipRule");
  }
  setClipRule(value) {
    this.clipRule = value;
    return this;
  }
  set color(value) {
    setCss2(this.name, {
      color: value
    });
    this._updated();
  }
  get color() {
    return getCss(this.name, "color");
  }
  setColor(value) {
    this.color = value;
    return this;
  }
  set colorInterpolation(value) {
    setCss2(this.name, {
      colorInterpolation: value
    });
    this._updated();
  }
  get colorInterpolation() {
    return getCss(this.name, "colorInterpolation");
  }
  setColorInterpolation(value) {
    this.colorInterpolation = value;
    return this;
  }
  set colorInterpolationFilters(value) {
    setCss2(this.name, {
      colorInterpolationFilters: value
    });
    this._updated();
  }
  get colorInterpolationFilters() {
    return getCss(this.name, "colorInterpolationFilters");
  }
  setColorInterpolationFilters(value) {
    this.colorInterpolationFilters = value;
    return this;
  }
  set colorRendering(value) {
    setCss2(this.name, {
      colorRendering: value
    });
    this._updated();
  }
  get colorRendering() {
    return getCss(this.name, "colorRendering");
  }
  setColorRendering(value) {
    this.colorRendering = value;
    return this;
  }
  set colorScheme(value) {
    setCss2(this.name, {
      colorScheme: value
    });
    this._updated();
  }
  get colorScheme() {
    return getCss(this.name, "colorScheme");
  }
  setColorScheme(value) {
    this.colorScheme = value;
    return this;
  }
  set columnCount(value) {
    setCss2(this.name, {
      columnCount: value
    });
    this._updated();
  }
  get columnCount() {
    return getCss(this.name, "columnCount");
  }
  setColumnCount(value) {
    this.columnCount = value;
    return this;
  }
  set columnFill(value) {
    setCss2(this.name, {
      columnFill: value
    });
    this._updated();
  }
  get columnFill() {
    return getCss(this.name, "columnFill");
  }
  setColumnFill(value) {
    this.columnFill = value;
    return this;
  }
  set columnGap(value) {
    setCss2(this.name, {
      columnGap: value
    });
    this._updated();
  }
  get columnGap() {
    return getCss(this.name, "columnGap");
  }
  setColumnGap(value) {
    this.columnGap = value;
    return this;
  }
  set columnRule(value) {
    setCss2(this.name, {
      columnRule: value
    });
    this._updated();
  }
  get columnRule() {
    return getCss(this.name, "columnRule");
  }
  setColumnRule(value) {
    this.columnRule = value;
    return this;
  }
  set columnRuleColor(value) {
    setCss2(this.name, {
      columnRuleColor: value
    });
    this._updated();
  }
  get columnRuleColor() {
    return getCss(this.name, "columnRuleColor");
  }
  setColumnRuleColor(value) {
    this.columnRuleColor = value;
    return this;
  }
  set columnRuleStyle(value) {
    setCss2(this.name, {
      columnRuleStyle: value
    });
    this._updated();
  }
  get columnRuleStyle() {
    return getCss(this.name, "columnRuleStyle");
  }
  setColumnRuleStyle(value) {
    this.columnRuleStyle = value;
    return this;
  }
  set columnRuleWidth(value) {
    setCss2(this.name, {
      columnRuleWidth: value
    });
    this._updated();
  }
  get columnRuleWidth() {
    return getCss(this.name, "columnRuleWidth");
  }
  setColumnRuleWidth(value) {
    this.columnRuleWidth = value;
    return this;
  }
  set columnSpan(value) {
    setCss2(this.name, {
      columnSpan: value
    });
    this._updated();
  }
  get columnSpan() {
    return getCss(this.name, "columnSpan");
  }
  setColumnSpan(value) {
    this.columnSpan = value;
    return this;
  }
  set columnWidth(value) {
    setCss2(this.name, {
      columnWidth: value
    });
    this._updated();
  }
  get columnWidth() {
    return getCss(this.name, "columnWidth");
  }
  setColumnWidth(value) {
    this.columnWidth = value;
    return this;
  }
  set columns(value) {
    setCss2(this.name, {
      columns: value
    });
    this._updated();
  }
  get columns() {
    return getCss(this.name, "columns");
  }
  setColumns(value) {
    this.columns = value;
    return this;
  }
  set contain(value) {
    setCss2(this.name, {
      contain: value
    });
    this._updated();
  }
  get contain() {
    return getCss(this.name, "contain");
  }
  setContain(value) {
    this.contain = value;
    return this;
  }
  set containIntrinsicBlockSize(value) {
    setCss2(this.name, {
      containIntrinsicBlockSize: value
    });
    this._updated();
  }
  get containIntrinsicBlockSize() {
    return getCss(this.name, "containIntrinsicBlockSize");
  }
  setContainIntrinsicBlockSize(value) {
    this.containIntrinsicBlockSize = value;
    return this;
  }
  set containIntrinsicHeight(value) {
    setCss2(this.name, {
      containIntrinsicHeight: value
    });
    this._updated();
  }
  get containIntrinsicHeight() {
    return getCss(this.name, "containIntrinsicHeight");
  }
  setContainIntrinsicHeight(value) {
    this.containIntrinsicHeight = value;
    return this;
  }
  set containIntrinsicInlineSize(value) {
    setCss2(this.name, {
      containIntrinsicInlineSize: value
    });
    this._updated();
  }
  get containIntrinsicInlineSize() {
    return getCss(this.name, "containIntrinsicInlineSize");
  }
  setContainIntrinsicInlineSize(value) {
    this.containIntrinsicInlineSize = value;
    return this;
  }
  set containIntrinsicSize(value) {
    setCss2(this.name, {
      containIntrinsicSize: value
    });
    this._updated();
  }
  get containIntrinsicSize() {
    return getCss(this.name, "containIntrinsicSize");
  }
  setContainIntrinsicSize(value) {
    this.containIntrinsicSize = value;
    return this;
  }
  set containIntrinsicWidth(value) {
    setCss2(this.name, {
      containIntrinsicWidth: value
    });
    this._updated();
  }
  get containIntrinsicWidth() {
    return getCss(this.name, "containIntrinsicWidth");
  }
  setContainIntrinsicWidth(value) {
    this.containIntrinsicWidth = value;
    return this;
  }
  set container(value) {
    setCss2(this.name, {
      container: value
    });
    this._updated();
  }
  get container() {
    return getCss(this.name, "container");
  }
  setContainer(value) {
    this.container = value;
    return this;
  }
  set containerName(value) {
    setCss2(this.name, {
      containerName: value
    });
    this._updated();
  }
  get containerName() {
    return getCss(this.name, "containerName");
  }
  setContainerName(value) {
    this.containerName = value;
    return this;
  }
  set containerType(value) {
    setCss2(this.name, {
      containerType: value
    });
    this._updated();
  }
  get containerType() {
    return getCss(this.name, "containerType");
  }
  setContainerType(value) {
    this.containerType = value;
    return this;
  }
  set content(value) {
    setCss2(this.name, {
      content: value
    });
    this._updated();
  }
  get content() {
    return getCss(this.name, "content");
  }
  setContent(value) {
    this.content = value;
    return this;
  }
  set contentVisibility(value) {
    setCss2(this.name, {
      contentVisibility: value
    });
    this._updated();
  }
  get contentVisibility() {
    return getCss(this.name, "contentVisibility");
  }
  setContentVisibility(value) {
    this.contentVisibility = value;
    return this;
  }
  set counterIncrement(value) {
    setCss2(this.name, {
      counterIncrement: value
    });
    this._updated();
  }
  get counterIncrement() {
    return getCss(this.name, "counterIncrement");
  }
  setCounterIncrement(value) {
    this.counterIncrement = value;
    return this;
  }
  set counterReset(value) {
    setCss2(this.name, {
      counterReset: value
    });
    this._updated();
  }
  get counterReset() {
    return getCss(this.name, "counterReset");
  }
  setCounterReset(value) {
    this.counterReset = value;
    return this;
  }
  set counterSet(value) {
    setCss2(this.name, {
      counterSet: value
    });
    this._updated();
  }
  get counterSet() {
    return getCss(this.name, "counterSet");
  }
  setCounterSet(value) {
    this.counterSet = value;
    return this;
  }
  set cursor(value) {
    setCss2(this.name, {
      cursor: value
    });
    this._updated();
  }
  get cursor() {
    return getCss(this.name, "cursor");
  }
  setCursor(value) {
    this.cursor = value;
    return this;
  }
  set cx(value) {
    setCss2(this.name, {
      cx: value
    });
    this._updated();
  }
  get cx() {
    return getCss(this.name, "cx");
  }
  setCx(value) {
    this.cx = value;
    return this;
  }
  set cy(value) {
    setCss2(this.name, {
      cy: value
    });
    this._updated();
  }
  get cy() {
    return getCss(this.name, "cy");
  }
  setCy(value) {
    this.cy = value;
    return this;
  }
  set d(value) {
    setCss2(this.name, {
      d: value
    });
    this._updated();
  }
  get d() {
    return getCss(this.name, "d");
  }
  setD(value) {
    this.d = value;
    return this;
  }
  set descentOverride(value) {
    setCss2(this.name, {
      descentOverride: value
    });
    this._updated();
  }
  get descentOverride() {
    return getCss(this.name, "descentOverride");
  }
  setDescentOverride(value) {
    this.descentOverride = value;
    return this;
  }
  set direction(value) {
    setCss2(this.name, {
      direction: value
    });
    this._updated();
  }
  get direction() {
    return getCss(this.name, "direction");
  }
  setDirection(value) {
    this.direction = value;
    return this;
  }
  set display(value) {
    setCss2(this.name, {
      display: value
    });
    this._updated();
  }
  get display() {
    return getCss(this.name, "display");
  }
  setDisplay(value) {
    this.display = value;
    return this;
  }
  set dominantBaseline(value) {
    setCss2(this.name, {
      dominantBaseline: value
    });
    this._updated();
  }
  get dominantBaseline() {
    return getCss(this.name, "dominantBaseline");
  }
  setDominantBaseline(value) {
    this.dominantBaseline = value;
    return this;
  }
  set emptyCells(value) {
    setCss2(this.name, {
      emptyCells: value
    });
    this._updated();
  }
  get emptyCells() {
    return getCss(this.name, "emptyCells");
  }
  setEmptyCells(value) {
    this.emptyCells = value;
    return this;
  }
  set fallback(value) {
    setCss2(this.name, {
      fallback: value
    });
    this._updated();
  }
  get fallback() {
    return getCss(this.name, "fallback");
  }
  setFallback(value) {
    this.fallback = value;
    return this;
  }
  set fill(value) {
    setCss2(this.name, {
      fill: value
    });
    this._updated();
  }
  get fill() {
    return getCss(this.name, "fill");
  }
  setFill(value) {
    this.fill = value;
    return this;
  }
  set fillOpacity(value) {
    setCss2(this.name, {
      fillOpacity: value
    });
    this._updated();
  }
  get fillOpacity() {
    return getCss(this.name, "fillOpacity");
  }
  setFillOpacity(value) {
    this.fillOpacity = value;
    return this;
  }
  set fillRule(value) {
    setCss2(this.name, {
      fillRule: value
    });
    this._updated();
  }
  get fillRule() {
    return getCss(this.name, "fillRule");
  }
  setFillRule(value) {
    this.fillRule = value;
    return this;
  }
  set filter(value) {
    setCss2(this.name, {
      filter: value
    });
    this._updated();
  }
  get filter() {
    return getCss(this.name, "filter");
  }
  setFilter(value) {
    this.filter = value;
    return this;
  }
  set flex(value) {
    setCss2(this.name, {
      flex: value
    });
    this._updated();
  }
  get flex() {
    return getCss(this.name, "flex");
  }
  setFlex(value) {
    this.flex = value;
    return this;
  }
  set flexBasis(value) {
    setCss2(this.name, {
      flexBasis: value
    });
    this._updated();
  }
  get flexBasis() {
    return getCss(this.name, "flexBasis");
  }
  setFlexBasis(value) {
    this.flexBasis = value;
    return this;
  }
  set flexDirection(value) {
    setCss2(this.name, {
      flexDirection: value
    });
    this._updated();
  }
  get flexDirection() {
    return getCss(this.name, "flexDirection");
  }
  setFlexDirection(value) {
    this.flexDirection = value;
    return this;
  }
  set flexFlow(value) {
    setCss2(this.name, {
      flexFlow: value
    });
    this._updated();
  }
  get flexFlow() {
    return getCss(this.name, "flexFlow");
  }
  setFlexFlow(value) {
    this.flexFlow = value;
    return this;
  }
  set flexGrow(value) {
    setCss2(this.name, {
      flexGrow: value
    });
    this._updated();
  }
  get flexGrow() {
    return getCss(this.name, "flexGrow");
  }
  setFlexGrow(value) {
    this.flexGrow = value;
    return this;
  }
  set flexShrink(value) {
    setCss2(this.name, {
      flexShrink: value
    });
    this._updated();
  }
  get flexShrink() {
    return getCss(this.name, "flexShrink");
  }
  setFlexShrink(value) {
    this.flexShrink = value;
    return this;
  }
  set flexWrap(value) {
    setCss2(this.name, {
      flexWrap: value
    });
    this._updated();
  }
  get flexWrap() {
    return getCss(this.name, "flexWrap");
  }
  setFlexWrap(value) {
    this.flexWrap = value;
    return this;
  }
  set float(value) {
    setCss2(this.name, {
      float: value
    });
    this._updated();
  }
  get float() {
    return getCss(this.name, "float");
  }
  setFloat(value) {
    this.float = value;
    return this;
  }
  set floodColor(value) {
    setCss2(this.name, {
      floodColor: value
    });
    this._updated();
  }
  get floodColor() {
    return getCss(this.name, "floodColor");
  }
  setFloodColor(value) {
    this.floodColor = value;
    return this;
  }
  set floodOpacity(value) {
    setCss2(this.name, {
      floodOpacity: value
    });
    this._updated();
  }
  get floodOpacity() {
    return getCss(this.name, "floodOpacity");
  }
  setFloodOpacity(value) {
    this.floodOpacity = value;
    return this;
  }
  set font(value) {
    setCss2(this.name, {
      font: value
    });
    this._updated();
  }
  get font() {
    return getCss(this.name, "font");
  }
  setFont(value) {
    this.font = value;
    return this;
  }
  set fontDisplay(value) {
    setCss2(this.name, {
      fontDisplay: value
    });
    this._updated();
  }
  get fontDisplay() {
    return getCss(this.name, "fontDisplay");
  }
  setFontDisplay(value) {
    this.fontDisplay = value;
    return this;
  }
  set fontFamily(value) {
    setCss2(this.name, {
      fontFamily: value
    });
    this._updated();
  }
  get fontFamily() {
    return getCss(this.name, "fontFamily");
  }
  setFontFamily(value) {
    this.fontFamily = value;
    return this;
  }
  set fontFeatureSettings(value) {
    setCss2(this.name, {
      fontFeatureSettings: value
    });
    this._updated();
  }
  get fontFeatureSettings() {
    return getCss(this.name, "fontFeatureSettings");
  }
  setFontFeatureSettings(value) {
    this.fontFeatureSettings = value;
    return this;
  }
  set fontKerning(value) {
    setCss2(this.name, {
      fontKerning: value
    });
    this._updated();
  }
  get fontKerning() {
    return getCss(this.name, "fontKerning");
  }
  setFontKerning(value) {
    this.fontKerning = value;
    return this;
  }
  set fontOpticalSizing(value) {
    setCss2(this.name, {
      fontOpticalSizing: value
    });
    this._updated();
  }
  get fontOpticalSizing() {
    return getCss(this.name, "fontOpticalSizing");
  }
  setFontOpticalSizing(value) {
    this.fontOpticalSizing = value;
    return this;
  }
  set fontPalette(value) {
    setCss2(this.name, {
      fontPalette: value
    });
    this._updated();
  }
  get fontPalette() {
    return getCss(this.name, "fontPalette");
  }
  setFontPalette(value) {
    this.fontPalette = value;
    return this;
  }
  set fontSize(value) {
    setCss2(this.name, {
      fontSize: value
    });
    this._updated();
  }
  get fontSize() {
    return getCss(this.name, "fontSize");
  }
  setFontSize(value) {
    this.fontSize = value;
    return this;
  }
  set fontStretch(value) {
    setCss2(this.name, {
      fontStretch: value
    });
    this._updated();
  }
  get fontStretch() {
    return getCss(this.name, "fontStretch");
  }
  setFontStretch(value) {
    this.fontStretch = value;
    return this;
  }
  set fontStyle(value) {
    setCss2(this.name, {
      fontStyle: value
    });
    this._updated();
  }
  get fontStyle() {
    return getCss(this.name, "fontStyle");
  }
  setFontStyle(value) {
    this.fontStyle = value;
    return this;
  }
  set fontSynthesis(value) {
    setCss2(this.name, {
      fontSynthesis: value
    });
    this._updated();
  }
  get fontSynthesis() {
    return getCss(this.name, "fontSynthesis");
  }
  setFontSynthesis(value) {
    this.fontSynthesis = value;
    return this;
  }
  set fontSynthesisSmallCaps(value) {
    setCss2(this.name, {
      fontSynthesisSmallCaps: value
    });
    this._updated();
  }
  get fontSynthesisSmallCaps() {
    return getCss(this.name, "fontSynthesisSmallCaps");
  }
  setFontSynthesisSmallCaps(value) {
    this.fontSynthesisSmallCaps = value;
    return this;
  }
  set fontSynthesisStyle(value) {
    setCss2(this.name, {
      fontSynthesisStyle: value
    });
    this._updated();
  }
  get fontSynthesisStyle() {
    return getCss(this.name, "fontSynthesisStyle");
  }
  setFontSynthesisStyle(value) {
    this.fontSynthesisStyle = value;
    return this;
  }
  set fontSynthesisWeight(value) {
    setCss2(this.name, {
      fontSynthesisWeight: value
    });
    this._updated();
  }
  get fontSynthesisWeight() {
    return getCss(this.name, "fontSynthesisWeight");
  }
  setFontSynthesisWeight(value) {
    this.fontSynthesisWeight = value;
    return this;
  }
  set fontVariant(value) {
    setCss2(this.name, {
      fontVariant: value
    });
    this._updated();
  }
  get fontVariant() {
    return getCss(this.name, "fontVariant");
  }
  setFontVariant(value) {
    this.fontVariant = value;
    return this;
  }
  set fontVariantAlternates(value) {
    setCss2(this.name, {
      fontVariantAlternates: value
    });
    this._updated();
  }
  get fontVariantAlternates() {
    return getCss(this.name, "fontVariantAlternates");
  }
  setFontVariantAlternates(value) {
    this.fontVariantAlternates = value;
    return this;
  }
  set fontVariantCaps(value) {
    setCss2(this.name, {
      fontVariantCaps: value
    });
    this._updated();
  }
  get fontVariantCaps() {
    return getCss(this.name, "fontVariantCaps");
  }
  setFontVariantCaps(value) {
    this.fontVariantCaps = value;
    return this;
  }
  set fontVariantEastAsian(value) {
    setCss2(this.name, {
      fontVariantEastAsian: value
    });
    this._updated();
  }
  get fontVariantEastAsian() {
    return getCss(this.name, "fontVariantEastAsian");
  }
  setFontVariantEastAsian(value) {
    this.fontVariantEastAsian = value;
    return this;
  }
  set fontVariantLigatures(value) {
    setCss2(this.name, {
      fontVariantLigatures: value
    });
    this._updated();
  }
  get fontVariantLigatures() {
    return getCss(this.name, "fontVariantLigatures");
  }
  setFontVariantLigatures(value) {
    this.fontVariantLigatures = value;
    return this;
  }
  set fontVariantNumeric(value) {
    setCss2(this.name, {
      fontVariantNumeric: value
    });
    this._updated();
  }
  get fontVariantNumeric() {
    return getCss(this.name, "fontVariantNumeric");
  }
  setFontVariantNumeric(value) {
    this.fontVariantNumeric = value;
    return this;
  }
  set fontVariantPosition(value) {
    setCss2(this.name, {
      fontVariantPosition: value
    });
    this._updated();
  }
  get fontVariantPosition() {
    return getCss(this.name, "fontVariantPosition");
  }
  setFontVariantPosition(value) {
    this.fontVariantPosition = value;
    return this;
  }
  set fontVariationSettings(value) {
    setCss2(this.name, {
      fontVariationSettings: value
    });
    this._updated();
  }
  get fontVariationSettings() {
    return getCss(this.name, "fontVariationSettings");
  }
  setFontVariationSettings(value) {
    this.fontVariationSettings = value;
    return this;
  }
  set fontWeight(value) {
    setCss2(this.name, {
      fontWeight: value
    });
    this._updated();
  }
  get fontWeight() {
    return getCss(this.name, "fontWeight");
  }
  setFontWeight(value) {
    this.fontWeight = value;
    return this;
  }
  set forcedColorAdjust(value) {
    setCss2(this.name, {
      forcedColorAdjust: value
    });
    this._updated();
  }
  get forcedColorAdjust() {
    return getCss(this.name, "forcedColorAdjust");
  }
  setForcedColorAdjust(value) {
    this.forcedColorAdjust = value;
    return this;
  }
  set gap(value) {
    setCss2(this.name, {
      gap: value
    });
    this._updated();
  }
  get gap() {
    return getCss(this.name, "gap");
  }
  setGap(value) {
    this.gap = value;
    return this;
  }
  set grid(value) {
    setCss2(this.name, {
      grid: value
    });
    this._updated();
  }
  get grid() {
    return getCss(this.name, "grid");
  }
  setGrid(value) {
    this.grid = value;
    return this;
  }
  set gridArea(value) {
    setCss2(this.name, {
      gridArea: value
    });
    this._updated();
  }
  get gridArea() {
    return getCss(this.name, "gridArea");
  }
  setGridArea(value) {
    this.gridArea = value;
    return this;
  }
  set gridAutoColumns(value) {
    setCss2(this.name, {
      gridAutoColumns: value
    });
    this._updated();
  }
  get gridAutoColumns() {
    return getCss(this.name, "gridAutoColumns");
  }
  setGridAutoColumns(value) {
    this.gridAutoColumns = value;
    return this;
  }
  set gridAutoFlow(value) {
    setCss2(this.name, {
      gridAutoFlow: value
    });
    this._updated();
  }
  get gridAutoFlow() {
    return getCss(this.name, "gridAutoFlow");
  }
  setGridAutoFlow(value) {
    this.gridAutoFlow = value;
    return this;
  }
  set gridAutoRows(value) {
    setCss2(this.name, {
      gridAutoRows: value
    });
    this._updated();
  }
  get gridAutoRows() {
    return getCss(this.name, "gridAutoRows");
  }
  setGridAutoRows(value) {
    this.gridAutoRows = value;
    return this;
  }
  set gridColumn(value) {
    setCss2(this.name, {
      gridColumn: value
    });
    this._updated();
  }
  get gridColumn() {
    return getCss(this.name, "gridColumn");
  }
  setGridColumn(value) {
    this.gridColumn = value;
    return this;
  }
  set gridColumnEnd(value) {
    setCss2(this.name, {
      gridColumnEnd: value
    });
    this._updated();
  }
  get gridColumnEnd() {
    return getCss(this.name, "gridColumnEnd");
  }
  setGridColumnEnd(value) {
    this.gridColumnEnd = value;
    return this;
  }
  set gridColumnGap(value) {
    setCss2(this.name, {
      gridColumnGap: value
    });
    this._updated();
  }
  get gridColumnGap() {
    return getCss(this.name, "gridColumnGap");
  }
  setGridColumnGap(value) {
    this.gridColumnGap = value;
    return this;
  }
  set gridColumnStart(value) {
    setCss2(this.name, {
      gridColumnStart: value
    });
    this._updated();
  }
  get gridColumnStart() {
    return getCss(this.name, "gridColumnStart");
  }
  setGridColumnStart(value) {
    this.gridColumnStart = value;
    return this;
  }
  set gridGap(value) {
    setCss2(this.name, {
      gridGap: value
    });
    this._updated();
  }
  get gridGap() {
    return getCss(this.name, "gridGap");
  }
  setGridGap(value) {
    this.gridGap = value;
    return this;
  }
  set gridRow(value) {
    setCss2(this.name, {
      gridRow: value
    });
    this._updated();
  }
  get gridRow() {
    return getCss(this.name, "gridRow");
  }
  setGridRow(value) {
    this.gridRow = value;
    return this;
  }
  set gridRowEnd(value) {
    setCss2(this.name, {
      gridRowEnd: value
    });
    this._updated();
  }
  get gridRowEnd() {
    return getCss(this.name, "gridRowEnd");
  }
  setGridRowEnd(value) {
    this.gridRowEnd = value;
    return this;
  }
  set gridRowGap(value) {
    setCss2(this.name, {
      gridRowGap: value
    });
    this._updated();
  }
  get gridRowGap() {
    return getCss(this.name, "gridRowGap");
  }
  setGridRowGap(value) {
    this.gridRowGap = value;
    return this;
  }
  set gridRowStart(value) {
    setCss2(this.name, {
      gridRowStart: value
    });
    this._updated();
  }
  get gridRowStart() {
    return getCss(this.name, "gridRowStart");
  }
  setGridRowStart(value) {
    this.gridRowStart = value;
    return this;
  }
  set gridTemplate(value) {
    setCss2(this.name, {
      gridTemplate: value
    });
    this._updated();
  }
  get gridTemplate() {
    return getCss(this.name, "gridTemplate");
  }
  setGridTemplate(value) {
    this.gridTemplate = value;
    return this;
  }
  set gridTemplateAreas(value) {
    setCss2(this.name, {
      gridTemplateAreas: value
    });
    this._updated();
  }
  get gridTemplateAreas() {
    return getCss(this.name, "gridTemplateAreas");
  }
  setGridTemplateAreas(value) {
    this.gridTemplateAreas = value;
    return this;
  }
  set gridTemplateColumns(value) {
    setCss2(this.name, {
      gridTemplateColumns: value
    });
    this._updated();
  }
  get gridTemplateColumns() {
    return getCss(this.name, "gridTemplateColumns");
  }
  setGridTemplateColumns(value) {
    this.gridTemplateColumns = value;
    return this;
  }
  set gridTemplateRows(value) {
    setCss2(this.name, {
      gridTemplateRows: value
    });
    this._updated();
  }
  get gridTemplateRows() {
    return getCss(this.name, "gridTemplateRows");
  }
  setGridTemplateRows(value) {
    this.gridTemplateRows = value;
    return this;
  }
  set height(value) {
    setCss2(this.name, {
      height: value
    });
    this._updated();
  }
  get height() {
    return getCss(this.name, "height");
  }
  setHeight(value) {
    this.height = value;
    return this;
  }
  set hyphenateCharacter(value) {
    setCss2(this.name, {
      hyphenateCharacter: value
    });
    this._updated();
  }
  get hyphenateCharacter() {
    return getCss(this.name, "hyphenateCharacter");
  }
  setHyphenateCharacter(value) {
    this.hyphenateCharacter = value;
    return this;
  }
  set hyphenateLimitChars(value) {
    setCss2(this.name, {
      hyphenateLimitChars: value
    });
    this._updated();
  }
  get hyphenateLimitChars() {
    return getCss(this.name, "hyphenateLimitChars");
  }
  setHyphenateLimitChars(value) {
    this.hyphenateLimitChars = value;
    return this;
  }
  set hyphens(value) {
    setCss2(this.name, {
      hyphens: value
    });
    this._updated();
  }
  get hyphens() {
    return getCss(this.name, "hyphens");
  }
  setHyphens(value) {
    this.hyphens = value;
    return this;
  }
  set imageOrientation(value) {
    setCss2(this.name, {
      imageOrientation: value
    });
    this._updated();
  }
  get imageOrientation() {
    return getCss(this.name, "imageOrientation");
  }
  setImageOrientation(value) {
    this.imageOrientation = value;
    return this;
  }
  set imageRendering(value) {
    setCss2(this.name, {
      imageRendering: value
    });
    this._updated();
  }
  get imageRendering() {
    return getCss(this.name, "imageRendering");
  }
  setImageRendering(value) {
    this.imageRendering = value;
    return this;
  }
  set inherits(value) {
    setCss2(this.name, {
      inherits: value
    });
    this._updated();
  }
  get inherits() {
    return getCss(this.name, "inherits");
  }
  setInherits(value) {
    this.inherits = value;
    return this;
  }
  set initialLetter(value) {
    setCss2(this.name, {
      initialLetter: value
    });
    this._updated();
  }
  get initialLetter() {
    return getCss(this.name, "initialLetter");
  }
  setInitialLetter(value) {
    this.initialLetter = value;
    return this;
  }
  set initialValue(value) {
    setCss2(this.name, {
      initialValue: value
    });
    this._updated();
  }
  get initialValue() {
    return getCss(this.name, "initialValue");
  }
  setInitialValue(value) {
    this.initialValue = value;
    return this;
  }
  set inlineSize(value) {
    setCss2(this.name, {
      inlineSize: value
    });
    this._updated();
  }
  get inlineSize() {
    return getCss(this.name, "inlineSize");
  }
  setInlineSize(value) {
    this.inlineSize = value;
    return this;
  }
  set inset(value) {
    setCss2(this.name, {
      inset: value
    });
    this._updated();
  }
  get inset() {
    return getCss(this.name, "inset");
  }
  setInset(value) {
    this.inset = value;
    return this;
  }
  set insetBlock(value) {
    setCss2(this.name, {
      insetBlock: value
    });
    this._updated();
  }
  get insetBlock() {
    return getCss(this.name, "insetBlock");
  }
  setInsetBlock(value) {
    this.insetBlock = value;
    return this;
  }
  set insetBlockEnd(value) {
    setCss2(this.name, {
      insetBlockEnd: value
    });
    this._updated();
  }
  get insetBlockEnd() {
    return getCss(this.name, "insetBlockEnd");
  }
  setInsetBlockEnd(value) {
    this.insetBlockEnd = value;
    return this;
  }
  set insetBlockStart(value) {
    setCss2(this.name, {
      insetBlockStart: value
    });
    this._updated();
  }
  get insetBlockStart() {
    return getCss(this.name, "insetBlockStart");
  }
  setInsetBlockStart(value) {
    this.insetBlockStart = value;
    return this;
  }
  set insetInline(value) {
    setCss2(this.name, {
      insetInline: value
    });
    this._updated();
  }
  get insetInline() {
    return getCss(this.name, "insetInline");
  }
  setInsetInline(value) {
    this.insetInline = value;
    return this;
  }
  set insetInlineEnd(value) {
    setCss2(this.name, {
      insetInlineEnd: value
    });
    this._updated();
  }
  get insetInlineEnd() {
    return getCss(this.name, "insetInlineEnd");
  }
  setInsetInlineEnd(value) {
    this.insetInlineEnd = value;
    return this;
  }
  set insetInlineStart(value) {
    setCss2(this.name, {
      insetInlineStart: value
    });
    this._updated();
  }
  get insetInlineStart() {
    return getCss(this.name, "insetInlineStart");
  }
  setInsetInlineStart(value) {
    this.insetInlineStart = value;
    return this;
  }
  set isolation(value) {
    setCss2(this.name, {
      isolation: value
    });
    this._updated();
  }
  get isolation() {
    return getCss(this.name, "isolation");
  }
  setIsolation(value) {
    this.isolation = value;
    return this;
  }
  set justifyContent(value) {
    setCss2(this.name, {
      justifyContent: value
    });
    this._updated();
  }
  get justifyContent() {
    return getCss(this.name, "justifyContent");
  }
  setJustifyContent(value) {
    this.justifyContent = value;
    return this;
  }
  set justifyItems(value) {
    setCss2(this.name, {
      justifyItems: value
    });
    this._updated();
  }
  get justifyItems() {
    return getCss(this.name, "justifyItems");
  }
  setJustifyItems(value) {
    this.justifyItems = value;
    return this;
  }
  set justifySelf(value) {
    setCss2(this.name, {
      justifySelf: value
    });
    this._updated();
  }
  get justifySelf() {
    return getCss(this.name, "justifySelf");
  }
  setJustifySelf(value) {
    this.justifySelf = value;
    return this;
  }
  set left(value) {
    setCss2(this.name, {
      left: value
    });
    this._updated();
  }
  get left() {
    return getCss(this.name, "left");
  }
  setLeft(value) {
    this.left = value;
    return this;
  }
  set letterSpacing(value) {
    setCss2(this.name, {
      letterSpacing: value
    });
    this._updated();
  }
  get letterSpacing() {
    return getCss(this.name, "letterSpacing");
  }
  setLetterSpacing(value) {
    this.letterSpacing = value;
    return this;
  }
  set lightingColor(value) {
    setCss2(this.name, {
      lightingColor: value
    });
    this._updated();
  }
  get lightingColor() {
    return getCss(this.name, "lightingColor");
  }
  setLightingColor(value) {
    this.lightingColor = value;
    return this;
  }
  set lineBreak(value) {
    setCss2(this.name, {
      lineBreak: value
    });
    this._updated();
  }
  get lineBreak() {
    return getCss(this.name, "lineBreak");
  }
  setLineBreak(value) {
    this.lineBreak = value;
    return this;
  }
  set lineGapOverride(value) {
    setCss2(this.name, {
      lineGapOverride: value
    });
    this._updated();
  }
  get lineGapOverride() {
    return getCss(this.name, "lineGapOverride");
  }
  setLineGapOverride(value) {
    this.lineGapOverride = value;
    return this;
  }
  set lineHeight(value) {
    setCss2(this.name, {
      lineHeight: value
    });
    this._updated();
  }
  get lineHeight() {
    return getCss(this.name, "lineHeight");
  }
  setLineHeight(value) {
    this.lineHeight = value;
    return this;
  }
  set listStyle(value) {
    setCss2(this.name, {
      listStyle: value
    });
    this._updated();
  }
  get listStyle() {
    return getCss(this.name, "listStyle");
  }
  setListStyle(value) {
    this.listStyle = value;
    return this;
  }
  set listStyleImage(value) {
    setCss2(this.name, {
      listStyleImage: value
    });
    this._updated();
  }
  get listStyleImage() {
    return getCss(this.name, "listStyleImage");
  }
  setListStyleImage(value) {
    this.listStyleImage = value;
    return this;
  }
  set listStylePosition(value) {
    setCss2(this.name, {
      listStylePosition: value
    });
    this._updated();
  }
  get listStylePosition() {
    return getCss(this.name, "listStylePosition");
  }
  setListStylePosition(value) {
    this.listStylePosition = value;
    return this;
  }
  set listStyleType(value) {
    setCss2(this.name, {
      listStyleType: value
    });
    this._updated();
  }
  get listStyleType() {
    return getCss(this.name, "listStyleType");
  }
  setListStyleType(value) {
    this.listStyleType = value;
    return this;
  }
  set margin(value) {
    setCss2(this.name, {
      margin: value
    });
    this._updated();
  }
  get margin() {
    return getCss(this.name, "margin");
  }
  setMargin(value) {
    this.margin = value;
    return this;
  }
  set marginBlock(value) {
    setCss2(this.name, {
      marginBlock: value
    });
    this._updated();
  }
  get marginBlock() {
    return getCss(this.name, "marginBlock");
  }
  setMarginBlock(value) {
    this.marginBlock = value;
    return this;
  }
  set marginBlockEnd(value) {
    setCss2(this.name, {
      marginBlockEnd: value
    });
    this._updated();
  }
  get marginBlockEnd() {
    return getCss(this.name, "marginBlockEnd");
  }
  setMarginBlockEnd(value) {
    this.marginBlockEnd = value;
    return this;
  }
  set marginBlockStart(value) {
    setCss2(this.name, {
      marginBlockStart: value
    });
    this._updated();
  }
  get marginBlockStart() {
    return getCss(this.name, "marginBlockStart");
  }
  setMarginBlockStart(value) {
    this.marginBlockStart = value;
    return this;
  }
  set marginBottom(value) {
    setCss2(this.name, {
      marginBottom: value
    });
    this._updated();
  }
  get marginBottom() {
    return getCss(this.name, "marginBottom");
  }
  setMarginBottom(value) {
    this.marginBottom = value;
    return this;
  }
  set marginInline(value) {
    setCss2(this.name, {
      marginInline: value
    });
    this._updated();
  }
  get marginInline() {
    return getCss(this.name, "marginInline");
  }
  setMarginInline(value) {
    this.marginInline = value;
    return this;
  }
  set marginInlineEnd(value) {
    setCss2(this.name, {
      marginInlineEnd: value
    });
    this._updated();
  }
  get marginInlineEnd() {
    return getCss(this.name, "marginInlineEnd");
  }
  setMarginInlineEnd(value) {
    this.marginInlineEnd = value;
    return this;
  }
  set marginInlineStart(value) {
    setCss2(this.name, {
      marginInlineStart: value
    });
    this._updated();
  }
  get marginInlineStart() {
    return getCss(this.name, "marginInlineStart");
  }
  setMarginInlineStart(value) {
    this.marginInlineStart = value;
    return this;
  }
  set marginLeft(value) {
    setCss2(this.name, {
      marginLeft: value
    });
    this._updated();
  }
  get marginLeft() {
    return getCss(this.name, "marginLeft");
  }
  setMarginLeft(value) {
    this.marginLeft = value;
    return this;
  }
  set marginRight(value) {
    setCss2(this.name, {
      marginRight: value
    });
    this._updated();
  }
  get marginRight() {
    return getCss(this.name, "marginRight");
  }
  setMarginRight(value) {
    this.marginRight = value;
    return this;
  }
  set marginTop(value) {
    setCss2(this.name, {
      marginTop: value
    });
    this._updated();
  }
  get marginTop() {
    return getCss(this.name, "marginTop");
  }
  setMarginTop(value) {
    this.marginTop = value;
    return this;
  }
  set marker(value) {
    setCss2(this.name, {
      marker: value
    });
    this._updated();
  }
  get marker() {
    return getCss(this.name, "marker");
  }
  setMarker(value) {
    this.marker = value;
    return this;
  }
  set markerEnd(value) {
    setCss2(this.name, {
      markerEnd: value
    });
    this._updated();
  }
  get markerEnd() {
    return getCss(this.name, "markerEnd");
  }
  setMarkerEnd(value) {
    this.markerEnd = value;
    return this;
  }
  set markerMid(value) {
    setCss2(this.name, {
      markerMid: value
    });
    this._updated();
  }
  get markerMid() {
    return getCss(this.name, "markerMid");
  }
  setMarkerMid(value) {
    this.markerMid = value;
    return this;
  }
  set markerStart(value) {
    setCss2(this.name, {
      markerStart: value
    });
    this._updated();
  }
  get markerStart() {
    return getCss(this.name, "markerStart");
  }
  setMarkerStart(value) {
    this.markerStart = value;
    return this;
  }
  set mask(value) {
    setCss2(this.name, {
      mask: value
    });
    this._updated();
  }
  get mask() {
    return getCss(this.name, "mask");
  }
  setMask(value) {
    this.mask = value;
    return this;
  }
  set maskType(value) {
    setCss2(this.name, {
      maskType: value
    });
    this._updated();
  }
  get maskType() {
    return getCss(this.name, "maskType");
  }
  setMaskType(value) {
    this.maskType = value;
    return this;
  }
  set mathDepth(value) {
    setCss2(this.name, {
      mathDepth: value
    });
    this._updated();
  }
  get mathDepth() {
    return getCss(this.name, "mathDepth");
  }
  setMathDepth(value) {
    this.mathDepth = value;
    return this;
  }
  set mathShift(value) {
    setCss2(this.name, {
      mathShift: value
    });
    this._updated();
  }
  get mathShift() {
    return getCss(this.name, "mathShift");
  }
  setMathShift(value) {
    this.mathShift = value;
    return this;
  }
  set mathStyle(value) {
    setCss2(this.name, {
      mathStyle: value
    });
    this._updated();
  }
  get mathStyle() {
    return getCss(this.name, "mathStyle");
  }
  setMathStyle(value) {
    this.mathStyle = value;
    return this;
  }
  set maxBlockSize(value) {
    setCss2(this.name, {
      maxBlockSize: value
    });
    this._updated();
  }
  get maxBlockSize() {
    return getCss(this.name, "maxBlockSize");
  }
  setMaxBlockSize(value) {
    this.maxBlockSize = value;
    return this;
  }
  set maxHeight(value) {
    setCss2(this.name, {
      maxHeight: value
    });
    this._updated();
  }
  get maxHeight() {
    return getCss(this.name, "maxHeight");
  }
  setMaxHeight(value) {
    this.maxHeight = value;
    return this;
  }
  set maxInlineSize(value) {
    setCss2(this.name, {
      maxInlineSize: value
    });
    this._updated();
  }
  get maxInlineSize() {
    return getCss(this.name, "maxInlineSize");
  }
  setMaxInlineSize(value) {
    this.maxInlineSize = value;
    return this;
  }
  set maxWidth(value) {
    setCss2(this.name, {
      maxWidth: value
    });
    this._updated();
  }
  get maxWidth() {
    return getCss(this.name, "maxWidth");
  }
  setMaxWidth(value) {
    this.maxWidth = value;
    return this;
  }
  set minBlockSize(value) {
    setCss2(this.name, {
      minBlockSize: value
    });
    this._updated();
  }
  get minBlockSize() {
    return getCss(this.name, "minBlockSize");
  }
  setMinBlockSize(value) {
    this.minBlockSize = value;
    return this;
  }
  set minHeight(value) {
    setCss2(this.name, {
      minHeight: value
    });
    this._updated();
  }
  get minHeight() {
    return getCss(this.name, "minHeight");
  }
  setMinHeight(value) {
    this.minHeight = value;
    return this;
  }
  set minInlineSize(value) {
    setCss2(this.name, {
      minInlineSize: value
    });
    this._updated();
  }
  get minInlineSize() {
    return getCss(this.name, "minInlineSize");
  }
  setMinInlineSize(value) {
    this.minInlineSize = value;
    return this;
  }
  set minWidth(value) {
    setCss2(this.name, {
      minWidth: value
    });
    this._updated();
  }
  get minWidth() {
    return getCss(this.name, "minWidth");
  }
  setMinWidth(value) {
    this.minWidth = value;
    return this;
  }
  set mixBlendMode(value) {
    setCss2(this.name, {
      mixBlendMode: value
    });
    this._updated();
  }
  get mixBlendMode() {
    return getCss(this.name, "mixBlendMode");
  }
  setMixBlendMode(value) {
    this.mixBlendMode = value;
    return this;
  }
  set negative(value) {
    setCss2(this.name, {
      negative: value
    });
    this._updated();
  }
  get negative() {
    return getCss(this.name, "negative");
  }
  setNegative(value) {
    this.negative = value;
    return this;
  }
  set objectFit(value) {
    setCss2(this.name, {
      objectFit: value
    });
    this._updated();
  }
  get objectFit() {
    return getCss(this.name, "objectFit");
  }
  setObjectFit(value) {
    this.objectFit = value;
    return this;
  }
  set objectPosition(value) {
    setCss2(this.name, {
      objectPosition: value
    });
    this._updated();
  }
  get objectPosition() {
    return getCss(this.name, "objectPosition");
  }
  setObjectPosition(value) {
    this.objectPosition = value;
    return this;
  }
  set objectViewBox(value) {
    setCss2(this.name, {
      objectViewBox: value
    });
    this._updated();
  }
  get objectViewBox() {
    return getCss(this.name, "objectViewBox");
  }
  setObjectViewBox(value) {
    this.objectViewBox = value;
    return this;
  }
  set offset(value) {
    setCss2(this.name, {
      offset: value
    });
    this._updated();
  }
  get offset() {
    return getCss(this.name, "offset");
  }
  setOffset(value) {
    this.offset = value;
    return this;
  }
  set offsetAnchor(value) {
    setCss2(this.name, {
      offsetAnchor: value
    });
    this._updated();
  }
  get offsetAnchor() {
    return getCss(this.name, "offsetAnchor");
  }
  setOffsetAnchor(value) {
    this.offsetAnchor = value;
    return this;
  }
  set offsetDistance(value) {
    setCss2(this.name, {
      offsetDistance: value
    });
    this._updated();
  }
  get offsetDistance() {
    return getCss(this.name, "offsetDistance");
  }
  setOffsetDistance(value) {
    this.offsetDistance = value;
    return this;
  }
  set offsetPath(value) {
    setCss2(this.name, {
      offsetPath: value
    });
    this._updated();
  }
  get offsetPath() {
    return getCss(this.name, "offsetPath");
  }
  setOffsetPath(value) {
    this.offsetPath = value;
    return this;
  }
  set offsetPosition(value) {
    setCss2(this.name, {
      offsetPosition: value
    });
    this._updated();
  }
  get offsetPosition() {
    return getCss(this.name, "offsetPosition");
  }
  setOffsetPosition(value) {
    this.offsetPosition = value;
    return this;
  }
  set offsetRotate(value) {
    setCss2(this.name, {
      offsetRotate: value
    });
    this._updated();
  }
  get offsetRotate() {
    return getCss(this.name, "offsetRotate");
  }
  setOffsetRotate(value) {
    this.offsetRotate = value;
    return this;
  }
  set opacity(value) {
    setCss2(this.name, {
      opacity: value
    });
    this._updated();
  }
  get opacity() {
    return getCss(this.name, "opacity");
  }
  setOpacity(value) {
    this.opacity = value;
    return this;
  }
  set order(value) {
    setCss2(this.name, {
      order: value
    });
    this._updated();
  }
  get order() {
    return getCss(this.name, "order");
  }
  setOrder(value) {
    this.order = value;
    return this;
  }
  set orphans(value) {
    setCss2(this.name, {
      orphans: value
    });
    this._updated();
  }
  get orphans() {
    return getCss(this.name, "orphans");
  }
  setOrphans(value) {
    this.orphans = value;
    return this;
  }
  set outline(value) {
    setCss2(this.name, {
      outline: value
    });
    this._updated();
  }
  get outline() {
    return getCss(this.name, "outline");
  }
  setOutline(value) {
    this.outline = value;
    return this;
  }
  set outlineColor(value) {
    setCss2(this.name, {
      outlineColor: value
    });
    this._updated();
  }
  get outlineColor() {
    return getCss(this.name, "outlineColor");
  }
  setOutlineColor(value) {
    this.outlineColor = value;
    return this;
  }
  set outlineOffset(value) {
    setCss2(this.name, {
      outlineOffset: value
    });
    this._updated();
  }
  get outlineOffset() {
    return getCss(this.name, "outlineOffset");
  }
  setOutlineOffset(value) {
    this.outlineOffset = value;
    return this;
  }
  set outlineStyle(value) {
    setCss2(this.name, {
      outlineStyle: value
    });
    this._updated();
  }
  get outlineStyle() {
    return getCss(this.name, "outlineStyle");
  }
  setOutlineStyle(value) {
    this.outlineStyle = value;
    return this;
  }
  set outlineWidth(value) {
    setCss2(this.name, {
      outlineWidth: value
    });
    this._updated();
  }
  get outlineWidth() {
    return getCss(this.name, "outlineWidth");
  }
  setOutlineWidth(value) {
    this.outlineWidth = value;
    return this;
  }
  set overflow(value) {
    setCss2(this.name, {
      overflow: value
    });
    this._updated();
  }
  get overflow() {
    return getCss(this.name, "overflow");
  }
  setOverflow(value) {
    this.overflow = value;
    return this;
  }
  set overflowAnchor(value) {
    setCss2(this.name, {
      overflowAnchor: value
    });
    this._updated();
  }
  get overflowAnchor() {
    return getCss(this.name, "overflowAnchor");
  }
  setOverflowAnchor(value) {
    this.overflowAnchor = value;
    return this;
  }
  set overflowClipMargin(value) {
    setCss2(this.name, {
      overflowClipMargin: value
    });
    this._updated();
  }
  get overflowClipMargin() {
    return getCss(this.name, "overflowClipMargin");
  }
  setOverflowClipMargin(value) {
    this.overflowClipMargin = value;
    return this;
  }
  set overflowWrap(value) {
    setCss2(this.name, {
      overflowWrap: value
    });
    this._updated();
  }
  get overflowWrap() {
    return getCss(this.name, "overflowWrap");
  }
  setOverflowWrap(value) {
    this.overflowWrap = value;
    return this;
  }
  set overflowX(value) {
    setCss2(this.name, {
      overflowX: value
    });
    this._updated();
  }
  get overflowX() {
    return getCss(this.name, "overflowX");
  }
  setOverflowX(value) {
    this.overflowX = value;
    return this;
  }
  set overflowY(value) {
    setCss2(this.name, {
      overflowY: value
    });
    this._updated();
  }
  get overflowY() {
    return getCss(this.name, "overflowY");
  }
  setOverflowY(value) {
    this.overflowY = value;
    return this;
  }
  set overlay(value) {
    setCss2(this.name, {
      overlay: value
    });
    this._updated();
  }
  get overlay() {
    return getCss(this.name, "overlay");
  }
  setOverlay(value) {
    this.overlay = value;
    return this;
  }
  set overrideColors(value) {
    setCss2(this.name, {
      overrideColors: value
    });
    this._updated();
  }
  get overrideColors() {
    return getCss(this.name, "overrideColors");
  }
  setOverrideColors(value) {
    this.overrideColors = value;
    return this;
  }
  set overscrollBehavior(value) {
    setCss2(this.name, {
      overscrollBehavior: value
    });
    this._updated();
  }
  get overscrollBehavior() {
    return getCss(this.name, "overscrollBehavior");
  }
  setOverscrollBehavior(value) {
    this.overscrollBehavior = value;
    return this;
  }
  set overscrollBehaviorBlock(value) {
    setCss2(this.name, {
      overscrollBehaviorBlock: value
    });
    this._updated();
  }
  get overscrollBehaviorBlock() {
    return getCss(this.name, "overscrollBehaviorBlock");
  }
  setOverscrollBehaviorBlock(value) {
    this.overscrollBehaviorBlock = value;
    return this;
  }
  set overscrollBehaviorInline(value) {
    setCss2(this.name, {
      overscrollBehaviorInline: value
    });
    this._updated();
  }
  get overscrollBehaviorInline() {
    return getCss(this.name, "overscrollBehaviorInline");
  }
  setOverscrollBehaviorInline(value) {
    this.overscrollBehaviorInline = value;
    return this;
  }
  set overscrollBehaviorX(value) {
    setCss2(this.name, {
      overscrollBehaviorX: value
    });
    this._updated();
  }
  get overscrollBehaviorX() {
    return getCss(this.name, "overscrollBehaviorX");
  }
  setOverscrollBehaviorX(value) {
    this.overscrollBehaviorX = value;
    return this;
  }
  set overscrollBehaviorY(value) {
    setCss2(this.name, {
      overscrollBehaviorY: value
    });
    this._updated();
  }
  get overscrollBehaviorY() {
    return getCss(this.name, "overscrollBehaviorY");
  }
  setOverscrollBehaviorY(value) {
    this.overscrollBehaviorY = value;
    return this;
  }
  set pad(value) {
    setCss2(this.name, {
      pad: value
    });
    this._updated();
  }
  get pad() {
    return getCss(this.name, "pad");
  }
  setPad(value) {
    this.pad = value;
    return this;
  }
  set padding(value) {
    setCss2(this.name, {
      padding: value
    });
    this._updated();
  }
  get padding() {
    return getCss(this.name, "padding");
  }
  setPadding(value) {
    this.padding = value;
    return this;
  }
  set paddingBlock(value) {
    setCss2(this.name, {
      paddingBlock: value
    });
    this._updated();
  }
  get paddingBlock() {
    return getCss(this.name, "paddingBlock");
  }
  setPaddingBlock(value) {
    this.paddingBlock = value;
    return this;
  }
  set paddingBlockEnd(value) {
    setCss2(this.name, {
      paddingBlockEnd: value
    });
    this._updated();
  }
  get paddingBlockEnd() {
    return getCss(this.name, "paddingBlockEnd");
  }
  setPaddingBlockEnd(value) {
    this.paddingBlockEnd = value;
    return this;
  }
  set paddingBlockStart(value) {
    setCss2(this.name, {
      paddingBlockStart: value
    });
    this._updated();
  }
  get paddingBlockStart() {
    return getCss(this.name, "paddingBlockStart");
  }
  setPaddingBlockStart(value) {
    this.paddingBlockStart = value;
    return this;
  }
  set paddingBottom(value) {
    setCss2(this.name, {
      paddingBottom: value
    });
    this._updated();
  }
  get paddingBottom() {
    return getCss(this.name, "paddingBottom");
  }
  setPaddingBottom(value) {
    this.paddingBottom = value;
    return this;
  }
  set paddingInline(value) {
    setCss2(this.name, {
      paddingInline: value
    });
    this._updated();
  }
  get paddingInline() {
    return getCss(this.name, "paddingInline");
  }
  setPaddingInline(value) {
    this.paddingInline = value;
    return this;
  }
  set paddingInlineEnd(value) {
    setCss2(this.name, {
      paddingInlineEnd: value
    });
    this._updated();
  }
  get paddingInlineEnd() {
    return getCss(this.name, "paddingInlineEnd");
  }
  setPaddingInlineEnd(value) {
    this.paddingInlineEnd = value;
    return this;
  }
  set paddingInlineStart(value) {
    setCss2(this.name, {
      paddingInlineStart: value
    });
    this._updated();
  }
  get paddingInlineStart() {
    return getCss(this.name, "paddingInlineStart");
  }
  setPaddingInlineStart(value) {
    this.paddingInlineStart = value;
    return this;
  }
  set paddingLeft(value) {
    setCss2(this.name, {
      paddingLeft: value
    });
    this._updated();
  }
  get paddingLeft() {
    return getCss(this.name, "paddingLeft");
  }
  setPaddingLeft(value) {
    this.paddingLeft = value;
    return this;
  }
  set paddingRight(value) {
    setCss2(this.name, {
      paddingRight: value
    });
    this._updated();
  }
  get paddingRight() {
    return getCss(this.name, "paddingRight");
  }
  setPaddingRight(value) {
    this.paddingRight = value;
    return this;
  }
  set paddingTop(value) {
    setCss2(this.name, {
      paddingTop: value
    });
    this._updated();
  }
  get paddingTop() {
    return getCss(this.name, "paddingTop");
  }
  setPaddingTop(value) {
    this.paddingTop = value;
    return this;
  }
  set page(value) {
    setCss2(this.name, {
      page: value
    });
    this._updated();
  }
  get page() {
    return getCss(this.name, "page");
  }
  setPage(value) {
    this.page = value;
    return this;
  }
  set pageBreakAfter(value) {
    setCss2(this.name, {
      pageBreakAfter: value
    });
    this._updated();
  }
  get pageBreakAfter() {
    return getCss(this.name, "pageBreakAfter");
  }
  setPageBreakAfter(value) {
    this.pageBreakAfter = value;
    return this;
  }
  set pageBreakBefore(value) {
    setCss2(this.name, {
      pageBreakBefore: value
    });
    this._updated();
  }
  get pageBreakBefore() {
    return getCss(this.name, "pageBreakBefore");
  }
  setPageBreakBefore(value) {
    this.pageBreakBefore = value;
    return this;
  }
  set pageBreakInside(value) {
    setCss2(this.name, {
      pageBreakInside: value
    });
    this._updated();
  }
  get pageBreakInside() {
    return getCss(this.name, "pageBreakInside");
  }
  setPageBreakInside(value) {
    this.pageBreakInside = value;
    return this;
  }
  set pageOrientation(value) {
    setCss2(this.name, {
      pageOrientation: value
    });
    this._updated();
  }
  get pageOrientation() {
    return getCss(this.name, "pageOrientation");
  }
  setPageOrientation(value) {
    this.pageOrientation = value;
    return this;
  }
  set paintOrder(value) {
    setCss2(this.name, {
      paintOrder: value
    });
    this._updated();
  }
  get paintOrder() {
    return getCss(this.name, "paintOrder");
  }
  setPaintOrder(value) {
    this.paintOrder = value;
    return this;
  }
  set perspective(value) {
    setCss2(this.name, {
      perspective: value
    });
    this._updated();
  }
  get perspective() {
    return getCss(this.name, "perspective");
  }
  setPerspective(value) {
    this.perspective = value;
    return this;
  }
  set perspectiveOrigin(value) {
    setCss2(this.name, {
      perspectiveOrigin: value
    });
    this._updated();
  }
  get perspectiveOrigin() {
    return getCss(this.name, "perspectiveOrigin");
  }
  setPerspectiveOrigin(value) {
    this.perspectiveOrigin = value;
    return this;
  }
  set placeContent(value) {
    setCss2(this.name, {
      placeContent: value
    });
    this._updated();
  }
  get placeContent() {
    return getCss(this.name, "placeContent");
  }
  setPlaceContent(value) {
    this.placeContent = value;
    return this;
  }
  set placeItems(value) {
    setCss2(this.name, {
      placeItems: value
    });
    this._updated();
  }
  get placeItems() {
    return getCss(this.name, "placeItems");
  }
  setPlaceItems(value) {
    this.placeItems = value;
    return this;
  }
  set placeSelf(value) {
    setCss2(this.name, {
      placeSelf: value
    });
    this._updated();
  }
  get placeSelf() {
    return getCss(this.name, "placeSelf");
  }
  setPlaceSelf(value) {
    this.placeSelf = value;
    return this;
  }
  set pointerEvents(value) {
    setCss2(this.name, {
      pointerEvents: value
    });
    this._updated();
  }
  get pointerEvents() {
    return getCss(this.name, "pointerEvents");
  }
  setPointerEvents(value) {
    this.pointerEvents = value;
    return this;
  }
  set position(value) {
    setCss2(this.name, {
      position: value
    });
    this._updated();
  }
  get position() {
    return getCss(this.name, "position");
  }
  setPosition(value) {
    this.position = value;
    return this;
  }
  set prefix(value) {
    setCss2(this.name, {
      prefix: value
    });
    this._updated();
  }
  get prefix() {
    return getCss(this.name, "prefix");
  }
  setPrefix(value) {
    this.prefix = value;
    return this;
  }
  set quotes(value) {
    setCss2(this.name, {
      quotes: value
    });
    this._updated();
  }
  get quotes() {
    return getCss(this.name, "quotes");
  }
  setQuotes(value) {
    this.quotes = value;
    return this;
  }
  set r(value) {
    setCss2(this.name, {
      r: value
    });
    this._updated();
  }
  get r() {
    return getCss(this.name, "r");
  }
  setR(value) {
    this.r = value;
    return this;
  }
  set range(value) {
    setCss2(this.name, {
      range: value
    });
    this._updated();
  }
  get range() {
    return getCss(this.name, "range");
  }
  setRange(value) {
    this.range = value;
    return this;
  }
  set resize(value) {
    setCss2(this.name, {
      resize: value
    });
    this._updated();
  }
  get resize() {
    return getCss(this.name, "resize");
  }
  setResize(value) {
    this.resize = value;
    return this;
  }
  set right(value) {
    setCss2(this.name, {
      right: value
    });
    this._updated();
  }
  get right() {
    return getCss(this.name, "right");
  }
  setRight(value) {
    this.right = value;
    return this;
  }
  set rotate(value) {
    setCss2(this.name, {
      rotate: value
    });
    this._updated();
  }
  get rotate() {
    return getCss(this.name, "rotate");
  }
  setRotate(value) {
    this.rotate = value;
    return this;
  }
  set rowGap(value) {
    setCss2(this.name, {
      rowGap: value
    });
    this._updated();
  }
  get rowGap() {
    return getCss(this.name, "rowGap");
  }
  setRowGap(value) {
    this.rowGap = value;
    return this;
  }
  set rubyPosition(value) {
    setCss2(this.name, {
      rubyPosition: value
    });
    this._updated();
  }
  get rubyPosition() {
    return getCss(this.name, "rubyPosition");
  }
  setRubyPosition(value) {
    this.rubyPosition = value;
    return this;
  }
  set rx(value) {
    setCss2(this.name, {
      rx: value
    });
    this._updated();
  }
  get rx() {
    return getCss(this.name, "rx");
  }
  setRx(value) {
    this.rx = value;
    return this;
  }
  set ry(value) {
    setCss2(this.name, {
      ry: value
    });
    this._updated();
  }
  get ry() {
    return getCss(this.name, "ry");
  }
  setRy(value) {
    this.ry = value;
    return this;
  }
  set scale(value) {
    setCss2(this.name, {
      scale: value
    });
    this._updated();
  }
  get scale() {
    return getCss(this.name, "scale");
  }
  setScale(value) {
    this.scale = value;
    return this;
  }
  set scrollBehavior(value) {
    setCss2(this.name, {
      scrollBehavior: value
    });
    this._updated();
  }
  get scrollBehavior() {
    return getCss(this.name, "scrollBehavior");
  }
  setScrollBehavior(value) {
    this.scrollBehavior = value;
    return this;
  }
  set scrollMargin(value) {
    setCss2(this.name, {
      scrollMargin: value
    });
    this._updated();
  }
  get scrollMargin() {
    return getCss(this.name, "scrollMargin");
  }
  setScrollMargin(value) {
    this.scrollMargin = value;
    return this;
  }
  set scrollMarginBlock(value) {
    setCss2(this.name, {
      scrollMarginBlock: value
    });
    this._updated();
  }
  get scrollMarginBlock() {
    return getCss(this.name, "scrollMarginBlock");
  }
  setScrollMarginBlock(value) {
    this.scrollMarginBlock = value;
    return this;
  }
  set scrollMarginBlockEnd(value) {
    setCss2(this.name, {
      scrollMarginBlockEnd: value
    });
    this._updated();
  }
  get scrollMarginBlockEnd() {
    return getCss(this.name, "scrollMarginBlockEnd");
  }
  setScrollMarginBlockEnd(value) {
    this.scrollMarginBlockEnd = value;
    return this;
  }
  set scrollMarginBlockStart(value) {
    setCss2(this.name, {
      scrollMarginBlockStart: value
    });
    this._updated();
  }
  get scrollMarginBlockStart() {
    return getCss(this.name, "scrollMarginBlockStart");
  }
  setScrollMarginBlockStart(value) {
    this.scrollMarginBlockStart = value;
    return this;
  }
  set scrollMarginBottom(value) {
    setCss2(this.name, {
      scrollMarginBottom: value
    });
    this._updated();
  }
  get scrollMarginBottom() {
    return getCss(this.name, "scrollMarginBottom");
  }
  setScrollMarginBottom(value) {
    this.scrollMarginBottom = value;
    return this;
  }
  set scrollMarginInline(value) {
    setCss2(this.name, {
      scrollMarginInline: value
    });
    this._updated();
  }
  get scrollMarginInline() {
    return getCss(this.name, "scrollMarginInline");
  }
  setScrollMarginInline(value) {
    this.scrollMarginInline = value;
    return this;
  }
  set scrollMarginInlineEnd(value) {
    setCss2(this.name, {
      scrollMarginInlineEnd: value
    });
    this._updated();
  }
  get scrollMarginInlineEnd() {
    return getCss(this.name, "scrollMarginInlineEnd");
  }
  setScrollMarginInlineEnd(value) {
    this.scrollMarginInlineEnd = value;
    return this;
  }
  set scrollMarginInlineStart(value) {
    setCss2(this.name, {
      scrollMarginInlineStart: value
    });
    this._updated();
  }
  get scrollMarginInlineStart() {
    return getCss(this.name, "scrollMarginInlineStart");
  }
  setScrollMarginInlineStart(value) {
    this.scrollMarginInlineStart = value;
    return this;
  }
  set scrollMarginLeft(value) {
    setCss2(this.name, {
      scrollMarginLeft: value
    });
    this._updated();
  }
  get scrollMarginLeft() {
    return getCss(this.name, "scrollMarginLeft");
  }
  setScrollMarginLeft(value) {
    this.scrollMarginLeft = value;
    return this;
  }
  set scrollMarginRight(value) {
    setCss2(this.name, {
      scrollMarginRight: value
    });
    this._updated();
  }
  get scrollMarginRight() {
    return getCss(this.name, "scrollMarginRight");
  }
  setScrollMarginRight(value) {
    this.scrollMarginRight = value;
    return this;
  }
  set scrollMarginTop(value) {
    setCss2(this.name, {
      scrollMarginTop: value
    });
    this._updated();
  }
  get scrollMarginTop() {
    return getCss(this.name, "scrollMarginTop");
  }
  setScrollMarginTop(value) {
    this.scrollMarginTop = value;
    return this;
  }
  set scrollPadding(value) {
    setCss2(this.name, {
      scrollPadding: value
    });
    this._updated();
  }
  get scrollPadding() {
    return getCss(this.name, "scrollPadding");
  }
  setScrollPadding(value) {
    this.scrollPadding = value;
    return this;
  }
  set scrollPaddingBlock(value) {
    setCss2(this.name, {
      scrollPaddingBlock: value
    });
    this._updated();
  }
  get scrollPaddingBlock() {
    return getCss(this.name, "scrollPaddingBlock");
  }
  setScrollPaddingBlock(value) {
    this.scrollPaddingBlock = value;
    return this;
  }
  set scrollPaddingBlockEnd(value) {
    setCss2(this.name, {
      scrollPaddingBlockEnd: value
    });
    this._updated();
  }
  get scrollPaddingBlockEnd() {
    return getCss(this.name, "scrollPaddingBlockEnd");
  }
  setScrollPaddingBlockEnd(value) {
    this.scrollPaddingBlockEnd = value;
    return this;
  }
  set scrollPaddingBlockStart(value) {
    setCss2(this.name, {
      scrollPaddingBlockStart: value
    });
    this._updated();
  }
  get scrollPaddingBlockStart() {
    return getCss(this.name, "scrollPaddingBlockStart");
  }
  setScrollPaddingBlockStart(value) {
    this.scrollPaddingBlockStart = value;
    return this;
  }
  set scrollPaddingBottom(value) {
    setCss2(this.name, {
      scrollPaddingBottom: value
    });
    this._updated();
  }
  get scrollPaddingBottom() {
    return getCss(this.name, "scrollPaddingBottom");
  }
  setScrollPaddingBottom(value) {
    this.scrollPaddingBottom = value;
    return this;
  }
  set scrollPaddingInline(value) {
    setCss2(this.name, {
      scrollPaddingInline: value
    });
    this._updated();
  }
  get scrollPaddingInline() {
    return getCss(this.name, "scrollPaddingInline");
  }
  setScrollPaddingInline(value) {
    this.scrollPaddingInline = value;
    return this;
  }
  set scrollPaddingInlineEnd(value) {
    setCss2(this.name, {
      scrollPaddingInlineEnd: value
    });
    this._updated();
  }
  get scrollPaddingInlineEnd() {
    return getCss(this.name, "scrollPaddingInlineEnd");
  }
  setScrollPaddingInlineEnd(value) {
    this.scrollPaddingInlineEnd = value;
    return this;
  }
  set scrollPaddingInlineStart(value) {
    setCss2(this.name, {
      scrollPaddingInlineStart: value
    });
    this._updated();
  }
  get scrollPaddingInlineStart() {
    return getCss(this.name, "scrollPaddingInlineStart");
  }
  setScrollPaddingInlineStart(value) {
    this.scrollPaddingInlineStart = value;
    return this;
  }
  set scrollPaddingLeft(value) {
    setCss2(this.name, {
      scrollPaddingLeft: value
    });
    this._updated();
  }
  get scrollPaddingLeft() {
    return getCss(this.name, "scrollPaddingLeft");
  }
  setScrollPaddingLeft(value) {
    this.scrollPaddingLeft = value;
    return this;
  }
  set scrollPaddingRight(value) {
    setCss2(this.name, {
      scrollPaddingRight: value
    });
    this._updated();
  }
  get scrollPaddingRight() {
    return getCss(this.name, "scrollPaddingRight");
  }
  setScrollPaddingRight(value) {
    this.scrollPaddingRight = value;
    return this;
  }
  set scrollPaddingTop(value) {
    setCss2(this.name, {
      scrollPaddingTop: value
    });
    this._updated();
  }
  get scrollPaddingTop() {
    return getCss(this.name, "scrollPaddingTop");
  }
  setScrollPaddingTop(value) {
    this.scrollPaddingTop = value;
    return this;
  }
  set scrollSnapAlign(value) {
    setCss2(this.name, {
      scrollSnapAlign: value
    });
    this._updated();
  }
  get scrollSnapAlign() {
    return getCss(this.name, "scrollSnapAlign");
  }
  setScrollSnapAlign(value) {
    this.scrollSnapAlign = value;
    return this;
  }
  set scrollSnapStop(value) {
    setCss2(this.name, {
      scrollSnapStop: value
    });
    this._updated();
  }
  get scrollSnapStop() {
    return getCss(this.name, "scrollSnapStop");
  }
  setScrollSnapStop(value) {
    this.scrollSnapStop = value;
    return this;
  }
  set scrollSnapType(value) {
    setCss2(this.name, {
      scrollSnapType: value
    });
    this._updated();
  }
  get scrollSnapType() {
    return getCss(this.name, "scrollSnapType");
  }
  setScrollSnapType(value) {
    this.scrollSnapType = value;
    return this;
  }
  set scrollTimeline(value) {
    setCss2(this.name, {
      scrollTimeline: value
    });
    this._updated();
  }
  get scrollTimeline() {
    return getCss(this.name, "scrollTimeline");
  }
  setScrollTimeline(value) {
    this.scrollTimeline = value;
    return this;
  }
  set scrollTimelineAxis(value) {
    setCss2(this.name, {
      scrollTimelineAxis: value
    });
    this._updated();
  }
  get scrollTimelineAxis() {
    return getCss(this.name, "scrollTimelineAxis");
  }
  setScrollTimelineAxis(value) {
    this.scrollTimelineAxis = value;
    return this;
  }
  set scrollTimelineName(value) {
    setCss2(this.name, {
      scrollTimelineName: value
    });
    this._updated();
  }
  get scrollTimelineName() {
    return getCss(this.name, "scrollTimelineName");
  }
  setScrollTimelineName(value) {
    this.scrollTimelineName = value;
    return this;
  }
  set scrollbarGutter(value) {
    setCss2(this.name, {
      scrollbarGutter: value
    });
    this._updated();
  }
  get scrollbarGutter() {
    return getCss(this.name, "scrollbarGutter");
  }
  setScrollbarGutter(value) {
    this.scrollbarGutter = value;
    return this;
  }
  set shapeImageThreshold(value) {
    setCss2(this.name, {
      shapeImageThreshold: value
    });
    this._updated();
  }
  get shapeImageThreshold() {
    return getCss(this.name, "shapeImageThreshold");
  }
  setShapeImageThreshold(value) {
    this.shapeImageThreshold = value;
    return this;
  }
  set shapeMargin(value) {
    setCss2(this.name, {
      shapeMargin: value
    });
    this._updated();
  }
  get shapeMargin() {
    return getCss(this.name, "shapeMargin");
  }
  setShapeMargin(value) {
    this.shapeMargin = value;
    return this;
  }
  set shapeOutside(value) {
    setCss2(this.name, {
      shapeOutside: value
    });
    this._updated();
  }
  get shapeOutside() {
    return getCss(this.name, "shapeOutside");
  }
  setShapeOutside(value) {
    this.shapeOutside = value;
    return this;
  }
  set shapeRendering(value) {
    setCss2(this.name, {
      shapeRendering: value
    });
    this._updated();
  }
  get shapeRendering() {
    return getCss(this.name, "shapeRendering");
  }
  setShapeRendering(value) {
    this.shapeRendering = value;
    return this;
  }
  set size(value) {
    setCss2(this.name, {
      size: value
    });
    this._updated();
  }
  get size() {
    return getCss(this.name, "size");
  }
  setSize(value) {
    this.size = value;
    return this;
  }
  set sizeAdjust(value) {
    setCss2(this.name, {
      sizeAdjust: value
    });
    this._updated();
  }
  get sizeAdjust() {
    return getCss(this.name, "sizeAdjust");
  }
  setSizeAdjust(value) {
    this.sizeAdjust = value;
    return this;
  }
  set speak(value) {
    setCss2(this.name, {
      speak: value
    });
    this._updated();
  }
  get speak() {
    return getCss(this.name, "speak");
  }
  setSpeak(value) {
    this.speak = value;
    return this;
  }
  set speakAs(value) {
    setCss2(this.name, {
      speakAs: value
    });
    this._updated();
  }
  get speakAs() {
    return getCss(this.name, "speakAs");
  }
  setSpeakAs(value) {
    this.speakAs = value;
    return this;
  }
  set src(value) {
    setCss2(this.name, {
      src: value
    });
    this._updated();
  }
  get src() {
    return getCss(this.name, "src");
  }
  setSrc(value) {
    this.src = value;
    return this;
  }
  set stopColor(value) {
    setCss2(this.name, {
      stopColor: value
    });
    this._updated();
  }
  get stopColor() {
    return getCss(this.name, "stopColor");
  }
  setStopColor(value) {
    this.stopColor = value;
    return this;
  }
  set stopOpacity(value) {
    setCss2(this.name, {
      stopOpacity: value
    });
    this._updated();
  }
  get stopOpacity() {
    return getCss(this.name, "stopOpacity");
  }
  setStopOpacity(value) {
    this.stopOpacity = value;
    return this;
  }
  set stroke(value) {
    setCss2(this.name, {
      stroke: value
    });
    this._updated();
  }
  get stroke() {
    return getCss(this.name, "stroke");
  }
  setStroke(value) {
    this.stroke = value;
    return this;
  }
  set strokeDasharray(value) {
    setCss2(this.name, {
      strokeDasharray: value
    });
    this._updated();
  }
  get strokeDasharray() {
    return getCss(this.name, "strokeDasharray");
  }
  setStrokeDasharray(value) {
    this.strokeDasharray = value;
    return this;
  }
  set strokeDashoffset(value) {
    setCss2(this.name, {
      strokeDashoffset: value
    });
    this._updated();
  }
  get strokeDashoffset() {
    return getCss(this.name, "strokeDashoffset");
  }
  setStrokeDashoffset(value) {
    this.strokeDashoffset = value;
    return this;
  }
  set strokeLinecap(value) {
    setCss2(this.name, {
      strokeLinecap: value
    });
    this._updated();
  }
  get strokeLinecap() {
    return getCss(this.name, "strokeLinecap");
  }
  setStrokeLinecap(value) {
    this.strokeLinecap = value;
    return this;
  }
  set strokeLinejoin(value) {
    setCss2(this.name, {
      strokeLinejoin: value
    });
    this._updated();
  }
  get strokeLinejoin() {
    return getCss(this.name, "strokeLinejoin");
  }
  setStrokeLinejoin(value) {
    this.strokeLinejoin = value;
    return this;
  }
  set strokeMiterlimit(value) {
    setCss2(this.name, {
      strokeMiterlimit: value
    });
    this._updated();
  }
  get strokeMiterlimit() {
    return getCss(this.name, "strokeMiterlimit");
  }
  setStrokeMiterlimit(value) {
    this.strokeMiterlimit = value;
    return this;
  }
  set strokeOpacity(value) {
    setCss2(this.name, {
      strokeOpacity: value
    });
    this._updated();
  }
  get strokeOpacity() {
    return getCss(this.name, "strokeOpacity");
  }
  setStrokeOpacity(value) {
    this.strokeOpacity = value;
    return this;
  }
  set strokeWidth(value) {
    setCss2(this.name, {
      strokeWidth: value
    });
    this._updated();
  }
  get strokeWidth() {
    return getCss(this.name, "strokeWidth");
  }
  setStrokeWidth(value) {
    this.strokeWidth = value;
    return this;
  }
  set suffix(value) {
    setCss2(this.name, {
      suffix: value
    });
    this._updated();
  }
  get suffix() {
    return getCss(this.name, "suffix");
  }
  setSuffix(value) {
    this.suffix = value;
    return this;
  }
  set symbols(value) {
    setCss2(this.name, {
      symbols: value
    });
    this._updated();
  }
  get symbols() {
    return getCss(this.name, "symbols");
  }
  setSymbols(value) {
    this.symbols = value;
    return this;
  }
  set syntax(value) {
    setCss2(this.name, {
      syntax: value
    });
    this._updated();
  }
  get syntax() {
    return getCss(this.name, "syntax");
  }
  setSyntax(value) {
    this.syntax = value;
    return this;
  }
  set system(value) {
    setCss2(this.name, {
      system: value
    });
    this._updated();
  }
  get system() {
    return getCss(this.name, "system");
  }
  setSystem(value) {
    this.system = value;
    return this;
  }
  set tabSize(value) {
    setCss2(this.name, {
      tabSize: value
    });
    this._updated();
  }
  get tabSize() {
    return getCss(this.name, "tabSize");
  }
  setTabSize(value) {
    this.tabSize = value;
    return this;
  }
  set tableLayout(value) {
    setCss2(this.name, {
      tableLayout: value
    });
    this._updated();
  }
  get tableLayout() {
    return getCss(this.name, "tableLayout");
  }
  setTableLayout(value) {
    this.tableLayout = value;
    return this;
  }
  set textAlign(value) {
    setCss2(this.name, {
      textAlign: value
    });
    this._updated();
  }
  get textAlign() {
    return getCss(this.name, "textAlign");
  }
  setTextAlign(value) {
    this.textAlign = value;
    return this;
  }
  set textAlignLast(value) {
    setCss2(this.name, {
      textAlignLast: value
    });
    this._updated();
  }
  get textAlignLast() {
    return getCss(this.name, "textAlignLast");
  }
  setTextAlignLast(value) {
    this.textAlignLast = value;
    return this;
  }
  set textAnchor(value) {
    setCss2(this.name, {
      textAnchor: value
    });
    this._updated();
  }
  get textAnchor() {
    return getCss(this.name, "textAnchor");
  }
  setTextAnchor(value) {
    this.textAnchor = value;
    return this;
  }
  set textCombineUpright(value) {
    setCss2(this.name, {
      textCombineUpright: value
    });
    this._updated();
  }
  get textCombineUpright() {
    return getCss(this.name, "textCombineUpright");
  }
  setTextCombineUpright(value) {
    this.textCombineUpright = value;
    return this;
  }
  set textDecoration(value) {
    setCss2(this.name, {
      textDecoration: value
    });
    this._updated();
  }
  get textDecoration() {
    return getCss(this.name, "textDecoration");
  }
  setTextDecoration(value) {
    this.textDecoration = value;
    return this;
  }
  set textDecorationColor(value) {
    setCss2(this.name, {
      textDecorationColor: value
    });
    this._updated();
  }
  get textDecorationColor() {
    return getCss(this.name, "textDecorationColor");
  }
  setTextDecorationColor(value) {
    this.textDecorationColor = value;
    return this;
  }
  set textDecorationLine(value) {
    setCss2(this.name, {
      textDecorationLine: value
    });
    this._updated();
  }
  get textDecorationLine() {
    return getCss(this.name, "textDecorationLine");
  }
  setTextDecorationLine(value) {
    this.textDecorationLine = value;
    return this;
  }
  set textDecorationSkipInk(value) {
    setCss2(this.name, {
      textDecorationSkipInk: value
    });
    this._updated();
  }
  get textDecorationSkipInk() {
    return getCss(this.name, "textDecorationSkipInk");
  }
  setTextDecorationSkipInk(value) {
    this.textDecorationSkipInk = value;
    return this;
  }
  set textDecorationStyle(value) {
    setCss2(this.name, {
      textDecorationStyle: value
    });
    this._updated();
  }
  get textDecorationStyle() {
    return getCss(this.name, "textDecorationStyle");
  }
  setTextDecorationStyle(value) {
    this.textDecorationStyle = value;
    return this;
  }
  set textDecorationThickness(value) {
    setCss2(this.name, {
      textDecorationThickness: value
    });
    this._updated();
  }
  get textDecorationThickness() {
    return getCss(this.name, "textDecorationThickness");
  }
  setTextDecorationThickness(value) {
    this.textDecorationThickness = value;
    return this;
  }
  set textEmphasis(value) {
    setCss2(this.name, {
      textEmphasis: value
    });
    this._updated();
  }
  get textEmphasis() {
    return getCss(this.name, "textEmphasis");
  }
  setTextEmphasis(value) {
    this.textEmphasis = value;
    return this;
  }
  set textEmphasisColor(value) {
    setCss2(this.name, {
      textEmphasisColor: value
    });
    this._updated();
  }
  get textEmphasisColor() {
    return getCss(this.name, "textEmphasisColor");
  }
  setTextEmphasisColor(value) {
    this.textEmphasisColor = value;
    return this;
  }
  set textEmphasisPosition(value) {
    setCss2(this.name, {
      textEmphasisPosition: value
    });
    this._updated();
  }
  get textEmphasisPosition() {
    return getCss(this.name, "textEmphasisPosition");
  }
  setTextEmphasisPosition(value) {
    this.textEmphasisPosition = value;
    return this;
  }
  set textEmphasisStyle(value) {
    setCss2(this.name, {
      textEmphasisStyle: value
    });
    this._updated();
  }
  get textEmphasisStyle() {
    return getCss(this.name, "textEmphasisStyle");
  }
  setTextEmphasisStyle(value) {
    this.textEmphasisStyle = value;
    return this;
  }
  set textIndent(value) {
    setCss2(this.name, {
      textIndent: value
    });
    this._updated();
  }
  get textIndent() {
    return getCss(this.name, "textIndent");
  }
  setTextIndent(value) {
    this.textIndent = value;
    return this;
  }
  set textOrientation(value) {
    setCss2(this.name, {
      textOrientation: value
    });
    this._updated();
  }
  get textOrientation() {
    return getCss(this.name, "textOrientation");
  }
  setTextOrientation(value) {
    this.textOrientation = value;
    return this;
  }
  set textOverflow(value) {
    setCss2(this.name, {
      textOverflow: value
    });
    this._updated();
  }
  get textOverflow() {
    return getCss(this.name, "textOverflow");
  }
  setTextOverflow(value) {
    this.textOverflow = value;
    return this;
  }
  set textRendering(value) {
    setCss2(this.name, {
      textRendering: value
    });
    this._updated();
  }
  get textRendering() {
    return getCss(this.name, "textRendering");
  }
  setTextRendering(value) {
    this.textRendering = value;
    return this;
  }
  set textShadow(value) {
    setCss2(this.name, {
      textShadow: value
    });
    this._updated();
  }
  get textShadow() {
    return getCss(this.name, "textShadow");
  }
  setTextShadow(value) {
    this.textShadow = value;
    return this;
  }
  set textSizeAdjust(value) {
    setCss2(this.name, {
      textSizeAdjust: value
    });
    this._updated();
  }
  get textSizeAdjust() {
    return getCss(this.name, "textSizeAdjust");
  }
  setTextSizeAdjust(value) {
    this.textSizeAdjust = value;
    return this;
  }
  set textTransform(value) {
    setCss2(this.name, {
      textTransform: value
    });
    this._updated();
  }
  get textTransform() {
    return getCss(this.name, "textTransform");
  }
  setTextTransform(value) {
    this.textTransform = value;
    return this;
  }
  set textUnderlineOffset(value) {
    setCss2(this.name, {
      textUnderlineOffset: value
    });
    this._updated();
  }
  get textUnderlineOffset() {
    return getCss(this.name, "textUnderlineOffset");
  }
  setTextUnderlineOffset(value) {
    this.textUnderlineOffset = value;
    return this;
  }
  set textUnderlinePosition(value) {
    setCss2(this.name, {
      textUnderlinePosition: value
    });
    this._updated();
  }
  get textUnderlinePosition() {
    return getCss(this.name, "textUnderlinePosition");
  }
  setTextUnderlinePosition(value) {
    this.textUnderlinePosition = value;
    return this;
  }
  set textWrap(value) {
    setCss2(this.name, {
      textWrap: value
    });
    this._updated();
  }
  get textWrap() {
    return getCss(this.name, "textWrap");
  }
  setTextWrap(value) {
    this.textWrap = value;
    return this;
  }
  set timelineScope(value) {
    setCss2(this.name, {
      timelineScope: value
    });
    this._updated();
  }
  get timelineScope() {
    return getCss(this.name, "timelineScope");
  }
  setTimelineScope(value) {
    this.timelineScope = value;
    return this;
  }
  set top(value) {
    setCss2(this.name, {
      top: value
    });
    this._updated();
  }
  get top() {
    return getCss(this.name, "top");
  }
  setTop(value) {
    this.top = value;
    return this;
  }
  set touchAction(value) {
    setCss2(this.name, {
      touchAction: value
    });
    this._updated();
  }
  get touchAction() {
    return getCss(this.name, "touchAction");
  }
  setTouchAction(value) {
    this.touchAction = value;
    return this;
  }
  set transform(value) {
    setCss2(this.name, {
      transform: value
    });
    this._updated();
  }
  get transform() {
    return getCss(this.name, "transform");
  }
  setTransform(value) {
    this.transform = value;
    return this;
  }
  set transformBox(value) {
    setCss2(this.name, {
      transformBox: value
    });
    this._updated();
  }
  get transformBox() {
    return getCss(this.name, "transformBox");
  }
  setTransformBox(value) {
    this.transformBox = value;
    return this;
  }
  set transformOrigin(value) {
    setCss2(this.name, {
      transformOrigin: value
    });
    this._updated();
  }
  get transformOrigin() {
    return getCss(this.name, "transformOrigin");
  }
  setTransformOrigin(value) {
    this.transformOrigin = value;
    return this;
  }
  set transformStyle(value) {
    setCss2(this.name, {
      transformStyle: value
    });
    this._updated();
  }
  get transformStyle() {
    return getCss(this.name, "transformStyle");
  }
  setTransformStyle(value) {
    this.transformStyle = value;
    return this;
  }
  set transition(value) {
    setCss2(this.name, {
      transition: value
    });
    this._updated();
  }
  get transition() {
    return getCss(this.name, "transition");
  }
  setTransition(value) {
    this.transition = value;
    return this;
  }
  set transitionBehavior(value) {
    setCss2(this.name, {
      transitionBehavior: value
    });
    this._updated();
  }
  get transitionBehavior() {
    return getCss(this.name, "transitionBehavior");
  }
  setTransitionBehavior(value) {
    this.transitionBehavior = value;
    return this;
  }
  set transitionDelay(value) {
    setCss2(this.name, {
      transitionDelay: value
    });
    this._updated();
  }
  get transitionDelay() {
    return getCss(this.name, "transitionDelay");
  }
  setTransitionDelay(value) {
    this.transitionDelay = value;
    return this;
  }
  set transitionDuration(value) {
    setCss2(this.name, {
      transitionDuration: value
    });
    this._updated();
  }
  get transitionDuration() {
    return getCss(this.name, "transitionDuration");
  }
  setTransitionDuration(value) {
    this.transitionDuration = value;
    return this;
  }
  set transitionProperty(value) {
    setCss2(this.name, {
      transitionProperty: value
    });
    this._updated();
  }
  get transitionProperty() {
    return getCss(this.name, "transitionProperty");
  }
  setTransitionProperty(value) {
    this.transitionProperty = value;
    return this;
  }
  set transitionTimingFunction(value) {
    setCss2(this.name, {
      transitionTimingFunction: value
    });
    this._updated();
  }
  get transitionTimingFunction() {
    return getCss(this.name, "transitionTimingFunction");
  }
  setTransitionTimingFunction(value) {
    this.transitionTimingFunction = value;
    return this;
  }
  set translate(value) {
    setCss2(this.name, {
      translate: value
    });
    this._updated();
  }
  get translate() {
    return getCss(this.name, "translate");
  }
  setTranslate(value) {
    this.translate = value;
    return this;
  }
  set unicodeBidi(value) {
    setCss2(this.name, {
      unicodeBidi: value
    });
    this._updated();
  }
  get unicodeBidi() {
    return getCss(this.name, "unicodeBidi");
  }
  setUnicodeBidi(value) {
    this.unicodeBidi = value;
    return this;
  }
  set unicodeRange(value) {
    setCss2(this.name, {
      unicodeRange: value
    });
    this._updated();
  }
  get unicodeRange() {
    return getCss(this.name, "unicodeRange");
  }
  setUnicodeRange(value) {
    this.unicodeRange = value;
    return this;
  }
  set userSelect(value) {
    setCss2(this.name, {
      userSelect: value
    });
    this._updated();
  }
  get userSelect() {
    return getCss(this.name, "userSelect");
  }
  setUserSelect(value) {
    this.userSelect = value;
    return this;
  }
  set vectorEffect(value) {
    setCss2(this.name, {
      vectorEffect: value
    });
    this._updated();
  }
  get vectorEffect() {
    return getCss(this.name, "vectorEffect");
  }
  setVectorEffect(value) {
    this.vectorEffect = value;
    return this;
  }
  set verticalAlign(value) {
    setCss2(this.name, {
      verticalAlign: value
    });
    this._updated();
  }
  get verticalAlign() {
    return getCss(this.name, "verticalAlign");
  }
  setVerticalAlign(value) {
    this.verticalAlign = value;
    return this;
  }
  set viewTimeline(value) {
    setCss2(this.name, {
      viewTimeline: value
    });
    this._updated();
  }
  get viewTimeline() {
    return getCss(this.name, "viewTimeline");
  }
  setViewTimeline(value) {
    this.viewTimeline = value;
    return this;
  }
  set viewTimelineAxis(value) {
    setCss2(this.name, {
      viewTimelineAxis: value
    });
    this._updated();
  }
  get viewTimelineAxis() {
    return getCss(this.name, "viewTimelineAxis");
  }
  setViewTimelineAxis(value) {
    this.viewTimelineAxis = value;
    return this;
  }
  set viewTimelineInset(value) {
    setCss2(this.name, {
      viewTimelineInset: value
    });
    this._updated();
  }
  get viewTimelineInset() {
    return getCss(this.name, "viewTimelineInset");
  }
  setViewTimelineInset(value) {
    this.viewTimelineInset = value;
    return this;
  }
  set viewTimelineName(value) {
    setCss2(this.name, {
      viewTimelineName: value
    });
    this._updated();
  }
  get viewTimelineName() {
    return getCss(this.name, "viewTimelineName");
  }
  setViewTimelineName(value) {
    this.viewTimelineName = value;
    return this;
  }
  set viewTransitionName(value) {
    setCss2(this.name, {
      viewTransitionName: value
    });
    this._updated();
  }
  get viewTransitionName() {
    return getCss(this.name, "viewTransitionName");
  }
  setViewTransitionName(value) {
    this.viewTransitionName = value;
    return this;
  }
  set visibility(value) {
    setCss2(this.name, {
      visibility: value
    });
    this._updated();
  }
  get visibility() {
    return getCss(this.name, "visibility");
  }
  setVisibility(value) {
    this.visibility = value;
    return this;
  }
  set webkitAlignContent(value) {
    setCss2(this.name, {
      webkitAlignContent: value
    });
    this._updated();
  }
  get webkitAlignContent() {
    return getCss(this.name, "webkitAlignContent");
  }
  setWebkitAlignContent(value) {
    this.webkitAlignContent = value;
    return this;
  }
  set webkitAlignItems(value) {
    setCss2(this.name, {
      webkitAlignItems: value
    });
    this._updated();
  }
  get webkitAlignItems() {
    return getCss(this.name, "webkitAlignItems");
  }
  setWebkitAlignItems(value) {
    this.webkitAlignItems = value;
    return this;
  }
  set webkitAlignSelf(value) {
    setCss2(this.name, {
      webkitAlignSelf: value
    });
    this._updated();
  }
  get webkitAlignSelf() {
    return getCss(this.name, "webkitAlignSelf");
  }
  setWebkitAlignSelf(value) {
    this.webkitAlignSelf = value;
    return this;
  }
  set webkitAnimation(value) {
    setCss2(this.name, {
      webkitAnimation: value
    });
    this._updated();
  }
  get webkitAnimation() {
    return getCss(this.name, "webkitAnimation");
  }
  setWebkitAnimation(value) {
    this.webkitAnimation = value;
    return this;
  }
  set webkitAnimationDelay(value) {
    setCss2(this.name, {
      webkitAnimationDelay: value
    });
    this._updated();
  }
  get webkitAnimationDelay() {
    return getCss(this.name, "webkitAnimationDelay");
  }
  setWebkitAnimationDelay(value) {
    this.webkitAnimationDelay = value;
    return this;
  }
  set webkitAnimationDirection(value) {
    setCss2(this.name, {
      webkitAnimationDirection: value
    });
    this._updated();
  }
  get webkitAnimationDirection() {
    return getCss(this.name, "webkitAnimationDirection");
  }
  setWebkitAnimationDirection(value) {
    this.webkitAnimationDirection = value;
    return this;
  }
  set webkitAnimationDuration(value) {
    setCss2(this.name, {
      webkitAnimationDuration: value
    });
    this._updated();
  }
  get webkitAnimationDuration() {
    return getCss(this.name, "webkitAnimationDuration");
  }
  setWebkitAnimationDuration(value) {
    this.webkitAnimationDuration = value;
    return this;
  }
  set webkitAnimationFillMode(value) {
    setCss2(this.name, {
      webkitAnimationFillMode: value
    });
    this._updated();
  }
  get webkitAnimationFillMode() {
    return getCss(this.name, "webkitAnimationFillMode");
  }
  setWebkitAnimationFillMode(value) {
    this.webkitAnimationFillMode = value;
    return this;
  }
  set webkitAnimationIterationCount(value) {
    setCss2(this.name, {
      webkitAnimationIterationCount: value
    });
    this._updated();
  }
  get webkitAnimationIterationCount() {
    return getCss(this.name, "webkitAnimationIterationCount");
  }
  setWebkitAnimationIterationCount(value) {
    this.webkitAnimationIterationCount = value;
    return this;
  }
  set webkitAnimationName(value) {
    setCss2(this.name, {
      webkitAnimationName: value
    });
    this._updated();
  }
  get webkitAnimationName() {
    return getCss(this.name, "webkitAnimationName");
  }
  setWebkitAnimationName(value) {
    this.webkitAnimationName = value;
    return this;
  }
  set webkitAnimationPlayState(value) {
    setCss2(this.name, {
      webkitAnimationPlayState: value
    });
    this._updated();
  }
  get webkitAnimationPlayState() {
    return getCss(this.name, "webkitAnimationPlayState");
  }
  setWebkitAnimationPlayState(value) {
    this.webkitAnimationPlayState = value;
    return this;
  }
  set webkitAnimationTimingFunction(value) {
    setCss2(this.name, {
      webkitAnimationTimingFunction: value
    });
    this._updated();
  }
  get webkitAnimationTimingFunction() {
    return getCss(this.name, "webkitAnimationTimingFunction");
  }
  setWebkitAnimationTimingFunction(value) {
    this.webkitAnimationTimingFunction = value;
    return this;
  }
  set webkitAppRegion(value) {
    setCss2(this.name, {
      webkitAppRegion: value
    });
    this._updated();
  }
  get webkitAppRegion() {
    return getCss(this.name, "webkitAppRegion");
  }
  setWebkitAppRegion(value) {
    this.webkitAppRegion = value;
    return this;
  }
  set webkitAppearance(value) {
    setCss2(this.name, {
      webkitAppearance: value
    });
    this._updated();
  }
  get webkitAppearance() {
    return getCss(this.name, "webkitAppearance");
  }
  setWebkitAppearance(value) {
    this.webkitAppearance = value;
    return this;
  }
  set webkitBackfaceVisibility(value) {
    setCss2(this.name, {
      webkitBackfaceVisibility: value
    });
    this._updated();
  }
  get webkitBackfaceVisibility() {
    return getCss(this.name, "webkitBackfaceVisibility");
  }
  setWebkitBackfaceVisibility(value) {
    this.webkitBackfaceVisibility = value;
    return this;
  }
  set webkitBackgroundClip(value) {
    setCss2(this.name, {
      webkitBackgroundClip: value
    });
    this._updated();
  }
  get webkitBackgroundClip() {
    return getCss(this.name, "webkitBackgroundClip");
  }
  setWebkitBackgroundClip(value) {
    this.webkitBackgroundClip = value;
    return this;
  }
  set webkitBackgroundOrigin(value) {
    setCss2(this.name, {
      webkitBackgroundOrigin: value
    });
    this._updated();
  }
  get webkitBackgroundOrigin() {
    return getCss(this.name, "webkitBackgroundOrigin");
  }
  setWebkitBackgroundOrigin(value) {
    this.webkitBackgroundOrigin = value;
    return this;
  }
  set webkitBackgroundSize(value) {
    setCss2(this.name, {
      webkitBackgroundSize: value
    });
    this._updated();
  }
  get webkitBackgroundSize() {
    return getCss(this.name, "webkitBackgroundSize");
  }
  setWebkitBackgroundSize(value) {
    this.webkitBackgroundSize = value;
    return this;
  }
  set webkitBorderAfter(value) {
    setCss2(this.name, {
      webkitBorderAfter: value
    });
    this._updated();
  }
  get webkitBorderAfter() {
    return getCss(this.name, "webkitBorderAfter");
  }
  setWebkitBorderAfter(value) {
    this.webkitBorderAfter = value;
    return this;
  }
  set webkitBorderAfterColor(value) {
    setCss2(this.name, {
      webkitBorderAfterColor: value
    });
    this._updated();
  }
  get webkitBorderAfterColor() {
    return getCss(this.name, "webkitBorderAfterColor");
  }
  setWebkitBorderAfterColor(value) {
    this.webkitBorderAfterColor = value;
    return this;
  }
  set webkitBorderAfterStyle(value) {
    setCss2(this.name, {
      webkitBorderAfterStyle: value
    });
    this._updated();
  }
  get webkitBorderAfterStyle() {
    return getCss(this.name, "webkitBorderAfterStyle");
  }
  setWebkitBorderAfterStyle(value) {
    this.webkitBorderAfterStyle = value;
    return this;
  }
  set webkitBorderAfterWidth(value) {
    setCss2(this.name, {
      webkitBorderAfterWidth: value
    });
    this._updated();
  }
  get webkitBorderAfterWidth() {
    return getCss(this.name, "webkitBorderAfterWidth");
  }
  setWebkitBorderAfterWidth(value) {
    this.webkitBorderAfterWidth = value;
    return this;
  }
  set webkitBorderBefore(value) {
    setCss2(this.name, {
      webkitBorderBefore: value
    });
    this._updated();
  }
  get webkitBorderBefore() {
    return getCss(this.name, "webkitBorderBefore");
  }
  setWebkitBorderBefore(value) {
    this.webkitBorderBefore = value;
    return this;
  }
  set webkitBorderBeforeColor(value) {
    setCss2(this.name, {
      webkitBorderBeforeColor: value
    });
    this._updated();
  }
  get webkitBorderBeforeColor() {
    return getCss(this.name, "webkitBorderBeforeColor");
  }
  setWebkitBorderBeforeColor(value) {
    this.webkitBorderBeforeColor = value;
    return this;
  }
  set webkitBorderBeforeStyle(value) {
    setCss2(this.name, {
      webkitBorderBeforeStyle: value
    });
    this._updated();
  }
  get webkitBorderBeforeStyle() {
    return getCss(this.name, "webkitBorderBeforeStyle");
  }
  setWebkitBorderBeforeStyle(value) {
    this.webkitBorderBeforeStyle = value;
    return this;
  }
  set webkitBorderBeforeWidth(value) {
    setCss2(this.name, {
      webkitBorderBeforeWidth: value
    });
    this._updated();
  }
  get webkitBorderBeforeWidth() {
    return getCss(this.name, "webkitBorderBeforeWidth");
  }
  setWebkitBorderBeforeWidth(value) {
    this.webkitBorderBeforeWidth = value;
    return this;
  }
  set webkitBorderBottomLeftRadius(value) {
    setCss2(this.name, {
      webkitBorderBottomLeftRadius: value
    });
    this._updated();
  }
  get webkitBorderBottomLeftRadius() {
    return getCss(this.name, "webkitBorderBottomLeftRadius");
  }
  setWebkitBorderBottomLeftRadius(value) {
    this.webkitBorderBottomLeftRadius = value;
    return this;
  }
  set webkitBorderBottomRightRadius(value) {
    setCss2(this.name, {
      webkitBorderBottomRightRadius: value
    });
    this._updated();
  }
  get webkitBorderBottomRightRadius() {
    return getCss(this.name, "webkitBorderBottomRightRadius");
  }
  setWebkitBorderBottomRightRadius(value) {
    this.webkitBorderBottomRightRadius = value;
    return this;
  }
  set webkitBorderEnd(value) {
    setCss2(this.name, {
      webkitBorderEnd: value
    });
    this._updated();
  }
  get webkitBorderEnd() {
    return getCss(this.name, "webkitBorderEnd");
  }
  setWebkitBorderEnd(value) {
    this.webkitBorderEnd = value;
    return this;
  }
  set webkitBorderEndColor(value) {
    setCss2(this.name, {
      webkitBorderEndColor: value
    });
    this._updated();
  }
  get webkitBorderEndColor() {
    return getCss(this.name, "webkitBorderEndColor");
  }
  setWebkitBorderEndColor(value) {
    this.webkitBorderEndColor = value;
    return this;
  }
  set webkitBorderEndStyle(value) {
    setCss2(this.name, {
      webkitBorderEndStyle: value
    });
    this._updated();
  }
  get webkitBorderEndStyle() {
    return getCss(this.name, "webkitBorderEndStyle");
  }
  setWebkitBorderEndStyle(value) {
    this.webkitBorderEndStyle = value;
    return this;
  }
  set webkitBorderEndWidth(value) {
    setCss2(this.name, {
      webkitBorderEndWidth: value
    });
    this._updated();
  }
  get webkitBorderEndWidth() {
    return getCss(this.name, "webkitBorderEndWidth");
  }
  setWebkitBorderEndWidth(value) {
    this.webkitBorderEndWidth = value;
    return this;
  }
  set webkitBorderHorizontalSpacing(value) {
    setCss2(this.name, {
      webkitBorderHorizontalSpacing: value
    });
    this._updated();
  }
  get webkitBorderHorizontalSpacing() {
    return getCss(this.name, "webkitBorderHorizontalSpacing");
  }
  setWebkitBorderHorizontalSpacing(value) {
    this.webkitBorderHorizontalSpacing = value;
    return this;
  }
  set webkitBorderImage(value) {
    setCss2(this.name, {
      webkitBorderImage: value
    });
    this._updated();
  }
  get webkitBorderImage() {
    return getCss(this.name, "webkitBorderImage");
  }
  setWebkitBorderImage(value) {
    this.webkitBorderImage = value;
    return this;
  }
  set webkitBorderRadius(value) {
    setCss2(this.name, {
      webkitBorderRadius: value
    });
    this._updated();
  }
  get webkitBorderRadius() {
    return getCss(this.name, "webkitBorderRadius");
  }
  setWebkitBorderRadius(value) {
    this.webkitBorderRadius = value;
    return this;
  }
  set webkitBorderStart(value) {
    setCss2(this.name, {
      webkitBorderStart: value
    });
    this._updated();
  }
  get webkitBorderStart() {
    return getCss(this.name, "webkitBorderStart");
  }
  setWebkitBorderStart(value) {
    this.webkitBorderStart = value;
    return this;
  }
  set webkitBorderStartColor(value) {
    setCss2(this.name, {
      webkitBorderStartColor: value
    });
    this._updated();
  }
  get webkitBorderStartColor() {
    return getCss(this.name, "webkitBorderStartColor");
  }
  setWebkitBorderStartColor(value) {
    this.webkitBorderStartColor = value;
    return this;
  }
  set webkitBorderStartStyle(value) {
    setCss2(this.name, {
      webkitBorderStartStyle: value
    });
    this._updated();
  }
  get webkitBorderStartStyle() {
    return getCss(this.name, "webkitBorderStartStyle");
  }
  setWebkitBorderStartStyle(value) {
    this.webkitBorderStartStyle = value;
    return this;
  }
  set webkitBorderStartWidth(value) {
    setCss2(this.name, {
      webkitBorderStartWidth: value
    });
    this._updated();
  }
  get webkitBorderStartWidth() {
    return getCss(this.name, "webkitBorderStartWidth");
  }
  setWebkitBorderStartWidth(value) {
    this.webkitBorderStartWidth = value;
    return this;
  }
  set webkitBorderTopLeftRadius(value) {
    setCss2(this.name, {
      webkitBorderTopLeftRadius: value
    });
    this._updated();
  }
  get webkitBorderTopLeftRadius() {
    return getCss(this.name, "webkitBorderTopLeftRadius");
  }
  setWebkitBorderTopLeftRadius(value) {
    this.webkitBorderTopLeftRadius = value;
    return this;
  }
  set webkitBorderTopRightRadius(value) {
    setCss2(this.name, {
      webkitBorderTopRightRadius: value
    });
    this._updated();
  }
  get webkitBorderTopRightRadius() {
    return getCss(this.name, "webkitBorderTopRightRadius");
  }
  setWebkitBorderTopRightRadius(value) {
    this.webkitBorderTopRightRadius = value;
    return this;
  }
  set webkitBorderVerticalSpacing(value) {
    setCss2(this.name, {
      webkitBorderVerticalSpacing: value
    });
    this._updated();
  }
  get webkitBorderVerticalSpacing() {
    return getCss(this.name, "webkitBorderVerticalSpacing");
  }
  setWebkitBorderVerticalSpacing(value) {
    this.webkitBorderVerticalSpacing = value;
    return this;
  }
  set webkitBoxAlign(value) {
    setCss2(this.name, {
      webkitBoxAlign: value
    });
    this._updated();
  }
  get webkitBoxAlign() {
    return getCss(this.name, "webkitBoxAlign");
  }
  setWebkitBoxAlign(value) {
    this.webkitBoxAlign = value;
    return this;
  }
  set webkitBoxDecorationBreak(value) {
    setCss2(this.name, {
      webkitBoxDecorationBreak: value
    });
    this._updated();
  }
  get webkitBoxDecorationBreak() {
    return getCss(this.name, "webkitBoxDecorationBreak");
  }
  setWebkitBoxDecorationBreak(value) {
    this.webkitBoxDecorationBreak = value;
    return this;
  }
  set webkitBoxDirection(value) {
    setCss2(this.name, {
      webkitBoxDirection: value
    });
    this._updated();
  }
  get webkitBoxDirection() {
    return getCss(this.name, "webkitBoxDirection");
  }
  setWebkitBoxDirection(value) {
    this.webkitBoxDirection = value;
    return this;
  }
  set webkitBoxFlex(value) {
    setCss2(this.name, {
      webkitBoxFlex: value
    });
    this._updated();
  }
  get webkitBoxFlex() {
    return getCss(this.name, "webkitBoxFlex");
  }
  setWebkitBoxFlex(value) {
    this.webkitBoxFlex = value;
    return this;
  }
  set webkitBoxOrdinalGroup(value) {
    setCss2(this.name, {
      webkitBoxOrdinalGroup: value
    });
    this._updated();
  }
  get webkitBoxOrdinalGroup() {
    return getCss(this.name, "webkitBoxOrdinalGroup");
  }
  setWebkitBoxOrdinalGroup(value) {
    this.webkitBoxOrdinalGroup = value;
    return this;
  }
  set webkitBoxOrient(value) {
    setCss2(this.name, {
      webkitBoxOrient: value
    });
    this._updated();
  }
  get webkitBoxOrient() {
    return getCss(this.name, "webkitBoxOrient");
  }
  setWebkitBoxOrient(value) {
    this.webkitBoxOrient = value;
    return this;
  }
  set webkitBoxPack(value) {
    setCss2(this.name, {
      webkitBoxPack: value
    });
    this._updated();
  }
  get webkitBoxPack() {
    return getCss(this.name, "webkitBoxPack");
  }
  setWebkitBoxPack(value) {
    this.webkitBoxPack = value;
    return this;
  }
  set webkitBoxReflect(value) {
    setCss2(this.name, {
      webkitBoxReflect: value
    });
    this._updated();
  }
  get webkitBoxReflect() {
    return getCss(this.name, "webkitBoxReflect");
  }
  setWebkitBoxReflect(value) {
    this.webkitBoxReflect = value;
    return this;
  }
  set webkitBoxShadow(value) {
    setCss2(this.name, {
      webkitBoxShadow: value
    });
    this._updated();
  }
  get webkitBoxShadow() {
    return getCss(this.name, "webkitBoxShadow");
  }
  setWebkitBoxShadow(value) {
    this.webkitBoxShadow = value;
    return this;
  }
  set webkitBoxSizing(value) {
    setCss2(this.name, {
      webkitBoxSizing: value
    });
    this._updated();
  }
  get webkitBoxSizing() {
    return getCss(this.name, "webkitBoxSizing");
  }
  setWebkitBoxSizing(value) {
    this.webkitBoxSizing = value;
    return this;
  }
  set webkitClipPath(value) {
    setCss2(this.name, {
      webkitClipPath: value
    });
    this._updated();
  }
  get webkitClipPath() {
    return getCss(this.name, "webkitClipPath");
  }
  setWebkitClipPath(value) {
    this.webkitClipPath = value;
    return this;
  }
  set webkitColumnBreakAfter(value) {
    setCss2(this.name, {
      webkitColumnBreakAfter: value
    });
    this._updated();
  }
  get webkitColumnBreakAfter() {
    return getCss(this.name, "webkitColumnBreakAfter");
  }
  setWebkitColumnBreakAfter(value) {
    this.webkitColumnBreakAfter = value;
    return this;
  }
  set webkitColumnBreakBefore(value) {
    setCss2(this.name, {
      webkitColumnBreakBefore: value
    });
    this._updated();
  }
  get webkitColumnBreakBefore() {
    return getCss(this.name, "webkitColumnBreakBefore");
  }
  setWebkitColumnBreakBefore(value) {
    this.webkitColumnBreakBefore = value;
    return this;
  }
  set webkitColumnBreakInside(value) {
    setCss2(this.name, {
      webkitColumnBreakInside: value
    });
    this._updated();
  }
  get webkitColumnBreakInside() {
    return getCss(this.name, "webkitColumnBreakInside");
  }
  setWebkitColumnBreakInside(value) {
    this.webkitColumnBreakInside = value;
    return this;
  }
  set webkitColumnCount(value) {
    setCss2(this.name, {
      webkitColumnCount: value
    });
    this._updated();
  }
  get webkitColumnCount() {
    return getCss(this.name, "webkitColumnCount");
  }
  setWebkitColumnCount(value) {
    this.webkitColumnCount = value;
    return this;
  }
  set webkitColumnGap(value) {
    setCss2(this.name, {
      webkitColumnGap: value
    });
    this._updated();
  }
  get webkitColumnGap() {
    return getCss(this.name, "webkitColumnGap");
  }
  setWebkitColumnGap(value) {
    this.webkitColumnGap = value;
    return this;
  }
  set webkitColumnRule(value) {
    setCss2(this.name, {
      webkitColumnRule: value
    });
    this._updated();
  }
  get webkitColumnRule() {
    return getCss(this.name, "webkitColumnRule");
  }
  setWebkitColumnRule(value) {
    this.webkitColumnRule = value;
    return this;
  }
  set webkitColumnRuleColor(value) {
    setCss2(this.name, {
      webkitColumnRuleColor: value
    });
    this._updated();
  }
  get webkitColumnRuleColor() {
    return getCss(this.name, "webkitColumnRuleColor");
  }
  setWebkitColumnRuleColor(value) {
    this.webkitColumnRuleColor = value;
    return this;
  }
  set webkitColumnRuleStyle(value) {
    setCss2(this.name, {
      webkitColumnRuleStyle: value
    });
    this._updated();
  }
  get webkitColumnRuleStyle() {
    return getCss(this.name, "webkitColumnRuleStyle");
  }
  setWebkitColumnRuleStyle(value) {
    this.webkitColumnRuleStyle = value;
    return this;
  }
  set webkitColumnRuleWidth(value) {
    setCss2(this.name, {
      webkitColumnRuleWidth: value
    });
    this._updated();
  }
  get webkitColumnRuleWidth() {
    return getCss(this.name, "webkitColumnRuleWidth");
  }
  setWebkitColumnRuleWidth(value) {
    this.webkitColumnRuleWidth = value;
    return this;
  }
  set webkitColumnSpan(value) {
    setCss2(this.name, {
      webkitColumnSpan: value
    });
    this._updated();
  }
  get webkitColumnSpan() {
    return getCss(this.name, "webkitColumnSpan");
  }
  setWebkitColumnSpan(value) {
    this.webkitColumnSpan = value;
    return this;
  }
  set webkitColumnWidth(value) {
    setCss2(this.name, {
      webkitColumnWidth: value
    });
    this._updated();
  }
  get webkitColumnWidth() {
    return getCss(this.name, "webkitColumnWidth");
  }
  setWebkitColumnWidth(value) {
    this.webkitColumnWidth = value;
    return this;
  }
  set webkitColumns(value) {
    setCss2(this.name, {
      webkitColumns: value
    });
    this._updated();
  }
  get webkitColumns() {
    return getCss(this.name, "webkitColumns");
  }
  setWebkitColumns(value) {
    this.webkitColumns = value;
    return this;
  }
  set webkitFilter(value) {
    setCss2(this.name, {
      webkitFilter: value
    });
    this._updated();
  }
  get webkitFilter() {
    return getCss(this.name, "webkitFilter");
  }
  setWebkitFilter(value) {
    this.webkitFilter = value;
    return this;
  }
  set webkitFlex(value) {
    setCss2(this.name, {
      webkitFlex: value
    });
    this._updated();
  }
  get webkitFlex() {
    return getCss(this.name, "webkitFlex");
  }
  setWebkitFlex(value) {
    this.webkitFlex = value;
    return this;
  }
  set webkitFlexBasis(value) {
    setCss2(this.name, {
      webkitFlexBasis: value
    });
    this._updated();
  }
  get webkitFlexBasis() {
    return getCss(this.name, "webkitFlexBasis");
  }
  setWebkitFlexBasis(value) {
    this.webkitFlexBasis = value;
    return this;
  }
  set webkitFlexDirection(value) {
    setCss2(this.name, {
      webkitFlexDirection: value
    });
    this._updated();
  }
  get webkitFlexDirection() {
    return getCss(this.name, "webkitFlexDirection");
  }
  setWebkitFlexDirection(value) {
    this.webkitFlexDirection = value;
    return this;
  }
  set webkitFlexFlow(value) {
    setCss2(this.name, {
      webkitFlexFlow: value
    });
    this._updated();
  }
  get webkitFlexFlow() {
    return getCss(this.name, "webkitFlexFlow");
  }
  setWebkitFlexFlow(value) {
    this.webkitFlexFlow = value;
    return this;
  }
  set webkitFlexGrow(value) {
    setCss2(this.name, {
      webkitFlexGrow: value
    });
    this._updated();
  }
  get webkitFlexGrow() {
    return getCss(this.name, "webkitFlexGrow");
  }
  setWebkitFlexGrow(value) {
    this.webkitFlexGrow = value;
    return this;
  }
  set webkitFlexShrink(value) {
    setCss2(this.name, {
      webkitFlexShrink: value
    });
    this._updated();
  }
  get webkitFlexShrink() {
    return getCss(this.name, "webkitFlexShrink");
  }
  setWebkitFlexShrink(value) {
    this.webkitFlexShrink = value;
    return this;
  }
  set webkitFlexWrap(value) {
    setCss2(this.name, {
      webkitFlexWrap: value
    });
    this._updated();
  }
  get webkitFlexWrap() {
    return getCss(this.name, "webkitFlexWrap");
  }
  setWebkitFlexWrap(value) {
    this.webkitFlexWrap = value;
    return this;
  }
  set webkitFontFeatureSettings(value) {
    setCss2(this.name, {
      webkitFontFeatureSettings: value
    });
    this._updated();
  }
  get webkitFontFeatureSettings() {
    return getCss(this.name, "webkitFontFeatureSettings");
  }
  setWebkitFontFeatureSettings(value) {
    this.webkitFontFeatureSettings = value;
    return this;
  }
  set webkitFontSmoothing(value) {
    setCss2(this.name, {
      webkitFontSmoothing: value
    });
    this._updated();
  }
  get webkitFontSmoothing() {
    return getCss(this.name, "webkitFontSmoothing");
  }
  setWebkitFontSmoothing(value) {
    this.webkitFontSmoothing = value;
    return this;
  }
  set webkitHyphenateCharacter(value) {
    setCss2(this.name, {
      webkitHyphenateCharacter: value
    });
    this._updated();
  }
  get webkitHyphenateCharacter() {
    return getCss(this.name, "webkitHyphenateCharacter");
  }
  setWebkitHyphenateCharacter(value) {
    this.webkitHyphenateCharacter = value;
    return this;
  }
  set webkitJustifyContent(value) {
    setCss2(this.name, {
      webkitJustifyContent: value
    });
    this._updated();
  }
  get webkitJustifyContent() {
    return getCss(this.name, "webkitJustifyContent");
  }
  setWebkitJustifyContent(value) {
    this.webkitJustifyContent = value;
    return this;
  }
  set webkitLineBreak(value) {
    setCss2(this.name, {
      webkitLineBreak: value
    });
    this._updated();
  }
  get webkitLineBreak() {
    return getCss(this.name, "webkitLineBreak");
  }
  setWebkitLineBreak(value) {
    this.webkitLineBreak = value;
    return this;
  }
  set webkitLineClamp(value) {
    setCss2(this.name, {
      webkitLineClamp: value
    });
    this._updated();
  }
  get webkitLineClamp() {
    return getCss(this.name, "webkitLineClamp");
  }
  setWebkitLineClamp(value) {
    this.webkitLineClamp = value;
    return this;
  }
  set webkitLocale(value) {
    setCss2(this.name, {
      webkitLocale: value
    });
    this._updated();
  }
  get webkitLocale() {
    return getCss(this.name, "webkitLocale");
  }
  setWebkitLocale(value) {
    this.webkitLocale = value;
    return this;
  }
  set webkitLogicalHeight(value) {
    setCss2(this.name, {
      webkitLogicalHeight: value
    });
    this._updated();
  }
  get webkitLogicalHeight() {
    return getCss(this.name, "webkitLogicalHeight");
  }
  setWebkitLogicalHeight(value) {
    this.webkitLogicalHeight = value;
    return this;
  }
  set webkitLogicalWidth(value) {
    setCss2(this.name, {
      webkitLogicalWidth: value
    });
    this._updated();
  }
  get webkitLogicalWidth() {
    return getCss(this.name, "webkitLogicalWidth");
  }
  setWebkitLogicalWidth(value) {
    this.webkitLogicalWidth = value;
    return this;
  }
  set webkitMarginAfter(value) {
    setCss2(this.name, {
      webkitMarginAfter: value
    });
    this._updated();
  }
  get webkitMarginAfter() {
    return getCss(this.name, "webkitMarginAfter");
  }
  setWebkitMarginAfter(value) {
    this.webkitMarginAfter = value;
    return this;
  }
  set webkitMarginBefore(value) {
    setCss2(this.name, {
      webkitMarginBefore: value
    });
    this._updated();
  }
  get webkitMarginBefore() {
    return getCss(this.name, "webkitMarginBefore");
  }
  setWebkitMarginBefore(value) {
    this.webkitMarginBefore = value;
    return this;
  }
  set webkitMarginEnd(value) {
    setCss2(this.name, {
      webkitMarginEnd: value
    });
    this._updated();
  }
  get webkitMarginEnd() {
    return getCss(this.name, "webkitMarginEnd");
  }
  setWebkitMarginEnd(value) {
    this.webkitMarginEnd = value;
    return this;
  }
  set webkitMarginStart(value) {
    setCss2(this.name, {
      webkitMarginStart: value
    });
    this._updated();
  }
  get webkitMarginStart() {
    return getCss(this.name, "webkitMarginStart");
  }
  setWebkitMarginStart(value) {
    this.webkitMarginStart = value;
    return this;
  }
  set webkitMask(value) {
    setCss2(this.name, {
      webkitMask: value
    });
    this._updated();
  }
  get webkitMask() {
    return getCss(this.name, "webkitMask");
  }
  setWebkitMask(value) {
    this.webkitMask = value;
    return this;
  }
  set webkitMaskBoxImage(value) {
    setCss2(this.name, {
      webkitMaskBoxImage: value
    });
    this._updated();
  }
  get webkitMaskBoxImage() {
    return getCss(this.name, "webkitMaskBoxImage");
  }
  setWebkitMaskBoxImage(value) {
    this.webkitMaskBoxImage = value;
    return this;
  }
  set webkitMaskBoxImageOutset(value) {
    setCss2(this.name, {
      webkitMaskBoxImageOutset: value
    });
    this._updated();
  }
  get webkitMaskBoxImageOutset() {
    return getCss(this.name, "webkitMaskBoxImageOutset");
  }
  setWebkitMaskBoxImageOutset(value) {
    this.webkitMaskBoxImageOutset = value;
    return this;
  }
  set webkitMaskBoxImageRepeat(value) {
    setCss2(this.name, {
      webkitMaskBoxImageRepeat: value
    });
    this._updated();
  }
  get webkitMaskBoxImageRepeat() {
    return getCss(this.name, "webkitMaskBoxImageRepeat");
  }
  setWebkitMaskBoxImageRepeat(value) {
    this.webkitMaskBoxImageRepeat = value;
    return this;
  }
  set webkitMaskBoxImageSlice(value) {
    setCss2(this.name, {
      webkitMaskBoxImageSlice: value
    });
    this._updated();
  }
  get webkitMaskBoxImageSlice() {
    return getCss(this.name, "webkitMaskBoxImageSlice");
  }
  setWebkitMaskBoxImageSlice(value) {
    this.webkitMaskBoxImageSlice = value;
    return this;
  }
  set webkitMaskBoxImageSource(value) {
    setCss2(this.name, {
      webkitMaskBoxImageSource: value
    });
    this._updated();
  }
  get webkitMaskBoxImageSource() {
    return getCss(this.name, "webkitMaskBoxImageSource");
  }
  setWebkitMaskBoxImageSource(value) {
    this.webkitMaskBoxImageSource = value;
    return this;
  }
  set webkitMaskBoxImageWidth(value) {
    setCss2(this.name, {
      webkitMaskBoxImageWidth: value
    });
    this._updated();
  }
  get webkitMaskBoxImageWidth() {
    return getCss(this.name, "webkitMaskBoxImageWidth");
  }
  setWebkitMaskBoxImageWidth(value) {
    this.webkitMaskBoxImageWidth = value;
    return this;
  }
  set webkitMaskClip(value) {
    setCss2(this.name, {
      webkitMaskClip: value
    });
    this._updated();
  }
  get webkitMaskClip() {
    return getCss(this.name, "webkitMaskClip");
  }
  setWebkitMaskClip(value) {
    this.webkitMaskClip = value;
    return this;
  }
  set webkitMaskComposite(value) {
    setCss2(this.name, {
      webkitMaskComposite: value
    });
    this._updated();
  }
  get webkitMaskComposite() {
    return getCss(this.name, "webkitMaskComposite");
  }
  setWebkitMaskComposite(value) {
    this.webkitMaskComposite = value;
    return this;
  }
  set webkitMaskImage(value) {
    setCss2(this.name, {
      webkitMaskImage: value
    });
    this._updated();
  }
  get webkitMaskImage() {
    return getCss(this.name, "webkitMaskImage");
  }
  setWebkitMaskImage(value) {
    this.webkitMaskImage = value;
    return this;
  }
  set webkitMaskOrigin(value) {
    setCss2(this.name, {
      webkitMaskOrigin: value
    });
    this._updated();
  }
  get webkitMaskOrigin() {
    return getCss(this.name, "webkitMaskOrigin");
  }
  setWebkitMaskOrigin(value) {
    this.webkitMaskOrigin = value;
    return this;
  }
  set webkitMaskPosition(value) {
    setCss2(this.name, {
      webkitMaskPosition: value
    });
    this._updated();
  }
  get webkitMaskPosition() {
    return getCss(this.name, "webkitMaskPosition");
  }
  setWebkitMaskPosition(value) {
    this.webkitMaskPosition = value;
    return this;
  }
  set webkitMaskPositionX(value) {
    setCss2(this.name, {
      webkitMaskPositionX: value
    });
    this._updated();
  }
  get webkitMaskPositionX() {
    return getCss(this.name, "webkitMaskPositionX");
  }
  setWebkitMaskPositionX(value) {
    this.webkitMaskPositionX = value;
    return this;
  }
  set webkitMaskPositionY(value) {
    setCss2(this.name, {
      webkitMaskPositionY: value
    });
    this._updated();
  }
  get webkitMaskPositionY() {
    return getCss(this.name, "webkitMaskPositionY");
  }
  setWebkitMaskPositionY(value) {
    this.webkitMaskPositionY = value;
    return this;
  }
  set webkitMaskRepeat(value) {
    setCss2(this.name, {
      webkitMaskRepeat: value
    });
    this._updated();
  }
  get webkitMaskRepeat() {
    return getCss(this.name, "webkitMaskRepeat");
  }
  setWebkitMaskRepeat(value) {
    this.webkitMaskRepeat = value;
    return this;
  }
  set webkitMaskRepeatX(value) {
    setCss2(this.name, {
      webkitMaskRepeatX: value
    });
    this._updated();
  }
  get webkitMaskRepeatX() {
    return getCss(this.name, "webkitMaskRepeatX");
  }
  setWebkitMaskRepeatX(value) {
    this.webkitMaskRepeatX = value;
    return this;
  }
  set webkitMaskRepeatY(value) {
    setCss2(this.name, {
      webkitMaskRepeatY: value
    });
    this._updated();
  }
  get webkitMaskRepeatY() {
    return getCss(this.name, "webkitMaskRepeatY");
  }
  setWebkitMaskRepeatY(value) {
    this.webkitMaskRepeatY = value;
    return this;
  }
  set webkitMaskSize(value) {
    setCss2(this.name, {
      webkitMaskSize: value
    });
    this._updated();
  }
  get webkitMaskSize() {
    return getCss(this.name, "webkitMaskSize");
  }
  setWebkitMaskSize(value) {
    this.webkitMaskSize = value;
    return this;
  }
  set webkitMaxLogicalHeight(value) {
    setCss2(this.name, {
      webkitMaxLogicalHeight: value
    });
    this._updated();
  }
  get webkitMaxLogicalHeight() {
    return getCss(this.name, "webkitMaxLogicalHeight");
  }
  setWebkitMaxLogicalHeight(value) {
    this.webkitMaxLogicalHeight = value;
    return this;
  }
  set webkitMaxLogicalWidth(value) {
    setCss2(this.name, {
      webkitMaxLogicalWidth: value
    });
    this._updated();
  }
  get webkitMaxLogicalWidth() {
    return getCss(this.name, "webkitMaxLogicalWidth");
  }
  setWebkitMaxLogicalWidth(value) {
    this.webkitMaxLogicalWidth = value;
    return this;
  }
  set webkitMinLogicalHeight(value) {
    setCss2(this.name, {
      webkitMinLogicalHeight: value
    });
    this._updated();
  }
  get webkitMinLogicalHeight() {
    return getCss(this.name, "webkitMinLogicalHeight");
  }
  setWebkitMinLogicalHeight(value) {
    this.webkitMinLogicalHeight = value;
    return this;
  }
  set webkitMinLogicalWidth(value) {
    setCss2(this.name, {
      webkitMinLogicalWidth: value
    });
    this._updated();
  }
  get webkitMinLogicalWidth() {
    return getCss(this.name, "webkitMinLogicalWidth");
  }
  setWebkitMinLogicalWidth(value) {
    this.webkitMinLogicalWidth = value;
    return this;
  }
  set webkitOpacity(value) {
    setCss2(this.name, {
      webkitOpacity: value
    });
    this._updated();
  }
  get webkitOpacity() {
    return getCss(this.name, "webkitOpacity");
  }
  setWebkitOpacity(value) {
    this.webkitOpacity = value;
    return this;
  }
  set webkitOrder(value) {
    setCss2(this.name, {
      webkitOrder: value
    });
    this._updated();
  }
  get webkitOrder() {
    return getCss(this.name, "webkitOrder");
  }
  setWebkitOrder(value) {
    this.webkitOrder = value;
    return this;
  }
  set webkitPaddingAfter(value) {
    setCss2(this.name, {
      webkitPaddingAfter: value
    });
    this._updated();
  }
  get webkitPaddingAfter() {
    return getCss(this.name, "webkitPaddingAfter");
  }
  setWebkitPaddingAfter(value) {
    this.webkitPaddingAfter = value;
    return this;
  }
  set webkitPaddingBefore(value) {
    setCss2(this.name, {
      webkitPaddingBefore: value
    });
    this._updated();
  }
  get webkitPaddingBefore() {
    return getCss(this.name, "webkitPaddingBefore");
  }
  setWebkitPaddingBefore(value) {
    this.webkitPaddingBefore = value;
    return this;
  }
  set webkitPaddingEnd(value) {
    setCss2(this.name, {
      webkitPaddingEnd: value
    });
    this._updated();
  }
  get webkitPaddingEnd() {
    return getCss(this.name, "webkitPaddingEnd");
  }
  setWebkitPaddingEnd(value) {
    this.webkitPaddingEnd = value;
    return this;
  }
  set webkitPaddingStart(value) {
    setCss2(this.name, {
      webkitPaddingStart: value
    });
    this._updated();
  }
  get webkitPaddingStart() {
    return getCss(this.name, "webkitPaddingStart");
  }
  setWebkitPaddingStart(value) {
    this.webkitPaddingStart = value;
    return this;
  }
  set webkitPerspective(value) {
    setCss2(this.name, {
      webkitPerspective: value
    });
    this._updated();
  }
  get webkitPerspective() {
    return getCss(this.name, "webkitPerspective");
  }
  setWebkitPerspective(value) {
    this.webkitPerspective = value;
    return this;
  }
  set webkitPerspectiveOrigin(value) {
    setCss2(this.name, {
      webkitPerspectiveOrigin: value
    });
    this._updated();
  }
  get webkitPerspectiveOrigin() {
    return getCss(this.name, "webkitPerspectiveOrigin");
  }
  setWebkitPerspectiveOrigin(value) {
    this.webkitPerspectiveOrigin = value;
    return this;
  }
  set webkitPerspectiveOriginX(value) {
    setCss2(this.name, {
      webkitPerspectiveOriginX: value
    });
    this._updated();
  }
  get webkitPerspectiveOriginX() {
    return getCss(this.name, "webkitPerspectiveOriginX");
  }
  setWebkitPerspectiveOriginX(value) {
    this.webkitPerspectiveOriginX = value;
    return this;
  }
  set webkitPerspectiveOriginY(value) {
    setCss2(this.name, {
      webkitPerspectiveOriginY: value
    });
    this._updated();
  }
  get webkitPerspectiveOriginY() {
    return getCss(this.name, "webkitPerspectiveOriginY");
  }
  setWebkitPerspectiveOriginY(value) {
    this.webkitPerspectiveOriginY = value;
    return this;
  }
  set webkitPrintColorAdjust(value) {
    setCss2(this.name, {
      webkitPrintColorAdjust: value
    });
    this._updated();
  }
  get webkitPrintColorAdjust() {
    return getCss(this.name, "webkitPrintColorAdjust");
  }
  setWebkitPrintColorAdjust(value) {
    this.webkitPrintColorAdjust = value;
    return this;
  }
  set webkitRtlOrdering(value) {
    setCss2(this.name, {
      webkitRtlOrdering: value
    });
    this._updated();
  }
  get webkitRtlOrdering() {
    return getCss(this.name, "webkitRtlOrdering");
  }
  setWebkitRtlOrdering(value) {
    this.webkitRtlOrdering = value;
    return this;
  }
  set webkitRubyPosition(value) {
    setCss2(this.name, {
      webkitRubyPosition: value
    });
    this._updated();
  }
  get webkitRubyPosition() {
    return getCss(this.name, "webkitRubyPosition");
  }
  setWebkitRubyPosition(value) {
    this.webkitRubyPosition = value;
    return this;
  }
  set webkitShapeImageThreshold(value) {
    setCss2(this.name, {
      webkitShapeImageThreshold: value
    });
    this._updated();
  }
  get webkitShapeImageThreshold() {
    return getCss(this.name, "webkitShapeImageThreshold");
  }
  setWebkitShapeImageThreshold(value) {
    this.webkitShapeImageThreshold = value;
    return this;
  }
  set webkitShapeMargin(value) {
    setCss2(this.name, {
      webkitShapeMargin: value
    });
    this._updated();
  }
  get webkitShapeMargin() {
    return getCss(this.name, "webkitShapeMargin");
  }
  setWebkitShapeMargin(value) {
    this.webkitShapeMargin = value;
    return this;
  }
  set webkitShapeOutside(value) {
    setCss2(this.name, {
      webkitShapeOutside: value
    });
    this._updated();
  }
  get webkitShapeOutside() {
    return getCss(this.name, "webkitShapeOutside");
  }
  setWebkitShapeOutside(value) {
    this.webkitShapeOutside = value;
    return this;
  }
  set webkitTapHighlightColor(value) {
    setCss2(this.name, {
      webkitTapHighlightColor: value
    });
    this._updated();
  }
  get webkitTapHighlightColor() {
    return getCss(this.name, "webkitTapHighlightColor");
  }
  setWebkitTapHighlightColor(value) {
    this.webkitTapHighlightColor = value;
    return this;
  }
  set webkitTextCombine(value) {
    setCss2(this.name, {
      webkitTextCombine: value
    });
    this._updated();
  }
  get webkitTextCombine() {
    return getCss(this.name, "webkitTextCombine");
  }
  setWebkitTextCombine(value) {
    this.webkitTextCombine = value;
    return this;
  }
  set webkitTextDecorationsInEffect(value) {
    setCss2(this.name, {
      webkitTextDecorationsInEffect: value
    });
    this._updated();
  }
  get webkitTextDecorationsInEffect() {
    return getCss(this.name, "webkitTextDecorationsInEffect");
  }
  setWebkitTextDecorationsInEffect(value) {
    this.webkitTextDecorationsInEffect = value;
    return this;
  }
  set webkitTextEmphasis(value) {
    setCss2(this.name, {
      webkitTextEmphasis: value
    });
    this._updated();
  }
  get webkitTextEmphasis() {
    return getCss(this.name, "webkitTextEmphasis");
  }
  setWebkitTextEmphasis(value) {
    this.webkitTextEmphasis = value;
    return this;
  }
  set webkitTextEmphasisColor(value) {
    setCss2(this.name, {
      webkitTextEmphasisColor: value
    });
    this._updated();
  }
  get webkitTextEmphasisColor() {
    return getCss(this.name, "webkitTextEmphasisColor");
  }
  setWebkitTextEmphasisColor(value) {
    this.webkitTextEmphasisColor = value;
    return this;
  }
  set webkitTextEmphasisPosition(value) {
    setCss2(this.name, {
      webkitTextEmphasisPosition: value
    });
    this._updated();
  }
  get webkitTextEmphasisPosition() {
    return getCss(this.name, "webkitTextEmphasisPosition");
  }
  setWebkitTextEmphasisPosition(value) {
    this.webkitTextEmphasisPosition = value;
    return this;
  }
  set webkitTextEmphasisStyle(value) {
    setCss2(this.name, {
      webkitTextEmphasisStyle: value
    });
    this._updated();
  }
  get webkitTextEmphasisStyle() {
    return getCss(this.name, "webkitTextEmphasisStyle");
  }
  setWebkitTextEmphasisStyle(value) {
    this.webkitTextEmphasisStyle = value;
    return this;
  }
  set webkitTextFillColor(value) {
    setCss2(this.name, {
      webkitTextFillColor: value
    });
    this._updated();
  }
  get webkitTextFillColor() {
    return getCss(this.name, "webkitTextFillColor");
  }
  setWebkitTextFillColor(value) {
    this.webkitTextFillColor = value;
    return this;
  }
  set webkitTextOrientation(value) {
    setCss2(this.name, {
      webkitTextOrientation: value
    });
    this._updated();
  }
  get webkitTextOrientation() {
    return getCss(this.name, "webkitTextOrientation");
  }
  setWebkitTextOrientation(value) {
    this.webkitTextOrientation = value;
    return this;
  }
  set webkitTextSecurity(value) {
    setCss2(this.name, {
      webkitTextSecurity: value
    });
    this._updated();
  }
  get webkitTextSecurity() {
    return getCss(this.name, "webkitTextSecurity");
  }
  setWebkitTextSecurity(value) {
    this.webkitTextSecurity = value;
    return this;
  }
  set webkitTextSizeAdjust(value) {
    setCss2(this.name, {
      webkitTextSizeAdjust: value
    });
    this._updated();
  }
  get webkitTextSizeAdjust() {
    return getCss(this.name, "webkitTextSizeAdjust");
  }
  setWebkitTextSizeAdjust(value) {
    this.webkitTextSizeAdjust = value;
    return this;
  }
  set webkitTextStroke(value) {
    setCss2(this.name, {
      webkitTextStroke: value
    });
    this._updated();
  }
  get webkitTextStroke() {
    return getCss(this.name, "webkitTextStroke");
  }
  setWebkitTextStroke(value) {
    this.webkitTextStroke = value;
    return this;
  }
  set webkitTextStrokeColor(value) {
    setCss2(this.name, {
      webkitTextStrokeColor: value
    });
    this._updated();
  }
  get webkitTextStrokeColor() {
    return getCss(this.name, "webkitTextStrokeColor");
  }
  setWebkitTextStrokeColor(value) {
    this.webkitTextStrokeColor = value;
    return this;
  }
  set webkitTextStrokeWidth(value) {
    setCss2(this.name, {
      webkitTextStrokeWidth: value
    });
    this._updated();
  }
  get webkitTextStrokeWidth() {
    return getCss(this.name, "webkitTextStrokeWidth");
  }
  setWebkitTextStrokeWidth(value) {
    this.webkitTextStrokeWidth = value;
    return this;
  }
  set webkitTransform(value) {
    setCss2(this.name, {
      webkitTransform: value
    });
    this._updated();
  }
  get webkitTransform() {
    return getCss(this.name, "webkitTransform");
  }
  setWebkitTransform(value) {
    this.webkitTransform = value;
    return this;
  }
  set webkitTransformOrigin(value) {
    setCss2(this.name, {
      webkitTransformOrigin: value
    });
    this._updated();
  }
  get webkitTransformOrigin() {
    return getCss(this.name, "webkitTransformOrigin");
  }
  setWebkitTransformOrigin(value) {
    this.webkitTransformOrigin = value;
    return this;
  }
  set webkitTransformOriginX(value) {
    setCss2(this.name, {
      webkitTransformOriginX: value
    });
    this._updated();
  }
  get webkitTransformOriginX() {
    return getCss(this.name, "webkitTransformOriginX");
  }
  setWebkitTransformOriginX(value) {
    this.webkitTransformOriginX = value;
    return this;
  }
  set webkitTransformOriginY(value) {
    setCss2(this.name, {
      webkitTransformOriginY: value
    });
    this._updated();
  }
  get webkitTransformOriginY() {
    return getCss(this.name, "webkitTransformOriginY");
  }
  setWebkitTransformOriginY(value) {
    this.webkitTransformOriginY = value;
    return this;
  }
  set webkitTransformOriginZ(value) {
    setCss2(this.name, {
      webkitTransformOriginZ: value
    });
    this._updated();
  }
  get webkitTransformOriginZ() {
    return getCss(this.name, "webkitTransformOriginZ");
  }
  setWebkitTransformOriginZ(value) {
    this.webkitTransformOriginZ = value;
    return this;
  }
  set webkitTransformStyle(value) {
    setCss2(this.name, {
      webkitTransformStyle: value
    });
    this._updated();
  }
  get webkitTransformStyle() {
    return getCss(this.name, "webkitTransformStyle");
  }
  setWebkitTransformStyle(value) {
    this.webkitTransformStyle = value;
    return this;
  }
  set webkitTransition(value) {
    setCss2(this.name, {
      webkitTransition: value
    });
    this._updated();
  }
  get webkitTransition() {
    return getCss(this.name, "webkitTransition");
  }
  setWebkitTransition(value) {
    this.webkitTransition = value;
    return this;
  }
  set webkitTransitionDelay(value) {
    setCss2(this.name, {
      webkitTransitionDelay: value
    });
    this._updated();
  }
  get webkitTransitionDelay() {
    return getCss(this.name, "webkitTransitionDelay");
  }
  setWebkitTransitionDelay(value) {
    this.webkitTransitionDelay = value;
    return this;
  }
  set webkitTransitionDuration(value) {
    setCss2(this.name, {
      webkitTransitionDuration: value
    });
    this._updated();
  }
  get webkitTransitionDuration() {
    return getCss(this.name, "webkitTransitionDuration");
  }
  setWebkitTransitionDuration(value) {
    this.webkitTransitionDuration = value;
    return this;
  }
  set webkitTransitionProperty(value) {
    setCss2(this.name, {
      webkitTransitionProperty: value
    });
    this._updated();
  }
  get webkitTransitionProperty() {
    return getCss(this.name, "webkitTransitionProperty");
  }
  setWebkitTransitionProperty(value) {
    this.webkitTransitionProperty = value;
    return this;
  }
  set webkitTransitionTimingFunction(value) {
    setCss2(this.name, {
      webkitTransitionTimingFunction: value
    });
    this._updated();
  }
  get webkitTransitionTimingFunction() {
    return getCss(this.name, "webkitTransitionTimingFunction");
  }
  setWebkitTransitionTimingFunction(value) {
    this.webkitTransitionTimingFunction = value;
    return this;
  }
  set webkitUserDrag(value) {
    setCss2(this.name, {
      webkitUserDrag: value
    });
    this._updated();
  }
  get webkitUserDrag() {
    return getCss(this.name, "webkitUserDrag");
  }
  setWebkitUserDrag(value) {
    this.webkitUserDrag = value;
    return this;
  }
  set webkitUserModify(value) {
    setCss2(this.name, {
      webkitUserModify: value
    });
    this._updated();
  }
  get webkitUserModify() {
    return getCss(this.name, "webkitUserModify");
  }
  setWebkitUserModify(value) {
    this.webkitUserModify = value;
    return this;
  }
  set webkitUserSelect(value) {
    setCss2(this.name, {
      webkitUserSelect: value
    });
    this._updated();
  }
  get webkitUserSelect() {
    return getCss(this.name, "webkitUserSelect");
  }
  setWebkitUserSelect(value) {
    this.webkitUserSelect = value;
    return this;
  }
  set webkitWritingMode(value) {
    setCss2(this.name, {
      webkitWritingMode: value
    });
    this._updated();
  }
  get webkitWritingMode() {
    return getCss(this.name, "webkitWritingMode");
  }
  setWebkitWritingMode(value) {
    this.webkitWritingMode = value;
    return this;
  }
  set whiteSpace(value) {
    setCss2(this.name, {
      whiteSpace: value
    });
    this._updated();
  }
  get whiteSpace() {
    return getCss(this.name, "whiteSpace");
  }
  setWhiteSpace(value) {
    this.whiteSpace = value;
    return this;
  }
  set whiteSpaceCollapse(value) {
    setCss2(this.name, {
      whiteSpaceCollapse: value
    });
    this._updated();
  }
  get whiteSpaceCollapse() {
    return getCss(this.name, "whiteSpaceCollapse");
  }
  setWhiteSpaceCollapse(value) {
    this.whiteSpaceCollapse = value;
    return this;
  }
  set widows(value) {
    setCss2(this.name, {
      widows: value
    });
    this._updated();
  }
  get widows() {
    return getCss(this.name, "widows");
  }
  setWidows(value) {
    this.widows = value;
    return this;
  }
  set width(value) {
    setCss2(this.name, {
      width: value
    });
    this._updated();
  }
  get width() {
    return getCss(this.name, "width");
  }
  setWidth(value) {
    this.width = value;
    return this;
  }
  set willChange(value) {
    setCss2(this.name, {
      willChange: value
    });
    this._updated();
  }
  get willChange() {
    return getCss(this.name, "willChange");
  }
  setWillChange(value) {
    this.willChange = value;
    return this;
  }
  set wordBreak(value) {
    setCss2(this.name, {
      wordBreak: value
    });
    this._updated();
  }
  get wordBreak() {
    return getCss(this.name, "wordBreak");
  }
  setWordBreak(value) {
    this.wordBreak = value;
    return this;
  }
  set wordSpacing(value) {
    setCss2(this.name, {
      wordSpacing: value
    });
    this._updated();
  }
  get wordSpacing() {
    return getCss(this.name, "wordSpacing");
  }
  setWordSpacing(value) {
    this.wordSpacing = value;
    return this;
  }
  set wordWrap(value) {
    setCss2(this.name, {
      wordWrap: value
    });
    this._updated();
  }
  get wordWrap() {
    return getCss(this.name, "wordWrap");
  }
  setWordWrap(value) {
    this.wordWrap = value;
    return this;
  }
  set writingMode(value) {
    setCss2(this.name, {
      writingMode: value
    });
    this._updated();
  }
  get writingMode() {
    return getCss(this.name, "writingMode");
  }
  setWritingMode(value) {
    this.writingMode = value;
    return this;
  }
  set x(value) {
    setCss2(this.name, {
      x: value
    });
    this._updated();
  }
  get x() {
    return getCss(this.name, "x");
  }
  setX(value) {
    this.x = value;
    return this;
  }
  set y(value) {
    setCss2(this.name, {
      y: value
    });
    this._updated();
  }
  get y() {
    return getCss(this.name, "y");
  }
  setY(value) {
    this.y = value;
    return this;
  }
  set zIndex(value) {
    setCss2(this.name, {
      zIndex: value
    });
    this._updated();
  }
  get zIndex() {
    return getCss(this.name, "zIndex");
  }
  setZIndex(value) {
    this.zIndex = value;
    return this;
  }
  set zoom(value) {
    setCss2(this.name, {
      zoom: value
    });
    this._updated();
  }
  get zoom() {
    return getCss(this.name, "zoom");
  }
  setZoom(value) {
    this.zoom = value;
    return this;
  }
  variable(name, value = null) {
    const vname = name.startsWith("--") ? name : "--" + name;
    if (value) {
      setCss2(this.name, {
        [vname]: value
      });
      this._updated();
    } else {
      return getCss(this.name, vname);
    }
    return this;
  }
  _updated() {
    this.emit("update");
  }
  extends(props, override = true) {
    return Style.extends(this, props, this.name, override);
  }
  static trimRules(rules) {
    return trimRules(rules);
  }
  static register(name, props) {
    const s = new Style(name);
    s.set(props);
    return s;
  }
  static fromElement(element, name = null) {
    const styles = getComputedStyle(element);
    const csss = {};
    for (const property of styles) {
      const value = styles.getPropertyValue(property);
      csss[property] = value;
    }
    return Style.register(name, csss);
  }
  static fromWidget(widget, name = null) {
    return Style.fromElement(findEl(widget.id)[0], name);
  }
  static from(target, name = null) {
    if (isHTMLElement(target)) {
      return Style.fromElement(target, name);
    } else if (isWidget(target)) {
      return Style.fromWidget(target, name);
    } else {
      throw new Error("Only HTMLElements and Widgets are allowed for style copying.");
    }
  }
  static copy(target, name = null, mode = "all", style = null, update = true) {
    if (mode == "all" && target instanceof Style) {
      let newStyle = style || new Style(name || id_default(5));
      newStyle.set(target.all);
      if (update)
        target.on("update", () => newStyle.set(target.all));
      return newStyle;
    } else {
      let all = { ...getCss(target) };
      return Style.register(name || id_default(5), all);
    }
  }
  static extends(target, props, name = null, override = true) {
    let style = new Style(name);
    Style.copy(target, name, "all", style, override);
    if (!override)
      target.on("update", () => {
        const p = { ...target.all, ...props };
        style.set(p);
      });
    style.set(props);
    return style;
  }
  static INHERIT = "inherit";
  static AUTO = "auto";
  static FULL = "100%";
  static FULLWIDTH = "100vw";
  static FULLHEIGHT = "100dvh";
  static WRAP = "wrap";
  static NONE = "none";
  static BLOCK = "block";
  static FLEX = "flex";
  static GRID = "grid";
  static NOWRAP = "nowrap";
  static INITIAL = "initial";
  static UNSET = "unset";
  static CLIP = "clip";
  static HIDDEN = "hidden";
  static VISIBLE = "visible";
  static UNIT = "16px";
  static HALFUNIT = "8px";
  static ONEANDHALFUNIT = "24px";
  static TWOUNITS = "32px";
  static THREEUNITS = "48px";
  static FOURUNITS = "64px";
  static FIVEUNITS = "80px";
  static BULKUNIT = "100px";
  static GRADIENT = {
    LEFT: "to left",
    RIGHT: "to right",
    TOP: "to top",
    BOTTOM: "to bottom"
  };
  static calc(...string) {
    return "calc(" + string.join(" ") + ")";
  }
  static var(string) {
    return "var(--" + voca_default.kebabCase(string) + ")";
  }
  static double(string) {
    return cssProperty([string, string]);
  }
  static linearGradient(...colors) {
    return `linear-gradient(${colors.map((color) => cssProperty(color)).join(",")})`;
  }
  static radialGradient(...colors) {
    return `radial-gradient(${colors.map((color) => cssProperty(color)).join(",")})`;
  }
  static deg(int) {
    return int + "deg";
  }
  static em(int) {
    return int + "em";
  }
  static rem(int) {
    return int + "rem";
  }
  static px(int) {
    return int + "px";
  }
  static p(int) {
    return int + "%";
  }
}
var Style_default = Style;

// client/data/Store.ts
var _inheritStore = function(store, parentStore) {
  let stores = parentStore.getStores();
  for (let i in stores) {
    store.setStore(stores[i], i);
  }
};

class Store extends EventTarget {
  stores = {
    state: {}
  };
  constructor(state = {}) {
    super();
    this.setStore(state);
  }
  set(key, value, store = "state") {
    if (!this.stores[store])
      this.stores[store] = {};
    this.stores[store][key] = value;
    this.dispatchEvent(new Event("change"));
  }
  get(key, store = "state") {
    return this.stores[store][key];
  }
  getStore(store = "state", id2 = null) {
    let ideed = id2 ? this.stores[id2] || {} : {};
    let s = { ...this.stores[store] };
    return s;
  }
  setStore(state, store = "state") {
    if (state)
      for (var i in state) {
        this.set(i, state[i], store);
      }
  }
  getStores() {
    return this.stores;
  }
  inherit(store) {
    store.addEventListener("change", () => {
      _inheritStore(this, store);
    });
    _inheritStore(this, store);
  }
}
var Store_default = Store;

// client/utils/dom.ts
var doAll = (all, cb) => {
  let response = [];
  all.forEach((element) => {
    let r = cb(element);
    if (r)
      response.push(r);
  });
  response = response.filter((item) => !(item instanceof Dom));
  if (response.length) {
    response = response.shift();
  } else {
    response = all;
  }
  return Array.isArray(response) ? all : response;
};

class Dom {
  elements = [];
  constructor(element, classes = null, attributes = null) {
    if (element instanceof HTMLElement) {
      this.elements.push(element);
    } else {
      let el = document.querySelectorAll(element);
      el.forEach((el2) => this.elements.push(el2));
    }
    if (classes) {
      this.addClass(classes);
    }
    if (attributes) {
      this.attr(attributes);
    }
  }
  at(index) {
    return this.elements.at(index);
  }
  push(child) {
    if (child instanceof Widget_default) {
      this.elements.push(findEl(child.id));
    } else {
      this.elements.push(child);
    }
    return this;
  }
  unshift(child) {
    if (child instanceof Widget_default) {
      this.elements.unshift(findEl(child.id));
    } else {
      this.elements.unshift(child);
    }
    return this;
  }
  shift() {
    return this.elements.shift();
  }
  pop() {
    return this.elements.pop();
  }
  forEach(callback) {
    this.elements.forEach(callback);
    return this;
  }
  get length() {
    return this.elements.length;
  }
  addClass(classes) {
    return doAll(this, (el) => setClasses(el, classes, "add"));
  }
  removeClass(classes) {
    return doAll(this, (el) => setClasses(el, classes, "remove"));
  }
  toggleClass(classes) {
    return doAll(this, (el) => setClasses(el, classes, "toggle"));
  }
  hasClass(classes) {
    return this.elements.at(0).classList.contains(classes);
  }
  attr(attr2) {
    if (typeof attr2 == "object")
      doAll(this, (el) => setAttributeMap(el, attr2));
    return typeof attr2 == "string" ? this.elements.at(0).attributes[attr2].value : this;
  }
  getAttr(attr2) {
    return this.elements.at(0).attributes[attr2].value;
  }
  prop(attr2) {
    if (typeof attr2 == "object")
      doAll(this, (el) => setObjectProps(el, attr2));
    return typeof attr2 == "string" ? this.elements.at(0)[attr2] : this;
  }
  getProp(attr2) {
    return this.elements.at(0)[attr2];
  }
  html(html) {
    if (html)
      this.elements.at(0).innerHTML = html;
    return this.elements.at(0).innerHTML;
  }
  width(width = null) {
    if (width)
      doAll(this, (el) => el.style.width = typeof width == "number" ? width + "px" : width);
    return width ? this : this.at(0).getBoundingClientRect().width;
  }
  height(height = null) {
    if (height)
      doAll(this, (el) => el.style.height = typeof height == "number" ? height + "px" : height);
    return height ? this : this.at(0).getBoundingClientRect().height;
  }
  text(text) {
    if (typeof text == "string")
      this.elements.at(0).innerText = text;
    return this.elements.at(0).innerText;
  }
  append(element) {
    if (element instanceof Dom) {
      element.forEach((element2) => this.at(0).appendChild(element2));
    } else {
      this.at(0).appendChild(element);
    }
    return this;
  }
  appendTo(element) {
    return doAll(this, (el) => element.appendChild(el));
  }
  prepend(element) {
    if (element instanceof Dom) {
      element.forEach((element2) => this.at(0).insertBefore(element2, this.at(0).firstChild));
    } else {
      this.at(0).insertBefore(element, this.at(0).firstChild);
    }
    return this;
  }
  prependTo(element) {
    return doAll(this, (el) => element.insertBefore(el, element.firstChild));
  }
  css(values, value) {
    return doAll(this, (el) => setCss(el, values, value));
  }
  remove() {
    return doAll(this, (el) => el.remove());
  }
  empty() {
    return doAll(this, (el) => emptyElement(el));
  }
  children() {
    return Dom.from(this.at(0).children.length ? this.at(0).children : []);
  }
  siblings() {
    return Dom.from(siblings(this.at(0)));
  }
  parent() {
    return this.at(0).parentNode ? new Dom(this.at(0).parentNode) : null;
  }
  closest(selector) {
    return new Dom(this.at(0).closest(selector));
  }
  find(arg) {
    if (typeof arg === "string") {
      return Dom.from(Array.from(this.at(0).querySelectorAll(arg)));
    } else if (typeof arg === "function") {
      return Array.prototype.find.call(this, arg);
    }
    return;
  }
  on(event, callback) {
    doAll(this, (el) => {
      if (!el.domEventListeners)
        el.domEventListeners = [];
      el.domEventListeners.push({ event, callback });
      el.addEventListener(event, callback);
    });
    return this;
  }
  is(selector) {
    const element = this.elements.at(0);
    if ("matches" in element) {
      return element.matches(selector);
    } else if (("msMatchesSelector" in element) && typeof element.msMatchesSelector === "function") {
      return element.msMatchesSelector(selector);
    } else if (("webkitMatchesSelector" in element) && typeof element.msMatchesSelector === "function") {
      return element.webkitMatchesSelector(selector);
    } else if (("mozMatchesSelector" in element) && typeof element.msMatchesSelector === "function") {
      return element.mozMatchesSelector(selector);
    } else {
      const matches2 = document.querySelectorAll(selector);
      return Array.from(matches2).indexOf(element) !== -1;
    }
  }
  off(name, callback = null) {
    doAll(this, (el) => {
      if (!el.domEventListeners)
        el.domEventListeners = [];
      el.domEventListeners.forEach((event) => {
        if (callback) {
          if (event.event === name && event.callback == callback)
            el.removeEventListener(name, callback);
        } else {
          if (event.event === name)
            el.removeEventListener(name, event.callback);
        }
      });
      el.domEventListeners = el.domEventListeners.filter((event) => {
        if (callback) {
          return event.event !== name && event.callback !== callback;
        } else {
          return event.event !== name;
        }
      });
    });
    return this;
  }
  trigger(event, data) {
    doAll(this, (el) => {
      el.dispatchEvent(new Event(event, data));
    });
    return this;
  }
  show() {
    return doAll(this, (el) => {
      el.style.display = "";
    });
  }
  hide() {
    return doAll(this, (el) => {
      el.style.display = "none";
    });
  }
  toggle() {
    return doAll(this, (el) => {
      el.style.display = el.style.display === "none" ? "" : "none";
    });
  }
  enable() {
    return doAll(this, (el) => {
      if (isHTMLElement(el)) {
        el.disabled = false;
        el.setAttribute("disabled", "false");
      }
    });
  }
  disable() {
    return doAll(this, (el) => {
      if (isHTMLElement(el)) {
        el.disabled = true;
        el.setAttribute("disabled", "true");
      }
    });
  }
  static from(elements) {
    let e = new Dom(Array.from(elements).shift());
    Array.from(elements).forEach((el) => e.push(el));
    return e;
  }
  static create(element, classes = "", attr2 = {}) {
    return new Dom(createElement(element, classes, attr2));
  }
}
var dom_default = Dom;

// client/utils/events.ts
var createEventData = function(e, name, widget = null) {
  return {
    prevent: () => e.preventDefault(),
    stop: () => e.stopPropagation(),
    key: { code: e.keyCode, name: e.code, output: e.key, ctrl: e.ctrlKey, shift: e.shiftKey, alt: e.altKey, meta: e.metaKey },
    pos: { x: e.clientX, y: e.clientY },
    offset: { x: e.offsetX, y: e.offsetY },
    name,
    data: e.data || e.originalEvent?.data,
    dataTransfer: e.dataTransfer || e.originalEvent?.dataTransfer,
    target: widget || e.target ? Widget_default.from(e.target) : null,
    original: e
  };
};
var getEventName = function(event) {
  if (event === "tap")
    return "click";
  if (event === "hover")
    return "mouseenter";
  if (event === "doubleTap")
    return "dblclick";
  if (event === "focusIn")
    return "focus";
  if (event === "focusOut")
    return "blur";
  return event;
};
var onHold = function(widget, callback, duration) {
  const holdEvent = "hold";
  const eventName = getEventName(holdEvent);
  const startHoldTimer = (e) => {
    if (widget.is("disabled"))
      return;
    callback.__holdTimer = setTimeout(() => {
      var data = createEventData(e, holdEvent);
      callback.call(widget, data, {});
      widget.emit(eventName, createEventData({}, holdEvent));
      widget.is("held", true);
    }, duration);
  };
  const cancelHoldTimer = () => {
    setTimeout(() => widget.is("held", false), 10);
    clearTimeout(callback.__holdTimer);
  };
  widget.__events__.push({ event: eventName, callback });
  findEl(widget.id).on("mousedown", startHoldTimer);
  findEl(widget.id).on("mouseup", cancelHoldTimer);
  return widget;
};
var onTextInput = function(widget, callback) {
  const eventName = getEventName("textinput");
  const input = (e) => {
    var data = createEventData(e, eventName);
    callback.call(widget, data, {});
    widget.emit(eventName, createEventData({}, eventName));
  };
  findEl(widget.id).on("input", input);
  findEl(widget.id).on("change", input);
};

// client/utils/misc.ts
var filteredChildren = function(children, makeOne = false, giveNull = false) {
  const filtered = Array.isArray(children) ? children : (children instanceof Widget_default ? children.toArray() : children.elements).filter((element) => element.GUIWIDGET).map((element) => element.GUIWIDGET);
  const isOne = filtered.length == 1 && makeOne;
  if (isOne) {
    filtered[0].toArray = () => WidgetList.from([filtered[0]]);
  } else {
    filtered.toArray = () => WidgetList.from([...filtered]);
  }
  let toGive = isOne ? filtered[0] : filtered.length ? filtered : giveNull ? null : filtered;
  if (Array.isArray(toGive) && !makeOne) {
    return WidgetList.from(toGive);
  }
  return makeOne && Array.isArray(toGive) ? toGive[0] : toGive;
};
var resolveSubchild = function(element, child = null) {
  let el = element;
  if (child && el.find(child) instanceof Widget_default)
    el = el.find(child);
  return el;
};
var htmlPseudos = [
  "::after",
  "::before",
  "::first-letter",
  "::first-line",
  "::selection",
  "::placeholder",
  "::marker",
  ":hover",
  ":active",
  ":focus",
  ":visited",
  ":link",
  ":target",
  ":first-child",
  ":last-child",
  ":nth-child(n)",
  ":nth-of-type(n)",
  ":not(selector)",
  ":checked"
];

// client/widgets/_ghost/WidgetProps.ts
var registerEvent = function(widget, event, callback) {
  event = getEventName(event);
  if (event == "hold") {
    return onHold(widget, callback, widget.options.holdDuration);
  }
  if (event == "textinput") {
    return onTextInput(widget, callback);
  }
  widget.__events__.push({ event, callback });
  findEl(widget.id).on(event, (e, args) => {
    if (widget.is("disabled"))
      return;
    if (event == "click" && widget.is("held"))
      return;
    var data = createEventData(e, event, widget);
    return callback.call(widget, data, args);
  });
};
var mounted = function(parent, child) {
  if (typeof child._onMount == "function")
    child._onMount(parent);
  child?.emit("mount", { parent });
};

class WidgetProps2 {
  tree = [];
  _id = null;
  id = null;
  accepts = true;
  private = false;
  sealed = false;
  options = {};
  __generated = false;
  _onBuild;
  store = new Store_default({});
  __events__ = [];
  set style(style) {
    const _setCss = (style2) => {
      if (!findEl(this.id).at(0).GUISTYLE)
        findEl(this.id).at(0).GUISTYLE = style2;
      else
        findEl(this.id).at(0).GUISTYLE = { ...findEl(this.id).at(0).GUISTYLE, ...style2 };
      findEl(this.id).css(style2);
    };
    if (style instanceof Style_default) {
      findEl(this.id).at(0).WIDGET_STYLE = style;
      _setCss(style.all);
      style.on("update", () => {
        _setCss(style.all);
      });
    } else {
      if (style)
        _setCss(style);
    }
  }
  get style() {
    return findEl(this.id).at(0).WIDGET_STYLE || findEl(this.id).at(0).GUISTYLE || findEl(this.id).at(0).style;
  }
  set padding(value) {
    findEl(this.id).css({ padding: value });
  }
  set margin(value) {
    findEl(this.id).css({ margin: value });
  }
  set name(value) {
    findEl(this.id).attr({ name: value });
  }
  setOptions(options) {
  }
  _optionChange(options) {
  }
  addHTMLElement(child, subchild) {
    let hadGUI = child.GUIWIDGET;
    const elt = this.add(hadGUI ? child.GUIWIDGET : Widget_default.from(child), subchild);
    if (!hadGUI)
      elt.stripElement();
    return elt;
  }
  addWidget(child, subchild) {
    if (this.accepts === false)
      return this;
    if (this.sealed === true)
      return this;
    if (isWidget(child)) {
      const l = resolveSubchild(findEl(this.id), subchild);
      if (child.is("prefix")) {
        l.prepend(findEl(child.id));
      } else {
        l.append(findEl(child.id));
      }
      mounted(this, child);
    }
    return this;
  }
  add(child, subchild = null) {
    if (isWidget(child)) {
      this.addWidget(child, subchild);
    } else if (isHTMLElement(child)) {
      this.addHTMLElement(child, subchild);
    } else if (typeof child == "string") {
      findEl(this.id).at(0).append(new window.Text(child));
    } else {
      console.log(child, " was given");
      throw new Error("Only Widgets or HTMLElements Allowed, The given child was logged.");
    }
    return this;
  }
  addBefore(child, subchild = null) {
    child.is("prefix", true);
    this.add(child, subchild);
    child.is("prefix", false);
    return this;
  }
  addAll(...children) {
    let subchild = "";
    let last2 = children[children.length - 1];
    if (typeof last2 == "string") {
      subchild = children.pop();
    }
    children.forEach((child) => this.add(child, subchild));
    return this;
  }
  addWrappedElement(elt, elementText, where, subchild = null) {
    const el = resolveSubchild(findEl(this.id), subchild);
    let [cssClass, element] = elementText.split(" ");
    if (!elt) {
      el.find("." + cssClass).remove();
      return this;
    }
    if (!element)
      element = "div";
    let additionEl;
    if (elt instanceof Widget_default) {
      additionEl = findEl(elt.id);
    } else if (elt instanceof HTMLElement) {
      additionEl = new dom_default(elt);
    } else {
      throw new Error("Unexpected Element: not HTMLElement nor Widget");
    }
    const h = document.createElement(element);
    h.className = cssClass;
    h.append(additionEl.at(0));
    if (where == "before")
      el.prepend(h);
    else
      el.append(h);
    if (isWidget(elt)) {
      mounted(this, elt);
    }
    return this;
  }
  remove(child = null, subchild = null) {
    if (this.sealed === true)
      return this;
    if (!child)
      resolveSubchild(findEl(this.id), subchild).remove();
    else if (child == "*")
      resolveSubchild(findEl(this.id), subchild)?.empty();
    else
      child.remove();
    return this;
  }
  is(state, is2 = null) {
    const stateName = ":" + state;
    if (is2 === true || is2 === false) {
      if (is2 === true)
        findEl(this.id).at(0)[stateName] = true;
      else
        delete findEl(this.id).at(0)[stateName];
      return true;
    }
    if (state == "disabled") {
      return findEl(this.id).hasClass("disabled") && findEl(this.id).is(":disabled");
    } else {
      return htmlPseudos.indexOf(stateName) == -1 ? findEl(this.id).at(0)[stateName] : findEl(this.id).is(stateName);
    }
  }
  children(subchild = null) {
    return WidgetList.from(filteredChildren(resolveSubchild(findEl(this.id), subchild).children()));
  }
  find(q, subchild = null) {
    return q == "*" ? this.children() : filteredChildren(resolveSubchild(findEl(this.id), subchild).find(q), true);
  }
  findAll(q, subchild = null) {
    return q == "*" ? this.children() : filteredChildren(resolveSubchild(findEl(this.id), subchild).find(q));
  }
  closest(q) {
    return filteredChildren(findEl(this.id).closest(q), true, true);
  }
  parent(container = false) {
    let parent = findEl(this.id).parent();
    if (!parent && !this.private)
      return Widget_default.from(document.body);
    if (container)
      return this.container();
    if (!parent.at(0))
      return null;
    while (!parent.at(0).GUIWIDGET) {
      parent = parent.parent();
    }
    if (!parent.at(0).GUIWIDGET)
      return Widget_default.from(parent.at(0));
    return parent.at(0).GUIWIDGET;
  }
  container() {
    let parent = findEl(this.id).parent();
    return Widget_default.from(parent.at(0));
  }
  attr(props) {
    if (this.sealed === true)
      return this;
    if (typeof props == "object")
      findEl(this.id).attr(props);
    return typeof props == "string" ? findEl(this.id).attr(props) : this;
  }
  prop(props) {
    if (this.sealed === true)
      return this;
    if (typeof props == "object")
      findEl(this.id).prop(props);
    return typeof props == "string" ? findEl(this.id).prop(props) : this;
  }
  css(props) {
    if (this.sealed === true)
      return this;
    if (typeof props == "object")
      findEl(this.id).css(props);
    return typeof props == "string" ? findEl(this.id).css(props) : this;
  }
  styleProp(prop) {
    if (typeof prop !== "string")
      return this;
    return findEl(this.id).css(prop);
  }
  text(text) {
    if (this.sealed === true)
      return this;
    findEl(this.id).text(text);
    return text ? this : findEl(this.id).text(text);
  }
  height(h = null) {
    if (this.sealed === true)
      return this;
    findEl(this.id).height(h);
    return h ? this : findEl(this.id).height();
  }
  width(w = null) {
    if (this.sealed === true)
      return this;
    findEl(this.id).width(w);
    return w ? this : findEl(this.id).width();
  }
  html(text = null) {
    if (this.sealed === true)
      return this;
    findEl(this.id).html(text);
    return text ? this : findEl(this.id).html();
  }
  addClass(classes) {
    findEl(this.id).addClass(classes);
    return this;
  }
  hasClass(classes) {
    return findEl(this.id).hasClass(classes);
  }
  removeClass(classes) {
    findEl(this.id).removeClass(classes);
    return this;
  }
  toggleClass(classes) {
    findEl(this.id).toggleClass(classes);
    return this;
  }
  rect() {
    return findEl(this.id).at(0).getBoundingClientRect();
  }
  focus() {
    findEl(this.id).focus();
    return this;
  }
  click() {
    findEl(this.id).click();
    return this;
  }
  toHTMLElement(parent, direction = null) {
    if (this.sealed === true)
      return this;
    return this.toWidget(Widget_default.from(parent), direction);
  }
  toWidget(parent, direction = null) {
    if (this.sealed === true)
      return this;
    if (direction == "before")
      parent.addBefore(this);
    else
      parent.add(this);
    return this;
  }
  to(parent, direction = null) {
    if (isWidget(parent)) {
      this.toWidget(parent, direction);
    } else if (isHTMLElement(parent)) {
      this.toHTMLElement(parent, direction);
    } else {
      throw new Error("Only Widgets or HTMLElements Allowed");
    }
    return this;
  }
  on(event, callback) {
    if (Array.isArray(event)) {
      event.forEach((event2) => registerEvent(this, event2, callback));
    } else {
      registerEvent(this, event, callback);
    }
    return this;
  }
  off(event, callback = null) {
    if (Array.isArray(event)) {
      event.forEach((event2) => findEl(this.id).off(event2, callback));
    } else {
      findEl(this.id).off(event, callback);
    }
    return this;
  }
  emit(event, data) {
    findEl(this.id).trigger(event, data);
    return this;
  }
  hide(time) {
    findEl(this.id).hide(time);
    return this;
  }
  show(time) {
    findEl(this.id).show(time);
    return this;
  }
  toggle(time) {
    findEl(this.id).toggle(time);
    return this;
  }
  disable() {
    findEl(this.id).disable();
    return this;
  }
  enable() {
    findEl(this.id).enable();
    return this;
  }
  raw() {
    if (this.sealed === true)
      return this;
    return this.private ? this : findEl(this.id);
  }
  toString() {
    return findEl(this.id).at(0).outerHTML;
  }
  stripElement() {
    return delete findEl(this.id).at(0).GUIWIDGET;
  }
  toArray() {
    return [this];
  }
  set animation(animation2) {
    animateWidget(this, animation2);
  }
  setAnimation(animation2) {
    this.animation = animation2;
  }
  animate(children, animation2) {
    animateWidgets(this.findAll(children), animation2);
    return this;
  }
  getStore(store = "state") {
    return this.store.getStore(store);
  }
  setStore(props, store = "state") {
    this.store.setStore(props, store);
  }
  _onMount(parent) {
    if (parent instanceof Widget_default) {
      if (this.options.inheritStore) {
        this.store.inherit(parent.store);
      }
    }
  }
  clone(selectedOptions = {}) {
    let options = { cloneChildren: true, cloneEvents: false, ...selectedOptions };
    let el = findEl(this.id);
    let cloned = el.clone(true, true);
    let events2 = {};
    if (options.cloneEvents) {
      this.__events__.forEach((evt) => {
        events2[evt.event] = evt.callback;
      });
    }
    let opts = { ...this.options, children: [], ...options };
    if (!Array.isArray(opts.children))
      opts.children = [];
    let children = options.cloneChildren == "options" ? this.options.children : this.children();
    if (children && options.cloneChildren) {
      opts.children = children.map((item) => item.clone({ cloneChildren: options.cloneChildren, cloneEvents: options.cloneEvents })).concat(opts.children);
    }
    return new (this.constructor || Widget_default)({
      element: { raw: cloned[0] },
      events: events2,
      ...opts,
      private: this.private
    });
  }
  registerProxy(object, callback, set = true) {
    try {
      return new Proxy(object, {
        set: (target, prop, value) => {
          if (set)
            target[prop] = value;
          callback(target, prop, value);
          return true;
        }
      });
    } catch (e) {
      return object;
    }
  }
  proxyCloner(object, object1) {
    return this.registerProxy(object, (target, prop, value) => {
      console.log(object, object1);
      object1[prop] = value;
    }, false);
  }
  set $id(id2) {
    this._id = id2, findEl(this.id).attr({ id: id2 });
  }
}

class WidgetList extends Array {
  constructor() {
    super(...arguments);
  }
  static from(array) {
    return new WidgetList(...array);
  }
  add(child, subchild) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.add(child, subchild));
      }
    });
    return responses;
  }
  to(child, subchild) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.to(child, subchild));
      }
    });
    return responses;
  }
  remove(child, subchild) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.remove(child, subchild));
      }
    });
    return responses;
  }
  is(state, is2) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.is(state, is2));
      }
    });
    return responses;
  }
  attr(props) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.attr(props));
      }
    });
    return responses;
  }
  disable() {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.disable());
      }
    });
    return responses;
  }
  enable() {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.enable());
      }
    });
    return responses;
  }
  prop(props) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.prop(props));
      }
    });
    return responses;
  }
  addClass(classes) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.addClass(classes));
      }
    });
    return responses;
  }
  hasClass(classes) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.hasClass(classes));
      }
    });
    return responses;
  }
  removeClass(classes) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.removeClass(classes));
      }
    });
    return responses;
  }
  toggleClass(classes) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.toggleClass(classes));
      }
    });
    return responses;
  }
  text(text) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.text(text));
      }
    });
    return responses;
  }
  height(h) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.height(h));
      }
    });
    return responses;
  }
  width(w) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.width(w));
      }
    });
    return responses;
  }
  on(event, callback) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.on(event, callback));
      }
    });
    return responses;
  }
  off(event, callback) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.off(event, callback));
      }
    });
    return responses;
  }
  emit(event, data) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.emit(event, data));
      }
    });
    return responses;
  }
  hide(time = null) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.hide(time));
      }
    });
    return responses;
  }
  show(time = null) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.show(time));
      }
    });
    return responses;
  }
  toggle(time = null) {
    let responses = new WidgetList;
    this.forEach((widget) => {
      if (isWidget(widget)) {
        responses.push(widget.toggle(time));
      }
    });
    return responses;
  }
  animate(animation2) {
    let widgets = this.filter((widget) => isWidget(widget));
    animateWidgets(widgets, animation2);
    return this;
  }
}
var WidgetProps_default = WidgetProps2;

// client/utils/widgetmodel.ts
var determineType = function(thing) {
  return thing instanceof Widget_default ? "widget" : typeof thing;
};
var getSelectorContent = function(selector) {
  const parts = selector.split(".");
  let element = parts[0];
  const classes = parts.slice(1).join(" ").trim();
  let id2 = null;
  if (element.match("#")) {
    id2 = element.split("#")[1];
    element = element.split("#")[0];
  }
  return { element, classes, id: id2 };
};
var modelToWidget = function(model) {
  if (model instanceof Widget_default)
    return model;
  if (typeof model == "string")
    model = { selector: model };
  let el = getSelectorContent(model.selector);
  const config = {
    ...model.options,
    element: { name: el.element },
    class: el.classes,
    attr: model.attributes,
    children: model.children ? model.children.map(modelToWidget) : [],
    model
  };
  if (el.id)
    config.id = el.id;
  let widget = new Widget_default(config);
  if (model.text)
    widget.text(model.text);
  if (model.html)
    widget.html(model.html);
  if (model.child)
    widget.add(modelToWidget(model.child));
  return widget;
};
var determineValue = function(valueRaw, widget, option) {
  let value = { type: typeof valueRaw, value: valueRaw, option, widget };
  return value;
};
var resolveValue = function(valueRaw, value) {
  let _value = { type: typeof valueRaw, value: valueRaw };
  if (typeof valueRaw == "string" && valueRaw.match(/\$\(/)) {
    _value.value = valueRaw.replace(/\$\(([\w]+)\)/g, value.type == "list" ? (a, name) => value.value[name] : value.value);
    _value.type = "string";
  } else if (typeof valueRaw == "string" && valueRaw.startsWith("$")) {
    _value.value = value.type == "list" ? value.value[valueRaw.split("$")[1]] : value.value;
    _value.type = typeof value;
  }
  if (_value.value instanceof Widget_default) {
    return _value;
  }
  if (typeof _value.value == "function") {
    let v = _value.value(value.widget, value.option);
    return resolveValue(v, value);
  }
  if (typeof _value.value == "object" && typeof _value.value.selector == "string") {
    if (_value.value.attributes)
      for (let i in _value.value.attributes)
        _value.value.attributes[i] = resolveValue(_value.value.attributes[i], value).value;
    for (let i in _value.value)
      _value.value[i] = resolveValue(_value.value[i], value).value;
    _value.value = modelToWidget(_value.value);
  }
  return _value;
};
var actionCase = function(actions, widget, value) {
  for (let action in actions) {
    let act = typeof actions[action] == "object" ? Array.isArray(actions[action]) ? [...actions[action]] : { ...actions[action] } : actions[action];
    let actionValue = resolveValue(act, value);
    if (action == "empty" && actionValue.value == true) {
      widget.remove("*");
    } else if (action == "append") {
      widget.add(actionValue.value);
    } else if (action == "prepend") {
      widget.addBefore(actionValue.value);
    } else if (action == "text") {
      widget.text(actionValue.value);
    } else {
      let w = widget;
      let args = typeof actionValue.value == "object" && actionValue.value.arguments ? actionValue.value.arguments : [actionValue.value];
      if (typeof actionValue.value == "object" && actionValue.value.resolve) {
        for (let i in actionValue.value) {
          actionValue.value[i] = resolveValue(actionValue.value[i], value).value;
        }
      }
      if (typeof actionValue.value == "function" && action.startsWith("on")) {
        w.on(action.split("on")[1].toLowerCase(), function(e, ...data) {
          actionValue.value(w, e, ...data);
        });
      } else if (typeof w[action] == "function")
        w[action](...args);
      else if (action in w) {
        w[action] = actionValue.value;
      }
    }
  }
};
var selectorCase = function(selectors, widget, value, option) {
  for (let i in selectors) {
    let item = i == "this" ? widget : widget.find(i);
    if (item) {
      let v = value;
      actionCase(selectors[i], item, v);
    }
  }
};
var typeCase = function(widget, option, valueRaw) {
  let value = determineValue(valueRaw, widget, option);
  let type4 = determineType(value.value);
  if ("any" in option)
    selectorCase(option.any, widget, value, option);
  if (type4 in option)
    selectorCase(option[type4], widget, value, option);
  else if ("else" in option)
    selectorCase(option.else, widget, value, option);
};
function createWidgetModel(model, _options, widget = Widget_default) {
  const classGenerated = class extends widget {
    options = {};
    constructor(options3 = _options) {
      let wo = {};
      if (model.widgetOptions) {
        for (let i in model.widgetOptions)
          wo[i] = resolveValue(model.widgetOptions[i], { type: "list", value: options3 }).value;
      }
      const config = mergeOptions({
        ...wo,
        element: { name: getSelectorContent(model.selector).element },
        class: getSelectorContent(model.selector).classes,
        children: model.children ? model.children.map(modelToWidget) : [],
        _setters: Object.keys(options3)
      }, options3);
      if (getSelectorContent(model.selector).id)
        config.id = getSelectorContent(model.selector).id;
      super(config);
    }
  };
  if (typeof model._onMount == "function")
    classGenerated.prototype._onMount = model._onMount;
  if (typeof model._optionChange == "function")
    classGenerated.prototype._optionChange = model._optionChange;
  function generateClassOptions(model2) {
    for (var i in model2.options) {
      let option = model2.options[i];
      classGenerated.prototype.__defineSetter__(i, function(value) {
        let that = this;
        if (option.type == "array") {
          let items = value;
          for (let i2 in option) {
            if (typeof items[i2] == "function") {
              items[i2](function(item) {
                typeCase(that, option[i2], item);
              });
            }
          }
        } else {
          typeCase(that, option, value);
        }
      });
    }
  }
  generateClassOptions(model);
  return classGenerated;
}

// client/widgets/main/Widget.ts
var initiateSetters = function(widget2, setterFunctions, options5) {
  setterFunctions.forEach((setterFull) => {
    let setter = setterFull, name = setterFull;
    if (setterFull.match(":")) {
      [setter, name] = setterFull.split(":");
    }
    if (options5[setter]) {
      widget2[name] = options5[setter];
    }
  });
};
var _init = function(widget2, options5) {
  let elementRaw;
  if (!widget2.__generated) {
    if (options5.element.raw || options5.element.selector) {
      elementRaw = new dom_default(options5.element.raw).at(0);
    } else {
      elementRaw = document.createElement(options5.element.name);
    }
  }
  const element = widget2.__generated ? findEl(widget2.id) : new dom_default(elementRaw);
  if (!widget2.__generated && options5.element.html)
    element.html(options5.element.html);
  if (widget2.__generated && options5.reset)
    element.attr({ class: "", style: "" });
  element.addClass(options5.class);
  if (options5.position) {
    let { type: type5, centered, top, left, right, bottom } = options5.position;
    element.css({
      position: isPosition(type5) ? type5 : null
    });
    if (centered) {
      element.css({
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      });
    } else {
      element.css({
        top,
        left,
        right,
        bottom
      });
    }
  }
  if (options5.size) {
    const {
      width,
      height
    } = options5.size;
    element.css({
      width,
      height
    });
  }
  if (!widget2.__generated) {
    Object.defineProperty(widget2, "id", {
      writable: false,
      value: id_default()
    });
    element.at(0).GUIWIDGET = widget2;
    registerElement(element, widget2.id);
    widget2.store.addEventListener("change", () => {
      widget2.emit("state:change", widget2.store);
    });
  }
  if (options5.store instanceof Store_default)
    widget2.store = options5.store;
  if (typeof options5.build == "function") {
    if (!options5.children)
      options5.children = [];
    let child2 = options5.build(options5, widget2);
    if (Array.isArray(child2)) {
      options5.children.push(child2);
    } else {
      options5.children.push(child2);
    }
  }
  if (options5.children && options5.children.length) {
    options5.children.forEach((element2) => {
      if (element2 == null)
        return;
      if (element2 instanceof window.Text)
        element2 = element2.textContent;
      widget2.add(element2);
    });
  }
  if (options5.private === true) {
    delete options5.private;
  }
  if (options5.accepts === false) {
    widget2.accepts = false;
  } else if (options5.accepts === true) {
    widget2.accepts = true;
  }
  for (var i in options5) {
    if (i.match(/on([A-Z])([a-zA-Z]+)/)) {
      if (!options5.events)
        options5.events = {};
      options5.events[i.replace("on", "").toLowerCase()] = options5[i];
    }
  }
  if (options5.events) {
    for (var i in options5.events) {
      widget2.on(i, options5.events[i]);
    }
  }
  if (options5.props) {
    element.prop(options5.props);
  }
  if (options5.attr) {
    element.attr(options5.attr);
  }
  widget2.options = widget2.registerProxy(options5, () => {
    widget2.setOptions({});
  });
  let setters = [...setterFunctions];
  if (options5._setters) {
    setters.push(...options5._setters);
  }
  initiateSetters(widget2, setters, options5);
  if (!widget2.__generated)
    widget2.__generated = true;
  if (typeof widget2._onBuild == "function") {
    let w = widget2._onBuild();
    if (w) {
      widget2.add(w);
    }
  }
};
var defaults = getDefaults({});
var setterFunctions = [
  "padding",
  "margin",
  "name",
  "id:$id",
  "animation",
  "tooltip",
  "style"
];

class Widget7 extends WidgetProps_default {
  component;
  options = {};
  constructor(options5) {
    super();
    if (typeof options5 !== "object")
      options5 = { element: { name: "div" }, class: "widget" };
    _init(this, { ...getDefaults({}), ...options5 });
  }
  setOptions(options5) {
    const currentOptions = { ...this.options, ...options5 };
    _init(this, currentOptions);
    this._optionChange(currentOptions);
  }
  static from(child2) {
    return new Widget7({ element: { raw: new dom_default(child2).at(0) } });
  }
  static model(model, options5 = {}) {
    return createWidgetModel(model, options5, this);
  }
  static animateWidgets(animation2, ...widgets) {
    return WidgetList.from(widgets).animate(animation2);
  }
  static new(options5) {
    return new this(options5);
  }
}
var Widget_default = Widget7;

// client/data/Controller.ts
class Controller {
  value;
  type;
  taken = [];
  changeListeners = [];
  constructor(val) {
    this.value = val;
    this.type = typeof val;
  }
  take(taker) {
    this.taken.push(taker);
  }
  isTakenBy(taker) {
    return this.taken.indexOf(taker) > -1;
  }
  set(newValue, doNoyNotify = false) {
    this.value = newValue;
    if (doNoyNotify !== true)
      this.notifyChangeListeners(typeof doNoyNotify == "function" ? doNoyNotify : false);
  }
  get() {
    return this.value;
  }
  onChange(callback) {
    this.changeListeners.push(callback);
  }
  notifyChangeListeners(notify = false) {
    let ignoreIndex = typeof notify == "function" ? this.changeListeners.indexOf(notify) : -1;
    this.changeListeners.forEach((callback, index) => {
      if (index == ignoreIndex)
        return;
      callback(this.value);
    });
  }
}

class ArrayController extends Controller {
  constructor() {
    super(...arguments);
  }
  push(item) {
    this.value.push(item);
    this.notifyChangeListeners();
    return this;
  }
  unshift(item) {
    this.value.unshift(item);
    this.notifyChangeListeners();
    return this;
  }
  pop() {
    let popped = this.value.pop();
    this.notifyChangeListeners();
    return popped;
  }
  shift() {
    let popped = this.value.shift();
    this.notifyChangeListeners();
    return popped;
  }
  forEach(callback) {
    this.value.forEach(callback);
    return this;
  }
  setArray(array) {
    this.set(array);
    return this;
  }
}
var Controller_default = Controller;

// client/widgets/list/ListBuilder.ts
class ListBuilder extends Widget_default {
  state = new Store_default({ items: [] });
  constructor(selectedOptions, _initList) {
    const options5 = { ...selectedOptions };
    super(options5);
    this.updateList(options5);
    _initList(this, this.getStore());
    this.on("state:change", (e) => {
      _initList(this, this.getStore());
    });
  }
  _fromTemplate(item, index) {
    if (!index)
      index = this.getStore()[this.options.itemsStateName].length || 0;
    let widget2 = this.options.template.call(this, item, index);
    if (!(widget2 instanceof Widget_default))
      throw new Error("ListBuilder requires for a widget as a template");
    return widget2;
  }
  updateList(newOptions) {
    if (Array.isArray(newOptions)) {
      newOptions = { items: newOptions };
    }
    const options5 = { ...this.options, ...newOptions };
    if (options5.items) {
      const doItems = () => {
        if (options5.items instanceof Controller_default) {
          if (!options5.items.isTakenBy(this)) {
            this.setStore({ [options5.itemsStateName]: options5.items.get() });
            options5.items.take(this);
            options5.items.onChange(() => {
              this.setStore({ [options5.itemsStateName]: options5.items.get() });
            });
          }
        } else {
          this.setStore({ [options5.itemsStateName]: options5.items });
        }
      };
      if (options5.items instanceof Promise) {
        options5.items.then((items) => {
          options5.items = items;
          doItems();
        });
      } else {
        doItems();
      }
    }
    if (options5.loader) {
      super.add(options5.loader);
    }
    if (options5.loading) {
      options5.loader?.show();
    } else {
      options5.loader?.hide();
    }
    if (typeof this._onUpdate == "function") {
      this._onUpdate(options5);
    }
    return this;
  }
  _onUpdate(any) {
  }
  addItem(...items) {
    this.setStore({ items: [...items].concat(this.getStore()[this.options.itemsStateName]) });
    return this;
  }
  removeItems(...itemsToRemove) {
    const currentItems = this.getStore()[this.options.itemsStateName];
    const remain = currentItems.filter((item, index) => {
      let shouldRemove = false;
      itemsToRemove.forEach((it) => {
        if (index == it.index) {
          shouldRemove = true;
          return;
        }
        const allPropertiesMatch = Object.keys(it).every((prop) => item[prop] === it[prop]);
        if (allPropertiesMatch) {
          shouldRemove = true;
          return;
        }
      });
      return !shouldRemove;
    });
    this.setStore({ items: remain });
    return this;
  }
  onItems(event, handler, subchild) {
    this.children(subchild).forEach((child2, index) => {
      child2.on(event, (e) => {
        handler(e, { child: child2, index });
      });
    });
    return this;
  }
  empty() {
    findEl(this.id).empty();
    return this;
  }
}
var ListBuilder_default = ListBuilder;

// client/widgets/entry/InputWrapper.ts
class EntryController extends Controller_default {
  constructor(val) {
    super(val);
  }
}

class InputWrapper extends Widget_default {
  __controller;
  constructor(selectedOptions) {
    const options5 = { ...{ element: { name: selectedOptions.inputType == "textarea" ? "textarea" : "input" }, attr: { type: "text" }, class: "input-wrapper", _setters: ["inputType", "title"] }, ...selectedOptions };
    super(options5);
    if (options5.controller) {
      this.setController(options5.controller);
    }
    if (options5.required) {
      findEl(this.id).attr({ required: true });
    }
  }
  setController(controller) {
    if (this.__controller)
      throw new Error("Input already is married to a controller.");
    if (controller instanceof EntryController) {
      const change = (v) => this.val() !== v ? this.val(v) : [];
      this.on("textinput", () => {
        controller.set(this.val(), change);
      });
      controller.onChange(change);
      this.__controller = controller;
      this.val(controller.get());
    }
  }
  val(value = null) {
    if (value)
      findEl(this.id).at(0).value = value;
    return findEl(this.id).at(0).value;
  }
  set inputType(type5) {
    if (type5 instanceof Controller_default)
      type5.onChange((change) => {
        this.inputType = change;
      });
    findEl(this.id).attr({ type: type5 instanceof Controller_default ? type5.get() : type5.toString() });
  }
  set title(text) {
    if (text instanceof Controller_default)
      text.onChange((change) => {
        this.title = change;
      });
    findEl(this.id).attr({ placeholder: text instanceof Controller_default ? text.get() : text.toString() });
  }
  static textArea(selectedOptions) {
    return new InputWrapper({ ...selectedOptions, element: { name: "textarea" } });
  }
}
var InputWrapper_default = InputWrapper;
// client/widgets/entry/SelectBox.ts
class SelectController extends Controller_default {
  constructor(val) {
    super(val);
  }
}

class SelectableOption extends Widget_default {
  constructor(options5) {
    super({
      element: { name: "option" },
      class: "",
      _setters: ["value", "title", "selected", "disabled"],
      ...options5
    });
  }
  set selected(value) {
    findEl(this.id).attr({ selected: value });
  }
  set disabled(value) {
    findEl(this.id).attr({ disabled: value });
  }
  set value(value) {
    findEl(this.id).attr({ value });
  }
  get value() {
    return this.options.value;
  }
  set title(title) {
    this.remove("*");
    if (title instanceof Widget_default) {
      this.add(title);
    } else {
      title != null && this.text(title.toString());
    }
  }
}

class Selectbox extends Widget_default {
  __controller;
  constructor(selectedOptions) {
    const options5 = { ...{ element: { name: "select" }, class: "selectbox-wrapper", _setters: ["selectableOptions", "multiple"] }, ...selectedOptions };
    super(options5);
    if (options5.controller) {
      this.setController(options5.controller);
    }
  }
  setController(controller) {
    if (this.__controller)
      throw new Error("Input already is married to a controller.");
    if (controller instanceof SelectController) {
      const change = (v) => this.val() !== v ? this.val(v) : [];
      this.on("change", () => {
        controller.set(this.val(), change);
      });
      controller.onChange(change);
      this.__controller = controller;
      this.val(controller.get());
    }
  }
  set multiple(value) {
    findEl(this.id).attr({ multiple: value });
  }
  set selectableOptions(options5) {
    this.remove("*");
    let widgetedOptions = options5.map((item) => {
      if (item instanceof SelectableOption) {
        return item;
      } else {
        return new SelectableOption(item);
      }
    });
    this.addAll(...widgetedOptions);
  }
  val(value = null) {
    if (value && typeof value == "object")
      value = value.value;
    if (value)
      findEl(this.id).at(0).value = value;
    return findEl(this.id).at(0).value;
  }
}
// client/widgets/buttons/Checkbox.ts
var defaults2 = getDefaults({ element: { name: "input" }, class: "checkbox", attr: { type: "checkbox" } });

class CheckboxController extends Controller_default {
  constructor(val) {
    super(val);
  }
}

class Checkbox extends Widget_default {
  __controller;
  constructor(selectedOptions) {
    const options6 = { ...defaults2, ...selectedOptions };
    super(options6);
    if (options6.controller) {
      this.setController(options6.controller);
    }
    if (options6.checked) {
      this.setChecked(true);
    }
  }
  isChecked() {
    return findEl(this.id).at(0).checked;
  }
  setChecked(checked) {
    findEl(this.id).at(0).checked = checked;
    return this;
  }
  setController(controller) {
    if (this.__controller)
      throw new Error("Checkbox already has a controller.");
    if (controller instanceof CheckboxController) {
      const change = (v) => this.isChecked() !== v ? this.setChecked(v) : [];
      this.on("change", () => {
        controller.set(this.isChecked(), change);
      });
      controller.onChange(change);
      this.__controller = controller;
      this.setChecked(controller.get());
    }
  }
}
var Checkbox_default = Checkbox;
// client/widgets/list/Table.ts
var _initTableColumns = function(table, columns) {
  if (table.options.empty !== false)
    table.find("thead").remove("*");
  let tr2 = new Widget_default({ element: { name: "tr" } });
  columns.forEach((column) => {
    let widget3 = new Widget_default({ element: { name: "th" } });
    if (typeof column == "string") {
      widget3.text(column);
    } else if (column instanceof Widget_default) {
      widget3.add(column);
    }
    tr2.add(widget3);
  });
  table.find("thead").add(tr2);
};
var _initTable = function(table, state) {
  if (state[table.options.itemsStateName] && Array.isArray(state[table.options.itemsStateName])) {
    if (table.options.empty !== false)
      table.find("tbody").remove("*");
    state[table.options.itemsStateName].forEach((item, index) => {
      table.appendItem(item, index);
    });
  }
  const columnsKey = table.options.itemsStateName + "_columns";
  let columns = state[columnsKey];
  function updateColumns(newColumns) {
    table.setStore({ [columnsKey]: newColumns });
    _initTableColumns(table, newColumns);
  }
  if (!columns && table.options.columns) {
    columns = table.options.columns;
    if (columns instanceof TableController || columns instanceof Controller_default) {
      const columnsToWatch = columns instanceof TableController ? columns.columns : columns;
      if (!columnsToWatch.isTakenBy(table)) {
        columnsToWatch.take(table);
        columnsToWatch.onChange(() => updateColumns(columnsToWatch.get()));
        updateColumns(columnsToWatch.get());
      }
    } else {
      updateColumns(columns);
    }
  }
};
var _initTableRow = function(row, options6) {
  if (options6.values) {
    options6.values.forEach((col) => {
      if (!col)
        return;
      if (typeof col == "function")
        col = col(options6.originalItem, options6.values);
      let widget3 = new Widget_default({ element: { name: !(col instanceof Widget_default) && typeof col == "object" && col.type ? col.type : "td" } });
      if (!(col instanceof Widget_default) && col !== null && typeof col == "object" && col.value) {
        col = col.value;
      }
      if (typeof col == "string") {
        widget3.text(col);
      } else if (col instanceof Widget_default) {
        widget3.add(col);
      }
      row.add(widget3);
    });
  }
};

class TableController extends ArrayController {
  columns;
  items = [];
  constructor({
    columns,
    items
  } = { columns: [], items: [] }) {
    super(items);
    this.columns = new ArrayController(columns);
  }
  setColumns(columns) {
    this.columns.set(columns);
    return this;
  }
  addColumn(columns) {
    this.columns.push(columns);
    return this;
  }
  get() {
    return this.transformItems(super.get());
  }
  transformItems(items) {
    return items.map((item) => this.transformItem(item));
  }
  transformItem(item) {
    const transformedItem = this.columns.get().map((column) => item[column] !== undefined ? item[column] : null);
    transformedItem.original = item;
    return transformedItem;
  }
}
var defaultGrid = () => ({
  element: { name: "table" },
  class: "table",
  itemsStateName: "$items_table",
  template: (item) => new TableRow({ values: item, originalItem: item.original }),
  columns: [],
  items: [],
  empty: true
});

class TableRow extends Widget_default {
  constructor(options6) {
    super({
      element: { name: "tr" },
      ...options6
    });
    _initTableRow(this, options6);
  }
  _optionChange(options6) {
    _initTableRow(this, options6);
  }
}

class Table extends ListBuilder_default {
  controller;
  constructor(selectedOptions) {
    let children = [new Widget_default({ element: { name: "thead" } }), new Widget_default({ element: { name: "tbody" } })];
    if (Array.isArray(selectedOptions.children))
      selectedOptions.children.unshift(...children);
    const options6 = { ...defaultGrid(), children, ...selectedOptions };
    if (options6.controller) {
      options6.items = options6.controller;
      options6.columns = options6.controller;
    }
    super(options6, _initTable);
    if (options6.controller)
      this.controller = options6.controller;
  }
  appendItem(item, index) {
    return this.find("tbody").add(this._fromTemplate(item, index));
  }
  onItems(event, handler) {
    return this.onItems(event, handler);
  }
}
// client/widgets/main/Component.ts
var findComponent = function(component) {
  return components.find((c) => c.component == component);
};
function makeComponent(component, props, event = true) {
  let args = Array.isArray(props.args) ? props.args : [];
  if (event)
    component.emit("beforeBuildStart", { component, props });
  const widget3 = component.build(props, ...args);
  if (event)
    component.emit("afterBuild", { component, props });
  if (!(widget3 instanceof Widget_default))
    throw new TypeError("Component.build does not return a widget.");
  component._currentWidget = widget3;
  component._buildProps = props;
  return widget3;
}
function buildComponent(component, props, from = null) {
  let _comp = new component(props);
  _comp._beforeInit();
  if (component.inheritState !== false && from)
    _comp._inheritState(from);
  _comp.emit("beforeInit", { component, props });
  _comp.initState(props);
  _comp.emit("initState", { component, props });
  let widget3 = _comp.make(props);
  _comp.emit("buildStart", { component, props, widget: widget3 });
  widget3.component = _comp;
  _comp.afterBuild({ ...props, page: widget3 });
  _comp.emit("buildEnd", { component, props, widget: widget3 });
  return widget3;
}
var components = [];
var componentEvents;
(function(componentEvents2) {
  componentEvents2["onBeforeInit"] = "beforeInit";
  componentEvents2["onInitState"] = "initState";
  componentEvents2["onBuildStart"] = "buildStart";
  componentEvents2["onBuildEnd"] = "buildEnd";
  componentEvents2["onRebuild"] = "rebuild";
})(componentEvents || (componentEvents = {}));
class Component extends WidgetEventTarget {
  _eventEmitMethod = "raw";
  _currentWidget;
  id;
  _buildProps;
  _data = {};
  static layouts = true;
  static title = null;
  static bodyClass = null;
  static inheritState = true;
  static links = [];
  static scripts = [];
  static updateMode = "reinit";
  styles;
  static beforeBuildStart;
  constructor(props) {
    super();
    components.push({ component: this });
    this._buildProps = props;
    this.id = id_default(12);
  }
  get _beforeInit() {
    return () => {
      for (let i in this) {
        if (this[i] instanceof Ref) {
          this.ref(i, this[i].value);
        }
        if (typeof i == "function" && (i in componentEvents)) {
          this.on(componentEvents[i], this[i]);
        }
      }
    };
  }
  set _beforeInit(value) {
  }
  get _inheritState() {
    return (component) => {
      for (let i in component) {
        if (!(i in Component.prototype)) {
          this[i] = component[i];
        }
      }
      for (let i in component._data) {
        if (i in this._data) {
          this._data[i] = component._data[i];
        } else {
          this.ref(i, component._data[i]);
        }
      }
    };
  }
  set _inheritState(value) {
  }
  initState(props) {
  }
  build(props) {
    return new Widget_default({});
  }
  afterBuild(props) {
  }
  ref(property, value = null) {
    let that = this;
    if (property in Component.prototype)
      return this;
    if (property in this) {
      if (value == null && that[property] instanceof Ref)
        value = that[property];
      delete that[property];
    }
    Object.defineProperty(this, property, {
      get: () => this._data[property],
      set: (newValue) => {
        this._data[property] = newValue;
        this.update();
      }
    });
    this._data[property] = value;
    return this;
  }
  get make() {
    return (props = null) => makeComponent(this, props);
  }
  set make(value) {
  }
  update() {
    if (this._currentWidget) {
      let comp = findComponent(this);
      let rendererElement = false;
      if (comp) {
        if (comp.preventNextUpdate) {
          comp.preventNextUpdate = false;
          return this;
        } else if (comp.preventAllUpdates) {
          return this;
        }
        if (comp.rendererElement && typeof comp.rendererElement == "string" || comp.rendererElement instanceof Widget_default)
          rendererElement = comp.rendererElement;
      }
      let el = rendererElement == false ? this._currentWidget : rendererElement instanceof Widget_default ? rendererElement : this._currentWidget.find(rendererElement) || this._currentWidget;
      let parent = rendererElement ? el : el.parent(true);
      if (rendererElement) {
        el.remove("*");
      } else
        this._currentWidget.remove();
      let oldWidget = this._currentWidget;
      let newWidget = makeComponent(this, this._buildProps.wrap ? this._buildProps.wrap({ page: oldWidget }) : { ...this._buildProps, page: oldWidget }, false);
      let lastWidget = newWidget;
      if (typeof rendererElement == "string" && newWidget.find(rendererElement))
        lastWidget = newWidget.find(rendererElement).children();
      else if (rendererElement)
        newWidget.children();
      if (parent) {
        lastWidget.to(parent);
      }
      this.emit("rebuild", { widget: lastWidget, oldWidget, component: this, props: this._buildProps });
    }
  }
  preventNextUpdate() {
    findComponent(this).preventNextUpdate = true;
  }
  preventAllUpdates(prevent) {
    findComponent(this).preventAllUpdates = prevent;
  }
  rendererWidget(widget3) {
    findComponent(this).rendererElement = widget3;
  }
  getStyle(name) {
    if (this.styles) {
      return this.styles.get(name);
    }
    return null;
  }
  static buildFor(parent, props) {
    return buildComponent(this, props, parent);
  }
}

class Ref {
  value;
  constructor(value = null) {
    if (value != null)
      this.value = value;
  }
}

// client/widgets/main/Text.ts
var defaultText = () => getDefaults({
  element: { name: "div" },
  class: "text-wrapper",
  accepts: false
});

class Text extends Widget_default {
  constructor(selectedOptions, otheroptions = null) {
    const options10 = Text.resolveOptions(selectedOptions, otheroptions, defaultText());
    if (options10.children)
      options10.accepts = true;
    super(options10);
    this.render();
  }
  _optionChange(options10) {
    this.render();
  }
  render() {
    const options10 = this.options;
    let text = options10.text || "";
    const doText = (text2) => {
      if (typeof text2 == "function") {
        text2 = options10.text(this);
      } else if (text2 instanceof Controller_default) {
        text2.onChange((change) => {
          this.options.text = change.toString();
        });
        text2 = text2.get().toString();
      }
      this.text(text2);
      if (options10.children)
        this.addAll(...options10.children);
    };
    if (text instanceof Promise) {
      text.then(doText);
    } else {
      doText(text);
    }
  }
  static resolveOptions(selectedOptions, otheroptions, defaults3) {
    if (typeof selectedOptions == "string" || selectedOptions instanceof Controller_default || selectedOptions instanceof Promise) {
      selectedOptions = { text: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults3, ...selectedOptions };
  }
}
var Text_default = Text;

// client/widgets/list/List.ts
var _initList = function(list, state) {
  if (state[list.options.itemsStateName] && Array.isArray(state[list.options.itemsStateName])) {
    if (list.options.empty !== false)
      list.empty();
    state[list.options.itemsStateName].forEach((item, index) => {
      list.appendItem(item, index);
    });
  }
};
var defaultList = () => getDefaults({
  element: { name: "ul" },
  items: [],
  itemsStateName: "$items_list",
  empty: true,
  template: (item) => new ListItem(item)
});
var defaultListItem = () => getDefaults({
  element: { name: "li" },
  title: new Text_default(""),
  link: false,
  _setters: ["url"]
});

class ListItem extends Widget_default {
  constructor(selectedOptions) {
    const options12 = { ...defaultListItem(), ...selectedOptions };
    const { title, link } = options12;
    if (link === true)
      options12.element.name = "a";
    super(options12);
    if (title instanceof Widget_default)
      this.add(title);
    else if (title != null)
      this.add(new Text_default(title));
  }
  set url(link) {
    findEl(this.id).attr("href", link);
  }
}

class List extends ListBuilder_default {
  constructor(selectedOptions) {
    const options12 = { ...defaultList(), ...selectedOptions };
    super(options12, _initList);
  }
  appendItem(item, index) {
    return this.add(this._fromTemplate(item, index));
  }
  onItems(event, handler) {
    return this.onItems(event, handler);
  }
  empty() {
    findEl(this.id).empty();
    return this;
  }
}
var List_default = List;

// client/widgets/main/Link.ts
var link = function(el, url) {
  if (typeof url == "string") {
    el.attr({ href: url });
  } else {
    if (url.url) {
      el.attr({ href: url.url }).on("click", (e) => {
        e.preventDefault();
        url.click(url.url);
      });
    }
  }
};
var defaultLink = (more = null) => getDefaults({
  element: { name: "a" },
  class: more ? "link " + more : "link",
  accepts: false,
  _setters: ["url", "target"],
  icon: null
});

class Link extends Text_default {
  constructor(selectedOptions, otheroptions = null) {
    const options14 = Text_default.resolveOptions(selectedOptions, otheroptions, { ...defaultLink() });
    super(options14);
  }
  set url(url) {
    if (url instanceof Controller_default)
      url.onChange((change) => {
        this.url = change;
      });
    link(findEl(this.id), url instanceof Controller_default ? url.get() : url);
  }
  set target(target) {
    findEl(this.id).at(0).target = target;
  }
}
var Link_default = Link;

// client/widgets/buttons/Button.ts
var defaultButton = (more, link2) => getDefaults({
  element: { name: link2 ? "a" : "button" },
  class: more ? "button " + more : "button",
  accepts: false
});

class Button extends Link_default {
  constructor(selectedOptions, otheroptions = null) {
    const options15 = Text_default.resolveOptions(selectedOptions, otheroptions, defaultButton(null, otheroptions?.url || selectedOptions?.url));
    super(options15);
  }
}
var Button_default = Button;

// client/widgets/main/Image.ts
var defaultImage = () => getDefaults({
  element: { name: "img" },
  class: "image",
  accepts: false,
  _setters: ["src"]
});

class Image extends Widget_default {
  constructor(selectedOptions, otheroptions = null) {
    const options17 = Image.resolveOptions(selectedOptions, otheroptions, defaultImage());
    super(options17);
    if (options17.width)
      this.width(options17.width);
    if (options17.height)
      this.height(options17.height);
  }
  static resolveOptions(selectedOptions, otheroptions, defaults3) {
    if (typeof selectedOptions == "string" || selectedOptions instanceof Blob) {
      selectedOptions = { src: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults3, ...selectedOptions };
  }
  set src(src) {
    if (this.sealed !== true) {
      if (typeof src != "string") {
        src = URL.createObjectURL(src);
      }
      findEl(this.id).attr({ src });
    }
  }
}
var Image_default = Image;

// client/widgets/canvas/Canvas.ts
class Canvas extends Widget_default {
  constructor(selectedOptions) {
    super({ ...getDefaults({ element: { name: "canvas" }, class: "canas" }), ...selectedOptions });
  }
  getContext(dimensions) {
    return findEl(this.id)[0].getContext(dimensions);
  }
}
var Canvas_default = Canvas;

// client/widgets/layout/LayoutBuilder.ts
var checkQuery = function(w, h, pw, ph, vw, vh, query) {
  const cases = [];
  if (query.match(/\|\||&&/)) {
    cases.push(...query.split(/\|\||&&/).map((c) => ({ case: c, true: false })));
  } else {
    cases.push({ case: query, true: false });
  }
  if (!w || !h || !pw || !ph || !vw || !vh) {
  }
  let overallResult = true;
  cases.forEach((c) => {
    let query2 = c.case.trim();
    let match2 = query2.match(/(w|h|pw|ph|vw|vh)(\s+|)(==|!=|>|<|>=|<=)(\s+|)([0-9]+)/);
    if (match2) {
      overallResult = overallResult && (0, eval)(`var w = ${w}, h = ${h}, pw = ${pw}, ph = ${ph}, vw = ${vw}, vh = ${vh};\n` + query2);
    } else {
      throw new Error(`Invalid LayoutBuilder query: ${query2}`);
    }
  });
  return overallResult;
};
var handleResize = (widget3, options20) => {
  if (widget3.handlingResize)
    return;
  widget3.handlingResize = true;
  const parentWidth = widget3.parent().width();
  const parentHeight = widget3.parent().height();
  widget3.emit("resize", { width: widget3.width(), height: widget3.height(), viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
  if (options20.queries) {
    const prevChildren = Array.from(widget3.children()).map((child2) => findEl(child2.id));
    prevChildren.forEach((child2) => child2.remove());
    const matchedQuery = Object.entries(options20.queries).find(([query, builderFn]) => {
      return checkQuery(widget3.width(), widget3.height(), parentWidth, parentHeight, window.innerWidth, window.innerHeight, query);
    });
    if (matchedQuery) {
      const [query, builderFn] = matchedQuery;
      const newChildren = typeof builderFn == "function" ? builderFn(prevChildren.map((child2) => child2.GUIWIDGET)) : builderFn;
      if (newChildren instanceof Widget_default) {
        widget3.add(newChildren);
      } else if (Array.isArray(newChildren)) {
        newChildren.forEach((child2) => widget3.add(child2));
      }
    }
  }
  widget3.emit("layout:rebuild", { width: widget3.width(), height: widget3.height(), viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
  delete widget3.handlingResize;
};

class LayoutBuilder extends Widget_default {
  constructor(selectedOptions) {
    const options20 = {
      ...getDefaults({ element: { name: "div" }, class: "layout-builder" }),
      ...selectedOptions
    };
    super(options20);
  }
  _onMount(parent) {
    super._onMount(parent);
    window.addEventListener("resize", () => handleResize(this, this.options));
    handleResize(this, this.options);
  }
}
var LayoutBuilder_default = LayoutBuilder;

// client/widgets/buttons/Radio.ts
var defaults3 = getDefaults({ element: { name: "input" }, class: "radio", attr: { type: "radio" } });

class Radio extends Checkbox_default {
  constructor(options21) {
    super({ ...defaults3, ...options21 });
  }
}
var Radio_default = Radio;

// client/widgets/containers/Container.ts
class Container extends Widget_default {
  constructor(selectedOptions) {
    super({ ...getDefaults({ element: { name: "div" }, class: "block" }), ...selectedOptions });
  }
}
var Container_default = Container;

// client/widgets/containers/DirectedContainer.ts
class DirectedWidget extends Widget_default {
  constructor(selectedOptions, type5) {
    const options25 = { ...getDefaults({
      element: { name: "div" },
      style: {
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: type5
      }
    }), ...selectedOptions, _setters: ["gap", "crossAxisAlignment", "mainAxisAlignment", "wrap"] };
    super(options25);
    if (options25.height) {
      this.height(options25.height);
    }
    if (options25.width) {
      this.width(options25.width);
    }
  }
  set crossAxisAlignment(value) {
    findEl(this.id).css({ "align-items": value });
  }
  set mainAxisAlignment(value) {
    findEl(this.id).css({ "justify-content": value });
  }
  set gap(value) {
    findEl(this.id).css({ gap: value });
  }
  set wrap(value) {
    findEl(this.id).css({ "flex-wrap": value === true ? "wrap" : value });
  }
}

class Column extends DirectedWidget {
  constructor(selectedOptions) {
    super(selectedOptions, "column");
  }
}

class Row extends DirectedWidget {
  constructor(selectedOptions) {
    super(selectedOptions, "row");
  }
}

class Center extends DirectedWidget {
  constructor(selectedOptions) {
    super({
      crossAxisAlignment: "center",
      mainAxisAlignment: "center",
      ...selectedOptions
    }, "center");
  }
}

// client/widgets/main/Span.ts
class Span extends Widget_default {
  constructor(selectedOptions) {
    super({ ...getDefaults({ element: { name: "span" }, class: "" }), ...selectedOptions });
  }
}
var Span_default = Span;

// client/widgets/media/Video.ts
var defaultVideo = () => getDefaults({
  element: { name: "video" },
  class: "video",
  accepts: false,
  _setters: ["src", "controls", "autoplay"]
});

class Video extends Widget_default {
  constructor(selectedOptions, otheroptions = null) {
    const options29 = Video.resolveOptions(selectedOptions, otheroptions, defaultVideo());
    super(options29);
    if (options29.width)
      this.width(options29.width);
    if (options29.height)
      this.height(options29.height);
  }
  static resolveOptions(selectedOptions, otheroptions, defaults4) {
    if (typeof selectedOptions === "string") {
      selectedOptions = { src: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults4, ...selectedOptions };
  }
  set src(src) {
    if (this.sealed !== true)
      findEl(this.id).attr({ src });
  }
  set controls(controls) {
    if (this.sealed !== true)
      findEl(this.id).attr({ controls });
  }
  set autoplay(autoplay) {
    if (this.sealed !== true)
      findEl(this.id).attr({ autoplay });
  }
  play() {
    findEl(this.id).at(0).play();
    return this;
  }
  pause() {
    findEl(this.id).at(0).pause();
    return this;
  }
  get paused() {
    return findEl(this.id).at(0).paused;
  }
  get duration() {
    return findEl(this.id).at(0).duration;
  }
  get currentTime() {
    return findEl(this.id).at(0).currentTime;
  }
}
var Video_default = Video;

// client/widgets/media/Audio.ts
var defaultAudio = () => getDefaults({
  element: { name: "audio" },
  class: "audio",
  accepts: false,
  _setters: ["src", "controls", "autoplay"]
});

class Audio extends Widget_default {
  constructor(selectedOptions, otheroptions = null) {
    const options31 = Audio.resolveOptions(selectedOptions, otheroptions, defaultAudio());
    super(options31);
  }
  static resolveOptions(selectedOptions, otheroptions, defaults4) {
    if (typeof selectedOptions === "string") {
      selectedOptions = { src: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults4, ...selectedOptions };
  }
  set src(src) {
    if (this.sealed !== true)
      findEl(this.id).attr({ src });
  }
  set controls(controls) {
    if (this.sealed !== true)
      findEl(this.id).attr({ controls });
  }
  set autoplay(autoplay) {
    if (this.sealed !== true)
      findEl(this.id).attr({ autoplay });
  }
  play() {
    findEl(this.id).at(0).play();
    return this;
  }
  pause() {
    findEl(this.id).at(0).pause();
    return this;
  }
  get paused() {
    return findEl(this.id).at(0).paused;
  }
  get duration() {
    return findEl(this.id).at(0).duration;
  }
  get currentTime() {
    return findEl(this.id).at(0).currentTime;
  }
}
var Audio_default = Audio;

// client/widgets/containers/Grid.ts
var import_macy = __toESM(require_macy(), 1);
var _initGrid = function(list, state) {
  if (state[list.options.itemsStateName] && Array.isArray(state[list.options.itemsStateName])) {
    if (list.options.empty !== false)
      list.empty();
    state[list.options.itemsStateName].forEach((item, index) => {
      list.appendItem(item, index);
    });
    findEl(list.id + "-grid")?.reInit();
  }
};
var defaultGrid2 = () => getDefaults({
  element: { name: "div", html: `<div class="grid-wrapper"></div>` },
  class: "macy",
  itemsStateName: "$items_grid",
  template: () => new Widget_default,
  items: [],
  empty: true,
  grid: {
    trueOrder: false,
    waitForImages: false,
    useOwnImageLoader: false,
    mobileFirst: true,
    columns: 2,
    margin: {
      y: 16,
      x: "1%"
    }
  }
});

class Grid extends ListBuilder_default {
  constructor(selectedOptions) {
    const options33 = { ...defaultGrid2(), ...selectedOptions };
    super(options33, _initGrid);
    if (options33.grid) {
      let macy = import_macy.default({
        container: findEl(this.id).at(0),
        ...options33.grid
      });
      registerElement(macy, this.id + "-grid");
    }
    if (options33.gridClass)
      findEl(this.id).addClass(options33.gridClass);
  }
  gridClass(gridClass, gridReplacer) {
    let r = (gridReplacer ? gridReplacer + "-" : "") + "grid-cols-([0-9]+)";
    if (gridClass) {
      findEl(this.id).attr({
        class: findEl(this.id).attr("class").replace(new RegExp(r, "g"), "") + " " + gridClass
      });
    }
    return !gridClass ? findEl(this.id).attr("class").match(new RegExp(r))?.[1] : this;
  }
  _onUpdate(options33) {
    if (options33.grid && findEl(this.id + "-grid")) {
      findEl(this.id + "-grid").reInit();
    }
  }
  appendItem(item, index) {
    return this.add(this._fromTemplate(item, index));
  }
  onItems(event, handler) {
    return this.onItems(event, handler);
  }
  empty() {
    findEl(this.id).empty();
    return this;
  }
}
var Grid_default = Grid;
export {
  Widget_default as Widget,
  Video_default as Video,
  Text_default as Text,
  TableRow,
  Table,
  Span_default as Span,
  Selectbox,
  SelectableOption,
  Row,
  Radio_default as Radio,
  ListItem,
  List_default as List,
  Link_default as Link,
  LayoutBuilder_default as LayoutBuilder,
  InputWrapper_default as InputWrapper,
  Image_default as Image,
  Grid_default as Grid,
  Container_default as Container,
  Component,
  Column,
  Checkbox_default as Checkbox,
  Center,
  Canvas_default as Canvas,
  Button_default as Button,
  Audio_default as Audio
};
