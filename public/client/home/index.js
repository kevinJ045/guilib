(function(){var __create = Object.create;
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

// client/components/Macy.js
var require_Macy = __commonJS((exports, module) => {
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
var elementTypes = function(type1, types, id) {
  if (!typedElements.includes(type1))
    type1 = null;
  types.forEach((type) => {
    let el = findEl(id);
    if (specificTypes.includes(type)) {
      type1 = findEl(id).GUIWIDGET.options.class;
    }
    let t = (type1 ? type1 + "-" : "") + type;
    el.classList.toggle(t);
  });
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
    element.setAttribute(i, attr[i].toString());
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
function mergeOptions(defaults, options) {
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
  for (var i in rules) {
    if (i.startsWith("var_")) {
      rules[i.replace("var_", "--")] = rules[i];
      delete rules[i];
    } else if (allowedCssProperties.indexOf(voca_default.kebabCase(i)) < 0 && allowedCssProperties.indexOf(i) < 0)
      delete rules[i];
  }
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
var allowedCssProperties = "width|height|gap|margin|margin-top|margin-right|margin-bottom|margin-left|padding|padding-top|padding-right|padding-bottom|padding-left|border|border-top|border-right|border-bottom|border-left|border-width|border-top-width|border-right-width|border-bottom-width|border-left-width|border-style|border-top-style|border-right-style|border-bottom-style|border-left-style|border-color|border-top-color|border-right-color|border-bottom-color|border-left-color|border-radius|border-top-left-radius|border-top-right-radius|border-bottom-left-radius|border-bottom-right-radius|box-shadow|overflow|overflow-x|overflow-y|visibility|display|position|top|right|bottom|left|float|clear|flex|flex-direction|flex-wrap|justify-content|align-items|align-content|flex-grow|flex-shrink|flex-basis|order|font-family|font-size|font-weight|font-style|text-align|text-transform|text-decoration|line-height|letter-spacing|white-space|background|background-color|background-image|background-repeat|background-position|background-size|color|cursor|z-index|opacity|content|transition|animation|transform|user-select".split("|");
var allowedCssVariables = {
  themeColor: "--f7-theme-color"
};
for (i in allowedCssVariables) {
  allowedCssProperties.push(voca_default.kebabCase(i));
}
var i;
var css = {};
var variables = {
  theme_color: "var(--f7-theme-color)",
  theme_base: "var(--base-color)",
  theme_crust: "var(--base-crust)",
  theme_mantle: "var(--base-mantle)",
  color_red: "var(--f7-color-red)",
  color_blue: "var(--f7-color-blue)",
  color_green: "var(--f7-color-green)",
  color_secondary: "var(--f7-color-secondary)"
};

class Style {
  name = "";
  constructor(name, map = null) {
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
      this[i] = all[i];
    }
  }
  set(all) {
    all = trimRules(all);
    this.all = all;
  }
  set width(value) {
    setCss2(this.name, {
      width: value
    });
  }
  get width() {
    return getCss(this.name, "width");
  }
  setWidth(value) {
    this.width = value;
    return this;
  }
  set height(value) {
    setCss2(this.name, {
      height: value
    });
  }
  get height() {
    return getCss(this.name, "height");
  }
  setHeight(value) {
    this.height = value;
    return this;
  }
  set margin(value) {
    setCss2(this.name, {
      margin: value
    });
  }
  get margin() {
    return getCss(this.name, "margin");
  }
  setMargin(value) {
    this.margin = value;
    return this;
  }
  set marginTop(value) {
    setCss2(this.name, {
      marginTop: value
    });
  }
  get marginTop() {
    return getCss(this.name, "marginTop");
  }
  setMarginTop(value) {
    this.marginTop = value;
    return this;
  }
  set marginRight(value) {
    setCss2(this.name, {
      marginRight: value
    });
  }
  get marginRight() {
    return getCss(this.name, "marginRight");
  }
  setMarginRight(value) {
    this.marginRight = value;
    return this;
  }
  set marginBottom(value) {
    setCss2(this.name, {
      marginBottom: value
    });
  }
  get marginBottom() {
    return getCss(this.name, "marginBottom");
  }
  setMarginBottom(value) {
    this.marginBottom = value;
    return this;
  }
  set marginLeft(value) {
    setCss2(this.name, {
      marginLeft: value
    });
  }
  get marginLeft() {
    return getCss(this.name, "marginLeft");
  }
  setMarginLeft(value) {
    this.marginLeft = value;
    return this;
  }
  set padding(value) {
    setCss2(this.name, {
      padding: value
    });
  }
  get padding() {
    return getCss(this.name, "padding");
  }
  setPadding(value) {
    this.padding = value;
    return this;
  }
  set paddingTop(value) {
    setCss2(this.name, {
      paddingTop: value
    });
  }
  get paddingTop() {
    return getCss(this.name, "paddingTop");
  }
  setPaddingTop(value) {
    this.paddingTop = value;
    return this;
  }
  set paddingRight(value) {
    setCss2(this.name, {
      paddingRight: value
    });
  }
  get paddingRight() {
    return getCss(this.name, "paddingRight");
  }
  setPaddingRight(value) {
    this.paddingRight = value;
    return this;
  }
  set paddingBottom(value) {
    setCss2(this.name, {
      paddingBottom: value
    });
  }
  get paddingBottom() {
    return getCss(this.name, "paddingBottom");
  }
  setPaddingBottom(value) {
    this.paddingBottom = value;
    return this;
  }
  set paddingLeft(value) {
    setCss2(this.name, {
      paddingLeft: value
    });
  }
  get paddingLeft() {
    return getCss(this.name, "paddingLeft");
  }
  setPaddingLeft(value) {
    this.paddingLeft = value;
    return this;
  }
  set border(value) {
    setCss2(this.name, {
      border: value
    });
  }
  get border() {
    return getCss(this.name, "border");
  }
  setBorder(value) {
    this.border = value;
    return this;
  }
  set borderTop(value) {
    setCss2(this.name, {
      borderTop: value
    });
  }
  get borderTop() {
    return getCss(this.name, "borderTop");
  }
  setBorderTop(value) {
    this.borderTop = value;
    return this;
  }
  set borderRight(value) {
    setCss2(this.name, {
      borderRight: value
    });
  }
  get borderRight() {
    return getCss(this.name, "borderRight");
  }
  setBorderRight(value) {
    this.borderRight = value;
    return this;
  }
  set borderBottom(value) {
    setCss2(this.name, {
      borderBottom: value
    });
  }
  get borderBottom() {
    return getCss(this.name, "borderBottom");
  }
  setBorderBottom(value) {
    this.borderBottom = value;
    return this;
  }
  set borderLeft(value) {
    setCss2(this.name, {
      borderLeft: value
    });
  }
  get borderLeft() {
    return getCss(this.name, "borderLeft");
  }
  setBorderLeft(value) {
    this.borderLeft = value;
    return this;
  }
  set borderWidth(value) {
    setCss2(this.name, {
      borderWidth: value
    });
  }
  get borderWidth() {
    return getCss(this.name, "borderWidth");
  }
  setBorderWidth(value) {
    this.borderWidth = value;
    return this;
  }
  set borderTopWidth(value) {
    setCss2(this.name, {
      borderTopWidth: value
    });
  }
  get borderTopWidth() {
    return getCss(this.name, "borderTopWidth");
  }
  setBorderTopWidth(value) {
    this.borderTopWidth = value;
    return this;
  }
  set borderRightWidth(value) {
    setCss2(this.name, {
      borderRightWidth: value
    });
  }
  get borderRightWidth() {
    return getCss(this.name, "borderRightWidth");
  }
  setBorderRightWidth(value) {
    this.borderRightWidth = value;
    return this;
  }
  set borderBottomWidth(value) {
    setCss2(this.name, {
      borderBottomWidth: value
    });
  }
  get borderBottomWidth() {
    return getCss(this.name, "borderBottomWidth");
  }
  setBorderBottomWidth(value) {
    this.borderBottomWidth = value;
    return this;
  }
  set borderLeftWidth(value) {
    setCss2(this.name, {
      borderLeftWidth: value
    });
  }
  get borderLeftWidth() {
    return getCss(this.name, "borderLeftWidth");
  }
  setBorderLeftWidth(value) {
    this.borderLeftWidth = value;
    return this;
  }
  set borderStyle(value) {
    setCss2(this.name, {
      borderStyle: value
    });
  }
  get borderStyle() {
    return getCss(this.name, "borderStyle");
  }
  setBorderStyle(value) {
    this.borderStyle = value;
    return this;
  }
  set borderTopStyle(value) {
    setCss2(this.name, {
      borderTopStyle: value
    });
  }
  get borderTopStyle() {
    return getCss(this.name, "borderTopStyle");
  }
  setBorderTopStyle(value) {
    this.borderTopStyle = value;
    return this;
  }
  set borderRightStyle(value) {
    setCss2(this.name, {
      borderRightStyle: value
    });
  }
  get borderRightStyle() {
    return getCss(this.name, "borderRightStyle");
  }
  setBorderRightStyle(value) {
    this.borderRightStyle = value;
    return this;
  }
  set borderBottomStyle(value) {
    setCss2(this.name, {
      borderBottomStyle: value
    });
  }
  get borderBottomStyle() {
    return getCss(this.name, "borderBottomStyle");
  }
  setBorderBottomStyle(value) {
    this.borderBottomStyle = value;
    return this;
  }
  set borderLeftStyle(value) {
    setCss2(this.name, {
      borderLeftStyle: value
    });
  }
  get borderLeftStyle() {
    return getCss(this.name, "borderLeftStyle");
  }
  setBorderLeftStyle(value) {
    this.borderLeftStyle = value;
    return this;
  }
  set borderColor(value) {
    setCss2(this.name, {
      borderColor: value
    });
  }
  get borderColor() {
    return getCss(this.name, "borderColor");
  }
  setBorderColor(value) {
    this.borderColor = value;
    return this;
  }
  set borderTopColor(value) {
    setCss2(this.name, {
      borderTopColor: value
    });
  }
  get borderTopColor() {
    return getCss(this.name, "borderTopColor");
  }
  setBorderTopColor(value) {
    this.borderTopColor = value;
    return this;
  }
  set borderRightColor(value) {
    setCss2(this.name, {
      borderRightColor: value
    });
  }
  get borderRightColor() {
    return getCss(this.name, "borderRightColor");
  }
  setBorderRightColor(value) {
    this.borderRightColor = value;
    return this;
  }
  set borderBottomColor(value) {
    setCss2(this.name, {
      borderBottomColor: value
    });
  }
  get borderBottomColor() {
    return getCss(this.name, "borderBottomColor");
  }
  setBorderBottomColor(value) {
    this.borderBottomColor = value;
    return this;
  }
  set borderLeftColor(value) {
    setCss2(this.name, {
      borderLeftColor: value
    });
  }
  get borderLeftColor() {
    return getCss(this.name, "borderLeftColor");
  }
  setBorderLeftColor(value) {
    this.borderLeftColor = value;
    return this;
  }
  set borderRadius(value) {
    setCss2(this.name, {
      borderRadius: value
    });
  }
  get borderRadius() {
    return getCss(this.name, "borderRadius");
  }
  setBorderRadius(value) {
    this.borderRadius = value;
    return this;
  }
  set borderTopLeftRadius(value) {
    setCss2(this.name, {
      borderTopLeftRadius: value
    });
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
  }
  get borderTopRightRadius() {
    return getCss(this.name, "borderTopRightRadius");
  }
  setBorderTopRightRadius(value) {
    this.borderTopRightRadius = value;
    return this;
  }
  set borderBottomLeftRadius(value) {
    setCss2(this.name, {
      borderBottomLeftRadius: value
    });
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
  }
  get borderBottomRightRadius() {
    return getCss(this.name, "borderBottomRightRadius");
  }
  setBorderBottomRightRadius(value) {
    this.borderBottomRightRadius = value;
    return this;
  }
  set boxShadow(value) {
    setCss2(this.name, {
      boxShadow: value
    });
  }
  get boxShadow() {
    return getCss(this.name, "boxShadow");
  }
  setBoxShadow(value) {
    this.boxShadow = value;
    return this;
  }
  set overflow(value) {
    setCss2(this.name, {
      overflow: value
    });
  }
  get overflow() {
    return getCss(this.name, "overflow");
  }
  setOverflow(value) {
    this.overflow = value;
    return this;
  }
  set overflowX(value) {
    setCss2(this.name, {
      overflowX: value
    });
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
  }
  get overflowY() {
    return getCss(this.name, "overflowY");
  }
  setOverflowY(value) {
    this.overflowY = value;
    return this;
  }
  set visibility(value) {
    setCss2(this.name, {
      visibility: value
    });
  }
  get visibility() {
    return getCss(this.name, "visibility");
  }
  setVisibility(value) {
    this.visibility = value;
    return this;
  }
  set display(value) {
    setCss2(this.name, {
      display: value
    });
  }
  get display() {
    return getCss(this.name, "display");
  }
  setDisplay(value) {
    this.display = value;
    return this;
  }
  set position(value) {
    setCss2(this.name, {
      position: value
    });
  }
  get position() {
    return getCss(this.name, "position");
  }
  setPosition(value) {
    this.position = value;
    return this;
  }
  set top(value) {
    setCss2(this.name, {
      top: value
    });
  }
  get top() {
    return getCss(this.name, "top");
  }
  setTop(value) {
    this.top = value;
    return this;
  }
  set right(value) {
    setCss2(this.name, {
      right: value
    });
  }
  get right() {
    return getCss(this.name, "right");
  }
  setRight(value) {
    this.right = value;
    return this;
  }
  set bottom(value) {
    setCss2(this.name, {
      bottom: value
    });
  }
  get bottom() {
    return getCss(this.name, "bottom");
  }
  setBottom(value) {
    this.bottom = value;
    return this;
  }
  set left(value) {
    setCss2(this.name, {
      left: value
    });
  }
  get left() {
    return getCss(this.name, "left");
  }
  setLeft(value) {
    this.left = value;
    return this;
  }
  set float(value) {
    setCss2(this.name, {
      float: value
    });
  }
  get float() {
    return getCss(this.name, "float");
  }
  setFloat(value) {
    this.float = value;
    return this;
  }
  set clear(value) {
    setCss2(this.name, {
      clear: value
    });
  }
  get clear() {
    return getCss(this.name, "clear");
  }
  setClear(value) {
    this.clear = value;
    return this;
  }
  set flex(value) {
    setCss2(this.name, {
      flex: value
    });
  }
  get flex() {
    return getCss(this.name, "flex");
  }
  setFlex(value) {
    this.flex = value;
    return this;
  }
  set flexDirection(value) {
    setCss2(this.name, {
      flexDirection: value
    });
  }
  get flexDirection() {
    return getCss(this.name, "flexDirection");
  }
  setFlexDirection(value) {
    this.flexDirection = value;
    return this;
  }
  set flexWrap(value) {
    setCss2(this.name, {
      flexWrap: value
    });
  }
  get flexWrap() {
    return getCss(this.name, "flexWrap");
  }
  setFlexWrap(value) {
    this.flexWrap = value;
    return this;
  }
  set justifyContent(value) {
    setCss2(this.name, {
      justifyContent: value
    });
  }
  get justifyContent() {
    return getCss(this.name, "justifyContent");
  }
  setJustifyContent(value) {
    this.justifyContent = value;
    return this;
  }
  set alignItems(value) {
    setCss2(this.name, {
      alignItems: value
    });
  }
  get alignItems() {
    return getCss(this.name, "alignItems");
  }
  setAlignItems(value) {
    this.alignItems = value;
    return this;
  }
  set alignContent(value) {
    setCss2(this.name, {
      alignContent: value
    });
  }
  get alignContent() {
    return getCss(this.name, "alignContent");
  }
  setAlignContent(value) {
    this.alignContent = value;
    return this;
  }
  set flexGrow(value) {
    setCss2(this.name, {
      flexGrow: value
    });
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
  }
  get flexShrink() {
    return getCss(this.name, "flexShrink");
  }
  setFlexShrink(value) {
    this.flexShrink = value;
    return this;
  }
  set flexBasis(value) {
    setCss2(this.name, {
      flexBasis: value
    });
  }
  get flexBasis() {
    return getCss(this.name, "flexBasis");
  }
  setFlexBasis(value) {
    this.flexBasis = value;
    return this;
  }
  set order(value) {
    setCss2(this.name, {
      order: value
    });
  }
  get order() {
    return getCss(this.name, "order");
  }
  setOrder(value) {
    this.order = value;
    return this;
  }
  set fontFamily(value) {
    setCss2(this.name, {
      fontFamily: value
    });
  }
  get fontFamily() {
    return getCss(this.name, "fontFamily");
  }
  setFontFamily(value) {
    this.fontFamily = value;
    return this;
  }
  set fontSize(value) {
    setCss2(this.name, {
      fontSize: value
    });
  }
  get fontSize() {
    return getCss(this.name, "fontSize");
  }
  setFontSize(value) {
    this.fontSize = value;
    return this;
  }
  set fontWeight(value) {
    setCss2(this.name, {
      fontWeight: value
    });
  }
  get fontWeight() {
    return getCss(this.name, "fontWeight");
  }
  setFontWeight(value) {
    this.fontWeight = value;
    return this;
  }
  set fontStyle(value) {
    setCss2(this.name, {
      fontStyle: value
    });
  }
  get fontStyle() {
    return getCss(this.name, "fontStyle");
  }
  setFontStyle(value) {
    this.fontStyle = value;
    return this;
  }
  set textAlign(value) {
    setCss2(this.name, {
      textAlign: value
    });
  }
  get textAlign() {
    return getCss(this.name, "textAlign");
  }
  setTextAlign(value) {
    this.textAlign = value;
    return this;
  }
  set textTransform(value) {
    setCss2(this.name, {
      textTransform: value
    });
  }
  get textTransform() {
    return getCss(this.name, "textTransform");
  }
  setTextTransform(value) {
    this.textTransform = value;
    return this;
  }
  set textDecoration(value) {
    setCss2(this.name, {
      textDecoration: value
    });
  }
  get textDecoration() {
    return getCss(this.name, "textDecoration");
  }
  setTextDecoration(value) {
    this.textDecoration = value;
    return this;
  }
  set lineHeight(value) {
    setCss2(this.name, {
      lineHeight: value
    });
  }
  get lineHeight() {
    return getCss(this.name, "lineHeight");
  }
  setLineHeight(value) {
    this.lineHeight = value;
    return this;
  }
  set letterSpacing(value) {
    setCss2(this.name, {
      letterSpacing: value
    });
  }
  get letterSpacing() {
    return getCss(this.name, "letterSpacing");
  }
  setLetterSpacing(value) {
    this.letterSpacing = value;
    return this;
  }
  set whiteSpace(value) {
    setCss2(this.name, {
      whiteSpace: value
    });
  }
  get whiteSpace() {
    return getCss(this.name, "whiteSpace");
  }
  setWhiteSpace(value) {
    this.whiteSpace = value;
    return this;
  }
  set background(value) {
    setCss2(this.name, {
      background: value
    });
  }
  get background() {
    return getCss(this.name, "background");
  }
  setBackground(value) {
    this.background = value;
    return this;
  }
  set backgroundColor(value) {
    setCss2(this.name, {
      backgroundColor: value
    });
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
  }
  get backgroundImage() {
    return getCss(this.name, "backgroundImage");
  }
  setBackgroundImage(value) {
    this.backgroundImage = value;
    return this;
  }
  set backgroundRepeat(value) {
    setCss2(this.name, {
      backgroundRepeat: value
    });
  }
  get backgroundRepeat() {
    return getCss(this.name, "backgroundRepeat");
  }
  setBackgroundRepeat(value) {
    this.backgroundRepeat = value;
    return this;
  }
  set backgroundPosition(value) {
    setCss2(this.name, {
      backgroundPosition: value
    });
  }
  get backgroundPosition() {
    return getCss(this.name, "backgroundPosition");
  }
  setBackgroundPosition(value) {
    this.backgroundPosition = value;
    return this;
  }
  set backgroundSize(value) {
    setCss2(this.name, {
      backgroundSize: value
    });
  }
  get backgroundSize() {
    return getCss(this.name, "backgroundSize");
  }
  setBackgroundSize(value) {
    this.backgroundSize = value;
    return this;
  }
  set color(value) {
    setCss2(this.name, {
      color: value
    });
  }
  get color() {
    return getCss(this.name, "color");
  }
  setColor(value) {
    this.color = value;
    return this;
  }
  set cursor(value) {
    setCss2(this.name, {
      cursor: value
    });
  }
  get cursor() {
    return getCss(this.name, "cursor");
  }
  setCursor(value) {
    this.cursor = value;
    return this;
  }
  set zIndex(value) {
    setCss2(this.name, {
      zIndex: value
    });
  }
  get zIndex() {
    return getCss(this.name, "zIndex");
  }
  setZIndex(value) {
    this.zIndex = value;
    return this;
  }
  set opacity(value) {
    setCss2(this.name, {
      opacity: value
    });
  }
  get opacity() {
    return getCss(this.name, "opacity");
  }
  setOpacity(value) {
    this.opacity = value;
    return this;
  }
  set content(value) {
    setCss2(this.name, {
      content: value
    });
  }
  get content() {
    return getCss(this.name, "content");
  }
  setContent(value) {
    this.content = value;
    return this;
  }
  set transition(value) {
    setCss2(this.name, {
      transition: value
    });
  }
  get transition() {
    return getCss(this.name, "transition");
  }
  setTransition(value) {
    this.transition = value;
    return this;
  }
  set animation(value) {
    setCss2(this.name, {
      animation: value
    });
  }
  get animation() {
    return getCss(this.name, "animation");
  }
  setAnimation(value) {
    this.animation = value;
    return this;
  }
  set transform(value) {
    setCss2(this.name, {
      transform: value
    });
  }
  get transform() {
    return getCss(this.name, "transform");
  }
  setTransform(value) {
    this.transform = value;
    return this;
  }
  set userSelect(value) {
    setCss2(this.name, {
      userSelect: value
    });
  }
  get userSelect() {
    return getCss(this.name, "userSelect");
  }
  setUserSelect(value) {
    this.userSelect = value;
    return this;
  }
  set themeColor(value) {
    setCss2(this.name, {
      "--f7-theme-color": value
    });
  }
  get themeColor() {
    return getCss(this.name, "themeColor");
  }
  setThemeColor(value) {
    this.themeColor = value;
    return this;
  }
  static trimRules(rules) {
    return trimRules(rules);
  }
  static register(name, props) {
    const s = new Style(name);
    s.set(props);
    return s;
  }
  static fromElement(element, name) {
    const styles = getComputedStyle(element);
    const csss = {};
    for (const property of styles) {
      const value = styles.getPropertyValue(property);
      csss[property] = value;
    }
    return Style.register(name, csss);
  }
  static fromWidget(widget, name) {
    return Style.fromElement(findEl(widget.id)[0], name);
  }
  static from(target, name) {
    if (isHTMLElement(target)) {
      return Style.fromElement(target, name);
    } else if (isWidget(target)) {
      return Style.fromWidget(target, name);
    } else {
      throw new Error("Only HTMLElements and Widgets are allowed for style copying.");
    }
  }
  static copy(target, name) {
    let all = { ...getCss(target) };
    return Style.register(name, all);
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
  getStore(store = "state", id = null) {
    let ideed = id ? this.stores[id] || {} : {};
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
    key: { code: e.keyCode, name: e.code, output: e.key, ctrl: e.ctrlKey },
    pos: { x: e.clientX, y: e.clientY },
    offset: { x: e.offsetX, y: e.offsetY },
    name,
    data: e.data || e.originalEvent?.data,
    dataTransfer: e.originalEvent?.dataTransfer,
    target: widget || e.target ? Widget_default.from(e.target) : null
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
    if (!findEl(this.id).at(0).GUISTYLE)
      findEl(this.id).at(0).GUISTYLE = style;
    else
      findEl(this.id).at(0).GUISTYLE = { ...findEl(this.id).at(0).GUISTYLE, ...style };
    if (style instanceof Style_default)
      findEl(this.id).css(style.all);
    else
      findEl(this.id).css(style);
  }
  get style() {
    return findEl(this.id).at(0).GUISTYLE;
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
  set type(type4) {
    if (typeof type4 == "string") {
      type4 = [type4];
    } else if (Array.isArray(type4)) {
      type4 = type4;
    } else {
      throw new Error("Undefined type type");
    }
    elementTypes(null, type4, this.id);
    this.emit("typechange", type4);
  }
  setType(type4) {
    this.type = type4;
    return this;
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
    return filteredChildren(resolveSubchild(findEl(this.id), subchild).children());
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
    return findEl(this.id).text() || this;
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
  set $id(id) {
    this._id = id, findEl(this.id).attr({ id });
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
  const element = parts[0];
  const classes = parts.slice(1).join(" ");
  return { element, classes };
};
var modelToWidget = function(model) {
  if (model instanceof Widget_default)
    return model;
  if (typeof model == "string")
    model = { selector: model };
  let el = getSelectorContent(model.selector);
  let widget = new Widget_default({
    ...model.options,
    element: { name: el.element },
    class: el.classes,
    attr: model.attributes,
    children: model.children ? model.children.map(modelToWidget) : [],
    model
  });
  if (model.text)
    widget.text(model.text);
  if (model.html)
    widget.html(model.html);
  if (model.child)
    widget.add(modelToWidget(model.child));
  return widget;
};
var determineValue = function(valueRaw, widget, option) {
  let value = { type: typeof valueRaw, value: valueRaw };
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
var selectorCase = function(selectors, widget, value) {
  for (let i in selectors) {
    let item = i == "this" ? widget : widget.find(i);
    if (item) {
      actionCase(selectors[i], item, value);
    }
  }
};
var typeCase = function(widget, option, valueRaw) {
  let value = determineValue(valueRaw, widget, option);
  let type4 = determineType(value.value);
  if ("any" in option)
    selectorCase(option.any, widget, value);
  if (type4 in option)
    selectorCase(option[type4], widget, value);
  else if ("else" in option)
    selectorCase(option.else, widget, value);
};
function createWidgetModel(model, _options) {
  const classGenerated = class extends Widget_default {
    constructor(options3 = _options) {
      let wo = {};
      if (model.widgetOptions) {
        for (let i in model.widgetOptions)
          wo[i] = resolveValue(model.widgetOptions[i], { type: "list", value: options3 }).value;
      }
      super(mergeOptions({
        ...wo,
        element: { name: getSelectorContent(model.selector).element },
        class: getSelectorContent(model.selector).classes,
        children: model.children ? model.children.map(modelToWidget) : [],
        _setters: Object.keys(options3)
      }, options3));
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
  const setterFunctions = [
    "padding",
    "margin",
    "type",
    "name",
    "id:$id",
    "animation",
    "tooltip",
    "style"
  ];
  if (options5._setters) {
    setterFunctions.push(...options5._setters);
  }
  initiateSetters(widget2, setterFunctions, options5);
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
class Widget7 extends WidgetProps_default {
  constructor(options5 = { element: { name: "div" }, class: "widget" }) {
    super();
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
    return createWidgetModel(model, options5);
  }
  static animateWidgets(animation2, ...widgets) {
    return WidgetList.from(widgets).animate(animation2);
  }
}
var Widget_default = Widget7;

// client/widgets/main/Component.ts
function makeComponent(component, props) {
  const widget2 = component.build(props);
  if (!(widget2 instanceof Widget_default))
    throw new TypeError("Component.build does not return a widget.");
  component._currentWidget = widget2;
  component._buildProps = props;
  return widget2;
}
var components = [];

class Component {
  _currentWidget;
  _buildProps;
  _data = {};
  constructor(props) {
    components.push(this);
  }
  get _beforeInit() {
    return () => {
      for (let i in this) {
        if (this[i] instanceof Ref) {
          this.ref(i, this[i].value);
        }
      }
    };
  }
  set _beforeInit(value) {
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
      if (!value)
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
      let parent = this._currentWidget.parent(true);
      this._currentWidget.remove();
      let newWidget = makeComponent(this, this._buildProps);
      if (parent)
        newWidget.to(parent);
    }
  }
}

class Ref {
  value;
  constructor(value = null) {
    if (value)
      this.value = value;
  }
}

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
var Controller_default = Controller;

// client/widgets/main/Text.ts
var defaultText = () => getDefaults({
  element: { name: "div" },
  class: "text-wrapper",
  accepts: false
});

class Text extends Widget_default {
  constructor(selectedOptions, otheroptions = null) {
    const options7 = Text.resolveOptions(selectedOptions, otheroptions, defaultText());
    if (options7.children)
      options7.accepts = true;
    super(options7);
    this.render();
  }
  _optionChange(options7) {
    this.render();
  }
  render() {
    const options7 = this.options;
    let text = options7.text || "";
    const doText = (text2) => {
      if (typeof text2 == "function") {
        text2 = options7.text(this);
      } else if (text2 instanceof Controller_default) {
        text2.onChange((change) => {
          this.options.text = change.toString();
        });
        text2 = text2.get().toString();
      }
      this.text(text2);
      if (options7.children)
        this.addAll(...options7.children);
    };
    if (text instanceof Promise) {
      text.then(doText);
    } else {
      doText(text);
    }
  }
  static resolveOptions(selectedOptions, otheroptions, defaults2) {
    if (typeof selectedOptions == "string" || selectedOptions instanceof Controller_default || selectedOptions instanceof Promise) {
      selectedOptions = { text: selectedOptions };
    }
    if (otheroptions) {
      selectedOptions = { ...otheroptions, ...selectedOptions };
    }
    return { ...defaults2, ...selectedOptions };
  }
}
var Text_default = Text;

// client/widgets/list/ListBuilder.ts
class ListBuilder extends Widget_default {
  state = new Store_default({ items: [] });
  constructor(selectedOptions, _initList) {
    const options7 = { ...selectedOptions };
    super(options7);
    this.updateList(options7);
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
    const options7 = { ...this.options, ...newOptions };
    if (options7.items) {
      const doItems = () => {
        if (options7.items instanceof Controller_default) {
          if (!options7.items.isTakenBy(this)) {
            this.setStore({ [options7.itemsStateName]: options7.items.get() });
            options7.items.take(this);
            options7.items.onChange(() => {
              this.setStore({ [options7.itemsStateName]: options7.items.get() });
            });
          }
        } else {
          this.setStore({ [options7.itemsStateName]: options7.items });
        }
      };
      if (options7.items instanceof Promise) {
        options7.items.then((items) => {
          options7.items = items;
          doItems();
        });
      } else {
        doItems();
      }
    }
    if (options7.loader) {
      super.add(options7.loader);
    }
    if (options7.loading) {
      options7.loader?.show();
    } else {
      options7.loader?.hide();
    }
    if (typeof this._onUpdate == "function") {
      this._onUpdate(options7);
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
    const options9 = { ...defaultListItem(), ...selectedOptions };
    const { title, link } = options9;
    if (link === true)
      options9.element.name = "a";
    super(options9);
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
    const options9 = { ...defaultList(), ...selectedOptions };
    super(options9, _initList);
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

// client/extra.ts
var Macy = __toESM(require_Macy(), 1);

// client/widgets/entry/InputWrapper.ts
class EntryController extends Controller_default {
  constructor(val) {
    super(val);
  }
}

class InputWrapper extends Widget_default {
  __controller;
  constructor(selectedOptions) {
    const options9 = { ...{ element: { name: selectedOptions.inputType == "textarea" ? "textarea" : "input" }, attr: { type: "text" }, class: "input-wrapper", _setters: ["inputType", "title"] }, ...selectedOptions };
    super(options9);
    if (options9.controller) {
      this.setController(options9.controller);
    }
    if (options9.required) {
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
    const options10 = { ...defaults2, ...selectedOptions };
    super(options10);
    if (options10.controller) {
      this.setController(options10.controller);
    }
    if (options10.checked) {
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
// client/widgets/main/Link.ts
var link = function(el, url) {
  if (url.match(/^ui\.([a-zA-Z]+):/)) {
    let [, name, ui] = url.match(/ui\.([a-zA-Z]+):(.+)/);
    el.addClass(name + "-link").attr({ ["data-" + name]: ui });
  } else {
    el.attr({ href: url });
  }
};
var defaultLink = (more = null) => getDefaults({
  element: { name: "a" },
  class: more ? "link " + more : "link",
  accepts: false,
  _setters: ["url"],
  icon: null
});

class Link extends Text_default {
  constructor(selectedOptions, otheroptions = null) {
    const options13 = Text_default.resolveOptions(selectedOptions, otheroptions, { ...defaultLink() });
    super(options13);
  }
  set url(url) {
    if (url instanceof Controller_default)
      url.onChange((change) => {
        this.url = change;
      });
    link(findEl(this.id), url instanceof Controller_default ? url.get() : url);
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
    const options14 = Text_default.resolveOptions(selectedOptions, otheroptions, defaultButton(null, otheroptions?.url || selectedOptions?.url));
    super(options14);
  }
}
var Button_default = Button;

// client/widgets/buttons/Radio.ts
var defaults3 = getDefaults({ element: { name: "input" }, class: "radio", attr: { type: "radio" } });

// client/widgets/containers/Grid.ts
var Macy3 = __toESM(require_Macy(), 1);

// styles/main.scss
(() => {
  const style = document.createElement("style");
  style.pathname = "/home/makano/workspace/rayous/styles/main.scss";
  style.textContent = `body {
  background: black;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.title {
  font-size: 25px;
  font-weight: bold;
}

.showcase > * {
  margin: 5px;
}`;
  document.head.appendChild(style);
})();

// app/home/page.ts
class page_default extends Component {
  constructor() {
    super(...arguments);
  }
  c;
  cc;
  build({ route: {} }) {
    const c = this.c = new EntryController("sss");
    const cc = this.cc = new CheckboxController(true);
    return new Widget_default({
      children: [
        new Checkbox_default({
          controller: cc
        }),
        new Button_default("Hi", {
          onClick() {
            c.set("Hello");
            console.log("hi");
          }
        }),
        new InputWrapper_default({
          title: "Hello",
          controller: this.c,
          onTextInput() {
            console.log(c);
          }
        }),
        new Link_default("fff", { url: "/" }),
        new List_default({
          id: "list",
          items: [
            {
              title: "ss"
            }
          ]
        })
      ]
    });
  }
  afterBuild({ page }) {
    setTimeout(() => page.find("#list").updateList({ items: [{ title: this.c }, { title: this.cc }] }), 1000);
  }
}

// app/layout.ts
class layout_default extends Component {
  constructor() {
    super(...arguments);
  }
  build(props) {
    return new Widget_default({
      children: [
        new List_default({
          class: "navbar",
          style: {
            listStyle: "none",
            display: "flex",
            margin: 0,
            padding: 0,
            gap: 20,
            overflow: "auto",
            fontSize: "14px"
          },
          items: props.router.paths,
          template(path) {
            return new ListItem({
              title: new Link_default({
                text: path,
                url: path.replace(/\:(\w+)/g, "$1")
              })
            });
          }
        }),
        props.page
      ]
    });
  }
}

// app/init.client.ts
function init() {
  console.log("hi from init!");
}

// tmp/file.ts
(function() {
  let cscript = document.currentScript;
  const pages = [];
  if (typeof page_default.title === "string")
    document.title = page_default.title;
  const otherPaths = ["/", "/someapifolder", "/home", "/test/route", "/test/route/:id", "/test/promise", "/test/props", "/test/grid", "/test/tailwind", "/test/navigate", "/test/navigate/nav", "/test/ref", "/test/model", "/test/loading", "/test/layout", "/test/animation", "/test/select", "/test/live", "/test/table", "/lll", "/posts/:id"];
  const buildProps = (props) => ({ router: { paths: otherPaths, assign: function(path) {
    location.assign(path);
  }, navigate: function(path) {
    location.pathname = path;
  }, back: function() {
    location.back();
  } }, route: { path: "/home", params: {} }, ...props });
  if (typeof page_default.title === "function")
    document.title = page_default.title(buildProps({ page: made0 }));
  window.addEventListener("load", () => {
    if (!window.after && window.loaderOn)
      window.loader.remove();
    const initResponse = typeof init == "function" ? init(buildProps()) || {} : {};
    let page0 = new page_default;
    page0._beforeInit();
    page0.initState(buildProps());
    let made02 = page0.make(buildProps({ init: initResponse, page: null }));
    let page1 = new layout_default;
    page1._beforeInit();
    page1.initState(buildProps());
    let made1 = page1.make(buildProps({ init: initResponse, page: made02 }));
    if (page_default.layouts === false) {
      made02.to(document.body);
    } else {
      page0.afterBuild(buildProps({ page: made02 }));
      made1.to(document.body);
    }
    pages.push(page0);
    pages.push(page1);
    if (typeof page0.afterBuild == "function")
      page0.afterBuild(buildProps({ page: made02 }));
    if (typeof undefined == "function")
      undefined(buildProps({ page: made02 }));
    if (window.after && window.loaderOn)
      window.loader.remove();
  });
})();
})();