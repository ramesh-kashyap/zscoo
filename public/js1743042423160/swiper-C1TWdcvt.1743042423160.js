function J(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function q(e = {}, t = {}) {
    Object.keys(t).forEach(s => {
        typeof e[s] > "u" ? e[s] = t[s] : J(t[s]) && J(e[s]) && Object.keys(t[s]).length > 0 && q(e[s], t[s])
    })
}
const ie = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function P() {
    const e = typeof document < "u" ? document : {};
    return q(e, ie), e
}
const he = {
    document: ie,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};

function C() {
    const e = typeof window < "u" ? window : {};
    return q(e, he), e
}

function me(e) {
    const t = e.__proto__;
    Object.defineProperty(e, "__proto__", {
        get() {
            return t
        },
        set(s) {
            t.__proto__ = s
        }
    })
}
class I extends Array {
    constructor(t) {
        typeof t == "number" ? super(t) : (super(...t || []), me(this))
    }
}

function D(e = []) {
    const t = [];
    return e.forEach(s => {
        Array.isArray(s) ? t.push(...D(s)) : t.push(s)
    }), t
}

function ne(e, t) {
    return Array.prototype.filter.call(e, t)
}

function ge(e) {
    const t = [];
    for (let s = 0; s < e.length; s += 1) t.indexOf(e[s]) === -1 && t.push(e[s]);
    return t
}

function ve(e, t) {
    if (typeof e != "string") return [e];
    const s = [],
        i = t.querySelectorAll(e);
    for (let n = 0; n < i.length; n += 1) s.push(i[n]);
    return s
}

function h(e, t) {
    const s = C(),
        i = P();
    let n = [];
    if (!t && e instanceof I) return e;
    if (!e) return new I(n);
    if (typeof e == "string") {
        const r = e.trim();
        if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
            let l = "div";
            r.indexOf("<li") === 0 && (l = "ul"), r.indexOf("<tr") === 0 && (l = "tbody"), (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (l = "tr"), r.indexOf("<tbody") === 0 && (l = "table"), r.indexOf("<option") === 0 && (l = "select");
            const o = i.createElement(l);
            o.innerHTML = r;
            for (let a = 0; a < o.childNodes.length; a += 1) n.push(o.childNodes[a])
        } else n = ve(e.trim(), t || i)
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
        if (e instanceof I) return e;
        n = e
    }
    return new I(ge(n))
}
h.fn = I.prototype;

function we(...e) {
    const t = D(e.map(s => s.split(" ")));
    return this.forEach(s => {
        s.classList.add(...t)
    }), this
}

function Se(...e) {
    const t = D(e.map(s => s.split(" ")));
    return this.forEach(s => {
        s.classList.remove(...t)
    }), this
}

function Te(...e) {
    const t = D(e.map(s => s.split(" ")));
    this.forEach(s => {
        t.forEach(i => {
            s.classList.toggle(i)
        })
    })
}

function ye(...e) {
    const t = D(e.map(s => s.split(" ")));
    return ne(this, s => t.filter(i => s.classList.contains(i)).length > 0).length > 0
}

function be(e, t) {
    if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0;
    for (let s = 0; s < this.length; s += 1)
        if (arguments.length === 2) this[s].setAttribute(e, t);
        else
            for (const i in e) this[s][i] = e[i], this[s].setAttribute(i, e[i]);
    return this
}

function Ee(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this
}

function xe(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this
}

function Ce(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this
}

function Me(...e) {
    let [t, s, i, n] = e;
    typeof e[1] == "function" && ([t, i, n] = e, s = void 0), n || (n = !1);

    function r(d) {
        const c = d.target;
        if (!c) return;
        const f = d.target.dom7EventData || [];
        if (f.indexOf(d) < 0 && f.unshift(d), h(c).is(s)) i.apply(c, f);
        else {
            const u = h(c).parents();
            for (let p = 0; p < u.length; p += 1) h(u[p]).is(s) && i.apply(u[p], f)
        }
    }

    function l(d) {
        const c = d && d.target ? d.target.dom7EventData || [] : [];
        c.indexOf(d) < 0 && c.unshift(d), i.apply(this, c)
    }
    const o = t.split(" ");
    let a;
    for (let d = 0; d < this.length; d += 1) {
        const c = this[d];
        if (s)
            for (a = 0; a < o.length; a += 1) {
                const f = o[a];
                c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[f] || (c.dom7LiveListeners[f] = []), c.dom7LiveListeners[f].push({
                    listener: i,
                    proxyListener: r
                }), c.addEventListener(f, r, n)
            } else
                for (a = 0; a < o.length; a += 1) {
                    const f = o[a];
                    c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[f] || (c.dom7Listeners[f] = []), c.dom7Listeners[f].push({
                        listener: i,
                        proxyListener: l
                    }), c.addEventListener(f, l, n)
                }
    }
    return this
}

function Pe(...e) {
    let [t, s, i, n] = e;
    typeof e[1] == "function" && ([t, i, n] = e, s = void 0), n || (n = !1);
    const r = t.split(" ");
    for (let l = 0; l < r.length; l += 1) {
        const o = r[l];
        for (let a = 0; a < this.length; a += 1) {
            const d = this[a];
            let c;
            if (!s && d.dom7Listeners ? c = d.dom7Listeners[o] : s && d.dom7LiveListeners && (c = d.dom7LiveListeners[o]), c && c.length)
                for (let f = c.length - 1; f >= 0; f -= 1) {
                    const u = c[f];
                    i && u.listener === i || i && u.listener && u.listener.dom7proxy && u.listener.dom7proxy === i ? (d.removeEventListener(o, u.proxyListener, n), c.splice(f, 1)) : i || (d.removeEventListener(o, u.proxyListener, n), c.splice(f, 1))
                }
        }
    }
    return this
}

function Le(...e) {
    const t = C(),
        s = e[0].split(" "),
        i = e[1];
    for (let n = 0; n < s.length; n += 1) {
        const r = s[n];
        for (let l = 0; l < this.length; l += 1) {
            const o = this[l];
            if (t.CustomEvent) {
                const a = new t.CustomEvent(r, {
                    detail: i,
                    bubbles: !0,
                    cancelable: !0
                });
                o.dom7EventData = e.filter((d, c) => c > 0), o.dispatchEvent(a), o.dom7EventData = [], delete o.dom7EventData
            }
        }
    }
    return this
}

function ke(e) {
    const t = this;

    function s(i) {
        i.target === this && (e.call(this, i), t.off("transitionend", s))
    }
    return e && t.on("transitionend", s), this
}

function Oe(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
    }
    return null
}

function $e(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
    }
    return null
}

function Ie() {
    if (this.length > 0) {
        const e = C(),
            t = P(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            r = s.clientTop || n.clientTop || 0,
            l = s.clientLeft || n.clientLeft || 0,
            o = s === e ? e.scrollY : s.scrollTop,
            a = s === e ? e.scrollX : s.scrollLeft;
        return {
            top: i.top + o - r,
            left: i.left + a - l
        }
    }
    return null
}

function ze() {
    const e = C();
    return this[0] ? e.getComputedStyle(this[0], null) : {}
}

function Ae(e, t) {
    const s = C();
    let i;
    if (arguments.length === 1)
        if (typeof e == "string") {
            if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
        } else {
            for (i = 0; i < this.length; i += 1)
                for (const n in e) this[i].style[n] = e[n];
            return this
        }
    if (arguments.length === 2 && typeof e == "string") {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this
    }
    return this
}

function De(e) {
    return e ? (this.forEach((t, s) => {
        e.apply(t, [t, s])
    }), this) : this
}

function Ge(e) {
    const t = ne(this, e);
    return h(t)
}

function Ne(e) {
    if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this
}

function Be(e) {
    if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this
}

function _e(e) {
    const t = C(),
        s = P(),
        i = this[0];
    let n, r;
    if (!i || typeof e > "u") return !1;
    if (typeof e == "string") {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = h(e), r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
        return !1
    }
    if (e === s) return i === s;
    if (e === t) return i === t;
    if (e.nodeType || e instanceof I) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
        return !1
    }
    return !1
}

