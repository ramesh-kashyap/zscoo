import {
    s as ot,
    u as W,
    k as st,
    n as it,
    i as z,
    d as Ve,
    l as ct,
    c as T,
    h as qe,
    p as le,
    r as at,
    w as lt
} from "./vant-HuvvDBy8.1743042423160.js";
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const q = typeof document < "u";

function Ge(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function ut(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ge(e.default)
}
const P = Object.assign;

function ue(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = N(o) ? o.map(e) : e(o)
    }
    return n
}
const F = () => {},
    N = Array.isArray,
    Ke = /#/g,
    ft = /&/g,
    ht = /\//g,
    dt = /=/g,
    pt = /\?/g,
    Ue = /\+/g,
    mt = /%5B/g,
    gt = /%5D/g,
    De = /%5E/g,
    vt = /%60/g,
    Qe = /%7B/g,
    yt = /%7C/g,
    We = /%7D/g,
    Rt = /%20/g;

function ge(e) {
    return encodeURI("" + e).replace(yt, "|").replace(mt, "[").replace(gt, "]")
}

function Et(e) {
    return ge(e).replace(Qe, "{").replace(We, "}").replace(De, "^")
}

function de(e) {
    return ge(e).replace(Ue, "%2B").replace(Rt, "+").replace(Ke, "%23").replace(ft, "%26").replace(vt, "`").replace(Qe, "{").replace(We, "}").replace(De, "^")
}

function wt(e) {
    return de(e).replace(dt, "%3D")
}

function Pt(e) {
    return ge(e).replace(Ke, "%23").replace(pt, "%3F")
}

function St(e) {
    return e == null ? "" : Pt(e).replace(ht, "%2F")
}

