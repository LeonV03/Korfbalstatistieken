var im = e => { 
    throw TypeError(e)
}
;
var Ru = (e, t, r) => t.has(e) || im("Cannot " + r);
var T = (e, t, r) => (Ru(e, t, "read from private field"),
r ? r.call(e) : t.get(e))
  , ce = (e, t, r) => t.has(e) ? im("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r)
  , ee = (e, t, r, n) => (Ru(e, t, "write to private field"),
n ? n.call(e, r) : t.set(e, r),
r)
  , Ze = (e, t, r) => (Ru(e, t, "access private method"),
r);
var Wa = (e, t, r, n) => ({
    set _(o) {
        ee(e, t, o, r)
    },
    get _() {
        return T(e, t, n)
    }
});
function H1(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const o in n)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => n[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        n(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const a of i.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function n(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = r(o);
        fetch(o.href, i)
    }
}
)();
function Zd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ig = {
    exports: {}
}
  , Tl = {}
  , ag = {
    exports: {}
}
  , re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa = Symbol.for("react.element")
  , G1 = Symbol.for("react.portal")
  , K1 = Symbol.for("react.fragment")
  , q1 = Symbol.for("react.strict_mode")
  , Q1 = Symbol.for("react.profiler")
  , Y1 = Symbol.for("react.provider")
  , X1 = Symbol.for("react.context")
  , J1 = Symbol.for("react.forward_ref")
  , Z1 = Symbol.for("react.suspense")
  , eS = Symbol.for("react.memo")
  , tS = Symbol.for("react.lazy")
  , am = Symbol.iterator;
function rS(e) {
    return e === null || typeof e != "object" ? null : (e = am && e[am] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var sg = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , lg = Object.assign
  , ug = {};
function Jo(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = ug,
    this.updater = r || sg
}
Jo.prototype.isReactComponent = {};
Jo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Jo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function cg() {}
cg.prototype = Jo.prototype;
function ef(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = ug,
    this.updater = r || sg
}
var tf = ef.prototype = new cg;
tf.constructor = ef;
lg(tf, Jo.prototype);
tf.isPureReactComponent = !0;
var sm = Array.isArray
  , dg = Object.prototype.hasOwnProperty
  , rf = {
    current: null
}
  , fg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function pg(e, t, r) {
    var n, o = {}, i = null, a = null;
    if (t != null)
        for (n in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            dg.call(t, n) && !fg.hasOwnProperty(n) && (o[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1)
        o.children = r;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (n in s = e.defaultProps,
        s)
            o[n] === void 0 && (o[n] = s[n]);
    return {
        $$typeof: xa,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: rf.current
    }
}
function nS(e, t) {
    return {
        $$typeof: xa,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function nf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === xa
}
function oS(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var lm = /\/+/g;
function ku(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? oS("" + e.key) : t.toString(36)
}
function xs(e, t, r, n, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case xa:
            case G1:
                a = !0
            }
        }
    if (a)
        return a = e,
        o = o(a),
        e = n === "" ? "." + ku(a, 0) : n,
        sm(o) ? (r = "",
        e != null && (r = e.replace(lm, "$&/") + "/"),
        xs(o, t, r, "", function(u) {
            return u
        })) : o != null && (nf(o) && (o = nS(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(lm, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (a = 0,
    n = n === "" ? "." : n + ":",
    sm(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var l = n + ku(i, s);
            a += xs(i, t, r, l, o)
        }
    else if (l = rS(e),
    typeof l == "function")
        for (e = l.call(e),
        s = 0; !(i = e.next()).done; )
            i = i.value,
            l = n + ku(i, s++),
            a += xs(i, t, r, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Ua(e, t, r) {
    if (e == null)
        return e;
    var n = []
      , o = 0;
    return xs(e, n, "", "", function(i) {
        return t.call(r, i, o++)
    }),
    n
}
function iS(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = r)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var pt = {
    current: null
}
  , ws = {
    transition: null
}
  , aS = {
    ReactCurrentDispatcher: pt,
    ReactCurrentBatchConfig: ws,
    ReactCurrentOwner: rf
};
function mg() {
    throw Error("act(...) is not supported in production builds of React.")
}
re.Children = {
    map: Ua,
    forEach: function(e, t, r) {
        Ua(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return Ua(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ua(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!nf(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
re.Component = Jo;
re.Fragment = K1;
re.Profiler = Q1;
re.PureComponent = ef;
re.StrictMode = q1;
re.Suspense = Z1;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aS;
re.act = mg;
re.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = lg({}, e.props)
      , o = e.key
      , i = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        a = rf.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (l in t)
            dg.call(t, l) && !fg.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        n.children = r;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++)
            s[u] = arguments[u + 2];
        n.children = s
    }
    return {
        $$typeof: xa,
        type: e.type,
        key: o,
        ref: i,
        props: n,
        _owner: a
    }
}
;
re.createContext = function(e) {
    return e = {
        $$typeof: X1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Y1,
        _context: e
    },
    e.Consumer = e
}
;
re.createElement = pg;
re.createFactory = function(e) {
    var t = pg.bind(null, e);
    return t.type = e,
    t
}
;
re.createRef = function() {
    return {
        current: null
    }
}
;
re.forwardRef = function(e) {
    return {
        $$typeof: J1,
        render: e
    }
}
;
re.isValidElement = nf;
re.lazy = function(e) {
    return {
        $$typeof: tS,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: iS
    }
}
;
re.memo = function(e, t) {
    return {
        $$typeof: eS,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
re.startTransition = function(e) {
    var t = ws.transition;
    ws.transition = {};
    try {
        e()
    } finally {
        ws.transition = t
    }
}
;
re.unstable_act = mg;
re.useCallback = function(e, t) {
    return pt.current.useCallback(e, t)
}
;
re.useContext = function(e) {
    return pt.current.useContext(e)
}
;
re.useDebugValue = function() {}
;
re.useDeferredValue = function(e) {
    return pt.current.useDeferredValue(e)
}
;
re.useEffect = function(e, t) {
    return pt.current.useEffect(e, t)
}
;
re.useId = function() {
    return pt.current.useId()
}
;
re.useImperativeHandle = function(e, t, r) {
    return pt.current.useImperativeHandle(e, t, r)
}
;
re.useInsertionEffect = function(e, t) {
    return pt.current.useInsertionEffect(e, t)
}
;
re.useLayoutEffect = function(e, t) {
    return pt.current.useLayoutEffect(e, t)
}
;
re.useMemo = function(e, t) {
    return pt.current.useMemo(e, t)
}
;
re.useReducer = function(e, t, r) {
    return pt.current.useReducer(e, t, r)
}
;
re.useRef = function(e) {
    return pt.current.useRef(e)
}
;
re.useState = function(e) {
    return pt.current.useState(e)
}
;
re.useSyncExternalStore = function(e, t, r) {
    return pt.current.useSyncExternalStore(e, t, r)
}
;
re.useTransition = function() {
    return pt.current.useTransition()
}
;
re.version = "18.3.1";
ag.exports = re;
var x = ag.exports;
const R = Zd(x)
  , vg = H1({
    __proto__: null,
    default: R
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sS = x
  , lS = Symbol.for("react.element")
  , uS = Symbol.for("react.fragment")
  , cS = Object.prototype.hasOwnProperty
  , dS = sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fS = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function hg(e, t, r) {
    var n, o = {}, i = null, a = null;
    r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (n in t)
        cS.call(t, n) && !fS.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps,
        t)
            o[n] === void 0 && (o[n] = t[n]);
    return {
        $$typeof: lS,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: dS.current
    }
}
Tl.Fragment = uS;
Tl.jsx = hg;
Tl.jsxs = hg;
ig.exports = Tl;
var m = ig.exports
  , gg = {
    exports: {}
}
  , Ot = {}
  , yg = {
    exports: {}
}
  , xg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, O) {
        var $ = P.length;
        P.push(O);
        e: for (; 0 < $; ) {
            var F = $ - 1 >>> 1
              , z = P[F];
            if (0 < o(z, O))
                P[F] = O,
                P[$] = z,
                $ = F;
            else
                break e
        }
    }
    function r(P) {
        return P.length === 0 ? null : P[0]
    }
    function n(P) {
        if (P.length === 0)
            return null;
        var O = P[0]
          , $ = P.pop();
        if ($ !== O) {
            P[0] = $;
            e: for (var F = 0, z = P.length, Q = z >>> 1; F < Q; ) {
                var oe = 2 * (F + 1) - 1
                  , ve = P[oe]
                  , Z = oe + 1
                  , H = P[Z];
                if (0 > o(ve, $))
                    Z < z && 0 > o(H, ve) ? (P[F] = H,
                    P[Z] = $,
                    F = Z) : (P[F] = ve,
                    P[oe] = $,
                    F = oe);
                else if (Z < z && 0 > o(H, $))
                    P[F] = H,
                    P[Z] = $,
                    F = Z;
                else
                    break e
            }
        }
        return O
    }
    function o(P, O) {
        var $ = P.sortIndex - O.sortIndex;
        return $ !== 0 ? $ : P.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date
          , s = a.now();
        e.unstable_now = function() {
            return a.now() - s
        }
    }
    var l = []
      , u = []
      , f = 1
      , d = null
      , c = 3
      , p = !1
      , g = !1
      , h = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , v = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(P) {
        for (var O = r(u); O !== null; ) {
            if (O.callback === null)
                n(u);
            else if (O.startTime <= P)
                n(u),
                O.sortIndex = O.expirationTime,
                t(l, O);
            else
                break;
            O = r(u)
        }
    }
    function S(P) {
        if (h = !1,
        b(P),
        !g)
            if (r(l) !== null)
                g = !0,
                _(C);
            else {
                var O = r(u);
                O !== null && K(S, O.startTime - P)
            }
    }
    function C(P, O) {
        g = !1,
        h && (h = !1,
        y(D),
        D = -1),
        p = !0;
        var $ = c;
        try {
            for (b(O),
            d = r(l); d !== null && (!(d.expirationTime > O) || P && !M()); ) {
                var F = d.callback;
                if (typeof F == "function") {
                    d.callback = null,
                    c = d.priorityLevel;
                    var z = F(d.expirationTime <= O);
                    O = e.unstable_now(),
                    typeof z == "function" ? d.callback = z : d === r(l) && n(l),
                    b(O)
                } else
                    n(l);
                d = r(l)
            }
            if (d !== null)
                var Q = !0;
            else {
                var oe = r(u);
                oe !== null && K(S, oe.startTime - O),
                Q = !1
            }
            return Q
        } finally {
            d = null,
            c = $,
            p = !1
        }
    }
    var E = !1
      , N = null
      , D = -1
      , I = 5
      , k = -1;
    function M() {
        return !(e.unstable_now() - k < I)
    }
    function B() {
        if (N !== null) {
            var P = e.unstable_now();
            k = P;
            var O = !0;
            try {
                O = N(!0, P)
            } finally {
                O ? U() : (E = !1,
                N = null)
            }
        } else
            E = !1
    }
    var U;
    if (typeof v == "function")
        U = function() {
            v(B)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var A = new MessageChannel
          , V = A.port2;
        A.port1.onmessage = B,
        U = function() {
            V.postMessage(null)
        }
    } else
        U = function() {
            w(B, 0)
        }
        ;
    function _(P) {
        N = P,
        E || (E = !0,
        U())
    }
    function K(P, O) {
        D = w(function() {
            P(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || p || (g = !0,
        _(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return c
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return r(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (c) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = c
        }
        var $ = c;
        c = O;
        try {
            return P()
        } finally {
            c = $
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, O) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var $ = c;
        c = P;
        try {
            return O()
        } finally {
            c = $
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, O, $) {
        var F = e.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
        $ = typeof $ == "number" && 0 < $ ? F + $ : F) : $ = F,
        P) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = $ + z,
        P = {
            id: f++,
            callback: O,
            priorityLevel: P,
            startTime: $,
            expirationTime: z,
            sortIndex: -1
        },
        $ > F ? (P.sortIndex = $,
        t(u, P),
        r(l) === null && P === r(u) && (h ? (y(D),
        D = -1) : h = !0,
        K(S, $ - F))) : (P.sortIndex = z,
        t(l, P),
        g || p || (g = !0,
        _(C))),
        P
    }
    ,
    e.unstable_shouldYield = M,
    e.unstable_wrapCallback = function(P) {
        var O = c;
        return function() {
            var $ = c;
            c = O;
            try {
                return P.apply(this, arguments)
            } finally {
                c = $
            }
        }
    }
}
)(xg);
yg.exports = xg;
var pS = yg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mS = x
  , kt = pS;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var wg = new Set
  , Wi = {};
function Zn(e, t) {
    $o(e, t),
    $o(e + "Capture", t)
}
function $o(e, t) {
    for (Wi[e] = t,
    e = 0; e < t.length; e++)
        wg.add(t[e])
}
var Rr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , kc = Object.prototype.hasOwnProperty
  , vS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , um = {}
  , cm = {};
function hS(e) {
    return kc.call(cm, e) ? !0 : kc.call(um, e) ? !1 : vS.test(e) ? cm[e] = !0 : (um[e] = !0,
    !1)
}
function gS(e, t, r, n) {
    if (r !== null && r.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function yS(e, t, r, n) {
    if (t === null || typeof t > "u" || gS(e, t, r, n))
        return !0;
    if (n)
        return !1;
    if (r !== null)
        switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function mt(e, t, r, n, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = n,
    this.attributeNamespace = o,
    this.mustUseProperty = r,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = a
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Xe[e] = new mt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Xe[t] = new mt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Xe[e] = new mt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Xe[e] = new mt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Xe[e] = new mt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Xe[e] = new mt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Xe[e] = new mt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Xe[e] = new mt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Xe[e] = new mt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var of = /[\-:]([a-z])/g;
function af(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(of, af);
    Xe[t] = new mt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(of, af);
    Xe[t] = new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(of, af);
    Xe[t] = new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Xe[e] = new mt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Xe.xlinkHref = new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Xe[e] = new mt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function sf(e, t, r, n) {
    var o = Xe.hasOwnProperty(t) ? Xe[t] : null;
    (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yS(t, r, o, n) && (r = null),
    n || o === null ? hS(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName,
    n = o.attributeNamespace,
    r === null ? e.removeAttribute(t) : (o = o.type,
    r = o === 3 || o === 4 && r === !0 ? "" : "" + r,
    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Lr = mS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Va = Symbol.for("react.element")
  , lo = Symbol.for("react.portal")
  , uo = Symbol.for("react.fragment")
  , lf = Symbol.for("react.strict_mode")
  , Ac = Symbol.for("react.profiler")
  , bg = Symbol.for("react.provider")
  , Sg = Symbol.for("react.context")
  , uf = Symbol.for("react.forward_ref")
  , Oc = Symbol.for("react.suspense")
  , jc = Symbol.for("react.suspense_list")
  , cf = Symbol.for("react.memo")
  , Ur = Symbol.for("react.lazy")
  , Cg = Symbol.for("react.offscreen")
  , dm = Symbol.iterator;
function fi(e) {
    return e === null || typeof e != "object" ? null : (e = dm && e[dm] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ie = Object.assign, Au;
function Ni(e) {
    if (Au === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/);
            Au = t && t[1] || ""
        }
    return `
` + Au + e
}
var Ou = !1;
function ju(e, t) {
    if (!e || Ou)
        return "";
    Ou = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    n = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = n.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
                s--;
            for (; 1 <= a && 0 <= s; a--,
            s--)
                if (o[a] !== i[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--,
                            s--,
                            0 > s || o[a] !== i[s]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= s);
                    break
                }
        }
    } finally {
        Ou = !1,
        Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? Ni(e) : ""
}
function xS(e) {
    switch (e.tag) {
    case 5:
        return Ni(e.type);
    case 16:
        return Ni("Lazy");
    case 13:
        return Ni("Suspense");
    case 19:
        return Ni("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ju(e.type, !1),
        e;
    case 11:
        return e = ju(e.type.render, !1),
        e;
    case 1:
        return e = ju(e.type, !0),
        e;
    default:
        return ""
    }
}
function Mc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case uo:
        return "Fragment";
    case lo:
        return "Portal";
    case Ac:
        return "Profiler";
    case lf:
        return "StrictMode";
    case Oc:
        return "Suspense";
    case jc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Sg:
            return (e.displayName || "Context") + ".Consumer";
        case bg:
            return (e._context.displayName || "Context") + ".Provider";
        case uf:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case cf:
            return t = e.displayName || null,
            t !== null ? t : Mc(e.type) || "Memo";
        case Ur:
            t = e._payload,
            e = e._init;
            try {
                return Mc(e(t))
            } catch {}
        }
    return null
}
function wS(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Mc(t);
    case 8:
        return t === lf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function mn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Eg(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function bS(e) {
    var t = Eg(e) ? "checked" : "value"
      , r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get
          , i = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                n = "" + a,
                i.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(a) {
                n = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ha(e) {
    e._valueTracker || (e._valueTracker = bS(e))
}
function Ng(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var r = t.getValue()
      , n = "";
    return e && (n = Eg(e) ? e.checked ? "true" : "false" : e.value),
    e = n,
    e !== r ? (t.setValue(e),
    !0) : !1
}
function $s(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Lc(e, t) {
    var r = t.checked;
    return Ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}
function fm(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue
      , n = t.checked != null ? t.checked : t.defaultChecked;
    r = mn(t.value != null ? t.value : r),
    e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Pg(e, t) {
    t = t.checked,
    t != null && sf(e, "checked", t, !1)
}
function Bc(e, t) {
    Pg(e, t);
    var r = mn(t.value)
      , n = t.type;
    if (r != null)
        n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fc(e, t.type, r) : t.hasOwnProperty("defaultValue") && Fc(e, t.type, mn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function pm(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        r || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    r = e.name,
    r !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    r !== "" && (e.name = r)
}
function Fc(e, t, r) {
    (t !== "number" || $s(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var Pi = Array.isArray;
function bo(e, t, r, n) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < r.length; o++)
            t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++)
            o = t.hasOwnProperty("$" + e[r].value),
            e[r].selected !== o && (e[r].selected = o),
            o && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + mn(r),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === r) {
                e[o].selected = !0,
                n && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function _c(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return Ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function mm(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children,
        t = t.defaultValue,
        r != null) {
            if (t != null)
                throw Error(j(92));
            if (Pi(r)) {
                if (1 < r.length)
                    throw Error(j(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""),
        r = t
    }
    e._wrapperState = {
        initialValue: mn(r)
    }
}
function Dg(e, t) {
    var r = mn(t.value)
      , n = mn(t.defaultValue);
    r != null && (r = "" + r,
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n)
}
function vm(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Tg(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function $c(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ga, Ig = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ga = Ga || document.createElement("div"),
        Ga.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ga.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ui(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ri = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , SS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ri).forEach(function(e) {
    SS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ri[t] = Ri[e]
    })
});
function Rg(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Ri.hasOwnProperty(e) && Ri[e] ? ("" + t).trim() : t + "px"
}
function kg(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0
              , o = Rg(r, t[r], n);
            r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, o) : e[r] = o
        }
}
var CS = Ie({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function zc(e, t) {
    if (t) {
        if (CS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function Wc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Uc = null;
function df(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Vc = null
  , So = null
  , Co = null;
function hm(e) {
    if (e = Sa(e)) {
        if (typeof Vc != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Ol(t),
        Vc(e.stateNode, e.type, t))
    }
}
function Ag(e) {
    So ? Co ? Co.push(e) : Co = [e] : So = e
}
function Og() {
    if (So) {
        var e = So
          , t = Co;
        if (Co = So = null,
        hm(e),
        t)
            for (e = 0; e < t.length; e++)
                hm(t[e])
    }
}
function jg(e, t) {
    return e(t)
}
function Mg() {}
var Mu = !1;
function Lg(e, t, r) {
    if (Mu)
        return e(t, r);
    Mu = !0;
    try {
        return jg(e, t, r)
    } finally {
        Mu = !1,
        (So !== null || Co !== null) && (Mg(),
        Og())
    }
}
function Vi(e, t) {
    var r = e.stateNode;
    if (r === null)
        return null;
    var n = Ol(r);
    if (n === null)
        return null;
    r = n[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (n = !n.disabled) || (e = e.type,
        n = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !n;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (r && typeof r != "function")
        throw Error(j(231, t, typeof r));
    return r
}
var Hc = !1;
if (Rr)
    try {
        var pi = {};
        Object.defineProperty(pi, "passive", {
            get: function() {
                Hc = !0
            }
        }),
        window.addEventListener("test", pi, pi),
        window.removeEventListener("test", pi, pi)
    } catch {
        Hc = !1
    }
function ES(e, t, r, n, o, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, u)
    } catch (f) {
        this.onError(f)
    }
}
var ki = !1
  , zs = null
  , Ws = !1
  , Gc = null
  , NS = {
    onError: function(e) {
        ki = !0,
        zs = e
    }
};
function PS(e, t, r, n, o, i, a, s, l) {
    ki = !1,
    zs = null,
    ES.apply(NS, arguments)
}
function DS(e, t, r, n, o, i, a, s, l) {
    if (PS.apply(this, arguments),
    ki) {
        if (ki) {
            var u = zs;
            ki = !1,
            zs = null
        } else
            throw Error(j(198));
        Ws || (Ws = !0,
        Gc = u)
    }
}
function eo(e) {
    var t = e
      , r = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (r = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? r : null
}
function Bg(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function gm(e) {
    if (eo(e) !== e)
        throw Error(j(188))
}
function TS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = eo(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t; ; ) {
        var o = r.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (n = o.return,
            n !== null) {
                r = n;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === r)
                    return gm(o),
                    e;
                if (i === n)
                    return gm(o),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (r.return !== n.return)
            r = o,
            n = i;
        else {
            for (var a = !1, s = o.child; s; ) {
                if (s === r) {
                    a = !0,
                    r = o,
                    n = i;
                    break
                }
                if (s === n) {
                    a = !0,
                    n = o,
                    r = i;
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = i.child; s; ) {
                    if (s === r) {
                        a = !0,
                        r = i,
                        n = o;
                        break
                    }
                    if (s === n) {
                        a = !0,
                        n = i,
                        r = o;
                        break
                    }
                    s = s.sibling
                }
                if (!a)
                    throw Error(j(189))
            }
        }
        if (r.alternate !== n)
            throw Error(j(190))
    }
    if (r.tag !== 3)
        throw Error(j(188));
    return r.stateNode.current === r ? e : t
}
function Fg(e) {
    return e = TS(e),
    e !== null ? _g(e) : null
}
function _g(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = _g(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var $g = kt.unstable_scheduleCallback
  , ym = kt.unstable_cancelCallback
  , IS = kt.unstable_shouldYield
  , RS = kt.unstable_requestPaint
  , Ae = kt.unstable_now
  , kS = kt.unstable_getCurrentPriorityLevel
  , ff = kt.unstable_ImmediatePriority
  , zg = kt.unstable_UserBlockingPriority
  , Us = kt.unstable_NormalPriority
  , AS = kt.unstable_LowPriority
  , Wg = kt.unstable_IdlePriority
  , Il = null
  , xr = null;
function OS(e) {
    if (xr && typeof xr.onCommitFiberRoot == "function")
        try {
            xr.onCommitFiberRoot(Il, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var rr = Math.clz32 ? Math.clz32 : LS
  , jS = Math.log
  , MS = Math.LN2;
function LS(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (jS(e) / MS | 0) | 0
}
var Ka = 64
  , qa = 4194304;
function Di(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Vs(e, t) {
    var r = e.pendingLanes;
    if (r === 0)
        return 0;
    var n = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , a = r & 268435455;
    if (a !== 0) {
        var s = a & ~o;
        s !== 0 ? n = Di(s) : (i &= a,
        i !== 0 && (n = Di(i)))
    } else
        a = r & ~o,
        a !== 0 ? n = Di(a) : i !== 0 && (n = Di(i));
    if (n === 0)
        return 0;
    if (t !== 0 && t !== n && !(t & o) && (o = n & -n,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (n & 4 && (n |= r & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= n; 0 < t; )
            r = 31 - rr(t),
            o = 1 << r,
            n |= e[r],
            t &= ~o;
    return n
}
function BS(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function FS(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var a = 31 - rr(i)
          , s = 1 << a
          , l = o[a];
        l === -1 ? (!(s & r) || s & n) && (o[a] = BS(s, t)) : l <= t && (e.expiredLanes |= s),
        i &= ~s
    }
}
function Kc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ug() {
    var e = Ka;
    return Ka <<= 1,
    !(Ka & 4194240) && (Ka = 64),
    e
}
function Lu(e) {
    for (var t = [], r = 0; 31 > r; r++)
        t.push(e);
    return t
}
function wa(e, t, r) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - rr(t),
    e[t] = r
}
function _S(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
        var o = 31 - rr(r)
          , i = 1 << o;
        t[o] = 0,
        n[o] = -1,
        e[o] = -1,
        r &= ~i
    }
}
function pf(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
        var n = 31 - rr(r)
          , o = 1 << n;
        o & t | e[n] & t && (e[n] |= t),
        r &= ~o
    }
}
var fe = 0;
function Vg(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Hg, mf, Gg, Kg, qg, qc = !1, Qa = [], rn = null, nn = null, on = null, Hi = new Map, Gi = new Map, Hr = [], $S = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function xm(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        rn = null;
        break;
    case "dragenter":
    case "dragleave":
        nn = null;
        break;
    case "mouseover":
    case "mouseout":
        on = null;
        break;
    case "pointerover":
    case "pointerout":
        Hi.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Gi.delete(t.pointerId)
    }
}
function mi(e, t, r, n, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Sa(t),
    t !== null && mf(t)),
    e) : (e.eventSystemFlags |= n,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function zS(e, t, r, n, o) {
    switch (t) {
    case "focusin":
        return rn = mi(rn, e, t, r, n, o),
        !0;
    case "dragenter":
        return nn = mi(nn, e, t, r, n, o),
        !0;
    case "mouseover":
        return on = mi(on, e, t, r, n, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Hi.set(i, mi(Hi.get(i) || null, e, t, r, n, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Gi.set(i, mi(Gi.get(i) || null, e, t, r, n, o)),
        !0
    }
    return !1
}
function Qg(e) {
    var t = On(e.target);
    if (t !== null) {
        var r = eo(t);
        if (r !== null) {
            if (t = r.tag,
            t === 13) {
                if (t = Bg(r),
                t !== null) {
                    e.blockedOn = t,
                    qg(e.priority, function() {
                        Gg(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function bs(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Qc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type,r);
            Uc = n,
            r.target.dispatchEvent(n),
            Uc = null
        } else
            return t = Sa(r),
            t !== null && mf(t),
            e.blockedOn = r,
            !1;
        t.shift()
    }
    return !0
}
function wm(e, t, r) {
    bs(e) && r.delete(t)
}
function WS() {
    qc = !1,
    rn !== null && bs(rn) && (rn = null),
    nn !== null && bs(nn) && (nn = null),
    on !== null && bs(on) && (on = null),
    Hi.forEach(wm),
    Gi.forEach(wm)
}
function vi(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    qc || (qc = !0,
    kt.unstable_scheduleCallback(kt.unstable_NormalPriority, WS)))
}
function Ki(e) {
    function t(o) {
        return vi(o, e)
    }
    if (0 < Qa.length) {
        vi(Qa[0], e);
        for (var r = 1; r < Qa.length; r++) {
            var n = Qa[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (rn !== null && vi(rn, e),
    nn !== null && vi(nn, e),
    on !== null && vi(on, e),
    Hi.forEach(t),
    Gi.forEach(t),
    r = 0; r < Hr.length; r++)
        n = Hr[r],
        n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Hr.length && (r = Hr[0],
    r.blockedOn === null); )
        Qg(r),
        r.blockedOn === null && Hr.shift()
}
var Eo = Lr.ReactCurrentBatchConfig
  , Hs = !0;
function US(e, t, r, n) {
    var o = fe
      , i = Eo.transition;
    Eo.transition = null;
    try {
        fe = 1,
        vf(e, t, r, n)
    } finally {
        fe = o,
        Eo.transition = i
    }
}
function VS(e, t, r, n) {
    var o = fe
      , i = Eo.transition;
    Eo.transition = null;
    try {
        fe = 4,
        vf(e, t, r, n)
    } finally {
        fe = o,
        Eo.transition = i
    }
}
function vf(e, t, r, n) {
    if (Hs) {
        var o = Qc(e, t, r, n);
        if (o === null)
            Gu(e, t, n, Gs, r),
            xm(e, n);
        else if (zS(o, e, t, r, n))
            n.stopPropagation();
        else if (xm(e, n),
        t & 4 && -1 < $S.indexOf(e)) {
            for (; o !== null; ) {
                var i = Sa(o);
                if (i !== null && Hg(i),
                i = Qc(e, t, r, n),
                i === null && Gu(e, t, n, Gs, r),
                i === o)
                    break;
                o = i
            }
            o !== null && n.stopPropagation()
        } else
            Gu(e, t, n, null, r)
    }
}
var Gs = null;
function Qc(e, t, r, n) {
    if (Gs = null,
    e = df(n),
    e = On(e),
    e !== null)
        if (t = eo(e),
        t === null)
            e = null;
        else if (r = t.tag,
        r === 13) {
            if (e = Bg(t),
            e !== null)
                return e;
            e = null
        } else if (r === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Gs = e,
    null
}
function Yg(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (kS()) {
        case ff:
            return 1;
        case zg:
            return 4;
        case Us:
        case AS:
            return 16;
        case Wg:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Jr = null
  , hf = null
  , Ss = null;
function Xg() {
    if (Ss)
        return Ss;
    var e, t = hf, r = t.length, n, o = "value"in Jr ? Jr.value : Jr.textContent, i = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++)
        ;
    var a = r - e;
    for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
        ;
    return Ss = o.slice(e, 1 < n ? 1 - n : void 0)
}
function Cs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ya() {
    return !0
}
function bm() {
    return !1
}
function jt(e) {
    function t(r, n, o, i, a) {
        this._reactName = r,
        this._targetInst = o,
        this.type = n,
        this.nativeEvent = i,
        this.target = a,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (r = e[s],
            this[s] = r ? r(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ya : bm,
        this.isPropagationStopped = bm,
        this
    }
    return Ie(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            this.isDefaultPrevented = Ya)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            this.isPropagationStopped = Ya)
        },
        persist: function() {},
        isPersistent: Ya
    }),
    t
}
var Zo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, gf = jt(Zo), ba = Ie({}, Zo, {
    view: 0,
    detail: 0
}), HS = jt(ba), Bu, Fu, hi, Rl = Ie({}, ba, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yf,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== hi && (hi && e.type === "mousemove" ? (Bu = e.screenX - hi.screenX,
        Fu = e.screenY - hi.screenY) : Fu = Bu = 0,
        hi = e),
        Bu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Fu
    }
}), Sm = jt(Rl), GS = Ie({}, Rl, {
    dataTransfer: 0
}), KS = jt(GS), qS = Ie({}, ba, {
    relatedTarget: 0
}), _u = jt(qS), QS = Ie({}, Zo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), YS = jt(QS), XS = Ie({}, Zo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), JS = jt(XS), ZS = Ie({}, Zo, {
    data: 0
}), Cm = jt(ZS), eC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, tC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, rC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function nC(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = rC[e]) ? !!t[e] : !1
}
function yf() {
    return nC
}
var oC = Ie({}, ba, {
    key: function(e) {
        if (e.key) {
            var t = eC[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Cs(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tC[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yf,
    charCode: function(e) {
        return e.type === "keypress" ? Cs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Cs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , iC = jt(oC)
  , aC = Ie({}, Rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Em = jt(aC)
  , sC = Ie({}, ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yf
})
  , lC = jt(sC)
  , uC = Ie({}, Zo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , cC = jt(uC)
  , dC = Ie({}, Rl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , fC = jt(dC)
  , pC = [9, 13, 27, 32]
  , xf = Rr && "CompositionEvent"in window
  , Ai = null;
Rr && "documentMode"in document && (Ai = document.documentMode);
var mC = Rr && "TextEvent"in window && !Ai
  , Jg = Rr && (!xf || Ai && 8 < Ai && 11 >= Ai)
  , Nm = " "
  , Pm = !1;
function Zg(e, t) {
    switch (e) {
    case "keyup":
        return pC.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ey(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var co = !1;
function vC(e, t) {
    switch (e) {
    case "compositionend":
        return ey(t);
    case "keypress":
        return t.which !== 32 ? null : (Pm = !0,
        Nm);
    case "textInput":
        return e = t.data,
        e === Nm && Pm ? null : e;
    default:
        return null
    }
}
function hC(e, t) {
    if (co)
        return e === "compositionend" || !xf && Zg(e, t) ? (e = Xg(),
        Ss = hf = Jr = null,
        co = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Jg && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var gC = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Dm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gC[e.type] : t === "textarea"
}
function ty(e, t, r, n) {
    Ag(n),
    t = Ks(t, "onChange"),
    0 < t.length && (r = new gf("onChange","change",null,r,n),
    e.push({
        event: r,
        listeners: t
    }))
}
var Oi = null
  , qi = null;
function yC(e) {
    fy(e, 0)
}
function kl(e) {
    var t = mo(e);
    if (Ng(t))
        return e
}
function xC(e, t) {
    if (e === "change")
        return t
}
var ry = !1;
if (Rr) {
    var $u;
    if (Rr) {
        var zu = "oninput"in document;
        if (!zu) {
            var Tm = document.createElement("div");
            Tm.setAttribute("oninput", "return;"),
            zu = typeof Tm.oninput == "function"
        }
        $u = zu
    } else
        $u = !1;
    ry = $u && (!document.documentMode || 9 < document.documentMode)
}
function Im() {
    Oi && (Oi.detachEvent("onpropertychange", ny),
    qi = Oi = null)
}
function ny(e) {
    if (e.propertyName === "value" && kl(qi)) {
        var t = [];
        ty(t, qi, e, df(e)),
        Lg(yC, t)
    }
}
function wC(e, t, r) {
    e === "focusin" ? (Im(),
    Oi = t,
    qi = r,
    Oi.attachEvent("onpropertychange", ny)) : e === "focusout" && Im()
}
function bC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return kl(qi)
}
function SC(e, t) {
    if (e === "click")
        return kl(t)
}
function CC(e, t) {
    if (e === "input" || e === "change")
        return kl(t)
}
function EC(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var or = typeof Object.is == "function" ? Object.is : EC;
function Qi(e, t) {
    if (or(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (n = 0; n < r.length; n++) {
        var o = r[n];
        if (!kc.call(t, o) || !or(e[o], t[o]))
            return !1
    }
    return !0
}
function Rm(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function km(e, t) {
    var r = Rm(e);
    e = 0;
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length,
            e <= t && n >= t)
                return {
                    node: r,
                    offset: t - e
                };
            e = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Rm(r)
    }
}
function oy(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? oy(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function iy() {
    for (var e = window, t = $s(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r)
            e = t.contentWindow;
        else
            break;
        t = $s(e.document)
    }
    return t
}
function wf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function NC(e) {
    var t = iy()
      , r = e.focusedElem
      , n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && oy(r.ownerDocument.documentElement, r)) {
        if (n !== null && wf(r)) {
            if (t = n.start,
            e = n.end,
            e === void 0 && (e = t),
            "selectionStart"in r)
                r.selectionStart = t,
                r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = r.textContent.length
                  , i = Math.min(n.start, o);
                n = n.end === void 0 ? i : Math.min(n.end, o),
                !e.extend && i > n && (o = n,
                n = i,
                i = o),
                o = km(r, i);
                var a = km(r, n);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > n ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = r; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof r.focus == "function" && r.focus(),
        r = 0; r < t.length; r++)
            e = t[r],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var PC = Rr && "documentMode"in document && 11 >= document.documentMode
  , fo = null
  , Yc = null
  , ji = null
  , Xc = !1;
function Am(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Xc || fo == null || fo !== $s(n) || (n = fo,
    "selectionStart"in n && wf(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(),
    n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }),
    ji && Qi(ji, n) || (ji = n,
    n = Ks(Yc, "onSelect"),
    0 < n.length && (t = new gf("onSelect","select",null,t,r),
    e.push({
        event: t,
        listeners: n
    }),
    t.target = fo)))
}
function Xa(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(),
    r["Webkit" + e] = "webkit" + t,
    r["Moz" + e] = "moz" + t,
    r
}
var po = {
    animationend: Xa("Animation", "AnimationEnd"),
    animationiteration: Xa("Animation", "AnimationIteration"),
    animationstart: Xa("Animation", "AnimationStart"),
    transitionend: Xa("Transition", "TransitionEnd")
}
  , Wu = {}
  , ay = {};
Rr && (ay = document.createElement("div").style,
"AnimationEvent"in window || (delete po.animationend.animation,
delete po.animationiteration.animation,
delete po.animationstart.animation),
"TransitionEvent"in window || delete po.transitionend.transition);
function Al(e) {
    if (Wu[e])
        return Wu[e];
    if (!po[e])
        return e;
    var t = po[e], r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in ay)
            return Wu[e] = t[r];
    return e
}
var sy = Al("animationend")
  , ly = Al("animationiteration")
  , uy = Al("animationstart")
  , cy = Al("transitionend")
  , dy = new Map
  , Om = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bn(e, t) {
    dy.set(e, t),
    Zn(t, [e])
}
for (var Uu = 0; Uu < Om.length; Uu++) {
    var Vu = Om[Uu]
      , DC = Vu.toLowerCase()
      , TC = Vu[0].toUpperCase() + Vu.slice(1);
    bn(DC, "on" + TC)
}
bn(sy, "onAnimationEnd");
bn(ly, "onAnimationIteration");
bn(uy, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(cy, "onTransitionEnd");
$o("onMouseEnter", ["mouseout", "mouseover"]);
$o("onMouseLeave", ["mouseout", "mouseover"]);
$o("onPointerEnter", ["pointerout", "pointerover"]);
$o("onPointerLeave", ["pointerout", "pointerover"]);
Zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , IC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));
function jm(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r,
    DS(n, t, void 0, e),
    e.currentTarget = null
}
function fy(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r]
          , o = n.event;
        n = n.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = n.length - 1; 0 <= a; a--) {
                    var s = n[a]
                      , l = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    jm(o, s, u),
                    i = l
                }
            else
                for (a = 0; a < n.length; a++) {
                    if (s = n[a],
                    l = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    jm(o, s, u),
                    i = l
                }
        }
    }
    if (Ws)
        throw e = Gc,
        Ws = !1,
        Gc = null,
        e
}
function Se(e, t) {
    var r = t[rd];
    r === void 0 && (r = t[rd] = new Set);
    var n = e + "__bubble";
    r.has(n) || (py(t, e, 2, !1),
    r.add(n))
}
function Hu(e, t, r) {
    var n = 0;
    t && (n |= 4),
    py(r, e, n, t)
}
var Ja = "_reactListening" + Math.random().toString(36).slice(2);
function Yi(e) {
    if (!e[Ja]) {
        e[Ja] = !0,
        wg.forEach(function(r) {
            r !== "selectionchange" && (IC.has(r) || Hu(r, !1, e),
            Hu(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ja] || (t[Ja] = !0,
        Hu("selectionchange", !1, t))
    }
}
function py(e, t, r, n) {
    switch (Yg(t)) {
    case 1:
        var o = US;
        break;
    case 4:
        o = VS;
        break;
    default:
        o = vf
    }
    r = o.bind(null, t, r, e),
    o = void 0,
    !Hc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    n ? o !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
        passive: o
    }) : e.addEventListener(t, r, !1)
}
function Gu(e, t, r, n, o) {
    var i = n;
    if (!(t & 1) && !(t & 2) && n !== null)
        e: for (; ; ) {
            if (n === null)
                return;
            var a = n.tag;
            if (a === 3 || a === 4) {
                var s = n.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o)
                    break;
                if (a === 4)
                    for (a = n.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; s !== null; ) {
                    if (a = On(s),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        n = i = a;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            n = n.return
        }
    Lg(function() {
        var u = i
          , f = df(r)
          , d = [];
        e: {
            var c = dy.get(e);
            if (c !== void 0) {
                var p = gf
                  , g = e;
                switch (e) {
                case "keypress":
                    if (Cs(r) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = iC;
                    break;
                case "focusin":
                    g = "focus",
                    p = _u;
                    break;
                case "focusout":
                    g = "blur",
                    p = _u;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = _u;
                    break;
                case "click":
                    if (r.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = Sm;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = KS;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = lC;
                    break;
                case sy:
                case ly:
                case uy:
                    p = YS;
                    break;
                case cy:
                    p = cC;
                    break;
                case "scroll":
                    p = HS;
                    break;
                case "wheel":
                    p = fC;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = JS;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = Em
                }
                var h = (t & 4) !== 0
                  , w = !h && e === "scroll"
                  , y = h ? c !== null ? c + "Capture" : null : c;
                h = [];
                for (var v = u, b; v !== null; ) {
                    b = v;
                    var S = b.stateNode;
                    if (b.tag === 5 && S !== null && (b = S,
                    y !== null && (S = Vi(v, y),
                    S != null && h.push(Xi(v, S, b)))),
                    w)
                        break;
                    v = v.return
                }
                0 < h.length && (c = new p(c,g,null,r,f),
                d.push({
                    event: c,
                    listeners: h
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                c && r !== Uc && (g = r.relatedTarget || r.fromElement) && (On(g) || g[kr]))
                    break e;
                if ((p || c) && (c = f.window === f ? f : (c = f.ownerDocument) ? c.defaultView || c.parentWindow : window,
                p ? (g = r.relatedTarget || r.toElement,
                p = u,
                g = g ? On(g) : null,
                g !== null && (w = eo(g),
                g !== w || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null,
                g = u),
                p !== g)) {
                    if (h = Sm,
                    S = "onMouseLeave",
                    y = "onMouseEnter",
                    v = "mouse",
                    (e === "pointerout" || e === "pointerover") && (h = Em,
                    S = "onPointerLeave",
                    y = "onPointerEnter",
                    v = "pointer"),
                    w = p == null ? c : mo(p),
                    b = g == null ? c : mo(g),
                    c = new h(S,v + "leave",p,r,f),
                    c.target = w,
                    c.relatedTarget = b,
                    S = null,
                    On(f) === u && (h = new h(y,v + "enter",g,r,f),
                    h.target = b,
                    h.relatedTarget = w,
                    S = h),
                    w = S,
                    p && g)
                        t: {
                            for (h = p,
                            y = g,
                            v = 0,
                            b = h; b; b = no(b))
                                v++;
                            for (b = 0,
                            S = y; S; S = no(S))
                                b++;
                            for (; 0 < v - b; )
                                h = no(h),
                                v--;
                            for (; 0 < b - v; )
                                y = no(y),
                                b--;
                            for (; v--; ) {
                                if (h === y || y !== null && h === y.alternate)
                                    break t;
                                h = no(h),
                                y = no(y)
                            }
                            h = null
                        }
                    else
                        h = null;
                    p !== null && Mm(d, c, p, h, !1),
                    g !== null && w !== null && Mm(d, w, g, h, !0)
                }
            }
            e: {
                if (c = u ? mo(u) : window,
                p = c.nodeName && c.nodeName.toLowerCase(),
                p === "select" || p === "input" && c.type === "file")
                    var C = xC;
                else if (Dm(c))
                    if (ry)
                        C = CC;
                    else {
                        C = bC;
                        var E = wC
                    }
                else
                    (p = c.nodeName) && p.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (C = SC);
                if (C && (C = C(e, u))) {
                    ty(d, C, r, f);
                    break e
                }
                E && E(e, c, u),
                e === "focusout" && (E = c._wrapperState) && E.controlled && c.type === "number" && Fc(c, "number", c.value)
            }
            switch (E = u ? mo(u) : window,
            e) {
            case "focusin":
                (Dm(E) || E.contentEditable === "true") && (fo = E,
                Yc = u,
                ji = null);
                break;
            case "focusout":
                ji = Yc = fo = null;
                break;
            case "mousedown":
                Xc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Xc = !1,
                Am(d, r, f);
                break;
            case "selectionchange":
                if (PC)
                    break;
            case "keydown":
            case "keyup":
                Am(d, r, f)
            }
            var N;
            if (xf)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var D = "onCompositionStart";
                        break e;
                    case "compositionend":
                        D = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        D = "onCompositionUpdate";
                        break e
                    }
                    D = void 0
                }
            else
                co ? Zg(e, r) && (D = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (D = "onCompositionStart");
            D && (Jg && r.locale !== "ko" && (co || D !== "onCompositionStart" ? D === "onCompositionEnd" && co && (N = Xg()) : (Jr = f,
            hf = "value"in Jr ? Jr.value : Jr.textContent,
            co = !0)),
            E = Ks(u, D),
            0 < E.length && (D = new Cm(D,e,null,r,f),
            d.push({
                event: D,
                listeners: E
            }),
            N ? D.data = N : (N = ey(r),
            N !== null && (D.data = N)))),
            (N = mC ? vC(e, r) : hC(e, r)) && (u = Ks(u, "onBeforeInput"),
            0 < u.length && (f = new Cm("onBeforeInput","beforeinput",null,r,f),
            d.push({
                event: f,
                listeners: u
            }),
            f.data = N))
        }
        fy(d, t)
    })
}
function Xi(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}
function Ks(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Vi(e, r),
        i != null && n.unshift(Xi(e, i, o)),
        i = Vi(e, t),
        i != null && n.push(Xi(e, i, o))),
        e = e.return
    }
    return n
}
function no(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Mm(e, t, r, n, o) {
    for (var i = t._reactName, a = []; r !== null && r !== n; ) {
        var s = r
          , l = s.alternate
          , u = s.stateNode;
        if (l !== null && l === n)
            break;
        s.tag === 5 && u !== null && (s = u,
        o ? (l = Vi(r, i),
        l != null && a.unshift(Xi(r, l, s))) : o || (l = Vi(r, i),
        l != null && a.push(Xi(r, l, s)))),
        r = r.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var RC = /\r\n?/g
  , kC = /\u0000|\uFFFD/g;
function Lm(e) {
    return (typeof e == "string" ? e : "" + e).replace(RC, `
`).replace(kC, "")
}
function Za(e, t, r) {
    if (t = Lm(t),
    Lm(e) !== t && r)
        throw Error(j(425))
}
function qs() {}
var Jc = null
  , Zc = null;
function ed(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var td = typeof setTimeout == "function" ? setTimeout : void 0
  , AC = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Bm = typeof Promise == "function" ? Promise : void 0
  , OC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bm < "u" ? function(e) {
    return Bm.resolve(null).then(e).catch(jC)
}
: td;
function jC(e) {
    setTimeout(function() {
        throw e
    })
}
function Ku(e, t) {
    var r = t
      , n = 0;
    do {
        var o = r.nextSibling;
        if (e.removeChild(r),
        o && o.nodeType === 8)
            if (r = o.data,
            r === "/$") {
                if (n === 0) {
                    e.removeChild(o),
                    Ki(t);
                    return
                }
                n--
            } else
                r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = o
    } while (r);
    Ki(t)
}
function an(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Fm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ei = Math.random().toString(36).slice(2)
  , gr = "__reactFiber$" + ei
  , Ji = "__reactProps$" + ei
  , kr = "__reactContainer$" + ei
  , rd = "__reactEvents$" + ei
  , MC = "__reactListeners$" + ei
  , LC = "__reactHandles$" + ei;
function On(e) {
    var t = e[gr];
    if (t)
        return t;
    for (var r = e.parentNode; r; ) {
        if (t = r[kr] || r[gr]) {
            if (r = t.alternate,
            t.child !== null || r !== null && r.child !== null)
                for (e = Fm(e); e !== null; ) {
                    if (r = e[gr])
                        return r;
                    e = Fm(e)
                }
            return t
        }
        e = r,
        r = e.parentNode
    }
    return null
}
function Sa(e) {
    return e = e[gr] || e[kr],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function mo(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Ol(e) {
    return e[Ji] || null
}
var nd = []
  , vo = -1;
function Sn(e) {
    return {
        current: e
    }
}
function Ce(e) {
    0 > vo || (e.current = nd[vo],
    nd[vo] = null,
    vo--)
}
function xe(e, t) {
    vo++,
    nd[vo] = e.current,
    e.current = t
}
var vn = {}
  , ot = Sn(vn)
  , yt = Sn(!1)
  , Un = vn;
function zo(e, t) {
    var r = e.type.contextTypes;
    if (!r)
        return vn;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in r)
        o[i] = t[i];
    return n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function xt(e) {
    return e = e.childContextTypes,
    e != null
}
function Qs() {
    Ce(yt),
    Ce(ot)
}
function _m(e, t, r) {
    if (ot.current !== vn)
        throw Error(j(168));
    xe(ot, t),
    xe(yt, r)
}
function my(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes,
    typeof n.getChildContext != "function")
        return r;
    n = n.getChildContext();
    for (var o in n)
        if (!(o in t))
            throw Error(j(108, wS(e) || "Unknown", o));
    return Ie({}, r, n)
}
function Ys(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn,
    Un = ot.current,
    xe(ot, e),
    xe(yt, yt.current),
    !0
}
function $m(e, t, r) {
    var n = e.stateNode;
    if (!n)
        throw Error(j(169));
    r ? (e = my(e, t, Un),
    n.__reactInternalMemoizedMergedChildContext = e,
    Ce(yt),
    Ce(ot),
    xe(ot, e)) : Ce(yt),
    xe(yt, r)
}
var Pr = null
  , jl = !1
  , qu = !1;
function vy(e) {
    Pr === null ? Pr = [e] : Pr.push(e)
}
function BC(e) {
    jl = !0,
    vy(e)
}
function Cn() {
    if (!qu && Pr !== null) {
        qu = !0;
        var e = 0
          , t = fe;
        try {
            var r = Pr;
            for (fe = 1; e < r.length; e++) {
                var n = r[e];
                do
                    n = n(!0);
                while (n !== null)
            }
            Pr = null,
            jl = !1
        } catch (o) {
            throw Pr !== null && (Pr = Pr.slice(e + 1)),
            $g(ff, Cn),
            o
        } finally {
            fe = t,
            qu = !1
        }
    }
    return null
}
var ho = []
  , go = 0
  , Xs = null
  , Js = 0
  , Ft = []
  , _t = 0
  , Vn = null
  , Dr = 1
  , Tr = "";
function In(e, t) {
    ho[go++] = Js,
    ho[go++] = Xs,
    Xs = e,
    Js = t
}
function hy(e, t, r) {
    Ft[_t++] = Dr,
    Ft[_t++] = Tr,
    Ft[_t++] = Vn,
    Vn = e;
    var n = Dr;
    e = Tr;
    var o = 32 - rr(n) - 1;
    n &= ~(1 << o),
    r += 1;
    var i = 32 - rr(t) + o;
    if (30 < i) {
        var a = o - o % 5;
        i = (n & (1 << a) - 1).toString(32),
        n >>= a,
        o -= a,
        Dr = 1 << 32 - rr(t) + o | r << o | n,
        Tr = i + e
    } else
        Dr = 1 << i | r << o | n,
        Tr = e
}
function bf(e) {
    e.return !== null && (In(e, 1),
    hy(e, 1, 0))
}
function Sf(e) {
    for (; e === Xs; )
        Xs = ho[--go],
        ho[go] = null,
        Js = ho[--go],
        ho[go] = null;
    for (; e === Vn; )
        Vn = Ft[--_t],
        Ft[_t] = null,
        Tr = Ft[--_t],
        Ft[_t] = null,
        Dr = Ft[--_t],
        Ft[_t] = null
}
var Dt = null
  , Nt = null
  , Ne = !1
  , er = null;
function gy(e, t) {
    var r = $t(5, null, null, 0);
    r.elementType = "DELETED",
    r.stateNode = t,
    r.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [r],
    e.flags |= 16) : t.push(r)
}
function zm(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Dt = e,
        Nt = an(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Dt = e,
        Nt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (r = Vn !== null ? {
            id: Dr,
            overflow: Tr
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
        },
        r = $t(18, null, null, 0),
        r.stateNode = t,
        r.return = e,
        e.child = r,
        Dt = e,
        Nt = null,
        !0) : !1;
    default:
        return !1
    }
}
function od(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function id(e) {
    if (Ne) {
        var t = Nt;
        if (t) {
            var r = t;
            if (!zm(e, t)) {
                if (od(e))
                    throw Error(j(418));
                t = an(r.nextSibling);
                var n = Dt;
                t && zm(e, t) ? gy(n, r) : (e.flags = e.flags & -4097 | 2,
                Ne = !1,
                Dt = e)
            }
        } else {
            if (od(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            Ne = !1,
            Dt = e
        }
    }
}
function Wm(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Dt = e
}
function es(e) {
    if (e !== Dt)
        return !1;
    if (!Ne)
        return Wm(e),
        Ne = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ed(e.type, e.memoizedProps)),
    t && (t = Nt)) {
        if (od(e))
            throw yy(),
            Error(j(418));
        for (; t; )
            gy(e, t),
            t = an(t.nextSibling)
    }
    if (Wm(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            Nt = an(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            Nt = null
        }
    } else
        Nt = Dt ? an(e.stateNode.nextSibling) : null;
    return !0
}
function yy() {
    for (var e = Nt; e; )
        e = an(e.nextSibling)
}
function Wo() {
    Nt = Dt = null,
    Ne = !1
}
function Cf(e) {
    er === null ? er = [e] : er.push(e)
}
var FC = Lr.ReactCurrentBatchConfig;
function gi(e, t, r) {
    if (e = r.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner,
            r) {
                if (r.tag !== 1)
                    throw Error(j(309));
                var n = r.stateNode
            }
            if (!n)
                throw Error(j(147, e));
            var o = n
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var s = o.refs;
                a === null ? delete s[i] : s[i] = a
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!r._owner)
            throw Error(j(290, e))
    }
    return e
}
function ts(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Um(e) {
    var t = e._init;
    return t(e._payload)
}
function xy(e) {
    function t(y, v) {
        if (e) {
            var b = y.deletions;
            b === null ? (y.deletions = [v],
            y.flags |= 16) : b.push(v)
        }
    }
    function r(y, v) {
        if (!e)
            return null;
        for (; v !== null; )
            t(y, v),
            v = v.sibling;
        return null
    }
    function n(y, v) {
        for (y = new Map; v !== null; )
            v.key !== null ? y.set(v.key, v) : y.set(v.index, v),
            v = v.sibling;
        return y
    }
    function o(y, v) {
        return y = cn(y, v),
        y.index = 0,
        y.sibling = null,
        y
    }
    function i(y, v, b) {
        return y.index = b,
        e ? (b = y.alternate,
        b !== null ? (b = b.index,
        b < v ? (y.flags |= 2,
        v) : b) : (y.flags |= 2,
        v)) : (y.flags |= 1048576,
        v)
    }
    function a(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function s(y, v, b, S) {
        return v === null || v.tag !== 6 ? (v = tc(b, y.mode, S),
        v.return = y,
        v) : (v = o(v, b),
        v.return = y,
        v)
    }
    function l(y, v, b, S) {
        var C = b.type;
        return C === uo ? f(y, v, b.props.children, S, b.key) : v !== null && (v.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ur && Um(C) === v.type) ? (S = o(v, b.props),
        S.ref = gi(y, v, b),
        S.return = y,
        S) : (S = Rs(b.type, b.key, b.props, null, y.mode, S),
        S.ref = gi(y, v, b),
        S.return = y,
        S)
    }
    function u(y, v, b, S) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== b.containerInfo || v.stateNode.implementation !== b.implementation ? (v = rc(b, y.mode, S),
        v.return = y,
        v) : (v = o(v, b.children || []),
        v.return = y,
        v)
    }
    function f(y, v, b, S, C) {
        return v === null || v.tag !== 7 ? (v = zn(b, y.mode, S, C),
        v.return = y,
        v) : (v = o(v, b),
        v.return = y,
        v)
    }
    function d(y, v, b) {
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return v = tc("" + v, y.mode, b),
            v.return = y,
            v;
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Va:
                return b = Rs(v.type, v.key, v.props, null, y.mode, b),
                b.ref = gi(y, null, v),
                b.return = y,
                b;
            case lo:
                return v = rc(v, y.mode, b),
                v.return = y,
                v;
            case Ur:
                var S = v._init;
                return d(y, S(v._payload), b)
            }
            if (Pi(v) || fi(v))
                return v = zn(v, y.mode, b, null),
                v.return = y,
                v;
            ts(y, v)
        }
        return null
    }
    function c(y, v, b, S) {
        var C = v !== null ? v.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return C !== null ? null : s(y, v, "" + b, S);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case Va:
                return b.key === C ? l(y, v, b, S) : null;
            case lo:
                return b.key === C ? u(y, v, b, S) : null;
            case Ur:
                return C = b._init,
                c(y, v, C(b._payload), S)
            }
            if (Pi(b) || fi(b))
                return C !== null ? null : f(y, v, b, S, null);
            ts(y, b)
        }
        return null
    }
    function p(y, v, b, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return y = y.get(b) || null,
            s(v, y, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Va:
                return y = y.get(S.key === null ? b : S.key) || null,
                l(v, y, S, C);
            case lo:
                return y = y.get(S.key === null ? b : S.key) || null,
                u(v, y, S, C);
            case Ur:
                var E = S._init;
                return p(y, v, b, E(S._payload), C)
            }
            if (Pi(S) || fi(S))
                return y = y.get(b) || null,
                f(v, y, S, C, null);
            ts(v, S)
        }
        return null
    }
    function g(y, v, b, S) {
        for (var C = null, E = null, N = v, D = v = 0, I = null; N !== null && D < b.length; D++) {
            N.index > D ? (I = N,
            N = null) : I = N.sibling;
            var k = c(y, N, b[D], S);
            if (k === null) {
                N === null && (N = I);
                break
            }
            e && N && k.alternate === null && t(y, N),
            v = i(k, v, D),
            E === null ? C = k : E.sibling = k,
            E = k,
            N = I
        }
        if (D === b.length)
            return r(y, N),
            Ne && In(y, D),
            C;
        if (N === null) {
            for (; D < b.length; D++)
                N = d(y, b[D], S),
                N !== null && (v = i(N, v, D),
                E === null ? C = N : E.sibling = N,
                E = N);
            return Ne && In(y, D),
            C
        }
        for (N = n(y, N); D < b.length; D++)
            I = p(N, y, D, b[D], S),
            I !== null && (e && I.alternate !== null && N.delete(I.key === null ? D : I.key),
            v = i(I, v, D),
            E === null ? C = I : E.sibling = I,
            E = I);
        return e && N.forEach(function(M) {
            return t(y, M)
        }),
        Ne && In(y, D),
        C
    }
    function h(y, v, b, S) {
        var C = fi(b);
        if (typeof C != "function")
            throw Error(j(150));
        if (b = C.call(b),
        b == null)
            throw Error(j(151));
        for (var E = C = null, N = v, D = v = 0, I = null, k = b.next(); N !== null && !k.done; D++,
        k = b.next()) {
            N.index > D ? (I = N,
            N = null) : I = N.sibling;
            var M = c(y, N, k.value, S);
            if (M === null) {
                N === null && (N = I);
                break
            }
            e && N && M.alternate === null && t(y, N),
            v = i(M, v, D),
            E === null ? C = M : E.sibling = M,
            E = M,
            N = I
        }
        if (k.done)
            return r(y, N),
            Ne && In(y, D),
            C;
        if (N === null) {
            for (; !k.done; D++,
            k = b.next())
                k = d(y, k.value, S),
                k !== null && (v = i(k, v, D),
                E === null ? C = k : E.sibling = k,
                E = k);
            return Ne && In(y, D),
            C
        }
        for (N = n(y, N); !k.done; D++,
        k = b.next())
            k = p(N, y, D, k.value, S),
            k !== null && (e && k.alternate !== null && N.delete(k.key === null ? D : k.key),
            v = i(k, v, D),
            E === null ? C = k : E.sibling = k,
            E = k);
        return e && N.forEach(function(B) {
            return t(y, B)
        }),
        Ne && In(y, D),
        C
    }
    function w(y, v, b, S) {
        if (typeof b == "object" && b !== null && b.type === uo && b.key === null && (b = b.props.children),
        typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case Va:
                e: {
                    for (var C = b.key, E = v; E !== null; ) {
                        if (E.key === C) {
                            if (C = b.type,
                            C === uo) {
                                if (E.tag === 7) {
                                    r(y, E.sibling),
                                    v = o(E, b.props.children),
                                    v.return = y,
                                    y = v;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ur && Um(C) === E.type) {
                                r(y, E.sibling),
                                v = o(E, b.props),
                                v.ref = gi(y, E, b),
                                v.return = y,
                                y = v;
                                break e
                            }
                            r(y, E);
                            break
                        } else
                            t(y, E);
                        E = E.sibling
                    }
                    b.type === uo ? (v = zn(b.props.children, y.mode, S, b.key),
                    v.return = y,
                    y = v) : (S = Rs(b.type, b.key, b.props, null, y.mode, S),
                    S.ref = gi(y, v, b),
                    S.return = y,
                    y = S)
                }
                return a(y);
            case lo:
                e: {
                    for (E = b.key; v !== null; ) {
                        if (v.key === E)
                            if (v.tag === 4 && v.stateNode.containerInfo === b.containerInfo && v.stateNode.implementation === b.implementation) {
                                r(y, v.sibling),
                                v = o(v, b.children || []),
                                v.return = y,
                                y = v;
                                break e
                            } else {
                                r(y, v);
                                break
                            }
                        else
                            t(y, v);
                        v = v.sibling
                    }
                    v = rc(b, y.mode, S),
                    v.return = y,
                    y = v
                }
                return a(y);
            case Ur:
                return E = b._init,
                w(y, v, E(b._payload), S)
            }
            if (Pi(b))
                return g(y, v, b, S);
            if (fi(b))
                return h(y, v, b, S);
            ts(y, b)
        }
        return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b,
        v !== null && v.tag === 6 ? (r(y, v.sibling),
        v = o(v, b),
        v.return = y,
        y = v) : (r(y, v),
        v = tc(b, y.mode, S),
        v.return = y,
        y = v),
        a(y)) : r(y, v)
    }
    return w
}
var Uo = xy(!0)
  , wy = xy(!1)
  , Zs = Sn(null)
  , el = null
  , yo = null
  , Ef = null;
function Nf() {
    Ef = yo = el = null
}
function Pf(e) {
    var t = Zs.current;
    Ce(Zs),
    e._currentValue = t
}
function ad(e, t, r) {
    for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
            break;
        e = e.return
    }
}
function No(e, t) {
    el = e,
    Ef = yo = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (gt = !0),
    e.firstContext = null)
}
function Vt(e) {
    var t = e._currentValue;
    if (Ef !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        yo === null) {
            if (el === null)
                throw Error(j(308));
            yo = e,
            el.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            yo = yo.next = e;
    return t
}
var jn = null;
function Df(e) {
    jn === null ? jn = [e] : jn.push(e)
}
function by(e, t, r, n) {
    var o = t.interleaved;
    return o === null ? (r.next = r,
    Df(t)) : (r.next = o.next,
    o.next = r),
    t.interleaved = r,
    Ar(e, n)
}
function Ar(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t),
    r = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        r = e.alternate,
        r !== null && (r.childLanes |= t),
        r = e,
        e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var Vr = !1;
function Tf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Sy(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ir(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function sn(e, t, r) {
    var n = e.updateQueue;
    if (n === null)
        return null;
    if (n = n.shared,
    le & 2) {
        var o = n.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        n.pending = t,
        Ar(e, r)
    }
    return o = n.interleaved,
    o === null ? (t.next = t,
    Df(n)) : (t.next = o.next,
    o.next = t),
    n.interleaved = t,
    Ar(e, r)
}
function Es(e, t, r) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        pf(e, r)
    }
}
function Vm(e, t) {
    var r = e.updateQueue
      , n = e.alternate;
    if (n !== null && (n = n.updateQueue,
    r === n)) {
        var o = null
          , i = null;
        if (r = r.firstBaseUpdate,
        r !== null) {
            do {
                var a = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? o = i = a : i = i.next = a,
                r = r.next
            } while (r !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: n.shared,
            effects: n.effects
        },
        e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate,
    e === null ? r.firstBaseUpdate = t : e.next = t,
    r.lastBaseUpdate = t
}
function tl(e, t, r, n) {
    var o = e.updateQueue;
    Vr = !1;
    var i = o.firstBaseUpdate
      , a = o.lastBaseUpdate
      , s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var l = s
          , u = l.next;
        l.next = null,
        a === null ? i = u : a.next = u,
        a = l;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        s = f.lastBaseUpdate,
        s !== a && (s === null ? f.firstBaseUpdate = u : s.next = u,
        f.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        a = 0,
        f = u = l = null,
        s = i;
        do {
            var c = s.lane
              , p = s.eventTime;
            if ((n & c) === c) {
                f !== null && (f = f.next = {
                    eventTime: p,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var g = e
                      , h = s;
                    switch (c = t,
                    p = r,
                    h.tag) {
                    case 1:
                        if (g = h.payload,
                        typeof g == "function") {
                            d = g.call(p, d, c);
                            break e
                        }
                        d = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = h.payload,
                        c = typeof g == "function" ? g.call(p, d, c) : g,
                        c == null)
                            break e;
                        d = Ie({}, d, c);
                        break e;
                    case 2:
                        Vr = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                c = o.effects,
                c === null ? o.effects = [s] : c.push(s))
            } else
                p = {
                    eventTime: p,
                    lane: c,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                f === null ? (u = f = p,
                l = d) : f = f.next = p,
                a |= c;
            if (s = s.next,
            s === null) {
                if (s = o.shared.pending,
                s === null)
                    break;
                c = s,
                s = c.next,
                c.next = null,
                o.lastBaseUpdate = c,
                o.shared.pending = null
            }
        } while (!0);
        if (f === null && (l = d),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = f,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                a |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Gn |= a,
        e.lanes = a,
        e.memoizedState = d
    }
}
function Hm(e, t, r) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t]
              , o = n.callback;
            if (o !== null) {
                if (n.callback = null,
                n = r,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(n)
            }
        }
}
var Ca = {}
  , wr = Sn(Ca)
  , Zi = Sn(Ca)
  , ea = Sn(Ca);
function Mn(e) {
    if (e === Ca)
        throw Error(j(174));
    return e
}
function If(e, t) {
    switch (xe(ea, t),
    xe(Zi, e),
    xe(wr, Ca),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $c(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = $c(t, e)
    }
    Ce(wr),
    xe(wr, t)
}
function Vo() {
    Ce(wr),
    Ce(Zi),
    Ce(ea)
}
function Cy(e) {
    Mn(ea.current);
    var t = Mn(wr.current)
      , r = $c(t, e.type);
    t !== r && (xe(Zi, e),
    xe(wr, r))
}
function Rf(e) {
    Zi.current === e && (Ce(wr),
    Ce(Zi))
}
var De = Sn(0);
function rl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated,
            r === null || r.data === "$?" || r.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Qu = [];
function kf() {
    for (var e = 0; e < Qu.length; e++)
        Qu[e]._workInProgressVersionPrimary = null;
    Qu.length = 0
}
var Ns = Lr.ReactCurrentDispatcher
  , Yu = Lr.ReactCurrentBatchConfig
  , Hn = 0
  , Te = null
  , Le = null
  , $e = null
  , nl = !1
  , Mi = !1
  , ta = 0
  , _C = 0;
function et() {
    throw Error(j(321))
}
function Af(e, t) {
    if (t === null)
        return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!or(e[r], t[r]))
            return !1;
    return !0
}
function Of(e, t, r, n, o, i) {
    if (Hn = i,
    Te = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ns.current = e === null || e.memoizedState === null ? UC : VC,
    e = r(n, o),
    Mi) {
        i = 0;
        do {
            if (Mi = !1,
            ta = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            $e = Le = null,
            t.updateQueue = null,
            Ns.current = HC,
            e = r(n, o)
        } while (Mi)
    }
    if (Ns.current = ol,
    t = Le !== null && Le.next !== null,
    Hn = 0,
    $e = Le = Te = null,
    nl = !1,
    t)
        throw Error(j(300));
    return e
}
function jf() {
    var e = ta !== 0;
    return ta = 0,
    e
}
function pr() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return $e === null ? Te.memoizedState = $e = e : $e = $e.next = e,
    $e
}
function Ht() {
    if (Le === null) {
        var e = Te.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Le.next;
    var t = $e === null ? Te.memoizedState : $e.next;
    if (t !== null)
        $e = t,
        Le = e;
    else {
        if (e === null)
            throw Error(j(310));
        Le = e,
        e = {
            memoizedState: Le.memoizedState,
            baseState: Le.baseState,
            baseQueue: Le.baseQueue,
            queue: Le.queue,
            next: null
        },
        $e === null ? Te.memoizedState = $e = e : $e = $e.next = e
    }
    return $e
}
function ra(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Xu(e) {
    var t = Ht()
      , r = t.queue;
    if (r === null)
        throw Error(j(311));
    r.lastRenderedReducer = e;
    var n = Le
      , o = n.baseQueue
      , i = r.pending;
    if (i !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = i.next,
            i.next = a
        }
        n.baseQueue = o = i,
        r.pending = null
    }
    if (o !== null) {
        i = o.next,
        n = n.baseState;
        var s = a = null
          , l = null
          , u = i;
        do {
            var f = u.lane;
            if ((Hn & f) === f)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                n = u.hasEagerState ? u.eagerState : e(n, u.action);
            else {
                var d = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (s = l = d,
                a = n) : l = l.next = d,
                Te.lanes |= f,
                Gn |= f
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? a = n : l.next = s,
        or(n, t.memoizedState) || (gt = !0),
        t.memoizedState = n,
        t.baseState = a,
        t.baseQueue = l,
        r.lastRenderedState = n
    }
    if (e = r.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            Te.lanes |= i,
            Gn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}
function Ju(e) {
    var t = Ht()
      , r = t.queue;
    if (r === null)
        throw Error(j(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch
      , o = r.pending
      , i = t.memoizedState;
    if (o !== null) {
        r.pending = null;
        var a = o = o.next;
        do
            i = e(i, a.action),
            a = a.next;
        while (a !== o);
        or(i, t.memoizedState) || (gt = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        r.lastRenderedState = i
    }
    return [i, n]
}
function Ey() {}
function Ny(e, t) {
    var r = Te
      , n = Ht()
      , o = t()
      , i = !or(n.memoizedState, o);
    if (i && (n.memoizedState = o,
    gt = !0),
    n = n.queue,
    Mf(Ty.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || $e !== null && $e.memoizedState.tag & 1) {
        if (r.flags |= 2048,
        na(9, Dy.bind(null, r, n, o, t), void 0, null),
        ze === null)
            throw Error(j(349));
        Hn & 30 || Py(r, t, o)
    }
    return o
}
function Py(e, t, r) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: r
    },
    t = Te.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Te.updateQueue = t,
    t.stores = [e]) : (r = t.stores,
    r === null ? t.stores = [e] : r.push(e))
}
function Dy(e, t, r, n) {
    t.value = r,
    t.getSnapshot = n,
    Iy(t) && Ry(e)
}
function Ty(e, t, r) {
    return r(function() {
        Iy(t) && Ry(e)
    })
}
function Iy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !or(e, r)
    } catch {
        return !0
    }
}
function Ry(e) {
    var t = Ar(e, 1);
    t !== null && nr(t, e, 1, -1)
}
function Gm(e) {
    var t = pr();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ra,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = WC.bind(null, Te, e),
    [t.memoizedState, e]
}
function na(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    },
    t = Te.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Te.updateQueue = t,
    t.lastEffect = e.next = e) : (r = t.lastEffect,
    r === null ? t.lastEffect = e.next = e : (n = r.next,
    r.next = e,
    e.next = n,
    t.lastEffect = e)),
    e
}
function ky() {
    return Ht().memoizedState
}
function Ps(e, t, r, n) {
    var o = pr();
    Te.flags |= e,
    o.memoizedState = na(1 | t, r, void 0, n === void 0 ? null : n)
}
function Ml(e, t, r, n) {
    var o = Ht();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (Le !== null) {
        var a = Le.memoizedState;
        if (i = a.destroy,
        n !== null && Af(n, a.deps)) {
            o.memoizedState = na(t, r, i, n);
            return
        }
    }
    Te.flags |= e,
    o.memoizedState = na(1 | t, r, i, n)
}
function Km(e, t) {
    return Ps(8390656, 8, e, t)
}
function Mf(e, t) {
    return Ml(2048, 8, e, t)
}
function Ay(e, t) {
    return Ml(4, 2, e, t)
}
function Oy(e, t) {
    return Ml(4, 4, e, t)
}
function jy(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function My(e, t, r) {
    return r = r != null ? r.concat([e]) : null,
    Ml(4, 4, jy.bind(null, t, e), r)
}
function Lf() {}
function Ly(e, t) {
    var r = Ht();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Af(t, n[1]) ? n[0] : (r.memoizedState = [e, t],
    e)
}
function By(e, t) {
    var r = Ht();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Af(t, n[1]) ? n[0] : (e = e(),
    r.memoizedState = [e, t],
    e)
}
function Fy(e, t, r) {
    return Hn & 21 ? (or(r, t) || (r = Ug(),
    Te.lanes |= r,
    Gn |= r,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    gt = !0),
    e.memoizedState = r)
}
function $C(e, t) {
    var r = fe;
    fe = r !== 0 && 4 > r ? r : 4,
    e(!0);
    var n = Yu.transition;
    Yu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        fe = r,
        Yu.transition = n
    }
}
function _y() {
    return Ht().memoizedState
}
function zC(e, t, r) {
    var n = un(e);
    if (r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    $y(e))
        zy(t, r);
    else if (r = by(e, t, r, n),
    r !== null) {
        var o = ft();
        nr(r, e, n, o),
        Wy(r, t, n)
    }
}
function WC(e, t, r) {
    var n = un(e)
      , o = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($y(e))
        zy(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var a = t.lastRenderedState
                  , s = i(a, r);
                if (o.hasEagerState = !0,
                o.eagerState = s,
                or(s, a)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Df(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        r = by(e, t, o, n),
        r !== null && (o = ft(),
        nr(r, e, n, o),
        Wy(r, t, n))
    }
}
function $y(e) {
    var t = e.alternate;
    return e === Te || t !== null && t === Te
}
function zy(e, t) {
    Mi = nl = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next,
    r.next = t),
    e.pending = t
}
function Wy(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes,
        r |= n,
        t.lanes = r,
        pf(e, r)
    }
}
var ol = {
    readContext: Vt,
    useCallback: et,
    useContext: et,
    useEffect: et,
    useImperativeHandle: et,
    useInsertionEffect: et,
    useLayoutEffect: et,
    useMemo: et,
    useReducer: et,
    useRef: et,
    useState: et,
    useDebugValue: et,
    useDeferredValue: et,
    useTransition: et,
    useMutableSource: et,
    useSyncExternalStore: et,
    useId: et,
    unstable_isNewReconciler: !1
}
  , UC = {
    readContext: Vt,
    useCallback: function(e, t) {
        return pr().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Vt,
    useEffect: Km,
    useImperativeHandle: function(e, t, r) {
        return r = r != null ? r.concat([e]) : null,
        Ps(4194308, 4, jy.bind(null, t, e), r)
    },
    useLayoutEffect: function(e, t) {
        return Ps(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ps(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var r = pr();
        return t = t === void 0 ? null : t,
        e = e(),
        r.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, r) {
        var n = pr();
        return t = r !== void 0 ? r(t) : t,
        n.memoizedState = n.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        n.queue = e,
        e = e.dispatch = zC.bind(null, Te, e),
        [n.memoizedState, e]
    },
    useRef: function(e) {
        var t = pr();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Gm,
    useDebugValue: Lf,
    useDeferredValue: function(e) {
        return pr().memoizedState = e
    },
    useTransition: function() {
        var e = Gm(!1)
          , t = e[0];
        return e = $C.bind(null, e[1]),
        pr().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, r) {
        var n = Te
          , o = pr();
        if (Ne) {
            if (r === void 0)
                throw Error(j(407));
            r = r()
        } else {
            if (r = t(),
            ze === null)
                throw Error(j(349));
            Hn & 30 || Py(n, t, r)
        }
        o.memoizedState = r;
        var i = {
            value: r,
            getSnapshot: t
        };
        return o.queue = i,
        Km(Ty.bind(null, n, i, e), [e]),
        n.flags |= 2048,
        na(9, Dy.bind(null, n, i, r, t), void 0, null),
        r
    },
    useId: function() {
        var e = pr()
          , t = ze.identifierPrefix;
        if (Ne) {
            var r = Tr
              , n = Dr;
            r = (n & ~(1 << 32 - rr(n) - 1)).toString(32) + r,
            t = ":" + t + "R" + r,
            r = ta++,
            0 < r && (t += "H" + r.toString(32)),
            t += ":"
        } else
            r = _C++,
            t = ":" + t + "r" + r.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , VC = {
    readContext: Vt,
    useCallback: Ly,
    useContext: Vt,
    useEffect: Mf,
    useImperativeHandle: My,
    useInsertionEffect: Ay,
    useLayoutEffect: Oy,
    useMemo: By,
    useReducer: Xu,
    useRef: ky,
    useState: function() {
        return Xu(ra)
    },
    useDebugValue: Lf,
    useDeferredValue: function(e) {
        var t = Ht();
        return Fy(t, Le.memoizedState, e)
    },
    useTransition: function() {
        var e = Xu(ra)[0]
          , t = Ht().memoizedState;
        return [e, t]
    },
    useMutableSource: Ey,
    useSyncExternalStore: Ny,
    useId: _y,
    unstable_isNewReconciler: !1
}
  , HC = {
    readContext: Vt,
    useCallback: Ly,
    useContext: Vt,
    useEffect: Mf,
    useImperativeHandle: My,
    useInsertionEffect: Ay,
    useLayoutEffect: Oy,
    useMemo: By,
    useReducer: Ju,
    useRef: ky,
    useState: function() {
        return Ju(ra)
    },
    useDebugValue: Lf,
    useDeferredValue: function(e) {
        var t = Ht();
        return Le === null ? t.memoizedState = e : Fy(t, Le.memoizedState, e)
    },
    useTransition: function() {
        var e = Ju(ra)[0]
          , t = Ht().memoizedState;
        return [e, t]
    },
    useMutableSource: Ey,
    useSyncExternalStore: Ny,
    useId: _y,
    unstable_isNewReconciler: !1
};
function Yt(e, t) {
    if (e && e.defaultProps) {
        t = Ie({}, t),
        e = e.defaultProps;
        for (var r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
function sd(e, t, r, n) {
    t = e.memoizedState,
    r = r(n, t),
    r = r == null ? t : Ie({}, t, r),
    e.memoizedState = r,
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Ll = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? eo(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = ft()
          , o = un(e)
          , i = Ir(n, o);
        i.payload = t,
        r != null && (i.callback = r),
        t = sn(e, i, o),
        t !== null && (nr(t, e, o, n),
        Es(t, e, o))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = ft()
          , o = un(e)
          , i = Ir(n, o);
        i.tag = 1,
        i.payload = t,
        r != null && (i.callback = r),
        t = sn(e, i, o),
        t !== null && (nr(t, e, o, n),
        Es(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = ft()
          , n = un(e)
          , o = Ir(r, n);
        o.tag = 2,
        t != null && (o.callback = t),
        t = sn(e, o, n),
        t !== null && (nr(t, e, n, r),
        Es(t, e, n))
    }
};
function qm(e, t, r, n, o, i, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Qi(r, n) || !Qi(o, i) : !0
}
function Uy(e, t, r) {
    var n = !1
      , o = vn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Vt(i) : (o = xt(t) ? Un : ot.current,
    n = t.contextTypes,
    i = (n = n != null) ? zo(e, o) : vn),
    t = new t(r,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ll,
    e.stateNode = t,
    t._reactInternals = e,
    n && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Qm(e, t, r, n) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null)
}
function ld(e, t, r, n) {
    var o = e.stateNode;
    o.props = r,
    o.state = e.memoizedState,
    o.refs = {},
    Tf(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Vt(i) : (i = xt(t) ? Un : ot.current,
    o.context = zo(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (sd(e, t, i, r),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Ll.enqueueReplaceState(o, o.state, null),
    tl(e, r, o, n),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Ho(e, t) {
    try {
        var r = ""
          , n = t;
        do
            r += xS(n),
            n = n.return;
        while (n);
        var o = r
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Zu(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}
function ud(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var GC = typeof WeakMap == "function" ? WeakMap : Map;
function Vy(e, t, r) {
    r = Ir(-1, r),
    r.tag = 3,
    r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        al || (al = !0,
        xd = n),
        ud(e, t)
    }
    ,
    r
}
function Hy(e, t, r) {
    r = Ir(-1, r),
    r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var o = t.value;
        r.payload = function() {
            return n(o)
        }
        ,
        r.callback = function() {
            ud(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        ud(e, t),
        typeof n != "function" && (ln === null ? ln = new Set([this]) : ln.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    r
}
function Ym(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new GC;
        var o = new Set;
        n.set(t, o)
    } else
        o = n.get(t),
        o === void 0 && (o = new Set,
        n.set(t, o));
    o.has(r) || (o.add(r),
    e = aE.bind(null, e, t, r),
    t.then(e, e))
}
function Xm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Jm(e, t, r, n, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    r.flags |= 131072,
    r.flags &= -52805,
    r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Ir(-1, 1),
    t.tag = 2,
    sn(r, t, 1))),
    r.lanes |= 1),
    e)
}
var KC = Lr.ReactCurrentOwner
  , gt = !1;
function lt(e, t, r, n) {
    t.child = e === null ? wy(t, null, r, n) : Uo(t, e.child, r, n)
}
function Zm(e, t, r, n, o) {
    r = r.render;
    var i = t.ref;
    return No(t, o),
    n = Of(e, t, r, n, i, o),
    r = jf(),
    e !== null && !gt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Or(e, t, o)) : (Ne && r && bf(t),
    t.flags |= 1,
    lt(e, t, n, o),
    t.child)
}
function ev(e, t, r, n, o) {
    if (e === null) {
        var i = r.type;
        return typeof i == "function" && !Vf(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Gy(e, t, i, n, o)) : (e = Rs(r.type, null, n, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var a = i.memoizedProps;
        if (r = r.compare,
        r = r !== null ? r : Qi,
        r(a, n) && e.ref === t.ref)
            return Or(e, t, o)
    }
    return t.flags |= 1,
    e = cn(i, n),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Gy(e, t, r, n, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Qi(i, n) && e.ref === t.ref)
            if (gt = !1,
            t.pendingProps = n = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (gt = !0);
            else
                return t.lanes = e.lanes,
                Or(e, t, o)
    }
    return cd(e, t, r, n, o)
}
function Ky(e, t, r) {
    var n = t.pendingProps
      , o = n.children
      , i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            xe(wo, Ct),
            Ct |= r;
        else {
            if (!(r & 1073741824))
                return e = i !== null ? i.baseLanes | r : r,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                xe(wo, Ct),
                Ct |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            n = i !== null ? i.baseLanes : r,
            xe(wo, Ct),
            Ct |= n
        }
    else
        i !== null ? (n = i.baseLanes | r,
        t.memoizedState = null) : n = r,
        xe(wo, Ct),
        Ct |= n;
    return lt(e, t, o, r),
    t.child
}
function qy(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512,
    t.flags |= 2097152)
}
function cd(e, t, r, n, o) {
    var i = xt(r) ? Un : ot.current;
    return i = zo(t, i),
    No(t, o),
    r = Of(e, t, r, n, i, o),
    n = jf(),
    e !== null && !gt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Or(e, t, o)) : (Ne && n && bf(t),
    t.flags |= 1,
    lt(e, t, r, o),
    t.child)
}
function tv(e, t, r, n, o) {
    if (xt(r)) {
        var i = !0;
        Ys(t)
    } else
        i = !1;
    if (No(t, o),
    t.stateNode === null)
        Ds(e, t),
        Uy(t, r, n),
        ld(t, r, n, o),
        n = !0;
    else if (e === null) {
        var a = t.stateNode
          , s = t.memoizedProps;
        a.props = s;
        var l = a.context
          , u = r.contextType;
        typeof u == "object" && u !== null ? u = Vt(u) : (u = xt(r) ? Un : ot.current,
        u = zo(t, u));
        var f = r.getDerivedStateFromProps
          , d = typeof f == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && Qm(t, a, n, u),
        Vr = !1;
        var c = t.memoizedState;
        a.state = c,
        tl(t, n, a, o),
        l = t.memoizedState,
        s !== n || c !== l || yt.current || Vr ? (typeof f == "function" && (sd(t, r, f, n),
        l = t.memoizedState),
        (s = Vr || qm(t, r, s, n, c, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = n,
        t.memoizedState = l),
        a.props = n,
        a.state = l,
        a.context = u,
        n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        n = !1)
    } else {
        a = t.stateNode,
        Sy(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : Yt(t.type, s),
        a.props = u,
        d = t.pendingProps,
        c = a.context,
        l = r.contextType,
        typeof l == "object" && l !== null ? l = Vt(l) : (l = xt(r) ? Un : ot.current,
        l = zo(t, l));
        var p = r.getDerivedStateFromProps;
        (f = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || c !== l) && Qm(t, a, n, l),
        Vr = !1,
        c = t.memoizedState,
        a.state = c,
        tl(t, n, a, o);
        var g = t.memoizedState;
        s !== d || c !== g || yt.current || Vr ? (typeof p == "function" && (sd(t, r, p, n),
        g = t.memoizedState),
        (u = Vr || qm(t, r, u, n, c, g, l) || !1) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, g, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, g, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = n,
        t.memoizedState = g),
        a.props = n,
        a.state = g,
        a.context = l,
        n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && c === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024),
        n = !1)
    }
    return dd(e, t, r, n, i, o)
}
function dd(e, t, r, n, o, i) {
    qy(e, t);
    var a = (t.flags & 128) !== 0;
    if (!n && !a)
        return o && $m(t, r, !1),
        Or(e, t, i);
    n = t.stateNode,
    KC.current = t;
    var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = Uo(t, e.child, null, i),
    t.child = Uo(t, null, s, i)) : lt(e, t, s, i),
    t.memoizedState = n.state,
    o && $m(t, r, !0),
    t.child
}
function Qy(e) {
    var t = e.stateNode;
    t.pendingContext ? _m(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _m(e, t.context, !1),
    If(e, t.containerInfo)
}
function rv(e, t, r, n, o) {
    return Wo(),
    Cf(o),
    t.flags |= 256,
    lt(e, t, r, n),
    t.child
}
var fd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function pd(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Yy(e, t, r) {
    var n = t.pendingProps, o = De.current, i = !1, a = (t.flags & 128) !== 0, s;
    if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    xe(De, o & 1),
    e === null)
        return id(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = n.children,
        e = n.fallback,
        i ? (n = t.mode,
        i = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(n & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = a) : i = _l(a, n, 0, null),
        e = zn(e, n, r, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = pd(r),
        t.memoizedState = fd,
        e) : Bf(t, a));
    if (o = e.memoizedState,
    o !== null && (s = o.dehydrated,
    s !== null))
        return qC(e, t, a, n, s, o, r);
    if (i) {
        i = n.fallback,
        a = t.mode,
        o = e.child,
        s = o.sibling;
        var l = {
            mode: "hidden",
            children: n.children
        };
        return !(a & 1) && t.child !== o ? (n = t.child,
        n.childLanes = 0,
        n.pendingProps = l,
        t.deletions = null) : (n = cn(o, l),
        n.subtreeFlags = o.subtreeFlags & 14680064),
        s !== null ? i = cn(s, i) : (i = zn(i, a, r, null),
        i.flags |= 2),
        i.return = t,
        n.return = t,
        n.sibling = i,
        t.child = n,
        n = i,
        i = t.child,
        a = e.child.memoizedState,
        a = a === null ? pd(r) : {
            baseLanes: a.baseLanes | r,
            cachePool: null,
            transitions: a.transitions
        },
        i.memoizedState = a,
        i.childLanes = e.childLanes & ~r,
        t.memoizedState = fd,
        n
    }
    return i = e.child,
    e = i.sibling,
    n = cn(i, {
        mode: "visible",
        children: n.children
    }),
    !(t.mode & 1) && (n.lanes = r),
    n.return = t,
    n.sibling = null,
    e !== null && (r = t.deletions,
    r === null ? (t.deletions = [e],
    t.flags |= 16) : r.push(e)),
    t.child = n,
    t.memoizedState = null,
    n
}
function Bf(e, t) {
    return t = _l({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function rs(e, t, r, n) {
    return n !== null && Cf(n),
    Uo(t, e.child, null, r),
    e = Bf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function qC(e, t, r, n, o, i, a) {
    if (r)
        return t.flags & 256 ? (t.flags &= -257,
        n = Zu(Error(j(422))),
        rs(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = n.fallback,
        o = t.mode,
        n = _l({
            mode: "visible",
            children: n.children
        }, o, 0, null),
        i = zn(i, o, a, null),
        i.flags |= 2,
        n.return = t,
        i.return = t,
        n.sibling = i,
        t.child = n,
        t.mode & 1 && Uo(t, e.child, null, a),
        t.child.memoizedState = pd(a),
        t.memoizedState = fd,
        i);
    if (!(t.mode & 1))
        return rs(e, t, a, null);
    if (o.data === "$!") {
        if (n = o.nextSibling && o.nextSibling.dataset,
        n)
            var s = n.dgst;
        return n = s,
        i = Error(j(419)),
        n = Zu(i, n, void 0),
        rs(e, t, a, n)
    }
    if (s = (a & e.childLanes) !== 0,
    gt || s) {
        if (n = ze,
        n !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (n.suspendedLanes | a) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Ar(e, o),
            nr(n, e, o, -1))
        }
        return Uf(),
        n = Zu(Error(j(421))),
        rs(e, t, a, n)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = sE.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Nt = an(o.nextSibling),
    Dt = t,
    Ne = !0,
    er = null,
    e !== null && (Ft[_t++] = Dr,
    Ft[_t++] = Tr,
    Ft[_t++] = Vn,
    Dr = e.id,
    Tr = e.overflow,
    Vn = t),
    t = Bf(t, n.children),
    t.flags |= 4096,
    t)
}
function nv(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t),
    ad(e.return, t, r)
}
function ec(e, t, r, n, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = n,
    i.tail = r,
    i.tailMode = o)
}
function Xy(e, t, r) {
    var n = t.pendingProps
      , o = n.revealOrder
      , i = n.tail;
    if (lt(e, t, n.children, r),
    n = De.current,
    n & 2)
        n = n & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && nv(e, r, t);
                else if (e.tag === 19)
                    nv(e, r, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        n &= 1
    }
    if (xe(De, n),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (r = t.child,
            o = null; r !== null; )
                e = r.alternate,
                e !== null && rl(e) === null && (o = r),
                r = r.sibling;
            r = o,
            r === null ? (o = t.child,
            t.child = null) : (o = r.sibling,
            r.sibling = null),
            ec(t, !1, o, r, i);
            break;
        case "backwards":
            for (r = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && rl(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = r,
                r = o,
                o = e
            }
            ec(t, !0, r, null, i);
            break;
        case "together":
            ec(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ds(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Or(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies),
    Gn |= t.lanes,
    !(r & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        r = cn(e, e.pendingProps),
        t.child = r,
        r.return = t; e.sibling !== null; )
            e = e.sibling,
            r = r.sibling = cn(e, e.pendingProps),
            r.return = t;
        r.sibling = null
    }
    return t.child
}
function QC(e, t, r) {
    switch (t.tag) {
    case 3:
        Qy(t),
        Wo();
        break;
    case 5:
        Cy(t);
        break;
    case 1:
        xt(t.type) && Ys(t);
        break;
    case 4:
        If(t, t.stateNode.containerInfo);
        break;
    case 10:
        var n = t.type._context
          , o = t.memoizedProps.value;
        xe(Zs, n._currentValue),
        n._currentValue = o;
        break;
    case 13:
        if (n = t.memoizedState,
        n !== null)
            return n.dehydrated !== null ? (xe(De, De.current & 1),
            t.flags |= 128,
            null) : r & t.child.childLanes ? Yy(e, t, r) : (xe(De, De.current & 1),
            e = Or(e, t, r),
            e !== null ? e.sibling : null);
        xe(De, De.current & 1);
        break;
    case 19:
        if (n = (r & t.childLanes) !== 0,
        e.flags & 128) {
            if (n)
                return Xy(e, t, r);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        xe(De, De.current),
        n)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Ky(e, t, r)
    }
    return Or(e, t, r)
}
var Jy, md, Zy, ex;
Jy = function(e, t) {
    for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6)
            e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r,
            r = r.child;
            continue
        }
        if (r === t)
            break;
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t)
                return;
            r = r.return
        }
        r.sibling.return = r.return,
        r = r.sibling
    }
}
;
md = function() {}
;
Zy = function(e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
        e = t.stateNode,
        Mn(wr.current);
        var i = null;
        switch (r) {
        case "input":
            o = Lc(e, o),
            n = Lc(e, n),
            i = [];
            break;
        case "select":
            o = Ie({}, o, {
                value: void 0
            }),
            n = Ie({}, n, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = _c(e, o),
            n = _c(e, n),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = qs)
        }
        zc(r, n);
        var a;
        r = null;
        for (u in o)
            if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var s = o[u];
                    for (a in s)
                        s.hasOwnProperty(a) && (r || (r = {}),
                        r[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Wi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in n) {
            var l = n[u];
            if (s = o != null ? o[u] : void 0,
            n.hasOwnProperty(u) && l !== s && (l != null || s != null))
                if (u === "style")
                    if (s) {
                        for (a in s)
                            !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}),
                            r[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}),
                            r[a] = l[a])
                    } else
                        r || (i || (i = []),
                        i.push(u, r)),
                        r = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    s = s ? s.__html : void 0,
                    l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Wi.hasOwnProperty(u) ? (l != null && u === "onScroll" && Se("scroll", e),
                    i || s === l || (i = [])) : (i = i || []).push(u, l))
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
ex = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
}
;
function yi(e, t) {
    if (!Ne)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
                t.alternate !== null && (r = t),
                t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
                r.alternate !== null && (n = r),
                r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
        }
}
function tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , r = 0
      , n = 0;
    if (t)
        for (var o = e.child; o !== null; )
            r |= o.lanes | o.childLanes,
            n |= o.subtreeFlags & 14680064,
            n |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            r |= o.lanes | o.childLanes,
            n |= o.subtreeFlags,
            n |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= n,
    e.childLanes = r,
    t
}
function YC(e, t, r) {
    var n = t.pendingProps;
    switch (Sf(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return tt(t),
        null;
    case 1:
        return xt(t.type) && Qs(),
        tt(t),
        null;
    case 3:
        return n = t.stateNode,
        Vo(),
        Ce(yt),
        Ce(ot),
        kf(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (e === null || e.child === null) && (es(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        er !== null && (Sd(er),
        er = null))),
        md(e, t),
        tt(t),
        null;
    case 5:
        Rf(t);
        var o = Mn(ea.current);
        if (r = t.type,
        e !== null && t.stateNode != null)
            Zy(e, t, r, n, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!n) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return tt(t),
                null
            }
            if (e = Mn(wr.current),
            es(t)) {
                n = t.stateNode,
                r = t.type;
                var i = t.memoizedProps;
                switch (n[gr] = t,
                n[Ji] = i,
                e = (t.mode & 1) !== 0,
                r) {
                case "dialog":
                    Se("cancel", n),
                    Se("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Se("load", n);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Ti.length; o++)
                        Se(Ti[o], n);
                    break;
                case "source":
                    Se("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    Se("error", n),
                    Se("load", n);
                    break;
                case "details":
                    Se("toggle", n);
                    break;
                case "input":
                    fm(n, i),
                    Se("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    Se("invalid", n);
                    break;
                case "textarea":
                    mm(n, i),
                    Se("invalid", n)
                }
                zc(r, i),
                o = null;
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var s = i[a];
                        a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && Za(n.textContent, s, e),
                        o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Za(n.textContent, s, e),
                        o = ["children", "" + s]) : Wi.hasOwnProperty(a) && s != null && a === "onScroll" && Se("scroll", n)
                    }
                switch (r) {
                case "input":
                    Ha(n),
                    pm(n, i, !0);
                    break;
                case "textarea":
                    Ha(n),
                    vm(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (n.onclick = qs)
                }
                n = o,
                t.updateQueue = n,
                n !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Tg(r)),
                e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, {
                    is: n.is
                }) : (e = a.createElement(r),
                r === "select" && (a = e,
                n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r),
                e[gr] = t,
                e[Ji] = n,
                Jy(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = Wc(r, n),
                    r) {
                    case "dialog":
                        Se("cancel", e),
                        Se("close", e),
                        o = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Se("load", e),
                        o = n;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Ti.length; o++)
                            Se(Ti[o], e);
                        o = n;
                        break;
                    case "source":
                        Se("error", e),
                        o = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Se("error", e),
                        Se("load", e),
                        o = n;
                        break;
                    case "details":
                        Se("toggle", e),
                        o = n;
                        break;
                    case "input":
                        fm(e, n),
                        o = Lc(e, n),
                        Se("invalid", e);
                        break;
                    case "option":
                        o = n;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!n.multiple
                        },
                        o = Ie({}, n, {
                            value: void 0
                        }),
                        Se("invalid", e);
                        break;
                    case "textarea":
                        mm(e, n),
                        o = _c(e, n),
                        Se("invalid", e);
                        break;
                    default:
                        o = n
                    }
                    zc(r, o),
                    s = o;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var l = s[i];
                            i === "style" ? kg(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Ig(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Ui(e, l) : typeof l == "number" && Ui(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wi.hasOwnProperty(i) ? l != null && i === "onScroll" && Se("scroll", e) : l != null && sf(e, i, l, a))
                        }
                    switch (r) {
                    case "input":
                        Ha(e),
                        pm(e, n, !1);
                        break;
                    case "textarea":
                        Ha(e),
                        vm(e);
                        break;
                    case "option":
                        n.value != null && e.setAttribute("value", "" + mn(n.value));
                        break;
                    case "select":
                        e.multiple = !!n.multiple,
                        i = n.value,
                        i != null ? bo(e, !!n.multiple, i, !1) : n.defaultValue != null && bo(e, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = qs)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return tt(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ex(e, t, e.memoizedProps, n);
        else {
            if (typeof n != "string" && t.stateNode === null)
                throw Error(j(166));
            if (r = Mn(ea.current),
            Mn(wr.current),
            es(t)) {
                if (n = t.stateNode,
                r = t.memoizedProps,
                n[gr] = t,
                (i = n.nodeValue !== r) && (e = Dt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Za(n.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Za(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n),
                n[gr] = t,
                t.stateNode = n
        }
        return tt(t),
        null;
    case 13:
        if (Ce(De),
        n = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Ne && Nt !== null && t.mode & 1 && !(t.flags & 128))
                yy(),
                Wo(),
                t.flags |= 98560,
                i = !1;
            else if (i = es(t),
            n !== null && n.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[gr] = t
                } else
                    Wo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                tt(t),
                i = !1
            } else
                er !== null && (Sd(er),
                er = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r,
        t) : (n = n !== null,
        n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || De.current & 1 ? Be === 0 && (Be = 3) : Uf())),
        t.updateQueue !== null && (t.flags |= 4),
        tt(t),
        null);
    case 4:
        return Vo(),
        md(e, t),
        e === null && Yi(t.stateNode.containerInfo),
        tt(t),
        null;
    case 10:
        return Pf(t.type._context),
        tt(t),
        null;
    case 17:
        return xt(t.type) && Qs(),
        tt(t),
        null;
    case 19:
        if (Ce(De),
        i = t.memoizedState,
        i === null)
            return tt(t),
            null;
        if (n = (t.flags & 128) !== 0,
        a = i.rendering,
        a === null)
            if (n)
                yi(i, !1);
            else {
                if (Be !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = rl(e),
                        a !== null) {
                            for (t.flags |= 128,
                            yi(i, !1),
                            n = a.updateQueue,
                            n !== null && (t.updateQueue = n,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child; r !== null; )
                                i = r,
                                e = n,
                                i.flags &= 14680066,
                                a = i.alternate,
                                a === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = a.childLanes,
                                i.lanes = a.lanes,
                                i.child = a.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = a.memoizedProps,
                                i.memoizedState = a.memoizedState,
                                i.updateQueue = a.updateQueue,
                                i.type = a.type,
                                e = a.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                r = r.sibling;
                            return xe(De, De.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Ae() > Go && (t.flags |= 128,
                n = !0,
                yi(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!n)
                if (e = rl(a),
                e !== null) {
                    if (t.flags |= 128,
                    n = !0,
                    r = e.updateQueue,
                    r !== null && (t.updateQueue = r,
                    t.flags |= 4),
                    yi(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ne)
                        return tt(t),
                        null
                } else
                    2 * Ae() - i.renderingStartTime > Go && r !== 1073741824 && (t.flags |= 128,
                    n = !0,
                    yi(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (a.sibling = t.child,
            t.child = a) : (r = i.last,
            r !== null ? r.sibling = a : t.child = a,
            i.last = a)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Ae(),
        t.sibling = null,
        r = De.current,
        xe(De, n ? r & 1 | 2 : r & 1),
        t) : (tt(t),
        null);
    case 22:
    case 23:
        return Wf(),
        n = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== n && (t.flags |= 8192),
        n && t.mode & 1 ? Ct & 1073741824 && (tt(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function XC(e, t) {
    switch (Sf(t),
    t.tag) {
    case 1:
        return xt(t.type) && Qs(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Vo(),
        Ce(yt),
        Ce(ot),
        kf(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Rf(t),
        null;
    case 13:
        if (Ce(De),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Wo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Ce(De),
        null;
    case 4:
        return Vo(),
        null;
    case 10:
        return Pf(t.type._context),
        null;
    case 22:
    case 23:
        return Wf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ns = !1
  , nt = !1
  , JC = typeof WeakSet == "function" ? WeakSet : Set
  , W = null;
function xo(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function")
            try {
                r(null)
            } catch (n) {
                ke(e, t, n)
            }
        else
            r.current = null
}
function vd(e, t, r) {
    try {
        r()
    } catch (n) {
        ke(e, t, n)
    }
}
var ov = !1;
function ZC(e, t) {
    if (Jc = Hs,
    e = iy(),
    wf(e)) {
        if ("selectionStart"in e)
            var r = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                r = (r = e.ownerDocument) && r.defaultView || window;
                var n = r.getSelection && r.getSelection();
                if (n && n.rangeCount !== 0) {
                    r = n.anchorNode;
                    var o = n.anchorOffset
                      , i = n.focusNode;
                    n = n.focusOffset;
                    try {
                        r.nodeType,
                        i.nodeType
                    } catch {
                        r = null;
                        break e
                    }
                    var a = 0
                      , s = -1
                      , l = -1
                      , u = 0
                      , f = 0
                      , d = e
                      , c = null;
                    t: for (; ; ) {
                        for (var p; d !== r || o !== 0 && d.nodeType !== 3 || (s = a + o),
                        d !== i || n !== 0 && d.nodeType !== 3 || (l = a + n),
                        d.nodeType === 3 && (a += d.nodeValue.length),
                        (p = d.firstChild) !== null; )
                            c = d,
                            d = p;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (c === r && ++u === o && (s = a),
                            c === i && ++f === n && (l = a),
                            (p = d.nextSibling) !== null)
                                break;
                            d = c,
                            c = d.parentNode
                        }
                        d = p
                    }
                    r = s === -1 || l === -1 ? null : {
                        start: s,
                        end: l
                    }
                } else
                    r = null
            }
        r = r || {
            start: 0,
            end: 0
        }
    } else
        r = null;
    for (Zc = {
        focusedElem: e,
        selectionRange: r
    },
    Hs = !1,
    W = t; W !== null; )
        if (t = W,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            W = e;
        else
            for (; W !== null; ) {
                t = W;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var h = g.memoizedProps
                                  , w = g.memoizedState
                                  , y = t.stateNode
                                  , v = y.getSnapshotBeforeUpdate(t.elementType === t.type ? h : Yt(t.type, h), w);
                                y.__reactInternalSnapshotBeforeUpdate = v
                            }
                            break;
                        case 3:
                            var b = t.stateNode.containerInfo;
                            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (S) {
                    ke(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    W = e;
                    break
                }
                W = t.return
            }
    return g = ov,
    ov = !1,
    g
}
function Li(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null,
    n !== null) {
        var o = n = n.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && vd(t, r, i)
            }
            o = o.next
        } while (o !== n)
    }
}
function Bl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}
function hd(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
        case 5:
            e = r;
            break;
        default:
            e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function tx(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    tx(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[gr],
    delete t[Ji],
    delete t[rd],
    delete t[MC],
    delete t[LC])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function rx(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function iv(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || rx(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function gd(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode,
        t.insertBefore(e, r)) : (t = r,
        t.appendChild(e)),
        r = r._reactRootContainer,
        r != null || t.onclick !== null || (t.onclick = qs));
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (gd(e, t, r),
        e = e.sibling; e !== null; )
            gd(e, t, r),
            e = e.sibling
}
function yd(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
        e = e.stateNode,
        t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child,
    e !== null))
        for (yd(e, t, r),
        e = e.sibling; e !== null; )
            yd(e, t, r),
            e = e.sibling
}
var Ge = null
  , Zt = !1;
function Fr(e, t, r) {
    for (r = r.child; r !== null; )
        nx(e, t, r),
        r = r.sibling
}
function nx(e, t, r) {
    if (xr && typeof xr.onCommitFiberUnmount == "function")
        try {
            xr.onCommitFiberUnmount(Il, r)
        } catch {}
    switch (r.tag) {
    case 5:
        nt || xo(r, t);
    case 6:
        var n = Ge
          , o = Zt;
        Ge = null,
        Fr(e, t, r),
        Ge = n,
        Zt = o,
        Ge !== null && (Zt ? (e = Ge,
        r = r.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Ge.removeChild(r.stateNode));
        break;
    case 18:
        Ge !== null && (Zt ? (e = Ge,
        r = r.stateNode,
        e.nodeType === 8 ? Ku(e.parentNode, r) : e.nodeType === 1 && Ku(e, r),
        Ki(e)) : Ku(Ge, r.stateNode));
        break;
    case 4:
        n = Ge,
        o = Zt,
        Ge = r.stateNode.containerInfo,
        Zt = !0,
        Fr(e, t, r),
        Ge = n,
        Zt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!nt && (n = r.updateQueue,
        n !== null && (n = n.lastEffect,
        n !== null))) {
            o = n = n.next;
            do {
                var i = o
                  , a = i.destroy;
                i = i.tag,
                a !== void 0 && (i & 2 || i & 4) && vd(r, t, a),
                o = o.next
            } while (o !== n)
        }
        Fr(e, t, r);
        break;
    case 1:
        if (!nt && (xo(r, t),
        n = r.stateNode,
        typeof n.componentWillUnmount == "function"))
            try {
                n.props = r.memoizedProps,
                n.state = r.memoizedState,
                n.componentWillUnmount()
            } catch (s) {
                ke(r, t, s)
            }
        Fr(e, t, r);
        break;
    case 21:
        Fr(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (nt = (n = nt) || r.memoizedState !== null,
        Fr(e, t, r),
        nt = n) : Fr(e, t, r);
        break;
    default:
        Fr(e, t, r)
    }
}
function av(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new JC),
        t.forEach(function(n) {
            var o = lE.bind(null, e, n);
            r.has(n) || (r.add(n),
            n.then(o, o))
        })
    }
}
function qt(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var o = r[n];
            try {
                var i = e
                  , a = t
                  , s = a;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        Ge = s.stateNode,
                        Zt = !1;
                        break e;
                    case 3:
                        Ge = s.stateNode.containerInfo,
                        Zt = !0;
                        break e;
                    case 4:
                        Ge = s.stateNode.containerInfo,
                        Zt = !0;
                        break e
                    }
                    s = s.return
                }
                if (Ge === null)
                    throw Error(j(160));
                nx(i, a, o),
                Ge = null,
                Zt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                ke(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            ox(t, e),
            t = t.sibling
}
function ox(e, t) {
    var r = e.alternate
      , n = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (qt(t, e),
        fr(e),
        n & 4) {
            try {
                Li(3, e, e.return),
                Bl(3, e)
            } catch (h) {
                ke(e, e.return, h)
            }
            try {
                Li(5, e, e.return)
            } catch (h) {
                ke(e, e.return, h)
            }
        }
        break;
    case 1:
        qt(t, e),
        fr(e),
        n & 512 && r !== null && xo(r, r.return);
        break;
    case 5:
        if (qt(t, e),
        fr(e),
        n & 512 && r !== null && xo(r, r.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Ui(o, "")
            } catch (h) {
                ke(e, e.return, h)
            }
        }
        if (n & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , a = r !== null ? r.memoizedProps : i
              , s = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && Pg(o, i),
                    Wc(s, a);
                    var u = Wc(s, i);
                    for (a = 0; a < l.length; a += 2) {
                        var f = l[a]
                          , d = l[a + 1];
                        f === "style" ? kg(o, d) : f === "dangerouslySetInnerHTML" ? Ig(o, d) : f === "children" ? Ui(o, d) : sf(o, f, d, u)
                    }
                    switch (s) {
                    case "input":
                        Bc(o, i);
                        break;
                    case "textarea":
                        Dg(o, i);
                        break;
                    case "select":
                        var c = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        p != null ? bo(o, !!i.multiple, p, !1) : c !== !!i.multiple && (i.defaultValue != null ? bo(o, !!i.multiple, i.defaultValue, !0) : bo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ji] = i
                } catch (h) {
                    ke(e, e.return, h)
                }
        }
        break;
    case 6:
        if (qt(t, e),
        fr(e),
        n & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (h) {
                ke(e, e.return, h)
            }
        }
        break;
    case 3:
        if (qt(t, e),
        fr(e),
        n & 4 && r !== null && r.memoizedState.isDehydrated)
            try {
                Ki(t.containerInfo)
            } catch (h) {
                ke(e, e.return, h)
            }
        break;
    case 4:
        qt(t, e),
        fr(e);
        break;
    case 13:
        qt(t, e),
        fr(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || ($f = Ae())),
        n & 4 && av(e);
        break;
    case 22:
        if (f = r !== null && r.memoizedState !== null,
        e.mode & 1 ? (nt = (u = nt) || f,
        qt(t, e),
        nt = u) : qt(t, e),
        fr(e),
        n & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
                for (W = e,
                f = e.child; f !== null; ) {
                    for (d = W = f; W !== null; ) {
                        switch (c = W,
                        p = c.child,
                        c.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Li(4, c, c.return);
                            break;
                        case 1:
                            xo(c, c.return);
                            var g = c.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                n = c,
                                r = c.return;
                                try {
                                    t = n,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (h) {
                                    ke(n, r, h)
                                }
                            }
                            break;
                        case 5:
                            xo(c, c.return);
                            break;
                        case 22:
                            if (c.memoizedState !== null) {
                                lv(d);
                                continue
                            }
                        }
                        p !== null ? (p.return = c,
                        W = p) : lv(d)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (f === null) {
                        f = d;
                        try {
                            o = d.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode,
                            l = d.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            s.style.display = Rg("display", a))
                        } catch (h) {
                            ke(e, e.return, h)
                        }
                    }
                } else if (d.tag === 6) {
                    if (f === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (h) {
                            ke(e, e.return, h)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    f === d && (f = null),
                    d = d.return
                }
                f === d && (f = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        qt(t, e),
        fr(e),
        n & 4 && av(e);
        break;
    case 21:
        break;
    default:
        qt(t, e),
        fr(e)
    }
}
function fr(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null; ) {
                    if (rx(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(j(160))
            }
            switch (n.tag) {
            case 5:
                var o = n.stateNode;
                n.flags & 32 && (Ui(o, ""),
                n.flags &= -33);
                var i = iv(e);
                yd(e, i, o);
                break;
            case 3:
            case 4:
                var a = n.stateNode.containerInfo
                  , s = iv(e);
                gd(e, s, a);
                break;
            default:
                throw Error(j(161))
            }
        } catch (l) {
            ke(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function eE(e, t, r) {
    W = e,
    ix(e)
}
function ix(e, t, r) {
    for (var n = (e.mode & 1) !== 0; W !== null; ) {
        var o = W
          , i = o.child;
        if (o.tag === 22 && n) {
            var a = o.memoizedState !== null || ns;
            if (!a) {
                var s = o.alternate
                  , l = s !== null && s.memoizedState !== null || nt;
                s = ns;
                var u = nt;
                if (ns = a,
                (nt = l) && !u)
                    for (W = o; W !== null; )
                        a = W,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? uv(o) : l !== null ? (l.return = a,
                        W = l) : uv(o);
                for (; i !== null; )
                    W = i,
                    ix(i),
                    i = i.sibling;
                W = o,
                ns = s,
                nt = u
            }
            sv(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            W = i) : sv(e)
    }
}
function sv(e) {
    for (; W !== null; ) {
        var t = W;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        nt || Bl(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !nt)
                            if (r === null)
                                n.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? r.memoizedProps : Yt(t.type, r.memoizedProps);
                                n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Hm(t, i, n);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (r = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                                }
                            Hm(t, a, r)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && r.focus();
                                break;
                            case "img":
                                l.src && (r.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var d = f.dehydrated;
                                    d !== null && Ki(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                nt || t.flags & 512 && hd(t)
            } catch (c) {
                ke(t, t.return, c)
            }
        }
        if (t === e) {
            W = null;
            break
        }
        if (r = t.sibling,
        r !== null) {
            r.return = t.return,
            W = r;
            break
        }
        W = t.return
    }
}
function lv(e) {
    for (; W !== null; ) {
        var t = W;
        if (t === e) {
            W = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return,
            W = r;
            break
        }
        W = t.return
    }
}
function uv(e) {
    for (; W !== null; ) {
        var t = W;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    Bl(4, t)
                } catch (l) {
                    ke(t, r, l)
                }
                break;
            case 1:
                var n = t.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        n.componentDidMount()
                    } catch (l) {
                        ke(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    hd(t)
                } catch (l) {
                    ke(t, i, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    hd(t)
                } catch (l) {
                    ke(t, a, l)
                }
            }
        } catch (l) {
            ke(t, t.return, l)
        }
        if (t === e) {
            W = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            W = s;
            break
        }
        W = t.return
    }
}
var tE = Math.ceil
  , il = Lr.ReactCurrentDispatcher
  , Ff = Lr.ReactCurrentOwner
  , Wt = Lr.ReactCurrentBatchConfig
  , le = 0
  , ze = null
  , Oe = null
  , Ye = 0
  , Ct = 0
  , wo = Sn(0)
  , Be = 0
  , oa = null
  , Gn = 0
  , Fl = 0
  , _f = 0
  , Bi = null
  , ht = null
  , $f = 0
  , Go = 1 / 0
  , Nr = null
  , al = !1
  , xd = null
  , ln = null
  , os = !1
  , Zr = null
  , sl = 0
  , Fi = 0
  , wd = null
  , Ts = -1
  , Is = 0;
function ft() {
    return le & 6 ? Ae() : Ts !== -1 ? Ts : Ts = Ae()
}
function un(e) {
    return e.mode & 1 ? le & 2 && Ye !== 0 ? Ye & -Ye : FC.transition !== null ? (Is === 0 && (Is = Ug()),
    Is) : (e = fe,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Yg(e.type)),
    e) : 1
}
function nr(e, t, r, n) {
    if (50 < Fi)
        throw Fi = 0,
        wd = null,
        Error(j(185));
    wa(e, r, n),
    (!(le & 2) || e !== ze) && (e === ze && (!(le & 2) && (Fl |= r),
    Be === 4 && Gr(e, Ye)),
    wt(e, n),
    r === 1 && le === 0 && !(t.mode & 1) && (Go = Ae() + 500,
    jl && Cn()))
}
function wt(e, t) {
    var r = e.callbackNode;
    FS(e, t);
    var n = Vs(e, e === ze ? Ye : 0);
    if (n === 0)
        r !== null && ym(r),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = n & -n,
    e.callbackPriority !== t) {
        if (r != null && ym(r),
        t === 1)
            e.tag === 0 ? BC(cv.bind(null, e)) : vy(cv.bind(null, e)),
            OC(function() {
                !(le & 6) && Cn()
            }),
            r = null;
        else {
            switch (Vg(n)) {
            case 1:
                r = ff;
                break;
            case 4:
                r = zg;
                break;
            case 16:
                r = Us;
                break;
            case 536870912:
                r = Wg;
                break;
            default:
                r = Us
            }
            r = px(r, ax.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = r
    }
}
function ax(e, t) {
    if (Ts = -1,
    Is = 0,
    le & 6)
        throw Error(j(327));
    var r = e.callbackNode;
    if (Po() && e.callbackNode !== r)
        return null;
    var n = Vs(e, e === ze ? Ye : 0);
    if (n === 0)
        return null;
    if (n & 30 || n & e.expiredLanes || t)
        t = ll(e, n);
    else {
        t = n;
        var o = le;
        le |= 2;
        var i = lx();
        (ze !== e || Ye !== t) && (Nr = null,
        Go = Ae() + 500,
        $n(e, t));
        do
            try {
                oE();
                break
            } catch (s) {
                sx(e, s)
            }
        while (!0);
        Nf(),
        il.current = i,
        le = o,
        Oe !== null ? t = 0 : (ze = null,
        Ye = 0,
        t = Be)
    }
    if (t !== 0) {
        if (t === 2 && (o = Kc(e),
        o !== 0 && (n = o,
        t = bd(e, o))),
        t === 1)
            throw r = oa,
            $n(e, 0),
            Gr(e, n),
            wt(e, Ae()),
            r;
        if (t === 6)
            Gr(e, n);
        else {
            if (o = e.current.alternate,
            !(n & 30) && !rE(o) && (t = ll(e, n),
            t === 2 && (i = Kc(e),
            i !== 0 && (n = i,
            t = bd(e, i))),
            t === 1))
                throw r = oa,
                $n(e, 0),
                Gr(e, n),
                wt(e, Ae()),
                r;
            switch (e.finishedWork = o,
            e.finishedLanes = n,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Rn(e, ht, Nr);
                break;
            case 3:
                if (Gr(e, n),
                (n & 130023424) === n && (t = $f + 500 - Ae(),
                10 < t)) {
                    if (Vs(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & n) !== n) {
                        ft(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = td(Rn.bind(null, e, ht, Nr), t);
                    break
                }
                Rn(e, ht, Nr);
                break;
            case 4:
                if (Gr(e, n),
                (n & 4194240) === n)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < n; ) {
                    var a = 31 - rr(n);
                    i = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    n &= ~i
                }
                if (n = o,
                n = Ae() - n,
                n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * tE(n / 1960)) - n,
                10 < n) {
                    e.timeoutHandle = td(Rn.bind(null, e, ht, Nr), n);
                    break
                }
                Rn(e, ht, Nr);
                break;
            case 5:
                Rn(e, ht, Nr);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return wt(e, Ae()),
    e.callbackNode === r ? ax.bind(null, e) : null
}
function bd(e, t) {
    var r = Bi;
    return e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
    e = ll(e, t),
    e !== 2 && (t = ht,
    ht = r,
    t !== null && Sd(t)),
    e
}
function Sd(e) {
    ht === null ? ht = e : ht.push.apply(ht, e)
}
function rE(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores,
            r !== null))
                for (var n = 0; n < r.length; n++) {
                    var o = r[n]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!or(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child,
        t.subtreeFlags & 16384 && r !== null)
            r.return = t,
            t = r;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Gr(e, t) {
    for (t &= ~_f,
    t &= ~Fl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var r = 31 - rr(t)
          , n = 1 << r;
        e[r] = -1,
        t &= ~n
    }
}
function cv(e) {
    if (le & 6)
        throw Error(j(327));
    Po();
    var t = Vs(e, 0);
    if (!(t & 1))
        return wt(e, Ae()),
        null;
    var r = ll(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = Kc(e);
        n !== 0 && (t = n,
        r = bd(e, n))
    }
    if (r === 1)
        throw r = oa,
        $n(e, 0),
        Gr(e, t),
        wt(e, Ae()),
        r;
    if (r === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Rn(e, ht, Nr),
    wt(e, Ae()),
    null
}
function zf(e, t) {
    var r = le;
    le |= 1;
    try {
        return e(t)
    } finally {
        le = r,
        le === 0 && (Go = Ae() + 500,
        jl && Cn())
    }
}
function Kn(e) {
    Zr !== null && Zr.tag === 0 && !(le & 6) && Po();
    var t = le;
    le |= 1;
    var r = Wt.transition
      , n = fe;
    try {
        if (Wt.transition = null,
        fe = 1,
        e)
            return e()
    } finally {
        fe = n,
        Wt.transition = r,
        le = t,
        !(le & 6) && Cn()
    }
}
function Wf() {
    Ct = wo.current,
    Ce(wo)
}
function $n(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1,
    AC(r)),
    Oe !== null)
        for (r = Oe.return; r !== null; ) {
            var n = r;
            switch (Sf(n),
            n.tag) {
            case 1:
                n = n.type.childContextTypes,
                n != null && Qs();
                break;
            case 3:
                Vo(),
                Ce(yt),
                Ce(ot),
                kf();
                break;
            case 5:
                Rf(n);
                break;
            case 4:
                Vo();
                break;
            case 13:
                Ce(De);
                break;
            case 19:
                Ce(De);
                break;
            case 10:
                Pf(n.type._context);
                break;
            case 22:
            case 23:
                Wf()
            }
            r = r.return
        }
    if (ze = e,
    Oe = e = cn(e.current, null),
    Ye = Ct = t,
    Be = 0,
    oa = null,
    _f = Fl = Gn = 0,
    ht = Bi = null,
    jn !== null) {
        for (t = 0; t < jn.length; t++)
            if (r = jn[t],
            n = r.interleaved,
            n !== null) {
                r.interleaved = null;
                var o = n.next
                  , i = r.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = o,
                    n.next = a
                }
                r.pending = n
            }
        jn = null
    }
    return e
}
function sx(e, t) {
    do {
        var r = Oe;
        try {
            if (Nf(),
            Ns.current = ol,
            nl) {
                for (var n = Te.memoizedState; n !== null; ) {
                    var o = n.queue;
                    o !== null && (o.pending = null),
                    n = n.next
                }
                nl = !1
            }
            if (Hn = 0,
            $e = Le = Te = null,
            Mi = !1,
            ta = 0,
            Ff.current = null,
            r === null || r.return === null) {
                Be = 1,
                oa = t,
                Oe = null;
                break
            }
            e: {
                var i = e
                  , a = r.return
                  , s = r
                  , l = t;
                if (t = Ye,
                s.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , f = s
                      , d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var c = f.alternate;
                        c ? (f.updateQueue = c.updateQueue,
                        f.memoizedState = c.memoizedState,
                        f.lanes = c.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var p = Xm(a);
                    if (p !== null) {
                        p.flags &= -257,
                        Jm(p, a, s, i, t),
                        p.mode & 1 && Ym(i, u, t),
                        t = p,
                        l = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var h = new Set;
                            h.add(l),
                            t.updateQueue = h
                        } else
                            g.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ym(i, u, t),
                            Uf();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (Ne && s.mode & 1) {
                    var w = Xm(a);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Jm(w, a, s, i, t),
                        Cf(Ho(l, s));
                        break e
                    }
                }
                i = l = Ho(l, s),
                Be !== 4 && (Be = 2),
                Bi === null ? Bi = [i] : Bi.push(i),
                i = a;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var y = Vy(i, l, t);
                        Vm(i, y);
                        break e;
                    case 1:
                        s = l;
                        var v = i.type
                          , b = i.stateNode;
                        if (!(i.flags & 128) && (typeof v.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ln === null || !ln.has(b)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = Hy(i, s, t);
                            Vm(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            cx(r)
        } catch (C) {
            t = C,
            Oe === r && r !== null && (Oe = r = r.return);
            continue
        }
        break
    } while (!0)
}
function lx() {
    var e = il.current;
    return il.current = ol,
    e === null ? ol : e
}
function Uf() {
    (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    ze === null || !(Gn & 268435455) && !(Fl & 268435455) || Gr(ze, Ye)
}
function ll(e, t) {
    var r = le;
    le |= 2;
    var n = lx();
    (ze !== e || Ye !== t) && (Nr = null,
    $n(e, t));
    do
        try {
            nE();
            break
        } catch (o) {
            sx(e, o)
        }
    while (!0);
    if (Nf(),
    le = r,
    il.current = n,
    Oe !== null)
        throw Error(j(261));
    return ze = null,
    Ye = 0,
    Be
}
function nE() {
    for (; Oe !== null; )
        ux(Oe)
}
function oE() {
    for (; Oe !== null && !IS(); )
        ux(Oe)
}
function ux(e) {
    var t = fx(e.alternate, e, Ct);
    e.memoizedProps = e.pendingProps,
    t === null ? cx(e) : Oe = t,
    Ff.current = null
}
function cx(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (r = XC(r, t),
            r !== null) {
                r.flags &= 32767,
                Oe = r;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Be = 6,
                Oe = null;
                return
            }
        } else if (r = YC(r, t, Ct),
        r !== null) {
            Oe = r;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Oe = t;
            return
        }
        Oe = t = e
    } while (t !== null);
    Be === 0 && (Be = 5)
}
function Rn(e, t, r) {
    var n = fe
      , o = Wt.transition;
    try {
        Wt.transition = null,
        fe = 1,
        iE(e, t, r, n)
    } finally {
        Wt.transition = o,
        fe = n
    }
    return null
}
function iE(e, t, r, n) {
    do
        Po();
    while (Zr !== null);
    if (le & 6)
        throw Error(j(327));
    r = e.finishedWork;
    var o = e.finishedLanes;
    if (r === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    r === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (_S(e, i),
    e === ze && (Oe = ze = null,
    Ye = 0),
    !(r.subtreeFlags & 2064) && !(r.flags & 2064) || os || (os = !0,
    px(Us, function() {
        return Po(),
        null
    })),
    i = (r.flags & 15990) !== 0,
    r.subtreeFlags & 15990 || i) {
        i = Wt.transition,
        Wt.transition = null;
        var a = fe;
        fe = 1;
        var s = le;
        le |= 4,
        Ff.current = null,
        ZC(e, r),
        ox(r, e),
        NC(Zc),
        Hs = !!Jc,
        Zc = Jc = null,
        e.current = r,
        eE(r),
        RS(),
        le = s,
        fe = a,
        Wt.transition = i
    } else
        e.current = r;
    if (os && (os = !1,
    Zr = e,
    sl = o),
    i = e.pendingLanes,
    i === 0 && (ln = null),
    OS(r.stateNode),
    wt(e, Ae()),
    t !== null)
        for (n = e.onRecoverableError,
        r = 0; r < t.length; r++)
            o = t[r],
            n(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (al)
        throw al = !1,
        e = xd,
        xd = null,
        e;
    return sl & 1 && e.tag !== 0 && Po(),
    i = e.pendingLanes,
    i & 1 ? e === wd ? Fi++ : (Fi = 0,
    wd = e) : Fi = 0,
    Cn(),
    null
}
function Po() {
    if (Zr !== null) {
        var e = Vg(sl)
          , t = Wt.transition
          , r = fe;
        try {
            if (Wt.transition = null,
            fe = 16 > e ? 16 : e,
            Zr === null)
                var n = !1;
            else {
                if (e = Zr,
                Zr = null,
                sl = 0,
                le & 6)
                    throw Error(j(331));
                var o = le;
                for (le |= 4,
                W = e.current; W !== null; ) {
                    var i = W
                      , a = i.child;
                    if (W.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (W = u; W !== null; ) {
                                    var f = W;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Li(8, f, i)
                                    }
                                    var d = f.child;
                                    if (d !== null)
                                        d.return = f,
                                        W = d;
                                    else
                                        for (; W !== null; ) {
                                            f = W;
                                            var c = f.sibling
                                              , p = f.return;
                                            if (tx(f),
                                            f === u) {
                                                W = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = p,
                                                W = c;
                                                break
                                            }
                                            W = p
                                        }
                                }
                            }
                            var g = i.alternate;
                            if (g !== null) {
                                var h = g.child;
                                if (h !== null) {
                                    g.child = null;
                                    do {
                                        var w = h.sibling;
                                        h.sibling = null,
                                        h = w
                                    } while (h !== null)
                                }
                            }
                            W = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null)
                        a.return = i,
                        W = a;
                    else
                        e: for (; W !== null; ) {
                            if (i = W,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Li(9, i, i.return)
                                }
                            var y = i.sibling;
                            if (y !== null) {
                                y.return = i.return,
                                W = y;
                                break e
                            }
                            W = i.return
                        }
                }
                var v = e.current;
                for (W = v; W !== null; ) {
                    a = W;
                    var b = a.child;
                    if (a.subtreeFlags & 2064 && b !== null)
                        b.return = a,
                        W = b;
                    else
                        e: for (a = v; W !== null; ) {
                            if (s = W,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bl(9, s)
                                    }
                                } catch (C) {
                                    ke(s, s.return, C)
                                }
                            if (s === a) {
                                W = null;
                                break e
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return,
                                W = S;
                                break e
                            }
                            W = s.return
                        }
                }
                if (le = o,
                Cn(),
                xr && typeof xr.onPostCommitFiberRoot == "function")
                    try {
                        xr.onPostCommitFiberRoot(Il, e)
                    } catch {}
                n = !0
            }
            return n
        } finally {
            fe = r,
            Wt.transition = t
        }
    }
    return !1
}
function dv(e, t, r) {
    t = Ho(r, t),
    t = Vy(e, t, 1),
    e = sn(e, t, 1),
    t = ft(),
    e !== null && (wa(e, 1, t),
    wt(e, t))
}
function ke(e, t, r) {
    if (e.tag === 3)
        dv(e, e, r);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                dv(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (ln === null || !ln.has(n))) {
                    e = Ho(r, e),
                    e = Hy(t, e, 1),
                    t = sn(t, e, 1),
                    e = ft(),
                    t !== null && (wa(t, 1, e),
                    wt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function aE(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
    t = ft(),
    e.pingedLanes |= e.suspendedLanes & r,
    ze === e && (Ye & r) === r && (Be === 4 || Be === 3 && (Ye & 130023424) === Ye && 500 > Ae() - $f ? $n(e, 0) : _f |= r),
    wt(e, t)
}
function dx(e, t) {
    t === 0 && (e.mode & 1 ? (t = qa,
    qa <<= 1,
    !(qa & 130023424) && (qa = 4194304)) : t = 1);
    var r = ft();
    e = Ar(e, t),
    e !== null && (wa(e, t, r),
    wt(e, r))
}
function sE(e) {
    var t = e.memoizedState
      , r = 0;
    t !== null && (r = t.retryLane),
    dx(e, r)
}
function lE(e, t) {
    var r = 0;
    switch (e.tag) {
    case 13:
        var n = e.stateNode
          , o = e.memoizedState;
        o !== null && (r = o.retryLane);
        break;
    case 19:
        n = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    n !== null && n.delete(t),
    dx(e, r)
}
var fx;
fx = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || yt.current)
            gt = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128))
                return gt = !1,
                QC(e, t, r);
            gt = !!(e.flags & 131072)
        }
    else
        gt = !1,
        Ne && t.flags & 1048576 && hy(t, Js, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var n = t.type;
        Ds(e, t),
        e = t.pendingProps;
        var o = zo(t, ot.current);
        No(t, r),
        o = Of(null, t, n, e, o, r);
        var i = jf();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        xt(n) ? (i = !0,
        Ys(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Tf(t),
        o.updater = Ll,
        t.stateNode = o,
        o._reactInternals = t,
        ld(t, n, e, r),
        t = dd(null, t, n, !0, i, r)) : (t.tag = 0,
        Ne && i && bf(t),
        lt(null, t, o, r),
        t = t.child),
        t;
    case 16:
        n = t.elementType;
        e: {
            switch (Ds(e, t),
            e = t.pendingProps,
            o = n._init,
            n = o(n._payload),
            t.type = n,
            o = t.tag = cE(n),
            e = Yt(n, e),
            o) {
            case 0:
                t = cd(null, t, n, e, r);
                break e;
            case 1:
                t = tv(null, t, n, e, r);
                break e;
            case 11:
                t = Zm(null, t, n, e, r);
                break e;
            case 14:
                t = ev(null, t, n, Yt(n.type, e), r);
                break e
            }
            throw Error(j(306, n, ""))
        }
        return t;
    case 0:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : Yt(n, o),
        cd(e, t, n, o, r);
    case 1:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : Yt(n, o),
        tv(e, t, n, o, r);
    case 3:
        e: {
            if (Qy(t),
            e === null)
                throw Error(j(387));
            n = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Sy(e, t),
            tl(t, n, null, r);
            var a = t.memoizedState;
            if (n = a.element,
            i.isDehydrated)
                if (i = {
                    element: n,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Ho(Error(j(423)), t),
                    t = rv(e, t, n, r, o);
                    break e
                } else if (n !== o) {
                    o = Ho(Error(j(424)), t),
                    t = rv(e, t, n, r, o);
                    break e
                } else
                    for (Nt = an(t.stateNode.containerInfo.firstChild),
                    Dt = t,
                    Ne = !0,
                    er = null,
                    r = wy(t, null, n, r),
                    t.child = r; r; )
                        r.flags = r.flags & -3 | 4096,
                        r = r.sibling;
            else {
                if (Wo(),
                n === o) {
                    t = Or(e, t, r);
                    break e
                }
                lt(e, t, n, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return Cy(t),
        e === null && id(t),
        n = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        a = o.children,
        ed(n, o) ? a = null : i !== null && ed(n, i) && (t.flags |= 32),
        qy(e, t),
        lt(e, t, a, r),
        t.child;
    case 6:
        return e === null && id(t),
        null;
    case 13:
        return Yy(e, t, r);
    case 4:
        return If(t, t.stateNode.containerInfo),
        n = t.pendingProps,
        e === null ? t.child = Uo(t, null, n, r) : lt(e, t, n, r),
        t.child;
    case 11:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : Yt(n, o),
        Zm(e, t, n, o, r);
    case 7:
        return lt(e, t, t.pendingProps, r),
        t.child;
    case 8:
        return lt(e, t, t.pendingProps.children, r),
        t.child;
    case 12:
        return lt(e, t, t.pendingProps.children, r),
        t.child;
    case 10:
        e: {
            if (n = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            a = o.value,
            xe(Zs, n._currentValue),
            n._currentValue = a,
            i !== null)
                if (or(i.value, a)) {
                    if (i.children === o.children && !yt.current) {
                        t = Or(e, t, r);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var s = i.dependencies;
                        if (s !== null) {
                            a = i.child;
                            for (var l = s.firstContext; l !== null; ) {
                                if (l.context === n) {
                                    if (i.tag === 1) {
                                        l = Ir(-1, r & -r),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var f = u.pending;
                                            f === null ? l.next = l : (l.next = f.next,
                                            f.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= r,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= r),
                                    ad(i.return, r, t),
                                    s.lanes |= r;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            a = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (a = i.return,
                            a === null)
                                throw Error(j(341));
                            a.lanes |= r,
                            s = a.alternate,
                            s !== null && (s.lanes |= r),
                            ad(a, r, t),
                            a = i.sibling
                        } else
                            a = i.child;
                        if (a !== null)
                            a.return = i;
                        else
                            for (a = i; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (i = a.sibling,
                                i !== null) {
                                    i.return = a.return,
                                    a = i;
                                    break
                                }
                                a = a.return
                            }
                        i = a
                    }
            lt(e, t, o.children, r),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        n = t.pendingProps.children,
        No(t, r),
        o = Vt(o),
        n = n(o),
        t.flags |= 1,
        lt(e, t, n, r),
        t.child;
    case 14:
        return n = t.type,
        o = Yt(n, t.pendingProps),
        o = Yt(n.type, o),
        ev(e, t, n, o, r);
    case 15:
        return Gy(e, t, t.type, t.pendingProps, r);
    case 17:
        return n = t.type,
        o = t.pendingProps,
        o = t.elementType === n ? o : Yt(n, o),
        Ds(e, t),
        t.tag = 1,
        xt(n) ? (e = !0,
        Ys(t)) : e = !1,
        No(t, r),
        Uy(t, n, o),
        ld(t, n, o, r),
        dd(null, t, n, !0, e, r);
    case 19:
        return Xy(e, t, r);
    case 22:
        return Ky(e, t, r)
    }
    throw Error(j(156, t.tag))
}
;
function px(e, t) {
    return $g(e, t)
}
function uE(e, t, r, n) {
    this.tag = e,
    this.key = r,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = n,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function $t(e, t, r, n) {
    return new uE(e,t,r,n)
}
function Vf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function cE(e) {
    if (typeof e == "function")
        return Vf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === uf)
            return 11;
        if (e === cf)
            return 14
    }
    return 2
}
function cn(e, t) {
    var r = e.alternate;
    return r === null ? (r = $t(e.tag, t, e.key, e.mode),
    r.elementType = e.elementType,
    r.type = e.type,
    r.stateNode = e.stateNode,
    r.alternate = e,
    e.alternate = r) : (r.pendingProps = t,
    r.type = e.type,
    r.flags = 0,
    r.subtreeFlags = 0,
    r.deletions = null),
    r.flags = e.flags & 14680064,
    r.childLanes = e.childLanes,
    r.lanes = e.lanes,
    r.child = e.child,
    r.memoizedProps = e.memoizedProps,
    r.memoizedState = e.memoizedState,
    r.updateQueue = e.updateQueue,
    t = e.dependencies,
    r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    r.sibling = e.sibling,
    r.index = e.index,
    r.ref = e.ref,
    r
}
function Rs(e, t, r, n, o, i) {
    var a = 2;
    if (n = e,
    typeof e == "function")
        Vf(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case uo:
            return zn(r.children, o, i, t);
        case lf:
            a = 8,
            o |= 8;
            break;
        case Ac:
            return e = $t(12, r, t, o | 2),
            e.elementType = Ac,
            e.lanes = i,
            e;
        case Oc:
            return e = $t(13, r, t, o),
            e.elementType = Oc,
            e.lanes = i,
            e;
        case jc:
            return e = $t(19, r, t, o),
            e.elementType = jc,
            e.lanes = i,
            e;
        case Cg:
            return _l(r, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case bg:
                    a = 10;
                    break e;
                case Sg:
                    a = 9;
                    break e;
                case uf:
                    a = 11;
                    break e;
                case cf:
                    a = 14;
                    break e;
                case Ur:
                    a = 16,
                    n = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = $t(a, r, t, o),
    t.elementType = e,
    t.type = n,
    t.lanes = i,
    t
}
function zn(e, t, r, n) {
    return e = $t(7, e, n, t),
    e.lanes = r,
    e
}
function _l(e, t, r, n) {
    return e = $t(22, e, n, t),
    e.elementType = Cg,
    e.lanes = r,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function tc(e, t, r) {
    return e = $t(6, e, null, t),
    e.lanes = r,
    e
}
function rc(e, t, r) {
    return t = $t(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = r,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function dE(e, t, r, n, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Lu(0),
    this.expirationTimes = Lu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Lu(0),
    this.identifierPrefix = n,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Hf(e, t, r, n, o, i, a, s, l) {
    return e = new dE(e,t,r,s,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = $t(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Tf(i),
    e
}
function fE(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: lo,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}
function mx(e) {
    if (!e)
        return vn;
    e = e._reactInternals;
    e: {
        if (eo(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (xt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (xt(r))
            return my(e, r, t)
    }
    return t
}
function vx(e, t, r, n, o, i, a, s, l) {
    return e = Hf(r, n, !0, e, o, i, a, s, l),
    e.context = mx(null),
    r = e.current,
    n = ft(),
    o = un(r),
    i = Ir(n, o),
    i.callback = t ?? null,
    sn(r, i, o),
    e.current.lanes = o,
    wa(e, o, n),
    wt(e, n),
    e
}
function $l(e, t, r, n) {
    var o = t.current
      , i = ft()
      , a = un(o);
    return r = mx(r),
    t.context === null ? t.context = r : t.pendingContext = r,
    t = Ir(i, a),
    t.payload = {
        element: e
    },
    n = n === void 0 ? null : n,
    n !== null && (t.callback = n),
    e = sn(o, t, a),
    e !== null && (nr(e, o, a, i),
    Es(e, o, a)),
    a
}
function ul(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function fv(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function Gf(e, t) {
    fv(e, t),
    (e = e.alternate) && fv(e, t)
}
function pE() {
    return null
}
var hx = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Kf(e) {
    this._internalRoot = e
}
zl.prototype.render = Kf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    $l(e, t, null, null)
}
;
zl.prototype.unmount = Kf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Kn(function() {
            $l(null, e, null, null)
        }),
        t[kr] = null
    }
}
;
function zl(e) {
    this._internalRoot = e
}
zl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Kg();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < Hr.length && t !== 0 && t < Hr[r].priority; r++)
            ;
        Hr.splice(r, 0, e),
        r === 0 && Qg(e)
    }
}
;
function qf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Wl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function pv() {}
function mE(e, t, r, n, o) {
    if (o) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var u = ul(a);
                i.call(u)
            }
        }
        var a = vx(t, n, e, 0, null, !1, !1, "", pv);
        return e._reactRootContainer = a,
        e[kr] = a.current,
        Yi(e.nodeType === 8 ? e.parentNode : e),
        Kn(),
        a
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof n == "function") {
        var s = n;
        n = function() {
            var u = ul(l);
            s.call(u)
        }
    }
    var l = Hf(e, 0, !1, null, null, !1, !1, "", pv);
    return e._reactRootContainer = l,
    e[kr] = l.current,
    Yi(e.nodeType === 8 ? e.parentNode : e),
    Kn(function() {
        $l(t, l, r, n)
    }),
    l
}
function Ul(e, t, r, n, o) {
    var i = r._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var l = ul(a);
                s.call(l)
            }
        }
        $l(t, a, e, o)
    } else
        a = mE(r, t, e, o, n);
    return ul(a)
}
Hg = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = Di(t.pendingLanes);
            r !== 0 && (pf(t, r | 1),
            wt(t, Ae()),
            !(le & 6) && (Go = Ae() + 500,
            Cn()))
        }
        break;
    case 13:
        Kn(function() {
            var n = Ar(e, 1);
            if (n !== null) {
                var o = ft();
                nr(n, e, 1, o)
            }
        }),
        Gf(e, 1)
    }
}
;
mf = function(e) {
    if (e.tag === 13) {
        var t = Ar(e, 134217728);
        if (t !== null) {
            var r = ft();
            nr(t, e, 134217728, r)
        }
        Gf(e, 134217728)
    }
}
;
Gg = function(e) {
    if (e.tag === 13) {
        var t = un(e)
          , r = Ar(e, t);
        if (r !== null) {
            var n = ft();
            nr(r, e, t, n)
        }
        Gf(e, t)
    }
}
;
Kg = function() {
    return fe
}
;
qg = function(e, t) {
    var r = fe;
    try {
        return fe = e,
        t()
    } finally {
        fe = r
    }
}
;
Vc = function(e, t, r) {
    switch (t) {
    case "input":
        if (Bc(e, r),
        t = r.name,
        r.type === "radio" && t != null) {
            for (r = e; r.parentNode; )
                r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                    var o = Ol(n);
                    if (!o)
                        throw Error(j(90));
                    Ng(n),
                    Bc(n, o)
                }
            }
        }
        break;
    case "textarea":
        Dg(e, r);
        break;
    case "select":
        t = r.value,
        t != null && bo(e, !!r.multiple, t, !1)
    }
}
;
jg = zf;
Mg = Kn;
var vE = {
    usingClientEntryPoint: !1,
    Events: [Sa, mo, Ol, Ag, Og, zf]
}
  , xi = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , hE = {
    bundleType: xi.bundleType,
    version: xi.version,
    rendererPackageName: xi.rendererPackageName,
    rendererConfig: xi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Fg(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: xi.findFiberByHostInstance || pE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!is.isDisabled && is.supportsFiber)
        try {
            Il = is.inject(hE),
            xr = is
        } catch {}
}
Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vE;
Ot.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qf(t))
        throw Error(j(200));
    return fE(e, t, null, r)
}
;
Ot.createRoot = function(e, t) {
    if (!qf(e))
        throw Error(j(299));
    var r = !1
      , n = ""
      , o = hx;
    return t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Hf(e, 1, !1, null, null, r, !1, n, o),
    e[kr] = t.current,
    Yi(e.nodeType === 8 ? e.parentNode : e),
    new Kf(t)
}
;
Ot.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = Fg(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ot.flushSync = function(e) {
    return Kn(e)
}
;
Ot.hydrate = function(e, t, r) {
    if (!Wl(t))
        throw Error(j(200));
    return Ul(null, e, t, !0, r)
}
;
Ot.hydrateRoot = function(e, t, r) {
    if (!qf(e))
        throw Error(j(405));
    var n = r != null && r.hydratedSources || null
      , o = !1
      , i = ""
      , a = hx;
    if (r != null && (r.unstable_strictMode === !0 && (o = !0),
    r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
    r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    t = vx(t, null, e, 1, r ?? null, o, !1, i, a),
    e[kr] = t.current,
    Yi(e),
    n)
        for (e = 0; e < n.length; e++)
            r = n[e],
            o = r._getVersion,
            o = o(r._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
    return new zl(t)
}
;
Ot.render = function(e, t, r) {
    if (!Wl(t))
        throw Error(j(200));
    return Ul(null, e, t, !1, r)
}
;
Ot.unmountComponentAtNode = function(e) {
    if (!Wl(e))
        throw Error(j(40));
    return e._reactRootContainer ? (Kn(function() {
        Ul(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[kr] = null
        })
    }),
    !0) : !1
}
;
Ot.unstable_batchedUpdates = zf;
Ot.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!Wl(r))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Ul(e, t, r, !1, n)
}
;
Ot.version = "18.3.1-next-f1338f8080-20240426";
function gx() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gx)
        } catch (e) {
            console.error(e)
        }
}
gx(),
gg.exports = Ot;
var En = gg.exports;
const Qf = Zd(En);
var yx, mv = En;
yx = mv.createRoot,
mv.hydrateRoot;
const gE = 1
  , yE = 1e6;
let nc = 0;
function xE() {
    return nc = (nc + 1) % Number.MAX_SAFE_INTEGER,
    nc.toString()
}
const oc = new Map
  , vv = e => {
    if (oc.has(e))
        return;
    const t = setTimeout( () => {
        oc.delete(e),
        _i({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , yE);
    oc.set(e, t)
}
  , wE = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, gE)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(r => r.id === t.toast.id ? {
                ...r,
                ...t.toast
            } : r)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: r} = t;
            return r ? vv(r) : e.toasts.forEach(n => {
                vv(n.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(n => n.id === r || r === void 0 ? {
                    ...n,
                    open: !1
                } : n)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(r => r.id !== t.toastId)
        }
    }
}
  , ks = [];
let As = {
    toasts: []
};
function _i(e) {
    As = wE(As, e),
    ks.forEach(t => {
        t(As)
    }
    )
}
function bE({...e}) {
    const t = xE()
      , r = o => _i({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , n = () => _i({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return _i({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || n()
            }
        }
    }),
    {
        id: t,
        dismiss: n,
        update: r
    }
}
function Yf() {
    const [e,t] = x.useState(As);
    return x.useEffect( () => (ks.push(t),
    () => {
        const r = ks.indexOf(t);
        r > -1 && ks.splice(r, 1)
    }
    ), [e]),
    {
        ...e,
        toast: bE,
        dismiss: r => _i({
            type: "DISMISS_TOAST",
            toastId: r
        })
    }
}
function J(e, t, {checkForDefaultPrevented: r=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        r === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function SE(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function xx(...e) {
    return t => e.forEach(r => SE(r, t))
}
function Ee(...e) {
    return x.useCallback(xx(...e), e)
}
function CE(e, t=[]) {
    let r = [];
    function n(i, a) {
        const s = x.createContext(a)
          , l = r.length;
        r = [...r, a];
        function u(d) {
            const {scope: c, children: p, ...g} = d
              , h = (c == null ? void 0 : c[e][l]) || s
              , w = x.useMemo( () => g, Object.values(g));
            return m.jsx(h.Provider, {
                value: w,
                children: p
            })
        }
        function f(d, c) {
            const p = (c == null ? void 0 : c[e][l]) || s
              , g = x.useContext(p);
            if (g)
                return g;
            if (a !== void 0)
                return a;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, f]
    }
    const o = () => {
        const i = r.map(a => x.createContext(a));
        return function(s) {
            const l = (s == null ? void 0 : s[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: l
                }
            }), [s, l])
        }
    }
    ;
    return o.scopeName = e,
    [n, EE(o, ...t)]
}
function EE(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = () => {
        const n = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const a = n.reduce( (s, {useScope: l, scopeName: u}) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...s,
                    ...d
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
var qn = x.forwardRef( (e, t) => {
    const {children: r, ...n} = e
      , o = x.Children.toArray(r)
      , i = o.find(NE);
    if (i) {
        const a = i.props.children
          , s = o.map(l => l === i ? x.Children.count(a) > 1 ? x.Children.only(null) : x.isValidElement(a) ? a.props.children : null : l);
        return m.jsx(Cd, {
            ...n,
            ref: t,
            children: x.isValidElement(a) ? x.cloneElement(a, void 0, s) : null
        })
    }
    return m.jsx(Cd, {
        ...n,
        ref: t,
        children: r
    })
}
);
qn.displayName = "Slot";
var Cd = x.forwardRef( (e, t) => {
    const {children: r, ...n} = e;
    if (x.isValidElement(r)) {
        const o = DE(r);
        return x.cloneElement(r, {
            ...PE(n, r.props),
            ref: t ? xx(t, o) : o
        })
    }
    return x.Children.count(r) > 1 ? x.Children.only(null) : null
}
);
Cd.displayName = "SlotClone";
var wx = ({children: e}) => m.jsx(m.Fragment, {
    children: e
});
function NE(e) {
    return x.isValidElement(e) && e.type === wx
}
function PE(e, t) {
    const r = {
        ...t
    };
    for (const n in t) {
        const o = e[n]
          , i = t[n];
        /^on[A-Z]/.test(n) ? o && i ? r[n] = (...s) => {
            i(...s),
            o(...s)
        }
        : o && (r[n] = o) : n === "style" ? r[n] = {
            ...o,
            ...i
        } : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...r
    }
}
function DE(e) {
    var n, o;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
function bx(e) {
    const t = e + "CollectionProvider"
      , [r,n] = CE(t)
      , [o,i] = r(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , a = p => {
        const {scope: g, children: h} = p
          , w = R.useRef(null)
          , y = R.useRef(new Map).current;
        return m.jsx(o, {
            scope: g,
            itemMap: y,
            collectionRef: w,
            children: h
        })
    }
    ;
    a.displayName = t;
    const s = e + "CollectionSlot"
      , l = R.forwardRef( (p, g) => {
        const {scope: h, children: w} = p
          , y = i(s, h)
          , v = Ee(g, y.collectionRef);
        return m.jsx(qn, {
            ref: v,
            children: w
        })
    }
    );
    l.displayName = s;
    const u = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , d = R.forwardRef( (p, g) => {
        const {scope: h, children: w, ...y} = p
          , v = R.useRef(null)
          , b = Ee(g, v)
          , S = i(u, h);
        return R.useEffect( () => (S.itemMap.set(v, {
            ref: v,
            ...y
        }),
        () => void S.itemMap.delete(v))),
        m.jsx(qn, {
            [f]: "",
            ref: b,
            children: w
        })
    }
    );
    d.displayName = u;
    function c(p) {
        const g = i(e + "CollectionConsumer", p);
        return R.useCallback( () => {
            const w = g.collectionRef.current;
            if (!w)
                return [];
            const y = Array.from(w.querySelectorAll(`[${f}]`));
            return Array.from(g.itemMap.values()).sort( (S, C) => y.indexOf(S.ref.current) - y.indexOf(C.ref.current))
        }
        , [g.collectionRef, g.itemMap])
    }
    return [{
        Provider: a,
        Slot: l,
        ItemSlot: d
    }, c, n]
}
function TE(e, t) {
    const r = x.createContext(t)
      , n = i => {
        const {children: a, ...s} = i
          , l = x.useMemo( () => s, Object.values(s));
        return m.jsx(r.Provider, {
            value: l,
            children: a
        })
    }
    ;
    n.displayName = e + "Provider";
    function o(i) {
        const a = x.useContext(r);
        if (a)
            return a;
        if (t !== void 0)
            return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    return [n, o]
}
function Vl(e, t=[]) {
    let r = [];
    function n(i, a) {
        const s = x.createContext(a)
          , l = r.length;
        r = [...r, a];
        const u = d => {
            var y;
            const {scope: c, children: p, ...g} = d
              , h = ((y = c == null ? void 0 : c[e]) == null ? void 0 : y[l]) || s
              , w = x.useMemo( () => g, Object.values(g));
            return m.jsx(h.Provider, {
                value: w,
                children: p
            })
        }
        ;
        u.displayName = i + "Provider";
        function f(d, c) {
            var h;
            const p = ((h = c == null ? void 0 : c[e]) == null ? void 0 : h[l]) || s
              , g = x.useContext(p);
            if (g)
                return g;
            if (a !== void 0)
                return a;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, f]
    }
    const o = () => {
        const i = r.map(a => x.createContext(a));
        return function(s) {
            const l = (s == null ? void 0 : s[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: l
                }
            }), [s, l])
        }
    }
    ;
    return o.scopeName = e,
    [n, IE(o, ...t)]
}
function IE(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = () => {
        const n = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const a = n.reduce( (s, {useScope: l, scopeName: u}) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...s,
                    ...d
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
var RE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , ue = RE.reduce( (e, t) => {
    const r = x.forwardRef( (n, o) => {
        const {asChild: i, ...a} = n
          , s = i ? qn : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        m.jsx(s, {
            ...a,
            ref: o
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Sx(e, t) {
    e && En.flushSync( () => e.dispatchEvent(t))
}
function At(e) {
    const t = x.useRef(e);
    return x.useEffect( () => {
        t.current = e
    }
    ),
    x.useMemo( () => (...r) => {
        var n;
        return (n = t.current) == null ? void 0 : n.call(t, ...r)
    }
    , [])
}
function kE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = At(e);
    x.useEffect( () => {
        const n = o => {
            o.key === "Escape" && r(o)
        }
        ;
        return t.addEventListener("keydown", n, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", n, {
            capture: !0
        })
    }
    , [r, t])
}
var AE = "DismissableLayer", Ed = "dismissableLayer.update", OE = "dismissableLayer.pointerDownOutside", jE = "dismissableLayer.focusOutside", hv, Cx = x.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Ea = x.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: r=!1, onEscapeKeyDown: n, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...l} = e
      , u = x.useContext(Cx)
      , [f,d] = x.useState(null)
      , c = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = x.useState({})
      , g = Ee(t, N => d(N))
      , h = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = h.indexOf(w)
      , v = f ? h.indexOf(f) : -1
      , b = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = v >= y
      , C = LE(N => {
        const D = N.target
          , I = [...u.branches].some(k => k.contains(D));
        !S || I || (o == null || o(N),
        a == null || a(N),
        N.defaultPrevented || s == null || s())
    }
    , c)
      , E = BE(N => {
        const D = N.target;
        [...u.branches].some(k => k.contains(D)) || (i == null || i(N),
        a == null || a(N),
        N.defaultPrevented || s == null || s())
    }
    , c);
    return kE(N => {
        v === u.layers.size - 1 && (n == null || n(N),
        !N.defaultPrevented && s && (N.preventDefault(),
        s()))
    }
    , c),
    x.useEffect( () => {
        if (f)
            return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (hv = c.body.style.pointerEvents,
            c.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            gv(),
            () => {
                r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = hv)
            }
    }
    , [f, c, r, u]),
    x.useEffect( () => () => {
        f && (u.layers.delete(f),
        u.layersWithOutsidePointerEventsDisabled.delete(f),
        gv())
    }
    , [f, u]),
    x.useEffect( () => {
        const N = () => p({});
        return document.addEventListener(Ed, N),
        () => document.removeEventListener(Ed, N)
    }
    , []),
    m.jsx(ue.div, {
        ...l,
        ref: g,
        style: {
            pointerEvents: b ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: J(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: J(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Ea.displayName = AE;
var ME = "DismissableLayerBranch"
  , Ex = x.forwardRef( (e, t) => {
    const r = x.useContext(Cx)
      , n = x.useRef(null)
      , o = Ee(t, n);
    return x.useEffect( () => {
        const i = n.current;
        if (i)
            return r.branches.add(i),
            () => {
                r.branches.delete(i)
            }
    }
    , [r.branches]),
    m.jsx(ue.div, {
        ...e,
        ref: o
    })
}
);
Ex.displayName = ME;
function LE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = At(e)
      , n = x.useRef(!1)
      , o = x.useRef( () => {}
    );
    return x.useEffect( () => {
        const i = s => {
            if (s.target && !n.current) {
                let l = function() {
                    Nx(OE, r, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: s
                };
                s.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            n.current = !1
        }
          , a = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(a),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, r]),
    {
        onPointerDownCapture: () => n.current = !0
    }
}
function BE(e, t=globalThis == null ? void 0 : globalThis.document) {
    const r = At(e)
      , n = x.useRef(!1);
    return x.useEffect( () => {
        const o = i => {
            i.target && !n.current && Nx(jE, r, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, r]),
    {
        onFocusCapture: () => n.current = !0,
        onBlurCapture: () => n.current = !1
    }
}
function gv() {
    const e = new CustomEvent(Ed);
    document.dispatchEvent(e)
}
function Nx(e, t, r, {discrete: n}) {
    const o = r.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: r
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    n ? Sx(o, i) : o.dispatchEvent(i)
}
var FE = Ea
  , _E = Ex
  , it = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {}
  , $E = "Portal"
  , Hl = x.forwardRef( (e, t) => {
    var s;
    const {container: r, ...n} = e
      , [o,i] = x.useState(!1);
    it( () => i(!0), []);
    const a = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
    return a ? Qf.createPortal(m.jsx(ue.div, {
        ...n,
        ref: t
    }), a) : null
}
);
Hl.displayName = $E;
function zE(e, t) {
    return x.useReducer( (r, n) => t[r][n] ?? r, e)
}
var ti = e => {
    const {present: t, children: r} = e
      , n = WE(t)
      , o = typeof r == "function" ? r({
        present: n.isPresent
    }) : x.Children.only(r)
      , i = Ee(n.ref, UE(o));
    return typeof r == "function" || n.isPresent ? x.cloneElement(o, {
        ref: i
    }) : null
}
;
ti.displayName = "Presence";
function WE(e) {
    const [t,r] = x.useState()
      , n = x.useRef({})
      , o = x.useRef(e)
      , i = x.useRef("none")
      , a = e ? "mounted" : "unmounted"
      , [s,l] = zE(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect( () => {
        const u = as(n.current);
        i.current = s === "mounted" ? u : "none"
    }
    , [s]),
    it( () => {
        const u = n.current
          , f = o.current;
        if (f !== e) {
            const c = i.current
              , p = as(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && c !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    it( () => {
        if (t) {
            let u;
            const f = t.ownerDocument.defaultView ?? window
              , d = p => {
                const h = as(n.current).includes(p.animationName);
                if (p.target === t && h && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = f.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , c = p => {
                p.target === t && (i.current = as(n.current))
            }
            ;
            return t.addEventListener("animationstart", c),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                f.clearTimeout(u),
                t.removeEventListener("animationstart", c),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: x.useCallback(u => {
            u && (n.current = getComputedStyle(u)),
            r(u)
        }
        , [])
    }
}
function as(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function UE(e) {
    var n, o;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get
      , r = t && "isReactWarning"in t && t.isReactWarning;
    return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    r = t && "isReactWarning"in t && t.isReactWarning,
    r ? e.props.ref : e.props.ref || e.ref)
}
function cl({prop: e, defaultProp: t, onChange: r= () => {}
}) {
    const [n,o] = VE({
        defaultProp: t,
        onChange: r
    })
      , i = e !== void 0
      , a = i ? e : n
      , s = At(r)
      , l = x.useCallback(u => {
        if (i) {
            const d = typeof u == "function" ? u(e) : u;
            d !== e && s(d)
        } else
            o(u)
    }
    , [i, e, o, s]);
    return [a, l]
}
function VE({defaultProp: e, onChange: t}) {
    const r = x.useState(e)
      , [n] = r
      , o = x.useRef(n)
      , i = At(t);
    return x.useEffect( () => {
        o.current !== n && (i(n),
        o.current = n)
    }
    , [n, o, i]),
    r
}
var HE = "VisuallyHidden"
  , Na = x.forwardRef( (e, t) => m.jsx(ue.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Na.displayName = HE;
var GE = Na
  , Xf = "ToastProvider"
  , [Jf,KE,qE] = bx("Toast")
  , [Px,tL] = Vl("Toast", [qE])
  , [QE,Gl] = Px(Xf)
  , Dx = e => {
    const {__scopeToast: t, label: r="Notification", duration: n=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: a} = e
      , [s,l] = x.useState(null)
      , [u,f] = x.useState(0)
      , d = x.useRef(!1)
      , c = x.useRef(!1);
    return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Xf}\`. Expected non-empty \`string\`.`),
    m.jsx(Jf.Provider, {
        scope: t,
        children: m.jsx(QE, {
            scope: t,
            label: r,
            duration: n,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: s,
            onViewportChange: l,
            onToastAdd: x.useCallback( () => f(p => p + 1), []),
            onToastRemove: x.useCallback( () => f(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: c,
            children: a
        })
    })
}
;
Dx.displayName = Xf;
var Tx = "ToastViewport"
  , YE = ["F8"]
  , Nd = "toast.viewportPause"
  , Pd = "toast.viewportResume"
  , Ix = x.forwardRef( (e, t) => {
    const {__scopeToast: r, hotkey: n=YE, label: o="Notifications ({hotkey})", ...i} = e
      , a = Gl(Tx, r)
      , s = KE(r)
      , l = x.useRef(null)
      , u = x.useRef(null)
      , f = x.useRef(null)
      , d = x.useRef(null)
      , c = Ee(t, d, a.onViewportChange)
      , p = n.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , g = a.toastCount > 0;
    x.useEffect( () => {
        const w = y => {
            var b;
            n.length !== 0 && n.every(S => y[S] || y.code === S) && ((b = d.current) == null || b.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [n]),
    x.useEffect( () => {
        const w = l.current
          , y = d.current;
        if (g && w && y) {
            const v = () => {
                if (!a.isClosePausedRef.current) {
                    const E = new CustomEvent(Nd);
                    y.dispatchEvent(E),
                    a.isClosePausedRef.current = !0
                }
            }
              , b = () => {
                if (a.isClosePausedRef.current) {
                    const E = new CustomEvent(Pd);
                    y.dispatchEvent(E),
                    a.isClosePausedRef.current = !1
                }
            }
              , S = E => {
                !w.contains(E.relatedTarget) && b()
            }
              , C = () => {
                w.contains(document.activeElement) || b()
            }
            ;
            return w.addEventListener("focusin", v),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", v),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", v),
            window.addEventListener("focus", b),
            () => {
                w.removeEventListener("focusin", v),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", v),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", v),
                window.removeEventListener("focus", b)
            }
        }
    }
    , [g, a.isClosePausedRef]);
    const h = x.useCallback( ({tabbingDirection: w}) => {
        const v = s().map(b => {
            const S = b.ref.current
              , C = [S, ...uN(S)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? v.reverse() : v).flat()
    }
    , [s]);
    return x.useEffect( () => {
        const w = d.current;
        if (w) {
            const y = v => {
                var C, E, N;
                const b = v.altKey || v.ctrlKey || v.metaKey;
                if (v.key === "Tab" && !b) {
                    const D = document.activeElement
                      , I = v.shiftKey;
                    if (v.target === w && I) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const B = h({
                        tabbingDirection: I ? "backwards" : "forwards"
                    })
                      , U = B.findIndex(A => A === D);
                    ic(B.slice(U + 1)) ? v.preventDefault() : I ? (E = u.current) == null || E.focus() : (N = f.current) == null || N.focus()
                }
            }
            ;
            return w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
        }
    }
    , [s, h]),
    m.jsxs(_E, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: g ? void 0 : "none"
        },
        children: [g && m.jsx(Dd, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = h({
                    tabbingDirection: "forwards"
                });
                ic(w)
            }
        }), m.jsx(Jf.Slot, {
            scope: r,
            children: m.jsx(ue.ol, {
                tabIndex: -1,
                ...i,
                ref: c
            })
        }), g && m.jsx(Dd, {
            ref: f,
            onFocusFromOutsideViewport: () => {
                const w = h({
                    tabbingDirection: "backwards"
                });
                ic(w)
            }
        })]
    })
}
);
Ix.displayName = Tx;
var Rx = "ToastFocusProxy"
  , Dd = x.forwardRef( (e, t) => {
    const {__scopeToast: r, onFocusFromOutsideViewport: n, ...o} = e
      , i = Gl(Rx, r);
    return m.jsx(Na, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: a => {
            var u;
            const s = a.relatedTarget;
            !((u = i.viewport) != null && u.contains(s)) && n()
        }
    })
}
);
Dd.displayName = Rx;
var Kl = "Toast"
  , XE = "toast.swipeStart"
  , JE = "toast.swipeMove"
  , ZE = "toast.swipeCancel"
  , eN = "toast.swipeEnd"
  , kx = x.forwardRef( (e, t) => {
    const {forceMount: r, open: n, defaultOpen: o, onOpenChange: i, ...a} = e
      , [s=!0,l] = cl({
        prop: n,
        defaultProp: o,
        onChange: i
    });
    return m.jsx(ti, {
        present: r || s,
        children: m.jsx(nN, {
            open: s,
            ...a,
            ref: t,
            onClose: () => l(!1),
            onPause: At(e.onPause),
            onResume: At(e.onResume),
            onSwipeStart: J(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: J(e.onSwipeMove, u => {
                const {x: f, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: J(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: J(e.onSwipeEnd, u => {
                const {x: f, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
kx.displayName = Kl;
var [tN,rN] = Px(Kl, {
    onClose() {}
})
  , nN = x.forwardRef( (e, t) => {
    const {__scopeToast: r, type: n="foreground", duration: o, open: i, onClose: a, onEscapeKeyDown: s, onPause: l, onResume: u, onSwipeStart: f, onSwipeMove: d, onSwipeCancel: c, onSwipeEnd: p, ...g} = e
      , h = Gl(Kl, r)
      , [w,y] = x.useState(null)
      , v = Ee(t, A => y(A))
      , b = x.useRef(null)
      , S = x.useRef(null)
      , C = o || h.duration
      , E = x.useRef(0)
      , N = x.useRef(C)
      , D = x.useRef(0)
      , {onToastAdd: I, onToastRemove: k} = h
      , M = At( () => {
        var V;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((V = h.viewport) == null || V.focus()),
        a()
    }
    )
      , B = x.useCallback(A => {
        !A || A === 1 / 0 || (window.clearTimeout(D.current),
        E.current = new Date().getTime(),
        D.current = window.setTimeout(M, A))
    }
    , [M]);
    x.useEffect( () => {
        const A = h.viewport;
        if (A) {
            const V = () => {
                B(N.current),
                u == null || u()
            }
              , _ = () => {
                const K = new Date().getTime() - E.current;
                N.current = N.current - K,
                window.clearTimeout(D.current),
                l == null || l()
            }
            ;
            return A.addEventListener(Nd, _),
            A.addEventListener(Pd, V),
            () => {
                A.removeEventListener(Nd, _),
                A.removeEventListener(Pd, V)
            }
        }
    }
    , [h.viewport, C, l, u, B]),
    x.useEffect( () => {
        i && !h.isClosePausedRef.current && B(C)
    }
    , [i, C, h.isClosePausedRef, B]),
    x.useEffect( () => (I(),
    () => k()), [I, k]);
    const U = x.useMemo( () => w ? Fx(w) : null, [w]);
    return h.viewport ? m.jsxs(m.Fragment, {
        children: [U && m.jsx(oN, {
            __scopeToast: r,
            role: "status",
            "aria-live": n === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: U
        }), m.jsx(tN, {
            scope: r,
            onClose: M,
            children: En.createPortal(m.jsx(Jf.ItemSlot, {
                scope: r,
                children: m.jsx(FE, {
                    asChild: !0,
                    onEscapeKeyDown: J(s, () => {
                        h.isFocusedToastEscapeKeyDownRef.current || M(),
                        h.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: m.jsx(ue.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": h.swipeDirection,
                        ...g,
                        ref: v,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: J(e.onKeyDown, A => {
                            A.key === "Escape" && (s == null || s(A.nativeEvent),
                            A.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0,
                            M()))
                        }
                        ),
                        onPointerDown: J(e.onPointerDown, A => {
                            A.button === 0 && (b.current = {
                                x: A.clientX,
                                y: A.clientY
                            })
                        }
                        ),
                        onPointerMove: J(e.onPointerMove, A => {
                            if (!b.current)
                                return;
                            const V = A.clientX - b.current.x
                              , _ = A.clientY - b.current.y
                              , K = !!S.current
                              , P = ["left", "right"].includes(h.swipeDirection)
                              , O = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max
                              , $ = P ? O(0, V) : 0
                              , F = P ? 0 : O(0, _)
                              , z = A.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: $,
                                y: F
                            }
                              , oe = {
                                originalEvent: A,
                                delta: Q
                            };
                            K ? (S.current = Q,
                            ss(JE, d, oe, {
                                discrete: !1
                            })) : yv(Q, h.swipeDirection, z) ? (S.current = Q,
                            ss(XE, f, oe, {
                                discrete: !1
                            }),
                            A.target.setPointerCapture(A.pointerId)) : (Math.abs(V) > z || Math.abs(_) > z) && (b.current = null)
                        }
                        ),
                        onPointerUp: J(e.onPointerUp, A => {
                            const V = S.current
                              , _ = A.target;
                            if (_.hasPointerCapture(A.pointerId) && _.releasePointerCapture(A.pointerId),
                            S.current = null,
                            b.current = null,
                            V) {
                                const K = A.currentTarget
                                  , P = {
                                    originalEvent: A,
                                    delta: V
                                };
                                yv(V, h.swipeDirection, h.swipeThreshold) ? ss(eN, p, P, {
                                    discrete: !0
                                }) : ss(ZE, c, P, {
                                    discrete: !0
                                }),
                                K.addEventListener("click", O => O.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), h.viewport)
        })]
    }) : null
}
)
  , oN = e => {
    const {__scopeToast: t, children: r, ...n} = e
      , o = Gl(Kl, t)
      , [i,a] = x.useState(!1)
      , [s,l] = x.useState(!1);
    return sN( () => a(!0)),
    x.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    s ? null : m.jsx(Hl, {
        asChild: !0,
        children: m.jsx(Na, {
            ...n,
            children: i && m.jsxs(m.Fragment, {
                children: [o.label, " ", r]
            })
        })
    })
}
  , iN = "ToastTitle"
  , Ax = x.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e;
    return m.jsx(ue.div, {
        ...n,
        ref: t
    })
}
);
Ax.displayName = iN;
var aN = "ToastDescription"
  , Ox = x.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e;
    return m.jsx(ue.div, {
        ...n,
        ref: t
    })
}
);
Ox.displayName = aN;
var jx = "ToastAction"
  , Mx = x.forwardRef( (e, t) => {
    const {altText: r, ...n} = e;
    return r.trim() ? m.jsx(Bx, {
        altText: r,
        asChild: !0,
        children: m.jsx(Zf, {
            ...n,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${jx}\`. Expected non-empty \`string\`.`),
    null)
}
);
Mx.displayName = jx;
var Lx = "ToastClose"
  , Zf = x.forwardRef( (e, t) => {
    const {__scopeToast: r, ...n} = e
      , o = rN(Lx, r);
    return m.jsx(Bx, {
        asChild: !0,
        children: m.jsx(ue.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: J(e.onClick, o.onClose)
        })
    })
}
);
Zf.displayName = Lx;
var Bx = x.forwardRef( (e, t) => {
    const {__scopeToast: r, altText: n, ...o} = e;
    return m.jsx(ue.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": n || void 0,
        ...o,
        ref: t
    })
}
);
function Fx(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(n => {
        if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        lN(n)) {
            const o = n.ariaHidden || n.hidden || n.style.display === "none"
              , i = n.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const a = n.dataset.radixToastAnnounceAlt;
                    a && t.push(a)
                } else
                    t.push(...Fx(n))
        }
    }
    ),
    t
}
function ss(e, t, r, {discrete: n}) {
    const o = r.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: r
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    n ? Sx(o, i) : o.dispatchEvent(i)
}
var yv = (e, t, r=0) => {
    const n = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = n > o;
    return t === "left" || t === "right" ? i && n > r : !i && o > r
}
;
function sN(e= () => {}
) {
    const t = At(e);
    it( () => {
        let r = 0
          , n = 0;
        return r = window.requestAnimationFrame( () => n = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(r),
            window.cancelAnimationFrame(n)
        }
    }
    , [t])
}
function lN(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function uN(e) {
    const t = []
      , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: n => {
            const o = n.tagName === "INPUT" && n.type === "hidden";
            return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        t.push(r.currentNode);
    return t
}
function ic(e) {
    const t = document.activeElement;
    return e.some(r => r === t ? !0 : (r.focus(),
    document.activeElement !== t))
}
var cN = Dx
  , _x = Ix
  , $x = kx
  , zx = Ax
  , Wx = Ox
  , Ux = Mx
  , Vx = Zf;
function Hx(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number")
        n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (r = Hx(e[t])) && (n && (n += " "),
                n += r)
        } else
            for (r in e)
                e[r] && (n && (n += " "),
                n += r);
    return n
}
function Gx() {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
        (e = arguments[r]) && (t = Hx(e)) && (n && (n += " "),
        n += t);
    return n
}
const xv = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , wv = Gx
  , ep = (e, t) => r => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
        return wv(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const {variants: o, defaultVariants: i} = t
      , a = Object.keys(o).map(u => {
        const f = r == null ? void 0 : r[u]
          , d = i == null ? void 0 : i[u];
        if (f === null)
            return null;
        const c = xv(f) || xv(d);
        return o[u][c]
    }
    )
      , s = r && Object.entries(r).reduce( (u, f) => {
        let[d,c] = f;
        return c === void 0 || (u[d] = c),
        u
    }
    , {})
      , l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce( (u, f) => {
        let {class: d, className: c, ...p} = f;
        return Object.entries(p).every(g => {
            let[h,w] = g;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...s
            }[h]) : {
                ...i,
                ...s
            }[h] === w
        }
        ) ? [...u, d, c] : u
    }
    , []);
    return wv(e, a, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dN = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Kx = (...e) => e.filter( (t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fN = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pN = x.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: r=2, absoluteStrokeWidth: n, className: o="", children: i, iconNode: a, ...s}, l) => x.createElement("svg", {
    ref: l,
    ...fN,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: n ? Number(r) * 24 / Number(t) : r,
    className: Kx("lucide", o),
    ...s
}, [...a.map( ([u,f]) => x.createElement(u, f)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = (e, t) => {
    const r = x.forwardRef( ({className: n, ...o}, i) => x.createElement(pN, {
        ref: i,
        iconNode: t,
        className: Kx(`lucide-${dN(e)}`, n),
        ...o
    }));
    return r.displayName = `${e}`,
    r
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mN = je("Archive", [["rect", {
    width: "20",
    height: "5",
    x: "2",
    y: "3",
    rx: "1",
    key: "1wp1u1"
}], ["path", {
    d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
    key: "1s80jp"
}], ["path", {
    d: "M10 12h4",
    key: "a56b0p"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vN = je("ArrowLeftRight", [["path", {
    d: "M8 3 4 7l4 4",
    key: "9rb6wj"
}], ["path", {
    d: "M4 7h16",
    key: "6tx8e3"
}], ["path", {
    d: "m16 21 4-4-4-4",
    key: "siv7j2"
}], ["path", {
    d: "M20 17H4",
    key: "h6l3hr"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qx = je("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hN = je("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qx = je("ChartColumn", [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gN = je("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yx = je("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yN = je("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bv = je("Goal", [["path", {
    d: "M12 13V2l8 4-8 4",
    key: "5wlwwj"
}], ["path", {
    d: "M20.561 10.222a9 9 0 1 1-12.55-5.29",
    key: "1c0wjv"
}], ["path", {
    d: "M8.002 9.997a5 5 0 1 0 8.9 2.02",
    key: "gb1g7m"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Td = je("Play", [["polygon", {
    points: "6 3 20 12 6 21 6 3",
    key: "1oa8hb"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sv = je("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xN = je("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = je("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = je("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = je("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = je("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wN = je("Undo2", [["path", {
    d: "M9 14 4 9l5-5",
    key: "102s5s"
}], ["path", {
    d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
    key: "f3b9sd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xx = je("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jx = je("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = je("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , op = "-"
  , bN = e => {
    const t = CN(e)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
    return {
        getClassGroupId: a => {
            const s = a.split(op);
            return s[0] === "" && s.length !== 1 && s.shift(),
            Zx(s, t) || SN(a)
        }
        ,
        getConflictingClassGroupIds: (a, s) => {
            const l = r[a] || [];
            return s && n[a] ? [...l, ...n[a]] : l
        }
    }
}
  , Zx = (e, t) => {
    var a;
    if (e.length === 0)
        return t.classGroupId;
    const r = e[0]
      , n = t.nextPart.get(r)
      , o = n ? Zx(e.slice(1), n) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(op);
    return (a = t.validators.find( ({validator: s}) => s(i))) == null ? void 0 : a.classGroupId
}
  , Ev = /^\[(.+)\]$/
  , SN = e => {
    if (Ev.test(e)) {
        const t = Ev.exec(e)[1]
          , r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , CN = e => {
    const {theme: t, prefix: r} = e
      , n = {
        nextPart: new Map,
        validators: []
    };
    return NN(Object.entries(e.classGroups), r).forEach( ([i,a]) => {
        Id(a, n, i, t)
    }
    ),
    n
}
  , Id = (e, t, r, n) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Nv(t, o);
            i.classGroupId = r;
            return
        }
        if (typeof o == "function") {
            if (EN(o)) {
                Id(o(n), t, r, n);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: r
            });
            return
        }
        Object.entries(o).forEach( ([i,a]) => {
            Id(a, Nv(t, i), r, n)
        }
        )
    }
    )
}
  , Nv = (e, t) => {
    let r = e;
    return t.split(op).forEach(n => {
        r.nextPart.has(n) || r.nextPart.set(n, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(n)
    }
    ),
    r
}
  , EN = e => e.isThemeGetter
  , NN = (e, t) => t ? e.map( ([r,n]) => {
    const o = n.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([a,s]) => [t + a, s])) : i);
    return [r, o]
}
) : e
  , PN = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , r = new Map
      , n = new Map;
    const o = (i, a) => {
        r.set(i, a),
        t++,
        t > e && (t = 0,
        n = r,
        r = new Map)
    }
    ;
    return {
        get(i) {
            let a = r.get(i);
            if (a !== void 0)
                return a;
            if ((a = n.get(i)) !== void 0)
                return o(i, a),
                a
        },
        set(i, a) {
            r.has(i) ? r.set(i, a) : o(i, a)
        }
    }
}
  , e0 = "!"
  , DN = e => {
    const {separator: t, experimentalParseClassName: r} = e
      , n = t.length === 1
      , o = t[0]
      , i = t.length
      , a = s => {
        const l = [];
        let u = 0, f = 0, d;
        for (let w = 0; w < s.length; w++) {
            let y = s[w];
            if (u === 0) {
                if (y === o && (n || s.slice(w, w + i) === t)) {
                    l.push(s.slice(f, w)),
                    f = w + i;
                    continue
                }
                if (y === "/") {
                    d = w;
                    continue
                }
            }
            y === "[" ? u++ : y === "]" && u--
        }
        const c = l.length === 0 ? s : s.substring(f)
          , p = c.startsWith(e0)
          , g = p ? c.substring(1) : c
          , h = d && d > f ? d - f : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: g,
            maybePostfixModifierPosition: h
        }
    }
    ;
    return r ? s => r({
        className: s,
        parseClassName: a
    }) : a
}
  , TN = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let r = [];
    return e.forEach(n => {
        n[0] === "[" ? (t.push(...r.sort(), n),
        r = []) : r.push(n)
    }
    ),
    t.push(...r.sort()),
    t
}
  , IN = e => ({
    cache: PN(e.cacheSize),
    parseClassName: DN(e),
    ...bN(e)
})
  , RN = /\s+/
  , kN = (e, t) => {
    const {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: o} = t
      , i = []
      , a = e.trim().split(RN);
    let s = "";
    for (let l = a.length - 1; l >= 0; l -= 1) {
        const u = a[l]
          , {modifiers: f, hasImportantModifier: d, baseClassName: c, maybePostfixModifierPosition: p} = r(u);
        let g = !!p
          , h = n(g ? c.substring(0, p) : c);
        if (!h) {
            if (!g) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            if (h = n(c),
            !h) {
                s = u + (s.length > 0 ? " " + s : s);
                continue
            }
            g = !1
        }
        const w = TN(f).join(":")
          , y = d ? w + e0 : w
          , v = y + h;
        if (i.includes(v))
            continue;
        i.push(v);
        const b = o(h, g);
        for (let S = 0; S < b.length; ++S) {
            const C = b[S];
            i.push(y + C)
        }
        s = u + (s.length > 0 ? " " + s : s)
    }
    return s
}
;
function AN() {
    let e = 0, t, r, n = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (r = t0(t)) && (n && (n += " "),
        n += r);
    return n
}
const t0 = e => {
    if (typeof e == "string")
        return e;
    let t, r = "";
    for (let n = 0; n < e.length; n++)
        e[n] && (t = t0(e[n])) && (r && (r += " "),
        r += t);
    return r
}
;
function ON(e, ...t) {
    let r, n, o, i = a;
    function a(l) {
        const u = t.reduce( (f, d) => d(f), e());
        return r = IN(u),
        n = r.cache.get,
        o = r.cache.set,
        i = s,
        s(l)
    }
    function s(l) {
        const u = n(l);
        if (u)
            return u;
        const f = kN(l, r);
        return o(l, f),
        f
    }
    return function() {
        return i(AN.apply(null, arguments))
    }
}
const be = e => {
    const t = r => r[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , r0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , jN = /^\d+\/\d+$/
  , MN = new Set(["px", "full", "screen"])
  , LN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , BN = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , FN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , _N = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , $N = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Cr = e => Do(e) || MN.has(e) || jN.test(e)
  , _r = e => ri(e, "length", qN)
  , Do = e => !!e && !Number.isNaN(Number(e))
  , ac = e => ri(e, "number", Do)
  , wi = e => !!e && Number.isInteger(Number(e))
  , zN = e => e.endsWith("%") && Do(e.slice(0, -1))
  , X = e => r0.test(e)
  , $r = e => LN.test(e)
  , WN = new Set(["length", "size", "percentage"])
  , UN = e => ri(e, WN, n0)
  , VN = e => ri(e, "position", n0)
  , HN = new Set(["image", "url"])
  , GN = e => ri(e, HN, YN)
  , KN = e => ri(e, "", QN)
  , bi = () => !0
  , ri = (e, t, r) => {
    const n = r0.exec(e);
    return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1
}
  , qN = e => BN.test(e) && !FN.test(e)
  , n0 = () => !1
  , QN = e => _N.test(e)
  , YN = e => $N.test(e)
  , XN = () => {
    const e = be("colors")
      , t = be("spacing")
      , r = be("blur")
      , n = be("brightness")
      , o = be("borderColor")
      , i = be("borderRadius")
      , a = be("borderSpacing")
      , s = be("borderWidth")
      , l = be("contrast")
      , u = be("grayscale")
      , f = be("hueRotate")
      , d = be("invert")
      , c = be("gap")
      , p = be("gradientColorStops")
      , g = be("gradientColorStopPositions")
      , h = be("inset")
      , w = be("margin")
      , y = be("opacity")
      , v = be("padding")
      , b = be("saturate")
      , S = be("scale")
      , C = be("sepia")
      , E = be("skew")
      , N = be("space")
      , D = be("translate")
      , I = () => ["auto", "contain", "none"]
      , k = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , M = () => ["auto", X, t]
      , B = () => [X, t]
      , U = () => ["", Cr, _r]
      , A = () => ["auto", Do, X]
      , V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , _ = () => ["solid", "dashed", "dotted", "double", "none"]
      , K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , O = () => ["", "0", X]
      , $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , F = () => [Do, X];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [bi],
            spacing: [Cr, _r],
            blur: ["none", "", $r, X],
            brightness: F(),
            borderColor: [e],
            borderRadius: ["none", "", "full", $r, X],
            borderSpacing: B(),
            borderWidth: U(),
            contrast: F(),
            grayscale: O(),
            hueRotate: F(),
            invert: O(),
            gap: B(),
            gradientColorStops: [e],
            gradientColorStopPositions: [zN, _r],
            inset: M(),
            margin: M(),
            opacity: F(),
            padding: B(),
            saturate: F(),
            scale: F(),
            sepia: O(),
            skew: F(),
            space: B(),
            translate: B()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", X]
            }],
            container: ["container"],
            columns: [{
                columns: [$r]
            }],
            "break-after": [{
                "break-after": $()
            }],
            "break-before": [{
                "break-before": $()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...V(), X]
            }],
            overflow: [{
                overflow: k()
            }],
            "overflow-x": [{
                "overflow-x": k()
            }],
            "overflow-y": [{
                "overflow-y": k()
            }],
            overscroll: [{
                overscroll: I()
            }],
            "overscroll-x": [{
                "overscroll-x": I()
            }],
            "overscroll-y": [{
                "overscroll-y": I()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [h]
            }],
            "inset-x": [{
                "inset-x": [h]
            }],
            "inset-y": [{
                "inset-y": [h]
            }],
            start: [{
                start: [h]
            }],
            end: [{
                end: [h]
            }],
            top: [{
                top: [h]
            }],
            right: [{
                right: [h]
            }],
            bottom: [{
                bottom: [h]
            }],
            left: [{
                left: [h]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", wi, X]
            }],
            basis: [{
                basis: M()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", X]
            }],
            grow: [{
                grow: O()
            }],
            shrink: [{
                shrink: O()
            }],
            order: [{
                order: ["first", "last", "none", wi, X]
            }],
            "grid-cols": [{
                "grid-cols": [bi]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", wi, X]
                }, X]
            }],
            "col-start": [{
                "col-start": A()
            }],
            "col-end": [{
                "col-end": A()
            }],
            "grid-rows": [{
                "grid-rows": [bi]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [wi, X]
                }, X]
            }],
            "row-start": [{
                "row-start": A()
            }],
            "row-end": [{
                "row-end": A()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", X]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", X]
            }],
            gap: [{
                gap: [c]
            }],
            "gap-x": [{
                "gap-x": [c]
            }],
            "gap-y": [{
                "gap-y": [c]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [v]
            }],
            px: [{
                px: [v]
            }],
            py: [{
                py: [v]
            }],
            ps: [{
                ps: [v]
            }],
            pe: [{
                pe: [v]
            }],
            pt: [{
                pt: [v]
            }],
            pr: [{
                pr: [v]
            }],
            pb: [{
                pb: [v]
            }],
            pl: [{
                pl: [v]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [N]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [N]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t]
            }],
            "min-w": [{
                "min-w": [X, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [X, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [$r]
                }, $r]
            }],
            h: [{
                h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [X, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", $r, _r]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ac]
            }],
            "font-family": [{
                font: [bi]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Do, ac]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Cr, X]
            }],
            "list-image": [{
                "list-image": ["none", X]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", X]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [..._(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Cr, _r]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Cr, X]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: B()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", X]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...V(), VN]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", UN]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, GN]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [g]
            }],
            "gradient-via-pos": [{
                via: [g]
            }],
            "gradient-to-pos": [{
                to: [g]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [..._(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: _()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ..._()]
            }],
            "outline-offset": [{
                "outline-offset": [Cr, X]
            }],
            "outline-w": [{
                outline: [Cr, _r]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: U()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [Cr, _r]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", $r, KN]
            }],
            "shadow-color": [{
                shadow: [bi]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...K(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": K()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [r]
            }],
            brightness: [{
                brightness: [n]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", $r, X]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [f]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [b]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [n]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [f]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [b]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
            }],
            duration: [{
                duration: F()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", X]
            }],
            delay: [{
                delay: F()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", X]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [wi, X]
            }],
            "translate-x": [{
                "translate-x": [D]
            }],
            "translate-y": [{
                "translate-y": [D]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": B()
            }],
            "scroll-mx": [{
                "scroll-mx": B()
            }],
            "scroll-my": [{
                "scroll-my": B()
            }],
            "scroll-ms": [{
                "scroll-ms": B()
            }],
            "scroll-me": [{
                "scroll-me": B()
            }],
            "scroll-mt": [{
                "scroll-mt": B()
            }],
            "scroll-mr": [{
                "scroll-mr": B()
            }],
            "scroll-mb": [{
                "scroll-mb": B()
            }],
            "scroll-ml": [{
                "scroll-ml": B()
            }],
            "scroll-p": [{
                "scroll-p": B()
            }],
            "scroll-px": [{
                "scroll-px": B()
            }],
            "scroll-py": [{
                "scroll-py": B()
            }],
            "scroll-ps": [{
                "scroll-ps": B()
            }],
            "scroll-pe": [{
                "scroll-pe": B()
            }],
            "scroll-pt": [{
                "scroll-pt": B()
            }],
            "scroll-pr": [{
                "scroll-pr": B()
            }],
            "scroll-pb": [{
                "scroll-pb": B()
            }],
            "scroll-pl": [{
                "scroll-pl": B()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", X]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Cr, _r, ac]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , JN = ON(XN);
function pe(...e) {
    return JN(Gx(e))
}
const ZN = cN
  , o0 = x.forwardRef( ({className: e, ...t}, r) => m.jsx(_x, {
    ref: r,
    className: pe("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
o0.displayName = _x.displayName;
const eP = ep("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , i0 = x.forwardRef( ({className: e, variant: t, ...r}, n) => m.jsx($x, {
    ref: n,
    className: pe(eP({
        variant: t
    }), e),
    ...r
}));
i0.displayName = $x.displayName;
const tP = x.forwardRef( ({className: e, ...t}, r) => m.jsx(Ux, {
    ref: r,
    className: pe("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
tP.displayName = Ux.displayName;
const a0 = x.forwardRef( ({className: e, ...t}, r) => m.jsx(Vx, {
    ref: r,
    className: pe("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: m.jsx(Jx, {
        className: "h-4 w-4"
    })
}));
a0.displayName = Vx.displayName;
const s0 = x.forwardRef( ({className: e, ...t}, r) => m.jsx(zx, {
    ref: r,
    className: pe("text-sm font-semibold", e),
    ...t
}));
s0.displayName = zx.displayName;
const l0 = x.forwardRef( ({className: e, ...t}, r) => m.jsx(Wx, {
    ref: r,
    className: pe("text-sm opacity-90", e),
    ...t
}));
l0.displayName = Wx.displayName;
function rP() {
    const {toasts: e} = Yf();
    return m.jsxs(ZN, {
        children: [e.map(function({id: t, title: r, description: n, action: o, ...i}) {
            return m.jsxs(i0, {
                ...i,
                children: [m.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && m.jsx(s0, {
                        children: r
                    }), n && m.jsx(l0, {
                        children: n
                    })]
                }), o, m.jsx(a0, {})]
            }, t)
        }), m.jsx(o0, {})]
    })
}
var Pv = ["light", "dark"]
  , nP = "(prefers-color-scheme: dark)"
  , oP = x.createContext(void 0)
  , iP = {
    setTheme: e => {}
    ,
    themes: []
}
  , aP = () => {
    var e;
    return (e = x.useContext(oP)) != null ? e : iP
}
;
x.memo( ({forcedTheme: e, storageKey: t, attribute: r, enableSystem: n, enableColorScheme: o, defaultTheme: i, value: a, attrs: s, nonce: l}) => {
    let u = i === "system"
      , f = r === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map(g => `'${g}'`).join(",")})`};` : `var d=document.documentElement,n='${r}',s='setAttribute';`
      , d = o ? Pv.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , c = (g, h=!1, w=!0) => {
        let y = a ? a[g] : g
          , v = h ? g + "|| ''" : `'${y}'`
          , b = "";
        return o && w && !h && Pv.includes(g) && (b += `d.style.colorScheme = '${g}';`),
        r === "class" ? h || y ? b += `c.add(${v})` : b += "null" : y && (b += `d[s](n,${v})`),
        b
    }
      , p = e ? `!function(){${f}${c(e)}}()` : n ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${nP}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${c(a ? "x[e]" : "e", !0)}}${u ? "" : "else{" + c(i, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${c(a ? "x[e]" : "e", !0)}}else{${c(i, !1, !1)};}${d}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var sP = e => {
    switch (e) {
    case "success":
        return cP;
    case "info":
        return fP;
    case "warning":
        return dP;
    case "error":
        return pP;
    default:
        return null
    }
}
  , lP = Array(12).fill(0)
  , uP = ({visible: e}) => R.createElement("div", {
    className: "sonner-loading-wrapper",
    "data-visible": e
}, R.createElement("div", {
    className: "sonner-spinner"
}, lP.map( (t, r) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , cP = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , dP = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , fP = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , pP = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , mP = () => {
    let[e,t] = R.useState(document.hidden);
    return R.useEffect( () => {
        let r = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", r),
        () => window.removeEventListener("visibilitychange", r)
    }
    , []),
    e
}
  , Rd = 1
  , vP = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: r, ...n} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Rd++
              , i = this.toasts.find(s => s.id === o)
              , a = e.dismissible === void 0 ? !0 : e.dismissible;
            return i ? this.toasts = this.toasts.map(s => s.id === o ? (this.publish({
                ...s,
                ...e,
                id: o,
                title: r
            }),
            {
                ...s,
                ...e,
                id: o,
                dismissible: a,
                title: r
            }) : s) : this.addToast({
                title: r,
                ...n,
                dismissible: a,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (e || this.toasts.forEach(t => {
            this.subscribers.forEach(r => r({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let r;
            t.loading !== void 0 && (r = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let n = e instanceof Promise ? e : e()
              , o = r !== void 0;
            return n.then(async i => {
                if (gP(i) && !i.ok) {
                    o = !1;
                    let a = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error
                      , s = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: a,
                        description: s
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let a = typeof t.success == "function" ? await t.success(i) : t.success
                      , s = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: r,
                        type: "success",
                        message: a,
                        description: s
                    })
                }
            }
            ).catch(async i => {
                if (t.error !== void 0) {
                    o = !1;
                    let a = typeof t.error == "function" ? await t.error(i) : t.error
                      , s = typeof t.description == "function" ? await t.description(i) : t.description;
                    this.create({
                        id: r,
                        type: "error",
                        message: a,
                        description: s
                    })
                }
            }
            ).finally( () => {
                var i;
                o && (this.dismiss(r),
                r = void 0),
                (i = t.finally) == null || i.call(t)
            }
            ),
            r
        }
        ,
        this.custom = (e, t) => {
            let r = (t == null ? void 0 : t.id) || Rd++;
            return this.create({
                jsx: e(r),
                id: r,
                ...t
            }),
            r
        }
        ,
        this.subscribers = [],
        this.toasts = []
    }
}
  , St = new vP
  , hP = (e, t) => {
    let r = (t == null ? void 0 : t.id) || Rd++;
    return St.addToast({
        title: e,
        ...t,
        id: r
    }),
    r
}
  , gP = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , yP = hP
  , xP = () => St.toasts;
Object.assign(yP, {
    success: St.success,
    info: St.info,
    warning: St.warning,
    error: St.error,
    custom: St.custom,
    message: St.message,
    promise: St.promise,
    dismiss: St.dismiss,
    loading: St.loading
}, {
    getHistory: xP
});
function wP(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let r = document.head || document.getElementsByTagName("head")[0]
      , n = document.createElement("style");
    n.type = "text/css",
    t === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n),
    n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
}
wP(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ls(e) {
    return e.label !== void 0
}
var bP = 3
  , SP = "32px"
  , CP = 4e3
  , EP = 356
  , NP = 14
  , PP = 20
  , DP = 200;
function TP(...e) {
    return e.filter(Boolean).join(" ")
}
var IP = e => {
    var t, r, n, o, i, a, s, l, u, f;
    let {invert: d, toast: c, unstyled: p, interacting: g, setHeights: h, visibleToasts: w, heights: y, index: v, toasts: b, expanded: S, removeToast: C, defaultRichColors: E, closeButton: N, style: D, cancelButtonStyle: I, actionButtonStyle: k, className: M="", descriptionClassName: B="", duration: U, position: A, gap: V, loadingIcon: _, expandByDefault: K, classNames: P, icons: O, closeButtonAriaLabel: $="Close toast", pauseWhenPageIsHidden: F, cn: z} = e
      , [Q,oe] = R.useState(!1)
      , [ve,Z] = R.useState(!1)
      , [H,ne] = R.useState(!1)
      , [ge,te] = R.useState(!1)
      , [ae,ie] = R.useState(0)
      , [Me,_e] = R.useState(0)
      , Gt = R.useRef(null)
      , Je = R.useRef(null)
      , Kt = v === 0
      , di = v + 1 <= w
      , Pe = c.type
      , ur = c.dismissible !== !1
      , F1 = c.className || ""
      , _1 = c.descriptionClassName || ""
      , $a = R.useMemo( () => y.findIndex(Y => Y.toastId === c.id) || 0, [y, c.id])
      , $1 = R.useMemo( () => {
        var Y;
        return (Y = c.closeButton) != null ? Y : N
    }
    , [c.closeButton, N])
      , em = R.useMemo( () => c.duration || U || CP, [c.duration, U])
      , Tu = R.useRef(0)
      , to = R.useRef(0)
      , tm = R.useRef(0)
      , ro = R.useRef(null)
      , [rm,z1] = A.split("-")
      , nm = R.useMemo( () => y.reduce( (Y, we, ye) => ye >= $a ? Y : Y + we.height, 0), [y, $a])
      , om = mP()
      , W1 = c.invert || d
      , Iu = Pe === "loading";
    to.current = R.useMemo( () => $a * V + nm, [$a, nm]),
    R.useEffect( () => {
        oe(!0)
    }
    , []),
    R.useLayoutEffect( () => {
        if (!Q)
            return;
        let Y = Je.current
          , we = Y.style.height;
        Y.style.height = "auto";
        let ye = Y.getBoundingClientRect().height;
        Y.style.height = we,
        _e(ye),
        h(cr => cr.find(dr => dr.toastId === c.id) ? cr.map(dr => dr.toastId === c.id ? {
            ...dr,
            height: ye
        } : dr) : [{
            toastId: c.id,
            height: ye,
            position: c.position
        }, ...cr])
    }
    , [Q, c.title, c.description, h, c.id]);
    let Br = R.useCallback( () => {
        Z(!0),
        ie(to.current),
        h(Y => Y.filter(we => we.toastId !== c.id)),
        setTimeout( () => {
            C(c)
        }
        , DP)
    }
    , [c, C, h, to]);
    R.useEffect( () => {
        if (c.promise && Pe === "loading" || c.duration === 1 / 0 || c.type === "loading")
            return;
        let Y, we = em;
        return S || g || F && om ? ( () => {
            if (tm.current < Tu.current) {
                let ye = new Date().getTime() - Tu.current;
                we = we - ye
            }
            tm.current = new Date().getTime()
        }
        )() : we !== 1 / 0 && (Tu.current = new Date().getTime(),
        Y = setTimeout( () => {
            var ye;
            (ye = c.onAutoClose) == null || ye.call(c, c),
            Br()
        }
        , we)),
        () => clearTimeout(Y)
    }
    , [S, g, K, c, em, Br, c.promise, Pe, F, om]),
    R.useEffect( () => {
        let Y = Je.current;
        if (Y) {
            let we = Y.getBoundingClientRect().height;
            return _e(we),
            h(ye => [{
                toastId: c.id,
                height: we,
                position: c.position
            }, ...ye]),
            () => h(ye => ye.filter(cr => cr.toastId !== c.id))
        }
    }
    , [h, c.id]),
    R.useEffect( () => {
        c.delete && Br()
    }
    , [Br, c.delete]);
    function U1() {
        return O != null && O.loading ? R.createElement("div", {
            className: "sonner-loader",
            "data-visible": Pe === "loading"
        }, O.loading) : _ ? R.createElement("div", {
            className: "sonner-loader",
            "data-visible": Pe === "loading"
        }, _) : R.createElement(uP, {
            visible: Pe === "loading"
        })
    }
    return R.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: Je,
        className: z(M, F1, P == null ? void 0 : P.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, P == null ? void 0 : P.default, P == null ? void 0 : P[Pe], (r = c == null ? void 0 : c.classNames) == null ? void 0 : r[Pe]),
        "data-sonner-toast": "",
        "data-rich-colors": (n = c.richColors) != null ? n : E,
        "data-styled": !(c.jsx || c.unstyled || p),
        "data-mounted": Q,
        "data-promise": !!c.promise,
        "data-removed": ve,
        "data-visible": di,
        "data-y-position": rm,
        "data-x-position": z1,
        "data-index": v,
        "data-front": Kt,
        "data-swiping": H,
        "data-dismissible": ur,
        "data-type": Pe,
        "data-invert": W1,
        "data-swipe-out": ge,
        "data-expanded": !!(S || K && Q),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": b.length - v,
            "--offset": `${ve ? ae : to.current}px`,
            "--initial-height": K ? "auto" : `${Me}px`,
            ...D,
            ...c.style
        },
        onPointerDown: Y => {
            Iu || !ur || (Gt.current = new Date,
            ie(to.current),
            Y.target.setPointerCapture(Y.pointerId),
            Y.target.tagName !== "BUTTON" && (ne(!0),
            ro.current = {
                x: Y.clientX,
                y: Y.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Y, we, ye, cr;
            if (ge || !ur)
                return;
            ro.current = null;
            let dr = Number(((Y = Je.current) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0)
              , za = new Date().getTime() - ((we = Gt.current) == null ? void 0 : we.getTime())
              , V1 = Math.abs(dr) / za;
            if (Math.abs(dr) >= PP || V1 > .11) {
                ie(to.current),
                (ye = c.onDismiss) == null || ye.call(c, c),
                Br(),
                te(!0);
                return
            }
            (cr = Je.current) == null || cr.style.setProperty("--swipe-amount", "0px"),
            ne(!1)
        }
        ,
        onPointerMove: Y => {
            var we;
            if (!ro.current || !ur)
                return;
            let ye = Y.clientY - ro.current.y
              , cr = Y.clientX - ro.current.x
              , dr = (rm === "top" ? Math.min : Math.max)(0, ye)
              , za = Y.pointerType === "touch" ? 10 : 2;
            Math.abs(dr) > za ? (we = Je.current) == null || we.style.setProperty("--swipe-amount", `${ye}px`) : Math.abs(cr) > za && (ro.current = null)
        }
    }, $1 && !c.jsx ? R.createElement("button", {
        "aria-label": $,
        "data-disabled": Iu,
        "data-close-button": !0,
        onClick: Iu || !ur ? () => {}
        : () => {
            var Y;
            Br(),
            (Y = c.onDismiss) == null || Y.call(c, c)
        }
        ,
        className: z(P == null ? void 0 : P.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
    }, R.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, R.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), R.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || R.isValidElement(c.title) ? c.jsx || c.title : R.createElement(R.Fragment, null, Pe || c.icon || c.promise ? R.createElement("div", {
        "data-icon": "",
        className: z(P == null ? void 0 : P.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || U1() : null, c.type !== "loading" ? c.icon || (O == null ? void 0 : O[Pe]) || sP(Pe) : null) : null, R.createElement("div", {
        "data-content": "",
        className: z(P == null ? void 0 : P.content, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.content)
    }, R.createElement("div", {
        "data-title": "",
        className: z(P == null ? void 0 : P.title, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.title)
    }, c.title), c.description ? R.createElement("div", {
        "data-description": "",
        className: z(B, _1, P == null ? void 0 : P.description, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.description)
    }, c.description) : null), R.isValidElement(c.cancel) ? c.cancel : c.cancel && ls(c.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || I,
        onClick: Y => {
            var we, ye;
            ls(c.cancel) && ur && ((ye = (we = c.cancel).onClick) == null || ye.call(we, Y),
            Br())
        }
        ,
        className: z(P == null ? void 0 : P.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
    }, c.cancel.label) : null, R.isValidElement(c.action) ? c.action : c.action && ls(c.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || k,
        onClick: Y => {
            var we, ye;
            ls(c.action) && (Y.defaultPrevented || ((ye = (we = c.action).onClick) == null || ye.call(we, Y),
            Br()))
        }
        ,
        className: z(P == null ? void 0 : P.actionButton, (f = c == null ? void 0 : c.classNames) == null ? void 0 : f.actionButton)
    }, c.action.label) : null))
}
;
function Dv() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var RP = e => {
    let {invert: t, position: r="bottom-right", hotkey: n=["altKey", "KeyT"], expand: o, closeButton: i, className: a, offset: s, theme: l="light", richColors: u, duration: f, style: d, visibleToasts: c=bP, toastOptions: p, dir: g=Dv(), gap: h=NP, loadingIcon: w, icons: y, containerAriaLabel: v="Notifications", pauseWhenPageIsHidden: b, cn: S=TP} = e
      , [C,E] = R.useState([])
      , N = R.useMemo( () => Array.from(new Set([r].concat(C.filter(F => F.position).map(F => F.position)))), [C, r])
      , [D,I] = R.useState([])
      , [k,M] = R.useState(!1)
      , [B,U] = R.useState(!1)
      , [A,V] = R.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , _ = R.useRef(null)
      , K = n.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , P = R.useRef(null)
      , O = R.useRef(!1)
      , $ = R.useCallback(F => {
        var z;
        (z = C.find(Q => Q.id === F.id)) != null && z.delete || St.dismiss(F.id),
        E(Q => Q.filter( ({id: oe}) => oe !== F.id))
    }
    , [C]);
    return R.useEffect( () => St.subscribe(F => {
        if (F.dismiss) {
            E(z => z.map(Q => Q.id === F.id ? {
                ...Q,
                delete: !0
            } : Q));
            return
        }
        setTimeout( () => {
            Qf.flushSync( () => {
                E(z => {
                    let Q = z.findIndex(oe => oe.id === F.id);
                    return Q !== -1 ? [...z.slice(0, Q), {
                        ...z[Q],
                        ...F
                    }, ...z.slice(Q + 1)] : [F, ...z]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    R.useEffect( () => {
        if (l !== "system") {
            V(l);
            return
        }
        l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? V("dark") : V("light")),
        typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: F}) => {
            V(F ? "dark" : "light")
        }
        )
    }
    , [l]),
    R.useEffect( () => {
        C.length <= 1 && M(!1)
    }
    , [C]),
    R.useEffect( () => {
        let F = z => {
            var Q, oe;
            n.every(ve => z[ve] || z.code === ve) && (M(!0),
            (Q = _.current) == null || Q.focus()),
            z.code === "Escape" && (document.activeElement === _.current || (oe = _.current) != null && oe.contains(document.activeElement)) && M(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
    }
    , [n]),
    R.useEffect( () => {
        if (_.current)
            return () => {
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null,
                O.current = !1)
            }
    }
    , [_.current]),
    C.length ? R.createElement("section", {
        "aria-label": `${v} ${K}`,
        tabIndex: -1
    }, N.map( (F, z) => {
        var Q;
        let[oe,ve] = F.split("-");
        return R.createElement("ol", {
            key: F,
            dir: g === "auto" ? Dv() : g,
            tabIndex: -1,
            ref: _,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": A,
            "data-y-position": oe,
            "data-x-position": ve,
            style: {
                "--front-toast-height": `${((Q = D[0]) == null ? void 0 : Q.height) || 0}px`,
                "--offset": typeof s == "number" ? `${s}px` : s || SP,
                "--width": `${EP}px`,
                "--gap": `${h}px`,
                ...d
            },
            onBlur: Z => {
                O.current && !Z.currentTarget.contains(Z.relatedTarget) && (O.current = !1,
                P.current && (P.current.focus({
                    preventScroll: !0
                }),
                P.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                P.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => M(!0),
            onMouseMove: () => M(!0),
            onMouseLeave: () => {
                B || M(!1)
            }
            ,
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || U(!0)
            }
            ,
            onPointerUp: () => U(!1)
        }, C.filter(Z => !Z.position && z === 0 || Z.position === F).map( (Z, H) => {
            var ne, ge;
            return R.createElement(IP, {
                key: Z.id,
                icons: y,
                index: H,
                toast: Z,
                defaultRichColors: u,
                duration: (ne = p == null ? void 0 : p.duration) != null ? ne : f,
                className: p == null ? void 0 : p.className,
                descriptionClassName: p == null ? void 0 : p.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (ge = p == null ? void 0 : p.closeButton) != null ? ge : i,
                interacting: B,
                position: F,
                style: p == null ? void 0 : p.style,
                unstyled: p == null ? void 0 : p.unstyled,
                classNames: p == null ? void 0 : p.classNames,
                cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                removeToast: $,
                toasts: C.filter(te => te.position == Z.position),
                heights: D.filter(te => te.position == Z.position),
                setHeights: I,
                expandByDefault: o,
                gap: h,
                loadingIcon: w,
                expanded: k,
                pauseWhenPageIsHidden: b,
                cn: S
            })
        }
        ))
    }
    )) : null
}
;
const kP = ({...e}) => {
    const {theme: t="system"} = aP();
    return m.jsx(RP, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var AP = vg.useId || ( () => {}
)
  , OP = 0;
function To(e) {
    const [t,r] = x.useState(AP());
    return it( () => {
        r(n => n ?? String(OP++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const jP = ["top", "right", "bottom", "left"]
  , hn = Math.min
  , Et = Math.max
  , dl = Math.round
  , us = Math.floor
  , gn = e => ({
    x: e,
    y: e
})
  , MP = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , LP = {
    start: "end",
    end: "start"
};
function kd(e, t, r) {
    return Et(e, hn(t, r))
}
function jr(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Mr(e) {
    return e.split("-")[0]
}
function ni(e) {
    return e.split("-")[1]
}
function ip(e) {
    return e === "x" ? "y" : "x"
}
function ap(e) {
    return e === "y" ? "height" : "width"
}
function yn(e) {
    return ["top", "bottom"].includes(Mr(e)) ? "y" : "x"
}
function sp(e) {
    return ip(yn(e))
}
function BP(e, t, r) {
    r === void 0 && (r = !1);
    const n = ni(e)
      , o = sp(e)
      , i = ap(o);
    let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (a = fl(a)),
    [a, fl(a)]
}
function FP(e) {
    const t = fl(e);
    return [Ad(e), t, Ad(t)]
}
function Ad(e) {
    return e.replace(/start|end/g, t => LP[t])
}
function _P(e, t, r) {
    const n = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , a = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return r ? t ? o : n : t ? n : o;
    case "left":
    case "right":
        return t ? i : a;
    default:
        return []
    }
}
function $P(e, t, r, n) {
    const o = ni(e);
    let i = _P(Mr(e), r === "start", n);
    return o && (i = i.map(a => a + "-" + o),
    t && (i = i.concat(i.map(Ad)))),
    i
}
function fl(e) {
    return e.replace(/left|right|bottom|top/g, t => MP[t])
}
function zP(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function u0(e) {
    return typeof e != "number" ? zP(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function pl(e) {
    const {x: t, y: r, width: n, height: o} = e;
    return {
        width: n,
        height: o,
        top: r,
        left: t,
        right: t + n,
        bottom: r + o,
        x: t,
        y: r
    }
}
function Tv(e, t, r) {
    let {reference: n, floating: o} = e;
    const i = yn(t)
      , a = sp(t)
      , s = ap(a)
      , l = Mr(t)
      , u = i === "y"
      , f = n.x + n.width / 2 - o.width / 2
      , d = n.y + n.height / 2 - o.height / 2
      , c = n[s] / 2 - o[s] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: f,
            y: n.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: f,
            y: n.y + n.height
        };
        break;
    case "right":
        p = {
            x: n.x + n.width,
            y: d
        };
        break;
    case "left":
        p = {
            x: n.x - o.width,
            y: d
        };
        break;
    default:
        p = {
            x: n.x,
            y: n.y
        }
    }
    switch (ni(t)) {
    case "start":
        p[a] -= c * (r && u ? -1 : 1);
        break;
    case "end":
        p[a] += c * (r && u ? -1 : 1);
        break
    }
    return p
}
const WP = async (e, t, r) => {
    const {placement: n="bottom", strategy: o="absolute", middleware: i=[], platform: a} = r
      , s = i.filter(Boolean)
      , l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: f, y: d} = Tv(u, n, l)
      , c = n
      , p = {}
      , g = 0;
    for (let h = 0; h < s.length; h++) {
        const {name: w, fn: y} = s[h]
          , {x: v, y: b, data: S, reset: C} = await y({
            x: f,
            y: d,
            initialPlacement: n,
            placement: c,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = v ?? f,
        d = b ?? d,
        p = {
            ...p,
            [w]: {
                ...p[w],
                ...S
            }
        },
        C && g <= 50 && (g++,
        typeof C == "object" && (C.placement && (c = C.placement),
        C.rects && (u = C.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: f, y: d} = Tv(u, c, l)),
        h = -1)
    }
    return {
        x: f,
        y: d,
        placement: c,
        strategy: o,
        middlewareData: p
    }
}
;
async function ia(e, t) {
    var r;
    t === void 0 && (t = {});
    const {x: n, y: o, platform: i, rects: a, elements: s, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: f="viewport", elementContext: d="floating", altBoundary: c=!1, padding: p=0} = jr(t, e)
      , g = u0(p)
      , w = s[c ? d === "floating" ? "reference" : "floating" : d]
      , y = pl(await i.getClippingRect({
        element: (r = await (i.isElement == null ? void 0 : i.isElement(w))) == null || r ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
        boundary: u,
        rootBoundary: f,
        strategy: l
    }))
      , v = d === "floating" ? {
        x: n,
        y: o,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = pl(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: v,
        offsetParent: b,
        strategy: l
    }) : v);
    return {
        top: (y.top - C.top + g.top) / S.y,
        bottom: (C.bottom - y.bottom + g.bottom) / S.y,
        left: (y.left - C.left + g.left) / S.x,
        right: (C.right - y.right + g.right) / S.x
    }
}
const UP = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: r, y: n, placement: o, rects: i, platform: a, elements: s, middlewareData: l} = t
          , {element: u, padding: f=0} = jr(e, t) || {};
        if (u == null)
            return {};
        const d = u0(f)
          , c = {
            x: r,
            y: n
        }
          , p = sp(o)
          , g = ap(p)
          , h = await a.getDimensions(u)
          , w = p === "y"
          , y = w ? "top" : "left"
          , v = w ? "bottom" : "right"
          , b = w ? "clientHeight" : "clientWidth"
          , S = i.reference[g] + i.reference[p] - c[p] - i.floating[g]
          , C = c[p] - i.reference[p]
          , E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let N = E ? E[b] : 0;
        (!N || !await (a.isElement == null ? void 0 : a.isElement(E))) && (N = s.floating[b] || i.floating[g]);
        const D = S / 2 - C / 2
          , I = N / 2 - h[g] / 2 - 1
          , k = hn(d[y], I)
          , M = hn(d[v], I)
          , B = k
          , U = N - h[g] - M
          , A = N / 2 - h[g] / 2 + D
          , V = kd(B, A, U)
          , _ = !l.arrow && ni(o) != null && A !== V && i.reference[g] / 2 - (A < B ? k : M) - h[g] / 2 < 0
          , K = _ ? A < B ? A - B : A - U : 0;
        return {
            [p]: c[p] + K,
            data: {
                [p]: V,
                centerOffset: A - V - K,
                ..._ && {
                    alignmentOffset: K
                }
            },
            reset: _
        }
    }
})
  , VP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: o, middlewareData: i, rects: a, initialPlacement: s, platform: l, elements: u} = t
              , {mainAxis: f=!0, crossAxis: d=!0, fallbackPlacements: c, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: g="none", flipAlignment: h=!0, ...w} = jr(e, t);
            if ((r = i.arrow) != null && r.alignmentOffset)
                return {};
            const y = Mr(o)
              , v = yn(s)
              , b = Mr(s) === s
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = c || (b || !h ? [fl(s)] : FP(s))
              , E = g !== "none";
            !c && E && C.push(...$P(s, h, g, S));
            const N = [s, ...C]
              , D = await ia(t, w)
              , I = [];
            let k = ((n = i.flip) == null ? void 0 : n.overflows) || [];
            if (f && I.push(D[y]),
            d) {
                const A = BP(o, a, S);
                I.push(D[A[0]], D[A[1]])
            }
            if (k = [...k, {
                placement: o,
                overflows: I
            }],
            !I.every(A => A <= 0)) {
                var M, B;
                const A = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1
                  , V = N[A];
                if (V)
                    return {
                        data: {
                            index: A,
                            overflows: k
                        },
                        reset: {
                            placement: V
                        }
                    };
                let _ = (B = k.filter(K => K.overflows[0] <= 0).sort( (K, P) => K.overflows[1] - P.overflows[1])[0]) == null ? void 0 : B.placement;
                if (!_)
                    switch (p) {
                    case "bestFit":
                        {
                            var U;
                            const K = (U = k.filter(P => {
                                if (E) {
                                    const O = yn(P.placement);
                                    return O === v || O === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(O => O > 0).reduce( (O, $) => O + $, 0)]).sort( (P, O) => P[1] - O[1])[0]) == null ? void 0 : U[0];
                            K && (_ = K);
                            break
                        }
                    case "initialPlacement":
                        _ = s;
                        break
                    }
                if (o !== _)
                    return {
                        reset: {
                            placement: _
                        }
                    }
            }
            return {}
        }
    }
};
function Iv(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Rv(e) {
    return jP.some(t => e[t] >= 0)
}
const HP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: r} = t
              , {strategy: n="referenceHidden", ...o} = jr(e, t);
            switch (n) {
            case "referenceHidden":
                {
                    const i = await ia(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , a = Iv(i, r.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: a,
                            referenceHidden: Rv(a)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await ia(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , a = Iv(i, r.floating);
                    return {
                        data: {
                            escapedOffsets: a,
                            escaped: Rv(a)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function GP(e, t) {
    const {placement: r, platform: n, elements: o} = e
      , i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating))
      , a = Mr(r)
      , s = ni(r)
      , l = yn(r) === "y"
      , u = ["left", "top"].includes(a) ? -1 : 1
      , f = i && l ? -1 : 1
      , d = jr(t, e);
    let {mainAxis: c, crossAxis: p, alignmentAxis: g} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return s && typeof g == "number" && (p = s === "end" ? g * -1 : g),
    l ? {
        x: p * f,
        y: c * u
    } : {
        x: c * u,
        y: p * f
    }
}
const KP = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var r, n;
            const {x: o, y: i, placement: a, middlewareData: s} = t
              , l = await GP(t, e);
            return a === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , qP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: r, y: n, placement: o} = t
              , {mainAxis: i=!0, crossAxis: a=!1, limiter: s={
                fn: w => {
                    let {x: y, y: v} = w;
                    return {
                        x: y,
                        y: v
                    }
                }
            }, ...l} = jr(e, t)
              , u = {
                x: r,
                y: n
            }
              , f = await ia(t, l)
              , d = yn(Mr(o))
              , c = ip(d);
            let p = u[c]
              , g = u[d];
            if (i) {
                const w = c === "y" ? "top" : "left"
                  , y = c === "y" ? "bottom" : "right"
                  , v = p + f[w]
                  , b = p - f[y];
                p = kd(v, p, b)
            }
            if (a) {
                const w = d === "y" ? "top" : "left"
                  , y = d === "y" ? "bottom" : "right"
                  , v = g + f[w]
                  , b = g - f[y];
                g = kd(v, g, b)
            }
            const h = s.fn({
                ...t,
                [c]: p,
                [d]: g
            });
            return {
                ...h,
                data: {
                    x: h.x - r,
                    y: h.y - n,
                    enabled: {
                        [c]: i,
                        [d]: a
                    }
                }
            }
        }
    }
}
  , QP = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: r, y: n, placement: o, rects: i, middlewareData: a} = t
              , {offset: s=0, mainAxis: l=!0, crossAxis: u=!0} = jr(e, t)
              , f = {
                x: r,
                y: n
            }
              , d = yn(o)
              , c = ip(d);
            let p = f[c]
              , g = f[d];
            const h = jr(s, t)
              , w = typeof h == "number" ? {
                mainAxis: h,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...h
            };
            if (l) {
                const b = c === "y" ? "height" : "width"
                  , S = i.reference[c] - i.floating[b] + w.mainAxis
                  , C = i.reference[c] + i.reference[b] - w.mainAxis;
                p < S ? p = S : p > C && (p = C)
            }
            if (u) {
                var y, v;
                const b = c === "y" ? "width" : "height"
                  , S = ["top", "left"].includes(Mr(o))
                  , C = i.reference[d] - i.floating[b] + (S && ((y = a.offset) == null ? void 0 : y[d]) || 0) + (S ? 0 : w.crossAxis)
                  , E = i.reference[d] + i.reference[b] + (S ? 0 : ((v = a.offset) == null ? void 0 : v[d]) || 0) - (S ? w.crossAxis : 0);
                g < C ? g = C : g > E && (g = E)
            }
            return {
                [c]: p,
                [d]: g
            }
        }
    }
}
  , YP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var r, n;
            const {placement: o, rects: i, platform: a, elements: s} = t
              , {apply: l= () => {}
            , ...u} = jr(e, t)
              , f = await ia(t, u)
              , d = Mr(o)
              , c = ni(o)
              , p = yn(o) === "y"
              , {width: g, height: h} = i.floating;
            let w, y;
            d === "top" || d === "bottom" ? (w = d,
            y = c === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = d,
            w = c === "end" ? "top" : "bottom");
            const v = h - f.top - f.bottom
              , b = g - f.left - f.right
              , S = hn(h - f[w], v)
              , C = hn(g - f[y], b)
              , E = !t.middlewareData.shift;
            let N = S
              , D = C;
            if ((r = t.middlewareData.shift) != null && r.enabled.x && (D = b),
            (n = t.middlewareData.shift) != null && n.enabled.y && (N = v),
            E && !c) {
                const k = Et(f.left, 0)
                  , M = Et(f.right, 0)
                  , B = Et(f.top, 0)
                  , U = Et(f.bottom, 0);
                p ? D = g - 2 * (k !== 0 || M !== 0 ? k + M : Et(f.left, f.right)) : N = h - 2 * (B !== 0 || U !== 0 ? B + U : Et(f.top, f.bottom))
            }
            await l({
                ...t,
                availableWidth: D,
                availableHeight: N
            });
            const I = await a.getDimensions(s.floating);
            return g !== I.width || h !== I.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function ql() {
    return typeof window < "u"
}
function oi(e) {
    return c0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Tt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Sr(e) {
    var t;
    return (t = (c0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function c0(e) {
    return ql() ? e instanceof Node || e instanceof Tt(e).Node : !1
}
function ir(e) {
    return ql() ? e instanceof Element || e instanceof Tt(e).Element : !1
}
function br(e) {
    return ql() ? e instanceof HTMLElement || e instanceof Tt(e).HTMLElement : !1
}
function kv(e) {
    return !ql() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Tt(e).ShadowRoot
}
function Pa(e) {
    const {overflow: t, overflowX: r, overflowY: n, display: o} = ar(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
}
function XP(e) {
    return ["table", "td", "th"].includes(oi(e))
}
function Ql(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function lp(e) {
    const t = up()
      , r = ir(e) ? ar(e) : e;
    return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(n => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some(n => (r.contain || "").includes(n))
}
function JP(e) {
    let t = xn(e);
    for (; br(t) && !Ko(t); ) {
        if (lp(t))
            return t;
        if (Ql(t))
            return null;
        t = xn(t)
    }
    return null
}
function up() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Ko(e) {
    return ["html", "body", "#document"].includes(oi(e))
}
function ar(e) {
    return Tt(e).getComputedStyle(e)
}
function Yl(e) {
    return ir(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function xn(e) {
    if (oi(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || kv(e) && e.host || Sr(e);
    return kv(t) ? t.host : t
}
function d0(e) {
    const t = xn(e);
    return Ko(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : br(t) && Pa(t) ? t : d0(t)
}
function aa(e, t, r) {
    var n;
    t === void 0 && (t = []),
    r === void 0 && (r = !0);
    const o = d0(e)
      , i = o === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , a = Tt(o);
    if (i) {
        const s = Od(a);
        return t.concat(a, a.visualViewport || [], Pa(o) ? o : [], s && r ? aa(s) : [])
    }
    return t.concat(o, aa(o, [], r))
}
function Od(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function f0(e) {
    const t = ar(e);
    let r = parseFloat(t.width) || 0
      , n = parseFloat(t.height) || 0;
    const o = br(e)
      , i = o ? e.offsetWidth : r
      , a = o ? e.offsetHeight : n
      , s = dl(r) !== i || dl(n) !== a;
    return s && (r = i,
    n = a),
    {
        width: r,
        height: n,
        $: s
    }
}
function cp(e) {
    return ir(e) ? e : e.contextElement
}
function Io(e) {
    const t = cp(e);
    if (!br(t))
        return gn(1);
    const r = t.getBoundingClientRect()
      , {width: n, height: o, $: i} = f0(t);
    let a = (i ? dl(r.width) : r.width) / n
      , s = (i ? dl(r.height) : r.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: a,
        y: s
    }
}
const ZP = gn(0);
function p0(e) {
    const t = Tt(e);
    return !up() || !t.visualViewport ? ZP : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function e2(e, t, r) {
    return t === void 0 && (t = !1),
    !r || t && r !== Tt(e) ? !1 : t
}
function Qn(e, t, r, n) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !1);
    const o = e.getBoundingClientRect()
      , i = cp(e);
    let a = gn(1);
    t && (n ? ir(n) && (a = Io(n)) : a = Io(e));
    const s = e2(i, r, n) ? p0(i) : gn(0);
    let l = (o.left + s.x) / a.x
      , u = (o.top + s.y) / a.y
      , f = o.width / a.x
      , d = o.height / a.y;
    if (i) {
        const c = Tt(i)
          , p = n && ir(n) ? Tt(n) : n;
        let g = c
          , h = Od(g);
        for (; h && n && p !== g; ) {
            const w = Io(h)
              , y = h.getBoundingClientRect()
              , v = ar(h)
              , b = y.left + (h.clientLeft + parseFloat(v.paddingLeft)) * w.x
              , S = y.top + (h.clientTop + parseFloat(v.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            f *= w.x,
            d *= w.y,
            l += b,
            u += S,
            g = Tt(h),
            h = Od(g)
        }
    }
    return pl({
        width: f,
        height: d,
        x: l,
        y: u
    })
}
function t2(e) {
    let {elements: t, rect: r, offsetParent: n, strategy: o} = e;
    const i = o === "fixed"
      , a = Sr(n)
      , s = t ? Ql(t.floating) : !1;
    if (n === a || s && i)
        return r;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = gn(1);
    const f = gn(0)
      , d = br(n);
    if ((d || !d && !i) && ((oi(n) !== "body" || Pa(a)) && (l = Yl(n)),
    br(n))) {
        const c = Qn(n);
        u = Io(n),
        f.x = c.x + n.clientLeft,
        f.y = c.y + n.clientTop
    }
    return {
        width: r.width * u.x,
        height: r.height * u.y,
        x: r.x * u.x - l.scrollLeft * u.x + f.x,
        y: r.y * u.y - l.scrollTop * u.y + f.y
    }
}
function r2(e) {
    return Array.from(e.getClientRects())
}
function jd(e, t) {
    const r = Yl(e).scrollLeft;
    return t ? t.left + r : Qn(Sr(e)).left + r
}
function n2(e) {
    const t = Sr(e)
      , r = Yl(e)
      , n = e.ownerDocument.body
      , o = Et(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
      , i = Et(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
    let a = -r.scrollLeft + jd(e);
    const s = -r.scrollTop;
    return ar(n).direction === "rtl" && (a += Et(t.clientWidth, n.clientWidth) - o),
    {
        width: o,
        height: i,
        x: a,
        y: s
    }
}
function o2(e, t) {
    const r = Tt(e)
      , n = Sr(e)
      , o = r.visualViewport;
    let i = n.clientWidth
      , a = n.clientHeight
      , s = 0
      , l = 0;
    if (o) {
        i = o.width,
        a = o.height;
        const u = up();
        (!u || u && t === "fixed") && (s = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: a,
        x: s,
        y: l
    }
}
function i2(e, t) {
    const r = Qn(e, !0, t === "fixed")
      , n = r.top + e.clientTop
      , o = r.left + e.clientLeft
      , i = br(e) ? Io(e) : gn(1)
      , a = e.clientWidth * i.x
      , s = e.clientHeight * i.y
      , l = o * i.x
      , u = n * i.y;
    return {
        width: a,
        height: s,
        x: l,
        y: u
    }
}
function Av(e, t, r) {
    let n;
    if (t === "viewport")
        n = o2(e, r);
    else if (t === "document")
        n = n2(Sr(e));
    else if (ir(t))
        n = i2(t, r);
    else {
        const o = p0(e);
        n = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return pl(n)
}
function m0(e, t) {
    const r = xn(e);
    return r === t || !ir(r) || Ko(r) ? !1 : ar(r).position === "fixed" || m0(r, t)
}
function a2(e, t) {
    const r = t.get(e);
    if (r)
        return r;
    let n = aa(e, [], !1).filter(s => ir(s) && oi(s) !== "body")
      , o = null;
    const i = ar(e).position === "fixed";
    let a = i ? xn(e) : e;
    for (; ir(a) && !Ko(a); ) {
        const s = ar(a)
          , l = lp(a);
        !l && s.position === "fixed" && (o = null),
        (i ? !l && !o : !l && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Pa(a) && !l && m0(e, a)) ? n = n.filter(f => f !== a) : o = s,
        a = xn(a)
    }
    return t.set(e, n),
    n
}
function s2(e) {
    let {element: t, boundary: r, rootBoundary: n, strategy: o} = e;
    const a = [...r === "clippingAncestors" ? Ql(t) ? [] : a2(t, this._c) : [].concat(r), n]
      , s = a[0]
      , l = a.reduce( (u, f) => {
        const d = Av(t, f, o);
        return u.top = Et(d.top, u.top),
        u.right = hn(d.right, u.right),
        u.bottom = hn(d.bottom, u.bottom),
        u.left = Et(d.left, u.left),
        u
    }
    , Av(t, s, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function l2(e) {
    const {width: t, height: r} = f0(e);
    return {
        width: t,
        height: r
    }
}
function u2(e, t, r) {
    const n = br(t)
      , o = Sr(t)
      , i = r === "fixed"
      , a = Qn(e, !0, i, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = gn(0);
    if (n || !n && !i)
        if ((oi(t) !== "body" || Pa(o)) && (s = Yl(t)),
        n) {
            const p = Qn(t, !0, i, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            o && (l.x = jd(o));
    let u = 0
      , f = 0;
    if (o && !n && !i) {
        const p = o.getBoundingClientRect();
        f = p.top + s.scrollTop,
        u = p.left + s.scrollLeft - jd(o, p)
    }
    const d = a.left + s.scrollLeft - l.x - u
      , c = a.top + s.scrollTop - l.y - f;
    return {
        x: d,
        y: c,
        width: a.width,
        height: a.height
    }
}
function sc(e) {
    return ar(e).position === "static"
}
function Ov(e, t) {
    if (!br(e) || ar(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let r = e.offsetParent;
    return Sr(e) === r && (r = r.ownerDocument.body),
    r
}
function v0(e, t) {
    const r = Tt(e);
    if (Ql(e))
        return r;
    if (!br(e)) {
        let o = xn(e);
        for (; o && !Ko(o); ) {
            if (ir(o) && !sc(o))
                return o;
            o = xn(o)
        }
        return r
    }
    let n = Ov(e, t);
    for (; n && XP(n) && sc(n); )
        n = Ov(n, t);
    return n && Ko(n) && sc(n) && !lp(n) ? r : n || JP(e) || r
}
const c2 = async function(e) {
    const t = this.getOffsetParent || v0
      , r = this.getDimensions
      , n = await r(e.floating);
    return {
        reference: u2(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};
function d2(e) {
    return ar(e).direction === "rtl"
}
const f2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: t2,
    getDocumentElement: Sr,
    getClippingRect: s2,
    getOffsetParent: v0,
    getElementRects: c2,
    getClientRects: r2,
    getDimensions: l2,
    getScale: Io,
    isElement: ir,
    isRTL: d2
};
function p2(e, t) {
    let r = null, n;
    const o = Sr(e);
    function i() {
        var s;
        clearTimeout(n),
        (s = r) == null || s.disconnect(),
        r = null
    }
    function a(s, l) {
        s === void 0 && (s = !1),
        l === void 0 && (l = 1),
        i();
        const {left: u, top: f, width: d, height: c} = e.getBoundingClientRect();
        if (s || t(),
        !d || !c)
            return;
        const p = us(f)
          , g = us(o.clientWidth - (u + d))
          , h = us(o.clientHeight - (f + c))
          , w = us(u)
          , v = {
            rootMargin: -p + "px " + -g + "px " + -h + "px " + -w + "px",
            threshold: Et(0, hn(1, l)) || 1
        };
        let b = !0;
        function S(C) {
            const E = C[0].intersectionRatio;
            if (E !== l) {
                if (!b)
                    return a();
                E ? a(!1, E) : n = setTimeout( () => {
                    a(!1, 1e-7)
                }
                , 1e3)
            }
            b = !1
        }
        try {
            r = new IntersectionObserver(S,{
                ...v,
                root: o.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(S,v)
        }
        r.observe(e)
    }
    return a(!0),
    i
}
function m2(e, t, r, n) {
    n === void 0 && (n = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: a=typeof ResizeObserver == "function", layoutShift: s=typeof IntersectionObserver == "function", animationFrame: l=!1} = n
      , u = cp(e)
      , f = o || i ? [...u ? aa(u) : [], ...aa(t)] : [];
    f.forEach(y => {
        o && y.addEventListener("scroll", r, {
            passive: !0
        }),
        i && y.addEventListener("resize", r)
    }
    );
    const d = u && s ? p2(u, r) : null;
    let c = -1
      , p = null;
    a && (p = new ResizeObserver(y => {
        let[v] = y;
        v && v.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(c),
        c = requestAnimationFrame( () => {
            var b;
            (b = p) == null || b.observe(t)
        }
        )),
        r()
    }
    ),
    u && !l && p.observe(u),
    p.observe(t));
    let g, h = l ? Qn(e) : null;
    l && w();
    function w() {
        const y = Qn(e);
        h && (y.x !== h.x || y.y !== h.y || y.width !== h.width || y.height !== h.height) && r(),
        h = y,
        g = requestAnimationFrame(w)
    }
    return r(),
    () => {
        var y;
        f.forEach(v => {
            o && v.removeEventListener("scroll", r),
            i && v.removeEventListener("resize", r)
        }
        ),
        d == null || d(),
        (y = p) == null || y.disconnect(),
        p = null,
        l && cancelAnimationFrame(g)
    }
}
const v2 = KP
  , h2 = qP
  , g2 = VP
  , y2 = YP
  , x2 = HP
  , jv = UP
  , w2 = QP
  , b2 = (e, t, r) => {
    const n = new Map
      , o = {
        platform: f2,
        ...r
    }
      , i = {
        ...o.platform,
        _c: n
    };
    return WP(e, t, {
        ...o,
        platform: i
    })
}
;
var js = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function ml(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let r, n, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length,
            r !== t.length)
                return !1;
            for (n = r; n-- !== 0; )
                if (!ml(e[n], t[n]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        r = o.length,
        r !== Object.keys(t).length)
            return !1;
        for (n = r; n-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[n]))
                return !1;
        for (n = r; n-- !== 0; ) {
            const i = o[n];
            if (!(i === "_owner" && e.$$typeof) && !ml(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function h0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Mv(e, t) {
    const r = h0(e);
    return Math.round(t * r) / r
}
function lc(e) {
    const t = x.useRef(e);
    return js( () => {
        t.current = e
    }
    ),
    t
}
function S2(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: r="absolute", middleware: n=[], platform: o, elements: {reference: i, floating: a}={}, transform: s=!0, whileElementsMounted: l, open: u} = e
      , [f,d] = x.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [c,p] = x.useState(n);
    ml(c, n) || p(n);
    const [g,h] = x.useState(null)
      , [w,y] = x.useState(null)
      , v = x.useCallback(P => {
        P !== E.current && (E.current = P,
        h(P))
    }
    , [])
      , b = x.useCallback(P => {
        P !== N.current && (N.current = P,
        y(P))
    }
    , [])
      , S = i || g
      , C = a || w
      , E = x.useRef(null)
      , N = x.useRef(null)
      , D = x.useRef(f)
      , I = l != null
      , k = lc(l)
      , M = lc(o)
      , B = lc(u)
      , U = x.useCallback( () => {
        if (!E.current || !N.current)
            return;
        const P = {
            placement: t,
            strategy: r,
            middleware: c
        };
        M.current && (P.platform = M.current),
        b2(E.current, N.current, P).then(O => {
            const $ = {
                ...O,
                isPositioned: B.current !== !1
            };
            A.current && !ml(D.current, $) && (D.current = $,
            En.flushSync( () => {
                d($)
            }
            ))
        }
        )
    }
    , [c, t, r, M, B]);
    js( () => {
        u === !1 && D.current.isPositioned && (D.current.isPositioned = !1,
        d(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [u]);
    const A = x.useRef(!1);
    js( () => (A.current = !0,
    () => {
        A.current = !1
    }
    ), []),
    js( () => {
        if (S && (E.current = S),
        C && (N.current = C),
        S && C) {
            if (k.current)
                return k.current(S, C, U);
            U()
        }
    }
    , [S, C, U, k, I]);
    const V = x.useMemo( () => ({
        reference: E,
        floating: N,
        setReference: v,
        setFloating: b
    }), [v, b])
      , _ = x.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , K = x.useMemo( () => {
        const P = {
            position: r,
            left: 0,
            top: 0
        };
        if (!_.floating)
            return P;
        const O = Mv(_.floating, f.x)
          , $ = Mv(_.floating, f.y);
        return s ? {
            ...P,
            transform: "translate(" + O + "px, " + $ + "px)",
            ...h0(_.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: r,
            left: O,
            top: $
        }
    }
    , [r, s, _.floating, f.x, f.y]);
    return x.useMemo( () => ({
        ...f,
        update: U,
        refs: V,
        elements: _,
        floatingStyles: K
    }), [f, U, V, _, K])
}
const C2 = e => {
    function t(r) {
        return {}.hasOwnProperty.call(r, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(r) {
            const {element: n, padding: o} = typeof e == "function" ? e(r) : e;
            return n && t(n) ? n.current != null ? jv({
                element: n.current,
                padding: o
            }).fn(r) : {} : n ? jv({
                element: n,
                padding: o
            }).fn(r) : {}
        }
    }
}
  , E2 = (e, t) => ({
    ...v2(e),
    options: [e, t]
})
  , N2 = (e, t) => ({
    ...h2(e),
    options: [e, t]
})
  , P2 = (e, t) => ({
    ...w2(e),
    options: [e, t]
})
  , D2 = (e, t) => ({
    ...g2(e),
    options: [e, t]
})
  , T2 = (e, t) => ({
    ...y2(e),
    options: [e, t]
})
  , I2 = (e, t) => ({
    ...x2(e),
    options: [e, t]
})
  , R2 = (e, t) => ({
    ...C2(e),
    options: [e, t]
});
var k2 = "Arrow"
  , g0 = x.forwardRef( (e, t) => {
    const {children: r, width: n=10, height: o=5, ...i} = e;
    return m.jsx(ue.svg, {
        ...i,
        ref: t,
        width: n,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? r : m.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
g0.displayName = k2;
var A2 = g0;
function O2(e, t=[]) {
    let r = [];
    function n(i, a) {
        const s = x.createContext(a)
          , l = r.length;
        r = [...r, a];
        function u(d) {
            const {scope: c, children: p, ...g} = d
              , h = (c == null ? void 0 : c[e][l]) || s
              , w = x.useMemo( () => g, Object.values(g));
            return m.jsx(h.Provider, {
                value: w,
                children: p
            })
        }
        function f(d, c) {
            const p = (c == null ? void 0 : c[e][l]) || s
              , g = x.useContext(p);
            if (g)
                return g;
            if (a !== void 0)
                return a;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider",
        [u, f]
    }
    const o = () => {
        const i = r.map(a => x.createContext(a));
        return function(s) {
            const l = (s == null ? void 0 : s[e]) || i;
            return x.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: l
                }
            }), [s, l])
        }
    }
    ;
    return o.scopeName = e,
    [n, j2(o, ...t)]
}
function j2(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const r = () => {
        const n = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const a = n.reduce( (s, {useScope: l, scopeName: u}) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...s,
                    ...d
                }
            }
            , {});
            return x.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return r.scopeName = t.scopeName,
    r
}
function M2(e) {
    const [t,r] = x.useState(void 0);
    return it( () => {
        if (e) {
            r({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const n = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let a, s;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    a = u.inlineSize,
                    s = u.blockSize
                } else
                    a = e.offsetWidth,
                    s = e.offsetHeight;
                r({
                    width: a,
                    height: s
                })
            }
            );
            return n.observe(e, {
                box: "border-box"
            }),
            () => n.unobserve(e)
        } else
            r(void 0)
    }
    , [e]),
    t
}
var dp = "Popper"
  , [y0,Xl] = O2(dp)
  , [L2,x0] = y0(dp)
  , w0 = e => {
    const {__scopePopper: t, children: r} = e
      , [n,o] = x.useState(null);
    return m.jsx(L2, {
        scope: t,
        anchor: n,
        onAnchorChange: o,
        children: r
    })
}
;
w0.displayName = dp;
var b0 = "PopperAnchor"
  , S0 = x.forwardRef( (e, t) => {
    const {__scopePopper: r, virtualRef: n, ...o} = e
      , i = x0(b0, r)
      , a = x.useRef(null)
      , s = Ee(t, a);
    return x.useEffect( () => {
        i.onAnchorChange((n == null ? void 0 : n.current) || a.current)
    }
    ),
    n ? null : m.jsx(ue.div, {
        ...o,
        ref: s
    })
}
);
S0.displayName = b0;
var fp = "PopperContent"
  , [B2,F2] = y0(fp)
  , C0 = x.forwardRef( (e, t) => {
    var H, ne, ge, te, ae, ie;
    const {__scopePopper: r, side: n="bottom", sideOffset: o=0, align: i="center", alignOffset: a=0, arrowPadding: s=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: f=0, sticky: d="partial", hideWhenDetached: c=!1, updatePositionStrategy: p="optimized", onPlaced: g, ...h} = e
      , w = x0(fp, r)
      , [y,v] = x.useState(null)
      , b = Ee(t, Me => v(Me))
      , [S,C] = x.useState(null)
      , E = M2(S)
      , N = (E == null ? void 0 : E.width) ?? 0
      , D = (E == null ? void 0 : E.height) ?? 0
      , I = n + (i !== "center" ? "-" + i : "")
      , k = typeof f == "number" ? f : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...f
    }
      , M = Array.isArray(u) ? u : [u]
      , B = M.length > 0
      , U = {
        padding: k,
        boundary: M.filter($2),
        altBoundary: B
    }
      , {refs: A, floatingStyles: V, placement: _, isPositioned: K, middlewareData: P} = S2({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...Me) => m2(...Me, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [E2({
            mainAxis: o + D,
            alignmentAxis: a
        }), l && N2({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? P2() : void 0,
            ...U
        }), l && D2({
            ...U
        }), T2({
            ...U,
            apply: ({elements: Me, rects: _e, availableWidth: Gt, availableHeight: Je}) => {
                const {width: Kt, height: di} = _e.reference
                  , Pe = Me.floating.style;
                Pe.setProperty("--radix-popper-available-width", `${Gt}px`),
                Pe.setProperty("--radix-popper-available-height", `${Je}px`),
                Pe.setProperty("--radix-popper-anchor-width", `${Kt}px`),
                Pe.setProperty("--radix-popper-anchor-height", `${di}px`)
            }
        }), S && R2({
            element: S,
            padding: s
        }), z2({
            arrowWidth: N,
            arrowHeight: D
        }), c && I2({
            strategy: "referenceHidden",
            ...U
        })]
    })
      , [O,$] = P0(_)
      , F = At(g);
    it( () => {
        K && (F == null || F())
    }
    , [K, F]);
    const z = (H = P.arrow) == null ? void 0 : H.x
      , Q = (ne = P.arrow) == null ? void 0 : ne.y
      , oe = ((ge = P.arrow) == null ? void 0 : ge.centerOffset) !== 0
      , [ve,Z] = x.useState();
    return it( () => {
        y && Z(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    m.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...V,
            transform: K ? V.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: ve,
            "--radix-popper-transform-origin": [(te = P.transformOrigin) == null ? void 0 : te.x, (ae = P.transformOrigin) == null ? void 0 : ae.y].join(" "),
            ...((ie = P.hide) == null ? void 0 : ie.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: m.jsx(B2, {
            scope: r,
            placedSide: O,
            onArrowChange: C,
            arrowX: z,
            arrowY: Q,
            shouldHideArrow: oe,
            children: m.jsx(ue.div, {
                "data-side": O,
                "data-align": $,
                ...h,
                ref: b,
                style: {
                    ...h.style,
                    animation: K ? void 0 : "none"
                }
            })
        })
    })
}
);
C0.displayName = fp;
var E0 = "PopperArrow"
  , _2 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , N0 = x.forwardRef(function(t, r) {
    const {__scopePopper: n, ...o} = t
      , i = F2(E0, n)
      , a = _2[i.placedSide];
    return m.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [a]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: m.jsx(A2, {
            ...o,
            ref: r,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
N0.displayName = E0;
function $2(e) {
    return e !== null
}
var z2 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, y, v;
        const {placement: r, rects: n, middlewareData: o} = t
          , a = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , s = a ? 0 : e.arrowWidth
          , l = a ? 0 : e.arrowHeight
          , [u,f] = P0(r)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f]
          , c = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2
          , p = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + l / 2;
        let g = ""
          , h = "";
        return u === "bottom" ? (g = a ? d : `${c}px`,
        h = `${-l}px`) : u === "top" ? (g = a ? d : `${c}px`,
        h = `${n.floating.height + l}px`) : u === "right" ? (g = `${-l}px`,
        h = a ? d : `${p}px`) : u === "left" && (g = `${n.floating.width + l}px`,
        h = a ? d : `${p}px`),
        {
            data: {
                x: g,
                y: h
            }
        }
    }
});
function P0(e) {
    const [t,r="center"] = e.split("-");
    return [t, r]
}
var W2 = w0
  , D0 = S0
  , T0 = C0
  , I0 = N0
  , [Jl,rL] = Vl("Tooltip", [Xl])
  , pp = Xl()
  , R0 = "TooltipProvider"
  , U2 = 700
  , Lv = "tooltip.open"
  , [V2,k0] = Jl(R0)
  , A0 = e => {
    const {__scopeTooltip: t, delayDuration: r=U2, skipDelayDuration: n=300, disableHoverableContent: o=!1, children: i} = e
      , [a,s] = x.useState(!0)
      , l = x.useRef(!1)
      , u = x.useRef(0);
    return x.useEffect( () => {
        const f = u.current;
        return () => window.clearTimeout(f)
    }
    , []),
    m.jsx(V2, {
        scope: t,
        isOpenDelayed: a,
        delayDuration: r,
        onOpen: x.useCallback( () => {
            window.clearTimeout(u.current),
            s(!1)
        }
        , []),
        onClose: x.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => s(!0), n)
        }
        , [n]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: x.useCallback(f => {
            l.current = f
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
A0.displayName = R0;
var O0 = "Tooltip"
  , [nL,Zl] = Jl(O0)
  , Md = "TooltipTrigger"
  , H2 = x.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...n} = e
      , o = Zl(Md, r)
      , i = k0(Md, r)
      , a = pp(r)
      , s = x.useRef(null)
      , l = Ee(t, s, o.onTriggerChange)
      , u = x.useRef(!1)
      , f = x.useRef(!1)
      , d = x.useCallback( () => u.current = !1, []);
    return x.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    m.jsx(D0, {
        asChild: !0,
        ...a,
        children: m.jsx(ue.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...n,
            ref: l,
            onPointerMove: J(e.onPointerMove, c => {
                c.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                f.current = !0)
            }
            ),
            onPointerLeave: J(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                f.current = !1
            }
            ),
            onPointerDown: J(e.onPointerDown, () => {
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: J(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: J(e.onBlur, o.onClose),
            onClick: J(e.onClick, o.onClose)
        })
    })
}
);
H2.displayName = Md;
var G2 = "TooltipPortal"
  , [oL,K2] = Jl(G2, {
    forceMount: void 0
})
  , qo = "TooltipContent"
  , j0 = x.forwardRef( (e, t) => {
    const r = K2(qo, e.__scopeTooltip)
      , {forceMount: n=r.forceMount, side: o="top", ...i} = e
      , a = Zl(qo, e.__scopeTooltip);
    return m.jsx(ti, {
        present: n || a.open,
        children: a.disableHoverableContent ? m.jsx(M0, {
            side: o,
            ...i,
            ref: t
        }) : m.jsx(q2, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , q2 = x.forwardRef( (e, t) => {
    const r = Zl(qo, e.__scopeTooltip)
      , n = k0(qo, e.__scopeTooltip)
      , o = x.useRef(null)
      , i = Ee(t, o)
      , [a,s] = x.useState(null)
      , {trigger: l, onClose: u} = r
      , f = o.current
      , {onPointerInTransitChange: d} = n
      , c = x.useCallback( () => {
        s(null),
        d(!1)
    }
    , [d])
      , p = x.useCallback( (g, h) => {
        const w = g.currentTarget
          , y = {
            x: g.clientX,
            y: g.clientY
        }
          , v = J2(y, w.getBoundingClientRect())
          , b = Z2(y, v)
          , S = eD(h.getBoundingClientRect())
          , C = rD([...b, ...S]);
        s(C),
        d(!0)
    }
    , [d]);
    return x.useEffect( () => () => c(), [c]),
    x.useEffect( () => {
        if (l && f) {
            const g = w => p(w, f)
              , h = w => p(w, l);
            return l.addEventListener("pointerleave", g),
            f.addEventListener("pointerleave", h),
            () => {
                l.removeEventListener("pointerleave", g),
                f.removeEventListener("pointerleave", h)
            }
        }
    }
    , [l, f, p, c]),
    x.useEffect( () => {
        if (a) {
            const g = h => {
                const w = h.target
                  , y = {
                    x: h.clientX,
                    y: h.clientY
                }
                  , v = (l == null ? void 0 : l.contains(w)) || (f == null ? void 0 : f.contains(w))
                  , b = !tD(y, a);
                v ? c() : b && (c(),
                u())
            }
            ;
            return document.addEventListener("pointermove", g),
            () => document.removeEventListener("pointermove", g)
        }
    }
    , [l, f, a, u, c]),
    m.jsx(M0, {
        ...e,
        ref: i
    })
}
)
  , [Q2,Y2] = Jl(O0, {
    isInside: !1
})
  , M0 = x.forwardRef( (e, t) => {
    const {__scopeTooltip: r, children: n, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: a, ...s} = e
      , l = Zl(qo, r)
      , u = pp(r)
      , {onClose: f} = l;
    return x.useEffect( () => (document.addEventListener(Lv, f),
    () => document.removeEventListener(Lv, f)), [f]),
    x.useEffect( () => {
        if (l.trigger) {
            const d = c => {
                const p = c.target;
                p != null && p.contains(l.trigger) && f()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, f]),
    m.jsx(Ea, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: f,
        children: m.jsxs(T0, {
            "data-state": l.stateAttribute,
            ...u,
            ...s,
            ref: t,
            style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [m.jsx(wx, {
                children: n
            }), m.jsx(Q2, {
                scope: r,
                isInside: !0,
                children: m.jsx(GE, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || n
                })
            })]
        })
    })
}
);
j0.displayName = qo;
var L0 = "TooltipArrow"
  , X2 = x.forwardRef( (e, t) => {
    const {__scopeTooltip: r, ...n} = e
      , o = pp(r);
    return Y2(L0, r).isInside ? null : m.jsx(I0, {
        ...o,
        ...n,
        ref: t
    })
}
);
X2.displayName = L0;
function J2(e, t) {
    const r = Math.abs(t.top - e.y)
      , n = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(r, n, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case r:
        return "top";
    case n:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Z2(e, t, r=5) {
    const n = [];
    switch (t) {
    case "top":
        n.push({
            x: e.x - r,
            y: e.y + r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "bottom":
        n.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y - r
        });
        break;
    case "left":
        n.push({
            x: e.x + r,
            y: e.y - r
        }, {
            x: e.x + r,
            y: e.y + r
        });
        break;
    case "right":
        n.push({
            x: e.x - r,
            y: e.y - r
        }, {
            x: e.x - r,
            y: e.y + r
        });
        break
    }
    return n
}
function eD(e) {
    const {top: t, right: r, bottom: n, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: r,
        y: t
    }, {
        x: r,
        y: n
    }, {
        x: o,
        y: n
    }]
}
function tD(e, t) {
    const {x: r, y: n} = e;
    let o = !1;
    for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
        const s = t[i].x
          , l = t[i].y
          , u = t[a].x
          , f = t[a].y;
        l > n != f > n && r < (u - s) * (n - l) / (f - l) + s && (o = !o)
    }
    return o
}
function rD(e) {
    const t = e.slice();
    return t.sort( (r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0),
    nD(t)
}
function nD(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , a = t[t.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const r = [];
    for (let n = e.length - 1; n >= 0; n--) {
        const o = e[n];
        for (; r.length >= 2; ) {
            const i = r[r.length - 1]
              , a = r[r.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x))
                r.pop();
            else
                break
        }
        r.push(o)
    }
    return r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
}
var oD = A0
  , B0 = j0;
const iD = oD
  , aD = x.forwardRef( ({className: e, sideOffset: t=4, ...r}, n) => m.jsx(B0, {
    ref: n,
    sideOffset: t,
    className: pe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...r
}));
aD.displayName = B0.displayName;
var eu = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , tu = typeof window > "u" || "Deno"in globalThis;
function Xt() {}
function sD(e, t) {
    return typeof e == "function" ? e(t) : e
}
function lD(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function uD(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Bv(e, t) {
    return typeof e == "function" ? e(t) : e
}
function cD(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Fv(e, t) {
    const {type: r="all", exact: n, fetchStatus: o, predicate: i, queryKey: a, stale: s} = e;
    if (a) {
        if (n) {
            if (t.queryHash !== mp(a, t.options))
                return !1
        } else if (!la(t.queryKey, a))
            return !1
    }
    if (r !== "all") {
        const l = t.isActive();
        if (r === "active" && !l || r === "inactive" && l)
            return !1
    }
    return !(typeof s == "boolean" && t.isStale() !== s || o && o !== t.state.fetchStatus || i && !i(t))
}
function _v(e, t) {
    const {exact: r, status: n, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (r) {
            if (sa(t.options.mutationKey) !== sa(i))
                return !1
        } else if (!la(t.options.mutationKey, i))
            return !1
    }
    return !(n && t.state.status !== n || o && !o(t))
}
function mp(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || sa)(e)
}
function sa(e) {
    return JSON.stringify(e, (t, r) => Ld(r) ? Object.keys(r).sort().reduce( (n, o) => (n[o] = r[o],
    n), {}) : r)
}
function la(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(r => !la(e[r], t[r])) : !1
}
function F0(e, t) {
    if (e === t)
        return e;
    const r = $v(e) && $v(t);
    if (r || Ld(e) && Ld(t)) {
        const n = r ? e : Object.keys(e)
          , o = n.length
          , i = r ? t : Object.keys(t)
          , a = i.length
          , s = r ? [] : {};
        let l = 0;
        for (let u = 0; u < a; u++) {
            const f = r ? u : i[u];
            (!r && n.includes(f) || r) && e[f] === void 0 && t[f] === void 0 ? (s[f] = void 0,
            l++) : (s[f] = F0(e[f], t[f]),
            s[f] === e[f] && e[f] !== void 0 && l++)
        }
        return o === a && l === o ? e : s
    }
    return t
}
function $v(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Ld(e) {
    if (!zv(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const r = t.prototype;
    return !(!zv(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function zv(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function dD(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function fD(e, t, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? F0(e, t) : t
}
function pD(e, t, r=0) {
    const n = [...e, t];
    return r && n.length > r ? n.slice(1) : n
}
function mD(e, t, r=0) {
    const n = [t, ...e];
    return r && n.length > r ? n.slice(0, -1) : n
}
var vp = Symbol();
function _0(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === vp ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Ln, Kr, ko, Xh, vD = (Xh = class extends eu {
    constructor() {
        super();
        ce(this, Ln);
        ce(this, Kr);
        ce(this, ko);
        ee(this, ko, t => {
            if (!tu && window.addEventListener) {
                const r = () => t();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, Kr) || this.setEventListener(T(this, ko))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, Kr)) == null || t.call(this),
        ee(this, Kr, void 0))
    }
    setEventListener(t) {
        var r;
        ee(this, ko, t),
        (r = T(this, Kr)) == null || r.call(this),
        ee(this, Kr, t(n => {
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        T(this, Ln) !== t && (ee(this, Ln, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(r => {
            r(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof T(this, Ln) == "boolean" ? T(this, Ln) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Ln = new WeakMap,
Kr = new WeakMap,
ko = new WeakMap,
Xh), $0 = new vD, Ao, qr, Oo, Jh, hD = (Jh = class extends eu {
    constructor() {
        super();
        ce(this, Ao, !0);
        ce(this, qr);
        ce(this, Oo);
        ee(this, Oo, t => {
            if (!tu && window.addEventListener) {
                const r = () => t(!0)
                  , n = () => t(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", n, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        T(this, qr) || this.setEventListener(T(this, Oo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = T(this, qr)) == null || t.call(this),
        ee(this, qr, void 0))
    }
    setEventListener(t) {
        var r;
        ee(this, Oo, t),
        (r = T(this, qr)) == null || r.call(this),
        ee(this, qr, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        T(this, Ao) !== t && (ee(this, Ao, t),
        this.listeners.forEach(n => {
            n(t)
        }
        ))
    }
    isOnline() {
        return T(this, Ao)
    }
}
,
Ao = new WeakMap,
qr = new WeakMap,
Oo = new WeakMap,
Jh), vl = new hD;
function gD() {
    let e, t;
    const r = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    r.status = "pending",
    r.catch( () => {}
    );
    function n(o) {
        Object.assign(r, o),
        delete r.resolve,
        delete r.reject
    }
    return r.resolve = o => {
        n({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    r.reject = o => {
        n({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    r
}
function yD(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function z0(e) {
    return (e ?? "online") === "online" ? vl.isOnline() : !0
}
var W0 = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function uc(e) {
    return e instanceof W0
}
function U0(e) {
    let t = !1, r = 0, n = !1, o;
    const i = gD()
      , a = h => {
        var w;
        n || (c(new W0(h)),
        (w = e.abort) == null || w.call(e))
    }
      , s = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => $0.isFocused() && (e.networkMode === "always" || vl.isOnline()) && e.canRun()
      , f = () => z0(e.networkMode) && e.canRun()
      , d = h => {
        var w;
        n || (n = !0,
        (w = e.onSuccess) == null || w.call(e, h),
        o == null || o(),
        i.resolve(h))
    }
      , c = h => {
        var w;
        n || (n = !0,
        (w = e.onError) == null || w.call(e, h),
        o == null || o(),
        i.reject(h))
    }
      , p = () => new Promise(h => {
        var w;
        o = y => {
            (n || u()) && h(y)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var h;
        o = void 0,
        n || (h = e.onContinue) == null || h.call(e)
    }
    )
      , g = () => {
        if (n)
            return;
        let h;
        const w = r === 0 ? e.initialPromise : void 0;
        try {
            h = w ?? e.fn()
        } catch (y) {
            h = Promise.reject(y)
        }
        Promise.resolve(h).then(d).catch(y => {
            var E;
            if (n)
                return;
            const v = e.retry ?? (tu ? 0 : 3)
              , b = e.retryDelay ?? yD
              , S = typeof b == "function" ? b(r, y) : b
              , C = v === !0 || typeof v == "number" && r < v || typeof v == "function" && v(r, y);
            if (t || !C) {
                c(y);
                return
            }
            r++,
            (E = e.onFail) == null || E.call(e, r, y),
            dD(S).then( () => u() ? void 0 : p()).then( () => {
                t ? c(y) : g()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: a,
        continue: () => (o == null || o(),
        i),
        cancelRetry: s,
        continueRetry: l,
        canStart: f,
        start: () => (f() ? g() : p().then(g),
        i)
    }
}
function xD() {
    let e = []
      , t = 0
      , r = s => {
        s()
    }
      , n = s => {
        s()
    }
      , o = s => setTimeout(s, 0);
    const i = s => {
        t ? e.push(s) : o( () => {
            r(s)
        }
        )
    }
      , a = () => {
        const s = e;
        e = [],
        s.length && o( () => {
            n( () => {
                s.forEach(l => {
                    r(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: s => {
            let l;
            t++;
            try {
                l = s()
            } finally {
                t--,
                t || a()
            }
            return l
        }
        ,
        batchCalls: s => (...l) => {
            i( () => {
                s(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: s => {
            r = s
        }
        ,
        setBatchNotifyFunction: s => {
            n = s
        }
        ,
        setScheduler: s => {
            o = s
        }
    }
}
var ut = xD(), Bn, Zh, V0 = (Zh = class {
    constructor() {
        ce(this, Bn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        lD(this.gcTime) && ee(this, Bn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (tu ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        T(this, Bn) && (clearTimeout(T(this, Bn)),
        ee(this, Bn, void 0))
    }
}
,
Bn = new WeakMap,
Zh), jo, Mo, Bt, rt, ga, Fn, Jt, Er, eg, wD = (eg = class extends V0 {
    constructor(t) {
        super();
        ce(this, Jt);
        ce(this, jo);
        ce(this, Mo);
        ce(this, Bt);
        ce(this, rt);
        ce(this, ga);
        ce(this, Fn);
        ee(this, Fn, !1),
        ee(this, ga, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        ee(this, Bt, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        ee(this, jo, SD(this.options)),
        this.state = t.state ?? T(this, jo),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = T(this, rt)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...T(this, ga),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && T(this, Bt).remove(this)
    }
    setData(t, r) {
        const n = fD(this.state.data, t, this.options);
        return Ze(this, Jt, Er).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual
        }),
        n
    }
    setState(t, r) {
        Ze(this, Jt, Er).call(this, {
            type: "setState",
            state: t,
            setStateOptions: r
        })
    }
    cancel(t) {
        var n, o;
        const r = (n = T(this, rt)) == null ? void 0 : n.promise;
        return (o = T(this, rt)) == null || o.cancel(t),
        r ? r.then(Xt).catch(Xt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(T(this, jo))
    }
    isActive() {
        return this.observers.some(t => cD(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === vp || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !uD(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var r;
        const t = this.observers.find(n => n.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (r = T(this, rt)) == null || r.continue()
    }
    onOnline() {
        var r;
        const t = this.observers.find(n => n.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (r = T(this, rt)) == null || r.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        T(this, Bt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(r => r !== t),
        this.observers.length || (T(this, rt) && (T(this, Fn) ? T(this, rt).cancel({
            revert: !0
        }) : T(this, rt).cancelRetry()),
        this.scheduleGc()),
        T(this, Bt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ze(this, Jt, Er).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, r) {
        var l, u, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (T(this, rt))
                return T(this, rt).continueRetry(),
                T(this, rt).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const d = this.observers.find(c => c.options.queryFn);
            d && this.setOptions(d.options)
        }
        const n = new AbortController
          , o = d => {
            Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: () => (ee(this, Fn, !0),
                n.signal)
            })
        }
          , i = () => {
            const d = _0(this.options, r)
              , c = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(c),
            ee(this, Fn, !1),
            this.options.persister ? this.options.persister(d, c, this) : d(c)
        }
          , a = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i
        };
        o(a),
        (l = this.options.behavior) == null || l.onFetch(a, this),
        ee(this, Mo, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = a.fetchOptions) == null ? void 0 : u.meta)) && Ze(this, Jt, Er).call(this, {
            type: "fetch",
            meta: (f = a.fetchOptions) == null ? void 0 : f.meta
        });
        const s = d => {
            var c, p, g, h;
            uc(d) && d.silent || Ze(this, Jt, Er).call(this, {
                type: "error",
                error: d
            }),
            uc(d) || ((p = (c = T(this, Bt).config).onError) == null || p.call(c, d, this),
            (h = (g = T(this, Bt).config).onSettled) == null || h.call(g, this.state.data, d, this)),
            this.scheduleGc()
        }
        ;
        return ee(this, rt, U0({
            initialPromise: r == null ? void 0 : r.initialPromise,
            fn: a.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: d => {
                var c, p, g, h;
                if (d === void 0) {
                    s(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(d)
                } catch (w) {
                    s(w);
                    return
                }
                (p = (c = T(this, Bt).config).onSuccess) == null || p.call(c, d, this),
                (h = (g = T(this, Bt).config).onSettled) == null || h.call(g, d, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: s,
            onFail: (d, c) => {
                Ze(this, Jt, Er).call(this, {
                    type: "failed",
                    failureCount: d,
                    error: c
                })
            }
            ,
            onPause: () => {
                Ze(this, Jt, Er).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ze(this, Jt, Er).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        T(this, rt).start()
    }
}
,
jo = new WeakMap,
Mo = new WeakMap,
Bt = new WeakMap,
rt = new WeakMap,
ga = new WeakMap,
Fn = new WeakMap,
Jt = new WeakSet,
Er = function(t) {
    const r = n => {
        switch (t.type) {
        case "failed":
            return {
                ...n,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...n,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...n,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...n,
                ...bD(n.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...n,
                data: t.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return uc(o) && o.revert && T(this, Mo) ? {
                ...T(this, Mo),
                fetchStatus: "idle"
            } : {
                ...n,
                error: o,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...n,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...n,
                ...t.state
            }
        }
    }
    ;
    this.state = r(this.state),
    ut.batch( () => {
        this.observers.forEach(n => {
            n.onQueryUpdate()
        }
        ),
        T(this, Bt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
eg);
function bD(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: z0(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function SD(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , r = t !== void 0
      , n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? n ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var mr, tg, CD = (tg = class extends eu {
    constructor(t={}) {
        super();
        ce(this, mr);
        this.config = t,
        ee(this, mr, new Map)
    }
    build(t, r, n) {
        const o = r.queryKey
          , i = r.queryHash ?? mp(o, r);
        let a = this.get(i);
        return a || (a = new wD({
            cache: this,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(r),
            state: n,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(a)),
        a
    }
    add(t) {
        T(this, mr).has(t.queryHash) || (T(this, mr).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const r = T(this, mr).get(t.queryHash);
        r && (t.destroy(),
        r === t && T(this, mr).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        ut.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return T(this, mr).get(t)
    }
    getAll() {
        return [...T(this, mr).values()]
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => Fv(r, n))
    }
    findAll(t={}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter(n => Fv(t, n)) : r
    }
    notify(t) {
        ut.batch( () => {
            this.listeners.forEach(r => {
                r(t)
            }
            )
        }
        )
    }
    onFocus() {
        ut.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ut.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
mr = new WeakMap,
tg), vr, st, _n, hr, zr, rg, ED = (rg = class extends V0 {
    constructor(t) {
        super();
        ce(this, hr);
        ce(this, vr);
        ce(this, st);
        ce(this, _n);
        this.mutationId = t.mutationId,
        ee(this, st, t.mutationCache),
        ee(this, vr, []),
        this.state = t.state || ND(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        T(this, vr).includes(t) || (T(this, vr).push(t),
        this.clearGcTimeout(),
        T(this, st).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        ee(this, vr, T(this, vr).filter(r => r !== t)),
        this.scheduleGc(),
        T(this, st).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        T(this, vr).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, st).remove(this))
    }
    continue() {
        var t;
        return ((t = T(this, _n)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, i, a, s, l, u, f, d, c, p, g, h, w, y, v, b, S, C, E, N;
        ee(this, _n, U0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (D, I) => {
                Ze(this, hr, zr).call(this, {
                    type: "failed",
                    failureCount: D,
                    error: I
                })
            }
            ,
            onPause: () => {
                Ze(this, hr, zr).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ze(this, hr, zr).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, st).canRun(this)
        }));
        const r = this.state.status === "pending"
          , n = !T(this, _n).canStart();
        try {
            if (!r) {
                Ze(this, hr, zr).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: n
                }),
                await ((i = (o = T(this, st).config).onMutate) == null ? void 0 : i.call(o, t, this));
                const I = await ((s = (a = this.options).onMutate) == null ? void 0 : s.call(a, t));
                I !== this.state.context && Ze(this, hr, zr).call(this, {
                    type: "pending",
                    context: I,
                    variables: t,
                    isPaused: n
                })
            }
            const D = await T(this, _n).start();
            return await ((u = (l = T(this, st).config).onSuccess) == null ? void 0 : u.call(l, D, t, this.state.context, this)),
            await ((d = (f = this.options).onSuccess) == null ? void 0 : d.call(f, D, t, this.state.context)),
            await ((p = (c = T(this, st).config).onSettled) == null ? void 0 : p.call(c, D, null, this.state.variables, this.state.context, this)),
            await ((h = (g = this.options).onSettled) == null ? void 0 : h.call(g, D, null, t, this.state.context)),
            Ze(this, hr, zr).call(this, {
                type: "success",
                data: D
            }),
            D
        } catch (D) {
            try {
                throw await ((y = (w = T(this, st).config).onError) == null ? void 0 : y.call(w, D, t, this.state.context, this)),
                await ((b = (v = this.options).onError) == null ? void 0 : b.call(v, D, t, this.state.context)),
                await ((C = (S = T(this, st).config).onSettled) == null ? void 0 : C.call(S, void 0, D, this.state.variables, this.state.context, this)),
                await ((N = (E = this.options).onSettled) == null ? void 0 : N.call(E, void 0, D, t, this.state.context)),
                D
            } finally {
                Ze(this, hr, zr).call(this, {
                    type: "error",
                    error: D
                })
            }
        } finally {
            T(this, st).runNext(this)
        }
    }
}
,
vr = new WeakMap,
st = new WeakMap,
_n = new WeakMap,
hr = new WeakSet,
zr = function(t) {
    const r = n => {
        switch (t.type) {
        case "failed":
            return {
                ...n,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...n,
                isPaused: !0
            };
        case "continue":
            return {
                ...n,
                isPaused: !1
            };
        case "pending":
            return {
                ...n,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...n,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...n,
                data: void 0,
                error: t.error,
                failureCount: n.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = r(this.state),
    ut.batch( () => {
        T(this, vr).forEach(n => {
            n.onMutationUpdate(t)
        }
        ),
        T(this, st).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
rg);
function ND() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var bt, ya, ng, PD = (ng = class extends eu {
    constructor(t={}) {
        super();
        ce(this, bt);
        ce(this, ya);
        this.config = t,
        ee(this, bt, new Map),
        ee(this, ya, Date.now())
    }
    build(t, r, n) {
        const o = new ED({
            mutationCache: this,
            mutationId: ++Wa(this, ya)._,
            options: t.defaultMutationOptions(r),
            state: n
        });
        return this.add(o),
        o
    }
    add(t) {
        const r = cs(t)
          , n = T(this, bt).get(r) ?? [];
        n.push(t),
        T(this, bt).set(r, n),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var n;
        const r = cs(t);
        if (T(this, bt).has(r)) {
            const o = (n = T(this, bt).get(r)) == null ? void 0 : n.filter(i => i !== t);
            o && (o.length === 0 ? T(this, bt).delete(r) : T(this, bt).set(r, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var n;
        const r = (n = T(this, bt).get(cs(t))) == null ? void 0 : n.find(o => o.state.status === "pending");
        return !r || r === t
    }
    runNext(t) {
        var n;
        const r = (n = T(this, bt).get(cs(t))) == null ? void 0 : n.find(o => o !== t && o.state.isPaused);
        return (r == null ? void 0 : r.continue()) ?? Promise.resolve()
    }
    clear() {
        ut.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...T(this, bt).values()].flat()
    }
    find(t) {
        const r = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => _v(r, n))
    }
    findAll(t={}) {
        return this.getAll().filter(r => _v(t, r))
    }
    notify(t) {
        ut.batch( () => {
            this.listeners.forEach(r => {
                r(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(r => r.state.isPaused);
        return ut.batch( () => Promise.all(t.map(r => r.continue().catch(Xt))))
    }
}
,
bt = new WeakMap,
ya = new WeakMap,
ng);
function cs(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function Wv(e) {
    return {
        onFetch: (t, r) => {
            var f, d, c, p, g;
            const n = t.options
              , o = (c = (d = (f = t.fetchOptions) == null ? void 0 : f.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : c.direction
              , i = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , a = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
            let s = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let h = !1;
                const w = b => {
                    Object.defineProperty(b, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? h = !0 : t.signal.addEventListener("abort", () => {
                            h = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = _0(t.options, t.fetchOptions)
                  , v = async (b, S, C) => {
                    if (h)
                        return Promise.reject();
                    if (S == null && b.pages.length)
                        return Promise.resolve(b);
                    const E = {
                        queryKey: t.queryKey,
                        pageParam: S,
                        direction: C ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    w(E);
                    const N = await y(E)
                      , {maxPages: D} = t.options
                      , I = C ? mD : pD;
                    return {
                        pages: I(b.pages, N, D),
                        pageParams: I(b.pageParams, S, D)
                    }
                }
                ;
                if (o && i.length) {
                    const b = o === "backward"
                      , S = b ? DD : Uv
                      , C = {
                        pages: i,
                        pageParams: a
                    }
                      , E = S(n, C);
                    s = await v(C, E, b)
                } else {
                    const b = e ?? i.length;
                    do {
                        const S = l === 0 ? a[0] ?? n.initialPageParam : Uv(n, s);
                        if (l > 0 && S == null)
                            break;
                        s = await v(s, S),
                        l++
                    } while (l < b)
                }
                return s
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var h, w;
                return (w = (h = t.options).persister) == null ? void 0 : w.call(h, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, r)
            }
            : t.fetchFn = u
        }
    }
}
function Uv(e, {pages: t, pageParams: r}) {
    const n = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0
}
function DD(e, {pages: t, pageParams: r}) {
    var n;
    return t.length > 0 ? (n = e.getPreviousPageParam) == null ? void 0 : n.call(e, t[0], t, r[0], r) : void 0
}
var Re, Qr, Yr, Lo, Bo, Xr, Fo, _o, og, TD = (og = class {
    constructor(e={}) {
        ce(this, Re);
        ce(this, Qr);
        ce(this, Yr);
        ce(this, Lo);
        ce(this, Bo);
        ce(this, Xr);
        ce(this, Fo);
        ce(this, _o);
        ee(this, Re, e.queryCache || new CD),
        ee(this, Qr, e.mutationCache || new PD),
        ee(this, Yr, e.defaultOptions || {}),
        ee(this, Lo, new Map),
        ee(this, Bo, new Map),
        ee(this, Xr, 0)
    }
    mount() {
        Wa(this, Xr)._++,
        T(this, Xr) === 1 && (ee(this, Fo, $0.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, Re).onFocus())
        }
        )),
        ee(this, _o, vl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            T(this, Re).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Wa(this, Xr)._--,
        T(this, Xr) === 0 && ((e = T(this, Fo)) == null || e.call(this),
        ee(this, Fo, void 0),
        (t = T(this, _o)) == null || t.call(this),
        ee(this, _o, void 0))
    }
    isFetching(e) {
        return T(this, Re).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return T(this, Qr).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (r = T(this, Re).get(t.queryHash)) == null ? void 0 : r.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const r = this.defaultQueryOptions(e)
              , n = T(this, Re).build(this, r);
            return e.revalidateIfStale && n.isStaleByTime(Bv(r.staleTime, n)) && this.prefetchQuery(r),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return T(this, Re).findAll(e).map( ({queryKey: t, state: r}) => {
            const n = r.data;
            return [t, n]
        }
        )
    }
    setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({
            queryKey: e
        })
          , o = T(this, Re).get(n.queryHash)
          , i = o == null ? void 0 : o.state.data
          , a = sD(t, i);
        if (a !== void 0)
            return T(this, Re).build(this, n).setData(a, {
                ...r,
                manual: !0
            })
    }
    setQueriesData(e, t, r) {
        return ut.batch( () => T(this, Re).findAll(e).map( ({queryKey: n}) => [n, this.setQueryData(n, t, r)]))
    }
    getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (r = T(this, Re).get(t.queryHash)) == null ? void 0 : r.state
    }
    removeQueries(e) {
        const t = T(this, Re);
        ut.batch( () => {
            t.findAll(e).forEach(r => {
                t.remove(r)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const r = T(this, Re)
          , n = {
            type: "active",
            ...e
        };
        return ut.batch( () => (r.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(n, t)))
    }
    cancelQueries(e={}, t={}) {
        const r = {
            revert: !0,
            ...t
        }
          , n = ut.batch( () => T(this, Re).findAll(e).map(o => o.cancel(r)));
        return Promise.all(n).then(Xt).catch(Xt)
    }
    invalidateQueries(e={}, t={}) {
        return ut.batch( () => {
            if (T(this, Re).findAll(e).forEach(n => {
                n.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const r = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(r, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const r = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , n = ut.batch( () => T(this, Re).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let i = o.fetch(void 0, r);
            return r.throwOnError || (i = i.catch(Xt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(n).then(Xt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = T(this, Re).build(this, t);
        return r.isStaleByTime(Bv(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Xt).catch(Xt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Wv(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Xt).catch(Xt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Wv(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return vl.isOnline() ? T(this, Qr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return T(this, Re)
    }
    getMutationCache() {
        return T(this, Qr)
    }
    getDefaultOptions() {
        return T(this, Yr)
    }
    setDefaultOptions(e) {
        ee(this, Yr, e)
    }
    setQueryDefaults(e, t) {
        T(this, Lo).set(sa(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...T(this, Lo).values()];
        let r = {};
        return t.forEach(n => {
            la(e, n.queryKey) && (r = {
                ...r,
                ...n.defaultOptions
            })
        }
        ),
        r
    }
    setMutationDefaults(e, t) {
        T(this, Bo).set(sa(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...T(this, Bo).values()];
        let r = {};
        return t.forEach(n => {
            la(e, n.mutationKey) && (r = {
                ...r,
                ...n.defaultOptions
            })
        }
        ),
        r
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...T(this, Yr).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = mp(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === vp && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...T(this, Yr).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        T(this, Re).clear(),
        T(this, Qr).clear()
    }
}
,
Re = new WeakMap,
Qr = new WeakMap,
Yr = new WeakMap,
Lo = new WeakMap,
Bo = new WeakMap,
Xr = new WeakMap,
Fo = new WeakMap,
_o = new WeakMap,
og), ID = x.createContext(void 0), RD = ({client: e, children: t}) => (x.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
m.jsx(ID.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ua() {
    return ua = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ua.apply(this, arguments)
}
var en;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(en || (en = {}));
const Vv = "popstate";
function kD(e) {
    e === void 0 && (e = {});
    function t(n, o) {
        let {pathname: i, search: a, hash: s} = n.location;
        return Bd("", {
            pathname: i,
            search: a,
            hash: s
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function r(n, o) {
        return typeof o == "string" ? o : G0(o)
    }
    return OD(t, r, null, e)
}
function Fe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function H0(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function AD() {
    return Math.random().toString(36).substr(2, 8)
}
function Hv(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Bd(e, t, r, n) {
    return r === void 0 && (r = null),
    ua({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? ii(t) : t, {
        state: r,
        key: t && t.key || n || AD()
    })
}
function G0(e) {
    let {pathname: t="/", search: r="", hash: n=""} = e;
    return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
}
function ii(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r),
        e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n),
        e = e.substr(0, n)),
        e && (t.pathname = e)
    }
    return t
}
function OD(e, t, r, n) {
    n === void 0 && (n = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = n
      , a = o.history
      , s = en.Pop
      , l = null
      , u = f();
    u == null && (u = 0,
    a.replaceState(ua({}, a.state, {
        idx: u
    }), ""));
    function f() {
        return (a.state || {
            idx: null
        }).idx
    }
    function d() {
        s = en.Pop;
        let w = f()
          , y = w == null ? null : w - u;
        u = w,
        l && l({
            action: s,
            location: h.location,
            delta: y
        })
    }
    function c(w, y) {
        s = en.Push;
        let v = Bd(h.location, w, y);
        u = f() + 1;
        let b = Hv(v, u)
          , S = h.createHref(v);
        try {
            a.pushState(b, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(S)
        }
        i && l && l({
            action: s,
            location: h.location,
            delta: 1
        })
    }
    function p(w, y) {
        s = en.Replace;
        let v = Bd(h.location, w, y);
        u = f();
        let b = Hv(v, u)
          , S = h.createHref(v);
        a.replaceState(b, "", S),
        i && l && l({
            action: s,
            location: h.location,
            delta: 0
        })
    }
    function g(w) {
        let y = o.location.origin !== "null" ? o.location.origin : o.location.href
          , v = typeof w == "string" ? w : G0(w);
        return v = v.replace(/ $/, "%20"),
        Fe(y, "No window.location.(origin|href) available to create URL for href: " + v),
        new URL(v,y)
    }
    let h = {
        get action() {
            return s
        },
        get location() {
            return e(o, a)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Vv, d),
            l = w,
            () => {
                o.removeEventListener(Vv, d),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: g,
        encodeLocation(w) {
            let y = g(w);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: c,
        replace: p,
        go(w) {
            return a.go(w)
        }
    };
    return h
}
var Gv;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Gv || (Gv = {}));
function jD(e, t, r) {
    return r === void 0 && (r = "/"),
    MD(e, t, r, !1)
}
function MD(e, t, r, n) {
    let o = typeof t == "string" ? ii(t) : t
      , i = Q0(o.pathname || "/", r);
    if (i == null)
        return null;
    let a = K0(e);
    LD(a);
    let s = null;
    for (let l = 0; s == null && l < a.length; ++l) {
        let u = KD(i);
        s = HD(a[l], u, n)
    }
    return s
}
function K0(e, t, r, n) {
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let o = (i, a, s) => {
        let l = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: a,
            route: i
        };
        l.relativePath.startsWith("/") && (Fe(l.relativePath.startsWith(n), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(n.length));
        let u = Wn([n, l.relativePath])
          , f = r.concat(l);
        i.children && i.children.length > 0 && (Fe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        K0(i.children, t, f, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: UD(u, i.index),
            routesMeta: f
        })
    }
    ;
    return e.forEach( (i, a) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?")))
            o(i, a);
        else
            for (let l of q0(i.path))
                o(i, a, l)
    }
    ),
    t
}
function q0(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[r,...n] = t
      , o = r.endsWith("?")
      , i = r.replace(/\?$/, "");
    if (n.length === 0)
        return o ? [i, ""] : [i];
    let a = q0(n.join("/"))
      , s = [];
    return s.push(...a.map(l => l === "" ? i : [i, l].join("/"))),
    o && s.push(...a),
    s.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function LD(e) {
    e.sort( (t, r) => t.score !== r.score ? r.score - t.score : VD(t.routesMeta.map(n => n.childrenIndex), r.routesMeta.map(n => n.childrenIndex)))
}
const BD = /^:[\w-]+$/
  , FD = 3
  , _D = 2
  , $D = 1
  , zD = 10
  , WD = -2
  , Kv = e => e === "*";
function UD(e, t) {
    let r = e.split("/")
      , n = r.length;
    return r.some(Kv) && (n += WD),
    t && (n += _D),
    r.filter(o => !Kv(o)).reduce( (o, i) => o + (BD.test(i) ? FD : i === "" ? $D : zD), n)
}
function VD(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (n, o) => n === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function HD(e, t, r) {
    let {routesMeta: n} = e
      , o = {}
      , i = "/"
      , a = [];
    for (let s = 0; s < n.length; ++s) {
        let l = n[s]
          , u = s === n.length - 1
          , f = i === "/" ? t : t.slice(i.length) || "/"
          , d = qv({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, f)
          , c = l.route;
        if (!d && u && r && !n[n.length - 1].route.index && (d = qv({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, f)),
        !d)
            return null;
        Object.assign(o, d.params),
        a.push({
            params: o,
            pathname: Wn([i, d.pathname]),
            pathnameBase: ZD(Wn([i, d.pathnameBase])),
            route: c
        }),
        d.pathnameBase !== "/" && (i = Wn([i, d.pathnameBase]))
    }
    return a
}
function qv(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[r,n] = GD(e.path, e.caseSensitive, e.end)
      , o = t.match(r);
    if (!o)
        return null;
    let i = o[0]
      , a = i.replace(/(.)\/+$/, "$1")
      , s = o.slice(1);
    return {
        params: n.reduce( (u, f, d) => {
            let {paramName: c, isOptional: p} = f;
            if (c === "*") {
                let h = s[d] || "";
                a = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1")
            }
            const g = s[d];
            return p && !g ? u[c] = void 0 : u[c] = (g || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: a,
        pattern: e
    }
}
function GD(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    H0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let n = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, s, l) => (n.push({
        paramName: s,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (n.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), n]
}
function KD(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return H0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Q0(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length
      , n = e.charAt(r);
    return n && n !== "/" ? null : e.slice(r) || "/"
}
function qD(e, t) {
    t === void 0 && (t = "/");
    let {pathname: r, search: n="", hash: o=""} = typeof e == "string" ? ii(e) : e;
    return {
        pathname: r ? r.startsWith("/") ? r : QD(r, t) : t,
        search: eT(n),
        hash: tT(o)
    }
}
function QD(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function cc(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function YD(e) {
    return e.filter( (t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}
function XD(e, t) {
    let r = YD(e);
    return t ? r.map( (n, o) => o === r.length - 1 ? n.pathname : n.pathnameBase) : r.map(n => n.pathnameBase)
}
function JD(e, t, r, n) {
    n === void 0 && (n = !1);
    let o;
    typeof e == "string" ? o = ii(e) : (o = ua({}, e),
    Fe(!o.pathname || !o.pathname.includes("?"), cc("?", "pathname", "search", o)),
    Fe(!o.pathname || !o.pathname.includes("#"), cc("#", "pathname", "hash", o)),
    Fe(!o.search || !o.search.includes("#"), cc("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", a = i ? "/" : o.pathname, s;
    if (a == null)
        s = r;
    else {
        let d = t.length - 1;
        if (!n && a.startsWith("..")) {
            let c = a.split("/");
            for (; c[0] === ".."; )
                c.shift(),
                d -= 1;
            o.pathname = c.join("/")
        }
        s = d >= 0 ? t[d] : "/"
    }
    let l = qD(o, s)
      , u = a && a !== "/" && a.endsWith("/")
      , f = (i || a === ".") && r.endsWith("/");
    return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"),
    l
}
const Wn = e => e.join("/").replace(/\/\/+/g, "/")
  , ZD = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , eT = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , tT = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function rT(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Y0 = ["post", "put", "patch", "delete"];
new Set(Y0);
const nT = ["get", ...Y0];
new Set(nT);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ca() {
    return ca = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ca.apply(this, arguments)
}
const hp = x.createContext(null)
  , oT = x.createContext(null)
  , ru = x.createContext(null)
  , nu = x.createContext(null)
  , ai = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , X0 = x.createContext(null);
function ou() {
    return x.useContext(nu) != null
}
function gp() {
    return ou() || Fe(!1),
    x.useContext(nu).location
}
function J0(e) {
    x.useContext(ru).static || x.useLayoutEffect(e)
}
function Da() {
    let {isDataRoute: e} = x.useContext(ai);
    return e ? gT() : iT()
}
function iT() {
    ou() || Fe(!1);
    let e = x.useContext(hp)
      , {basename: t, future: r, navigator: n} = x.useContext(ru)
      , {matches: o} = x.useContext(ai)
      , {pathname: i} = gp()
      , a = JSON.stringify(XD(o, r.v7_relativeSplatPath))
      , s = x.useRef(!1);
    return J0( () => {
        s.current = !0
    }
    ),
    x.useCallback(function(u, f) {
        if (f === void 0 && (f = {}),
        !s.current)
            return;
        if (typeof u == "number") {
            n.go(u);
            return
        }
        let d = JD(u, JSON.parse(a), i, f.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Wn([t, d.pathname])),
        (f.replace ? n.replace : n.push)(d, f.state, f)
    }, [t, n, a, i, e])
}
function aT(e, t) {
    return sT(e, t)
}
function sT(e, t, r, n) {
    ou() || Fe(!1);
    let {navigator: o} = x.useContext(ru)
      , {matches: i} = x.useContext(ai)
      , a = i[i.length - 1]
      , s = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = gp(), f;
    if (t) {
        var d;
        let w = typeof t == "string" ? ii(t) : t;
        l === "/" || (d = w.pathname) != null && d.startsWith(l) || Fe(!1),
        f = w
    } else
        f = u;
    let c = f.pathname || "/"
      , p = c;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + c.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let g = jD(e, {
        pathname: p
    })
      , h = fT(g && g.map(w => Object.assign({}, w, {
        params: Object.assign({}, s, w.params),
        pathname: Wn([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Wn([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, r, n);
    return t && h ? x.createElement(nu.Provider, {
        value: {
            location: ca({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, f),
            navigationType: en.Pop
        }
    }, h) : h
}
function lT() {
    let e = hT()
      , t = rT(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , r = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), r ? x.createElement("pre", {
        style: o
    }, r) : null, null)
}
const uT = x.createElement(lT, null);
class cT extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation
        }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(ai.Provider, {
            value: this.props.routeContext
        }, x.createElement(X0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function dT(e) {
    let {routeContext: t, match: r, children: n} = e
      , o = x.useContext(hp);
    return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    x.createElement(ai.Provider, {
        value: t
    }, n)
}
function fT(e, t, r, n) {
    var o;
    if (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null) {
        var i;
        if (!r)
            return null;
        if (r.errors)
            e = r.matches;
        else if ((i = n) != null && i.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
            e = r.matches;
        else
            return null
    }
    let a = e
      , s = (o = r) == null ? void 0 : o.errors;
    if (s != null) {
        let f = a.findIndex(d => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0);
        f >= 0 || Fe(!1),
        a = a.slice(0, Math.min(a.length, f + 1))
    }
    let l = !1
      , u = -1;
    if (r && n && n.v7_partialHydration)
        for (let f = 0; f < a.length; f++) {
            let d = a[f];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f),
            d.route.id) {
                let {loaderData: c, errors: p} = r
                  , g = d.route.loader && c[d.route.id] === void 0 && (!p || p[d.route.id] === void 0);
                if (d.route.lazy || g) {
                    l = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight( (f, d, c) => {
        let p, g = !1, h = null, w = null;
        r && (p = s && d.route.id ? s[d.route.id] : void 0,
        h = d.route.errorElement || uT,
        l && (u < 0 && c === 0 ? (g = !0,
        w = null) : u === c && (g = !0,
        w = d.route.hydrateFallbackElement || null)));
        let y = t.concat(a.slice(0, c + 1))
          , v = () => {
            let b;
            return p ? b = h : g ? b = w : d.route.Component ? b = x.createElement(d.route.Component, null) : d.route.element ? b = d.route.element : b = f,
            x.createElement(dT, {
                match: d,
                routeContext: {
                    outlet: f,
                    matches: y,
                    isDataRoute: r != null
                },
                children: b
            })
        }
        ;
        return r && (d.route.ErrorBoundary || d.route.errorElement || c === 0) ? x.createElement(cT, {
            location: r.location,
            revalidation: r.revalidation,
            component: h,
            error: p,
            children: v(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : v()
    }
    , null)
}
var Z0 = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Z0 || {})
  , hl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(hl || {});
function pT(e) {
    let t = x.useContext(hp);
    return t || Fe(!1),
    t
}
function mT(e) {
    let t = x.useContext(oT);
    return t || Fe(!1),
    t
}
function vT(e) {
    let t = x.useContext(ai);
    return t || Fe(!1),
    t
}
function ew(e) {
    let t = vT()
      , r = t.matches[t.matches.length - 1];
    return r.route.id || Fe(!1),
    r.route.id
}
function hT() {
    var e;
    let t = x.useContext(X0)
      , r = mT(hl.UseRouteError)
      , n = ew(hl.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
function gT() {
    let {router: e} = pT(Z0.UseNavigateStable)
      , t = ew(hl.UseNavigateStable)
      , r = x.useRef(!1);
    return J0( () => {
        r.current = !0
    }
    ),
    x.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        r.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, ca({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function kn(e) {
    Fe(!1)
}
function yT(e) {
    let {basename: t="/", children: r=null, location: n, navigationType: o=en.Pop, navigator: i, static: a=!1, future: s} = e;
    ou() && Fe(!1);
    let l = t.replace(/^\/*/, "/")
      , u = x.useMemo( () => ({
        basename: l,
        navigator: i,
        static: a,
        future: ca({
            v7_relativeSplatPath: !1
        }, s)
    }), [l, s, i, a]);
    typeof n == "string" && (n = ii(n));
    let {pathname: f="/", search: d="", hash: c="", state: p=null, key: g="default"} = n
      , h = x.useMemo( () => {
        let w = Q0(f, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: c,
                state: p,
                key: g
            },
            navigationType: o
        }
    }
    , [l, f, d, c, p, g, o]);
    return h == null ? null : x.createElement(ru.Provider, {
        value: u
    }, x.createElement(nu.Provider, {
        children: r,
        value: h
    }))
}
function xT(e) {
    let {children: t, location: r} = e;
    return aT(Fd(t), r)
}
new Promise( () => {}
);
function Fd(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return x.Children.forEach(e, (n, o) => {
        if (!x.isValidElement(n))
            return;
        let i = [...t, o];
        if (n.type === x.Fragment) {
            r.push.apply(r, Fd(n.props.children, i));
            return
        }
        n.type !== kn && Fe(!1),
        !n.props.index || !n.props.children || Fe(!1);
        let a = {
            id: n.props.id || i.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy
        };
        n.props.children && (a.children = Fd(n.props.children, i)),
        r.push(a)
    }
    ),
    r
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const wT = "6";
try {
    window.__reactRouterVersion = wT
} catch {}
const bT = "startTransition"
  , Qv = vg[bT];
function ST(e) {
    let {basename: t, children: r, future: n, window: o} = e
      , i = x.useRef();
    i.current == null && (i.current = kD({
        window: o,
        v5Compat: !0
    }));
    let a = i.current
      , [s,l] = x.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = n || {}
      , f = x.useCallback(d => {
        u && Qv ? Qv( () => l(d)) : l(d)
    }
    , [l, u]);
    return x.useLayoutEffect( () => a.listen(f), [a, f]),
    x.createElement(yT, {
        basename: t,
        children: r,
        location: s.location,
        navigationType: s.action,
        navigator: a,
        future: n
    })
}
var Yv;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Yv || (Yv = {}));
var Xv;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Xv || (Xv = {}));
const CT = ep("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-200"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , de = x.forwardRef( ({className: e, variant: t, size: r, asChild: n=!1, ...o}, i) => {
    const a = n ? qn : "button";
    return m.jsx(a, {
        className: pe(CT({
            variant: t,
            size: r,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
de.displayName = "Button";
const Ke = x.forwardRef( ({className: e, ...t}, r) => m.jsx("div", {
    ref: r,
    className: pe("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
Ke.displayName = "Card";
const ct = x.forwardRef( ({className: e, ...t}, r) => m.jsx("div", {
    ref: r,
    className: pe("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
ct.displayName = "CardHeader";
const dt = x.forwardRef( ({className: e, ...t}, r) => m.jsx("h3", {
    ref: r,
    className: pe("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
dt.displayName = "CardTitle";
const ET = x.forwardRef( ({className: e, ...t}, r) => m.jsx("p", {
    ref: r,
    className: pe("text-sm text-muted-foreground", e),
    ...t
}));
ET.displayName = "CardDescription";
const qe = x.forwardRef( ({className: e, ...t}, r) => m.jsx("div", {
    ref: r,
    className: pe("p-6 pt-0", e),
    ...t
}));
qe.displayName = "CardContent";
const NT = x.forwardRef( ({className: e, ...t}, r) => m.jsx("div", {
    ref: r,
    className: pe("flex items-center p-6 pt-0", e),
    ...t
}));
NT.displayName = "CardFooter";
const PT = () => {
    const e = Da()
      , t = [{
        icon: Xx,
        title: "Team Management",
        description: "Stel je teams in en wijs spelers toe aan aanvals- en verdedigingsvakken"
    }, {
        icon: rp,
        title: "Live Statistieken",
        description: "Houd real-time doelpunten en pogingen bij per speler"
    }, {
        icon: tp,
        title: "Wisselbeheer",
        description: "Wissel spelers tussen vakken tijdens de wedstrijd"
    }, {
        icon: np,
        title: "Gedetailleerde Analyse",
        description: "Bekijk uitgebreide statistieken en prestatie-overzichten"
    }];
    return m.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10",
        children: [m.jsxs("div", {
            className: "relative overflow-hidden",
            children: [m.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50"
            }), m.jsx("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16",
                children: m.jsxs("div", {
                    className: "text-center",
                    children: [m.jsxs("h1", {
                        className: "text-5xl lg:text-6xl font-bold mb-6",
                        children: [m.jsx("span", {
                            className: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
                            children: "Korfbal"
                        }), m.jsx("br", {}), m.jsx("span", {
                            className: "text-foreground",
                            children: "Statistieken"
                        })]
                    }), m.jsx("p", {
                        className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
                        children: "De professionele manier om korfbal wedstrijden te analyseren. Houd statistieken bij, beheer wissels en analyseer prestaties in real-time."
                    }), m.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [m.jsxs(de, {
                            onClick: () => e("/setup"),
                            size: "lg",
                            variant: "hero",
                            className: "px-8 py-6 text-lg",
                            children: [m.jsx(Td, {
                                className: "h-6 w-6 mr-2"
                            }), "Nieuwe Wedstrijd Starten"]
                        }), m.jsxs(de, {
                            onClick: () => e("/statistics"),
                            size: "lg",
                            variant: "outline",
                            className: "px-8 py-6 text-lg",
                            children: [m.jsx(Qx, {
                                className: "h-6 w-6 mr-2"
                            }), "Statistieken Bekijken"]
                        })]
                    })]
                })
            })]
        }), m.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [m.jsxs("div", {
                className: "text-center mb-12",
                children: [m.jsxs("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: ["Alles wat je nodig hebt voor", m.jsx("span", {
                        className: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
                        children: " professionele analyse"
                    })]
                }), m.jsx("p", {
                    className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                    children: "Van wedstrijd setup tot gedetailleerde statistieken - onze app helpt je elke aspecten van je korfbal wedstrijd te beheren."
                })]
            }), m.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: t.map( (r, n) => m.jsxs(Ke, {
                    className: "shadow-soft hover:shadow-elegant transition-shadow duration-300",
                    children: [m.jsxs(ct, {
                        className: "text-center",
                        children: [m.jsx("div", {
                            className: "mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center",
                            children: m.jsx(r.icon, {
                                className: "h-6 w-6 text-white"
                            })
                        }), m.jsx(dt, {
                            className: "text-lg",
                            children: r.title
                        })]
                    }), m.jsx(qe, {
                        className: "text-center",
                        children: m.jsx("p", {
                            className: "text-muted-foreground",
                            children: r.description
                        })
                    })]
                }, n))
            })]
        }), m.jsx("div", {
            className: "bg-muted/30 py-16",
            children: m.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [m.jsxs("div", {
                    className: "text-center mb-12",
                    children: [m.jsx("h2", {
                        className: "text-3xl font-bold mb-4",
                        children: "Hoe het werkt"
                    }), m.jsx("p", {
                        className: "text-muted-foreground text-lg",
                        children: "In drie eenvoudige stappen van setup naar analyse"
                    })]
                }), m.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [m.jsxs("div", {
                        className: "text-center",
                        children: [m.jsx("div", {
                            className: "w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl",
                            children: "1"
                        }), m.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "Setup"
                        }), m.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Voer team namen in, voeg spelers toe en wijs ze toe aan aanvals- en verdedigingsvakken."
                        })]
                    }), m.jsxs("div", {
                        className: "text-center",
                        children: [m.jsx("div", {
                            className: "w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl",
                            children: "2"
                        }), m.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "Spelen"
                        }), m.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Houd live statistieken bij tijdens de wedstrijd. Registreer doelpunten, pogingen en wissels."
                        })]
                    }), m.jsxs("div", {
                        className: "text-center",
                        children: [m.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl",
                            children: "3"
                        }), m.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "Analyseren"
                        }), m.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Bekijk gedetailleerde statistieken, prestatie-overzichten en identificeer verbeterpunten."
                        })]
                    })]
                })]
            })
        }), m.jsx("div", {
            className: "py-16",
            children: m.jsxs("div", {
                className: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",
                children: [m.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Klaar om je eerste wedstrijd te analyseren?"
                }), m.jsx("p", {
                    className: "text-muted-foreground text-lg mb-8",
                    children: "Begin vandaag nog met professionele korfbal statistieken"
                }), m.jsxs(de, {
                    onClick: () => e("/setup"),
                    size: "lg",
                    variant: "hero",
                    className: "px-12 py-6 text-lg",
                    children: [m.jsx(Td, {
                        className: "h-6 w-6 mr-2"
                    }), "Start Nu"]
                })]
            })
        })]
    })
}
  , Ms = x.forwardRef( ({className: e, type: t, ...r}, n) => m.jsx("input", {
    type: t,
    className: pe("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: n,
    ...r
}));
Ms.displayName = "Input";
const DT = ep("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function tn({className: e, variant: t, ...r}) {
    return m.jsx("div", {
        className: pe(DT({
            variant: t
        }), e),
        ...r
    })
}
function Jv(e, [t,r]) {
    return Math.min(r, Math.max(t, e))
}
var TT = x.createContext(void 0);
function IT(e) {
    const t = x.useContext(TT);
    return e || t || "ltr"
}
var dc = 0;
function tw() {
    x.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Zv()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Zv()),
        dc++,
        () => {
            dc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            dc--
        }
    }
    , [])
}
function Zv() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var fc = "focusScope.autoFocusOnMount"
  , pc = "focusScope.autoFocusOnUnmount"
  , eh = {
    bubbles: !1,
    cancelable: !0
}
  , RT = "FocusScope"
  , yp = x.forwardRef( (e, t) => {
    const {loop: r=!1, trapped: n=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...a} = e
      , [s,l] = x.useState(null)
      , u = At(o)
      , f = At(i)
      , d = x.useRef(null)
      , c = Ee(t, h => l(h))
      , p = x.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    x.useEffect( () => {
        if (n) {
            let h = function(b) {
                if (p.paused || !s)
                    return;
                const S = b.target;
                s.contains(S) ? d.current = S : Wr(d.current, {
                    select: !0
                })
            }
              , w = function(b) {
                if (p.paused || !s)
                    return;
                const S = b.relatedTarget;
                S !== null && (s.contains(S) || Wr(d.current, {
                    select: !0
                }))
            }
              , y = function(b) {
                if (document.activeElement === document.body)
                    for (const C of b)
                        C.removedNodes.length > 0 && Wr(s)
            };
            document.addEventListener("focusin", h),
            document.addEventListener("focusout", w);
            const v = new MutationObserver(y);
            return s && v.observe(s, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", h),
                document.removeEventListener("focusout", w),
                v.disconnect()
            }
        }
    }
    , [n, s, p.paused]),
    x.useEffect( () => {
        if (s) {
            rh.add(p);
            const h = document.activeElement;
            if (!s.contains(h)) {
                const y = new CustomEvent(fc,eh);
                s.addEventListener(fc, u),
                s.dispatchEvent(y),
                y.defaultPrevented || (kT(LT(rw(s)), {
                    select: !0
                }),
                document.activeElement === h && Wr(s))
            }
            return () => {
                s.removeEventListener(fc, u),
                setTimeout( () => {
                    const y = new CustomEvent(pc,eh);
                    s.addEventListener(pc, f),
                    s.dispatchEvent(y),
                    y.defaultPrevented || Wr(h ?? document.body, {
                        select: !0
                    }),
                    s.removeEventListener(pc, f),
                    rh.remove(p)
                }
                , 0)
            }
        }
    }
    , [s, u, f, p]);
    const g = x.useCallback(h => {
        if (!r && !n || p.paused)
            return;
        const w = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey
          , y = document.activeElement;
        if (w && y) {
            const v = h.currentTarget
              , [b,S] = AT(v);
            b && S ? !h.shiftKey && y === S ? (h.preventDefault(),
            r && Wr(b, {
                select: !0
            })) : h.shiftKey && y === b && (h.preventDefault(),
            r && Wr(S, {
                select: !0
            })) : y === v && h.preventDefault()
        }
    }
    , [r, n, p.paused]);
    return m.jsx(ue.div, {
        tabIndex: -1,
        ...a,
        ref: c,
        onKeyDown: g
    })
}
);
yp.displayName = RT;
function kT(e, {select: t=!1}={}) {
    const r = document.activeElement;
    for (const n of e)
        if (Wr(n, {
            select: t
        }),
        document.activeElement !== r)
            return
}
function AT(e) {
    const t = rw(e)
      , r = th(t, e)
      , n = th(t.reverse(), e);
    return [r, n]
}
function rw(e) {
    const t = []
      , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: n => {
            const o = n.tagName === "INPUT" && n.type === "hidden";
            return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; r.nextNode(); )
        t.push(r.currentNode);
    return t
}
function th(e, t) {
    for (const r of e)
        if (!OT(r, {
            upTo: t
        }))
            return r
}
function OT(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function jT(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Wr(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const r = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== r && jT(e) && t && e.select()
    }
}
var rh = MT();
function MT() {
    let e = [];
    return {
        add(t) {
            const r = e[0];
            t !== r && (r == null || r.pause()),
            e = nh(e, t),
            e.unshift(t)
        },
        remove(t) {
            var r;
            e = nh(e, t),
            (r = e[0]) == null || r.resume()
        }
    }
}
function nh(e, t) {
    const r = [...e]
      , n = r.indexOf(t);
    return n !== -1 && r.splice(n, 1),
    r
}
function LT(e) {
    return e.filter(t => t.tagName !== "A")
}
function BT(e) {
    const t = x.useRef({
        value: e,
        previous: e
    });
    return x.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
    t.current.value = e),
    t.current.previous), [e])
}
var FT = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , oo = new WeakMap
  , ds = new WeakMap
  , fs = {}
  , mc = 0
  , nw = function(e) {
    return e && (e.host || nw(e.parentNode))
}
  , _T = function(e, t) {
    return t.map(function(r) {
        if (e.contains(r))
            return r;
        var n = nw(r);
        return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(r) {
        return !!r
    })
}
  , $T = function(e, t, r, n) {
    var o = _T(t, Array.isArray(e) ? e : [e]);
    fs[r] || (fs[r] = new WeakMap);
    var i = fs[r]
      , a = []
      , s = new Set
      , l = new Set(o)
      , u = function(d) {
        !d || s.has(d) || (s.add(d),
        u(d.parentNode))
    };
    o.forEach(u);
    var f = function(d) {
        !d || l.has(d) || Array.prototype.forEach.call(d.children, function(c) {
            if (s.has(c))
                f(c);
            else
                try {
                    var p = c.getAttribute(n)
                      , g = p !== null && p !== "false"
                      , h = (oo.get(c) || 0) + 1
                      , w = (i.get(c) || 0) + 1;
                    oo.set(c, h),
                    i.set(c, w),
                    a.push(c),
                    h === 1 && g && ds.set(c, !0),
                    w === 1 && c.setAttribute(r, "true"),
                    g || c.setAttribute(n, "true")
                } catch (y) {
                    console.error("aria-hidden: cannot operate on ", c, y)
                }
        })
    };
    return f(t),
    s.clear(),
    mc++,
    function() {
        a.forEach(function(d) {
            var c = oo.get(d) - 1
              , p = i.get(d) - 1;
            oo.set(d, c),
            i.set(d, p),
            c || (ds.has(d) || d.removeAttribute(n),
            ds.delete(d)),
            p || d.removeAttribute(r)
        }),
        mc--,
        mc || (oo = new WeakMap,
        oo = new WeakMap,
        ds = new WeakMap,
        fs = {})
    }
}
  , ow = function(e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var n = Array.from(Array.isArray(e) ? e : [e])
      , o = FT(e);
    return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))),
    $T(n, o, r, "aria-hidden")) : function() {
        return null
    }
}
  , yr = function() {
    return yr = Object.assign || function(t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }
    ,
    yr.apply(this, arguments)
};
function iw(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
}
function zT(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, o = t.length, i; n < o; n++)
            (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
            i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var Ls = "right-scroll-bar-position"
  , Bs = "width-before-scroll-bar"
  , WT = "with-scroll-bars-hidden"
  , UT = "--removed-body-scroll-bar-size";
function vc(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function VT(e, t) {
    var r = x.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return r.value
                },
                set current(n) {
                    var o = r.value;
                    o !== n && (r.value = n,
                    r.callback(n, o))
                }
            }
        }
    })[0];
    return r.callback = t,
    r.facade
}
var HT = typeof window < "u" ? x.useLayoutEffect : x.useEffect
  , oh = new WeakMap;
function GT(e, t) {
    var r = VT(null, function(n) {
        return e.forEach(function(o) {
            return vc(o, n)
        })
    });
    return HT(function() {
        var n = oh.get(r);
        if (n) {
            var o = new Set(n)
              , i = new Set(e)
              , a = r.current;
            o.forEach(function(s) {
                i.has(s) || vc(s, null)
            }),
            i.forEach(function(s) {
                o.has(s) || vc(s, a)
            })
        }
        oh.set(r, e)
    }, [e]),
    r
}
function KT(e) {
    return e
}
function qT(e, t) {
    t === void 0 && (t = KT);
    var r = []
      , n = !1
      , o = {
        read: function() {
            if (n)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
        },
        useMedium: function(i) {
            var a = t(i, n);
            return r.push(a),
            function() {
                r = r.filter(function(s) {
                    return s !== a
                })
            }
        },
        assignSyncMedium: function(i) {
            for (n = !0; r.length; ) {
                var a = r;
                r = [],
                a.forEach(i)
            }
            r = {
                push: function(s) {
                    return i(s)
                },
                filter: function() {
                    return r
                }
            }
        },
        assignMedium: function(i) {
            n = !0;
            var a = [];
            if (r.length) {
                var s = r;
                r = [],
                s.forEach(i),
                a = r
            }
            var l = function() {
                var f = a;
                a = [],
                f.forEach(i)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            r = {
                push: function(f) {
                    a.push(f),
                    u()
                },
                filter: function(f) {
                    return a = a.filter(f),
                    r
                }
            }
        }
    };
    return o
}
function QT(e) {
    e === void 0 && (e = {});
    var t = qT(null);
    return t.options = yr({
        async: !0,
        ssr: !1
    }, e),
    t
}
var aw = function(e) {
    var t = e.sideCar
      , r = iw(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var n = t.read();
    if (!n)
        throw new Error("Sidecar medium not found");
    return x.createElement(n, yr({}, r))
};
aw.isSideCarExport = !0;
function YT(e, t) {
    return e.useMedium(t),
    aw
}
var sw = QT()
  , hc = function() {}
  , iu = x.forwardRef(function(e, t) {
    var r = x.useRef(null)
      , n = x.useState({
        onScrollCapture: hc,
        onWheelCapture: hc,
        onTouchMoveCapture: hc
    })
      , o = n[0]
      , i = n[1]
      , a = e.forwardProps
      , s = e.children
      , l = e.className
      , u = e.removeScrollBar
      , f = e.enabled
      , d = e.shards
      , c = e.sideCar
      , p = e.noIsolation
      , g = e.inert
      , h = e.allowPinchZoom
      , w = e.as
      , y = w === void 0 ? "div" : w
      , v = e.gapMode
      , b = iw(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , S = c
      , C = GT([r, t])
      , E = yr(yr({}, b), o);
    return x.createElement(x.Fragment, null, f && x.createElement(S, {
        sideCar: sw,
        removeScrollBar: u,
        shards: d,
        noIsolation: p,
        inert: g,
        setCallbacks: i,
        allowPinchZoom: !!h,
        lockRef: r,
        gapMode: v
    }), a ? x.cloneElement(x.Children.only(s), yr(yr({}, E), {
        ref: C
    })) : x.createElement(y, yr({}, E, {
        className: l,
        ref: C
    }), s))
});
iu.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
iu.classNames = {
    fullWidth: Bs,
    zeroRight: Ls
};
var XT = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function JT() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = XT();
    return t && e.setAttribute("nonce", t),
    e
}
function ZT(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function eI(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var tI = function() {
    var e = 0
      , t = null;
    return {
        add: function(r) {
            e == 0 && (t = JT()) && (ZT(t, r),
            eI(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , rI = function() {
    var e = tI();
    return function(t, r) {
        x.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && r])
    }
}
  , lw = function() {
    var e = rI()
      , t = function(r) {
        var n = r.styles
          , o = r.dynamic;
        return e(n, o),
        null
    };
    return t
}
  , nI = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , gc = function(e) {
    return parseInt(e || "", 10) || 0
}
  , oI = function(e) {
    var t = window.getComputedStyle(document.body)
      , r = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , n = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [gc(r), gc(n), gc(o)]
}
  , iI = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return nI;
    var t = oI(e)
      , r = document.documentElement.clientWidth
      , n = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, n - r + t[2] - t[0])
    }
}
  , aI = lw()
  , Ro = "data-scroll-locked"
  , sI = function(e, t, r, n) {
    var o = e.left
      , i = e.top
      , a = e.right
      , s = e.gap;
    return r === void 0 && (r = "margin"),
    `
  .`.concat(WT, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body[`).concat(Ro, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(n, ";"), r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `), r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ls, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Bs, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Ls, " .").concat(Ls, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Bs, " .").concat(Bs, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Ro, `] {
    `).concat(UT, ": ").concat(s, `px;
  }
`)
}
  , ih = function() {
    var e = parseInt(document.body.getAttribute(Ro) || "0", 10);
    return isFinite(e) ? e : 0
}
  , lI = function() {
    x.useEffect(function() {
        return document.body.setAttribute(Ro, (ih() + 1).toString()),
        function() {
            var e = ih() - 1;
            e <= 0 ? document.body.removeAttribute(Ro) : document.body.setAttribute(Ro, e.toString())
        }
    }, [])
}
  , uI = function(e) {
    var t = e.noRelative
      , r = e.noImportant
      , n = e.gapMode
      , o = n === void 0 ? "margin" : n;
    lI();
    var i = x.useMemo(function() {
        return iI(o)
    }, [o]);
    return x.createElement(aI, {
        styles: sI(i, !t, o, r ? "" : "!important")
    })
}
  , _d = !1;
if (typeof window < "u")
    try {
        var ps = Object.defineProperty({}, "passive", {
            get: function() {
                return _d = !0,
                !0
            }
        });
        window.addEventListener("test", ps, ps),
        window.removeEventListener("test", ps, ps)
    } catch {
        _d = !1
    }
var io = _d ? {
    passive: !1
} : !1
  , cI = function(e) {
    return e.tagName === "TEXTAREA"
}
  , uw = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var r = window.getComputedStyle(e);
    return r[t] !== "hidden" && !(r.overflowY === r.overflowX && !cI(e) && r[t] === "visible")
}
  , dI = function(e) {
    return uw(e, "overflowY")
}
  , fI = function(e) {
    return uw(e, "overflowX")
}
  , ah = function(e, t) {
    var r = t.ownerDocument
      , n = t;
    do {
        typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
        var o = cw(e, n);
        if (o) {
            var i = dw(e, n)
              , a = i[1]
              , s = i[2];
            if (a > s)
                return !0
        }
        n = n.parentNode
    } while (n && n !== r.body);
    return !1
}
  , pI = function(e) {
    var t = e.scrollTop
      , r = e.scrollHeight
      , n = e.clientHeight;
    return [t, r, n]
}
  , mI = function(e) {
    var t = e.scrollLeft
      , r = e.scrollWidth
      , n = e.clientWidth;
    return [t, r, n]
}
  , cw = function(e, t) {
    return e === "v" ? dI(t) : fI(t)
}
  , dw = function(e, t) {
    return e === "v" ? pI(t) : mI(t)
}
  , vI = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , hI = function(e, t, r, n, o) {
    var i = vI(e, window.getComputedStyle(t).direction)
      , a = i * n
      , s = r.target
      , l = t.contains(s)
      , u = !1
      , f = a > 0
      , d = 0
      , c = 0;
    do {
        var p = dw(e, s)
          , g = p[0]
          , h = p[1]
          , w = p[2]
          , y = h - w - i * g;
        (g || y) && cw(e, s) && (d += y,
        c += g),
        s instanceof ShadowRoot ? s = s.host : s = s.parentNode
    } while (!l && s !== document.body || l && (t.contains(s) || t === s));
    return (f && (Math.abs(d) < 1 || !o) || !f && (Math.abs(c) < 1 || !o)) && (u = !0),
    u
}
  , ms = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , sh = function(e) {
    return [e.deltaX, e.deltaY]
}
  , lh = function(e) {
    return e && "current"in e ? e.current : e
}
  , gI = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , yI = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , xI = 0
  , ao = [];
function wI(e) {
    var t = x.useRef([])
      , r = x.useRef([0, 0])
      , n = x.useRef()
      , o = x.useState(xI++)[0]
      , i = x.useState(lw)[0]
      , a = x.useRef(e);
    x.useEffect(function() {
        a.current = e
    }, [e]),
    x.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var h = zT([e.lockRef.current], (e.shards || []).map(lh), !0).filter(Boolean);
            return h.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                h.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = x.useCallback(function(h, w) {
        if ("touches"in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
            return !a.current.allowPinchZoom;
        var y = ms(h), v = r.current, b = "deltaX"in h ? h.deltaX : v[0] - y[0], S = "deltaY"in h ? h.deltaY : v[1] - y[1], C, E = h.target, N = Math.abs(b) > Math.abs(S) ? "h" : "v";
        if ("touches"in h && N === "h" && E.type === "range")
            return !1;
        var D = ah(N, E);
        if (!D)
            return !0;
        if (D ? C = N : (C = N === "v" ? "h" : "v",
        D = ah(N, E)),
        !D)
            return !1;
        if (!n.current && "changedTouches"in h && (b || S) && (n.current = C),
        !C)
            return !0;
        var I = n.current || C;
        return hI(I, w, h, I === "h" ? b : S, !0)
    }, [])
      , l = x.useCallback(function(h) {
        var w = h;
        if (!(!ao.length || ao[ao.length - 1] !== i)) {
            var y = "deltaY"in w ? sh(w) : ms(w)
              , v = t.current.filter(function(C) {
                return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && gI(C.delta, y)
            })[0];
            if (v && v.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!v) {
                var b = (a.current.shards || []).map(lh).filter(Boolean).filter(function(C) {
                    return C.contains(w.target)
                })
                  , S = b.length > 0 ? s(w, b[0]) : !a.current.noIsolation;
                S && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = x.useCallback(function(h, w, y, v) {
        var b = {
            name: h,
            delta: w,
            target: y,
            should: v,
            shadowParent: bI(y)
        };
        t.current.push(b),
        setTimeout(function() {
            t.current = t.current.filter(function(S) {
                return S !== b
            })
        }, 1)
    }, [])
      , f = x.useCallback(function(h) {
        r.current = ms(h),
        n.current = void 0
    }, [])
      , d = x.useCallback(function(h) {
        u(h.type, sh(h), h.target, s(h, e.lockRef.current))
    }, [])
      , c = x.useCallback(function(h) {
        u(h.type, ms(h), h.target, s(h, e.lockRef.current))
    }, []);
    x.useEffect(function() {
        return ao.push(i),
        e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: c
        }),
        document.addEventListener("wheel", l, io),
        document.addEventListener("touchmove", l, io),
        document.addEventListener("touchstart", f, io),
        function() {
            ao = ao.filter(function(h) {
                return h !== i
            }),
            document.removeEventListener("wheel", l, io),
            document.removeEventListener("touchmove", l, io),
            document.removeEventListener("touchstart", f, io)
        }
    }, []);
    var p = e.removeScrollBar
      , g = e.inert;
    return x.createElement(x.Fragment, null, g ? x.createElement(i, {
        styles: yI(o)
    }) : null, p ? x.createElement(uI, {
        gapMode: e.gapMode
    }) : null)
}
function bI(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const SI = YT(sw, wI);
var xp = x.forwardRef(function(e, t) {
    return x.createElement(iu, yr({}, e, {
        ref: t,
        sideCar: SI
    }))
});
xp.classNames = iu.classNames;
var CI = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , EI = [" ", "Enter"]
  , Ta = "Select"
  , [au,su,NI] = bx(Ta)
  , [si,iL] = Vl(Ta, [NI, Xl])
  , lu = Xl()
  , [PI,Nn] = si(Ta)
  , [DI,TI] = si(Ta)
  , fw = e => {
    const {__scopeSelect: t, children: r, open: n, defaultOpen: o, onOpenChange: i, value: a, defaultValue: s, onValueChange: l, dir: u, name: f, autoComplete: d, disabled: c, required: p, form: g} = e
      , h = lu(t)
      , [w,y] = x.useState(null)
      , [v,b] = x.useState(null)
      , [S,C] = x.useState(!1)
      , E = IT(u)
      , [N=!1,D] = cl({
        prop: n,
        defaultProp: o,
        onChange: i
    })
      , [I,k] = cl({
        prop: a,
        defaultProp: s,
        onChange: l
    })
      , M = x.useRef(null)
      , B = w ? g || !!w.closest("form") : !0
      , [U,A] = x.useState(new Set)
      , V = Array.from(U).map(_ => _.props.value).join(";");
    return m.jsx(W2, {
        ...h,
        children: m.jsxs(PI, {
            required: p,
            scope: t,
            trigger: w,
            onTriggerChange: y,
            valueNode: v,
            onValueNodeChange: b,
            valueNodeHasChildren: S,
            onValueNodeHasChildrenChange: C,
            contentId: To(),
            value: I,
            onValueChange: k,
            open: N,
            onOpenChange: D,
            dir: E,
            triggerPointerDownPosRef: M,
            disabled: c,
            children: [m.jsx(au.Provider, {
                scope: t,
                children: m.jsx(DI, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: x.useCallback(_ => {
                        A(K => new Set(K).add(_))
                    }
                    , []),
                    onNativeOptionRemove: x.useCallback(_ => {
                        A(K => {
                            const P = new Set(K);
                            return P.delete(_),
                            P
                        }
                        )
                    }
                    , []),
                    children: r
                })
            }), B ? m.jsxs(Bw, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: f,
                autoComplete: d,
                value: I,
                onChange: _ => k(_.target.value),
                disabled: c,
                form: g,
                children: [I === void 0 ? m.jsx("option", {
                    value: ""
                }) : null, Array.from(U)]
            }, V) : null]
        })
    })
}
;
fw.displayName = Ta;
var pw = "SelectTrigger"
  , mw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, disabled: n=!1, ...o} = e
      , i = lu(r)
      , a = Nn(pw, r)
      , s = a.disabled || n
      , l = Ee(t, a.onTriggerChange)
      , u = su(r)
      , f = x.useRef("touch")
      , [d,c,p] = Fw(h => {
        const w = u().filter(b => !b.disabled)
          , y = w.find(b => b.value === a.value)
          , v = _w(w, h, y);
        v !== void 0 && a.onValueChange(v.value)
    }
    )
      , g = h => {
        s || (a.onOpenChange(!0),
        p()),
        h && (a.triggerPointerDownPosRef.current = {
            x: Math.round(h.pageX),
            y: Math.round(h.pageY)
        })
    }
    ;
    return m.jsx(D0, {
        asChild: !0,
        ...i,
        children: m.jsx(ue.button, {
            type: "button",
            role: "combobox",
            "aria-controls": a.contentId,
            "aria-expanded": a.open,
            "aria-required": a.required,
            "aria-autocomplete": "none",
            dir: a.dir,
            "data-state": a.open ? "open" : "closed",
            disabled: s,
            "data-disabled": s ? "" : void 0,
            "data-placeholder": Lw(a.value) ? "" : void 0,
            ...o,
            ref: l,
            onClick: J(o.onClick, h => {
                h.currentTarget.focus(),
                f.current !== "mouse" && g(h)
            }
            ),
            onPointerDown: J(o.onPointerDown, h => {
                f.current = h.pointerType;
                const w = h.target;
                w.hasPointerCapture(h.pointerId) && w.releasePointerCapture(h.pointerId),
                h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (g(h),
                h.preventDefault())
            }
            ),
            onKeyDown: J(o.onKeyDown, h => {
                const w = d.current !== "";
                !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && c(h.key),
                !(w && h.key === " ") && CI.includes(h.key) && (g(),
                h.preventDefault())
            }
            )
        })
    })
}
);
mw.displayName = pw;
var vw = "SelectValue"
  , hw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, className: n, style: o, children: i, placeholder: a="", ...s} = e
      , l = Nn(vw, r)
      , {onValueNodeHasChildrenChange: u} = l
      , f = i !== void 0
      , d = Ee(t, l.onValueNodeChange);
    return it( () => {
        u(f)
    }
    , [u, f]),
    m.jsx(ue.span, {
        ...s,
        ref: d,
        style: {
            pointerEvents: "none"
        },
        children: Lw(l.value) ? m.jsx(m.Fragment, {
            children: a
        }) : i
    })
}
);
hw.displayName = vw;
var II = "SelectIcon"
  , gw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, children: n, ...o} = e;
    return m.jsx(ue.span, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        children: n || "▼"
    })
}
);
gw.displayName = II;
var RI = "SelectPortal"
  , yw = e => m.jsx(Hl, {
    asChild: !0,
    ...e
});
yw.displayName = RI;
var Yn = "SelectContent"
  , xw = x.forwardRef( (e, t) => {
    const r = Nn(Yn, e.__scopeSelect)
      , [n,o] = x.useState();
    if (it( () => {
        o(new DocumentFragment)
    }
    , []),
    !r.open) {
        const i = n;
        return i ? En.createPortal(m.jsx(ww, {
            scope: e.__scopeSelect,
            children: m.jsx(au.Slot, {
                scope: e.__scopeSelect,
                children: m.jsx("div", {
                    children: e.children
                })
            })
        }), i) : null
    }
    return m.jsx(bw, {
        ...e,
        ref: t
    })
}
);
xw.displayName = Yn;
var Qt = 10
  , [ww,Pn] = si(Yn)
  , kI = "SelectContentImpl"
  , bw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, position: n="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: i, onPointerDownOutside: a, side: s, sideOffset: l, align: u, alignOffset: f, arrowPadding: d, collisionBoundary: c, collisionPadding: p, sticky: g, hideWhenDetached: h, avoidCollisions: w, ...y} = e
      , v = Nn(Yn, r)
      , [b,S] = x.useState(null)
      , [C,E] = x.useState(null)
      , N = Ee(t, H => S(H))
      , [D,I] = x.useState(null)
      , [k,M] = x.useState(null)
      , B = su(r)
      , [U,A] = x.useState(!1)
      , V = x.useRef(!1);
    x.useEffect( () => {
        if (b)
            return ow(b)
    }
    , [b]),
    tw();
    const _ = x.useCallback(H => {
        const [ne,...ge] = B().map(ie => ie.ref.current)
          , [te] = ge.slice(-1)
          , ae = document.activeElement;
        for (const ie of H)
            if (ie === ae || (ie == null || ie.scrollIntoView({
                block: "nearest"
            }),
            ie === ne && C && (C.scrollTop = 0),
            ie === te && C && (C.scrollTop = C.scrollHeight),
            ie == null || ie.focus(),
            document.activeElement !== ae))
                return
    }
    , [B, C])
      , K = x.useCallback( () => _([D, b]), [_, D, b]);
    x.useEffect( () => {
        U && K()
    }
    , [U, K]);
    const {onOpenChange: P, triggerPointerDownPosRef: O} = v;
    x.useEffect( () => {
        if (b) {
            let H = {
                x: 0,
                y: 0
            };
            const ne = te => {
                var ae, ie;
                H = {
                    x: Math.abs(Math.round(te.pageX) - (((ae = O.current) == null ? void 0 : ae.x) ?? 0)),
                    y: Math.abs(Math.round(te.pageY) - (((ie = O.current) == null ? void 0 : ie.y) ?? 0))
                }
            }
              , ge = te => {
                H.x <= 10 && H.y <= 10 ? te.preventDefault() : b.contains(te.target) || P(!1),
                document.removeEventListener("pointermove", ne),
                O.current = null
            }
            ;
            return O.current !== null && (document.addEventListener("pointermove", ne),
            document.addEventListener("pointerup", ge, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", ne),
                document.removeEventListener("pointerup", ge, {
                    capture: !0
                })
            }
        }
    }
    , [b, P, O]),
    x.useEffect( () => {
        const H = () => P(!1);
        return window.addEventListener("blur", H),
        window.addEventListener("resize", H),
        () => {
            window.removeEventListener("blur", H),
            window.removeEventListener("resize", H)
        }
    }
    , [P]);
    const [$,F] = Fw(H => {
        const ne = B().filter(ae => !ae.disabled)
          , ge = ne.find(ae => ae.ref.current === document.activeElement)
          , te = _w(ne, H, ge);
        te && setTimeout( () => te.ref.current.focus())
    }
    )
      , z = x.useCallback( (H, ne, ge) => {
        const te = !V.current && !ge;
        (v.value !== void 0 && v.value === ne || te) && (I(H),
        te && (V.current = !0))
    }
    , [v.value])
      , Q = x.useCallback( () => b == null ? void 0 : b.focus(), [b])
      , oe = x.useCallback( (H, ne, ge) => {
        const te = !V.current && !ge;
        (v.value !== void 0 && v.value === ne || te) && M(H)
    }
    , [v.value])
      , ve = n === "popper" ? $d : Sw
      , Z = ve === $d ? {
        side: s,
        sideOffset: l,
        align: u,
        alignOffset: f,
        arrowPadding: d,
        collisionBoundary: c,
        collisionPadding: p,
        sticky: g,
        hideWhenDetached: h,
        avoidCollisions: w
    } : {};
    return m.jsx(ww, {
        scope: r,
        content: b,
        viewport: C,
        onViewportChange: E,
        itemRefCallback: z,
        selectedItem: D,
        onItemLeave: Q,
        itemTextRefCallback: oe,
        focusSelectedItem: K,
        selectedItemText: k,
        position: n,
        isPositioned: U,
        searchRef: $,
        children: m.jsx(xp, {
            as: qn,
            allowPinchZoom: !0,
            children: m.jsx(yp, {
                asChild: !0,
                trapped: v.open,
                onMountAutoFocus: H => {
                    H.preventDefault()
                }
                ,
                onUnmountAutoFocus: J(o, H => {
                    var ne;
                    (ne = v.trigger) == null || ne.focus({
                        preventScroll: !0
                    }),
                    H.preventDefault()
                }
                ),
                children: m.jsx(Ea, {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    onFocusOutside: H => H.preventDefault(),
                    onDismiss: () => v.onOpenChange(!1),
                    children: m.jsx(ve, {
                        role: "listbox",
                        id: v.contentId,
                        "data-state": v.open ? "open" : "closed",
                        dir: v.dir,
                        onContextMenu: H => H.preventDefault(),
                        ...y,
                        ...Z,
                        onPlaced: () => A(!0),
                        ref: N,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...y.style
                        },
                        onKeyDown: J(y.onKeyDown, H => {
                            const ne = H.ctrlKey || H.altKey || H.metaKey;
                            if (H.key === "Tab" && H.preventDefault(),
                            !ne && H.key.length === 1 && F(H.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(H.key)) {
                                let te = B().filter(ae => !ae.disabled).map(ae => ae.ref.current);
                                if (["ArrowUp", "End"].includes(H.key) && (te = te.slice().reverse()),
                                ["ArrowUp", "ArrowDown"].includes(H.key)) {
                                    const ae = H.target
                                      , ie = te.indexOf(ae);
                                    te = te.slice(ie + 1)
                                }
                                setTimeout( () => _(te)),
                                H.preventDefault()
                            }
                        }
                        )
                    })
                })
            })
        })
    })
}
);
bw.displayName = kI;
var AI = "SelectItemAlignedPosition"
  , Sw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, onPlaced: n, ...o} = e
      , i = Nn(Yn, r)
      , a = Pn(Yn, r)
      , [s,l] = x.useState(null)
      , [u,f] = x.useState(null)
      , d = Ee(t, N => f(N))
      , c = su(r)
      , p = x.useRef(!1)
      , g = x.useRef(!0)
      , {viewport: h, selectedItem: w, selectedItemText: y, focusSelectedItem: v} = a
      , b = x.useCallback( () => {
        if (i.trigger && i.valueNode && s && u && h && w && y) {
            const N = i.trigger.getBoundingClientRect()
              , D = u.getBoundingClientRect()
              , I = i.valueNode.getBoundingClientRect()
              , k = y.getBoundingClientRect();
            if (i.dir !== "rtl") {
                const ae = k.left - D.left
                  , ie = I.left - ae
                  , Me = N.left - ie
                  , _e = N.width + Me
                  , Gt = Math.max(_e, D.width)
                  , Je = window.innerWidth - Qt
                  , Kt = Jv(ie, [Qt, Math.max(Qt, Je - Gt)]);
                s.style.minWidth = _e + "px",
                s.style.left = Kt + "px"
            } else {
                const ae = D.right - k.right
                  , ie = window.innerWidth - I.right - ae
                  , Me = window.innerWidth - N.right - ie
                  , _e = N.width + Me
                  , Gt = Math.max(_e, D.width)
                  , Je = window.innerWidth - Qt
                  , Kt = Jv(ie, [Qt, Math.max(Qt, Je - Gt)]);
                s.style.minWidth = _e + "px",
                s.style.right = Kt + "px"
            }
            const M = c()
              , B = window.innerHeight - Qt * 2
              , U = h.scrollHeight
              , A = window.getComputedStyle(u)
              , V = parseInt(A.borderTopWidth, 10)
              , _ = parseInt(A.paddingTop, 10)
              , K = parseInt(A.borderBottomWidth, 10)
              , P = parseInt(A.paddingBottom, 10)
              , O = V + _ + U + P + K
              , $ = Math.min(w.offsetHeight * 5, O)
              , F = window.getComputedStyle(h)
              , z = parseInt(F.paddingTop, 10)
              , Q = parseInt(F.paddingBottom, 10)
              , oe = N.top + N.height / 2 - Qt
              , ve = B - oe
              , Z = w.offsetHeight / 2
              , H = w.offsetTop + Z
              , ne = V + _ + H
              , ge = O - ne;
            if (ne <= oe) {
                const ae = M.length > 0 && w === M[M.length - 1].ref.current;
                s.style.bottom = "0px";
                const ie = u.clientHeight - h.offsetTop - h.offsetHeight
                  , Me = Math.max(ve, Z + (ae ? Q : 0) + ie + K)
                  , _e = ne + Me;
                s.style.height = _e + "px"
            } else {
                const ae = M.length > 0 && w === M[0].ref.current;
                s.style.top = "0px";
                const Me = Math.max(oe, V + h.offsetTop + (ae ? z : 0) + Z) + ge;
                s.style.height = Me + "px",
                h.scrollTop = ne - oe + h.offsetTop
            }
            s.style.margin = `${Qt}px 0`,
            s.style.minHeight = $ + "px",
            s.style.maxHeight = B + "px",
            n == null || n(),
            requestAnimationFrame( () => p.current = !0)
        }
    }
    , [c, i.trigger, i.valueNode, s, u, h, w, y, i.dir, n]);
    it( () => b(), [b]);
    const [S,C] = x.useState();
    it( () => {
        u && C(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const E = x.useCallback(N => {
        N && g.current === !0 && (b(),
        v == null || v(),
        g.current = !1)
    }
    , [b, v]);
    return m.jsx(jI, {
        scope: r,
        contentWrapper: s,
        shouldExpandOnScrollRef: p,
        onScrollButtonChange: E,
        children: m.jsx("div", {
            ref: l,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: S
            },
            children: m.jsx(ue.div, {
                ...o,
                ref: d,
                style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...o.style
                }
            })
        })
    })
}
);
Sw.displayName = AI;
var OI = "SelectPopperPosition"
  , $d = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, align: n="start", collisionPadding: o=Qt, ...i} = e
      , a = lu(r);
    return m.jsx(T0, {
        ...a,
        ...i,
        ref: t,
        align: n,
        collisionPadding: o,
        style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
$d.displayName = OI;
var [jI,wp] = si(Yn, {})
  , zd = "SelectViewport"
  , Cw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, nonce: n, ...o} = e
      , i = Pn(zd, r)
      , a = wp(zd, r)
      , s = Ee(t, i.onViewportChange)
      , l = x.useRef(0);
    return m.jsxs(m.Fragment, {
        children: [m.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
        }), m.jsx(au.Slot, {
            scope: r,
            children: m.jsx(ue.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...o,
                ref: s,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style
                },
                onScroll: J(o.onScroll, u => {
                    const f = u.currentTarget
                      , {contentWrapper: d, shouldExpandOnScrollRef: c} = a;
                    if (c != null && c.current && d) {
                        const p = Math.abs(l.current - f.scrollTop);
                        if (p > 0) {
                            const g = window.innerHeight - Qt * 2
                              , h = parseFloat(d.style.minHeight)
                              , w = parseFloat(d.style.height)
                              , y = Math.max(h, w);
                            if (y < g) {
                                const v = y + p
                                  , b = Math.min(g, v)
                                  , S = v - b;
                                d.style.height = b + "px",
                                d.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0,
                                d.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    l.current = f.scrollTop
                }
                )
            })
        })]
    })
}
);
Cw.displayName = zd;
var Ew = "SelectGroup"
  , [MI,LI] = si(Ew)
  , BI = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...n} = e
      , o = To();
    return m.jsx(MI, {
        scope: r,
        id: o,
        children: m.jsx(ue.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
        })
    })
}
);
BI.displayName = Ew;
var Nw = "SelectLabel"
  , Pw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...n} = e
      , o = LI(Nw, r);
    return m.jsx(ue.div, {
        id: o.id,
        ...n,
        ref: t
    })
}
);
Pw.displayName = Nw;
var gl = "SelectItem"
  , [FI,Dw] = si(gl)
  , Tw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, value: n, disabled: o=!1, textValue: i, ...a} = e
      , s = Nn(gl, r)
      , l = Pn(gl, r)
      , u = s.value === n
      , [f,d] = x.useState(i ?? "")
      , [c,p] = x.useState(!1)
      , g = Ee(t, v => {
        var b;
        return (b = l.itemRefCallback) == null ? void 0 : b.call(l, v, n, o)
    }
    )
      , h = To()
      , w = x.useRef("touch")
      , y = () => {
        o || (s.onValueChange(n),
        s.onOpenChange(!1))
    }
    ;
    if (n === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return m.jsx(FI, {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
        isSelected: u,
        onItemTextChange: x.useCallback(v => {
            d(b => b || ((v == null ? void 0 : v.textContent) ?? "").trim())
        }
        , []),
        children: m.jsx(au.ItemSlot, {
            scope: r,
            value: n,
            disabled: o,
            textValue: f,
            children: m.jsx(ue.div, {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": c ? "" : void 0,
                "aria-selected": u && c,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: g,
                onFocus: J(a.onFocus, () => p(!0)),
                onBlur: J(a.onBlur, () => p(!1)),
                onClick: J(a.onClick, () => {
                    w.current !== "mouse" && y()
                }
                ),
                onPointerUp: J(a.onPointerUp, () => {
                    w.current === "mouse" && y()
                }
                ),
                onPointerDown: J(a.onPointerDown, v => {
                    w.current = v.pointerType
                }
                ),
                onPointerMove: J(a.onPointerMove, v => {
                    var b;
                    w.current = v.pointerType,
                    o ? (b = l.onItemLeave) == null || b.call(l) : w.current === "mouse" && v.currentTarget.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerLeave: J(a.onPointerLeave, v => {
                    var b;
                    v.currentTarget === document.activeElement && ((b = l.onItemLeave) == null || b.call(l))
                }
                ),
                onKeyDown: J(a.onKeyDown, v => {
                    var S;
                    ((S = l.searchRef) == null ? void 0 : S.current) !== "" && v.key === " " || (EI.includes(v.key) && y(),
                    v.key === " " && v.preventDefault())
                }
                )
            })
        })
    })
}
);
Tw.displayName = gl;
var Ii = "SelectItemText"
  , Iw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, className: n, style: o, ...i} = e
      , a = Nn(Ii, r)
      , s = Pn(Ii, r)
      , l = Dw(Ii, r)
      , u = TI(Ii, r)
      , [f,d] = x.useState(null)
      , c = Ee(t, y => d(y), l.onItemTextChange, y => {
        var v;
        return (v = s.itemTextRefCallback) == null ? void 0 : v.call(s, y, l.value, l.disabled)
    }
    )
      , p = f == null ? void 0 : f.textContent
      , g = x.useMemo( () => m.jsx("option", {
        value: l.value,
        disabled: l.disabled,
        children: p
    }, l.value), [l.disabled, l.value, p])
      , {onNativeOptionAdd: h, onNativeOptionRemove: w} = u;
    return it( () => (h(g),
    () => w(g)), [h, w, g]),
    m.jsxs(m.Fragment, {
        children: [m.jsx(ue.span, {
            id: l.textId,
            ...i,
            ref: c
        }), l.isSelected && a.valueNode && !a.valueNodeHasChildren ? En.createPortal(i.children, a.valueNode) : null]
    })
}
);
Iw.displayName = Ii;
var Rw = "SelectItemIndicator"
  , kw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...n} = e;
    return Dw(Rw, r).isSelected ? m.jsx(ue.span, {
        "aria-hidden": !0,
        ...n,
        ref: t
    }) : null
}
);
kw.displayName = Rw;
var Wd = "SelectScrollUpButton"
  , Aw = x.forwardRef( (e, t) => {
    const r = Pn(Wd, e.__scopeSelect)
      , n = wp(Wd, e.__scopeSelect)
      , [o,i] = x.useState(!1)
      , a = Ee(t, n.onScrollButtonChange);
    return it( () => {
        if (r.viewport && r.isPositioned) {
            let s = function() {
                const u = l.scrollTop > 0;
                i(u)
            };
            const l = r.viewport;
            return s(),
            l.addEventListener("scroll", s),
            () => l.removeEventListener("scroll", s)
        }
    }
    , [r.viewport, r.isPositioned]),
    o ? m.jsx(jw, {
        ...e,
        ref: a,
        onAutoScroll: () => {
            const {viewport: s, selectedItem: l} = r;
            s && l && (s.scrollTop = s.scrollTop - l.offsetHeight)
        }
    }) : null
}
);
Aw.displayName = Wd;
var Ud = "SelectScrollDownButton"
  , Ow = x.forwardRef( (e, t) => {
    const r = Pn(Ud, e.__scopeSelect)
      , n = wp(Ud, e.__scopeSelect)
      , [o,i] = x.useState(!1)
      , a = Ee(t, n.onScrollButtonChange);
    return it( () => {
        if (r.viewport && r.isPositioned) {
            let s = function() {
                const u = l.scrollHeight - l.clientHeight
                  , f = Math.ceil(l.scrollTop) < u;
                i(f)
            };
            const l = r.viewport;
            return s(),
            l.addEventListener("scroll", s),
            () => l.removeEventListener("scroll", s)
        }
    }
    , [r.viewport, r.isPositioned]),
    o ? m.jsx(jw, {
        ...e,
        ref: a,
        onAutoScroll: () => {
            const {viewport: s, selectedItem: l} = r;
            s && l && (s.scrollTop = s.scrollTop + l.offsetHeight)
        }
    }) : null
}
);
Ow.displayName = Ud;
var jw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, onAutoScroll: n, ...o} = e
      , i = Pn("SelectScrollButton", r)
      , a = x.useRef(null)
      , s = su(r)
      , l = x.useCallback( () => {
        a.current !== null && (window.clearInterval(a.current),
        a.current = null)
    }
    , []);
    return x.useEffect( () => () => l(), [l]),
    it( () => {
        var f;
        const u = s().find(d => d.ref.current === document.activeElement);
        (f = u == null ? void 0 : u.ref.current) == null || f.scrollIntoView({
            block: "nearest"
        })
    }
    , [s]),
    m.jsx(ue.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: {
            flexShrink: 0,
            ...o.style
        },
        onPointerDown: J(o.onPointerDown, () => {
            a.current === null && (a.current = window.setInterval(n, 50))
        }
        ),
        onPointerMove: J(o.onPointerMove, () => {
            var u;
            (u = i.onItemLeave) == null || u.call(i),
            a.current === null && (a.current = window.setInterval(n, 50))
        }
        ),
        onPointerLeave: J(o.onPointerLeave, () => {
            l()
        }
        )
    })
}
)
  , _I = "SelectSeparator"
  , Mw = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...n} = e;
    return m.jsx(ue.div, {
        "aria-hidden": !0,
        ...n,
        ref: t
    })
}
);
Mw.displayName = _I;
var Vd = "SelectArrow"
  , $I = x.forwardRef( (e, t) => {
    const {__scopeSelect: r, ...n} = e
      , o = lu(r)
      , i = Nn(Vd, r)
      , a = Pn(Vd, r);
    return i.open && a.position === "popper" ? m.jsx(I0, {
        ...o,
        ...n,
        ref: t
    }) : null
}
);
$I.displayName = Vd;
function Lw(e) {
    return e === "" || e === void 0
}
var Bw = x.forwardRef( (e, t) => {
    const {value: r, ...n} = e
      , o = x.useRef(null)
      , i = Ee(t, o)
      , a = BT(r);
    return x.useEffect( () => {
        const s = o.current
          , l = window.HTMLSelectElement.prototype
          , f = Object.getOwnPropertyDescriptor(l, "value").set;
        if (a !== r && f) {
            const d = new Event("change",{
                bubbles: !0
            });
            f.call(s, r),
            s.dispatchEvent(d)
        }
    }
    , [a, r]),
    m.jsx(Na, {
        asChild: !0,
        children: m.jsx("select", {
            ...n,
            ref: i,
            defaultValue: r
        })
    })
}
);
Bw.displayName = "BubbleSelect";
function Fw(e) {
    const t = At(e)
      , r = x.useRef("")
      , n = x.useRef(0)
      , o = x.useCallback(a => {
        const s = r.current + a;
        t(s),
        function l(u) {
            r.current = u,
            window.clearTimeout(n.current),
            u !== "" && (n.current = window.setTimeout( () => l(""), 1e3))
        }(s)
    }
    , [t])
      , i = x.useCallback( () => {
        r.current = "",
        window.clearTimeout(n.current)
    }
    , []);
    return x.useEffect( () => () => window.clearTimeout(n.current), []),
    [r, o, i]
}
function _w(e, t, r) {
    const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t
      , i = r ? e.indexOf(r) : -1;
    let a = zI(e, Math.max(i, 0));
    o.length === 1 && (a = a.filter(u => u !== r));
    const l = a.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== r ? l : void 0
}
function zI(e, t) {
    return e.map( (r, n) => e[(t + n) % e.length])
}
var WI = fw
  , $w = mw
  , UI = hw
  , VI = gw
  , HI = yw
  , zw = xw
  , GI = Cw
  , Ww = Pw
  , Uw = Tw
  , KI = Iw
  , qI = kw
  , Vw = Aw
  , Hw = Ow
  , Gw = Mw;
const QI = WI
  , YI = UI
  , Kw = x.forwardRef( ({className: e, children: t, ...r}, n) => m.jsxs($w, {
    ref: n,
    className: pe("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", e),
    ...r,
    children: [t, m.jsx(VI, {
        asChild: !0,
        children: m.jsx(Yx, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
Kw.displayName = $w.displayName;
const qw = x.forwardRef( ({className: e, ...t}, r) => m.jsx(Vw, {
    ref: r,
    className: pe("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: m.jsx(yN, {
        className: "h-4 w-4"
    })
}));
qw.displayName = Vw.displayName;
const Qw = x.forwardRef( ({className: e, ...t}, r) => m.jsx(Hw, {
    ref: r,
    className: pe("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: m.jsx(Yx, {
        className: "h-4 w-4"
    })
}));
Qw.displayName = Hw.displayName;
const Yw = x.forwardRef( ({className: e, children: t, position: r="popper", ...n}, o) => m.jsx(HI, {
    children: m.jsxs(zw, {
        ref: o,
        className: pe("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: r,
        ...n,
        children: [m.jsx(qw, {}), m.jsx(GI, {
            className: pe("p-1", r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: t
        }), m.jsx(Qw, {})]
    })
}));
Yw.displayName = zw.displayName;
const XI = x.forwardRef( ({className: e, ...t}, r) => m.jsx(Ww, {
    ref: r,
    className: pe("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
}));
XI.displayName = Ww.displayName;
const Hd = x.forwardRef( ({className: e, children: t, ...r}, n) => m.jsxs(Uw, {
    ref: n,
    className: pe("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...r,
    children: [m.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: m.jsx(qI, {
            children: m.jsx(gN, {
                className: "h-4 w-4"
            })
        })
    }), m.jsx(KI, {
        children: t
    })]
}));
Hd.displayName = Uw.displayName;
const JI = x.forwardRef( ({className: e, ...t}, r) => m.jsx(Gw, {
    ref: r,
    className: pe("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
JI.displayName = Gw.displayName;
const ZI = () => {
    const e = Da()
      , {toast: t} = Yf()
      , [r,n] = x.useState("Team 1")
      , [o,i] = x.useState("Team 2")
      , [a,s] = x.useState([])
      , [l,u] = x.useState("")
      , [f,d] = x.useState("eenvoudig")
      , c = () => {
        if (!l.trim())
            return;
        const v = {
            id: Date.now().toString(),
            name: l.trim(),
            position: "wissel"
        };
        s([...a, v]),
        u(""),
        t({
            title: "Speler toegevoegd",
            description: `${v.name} is toegevoegd als wisselspeler`
        })
    }
      , p = v => {
        s(a.filter(b => b.id !== v))
    }
      , g = (v, b) => {
        const S = a.filter(N => N.position === "aanval").length
          , C = a.filter(N => N.position === "verdediging").length
          , E = a.find(N => N.id === v);
        if ((E == null ? void 0 : E.position) !== b) {
            if (b === "aanval" && S >= 4) {
                t({
                    title: "Maximum bereikt",
                    description: "1e aanvalsvak kan maximaal 4 spelers bevatten",
                    variant: "destructive"
                });
                return
            }
            if (b === "verdediging" && C >= 4) {
                t({
                    title: "Maximum bereikt",
                    description: "1e verdedigingsvak kan maximaal 4 spelers bevatten",
                    variant: "destructive"
                });
                return
            }
            s(a.map(N => N.id === v ? {
                ...N,
                position: b
            } : N))
        }
    }
      , h = () => {
        const v = a.filter(S => S.position === "aanval").length
          , b = a.filter(S => S.position === "verdediging").length;
        return v >= 1 && b >= 1 && r.trim() && o.trim()
    }
      , w = () => {
        if (!h()) {
            t({
                title: "Kan wedstrijd niet starten",
                description: "Zorg ervoor dat beide teams een naam hebben en beide vakken minimaal 1 speler bevatten",
                variant: "destructive"
            });
            return
        }
        const v = {
            id: Date.now().toString(),
            team1Name: r.trim(),
            team2Name: o.trim(),
            players: a,
            score: {
                team1: 0,
                team2: 0
            },
            statisticsMode: f,
            createdAt: new Date().toISOString(),
            actions: []
        };
        localStorage.setItem("korfbalGame", JSON.stringify(v)),
        e("/match")
    }
      , y = v => a.filter(b => b.position === v);
    return m.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-3 md:p-6",
        children: m.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [m.jsxs("div", {
                className: "text-center mb-6 md:mb-8",
                children: [m.jsx("h1", {
                    className: "text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2",
                    children: "Korfbal Statistieken"
                }), m.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Stel je wedstrijd in"
                }), m.jsxs(de, {
                    variant: "outline",
                    size: "sm",
                    className: "mt-4",
                    onClick: () => e("/archive"),
                    children: [m.jsx(mN, {
                        className: "h-4 w-4 mr-2"
                    }), "Bekijk Archief"]
                })]
            }), m.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8",
                children: [m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsxs(dt, {
                            className: "flex items-center gap-2 text-base md:text-lg",
                            children: [m.jsx(Xx, {
                                className: "h-5 w-5 text-primary"
                            }), "Teams"]
                        })
                    }), m.jsxs(qe, {
                        className: "space-y-4",
                        children: [m.jsxs("div", {
                            children: [m.jsx("label", {
                                className: "text-sm font-medium",
                                children: "Team 1"
                            }), m.jsx(Ms, {
                                value: r,
                                onChange: v => n(v.target.value),
                                placeholder: "Naam van team 1"
                            })]
                        }), m.jsxs("div", {
                            children: [m.jsx("label", {
                                className: "text-sm font-medium",
                                children: "Team 2"
                            }), m.jsx(Ms, {
                                value: o,
                                onChange: v => i(v.target.value),
                                placeholder: "Naam van team 2"
                            })]
                        })]
                    })]
                }), m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsxs(dt, {
                            className: "flex items-center gap-2 text-base md:text-lg",
                            children: [m.jsx(Sv, {
                                className: "h-5 w-5 text-primary"
                            }), "Speler Toevoegen"]
                        })
                    }), m.jsx(qe, {
                        children: m.jsxs("div", {
                            className: "flex gap-2",
                            children: [m.jsx(Ms, {
                                value: l,
                                onChange: v => u(v.target.value),
                                placeholder: "Naam van speler",
                                onKeyPress: v => v.key === "Enter" && c()
                            }), m.jsx(de, {
                                onClick: c,
                                variant: "hero",
                                children: m.jsx(Sv, {
                                    className: "h-4 w-4"
                                })
                            })]
                        })
                    })]
                }), m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsxs(dt, {
                            className: "flex items-center gap-2 text-base md:text-lg",
                            children: [m.jsx(xN, {
                                className: "h-5 w-5 text-primary"
                            }), "Statistieken Modus"]
                        })
                    }), m.jsx(qe, {
                        children: m.jsxs("div", {
                            className: "space-y-2",
                            children: [m.jsx("label", {
                                className: "text-sm font-medium",
                                children: "Selecteer modus"
                            }), m.jsxs(QI, {
                                value: f,
                                onValueChange: v => d(v),
                                children: [m.jsx(Kw, {
                                    children: m.jsx(YI, {})
                                }), m.jsxs(Yw, {
                                    children: [m.jsx(Hd, {
                                        value: "eenvoudig",
                                        children: "Eenvoudig"
                                    }), m.jsx(Hd, {
                                        value: "uitgebreid",
                                        children: "Uitgebreid (Binnenkort)"
                                    })]
                                })]
                            }), f === "uitgebreid" && m.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Uitgebreide statistieken komen binnenkort beschikbaar"
                            })]
                        })
                    })]
                })]
            }), m.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8",
                children: [m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsx(dt, {
                            className: "text-center",
                            children: m.jsxs(tn, {
                                className: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground",
                                children: ["1e Aanvalsvak (", y("aanval").length, "/4)"]
                            })
                        })
                    }), m.jsxs(qe, {
                        className: "space-y-2",
                        children: [y("aanval").map(v => m.jsxs("div", {
                            className: "flex items-center justify-between p-2 bg-primary/10 rounded",
                            children: [m.jsx("span", {
                                className: "font-medium text-sm md:text-base",
                                children: v.name
                            }), m.jsxs("div", {
                                className: "flex gap-1",
                                children: [m.jsx(de, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => g(v.id, "verdediging"),
                                    className: "text-xs px-2",
                                    children: "→ V"
                                }), m.jsx(de, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => g(v.id, "wissel"),
                                    className: "text-xs px-2",
                                    children: "→ W"
                                }), m.jsx(de, {
                                    size: "sm",
                                    variant: "destructive",
                                    onClick: () => p(v.id),
                                    children: m.jsx(Os, {
                                        className: "h-3 w-3"
                                    })
                                })]
                            })]
                        }, v.id)), y("aanval").length === 0 && m.jsx("p", {
                            className: "text-center text-muted-foreground py-4",
                            children: "Geen spelers toegewezen"
                        })]
                    })]
                }), m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsx(dt, {
                            className: "text-center",
                            children: m.jsxs(tn, {
                                className: "bg-gradient-to-r from-secondary to-blue-400 text-secondary-foreground",
                                children: ["1e Verdedigingsvak (", y("verdediging").length, "/4)"]
                            })
                        })
                    }), m.jsxs(qe, {
                        className: "space-y-2",
                        children: [y("verdediging").map(v => m.jsxs("div", {
                            className: "flex items-center justify-between p-2 bg-secondary/10 rounded",
                            children: [m.jsx("span", {
                                className: "font-medium text-sm md:text-base",
                                children: v.name
                            }), m.jsxs("div", {
                                className: "flex gap-1",
                                children: [m.jsx(de, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => g(v.id, "aanval"),
                                    className: "text-xs px-2",
                                    children: "→ A"
                                }), m.jsx(de, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => g(v.id, "wissel"),
                                    className: "text-xs px-2",
                                    children: "→ W"
                                }), m.jsx(de, {
                                    size: "sm",
                                    variant: "destructive",
                                    onClick: () => p(v.id),
                                    children: m.jsx(Os, {
                                        className: "h-3 w-3"
                                    })
                                })]
                            })]
                        }, v.id)), y("verdediging").length === 0 && m.jsx("p", {
                            className: "text-center text-muted-foreground py-4",
                            children: "Geen spelers toegewezen"
                        })]
                    })]
                }), m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsx(dt, {
                            className: "text-center",
                            children: m.jsxs(tn, {
                                variant: "secondary",
                                children: ["Wissel (", y("wissel").length, ")"]
                            })
                        })
                    }), m.jsxs(qe, {
                        className: "space-y-2",
                        children: [y("wissel").map(v => m.jsxs("div", {
                            className: "flex items-center justify-between p-2 bg-muted/50 rounded",
                            children: [m.jsx("span", {
                                className: "font-medium text-sm md:text-base",
                                children: v.name
                            }), m.jsxs("div", {
                                className: "flex gap-1",
                                children: [m.jsx(de, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => g(v.id, "aanval"),
                                    className: "text-xs px-2",
                                    children: "→ A"
                                }), m.jsx(de, {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: () => g(v.id, "verdediging"),
                                    className: "text-xs px-2",
                                    children: "→ V"
                                }), m.jsx(de, {
                                    size: "sm",
                                    variant: "destructive",
                                    onClick: () => p(v.id),
                                    children: m.jsx(Os, {
                                        className: "h-3 w-3"
                                    })
                                })]
                            })]
                        }, v.id)), y("wissel").length === 0 && m.jsx("p", {
                            className: "text-center text-muted-foreground py-4",
                            children: "Geen wisselspelers"
                        })]
                    })]
                })]
            }), m.jsxs("div", {
                className: "text-center",
                children: [m.jsxs(de, {
                    onClick: w,
                    disabled: !h(),
                    size: "lg",
                    variant: "hero",
                    className: "px-8",
                    children: [m.jsx(Td, {
                        className: "h-5 w-5 mr-2"
                    }), "Start Wedstrijd"]
                }), !h() && m.jsx("p", {
                    className: "text-muted-foreground mt-2 text-xs md:text-sm",
                    children: "Beide vakken moeten minimaal 1 speler bevatten om te kunnen starten"
                })]
            })]
        })
    })
}
;
var bp = "Dialog"
  , [Xw,aL] = Vl(bp)
  , [eR,sr] = Xw(bp)
  , Jw = e => {
    const {__scopeDialog: t, children: r, open: n, defaultOpen: o, onOpenChange: i, modal: a=!0} = e
      , s = x.useRef(null)
      , l = x.useRef(null)
      , [u=!1,f] = cl({
        prop: n,
        defaultProp: o,
        onChange: i
    });
    return m.jsx(eR, {
        scope: t,
        triggerRef: s,
        contentRef: l,
        contentId: To(),
        titleId: To(),
        descriptionId: To(),
        open: u,
        onOpenChange: f,
        onOpenToggle: x.useCallback( () => f(d => !d), [f]),
        modal: a,
        children: r
    })
}
;
Jw.displayName = bp;
var Zw = "DialogTrigger"
  , eb = x.forwardRef( (e, t) => {
    const {__scopeDialog: r, ...n} = e
      , o = sr(Zw, r)
      , i = Ee(t, o.triggerRef);
    return m.jsx(ue.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ep(o.open),
        ...n,
        ref: i,
        onClick: J(e.onClick, o.onOpenToggle)
    })
}
);
eb.displayName = Zw;
var Sp = "DialogPortal"
  , [tR,tb] = Xw(Sp, {
    forceMount: void 0
})
  , rb = e => {
    const {__scopeDialog: t, forceMount: r, children: n, container: o} = e
      , i = sr(Sp, t);
    return m.jsx(tR, {
        scope: t,
        forceMount: r,
        children: x.Children.map(n, a => m.jsx(ti, {
            present: r || i.open,
            children: m.jsx(Hl, {
                asChild: !0,
                container: o,
                children: a
            })
        }))
    })
}
;
rb.displayName = Sp;
var yl = "DialogOverlay"
  , nb = x.forwardRef( (e, t) => {
    const r = tb(yl, e.__scopeDialog)
      , {forceMount: n=r.forceMount, ...o} = e
      , i = sr(yl, e.__scopeDialog);
    return i.modal ? m.jsx(ti, {
        present: n || i.open,
        children: m.jsx(rR, {
            ...o,
            ref: t
        })
    }) : null
}
);
nb.displayName = yl;
var rR = x.forwardRef( (e, t) => {
    const {__scopeDialog: r, ...n} = e
      , o = sr(yl, r);
    return m.jsx(xp, {
        as: qn,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: m.jsx(ue.div, {
            "data-state": Ep(o.open),
            ...n,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...n.style
            }
        })
    })
}
)
  , Xn = "DialogContent"
  , ob = x.forwardRef( (e, t) => {
    const r = tb(Xn, e.__scopeDialog)
      , {forceMount: n=r.forceMount, ...o} = e
      , i = sr(Xn, e.__scopeDialog);
    return m.jsx(ti, {
        present: n || i.open,
        children: i.modal ? m.jsx(nR, {
            ...o,
            ref: t
        }) : m.jsx(oR, {
            ...o,
            ref: t
        })
    })
}
);
ob.displayName = Xn;
var nR = x.forwardRef( (e, t) => {
    const r = sr(Xn, e.__scopeDialog)
      , n = x.useRef(null)
      , o = Ee(t, r.contentRef, n);
    return x.useEffect( () => {
        const i = n.current;
        if (i)
            return ow(i)
    }
    , []),
    m.jsx(ib, {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, i => {
            var a;
            i.preventDefault(),
            (a = r.triggerRef.current) == null || a.focus()
        }
        ),
        onPointerDownOutside: J(e.onPointerDownOutside, i => {
            const a = i.detail.originalEvent
              , s = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || s) && i.preventDefault()
        }
        ),
        onFocusOutside: J(e.onFocusOutside, i => i.preventDefault())
    })
}
)
  , oR = x.forwardRef( (e, t) => {
    const r = sr(Xn, e.__scopeDialog)
      , n = x.useRef(!1)
      , o = x.useRef(!1);
    return m.jsx(ib, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: i => {
            var a, s;
            (a = e.onCloseAutoFocus) == null || a.call(e, i),
            i.defaultPrevented || (n.current || (s = r.triggerRef.current) == null || s.focus(),
            i.preventDefault()),
            n.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: i => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, i),
            i.defaultPrevented || (n.current = !0,
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const a = i.target;
            ((u = r.triggerRef.current) == null ? void 0 : u.contains(a)) && i.preventDefault(),
            i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
        }
    })
}
)
  , ib = x.forwardRef( (e, t) => {
    const {__scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a} = e
      , s = sr(Xn, r)
      , l = x.useRef(null)
      , u = Ee(t, l);
    return tw(),
    m.jsxs(m.Fragment, {
        children: [m.jsx(yp, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: m.jsx(Ea, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": Ep(s.open),
                ...a,
                ref: u,
                onDismiss: () => s.onOpenChange(!1)
            })
        }), m.jsxs(m.Fragment, {
            children: [m.jsx(iR, {
                titleId: s.titleId
            }), m.jsx(sR, {
                contentRef: l,
                descriptionId: s.descriptionId
            })]
        })]
    })
}
)
  , Cp = "DialogTitle"
  , ab = x.forwardRef( (e, t) => {
    const {__scopeDialog: r, ...n} = e
      , o = sr(Cp, r);
    return m.jsx(ue.h2, {
        id: o.titleId,
        ...n,
        ref: t
    })
}
);
ab.displayName = Cp;
var sb = "DialogDescription"
  , lb = x.forwardRef( (e, t) => {
    const {__scopeDialog: r, ...n} = e
      , o = sr(sb, r);
    return m.jsx(ue.p, {
        id: o.descriptionId,
        ...n,
        ref: t
    })
}
);
lb.displayName = sb;
var ub = "DialogClose"
  , cb = x.forwardRef( (e, t) => {
    const {__scopeDialog: r, ...n} = e
      , o = sr(ub, r);
    return m.jsx(ue.button, {
        type: "button",
        ...n,
        ref: t,
        onClick: J(e.onClick, () => o.onOpenChange(!1))
    })
}
);
cb.displayName = ub;
function Ep(e) {
    return e ? "open" : "closed"
}
var db = "DialogTitleWarning"
  , [sL,fb] = TE(db, {
    contentName: Xn,
    titleName: Cp,
    docsSlug: "dialog"
})
  , iR = ({titleId: e}) => {
    const t = fb(db)
      , r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return x.useEffect( () => {
        e && (document.getElementById(e) || console.error(r))
    }
    , [r, e]),
    null
}
  , aR = "DialogDescriptionWarning"
  , sR = ({contentRef: e, descriptionId: t}) => {
    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${fb(aR).contentName}}.`;
    return x.useEffect( () => {
        var i;
        const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(n))
    }
    , [n, e, t]),
    null
}
  , lR = Jw
  , uR = eb
  , cR = rb
  , pb = nb
  , mb = ob
  , vb = ab
  , hb = lb
  , dR = cb;
const fR = lR
  , pR = uR
  , mR = cR
  , gb = x.forwardRef( ({className: e, ...t}, r) => m.jsx(pb, {
    ref: r,
    className: pe("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
gb.displayName = pb.displayName;
const yb = x.forwardRef( ({className: e, children: t, ...r}, n) => m.jsxs(mR, {
    children: [m.jsx(gb, {}), m.jsxs(mb, {
        ref: n,
        className: pe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...r,
        children: [t, m.jsxs(dR, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [m.jsx(Jx, {
                className: "h-4 w-4"
            }), m.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
yb.displayName = mb.displayName;
const xb = ({className: e, ...t}) => m.jsx("div", {
    className: pe("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
xb.displayName = "DialogHeader";
const wb = x.forwardRef( ({className: e, ...t}, r) => m.jsx(vb, {
    ref: r,
    className: pe("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
wb.displayName = vb.displayName;
const vR = x.forwardRef( ({className: e, ...t}, r) => m.jsx(hb, {
    ref: r,
    className: pe("text-sm text-muted-foreground", e),
    ...t
}));
vR.displayName = hb.displayName;
function Gd(e, t) {
    return Gd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
        return r.__proto__ = n,
        r
    }
    ,
    Gd(e, t)
}
function bb(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    Gd(e, t)
}
function q() {
    return q = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    q.apply(null, arguments)
}
function da(e) {
    "@babel/helpers - typeof";
    return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    da(e)
}
function hR(e, t) {
    if (da(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (da(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function gR(e) {
    var t = hR(e, "string");
    return da(t) == "symbol" ? t : t + ""
}
function yR(e, t, r) {
    return (t = gR(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function uh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function ch(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? uh(Object(r), !0).forEach(function(n) {
            yR(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function vt(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var dh = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}()
  , yc = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
}
  , fh = {
    INIT: "@@redux/INIT" + yc(),
    REPLACE: "@@redux/REPLACE" + yc(),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + yc()
    }
};
function xR(e) {
    if (typeof e != "object" || e === null)
        return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}
function Sb(e, t, r) {
    var n;
    if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
        throw new Error(vt(0));
    if (typeof t == "function" && typeof r > "u" && (r = t,
    t = void 0),
    typeof r < "u") {
        if (typeof r != "function")
            throw new Error(vt(1));
        return r(Sb)(e, t)
    }
    if (typeof e != "function")
        throw new Error(vt(2));
    var o = e
      , i = t
      , a = []
      , s = a
      , l = !1;
    function u() {
        s === a && (s = a.slice())
    }
    function f() {
        if (l)
            throw new Error(vt(3));
        return i
    }
    function d(h) {
        if (typeof h != "function")
            throw new Error(vt(4));
        if (l)
            throw new Error(vt(5));
        var w = !0;
        return u(),
        s.push(h),
        function() {
            if (w) {
                if (l)
                    throw new Error(vt(6));
                w = !1,
                u();
                var v = s.indexOf(h);
                s.splice(v, 1),
                a = null
            }
        }
    }
    function c(h) {
        if (!xR(h))
            throw new Error(vt(7));
        if (typeof h.type > "u")
            throw new Error(vt(8));
        if (l)
            throw new Error(vt(9));
        try {
            l = !0,
            i = o(i, h)
        } finally {
            l = !1
        }
        for (var w = a = s, y = 0; y < w.length; y++) {
            var v = w[y];
            v()
        }
        return h
    }
    function p(h) {
        if (typeof h != "function")
            throw new Error(vt(10));
        o = h,
        c({
            type: fh.REPLACE
        })
    }
    function g() {
        var h, w = d;
        return h = {
            subscribe: function(v) {
                if (typeof v != "object" || v === null)
                    throw new Error(vt(11));
                function b() {
                    v.next && v.next(f())
                }
                b();
                var S = w(b);
                return {
                    unsubscribe: S
                }
            }
        },
        h[dh] = function() {
            return this
        }
        ,
        h
    }
    return c({
        type: fh.INIT
    }),
    n = {
        dispatch: c,
        subscribe: d,
        getState: f,
        replaceReducer: p
    },
    n[dh] = g,
    n
}
function ph(e, t) {
    return function() {
        return t(e.apply(this, arguments))
    }
}
function mh(e, t) {
    if (typeof e == "function")
        return ph(e, t);
    if (typeof e != "object" || e === null)
        throw new Error(vt(16));
    var r = {};
    for (var n in e) {
        var o = e[n];
        typeof o == "function" && (r[n] = ph(o, t))
    }
    return r
}
function Cb() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return t.length === 0 ? function(n) {
        return n
    }
    : t.length === 1 ? t[0] : t.reduce(function(n, o) {
        return function() {
            return n(o.apply(void 0, arguments))
        }
    })
}
function wR() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return function(n) {
        return function() {
            var o = n.apply(void 0, arguments)
              , i = function() {
                throw new Error(vt(15))
            }
              , a = {
                getState: o.getState,
                dispatch: function() {
                    return i.apply(void 0, arguments)
                }
            }
              , s = t.map(function(l) {
                return l(a)
            });
            return i = Cb.apply(void 0, s)(o.dispatch),
            ch(ch({}, o), {}, {
                dispatch: i
            })
        }
    }
}
var Eb = R.createContext(null);
function bR(e) {
    e()
}
var Nb = bR
  , SR = function(t) {
    return Nb = t
}
  , CR = function() {
    return Nb
};
function ER() {
    var e = CR()
      , t = null
      , r = null;
    return {
        clear: function() {
            t = null,
            r = null
        },
        notify: function() {
            e(function() {
                for (var o = t; o; )
                    o.callback(),
                    o = o.next
            })
        },
        get: function() {
            for (var o = [], i = t; i; )
                o.push(i),
                i = i.next;
            return o
        },
        subscribe: function(o) {
            var i = !0
              , a = r = {
                callback: o,
                next: null,
                prev: r
            };
            return a.prev ? a.prev.next = a : t = a,
            function() {
                !i || t === null || (i = !1,
                a.next ? a.next.prev = a.prev : r = a.prev,
                a.prev ? a.prev.next = a.next : t = a.next)
            }
        }
    }
}
var vh = {
    notify: function() {},
    get: function() {
        return []
    }
};
function Pb(e, t) {
    var r, n = vh;
    function o(d) {
        return l(),
        n.subscribe(d)
    }
    function i() {
        n.notify()
    }
    function a() {
        f.onStateChange && f.onStateChange()
    }
    function s() {
        return !!r
    }
    function l() {
        r || (r = t ? t.addNestedSub(a) : e.subscribe(a),
        n = ER())
    }
    function u() {
        r && (r(),
        r = void 0,
        n.clear(),
        n = vh)
    }
    var f = {
        addNestedSub: o,
        notifyNestedSubs: i,
        handleChangeWrapper: a,
        isSubscribed: s,
        trySubscribe: l,
        tryUnsubscribe: u,
        getListeners: function() {
            return n
        }
    };
    return f
}
var Db = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? x.useLayoutEffect : x.useEffect;
function NR(e) {
    var t = e.store
      , r = e.context
      , n = e.children
      , o = x.useMemo(function() {
        var s = Pb(t);
        return {
            store: t,
            subscription: s
        }
    }, [t])
      , i = x.useMemo(function() {
        return t.getState()
    }, [t]);
    Db(function() {
        var s = o.subscription;
        return s.onStateChange = s.notifyNestedSubs,
        s.trySubscribe(),
        i !== t.getState() && s.notifyNestedSubs(),
        function() {
            s.tryUnsubscribe(),
            s.onStateChange = null
        }
    }, [o, i]);
    var a = r || Eb;
    return R.createElement(a.Provider, {
        value: o
    }, n)
}
function xl(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (t.includes(n))
                continue;
            r[n] = e[n]
        }
    return r
}
var Tb = {
    exports: {}
}
  , me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve = typeof Symbol == "function" && Symbol.for
  , Np = Ve ? Symbol.for("react.element") : 60103
  , Pp = Ve ? Symbol.for("react.portal") : 60106
  , uu = Ve ? Symbol.for("react.fragment") : 60107
  , cu = Ve ? Symbol.for("react.strict_mode") : 60108
  , du = Ve ? Symbol.for("react.profiler") : 60114
  , fu = Ve ? Symbol.for("react.provider") : 60109
  , pu = Ve ? Symbol.for("react.context") : 60110
  , Dp = Ve ? Symbol.for("react.async_mode") : 60111
  , mu = Ve ? Symbol.for("react.concurrent_mode") : 60111
  , vu = Ve ? Symbol.for("react.forward_ref") : 60112
  , hu = Ve ? Symbol.for("react.suspense") : 60113
  , PR = Ve ? Symbol.for("react.suspense_list") : 60120
  , gu = Ve ? Symbol.for("react.memo") : 60115
  , yu = Ve ? Symbol.for("react.lazy") : 60116
  , DR = Ve ? Symbol.for("react.block") : 60121
  , TR = Ve ? Symbol.for("react.fundamental") : 60117
  , IR = Ve ? Symbol.for("react.responder") : 60118
  , RR = Ve ? Symbol.for("react.scope") : 60119;
function Mt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Np:
            switch (e = e.type,
            e) {
            case Dp:
            case mu:
            case uu:
            case du:
            case cu:
            case hu:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case pu:
                case vu:
                case yu:
                case gu:
                case fu:
                    return e;
                default:
                    return t
                }
            }
        case Pp:
            return t
        }
    }
}
function Ib(e) {
    return Mt(e) === mu
}
me.AsyncMode = Dp;
me.ConcurrentMode = mu;
me.ContextConsumer = pu;
me.ContextProvider = fu;
me.Element = Np;
me.ForwardRef = vu;
me.Fragment = uu;
me.Lazy = yu;
me.Memo = gu;
me.Portal = Pp;
me.Profiler = du;
me.StrictMode = cu;
me.Suspense = hu;
me.isAsyncMode = function(e) {
    return Ib(e) || Mt(e) === Dp
}
;
me.isConcurrentMode = Ib;
me.isContextConsumer = function(e) {
    return Mt(e) === pu
}
;
me.isContextProvider = function(e) {
    return Mt(e) === fu
}
;
me.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Np
}
;
me.isForwardRef = function(e) {
    return Mt(e) === vu
}
;
me.isFragment = function(e) {
    return Mt(e) === uu
}
;
me.isLazy = function(e) {
    return Mt(e) === yu
}
;
me.isMemo = function(e) {
    return Mt(e) === gu
}
;
me.isPortal = function(e) {
    return Mt(e) === Pp
}
;
me.isProfiler = function(e) {
    return Mt(e) === du
}
;
me.isStrictMode = function(e) {
    return Mt(e) === cu
}
;
me.isSuspense = function(e) {
    return Mt(e) === hu
}
;
me.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === uu || e === mu || e === du || e === cu || e === hu || e === PR || typeof e == "object" && e !== null && (e.$$typeof === yu || e.$$typeof === gu || e.$$typeof === fu || e.$$typeof === pu || e.$$typeof === vu || e.$$typeof === TR || e.$$typeof === IR || e.$$typeof === RR || e.$$typeof === DR)
}
;
me.typeOf = Mt;
Tb.exports = me;
var kR = Tb.exports
  , Tp = kR
  , AR = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}
  , OR = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}
  , jR = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , Rb = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , Ip = {};
Ip[Tp.ForwardRef] = jR;
Ip[Tp.Memo] = Rb;
function hh(e) {
    return Tp.isMemo(e) ? Rb : Ip[e.$$typeof] || AR
}
var MR = Object.defineProperty
  , LR = Object.getOwnPropertyNames
  , gh = Object.getOwnPropertySymbols
  , BR = Object.getOwnPropertyDescriptor
  , FR = Object.getPrototypeOf
  , yh = Object.prototype;
function kb(e, t, r) {
    if (typeof t != "string") {
        if (yh) {
            var n = FR(t);
            n && n !== yh && kb(e, n, r)
        }
        var o = LR(t);
        gh && (o = o.concat(gh(t)));
        for (var i = hh(e), a = hh(t), s = 0; s < o.length; ++s) {
            var l = o[s];
            if (!OR[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
                var u = BR(t, l);
                try {
                    MR(e, l, u)
                } catch {}
            }
        }
    }
    return e
}
var _R = kb;
const xh = Zd(_R);
var Ab = {
    exports: {}
}
  , he = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xu = 60103
  , wu = 60106
  , Ia = 60107
  , Ra = 60108
  , ka = 60114
  , Aa = 60109
  , Oa = 60110
  , ja = 60112
  , Ma = 60113
  , Rp = 60120
  , La = 60115
  , Ba = 60116
  , Ob = 60121
  , jb = 60122
  , Mb = 60117
  , Lb = 60129
  , Bb = 60131;
if (typeof Symbol == "function" && Symbol.for) {
    var He = Symbol.for;
    xu = He("react.element"),
    wu = He("react.portal"),
    Ia = He("react.fragment"),
    Ra = He("react.strict_mode"),
    ka = He("react.profiler"),
    Aa = He("react.provider"),
    Oa = He("react.context"),
    ja = He("react.forward_ref"),
    Ma = He("react.suspense"),
    Rp = He("react.suspense_list"),
    La = He("react.memo"),
    Ba = He("react.lazy"),
    Ob = He("react.block"),
    jb = He("react.server.block"),
    Mb = He("react.fundamental"),
    Lb = He("react.debug_trace_mode"),
    Bb = He("react.legacy_hidden")
}
function lr(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case xu:
            switch (e = e.type,
            e) {
            case Ia:
            case ka:
            case Ra:
            case Ma:
            case Rp:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case Oa:
                case ja:
                case Ba:
                case La:
                case Aa:
                    return e;
                default:
                    return t
                }
            }
        case wu:
            return t
        }
    }
}
var $R = Aa
  , zR = xu
  , WR = ja
  , UR = Ia
  , VR = Ba
  , HR = La
  , GR = wu
  , KR = ka
  , qR = Ra
  , QR = Ma;
he.ContextConsumer = Oa;
he.ContextProvider = $R;
he.Element = zR;
he.ForwardRef = WR;
he.Fragment = UR;
he.Lazy = VR;
he.Memo = HR;
he.Portal = GR;
he.Profiler = KR;
he.StrictMode = qR;
he.Suspense = QR;
he.isAsyncMode = function() {
    return !1
}
;
he.isConcurrentMode = function() {
    return !1
}
;
he.isContextConsumer = function(e) {
    return lr(e) === Oa
}
;
he.isContextProvider = function(e) {
    return lr(e) === Aa
}
;
he.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === xu
}
;
he.isForwardRef = function(e) {
    return lr(e) === ja
}
;
he.isFragment = function(e) {
    return lr(e) === Ia
}
;
he.isLazy = function(e) {
    return lr(e) === Ba
}
;
he.isMemo = function(e) {
    return lr(e) === La
}
;
he.isPortal = function(e) {
    return lr(e) === wu
}
;
he.isProfiler = function(e) {
    return lr(e) === ka
}
;
he.isStrictMode = function(e) {
    return lr(e) === Ra
}
;
he.isSuspense = function(e) {
    return lr(e) === Ma
}
;
he.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Ia || e === ka || e === Lb || e === Ra || e === Ma || e === Rp || e === Bb || typeof e == "object" && e !== null && (e.$$typeof === Ba || e.$$typeof === La || e.$$typeof === Aa || e.$$typeof === Oa || e.$$typeof === ja || e.$$typeof === Mb || e.$$typeof === Ob || e[0] === jb)
}
;
he.typeOf = lr;
Ab.exports = he;
var YR = Ab.exports
  , XR = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]
  , JR = ["reactReduxForwardedRef"]
  , ZR = []
  , ek = [null, null];
function tk(e, t) {
    var r = e[1];
    return [t.payload, r + 1]
}
function wh(e, t, r) {
    Db(function() {
        return e.apply(void 0, t)
    }, r)
}
function rk(e, t, r, n, o, i, a) {
    e.current = n,
    t.current = o,
    r.current = !1,
    i.current && (i.current = null,
    a())
}
function nk(e, t, r, n, o, i, a, s, l, u) {
    if (e) {
        var f = !1
          , d = null
          , c = function() {
            if (!f) {
                var h = t.getState(), w, y;
                try {
                    w = n(h, o.current)
                } catch (v) {
                    y = v,
                    d = v
                }
                y || (d = null),
                w === i.current ? a.current || l() : (i.current = w,
                s.current = w,
                a.current = !0,
                u({
                    type: "STORE_UPDATED",
                    payload: {
                        error: y
                    }
                }))
            }
        };
        r.onStateChange = c,
        r.trySubscribe(),
        c();
        var p = function() {
            if (f = !0,
            r.tryUnsubscribe(),
            r.onStateChange = null,
            d)
                throw d
        };
        return p
    }
}
var ok = function() {
    return [null, 0]
};
function ik(e, t) {
    t === void 0 && (t = {});
    var r = t
      , n = r.getDisplayName
      , o = n === void 0 ? function(b) {
        return "ConnectAdvanced(" + b + ")"
    }
    : n
      , i = r.methodName
      , a = i === void 0 ? "connectAdvanced" : i
      , s = r.renderCountProp
      , l = s === void 0 ? void 0 : s
      , u = r.shouldHandleStateChanges
      , f = u === void 0 ? !0 : u
      , d = r.storeKey
      , c = d === void 0 ? "store" : d;
    r.withRef;
    var p = r.forwardRef
      , g = p === void 0 ? !1 : p
      , h = r.context
      , w = h === void 0 ? Eb : h
      , y = xl(r, XR)
      , v = w;
    return function(S) {
        var C = S.displayName || S.name || "Component"
          , E = o(C)
          , N = q({}, y, {
            getDisplayName: o,
            methodName: a,
            renderCountProp: l,
            shouldHandleStateChanges: f,
            storeKey: c,
            displayName: E,
            wrappedComponentName: C,
            WrappedComponent: S
        })
          , D = y.pure;
        function I(A) {
            return e(A.dispatch, N)
        }
        var k = D ? x.useMemo : function(A) {
            return A()
        }
        ;
        function M(A) {
            var V = x.useMemo(function() {
                var Pe = A.reactReduxForwardedRef
                  , ur = xl(A, JR);
                return [A.context, Pe, ur]
            }, [A])
              , _ = V[0]
              , K = V[1]
              , P = V[2]
              , O = x.useMemo(function() {
                return _ && _.Consumer && YR.isContextConsumer(R.createElement(_.Consumer, null)) ? _ : v
            }, [_, v])
              , $ = x.useContext(O)
              , F = !!A.store && !!A.store.getState && !!A.store.dispatch;
            $ && $.store;
            var z = F ? A.store : $.store
              , Q = x.useMemo(function() {
                return I(z)
            }, [z])
              , oe = x.useMemo(function() {
                if (!f)
                    return ek;
                var Pe = Pb(z, F ? null : $.subscription)
                  , ur = Pe.notifyNestedSubs.bind(Pe);
                return [Pe, ur]
            }, [z, F, $])
              , ve = oe[0]
              , Z = oe[1]
              , H = x.useMemo(function() {
                return F ? $ : q({}, $, {
                    subscription: ve
                })
            }, [F, $, ve])
              , ne = x.useReducer(tk, ZR, ok)
              , ge = ne[0]
              , te = ge[0]
              , ae = ne[1];
            if (te && te.error)
                throw te.error;
            var ie = x.useRef()
              , Me = x.useRef(P)
              , _e = x.useRef()
              , Gt = x.useRef(!1)
              , Je = k(function() {
                return _e.current && P === Me.current ? _e.current : Q(z.getState(), P)
            }, [z, te, P]);
            wh(rk, [Me, ie, Gt, P, Je, _e, Z]),
            wh(nk, [f, z, ve, Q, Me, ie, Gt, _e, Z, ae], [z, ve, Q]);
            var Kt = x.useMemo(function() {
                return R.createElement(S, q({}, Je, {
                    ref: K
                }))
            }, [K, S, Je])
              , di = x.useMemo(function() {
                return f ? R.createElement(O.Provider, {
                    value: H
                }, Kt) : Kt
            }, [O, Kt, H]);
            return di
        }
        var B = D ? R.memo(M) : M;
        if (B.WrappedComponent = S,
        B.displayName = M.displayName = E,
        g) {
            var U = R.forwardRef(function(V, _) {
                return R.createElement(B, q({}, V, {
                    reactReduxForwardedRef: _
                }))
            });
            return U.displayName = E,
            U.WrappedComponent = S,
            xh(U, S)
        }
        return xh(B, S)
    }
}
function bh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function xc(e, t) {
    if (bh(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var r = Object.keys(e)
      , n = Object.keys(t);
    if (r.length !== n.length)
        return !1;
    for (var o = 0; o < r.length; o++)
        if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !bh(e[r[o]], t[r[o]]))
            return !1;
    return !0
}
function ak(e, t) {
    var r = {}
      , n = function(a) {
        var s = e[a];
        typeof s == "function" && (r[a] = function() {
            return t(s.apply(void 0, arguments))
        }
        )
    };
    for (var o in e)
        n(o);
    return r
}
function kp(e) {
    return function(r, n) {
        var o = e(r, n);
        function i() {
            return o
        }
        return i.dependsOnOwnProps = !1,
        i
    }
}
function Sh(e) {
    return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? !!e.dependsOnOwnProps : e.length !== 1
}
function Fb(e, t) {
    return function(n, o) {
        o.displayName;
        var i = function(s, l) {
            return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s)
        };
        return i.dependsOnOwnProps = !0,
        i.mapToProps = function(s, l) {
            i.mapToProps = e,
            i.dependsOnOwnProps = Sh(e);
            var u = i(s, l);
            return typeof u == "function" && (i.mapToProps = u,
            i.dependsOnOwnProps = Sh(u),
            u = i(s, l)),
            u
        }
        ,
        i
    }
}
function sk(e) {
    return typeof e == "function" ? Fb(e) : void 0
}
function lk(e) {
    return e ? void 0 : kp(function(t) {
        return {
            dispatch: t
        }
    })
}
function uk(e) {
    return e && typeof e == "object" ? kp(function(t) {
        return ak(e, t)
    }) : void 0
}
const ck = [sk, lk, uk];
function dk(e) {
    return typeof e == "function" ? Fb(e) : void 0
}
function fk(e) {
    return e ? void 0 : kp(function() {
        return {}
    })
}
const pk = [dk, fk];
function mk(e, t, r) {
    return q({}, r, e, t)
}
function vk(e) {
    return function(r, n) {
        n.displayName;
        var o = n.pure, i = n.areMergedPropsEqual, a = !1, s;
        return function(u, f, d) {
            var c = e(u, f, d);
            return a ? (!o || !i(c, s)) && (s = c) : (a = !0,
            s = c),
            s
        }
    }
}
function hk(e) {
    return typeof e == "function" ? vk(e) : void 0
}
function gk(e) {
    return e ? void 0 : function() {
        return mk
    }
}
const yk = [hk, gk];
var xk = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function wk(e, t, r, n) {
    return function(i, a) {
        return r(e(i, a), t(n, a), a)
    }
}
function bk(e, t, r, n, o) {
    var i = o.areStatesEqual, a = o.areOwnPropsEqual, s = o.areStatePropsEqual, l = !1, u, f, d, c, p;
    function g(b, S) {
        return u = b,
        f = S,
        d = e(u, f),
        c = t(n, f),
        p = r(d, c, f),
        l = !0,
        p
    }
    function h() {
        return d = e(u, f),
        t.dependsOnOwnProps && (c = t(n, f)),
        p = r(d, c, f),
        p
    }
    function w() {
        return e.dependsOnOwnProps && (d = e(u, f)),
        t.dependsOnOwnProps && (c = t(n, f)),
        p = r(d, c, f),
        p
    }
    function y() {
        var b = e(u, f)
          , S = !s(b, d);
        return d = b,
        S && (p = r(d, c, f)),
        p
    }
    function v(b, S) {
        var C = !a(S, f)
          , E = !i(b, u, S, f);
        return u = b,
        f = S,
        C && E ? h() : C ? w() : E ? y() : p
    }
    return function(S, C) {
        return l ? v(S, C) : g(S, C)
    }
}
function Sk(e, t) {
    var r = t.initMapStateToProps
      , n = t.initMapDispatchToProps
      , o = t.initMergeProps
      , i = xl(t, xk)
      , a = r(e, i)
      , s = n(e, i)
      , l = o(e, i)
      , u = i.pure ? bk : wk;
    return u(a, s, l, e, i)
}
var Ck = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function wc(e, t, r) {
    for (var n = t.length - 1; n >= 0; n--) {
        var o = t[n](e);
        if (o)
            return o
    }
    return function(i, a) {
        throw new Error("Invalid value of type " + typeof e + " for " + r + " argument when connecting component " + a.wrappedComponentName + ".")
    }
}
function Ek(e, t) {
    return e === t
}
function Nk(e) {
    var t = e === void 0 ? {} : e
      , r = t.connectHOC
      , n = r === void 0 ? ik : r
      , o = t.mapStateToPropsFactories
      , i = o === void 0 ? pk : o
      , a = t.mapDispatchToPropsFactories
      , s = a === void 0 ? ck : a
      , l = t.mergePropsFactories
      , u = l === void 0 ? yk : l
      , f = t.selectorFactory
      , d = f === void 0 ? Sk : f;
    return function(p, g, h, w) {
        w === void 0 && (w = {});
        var y = w
          , v = y.pure
          , b = v === void 0 ? !0 : v
          , S = y.areStatesEqual
          , C = S === void 0 ? Ek : S
          , E = y.areOwnPropsEqual
          , N = E === void 0 ? xc : E
          , D = y.areStatePropsEqual
          , I = D === void 0 ? xc : D
          , k = y.areMergedPropsEqual
          , M = k === void 0 ? xc : k
          , B = xl(y, Ck)
          , U = wc(p, i, "mapStateToProps")
          , A = wc(g, s, "mapDispatchToProps")
          , V = wc(h, u, "mergeProps");
        return n(d, q({
            methodName: "connect",
            getDisplayName: function(K) {
                return "Connect(" + K + ")"
            },
            shouldHandleStateChanges: !!p,
            initMapStateToProps: U,
            initMapDispatchToProps: A,
            initMergeProps: V,
            pure: b,
            areStatesEqual: C,
            areOwnPropsEqual: N,
            areStatePropsEqual: I,
            areMergedPropsEqual: M
        }, B))
    }
}
const _b = Nk();
SR(En.unstable_batchedUpdates);
function Pk(e, t) {
    if (e.length !== t.length)
        return !1;
    for (var r = 0; r < e.length; r++)
        if (e[r] !== t[r])
            return !1;
    return !0
}
function $b(e, t) {
    var r = x.useState(function() {
        return {
            inputs: t,
            result: e()
        }
    })[0]
      , n = x.useRef(!0)
      , o = x.useRef(r)
      , i = n.current || !!(t && o.current.inputs && Pk(t, o.current.inputs))
      , a = i ? o.current : {
        inputs: t,
        result: e()
    };
    return x.useEffect(function() {
        n.current = !1,
        o.current = a
    }, [a]),
    a.result
}
function Dk(e, t) {
    return $b(function() {
        return e
    }, t)
}
var se = $b
  , G = Dk
  , Tk = "Invariant failed";
function Ik(e, t) {
    throw new Error(Tk)
}
var tr = function(t) {
    var r = t.top
      , n = t.right
      , o = t.bottom
      , i = t.left
      , a = n - i
      , s = o - r
      , l = {
        top: r,
        right: n,
        bottom: o,
        left: i,
        width: a,
        height: s,
        x: i,
        y: r,
        center: {
            x: (n + i) / 2,
            y: (o + r) / 2
        }
    };
    return l
}
  , Ap = function(t, r) {
    return {
        top: t.top - r.top,
        left: t.left - r.left,
        bottom: t.bottom + r.bottom,
        right: t.right + r.right
    }
}
  , Ch = function(t, r) {
    return {
        top: t.top + r.top,
        left: t.left + r.left,
        bottom: t.bottom - r.bottom,
        right: t.right - r.right
    }
}
  , Rk = function(t, r) {
    return {
        top: t.top + r.y,
        left: t.left + r.x,
        bottom: t.bottom + r.y,
        right: t.right + r.x
    }
}
  , bc = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}
  , Op = function(t) {
    var r = t.borderBox
      , n = t.margin
      , o = n === void 0 ? bc : n
      , i = t.border
      , a = i === void 0 ? bc : i
      , s = t.padding
      , l = s === void 0 ? bc : s
      , u = tr(Ap(r, o))
      , f = tr(Ch(r, a))
      , d = tr(Ch(f, l));
    return {
        marginBox: u,
        borderBox: tr(r),
        paddingBox: f,
        contentBox: d,
        margin: o,
        border: a,
        padding: l
    }
}
  , Lt = function(t) {
    var r = t.slice(0, -2)
      , n = t.slice(-2);
    if (n !== "px")
        return 0;
    var o = Number(r);
    return isNaN(o) && Ik(),
    o
}
  , kk = function() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    }
}
  , wl = function(t, r) {
    var n = t.borderBox
      , o = t.border
      , i = t.margin
      , a = t.padding
      , s = Rk(n, r);
    return Op({
        borderBox: s,
        border: o,
        margin: i,
        padding: a
    })
}
  , bl = function(t, r) {
    return r === void 0 && (r = kk()),
    wl(t, r)
}
  , zb = function(t, r) {
    var n = {
        top: Lt(r.marginTop),
        right: Lt(r.marginRight),
        bottom: Lt(r.marginBottom),
        left: Lt(r.marginLeft)
    }
      , o = {
        top: Lt(r.paddingTop),
        right: Lt(r.paddingRight),
        bottom: Lt(r.paddingBottom),
        left: Lt(r.paddingLeft)
    }
      , i = {
        top: Lt(r.borderTopWidth),
        right: Lt(r.borderRightWidth),
        bottom: Lt(r.borderBottomWidth),
        left: Lt(r.borderLeftWidth)
    };
    return Op({
        borderBox: t,
        margin: n,
        padding: o,
        border: i
    })
}
  , Wb = function(t) {
    var r = t.getBoundingClientRect()
      , n = window.getComputedStyle(t);
    return zb(r, n)
}
  , Eh = Number.isNaN || function(t) {
    return typeof t == "number" && t !== t
}
;
function Ak(e, t) {
    return !!(e === t || Eh(e) && Eh(t))
}
function Ok(e, t) {
    if (e.length !== t.length)
        return !1;
    for (var r = 0; r < e.length; r++)
        if (!Ak(e[r], t[r]))
            return !1;
    return !0
}
function We(e, t) {
    t === void 0 && (t = Ok);
    var r, n = [], o, i = !1;
    function a() {
        for (var s = [], l = 0; l < arguments.length; l++)
            s[l] = arguments[l];
        return i && r === this && t(s, n) || (o = e.apply(this, s),
        i = !0,
        r = this,
        n = s),
        o
    }
    return a
}
var fa = function(t) {
    var r = []
      , n = null
      , o = function() {
        for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
            s[l] = arguments[l];
        r = s,
        !n && (n = requestAnimationFrame(function() {
            n = null,
            t.apply(void 0, r)
        }))
    };
    return o.cancel = function() {
        n && (cancelAnimationFrame(n),
        n = null)
    }
    ,
    o
};
function Ub(e, t) {}
Ub.bind(null, "warn");
Ub.bind(null, "error");
function dn() {}
function jk(e, t) {
    return q({}, e, {}, t)
}
function zt(e, t, r) {
    var n = t.map(function(o) {
        var i = jk(r, o.options);
        return e.addEventListener(o.eventName, o.fn, i),
        function() {
            e.removeEventListener(o.eventName, o.fn, i)
        }
    });
    return function() {
        n.forEach(function(i) {
            i()
        })
    }
}
var Mk = "Invariant failed";
function Sl(e) {
    this.message = e
}
Sl.prototype.toString = function() {
    return this.message
}
;
function L(e, t) {
    throw new Sl(Mk)
}
var Lk = function(e) {
    bb(t, e);
    function t() {
        for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
        return n = e.call.apply(e, [this].concat(i)) || this,
        n.callbacks = null,
        n.unbind = dn,
        n.onWindowError = function(s) {
            var l = n.getCallbacks();
            l.isDragging() && l.tryAbort();
            var u = s.error;
            u instanceof Sl && s.preventDefault()
        }
        ,
        n.getCallbacks = function() {
            if (!n.callbacks)
                throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
            return n.callbacks
        }
        ,
        n.setCallbacks = function(s) {
            n.callbacks = s
        }
        ,
        n
    }
    var r = t.prototype;
    return r.componentDidMount = function() {
        this.unbind = zt(window, [{
            eventName: "error",
            fn: this.onWindowError
        }])
    }
    ,
    r.componentDidCatch = function(o) {
        if (o instanceof Sl) {
            this.setState({});
            return
        }
        throw o
    }
    ,
    r.componentWillUnmount = function() {
        this.unbind()
    }
    ,
    r.render = function() {
        return this.props.children(this.setCallbacks)
    }
    ,
    t
}(R.Component)
  , Bk = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`
  , Cl = function(t) {
    return t + 1
}
  , Fk = function(t) {
    return `
  You have lifted an item in position ` + Cl(t.source.index) + `
`
}
  , Vb = function(t, r) {
    var n = t.droppableId === r.droppableId
      , o = Cl(t.index)
      , i = Cl(r.index);
    return n ? `
      You have moved the item from position ` + o + `
      to position ` + i + `
    ` : `
    You have moved the item from position ` + o + `
    in list ` + t.droppableId + `
    to list ` + r.droppableId + `
    in position ` + i + `
  `
}
  , Hb = function(t, r, n) {
    var o = r.droppableId === n.droppableId;
    return o ? `
      The item ` + t + `
      has been combined with ` + n.draggableId : `
      The item ` + t + `
      in list ` + r.droppableId + `
      has been combined with ` + n.draggableId + `
      in list ` + n.droppableId + `
    `
}
  , _k = function(t) {
    var r = t.destination;
    if (r)
        return Vb(t.source, r);
    var n = t.combine;
    return n ? Hb(t.draggableId, t.source, n) : "You are over an area that cannot be dropped on"
}
  , Nh = function(t) {
    return `
  The item has returned to its starting position
  of ` + Cl(t.index) + `
`
}
  , $k = function(t) {
    if (t.reason === "CANCEL")
        return `
      Movement cancelled.
      ` + Nh(t.source) + `
    `;
    var r = t.destination
      , n = t.combine;
    return r ? `
      You have dropped the item.
      ` + Vb(t.source, r) + `
    ` : n ? `
      You have dropped the item.
      ` + Hb(t.draggableId, t.source, n) + `
    ` : `
    The item has been dropped while not over a drop area.
    ` + Nh(t.source) + `
  `
}
  , Fs = {
    dragHandleUsageInstructions: Bk,
    onDragStart: Fk,
    onDragUpdate: _k,
    onDragEnd: $k
}
  , Ue = {
    x: 0,
    y: 0
}
  , Qe = function(t, r) {
    return {
        x: t.x + r.x,
        y: t.y + r.y
    }
}
  , Pt = function(t, r) {
    return {
        x: t.x - r.x,
        y: t.y - r.y
    }
}
  , fn = function(t, r) {
    return t.x === r.x && t.y === r.y
}
  , li = function(t) {
    return {
        x: t.x !== 0 ? -t.x : 0,
        y: t.y !== 0 ? -t.y : 0
    }
}
  , Jn = function(t, r, n) {
    var o;
    return n === void 0 && (n = 0),
    o = {},
    o[t] = r,
    o[t === "x" ? "y" : "x"] = n,
    o
}
  , pa = function(t, r) {
    return Math.sqrt(Math.pow(r.x - t.x, 2) + Math.pow(r.y - t.y, 2))
}
  , Ph = function(t, r) {
    return Math.min.apply(Math, r.map(function(n) {
        return pa(t, n)
    }))
}
  , Gb = function(t) {
    return function(r) {
        return {
            x: t(r.x),
            y: t(r.y)
        }
    }
}
  , zk = function(e, t) {
    var r = tr({
        top: Math.max(t.top, e.top),
        right: Math.min(t.right, e.right),
        bottom: Math.min(t.bottom, e.bottom),
        left: Math.max(t.left, e.left)
    });
    return r.width <= 0 || r.height <= 0 ? null : r
}
  , Fa = function(t, r) {
    return {
        top: t.top + r.y,
        left: t.left + r.x,
        bottom: t.bottom + r.y,
        right: t.right + r.x
    }
}
  , Dh = function(t) {
    return [{
        x: t.left,
        y: t.top
    }, {
        x: t.right,
        y: t.top
    }, {
        x: t.left,
        y: t.bottom
    }, {
        x: t.right,
        y: t.bottom
    }]
}
  , Wk = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}
  , Uk = function(t, r) {
    return r ? Fa(t, r.scroll.diff.displacement) : t
}
  , Vk = function(t, r, n) {
    if (n && n.increasedBy) {
        var o;
        return q({}, t, (o = {},
        o[r.end] = t[r.end] + n.increasedBy[r.line],
        o))
    }
    return t
}
  , Hk = function(t, r) {
    return r && r.shouldClipSubject ? zk(r.pageMarginBox, t) : tr(t)
}
  , Qo = function(e) {
    var t = e.page
      , r = e.withPlaceholder
      , n = e.axis
      , o = e.frame
      , i = Uk(t.marginBox, o)
      , a = Vk(i, n, r)
      , s = Hk(a, o);
    return {
        page: t,
        withPlaceholder: r,
        active: s
    }
}
  , jp = function(e, t) {
    e.frame || L();
    var r = e.frame
      , n = Pt(t, r.scroll.initial)
      , o = li(n)
      , i = q({}, r, {
        scroll: {
            initial: r.scroll.initial,
            current: t,
            diff: {
                value: n,
                displacement: o
            },
            max: r.scroll.max
        }
    })
      , a = Qo({
        page: e.subject.page,
        withPlaceholder: e.subject.withPlaceholder,
        axis: e.axis,
        frame: i
    })
      , s = q({}, e, {
        frame: i,
        subject: a
    });
    return s
};
function El(e) {
    return Object.values ? Object.values(e) : Object.keys(e).map(function(t) {
        return e[t]
    })
}
function Mp(e, t) {
    if (e.findIndex)
        return e.findIndex(t);
    for (var r = 0; r < e.length; r++)
        if (t(e[r]))
            return r;
    return -1
}
function Dn(e, t) {
    if (e.find)
        return e.find(t);
    var r = Mp(e, t);
    if (r !== -1)
        return e[r]
}
function Kb(e) {
    return Array.prototype.slice.call(e)
}
var qb = We(function(e) {
    return e.reduce(function(t, r) {
        return t[r.descriptor.id] = r,
        t
    }, {})
})
  , Qb = We(function(e) {
    return e.reduce(function(t, r) {
        return t[r.descriptor.id] = r,
        t
    }, {})
})
  , bu = We(function(e) {
    return El(e)
})
  , Gk = We(function(e) {
    return El(e)
})
  , ui = We(function(e, t) {
    var r = Gk(t).filter(function(n) {
        return e === n.descriptor.droppableId
    }).sort(function(n, o) {
        return n.descriptor.index - o.descriptor.index
    });
    return r
});
function Lp(e) {
    return e.at && e.at.type === "REORDER" ? e.at.destination : null
}
function Su(e) {
    return e.at && e.at.type === "COMBINE" ? e.at.combine : null
}
var Cu = We(function(e, t) {
    return t.filter(function(r) {
        return r.descriptor.id !== e.descriptor.id
    })
})
  , Kk = function(e) {
    var t = e.isMovingForward
      , r = e.draggable
      , n = e.destination
      , o = e.insideDestination
      , i = e.previousImpact;
    if (!n.isCombineEnabled)
        return null;
    var a = Lp(i);
    if (!a)
        return null;
    function s(h) {
        var w = {
            type: "COMBINE",
            combine: {
                draggableId: h,
                droppableId: n.descriptor.id
            }
        };
        return q({}, i, {
            at: w
        })
    }
    var l = i.displaced.all
      , u = l.length ? l[0] : null;
    if (t)
        return u ? s(u) : null;
    var f = Cu(r, o);
    if (!u) {
        if (!f.length)
            return null;
        var d = f[f.length - 1];
        return s(d.descriptor.id)
    }
    var c = Mp(f, function(h) {
        return h.descriptor.id === u
    });
    c === -1 && L();
    var p = c - 1;
    if (p < 0)
        return null;
    var g = f[p];
    return s(g.descriptor.id)
}
  , ci = function(e, t) {
    return e.descriptor.droppableId === t.descriptor.id
}
  , Yb = {
    point: Ue,
    value: 0
}
  , ma = {
    invisible: {},
    visible: {},
    all: []
}
  , qk = {
    displaced: ma,
    displacedBy: Yb,
    at: null
}
  , Ut = function(e, t) {
    return function(r) {
        return e <= r && r <= t
    }
}
  , Xb = function(e) {
    var t = Ut(e.top, e.bottom)
      , r = Ut(e.left, e.right);
    return function(n) {
        var o = t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
        if (o)
            return !0;
        var i = t(n.top) || t(n.bottom)
          , a = r(n.left) || r(n.right)
          , s = i && a;
        if (s)
            return !0;
        var l = n.top < e.top && n.bottom > e.bottom
          , u = n.left < e.left && n.right > e.right
          , f = l && u;
        if (f)
            return !0;
        var d = l && a || u && i;
        return d
    }
}
  , Qk = function(e) {
    var t = Ut(e.top, e.bottom)
      , r = Ut(e.left, e.right);
    return function(n) {
        var o = t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
        return o
    }
}
  , Bp = {
    direction: "vertical",
    line: "y",
    crossAxisLine: "x",
    start: "top",
    end: "bottom",
    size: "height",
    crossAxisStart: "left",
    crossAxisEnd: "right",
    crossAxisSize: "width"
}
  , Jb = {
    direction: "horizontal",
    line: "x",
    crossAxisLine: "y",
    start: "left",
    end: "right",
    size: "width",
    crossAxisStart: "top",
    crossAxisEnd: "bottom",
    crossAxisSize: "height"
}
  , Yk = function(e) {
    return function(t) {
        var r = Ut(t.top, t.bottom)
          , n = Ut(t.left, t.right);
        return function(o) {
            return e === Bp ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right)
        }
    }
}
  , Xk = function(t, r) {
    var n = r.frame ? r.frame.scroll.diff.displacement : Ue;
    return Fa(t, n)
}
  , Jk = function(t, r, n) {
    return r.subject.active ? n(r.subject.active)(t) : !1
}
  , Zk = function(t, r, n) {
    return n(r)(t)
}
  , Fp = function(t) {
    var r = t.target
      , n = t.destination
      , o = t.viewport
      , i = t.withDroppableDisplacement
      , a = t.isVisibleThroughFrameFn
      , s = i ? Xk(r, n) : r;
    return Jk(s, n, a) && Zk(s, o, a)
}
  , eA = function(t) {
    return Fp(q({}, t, {
        isVisibleThroughFrameFn: Xb
    }))
}
  , Zb = function(t) {
    return Fp(q({}, t, {
        isVisibleThroughFrameFn: Qk
    }))
}
  , tA = function(t) {
    return Fp(q({}, t, {
        isVisibleThroughFrameFn: Yk(t.destination.axis)
    }))
}
  , rA = function(t, r, n) {
    if (typeof n == "boolean")
        return n;
    if (!r)
        return !0;
    var o = r.invisible
      , i = r.visible;
    if (o[t])
        return !1;
    var a = i[t];
    return a ? a.shouldAnimate : !0
};
function nA(e, t) {
    var r = e.page.marginBox
      , n = {
        top: t.point.y,
        right: 0,
        bottom: 0,
        left: t.point.x
    };
    return tr(Ap(r, n))
}
function va(e) {
    var t = e.afterDragging
      , r = e.destination
      , n = e.displacedBy
      , o = e.viewport
      , i = e.forceShouldAnimate
      , a = e.last;
    return t.reduce(function(l, u) {
        var f = nA(u, n)
          , d = u.descriptor.id;
        l.all.push(d);
        var c = eA({
            target: f,
            destination: r,
            viewport: o,
            withDroppableDisplacement: !0
        });
        if (!c)
            return l.invisible[u.descriptor.id] = !0,
            l;
        var p = rA(d, a, i)
          , g = {
            draggableId: d,
            shouldAnimate: p
        };
        return l.visible[d] = g,
        l
    }, {
        all: [],
        visible: {},
        invisible: {}
    })
}
function oA(e, t) {
    if (!e.length)
        return 0;
    var r = e[e.length - 1].descriptor.index;
    return t.inHomeList ? r : r + 1
}
function Th(e) {
    var t = e.insideDestination
      , r = e.inHomeList
      , n = e.displacedBy
      , o = e.destination
      , i = oA(t, {
        inHomeList: r
    });
    return {
        displaced: ma,
        displacedBy: n,
        at: {
            type: "REORDER",
            destination: {
                droppableId: o.descriptor.id,
                index: i
            }
        }
    }
}
function Nl(e) {
    var t = e.draggable
      , r = e.insideDestination
      , n = e.destination
      , o = e.viewport
      , i = e.displacedBy
      , a = e.last
      , s = e.index
      , l = e.forceShouldAnimate
      , u = ci(t, n);
    if (s == null)
        return Th({
            insideDestination: r,
            inHomeList: u,
            displacedBy: i,
            destination: n
        });
    var f = Dn(r, function(h) {
        return h.descriptor.index === s
    });
    if (!f)
        return Th({
            insideDestination: r,
            inHomeList: u,
            displacedBy: i,
            destination: n
        });
    var d = Cu(t, r)
      , c = r.indexOf(f)
      , p = d.slice(c)
      , g = va({
        afterDragging: p,
        destination: n,
        displacedBy: i,
        last: a,
        viewport: o.frame,
        forceShouldAnimate: l
    });
    return {
        displaced: g,
        displacedBy: i,
        at: {
            type: "REORDER",
            destination: {
                droppableId: n.descriptor.id,
                index: s
            }
        }
    }
}
function wn(e, t) {
    return !!t.effected[e]
}
var iA = function(e) {
    var t = e.isMovingForward
      , r = e.destination
      , n = e.draggables
      , o = e.combine
      , i = e.afterCritical;
    if (!r.isCombineEnabled)
        return null;
    var a = o.draggableId
      , s = n[a]
      , l = s.descriptor.index
      , u = wn(a, i);
    return u ? t ? l : l - 1 : t ? l + 1 : l
}
  , aA = function(e) {
    var t = e.isMovingForward
      , r = e.isInHomeList
      , n = e.insideDestination
      , o = e.location;
    if (!n.length)
        return null;
    var i = o.index
      , a = t ? i + 1 : i - 1
      , s = n[0].descriptor.index
      , l = n[n.length - 1].descriptor.index
      , u = r ? l : l + 1;
    return a < s || a > u ? null : a
}
  , sA = function(e) {
    var t = e.isMovingForward
      , r = e.isInHomeList
      , n = e.draggable
      , o = e.draggables
      , i = e.destination
      , a = e.insideDestination
      , s = e.previousImpact
      , l = e.viewport
      , u = e.afterCritical
      , f = s.at;
    if (f || L(),
    f.type === "REORDER") {
        var d = aA({
            isMovingForward: t,
            isInHomeList: r,
            location: f.destination,
            insideDestination: a
        });
        return d == null ? null : Nl({
            draggable: n,
            insideDestination: a,
            destination: i,
            viewport: l,
            last: s.displaced,
            displacedBy: s.displacedBy,
            index: d
        })
    }
    var c = iA({
        isMovingForward: t,
        destination: i,
        displaced: s.displaced,
        draggables: o,
        combine: f.combine,
        afterCritical: u
    });
    return c == null ? null : Nl({
        draggable: n,
        insideDestination: a,
        destination: i,
        viewport: l,
        last: s.displaced,
        displacedBy: s.displacedBy,
        index: c
    })
}
  , lA = function(e) {
    var t = e.displaced
      , r = e.afterCritical
      , n = e.combineWith
      , o = e.displacedBy
      , i = !!(t.visible[n] || t.invisible[n]);
    return wn(n, r) ? i ? Ue : li(o.point) : i ? o.point : Ue
}
  , uA = function(e) {
    var t = e.afterCritical
      , r = e.impact
      , n = e.draggables
      , o = Su(r);
    o || L();
    var i = o.draggableId
      , a = n[i].page.borderBox.center
      , s = lA({
        displaced: r.displaced,
        afterCritical: t,
        combineWith: i,
        displacedBy: r.displacedBy
    });
    return Qe(a, s)
}
  , e1 = function(t, r) {
    return r.margin[t.start] + r.borderBox[t.size] / 2
}
  , cA = function(t, r) {
    return r.margin[t.end] + r.borderBox[t.size] / 2
}
  , _p = function(t, r, n) {
    return r[t.crossAxisStart] + n.margin[t.crossAxisStart] + n.borderBox[t.crossAxisSize] / 2
}
  , Ih = function(t) {
    var r = t.axis
      , n = t.moveRelativeTo
      , o = t.isMoving;
    return Jn(r.line, n.marginBox[r.end] + e1(r, o), _p(r, n.marginBox, o))
}
  , Rh = function(t) {
    var r = t.axis
      , n = t.moveRelativeTo
      , o = t.isMoving;
    return Jn(r.line, n.marginBox[r.start] - cA(r, o), _p(r, n.marginBox, o))
}
  , dA = function(t) {
    var r = t.axis
      , n = t.moveInto
      , o = t.isMoving;
    return Jn(r.line, n.contentBox[r.start] + e1(r, o), _p(r, n.contentBox, o))
}
  , fA = function(e) {
    var t = e.impact
      , r = e.draggable
      , n = e.draggables
      , o = e.droppable
      , i = e.afterCritical
      , a = ui(o.descriptor.id, n)
      , s = r.page
      , l = o.axis;
    if (!a.length)
        return dA({
            axis: l,
            moveInto: o.page,
            isMoving: s
        });
    var u = t.displaced
      , f = t.displacedBy
      , d = u.all[0];
    if (d) {
        var c = n[d];
        if (wn(d, i))
            return Rh({
                axis: l,
                moveRelativeTo: c.page,
                isMoving: s
            });
        var p = wl(c.page, f.point);
        return Rh({
            axis: l,
            moveRelativeTo: p,
            isMoving: s
        })
    }
    var g = a[a.length - 1];
    if (g.descriptor.id === r.descriptor.id)
        return s.borderBox.center;
    if (wn(g.descriptor.id, i)) {
        var h = wl(g.page, li(i.displacedBy.point));
        return Ih({
            axis: l,
            moveRelativeTo: h,
            isMoving: s
        })
    }
    return Ih({
        axis: l,
        moveRelativeTo: g.page,
        isMoving: s
    })
}
  , Kd = function(e, t) {
    var r = e.frame;
    return r ? Qe(t, r.scroll.diff.displacement) : t
}
  , pA = function(t) {
    var r = t.impact
      , n = t.draggable
      , o = t.droppable
      , i = t.draggables
      , a = t.afterCritical
      , s = n.page.borderBox.center
      , l = r.at;
    return !o || !l ? s : l.type === "REORDER" ? fA({
        impact: r,
        draggable: n,
        draggables: i,
        droppable: o,
        afterCritical: a
    }) : uA({
        impact: r,
        draggables: i,
        afterCritical: a
    })
}
  , Eu = function(e) {
    var t = pA(e)
      , r = e.droppable
      , n = r ? Kd(r, t) : t;
    return n
}
  , t1 = function(e, t) {
    var r = Pt(t, e.scroll.initial)
      , n = li(r)
      , o = tr({
        top: t.y,
        bottom: t.y + e.frame.height,
        left: t.x,
        right: t.x + e.frame.width
    })
      , i = {
        frame: o,
        scroll: {
            initial: e.scroll.initial,
            max: e.scroll.max,
            current: t,
            diff: {
                value: r,
                displacement: n
            }
        }
    };
    return i
};
function kh(e, t) {
    return e.map(function(r) {
        return t[r]
    })
}
function mA(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r].visible[e];
        if (n)
            return n
    }
    return null
}
var vA = function(e) {
    var t = e.impact
      , r = e.viewport
      , n = e.destination
      , o = e.draggables
      , i = e.maxScrollChange
      , a = t1(r, Qe(r.scroll.current, i))
      , s = n.frame ? jp(n, Qe(n.frame.scroll.current, i)) : n
      , l = t.displaced
      , u = va({
        afterDragging: kh(l.all, o),
        destination: n,
        displacedBy: t.displacedBy,
        viewport: a.frame,
        last: l,
        forceShouldAnimate: !1
    })
      , f = va({
        afterDragging: kh(l.all, o),
        destination: s,
        displacedBy: t.displacedBy,
        viewport: r.frame,
        last: l,
        forceShouldAnimate: !1
    })
      , d = {}
      , c = {}
      , p = [l, u, f];
    l.all.forEach(function(h) {
        var w = mA(h, p);
        if (w) {
            c[h] = w;
            return
        }
        d[h] = !0
    });
    var g = q({}, t, {
        displaced: {
            all: l.all,
            invisible: d,
            visible: c
        }
    });
    return g
}
  , hA = function(e, t) {
    return Qe(e.scroll.diff.displacement, t)
}
  , $p = function(e) {
    var t = e.pageBorderBoxCenter
      , r = e.draggable
      , n = e.viewport
      , o = hA(n, t)
      , i = Pt(o, r.page.borderBox.center);
    return Qe(r.client.borderBox.center, i)
}
  , r1 = function(e) {
    var t = e.draggable
      , r = e.destination
      , n = e.newPageBorderBoxCenter
      , o = e.viewport
      , i = e.withDroppableDisplacement
      , a = e.onlyOnMainAxis
      , s = a === void 0 ? !1 : a
      , l = Pt(n, t.page.borderBox.center)
      , u = Fa(t.page.borderBox, l)
      , f = {
        target: u,
        destination: r,
        withDroppableDisplacement: i,
        viewport: o
    };
    return s ? tA(f) : Zb(f)
}
  , gA = function(e) {
    var t = e.isMovingForward
      , r = e.draggable
      , n = e.destination
      , o = e.draggables
      , i = e.previousImpact
      , a = e.viewport
      , s = e.previousPageBorderBoxCenter
      , l = e.previousClientSelection
      , u = e.afterCritical;
    if (!n.isEnabled)
        return null;
    var f = ui(n.descriptor.id, o)
      , d = ci(r, n)
      , c = Kk({
        isMovingForward: t,
        draggable: r,
        destination: n,
        insideDestination: f,
        previousImpact: i
    }) || sA({
        isMovingForward: t,
        isInHomeList: d,
        draggable: r,
        draggables: o,
        destination: n,
        insideDestination: f,
        previousImpact: i,
        viewport: a,
        afterCritical: u
    });
    if (!c)
        return null;
    var p = Eu({
        impact: c,
        draggable: r,
        droppable: n,
        draggables: o,
        afterCritical: u
    })
      , g = r1({
        draggable: r,
        destination: n,
        newPageBorderBoxCenter: p,
        viewport: a.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0
    });
    if (g) {
        var h = $p({
            pageBorderBoxCenter: p,
            draggable: r,
            viewport: a
        });
        return {
            clientSelection: h,
            impact: c,
            scrollJumpRequest: null
        }
    }
    var w = Pt(p, s)
      , y = vA({
        impact: c,
        viewport: a,
        destination: n,
        draggables: o,
        maxScrollChange: w
    });
    return {
        clientSelection: l,
        impact: y,
        scrollJumpRequest: w
    }
}
  , at = function(t) {
    var r = t.subject.active;
    return r || L(),
    r
}
  , yA = function(e) {
    var t = e.isMovingForward
      , r = e.pageBorderBoxCenter
      , n = e.source
      , o = e.droppables
      , i = e.viewport
      , a = n.subject.active;
    if (!a)
        return null;
    var s = n.axis
      , l = Ut(a[s.start], a[s.end])
      , u = bu(o).filter(function(d) {
        return d !== n
    }).filter(function(d) {
        return d.isEnabled
    }).filter(function(d) {
        return !!d.subject.active
    }).filter(function(d) {
        return Xb(i.frame)(at(d))
    }).filter(function(d) {
        var c = at(d);
        return t ? a[s.crossAxisEnd] < c[s.crossAxisEnd] : c[s.crossAxisStart] < a[s.crossAxisStart]
    }).filter(function(d) {
        var c = at(d)
          , p = Ut(c[s.start], c[s.end]);
        return l(c[s.start]) || l(c[s.end]) || p(a[s.start]) || p(a[s.end])
    }).sort(function(d, c) {
        var p = at(d)[s.crossAxisStart]
          , g = at(c)[s.crossAxisStart];
        return t ? p - g : g - p
    }).filter(function(d, c, p) {
        return at(d)[s.crossAxisStart] === at(p[0])[s.crossAxisStart]
    });
    if (!u.length)
        return null;
    if (u.length === 1)
        return u[0];
    var f = u.filter(function(d) {
        var c = Ut(at(d)[s.start], at(d)[s.end]);
        return c(r[s.line])
    });
    return f.length === 1 ? f[0] : f.length > 1 ? f.sort(function(d, c) {
        return at(d)[s.start] - at(c)[s.start]
    })[0] : u.sort(function(d, c) {
        var p = Ph(r, Dh(at(d)))
          , g = Ph(r, Dh(at(c)));
        return p !== g ? p - g : at(d)[s.start] - at(c)[s.start]
    })[0]
}
  , Ah = function(t, r) {
    var n = t.page.borderBox.center;
    return wn(t.descriptor.id, r) ? Pt(n, r.displacedBy.point) : n
}
  , xA = function(t, r) {
    var n = t.page.borderBox;
    return wn(t.descriptor.id, r) ? Fa(n, li(r.displacedBy.point)) : n
}
  , wA = function(e) {
    var t = e.pageBorderBoxCenter
      , r = e.viewport
      , n = e.destination
      , o = e.insideDestination
      , i = e.afterCritical
      , a = o.filter(function(s) {
        return Zb({
            target: xA(s, i),
            destination: n,
            viewport: r.frame,
            withDroppableDisplacement: !0
        })
    }).sort(function(s, l) {
        var u = pa(t, Kd(n, Ah(s, i)))
          , f = pa(t, Kd(n, Ah(l, i)));
        return u < f ? -1 : f < u ? 1 : s.descriptor.index - l.descriptor.index
    });
    return a[0] || null
}
  , _a = We(function(t, r) {
    var n = r[t.line];
    return {
        value: n,
        point: Jn(t.line, n)
    }
})
  , bA = function(t, r, n) {
    var o = t.axis;
    if (t.descriptor.mode === "virtual")
        return Jn(o.line, r[o.line]);
    var i = t.subject.page.contentBox[o.size]
      , a = ui(t.descriptor.id, n)
      , s = a.reduce(function(f, d) {
        return f + d.client.marginBox[o.size]
    }, 0)
      , l = s + r[o.line]
      , u = l - i;
    return u <= 0 ? null : Jn(o.line, u)
}
  , n1 = function(t, r) {
    return q({}, t, {
        scroll: q({}, t.scroll, {
            max: r
        })
    })
}
  , o1 = function(t, r, n) {
    var o = t.frame;
    ci(r, t) && L(),
    t.subject.withPlaceholder && L();
    var i = _a(t.axis, r.displaceBy).point
      , a = bA(t, i, n)
      , s = {
        placeholderSize: i,
        increasedBy: a,
        oldFrameMaxScroll: t.frame ? t.frame.scroll.max : null
    };
    if (!o) {
        var l = Qo({
            page: t.subject.page,
            withPlaceholder: s,
            axis: t.axis,
            frame: t.frame
        });
        return q({}, t, {
            subject: l
        })
    }
    var u = a ? Qe(o.scroll.max, a) : o.scroll.max
      , f = n1(o, u)
      , d = Qo({
        page: t.subject.page,
        withPlaceholder: s,
        axis: t.axis,
        frame: f
    });
    return q({}, t, {
        subject: d,
        frame: f
    })
}
  , SA = function(t) {
    var r = t.subject.withPlaceholder;
    r || L();
    var n = t.frame;
    if (!n) {
        var o = Qo({
            page: t.subject.page,
            axis: t.axis,
            frame: null,
            withPlaceholder: null
        });
        return q({}, t, {
            subject: o
        })
    }
    var i = r.oldFrameMaxScroll;
    i || L();
    var a = n1(n, i)
      , s = Qo({
        page: t.subject.page,
        axis: t.axis,
        frame: a,
        withPlaceholder: null
    });
    return q({}, t, {
        subject: s,
        frame: a
    })
}
  , CA = function(e) {
    var t = e.previousPageBorderBoxCenter
      , r = e.moveRelativeTo
      , n = e.insideDestination
      , o = e.draggable
      , i = e.draggables
      , a = e.destination
      , s = e.viewport
      , l = e.afterCritical;
    if (!r) {
        if (n.length)
            return null;
        var u = {
            displaced: ma,
            displacedBy: Yb,
            at: {
                type: "REORDER",
                destination: {
                    droppableId: a.descriptor.id,
                    index: 0
                }
            }
        }
          , f = Eu({
            impact: u,
            draggable: o,
            droppable: a,
            draggables: i,
            afterCritical: l
        })
          , d = ci(o, a) ? a : o1(a, o, i)
          , c = r1({
            draggable: o,
            destination: d,
            newPageBorderBoxCenter: f,
            viewport: s.frame,
            withDroppableDisplacement: !1,
            onlyOnMainAxis: !0
        });
        return c ? u : null
    }
    var p = t[a.axis.line] <= r.page.borderBox.center[a.axis.line]
      , g = function() {
        var w = r.descriptor.index;
        return r.descriptor.id === o.descriptor.id || p ? w : w + 1
    }()
      , h = _a(a.axis, o.displaceBy);
    return Nl({
        draggable: o,
        insideDestination: n,
        destination: a,
        viewport: s,
        displacedBy: h,
        last: ma,
        index: g
    })
}
  , EA = function(e) {
    var t = e.isMovingForward
      , r = e.previousPageBorderBoxCenter
      , n = e.draggable
      , o = e.isOver
      , i = e.draggables
      , a = e.droppables
      , s = e.viewport
      , l = e.afterCritical
      , u = yA({
        isMovingForward: t,
        pageBorderBoxCenter: r,
        source: o,
        droppables: a,
        viewport: s
    });
    if (!u)
        return null;
    var f = ui(u.descriptor.id, i)
      , d = wA({
        pageBorderBoxCenter: r,
        viewport: s,
        destination: u,
        insideDestination: f,
        afterCritical: l
    })
      , c = CA({
        previousPageBorderBoxCenter: r,
        destination: u,
        draggable: n,
        draggables: i,
        moveRelativeTo: d,
        insideDestination: f,
        viewport: s,
        afterCritical: l
    });
    if (!c)
        return null;
    var p = Eu({
        impact: c,
        draggable: n,
        droppable: u,
        draggables: i,
        afterCritical: l
    })
      , g = $p({
        pageBorderBoxCenter: p,
        draggable: n,
        viewport: s
    });
    return {
        clientSelection: g,
        impact: c,
        scrollJumpRequest: null
    }
}
  , It = function(e) {
    var t = e.at;
    return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null
}
  , NA = function(t, r) {
    var n = It(t);
    return n ? r[n] : null
}
  , PA = function(e) {
    var t = e.state
      , r = e.type
      , n = NA(t.impact, t.dimensions.droppables)
      , o = !!n
      , i = t.dimensions.droppables[t.critical.droppable.id]
      , a = n || i
      , s = a.axis.direction
      , l = s === "vertical" && (r === "MOVE_UP" || r === "MOVE_DOWN") || s === "horizontal" && (r === "MOVE_LEFT" || r === "MOVE_RIGHT");
    if (l && !o)
        return null;
    var u = r === "MOVE_DOWN" || r === "MOVE_RIGHT"
      , f = t.dimensions.draggables[t.critical.draggable.id]
      , d = t.current.page.borderBoxCenter
      , c = t.dimensions
      , p = c.draggables
      , g = c.droppables;
    return l ? gA({
        isMovingForward: u,
        previousPageBorderBoxCenter: d,
        draggable: f,
        destination: a,
        draggables: p,
        viewport: t.viewport,
        previousClientSelection: t.current.client.selection,
        previousImpact: t.impact,
        afterCritical: t.afterCritical
    }) : EA({
        isMovingForward: u,
        previousPageBorderBoxCenter: d,
        draggable: f,
        isOver: a,
        draggables: p,
        droppables: g,
        viewport: t.viewport,
        afterCritical: t.afterCritical
    })
};
function An(e) {
    return e.phase === "DRAGGING" || e.phase === "COLLECTING"
}
function i1(e) {
    var t = Ut(e.top, e.bottom)
      , r = Ut(e.left, e.right);
    return function(o) {
        return t(o.y) && r(o.x)
    }
}
function DA(e, t) {
    return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top
}
function TA(e) {
    var t = e.pageBorderBox
      , r = e.draggable
      , n = e.candidates
      , o = r.page.borderBox.center
      , i = n.map(function(a) {
        var s = a.axis
          , l = Jn(a.axis.line, t.center[s.line], a.page.borderBox.center[s.crossAxisLine]);
        return {
            id: a.descriptor.id,
            distance: pa(o, l)
        }
    }).sort(function(a, s) {
        return s.distance - a.distance
    });
    return i[0] ? i[0].id : null
}
function IA(e) {
    var t = e.pageBorderBox
      , r = e.draggable
      , n = e.droppables
      , o = bu(n).filter(function(i) {
        if (!i.isEnabled)
            return !1;
        var a = i.subject.active;
        if (!a || !DA(t, a))
            return !1;
        if (i1(a)(t.center))
            return !0;
        var s = i.axis
          , l = a.center[s.crossAxisLine]
          , u = t[s.crossAxisStart]
          , f = t[s.crossAxisEnd]
          , d = Ut(a[s.crossAxisStart], a[s.crossAxisEnd])
          , c = d(u)
          , p = d(f);
        return !c && !p ? !0 : c ? u < l : f > l
    });
    return o.length ? o.length === 1 ? o[0].descriptor.id : TA({
        pageBorderBox: t,
        draggable: r,
        candidates: o
    }) : null
}
var a1 = function(t, r) {
    return tr(Fa(t, r))
}
  , RA = function(e, t) {
    var r = e.frame;
    return r ? a1(t, r.scroll.diff.value) : t
};
function s1(e) {
    var t = e.displaced
      , r = e.id;
    return !!(t.visible[r] || t.invisible[r])
}
function kA(e) {
    var t = e.draggable
      , r = e.closest
      , n = e.inHomeList;
    return r ? n && r.descriptor.index > t.descriptor.index ? r.descriptor.index - 1 : r.descriptor.index : null
}
var AA = function(e) {
    var t = e.pageBorderBoxWithDroppableScroll
      , r = e.draggable
      , n = e.destination
      , o = e.insideDestination
      , i = e.last
      , a = e.viewport
      , s = e.afterCritical
      , l = n.axis
      , u = _a(n.axis, r.displaceBy)
      , f = u.value
      , d = t[l.start]
      , c = t[l.end]
      , p = Cu(r, o)
      , g = Dn(p, function(w) {
        var y = w.descriptor.id
          , v = w.page.borderBox.center[l.line]
          , b = wn(y, s)
          , S = s1({
            displaced: i,
            id: y
        });
        return b ? S ? c <= v : d < v - f : S ? c <= v + f : d < v
    })
      , h = kA({
        draggable: r,
        closest: g,
        inHomeList: ci(r, n)
    });
    return Nl({
        draggable: r,
        insideDestination: o,
        destination: n,
        viewport: a,
        last: i,
        displacedBy: u,
        index: h
    })
}
  , OA = 4
  , jA = function(e) {
    var t = e.draggable
      , r = e.pageBorderBoxWithDroppableScroll
      , n = e.previousImpact
      , o = e.destination
      , i = e.insideDestination
      , a = e.afterCritical;
    if (!o.isCombineEnabled)
        return null;
    var s = o.axis
      , l = _a(o.axis, t.displaceBy)
      , u = l.value
      , f = r[s.start]
      , d = r[s.end]
      , c = Cu(t, i)
      , p = Dn(c, function(h) {
        var w = h.descriptor.id
          , y = h.page.borderBox
          , v = y[s.size]
          , b = v / OA
          , S = wn(w, a)
          , C = s1({
            displaced: n.displaced,
            id: w
        });
        return S ? C ? d > y[s.start] + b && d < y[s.end] - b : f > y[s.start] - u + b && f < y[s.end] - u - b : C ? d > y[s.start] + u + b && d < y[s.end] + u - b : f > y[s.start] + b && f < y[s.end] - b
    });
    if (!p)
        return null;
    var g = {
        displacedBy: l,
        displaced: n.displaced,
        at: {
            type: "COMBINE",
            combine: {
                draggableId: p.descriptor.id,
                droppableId: o.descriptor.id
            }
        }
    };
    return g
}
  , l1 = function(e) {
    var t = e.pageOffset
      , r = e.draggable
      , n = e.draggables
      , o = e.droppables
      , i = e.previousImpact
      , a = e.viewport
      , s = e.afterCritical
      , l = a1(r.page.borderBox, t)
      , u = IA({
        pageBorderBox: l,
        draggable: r,
        droppables: o
    });
    if (!u)
        return qk;
    var f = o[u]
      , d = ui(f.descriptor.id, n)
      , c = RA(f, l);
    return jA({
        pageBorderBoxWithDroppableScroll: c,
        draggable: r,
        previousImpact: i,
        destination: f,
        insideDestination: d,
        afterCritical: s
    }) || AA({
        pageBorderBoxWithDroppableScroll: c,
        draggable: r,
        destination: f,
        insideDestination: d,
        last: i.displaced,
        viewport: a,
        afterCritical: s
    })
}
  , zp = function(e, t) {
    var r;
    return q({}, e, (r = {},
    r[t.descriptor.id] = t,
    r))
}
  , MA = function(t) {
    var r = t.previousImpact
      , n = t.impact
      , o = t.droppables
      , i = It(r)
      , a = It(n);
    if (!i || i === a)
        return o;
    var s = o[i];
    if (!s.subject.withPlaceholder)
        return o;
    var l = SA(s);
    return zp(o, l)
}
  , LA = function(e) {
    var t = e.draggable
      , r = e.draggables
      , n = e.droppables
      , o = e.previousImpact
      , i = e.impact
      , a = MA({
        previousImpact: o,
        impact: i,
        droppables: n
    })
      , s = It(i);
    if (!s)
        return a;
    var l = n[s];
    if (ci(t, l) || l.subject.withPlaceholder)
        return a;
    var u = o1(l, t, r);
    return zp(a, u)
}
  , $i = function(e) {
    var t = e.state
      , r = e.clientSelection
      , n = e.dimensions
      , o = e.viewport
      , i = e.impact
      , a = e.scrollJumpRequest
      , s = o || t.viewport
      , l = n || t.dimensions
      , u = r || t.current.client.selection
      , f = Pt(u, t.initial.client.selection)
      , d = {
        offset: f,
        selection: u,
        borderBoxCenter: Qe(t.initial.client.borderBoxCenter, f)
    }
      , c = {
        selection: Qe(d.selection, s.scroll.current),
        borderBoxCenter: Qe(d.borderBoxCenter, s.scroll.current),
        offset: Qe(d.offset, s.scroll.diff.value)
    }
      , p = {
        client: d,
        page: c
    };
    if (t.phase === "COLLECTING")
        return q({
            phase: "COLLECTING"
        }, t, {
            dimensions: l,
            viewport: s,
            current: p
        });
    var g = l.draggables[t.critical.draggable.id]
      , h = i || l1({
        pageOffset: c.offset,
        draggable: g,
        draggables: l.draggables,
        droppables: l.droppables,
        previousImpact: t.impact,
        viewport: s,
        afterCritical: t.afterCritical
    })
      , w = LA({
        draggable: g,
        impact: h,
        previousImpact: t.impact,
        draggables: l.draggables,
        droppables: l.droppables
    })
      , y = q({}, t, {
        current: p,
        dimensions: {
            draggables: l.draggables,
            droppables: w
        },
        impact: h,
        viewport: s,
        scrollJumpRequest: a || null,
        forceShouldAnimate: a ? !1 : null
    });
    return y
};
function BA(e, t) {
    return e.map(function(r) {
        return t[r]
    })
}
var u1 = function(e) {
    var t = e.impact
      , r = e.viewport
      , n = e.draggables
      , o = e.destination
      , i = e.forceShouldAnimate
      , a = t.displaced
      , s = BA(a.all, n)
      , l = va({
        afterDragging: s,
        destination: o,
        displacedBy: t.displacedBy,
        viewport: r.frame,
        forceShouldAnimate: i,
        last: a
    });
    return q({}, t, {
        displaced: l
    })
}
  , c1 = function(e) {
    var t = e.impact
      , r = e.draggable
      , n = e.droppable
      , o = e.draggables
      , i = e.viewport
      , a = e.afterCritical
      , s = Eu({
        impact: t,
        draggable: r,
        draggables: o,
        droppable: n,
        afterCritical: a
    });
    return $p({
        pageBorderBoxCenter: s,
        draggable: r,
        viewport: i
    })
}
  , d1 = function(e) {
    var t = e.state
      , r = e.dimensions
      , n = e.viewport;
    t.movementMode !== "SNAP" && L();
    var o = t.impact
      , i = n || t.viewport
      , a = r || t.dimensions
      , s = a.draggables
      , l = a.droppables
      , u = s[t.critical.draggable.id]
      , f = It(o);
    f || L();
    var d = l[f]
      , c = u1({
        impact: o,
        viewport: i,
        destination: d,
        draggables: s
    })
      , p = c1({
        impact: c,
        draggable: u,
        droppable: d,
        draggables: s,
        viewport: i,
        afterCritical: t.afterCritical
    });
    return $i({
        impact: c,
        clientSelection: p,
        state: t,
        dimensions: a,
        viewport: i
    })
}
  , FA = function(e) {
    return {
        index: e.index,
        droppableId: e.droppableId
    }
}
  , f1 = function(e) {
    var t = e.draggable
      , r = e.home
      , n = e.draggables
      , o = e.viewport
      , i = _a(r.axis, t.displaceBy)
      , a = ui(r.descriptor.id, n)
      , s = a.indexOf(t);
    s === -1 && L();
    var l = a.slice(s + 1)
      , u = l.reduce(function(p, g) {
        return p[g.descriptor.id] = !0,
        p
    }, {})
      , f = {
        inVirtualList: r.descriptor.mode === "virtual",
        displacedBy: i,
        effected: u
    }
      , d = va({
        afterDragging: l,
        destination: r,
        displacedBy: i,
        last: null,
        viewport: o.frame,
        forceShouldAnimate: !1
    })
      , c = {
        displaced: d,
        displacedBy: i,
        at: {
            type: "REORDER",
            destination: FA(t.descriptor)
        }
    };
    return {
        impact: c,
        afterCritical: f
    }
}
  , _A = function(e, t) {
    return {
        draggables: e.draggables,
        droppables: zp(e.droppables, t)
    }
}
  , $A = function(e) {
    var t = e.draggable
      , r = e.offset
      , n = e.initialWindowScroll
      , o = wl(t.client, r)
      , i = bl(o, n)
      , a = q({}, t, {
        placeholder: q({}, t.placeholder, {
            client: o
        }),
        client: o,
        page: i
    });
    return a
}
  , zA = function(e) {
    var t = e.frame;
    return t || L(),
    t
}
  , WA = function(e) {
    var t = e.additions
      , r = e.updatedDroppables
      , n = e.viewport
      , o = n.scroll.diff.value;
    return t.map(function(i) {
        var a = i.descriptor.droppableId
          , s = r[a]
          , l = zA(s)
          , u = l.scroll.diff.value
          , f = Qe(o, u)
          , d = $A({
            draggable: i,
            offset: f,
            initialWindowScroll: n.scroll.initial
        });
        return d
    })
}
  , UA = function(e) {
    var t = e.state
      , r = e.published
      , n = r.modified.map(function(b) {
        var S = t.dimensions.droppables[b.droppableId]
          , C = jp(S, b.scroll);
        return C
    })
      , o = q({}, t.dimensions.droppables, {}, qb(n))
      , i = Qb(WA({
        additions: r.additions,
        updatedDroppables: o,
        viewport: t.viewport
    }))
      , a = q({}, t.dimensions.draggables, {}, i);
    r.removals.forEach(function(b) {
        delete a[b]
    });
    var s = {
        droppables: o,
        draggables: a
    }
      , l = It(t.impact)
      , u = l ? s.droppables[l] : null
      , f = s.draggables[t.critical.draggable.id]
      , d = s.droppables[t.critical.droppable.id]
      , c = f1({
        draggable: f,
        home: d,
        draggables: a,
        viewport: t.viewport
    })
      , p = c.impact
      , g = c.afterCritical
      , h = u && u.isCombineEnabled ? t.impact : p
      , w = l1({
        pageOffset: t.current.page.offset,
        draggable: s.draggables[t.critical.draggable.id],
        draggables: s.draggables,
        droppables: s.droppables,
        previousImpact: h,
        viewport: t.viewport,
        afterCritical: g
    })
      , y = q({
        phase: "DRAGGING"
    }, t, {
        phase: "DRAGGING",
        impact: w,
        onLiftImpact: p,
        dimensions: s,
        afterCritical: g,
        forceShouldAnimate: !1
    });
    if (t.phase === "COLLECTING")
        return y;
    var v = q({
        phase: "DROP_PENDING"
    }, y, {
        phase: "DROP_PENDING",
        reason: t.reason,
        isWaiting: !1
    });
    return v
}
  , qd = function(t) {
    return t.movementMode === "SNAP"
}
  , Sc = function(t, r, n) {
    var o = _A(t.dimensions, r);
    return !qd(t) || n ? $i({
        state: t,
        dimensions: o
    }) : d1({
        state: t,
        dimensions: o
    })
};
function Cc(e) {
    return e.isDragging && e.movementMode === "SNAP" ? q({
        phase: "DRAGGING"
    }, e, {
        scrollJumpRequest: null
    }) : e
}
var Oh = {
    phase: "IDLE",
    completed: null,
    shouldFlush: !1
}
  , VA = function(e, t) {
    if (e === void 0 && (e = Oh),
    t.type === "FLUSH")
        return q({}, Oh, {
            shouldFlush: !0
        });
    if (t.type === "INITIAL_PUBLISH") {
        e.phase !== "IDLE" && L();
        var r = t.payload
          , n = r.critical
          , o = r.clientSelection
          , i = r.viewport
          , a = r.dimensions
          , s = r.movementMode
          , l = a.draggables[n.draggable.id]
          , u = a.droppables[n.droppable.id]
          , f = {
            selection: o,
            borderBoxCenter: l.client.borderBox.center,
            offset: Ue
        }
          , d = {
            client: f,
            page: {
                selection: Qe(f.selection, i.scroll.initial),
                borderBoxCenter: Qe(f.selection, i.scroll.initial),
                offset: Qe(f.selection, i.scroll.diff.value)
            }
        }
          , c = bu(a.droppables).every(function(ae) {
            return !ae.isFixedOnPage
        })
          , p = f1({
            draggable: l,
            home: u,
            draggables: a.draggables,
            viewport: i
        })
          , g = p.impact
          , h = p.afterCritical
          , w = {
            phase: "DRAGGING",
            isDragging: !0,
            critical: n,
            movementMode: s,
            dimensions: a,
            initial: d,
            current: d,
            isWindowScrollAllowed: c,
            impact: g,
            afterCritical: h,
            onLiftImpact: g,
            viewport: i,
            scrollJumpRequest: null,
            forceShouldAnimate: null
        };
        return w
    }
    if (t.type === "COLLECTION_STARTING") {
        if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
            return e;
        e.phase !== "DRAGGING" && L();
        var y = q({
            phase: "COLLECTING"
        }, e, {
            phase: "COLLECTING"
        });
        return y
    }
    if (t.type === "PUBLISH_WHILE_DRAGGING")
        return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || L(),
        UA({
            state: e,
            published: t.payload
        });
    if (t.type === "MOVE") {
        if (e.phase === "DROP_PENDING")
            return e;
        An(e) || L();
        var v = t.payload.client;
        return fn(v, e.current.client.selection) ? e : $i({
            state: e,
            clientSelection: v,
            impact: qd(e) ? e.impact : null
        })
    }
    if (t.type === "UPDATE_DROPPABLE_SCROLL") {
        if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
            return Cc(e);
        An(e) || L();
        var b = t.payload
          , S = b.id
          , C = b.newScroll
          , E = e.dimensions.droppables[S];
        if (!E)
            return e;
        var N = jp(E, C);
        return Sc(e, N, !1)
    }
    if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
        if (e.phase === "DROP_PENDING")
            return e;
        An(e) || L();
        var D = t.payload
          , I = D.id
          , k = D.isEnabled
          , M = e.dimensions.droppables[I];
        M || L(),
        M.isEnabled === k && L();
        var B = q({}, M, {
            isEnabled: k
        });
        return Sc(e, B, !0)
    }
    if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
        if (e.phase === "DROP_PENDING")
            return e;
        An(e) || L();
        var U = t.payload
          , A = U.id
          , V = U.isCombineEnabled
          , _ = e.dimensions.droppables[A];
        _ || L(),
        _.isCombineEnabled === V && L();
        var K = q({}, _, {
            isCombineEnabled: V
        });
        return Sc(e, K, !0)
    }
    if (t.type === "MOVE_BY_WINDOW_SCROLL") {
        if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
            return e;
        An(e) || L(),
        e.isWindowScrollAllowed || L();
        var P = t.payload.newScroll;
        if (fn(e.viewport.scroll.current, P))
            return Cc(e);
        var O = t1(e.viewport, P);
        return qd(e) ? d1({
            state: e,
            viewport: O
        }) : $i({
            state: e,
            viewport: O
        })
    }
    if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
        if (!An(e))
            return e;
        var $ = t.payload.maxScroll;
        if (fn($, e.viewport.scroll.max))
            return e;
        var F = q({}, e.viewport, {
            scroll: q({}, e.viewport.scroll, {
                max: $
            })
        });
        return q({
            phase: "DRAGGING"
        }, e, {
            viewport: F
        })
    }
    if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
        if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
            return e;
        e.phase !== "DRAGGING" && L();
        var z = PA({
            state: e,
            type: t.type
        });
        return z ? $i({
            state: e,
            impact: z.impact,
            clientSelection: z.clientSelection,
            scrollJumpRequest: z.scrollJumpRequest
        }) : e
    }
    if (t.type === "DROP_PENDING") {
        var Q = t.payload.reason;
        e.phase !== "COLLECTING" && L();
        var oe = q({
            phase: "DROP_PENDING"
        }, e, {
            phase: "DROP_PENDING",
            isWaiting: !0,
            reason: Q
        });
        return oe
    }
    if (t.type === "DROP_ANIMATE") {
        var ve = t.payload
          , Z = ve.completed
          , H = ve.dropDuration
          , ne = ve.newHomeClientOffset;
        e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || L();
        var ge = {
            phase: "DROP_ANIMATING",
            completed: Z,
            dropDuration: H,
            newHomeClientOffset: ne,
            dimensions: e.dimensions
        };
        return ge
    }
    if (t.type === "DROP_COMPLETE") {
        var te = t.payload.completed;
        return {
            phase: "IDLE",
            completed: te,
            shouldFlush: !1
        }
    }
    return e
}
  , HA = function(t) {
    return {
        type: "BEFORE_INITIAL_CAPTURE",
        payload: t
    }
}
  , GA = function(t) {
    return {
        type: "LIFT",
        payload: t
    }
}
  , KA = function(t) {
    return {
        type: "INITIAL_PUBLISH",
        payload: t
    }
}
  , qA = function(t) {
    return {
        type: "PUBLISH_WHILE_DRAGGING",
        payload: t
    }
}
  , QA = function() {
    return {
        type: "COLLECTION_STARTING",
        payload: null
    }
}
  , YA = function(t) {
    return {
        type: "UPDATE_DROPPABLE_SCROLL",
        payload: t
    }
}
  , XA = function(t) {
    return {
        type: "UPDATE_DROPPABLE_IS_ENABLED",
        payload: t
    }
}
  , JA = function(t) {
    return {
        type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
        payload: t
    }
}
  , p1 = function(t) {
    return {
        type: "MOVE",
        payload: t
    }
}
  , ZA = function(t) {
    return {
        type: "MOVE_BY_WINDOW_SCROLL",
        payload: t
    }
}
  , eO = function(t) {
    return {
        type: "UPDATE_VIEWPORT_MAX_SCROLL",
        payload: t
    }
}
  , tO = function() {
    return {
        type: "MOVE_UP",
        payload: null
    }
}
  , rO = function() {
    return {
        type: "MOVE_DOWN",
        payload: null
    }
}
  , nO = function() {
    return {
        type: "MOVE_RIGHT",
        payload: null
    }
}
  , oO = function() {
    return {
        type: "MOVE_LEFT",
        payload: null
    }
}
  , Wp = function() {
    return {
        type: "FLUSH",
        payload: null
    }
}
  , iO = function(t) {
    return {
        type: "DROP_ANIMATE",
        payload: t
    }
}
  , Up = function(t) {
    return {
        type: "DROP_COMPLETE",
        payload: t
    }
}
  , m1 = function(t) {
    return {
        type: "DROP",
        payload: t
    }
}
  , aO = function(t) {
    return {
        type: "DROP_PENDING",
        payload: t
    }
}
  , v1 = function() {
    return {
        type: "DROP_ANIMATION_FINISHED",
        payload: null
    }
}
  , sO = function(e) {
    return function(t) {
        var r = t.getState
          , n = t.dispatch;
        return function(o) {
            return function(i) {
                if (i.type !== "LIFT") {
                    o(i);
                    return
                }
                var a = i.payload
                  , s = a.id
                  , l = a.clientSelection
                  , u = a.movementMode
                  , f = r();
                f.phase === "DROP_ANIMATING" && n(Up({
                    completed: f.completed
                })),
                r().phase !== "IDLE" && L(),
                n(Wp()),
                n(HA({
                    draggableId: s,
                    movementMode: u
                }));
                var d = {
                    shouldPublishImmediately: u === "SNAP"
                }
                  , c = {
                    draggableId: s,
                    scrollOptions: d
                }
                  , p = e.startPublishing(c)
                  , g = p.critical
                  , h = p.dimensions
                  , w = p.viewport;
                n(KA({
                    critical: g,
                    dimensions: h,
                    clientSelection: l,
                    movementMode: u,
                    viewport: w
                }))
            }
        }
    }
}
  , lO = function(e) {
    return function() {
        return function(t) {
            return function(r) {
                r.type === "INITIAL_PUBLISH" && e.dragging(),
                r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason),
                (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(),
                t(r)
            }
        }
    }
}
  , Vp = {
    outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
    drop: "cubic-bezier(.2,1,.1,1)"
}
  , ha = {
    opacity: {
        drop: 0,
        combining: .7
    },
    scale: {
        drop: .75
    }
}
  , Hp = {
    outOfTheWay: .2,
    minDropTime: .33,
    maxDropTime: .55
}
  , Tn = Hp.outOfTheWay + "s " + Vp.outOfTheWay
  , zi = {
    fluid: "opacity " + Tn,
    snap: "transform " + Tn + ", opacity " + Tn,
    drop: function(t) {
        var r = t + "s " + Vp.drop;
        return "transform " + r + ", opacity " + r
    },
    outOfTheWay: "transform " + Tn,
    placeholder: "height " + Tn + ", width " + Tn + ", margin " + Tn
}
  , jh = function(t) {
    return fn(t, Ue) ? null : "translate(" + t.x + "px, " + t.y + "px)"
}
  , Qd = {
    moveTo: jh,
    drop: function(t, r) {
        var n = jh(t);
        return n ? r ? n + " scale(" + ha.scale.drop + ")" : n : null
    }
}
  , Yd = Hp.minDropTime
  , h1 = Hp.maxDropTime
  , uO = h1 - Yd
  , Mh = 1500
  , cO = .6
  , dO = function(e) {
    var t = e.current
      , r = e.destination
      , n = e.reason
      , o = pa(t, r);
    if (o <= 0)
        return Yd;
    if (o >= Mh)
        return h1;
    var i = o / Mh
      , a = Yd + uO * i
      , s = n === "CANCEL" ? a * cO : a;
    return Number(s.toFixed(2))
}
  , fO = function(e) {
    var t = e.impact
      , r = e.draggable
      , n = e.dimensions
      , o = e.viewport
      , i = e.afterCritical
      , a = n.draggables
      , s = n.droppables
      , l = It(t)
      , u = l ? s[l] : null
      , f = s[r.descriptor.droppableId]
      , d = c1({
        impact: t,
        draggable: r,
        draggables: a,
        afterCritical: i,
        droppable: u || f,
        viewport: o
    })
      , c = Pt(d, r.client.borderBox.center);
    return c
}
  , pO = function(e) {
    var t = e.draggables
      , r = e.reason
      , n = e.lastImpact
      , o = e.home
      , i = e.viewport
      , a = e.onLiftImpact;
    if (!n.at || r !== "DROP") {
        var s = u1({
            draggables: t,
            impact: a,
            destination: o,
            viewport: i,
            forceShouldAnimate: !0
        });
        return {
            impact: s,
            didDropInsideDroppable: !1
        }
    }
    if (n.at.type === "REORDER")
        return {
            impact: n,
            didDropInsideDroppable: !0
        };
    var l = q({}, n, {
        displaced: ma
    });
    return {
        impact: l,
        didDropInsideDroppable: !0
    }
}
  , mO = function(e) {
    var t = e.getState
      , r = e.dispatch;
    return function(n) {
        return function(o) {
            if (o.type !== "DROP") {
                n(o);
                return
            }
            var i = t()
              , a = o.payload.reason;
            if (i.phase === "COLLECTING") {
                r(aO({
                    reason: a
                }));
                return
            }
            if (i.phase !== "IDLE") {
                var s = i.phase === "DROP_PENDING" && i.isWaiting;
                s && L(),
                i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || L();
                var l = i.critical
                  , u = i.dimensions
                  , f = u.draggables[i.critical.draggable.id]
                  , d = pO({
                    reason: a,
                    lastImpact: i.impact,
                    afterCritical: i.afterCritical,
                    onLiftImpact: i.onLiftImpact,
                    home: i.dimensions.droppables[i.critical.droppable.id],
                    viewport: i.viewport,
                    draggables: i.dimensions.draggables
                })
                  , c = d.impact
                  , p = d.didDropInsideDroppable
                  , g = p ? Lp(c) : null
                  , h = p ? Su(c) : null
                  , w = {
                    index: l.draggable.index,
                    droppableId: l.droppable.id
                }
                  , y = {
                    draggableId: f.descriptor.id,
                    type: f.descriptor.type,
                    source: w,
                    reason: a,
                    mode: i.movementMode,
                    destination: g,
                    combine: h
                }
                  , v = fO({
                    impact: c,
                    draggable: f,
                    dimensions: u,
                    viewport: i.viewport,
                    afterCritical: i.afterCritical
                })
                  , b = {
                    critical: i.critical,
                    afterCritical: i.afterCritical,
                    result: y,
                    impact: c
                }
                  , S = !fn(i.current.client.offset, v) || !!y.combine;
                if (!S) {
                    r(Up({
                        completed: b
                    }));
                    return
                }
                var C = dO({
                    current: i.current.client.offset,
                    destination: v,
                    reason: a
                })
                  , E = {
                    newHomeClientOffset: v,
                    dropDuration: C,
                    completed: b
                };
                r(iO(E))
            }
        }
    }
}
  , g1 = function() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    }
};
function vO(e) {
    return {
        eventName: "scroll",
        options: {
            passive: !0,
            capture: !1
        },
        fn: function(r) {
            r.target !== window && r.target !== window.document || e()
        }
    }
}
function hO(e) {
    var t = e.onWindowScroll;
    function r() {
        t(g1())
    }
    var n = fa(r)
      , o = vO(n)
      , i = dn;
    function a() {
        return i !== dn
    }
    function s() {
        a() && L(),
        i = zt(window, [o])
    }
    function l() {
        a() || L(),
        n.cancel(),
        i(),
        i = dn
    }
    return {
        start: s,
        stop: l,
        isActive: a
    }
}
var gO = function(t) {
    return t.type === "DROP_COMPLETE" || t.type === "DROP_ANIMATE" || t.type === "FLUSH"
}
  , yO = function(e) {
    var t = hO({
        onWindowScroll: function(n) {
            e.dispatch(ZA({
                newScroll: n
            }))
        }
    });
    return function(r) {
        return function(n) {
            !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(),
            t.isActive() && gO(n) && t.stop(),
            r(n)
        }
    }
}
  , xO = function(e) {
    var t = !1
      , r = !1
      , n = setTimeout(function() {
        r = !0
    })
      , o = function(a) {
        t || r || (t = !0,
        e(a),
        clearTimeout(n))
    };
    return o.wasCalled = function() {
        return t
    }
    ,
    o
}
  , wO = function() {
    var e = []
      , t = function(i) {
        var a = Mp(e, function(u) {
            return u.timerId === i
        });
        a === -1 && L();
        var s = e.splice(a, 1)
          , l = s[0];
        l.callback()
    }
      , r = function(i) {
        var a = setTimeout(function() {
            return t(a)
        })
          , s = {
            timerId: a,
            callback: i
        };
        e.push(s)
    }
      , n = function() {
        if (e.length) {
            var i = [].concat(e);
            e.length = 0,
            i.forEach(function(a) {
                clearTimeout(a.timerId),
                a.callback()
            })
        }
    };
    return {
        add: r,
        flush: n
    }
}
  , bO = function(t, r) {
    return t == null && r == null ? !0 : t == null || r == null ? !1 : t.droppableId === r.droppableId && t.index === r.index
}
  , SO = function(t, r) {
    return t == null && r == null ? !0 : t == null || r == null ? !1 : t.draggableId === r.draggableId && t.droppableId === r.droppableId
}
  , CO = function(t, r) {
    if (t === r)
        return !0;
    var n = t.draggable.id === r.draggable.id && t.draggable.droppableId === r.draggable.droppableId && t.draggable.type === r.draggable.type && t.draggable.index === r.draggable.index
      , o = t.droppable.id === r.droppable.id && t.droppable.type === r.droppable.type;
    return n && o
}
  , Si = function(t, r) {
    r()
}
  , vs = function(t, r) {
    return {
        draggableId: t.draggable.id,
        type: t.droppable.type,
        source: {
            droppableId: t.droppable.id,
            index: t.draggable.index
        },
        mode: r
    }
}
  , Ec = function(t, r, n, o) {
    if (!t) {
        n(o(r));
        return
    }
    var i = xO(n)
      , a = {
        announce: i
    };
    t(r, a),
    i.wasCalled() || n(o(r))
}
  , EO = function(e, t) {
    var r = wO()
      , n = null
      , o = function(c, p) {
        n && L(),
        Si("onBeforeCapture", function() {
            var g = e().onBeforeCapture;
            if (g) {
                var h = {
                    draggableId: c,
                    mode: p
                };
                g(h)
            }
        })
    }
      , i = function(c, p) {
        n && L(),
        Si("onBeforeDragStart", function() {
            var g = e().onBeforeDragStart;
            g && g(vs(c, p))
        })
    }
      , a = function(c, p) {
        n && L();
        var g = vs(c, p);
        n = {
            mode: p,
            lastCritical: c,
            lastLocation: g.source,
            lastCombine: null
        },
        r.add(function() {
            Si("onDragStart", function() {
                return Ec(e().onDragStart, g, t, Fs.onDragStart)
            })
        })
    }
      , s = function(c, p) {
        var g = Lp(p)
          , h = Su(p);
        n || L();
        var w = !CO(c, n.lastCritical);
        w && (n.lastCritical = c);
        var y = !bO(n.lastLocation, g);
        y && (n.lastLocation = g);
        var v = !SO(n.lastCombine, h);
        if (v && (n.lastCombine = h),
        !(!w && !y && !v)) {
            var b = q({}, vs(c, n.mode), {
                combine: h,
                destination: g
            });
            r.add(function() {
                Si("onDragUpdate", function() {
                    return Ec(e().onDragUpdate, b, t, Fs.onDragUpdate)
                })
            })
        }
    }
      , l = function() {
        n || L(),
        r.flush()
    }
      , u = function(c) {
        n || L(),
        n = null,
        Si("onDragEnd", function() {
            return Ec(e().onDragEnd, c, t, Fs.onDragEnd)
        })
    }
      , f = function() {
        if (n) {
            var c = q({}, vs(n.lastCritical, n.mode), {
                combine: null,
                destination: null,
                reason: "CANCEL"
            });
            u(c)
        }
    };
    return {
        beforeCapture: o,
        beforeStart: i,
        start: a,
        update: s,
        flush: l,
        drop: u,
        abort: f
    }
}
  , NO = function(e, t) {
    var r = EO(e, t);
    return function(n) {
        return function(o) {
            return function(i) {
                if (i.type === "BEFORE_INITIAL_CAPTURE") {
                    r.beforeCapture(i.payload.draggableId, i.payload.movementMode);
                    return
                }
                if (i.type === "INITIAL_PUBLISH") {
                    var a = i.payload.critical;
                    r.beforeStart(a, i.payload.movementMode),
                    o(i),
                    r.start(a, i.payload.movementMode);
                    return
                }
                if (i.type === "DROP_COMPLETE") {
                    var s = i.payload.completed.result;
                    r.flush(),
                    o(i),
                    r.drop(s);
                    return
                }
                if (o(i),
                i.type === "FLUSH") {
                    r.abort();
                    return
                }
                var l = n.getState();
                l.phase === "DRAGGING" && r.update(l.critical, l.impact)
            }
        }
    }
}
  , PO = function(e) {
    return function(t) {
        return function(r) {
            if (r.type !== "DROP_ANIMATION_FINISHED") {
                t(r);
                return
            }
            var n = e.getState();
            n.phase !== "DROP_ANIMATING" && L(),
            e.dispatch(Up({
                completed: n.completed
            }))
        }
    }
}
  , DO = function(e) {
    var t = null
      , r = null;
    function n() {
        r && (cancelAnimationFrame(r),
        r = null),
        t && (t(),
        t = null)
    }
    return function(o) {
        return function(i) {
            if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && n(),
            o(i),
            i.type === "DROP_ANIMATE") {
                var a = {
                    eventName: "scroll",
                    options: {
                        capture: !0,
                        passive: !1,
                        once: !0
                    },
                    fn: function() {
                        var l = e.getState();
                        l.phase === "DROP_ANIMATING" && e.dispatch(v1())
                    }
                };
                r = requestAnimationFrame(function() {
                    r = null,
                    t = zt(window, [a])
                })
            }
        }
    }
}
  , TO = function(e) {
    return function() {
        return function(t) {
            return function(r) {
                (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(),
                t(r)
            }
        }
    }
}
  , IO = function(e) {
    var t = !1;
    return function() {
        return function(r) {
            return function(n) {
                if (n.type === "INITIAL_PUBLISH") {
                    t = !0,
                    e.tryRecordFocus(n.payload.critical.draggable.id),
                    r(n),
                    e.tryRestoreFocusRecorded();
                    return
                }
                if (r(n),
                !!t) {
                    if (n.type === "FLUSH") {
                        t = !1,
                        e.tryRestoreFocusRecorded();
                        return
                    }
                    if (n.type === "DROP_COMPLETE") {
                        t = !1;
                        var o = n.payload.completed.result;
                        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId),
                        e.tryRestoreFocusRecorded()
                    }
                }
            }
        }
    }
}
  , RO = function(t) {
    return t.type === "DROP_COMPLETE" || t.type === "DROP_ANIMATE" || t.type === "FLUSH"
}
  , kO = function(e) {
    return function(t) {
        return function(r) {
            return function(n) {
                if (RO(n)) {
                    e.stop(),
                    r(n);
                    return
                }
                if (n.type === "INITIAL_PUBLISH") {
                    r(n);
                    var o = t.getState();
                    o.phase !== "DRAGGING" && L(),
                    e.start(o);
                    return
                }
                r(n),
                e.scroll(t.getState())
            }
        }
    }
}
  , AO = function(e) {
    return function(t) {
        return function(r) {
            if (t(r),
            r.type === "PUBLISH_WHILE_DRAGGING") {
                var n = e.getState();
                n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(m1({
                    reason: n.reason
                })))
            }
        }
    }
}
  , OO = Cb
  , jO = function(e) {
    var t = e.dimensionMarshal
      , r = e.focusMarshal
      , n = e.styleMarshal
      , o = e.getResponders
      , i = e.announce
      , a = e.autoScroller;
    return Sb(VA, OO(wR(lO(n), TO(t), sO(t), mO, PO, DO, AO, kO(a), yO, IO(r), NO(o, i))))
}
  , Nc = function() {
    return {
        additions: {},
        removals: {},
        modified: {}
    }
};
function MO(e) {
    var t = e.registry
      , r = e.callbacks
      , n = Nc()
      , o = null
      , i = function() {
        o || (r.collectionStarting(),
        o = requestAnimationFrame(function() {
            o = null;
            var f = n
              , d = f.additions
              , c = f.removals
              , p = f.modified
              , g = Object.keys(d).map(function(y) {
                return t.draggable.getById(y).getDimension(Ue)
            }).sort(function(y, v) {
                return y.descriptor.index - v.descriptor.index
            })
              , h = Object.keys(p).map(function(y) {
                var v = t.droppable.getById(y)
                  , b = v.callbacks.getScrollWhileDragging();
                return {
                    droppableId: y,
                    scroll: b
                }
            })
              , w = {
                additions: g,
                removals: Object.keys(c),
                modified: h
            };
            n = Nc(),
            r.publish(w)
        }))
    }
      , a = function(f) {
        var d = f.descriptor.id;
        n.additions[d] = f,
        n.modified[f.descriptor.droppableId] = !0,
        n.removals[d] && delete n.removals[d],
        i()
    }
      , s = function(f) {
        var d = f.descriptor;
        n.removals[d.id] = !0,
        n.modified[d.droppableId] = !0,
        n.additions[d.id] && delete n.additions[d.id],
        i()
    }
      , l = function() {
        o && (cancelAnimationFrame(o),
        o = null,
        n = Nc())
    };
    return {
        add: a,
        remove: s,
        stop: l
    }
}
var y1 = function(e) {
    var t = e.scrollHeight
      , r = e.scrollWidth
      , n = e.height
      , o = e.width
      , i = Pt({
        x: r,
        y: t
    }, {
        x: o,
        y: n
    })
      , a = {
        x: Math.max(0, i.x),
        y: Math.max(0, i.y)
    };
    return a
}
  , x1 = function() {
    var e = document.documentElement;
    return e || L(),
    e
}
  , w1 = function() {
    var e = x1()
      , t = y1({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight
    });
    return t
}
  , LO = function() {
    var e = g1()
      , t = w1()
      , r = e.y
      , n = e.x
      , o = x1()
      , i = o.clientWidth
      , a = o.clientHeight
      , s = n + i
      , l = r + a
      , u = tr({
        top: r,
        left: n,
        right: s,
        bottom: l
    })
      , f = {
        frame: u,
        scroll: {
            initial: e,
            current: e,
            max: t,
            diff: {
                value: Ue,
                displacement: Ue
            }
        }
    };
    return f
}
  , BO = function(e) {
    var t = e.critical
      , r = e.scrollOptions
      , n = e.registry
      , o = LO()
      , i = o.scroll.current
      , a = t.droppable
      , s = n.droppable.getAllByType(a.type).map(function(d) {
        return d.callbacks.getDimensionAndWatchScroll(i, r)
    })
      , l = n.draggable.getAllByType(t.draggable.type).map(function(d) {
        return d.getDimension(i)
    })
      , u = {
        draggables: Qb(l),
        droppables: qb(s)
    }
      , f = {
        dimensions: u,
        critical: t,
        viewport: o
    };
    return f
};
function Lh(e, t, r) {
    if (r.descriptor.id === t.id || r.descriptor.type !== t.type)
        return !1;
    var n = e.droppable.getById(r.descriptor.droppableId);
    return n.descriptor.mode === "virtual"
}
var FO = function(e, t) {
    var r = null
      , n = MO({
        callbacks: {
            publish: t.publishWhileDragging,
            collectionStarting: t.collectionStarting
        },
        registry: e
    })
      , o = function(p, g) {
        e.droppable.exists(p) || L(),
        r && t.updateDroppableIsEnabled({
            id: p,
            isEnabled: g
        })
    }
      , i = function(p, g) {
        r && (e.droppable.exists(p) || L(),
        t.updateDroppableIsCombineEnabled({
            id: p,
            isCombineEnabled: g
        }))
    }
      , a = function(p, g) {
        r && (e.droppable.exists(p) || L(),
        t.updateDroppableScroll({
            id: p,
            newScroll: g
        }))
    }
      , s = function(p, g) {
        r && e.droppable.getById(p).callbacks.scroll(g)
    }
      , l = function() {
        if (r) {
            n.stop();
            var p = r.critical.droppable;
            e.droppable.getAllByType(p.type).forEach(function(g) {
                return g.callbacks.dragStopped()
            }),
            r.unsubscribe(),
            r = null
        }
    }
      , u = function(p) {
        r || L();
        var g = r.critical.draggable;
        p.type === "ADDITION" && Lh(e, g, p.value) && n.add(p.value),
        p.type === "REMOVAL" && Lh(e, g, p.value) && n.remove(p.value)
    }
      , f = function(p) {
        r && L();
        var g = e.draggable.getById(p.draggableId)
          , h = e.droppable.getById(g.descriptor.droppableId)
          , w = {
            draggable: g.descriptor,
            droppable: h.descriptor
        }
          , y = e.subscribe(u);
        return r = {
            critical: w,
            unsubscribe: y
        },
        BO({
            critical: w,
            registry: e,
            scrollOptions: p.scrollOptions
        })
    }
      , d = {
        updateDroppableIsEnabled: o,
        updateDroppableIsCombineEnabled: i,
        scrollDroppable: s,
        updateDroppableScroll: a,
        startPublishing: f,
        stopPublishing: l
    };
    return d
}
  , b1 = function(e, t) {
    return e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP"
}
  , _O = function(e) {
    window.scrollBy(e.x, e.y)
}
  , $O = We(function(e) {
    return bu(e).filter(function(t) {
        return !(!t.isEnabled || !t.frame)
    })
})
  , zO = function(t, r) {
    var n = Dn($O(r), function(o) {
        return o.frame || L(),
        i1(o.frame.pageMarginBox)(t)
    });
    return n
}
  , WO = function(e) {
    var t = e.center
      , r = e.destination
      , n = e.droppables;
    if (r) {
        var o = n[r];
        return o.frame ? o : null
    }
    var i = zO(t, n);
    return i
}
  , pn = {
    startFromPercentage: .25,
    maxScrollAtPercentage: .05,
    maxPixelScroll: 28,
    ease: function(t) {
        return Math.pow(t, 2)
    },
    durationDampening: {
        stopDampeningAt: 1200,
        accelerateAt: 360
    }
}
  , UO = function(e, t) {
    var r = e[t.size] * pn.startFromPercentage
      , n = e[t.size] * pn.maxScrollAtPercentage
      , o = {
        startScrollingFrom: r,
        maxScrollValueAt: n
    };
    return o
}
  , S1 = function(e) {
    var t = e.startOfRange
      , r = e.endOfRange
      , n = e.current
      , o = r - t;
    if (o === 0)
        return 0;
    var i = n - t
      , a = i / o;
    return a
}
  , Gp = 1
  , VO = function(e, t) {
    if (e > t.startScrollingFrom)
        return 0;
    if (e <= t.maxScrollValueAt)
        return pn.maxPixelScroll;
    if (e === t.startScrollingFrom)
        return Gp;
    var r = S1({
        startOfRange: t.maxScrollValueAt,
        endOfRange: t.startScrollingFrom,
        current: e
    })
      , n = 1 - r
      , o = pn.maxPixelScroll * pn.ease(n);
    return Math.ceil(o)
}
  , Bh = pn.durationDampening.accelerateAt
  , Fh = pn.durationDampening.stopDampeningAt
  , HO = function(e, t) {
    var r = t
      , n = Fh
      , o = Date.now()
      , i = o - r;
    if (i >= Fh)
        return e;
    if (i < Bh)
        return Gp;
    var a = S1({
        startOfRange: Bh,
        endOfRange: n,
        current: i
    })
      , s = e * pn.ease(a);
    return Math.ceil(s)
}
  , _h = function(e) {
    var t = e.distanceToEdge
      , r = e.thresholds
      , n = e.dragStartTime
      , o = e.shouldUseTimeDampening
      , i = VO(t, r);
    return i === 0 ? 0 : o ? Math.max(HO(i, n), Gp) : i
}
  , $h = function(e) {
    var t = e.container
      , r = e.distanceToEdges
      , n = e.dragStartTime
      , o = e.axis
      , i = e.shouldUseTimeDampening
      , a = UO(t, o)
      , s = r[o.end] < r[o.start];
    return s ? _h({
        distanceToEdge: r[o.end],
        thresholds: a,
        dragStartTime: n,
        shouldUseTimeDampening: i
    }) : -1 * _h({
        distanceToEdge: r[o.start],
        thresholds: a,
        dragStartTime: n,
        shouldUseTimeDampening: i
    })
}
  , GO = function(e) {
    var t = e.container
      , r = e.subject
      , n = e.proposedScroll
      , o = r.height > t.height
      , i = r.width > t.width;
    return !i && !o ? n : i && o ? null : {
        x: i ? 0 : n.x,
        y: o ? 0 : n.y
    }
}
  , KO = Gb(function(e) {
    return e === 0 ? 0 : e
})
  , C1 = function(e) {
    var t = e.dragStartTime
      , r = e.container
      , n = e.subject
      , o = e.center
      , i = e.shouldUseTimeDampening
      , a = {
        top: o.y - r.top,
        right: r.right - o.x,
        bottom: r.bottom - o.y,
        left: o.x - r.left
    }
      , s = $h({
        container: r,
        distanceToEdges: a,
        dragStartTime: t,
        axis: Bp,
        shouldUseTimeDampening: i
    })
      , l = $h({
        container: r,
        distanceToEdges: a,
        dragStartTime: t,
        axis: Jb,
        shouldUseTimeDampening: i
    })
      , u = KO({
        x: l,
        y: s
    });
    if (fn(u, Ue))
        return null;
    var f = GO({
        container: r,
        subject: n,
        proposedScroll: u
    });
    return f ? fn(f, Ue) ? null : f : null
}
  , qO = Gb(function(e) {
    return e === 0 ? 0 : e > 0 ? 1 : -1
})
  , Kp = function() {
    var e = function(r, n) {
        return r < 0 ? r : r > n ? r - n : 0
    };
    return function(t) {
        var r = t.current
          , n = t.max
          , o = t.change
          , i = Qe(r, o)
          , a = {
            x: e(i.x, n.x),
            y: e(i.y, n.y)
        };
        return fn(a, Ue) ? null : a
    }
}()
  , E1 = function(t) {
    var r = t.max
      , n = t.current
      , o = t.change
      , i = {
        x: Math.max(n.x, r.x),
        y: Math.max(n.y, r.y)
    }
      , a = qO(o)
      , s = Kp({
        max: i,
        current: n,
        change: a
    });
    return !s || a.x !== 0 && s.x === 0 || a.y !== 0 && s.y === 0
}
  , qp = function(t, r) {
    return E1({
        current: t.scroll.current,
        max: t.scroll.max,
        change: r
    })
}
  , QO = function(t, r) {
    if (!qp(t, r))
        return null;
    var n = t.scroll.max
      , o = t.scroll.current;
    return Kp({
        current: o,
        max: n,
        change: r
    })
}
  , Qp = function(t, r) {
    var n = t.frame;
    return n ? E1({
        current: n.scroll.current,
        max: n.scroll.max,
        change: r
    }) : !1
}
  , YO = function(t, r) {
    var n = t.frame;
    return !n || !Qp(t, r) ? null : Kp({
        current: n.scroll.current,
        max: n.scroll.max,
        change: r
    })
}
  , XO = function(e) {
    var t = e.viewport
      , r = e.subject
      , n = e.center
      , o = e.dragStartTime
      , i = e.shouldUseTimeDampening
      , a = C1({
        dragStartTime: o,
        container: t.frame,
        subject: r,
        center: n,
        shouldUseTimeDampening: i
    });
    return a && qp(t, a) ? a : null
}
  , JO = function(e) {
    var t = e.droppable
      , r = e.subject
      , n = e.center
      , o = e.dragStartTime
      , i = e.shouldUseTimeDampening
      , a = t.frame;
    if (!a)
        return null;
    var s = C1({
        dragStartTime: o,
        container: a.pageMarginBox,
        subject: r,
        center: n,
        shouldUseTimeDampening: i
    });
    return s && Qp(t, s) ? s : null
}
  , zh = function(e) {
    var t = e.state
      , r = e.dragStartTime
      , n = e.shouldUseTimeDampening
      , o = e.scrollWindow
      , i = e.scrollDroppable
      , a = t.current.page.borderBoxCenter
      , s = t.dimensions.draggables[t.critical.draggable.id]
      , l = s.page.marginBox;
    if (t.isWindowScrollAllowed) {
        var u = t.viewport
          , f = XO({
            dragStartTime: r,
            viewport: u,
            subject: l,
            center: a,
            shouldUseTimeDampening: n
        });
        if (f) {
            o(f);
            return
        }
    }
    var d = WO({
        center: a,
        destination: It(t.impact),
        droppables: t.dimensions.droppables
    });
    if (d) {
        var c = JO({
            dragStartTime: r,
            droppable: d,
            subject: l,
            center: a,
            shouldUseTimeDampening: n
        });
        c && i(d.descriptor.id, c)
    }
}
  , ZO = function(e) {
    var t = e.scrollWindow
      , r = e.scrollDroppable
      , n = fa(t)
      , o = fa(r)
      , i = null
      , a = function(f) {
        i || L();
        var d = i
          , c = d.shouldUseTimeDampening
          , p = d.dragStartTime;
        zh({
            state: f,
            scrollWindow: n,
            scrollDroppable: o,
            dragStartTime: p,
            shouldUseTimeDampening: c
        })
    }
      , s = function(f) {
        i && L();
        var d = Date.now()
          , c = !1
          , p = function() {
            c = !0
        };
        zh({
            state: f,
            dragStartTime: 0,
            shouldUseTimeDampening: !1,
            scrollWindow: p,
            scrollDroppable: p
        }),
        i = {
            dragStartTime: d,
            shouldUseTimeDampening: c
        },
        c && a(f)
    }
      , l = function() {
        i && (n.cancel(),
        o.cancel(),
        i = null)
    };
    return {
        start: s,
        stop: l,
        scroll: a
    }
}
  , ej = function(e) {
    var t = e.move
      , r = e.scrollDroppable
      , n = e.scrollWindow
      , o = function(u, f) {
        var d = Qe(u.current.client.selection, f);
        t({
            client: d
        })
    }
      , i = function(u, f) {
        if (!Qp(u, f))
            return f;
        var d = YO(u, f);
        if (!d)
            return r(u.descriptor.id, f),
            null;
        var c = Pt(f, d);
        r(u.descriptor.id, c);
        var p = Pt(f, c);
        return p
    }
      , a = function(u, f, d) {
        if (!u || !qp(f, d))
            return d;
        var c = QO(f, d);
        if (!c)
            return n(d),
            null;
        var p = Pt(d, c);
        n(p);
        var g = Pt(d, p);
        return g
    }
      , s = function(u) {
        var f = u.scrollJumpRequest;
        if (f) {
            var d = It(u.impact);
            d || L();
            var c = i(u.dimensions.droppables[d], f);
            if (c) {
                var p = u.viewport
                  , g = a(u.isWindowScrollAllowed, p, c);
                g && o(u, g)
            }
        }
    };
    return s
}
  , tj = function(e) {
    var t = e.scrollDroppable
      , r = e.scrollWindow
      , n = e.move
      , o = ZO({
        scrollWindow: r,
        scrollDroppable: t
    })
      , i = ej({
        move: n,
        scrollWindow: r,
        scrollDroppable: t
    })
      , a = function(u) {
        if (u.phase === "DRAGGING") {
            if (u.movementMode === "FLUID") {
                o.scroll(u);
                return
            }
            u.scrollJumpRequest && i(u)
        }
    }
      , s = {
        scroll: a,
        start: o.start,
        stop: o.stop
    };
    return s
}
  , Yo = "data-rbd"
  , Xo = function() {
    var e = Yo + "-drag-handle";
    return {
        base: e,
        draggableId: e + "-draggable-id",
        contextId: e + "-context-id"
    }
}()
  , Xd = function() {
    var e = Yo + "-draggable";
    return {
        base: e,
        contextId: e + "-context-id",
        id: e + "-id"
    }
}()
  , rj = function() {
    var e = Yo + "-droppable";
    return {
        base: e,
        contextId: e + "-context-id",
        id: e + "-id"
    }
}()
  , Wh = {
    contextId: Yo + "-scroll-container-context-id"
}
  , nj = function(t) {
    return function(r) {
        return "[" + r + '="' + t + '"]'
    }
}
  , Ci = function(t, r) {
    return t.map(function(n) {
        var o = n.styles[r];
        return o ? n.selector + " { " + o + " }" : ""
    }).join(" ")
}
  , oj = "pointer-events: none;"
  , ij = function(e) {
    var t = nj(e)
      , r = function() {
        var s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
            selector: t(Xo.contextId),
            styles: {
                always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                resting: s,
                dragging: oj,
                dropAnimating: s
            }
        }
    }()
      , n = function() {
        var s = `
      transition: ` + zi.outOfTheWay + `;
    `;
        return {
            selector: t(Xd.contextId),
            styles: {
                dragging: s,
                dropAnimating: s,
                userCancel: s
            }
        }
    }()
      , o = {
        selector: t(rj.contextId),
        styles: {
            always: "overflow-anchor: none;"
        }
    }
      , i = {
        selector: "body",
        styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
        }
    }
      , a = [n, r, o, i];
    return {
        always: Ci(a, "always"),
        resting: Ci(a, "resting"),
        dragging: Ci(a, "dragging"),
        dropAnimating: Ci(a, "dropAnimating"),
        userCancel: Ci(a, "userCancel")
    }
}
  , Rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? x.useLayoutEffect : x.useEffect
  , Pc = function() {
    var t = document.querySelector("head");
    return t || L(),
    t
}
  , Uh = function(t) {
    var r = document.createElement("style");
    return t && r.setAttribute("nonce", t),
    r.type = "text/css",
    r
};
function aj(e, t) {
    var r = se(function() {
        return ij(e)
    }, [e])
      , n = x.useRef(null)
      , o = x.useRef(null)
      , i = G(We(function(d) {
        var c = o.current;
        c || L(),
        c.textContent = d
    }), [])
      , a = G(function(d) {
        var c = n.current;
        c || L(),
        c.textContent = d
    }, []);
    Rt(function() {
        !n.current && !o.current || L();
        var d = Uh(t)
          , c = Uh(t);
        return n.current = d,
        o.current = c,
        d.setAttribute(Yo + "-always", e),
        c.setAttribute(Yo + "-dynamic", e),
        Pc().appendChild(d),
        Pc().appendChild(c),
        a(r.always),
        i(r.resting),
        function() {
            var p = function(h) {
                var w = h.current;
                w || L(),
                Pc().removeChild(w),
                h.current = null
            };
            p(n),
            p(o)
        }
    }, [t, a, i, r.always, r.resting, e]);
    var s = G(function() {
        return i(r.dragging)
    }, [i, r.dragging])
      , l = G(function(d) {
        if (d === "DROP") {
            i(r.dropAnimating);
            return
        }
        i(r.userCancel)
    }, [i, r.dropAnimating, r.userCancel])
      , u = G(function() {
        o.current && i(r.resting)
    }, [i, r.resting])
      , f = se(function() {
        return {
            dragging: s,
            dropping: l,
            resting: u
        }
    }, [s, l, u]);
    return f
}
var N1 = function(e) {
    return e && e.ownerDocument ? e.ownerDocument.defaultView : window
};
function Nu(e) {
    return e instanceof N1(e).HTMLElement
}
function sj(e, t) {
    var r = "[" + Xo.contextId + '="' + e + '"]'
      , n = Kb(document.querySelectorAll(r));
    if (!n.length)
        return null;
    var o = Dn(n, function(i) {
        return i.getAttribute(Xo.draggableId) === t
    });
    return !o || !Nu(o) ? null : o
}
function lj(e) {
    var t = x.useRef({})
      , r = x.useRef(null)
      , n = x.useRef(null)
      , o = x.useRef(!1)
      , i = G(function(c, p) {
        var g = {
            id: c,
            focus: p
        };
        return t.current[c] = g,
        function() {
            var w = t.current
              , y = w[c];
            y !== g && delete w[c]
        }
    }, [])
      , a = G(function(c) {
        var p = sj(e, c);
        p && p !== document.activeElement && p.focus()
    }, [e])
      , s = G(function(c, p) {
        r.current === c && (r.current = p)
    }, [])
      , l = G(function() {
        n.current || o.current && (n.current = requestAnimationFrame(function() {
            n.current = null;
            var c = r.current;
            c && a(c)
        }))
    }, [a])
      , u = G(function(c) {
        r.current = null;
        var p = document.activeElement;
        p && p.getAttribute(Xo.draggableId) === c && (r.current = c)
    }, []);
    Rt(function() {
        return o.current = !0,
        function() {
            o.current = !1;
            var c = n.current;
            c && cancelAnimationFrame(c)
        }
    }, []);
    var f = se(function() {
        return {
            register: i,
            tryRecordFocus: u,
            tryRestoreFocusRecorded: l,
            tryShiftRecord: s
        }
    }, [i, u, l, s]);
    return f
}
function uj() {
    var e = {
        draggables: {},
        droppables: {}
    }
      , t = [];
    function r(d) {
        return t.push(d),
        function() {
            var p = t.indexOf(d);
            p !== -1 && t.splice(p, 1)
        }
    }
    function n(d) {
        t.length && t.forEach(function(c) {
            return c(d)
        })
    }
    function o(d) {
        return e.draggables[d] || null
    }
    function i(d) {
        var c = o(d);
        return c || L(),
        c
    }
    var a = {
        register: function(c) {
            e.draggables[c.descriptor.id] = c,
            n({
                type: "ADDITION",
                value: c
            })
        },
        update: function(c, p) {
            var g = e.draggables[p.descriptor.id];
            g && g.uniqueId === c.uniqueId && (delete e.draggables[p.descriptor.id],
            e.draggables[c.descriptor.id] = c)
        },
        unregister: function(c) {
            var p = c.descriptor.id
              , g = o(p);
            g && c.uniqueId === g.uniqueId && (delete e.draggables[p],
            n({
                type: "REMOVAL",
                value: c
            }))
        },
        getById: i,
        findById: o,
        exists: function(c) {
            return !!o(c)
        },
        getAllByType: function(c) {
            return El(e.draggables).filter(function(p) {
                return p.descriptor.type === c
            })
        }
    };
    function s(d) {
        return e.droppables[d] || null
    }
    function l(d) {
        var c = s(d);
        return c || L(),
        c
    }
    var u = {
        register: function(c) {
            e.droppables[c.descriptor.id] = c
        },
        unregister: function(c) {
            var p = s(c.descriptor.id);
            p && c.uniqueId === p.uniqueId && delete e.droppables[c.descriptor.id]
        },
        getById: l,
        findById: s,
        exists: function(c) {
            return !!s(c)
        },
        getAllByType: function(c) {
            return El(e.droppables).filter(function(p) {
                return p.descriptor.type === c
            })
        }
    };
    function f() {
        e.draggables = {},
        e.droppables = {},
        t.length = 0
    }
    return {
        draggable: a,
        droppable: u,
        subscribe: r,
        clean: f
    }
}
function cj() {
    var e = se(uj, []);
    return x.useEffect(function() {
        return function() {
            requestAnimationFrame(e.clean)
        }
    }, [e]),
    e
}
var Yp = R.createContext(null)
  , Pl = function() {
    var e = document.body;
    return e || L(),
    e
}
  , dj = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)"
}
  , fj = function(t) {
    return "rbd-announcement-" + t
};
function pj(e) {
    var t = se(function() {
        return fj(e)
    }, [e])
      , r = x.useRef(null);
    x.useEffect(function() {
        var i = document.createElement("div");
        return r.current = i,
        i.id = t,
        i.setAttribute("aria-live", "assertive"),
        i.setAttribute("aria-atomic", "true"),
        q(i.style, dj),
        Pl().appendChild(i),
        function() {
            setTimeout(function() {
                var l = Pl();
                l.contains(i) && l.removeChild(i),
                i === r.current && (r.current = null)
            })
        }
    }, [t]);
    var n = G(function(o) {
        var i = r.current;
        if (i) {
            i.textContent = o;
            return
        }
    }, []);
    return n
}
var mj = 0
  , vj = {
    separator: "::"
};
function Xp(e, t) {
    return t === void 0 && (t = vj),
    se(function() {
        return "" + e + t.separator + mj++
    }, [t.separator, e])
}
function hj(e) {
    var t = e.contextId
      , r = e.uniqueId;
    return "rbd-hidden-text-" + t + "-" + r
}
function gj(e) {
    var t = e.contextId
      , r = e.text
      , n = Xp("hidden-text", {
        separator: "-"
    })
      , o = se(function() {
        return hj({
            contextId: t,
            uniqueId: n
        })
    }, [n, t]);
    return x.useEffect(function() {
        var a = document.createElement("div");
        return a.id = o,
        a.textContent = r,
        a.style.display = "none",
        Pl().appendChild(a),
        function() {
            var l = Pl();
            l.contains(a) && l.removeChild(a)
        }
    }, [o, r]),
    o
}
var Pu = R.createContext(null);
function P1(e) {
    var t = x.useRef(e);
    return x.useEffect(function() {
        t.current = e
    }),
    t
}
function yj() {
    var e = null;
    function t() {
        return !!e
    }
    function r(a) {
        return a === e
    }
    function n(a) {
        e && L();
        var s = {
            abandon: a
        };
        return e = s,
        s
    }
    function o() {
        e || L(),
        e = null
    }
    function i() {
        e && (e.abandon(),
        o())
    }
    return {
        isClaimed: t,
        isActive: r,
        claim: n,
        release: o,
        tryAbandon: i
    }
}
var xj = 9, wj = 13, Jp = 27, D1 = 32, bj = 33, Sj = 34, Cj = 35, Ej = 36, Nj = 37, Pj = 38, Dj = 39, Tj = 40, hs, Ij = (hs = {},
hs[wj] = !0,
hs[xj] = !0,
hs), T1 = function(e) {
    Ij[e.keyCode] && e.preventDefault()
}, Du = function() {
    var e = "visibilitychange";
    if (typeof document > "u")
        return e;
    var t = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e]
      , r = Dn(t, function(n) {
        return "on" + n in document
    });
    return r || e
}(), I1 = 0, Vh = 5;
function Rj(e, t) {
    return Math.abs(t.x - e.x) >= Vh || Math.abs(t.y - e.y) >= Vh
}
var Hh = {
    type: "IDLE"
};
function kj(e) {
    var t = e.cancel
      , r = e.completed
      , n = e.getPhase
      , o = e.setPhase;
    return [{
        eventName: "mousemove",
        fn: function(a) {
            var s = a.button
              , l = a.clientX
              , u = a.clientY;
            if (s === I1) {
                var f = {
                    x: l,
                    y: u
                }
                  , d = n();
                if (d.type === "DRAGGING") {
                    a.preventDefault(),
                    d.actions.move(f);
                    return
                }
                d.type !== "PENDING" && L();
                var c = d.point;
                if (Rj(c, f)) {
                    a.preventDefault();
                    var p = d.actions.fluidLift(f);
                    o({
                        type: "DRAGGING",
                        actions: p
                    })
                }
            }
        }
    }, {
        eventName: "mouseup",
        fn: function(a) {
            var s = n();
            if (s.type !== "DRAGGING") {
                t();
                return
            }
            a.preventDefault(),
            s.actions.drop({
                shouldBlockNextClick: !0
            }),
            r()
        }
    }, {
        eventName: "mousedown",
        fn: function(a) {
            n().type === "DRAGGING" && a.preventDefault(),
            t()
        }
    }, {
        eventName: "keydown",
        fn: function(a) {
            var s = n();
            if (s.type === "PENDING") {
                t();
                return
            }
            if (a.keyCode === Jp) {
                a.preventDefault(),
                t();
                return
            }
            T1(a)
        }
    }, {
        eventName: "resize",
        fn: t
    }, {
        eventName: "scroll",
        options: {
            passive: !0,
            capture: !1
        },
        fn: function() {
            n().type === "PENDING" && t()
        }
    }, {
        eventName: "webkitmouseforcedown",
        fn: function(a) {
            var s = n();
            if (s.type === "IDLE" && L(),
            s.actions.shouldRespectForcePress()) {
                t();
                return
            }
            a.preventDefault()
        }
    }, {
        eventName: Du,
        fn: t
    }]
}
function Aj(e) {
    var t = x.useRef(Hh)
      , r = x.useRef(dn)
      , n = se(function() {
        return {
            eventName: "mousedown",
            fn: function(d) {
                if (!d.defaultPrevented && d.button === I1 && !(d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)) {
                    var c = e.findClosestDraggableId(d);
                    if (c) {
                        var p = e.tryGetLock(c, a, {
                            sourceEvent: d
                        });
                        if (p) {
                            d.preventDefault();
                            var g = {
                                x: d.clientX,
                                y: d.clientY
                            };
                            r.current(),
                            u(p, g)
                        }
                    }
                }
            }
        }
    }, [e])
      , o = se(function() {
        return {
            eventName: "webkitmouseforcewillbegin",
            fn: function(d) {
                if (!d.defaultPrevented) {
                    var c = e.findClosestDraggableId(d);
                    if (c) {
                        var p = e.findOptionsForDraggable(c);
                        p && (p.shouldRespectForcePress || e.canGetLock(c) && d.preventDefault())
                    }
                }
            }
        }
    }, [e])
      , i = G(function() {
        var d = {
            passive: !1,
            capture: !0
        };
        r.current = zt(window, [o, n], d)
    }, [o, n])
      , a = G(function() {
        var f = t.current;
        f.type !== "IDLE" && (t.current = Hh,
        r.current(),
        i())
    }, [i])
      , s = G(function() {
        var f = t.current;
        a(),
        f.type === "DRAGGING" && f.actions.cancel({
            shouldBlockNextClick: !0
        }),
        f.type === "PENDING" && f.actions.abort()
    }, [a])
      , l = G(function() {
        var d = {
            capture: !0,
            passive: !1
        }
          , c = kj({
            cancel: s,
            completed: a,
            getPhase: function() {
                return t.current
            },
            setPhase: function(g) {
                t.current = g
            }
        });
        r.current = zt(window, c, d)
    }, [s, a])
      , u = G(function(d, c) {
        t.current.type !== "IDLE" && L(),
        t.current = {
            type: "PENDING",
            point: c,
            actions: d
        },
        l()
    }, [l]);
    Rt(function() {
        return i(),
        function() {
            r.current()
        }
    }, [i])
}
var so;
function Oj() {}
var jj = (so = {},
so[Sj] = !0,
so[bj] = !0,
so[Ej] = !0,
so[Cj] = !0,
so);
function Mj(e, t) {
    function r() {
        t(),
        e.cancel()
    }
    function n() {
        t(),
        e.drop()
    }
    return [{
        eventName: "keydown",
        fn: function(i) {
            if (i.keyCode === Jp) {
                i.preventDefault(),
                r();
                return
            }
            if (i.keyCode === D1) {
                i.preventDefault(),
                n();
                return
            }
            if (i.keyCode === Tj) {
                i.preventDefault(),
                e.moveDown();
                return
            }
            if (i.keyCode === Pj) {
                i.preventDefault(),
                e.moveUp();
                return
            }
            if (i.keyCode === Dj) {
                i.preventDefault(),
                e.moveRight();
                return
            }
            if (i.keyCode === Nj) {
                i.preventDefault(),
                e.moveLeft();
                return
            }
            if (jj[i.keyCode]) {
                i.preventDefault();
                return
            }
            T1(i)
        }
    }, {
        eventName: "mousedown",
        fn: r
    }, {
        eventName: "mouseup",
        fn: r
    }, {
        eventName: "click",
        fn: r
    }, {
        eventName: "touchstart",
        fn: r
    }, {
        eventName: "resize",
        fn: r
    }, {
        eventName: "wheel",
        fn: r,
        options: {
            passive: !0
        }
    }, {
        eventName: Du,
        fn: r
    }]
}
function Lj(e) {
    var t = x.useRef(Oj)
      , r = se(function() {
        return {
            eventName: "keydown",
            fn: function(i) {
                if (i.defaultPrevented || i.keyCode !== D1)
                    return;
                var a = e.findClosestDraggableId(i);
                if (!a)
                    return;
                var s = e.tryGetLock(a, f, {
                    sourceEvent: i
                });
                if (!s)
                    return;
                i.preventDefault();
                var l = !0
                  , u = s.snapLift();
                t.current();
                function f() {
                    l || L(),
                    l = !1,
                    t.current(),
                    n()
                }
                t.current = zt(window, Mj(u, f), {
                    capture: !0,
                    passive: !1
                })
            }
        }
    }, [e])
      , n = G(function() {
        var i = {
            passive: !1,
            capture: !0
        };
        t.current = zt(window, [r], i)
    }, [r]);
    Rt(function() {
        return n(),
        function() {
            t.current()
        }
    }, [n])
}
var Dc = {
    type: "IDLE"
}
  , Bj = 120
  , Fj = .15;
function _j(e) {
    var t = e.cancel
      , r = e.getPhase;
    return [{
        eventName: "orientationchange",
        fn: t
    }, {
        eventName: "resize",
        fn: t
    }, {
        eventName: "contextmenu",
        fn: function(o) {
            o.preventDefault()
        }
    }, {
        eventName: "keydown",
        fn: function(o) {
            if (r().type !== "DRAGGING") {
                t();
                return
            }
            o.keyCode === Jp && o.preventDefault(),
            t()
        }
    }, {
        eventName: Du,
        fn: t
    }]
}
function $j(e) {
    var t = e.cancel
      , r = e.completed
      , n = e.getPhase;
    return [{
        eventName: "touchmove",
        options: {
            capture: !1
        },
        fn: function(i) {
            var a = n();
            if (a.type !== "DRAGGING") {
                t();
                return
            }
            a.hasMoved = !0;
            var s = i.touches[0]
              , l = s.clientX
              , u = s.clientY
              , f = {
                x: l,
                y: u
            };
            i.preventDefault(),
            a.actions.move(f)
        }
    }, {
        eventName: "touchend",
        fn: function(i) {
            var a = n();
            if (a.type !== "DRAGGING") {
                t();
                return
            }
            i.preventDefault(),
            a.actions.drop({
                shouldBlockNextClick: !0
            }),
            r()
        }
    }, {
        eventName: "touchcancel",
        fn: function(i) {
            if (n().type !== "DRAGGING") {
                t();
                return
            }
            i.preventDefault(),
            t()
        }
    }, {
        eventName: "touchforcechange",
        fn: function(i) {
            var a = n();
            a.type === "IDLE" && L();
            var s = i.touches[0];
            if (s) {
                var l = s.force >= Fj;
                if (l) {
                    var u = a.actions.shouldRespectForcePress();
                    if (a.type === "PENDING") {
                        u && t();
                        return
                    }
                    if (u) {
                        if (a.hasMoved) {
                            i.preventDefault();
                            return
                        }
                        t();
                        return
                    }
                    i.preventDefault()
                }
            }
        }
    }, {
        eventName: Du,
        fn: t
    }]
}
function zj(e) {
    var t = x.useRef(Dc)
      , r = x.useRef(dn)
      , n = G(function() {
        return t.current
    }, [])
      , o = G(function(p) {
        t.current = p
    }, [])
      , i = se(function() {
        return {
            eventName: "touchstart",
            fn: function(p) {
                if (!p.defaultPrevented) {
                    var g = e.findClosestDraggableId(p);
                    if (g) {
                        var h = e.tryGetLock(g, s, {
                            sourceEvent: p
                        });
                        if (h) {
                            var w = p.touches[0]
                              , y = w.clientX
                              , v = w.clientY
                              , b = {
                                x: y,
                                y: v
                            };
                            r.current(),
                            d(h, b)
                        }
                    }
                }
            }
        }
    }, [e])
      , a = G(function() {
        var p = {
            capture: !0,
            passive: !1
        };
        r.current = zt(window, [i], p)
    }, [i])
      , s = G(function() {
        var c = t.current;
        c.type !== "IDLE" && (c.type === "PENDING" && clearTimeout(c.longPressTimerId),
        o(Dc),
        r.current(),
        a())
    }, [a, o])
      , l = G(function() {
        var c = t.current;
        s(),
        c.type === "DRAGGING" && c.actions.cancel({
            shouldBlockNextClick: !0
        }),
        c.type === "PENDING" && c.actions.abort()
    }, [s])
      , u = G(function() {
        var p = {
            capture: !0,
            passive: !1
        }
          , g = {
            cancel: l,
            completed: s,
            getPhase: n
        }
          , h = zt(window, $j(g), p)
          , w = zt(window, _j(g), p);
        r.current = function() {
            h(),
            w()
        }
    }, [l, n, s])
      , f = G(function() {
        var p = n();
        p.type !== "PENDING" && L();
        var g = p.actions.fluidLift(p.point);
        o({
            type: "DRAGGING",
            actions: g,
            hasMoved: !1
        })
    }, [n, o])
      , d = G(function(p, g) {
        n().type !== "IDLE" && L();
        var h = setTimeout(f, Bj);
        o({
            type: "PENDING",
            point: g,
            actions: p,
            longPressTimerId: h
        }),
        u()
    }, [u, n, o, f]);
    Rt(function() {
        return a(),
        function() {
            r.current();
            var g = n();
            g.type === "PENDING" && (clearTimeout(g.longPressTimerId),
            o(Dc))
        }
    }, [n, a, o]),
    Rt(function() {
        var p = zt(window, [{
            eventName: "touchmove",
            fn: function() {},
            options: {
                capture: !1,
                passive: !1
            }
        }]);
        return p
    }, [])
}
var Wj = {
    input: !0,
    button: !0,
    textarea: !0,
    select: !0,
    option: !0,
    optgroup: !0,
    video: !0,
    audio: !0
};
function R1(e, t) {
    if (t == null)
        return !1;
    var r = !!Wj[t.tagName.toLowerCase()];
    if (r)
        return !0;
    var n = t.getAttribute("contenteditable");
    return n === "true" || n === "" ? !0 : t === e ? !1 : R1(e, t.parentElement)
}
function Uj(e, t) {
    var r = t.target;
    return Nu(r) ? R1(e, r) : !1
}
var Vj = function(e) {
    return tr(e.getBoundingClientRect()).center
};
function Hj(e) {
    return e instanceof N1(e).Element
}
var Gj = function() {
    var e = "matches";
    if (typeof document > "u")
        return e;
    var t = [e, "msMatchesSelector", "webkitMatchesSelector"]
      , r = Dn(t, function(n) {
        return n in Element.prototype
    });
    return r || e
}();
function k1(e, t) {
    return e == null ? null : e[Gj](t) ? e : k1(e.parentElement, t)
}
function Kj(e, t) {
    return e.closest ? e.closest(t) : k1(e, t)
}
function qj(e) {
    return "[" + Xo.contextId + '="' + e + '"]'
}
function Qj(e, t) {
    var r = t.target;
    if (!Hj(r))
        return null;
    var n = qj(e)
      , o = Kj(r, n);
    return !o || !Nu(o) ? null : o
}
function Yj(e, t) {
    var r = Qj(e, t);
    return r ? r.getAttribute(Xo.draggableId) : null
}
function Xj(e, t) {
    var r = "[" + Xd.contextId + '="' + e + '"]'
      , n = Kb(document.querySelectorAll(r))
      , o = Dn(n, function(i) {
        return i.getAttribute(Xd.id) === t
    });
    return !o || !Nu(o) ? null : o
}
function Jj(e) {
    e.preventDefault()
}
function gs(e) {
    var t = e.expected
      , r = e.phase
      , n = e.isLockActive;
    return e.shouldWarn,
    !(!n() || t !== r)
}
function A1(e) {
    var t = e.lockAPI
      , r = e.store
      , n = e.registry
      , o = e.draggableId;
    if (t.isClaimed())
        return !1;
    var i = n.draggable.findById(o);
    return !(!i || !i.options.isEnabled || !b1(r.getState(), o))
}
function Zj(e) {
    var t = e.lockAPI
      , r = e.contextId
      , n = e.store
      , o = e.registry
      , i = e.draggableId
      , a = e.forceSensorStop
      , s = e.sourceEvent
      , l = A1({
        lockAPI: t,
        store: n,
        registry: o,
        draggableId: i
    });
    if (!l)
        return null;
    var u = o.draggable.getById(i)
      , f = Xj(r, u.descriptor.id);
    if (!f || s && !u.options.canDragInteractiveElements && Uj(f, s))
        return null;
    var d = t.claim(a || dn)
      , c = "PRE_DRAG";
    function p() {
        return u.options.shouldRespectForcePress
    }
    function g() {
        return t.isActive(d)
    }
    function h(E, N) {
        gs({
            expected: E,
            phase: c,
            isLockActive: g,
            shouldWarn: !0
        }) && n.dispatch(N())
    }
    var w = h.bind(null, "DRAGGING");
    function y(E) {
        function N() {
            t.release(),
            c = "COMPLETED"
        }
        c !== "PRE_DRAG" && (N(),
        c !== "PRE_DRAG" && L()),
        n.dispatch(GA(E.liftActionArgs)),
        c = "DRAGGING";
        function D(I, k) {
            if (k === void 0 && (k = {
                shouldBlockNextClick: !1
            }),
            E.cleanup(),
            k.shouldBlockNextClick) {
                var M = zt(window, [{
                    eventName: "click",
                    fn: Jj,
                    options: {
                        once: !0,
                        passive: !1,
                        capture: !0
                    }
                }]);
                setTimeout(M)
            }
            N(),
            n.dispatch(m1({
                reason: I
            }))
        }
        return q({
            isActive: function() {
                return gs({
                    expected: "DRAGGING",
                    phase: c,
                    isLockActive: g,
                    shouldWarn: !1
                })
            },
            shouldRespectForcePress: p,
            drop: function(k) {
                return D("DROP", k)
            },
            cancel: function(k) {
                return D("CANCEL", k)
            }
        }, E.actions)
    }
    function v(E) {
        var N = fa(function(I) {
            w(function() {
                return p1({
                    client: I
                })
            })
        })
          , D = y({
            liftActionArgs: {
                id: i,
                clientSelection: E,
                movementMode: "FLUID"
            },
            cleanup: function() {
                return N.cancel()
            },
            actions: {
                move: N
            }
        });
        return q({}, D, {
            move: N
        })
    }
    function b() {
        var E = {
            moveUp: function() {
                return w(tO)
            },
            moveRight: function() {
                return w(nO)
            },
            moveDown: function() {
                return w(rO)
            },
            moveLeft: function() {
                return w(oO)
            }
        };
        return y({
            liftActionArgs: {
                id: i,
                clientSelection: Vj(f),
                movementMode: "SNAP"
            },
            cleanup: dn,
            actions: E
        })
    }
    function S() {
        var E = gs({
            expected: "PRE_DRAG",
            phase: c,
            isLockActive: g,
            shouldWarn: !0
        });
        E && t.release()
    }
    var C = {
        isActive: function() {
            return gs({
                expected: "PRE_DRAG",
                phase: c,
                isLockActive: g,
                shouldWarn: !1
            })
        },
        shouldRespectForcePress: p,
        fluidLift: v,
        snapLift: b,
        abort: S
    };
    return C
}
var eM = [Aj, Lj, zj];
function tM(e) {
    var t = e.contextId
      , r = e.store
      , n = e.registry
      , o = e.customSensors
      , i = e.enableDefaultSensors
      , a = [].concat(i ? eM : [], o || [])
      , s = x.useState(function() {
        return yj()
    })[0]
      , l = G(function(v, b) {
        v.isDragging && !b.isDragging && s.tryAbandon()
    }, [s]);
    Rt(function() {
        var v = r.getState()
          , b = r.subscribe(function() {
            var S = r.getState();
            l(v, S),
            v = S
        });
        return b
    }, [s, r, l]),
    Rt(function() {
        return s.tryAbandon
    }, [s.tryAbandon]);
    for (var u = G(function(y) {
        return A1({
            lockAPI: s,
            registry: n,
            store: r,
            draggableId: y
        })
    }, [s, n, r]), f = G(function(y, v, b) {
        return Zj({
            lockAPI: s,
            registry: n,
            contextId: t,
            store: r,
            draggableId: y,
            forceSensorStop: v,
            sourceEvent: b && b.sourceEvent ? b.sourceEvent : null
        })
    }, [t, s, n, r]), d = G(function(y) {
        return Yj(t, y)
    }, [t]), c = G(function(y) {
        var v = n.draggable.findById(y);
        return v ? v.options : null
    }, [n.draggable]), p = G(function() {
        s.isClaimed() && (s.tryAbandon(),
        r.getState().phase !== "IDLE" && r.dispatch(Wp()))
    }, [s, r]), g = G(s.isClaimed, [s]), h = se(function() {
        return {
            canGetLock: u,
            tryGetLock: f,
            findClosestDraggableId: d,
            findOptionsForDraggable: c,
            tryReleaseLock: p,
            isLockClaimed: g
        }
    }, [u, f, d, c, p, g]), w = 0; w < a.length; w++)
        a[w](h)
}
var rM = function(t) {
    return {
        onBeforeCapture: t.onBeforeCapture,
        onBeforeDragStart: t.onBeforeDragStart,
        onDragStart: t.onDragStart,
        onDragEnd: t.onDragEnd,
        onDragUpdate: t.onDragUpdate
    }
};
function Ei(e) {
    return e.current || L(),
    e.current
}
function nM(e) {
    var t = e.contextId
      , r = e.setCallbacks
      , n = e.sensors
      , o = e.nonce
      , i = e.dragHandleUsageInstructions
      , a = x.useRef(null)
      , s = P1(e)
      , l = G(function() {
        return rM(s.current)
    }, [s])
      , u = pj(t)
      , f = gj({
        contextId: t,
        text: i
    })
      , d = aj(t, o)
      , c = G(function(I) {
        Ei(a).dispatch(I)
    }, [])
      , p = se(function() {
        return mh({
            publishWhileDragging: qA,
            updateDroppableScroll: YA,
            updateDroppableIsEnabled: XA,
            updateDroppableIsCombineEnabled: JA,
            collectionStarting: QA
        }, c)
    }, [c])
      , g = cj()
      , h = se(function() {
        return FO(g, p)
    }, [g, p])
      , w = se(function() {
        return tj(q({
            scrollWindow: _O,
            scrollDroppable: h.scrollDroppable
        }, mh({
            move: p1
        }, c)))
    }, [h.scrollDroppable, c])
      , y = lj(t)
      , v = se(function() {
        return jO({
            announce: u,
            autoScroller: w,
            dimensionMarshal: h,
            focusMarshal: y,
            getResponders: l,
            styleMarshal: d
        })
    }, [u, w, h, y, l, d]);
    a.current = v;
    var b = G(function() {
        var I = Ei(a)
          , k = I.getState();
        k.phase !== "IDLE" && I.dispatch(Wp())
    }, [])
      , S = G(function() {
        var I = Ei(a).getState();
        return I.isDragging || I.phase === "DROP_ANIMATING"
    }, [])
      , C = se(function() {
        return {
            isDragging: S,
            tryAbort: b
        }
    }, [S, b]);
    r(C);
    var E = G(function(I) {
        return b1(Ei(a).getState(), I)
    }, [])
      , N = G(function() {
        return An(Ei(a).getState())
    }, [])
      , D = se(function() {
        return {
            marshal: h,
            focus: y,
            contextId: t,
            canLift: E,
            isMovementAllowed: N,
            dragHandleUsageInstructionsId: f,
            registry: g
        }
    }, [t, h, f, y, E, N, g]);
    return tM({
        contextId: t,
        store: v,
        registry: g,
        customSensors: n,
        enableDefaultSensors: e.enableDefaultSensors !== !1
    }),
    x.useEffect(function() {
        return b
    }, [b]),
    R.createElement(Pu.Provider, {
        value: D
    }, R.createElement(NR, {
        context: Yp,
        store: v
    }, e.children))
}
var oM = 0;
function iM() {
    return se(function() {
        return "" + oM++
    }, [])
}
function aM(e) {
    var t = iM()
      , r = e.dragHandleUsageInstructions || Fs.dragHandleUsageInstructions;
    return R.createElement(Lk, null, function(n) {
        return R.createElement(nM, {
            nonce: e.nonce,
            contextId: t,
            setCallbacks: n,
            dragHandleUsageInstructions: r,
            enableDefaultSensors: e.enableDefaultSensors,
            sensors: e.sensors,
            onBeforeCapture: e.onBeforeCapture,
            onBeforeDragStart: e.onBeforeDragStart,
            onDragStart: e.onDragStart,
            onDragUpdate: e.onDragUpdate,
            onDragEnd: e.onDragEnd
        }, e.children)
    })
}
var O1 = function(t) {
    return function(r) {
        return t === r
    }
}
  , sM = O1("scroll")
  , lM = O1("auto")
  , Gh = function(t, r) {
    return r(t.overflowX) || r(t.overflowY)
}
  , uM = function(t) {
    var r = window.getComputedStyle(t)
      , n = {
        overflowX: r.overflowX,
        overflowY: r.overflowY
    };
    return Gh(n, sM) || Gh(n, lM)
}
  , cM = function() {
    return !1
}
  , dM = function e(t) {
    return t == null ? null : t === document.body ? cM() ? t : null : t === document.documentElement ? null : uM(t) ? t : e(t.parentElement)
}
  , Jd = function(e) {
    return {
        x: e.scrollLeft,
        y: e.scrollTop
    }
}
  , fM = function e(t) {
    if (!t)
        return !1;
    var r = window.getComputedStyle(t);
    return r.position === "fixed" ? !0 : e(t.parentElement)
}
  , pM = function(e) {
    var t = dM(e)
      , r = fM(e);
    return {
        closestScrollable: t,
        isFixedOnPage: r
    }
}
  , mM = function(e) {
    var t = e.descriptor
      , r = e.isEnabled
      , n = e.isCombineEnabled
      , o = e.isFixedOnPage
      , i = e.direction
      , a = e.client
      , s = e.page
      , l = e.closest
      , u = function() {
        if (!l)
            return null;
        var p = l.scrollSize
          , g = l.client
          , h = y1({
            scrollHeight: p.scrollHeight,
            scrollWidth: p.scrollWidth,
            height: g.paddingBox.height,
            width: g.paddingBox.width
        });
        return {
            pageMarginBox: l.page.marginBox,
            frameClient: g,
            scrollSize: p,
            shouldClipSubject: l.shouldClipSubject,
            scroll: {
                initial: l.scroll,
                current: l.scroll,
                max: h,
                diff: {
                    value: Ue,
                    displacement: Ue
                }
            }
        }
    }()
      , f = i === "vertical" ? Bp : Jb
      , d = Qo({
        page: s,
        withPlaceholder: null,
        axis: f,
        frame: u
    })
      , c = {
        descriptor: t,
        isCombineEnabled: n,
        isFixedOnPage: o,
        axis: f,
        isEnabled: r,
        client: a,
        page: s,
        frame: u,
        subject: d
    };
    return c
}
  , vM = function(t, r) {
    var n = Wb(t);
    if (!r || t !== r)
        return n;
    var o = n.paddingBox.top - r.scrollTop
      , i = n.paddingBox.left - r.scrollLeft
      , a = o + r.scrollHeight
      , s = i + r.scrollWidth
      , l = {
        top: o,
        right: s,
        bottom: a,
        left: i
    }
      , u = Ap(l, n.border)
      , f = Op({
        borderBox: u,
        margin: n.margin,
        border: n.border,
        padding: n.padding
    });
    return f
}
  , hM = function(e) {
    var t = e.ref
      , r = e.descriptor
      , n = e.env
      , o = e.windowScroll
      , i = e.direction
      , a = e.isDropDisabled
      , s = e.isCombineEnabled
      , l = e.shouldClipSubject
      , u = n.closestScrollable
      , f = vM(t, u)
      , d = bl(f, o)
      , c = function() {
        if (!u)
            return null;
        var g = Wb(u)
          , h = {
            scrollHeight: u.scrollHeight,
            scrollWidth: u.scrollWidth
        };
        return {
            client: g,
            page: bl(g, o),
            scroll: Jd(u),
            scrollSize: h,
            shouldClipSubject: l
        }
    }()
      , p = mM({
        descriptor: r,
        isEnabled: !a,
        isCombineEnabled: s,
        isFixedOnPage: n.isFixedOnPage,
        direction: i,
        client: f,
        page: d,
        closest: c
    });
    return p
}
  , gM = {
    passive: !1
}
  , yM = {
    passive: !0
}
  , Kh = function(e) {
    return e.shouldPublishImmediately ? gM : yM
};
function Dl(e) {
    var t = x.useContext(e);
    return t || L(),
    t
}
var ys = function(t) {
    return t && t.env.closestScrollable || null
};
function xM(e) {
    var t = x.useRef(null)
      , r = Dl(Pu)
      , n = Xp("droppable")
      , o = r.registry
      , i = r.marshal
      , a = P1(e)
      , s = se(function() {
        return {
            id: e.droppableId,
            type: e.type,
            mode: e.mode
        }
    }, [e.droppableId, e.mode, e.type])
      , l = x.useRef(s)
      , u = se(function() {
        return We(function(S, C) {
            t.current || L();
            var E = {
                x: S,
                y: C
            };
            i.updateDroppableScroll(s.id, E)
        })
    }, [s.id, i])
      , f = G(function() {
        var S = t.current;
        return !S || !S.env.closestScrollable ? Ue : Jd(S.env.closestScrollable)
    }, [])
      , d = G(function() {
        var S = f();
        u(S.x, S.y)
    }, [f, u])
      , c = se(function() {
        return fa(d)
    }, [d])
      , p = G(function() {
        var S = t.current
          , C = ys(S);
        S && C || L();
        var E = S.scrollOptions;
        if (E.shouldPublishImmediately) {
            d();
            return
        }
        c()
    }, [c, d])
      , g = G(function(S, C) {
        t.current && L();
        var E = a.current
          , N = E.getDroppableRef();
        N || L();
        var D = pM(N)
          , I = {
            ref: N,
            descriptor: s,
            env: D,
            scrollOptions: C
        };
        t.current = I;
        var k = hM({
            ref: N,
            descriptor: s,
            env: D,
            windowScroll: S,
            direction: E.direction,
            isDropDisabled: E.isDropDisabled,
            isCombineEnabled: E.isCombineEnabled,
            shouldClipSubject: !E.ignoreContainerClipping
        })
          , M = D.closestScrollable;
        return M && (M.setAttribute(Wh.contextId, r.contextId),
        M.addEventListener("scroll", p, Kh(I.scrollOptions))),
        k
    }, [r.contextId, s, p, a])
      , h = G(function() {
        var S = t.current
          , C = ys(S);
        return S && C || L(),
        Jd(C)
    }, [])
      , w = G(function() {
        var S = t.current;
        S || L();
        var C = ys(S);
        t.current = null,
        C && (c.cancel(),
        C.removeAttribute(Wh.contextId),
        C.removeEventListener("scroll", p, Kh(S.scrollOptions)))
    }, [p, c])
      , y = G(function(S) {
        var C = t.current;
        C || L();
        var E = ys(C);
        E || L(),
        E.scrollTop += S.y,
        E.scrollLeft += S.x
    }, [])
      , v = se(function() {
        return {
            getDimensionAndWatchScroll: g,
            getScrollWhileDragging: h,
            dragStopped: w,
            scroll: y
        }
    }, [w, g, h, y])
      , b = se(function() {
        return {
            uniqueId: n,
            descriptor: s,
            callbacks: v
        }
    }, [v, s, n]);
    Rt(function() {
        return l.current = b.descriptor,
        o.droppable.register(b),
        function() {
            t.current && w(),
            o.droppable.unregister(b)
        }
    }, [v, s, w, b, i, o.droppable]),
    Rt(function() {
        t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled)
    }, [e.isDropDisabled, i]),
    Rt(function() {
        t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled)
    }, [e.isCombineEnabled, i])
}
function Tc() {}
var qh = {
    width: 0,
    height: 0,
    margin: Wk
}
  , wM = function(t) {
    var r = t.isAnimatingOpenOnMount
      , n = t.placeholder
      , o = t.animate;
    return r || o === "close" ? qh : {
        height: n.client.borderBox.height,
        width: n.client.borderBox.width,
        margin: n.client.margin
    }
}
  , bM = function(t) {
    var r = t.isAnimatingOpenOnMount
      , n = t.placeholder
      , o = t.animate
      , i = wM({
        isAnimatingOpenOnMount: r,
        placeholder: n,
        animate: o
    });
    return {
        display: n.display,
        boxSizing: "border-box",
        width: i.width,
        height: i.height,
        marginTop: i.margin.top,
        marginRight: i.margin.right,
        marginBottom: i.margin.bottom,
        marginLeft: i.margin.left,
        flexShrink: "0",
        flexGrow: "0",
        pointerEvents: "none",
        transition: o !== "none" ? zi.placeholder : null
    }
};
function SM(e) {
    var t = x.useRef(null)
      , r = G(function() {
        t.current && (clearTimeout(t.current),
        t.current = null)
    }, [])
      , n = e.animate
      , o = e.onTransitionEnd
      , i = e.onClose
      , a = e.contextId
      , s = x.useState(e.animate === "open")
      , l = s[0]
      , u = s[1];
    x.useEffect(function() {
        return l ? n !== "open" ? (r(),
        u(!1),
        Tc) : t.current ? Tc : (t.current = setTimeout(function() {
            t.current = null,
            u(!1)
        }),
        r) : Tc
    }, [n, l, r]);
    var f = G(function(c) {
        c.propertyName === "height" && (o(),
        n === "close" && i())
    }, [n, i, o])
      , d = bM({
        isAnimatingOpenOnMount: l,
        animate: e.animate,
        placeholder: e.placeholder
    });
    return R.createElement(e.placeholder.tagName, {
        style: d,
        "data-rbd-placeholder-context-id": a,
        onTransitionEnd: f,
        ref: e.innerRef
    })
}
var CM = R.memo(SM)
  , Zp = R.createContext(null)
  , EM = function(e) {
    bb(t, e);
    function t() {
        for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
        return n = e.call.apply(e, [this].concat(i)) || this,
        n.state = {
            isVisible: !!n.props.on,
            data: n.props.on,
            animate: n.props.shouldAnimate && n.props.on ? "open" : "none"
        },
        n.onClose = function() {
            n.state.animate === "close" && n.setState({
                isVisible: !1
            })
        }
        ,
        n
    }
    t.getDerivedStateFromProps = function(o, i) {
        return o.shouldAnimate ? o.on ? {
            isVisible: !0,
            data: o.on,
            animate: "open"
        } : i.isVisible ? {
            isVisible: !0,
            data: i.data,
            animate: "close"
        } : {
            isVisible: !1,
            animate: "close",
            data: null
        } : {
            isVisible: !!o.on,
            data: o.on,
            animate: "none"
        }
    }
    ;
    var r = t.prototype;
    return r.render = function() {
        if (!this.state.isVisible)
            return null;
        var o = {
            onClose: this.onClose,
            data: this.state.data,
            animate: this.state.animate
        };
        return this.props.children(o)
    }
    ,
    t
}(R.PureComponent)
  , Qh = {
    dragging: 5e3,
    dropAnimating: 4500
}
  , NM = function(t, r) {
    return r ? zi.drop(r.duration) : t ? zi.snap : zi.fluid
}
  , PM = function(t, r) {
    return t ? r ? ha.opacity.drop : ha.opacity.combining : null
}
  , DM = function(t) {
    return t.forceShouldAnimate != null ? t.forceShouldAnimate : t.mode === "SNAP"
};
function TM(e) {
    var t = e.dimension
      , r = t.client
      , n = e.offset
      , o = e.combineWith
      , i = e.dropping
      , a = !!o
      , s = DM(e)
      , l = !!i
      , u = l ? Qd.drop(n, a) : Qd.moveTo(n)
      , f = {
        position: "fixed",
        top: r.marginBox.top,
        left: r.marginBox.left,
        boxSizing: "border-box",
        width: r.borderBox.width,
        height: r.borderBox.height,
        transition: NM(s, i),
        transform: u,
        opacity: PM(a, l),
        zIndex: l ? Qh.dropAnimating : Qh.dragging,
        pointerEvents: "none"
    };
    return f
}
function IM(e) {
    return {
        transform: Qd.moveTo(e.offset),
        transition: e.shouldAnimateDisplacement ? null : "none"
    }
}
function RM(e) {
    return e.type === "DRAGGING" ? TM(e) : IM(e)
}
function kM(e, t, r) {
    r === void 0 && (r = Ue);
    var n = window.getComputedStyle(t)
      , o = t.getBoundingClientRect()
      , i = zb(o, n)
      , a = bl(i, r)
      , s = {
        client: i,
        tagName: t.tagName.toLowerCase(),
        display: n.display
    }
      , l = {
        x: i.marginBox.width,
        y: i.marginBox.height
    }
      , u = {
        descriptor: e,
        placeholder: s,
        displaceBy: l,
        client: i,
        page: a
    };
    return u
}
function AM(e) {
    var t = Xp("draggable")
      , r = e.descriptor
      , n = e.registry
      , o = e.getDraggableRef
      , i = e.canDragInteractiveElements
      , a = e.shouldRespectForcePress
      , s = e.isEnabled
      , l = se(function() {
        return {
            canDragInteractiveElements: i,
            shouldRespectForcePress: a,
            isEnabled: s
        }
    }, [i, s, a])
      , u = G(function(p) {
        var g = o();
        return g || L(),
        kM(r, g, p)
    }, [r, o])
      , f = se(function() {
        return {
            uniqueId: t,
            descriptor: r,
            options: l,
            getDimension: u
        }
    }, [r, u, l, t])
      , d = x.useRef(f)
      , c = x.useRef(!0);
    Rt(function() {
        return n.draggable.register(d.current),
        function() {
            return n.draggable.unregister(d.current)
        }
    }, [n.draggable]),
    Rt(function() {
        if (c.current) {
            c.current = !1;
            return
        }
        var p = d.current;
        d.current = f,
        n.draggable.update(f, p)
    }, [f, n.draggable])
}
function OM(e) {
    e.preventDefault()
}
function jM(e) {
    var t = x.useRef(null)
      , r = G(function(I) {
        t.current = I
    }, [])
      , n = G(function() {
        return t.current
    }, [])
      , o = Dl(Pu)
      , i = o.contextId
      , a = o.dragHandleUsageInstructionsId
      , s = o.registry
      , l = Dl(Zp)
      , u = l.type
      , f = l.droppableId
      , d = se(function() {
        return {
            id: e.draggableId,
            index: e.index,
            type: u,
            droppableId: f
        }
    }, [e.draggableId, e.index, u, f])
      , c = e.children
      , p = e.draggableId
      , g = e.isEnabled
      , h = e.shouldRespectForcePress
      , w = e.canDragInteractiveElements
      , y = e.isClone
      , v = e.mapped
      , b = e.dropAnimationFinished;
    if (!y) {
        var S = se(function() {
            return {
                descriptor: d,
                registry: s,
                getDraggableRef: n,
                canDragInteractiveElements: w,
                shouldRespectForcePress: h,
                isEnabled: g
            }
        }, [d, s, n, w, h, g]);
        AM(S)
    }
    var C = se(function() {
        return g ? {
            tabIndex: 0,
            role: "button",
            "aria-describedby": a,
            "data-rbd-drag-handle-draggable-id": p,
            "data-rbd-drag-handle-context-id": i,
            draggable: !1,
            onDragStart: OM
        } : null
    }, [i, a, p, g])
      , E = G(function(I) {
        v.type === "DRAGGING" && v.dropping && I.propertyName === "transform" && b()
    }, [b, v])
      , N = se(function() {
        var I = RM(v)
          , k = v.type === "DRAGGING" && v.dropping ? E : null
          , M = {
            innerRef: r,
            draggableProps: {
                "data-rbd-draggable-context-id": i,
                "data-rbd-draggable-id": p,
                style: I,
                onTransitionEnd: k
            },
            dragHandleProps: C
        };
        return M
    }, [i, C, p, v, E, r])
      , D = se(function() {
        return {
            draggableId: d.id,
            type: d.type,
            source: {
                index: d.index,
                droppableId: d.droppableId
            }
        }
    }, [d.droppableId, d.id, d.index, d.type]);
    return c(N, v.snapshot, D)
}
var j1 = function(e, t) {
    return e === t
}
  , M1 = function(e) {
    var t = e.combine
      , r = e.destination;
    return r ? r.droppableId : t ? t.droppableId : null
}
  , MM = function(t) {
    return t.combine ? t.combine.draggableId : null
}
  , LM = function(t) {
    return t.at && t.at.type === "COMBINE" ? t.at.combine.draggableId : null
};
function BM() {
    var e = We(function(o, i) {
        return {
            x: o,
            y: i
        }
    })
      , t = We(function(o, i, a, s, l) {
        return {
            isDragging: !0,
            isClone: i,
            isDropAnimating: !!l,
            dropAnimation: l,
            mode: o,
            draggingOver: a,
            combineWith: s,
            combineTargetFor: null
        }
    })
      , r = We(function(o, i, a, s, l, u, f) {
        return {
            mapped: {
                type: "DRAGGING",
                dropping: null,
                draggingOver: l,
                combineWith: u,
                mode: i,
                offset: o,
                dimension: a,
                forceShouldAnimate: f,
                snapshot: t(i, s, l, u, null)
            }
        }
    })
      , n = function(i, a) {
        if (i.isDragging) {
            if (i.critical.draggable.id !== a.draggableId)
                return null;
            var s = i.current.client.offset
              , l = i.dimensions.draggables[a.draggableId]
              , u = It(i.impact)
              , f = LM(i.impact)
              , d = i.forceShouldAnimate;
            return r(e(s.x, s.y), i.movementMode, l, a.isClone, u, f, d)
        }
        if (i.phase === "DROP_ANIMATING") {
            var c = i.completed;
            if (c.result.draggableId !== a.draggableId)
                return null;
            var p = a.isClone
              , g = i.dimensions.draggables[a.draggableId]
              , h = c.result
              , w = h.mode
              , y = M1(h)
              , v = MM(h)
              , b = i.dropDuration
              , S = {
                duration: b,
                curve: Vp.drop,
                moveTo: i.newHomeClientOffset,
                opacity: v ? ha.opacity.drop : null,
                scale: v ? ha.scale.drop : null
            };
            return {
                mapped: {
                    type: "DRAGGING",
                    offset: i.newHomeClientOffset,
                    dimension: g,
                    dropping: S,
                    draggingOver: y,
                    combineWith: v,
                    mode: w,
                    forceShouldAnimate: null,
                    snapshot: t(w, p, y, v, S)
                }
            }
        }
        return null
    };
    return n
}
function L1(e) {
    return {
        isDragging: !1,
        isDropAnimating: !1,
        isClone: !1,
        dropAnimation: null,
        mode: null,
        draggingOver: null,
        combineTargetFor: e,
        combineWith: null
    }
}
var FM = {
    mapped: {
        type: "SECONDARY",
        offset: Ue,
        combineTargetFor: null,
        shouldAnimateDisplacement: !0,
        snapshot: L1(null)
    }
};
function _M() {
    var e = We(function(a, s) {
        return {
            x: a,
            y: s
        }
    })
      , t = We(L1)
      , r = We(function(a, s, l) {
        return s === void 0 && (s = null),
        {
            mapped: {
                type: "SECONDARY",
                offset: a,
                combineTargetFor: s,
                shouldAnimateDisplacement: l,
                snapshot: t(s)
            }
        }
    })
      , n = function(s) {
        return s ? r(Ue, s, !0) : null
    }
      , o = function(s, l, u, f) {
        var d = u.displaced.visible[s]
          , c = !!(f.inVirtualList && f.effected[s])
          , p = Su(u)
          , g = p && p.draggableId === s ? l : null;
        if (!d) {
            if (!c)
                return n(g);
            if (u.displaced.invisible[s])
                return null;
            var h = li(f.displacedBy.point)
              , w = e(h.x, h.y);
            return r(w, g, !0)
        }
        if (c)
            return n(g);
        var y = u.displacedBy.point
          , v = e(y.x, y.y);
        return r(v, g, d.shouldAnimate)
    }
      , i = function(s, l) {
        if (s.isDragging)
            return s.critical.draggable.id === l.draggableId ? null : o(l.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
        if (s.phase === "DROP_ANIMATING") {
            var u = s.completed;
            return u.result.draggableId === l.draggableId ? null : o(l.draggableId, u.result.draggableId, u.impact, u.afterCritical)
        }
        return null
    };
    return i
}
var $M = function() {
    var t = BM()
      , r = _M()
      , n = function(i, a) {
        return t(i, a) || r(i, a) || FM
    };
    return n
}
  , zM = {
    dropAnimationFinished: v1
}
  , WM = _b($M, zM, null, {
    context: Yp,
    pure: !0,
    areStatePropsEqual: j1
})(jM);
function B1(e) {
    var t = Dl(Zp)
      , r = t.isUsingCloneFor;
    return r === e.draggableId && !e.isClone ? null : R.createElement(WM, e)
}
function Ic(e) {
    var t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0
      , r = !!e.disableInteractiveElementBlocking
      , n = !!e.shouldRespectForcePress;
    return R.createElement(B1, q({}, e, {
        isClone: !1,
        isEnabled: t,
        canDragInteractiveElements: r,
        shouldRespectForcePress: n
    }))
}
function UM(e) {
    var t = x.useContext(Pu);
    t || L();
    var r = t.contextId
      , n = t.isMovementAllowed
      , o = x.useRef(null)
      , i = x.useRef(null)
      , a = e.children
      , s = e.droppableId
      , l = e.type
      , u = e.mode
      , f = e.direction
      , d = e.ignoreContainerClipping
      , c = e.isDropDisabled
      , p = e.isCombineEnabled
      , g = e.snapshot
      , h = e.useClone
      , w = e.updateViewportMaxScroll
      , y = e.getContainerForClone
      , v = G(function() {
        return o.current
    }, [])
      , b = G(function(M) {
        o.current = M
    }, []);
    G(function() {
        return i.current
    }, []);
    var S = G(function(M) {
        i.current = M
    }, [])
      , C = G(function() {
        n() && w({
            maxScroll: w1()
        })
    }, [n, w]);
    xM({
        droppableId: s,
        type: l,
        mode: u,
        direction: f,
        isDropDisabled: c,
        isCombineEnabled: p,
        ignoreContainerClipping: d,
        getDroppableRef: v
    });
    var E = R.createElement(EM, {
        on: e.placeholder,
        shouldAnimate: e.shouldAnimatePlaceholder
    }, function(M) {
        var B = M.onClose
          , U = M.data
          , A = M.animate;
        return R.createElement(CM, {
            placeholder: U,
            onClose: B,
            innerRef: S,
            animate: A,
            contextId: r,
            onTransitionEnd: C
        })
    })
      , N = se(function() {
        return {
            innerRef: b,
            placeholder: E,
            droppableProps: {
                "data-rbd-droppable-id": s,
                "data-rbd-droppable-context-id": r
            }
        }
    }, [r, s, E, b])
      , D = h ? h.dragging.draggableId : null
      , I = se(function() {
        return {
            droppableId: s,
            type: l,
            isUsingCloneFor: D
        }
    }, [s, D, l]);
    function k() {
        if (!h)
            return null;
        var M = h.dragging
          , B = h.render
          , U = R.createElement(B1, {
            draggableId: M.draggableId,
            index: M.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0
        }, function(A, V) {
            return B(A, V, M)
        });
        return Qf.createPortal(U, y())
    }
    return R.createElement(Zp.Provider, {
        value: I
    }, a(N, g), k())
}
var Rc = function(t, r) {
    return t === r.droppable.type
}
  , Yh = function(t, r) {
    return r.draggables[t.draggable.id]
}
  , VM = function() {
    var t = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {
            isDraggingOver: !1,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: !1
        },
        useClone: null
    }
      , r = q({}, t, {
        shouldAnimatePlaceholder: !1
    })
      , n = We(function(a) {
        return {
            draggableId: a.id,
            type: a.type,
            source: {
                index: a.index,
                droppableId: a.droppableId
            }
        }
    })
      , o = We(function(a, s, l, u, f, d) {
        var c = f.descriptor.id
          , p = f.descriptor.droppableId === a;
        if (p) {
            var g = d ? {
                render: d,
                dragging: n(f.descriptor)
            } : null
              , h = {
                isDraggingOver: l,
                draggingOverWith: l ? c : null,
                draggingFromThisWith: c,
                isUsingPlaceholder: !0
            };
            return {
                placeholder: f.placeholder,
                shouldAnimatePlaceholder: !1,
                snapshot: h,
                useClone: g
            }
        }
        if (!s)
            return r;
        if (!u)
            return t;
        var w = {
            isDraggingOver: l,
            draggingOverWith: c,
            draggingFromThisWith: null,
            isUsingPlaceholder: !0
        };
        return {
            placeholder: f.placeholder,
            shouldAnimatePlaceholder: !0,
            snapshot: w,
            useClone: null
        }
    })
      , i = function(s, l) {
        var u = l.droppableId
          , f = l.type
          , d = !l.isDropDisabled
          , c = l.renderClone;
        if (s.isDragging) {
            var p = s.critical;
            if (!Rc(f, p))
                return r;
            var g = Yh(p, s.dimensions)
              , h = It(s.impact) === u;
            return o(u, d, h, h, g, c)
        }
        if (s.phase === "DROP_ANIMATING") {
            var w = s.completed;
            if (!Rc(f, w.critical))
                return r;
            var y = Yh(w.critical, s.dimensions);
            return o(u, d, M1(w.result) === u, It(w.impact) === u, y, c)
        }
        if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
            var v = s.completed;
            if (!Rc(f, v.critical))
                return r;
            var b = It(v.impact) === u
              , S = !!(v.impact.at && v.impact.at.type === "COMBINE")
              , C = v.critical.droppable.id === u;
            return b ? S ? t : r : C ? t : r
        }
        return r
    };
    return i
}
  , HM = {
    updateViewportMaxScroll: eO
};
function GM() {
    return document.body || L(),
    document.body
}
var KM = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: GM
}
  , _s = _b(VM, HM, null, {
    context: Yp,
    pure: !0,
    areStatePropsEqual: j1
})(UM);
_s.defaultProps = KM;
const qM = () => {
    const e = Da()
      , {toast: t} = Yf()
      , [r,n] = x.useState(null)
      , [o,i] = x.useState("aanval")
      , [a,s] = x.useState(!1);
    x.useEffect( () => {
        const p = localStorage.getItem("korfbalGame");
        if (p) {
            const g = JSON.parse(p)
              , h = {};
            g.players.forEach(w => {
                h[w.id] = {
                    goals_for: 0,
                    attempts_for: 0,
                    goals_against: 0,
                    attempts_against: 0
                }
            }
            ),
            n({
                ...g,
                playerStats: h
            })
        } else
            e("/setup")
    }
    , [e]);
    const l = (p, g) => {
        if (!r)
            return;
        const h = r.players.find(E => E.id === p);
        if (!h)
            return;
        const w = r.playerStats[p][g]
          , y = w + 1
          , v = {
            ...r.playerStats
        };
        v[p] = {
            ...v[p],
            [g]: y
        };
        let b = {
            ...r.score
        };
        g === "goals_for" ? b.team1 += 1 : g === "goals_against" && (b.team2 += 1);
        const S = {
            id: Date.now().toString(),
            type: g,
            playerId: p,
            playerName: h.name,
            timestamp: Date.now(),
            previousValue: w,
            newValue: y
        }
          , C = {
            ...r,
            score: b,
            playerStats: v,
            actions: [...r.actions, S]
        };
        n(C),
        localStorage.setItem("korfbalGame", JSON.stringify(C)),
        t({
            title: "Statistiek toegevoegd",
            description: `${h.name}: ${g.replace("_", " ")} +1`
        })
    }
      , u = () => {
        if (!r || r.actions.length === 0)
            return;
        const p = r.actions[r.actions.length - 1]
          , g = r.players.find(v => v.id === p.playerId);
        if (!g)
            return;
        const h = {
            ...r.playerStats
        };
        h[p.playerId] = {
            ...h[p.playerId],
            [p.type]: p.previousValue || 0
        };
        let w = {
            ...r.score
        };
        p.type === "goals_for" ? w.team1 = Math.max(0, w.team1 - 1) : p.type === "goals_against" && (w.team2 = Math.max(0, w.team2 - 1));
        const y = {
            ...r,
            score: w,
            playerStats: h,
            actions: r.actions.slice(0, -1)
        };
        n(y),
        localStorage.setItem("korfbalGame", JSON.stringify(y)),
        t({
            title: "Actie teruggedraaid",
            description: `${g.name}: ${p.type.replace("_", " ")} ongedaan gemaakt`
        })
    }
      , f = p => {
        if (!p.destination || !r)
            return;
        const {source: g, destination: h} = p
          , w = p.draggableId
          , y = g.droppableId
          , v = h.droppableId;
        if (y === v)
            return;
        const b = r.players.filter(E => E.position === v);
        if ((v === "aanval" || v === "verdediging") && b.length >= 4) {
            t({
                title: "Maximum bereikt",
                description: `${v} kan maximaal 4 spelers bevatten`,
                variant: "destructive"
            });
            return
        }
        const S = r.players.map(E => E.id === w ? {
            ...E,
            position: v
        } : E)
          , C = {
            ...r,
            players: S
        };
        n(C),
        localStorage.setItem("korfbalGame", JSON.stringify(C)),
        t({
            title: "Wissel uitgevoerd",
            description: `Speler is gewisseld naar ${v}`
        })
    }
      , d = p => r ? r.players.filter(g => g.position === p) : []
      , c = () => d(o);
    return r ? m.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-2 md:p-4",
        children: m.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [m.jsxs("div", {
                className: "flex justify-between items-center mb-4 md:mb-6",
                children: [m.jsxs(fR, {
                    open: a,
                    onOpenChange: s,
                    children: [m.jsx(pR, {
                        asChild: !0,
                        children: m.jsxs(de, {
                            variant: "outline",
                            size: "sm",
                            className: "md:size-lg",
                            children: [m.jsx(vN, {
                                className: "h-4 w-4 mr-1 md:mr-2"
                            }), m.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Wissels"
                            })]
                        })
                    }), m.jsxs(yb, {
                        className: "max-w-4xl max-h-[80vh] overflow-y-auto",
                        children: [m.jsx(xb, {
                            children: m.jsx(wb, {
                                children: "Spelers Wisselen - Sleep om te wisselen"
                            })
                        }), m.jsx(aM, {
                            onDragEnd: f,
                            children: m.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [m.jsx(_s, {
                                    droppableId: "wissel",
                                    children: p => m.jsxs("div", {
                                        ref: p.innerRef,
                                        ...p.droppableProps,
                                        children: [m.jsx("h3", {
                                            className: "font-semibold mb-2 p-2 bg-muted rounded",
                                            children: "Wisselbank"
                                        }), m.jsxs("div", {
                                            className: "min-h-[200px] p-2 border-2 border-dashed border-muted rounded-lg",
                                            children: [d("wissel").map( (g, h) => m.jsx(Ic, {
                                                draggableId: g.id,
                                                index: h,
                                                children: (w, y) => m.jsx("div", {
                                                    ref: w.innerRef,
                                                    ...w.draggableProps,
                                                    ...w.dragHandleProps,
                                                    className: `p-2 mb-2 rounded border bg-background shadow-sm ${y.isDragging ? "shadow-lg rotate-2" : ""}`,
                                                    children: m.jsx("span", {
                                                        className: "font-medium",
                                                        children: g.name
                                                    })
                                                })
                                            }, g.id)), p.placeholder]
                                        })]
                                    })
                                }), m.jsx(_s, {
                                    droppableId: "aanval",
                                    children: p => m.jsxs("div", {
                                        ref: p.innerRef,
                                        ...p.droppableProps,
                                        children: [m.jsx("h3", {
                                            className: "font-semibold mb-2 p-2 bg-primary/10 rounded",
                                            children: "Aanvalsvak"
                                        }), m.jsxs("div", {
                                            className: "min-h-[200px] p-2 border-2 border-dashed border-primary/30 rounded-lg",
                                            children: [d("aanval").map( (g, h) => m.jsx(Ic, {
                                                draggableId: g.id,
                                                index: h,
                                                children: (w, y) => m.jsx("div", {
                                                    ref: w.innerRef,
                                                    ...w.draggableProps,
                                                    ...w.dragHandleProps,
                                                    className: `p-2 mb-2 rounded border bg-primary/10 shadow-sm ${y.isDragging ? "shadow-lg rotate-2" : ""}`,
                                                    children: m.jsx("span", {
                                                        className: "font-medium",
                                                        children: g.name
                                                    })
                                                })
                                            }, g.id)), p.placeholder]
                                        })]
                                    })
                                }), m.jsx(_s, {
                                    droppableId: "verdediging",
                                    children: p => m.jsxs("div", {
                                        ref: p.innerRef,
                                        ...p.droppableProps,
                                        children: [m.jsx("h3", {
                                            className: "font-semibold mb-2 p-2 bg-secondary/10 rounded",
                                            children: "Verdedigingsvak"
                                        }), m.jsxs("div", {
                                            className: "min-h-[200px] p-2 border-2 border-dashed border-secondary/30 rounded-lg",
                                            children: [d("verdediging").map( (g, h) => m.jsx(Ic, {
                                                draggableId: g.id,
                                                index: h,
                                                children: (w, y) => m.jsx("div", {
                                                    ref: w.innerRef,
                                                    ...w.draggableProps,
                                                    ...w.dragHandleProps,
                                                    className: `p-2 mb-2 rounded border bg-secondary/10 shadow-sm ${y.isDragging ? "shadow-lg rotate-2" : ""}`,
                                                    children: m.jsx("span", {
                                                        className: "font-medium",
                                                        children: g.name
                                                    })
                                                })
                                            }, g.id)), p.placeholder]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })]
                }), m.jsxs("div", {
                    className: "flex gap-2",
                    children: [m.jsxs(de, {
                        variant: "outline",
                        size: "sm",
                        onClick: u,
                        disabled: !r || r.actions.length === 0,
                        className: "md:size-lg",
                        children: [m.jsx(wN, {
                            className: "h-4 w-4 mr-1 md:mr-2"
                        }), m.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Ongedaan"
                        })]
                    }), m.jsxs(de, {
                        variant: "hero",
                        size: "sm",
                        onClick: () => e("/statistics"),
                        className: "md:size-lg",
                        children: [m.jsx(Qx, {
                            className: "h-4 w-4 mr-1 md:mr-2"
                        }), m.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Statistieken"
                        })]
                    })]
                })]
            }), m.jsx(Ke, {
                className: "mb-4 md:mb-6 shadow-elegant",
                children: m.jsx(qe, {
                    className: "pt-4 md:pt-6",
                    children: m.jsxs("div", {
                        className: "flex items-center justify-center text-center",
                        children: [m.jsx("div", {
                            className: "flex-1",
                            children: m.jsx("h2", {
                                className: "text-lg md:text-2xl font-bold text-primary",
                                children: r.team1Name
                            })
                        }), m.jsx("div", {
                            className: "px-4 md:px-8",
                            children: m.jsxs("div", {
                                className: "text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
                                children: [r.score.team1, " - ", r.score.team2]
                            })
                        }), m.jsx("div", {
                            className: "flex-1",
                            children: m.jsx("h2", {
                                className: "text-lg md:text-2xl font-bold text-secondary",
                                children: r.team2Name
                            })
                        })]
                    })
                })
            }), m.jsx("div", {
                className: "flex justify-center mb-4 md:mb-6",
                children: m.jsxs("div", {
                    className: "flex bg-muted rounded-lg p-1 w-full max-w-md",
                    children: [m.jsxs(de, {
                        variant: o === "aanval" ? "default" : "ghost",
                        onClick: () => i("aanval"),
                        className: "flex items-center gap-1 md:gap-2 flex-1 text-xs md:text-sm",
                        children: [m.jsx(rp, {
                            className: "h-3 w-3 md:h-4 md:w-4"
                        }), m.jsx("span", {
                            className: "hidden sm:inline",
                            children: "1e "
                        }), "Aanval"]
                    }), m.jsxs(de, {
                        variant: o === "verdediging" ? "default" : "ghost",
                        onClick: () => i("verdediging"),
                        className: "flex items-center gap-1 md:gap-2 flex-1 text-xs md:text-sm",
                        children: [m.jsx(tp, {
                            className: "h-3 w-3 md:h-4 md:w-4"
                        }), m.jsx("span", {
                            className: "hidden sm:inline",
                            children: "1e "
                        }), "Verdediging"]
                    })]
                })
            }), m.jsx("div", {
                className: "grid grid-cols-1 gap-3 md:gap-4",
                children: c().map(p => m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        className: "pb-3",
                        children: m.jsxs(dt, {
                            className: "flex items-center justify-between text-base md:text-lg",
                            children: [m.jsx("span", {
                                children: p.name
                            }), m.jsx(tn, {
                                className: o === "aanval" ? "bg-primary" : "bg-secondary",
                                variant: "default",
                                children: o === "aanval" ? "Aanval" : "Verdediging"
                            })]
                        })
                    }), m.jsx(qe, {
                        children: m.jsxs("div", {
                            className: "grid grid-cols-2 gap-3 md:gap-4",
                            children: [m.jsxs("div", {
                                className: "text-center",
                                children: [m.jsx("h4", {
                                    className: "font-semibold text-primary mb-3 text-sm md:text-base",
                                    children: "Voor"
                                }), m.jsxs("div", {
                                    className: "space-y-2",
                                    children: [m.jsxs("div", {
                                        className: "flex flex-col gap-2",
                                        children: [m.jsxs("div", {
                                            className: "text-xs md:text-sm text-muted-foreground",
                                            children: ["Doelpunten: ", r.playerStats[p.id].goals_for]
                                        }), m.jsxs(de, {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: () => l(p.id, "goals_for"),
                                            className: "w-full text-xs md:text-sm bg-primary/10 hover:bg-primary/20",
                                            children: [m.jsx(bv, {
                                                className: "h-3 w-3 md:h-4 md:w-4 mr-1"
                                            }), "Doelpunt"]
                                        })]
                                    }), m.jsxs("div", {
                                        className: "flex flex-col gap-2",
                                        children: [m.jsxs("div", {
                                            className: "text-xs md:text-sm text-muted-foreground",
                                            children: ["Pogingen: ", r.playerStats[p.id].attempts_for]
                                        }), m.jsxs(de, {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: () => l(p.id, "attempts_for"),
                                            className: "w-full text-xs md:text-sm",
                                            children: [m.jsx(Cv, {
                                                className: "h-3 w-3 md:h-4 md:w-4 mr-1"
                                            }), "Poging"]
                                        })]
                                    })]
                                })]
                            }), m.jsxs("div", {
                                className: "text-center",
                                children: [m.jsx("h4", {
                                    className: "font-semibold text-secondary mb-3 text-sm md:text-base",
                                    children: "Tegen"
                                }), m.jsxs("div", {
                                    className: "space-y-2",
                                    children: [m.jsxs("div", {
                                        className: "flex flex-col gap-2",
                                        children: [m.jsxs("div", {
                                            className: "text-xs md:text-sm text-muted-foreground",
                                            children: ["Doelpunten: ", r.playerStats[p.id].goals_against]
                                        }), m.jsxs(de, {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: () => l(p.id, "goals_against"),
                                            className: "w-full text-xs md:text-sm bg-secondary/10 hover:bg-secondary/20",
                                            children: [m.jsx(bv, {
                                                className: "h-3 w-3 md:h-4 md:w-4 mr-1"
                                            }), "Doelpunt"]
                                        })]
                                    }), m.jsxs("div", {
                                        className: "flex flex-col gap-2",
                                        children: [m.jsxs("div", {
                                            className: "text-xs md:text-sm text-muted-foreground",
                                            children: ["Pogingen: ", r.playerStats[p.id].attempts_against]
                                        }), m.jsxs(de, {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: () => l(p.id, "attempts_against"),
                                            className: "w-full text-xs md:text-sm",
                                            children: [m.jsx(Cv, {
                                                className: "h-3 w-3 md:h-4 md:w-4 mr-1"
                                            }), "Poging"]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                }, p.id))
            })]
        })
    }) : m.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: "Loading..."
    })
}
  , QM = () => {
    const e = Da()
      , [t,r] = x.useState(null);
    x.useEffect( () => {
        const c = localStorage.getItem("korfbalGame");
        c ? r(JSON.parse(c)) : e("/setup")
    }
    , [e]);
    const n = c => t ? t.players.filter(p => p.position === c) : []
      , o = (c, p) => p === 0 ? 0 : Math.round(c / p * 100)
      , i = (c, p) => t ? c.reduce( (g, h) => g + t.playerStats[h.id][p], 0) : 0
      , a = () => {
        if (!t)
            return null;
        let c = null
          , p = 0;
        return t.players.forEach(g => {
            const h = t.playerStats[g.id].goals_for;
            h > p && (p = h,
            c = g)
        }
        ),
        c ? {
            player: c,
            goals: p
        } : null
    }
      , s = () => {
        if (!t)
            return null;
        let c = null
          , p = 0;
        return t.players.forEach(g => {
            const h = t.playerStats[g.id];
            if (h.attempts_for > 0) {
                const w = o(h.goals_for, h.attempts_for);
                w > p && (p = w,
                c = g)
            }
        }
        ),
        c ? {
            player: c,
            percentage: p
        } : null
    }
    ;
    if (!t)
        return m.jsx("div", {
            className: "min-h-screen flex items-center justify-center",
            children: "Loading..."
        });
    const l = n("aanval")
      , u = n("verdediging")
      , f = a()
      , d = s();
    return m.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-3 md:p-4",
        children: m.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [m.jsxs("div", {
                className: "flex items-center justify-between mb-4 md:mb-6",
                children: [m.jsxs(de, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => e("/match"),
                    className: "md:size-default",
                    children: [m.jsx(qx, {
                        className: "h-4 w-4 mr-1 md:mr-2"
                    }), m.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Terug naar Wedstrijd"
                    })]
                }), m.jsx("h1", {
                    className: "text-xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center",
                    children: "Wedstrijd Statistieken"
                }), m.jsx("div", {
                    className: "w-16 md:w-0"
                })]
            }), m.jsxs(Ke, {
                className: "mb-4 md:mb-6 shadow-elegant",
                children: [m.jsx(ct, {
                    children: m.jsxs(dt, {
                        className: "flex items-center justify-center gap-2 text-base md:text-lg",
                        children: [m.jsx(np, {
                            className: "h-5 w-5 md:h-6 md:w-6 text-primary"
                        }), "Wedstrijd Overzicht"]
                    })
                }), m.jsx(qe, {
                    children: m.jsxs("div", {
                        className: "text-center",
                        children: [m.jsxs("div", {
                            className: "flex items-center justify-center gap-4 md:gap-8 mb-4",
                            children: [m.jsxs("div", {
                                children: [m.jsx("h3", {
                                    className: "text-lg md:text-xl font-bold text-primary",
                                    children: t.team1Name
                                }), m.jsx("div", {
                                    className: "text-2xl md:text-4xl font-bold text-primary",
                                    children: t.score.team1
                                })]
                            }), m.jsx("div", {
                                className: "text-lg md:text-2xl font-bold text-muted-foreground",
                                children: "VS"
                            }), m.jsxs("div", {
                                children: [m.jsx("h3", {
                                    className: "text-lg md:text-xl font-bold text-secondary",
                                    children: t.team2Name
                                }), m.jsx("div", {
                                    className: "text-2xl md:text-4xl font-bold text-secondary",
                                    children: t.score.team2
                                })]
                            })]
                        }), m.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6",
                            children: [f && m.jsxs("div", {
                                className: "p-3 md:p-4 bg-primary/10 rounded-lg",
                                children: [m.jsx("h4", {
                                    className: "font-semibold text-primary mb-2 text-sm md:text-base",
                                    children: "Topscorer"
                                }), m.jsx("p", {
                                    className: "text-base md:text-lg font-bold",
                                    children: f.player.name
                                }), m.jsxs("p", {
                                    className: "text-xs md:text-sm text-muted-foreground",
                                    children: [f.goals, " doelpunten"]
                                })]
                            }), d && m.jsxs("div", {
                                className: "p-3 md:p-4 bg-secondary/10 rounded-lg",
                                children: [m.jsx("h4", {
                                    className: "font-semibold text-secondary mb-2 text-sm md:text-base",
                                    children: "Best Schot %"
                                }), m.jsx("p", {
                                    className: "text-base md:text-lg font-bold",
                                    children: d.player.name
                                }), m.jsxs("p", {
                                    className: "text-xs md:text-sm text-muted-foreground",
                                    children: [d.percentage, "% raak"]
                                })]
                            })]
                        })]
                    })
                })]
            }), m.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6",
                children: [m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsxs(dt, {
                            className: "flex items-center gap-2",
                            children: [m.jsx(rp, {
                                className: "h-5 w-5 text-primary"
                            }), "1e Aanvalsvak", m.jsxs(tn, {
                                className: "bg-primary text-primary-foreground",
                                children: [l.length, " spelers"]
                            })]
                        })
                    }), m.jsxs(qe, {
                        children: [m.jsxs("div", {
                            className: "grid grid-cols-2 gap-4 mb-4",
                            children: [m.jsxs("div", {
                                className: "text-center p-3 bg-primary/10 rounded",
                                children: [m.jsx("div", {
                                    className: "text-2xl font-bold text-primary",
                                    children: i(l, "goals_for")
                                }), m.jsx("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Doelpunten Voor"
                                })]
                            }), m.jsxs("div", {
                                className: "text-center p-3 bg-secondary/10 rounded",
                                children: [m.jsx("div", {
                                    className: "text-2xl font-bold text-secondary",
                                    children: i(l, "goals_against")
                                }), m.jsx("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Doelpunten Tegen"
                                })]
                            })]
                        }), m.jsxs("div", {
                            className: "space-y-2",
                            children: [m.jsx("h4", {
                                className: "font-semibold mb-2",
                                children: "Speler Details"
                            }), l.map(c => m.jsxs("div", {
                                className: "flex items-center justify-between p-2 bg-muted/50 rounded",
                                children: [m.jsx("span", {
                                    className: "font-medium",
                                    children: c.name
                                }), m.jsxs("div", {
                                    className: "flex gap-4 text-sm",
                                    children: [m.jsxs("span", {
                                        className: "text-primary",
                                        children: [t.playerStats[c.id].goals_for, "G"]
                                    }), m.jsxs("span", {
                                        className: "text-muted-foreground",
                                        children: [o(t.playerStats[c.id].goals_for, t.playerStats[c.id].attempts_for), "%"]
                                    })]
                                })]
                            }, c.id))]
                        })]
                    })]
                }), m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsxs(dt, {
                            className: "flex items-center gap-2",
                            children: [m.jsx(tp, {
                                className: "h-5 w-5 text-secondary"
                            }), "1e Verdedigingsvak", m.jsxs(tn, {
                                className: "bg-secondary text-secondary-foreground",
                                children: [u.length, " spelers"]
                            })]
                        })
                    }), m.jsxs(qe, {
                        children: [m.jsxs("div", {
                            className: "grid grid-cols-2 gap-4 mb-4",
                            children: [m.jsxs("div", {
                                className: "text-center p-3 bg-primary/10 rounded",
                                children: [m.jsx("div", {
                                    className: "text-2xl font-bold text-primary",
                                    children: i(u, "goals_for")
                                }), m.jsx("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Doelpunten Voor"
                                })]
                            }), m.jsxs("div", {
                                className: "text-center p-3 bg-secondary/10 rounded",
                                children: [m.jsx("div", {
                                    className: "text-2xl font-bold text-secondary",
                                    children: i(u, "goals_against")
                                }), m.jsx("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Doelpunten Tegen"
                                })]
                            })]
                        }), m.jsxs("div", {
                            className: "space-y-2",
                            children: [m.jsx("h4", {
                                className: "font-semibold mb-2",
                                children: "Speler Details"
                            }), u.map(c => m.jsxs("div", {
                                className: "flex items-center justify-between p-2 bg-muted/50 rounded",
                                children: [m.jsx("span", {
                                    className: "font-medium",
                                    children: c.name
                                }), m.jsxs("div", {
                                    className: "flex gap-4 text-sm",
                                    children: [m.jsxs("span", {
                                        className: "text-primary",
                                        children: [t.playerStats[c.id].goals_for, "G"]
                                    }), m.jsxs("span", {
                                        className: "text-muted-foreground",
                                        children: [o(t.playerStats[c.id].goals_for, t.playerStats[c.id].attempts_for), "%"]
                                    })]
                                })]
                            }, c.id))]
                        })]
                    })]
                })]
            }), m.jsxs("div", {
                className: "grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6",
                children: [m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsx(dt, {
                            className: "text-primary",
                            children: "Volledige Statistieken - Voor"
                        })
                    }), m.jsx(qe, {
                        children: m.jsx("div", {
                            className: "overflow-x-auto",
                            children: m.jsxs("table", {
                                className: "w-full",
                                children: [m.jsx("thead", {
                                    children: m.jsxs("tr", {
                                        className: "border-b",
                                        children: [m.jsx("th", {
                                            className: "text-left p-2",
                                            children: "Speler"
                                        }), m.jsx("th", {
                                            className: "text-center p-2",
                                            children: "Positie"
                                        }), m.jsx("th", {
                                            className: "text-center p-2",
                                            children: "Doelpunten"
                                        }), m.jsx("th", {
                                            className: "text-center p-2",
                                            children: "Pogingen"
                                        }), m.jsx("th", {
                                            className: "text-center p-2",
                                            children: "%"
                                        })]
                                    })
                                }), m.jsx("tbody", {
                                    children: [...l, ...u].map(c => m.jsxs("tr", {
                                        className: "border-b",
                                        children: [m.jsx("td", {
                                            className: "p-2 font-medium",
                                            children: c.name
                                        }), m.jsx("td", {
                                            className: "text-center p-2",
                                            children: m.jsx(tn, {
                                                variant: c.position === "aanval" ? "default" : "secondary",
                                                children: c.position === "aanval" ? "A" : "V"
                                            })
                                        }), m.jsx("td", {
                                            className: "text-center p-2 font-bold text-primary",
                                            children: t.playerStats[c.id].goals_for
                                        }), m.jsx("td", {
                                            className: "text-center p-2",
                                            children: t.playerStats[c.id].attempts_for
                                        }), m.jsxs("td", {
                                            className: "text-center p-2",
                                            children: [o(t.playerStats[c.id].goals_for, t.playerStats[c.id].attempts_for), "%"]
                                        })]
                                    }, c.id))
                                })]
                            })
                        })
                    })]
                }), m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsx(dt, {
                            className: "text-secondary",
                            children: "Volledige Statistieken - Tegen"
                        })
                    }), m.jsx(qe, {
                        children: m.jsx("div", {
                            className: "overflow-x-auto",
                            children: m.jsxs("table", {
                                className: "w-full",
                                children: [m.jsx("thead", {
                                    children: m.jsxs("tr", {
                                        className: "border-b",
                                        children: [m.jsx("th", {
                                            className: "text-left p-2",
                                            children: "Speler"
                                        }), m.jsx("th", {
                                            className: "text-center p-2",
                                            children: "Positie"
                                        }), m.jsx("th", {
                                            className: "text-center p-2",
                                            children: "Doelpunten"
                                        }), m.jsx("th", {
                                            className: "text-center p-2",
                                            children: "Pogingen"
                                        }), m.jsx("th", {
                                            className: "text-center p-2",
                                            children: "%"
                                        })]
                                    })
                                }), m.jsx("tbody", {
                                    children: [...l, ...u].map(c => m.jsxs("tr", {
                                        className: "border-b",
                                        children: [m.jsx("td", {
                                            className: "p-2 font-medium",
                                            children: c.name
                                        }), m.jsx("td", {
                                            className: "text-center p-2",
                                            children: m.jsx(tn, {
                                                variant: c.position === "aanval" ? "default" : "secondary",
                                                children: c.position === "aanval" ? "A" : "V"
                                            })
                                        }), m.jsx("td", {
                                            className: "text-center p-2 font-bold text-secondary",
                                            children: t.playerStats[c.id].goals_against
                                        }), m.jsx("td", {
                                            className: "text-center p-2",
                                            children: t.playerStats[c.id].attempts_against
                                        }), m.jsxs("td", {
                                            className: "text-center p-2",
                                            children: [o(t.playerStats[c.id].goals_against, t.playerStats[c.id].attempts_against), "%"]
                                        })]
                                    }, c.id))
                                })]
                            })
                        })
                    })]
                })]
            })]
        })
    })
}
  , YM = () => {
    const e = Da()
      , [t,r] = x.useState([]);
    x.useEffect( () => {
        const i = localStorage.getItem("korfbalArchive");
        i && r(JSON.parse(i))
    }
    , []);
    const n = i => {
        const a = t.filter(s => s.id !== i);
        r(a),
        localStorage.setItem("korfbalArchive", JSON.stringify(a))
    }
      , o = i => {
        localStorage.setItem("korfbalGame", JSON.stringify(i)),
        e("/statistics")
    }
    ;
    return m.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-3 md:p-4",
        children: m.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [m.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [m.jsxs(de, {
                    variant: "outline",
                    onClick: () => e("/setup"),
                    children: [m.jsx(qx, {
                        className: "h-4 w-4 mr-2"
                    }), "Terug"]
                }), m.jsx("h1", {
                    className: "text-xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
                    children: "Wedstrijd Archief"
                }), m.jsx("div", {})]
            }), t.length === 0 ? m.jsx(Ke, {
                className: "text-center p-8",
                children: m.jsxs(qe, {
                    children: [m.jsx(hN, {
                        className: "h-12 w-12 text-muted-foreground mx-auto mb-4"
                    }), m.jsx("p", {
                        className: "text-muted-foreground",
                        children: "Nog geen wedstrijden opgeslagen"
                    })]
                })
            }) : m.jsx("div", {
                className: "space-y-4",
                children: t.map(i => m.jsxs(Ke, {
                    className: "shadow-soft",
                    children: [m.jsx(ct, {
                        children: m.jsxs(dt, {
                            className: "flex items-center justify-between",
                            children: [m.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [m.jsx(np, {
                                    className: "h-5 w-5 text-primary"
                                }), m.jsxs("span", {
                                    className: "text-base md:text-lg",
                                    children: [i.team1Name, " vs ", i.team2Name]
                                })]
                            }), m.jsxs("div", {
                                className: "text-xl md:text-2xl font-bold",
                                children: [i.score.team1, " - ", i.score.team2]
                            })]
                        })
                    }), m.jsx(qe, {
                        children: m.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [m.jsxs("div", {
                                className: "text-sm text-muted-foreground",
                                children: [m.jsx("p", {
                                    children: new Date(i.createdAt).toLocaleDateString()
                                }), m.jsxs("p", {
                                    children: ["Modus: ", i.statisticsMode]
                                })]
                            }), m.jsxs("div", {
                                className: "flex gap-2",
                                children: [m.jsx(de, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => o(i),
                                    children: "Bekijk Statistieken"
                                }), m.jsx(de, {
                                    variant: "destructive",
                                    size: "sm",
                                    onClick: () => n(i.id),
                                    children: m.jsx(Os, {
                                        className: "h-4 w-4"
                                    })
                                })]
                            })]
                        })
                    })]
                }, i.id))
            })]
        })
    })
}
  , XM = () => {
    const e = gp();
    return x.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    m.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: m.jsxs("div", {
            className: "text-center",
            children: [m.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), m.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), m.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}
  , JM = new TD
  , ZM = () => m.jsx(RD, {
    client: JM,
    children: m.jsxs(iD, {
        children: [m.jsx(rP, {}), m.jsx(kP, {}), m.jsx(ST, {
            children: m.jsxs(xT, {
                children: [m.jsx(kn, {
                    path: "/",
                    element: m.jsx(PT, {})
                }), m.jsx(kn, {
                    path: "/setup",
                    element: m.jsx(ZI, {})
                }), m.jsx(kn, {
                    path: "/match",
                    element: m.jsx(qM, {})
                }), m.jsx(kn, {
                    path: "/statistics",
                    element: m.jsx(QM, {})
                }), m.jsx(kn, {
                    path: "/archive",
                    element: m.jsx(YM, {})
                }), m.jsx(kn, {
                    path: "*",
                    element: m.jsx(XM, {})
                })]
            })
        })]
    })
});
yx(document.getElementById("root")).render(m.jsx(ZM, {}));