function Ve() {
    let e = this[0],
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function He(e) {
    if (typeof e > "u") return this;
    const t = this.length;
    if (e > t - 1) return h([]);
    if (e < 0) {
        const s = t + e;
        return s < 0 ? h([]) : h([this[s]])
    }
    return h([this[e]])
}

function Fe(...e) {
    let t;
    const s = P();
    for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let n = 0; n < this.length; n += 1)
            if (typeof t == "string") {
                const r = s.createElement("div");
                for (r.innerHTML = t; r.firstChild;) this[n].appendChild(r.firstChild)
            } else if (t instanceof I)
            for (let r = 0; r < t.length; r += 1) this[n].appendChild(t[r]);
        else this[n].appendChild(t)
    }
    return this
}

function We(e) {
    const t = P();
    let s, i;
    for (s = 0; s < this.length; s += 1)
        if (typeof e == "string") {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(n.childNodes[i], this[s].childNodes[0])
        } else if (e instanceof I)
        for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
    else this[s].insertBefore(e, this[s].childNodes[0]);
    return this
}

function je(e) {
    return this.length > 0 ? e ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e) ? h([this[0].nextElementSibling]) : h([]) : this[0].nextElementSibling ? h([this[0].nextElementSibling]) : h([]) : h([])
}

function Re(e) {
    const t = [];
    let s = this[0];
    if (!s) return h([]);
    for (; s.nextElementSibling;) {
        const i = s.nextElementSibling;
        e ? h(i).is(e) && t.push(i) : t.push(i), s = i
    }
    return h(t)
}

function qe(e) {
    if (this.length > 0) {
        const t = this[0];
        return e ? t.previousElementSibling && h(t.previousElementSibling).is(e) ? h([t.previousElementSibling]) : h([]) : t.previousElementSibling ? h([t.previousElementSibling]) : h([])
    }
    return h([])
}

function Xe(e) {
    const t = [];
    let s = this[0];
    if (!s) return h([]);
    for (; s.previousElementSibling;) {
        const i = s.previousElementSibling;
        e ? h(i).is(e) && t.push(i) : t.push(i), s = i
    }
    return h(t)
}

function Ye(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) this[s].parentNode !== null && (e ? h(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
    return h(t)
}

function Ue(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i;) e ? h(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
    }
    return h(t)
}

function Ke(e) {
    let t = this;
    return typeof e > "u" ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
}

function Je(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let n = 0; n < i.length; n += 1) t.push(i[n])
    }
    return h(t)
}

function Qe(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let n = 0; n < i.length; n += 1)(!e || h(i[n]).is(e)) && t.push(i[n])
    }
    return h(t)
}

function Ze() {
    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this
}
const Q = {
    addClass: we,
    removeClass: Se,
    hasClass: ye,
    toggleClass: Te,
    attr: be,
    removeAttr: Ee,
    transform: xe,
    transition: Ce,
    on: Me,
    off: Pe,
    trigger: Le,
    transitionEnd: ke,
    outerWidth: Oe,
    outerHeight: $e,
    styles: ze,
    offset: Ie,
    css: Ae,
    each: De,
    html: Ne,
    text: Be,
    is: _e,
    index: Ve,
    eq: He,
    append: Fe,
    prepend: We,
    next: je,
    nextAll: Re,
    prev: qe,
    prevAll: Xe,
    parent: Ye,
    parents: Ue,
    closest: Ke,
    find: Je,
    children: Qe,
    filter: Ge,
    remove: Ze
};
Object.keys(Q).forEach(e => {
    Object.defineProperty(h.fn, e, {
        value: Q[e],
        writable: !0
    })
});

function et(e) {
    const t = e;
    Object.keys(t).forEach(s => {
        try {
            t[s] = null
        } catch {}
        try {
            delete t[s]
        } catch {}
    })
}

function B(e, t = 0) {
    return setTimeout(e, t)
}

function A() {
    return Date.now()
}

function tt(e) {
    const t = C();
    let s;
    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
}

function st(e, t = "x") {
    const s = C();
    let i, n, r;
    const l = tt(e);
    return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(o => o.replace(",", ".")).join(", ")), r = new s.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), t === "x" && (s.WebKitCSSMatrix ? n = r.m41 : i.length === 16 ? n = parseFloat(i[12]) : n = parseFloat(i[4])), t === "y" && (s.WebKitCSSMatrix ? n = r.m42 : i.length === 16 ? n = parseFloat(i[13]) : n = parseFloat(i[5])), n || 0
}

function G(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}

function it(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}

function L(...e) {
    const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
        const n = e[i];
        if (n != null && !it(n)) {
            const r = Object.keys(Object(n)).filter(l => s.indexOf(l) < 0);
            for (let l = 0, o = r.length; l < o; l += 1) {
                const a = r[l],
                    d = Object.getOwnPropertyDescriptor(n, a);
                d !== void 0 && d.enumerable && (G(t[a]) && G(n[a]) ? n[a].__swiper__ ? t[a] = n[a] : L(t[a], n[a]) : !G(t[a]) && G(n[a]) ? (t[a] = {}, n[a].__swiper__ ? t[a] = n[a] : L(t[a], n[a])) : t[a] = n[a])
            }
        }
    }
    return t
}

function N(e, t, s) {
    e.style.setProperty(t, s)
}

function re({
    swiper: e,
    targetPosition: t,
    side: s
}) {
    const i = C(),
        n = -e.translate;
    let r = null,
        l;
    const o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
    const a = t > n ? "next" : "prev",
        d = (f, u) => a === "next" && f >= u || a === "prev" && f <= u,
        c = () => {
            l = new Date().getTime(), r === null && (r = l);
            const f = Math.max(Math.min((l - r) / o, 1), 0),
                u = .5 - Math.cos(f * Math.PI) / 2;
            let p = n + u * (t - n);
            if (d(p, t) && (p = t), e.wrapperEl.scrollTo({
                    [s]: p
                }), d(p, t)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [s]: p
                    })
                }), i.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = i.requestAnimationFrame(c)
        };
    c()
}
let H;

function nt() {
    const e = C(),
        t = P();
    return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function() {
            let i = !1;
            try {
                const n = Object.defineProperty({}, "passive", {
                    get() {
                        i = !0
                    }
                });
                e.addEventListener("testPassiveListener", null, n)
            } catch {}
            return i
        }(),
        gestures: function() {
            return "ongesturestart" in e
        }()
    }
}

function ae() {
    return H || (H = nt()), H
}
let F;