function X(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const bt = /\/$/,
    kt = e => e.replace(bt, "");

function fe(e, t, n = "/") {
    let r, o = {},
        a = "",
        d = "";
    const g = t.indexOf("#");
    let i = t.indexOf("?");
    return g < i && g >= 0 && (i = -1), i > -1 && (r = t.slice(0, i), a = t.slice(i + 1, g > -1 ? g : t.length), o = e(a)), g > -1 && (r = r || t.slice(0, g), d = t.slice(g, t.length)), r = Ot(r ? ? t, n), {
        fullPath: r + (a && "?") + a + d,
        path: r,
        query: o,
        hash: X(d)
    }
}

function Ct(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function be(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function At(e, t, n) {
    const r = t.matched.length - 1,
        o = n.matched.length - 1;
    return r > -1 && r === o && G(t.matched[r], n.matched[o]) && Fe(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function G(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Fe(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!_t(e[n], t[n])) return !1;
    return !0
}

function _t(e, t) {
    return N(e) ? ke(e, t) : N(t) ? ke(t, e) : e === t
}

function ke(e, t) {
    return N(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Ot(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/"),
        o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let a = n.length - 1,
        d, g;
    for (d = 0; d < r.length; d++)
        if (g = r[d], g !== ".")
            if (g === "..") a > 1 && a--;
            else break;
    return n.slice(0, a).join("/") + "/" + r.slice(d).join("/")
}
const j = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var Z;
(function(e) {
    e.pop = "pop", e.push = "push"
})(Z || (Z = {}));
var Y;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Y || (Y = {}));

function xt(e) {
    if (!e)
        if (q) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), kt(e)
}
const Mt = /^[^#]+#/;

function It(e, t) {
    return e.replace(Mt, "#") + t
}

function Nt(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const te = () => ({
    left: window.scrollX,
    top: window.scrollY
});

function Tt(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o) return;
        t = Nt(o, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Ce(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const pe = new Map;

function Lt(e, t) {
    pe.set(e, t)
}

function $t(e) {
    const t = pe.get(e);
    return pe.delete(e), t
}
let jt = () => location.protocol + "//" + location.host;

function Ye(e, t) {
    const {
        pathname: n,
        search: r,
        hash: o
    } = t, a = e.indexOf("#");
    if (a > -1) {
        let g = o.includes(e.slice(a)) ? e.slice(a).length : 1,
            i = o.slice(g);
        return i[0] !== "/" && (i = "/" + i), be(i, "")
    }
    return be(n, e) + r + o
}

function Bt(e, t, n, r) {
    let o = [],
        a = [],
        d = null;
    const g = ({
        state: l
    }) => {
        const u = Ye(e, location),
            w = n.value,
            S = t.value;
        let C = 0;
        if (l) {
            if (n.value = u, t.value = l, d && d === w) {
                d = null;
                return
            }
            C = S ? l.position - S.position : 0
        } else r(u);
        o.forEach(A => {
            A(n.value, w, {
                delta: C,
                type: Z.pop,
                direction: C ? C > 0 ? Y.forward : Y.back : Y.unknown
            })
        })
    };

    function i() {
        d = n.value
    }

    function f(l) {
        o.push(l);
        const u = () => {
            const w = o.indexOf(l);
            w > -1 && o.splice(w, 1)
        };
        return a.push(u), u
    }

    function h() {
        const {
            history: l
        } = window;
        l.state && l.replaceState(P({}, l.state, {
            scroll: te()
        }), "")
    }

    function c() {
        for (const l of a) l();
        a = [], window.removeEventListener("popstate", g), window.removeEventListener("beforeunload", h)
    }
    return window.addEventListener("popstate", g), window.addEventListener("beforeunload", h, {
        passive: !0
    }), {
        pauseListeners: i,
        listen: f,
        destroy: c
    }
}

function Ae(e, t, n, r = !1, o = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? te() : null
    }
}

function Ht(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: Ye(e, n)
    }, o = {
        value: t.state
    };
    o.value || a(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function a(i, f, h) {
        const c = e.indexOf("#"),
            l = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + i : jt() + e + i;
        try {
            t[h ? "replaceState" : "pushState"](f, "", l), o.value = f
        } catch (u) {
            console.error(u), n[h ? "replace" : "assign"](l)
        }
    }

    function d(i, f) {
        const h = P({}, t.state, Ae(o.value.back, i, o.value.forward, !0), f, {
            position: o.value.position
        });
        a(i, h, !0), r.value = i
    }

    function g(i, f) {
        const h = P({}, o.value, t.state, {
            forward: i,
            scroll: te()
        });
        a(h.current, h, !0);
        const c = P({}, Ae(r.value, i, null), {
            position: h.position + 1
        }, f);
        a(i, c, !1), r.value = i
    }
    return {
        location: r,
        state: o,
        push: g,
        replace: d
    }
}

function dn(e) {
    e = xt(e);
    const t = Ht(e),
        n = Bt(e, t.state, t.location, t.replace);

    function r(a, d = !0) {
        d || n.pauseListeners(), history.go(a)
    }
    const o = P({
        location: "",
        base: e,
        go: r,
        createHref: It.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), o
}

function zt(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function Xe(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Ze = Symbol("");
var _e;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(_e || (_e = {}));

function K(e, t) {
    return P(new Error, {
        type: e,
        [Ze]: !0
    }, t)
}

function L(e, t) {
    return e instanceof Error && Ze in e && (t == null || !!(e.type & t))
}
const Oe = "[^/]+?",
    Vt = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    qt = /[.+*?^${}()[\]/\\]/g;

function Gt(e, t) {
    const n = P({}, Vt, t),
        r = [];
    let o = n.start ? "^" : "";
    const a = [];
    for (const f of e) {
        const h = f.length ? [] : [90];
        n.strict && !f.length && (o += "/");
        for (let c = 0; c < f.length; c++) {
            const l = f[c];
            let u = 40 + (n.sensitive ? .25 : 0);
            if (l.type === 0) c || (o += "/"), o += l.value.replace(qt, "\\$&"), u += 40;
            else if (l.type === 1) {
                const {
                    value: w,
                    repeatable: S,
                    optional: C,
                    regexp: A
                } = l;
                a.push({
                    name: w,
                    repeatable: S,
                    optional: C
                });
                const E = A || Oe;
                if (E !== Oe) {
                    u += 10;
                    try {
                        new RegExp(`(${E})`)
                    } catch (I) {
                        throw new Error(`Invalid custom RegExp for param "${w}" (${E}): ` + I.message)
                    }
                }
                let b = S ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
                c || (b = C && f.length < 2 ? `(?:/${b})` : "/" + b), C && (b += "?"), o += b, u += 20, C && (u += -8), S && (u += -20), E === ".*" && (u += -50)
            }
            h.push(u)
        }
        r.push(h)
    }
    if (n.strict && n.end) {
        const f = r.length - 1;
        r[f][r[f].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
    const d = new RegExp(o, n.sensitive ? "" : "i");

    function g(f) {
        const h = f.match(d),
            c = {};
        if (!h) return null;
        for (let l = 1; l < h.length; l++) {
            const u = h[l] || "",
                w = a[l - 1];
            c[w.name] = u && w.repeatable ? u.split("/") : u
        }
        return c
    }

    function i(f) {
        let h = "",
            c = !1;
        for (const l of e) {
            (!c || !h.endsWith("/")) && (h += "/"), c = !1;
            for (const u of l)
                if (u.type === 0) h += u.value;
                else if (u.type === 1) {
                const {
                    value: w,
                    repeatable: S,
                    optional: C
                } = u, A = w in f ? f[w] : "";
                if (N(A) && !S) throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);
                const E = N(A) ? A.join("/") : A;
                if (!E)
                    if (C) l.length < 2 && (h.endsWith("/") ? h = h.slice(0, -1) : c = !0);
                    else throw new Error(`Missing required param "${w}"`);
                h += E
            }
        }
        return h || "/"
    }
    return {
        re: d,
        score: r,
        keys: a,
        parse: g,
        stringify: i
    }
}

function Kt(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function Je(e, t) {
    let n = 0;
    const r = e.score,
        o = t.score;
    for (; n < r.length && n < o.length;) {
        const a = Kt(r[n], o[n]);
        if (a) return a;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (xe(r)) return 1;
        if (xe(o)) return -1
    }
    return o.length - r.length
}

function xe(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Ut = {
        type: 0,
        value: ""
    },
    Dt = /[a-zA-Z0-9_]/;

function Qt(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [Ut]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(u) {
        throw new Error(`ERR (${n})/"${f}": ${u}`)
    }
    let n = 0,
        r = n;
    const o = [];
    let a;

    function d() {
        a && o.push(a), a = []
    }
    let g = 0,
        i, f = "",
        h = "";

    function c() {
        f && (n === 0 ? a.push({
            type: 0,
            value: f
        }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (i === "*" || i === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), a.push({
            type: 1,
            value: f,
            regexp: h,
            repeatable: i === "*" || i === "+",
            optional: i === "*" || i === "?"
        })) : t("Invalid state to consume buffer"), f = "")
    }

    function l() {
        f += i
    }
    for (; g < e.length;) {
        if (i = e[g++], i === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                i === "/" ? (f && c(), d()) : i === ":" ? (c(), n = 1) : l();
                break;
            case 4:
                l(), n = r;
                break;
            case 1:
                i === "(" ? n = 2 : Dt.test(i) ? l() : (c(), n = 0, i !== "*" && i !== "?" && i !== "+" && g--);
                break;
            case 2:
                i === ")" ? h[h.length - 1] == "\\" ? h = h.slice(0, -1) + i : n = 3 : h += i;
                break;
            case 3:
                c(), n = 0, i !== "*" && i !== "?" && i !== "+" && g--, h = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), c(), d(), o
}

function Wt(e, t, n) {
    const r = Gt(Qt(e.path), n),
        o = P(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}

function Ft(e, t) {
    const n = [],
        r = new Map;
    t = Te({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function o(c) {
        return r.get(c)
    }

    function a(c, l, u) {
        const w = !u,
            S = Ie(c);
        S.aliasOf = u && u.record;
        const C = Te(t, c),
            A = [S];
        if ("alias" in c) {
            const I = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const H of I) A.push(Ie(P({}, S, {
                components: u ? u.record.components : S.components,
                path: H,
                aliasOf: u ? u.record : S
            })))
        }
        let E, b;
        for (const I of A) {
            const {
                path: H
            } = I;
            if (l && H[0] !== "/") {
                const $ = l.record.path,
                    M = $[$.length - 1] === "/" ? "" : "/";
                I.path = l.record.path + (H && M + H)
            }
            if (E = Wt(I, l, C), u ? u.alias.push(E) : (b = b || E, b !== E && b.alias.push(E), w && c.name && !Ne(E) && d(c.name)), et(E) && i(E), S.children) {
                const $ = S.children;
                for (let M = 0; M < $.length; M++) a($[M], E, u && u.children[M])
            }
            u = u || E
        }
        return b ? () => {
            d(b)
        } : F
    }

    function d(c) {
        if (Xe(c)) {
            const l = r.get(c);
            l && (r.delete(c), n.splice(n.indexOf(l), 1), l.children.forEach(d), l.alias.forEach(d))
        } else {
            const l = n.indexOf(c);
            l > -1 && (n.splice(l, 1), c.record.name && r.delete(c.record.name), c.children.forEach(d), c.alias.forEach(d))
        }
    }

    function g() {
        return n
    }

    function i(c) {
        const l = Zt(c, n);
        n.splice(l, 0, c), c.record.name && !Ne(c) && r.set(c.record.name, c)
    }

    function f(c, l) {
        let u, w = {},
            S, C;
        if ("name" in c && c.name) {
            if (u = r.get(c.name), !u) throw K(1, {
                location: c
            });
            C = u.record.name, w = P(Me(l.params, u.keys.filter(b => !b.optional).concat(u.parent ? u.parent.keys.filter(b => b.optional) : []).map(b => b.name)), c.params && Me(c.params, u.keys.map(b => b.name))), S = u.stringify(w)
        } else if (c.path != null) S = c.path, u = n.find(b => b.re.test(S)), u && (w = u.parse(S), C = u.record.name);
        else {
            if (u = l.name ? r.get(l.name) : n.find(b => b.re.test(l.path)), !u) throw K(1, {
                location: c,
                currentLocation: l
            });
            C = u.record.name, w = P({}, l.params, c.params), S = u.stringify(w)
        }
        const A = [];
        let E = u;
        for (; E;) A.unshift(E.record), E = E.parent;
        return {
            name: C,
            path: S,
            params: w,
            matched: A,
            meta: Xt(A)
        }
    }
    e.forEach(c => a(c));

    function h() {
        n.length = 0, r.clear()
    }
    return {
        addRoute: a,
        resolve: f,
        removeRoute: d,
        clearRoutes: h,
        getRoutes: g,
        getRecordMatcher: o
    }
}

function Me(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function Ie(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: Yt(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }), t
}

function Yt(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t
}

function Ne(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function Xt(e) {
    return e.reduce((t, n) => P(t, n.meta), {})
}

function Te(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function Zt(e, t) {
    let n = 0,
        r = t.length;
    for (; n !== r;) {
        const a = n + r >> 1;
        Je(e, t[a]) < 0 ? r = a : n = a + 1
    }
    const o = Jt(e);
    return o && (r = t.lastIndexOf(o, r - 1)), r
}

function Jt(e) {
    let t = e;
    for (; t = t.parent;)
        if (et(t) && Je(e, t) === 0) return t
}

function et({
    record: e
}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function en(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const a = r[o].replace(Ue, " "),
            d = a.indexOf("="),
            g = X(d < 0 ? a : a.slice(0, d)),
            i = d < 0 ? null : X(a.slice(d + 1));
        if (g in t) {
            let f = t[g];
            N(f) || (f = t[g] = [f]), f.push(i)
        } else t[g] = i
    }
    return t
}

function Le(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = wt(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(N(r) ? r.map(a => a && de(a)) : [r && de(r)]).forEach(a => {
            a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a))
        })
    }
    return t
}

function tn(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = N(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const nn = Symbol(""),
    $e = Symbol(""),
    ne = Symbol(""),
    ve = Symbol(""),
    me = Symbol("");

function Q() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function B(e, t, n, r, o, a = d => d()) {
    const d = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((g, i) => {
        const f = l => {
                l === !1 ? i(K(4, {
                    from: n,
                    to: t
                })) : l instanceof Error ? i(l) : zt(l) ? i(K(2, {
                    from: t,
                    to: l
                })) : (d && r.enterCallbacks[o] === d && typeof l == "function" && d.push(l), g())
            },
            h = a(() => e.call(r && r.instances[o], t, n, f));
        let c = Promise.resolve(h);
        e.length < 3 && (c = c.then(f)), c.catch(l => i(l))
    })
}

function he(e, t, n, r, o = a => a()) {
    const a = [];
    for (const d of e)
        for (const g in d.components) {
            let i = d.components[g];
            if (!(t !== "beforeRouteEnter" && !d.instances[g]))
                if (Ge(i)) {
                    const h = (i.__vccOpts || i)[t];
                    h && a.push(B(h, n, r, d, g, o))
                } else {
                    let f = i();
                    a.push(() => f.then(h => {
                        if (!h) throw new Error(`Couldn't resolve component "${g}" at "${d.path}"`);
                        const c = ut(h) ? h.default : h;
                        d.mods[g] = h, d.components[g] = c;
                        const u = (c.__vccOpts || c)[t];
                        return u && B(u, n, r, d, g, o)()
                    }))
                }
        }
    return a
}

function je(e) {
    const t = z(ne),
        n = z(ve),
        r = T(() => {
            const i = W(e.to);
            return t.resolve(i)
        }),
        o = T(() => {
            const {
                matched: i
            } = r.value, {
                length: f
            } = i, h = i[f - 1], c = n.matched;
            if (!h || !c.length) return -1;
            const l = c.findIndex(G.bind(null, h));
            if (l > -1) return l;
            const u = Be(i[f - 2]);
            return f > 1 && Be(h) === u && c[c.length - 1].path !== u ? c.findIndex(G.bind(null, i[f - 2])) : l
        }),
        a = T(() => o.value > -1 && an(n.params, r.value.params)),
        d = T(() => o.value > -1 && o.value === n.matched.length - 1 && Fe(n.params, r.value.params));

    function g(i = {}) {
        if (cn(i)) {
            const f = t[W(e.replace) ? "replace" : "push"](W(e.to)).catch(F);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => f), f
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: T(() => r.value.href),
        isActive: a,
        isExactActive: d,
        navigate: g
    }
}

function rn(e) {
    return e.length === 1 ? e[0] : e
}
const on = Ve({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: je,
        setup(e, {
            slots: t
        }) {
            const n = ct(je(e)),
                {
                    options: r
                } = z(ne),
                o = T(() => ({
                    [He(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [He(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const a = t.default && rn(t.default(n));
                return e.custom ? a : qe("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: o.value
                }, a)
            }
        }
    }),
    sn = on;

function cn(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function an(e, t) {
    for (const n in t) {
        const r = t[n],
            o = e[n];
        if (typeof r == "string") {
            if (r !== o) return !1
        } else if (!N(o) || o.length !== r.length || r.some((a, d) => a !== o[d])) return !1
    }
    return !0
}

function Be(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const He = (e, t, n) => e ? ? t ? ? n,
    ln = Ve({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = z(me),
                o = T(() => e.route || r.value),
                a = z($e, 0),
                d = T(() => {
                    let f = W(a);
                    const {
                        matched: h
                    } = o.value;
                    let c;
                    for (;
                        (c = h[f]) && !c.components;) f++;
                    return f
                }),
                g = T(() => o.value.matched[d.value]);
            le($e, T(() => d.value + 1)), le(nn, g), le(me, o);
            const i = at();
            return lt(() => [i.value, g.value, e.name], ([f, h, c], [l, u, w]) => {
                h && (h.instances[c] = f, u && u !== h && f && f === l && (h.leaveGuards.size || (h.leaveGuards = u.leaveGuards), h.updateGuards.size || (h.updateGuards = u.updateGuards))), f && h && (!u || !G(h, u) || !l) && (h.enterCallbacks[c] || []).forEach(S => S(f))
            }, {
                flush: "post"
            }), () => {
                const f = o.value,
                    h = e.name,
                    c = g.value,
                    l = c && c.components[h];
                if (!l) return ze(n.default, {
                    Component: l,
                    route: f
                });
                const u = c.props[h],
                    w = u ? u === !0 ? f.params : typeof u == "function" ? u(f) : u : null,
                    C = qe(l, P({}, w, t, {
                        onVnodeUnmounted: A => {
                            A.component.isUnmounted && (c.instances[h] = null)
                        },
                        ref: i
                    }));
                return ze(n.default, {
                    Component: C,
                    route: f
                }) || C
            }
        }
    });

function ze(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const un = ln;

function pn(e) {
    const t = Ft(e.routes, e),
        n = e.parseQuery || en,
        r = e.stringifyQuery || Le,
        o = e.history,
        a = Q(),
        d = Q(),
        g = Q(),
        i = ot(j);
    let f = j;
    q && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const h = ue.bind(null, s => "" + s),
        c = ue.bind(null, St),
        l = ue.bind(null, X);

    function u(s, m) {
        let p, v;
        return Xe(s) ? (p = t.getRecordMatcher(s), v = m) : v = s, t.addRoute(v, p)
    }

    function w(s) {
        const m = t.getRecordMatcher(s);
        m && t.removeRoute(m)
    }

    function S() {
        return t.getRoutes().map(s => s.record)
    }

    function C(s) {
        return !!t.getRecordMatcher(s)
    }

    function A(s, m) {
        if (m = P({}, m || i.value), typeof s == "string") {
            const y = fe(n, s, m.path),
                O = t.resolve({
                    path: y.path
                }, m),
                D = o.createHref(y.fullPath);
            return P(y, O, {
                params: l(O.params),
                hash: X(y.hash),
                redirectedFrom: void 0,
                href: D
            })
        }
        let p;
        if (s.path != null) p = P({}, s, {
            path: fe(n, s.path, m.path).path
        });
        else {
            const y = P({}, s.params);
            for (const O in y) y[O] == null && delete y[O];
            p = P({}, s, {
                params: c(y)
            }), m.params = c(m.params)
        }
        const v = t.resolve(p, m),
            k = s.hash || "";
        v.params = h(l(v.params));
        const _ = Ct(r, P({}, s, {
                hash: Et(k),
                path: v.path
            })),
            R = o.createHref(_);
        return P({
            fullPath: _,
            hash: k,
            query: r === Le ? tn(s.query) : s.query || {}
        }, v, {
            redirectedFrom: void 0,
            href: R
        })
    }

    function E(s) {
        return typeof s == "string" ? fe(n, s, i.value.path) : P({}, s)
    }

    function b(s, m) {
        if (f !== s) return K(8, {
            from: m,
            to: s
        })
    }

    function I(s) {
        return M(s)
    }

    function H(s) {
        return I(P(E(s), {
            replace: !0
        }))
    }

    function $(s) {
        const m = s.matched[s.matched.length - 1];
        if (m && m.redirect) {
            const {
                redirect: p
            } = m;
            let v = typeof p == "function" ? p(s) : p;
            return typeof v == "string" && (v = v.includes("?") || v.includes("#") ? v = E(v) : {
                path: v
            }, v.params = {}), P({
                query: s.query,
                hash: s.hash,
                params: v.path != null ? {} : s.params
            }, v)
        }
    }

    function M(s, m) {
        const p = f = A(s),
            v = i.value,
            k = s.state,
            _ = s.force,
            R = s.replace === !0,
            y = $(p);
        if (y) return M(P(E(y), {
            state: typeof y == "object" ? P({}, k, y.state) : k,
            force: _,
            replace: R
        }), m || p);
        const O = p;
        O.redirectedFrom = m;
        let D;
        return !_ && At(r, v, p) && (D = K(16, {
            to: O,
            from: v
        }), Pe(v, v, !0, !1)), (D ? Promise.resolve(D) : ye(O, v)).catch(x => L(x) ? L(x, 2) ? x : ie(x) : se(x, O, v)).then(x => {
            if (x) {
                if (L(x, 2)) return M(P({
                    replace: R
                }, E(x.to), {
                    state: typeof x.to == "object" ? P({}, k, x.to.state) : k,
                    force: _
                }), m || O)
            } else x = Ee(O, v, !0, R, k);
            return Re(O, v, x), x
        })
    }

    function tt(s, m) {
        const p = b(s, m);
        return p ? Promise.reject(p) : Promise.resolve()
    }

    function re(s) {
        const m = ee.values().next().value;
        return m && typeof m.runWithContext == "function" ? m.runWithContext(s) : s()
    }

    function ye(s, m) {
        let p;
        const [v, k, _] = fn(s, m);
        p = he(v.reverse(), "beforeRouteLeave", s, m);
        for (const y of v) y.leaveGuards.forEach(O => {
            p.push(B(O, s, m))
        });
        const R = tt.bind(null, s, m);
        return p.push(R), V(p).then(() => {
            p = [];
            for (const y of a.list()) p.push(B(y, s, m));
            return p.push(R), V(p)
        }).then(() => {
            p = he(k, "beforeRouteUpdate", s, m);
            for (const y of k) y.updateGuards.forEach(O => {
                p.push(B(O, s, m))
            });
            return p.push(R), V(p)
        }).then(() => {
            p = [];
            for (const y of _)
                if (y.beforeEnter)
                    if (N(y.beforeEnter))
                        for (const O of y.beforeEnter) p.push(B(O, s, m));
                    else p.push(B(y.beforeEnter, s, m));
            return p.push(R), V(p)
        }).then(() => (s.matched.forEach(y => y.enterCallbacks = {}), p = he(_, "beforeRouteEnter", s, m, re), p.push(R), V(p))).then(() => {
            p = [];
            for (const y of d.list()) p.push(B(y, s, m));
            return p.push(R), V(p)
        }).catch(y => L(y, 8) ? y : Promise.reject(y))
    }

    function Re(s, m, p) {
        g.list().forEach(v => re(() => v(s, m, p)))
    }

    function Ee(s, m, p, v, k) {
        const _ = b(s, m);
        if (_) return _;
        const R = m === j,
            y = q ? history.state : {};
        p && (v || R ? o.replace(s.fullPath, P({
            scroll: R && y && y.scroll
        }, k)) : o.push(s.fullPath, k)), i.value = s, Pe(s, m, p, R), ie()
    }
    let U;

    function nt() {
        U || (U = o.listen((s, m, p) => {
            if (!Se.listening) return;
            const v = A(s),
                k = $(v);
            if (k) {
                M(P(k, {
                    replace: !0,
                    force: !0
                }), v).catch(F);
                return
            }
            f = v;
            const _ = i.value;
            q && Lt(Ce(_.fullPath, p.delta), te()), ye(v, _).catch(R => L(R, 12) ? R : L(R, 2) ? (M(P(E(R.to), {
                force: !0
            }), v).then(y => {
                L(y, 20) && !p.delta && p.type === Z.pop && o.go(-1, !1)
            }).catch(F), Promise.reject()) : (p.delta && o.go(-p.delta, !1), se(R, v, _))).then(R => {
                R = R || Ee(v, _, !1), R && (p.delta && !L(R, 8) ? o.go(-p.delta, !1) : p.type === Z.pop && L(R, 20) && o.go(-1, !1)), Re(v, _, R)
            }).catch(F)
        }))
    }
    let oe = Q(),
        we = Q(),
        J;

    function se(s, m, p) {
        ie(s);
        const v = we.list();
        return v.length ? v.forEach(k => k(s, m, p)) : console.error(s), Promise.reject(s)
    }

    function rt() {
        return J && i.value !== j ? Promise.resolve() : new Promise((s, m) => {
            oe.add([s, m])
        })
    }

    function ie(s) {
        return J || (J = !s, nt(), oe.list().forEach(([m, p]) => s ? p(s) : m()), oe.reset()), s
    }

    function Pe(s, m, p, v) {
        const {
            scrollBehavior: k
        } = e;
        if (!q || !k) return Promise.resolve();
        const _ = !p && $t(Ce(s.fullPath, 0)) || (v || !p) && history.state && history.state.scroll || null;
        return it().then(() => k(s, m, _)).then(R => R && Tt(R)).catch(R => se(R, s, m))
    }
    const ce = s => o.go(s);
    let ae;
    const ee = new Set,
        Se = {
            currentRoute: i,
            listening: !0,
            addRoute: u,
            removeRoute: w,
            clearRoutes: t.clearRoutes,
            hasRoute: C,
            getRoutes: S,
            resolve: A,
            options: e,
            push: I,
            replace: H,
            go: ce,
            back: () => ce(-1),
            forward: () => ce(1),
            beforeEach: a.add,
            beforeResolve: d.add,
            afterEach: g.add,
            onError: we.add,
            isReady: rt,
            install(s) {
                const m = this;
                s.component("RouterLink", sn), s.component("RouterView", un), s.config.globalProperties.$router = m, Object.defineProperty(s.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => W(i)
                }), q && !ae && i.value === j && (ae = !0, I(o.location).catch(k => {}));
                const p = {};
                for (const k in j) Object.defineProperty(p, k, {
                    get: () => i.value[k],
                    enumerable: !0
                });
                s.provide(ne, m), s.provide(ve, st(p)), s.provide(me, i);
                const v = s.unmount;
                ee.add(s), s.unmount = function() {
                    ee.delete(s), ee.size < 1 && (f = j, U && U(), U = null, i.value = j, ae = !1, J = !1), v()
                }
            }
        };

    function V(s) {
        return s.reduce((m, p) => m.then(() => re(p)), Promise.resolve())
    }
    return Se
}

function fn(e, t) {
    const n = [],
        r = [],
        o = [],
        a = Math.max(t.matched.length, e.matched.length);
    for (let d = 0; d < a; d++) {
        const g = t.matched[d];
        g && (e.matched.find(f => G(f, g)) ? r.push(g) : n.push(g));
        const i = e.matched[d];
        i && (t.matched.find(f => G(f, i)) || o.push(i))
    }
    return [n, r, o]
}

function mn() {
    return z(ne)
}

function gn(e) {
    return z(ve)
}
export {
    gn as a, dn as b, pn as c, mn as u
};