function rt({
    userAgent: e
} = {}) {
    const t = ae(),
        s = C(),
        i = s.navigator.platform,
        n = e || s.navigator.userAgent,
        r = {
            ios: !1,
            android: !1
        },
        l = s.screen.width,
        o = s.screen.height,
        a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = n.match(/(iPad).*OS\s([\d_]+)/);
    const c = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        f = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        u = i === "Win32";
    let p = i === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && p && t.touch && v.indexOf(`${l}x${o}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), p = !1), a && !u && (r.os = "android", r.android = !0), (d || f || c) && (r.os = "ios", r.ios = !0), r
}

function at(e = {}) {
    return F || (F = rt(e)), F
}
let W;

function lt() {
    const e = C();

    function t() {
        const s = e.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    return {
        isSafari: t(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}

function ot() {
    return W || (W = lt()), W
}

function dt({
    swiper: e,
    on: t,
    emit: s
}) {
    const i = C();
    let n = null,
        r = null;
    const l = () => {
            !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
        },
        o = () => {
            !e || e.destroyed || !e.initialized || (n = new ResizeObserver(c => {
                r = i.requestAnimationFrame(() => {
                    const {
                        width: f,
                        height: u
                    } = e;
                    let p = f,
                        v = u;
                    c.forEach(({
                        contentBoxSize: g,
                        contentRect: m,
                        target: w
                    }) => {
                        w && w !== e.el || (p = m ? m.width : (g[0] || g).inlineSize, v = m ? m.height : (g[0] || g).blockSize)
                    }), (p !== f || v !== u) && l()
                })
            }), n.observe(e.el))
        },
        a = () => {
            r && i.cancelAnimationFrame(r), n && n.unobserve && e.el && (n.unobserve(e.el), n = null)
        },
        d = () => {
            !e || e.destroyed || !e.initialized || s("orientationchange")
        };
    t("init", () => {
        if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
            o();
            return
        }
        i.addEventListener("resize", l), i.addEventListener("orientationchange", d)
    }), t("destroy", () => {
        a(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", d)
    })
}

function ct({
    swiper: e,
    extendParams: t,
    on: s,
    emit: i
}) {
    const n = [],
        r = C(),
        l = (d, c = {}) => {
            const f = r.MutationObserver || r.WebkitMutationObserver,
                u = new f(p => {
                    if (p.length === 1) {
                        i("observerUpdate", p[0]);
                        return
                    }
                    const v = function() {
                        i("observerUpdate", p[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(v) : r.setTimeout(v, 0)
                });
            u.observe(d, {
                attributes: typeof c.attributes > "u" ? !0 : c.attributes,
                childList: typeof c.childList > "u" ? !0 : c.childList,
                characterData: typeof c.characterData > "u" ? !0 : c.characterData
            }), n.push(u)
        },
        o = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const d = e.$el.parents();
                    for (let c = 0; c < d.length; c += 1) l(d[c])
                }
                l(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), l(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        a = () => {
            n.forEach(d => {
                d.disconnect()
            }), n.splice(0, n.length)
        };
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", o), s("destroy", a)
}
const ut = {
    on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
        const n = s ? "unshift" : "push";
        return e.split(" ").forEach(r => {
            i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][n](t)
        }), i
    },
    once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;

        function n(...r) {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, r)
        }
        return n.__emitterProxy = t, i.on(e, n, s)
    },
    onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
        const i = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
    },
    off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed || !s.eventsListeners || e.split(" ").forEach(i => {
            typeof t > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((n, r) => {
                (n === t || n.__emitterProxy && n.__emitterProxy === t) && s.eventsListeners[i].splice(r, 1)
            })
        }), s
    },
    emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
        let s, i, n;
        return typeof e[0] == "string" || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), n = t) : (s = e[0].events, i = e[0].data, n = e[0].context || t), i.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach(l => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(o => {
                o.apply(n, [l, ...i])
            }), t.eventsListeners && t.eventsListeners[l] && t.eventsListeners[l].forEach(o => {
                o.apply(n, i)
            })
        }), t
    }
};

function ft() {
    const e = this;
    let t, s;
    const i = e.$el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i[0].clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = i[0].clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
    }))
}

function pt() {
    const e = this;

    function t(S) {
        return e.isHorizontal() ? S : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[S]
    }

    function s(S, b) {
        return parseFloat(S.getPropertyValue(t(b)) || 0)
    }
    const i = e.params,
        {
            $wrapperEl: n,
            size: r,
            rtlTranslate: l,
            wrongRTL: o
        } = e,
        a = e.virtual && i.virtual.enabled,
        d = a ? e.virtual.slides.length : e.slides.length,
        c = n.children(`.${e.params.slideClass}`),
        f = a ? e.virtual.slides.length : c.length;
    let u = [];
    const p = [],
        v = [];
    let g = i.slidesOffsetBefore;
    typeof g == "function" && (g = i.slidesOffsetBefore.call(e));
    let m = i.slidesOffsetAfter;
    typeof m == "function" && (m = i.slidesOffsetAfter.call(e));
    const w = e.snapGrid.length,
        T = e.slidesGrid.length;
    let y = i.spaceBetween,
        E = -g,
        k = 0,
        $ = 0;
    if (typeof r > "u") return;
    typeof y == "string" && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * r), e.virtualSize = -y, l ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
    }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
    }), i.centeredSlides && i.cssMode && (N(e.wrapperEl, "--swiper-centered-offset-before", ""), N(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const _ = i.grid && i.grid.rows > 1 && e.grid;
    _ && e.grid.initSlides(f);
    let M;
    const de = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(S => typeof i.breakpoints[S].slidesPerView < "u").length > 0;
    for (let S = 0; S < f; S += 1) {
        M = 0;
        const b = c.eq(S);
        if (_ && e.grid.updateSlide(S, b, f, t), b.css("display") !== "none") {
            if (i.slidesPerView === "auto") {
                de && (c[S].style[t("width")] = "");
                const x = getComputedStyle(b[0]),
                    z = b[0].style.transform,
                    V = b[0].style.webkitTransform;
                if (z && (b[0].style.transform = "none"), V && (b[0].style.webkitTransform = "none"), i.roundLengths) M = e.isHorizontal() ? b.outerWidth(!0) : b.outerHeight(!0);
                else {
                    const X = s(x, "width"),
                        ce = s(x, "padding-left"),
                        ue = s(x, "padding-right"),
                        Y = s(x, "margin-left"),
                        U = s(x, "margin-right"),
                        K = x.getPropertyValue("box-sizing");
                    if (K && K === "border-box") M = X + Y + U;
                    else {
                        const {
                            clientWidth: fe,
                            offsetWidth: pe
                        } = b[0];
                        M = X + ce + ue + Y + U + (pe - fe)
                    }
                }
                z && (b[0].style.transform = z), V && (b[0].style.webkitTransform = V), i.roundLengths && (M = Math.floor(M))
            } else M = (r - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (M = Math.floor(M)), c[S] && (c[S].style[t("width")] = `${M}px`);
            c[S] && (c[S].swiperSlideSize = M), v.push(M), i.centeredSlides ? (E = E + M / 2 + k / 2 + y, k === 0 && S !== 0 && (E = E - r / 2 - y), S === 0 && (E = E - r / 2 - y), Math.abs(E) < 1 / 1e3 && (E = 0), i.roundLengths && (E = Math.floor(E)), $ % i.slidesPerGroup === 0 && u.push(E), p.push(E)) : (i.roundLengths && (E = Math.floor(E)), ($ - Math.min(e.params.slidesPerGroupSkip, $)) % e.params.slidesPerGroup === 0 && u.push(E), p.push(E), E = E + M + y), e.virtualSize += M + y, k = M, $ += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, r) + m, l && o && (i.effect === "slide" || i.effect === "coverflow") && n.css({
            width: `${e.virtualSize+i.spaceBetween}px`
        }), i.setWrapperSize && n.css({
            [t("width")]: `${e.virtualSize+i.spaceBetween}px`
        }), _ && e.grid.updateWrapperSize(M, u, t), !i.centeredSlides) {
        const S = [];
        for (let b = 0; b < u.length; b += 1) {
            let x = u[b];
            i.roundLengths && (x = Math.floor(x)), u[b] <= e.virtualSize - r && S.push(x)
        }
        u = S, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
    }
    if (u.length === 0 && (u = [0]), i.spaceBetween !== 0) {
        const S = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        c.filter((b, x) => i.cssMode ? x !== c.length - 1 : !0).css({
            [S]: `${y}px`
        })
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let S = 0;
        v.forEach(x => {
            S += x + (i.spaceBetween ? i.spaceBetween : 0)
        }), S -= i.spaceBetween;
        const b = S - r;
        u = u.map(x => x < 0 ? -g : x > b ? b + m : x)
    }
    if (i.centerInsufficientSlides) {
        let S = 0;
        if (v.forEach(b => {
                S += b + (i.spaceBetween ? i.spaceBetween : 0)
            }), S -= i.spaceBetween, S < r) {
            const b = (r - S) / 2;
            u.forEach((x, z) => {
                u[z] = x - b
            }), p.forEach((x, z) => {
                p[z] = x + b
            })
        }
    }
    if (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: p,
            slidesSizesGrid: v
        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        N(e.wrapperEl, "--swiper-centered-offset-before", `${-u[0]}px`), N(e.wrapperEl, "--swiper-centered-offset-after", `${e.size/2-v[v.length-1]/2}px`);
        const S = -e.snapGrid[0],
            b = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(x => x + S), e.slidesGrid = e.slidesGrid.map(x => x + b)
    }
    if (f !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== T && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !a && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const S = `${i.containerModifierClass}backface-hidden`,
            b = e.$el.hasClass(S);
        f <= i.maxBackfaceHiddenSlides ? b || e.$el.addClass(S) : b && e.$el.removeClass(S)
    }
}

function ht(e) {
    const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
    let n = 0,
        r;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const l = o => i ? t.slides.filter(a => parseInt(a.getAttribute("data-swiper-slide-index"), 10) === o)[0] : t.slides.eq(o)[0];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)(t.visibleSlides || h([])).each(o => {
            s.push(o)
        });
        else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const o = t.activeIndex + r;
                if (o > t.slides.length && !i) break;
                s.push(l(o))
            } else s.push(l(t.activeIndex));
    for (r = 0; r < s.length; r += 1)
        if (typeof s[r] < "u") {
            const o = s[r].offsetHeight;
            n = o > n ? o : n
        }(n || n === 0) && t.$wrapperEl.css("height", `${n}px`)
}

function mt() {
    const e = this,
        t = e.slides;
    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
}

function gt(e = this && this.translate || 0) {
    const t = this,
        s = t.params,
        {
            slides: i,
            rtlTranslate: n,
            snapGrid: r
        } = t;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let l = -e;
    n && (l = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    for (let o = 0; o < i.length; o += 1) {
        const a = i[o];
        let d = a.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const c = (l + (s.centeredSlides ? t.minTranslate() : 0) - d) / (a.swiperSlideSize + s.spaceBetween),
            f = (l - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (a.swiperSlideSize + s.spaceBetween),
            u = -(l - d),
            p = u + t.slidesSizesGrid[o];
        (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(o), i.eq(o).addClass(s.slideVisibleClass)), a.progress = n ? -c : c, a.originalProgress = n ? -f : f
    }
    t.visibleSlides = h(t.visibleSlides)
}

function vt(e) {
    const t = this;
    if (typeof e > "u") {
        const d = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * d || 0
    }
    const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
    let {
        progress: n,
        isBeginning: r,
        isEnd: l
    } = t;
    const o = r,
        a = l;
    i === 0 ? (n = 0, r = !0, l = !0) : (n = (e - t.minTranslate()) / i, r = n <= 0, l = n >= 1), Object.assign(t, {
        progress: n,
        isBeginning: r,
        isEnd: l
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), l && !a && t.emit("reachEnd toEdge"), (o && !r || a && !l) && t.emit("fromEdge"), t.emit("progress", n)
}

function wt() {
    const e = this,
        {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: r
        } = e,
        l = e.virtual && s.virtual.enabled;
    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`);
    let o;
    l ? o = e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : o = t.eq(n), o.addClass(s.slideActiveClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
    let a = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
    s.loop && a.length === 0 && (a = t.eq(0), a.addClass(s.slideNextClass));
    let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
    s.loop && d.length === 0 && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (a.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
}

function St(e) {
    const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
            slidesGrid: i,
            snapGrid: n,
            params: r,
            activeIndex: l,
            realIndex: o,
            snapIndex: a
        } = t;
    let d = e,
        c;
    if (typeof d > "u") {
        for (let u = 0; u < i.length; u += 1) typeof i[u + 1] < "u" ? s >= i[u] && s < i[u + 1] - (i[u + 1] - i[u]) / 2 ? d = u : s >= i[u] && s < i[u + 1] && (d = u + 1) : s >= i[u] && (d = u);
        r.normalizeSlideIndex && (d < 0 || typeof d > "u") && (d = 0)
    }
    if (n.indexOf(s) >= 0) c = n.indexOf(s);
    else {
        const u = Math.min(r.slidesPerGroupSkip, d);
        c = u + Math.floor((d - u) / r.slidesPerGroup)
    }
    if (c >= n.length && (c = n.length - 1), d === l) {
        c !== a && (t.snapIndex = c, t.emit("snapIndexChange"));
        return
    }
    const f = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
    Object.assign(t, {
        snapIndex: c,
        realIndex: f,
        previousIndex: l,
        activeIndex: d
    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== f && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
}

function Tt(e) {
    const t = this,
        s = t.params,
        i = h(e).closest(`.${s.slideClass}`)[0];
    let n = !1,
        r;
    if (i) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === i) {
                n = !0, r = l;
                break
            }
    }
    if (i && n) t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(h(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r;
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
const yt = {
    updateSize: ft,
    updateSlides: pt,
    updateAutoHeight: ht,
    updateSlidesOffset: mt,
    updateSlidesProgress: gt,
    updateProgress: vt,
    updateSlidesClasses: wt,
    updateActiveIndex: St,
    updateClickedSlide: Tt
};

function bt(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
        {
            params: s,
            rtlTranslate: i,
            translate: n,
            $wrapperEl: r
        } = t;
    if (s.virtualTranslate) return i ? -n : n;
    if (s.cssMode) return n;
    let l = st(r[0], e);
    return i && (l = -l), l || 0
}

function Et(e, t) {
    const s = this,
        {
            rtlTranslate: i,
            params: n,
            $wrapperEl: r,
            wrapperEl: l,
            progress: o
        } = s;
    let a = 0,
        d = 0;
    const c = 0;
    s.isHorizontal() ? a = i ? -e : e : d = e, n.roundLengths && (a = Math.floor(a), d = Math.floor(d)), n.cssMode ? l[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -a : -d : n.virtualTranslate || r.transform(`translate3d(${a}px, ${d}px, ${c}px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? a : d;
    let f;
    const u = s.maxTranslate() - s.minTranslate();
    u === 0 ? f = 0 : f = (e - s.minTranslate()) / u, f !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
}

function xt() {
    return -this.snapGrid[0]
}

function Ct() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function Mt(e = 0, t = this.params.speed, s = !0, i = !0, n) {
    const r = this,
        {
            params: l,
            wrapperEl: o
        } = r;
    if (r.animating && l.preventInteractionOnTransition) return !1;
    const a = r.minTranslate(),
        d = r.maxTranslate();
    let c;
    if (i && e > a ? c = a : i && e < d ? c = d : c = e, r.updateProgress(c), l.cssMode) {
        const f = r.isHorizontal();
        if (t === 0) o[f ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!r.support.smoothScroll) return re({
                swiper: r,
                targetPosition: -c,
                side: f ? "left" : "top"
            }), !0;
            o.scrollTo({
                [f ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(u) {
        !r || r.destroyed || u.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
}
const Pt = {
    getTranslate: bt,
    setTranslate: Et,
    minTranslate: xt,
    maxTranslate: Ct,
    translateTo: Mt
};

function Lt(e, t) {
    const s = this;
    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
}

function le({
    swiper: e,
    runCallbacks: t,
    direction: s,
    step: i
}) {
    const {
        activeIndex: n,
        previousIndex: r
    } = e;
    let l = s;
    if (l || (n > r ? l = "next" : n < r ? l = "prev" : l = "reset"), e.emit(`transition${i}`), t && n !== r) {
        if (l === "reset") {
            e.emit(`slideResetTransition${i}`);
            return
        }
        e.emit(`slideChangeTransition${i}`), l === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
    }
}

function kt(e = !0, t) {
    const s = this,
        {
            params: i
        } = s;
    i.cssMode || (i.autoHeight && s.updateAutoHeight(), le({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}

function Ot(e = !0, t) {
    const s = this,
        {
            params: i
        } = s;
    s.animating = !1, !i.cssMode && (s.setTransition(0), le({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
const $t = {
    setTransition: Lt,
    transitionStart: kt,
    transitionEnd: Ot
};

function It(e = 0, t = this.params.speed, s = !0, i, n) {
    if (typeof e != "number" && typeof e != "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
    if (typeof e == "string") {
        const y = parseInt(e, 10);
        if (!isFinite(y)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = y
    }
    const r = this;
    let l = e;
    l < 0 && (l = 0);
    const {
        params: o,
        snapGrid: a,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: f,
        rtlTranslate: u,
        wrapperEl: p,
        enabled: v
    } = r;
    if (r.animating && o.preventInteractionOnTransition || !v && !i && !n) return !1;
    const g = Math.min(r.params.slidesPerGroupSkip, l);
    let m = g + Math.floor((l - g) / r.params.slidesPerGroup);
    m >= a.length && (m = a.length - 1);
    const w = -a[m];
    if (o.normalizeSlideIndex)
        for (let y = 0; y < d.length; y += 1) {
            const E = -Math.floor(w * 100),
                k = Math.floor(d[y] * 100),
                $ = Math.floor(d[y + 1] * 100);
            typeof d[y + 1] < "u" ? E >= k && E < $ - ($ - k) / 2 ? l = y : E >= k && E < $ && (l = y + 1) : E >= k && (l = y)
        }
    if (r.initialized && l !== f && (!r.allowSlideNext && w < r.translate && w < r.minTranslate() || !r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (f || 0) !== l)) return !1;
    l !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w);
    let T;
    if (l > f ? T = "next" : l < f ? T = "prev" : T = "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(l), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), o.effect !== "slide" && r.setTranslate(w), T !== "reset" && (r.transitionStart(s, T), r.transitionEnd(s, T)), !1;
    if (o.cssMode) {
        const y = r.isHorizontal(),
            E = u ? w : -w;
        if (t === 0) {
            const k = r.virtual && r.params.virtual.enabled;
            k && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), p[y ? "scrollLeft" : "scrollTop"] = E, k && requestAnimationFrame(() => {
                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
            })
        } else {
            if (!r.support.smoothScroll) return re({
                swiper: r,
                targetPosition: E,
                side: y ? "left" : "top"
            }), !0;
            p.scrollTo({
                [y ? "left" : "top"]: E,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(s, T), t === 0 ? r.transitionEnd(s, T) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(E) {
        !r || r.destroyed || E.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, T))
    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
}

function zt(e = 0, t = this.params.speed, s = !0, i) {
    if (typeof e == "string") {
        const l = parseInt(e, 10);
        if (!isFinite(l)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = l
    }
    const n = this;
    let r = e;
    return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i)
}

function At(e = this.params.speed, t = !0, s) {
    const i = this,
        {
            animating: n,
            enabled: r,
            params: l
        } = i;
    if (!r) return i;
    let o = l.slidesPerGroup;
    l.slidesPerView === "auto" && l.slidesPerGroup === 1 && l.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const a = i.activeIndex < l.slidesPerGroupSkip ? 1 : o;
    if (l.loop) {
        if (n && l.loopPreventsSlide) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    return l.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + a, e, t, s)
}

function Dt(e = this.params.speed, t = !0, s) {
    const i = this,
        {
            params: n,
            animating: r,
            snapGrid: l,
            slidesGrid: o,
            rtlTranslate: a,
            enabled: d
        } = i;
    if (!d) return i;
    if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    const c = a ? i.translate : -i.translate;

    function f(m) {
        return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
    }
    const u = f(c),
        p = l.map(m => f(m));
    let v = l[p.indexOf(u) - 1];
    if (typeof v > "u" && n.cssMode) {
        let m;
        l.forEach((w, T) => {
            u >= w && (m = T)
        }), typeof m < "u" && (v = l[m > 0 ? m - 1 : m])
    }
    let g = 0;
    if (typeof v < "u" && (g = o.indexOf(v), g < 0 && (g = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (g = g - i.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), n.rewind && i.isBeginning) {
        const m = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(m, e, t, s)
    }
    return i.slideTo(g, e, t, s)
}

function Gt(e = this.params.speed, t = !0, s) {
    const i = this;
    return i.slideTo(i.activeIndex, e, t, s)
}

function Nt(e = this.params.speed, t = !0, s, i = .5) {
    const n = this;
    let r = n.activeIndex;
    const l = Math.min(n.params.slidesPerGroupSkip, r),
        o = l + Math.floor((r - l) / n.params.slidesPerGroup),
        a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[o]) {
        const d = n.snapGrid[o],
            c = n.snapGrid[o + 1];
        a - d > (c - d) * i && (r += n.params.slidesPerGroup)
    } else {
        const d = n.snapGrid[o - 1],
            c = n.snapGrid[o];
        a - d <= (c - d) * i && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, e, t, s)
}

function Bt() {
    const e = this,
        {
            params: t,
            $wrapperEl: s
        } = e,
        i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let n = e.clickedIndex,
        r;
    if (t.loop) {
        if (e.animating) return;
        r = parseInt(h(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), B(() => {
            e.slideTo(n)
        })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), B(() => {
            e.slideTo(n)
        })) : e.slideTo(n)
    } else e.slideTo(n)
}
const _t = {
    slideTo: It,
    slideToLoop: zt,
    slideNext: At,
    slidePrev: Dt,
    slideReset: Gt,
    slideToClosest: Nt,
    slideToClickedSlide: Bt
};

function Vt() {
    const e = this,
        t = P(),
        {
            params: s,
            $wrapperEl: i
        } = e,
        n = i.children().length > 0 ? h(i.children()[0].parentNode) : i;
    n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
    let r = n.children(`.${s.slideClass}`);
    if (s.loopFillGroupWithBlank) {
        const a = s.slidesPerGroup - r.length % s.slidesPerGroup;
        if (a !== s.slidesPerGroup) {
            for (let d = 0; d < a; d += 1) {
                const c = h(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                n.append(c)
            }
            r = n.children(`.${s.slideClass}`)
        }
    }
    s.slidesPerView === "auto" && !s.loopedSlides && (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
    const l = [],
        o = [];
    r.each((a, d) => {
        h(a).attr("data-swiper-slide-index", d)
    });
    for (let a = 0; a < e.loopedSlides; a += 1) {
        const d = a - Math.floor(a / r.length) * r.length;
        o.push(r.eq(d)[0]), l.unshift(r.eq(r.length - d - 1)[0])
    }
    for (let a = 0; a < o.length; a += 1) n.append(h(o[a].cloneNode(!0)).addClass(s.slideDuplicateClass));
    for (let a = l.length - 1; a >= 0; a -= 1) n.prepend(h(l[a].cloneNode(!0)).addClass(s.slideDuplicateClass))
}

function Ht() {
    const e = this;
    e.emit("beforeLoopFix");
    const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: l,
        rtlTranslate: o
    } = e;
    let a;
    e.allowSlidePrev = !0, e.allowSlideNext = !0;
    const c = -l[t] - e.getTranslate();
    t < i ? (a = s.length - i * 3 + t, a += i, e.slideTo(a, 0, !1, !0) && c !== 0 && e.setTranslate((o ? -e.translate : e.translate) - c)) : t >= s.length - i && (a = -s.length + t + i, a += i, e.slideTo(a, 0, !1, !0) && c !== 0 && e.setTranslate((o ? -e.translate : e.translate) - c)), e.allowSlidePrev = n, e.allowSlideNext = r, e.emit("loopFix")
}

function Ft() {
    const e = this,
        {
            $wrapperEl: t,
            params: s,
            slides: i
        } = e;
    t.children(`.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
}
const Wt = {
    loopCreate: Vt,
    loopFix: Ht,
    loopDestroy: Ft
};

function jt(e) {
    const t = this;
    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
}

function Rt() {
    const e = this;
    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "")
}
const qt = {
    setGrabCursor: jt,
    unsetGrabCursor: Rt
};

function Xt(e, t = this) {
    function s(i) {
        if (!i || i === P() || i === C()) return null;
        i.assignedSlot && (i = i.assignedSlot);
        const n = i.closest(e);
        return !n && !i.getRootNode ? null : n || s(i.getRootNode().host)
    }
    return s(t)
}

function Yt(e) {
    const t = this,
        s = P(),
        i = C(),
        n = t.touchEventsData,
        {
            params: r,
            touches: l,
            enabled: o
        } = t;
    if (!o || t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    let d = h(a.target);
    if (r.touchEventsTarget === "wrapper" && !d.closest(t.wrapperEl).length || (n.isTouchEvent = a.type === "touchstart", !n.isTouchEvent && "which" in a && a.which === 3) || !n.isTouchEvent && "button" in a && a.button > 0 || n.isTouched && n.isMoved) return;
    const c = !!r.noSwipingClass && r.noSwipingClass !== "",
        f = e.composedPath ? e.composedPath() : e.path;
    c && a.target && a.target.shadowRoot && f && (d = h(f[0]));
    const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
        p = !!(a.target && a.target.shadowRoot);
    if (r.noSwiping && (p ? Xt(u, d[0]) : d.closest(u)[0])) {
        t.allowClick = !0;
        return
    }
    if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
    l.currentX = a.type === "touchstart" ? a.targetTouches[0].pageX : a.pageX, l.currentY = a.type === "touchstart" ? a.targetTouches[0].pageY : a.pageY;
    const v = l.currentX,
        g = l.currentY,
        m = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (m && (v <= w || v >= i.innerWidth - w))
        if (m === "prevent") e.preventDefault();
        else return;
    if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), l.startX = v, l.startY = g, n.touchStartTime = A(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1), a.type !== "touchstart") {
        let T = !0;
        d.is(n.focusableElements) && (T = !1, d[0].nodeName === "SELECT" && (n.isTouched = !1)), s.activeElement && h(s.activeElement).is(n.focusableElements) && s.activeElement !== d[0] && s.activeElement.blur();
        const y = T && t.allowTouchMove && r.touchStartPreventDefault;
        (r.touchStartForcePreventDefault || y) && !d[0].isContentEditable && a.preventDefault()
    }
    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", a)
}

function Ut(e) {
    const t = P(),
        s = this,
        i = s.touchEventsData,
        {
            params: n,
            touches: r,
            rtlTranslate: l,
            enabled: o
        } = s;
    if (!o) return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent), !i.isTouched) {
        i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", a);
        return
    }
    if (i.isTouchEvent && a.type !== "touchmove") return;
    const d = a.type === "touchmove" && a.targetTouches && (a.targetTouches[0] || a.changedTouches[0]),
        c = a.type === "touchmove" ? d.pageX : a.pageX,
        f = a.type === "touchmove" ? d.pageY : a.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = c, r.startY = f;
        return
    }
    if (!s.allowTouchMove) {
        h(a.target).is(i.focusableElements) || (s.allowClick = !1), i.isTouched && (Object.assign(r, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f
        }), i.touchStartTime = A());
        return
    }
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
        if (s.isVertical()) {
            if (f < r.startY && s.translate <= s.maxTranslate() || f > r.startY && s.translate >= s.minTranslate()) {
                i.isTouched = !1, i.isMoved = !1;
                return
            }
        } else if (c < r.startX && s.translate <= s.maxTranslate() || c > r.startX && s.translate >= s.minTranslate()) return
    }
    if (i.isTouchEvent && t.activeElement && a.target === t.activeElement && h(a.target).is(i.focusableElements)) {
        i.isMoved = !0, s.allowClick = !1;
        return
    }
    if (i.allowTouchCallbacks && s.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1) return;
    r.currentX = c, r.currentY = f;
    const u = r.currentX - r.startX,
        p = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(u ** 2 + p ** 2) < s.params.threshold) return;
    if (typeof i.isScrolling > "u") {
        let w;
        s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + p * p >= 25 && (w = Math.atan2(Math.abs(p), Math.abs(u)) * 180 / Math.PI, i.isScrolling = s.isHorizontal() ? w > n.touchAngle : 90 - w > n.touchAngle)
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving) return;
    s.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation(), i.isMoved || (n.loop && !n.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, n.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", a)), s.emit("sliderMove", a), i.isMoved = !0;
    let v = s.isHorizontal() ? u : p;
    r.diff = v, v *= n.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
    let g = !0,
        m = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (g = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** m)) : v < 0 && i.currentTranslate < s.maxTranslate() && (g = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** m)), g && (a.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate), n.threshold > 0)
        if (Math.abs(v) > n.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }!n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
}

function Kt(e) {
    const t = this,
        s = t.touchEventsData,
        {
            params: i,
            touches: n,
            rtlTranslate: r,
            slidesGrid: l,
            enabled: o
        } = t;
    if (!o) return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", a), s.allowTouchCallbacks = !1, !s.isTouched) {
        s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
        return
    }
    i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const d = A(),
        c = d - s.touchStartTime;
    if (t.allowClick) {
        const T = a.path || a.composedPath && a.composedPath();
        t.updateClickedSlide(T && T[0] || a.target), t.emit("tap click", a), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a)
    }
    if (s.lastClickTime = A(), B(() => {
            t.destroyed || (t.allowClick = !0)
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || n.diff === 0 || s.currentTranslate === s.startTranslate) {
        s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
        return
    }
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    let f;
    if (i.followFinger ? f = r ? t.translate : -t.translate : f = -s.currentTranslate, i.cssMode) return;
    if (t.params.freeMode && i.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: f
        });
        return
    }
    let u = 0,
        p = t.slidesSizesGrid[0];
    for (let T = 0; T < l.length; T += T < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const y = T < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        typeof l[T + y] < "u" ? f >= l[T] && f < l[T + y] && (u = T, p = l[T + y] - l[T]) : f >= l[T] && (u = T, p = l[l.length - 1] - l[l.length - 2])
    }
    let v = null,
        g = null;
    i.rewind && (t.isBeginning ? g = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
    const m = (f - l[u]) / p,
        w = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
        if (!i.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (m >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : u + w) : t.slideTo(u)), t.swipeDirection === "prev" && (m > 1 - i.longSwipesRatio ? t.slideTo(u + w) : g !== null && m < 0 && Math.abs(m) > i.longSwipesRatio ? t.slideTo(g) : t.slideTo(u))
    } else {
        if (!i.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl) ? a.target === t.navigation.nextEl ? t.slideTo(u + w) : t.slideTo(u) : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : u + w), t.swipeDirection === "prev" && t.slideTo(g !== null ? g : u))
    }
}

function Z() {
    const e = this,
        {
            params: t,
            el: s
        } = e;
    if (s && s.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: i,
        allowSlidePrev: n,
        snapGrid: r
    } = e;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}

function Jt(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
}

function Qt() {
    const e = this,
        {
            wrapperEl: t,
            rtlTranslate: s,
            enabled: i
        } = e;
    if (!i) return;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let n;
    const r = e.maxTranslate() - e.minTranslate();
    r === 0 ? n = 0 : n = (e.translate - e.minTranslate()) / r, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}
let ee = !1;

function Zt() {}
const oe = (e, t) => {
    const s = P(),
        {
            params: i,
            touchEvents: n,
            el: r,
            wrapperEl: l,
            device: o,
            support: a
        } = e,
        d = !!i.nested,
        c = t === "on" ? "addEventListener" : "removeEventListener",
        f = t;
    if (!a.touch) r[c](n.start, e.onTouchStart, !1), s[c](n.move, e.onTouchMove, d), s[c](n.end, e.onTouchEnd, !1);
    else {
        const u = n.start === "touchstart" && a.passiveListener && i.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        r[c](n.start, e.onTouchStart, u), r[c](n.move, e.onTouchMove, a.passiveListener ? {
            passive: !1,
            capture: d
        } : d), r[c](n.end, e.onTouchEnd, u), n.cancel && r[c](n.cancel, e.onTouchEnd, u)
    }(i.preventClicks || i.preventClicksPropagation) && r[c]("click", e.onClick, !0), i.cssMode && l[c]("scroll", e.onScroll), i.updateOnWindowResize ? e[f](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Z, !0) : e[f]("observerUpdate", Z, !0)
};

function es() {
    const e = this,
        t = P(),
        {
            params: s,
            support: i
        } = e;
    e.onTouchStart = Yt.bind(e), e.onTouchMove = Ut.bind(e), e.onTouchEnd = Kt.bind(e), s.cssMode && (e.onScroll = Qt.bind(e)), e.onClick = Jt.bind(e), i.touch && !ee && (t.addEventListener("touchstart", Zt), ee = !0), oe(e, "on")
}

function ts() {
    oe(this, "off")
}
const ss = {
        attachEvents: es,
        detachEvents: ts
    },
    te = (e, t) => e.grid && t.grid && t.grid.rows > 1;

function is() {
    const e = this,
        {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: r
        } = e,
        l = n.breakpoints;
    if (!l || l && Object.keys(l).length === 0) return;
    const o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
    if (!o || e.currentBreakpoint === o) return;
    const d = (o in l ? l[o] : void 0) || e.originalParams,
        c = te(e, n),
        f = te(e, d),
        u = n.enabled;
    c && !f ? (r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && f && (r.addClass(`${n.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && n.grid.fill === "column") && r.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(m => {
        const w = n[m] && n[m].enabled,
            T = d[m] && d[m].enabled;
        w && !T && e[m].disable(), !w && T && e[m].enable()
    });
    const p = d.direction && d.direction !== n.direction,
        v = n.loop && (d.slidesPerView !== n.slidesPerView || p);
    p && s && e.changeDirection(), L(e.params, d);
    const g = e.params.enabled;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), u && !g ? e.disable() : !u && g && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", d), v && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
}

function ns(e, t = "window", s) {
    if (!e || t === "container" && !s) return;
    let i = !1;
    const n = C(),
        r = t === "window" ? n.innerHeight : s.clientHeight,
        l = Object.keys(e).map(o => {
            if (typeof o == "string" && o.indexOf("@") === 0) {
                const a = parseFloat(o.substr(1));
                return {
                    value: r * a,
                    point: o
                }
            }
            return {
                value: o,
                point: o
            }
        });
    l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
    for (let o = 0; o < l.length; o += 1) {
        const {
            point: a,
            value: d
        } = l[o];
        t === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (i = a) : d <= s.clientWidth && (i = a)
    }
    return i || "max"
}
const rs = {
    setBreakpoint: is,
    getBreakpoint: ns
};

function as(e, t) {
    const s = [];
    return e.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(n => {
            i[n] && s.push(t + n)
        }) : typeof i == "string" && s.push(t + i)
    }), s
}

function ls() {
    const e = this,
        {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: r,
            support: l
        } = e,
        o = as(["initialized", s.direction, {
            "pointer-events": !l.touch
        }, {
            "free-mode": e.params.freeMode && s.freeMode.enabled
        }, {
            autoheight: s.autoHeight
        }, {
            rtl: i
        }, {
            grid: s.grid && s.grid.rows > 1
        }, {
            "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": s.cssMode
        }, {
            centered: s.cssMode && s.centeredSlides
        }, {
            "watch-progress": s.watchSlidesProgress
        }], s.containerModifierClass);
    t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses()
}

function os() {
    const e = this,
        {
            $el: t,
            classNames: s
        } = e;
    t.removeClass(s.join(" ")), e.emitContainerClasses()
}
const ds = {
    addClasses: ls,
    removeClasses: os
};

function cs(e, t, s, i, n, r) {
    const l = C();
    let o;

    function a() {
        r && r()
    }!h(e).parent("picture")[0] && (!e.complete || !n) && t ? (o = new l.Image, o.onload = a, o.onerror = a, i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : a()
}

function us() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");

    function t() {
        typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
    }
    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
        const i = e.imagesToLoad[s];
        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
    }
}
const fs = {
    loadImage: cs,
    preloadImages: us
};

function ps() {
    const e = this,
        {
            isLocked: t,
            params: s
        } = e,
        {
            slidesOffsetBefore: i
        } = s;
    if (i) {
        const n = e.slides.length - 1,
            r = e.slidesGrid[n] + e.slidesSizesGrid[n] + i * 2;
        e.isLocked = e.size > r
    } else e.isLocked = e.snapGrid.length === 1;
    s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
const hs = {
        checkOverflow: ps
    },
    se = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function ms(e, t) {
    return function(i = {}) {
        const n = Object.keys(i)[0],
            r = i[n];
        if (typeof r != "object" || r === null) {
            L(t, i);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && e[n] === !0 && (e[n] = {
                auto: !0
            }), !(n in e && "enabled" in r)) {
            L(t, i);
            return
        }
        e[n] === !0 && (e[n] = {
            enabled: !0
        }), typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
        }), L(t, i)
    }
}
const j = {
        eventsEmitter: ut,
        update: yt,
        translate: Pt,
        transition: $t,
        slide: _t,
        loop: Wt,
        grabCursor: qt,
        events: ss,
        breakpoints: rs,
        checkOverflow: hs,
        classes: ds,
        images: fs
    },
    R = {};
class O {
    constructor(...t) {
        let s, i;
        if (t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? i = t[0] : [s, i] = t, i || (i = {}), i = L({}, i), s && !i.el && (i.el = s), i.el && h(i.el).length > 1) {
            const o = [];
            return h(i.el).each(a => {
                const d = L({}, i, {
                    el: a
                });
                o.push(new O(d))
            }), o
        }
        const n = this;
        n.__swiper__ = !0, n.support = ae(), n.device = at({
            userAgent: i.userAgent
        }), n.browser = ot(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
        const r = {};
        n.modules.forEach(o => {
            o({
                swiper: n,
                extendParams: ms(i, r),
                on: n.on.bind(n),
                once: n.once.bind(n),
                off: n.off.bind(n),
                emit: n.emit.bind(n)
            })
        });
        const l = L({}, se, r);
        return n.params = L({}, l, R, i), n.originalParams = L({}, n.params), n.passedParams = L({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(o => {
            n.on(o, n.params.on[o])
        }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = h, Object.assign(n, {
            enabled: n.params.enabled,
            el: s,
            classNames: [],
            slides: h(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return n.params.direction === "horizontal"
            },
            isVertical() {
                return n.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: function() {
                const a = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    d = ["pointerdown", "pointermove", "pointerup"];
                return n.touchEventsTouch = {
                    start: a[0],
                    move: a[1],
                    end: a[2],
                    cancel: a[3]
                }, n.touchEventsDesktop = {
                    start: d[0],
                    move: d[1],
                    end: d[2]
                }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
            }(),
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: A(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), n.emit("_swiper"), n.params.init && n.init(), n
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
    }
    setProgress(t, s) {
        const i = this;
        t = Math.min(Math.max(t, 0), 1);
        const n = i.minTranslate(),
            l = (i.maxTranslate() - n) * t + n;
        i.translateTo(l, typeof s > "u" ? 0 : s), i.updateActiveIndex(), i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = t.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", s.join(" "))
    }
    getSlideClasses(t) {
        const s = this;
        return s.destroyed ? "" : t.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(s.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const s = [];
        t.slides.each(i => {
            const n = t.getSlideClasses(i);
            s.push({
                slideEl: i,
                classNames: n
            }), t.emit("_slideClass", i, n)
        }), t.emit("_slideClasses", s)
    }
    slidesPerViewDynamic(t = "current", s = !1) {
        const i = this,
            {
                params: n,
                slides: r,
                slidesGrid: l,
                slidesSizesGrid: o,
                size: a,
                activeIndex: d
            } = i;
        let c = 1;
        if (n.centeredSlides) {
            let f = r[d].swiperSlideSize,
                u;
            for (let p = d + 1; p < r.length; p += 1) r[p] && !u && (f += r[p].swiperSlideSize, c += 1, f > a && (u = !0));
            for (let p = d - 1; p >= 0; p -= 1) r[p] && !u && (f += r[p].swiperSlideSize, c += 1, f > a && (u = !0))
        } else if (t === "current")
            for (let f = d + 1; f < r.length; f += 1)(s ? l[f] + o[f] - l[d] < a : l[f] - l[d] < a) && (c += 1);
        else
            for (let f = d - 1; f >= 0; f -= 1) l[d] - l[f] < a && (c += 1);
        return c
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const {
            snapGrid: s,
            params: i
        } = t;
        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

        function n() {
            const l = t.rtlTranslate ? t.translate * -1 : t.translate,
                o = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
            t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let r;
        t.params.freeMode && t.params.freeMode.enabled ? (n(), t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? r = t.slideTo(t.slides.length - 1, 0, !1, !0) : r = t.slideTo(t.activeIndex, 0, !1, !0), r || n()), i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update")
    }
    changeDirection(t, s = !0) {
        const i = this,
            n = i.params.direction;
        return t || (t = n === "horizontal" ? "vertical" : "horizontal"), t === n || t !== "horizontal" && t !== "vertical" || (i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.each(r => {
            t === "vertical" ? r.style.width = "" : r.style.height = ""
        }), i.emit("changeDirection"), s && i.update()), i
    }
    changeLanguageDirection(t) {
        const s = this;
        s.rtl && t === "rtl" || !s.rtl && t === "ltr" || (s.rtl = t === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.$el.addClass(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.$el.removeClass(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update())
    }
    mount(t) {
        const s = this;
        if (s.mounted) return !0;
        const i = h(t || s.params.el);
        if (t = i[0], !t) return !1;
        t.swiper = s;
        const n = () => `.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let l = (() => {
            if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                const o = h(t.shadowRoot.querySelector(n()));
                return o.children = a => i.children(a), o
            }
            return i.children ? i.children(n()) : h(i).children(n())
        })();
        if (l.length === 0 && s.params.createElements) {
            const a = P().createElement("div");
            l = h(a), a.className = s.params.wrapperClass, i.append(a), i.children(`.${s.params.slideClass}`).each(d => {
                l.append(d)
            })
        }
        return Object.assign(s, {
            $el: i,
            el: t,
            $wrapperEl: l,
            wrapperEl: l[0],
            mounted: !0,
            rtl: t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl",
            rtlTranslate: s.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl"),
            wrongRTL: l.css("display") === "-webkit-box"
        }), !0
    }
    init(t) {
        const s = this;
        return s.initialized || s.mount(t) === !1 || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.params.loop && s.loopCreate(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.preloadImages && s.preloadImages(), s.params.loop ? s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.attachEvents(), s.initialized = !0, s.emit("init"), s.emit("afterInit")), s
    }
    destroy(t = !0, s = !0) {
        const i = this,
            {
                params: n,
                $el: r,
                $wrapperEl: l,
                slides: o
            } = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), s && (i.removeClasses(), r.removeAttr("style"), l.removeAttr("style"), o && o.length && o.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(a => {
            i.off(a)
        }), t !== !1 && (i.$el[0].swiper = null, et(i)), i.destroyed = !0), null
    }
    static extendDefaults(t) {
        L(R, t)
    }
    static get extendedDefaults() {
        return R
    }
    static get defaults() {
        return se
    }
    static installModule(t) {
        O.prototype.__modules__ || (O.prototype.__modules__ = []);
        const s = O.prototype.__modules__;
        typeof t == "function" && s.indexOf(t) < 0 && s.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(s => O.installModule(s)), O) : (O.installModule(t), O)
    }
}
Object.keys(j).forEach(e => {
    Object.keys(j[e]).forEach(t => {
        O.prototype[t] = j[e][t]
    })
});
O.use([dt, ct]);

function gs({
    swiper: e,
    extendParams: t,
    on: s,
    emit: i
}) {
    let n;
    e.autoplay = {
        running: !1,
        paused: !1
    }, t({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });

    function r() {
        if (!e.size) {
            e.autoplay.running = !1, e.autoplay.paused = !1;
            return
        }
        const g = e.slides.eq(e.activeIndex);
        let m = e.params.autoplay.delay;
        g.attr("data-swiper-autoplay") && (m = g.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(n), n = B(() => {
            let w;
            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), w = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (w = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (w = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), w = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (w = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (w = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || w === !1) && r()
        }, m)
    }

    function l() {
        return typeof n < "u" || e.autoplay.running ? !1 : (e.autoplay.running = !0, i("autoplayStart"), r(), !0)
    }

    function o() {
        return !e.autoplay.running || typeof n > "u" ? !1 : (n && (clearTimeout(n), n = void 0), e.autoplay.running = !1, i("autoplayStop"), !0)
    }

    function a(g) {
        e.autoplay.running && (e.autoplay.paused || (n && clearTimeout(n), e.autoplay.paused = !0, g === 0 || !e.params.autoplay.waitForTransition ? (e.autoplay.paused = !1, r()) : ["transitionend", "webkitTransitionEnd"].forEach(m => {
            e.$wrapperEl[0].addEventListener(m, c)
        })))
    }

    function d() {
        const g = P();
        g.visibilityState === "hidden" && e.autoplay.running && a(), g.visibilityState === "visible" && e.autoplay.paused && (r(), e.autoplay.paused = !1)
    }

    function c(g) {
        !e || e.destroyed || !e.$wrapperEl || g.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(m => {
            e.$wrapperEl[0].removeEventListener(m, c)
        }), e.autoplay.paused = !1, e.autoplay.running ? r() : o())
    }

    function f() {
        e.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"), a()), ["transitionend", "webkitTransitionEnd"].forEach(g => {
            e.$wrapperEl[0].removeEventListener(g, c)
        })
    }

    function u() {
        e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, i("autoplayResume"), r())
    }

    function p() {
        e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", f), e.$el.on("mouseleave", u))
    }

    function v() {
        e.$el.off("mouseenter", f), e.$el.off("mouseleave", u)
    }
    s("init", () => {
        e.params.autoplay.enabled && (l(), P().addEventListener("visibilitychange", d), p())
    }), s("beforeTransitionStart", (g, m, w) => {
        e.autoplay.running && (w || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(m) : o())
    }), s("sliderFirstMove", () => {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : a())
    }), s("touchEnd", () => {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && r()
    }), s("destroy", () => {
        v(), e.autoplay.running && o(), P().removeEventListener("visibilitychange", d)
    }), Object.assign(e.autoplay, {
        pause: a,
        run: r,
        start: l,
        stop: o
    })
}
export {
    gs as A, O as S
};