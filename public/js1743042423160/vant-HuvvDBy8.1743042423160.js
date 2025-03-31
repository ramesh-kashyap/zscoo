/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Zr(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}
const Ee = {},
    jn = [],
    At = () => {},
    Iu = () => !1,
    Ii = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Jr = e => e.startsWith("onUpdate:"),
    Ue = Object.assign,
    Qr = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    Au = Object.prototype.hasOwnProperty,
    Se = (e, t) => Au.call(e, t),
    re = Array.isArray,
    Wn = e => ro(e) === "[object Map]",
    io = e => ro(e) === "[object Set]",
    Vl = e => ro(e) === "[object Date]",
    Pu = e => ro(e) === "[object RegExp]",
    he = e => typeof e == "function",
    Ie = e => typeof e == "string",
    St = e => typeof e == "symbol",
    Oe = e => e !== null && typeof e == "object",
    gs = e => (Oe(e) || he(e)) && he(e.then) && he(e.catch),
    ms = Object.prototype.toString,
    ro = e => ms.call(e),
    Bu = e => ro(e).slice(8, -1),
    bs = e => ro(e) === "[object Object]",
    el = e => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    So = Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Ai = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    $u = /-(\w)/g,
    bt = Ai(e => e.replace($u, (t, n) => n ? n.toUpperCase() : "")),
    Ru = /\B([A-Z])/g,
    qt = Ai(e => e.replace(Ru, "-$1").toLowerCase()),
    Pi = Ai(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Zi = Ai(e => e ? `on${Pi(e)}` : ""),
    an = (e, t) => !Object.is(e, t),
    Un = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    ys = (e, t, n, o = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: o,
            value: n
        })
    },
    vi = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    Mu = e => {
        const t = Ie(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Nl;
const Bi = () => Nl || (Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function $i(e) {
    if (re(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n],
                i = Ie(o) ? Nu(o) : $i(o);
            if (i)
                for (const r in i) t[r] = i[r]
        }
        return t
    } else if (Ie(e) || Oe(e)) return e
}
const Fu = /;(?![^(]*\))/g,
    Lu = /:([^]+)/,
    Vu = /\/\*[^]*?\*\//g;

function Nu(e) {
    const t = {};
    return e.replace(Vu, "").split(Fu).forEach(n => {
        if (n) {
            const o = n.split(Lu);
            o.length > 1 && (t[o[0].trim()] = o[1].trim())
        }
    }), t
}

function Hu(e) {
    if (!e) return "";
    if (Ie(e)) return e;
    let t = "";
    for (const n in e) {
        const o = e[n];
        if (Ie(o) || typeof o == "number") {
            const i = n.startsWith("--") ? n : qt(n);
            t += `${i}:${o};`
        }
    }
    return t
}

function Ri(e) {
    let t = "";
    if (Ie(e)) t = e;
    else if (re(e))
        for (let n = 0; n < e.length; n++) {
            const o = Ri(e[n]);
            o && (t += o + " ")
        } else if (Oe(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const zu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    ju = Zr(zu);

function ps(e) {
    return !!e || e === ""
}

function Wu(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let o = 0; n && o < e.length; o++) n = Dn(e[o], t[o]);
    return n
}

function Dn(e, t) {
    if (e === t) return !0;
    let n = Vl(e),
        o = Vl(t);
    if (n || o) return n && o ? e.getTime() === t.getTime() : !1;
    if (n = St(e), o = St(t), n || o) return e === t;
    if (n = re(e), o = re(t), n || o) return n && o ? Wu(e, t) : !1;
    if (n = Oe(e), o = Oe(t), n || o) {
        if (!n || !o) return !1;
        const i = Object.keys(e).length,
            r = Object.keys(t).length;
        if (i !== r) return !1;
        for (const l in e) {
            const a = e.hasOwnProperty(l),
                s = t.hasOwnProperty(l);
            if (a && !s || !a && s || !Dn(e[l], t[l])) return !1
        }
    }
    return String(e) === String(t)
}

function tl(e, t) {
    return e.findIndex(n => Dn(n, t))
}
const ws = e => !!(e && e.__v_isRef === !0),
    Uu = e => Ie(e) ? e : e == null ? "" : re(e) || Oe(e) && (e.toString === ms || !he(e.toString)) ? ws(e) ? Uu(e.value) : JSON.stringify(e, xs, 2) : String(e),
    xs = (e, t) => ws(t) ? xs(e, t.value) : Wn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, i], r) => (n[Ji(o, r) + " =>"] = i, n), {})
    } : io(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => Ji(n))
    } : St(t) ? Ji(t) : Oe(t) && !re(t) && !bs(t) ? String(t) : t,
    Ji = (e, t = "") => {
        var n;
        return St(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let ct;
class Ss {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ct, !t && ct && (this.index = (ct.scopes || (ct.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = ct;
            try {
                return ct = this, t()
            } finally {
                ct = n
            }
        }
    }
    on() {
        ct = this
    }
    off() {
        ct = this.parent
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, o;
            for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function Wy(e) {
    return new Ss(e)
}

function Ku() {
    return ct
}
let De;
const Qi = new WeakSet;
class Cs {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ct && ct.active && ct.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, Qi.has(this) && (Qi.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _s(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Hl(this), Es(this);
        const t = De,
            n = wt;
        De = this, wt = !0;
        try {
            return this.fn()
        } finally {
            Os(this), De = t, wt = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) il(t);
            this.deps = this.depsTail = void 0, Hl(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Qi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        xr(this) && this.run()
    }
    get dirty() {
        return xr(this)
    }
}
let Ts = 0,
    Co, To;

function _s(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = To, To = e;
        return
    }
    e.next = Co, Co = e
}

function nl() {
    Ts++
}

function ol() {
    if (--Ts > 0) return;
    if (To) {
        let t = To;
        for (To = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; Co;) {
        let t = Co;
        for (Co = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (o) {
                e || (e = o)
            }
            t = n
        }
    }
    if (e) throw e
}

function Es(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Os(e) {
    let t, n = e.depsTail,
        o = n;
    for (; o;) {
        const i = o.prevDep;
        o.version === -1 ? (o === n && (n = i), il(o), Yu(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i
    }
    e.deps = t, e.depsTail = n
}

function xr(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (ks(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function ks(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Io)) return;
    e.globalVersion = Io;
    const t = e.dep;
    if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !xr(e)) {
        e.flags &= -3;
        return
    }
    const n = De,
        o = wt;
    De = e, wt = !0;
    try {
        Es(e);
        const i = e.fn(e._value);
        (t.version === 0 || an(i, e._value)) && (e._value = i, t.version++)
    } catch (i) {
        throw t.version++, i
    } finally {
        De = n, wt = o, Os(e), e.flags &= -3
    }
}

function il(e, t = !1) {
    const {
        dep: n,
        prevSub: o,
        nextSub: i
    } = e;
    if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), n.subs === e && (n.subs = o, !o && n.computed)) {
        n.computed.flags &= -5;
        for (let r = n.computed.deps; r; r = r.nextDep) il(r, !0)
    }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function Yu(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let wt = !0;
const Ds = [];

function dn() {
    Ds.push(wt), wt = !1
}

function hn() {
    const e = Ds.pop();
    wt = e === void 0 ? !0 : e
}

function Hl(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const n = De;
        De = void 0;
        try {
            t()
        } finally {
            De = n
        }
    }
}
let Io = 0;
class qu {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class rl {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
    }
    track(t) {
        if (!De || !wt || De === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== De) n = this.activeLink = new qu(De, this), De.deps ? (n.prevDep = De.depsTail, De.depsTail.nextDep = n, De.depsTail = n) : De.deps = De.depsTail = n, Is(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const o = n.nextDep;
            o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = De.depsTail, n.nextDep = void 0, De.depsTail.nextDep = n, De.depsTail = n, De.deps === n && (De.deps = o)
        }
        return n
    }
    trigger(t) {
        this.version++, Io++, this.notify(t)
    }
    notify(t) {
        nl();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            ol()
        }
    }
}

function Is(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let o = t.deps; o; o = o.nextDep) Is(o)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const Sr = new WeakMap,
    En = Symbol(""),
    Cr = Symbol(""),
    Ao = Symbol("");

function Ge(e, t, n) {
    if (wt && De) {
        let o = Sr.get(e);
        o || Sr.set(e, o = new Map);
        let i = o.get(n);
        i || (o.set(n, i = new rl), i.map = o, i.key = n), i.track()
    }
}

function Ft(e, t, n, o, i, r) {
    const l = Sr.get(e);
    if (!l) {
        Io++;
        return
    }
    const a = s => {
        s && s.trigger()
    };
    if (nl(), t === "clear") l.forEach(a);
    else {
        const s = re(e),
            u = s && el(n);
        if (s && n === "length") {
            const c = Number(o);
            l.forEach((f, h) => {
                (h === "length" || h === Ao || !St(h) && h >= c) && a(f)
            })
        } else switch ((n !== void 0 || l.has(void 0)) && a(l.get(n)), u && a(l.get(Ao)), t) {
            case "add":
                s ? u && a(l.get("length")) : (a(l.get(En)), Wn(e) && a(l.get(Cr)));
                break;
            case "delete":
                s || (a(l.get(En)), Wn(e) && a(l.get(Cr)));
                break;
            case "set":
                Wn(e) && a(l.get(En));
                break
        }
    }
    ol()
}

function Rn(e) {
    const t = we(e);
    return t === e ? t : (Ge(t, "iterate", Ao), vt(e) ? t : t.map(Xe))
}

function Mi(e) {
    return Ge(e = we(e), "iterate", Ao), e
}
const Gu = {
    __proto__: null,
    [Symbol.iterator]() {
        return er(this, Symbol.iterator, Xe)
    },
    concat(...e) {
        return Rn(this).concat(...e.map(t => re(t) ? Rn(t) : t))
    },
    entries() {
        return er(this, "entries", e => (e[1] = Xe(e[1]), e))
    },
    every(e, t) {
        return Bt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Bt(this, "filter", e, t, n => n.map(Xe), arguments)
    },
    find(e, t) {
        return Bt(this, "find", e, t, Xe, arguments)
    },
    findIndex(e, t) {
        return Bt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Bt(this, "findLast", e, t, Xe, arguments)
    },
    findLastIndex(e, t) {
        return Bt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Bt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return tr(this, "includes", e)
    },
    indexOf(...e) {
        return tr(this, "indexOf", e)
    },
    join(e) {
        return Rn(this).join(e)
    },
    lastIndexOf(...e) {
        return tr(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Bt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return uo(this, "pop")
    },
    push(...e) {
        return uo(this, "push", e)
    },
    reduce(e, ...t) {
        return zl(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return zl(this, "reduceRight", e, t)
    },
    shift() {
        return uo(this, "shift")
    },
    some(e, t) {
        return Bt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return uo(this, "splice", e)
    },
    toReversed() {
        return Rn(this).toReversed()
    },
    toSorted(e) {
        return Rn(this).toSorted(e)
    },
    toSpliced(...e) {
        return Rn(this).toSpliced(...e)
    },
    unshift(...e) {
        return uo(this, "unshift", e)
    },
    values() {
        return er(this, "values", Xe)
    }
};

function er(e, t, n) {
    const o = Mi(e),
        i = o[t]();
    return o !== e && !vt(e) && (i._next = i.next, i.next = () => {
        const r = i._next();
        return r.value && (r.value = n(r.value)), r
    }), i
}
const Xu = Array.prototype;

function Bt(e, t, n, o, i, r) {
    const l = Mi(e),
        a = l !== e && !vt(e),
        s = l[t];
    if (s !== Xu[t]) {
        const f = s.apply(e, r);
        return a ? Xe(f) : f
    }
    let u = n;
    l !== e && (a ? u = function(f, h) {
        return n.call(this, Xe(f), h, e)
    } : n.length > 2 && (u = function(f, h) {
        return n.call(this, f, h, e)
    }));
    const c = s.call(l, u, o);
    return a && i ? i(c) : c
}

function zl(e, t, n, o) {
    const i = Mi(e);
    let r = n;
    return i !== e && (vt(e) ? n.length > 3 && (r = function(l, a, s) {
        return n.call(this, l, a, s, e)
    }) : r = function(l, a, s) {
        return n.call(this, l, Xe(a), s, e)
    }), i[t](r, ...o)
}

function tr(e, t, n) {
    const o = we(e);
    Ge(o, "iterate", Ao);
    const i = o[t](...n);
    return (i === -1 || i === !1) && sl(n[0]) ? (n[0] = we(n[0]), o[t](...n)) : i
}

function uo(e, t, n = []) {
    dn(), nl();
    const o = we(e)[t].apply(e, n);
    return ol(), hn(), o
}
const Zu = Zr("__proto__,__v_isRef,__isVue"),
    As = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(St));

function Ju(e) {
    St(e) || (e = String(e));
    const t = we(this);
    return Ge(t, "has", e), t.hasOwnProperty(e)
}
class Ps {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, o) {
        if (n === "__v_skip") return t.__v_skip;
        const i = this._isReadonly,
            r = this._isShallow;
        if (n === "__v_isReactive") return !i;
        if (n === "__v_isReadonly") return i;
        if (n === "__v_isShallow") return r;
        if (n === "__v_raw") return o === (i ? r ? cf : Ms : r ? Rs : $s).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
        const l = re(t);
        if (!i) {
            let s;
            if (l && (s = Gu[n])) return s;
            if (n === "hasOwnProperty") return Ju
        }
        const a = Reflect.get(t, n, Ye(t) ? t : o);
        return (St(n) ? As.has(n) : Zu(n)) || (i || Ge(t, "get", n), r) ? a : Ye(a) ? l && el(n) ? a : a.value : Oe(a) ? i ? Fs(a) : Ke(a) : a
    }
}
class Bs extends Ps {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, o, i) {
        let r = t[n];
        if (!this._isShallow) {
            const s = In(r);
            if (!vt(o) && !In(o) && (r = we(r), o = we(o)), !re(t) && Ye(r) && !Ye(o)) return s ? !1 : (r.value = o, !0)
        }
        const l = re(t) && el(n) ? Number(n) < t.length : Se(t, n),
            a = Reflect.set(t, n, o, Ye(t) ? t : i);
        return t === we(i) && (l ? an(o, r) && Ft(t, "set", n, o) : Ft(t, "add", n, o)), a
    }
    deleteProperty(t, n) {
        const o = Se(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && o && Ft(t, "delete", n, void 0), i
    }
    has(t, n) {
        const o = Reflect.has(t, n);
        return (!St(n) || !As.has(n)) && Ge(t, "has", n), o
    }
    ownKeys(t) {
        return Ge(t, "iterate", re(t) ? "length" : En), Reflect.ownKeys(t)
    }
}
class Qu extends Ps {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const ef = new Bs,
    tf = new Qu,
    nf = new Bs(!0);
const Tr = e => e,
    Ko = e => Reflect.getPrototypeOf(e);

function of (e, t, n) {
    return function(...o) {
        const i = this.__v_raw,
            r = we(i),
            l = Wn(r),
            a = e === "entries" || e === Symbol.iterator && l,
            s = e === "keys" && l,
            u = i[e](...o),
            c = n ? Tr : t ? _r : Xe;
        return !t && Ge(r, "iterate", s ? Cr : En), {
            next() {
                const {
                    value: f,
                    done: h
                } = u.next();
                return h ? {
                    value: f,
                    done: h
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Yo(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function rf(e, t) {
    const n = {
        get(i) {
            const r = this.__v_raw,
                l = we(r),
                a = we(i);
            e || (an(i, a) && Ge(l, "get", i), Ge(l, "get", a));
            const {
                has: s
            } = Ko(l), u = t ? Tr : e ? _r : Xe;
            if (s.call(l, i)) return u(r.get(i));
            if (s.call(l, a)) return u(r.get(a));
            r !== l && r.get(i)
        },
        get size() {
            const i = this.__v_raw;
            return !e && Ge(we(i), "iterate", En), Reflect.get(i, "size", i)
        },
        has(i) {
            const r = this.__v_raw,
                l = we(r),
                a = we(i);
            return e || (an(i, a) && Ge(l, "has", i), Ge(l, "has", a)), i === a ? r.has(i) : r.has(i) || r.has(a)
        },
        forEach(i, r) {
            const l = this,
                a = l.__v_raw,
                s = we(a),
                u = t ? Tr : e ? _r : Xe;
            return !e && Ge(s, "iterate", En), a.forEach((c, f) => i.call(r, u(c), u(f), l))
        }
    };
    return Ue(n, e ? {
        add: Yo("add"),
        set: Yo("set"),
        delete: Yo("delete"),
        clear: Yo("clear")
    } : {
        add(i) {
            !t && !vt(i) && !In(i) && (i = we(i));
            const r = we(this);
            return Ko(r).has.call(r, i) || (r.add(i), Ft(r, "add", i, i)), this
        },
        set(i, r) {
            !t && !vt(r) && !In(r) && (r = we(r));
            const l = we(this),
                {
                    has: a,
                    get: s
                } = Ko(l);
            let u = a.call(l, i);
            u || (i = we(i), u = a.call(l, i));
            const c = s.call(l, i);
            return l.set(i, r), u ? an(r, c) && Ft(l, "set", i, r) : Ft(l, "add", i, r), this
        },
        delete(i) {
            const r = we(this),
                {
                    has: l,
                    get: a
                } = Ko(r);
            let s = l.call(r, i);
            s || (i = we(i), s = l.call(r, i)), a && a.call(r, i);
            const u = r.delete(i);
            return s && Ft(r, "delete", i, void 0), u
        },
        clear() {
            const i = we(this),
                r = i.size !== 0,
                l = i.clear();
            return r && Ft(i, "clear", void 0, void 0), l
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        n[i] = of (i, e, t)
    }), n
}

function ll(e, t) {
    const n = rf(e, t);
    return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(Se(n, i) && i in o ? n : o, i, r)
}
const lf = {
        get: ll(!1, !1)
    },
    af = {
        get: ll(!1, !0)
    },
    sf = {
        get: ll(!0, !1)
    };
const $s = new WeakMap,
    Rs = new WeakMap,
    Ms = new WeakMap,
    cf = new WeakMap;

function uf(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function ff(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : uf(Bu(e))
}

function Ke(e) {
    return In(e) ? e : al(e, !1, ef, lf, $s)
}

function df(e) {
    return al(e, !1, nf, af, Rs)
}

function Fs(e) {
    return al(e, !0, tf, sf, Ms)
}

function al(e, t, n, o, i) {
    if (!Oe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const r = i.get(e);
    if (r) return r;
    const l = ff(e);
    if (l === 0) return e;
    const a = new Proxy(e, l === 2 ? o : n);
    return i.set(e, a), a
}

function Kn(e) {
    return In(e) ? Kn(e.__v_raw) : !!(e && e.__v_isReactive)
}

function In(e) {
    return !!(e && e.__v_isReadonly)
}

function vt(e) {
    return !!(e && e.__v_isShallow)
}

function sl(e) {
    return e ? !!e.__v_raw : !1
}

function we(e) {
    const t = e && e.__v_raw;
    return t ? we(t) : e
}

function hf(e) {
    return !Se(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e
}
const Xe = e => Oe(e) ? Ke(e) : e,
    _r = e => Oe(e) ? Fs(e) : e;

function Ye(e) {
    return e ? e.__v_isRef === !0 : !1
}

function H(e) {
    return Ls(e, !1)
}

function Uy(e) {
    return Ls(e, !0)
}

function Ls(e, t) {
    return Ye(e) ? e : new vf(e, t)
}
class vf {
    constructor(t, n) {
        this.dep = new rl, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : we(t), this._value = n ? t : Xe(t), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const n = this._rawValue,
            o = this.__v_isShallow || vt(t) || In(t);
        t = o ? t : we(t), an(t, n) && (this._rawValue = t, this._value = o ? t : Xe(t), this.dep.trigger())
    }
}

function Xn(e) {
    return Ye(e) ? e.value : e
}
const gf = {
    get: (e, t, n) => t === "__v_raw" ? e : Xn(Reflect.get(e, t, n)),
    set: (e, t, n, o) => {
        const i = e[t];
        return Ye(i) && !Ye(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o)
    }
};

function Vs(e) {
    return Kn(e) ? e : new Proxy(e, gf)
}
class mf {
    constructor(t, n, o) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new rl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Io - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && De !== this) return _s(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return ks(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function bf(e, t, n = !1) {
    let o, i;
    return he(e) ? o = e : (o = e.get, i = e.set), new mf(o, i, n)
}
const qo = {},
    gi = new WeakMap;
let Cn;

function yf(e, t = !1, n = Cn) {
    if (n) {
        let o = gi.get(n);
        o || gi.set(n, o = []), o.push(e)
    }
}

function pf(e, t, n = Ee) {
    const {
        immediate: o,
        deep: i,
        once: r,
        scheduler: l,
        augmentJob: a,
        call: s
    } = n, u = w => i ? w : vt(w) || i === !1 || i === 0 ? Lt(w, 1) : Lt(w);
    let c, f, h, v, y = !1,
        p = !1;
    if (Ye(e) ? (f = () => e.value, y = vt(e)) : Kn(e) ? (f = () => u(e), y = !0) : re(e) ? (p = !0, y = e.some(w => Kn(w) || vt(w)), f = () => e.map(w => {
            if (Ye(w)) return w.value;
            if (Kn(w)) return u(w);
            if (he(w)) return s ? s(w, 2) : w()
        })) : he(e) ? t ? f = s ? () => s(e, 2) : e : f = () => {
            if (h) {
                dn();
                try {
                    h()
                } finally {
                    hn()
                }
            }
            const w = Cn;
            Cn = c;
            try {
                return s ? s(e, 3, [v]) : e(v)
            } finally {
                Cn = w
            }
        } : f = At, t && i) {
        const w = f,
            E = i === !0 ? 1 / 0 : i;
        f = () => Lt(w(), E)
    }
    const m = Ku(),
        x = () => {
            c.stop(), m && m.active && Qr(m.effects, c)
        };
    if (r && t) {
        const w = t;
        t = (...E) => {
            w(...E), x()
        }
    }
    let b = p ? new Array(e.length).fill(qo) : qo;
    const S = w => {
        if (!(!(c.flags & 1) || !c.dirty && !w))
            if (t) {
                const E = c.run();
                if (i || y || (p ? E.some((A, j) => an(A, b[j])) : an(E, b))) {
                    h && h();
                    const A = Cn;
                    Cn = c;
                    try {
                        const j = [E, b === qo ? void 0 : p && b[0] === qo ? [] : b, v];
                        s ? s(t, 3, j) : t(...j), b = E
                    } finally {
                        Cn = A
                    }
                }
            } else c.run()
    };
    return a && a(S), c = new Cs(f), c.scheduler = l ? () => l(S, !1) : S, v = w => yf(w, !1, c), h = c.onStop = () => {
        const w = gi.get(c);
        if (w) {
            if (s) s(w, 4);
            else
                for (const E of w) E();
            gi.delete(c)
        }
    }, t ? o ? S(!0) : b = c.run() : l ? l(S.bind(null, !0), !0) : c.run(), x.pause = c.pause.bind(c), x.resume = c.resume.bind(c), x.stop = x, x
}

function Lt(e, t = 1 / 0, n) {
    if (t <= 0 || !Oe(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
    if (n.add(e), t--, Ye(e)) Lt(e.value, t, n);
    else if (re(e))
        for (let o = 0; o < e.length; o++) Lt(e[o], t, n);
    else if (io(e) || Wn(e)) e.forEach(o => {
        Lt(o, t, n)
    });
    else if (bs(e)) {
        for (const o in e) Lt(e[o], t, n);
        for (const o of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, o) && Lt(e[o], t, n)
    }
    return e
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Mo(e, t, n, o) {
    try {
        return o ? e(...o) : e()
    } catch (i) {
        Fo(i, t, n)
    }
}

function Ct(e, t, n, o) {
    if (he(e)) {
        const i = Mo(e, t, n, o);
        return i && gs(i) && i.catch(r => {
            Fo(r, t, n)
        }), i
    }
    if (re(e)) {
        const i = [];
        for (let r = 0; r < e.length; r++) i.push(Ct(e[r], t, n, o));
        return i
    }
}

function Fo(e, t, n, o = !0) {
    const i = t ? t.vnode : null,
        {
            errorHandler: r,
            throwUnhandledErrorInProduction: l
        } = t && t.appContext.config || Ee;
    if (t) {
        let a = t.parent;
        const s = t.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a;) {
            const c = a.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](e, s, u) === !1) return
            }
            a = a.parent
        }
        if (r) {
            dn(), Mo(r, null, 10, [e, s, u]), hn();
            return
        }
    }
    wf(e, n, i, o, l)
}

function wf(e, t, n, o = !0, i = !1) {
    if (i) throw e;
    console.error(e)
}
const et = [];
let Dt = -1;
const Yn = [];
let tn = null,
    zn = 0;
const Ns = Promise.resolve();
let mi = null;

function Te(e) {
    const t = mi || Ns;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function xf(e) {
    let t = Dt + 1,
        n = et.length;
    for (; t < n;) {
        const o = t + n >>> 1,
            i = et[o],
            r = Po(i);
        r < e || r === e && i.flags & 2 ? t = o + 1 : n = o
    }
    return t
}

function cl(e) {
    if (!(e.flags & 1)) {
        const t = Po(e),
            n = et[et.length - 1];
        !n || !(e.flags & 2) && t >= Po(n) ? et.push(e) : et.splice(xf(t), 0, e), e.flags |= 1, Hs()
    }
}

function Hs() {
    mi || (mi = Ns.then(js))
}

function Sf(e) {
    re(e) ? Yn.push(...e) : tn && e.id === -1 ? tn.splice(zn + 1, 0, e) : e.flags & 1 || (Yn.push(e), e.flags |= 1), Hs()
}

function jl(e, t, n = Dt + 1) {
    for (; n < et.length; n++) {
        const o = et[n];
        if (o && o.flags & 2) {
            if (e && o.id !== e.uid) continue;
            et.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2)
        }
    }
}

function zs(e) {
    if (Yn.length) {
        const t = [...new Set(Yn)].sort((n, o) => Po(n) - Po(o));
        if (Yn.length = 0, tn) {
            tn.push(...t);
            return
        }
        for (tn = t, zn = 0; zn < tn.length; zn++) {
            const n = tn[zn];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        tn = null, zn = 0
    }
}
const Po = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function js(e) {
    try {
        for (Dt = 0; Dt < et.length; Dt++) {
            const t = et[Dt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Mo(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Dt < et.length; Dt++) {
            const t = et[Dt];
            t && (t.flags &= -2)
        }
        Dt = -1, et.length = 0, zs(), mi = null, (et.length || Yn.length) && js()
    }
}
let je = null,
    Ws = null;

function bi(e) {
    const t = je;
    return je = e, Ws = e && e.type.__scopeId || null, t
}

function Cf(e, t = je, n) {
    if (!t || e._n) return e;
    const o = (...i) => {
        o._d && oa(-1);
        const r = bi(t);
        let l;
        try {
            l = e(...i)
        } finally {
            bi(r), o._d && oa(1)
        }
        return l
    };
    return o._n = !0, o._c = !0, o._d = !0, o
}

function Wt(e, t) {
    if (je === null) return e;
    const n = zi(je),
        o = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let [r, l, a, s = Ee] = t[i];
        r && (he(r) && (r = {
            mounted: r,
            updated: r
        }), r.deep && Lt(l), o.push({
            dir: r,
            instance: n,
            value: l,
            oldValue: void 0,
            arg: a,
            modifiers: s
        }))
    }
    return e
}

function bn(e, t, n, o) {
    const i = e.dirs,
        r = t && t.dirs;
    for (let l = 0; l < i.length; l++) {
        const a = i[l];
        r && (a.oldValue = r[l].value);
        let s = a.dir[o];
        s && (dn(), Ct(s, n, 8, [e.el, a, e, t]), hn())
    }
}
const Us = Symbol("_vte"),
    Ks = e => e.__isTeleport,
    _o = e => e && (e.disabled || e.disabled === ""),
    Wl = e => e && (e.defer || e.defer === ""),
    Ul = e => typeof SVGElement < "u" && e instanceof SVGElement,
    Kl = e => typeof MathMLElement == "function" && e instanceof MathMLElement,
    Er = (e, t) => {
        const n = e && e.to;
        return Ie(n) ? t ? t(n) : null : n
    },
    Ys = {
        name: "Teleport",
        __isTeleport: !0,
        process(e, t, n, o, i, r, l, a, s, u) {
            const {
                mc: c,
                pc: f,
                pbc: h,
                o: {
                    insert: v,
                    querySelector: y,
                    createText: p,
                    createComment: m
                }
            } = u, x = _o(t.props);
            let {
                shapeFlag: b,
                children: S,
                dynamicChildren: w
            } = t;
            if (e == null) {
                const E = t.el = p(""),
                    A = t.anchor = p("");
                v(E, n, o), v(A, n, o);
                const j = (B, k) => {
                        b & 16 && (i && i.isCE && (i.ce._teleportTarget = B), c(S, B, k, i, r, l, a, s))
                    },
                    P = () => {
                        const B = t.target = Er(t.props, y),
                            k = qs(B, t, p, v);
                        B && (l !== "svg" && Ul(B) ? l = "svg" : l !== "mathml" && Kl(B) && (l = "mathml"), x || (j(B, k), si(t, !1)))
                    };
                x && (j(n, A), si(t, !0)), Wl(t.props) ? Ne(() => {
                    P(), t.el.__isMounted = !0
                }, r) : P()
            } else {
                if (Wl(t.props) && !e.el.__isMounted) {
                    Ne(() => {
                        Ys.process(e, t, n, o, i, r, l, a, s, u), delete e.el.__isMounted
                    }, r);
                    return
                }
                t.el = e.el, t.targetStart = e.targetStart;
                const E = t.anchor = e.anchor,
                    A = t.target = e.target,
                    j = t.targetAnchor = e.targetAnchor,
                    P = _o(e.props),
                    B = P ? n : A,
                    k = P ? E : j;
                if (l === "svg" || Ul(A) ? l = "svg" : (l === "mathml" || Kl(A)) && (l = "mathml"), w ? (h(e.dynamicChildren, w, B, i, r, l, a), gl(e, t, !0)) : s || f(e, t, B, k, i, r, l, a, !1), x) P ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Go(t, n, E, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const _ = t.target = Er(t.props, y);
                    _ && Go(t, _, null, u, 0)
                } else P && Go(t, A, j, u, 1);
                si(t, x)
            }
        },
        remove(e, t, n, {
            um: o,
            o: {
                remove: i
            }
        }, r) {
            const {
                shapeFlag: l,
                children: a,
                anchor: s,
                targetStart: u,
                targetAnchor: c,
                target: f,
                props: h
            } = e;
            if (f && (i(u), i(c)), r && i(s), l & 16) {
                const v = r || !_o(h);
                for (let y = 0; y < a.length; y++) {
                    const p = a[y];
                    o(p, t, n, v, !!p.dynamicChildren)
                }
            }
        },
        move: Go,
        hydrate: Tf
    };

function Go(e, t, n, {
    o: {
        insert: o
    },
    m: i
}, r = 2) {
    r === 0 && o(e.targetAnchor, t, n);
    const {
        el: l,
        anchor: a,
        shapeFlag: s,
        children: u,
        props: c
    } = e, f = r === 2;
    if (f && o(l, t, n), (!f || _o(c)) && s & 16)
        for (let h = 0; h < u.length; h++) i(u[h], t, n, 2);
    f && o(a, t, n)
}

function Tf(e, t, n, o, i, r, {
    o: {
        nextSibling: l,
        parentNode: a,
        querySelector: s,
        insert: u,
        createText: c
    }
}, f) {
    const h = t.target = Er(t.props, s);
    if (h) {
        const v = _o(t.props),
            y = h._lpa || h.firstChild;
        if (t.shapeFlag & 16)
            if (v) t.anchor = f(l(e), t, a(e), n, o, i, r), t.targetStart = y, t.targetAnchor = y && l(y);
            else {
                t.anchor = l(e);
                let p = y;
                for (; p;) {
                    if (p && p.nodeType === 8) {
                        if (p.data === "teleport start anchor") t.targetStart = p;
                        else if (p.data === "teleport anchor") {
                            t.targetAnchor = p, h._lpa = t.targetAnchor && l(t.targetAnchor);
                            break
                        }
                    }
                    p = l(p)
                }
                t.targetAnchor || qs(h, t, c, u), f(y && l(y), t, h, n, o, i, r)
            }
        si(t, v)
    }
    return t.anchor && l(t.anchor)
}
const Fi = Ys;

function si(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let o, i;
        for (t ? (o = e.el, i = e.anchor) : (o = e.targetStart, i = e.targetAnchor); o && o !== i;) o.nodeType === 1 && o.setAttribute("data-v-owner", n.uid), o = o.nextSibling;
        n.ut()
    }
}

function qs(e, t, n, o) {
    const i = t.targetStart = n(""),
        r = t.targetAnchor = n("");
    return i[Us] = r, e && (o(i, e), o(r, e)), r
}
const nn = Symbol("_leaveCb"),
    Xo = Symbol("_enterCb");

function _f() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return qe(() => {
        e.isMounted = !0
    }), Tt(() => {
        e.isUnmounting = !0
    }), e
}
const ft = [Function, Array],
    Gs = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: ft,
        onEnter: ft,
        onAfterEnter: ft,
        onEnterCancelled: ft,
        onBeforeLeave: ft,
        onLeave: ft,
        onAfterLeave: ft,
        onLeaveCancelled: ft,
        onBeforeAppear: ft,
        onAppear: ft,
        onAfterAppear: ft,
        onAppearCancelled: ft
    },
    Xs = e => {
        const t = e.subTree;
        return t.component ? Xs(t.component) : t
    },
    Ef = {
        name: "BaseTransition",
        props: Gs,
        setup(e, {
            slots: t
        }) {
            const n = yt(),
                o = _f();
            return () => {
                const i = t.default && Qs(t.default(), !0);
                if (!i || !i.length) return;
                const r = Zs(i),
                    l = we(e),
                    {
                        mode: a
                    } = l;
                if (o.isLeaving) return nr(r);
                const s = Yl(r);
                if (!s) return nr(r);
                let u = Or(s, l, o, n, f => u = f);
                s.type !== Je && Zn(s, u);
                let c = n.subTree && Yl(n.subTree);
                if (c && c.type !== Je && !rn(s, c) && Xs(n).type !== Je) {
                    let f = Or(c, l, o, n);
                    if (Zn(c, f), a === "out-in" && s.type !== Je) return o.isLeaving = !0, f.afterLeave = () => {
                        o.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0
                    }, nr(r);
                    a === "in-out" && s.type !== Je ? f.delayLeave = (h, v, y) => {
                        const p = Js(o, c);
                        p[String(c.key)] = c, h[nn] = () => {
                            v(), h[nn] = void 0, delete u.delayedLeave, c = void 0
                        }, u.delayedLeave = () => {
                            y(), delete u.delayedLeave, c = void 0
                        }
                    } : c = void 0
                } else c && (c = void 0);
                return r
            }
        }
    };

function Zs(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Je) {
                t = n;
                break
            }
    }
    return t
}
const Of = Ef;

function Js(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null), n.set(t.type, o)), o
}

function Or(e, t, n, o, i) {
    const {
        appear: r,
        mode: l,
        persisted: a = !1,
        onBeforeEnter: s,
        onEnter: u,
        onAfterEnter: c,
        onEnterCancelled: f,
        onBeforeLeave: h,
        onLeave: v,
        onAfterLeave: y,
        onLeaveCancelled: p,
        onBeforeAppear: m,
        onAppear: x,
        onAfterAppear: b,
        onAppearCancelled: S
    } = t, w = String(e.key), E = Js(n, e), A = (B, k) => {
        B && Ct(B, o, 9, k)
    }, j = (B, k) => {
        const _ = k[1];
        A(B, k), re(B) ? B.every(T => T.length <= 1) && _() : B.length <= 1 && _()
    }, P = {
        mode: l,
        persisted: a,
        beforeEnter(B) {
            let k = s;
            if (!n.isMounted)
                if (r) k = m || s;
                else return;
            B[nn] && B[nn](!0);
            const _ = E[w];
            _ && rn(e, _) && _.el[nn] && _.el[nn](), A(k, [B])
        },
        enter(B) {
            let k = u,
                _ = c,
                T = f;
            if (!n.isMounted)
                if (r) k = x || u, _ = b || c, T = S || f;
                else return;
            let $ = !1;
            const ie = B[Xo] = me => {
                $ || ($ = !0, me ? A(T, [B]) : A(_, [B]), P.delayedLeave && P.delayedLeave(), B[Xo] = void 0)
            };
            k ? j(k, [B, ie]) : ie()
        },
        leave(B, k) {
            const _ = String(e.key);
            if (B[Xo] && B[Xo](!0), n.isUnmounting) return k();
            A(h, [B]);
            let T = !1;
            const $ = B[nn] = ie => {
                T || (T = !0, k(), ie ? A(p, [B]) : A(y, [B]), B[nn] = void 0, E[_] === e && delete E[_])
            };
            E[_] = e, v ? j(v, [B, $]) : $()
        },
        clone(B) {
            const k = Or(B, t, n, o, i);
            return i && i(k), k
        }
    };
    return P
}

function nr(e) {
    if (Lo(e)) return e = Ut(e), e.children = null, e
}

function Yl(e) {
    if (!Lo(e)) return Ks(e.type) && e.children ? Zs(e.children) : e;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && he(n.default)) return n.default()
    }
}

function Zn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Zn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Qs(e, t = !1, n) {
    let o = [],
        i = 0;
    for (let r = 0; r < e.length; r++) {
        let l = e[r];
        const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : r);
        l.type === Ze ? (l.patchFlag & 128 && i++, o = o.concat(Qs(l.children, t, a))) : (t || l.type !== Je) && o.push(a != null ? Ut(l, {
            key: a
        }) : l)
    }
    if (i > 1)
        for (let r = 0; r < o.length; r++) o[r].patchFlag = -2;
    return o
} /*! #__NO_SIDE_EFFECTS__ */
function le(e, t) {
    return he(e) ? Ue({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function ul(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function yi(e, t, n, o, i = !1) {
    if (re(e)) {
        e.forEach((y, p) => yi(y, t && (re(t) ? t[p] : t), n, o, i));
        return
    }
    if (On(o) && !i) {
        o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && yi(e, t, n, o.component.subTree);
        return
    }
    const r = o.shapeFlag & 4 ? zi(o.component) : o.el,
        l = i ? null : r,
        {
            i: a,
            r: s
        } = e,
        u = t && t.r,
        c = a.refs === Ee ? a.refs = {} : a.refs,
        f = a.setupState,
        h = we(f),
        v = f === Ee ? () => !1 : y => Se(h, y);
    if (u != null && u !== s && (Ie(u) ? (c[u] = null, v(u) && (f[u] = null)) : Ye(u) && (u.value = null)), he(s)) Mo(s, a, 12, [l, c]);
    else {
        const y = Ie(s),
            p = Ye(s);
        if (y || p) {
            const m = () => {
                if (e.f) {
                    const x = y ? v(s) ? f[s] : c[s] : s.value;
                    i ? re(x) && Qr(x, r) : re(x) ? x.includes(r) || x.push(r) : y ? (c[s] = [r], v(s) && (f[s] = c[s])) : (s.value = [r], e.k && (c[e.k] = s.value))
                } else y ? (c[s] = l, v(s) && (f[s] = l)) : p && (s.value = l, e.k && (c[e.k] = l))
            };
            l ? (m.id = -1, Ne(m, n)) : m()
        }
    }
}
const ql = e => e.nodeType === 8;
Bi().requestIdleCallback;
Bi().cancelIdleCallback;

function kf(e, t) {
    if (ql(e) && e.data === "[") {
        let n = 1,
            o = e.nextSibling;
        for (; o;) {
            if (o.nodeType === 1) {
                if (t(o) === !1) break
            } else if (ql(o))
                if (o.data === "]") {
                    if (--n === 0) break
                } else o.data === "[" && n++;
            o = o.nextSibling
        }
    } else t(e)
}
const On = e => !!e.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function Ky(e) {
    he(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: o,
        delay: i = 200,
        hydrate: r,
        timeout: l,
        suspensible: a = !0,
        onError: s
    } = e;
    let u = null,
        c, f = 0;
    const h = () => (f++, u = null, v()),
        v = () => {
            let y;
            return u || (y = u = t().catch(p => {
                if (p = p instanceof Error ? p : new Error(String(p)), s) return new Promise((m, x) => {
                    s(p, () => m(h()), () => x(p), f + 1)
                });
                throw p
            }).then(p => y !== u && u ? u : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), c = p, p)))
        };
    return le({
        name: "AsyncComponentWrapper",
        __asyncLoader: v,
        __asyncHydrate(y, p, m) {
            const x = r ? () => {
                const b = r(m, S => kf(y, S));
                b && (p.bum || (p.bum = [])).push(b)
            } : m;
            c ? x() : v().then(() => !p.isUnmounted && x())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const y = ze;
            if (ul(y), c) return () => or(c, y);
            const p = S => {
                u = null, Fo(S, y, 13, !o)
            };
            if (a && y.suspense || Jn) return v().then(S => () => or(S, y)).catch(S => (p(S), () => o ? d(o, {
                error: S
            }) : null));
            const m = H(!1),
                x = H(),
                b = H(!!i);
            return i && setTimeout(() => {
                b.value = !1
            }, i), l != null && setTimeout(() => {
                if (!m.value && !x.value) {
                    const S = new Error(`Async component timed out after ${l}ms.`);
                    p(S), x.value = S
                }
            }, l), v().then(() => {
                m.value = !0, y.parent && Lo(y.parent.vnode) && y.parent.update()
            }).catch(S => {
                p(S), x.value = S
            }), () => {
                if (m.value && c) return or(c, y);
                if (x.value && o) return d(o, {
                    error: x.value
                });
                if (n && !b.value) return d(n)
            }
        }
    })
}

function or(e, t) {
    const {
        ref: n,
        props: o,
        children: i,
        ce: r
    } = t.vnode, l = d(e, o, i);
    return l.ref = n, l.ce = r, delete t.vnode.ce, l
}
const Lo = e => e.type.__isKeepAlive,
    Df = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = yt(),
                o = n.ctx;
            if (!o.renderer) return () => {
                const b = t.default && t.default();
                return b && b.length === 1 ? b[0] : b
            };
            const i = new Map,
                r = new Set;
            let l = null;
            const a = n.suspense,
                {
                    renderer: {
                        p: s,
                        m: u,
                        um: c,
                        o: {
                            createElement: f
                        }
                    }
                } = o,
                h = f("div");
            o.activate = (b, S, w, E, A) => {
                const j = b.component;
                u(b, S, w, 0, a), s(j.vnode, b, S, w, j, a, E, b.slotScopeIds, A), Ne(() => {
                    j.isDeactivated = !1, j.a && Un(j.a);
                    const P = b.props && b.props.onVnodeMounted;
                    P && ht(P, j.parent, b)
                }, a)
            }, o.deactivate = b => {
                const S = b.component;
                wi(S.m), wi(S.a), u(b, h, null, 1, a), Ne(() => {
                    S.da && Un(S.da);
                    const w = b.props && b.props.onVnodeUnmounted;
                    w && ht(w, S.parent, b), S.isDeactivated = !0
                }, a)
            };

            function v(b) {
                ir(b), c(b, n, a, !0)
            }

            function y(b) {
                i.forEach((S, w) => {
                    const E = Rr(S.type);
                    E && !b(E) && p(w)
                })
            }

            function p(b) {
                const S = i.get(b);
                S && (!l || !rn(S, l)) ? v(S) : l && ir(l), i.delete(b), r.delete(b)
            }
            oe(() => [e.include, e.exclude], ([b, S]) => {
                b && y(w => wo(b, w)), S && y(w => !wo(S, w))
            }, {
                flush: "post",
                deep: !0
            });
            let m = null;
            const x = () => {
                m != null && (xi(n.subTree.type) ? Ne(() => {
                    i.set(m, Zo(n.subTree))
                }, n.subTree.suspense) : i.set(m, Zo(n.subTree)))
            };
            return qe(x), fl(x), Tt(() => {
                i.forEach(b => {
                    const {
                        subTree: S,
                        suspense: w
                    } = n, E = Zo(S);
                    if (b.type === E.type && b.key === E.key) {
                        ir(E);
                        const A = E.component.da;
                        A && Ne(A, w);
                        return
                    }
                    v(b)
                })
            }), () => {
                if (m = null, !t.default) return l = null;
                const b = t.default(),
                    S = b[0];
                if (b.length > 1) return l = null, b;
                if (!An(S) || !(S.shapeFlag & 4) && !(S.shapeFlag & 128)) return l = null, S;
                let w = Zo(S);
                if (w.type === Je) return l = null, w;
                const E = w.type,
                    A = Rr(On(w) ? w.type.__asyncResolved || {} : E),
                    {
                        include: j,
                        exclude: P,
                        max: B
                    } = e;
                if (j && (!A || !wo(j, A)) || P && A && wo(P, A)) return w.shapeFlag &= -257, l = w, S;
                const k = w.key == null ? E : w.key,
                    _ = i.get(k);
                return w.el && (w = Ut(w), S.shapeFlag & 128 && (S.ssContent = w)), m = k, _ ? (w.el = _.el, w.component = _.component, w.transition && Zn(w, w.transition), w.shapeFlag |= 512, r.delete(k), r.add(k)) : (r.add(k), B && r.size > parseInt(B, 10) && p(r.values().next().value)), w.shapeFlag |= 256, l = w, xi(S.type) ? S : w
            }
        }
    },
    Yy = Df;

function wo(e, t) {
    return re(e) ? e.some(n => wo(n, t)) : Ie(e) ? e.split(",").includes(t) : Pu(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function vn(e, t) {
    ec(e, "a", t)
}

function Gt(e, t) {
    ec(e, "da", t)
}

function ec(e, t, n = ze) {
    const o = e.__wdc || (e.__wdc = () => {
        let i = n;
        for (; i;) {
            if (i.isDeactivated) return;
            i = i.parent
        }
        return e()
    });
    if (Li(t, o, n), n) {
        let i = n.parent;
        for (; i && i.parent;) Lo(i.parent.vnode) && If(o, t, n, i), i = i.parent
    }
}

function If(e, t, n, o) {
    const i = Li(t, e, o, !0);
    Vo(() => {
        Qr(o[t], i)
    }, n)
}

function ir(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Zo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Li(e, t, n = ze, o = !1) {
    if (n) {
        const i = n[e] || (n[e] = []),
            r = t.__weh || (t.__weh = (...l) => {
                dn();
                const a = No(n),
                    s = Ct(t, n, e, l);
                return a(), hn(), s
            });
        return o ? i.unshift(r) : i.push(r), r
    }
}
const Xt = e => (t, n = ze) => {
        (!Jn || e === "sp") && Li(e, (...o) => t(...o), n)
    },
    Af = Xt("bm"),
    qe = Xt("m"),
    tc = Xt("bu"),
    fl = Xt("u"),
    Tt = Xt("bum"),
    Vo = Xt("um"),
    Pf = Xt("sp"),
    Bf = Xt("rtg"),
    $f = Xt("rtc");

function Rf(e, t = ze) {
    Li("ec", e, t)
}
const dl = "components",
    Mf = "directives";

function qy(e, t) {
    return hl(dl, e, !0, t) || e
}
const nc = Symbol.for("v-ndc");

function Gy(e) {
    return Ie(e) ? hl(dl, e, !1) || e : e || nc
}

function Ff(e) {
    return hl(Mf, e)
}

function hl(e, t, n = !0, o = !1) {
    const i = je || ze;
    if (i) {
        const r = i.type;
        if (e === dl) {
            const a = Rr(r, !1);
            if (a && (a === t || a === bt(t) || a === Pi(bt(t)))) return r
        }
        const l = Gl(i[e] || r[e], t) || Gl(i.appContext[e], t);
        return !l && o ? r : l
    }
}

function Gl(e, t) {
    return e && (e[t] || e[bt(t)] || e[Pi(bt(t))])
}

function Xy(e, t, n, o) {
    let i;
    const r = n,
        l = re(e);
    if (l || Ie(e)) {
        const a = l && Kn(e);
        let s = !1;
        a && (s = !vt(e), e = Mi(e)), i = new Array(e.length);
        for (let u = 0, c = e.length; u < c; u++) i[u] = t(s ? Xe(e[u]) : e[u], u, void 0, r)
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let a = 0; a < e; a++) i[a] = t(a + 1, a, void 0, r)
    } else if (Oe(e))
        if (e[Symbol.iterator]) i = Array.from(e, (a, s) => t(a, s, void 0, r));
        else {
            const a = Object.keys(e);
            i = new Array(a.length);
            for (let s = 0, u = a.length; s < u; s++) {
                const c = a[s];
                i[s] = t(e[c], c, s, r)
            }
        }
    else i = [];
    return i
}

function Zy(e, t, n = {}, o, i) {
    if (je.ce || je.parent && On(je.parent) && je.parent.ce) return t !== "default" && (n.name = t), Pr(), Br(Ze, null, [d("slot", n, o)], 64);
    let r = e[t];
    r && r._c && (r._d = !1), Pr();
    const l = r && oc(r(n)),
        a = n.key || l && l.key,
        s = Br(Ze, {
            key: (a && !St(a) ? a : `_${t}`) + ""
        }, l || [], l && e._ === 1 ? 64 : -2);
    return !i && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), r && r._c && (r._d = !0), s
}

function oc(e) {
    return e.some(t => An(t) ? !(t.type === Je || t.type === Ze && !oc(t.children)) : !0) ? e : null
}
const kr = e => e ? Cc(e) ? zi(e) : kr(e.parent) : null,
    Eo = Ue(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => kr(e.parent),
        $root: e => kr(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => rc(e),
        $forceUpdate: e => e.f || (e.f = () => {
            cl(e.update)
        }),
        $nextTick: e => e.n || (e.n = Te.bind(e.proxy)),
        $watch: e => rd.bind(e)
    }),
    rr = (e, t) => e !== Ee && !e.__isScriptSetup && Se(e, t),
    Lf = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: o,
                data: i,
                props: r,
                accessCache: l,
                type: a,
                appContext: s
            } = e;
            let u;
            if (t[0] !== "$") {
                const v = l[t];
                if (v !== void 0) switch (v) {
                    case 1:
                        return o[t];
                    case 2:
                        return i[t];
                    case 4:
                        return n[t];
                    case 3:
                        return r[t]
                } else {
                    if (rr(o, t)) return l[t] = 1, o[t];
                    if (i !== Ee && Se(i, t)) return l[t] = 2, i[t];
                    if ((u = e.propsOptions[0]) && Se(u, t)) return l[t] = 3, r[t];
                    if (n !== Ee && Se(n, t)) return l[t] = 4, n[t];
                    Dr && (l[t] = 0)
                }
            }
            const c = Eo[t];
            let f, h;
            if (c) return t === "$attrs" && Ge(e.attrs, "get", ""), c(e);
            if ((f = a.__cssModules) && (f = f[t])) return f;
            if (n !== Ee && Se(n, t)) return l[t] = 4, n[t];
            if (h = s.config.globalProperties, Se(h, t)) return h[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: o,
                setupState: i,
                ctx: r
            } = e;
            return rr(i, t) ? (i[t] = n, !0) : o !== Ee && Se(o, t) ? (o[t] = n, !0) : Se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: o,
                appContext: i,
                propsOptions: r
            }
        }, l) {
            let a;
            return !!n[l] || e !== Ee && Se(e, l) || rr(t, l) || (a = r[0]) && Se(a, l) || Se(o, l) || Se(Eo, l) || Se(i.config.globalProperties, l)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : Se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function Jy() {
    return Vf().slots
}

function Vf() {
    const e = yt();
    return e.setupContext || (e.setupContext = _c(e))
}

function Xl(e) {
    return re(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let Dr = !0;

function Nf(e) {
    const t = rc(e),
        n = e.proxy,
        o = e.ctx;
    Dr = !1, t.beforeCreate && Zl(t.beforeCreate, e, "bc");
    const {
        data: i,
        computed: r,
        methods: l,
        watch: a,
        provide: s,
        inject: u,
        created: c,
        beforeMount: f,
        mounted: h,
        beforeUpdate: v,
        updated: y,
        activated: p,
        deactivated: m,
        beforeDestroy: x,
        beforeUnmount: b,
        destroyed: S,
        unmounted: w,
        render: E,
        renderTracked: A,
        renderTriggered: j,
        errorCaptured: P,
        serverPrefetch: B,
        expose: k,
        inheritAttrs: _,
        components: T,
        directives: $,
        filters: ie
    } = t;
    if (u && Hf(u, o, null), l)
        for (const G in l) {
            const Z = l[G];
            he(Z) && (o[G] = Z.bind(n))
        }
    if (i) {
        const G = i.call(n, n);
        Oe(G) && (e.data = Ke(G))
    }
    if (Dr = !0, r)
        for (const G in r) {
            const Z = r[G],
                pe = he(Z) ? Z.bind(n, n) : he(Z.get) ? Z.get.bind(n, n) : At,
                Ae = !he(Z) && he(Z.set) ? Z.set.bind(n) : At,
                D = W({
                    get: pe,
                    set: Ae
                });
            Object.defineProperty(o, G, {
                enumerable: !0,
                configurable: !0,
                get: () => D.value,
                set: L => D.value = L
            })
        }
    if (a)
        for (const G in a) ic(a[G], o, n, G);
    if (s) {
        const G = he(s) ? s.call(n) : s;
        Reflect.ownKeys(G).forEach(Z => {
            lo(Z, G[Z])
        })
    }
    c && Zl(c, e, "c");

    function z(G, Z) {
        re(Z) ? Z.forEach(pe => G(pe.bind(n))) : Z && G(Z.bind(n))
    }
    if (z(Af, f), z(qe, h), z(tc, v), z(fl, y), z(vn, p), z(Gt, m), z(Rf, P), z($f, A), z(Bf, j), z(Tt, b), z(Vo, w), z(Pf, B), re(k))
        if (k.length) {
            const G = e.exposed || (e.exposed = {});
            k.forEach(Z => {
                Object.defineProperty(G, Z, {
                    get: () => n[Z],
                    set: pe => n[Z] = pe
                })
            })
        } else e.exposed || (e.exposed = {});
    E && e.render === At && (e.render = E), _ != null && (e.inheritAttrs = _), T && (e.components = T), $ && (e.directives = $), B && ul(e)
}

function Hf(e, t, n = At) {
    re(e) && (e = Ir(e));
    for (const o in e) {
        const i = e[o];
        let r;
        Oe(i) ? "default" in i ? r = Ht(i.from || o, i.default, !0) : r = Ht(i.from || o) : r = Ht(i), Ye(r) ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: l => r.value = l
        }) : t[o] = r
    }
}

function Zl(e, t, n) {
    Ct(re(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function ic(e, t, n, o) {
    let i = o.includes(".") ? bc(n, o) : () => n[o];
    if (Ie(e)) {
        const r = t[e];
        he(r) && oe(i, r)
    } else if (he(e)) oe(i, e.bind(n));
    else if (Oe(e))
        if (re(e)) e.forEach(r => ic(r, t, n, o));
        else {
            const r = he(e.handler) ? e.handler.bind(n) : t[e.handler];
            he(r) && oe(i, r, e)
        }
}

function rc(e) {
    const t = e.type,
        {
            mixins: n,
            extends: o
        } = t,
        {
            mixins: i,
            optionsCache: r,
            config: {
                optionMergeStrategies: l
            }
        } = e.appContext,
        a = r.get(t);
    let s;
    return a ? s = a : !i.length && !n && !o ? s = t : (s = {}, i.length && i.forEach(u => pi(s, u, l, !0)), pi(s, t, l)), Oe(t) && r.set(t, s), s
}

function pi(e, t, n, o = !1) {
    const {
        mixins: i,
        extends: r
    } = t;
    r && pi(e, r, n, !0), i && i.forEach(l => pi(e, l, n, !0));
    for (const l in t)
        if (!(o && l === "expose")) {
            const a = zf[l] || n && n[l];
            e[l] = a ? a(e[l], t[l]) : t[l]
        }
    return e
}
const zf = {
    data: Jl,
    props: Ql,
    emits: Ql,
    methods: xo,
    computed: xo,
    beforeCreate: Qe,
    created: Qe,
    beforeMount: Qe,
    mounted: Qe,
    beforeUpdate: Qe,
    updated: Qe,
    beforeDestroy: Qe,
    beforeUnmount: Qe,
    destroyed: Qe,
    unmounted: Qe,
    activated: Qe,
    deactivated: Qe,
    errorCaptured: Qe,
    serverPrefetch: Qe,
    components: xo,
    directives: xo,
    watch: Wf,
    provide: Jl,
    inject: jf
};

function Jl(e, t) {
    return t ? e ? function() {
        return Ue(he(e) ? e.call(this, this) : e, he(t) ? t.call(this, this) : t)
    } : t : e
}

function jf(e, t) {
    return xo(Ir(e), Ir(t))
}

function Ir(e) {
    if (re(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Qe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function xo(e, t) {
    return e ? Ue(Object.create(null), e, t) : t
}

function Ql(e, t) {
    return e ? re(e) && re(t) ? [...new Set([...e, ...t])] : Ue(Object.create(null), Xl(e), Xl(t ? ? {})) : t
}

function Wf(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ue(Object.create(null), e);
    for (const o in t) n[o] = Qe(e[o], t[o]);
    return n
}

function lc() {
    return {
        app: null,
        config: {
            isNativeTag: Iu,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Uf = 0;

function Kf(e, t) {
    return function(o, i = null) {
        he(o) || (o = Ue({}, o)), i != null && !Oe(i) && (i = null);
        const r = lc(),
            l = new WeakSet,
            a = [];
        let s = !1;
        const u = r.app = {
            _uid: Uf++,
            _component: o,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: Td,
            get config() {
                return r.config
            },
            set config(c) {},
            use(c, ...f) {
                return l.has(c) || (c && he(c.install) ? (l.add(c), c.install(u, ...f)) : he(c) && (l.add(c), c(u, ...f))), u
            },
            mixin(c) {
                return r.mixins.includes(c) || r.mixins.push(c), u
            },
            component(c, f) {
                return f ? (r.components[c] = f, u) : r.components[c]
            },
            directive(c, f) {
                return f ? (r.directives[c] = f, u) : r.directives[c]
            },
            mount(c, f, h) {
                if (!s) {
                    const v = u._ceVNode || d(o, i);
                    return v.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(v, c, h), s = !0, u._container = c, c.__vue_app__ = u, zi(v.component)
                }
            },
            onUnmount(c) {
                a.push(c)
            },
            unmount() {
                s && (Ct(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
            },
            provide(c, f) {
                return r.provides[c] = f, u
            },
            runWithContext(c) {
                const f = qn;
                qn = u;
                try {
                    return c()
                } finally {
                    qn = f
                }
            }
        };
        return u
    }
}
let qn = null;

function lo(e, t) {
    if (ze) {
        let n = ze.provides;
        const o = ze.parent && ze.parent.provides;
        o === n && (n = ze.provides = Object.create(o)), n[e] = t
    }
}

function Ht(e, t, n = !1) {
    const o = ze || je;
    if (o || qn) {
        const i = qn ? qn._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return n && he(t) ? t.call(o && o.proxy) : t
    }
}
const ac = {},
    sc = () => Object.create(ac),
    cc = e => Object.getPrototypeOf(e) === ac;

function Yf(e, t, n, o = !1) {
    const i = {},
        r = sc();
    e.propsDefaults = Object.create(null), uc(e, t, i, r);
    for (const l in e.propsOptions[0]) l in i || (i[l] = void 0);
    n ? e.props = o ? i : df(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r
}

function qf(e, t, n, o) {
    const {
        props: i,
        attrs: r,
        vnode: {
            patchFlag: l
        }
    } = e, a = we(i), [s] = e.propsOptions;
    let u = !1;
    if ((o || l > 0) && !(l & 16)) {
        if (l & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let h = c[f];
                if (Ni(e.emitsOptions, h)) continue;
                const v = t[h];
                if (s)
                    if (Se(r, h)) v !== r[h] && (r[h] = v, u = !0);
                    else {
                        const y = bt(h);
                        i[y] = Ar(s, a, y, v, e, !1)
                    }
                else v !== r[h] && (r[h] = v, u = !0)
            }
        }
    } else {
        uc(e, t, i, r) && (u = !0);
        let c;
        for (const f in a)(!t || !Se(t, f) && ((c = qt(f)) === f || !Se(t, c))) && (s ? n && (n[f] !== void 0 || n[c] !== void 0) && (i[f] = Ar(s, a, f, void 0, e, !0)) : delete i[f]);
        if (r !== a)
            for (const f in r)(!t || !Se(t, f)) && (delete r[f], u = !0)
    }
    u && Ft(e.attrs, "set", "")
}

function uc(e, t, n, o) {
    const [i, r] = e.propsOptions;
    let l = !1,
        a;
    if (t)
        for (let s in t) {
            if (So(s)) continue;
            const u = t[s];
            let c;
            i && Se(i, c = bt(s)) ? !r || !r.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Ni(e.emitsOptions, s) || (!(s in o) || u !== o[s]) && (o[s] = u, l = !0)
        }
    if (r) {
        const s = we(n),
            u = a || Ee;
        for (let c = 0; c < r.length; c++) {
            const f = r[c];
            n[f] = Ar(i, s, f, u[f], e, !Se(u, f))
        }
    }
    return l
}

function Ar(e, t, n, o, i, r) {
    const l = e[n];
    if (l != null) {
        const a = Se(l, "default");
        if (a && o === void 0) {
            const s = l.default;
            if (l.type !== Function && !l.skipFactory && he(s)) {
                const {
                    propsDefaults: u
                } = i;
                if (n in u) o = u[n];
                else {
                    const c = No(i);
                    o = u[n] = s.call(null, t), c()
                }
            } else o = s;
            i.ce && i.ce._setProp(n, o)
        }
        l[0] && (r && !a ? o = !1 : l[1] && (o === "" || o === qt(n)) && (o = !0))
    }
    return o
}
const Gf = new WeakMap;

function fc(e, t, n = !1) {
    const o = n ? Gf : t.propsCache,
        i = o.get(e);
    if (i) return i;
    const r = e.props,
        l = {},
        a = [];
    let s = !1;
    if (!he(e)) {
        const c = f => {
            s = !0;
            const [h, v] = fc(f, t, !0);
            Ue(l, h), v && a.push(...v)
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!r && !s) return Oe(e) && o.set(e, jn), jn;
    if (re(r))
        for (let c = 0; c < r.length; c++) {
            const f = bt(r[c]);
            ea(f) && (l[f] = Ee)
        } else if (r)
            for (const c in r) {
                const f = bt(c);
                if (ea(f)) {
                    const h = r[c],
                        v = l[f] = re(h) || he(h) ? {
                            type: h
                        } : Ue({}, h),
                        y = v.type;
                    let p = !1,
                        m = !0;
                    if (re(y))
                        for (let x = 0; x < y.length; ++x) {
                            const b = y[x],
                                S = he(b) && b.name;
                            if (S === "Boolean") {
                                p = !0;
                                break
                            } else S === "String" && (m = !1)
                        } else p = he(y) && y.name === "Boolean";
                    v[0] = p, v[1] = m, (p || Se(v, "default")) && a.push(f)
                }
            }
    const u = [l, a];
    return Oe(e) && o.set(e, u), u
}

function ea(e) {
    return e[0] !== "$" && !So(e)
}
const dc = e => e[0] === "_" || e === "$stable",
    vl = e => re(e) ? e.map(It) : [It(e)],
    Xf = (e, t, n) => {
        if (t._n) return t;
        const o = Cf((...i) => vl(t(...i)), n);
        return o._c = !1, o
    },
    hc = (e, t, n) => {
        const o = e._ctx;
        for (const i in e) {
            if (dc(i)) continue;
            const r = e[i];
            if (he(r)) t[i] = Xf(i, r, o);
            else if (r != null) {
                const l = vl(r);
                t[i] = () => l
            }
        }
    },
    vc = (e, t) => {
        const n = vl(t);
        e.slots.default = () => n
    },
    gc = (e, t, n) => {
        for (const o in t)(n || o !== "_") && (e[o] = t[o])
    },
    Zf = (e, t, n) => {
        const o = e.slots = sc();
        if (e.vnode.shapeFlag & 32) {
            const i = t._;
            i ? (gc(o, t, n), n && ys(o, "_", i, !0)) : hc(t, o)
        } else t && vc(e, t)
    },
    Jf = (e, t, n) => {
        const {
            vnode: o,
            slots: i
        } = e;
        let r = !0,
            l = Ee;
        if (o.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? r = !1 : gc(i, t, n) : (r = !t.$stable, hc(t, i)), l = t
        } else t && (vc(e, t), l = {
            default: 1
        });
        if (r)
            for (const a in i) !dc(a) && l[a] == null && delete i[a]
    },
    Ne = dd;

function Qf(e) {
    return ed(e)
}

function ed(e, t) {
    const n = Bi();
    n.__VUE__ = !0;
    const {
        insert: o,
        remove: i,
        patchProp: r,
        createElement: l,
        createText: a,
        createComment: s,
        setText: u,
        setElementText: c,
        parentNode: f,
        nextSibling: h,
        setScopeId: v = At,
        insertStaticContent: y
    } = e, p = (g, C, I, M = null, R = null, F = null, q = void 0, K = null, U = !!C.dynamicChildren) => {
        if (g === C) return;
        g && !rn(g, C) && (M = O(g), L(g, R, F, !0), g = null), C.patchFlag === -2 && (U = !1, C.dynamicChildren = null);
        const {
            type: V,
            ref: fe,
            shapeFlag: X
        } = C;
        switch (V) {
            case Hi:
                m(g, C, I, M);
                break;
            case Je:
                x(g, C, I, M);
                break;
            case ar:
                g == null && b(C, I, M, q);
                break;
            case Ze:
                T(g, C, I, M, R, F, q, K, U);
                break;
            default:
                X & 1 ? E(g, C, I, M, R, F, q, K, U) : X & 6 ? $(g, C, I, M, R, F, q, K, U) : (X & 64 || X & 128) && V.process(g, C, I, M, R, F, q, K, U, ve)
        }
        fe != null && R && yi(fe, g && g.ref, F, C || g, !C)
    }, m = (g, C, I, M) => {
        if (g == null) o(C.el = a(C.children), I, M);
        else {
            const R = C.el = g.el;
            C.children !== g.children && u(R, C.children)
        }
    }, x = (g, C, I, M) => {
        g == null ? o(C.el = s(C.children || ""), I, M) : C.el = g.el
    }, b = (g, C, I, M) => {
        [g.el, g.anchor] = y(g.children, C, I, M, g.el, g.anchor)
    }, S = ({
        el: g,
        anchor: C
    }, I, M) => {
        let R;
        for (; g && g !== C;) R = h(g), o(g, I, M), g = R;
        o(C, I, M)
    }, w = ({
        el: g,
        anchor: C
    }) => {
        let I;
        for (; g && g !== C;) I = h(g), i(g), g = I;
        i(C)
    }, E = (g, C, I, M, R, F, q, K, U) => {
        C.type === "svg" ? q = "svg" : C.type === "math" && (q = "mathml"), g == null ? A(C, I, M, R, F, q, K, U) : B(g, C, R, F, q, K, U)
    }, A = (g, C, I, M, R, F, q, K) => {
        let U, V;
        const {
            props: fe,
            shapeFlag: X,
            transition: ue,
            dirs: de
        } = g;
        if (U = g.el = l(g.type, F, fe && fe.is, fe), X & 8 ? c(U, g.children) : X & 16 && P(g.children, U, null, M, R, lr(g, F), q, K), de && bn(g, null, M, "created"), j(U, g, g.scopeId, q, M), fe) {
            for (const ke in fe) ke !== "value" && !So(ke) && r(U, ke, null, fe[ke], F, M);
            "value" in fe && r(U, "value", null, fe.value, F), (V = fe.onVnodeBeforeMount) && ht(V, M, g)
        }
        de && bn(g, null, M, "beforeMount");
        const be = td(R, ue);
        be && ue.beforeEnter(U), o(U, C, I), ((V = fe && fe.onVnodeMounted) || be || de) && Ne(() => {
            V && ht(V, M, g), be && ue.enter(U), de && bn(g, null, M, "mounted")
        }, R)
    }, j = (g, C, I, M, R) => {
        if (I && v(g, I), M)
            for (let F = 0; F < M.length; F++) v(g, M[F]);
        if (R) {
            let F = R.subTree;
            if (C === F || xi(F.type) && (F.ssContent === C || F.ssFallback === C)) {
                const q = R.vnode;
                j(g, q, q.scopeId, q.slotScopeIds, R.parent)
            }
        }
    }, P = (g, C, I, M, R, F, q, K, U = 0) => {
        for (let V = U; V < g.length; V++) {
            const fe = g[V] = K ? on(g[V]) : It(g[V]);
            p(null, fe, C, I, M, R, F, q, K)
        }
    }, B = (g, C, I, M, R, F, q) => {
        const K = C.el = g.el;
        let {
            patchFlag: U,
            dynamicChildren: V,
            dirs: fe
        } = C;
        U |= g.patchFlag & 16;
        const X = g.props || Ee,
            ue = C.props || Ee;
        let de;
        if (I && yn(I, !1), (de = ue.onVnodeBeforeUpdate) && ht(de, I, C, g), fe && bn(C, g, I, "beforeUpdate"), I && yn(I, !0), (X.innerHTML && ue.innerHTML == null || X.textContent && ue.textContent == null) && c(K, ""), V ? k(g.dynamicChildren, V, K, I, M, lr(C, R), F) : q || Z(g, C, K, null, I, M, lr(C, R), F, !1), U > 0) {
            if (U & 16) _(K, X, ue, I, R);
            else if (U & 2 && X.class !== ue.class && r(K, "class", null, ue.class, R), U & 4 && r(K, "style", X.style, ue.style, R), U & 8) {
                const be = C.dynamicProps;
                for (let ke = 0; ke < be.length; ke++) {
                    const _e = be[ke],
                        at = X[_e],
                        nt = ue[_e];
                    (nt !== at || _e === "value") && r(K, _e, at, nt, R, I)
                }
            }
            U & 1 && g.children !== C.children && c(K, C.children)
        } else !q && V == null && _(K, X, ue, I, R);
        ((de = ue.onVnodeUpdated) || fe) && Ne(() => {
            de && ht(de, I, C, g), fe && bn(C, g, I, "updated")
        }, M)
    }, k = (g, C, I, M, R, F, q) => {
        for (let K = 0; K < C.length; K++) {
            const U = g[K],
                V = C[K],
                fe = U.el && (U.type === Ze || !rn(U, V) || U.shapeFlag & 70) ? f(U.el) : I;
            p(U, V, fe, null, M, R, F, q, !0)
        }
    }, _ = (g, C, I, M, R) => {
        if (C !== I) {
            if (C !== Ee)
                for (const F in C) !So(F) && !(F in I) && r(g, F, C[F], null, R, M);
            for (const F in I) {
                if (So(F)) continue;
                const q = I[F],
                    K = C[F];
                q !== K && F !== "value" && r(g, F, K, q, R, M)
            }
            "value" in I && r(g, "value", C.value, I.value, R)
        }
    }, T = (g, C, I, M, R, F, q, K, U) => {
        const V = C.el = g ? g.el : a(""),
            fe = C.anchor = g ? g.anchor : a("");
        let {
            patchFlag: X,
            dynamicChildren: ue,
            slotScopeIds: de
        } = C;
        de && (K = K ? K.concat(de) : de), g == null ? (o(V, I, M), o(fe, I, M), P(C.children || [], I, fe, R, F, q, K, U)) : X > 0 && X & 64 && ue && g.dynamicChildren ? (k(g.dynamicChildren, ue, I, R, F, q, K), (C.key != null || R && C === R.subTree) && gl(g, C, !0)) : Z(g, C, I, fe, R, F, q, K, U)
    }, $ = (g, C, I, M, R, F, q, K, U) => {
        C.slotScopeIds = K, g == null ? C.shapeFlag & 512 ? R.ctx.activate(C, I, M, q, U) : ie(C, I, M, R, F, q, U) : me(g, C, U)
    }, ie = (g, C, I, M, R, F, q) => {
        const K = g.component = yd(g, M, R);
        if (Lo(g) && (K.ctx.renderer = ve), pd(K, !1, q), K.asyncDep) {
            if (R && R.registerDep(K, z, q), !g.el) {
                const U = K.subTree = d(Je);
                x(null, U, C, I)
            }
        } else z(K, g, C, I, R, F, q)
    }, me = (g, C, I) => {
        const M = C.component = g.component;
        if (ud(g, C, I))
            if (M.asyncDep && !M.asyncResolved) {
                G(M, C, I);
                return
            } else M.next = C, M.update();
        else C.el = g.el, M.vnode = C
    }, z = (g, C, I, M, R, F, q) => {
        const K = () => {
            if (g.isMounted) {
                let {
                    next: X,
                    bu: ue,
                    u: de,
                    parent: be,
                    vnode: ke
                } = g; {
                    const Ot = mc(g);
                    if (Ot) {
                        X && (X.el = ke.el, G(g, X, q)), Ot.asyncDep.then(() => {
                            g.isUnmounted || K()
                        });
                        return
                    }
                }
                let _e = X,
                    at;
                yn(g, !1), X ? (X.el = ke.el, G(g, X, q)) : X = ke, ue && Un(ue), (at = X.props && X.props.onVnodeBeforeUpdate) && ht(at, be, X, ke), yn(g, !0);
                const nt = ta(g),
                    Et = g.subTree;
                g.subTree = nt, p(Et, nt, f(Et.el), O(Et), g, R, F), X.el = nt.el, _e === null && fd(g, nt.el), de && Ne(de, R), (at = X.props && X.props.onVnodeUpdated) && Ne(() => ht(at, be, X, ke), R)
            } else {
                let X;
                const {
                    el: ue,
                    props: de
                } = C, {
                    bm: be,
                    m: ke,
                    parent: _e,
                    root: at,
                    type: nt
                } = g, Et = On(C);
                yn(g, !1), be && Un(be), !Et && (X = de && de.onVnodeBeforeMount) && ht(X, _e, C), yn(g, !0); {
                    at.ce && at.ce._injectChildStyle(nt);
                    const Ot = g.subTree = ta(g);
                    p(null, Ot, I, M, g, R, F), C.el = Ot.el
                }
                if (ke && Ne(ke, R), !Et && (X = de && de.onVnodeMounted)) {
                    const Ot = C;
                    Ne(() => ht(X, _e, Ot), R)
                }(C.shapeFlag & 256 || _e && On(_e.vnode) && _e.vnode.shapeFlag & 256) && g.a && Ne(g.a, R), g.isMounted = !0, C = I = M = null
            }
        };
        g.scope.on();
        const U = g.effect = new Cs(K);
        g.scope.off();
        const V = g.update = U.run.bind(U),
            fe = g.job = U.runIfDirty.bind(U);
        fe.i = g, fe.id = g.uid, U.scheduler = () => cl(fe), yn(g, !0), V()
    }, G = (g, C, I) => {
        C.component = g;
        const M = g.vnode.props;
        g.vnode = C, g.next = null, qf(g, C.props, M, I), Jf(g, C.children, I), dn(), jl(g), hn()
    }, Z = (g, C, I, M, R, F, q, K, U = !1) => {
        const V = g && g.children,
            fe = g ? g.shapeFlag : 0,
            X = C.children,
            {
                patchFlag: ue,
                shapeFlag: de
            } = C;
        if (ue > 0) {
            if (ue & 128) {
                Ae(V, X, I, M, R, F, q, K, U);
                return
            } else if (ue & 256) {
                pe(V, X, I, M, R, F, q, K, U);
                return
            }
        }
        de & 8 ? (fe & 16 && ee(V, R, F), X !== V && c(I, X)) : fe & 16 ? de & 16 ? Ae(V, X, I, M, R, F, q, K, U) : ee(V, R, F, !0) : (fe & 8 && c(I, ""), de & 16 && P(X, I, M, R, F, q, K, U))
    }, pe = (g, C, I, M, R, F, q, K, U) => {
        g = g || jn, C = C || jn;
        const V = g.length,
            fe = C.length,
            X = Math.min(V, fe);
        let ue;
        for (ue = 0; ue < X; ue++) {
            const de = C[ue] = U ? on(C[ue]) : It(C[ue]);
            p(g[ue], de, I, null, R, F, q, K, U)
        }
        V > fe ? ee(g, R, F, !0, !1, X) : P(C, I, M, R, F, q, K, U, X)
    }, Ae = (g, C, I, M, R, F, q, K, U) => {
        let V = 0;
        const fe = C.length;
        let X = g.length - 1,
            ue = fe - 1;
        for (; V <= X && V <= ue;) {
            const de = g[V],
                be = C[V] = U ? on(C[V]) : It(C[V]);
            if (rn(de, be)) p(de, be, I, null, R, F, q, K, U);
            else break;
            V++
        }
        for (; V <= X && V <= ue;) {
            const de = g[X],
                be = C[ue] = U ? on(C[ue]) : It(C[ue]);
            if (rn(de, be)) p(de, be, I, null, R, F, q, K, U);
            else break;
            X--, ue--
        }
        if (V > X) {
            if (V <= ue) {
                const de = ue + 1,
                    be = de < fe ? C[de].el : M;
                for (; V <= ue;) p(null, C[V] = U ? on(C[V]) : It(C[V]), I, be, R, F, q, K, U), V++
            }
        } else if (V > ue)
            for (; V <= X;) L(g[V], R, F, !0), V++;
        else {
            const de = V,
                be = V,
                ke = new Map;
            for (V = be; V <= ue; V++) {
                const st = C[V] = U ? on(C[V]) : It(C[V]);
                st.key != null && ke.set(st.key, V)
            }
            let _e, at = 0;
            const nt = ue - be + 1;
            let Et = !1,
                Ot = 0;
            const co = new Array(nt);
            for (V = 0; V < nt; V++) co[V] = 0;
            for (V = de; V <= X; V++) {
                const st = g[V];
                if (at >= nt) {
                    L(st, R, F, !0);
                    continue
                }
                let kt;
                if (st.key != null) kt = ke.get(st.key);
                else
                    for (_e = be; _e <= ue; _e++)
                        if (co[_e - be] === 0 && rn(st, C[_e])) {
                            kt = _e;
                            break
                        }
                kt === void 0 ? L(st, R, F, !0) : (co[kt - be] = V + 1, kt >= Ot ? Ot = kt : Et = !0, p(st, C[kt], I, null, R, F, q, K, U), at++)
            }
            const Fl = Et ? nd(co) : jn;
            for (_e = Fl.length - 1, V = nt - 1; V >= 0; V--) {
                const st = be + V,
                    kt = C[st],
                    Ll = st + 1 < fe ? C[st + 1].el : M;
                co[V] === 0 ? p(null, kt, I, Ll, R, F, q, K, U) : Et && (_e < 0 || V !== Fl[_e] ? D(kt, I, Ll, 2) : _e--)
            }
        }
    }, D = (g, C, I, M, R = null) => {
        const {
            el: F,
            type: q,
            transition: K,
            children: U,
            shapeFlag: V
        } = g;
        if (V & 6) {
            D(g.component.subTree, C, I, M);
            return
        }
        if (V & 128) {
            g.suspense.move(C, I, M);
            return
        }
        if (V & 64) {
            q.move(g, C, I, ve);
            return
        }
        if (q === Ze) {
            o(F, C, I);
            for (let X = 0; X < U.length; X++) D(U[X], C, I, M);
            o(g.anchor, C, I);
            return
        }
        if (q === ar) {
            S(g, C, I);
            return
        }
        if (M !== 2 && V & 1 && K)
            if (M === 0) K.beforeEnter(F), o(F, C, I), Ne(() => K.enter(F), R);
            else {
                const {
                    leave: X,
                    delayLeave: ue,
                    afterLeave: de
                } = K, be = () => o(F, C, I), ke = () => {
                    X(F, () => {
                        be(), de && de()
                    })
                };
                ue ? ue(F, be, ke) : ke()
            }
        else o(F, C, I)
    }, L = (g, C, I, M = !1, R = !1) => {
        const {
            type: F,
            props: q,
            ref: K,
            children: U,
            dynamicChildren: V,
            shapeFlag: fe,
            patchFlag: X,
            dirs: ue,
            cacheIndex: de
        } = g;
        if (X === -2 && (R = !1), K != null && yi(K, null, I, g, !0), de != null && (C.renderCache[de] = void 0), fe & 256) {
            C.ctx.deactivate(g);
            return
        }
        const be = fe & 1 && ue,
            ke = !On(g);
        let _e;
        if (ke && (_e = q && q.onVnodeBeforeUnmount) && ht(_e, C, g), fe & 6) N(g.component, I, M);
        else {
            if (fe & 128) {
                g.suspense.unmount(I, M);
                return
            }
            be && bn(g, null, C, "beforeUnmount"), fe & 64 ? g.type.remove(g, C, I, ve, M) : V && !V.hasOnce && (F !== Ze || X > 0 && X & 64) ? ee(V, C, I, !1, !0) : (F === Ze && X & 384 || !R && fe & 16) && ee(U, C, I), M && te(g)
        }(ke && (_e = q && q.onVnodeUnmounted) || be) && Ne(() => {
            _e && ht(_e, C, g), be && bn(g, null, C, "unmounted")
        }, I)
    }, te = g => {
        const {
            type: C,
            el: I,
            anchor: M,
            transition: R
        } = g;
        if (C === Ze) {
            ae(I, M);
            return
        }
        if (C === ar) {
            w(g);
            return
        }
        const F = () => {
            i(I), R && !R.persisted && R.afterLeave && R.afterLeave()
        };
        if (g.shapeFlag & 1 && R && !R.persisted) {
            const {
                leave: q,
                delayLeave: K
            } = R, U = () => q(I, F);
            K ? K(g.el, F, U) : U()
        } else F()
    }, ae = (g, C) => {
        let I;
        for (; g !== C;) I = h(g), i(g), g = I;
        i(C)
    }, N = (g, C, I) => {
        const {
            bum: M,
            scope: R,
            job: F,
            subTree: q,
            um: K,
            m: U,
            a: V
        } = g;
        wi(U), wi(V), M && Un(M), R.stop(), F && (F.flags |= 8, L(q, g, C, I)), K && Ne(K, C), Ne(() => {
            g.isUnmounted = !0
        }, C), C && C.pendingBranch && !C.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === C.pendingId && (C.deps--, C.deps === 0 && C.resolve())
    }, ee = (g, C, I, M = !1, R = !1, F = 0) => {
        for (let q = F; q < g.length; q++) L(g[q], C, I, M, R)
    }, O = g => {
        if (g.shapeFlag & 6) return O(g.component.subTree);
        if (g.shapeFlag & 128) return g.suspense.next();
        const C = h(g.anchor || g.el),
            I = C && C[Us];
        return I ? h(I) : C
    };
    let Y = !1;
    const J = (g, C, I) => {
            g == null ? C._vnode && L(C._vnode, null, null, !0) : p(C._vnode || null, g, C, null, null, null, I), C._vnode = g, Y || (Y = !0, jl(), zs(), Y = !1)
        },
        ve = {
            p,
            um: L,
            m: D,
            r: te,
            mt: ie,
            mc: P,
            pc: Z,
            pbc: k,
            n: O,
            o: e
        };
    return {
        render: J,
        hydrate: void 0,
        createApp: Kf(J)
    }
}

function lr({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function yn({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function td(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function gl(e, t, n = !1) {
    const o = e.children,
        i = t.children;
    if (re(o) && re(i))
        for (let r = 0; r < o.length; r++) {
            const l = o[r];
            let a = i[r];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[r] = on(i[r]), a.el = l.el), !n && a.patchFlag !== -2 && gl(l, a)), a.type === Hi && (a.el = l.el)
        }
}

function nd(e) {
    const t = e.slice(),
        n = [0];
    let o, i, r, l, a;
    const s = e.length;
    for (o = 0; o < s; o++) {
        const u = e[o];
        if (u !== 0) {
            if (i = n[n.length - 1], e[i] < u) {
                t[o] = i, n.push(o);
                continue
            }
            for (r = 0, l = n.length - 1; r < l;) a = r + l >> 1, e[n[a]] < u ? r = a + 1 : l = a;
            u < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o)
        }
    }
    for (r = n.length, l = n[r - 1]; r-- > 0;) n[r] = l, l = t[l];
    return n
}

function mc(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : mc(t)
}

function wi(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const od = Symbol.for("v-scx"),
    id = () => Ht(od);

function Vi(e, t) {
    return ml(e, null, t)
}

function oe(e, t, n) {
    return ml(e, t, n)
}

function ml(e, t, n = Ee) {
    const {
        immediate: o,
        deep: i,
        flush: r,
        once: l
    } = n, a = Ue({}, n), s = t && o || !t && r !== "post";
    let u;
    if (Jn) {
        if (r === "sync") {
            const v = id();
            u = v.__watcherHandles || (v.__watcherHandles = [])
        } else if (!s) {
            const v = () => {};
            return v.stop = At, v.resume = At, v.pause = At, v
        }
    }
    const c = ze;
    a.call = (v, y, p) => Ct(v, c, y, p);
    let f = !1;
    r === "post" ? a.scheduler = v => {
        Ne(v, c && c.suspense)
    } : r !== "sync" && (f = !0, a.scheduler = (v, y) => {
        y ? v() : cl(v)
    }), a.augmentJob = v => {
        t && (v.flags |= 4), f && (v.flags |= 2, c && (v.id = c.uid, v.i = c))
    };
    const h = pf(e, t, a);
    return Jn && (u ? u.push(h) : s && h()), h
}

function rd(e, t, n) {
    const o = this.proxy,
        i = Ie(e) ? e.includes(".") ? bc(o, e) : () => o[e] : e.bind(o, o);
    let r;
    he(t) ? r = t : (r = t.handler, n = t);
    const l = No(this),
        a = ml(i, r.bind(o), n);
    return l(), a
}

function bc(e, t) {
    const n = t.split(".");
    return () => {
        let o = e;
        for (let i = 0; i < n.length && o; i++) o = o[n[i]];
        return o
    }
}
const ld = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bt(t)}Modifiers`] || e[`${qt(t)}Modifiers`];

function ad(e, t, ...n) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || Ee;
    let i = n;
    const r = t.startsWith("update:"),
        l = r && ld(o, t.slice(7));
    l && (l.trim && (i = n.map(c => Ie(c) ? c.trim() : c)), l.number && (i = n.map(vi)));
    let a, s = o[a = Zi(t)] || o[a = Zi(bt(t))];
    !s && r && (s = o[a = Zi(qt(t))]), s && Ct(s, e, 6, i);
    const u = o[a + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, Ct(u, e, 6, i)
    }
}

function yc(e, t, n = !1) {
    const o = t.emitsCache,
        i = o.get(e);
    if (i !== void 0) return i;
    const r = e.emits;
    let l = {},
        a = !1;
    if (!he(e)) {
        const s = u => {
            const c = yc(u, t, !0);
            c && (a = !0, Ue(l, c))
        };
        !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s)
    }
    return !r && !a ? (Oe(e) && o.set(e, null), null) : (re(r) ? r.forEach(s => l[s] = null) : Ue(l, r), Oe(e) && o.set(e, l), l)
}

function Ni(e, t) {
    return !e || !Ii(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Se(e, t[0].toLowerCase() + t.slice(1)) || Se(e, qt(t)) || Se(e, t))
}

function ta(e) {
    const {
        type: t,
        vnode: n,
        proxy: o,
        withProxy: i,
        propsOptions: [r],
        slots: l,
        attrs: a,
        emit: s,
        render: u,
        renderCache: c,
        props: f,
        data: h,
        setupState: v,
        ctx: y,
        inheritAttrs: p
    } = e, m = bi(e);
    let x, b;
    try {
        if (n.shapeFlag & 4) {
            const w = i || o,
                E = w;
            x = It(u.call(E, w, c, f, v, h, y)), b = a
        } else {
            const w = t;
            x = It(w.length > 1 ? w(f, {
                attrs: a,
                slots: l,
                emit: s
            }) : w(f, null)), b = t.props ? a : sd(a)
        }
    } catch (w) {
        Oo.length = 0, Fo(w, e, 1), x = d(Je)
    }
    let S = x;
    if (b && p !== !1) {
        const w = Object.keys(b),
            {
                shapeFlag: E
            } = S;
        w.length && E & 7 && (r && w.some(Jr) && (b = cd(b, r)), S = Ut(S, b, !1, !0))
    }
    return n.dirs && (S = Ut(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && Zn(S, n.transition), x = S, bi(m), x
}
const sd = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || Ii(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    cd = (e, t) => {
        const n = {};
        for (const o in e)(!Jr(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
        return n
    };

function ud(e, t, n) {
    const {
        props: o,
        children: i,
        component: r
    } = e, {
        props: l,
        children: a,
        patchFlag: s
    } = t, u = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && s >= 0) {
        if (s & 1024) return !0;
        if (s & 16) return o ? na(o, l, u) : !!l;
        if (s & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const h = c[f];
                if (l[h] !== o[h] && !Ni(u, h)) return !0
            }
        }
    } else return (i || a) && (!a || !a.$stable) ? !0 : o === l ? !1 : o ? l ? na(o, l, u) : !0 : !!l;
    return !1
}

function na(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < o.length; i++) {
        const r = o[i];
        if (t[r] !== e[r] && !Ni(n, r)) return !0
    }
    return !1
}

function fd({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const o = t.subTree;
        if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const xi = e => e.__isSuspense;

function dd(e, t) {
    t && t.pendingBranch ? re(e) ? t.effects.push(...e) : t.effects.push(e) : Sf(e)
}
const Ze = Symbol.for("v-fgt"),
    Hi = Symbol.for("v-txt"),
    Je = Symbol.for("v-cmt"),
    ar = Symbol.for("v-stc"),
    Oo = [];
let ut = null;

function Pr(e = !1) {
    Oo.push(ut = e ? null : [])
}

function hd() {
    Oo.pop(), ut = Oo[Oo.length - 1] || null
}
let Bo = 1;

function oa(e, t = !1) {
    Bo += e, e < 0 && ut && t && (ut.hasOnce = !0)
}

function pc(e) {
    return e.dynamicChildren = Bo > 0 ? ut || jn : null, hd(), Bo > 0 && ut && ut.push(e), e
}

function Qy(e, t, n, o, i, r) {
    return pc(xc(e, t, n, o, i, r, !0))
}

function Br(e, t, n, o, i) {
    return pc(d(e, t, n, o, i, !0))
}

function An(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function rn(e, t) {
    return e.type === t.type && e.key === t.key
}
const wc = ({
        key: e
    }) => e ? ? null,
    ci = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || Ye(e) || he(e) ? {
        i: je,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function xc(e, t = null, n = null, o = 0, i = null, r = e === Ze ? 0 : 1, l = !1, a = !1) {
    const s = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && wc(t),
        ref: t && ci(t),
        scopeId: Ws,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: o,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: je
    };
    return a ? (bl(s, n), r & 128 && e.normalize(s)) : n && (s.shapeFlag |= Ie(n) ? 8 : 16), Bo > 0 && !l && ut && (s.patchFlag > 0 || r & 6) && s.patchFlag !== 32 && ut.push(s), s
}
const d = vd;

function vd(e, t = null, n = null, o = 0, i = null, r = !1) {
    if ((!e || e === nc) && (e = Je), An(e)) {
        const a = Ut(e, t, !0);
        return n && bl(a, n), Bo > 0 && !r && ut && (a.shapeFlag & 6 ? ut[ut.indexOf(e)] = a : ut.push(a)), a.patchFlag = -2, a
    }
    if (Sd(e) && (e = e.__vccOpts), t) {
        t = gd(t);
        let {
            class: a,
            style: s
        } = t;
        a && !Ie(a) && (t.class = Ri(a)), Oe(s) && (sl(s) && !re(s) && (s = Ue({}, s)), t.style = $i(s))
    }
    const l = Ie(e) ? 1 : xi(e) ? 128 : Ks(e) ? 64 : Oe(e) ? 4 : he(e) ? 2 : 0;
    return xc(e, t, n, o, i, l, r, !0)
}

function gd(e) {
    return e ? sl(e) || cc(e) ? Ue({}, e) : e : null
}

function Ut(e, t, n = !1, o = !1) {
    const {
        props: i,
        ref: r,
        patchFlag: l,
        children: a,
        transition: s
    } = e, u = t ? $e(i || {}, t) : i, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && wc(u),
        ref: t && t.ref ? n && r ? re(r) ? r.concat(ci(t)) : [r, ci(t)] : ci(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ze ? l === -1 ? 16 : l | 16 : l,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: s,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Ut(e.ssContent),
        ssFallback: e.ssFallback && Ut(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return s && o && Zn(c, s.clone(c)), c
}

function Sc(e = " ", t = 0) {
    return d(Hi, null, e, t)
}

function ep(e = "", t = !1) {
    return t ? (Pr(), Br(Je, null, e)) : d(Je, null, e)
}

function It(e) {
    return e == null || typeof e == "boolean" ? d(Je) : re(e) ? d(Ze, null, e.slice()) : An(e) ? on(e) : d(Hi, null, String(e))
}

function on(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ut(e)
}

function bl(e, t) {
    let n = 0;
    const {
        shapeFlag: o
    } = e;
    if (t == null) t = null;
    else if (re(t)) n = 16;
    else if (typeof t == "object")
        if (o & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1), bl(e, i()), i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !cc(t) ? t._ctx = je : i === 3 && je && (je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else he(t) ? (t = {
        default: t,
        _ctx: je
    }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Sc(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function $e(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (const i in o)
            if (i === "class") t.class !== o.class && (t.class = Ri([t.class, o.class]));
            else if (i === "style") t.style = $i([t.style, o.style]);
        else if (Ii(i)) {
            const r = t[i],
                l = o[i];
            l && r !== l && !(re(r) && r.includes(l)) && (t[i] = r ? [].concat(r, l) : l)
        } else i !== "" && (t[i] = o[i])
    }
    return t
}

function ht(e, t, n, o = null) {
    Ct(e, t, 7, [n, o])
}
const md = lc();
let bd = 0;

function yd(e, t, n) {
    const o = e.type,
        i = (t ? t.appContext : e.appContext) || md,
        r = {
            uid: bd++,
            vnode: e,
            type: o,
            parent: t,
            appContext: i,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Ss(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(i.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: fc(o, i),
            emitsOptions: yc(o, i),
            emit: null,
            emitted: null,
            propsDefaults: Ee,
            inheritAttrs: o.inheritAttrs,
            ctx: Ee,
            data: Ee,
            props: Ee,
            attrs: Ee,
            slots: Ee,
            refs: Ee,
            setupState: Ee,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return r.ctx = {
        _: r
    }, r.root = t ? t.root : r, r.emit = ad.bind(null, r), e.ce && e.ce(r), r
}
let ze = null;
const yt = () => ze || je;
let Si, $r; {
    const e = Bi(),
        t = (n, o) => {
            let i;
            return (i = e[n]) || (i = e[n] = []), i.push(o), r => {
                i.length > 1 ? i.forEach(l => l(r)) : i[0](r)
            }
        };
    Si = t("__VUE_INSTANCE_SETTERS__", n => ze = n), $r = t("__VUE_SSR_SETTERS__", n => Jn = n)
}
const No = e => {
        const t = ze;
        return Si(e), e.scope.on(), () => {
            e.scope.off(), Si(t)
        }
    },
    ia = () => {
        ze && ze.scope.off(), Si(null)
    };

function Cc(e) {
    return e.vnode.shapeFlag & 4
}
let Jn = !1;

function pd(e, t = !1, n = !1) {
    t && $r(t);
    const {
        props: o,
        children: i
    } = e.vnode, r = Cc(e);
    Yf(e, o, r, t), Zf(e, i, n);
    const l = r ? wd(e, t) : void 0;
    return t && $r(!1), l
}

function wd(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Lf);
    const {
        setup: o
    } = n;
    if (o) {
        dn();
        const i = e.setupContext = o.length > 1 ? _c(e) : null,
            r = No(e),
            l = Mo(o, e, 0, [e.props, i]),
            a = gs(l);
        if (hn(), r(), (a || e.sp) && !On(e) && ul(e), a) {
            if (l.then(ia, ia), t) return l.then(s => {
                ra(e, s)
            }).catch(s => {
                Fo(s, e, 0)
            });
            e.asyncDep = l
        } else ra(e, l)
    } else Tc(e)
}

function ra(e, t, n) {
    he(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Oe(t) && (e.setupState = Vs(t)), Tc(e)
}

function Tc(e, t, n) {
    const o = e.type;
    e.render || (e.render = o.render || At); {
        const i = No(e);
        dn();
        try {
            Nf(e)
        } finally {
            hn(), i()
        }
    }
}
const xd = {
    get(e, t) {
        return Ge(e, "get", ""), e[t]
    }
};

function _c(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, xd),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function zi(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vs(hf(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Eo) return Eo[n](e)
        },
        has(t, n) {
            return n in t || n in Eo
        }
    })) : e.proxy
}

function Rr(e, t = !0) {
    return he(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Sd(e) {
    return he(e) && "__vccOpts" in e
}
const W = (e, t) => bf(e, t, Jn);

function Cd(e, t, n) {
    const o = arguments.length;
    return o === 2 ? Oe(t) && !re(t) ? An(t) ? d(e, null, [t]) : d(e, t) : d(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && An(n) && (n = [n]), d(e, t, n))
}
const Td = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Mr;
const la = typeof window < "u" && window.trustedTypes;
if (la) try {
    Mr = la.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const Ec = Mr ? e => Mr.createHTML(e) : e => e,
    _d = "http://www.w3.org/2000/svg",
    Ed = "http://www.w3.org/1998/Math/MathML",
    Mt = typeof document < "u" ? document : null,
    aa = Mt && Mt.createElement("template"),
    Od = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, o) => {
            const i = t === "svg" ? Mt.createElementNS(_d, e) : t === "mathml" ? Mt.createElementNS(Ed, e) : n ? Mt.createElement(e, {
                is: n
            }) : Mt.createElement(e);
            return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i
        },
        createText: e => Mt.createTextNode(e),
        createComment: e => Mt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Mt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, o, i, r) {
            const l = n ? n.previousSibling : t.lastChild;
            if (i && (i === r || i.nextSibling))
                for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)););
            else {
                aa.innerHTML = Ec(o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e);
                const a = aa.content;
                if (o === "svg" || o === "mathml") {
                    const s = a.firstChild;
                    for (; s.firstChild;) a.appendChild(s.firstChild);
                    a.removeChild(s)
                }
                t.insertBefore(a, n)
            }
            return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    Jt = "transition",
    fo = "animation",
    $o = Symbol("_vtc"),
    Oc = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    kd = Ue({}, Gs, Oc),
    Dd = e => (e.displayName = "Transition", e.props = kd, e),
    yl = Dd((e, {
        slots: t
    }) => Cd(Of, Id(e), t)),
    pn = (e, t = []) => {
        re(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    sa = e => e ? re(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Id(e) {
    const t = {};
    for (const T in e) T in Oc || (t[T] = e[T]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: o,
        duration: i,
        enterFromClass: r = `${n}-enter-from`,
        enterActiveClass: l = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: s = r,
        appearActiveClass: u = l,
        appearToClass: c = a,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: h = `${n}-leave-active`,
        leaveToClass: v = `${n}-leave-to`
    } = e, y = Ad(i), p = y && y[0], m = y && y[1], {
        onBeforeEnter: x,
        onEnter: b,
        onEnterCancelled: S,
        onLeave: w,
        onLeaveCancelled: E,
        onBeforeAppear: A = x,
        onAppear: j = b,
        onAppearCancelled: P = S
    } = t, B = (T, $, ie, me) => {
        T._enterCancelled = me, wn(T, $ ? c : a), wn(T, $ ? u : l), ie && ie()
    }, k = (T, $) => {
        T._isLeaving = !1, wn(T, f), wn(T, v), wn(T, h), $ && $()
    }, _ = T => ($, ie) => {
        const me = T ? j : b,
            z = () => B($, T, ie);
        pn(me, [$, z]), ca(() => {
            wn($, T ? s : r), $t($, T ? c : a), sa(me) || ua($, o, p, z)
        })
    };
    return Ue(t, {
        onBeforeEnter(T) {
            pn(x, [T]), $t(T, r), $t(T, l)
        },
        onBeforeAppear(T) {
            pn(A, [T]), $t(T, s), $t(T, u)
        },
        onEnter: _(!1),
        onAppear: _(!0),
        onLeave(T, $) {
            T._isLeaving = !0;
            const ie = () => k(T, $);
            $t(T, f), T._enterCancelled ? ($t(T, h), ha()) : (ha(), $t(T, h)), ca(() => {
                T._isLeaving && (wn(T, f), $t(T, v), sa(w) || ua(T, o, m, ie))
            }), pn(w, [T, ie])
        },
        onEnterCancelled(T) {
            B(T, !1, void 0, !0), pn(S, [T])
        },
        onAppearCancelled(T) {
            B(T, !0, void 0, !0), pn(P, [T])
        },
        onLeaveCancelled(T) {
            k(T), pn(E, [T])
        }
    })
}

function Ad(e) {
    if (e == null) return null;
    if (Oe(e)) return [sr(e.enter), sr(e.leave)]; {
        const t = sr(e);
        return [t, t]
    }
}

function sr(e) {
    return Mu(e)
}

function $t(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[$o] || (e[$o] = new Set)).add(t)
}

function wn(e, t) {
    t.split(/\s+/).forEach(o => o && e.classList.remove(o));
    const n = e[$o];
    n && (n.delete(t), n.size || (e[$o] = void 0))
}

function ca(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let Pd = 0;

function ua(e, t, n, o) {
    const i = e._endId = ++Pd,
        r = () => {
            i === e._endId && o()
        };
    if (n != null) return setTimeout(r, n);
    const {
        type: l,
        timeout: a,
        propCount: s
    } = Bd(e, t);
    if (!l) return o();
    const u = l + "end";
    let c = 0;
    const f = () => {
            e.removeEventListener(u, h), r()
        },
        h = v => {
            v.target === e && ++c >= s && f()
        };
    setTimeout(() => {
        c < s && f()
    }, a + 1), e.addEventListener(u, h)
}

function Bd(e, t) {
    const n = window.getComputedStyle(e),
        o = y => (n[y] || "").split(", "),
        i = o(`${Jt}Delay`),
        r = o(`${Jt}Duration`),
        l = fa(i, r),
        a = o(`${fo}Delay`),
        s = o(`${fo}Duration`),
        u = fa(a, s);
    let c = null,
        f = 0,
        h = 0;
    t === Jt ? l > 0 && (c = Jt, f = l, h = r.length) : t === fo ? u > 0 && (c = fo, f = u, h = s.length) : (f = Math.max(l, u), c = f > 0 ? l > u ? Jt : fo : null, h = c ? c === Jt ? r.length : s.length : 0);
    const v = c === Jt && /\b(transform|all)(,|$)/.test(o(`${Jt}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: h,
        hasTransform: v
    }
}

function fa(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, o) => da(n) + da(e[o])))
}

function da(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function ha() {
    return document.body.offsetHeight
}

function $d(e, t, n) {
    const o = e[$o];
    o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Ci = Symbol("_vod"),
    kc = Symbol("_vsh"),
    cn = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[Ci] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ho(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: o
        }) {
            !t != !n && (o ? t ? (o.beforeEnter(e), ho(e, !0), o.enter(e)) : o.leave(e, () => {
                ho(e, !1)
            }) : ho(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            ho(e, t)
        }
    };

function ho(e, t) {
    e.style.display = t ? e[Ci] : "none", e[kc] = !t
}
const Rd = Symbol(""),
    Md = /(^|;)\s*display\s*:/;

function Fd(e, t, n) {
    const o = e.style,
        i = Ie(n);
    let r = !1;
    if (n && !i) {
        if (t)
            if (Ie(t))
                for (const l of t.split(";")) {
                    const a = l.slice(0, l.indexOf(":")).trim();
                    n[a] == null && ui(o, a, "")
                } else
                    for (const l in t) n[l] == null && ui(o, l, "");
        for (const l in n) l === "display" && (r = !0), ui(o, l, n[l])
    } else if (i) {
        if (t !== n) {
            const l = o[Rd];
            l && (n += ";" + l), o.cssText = n, r = Md.test(n)
        }
    } else t && e.removeAttribute("style");
    Ci in e && (e[Ci] = r ? o.display : "", e[kc] && (o.display = "none"))
}
const va = /\s*!important$/;

function ui(e, t, n) {
    if (re(n)) n.forEach(o => ui(e, t, o));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const o = Ld(e, t);
        va.test(n) ? e.setProperty(qt(o), n.replace(va, ""), "important") : e[o] = n
    }
}
const ga = ["Webkit", "Moz", "ms"],
    cr = {};

function Ld(e, t) {
    const n = cr[t];
    if (n) return n;
    let o = bt(t);
    if (o !== "filter" && o in e) return cr[t] = o;
    o = Pi(o);
    for (let i = 0; i < ga.length; i++) {
        const r = ga[i] + o;
        if (r in e) return cr[t] = r
    }
    return t
}
const ma = "http://www.w3.org/1999/xlink";

function ba(e, t, n, o, i, r = ju(t)) {
    o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ma, t.slice(6, t.length)) : e.setAttributeNS(ma, t, n) : n == null || r && !ps(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : St(n) ? String(n) : n)
}

function ya(e, t, n, o, i) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Ec(n) : n);
        return
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
        const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
            s = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== s || !("_value" in e)) && (e.value = s), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = ps(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(i || t)
}

function Vt(e, t, n, o) {
    e.addEventListener(t, n, o)
}

function Vd(e, t, n, o) {
    e.removeEventListener(t, n, o)
}
const pa = Symbol("_vei");

function Nd(e, t, n, o, i = null) {
    const r = e[pa] || (e[pa] = {}),
        l = r[t];
    if (o && l) l.value = o;
    else {
        const [a, s] = Hd(t);
        if (o) {
            const u = r[t] = Wd(o, i);
            Vt(e, a, u, s)
        } else l && (Vd(e, a, l, s), r[t] = void 0)
    }
}
const wa = /(?:Once|Passive|Capture)$/;

function Hd(e) {
    let t;
    if (wa.test(e)) {
        t = {};
        let o;
        for (; o = e.match(wa);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : qt(e.slice(2)), t]
}
let ur = 0;
const zd = Promise.resolve(),
    jd = () => ur || (zd.then(() => ur = 0), ur = Date.now());

function Wd(e, t) {
    const n = o => {
        if (!o._vts) o._vts = Date.now();
        else if (o._vts <= n.attached) return;
        Ct(Ud(o, n.value), t, 5, [o])
    };
    return n.value = e, n.attached = jd(), n
}

function Ud(e, t) {
    if (re(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(o => i => !i._stopped && o && o(i))
    } else return t
}
const xa = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Kd = (e, t, n, o, i, r) => {
        const l = i === "svg";
        t === "class" ? $d(e, o, l) : t === "style" ? Fd(e, n, o) : Ii(t) ? Jr(t) || Nd(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yd(e, t, o, l)) ? (ya(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ba(e, t, o, l, r, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Ie(o)) ? ya(e, bt(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ba(e, t, o, l))
    };

function Yd(e, t, n, o) {
    if (o) return !!(t === "innerHTML" || t === "textContent" || t in e && xa(t) && he(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
    }
    return xa(t) && Ie(n) ? !1 : t in e
}
const un = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return re(t) ? n => Un(t, n) : t
};

function qd(e) {
    e.target.composing = !0
}

function Sa(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const gt = Symbol("_assign"),
    Ca = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: o
            }
        }, i) {
            e[gt] = un(i);
            const r = o || i.props && i.props.type === "number";
            Vt(e, t ? "change" : "input", l => {
                if (l.target.composing) return;
                let a = e.value;
                n && (a = a.trim()), r && (a = vi(a)), e[gt](a)
            }), n && Vt(e, "change", () => {
                e.value = e.value.trim()
            }), t || (Vt(e, "compositionstart", qd), Vt(e, "compositionend", Sa), Vt(e, "change", Sa))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ? ? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n,
            modifiers: {
                lazy: o,
                trim: i,
                number: r
            }
        }, l) {
            if (e[gt] = un(l), e.composing) return;
            const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? vi(e.value) : e.value,
                s = t ? ? "";
            a !== s && (document.activeElement === e && e.type !== "range" && (o && t === n || i && e.value.trim() === s) || (e.value = s))
        }
    },
    Gd = {
        deep: !0,
        created(e, t, n) {
            e[gt] = un(n), Vt(e, "change", () => {
                const o = e._modelValue,
                    i = Qn(e),
                    r = e.checked,
                    l = e[gt];
                if (re(o)) {
                    const a = tl(o, i),
                        s = a !== -1;
                    if (r && !s) l(o.concat(i));
                    else if (!r && s) {
                        const u = [...o];
                        u.splice(a, 1), l(u)
                    }
                } else if (io(o)) {
                    const a = new Set(o);
                    r ? a.add(i) : a.delete(i), l(a)
                } else l(Dc(e, r))
            })
        },
        mounted: Ta,
        beforeUpdate(e, t, n) {
            e[gt] = un(n), Ta(e, t, n)
        }
    };

function Ta(e, {
    value: t,
    oldValue: n
}, o) {
    e._modelValue = t;
    let i;
    if (re(t)) i = tl(t, o.props.value) > -1;
    else if (io(t)) i = t.has(o.props.value);
    else {
        if (t === n) return;
        i = Dn(t, Dc(e, !0))
    }
    e.checked !== i && (e.checked = i)
}
const Xd = {
        created(e, {
            value: t
        }, n) {
            e.checked = Dn(t, n.props.value), e[gt] = un(n), Vt(e, "change", () => {
                e[gt](Qn(e))
            })
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n
        }, o) {
            e[gt] = un(o), t !== n && (e.checked = Dn(t, o.props.value))
        }
    },
    Zd = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, o) {
            const i = io(t);
            Vt(e, "change", () => {
                const r = Array.prototype.filter.call(e.options, l => l.selected).map(l => n ? vi(Qn(l)) : Qn(l));
                e[gt](e.multiple ? i ? new Set(r) : r : r[0]), e._assigning = !0, Te(() => {
                    e._assigning = !1
                })
            }), e[gt] = un(o)
        },
        mounted(e, {
            value: t
        }) {
            _a(e, t)
        },
        beforeUpdate(e, t, n) {
            e[gt] = un(n)
        },
        updated(e, {
            value: t
        }) {
            e._assigning || _a(e, t)
        }
    };

function _a(e, t) {
    const n = e.multiple,
        o = re(t);
    if (!(n && !o && !io(t))) {
        for (let i = 0, r = e.options.length; i < r; i++) {
            const l = e.options[i],
                a = Qn(l);
            if (n)
                if (o) {
                    const s = typeof a;
                    s === "string" || s === "number" ? l.selected = t.some(u => String(u) === String(a)) : l.selected = tl(t, a) > -1
                } else l.selected = t.has(a);
            else if (Dn(Qn(l), t)) {
                e.selectedIndex !== i && (e.selectedIndex = i);
                return
            }
        }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function Qn(e) {
    return "_value" in e ? e._value : e.value
}

function Dc(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const tp = {
    created(e, t, n) {
        Jo(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        Jo(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, o) {
        Jo(e, t, n, o, "beforeUpdate")
    },
    updated(e, t, n, o) {
        Jo(e, t, n, o, "updated")
    }
};

function Jd(e, t) {
    switch (e) {
        case "SELECT":
            return Zd;
        case "TEXTAREA":
            return Ca;
        default:
            switch (t) {
                case "checkbox":
                    return Gd;
                case "radio":
                    return Xd;
                default:
                    return Ca
            }
    }
}

function Jo(e, t, n, o, i) {
    const l = Jd(e.tagName, n.props && n.props.type)[i];
    l && l(e, t, n, o)
}
const Qd = ["ctrl", "shift", "alt", "meta"],
    eh = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => Qd.some(n => e[`${n}Key`] && !t.includes(n))
    },
    np = (e, t) => {
        const n = e._withMods || (e._withMods = {}),
            o = t.join(".");
        return n[o] || (n[o] = (i, ...r) => {
            for (let l = 0; l < t.length; l++) {
                const a = eh[t[l]];
                if (a && a(i, t)) return
            }
            return e(i, ...r)
        })
    },
    th = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    nh = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}),
            o = t.join(".");
        return n[o] || (n[o] = i => {
            if (!("key" in i)) return;
            const r = qt(i.key);
            if (t.some(l => l === r || th[l] === r)) return e(i)
        })
    },
    oh = Ue({
        patchProp: Kd
    }, Od);
let Ea;

function ih() {
    return Ea || (Ea = Qf(oh))
}
const rh = (...e) => {
    const t = ih().createApp(...e),
        {
            mount: n
        } = t;
    return t.mount = o => {
        const i = ah(o);
        if (!i) return;
        const r = t._component;
        !he(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
        const l = n(i, !1, lh(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l
    }, t
};

function lh(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function ah(e) {
    return Ie(e) ? document.querySelector(e) : e
}

function Fr() {}
const ye = Object.assign,
    Pt = typeof window < "u",
    Ho = e => e !== null && typeof e == "object",
    Be = e => e != null,
    eo = e => typeof e == "function",
    pl = e => Ho(e) && eo(e.then) && eo(e.catch),
    Lr = e => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime()),
    Ic = e => typeof e == "number" || /^\d+(\.\d+)?$/.test(e),
    sh = () => Pt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;

function Oa(e, t) {
    const n = t.split(".");
    let o = e;
    return n.forEach(i => {
        var r;
        o = Ho(o) && (r = o[i]) != null ? r : ""
    }), o
}

function Fe(e, t, n) {
    return t.reduce((o, i) => ((!n || e[i] !== void 0) && (o[i] = e[i]), o), {})
}
const fr = (e, t) => JSON.stringify(e) === JSON.stringify(t),
    Ti = e => Array.isArray(e) ? e : [e],
    He = null,
    ne = [Number, String],
    Q = {
        type: Boolean,
        default: !0
    },
    tt = e => ({
        type: e,
        required: !0
    }),
    fn = () => ({
        type: Array,
        default: () => []
    }),
    wl = e => ({
        type: Number,
        default: e
    }),
    xe = e => ({
        type: ne,
        default: e
    }),
    se = e => ({
        type: String,
        default: e
    });
var gn = typeof window < "u";

function mt(e) {
    return gn ? requestAnimationFrame(e) : -1
}

function xl(e) {
    gn && cancelAnimationFrame(e)
}

function Tn(e) {
    mt(() => mt(e))
}
var ch = e => e === window,
    ka = (e, t) => ({
        top: 0,
        left: 0,
        right: e,
        bottom: t,
        width: e,
        height: t
    }),
    We = e => {
        const t = Xn(e);
        if (ch(t)) {
            const n = t.innerWidth,
                o = t.innerHeight;
            return ka(n, o)
        }
        return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : ka(0, 0)
    };

function uh(e = !1) {
    const t = H(e);
    return [t, (o = !t.value) => {
        t.value = o
    }]
}

function mn(e) {
    const t = Ht(e, null);
    if (t) {
        const n = yt(),
            {
                link: o,
                unlink: i,
                internalChildren: r
            } = t;
        o(n), Vo(() => i(n));
        const l = W(() => r.indexOf(n));
        return {
            parent: t,
            index: l
        }
    }
    return {
        parent: null,
        index: H(-1)
    }
}

function fh(e) {
    const t = [],
        n = o => {
            Array.isArray(o) && o.forEach(i => {
                var r;
                An(i) && (t.push(i), (r = i.component) != null && r.subTree && (t.push(i.component.subTree), n(i.component.subTree.children)), i.children && n(i.children))
            })
        };
    return n(e), t
}
var Da = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? e.findIndex(o => t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
};

function dh(e, t, n) {
    const o = fh(e.subTree.children);
    n.sort((r, l) => Da(o, r.vnode) - Da(o, l.vnode));
    const i = n.map(r => r.proxy);
    t.sort((r, l) => {
        const a = i.indexOf(r),
            s = i.indexOf(l);
        return a - s
    })
}

function zo(e) {
    const t = Ke([]),
        n = Ke([]),
        o = yt();
    return {
        children: t,
        linkChildren: r => {
            lo(e, Object.assign({
                link: s => {
                    s.proxy && (n.push(s), t.push(s.proxy), dh(o, t, n))
                },
                unlink: s => {
                    const u = n.indexOf(s);
                    t.splice(u, 1), n.splice(u, 1)
                },
                children: t,
                internalChildren: n
            }, r))
        }
    }
}
var Vr = 1e3,
    Nr = 60 * Vr,
    Hr = 60 * Nr,
    Ia = 24 * Hr;

function hh(e) {
    const t = Math.floor(e / Ia),
        n = Math.floor(e % Ia / Hr),
        o = Math.floor(e % Hr / Nr),
        i = Math.floor(e % Nr / Vr),
        r = Math.floor(e % Vr);
    return {
        total: e,
        days: t,
        hours: n,
        minutes: o,
        seconds: i,
        milliseconds: r
    }
}

function vh(e, t) {
    return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}

function gh(e) {
    let t, n, o, i;
    const r = H(e.time),
        l = W(() => hh(r.value)),
        a = () => {
            o = !1, xl(t)
        },
        s = () => Math.max(n - Date.now(), 0),
        u = p => {
            var m, x;
            r.value = p, (m = e.onChange) == null || m.call(e, l.value), p === 0 && (a(), (x = e.onFinish) == null || x.call(e))
        },
        c = () => {
            t = mt(() => {
                o && (u(s()), r.value > 0 && c())
            })
        },
        f = () => {
            t = mt(() => {
                if (o) {
                    const p = s();
                    (!vh(p, r.value) || p === 0) && u(p), r.value > 0 && f()
                }
            })
        },
        h = () => {
            gn && (e.millisecond ? c() : f())
        },
        v = () => {
            o || (n = Date.now() + r.value, o = !0, h())
        },
        y = (p = e.time) => {
            a(), r.value = p
        };
    return Tt(a), vn(() => {
        i && (o = !0, i = !1, h())
    }), Gt(() => {
        o && (a(), i = !0)
    }), {
        start: v,
        pause: a,
        reset: y,
        current: l
    }
}

function ao(e) {
    let t;
    qe(() => {
        e(), Te(() => {
            t = !0
        })
    }), vn(() => {
        t && e()
    })
}

function lt(e, t, n = {}) {
    if (!gn) return;
    const {
        target: o = window,
        passive: i = !1,
        capture: r = !1
    } = n;
    let l = !1,
        a;
    const s = f => {
            if (l) return;
            const h = Xn(f);
            h && !a && (h.addEventListener(e, t, {
                capture: r,
                passive: i
            }), a = !0)
        },
        u = f => {
            if (l) return;
            const h = Xn(f);
            h && a && (h.removeEventListener(e, t, r), a = !1)
        };
    Vo(() => u(o)), Gt(() => u(o)), ao(() => s(o));
    let c;
    return Ye(o) && (c = oe(o, (f, h) => {
        u(h), s(f)
    })), () => {
        c == null || c(), u(o), l = !0
    }
}

function Ac(e, t, n = {}) {
    if (!gn) return;
    const {
        eventName: o = "click"
    } = n;
    lt(o, r => {
        (Array.isArray(e) ? e : [e]).every(s => {
            const u = Xn(s);
            return u && !u.contains(r.target)
        }) && t(r)
    }, {
        target: document
    })
}
var Qo, dr;

function mh() {
    if (!Qo && (Qo = H(0), dr = H(0), gn)) {
        const e = () => {
            Qo.value = window.innerWidth, dr.value = window.innerHeight
        };
        e(), window.addEventListener("resize", e, {
            passive: !0
        }), window.addEventListener("orientationchange", e, {
            passive: !0
        })
    }
    return {
        width: Qo,
        height: dr
    }
}
var bh = /scroll|auto|overlay/i,
    Pc = gn ? window : void 0;

function yh(e) {
    return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}

function Bc(e, t = Pc) {
    let n = e;
    for (; n && n !== t && yh(n);) {
        const {
            overflowY: o
        } = window.getComputedStyle(n);
        if (bh.test(o)) return n;
        n = n.parentNode
    }
    return t
}

function ji(e, t = Pc) {
    const n = H();
    return qe(() => {
        e.value && (n.value = Bc(e.value, t))
    }), n
}
var ei;

function ph() {
    if (!ei && (ei = H("visible"), gn)) {
        const e = () => {
            ei.value = document.hidden ? "hidden" : "visible"
        };
        e(), window.addEventListener("visibilitychange", e)
    }
    return ei
}
var $c = Symbol("van-field");

function Wi(e) {
    const t = Ht($c, null);
    t && !t.customValue.value && (t.customValue.value = e, oe(e, () => {
        t.resetValidation(), t.validateWithTrigger("onChange")
    }))
}

function jo(e) {
    const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0)
}

function _i(e, t) {
    "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}

function Sl() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

function Cl(e) {
    _i(window, e), _i(document.body, e)
}

function Aa(e, t) {
    if (e === window) return 0;
    const n = t ? jo(t) : Sl();
    return We(e).top + n
}
const wh = sh();

function xh() {
    wh && Cl(Sl())
}
const Rc = e => e.stopPropagation();

function rt(e, t) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && Rc(e)
}

function to(e) {
    const t = Xn(e);
    if (!t) return !1;
    const n = window.getComputedStyle(t),
        o = n.display === "none",
        i = t.offsetParent === null && n.position !== "fixed";
    return o || i
}
const {
    width: zt,
    height: sn
} = mh();

function Ce(e) {
    if (Be(e)) return Ic(e) ? `${e}px` : String(e)
}

function so(e) {
    if (Be(e)) {
        if (Array.isArray(e)) return {
            width: Ce(e[0]),
            height: Ce(e[1])
        };
        const t = Ce(e);
        return {
            width: t,
            height: t
        }
    }
}

function Tl(e) {
    const t = {};
    return e !== void 0 && (t.zIndex = +e), t
}
let hr;

function Sh() {
    if (!hr) {
        const e = document.documentElement,
            t = e.style.fontSize || window.getComputedStyle(e).fontSize;
        hr = parseFloat(t)
    }
    return hr
}

function Ch(e) {
    return e = e.replace(/rem/g, ""), +e * Sh()
}

function Th(e) {
    return e = e.replace(/vw/g, ""), +e * zt.value / 100
}

function _h(e) {
    return e = e.replace(/vh/g, ""), +e * sn.value / 100
}

function _l(e) {
    if (typeof e == "number") return e;
    if (Pt) {
        if (e.includes("rem")) return Ch(e);
        if (e.includes("vw")) return Th(e);
        if (e.includes("vh")) return _h(e)
    }
    return parseFloat(e)
}
const Eh = /-(\w)/g,
    Mc = e => e.replace(Eh, (t, n) => n.toUpperCase()),
    Oh = e => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

function vo(e, t = 2) {
    let n = e + "";
    for (; n.length < t;) n = "0" + n;
    return n
}
const it = (e, t, n) => Math.min(Math.max(e, t), n);

function Pa(e, t, n) {
    const o = e.indexOf(t);
    return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}

function kh(e, t = !0, n = !0) {
    t ? e = Pa(e, ".", /\./g) : e = e.split(".")[0], n ? e = Pa(e, "-", /-/g) : e = e.replace(/-/, "");
    const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return e.replace(o, "")
}
const {
    hasOwnProperty: Dh
} = Object.prototype;

function Ih(e, t, n) {
    const o = t[n];
    Be(o) && (!Dh.call(e, n) || !Ho(o) ? e[n] = o : e[n] = Fc(Object(e[n]), o))
}

function Fc(e, t) {
    return Object.keys(t).forEach(n => {
        Ih(e, t, n)
    }), e
}
var Ah = {
    name: "姓名",
    tel: "电话",
    save: "保存",
    clear: "清空",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
        end: "结束",
        start: "开始",
        title: "日期选择",
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        monthTitle: (e, t) => `${e}年${t}月`,
        rangePrompt: e => `最多选择 ${e} 天`
    },
    vanCascader: {
        select: "请选择"
    },
    vanPagination: {
        prev: "上一页",
        next: "下一页"
    },
    vanPullRefresh: {
        pulling: "下拉即可刷新...",
        loosing: "释放即可刷新..."
    },
    vanSubmitBar: {
        label: "合计:"
    },
    vanCoupon: {
        unlimited: "无门槛",
        discount: e => `${e}折`,
        condition: e => `满${e}元可用`
    },
    vanCouponCell: {
        title: "优惠券",
        count: e => `${e}张可用`
    },
    vanCouponList: {
        exchange: "兑换",
        close: "不使用",
        enable: "可用",
        disabled: "不可用",
        placeholder: "输入优惠码"
    },
    vanAddressEdit: {
        area: "地区",
        areaEmpty: "请选择地区",
        addressEmpty: "请填写详细地址",
        addressDetail: "详细地址",
        defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {
        add: "新增地址"
    }
};
const Ba = H("zh-CN"),
    $a = Ke({
        "zh-CN": Ah
    }),
    Ph = {
        messages() {
            return $a[Ba.value]
        },
        use(e, t) {
            Ba.value = e, this.add({
                [e]: t
            })
        },
        add(e = {}) {
            Fc($a, e)
        }
    };
var Bh = Ph;

function $h(e) {
    const t = Mc(e) + ".";
    return (n, ...o) => {
        const i = Bh.messages(),
            r = Oa(i, t + n) || Oa(i, n);
        return eo(r) ? r(...o) : r
    }
}

function zr(e, t) {
    return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n, o) => n + zr(e, o), "") : Object.keys(t).reduce((n, o) => n + (t[o] ? zr(e, o) : ""), "") : ""
}

function Rh(e) {
    return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${zr(t,n)}`)
}

function ce(e) {
    const t = `van-${e}`;
    return [t, Rh(t), $h(t)]
}
const Bn = "van-hairline",
    Mh = `${Bn}--top`,
    Lc = `${Bn}--left`,
    Fh = `${Bn}--right`,
    Lh = `${Bn}--bottom`,
    Vc = `${Bn}--surround`,
    Vh = `${Bn}--top-bottom`,
    Nh = `${Bn}-unset--top-bottom`,
    Pn = "van-haptics-feedback",
    Hh = Symbol("van-form"),
    zh = 500,
    Ra = 5;

function Wo(e, {
    args: t = [],
    done: n,
    canceled: o,
    error: i
}) {
    if (e) {
        const r = e.apply(null, t);
        pl(r) ? r.then(l => {
            l ? n() : o && o()
        }).catch(i || Fr) : r ? n() : o && o()
    } else n()
}

function ge(e) {
    return e.install = t => {
        const {
            name: n
        } = e;
        n && (t.component(n, e), t.component(Mc(`-${n}`), e))
    }, e
}

function Ma(e, t) {
    return e.reduce((n, o) => Math.abs(n - t) < Math.abs(o - t) ? n : o)
}
const Nc = Symbol();

function Ui(e) {
    const t = Ht(Nc, null);
    t && oe(t, n => {
        n && e()
    })
}
const Hc = (e, t) => {
    const n = H(),
        o = () => {
            n.value = We(e).height
        };
    return qe(() => {
        if (Te(o), t)
            for (let i = 1; i <= 3; i++) setTimeout(o, 100 * i)
    }), Ui(() => Te(o)), oe([zt, sn], o), n
};

function jh(e, t) {
    const n = Hc(e, !0);
    return o => d("div", {
        class: t("placeholder"),
        style: {
            height: n.value ? `${n.value}px` : void 0
        }
    }, [o()])
}
const [zc, Fa] = ce("action-bar"), jc = Symbol(zc), Wh = {
    placeholder: Boolean,
    safeAreaInsetBottom: Q
};
var Uh = le({
    name: zc,
    props: Wh,
    setup(e, {
        slots: t
    }) {
        const n = H(),
            o = jh(n, Fa),
            {
                linkChildren: i
            } = zo(jc);
        i();
        const r = () => {
            var l;
            return d("div", {
                ref: n,
                class: [Fa(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(l = t.default) == null ? void 0 : l.call(t)])
        };
        return () => e.placeholder ? o(r) : r()
    }
});
const Kh = ge(Uh);

function Le(e) {
    const t = yt();
    t && ye(t.proxy, e)
}
const Ki = {
    to: [String, Object],
    url: String,
    replace: Boolean
};

function Wc({
    to: e,
    url: t,
    replace: n,
    $router: o
}) {
    e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}

function El() {
    const e = yt().proxy;
    return () => Wc(e)
}
const [Yh, La] = ce("badge"), qh = {
    dot: Boolean,
    max: ne,
    tag: se("div"),
    color: String,
    offset: Array,
    content: ne,
    showZero: Q,
    position: se("top-right")
};
var Gh = le({
    name: Yh,
    props: qh,
    setup(e, {
        slots: t
    }) {
        const n = () => {
                if (t.content) return !0;
                const {
                    content: a,
                    showZero: s
                } = e;
                return Be(a) && a !== "" && (s || a !== 0 && a !== "0")
            },
            o = () => {
                const {
                    dot: a,
                    max: s,
                    content: u
                } = e;
                if (!a && n()) return t.content ? t.content() : Be(s) && Ic(u) && +u > +s ? `${s}+` : u
            },
            i = a => a.startsWith("-") ? a.replace("-", "") : `-${a}`,
            r = W(() => {
                const a = {
                    background: e.color
                };
                if (e.offset) {
                    const [s, u] = e.offset, {
                        position: c
                    } = e, [f, h] = c.split("-");
                    t.default ? (typeof u == "number" ? a[f] = Ce(f === "top" ? u : -u) : a[f] = f === "top" ? Ce(u) : i(u), typeof s == "number" ? a[h] = Ce(h === "left" ? s : -s) : a[h] = h === "left" ? Ce(s) : i(s)) : (a.marginTop = Ce(u), a.marginLeft = Ce(s))
                }
                return a
            }),
            l = () => {
                if (n() || e.dot) return d("div", {
                    class: La([e.position, {
                        dot: e.dot,
                        fixed: !!t.default
                    }]),
                    style: r.value
                }, [o()])
            };
        return () => {
            if (t.default) {
                const {
                    tag: a
                } = e;
                return d(a, {
                    class: La("wrapper")
                }, {
                    default: () => [t.default(), l()]
                })
            }
            return l()
        }
    }
});
const Uc = ge(Gh);
let Kc = 2e3;
const Xh = () => ++Kc,
    Zh = e => {
        Kc = e
    },
    [Yc, Jh] = ce("config-provider"),
    qc = Symbol(Yc),
    Qh = {
        tag: se("div"),
        theme: se("light"),
        zIndex: Number,
        themeVars: Object,
        themeVarsDark: Object,
        themeVarsLight: Object,
        themeVarsScope: se("local"),
        iconPrefix: String
    };

function ev(e) {
    return e.replace(/([a-zA-Z])(\d)/g, "$1-$2")
}

function tv(e) {
    const t = {};
    return Object.keys(e).forEach(n => {
        const o = ev(Oh(n));
        t[`--van-${o}`] = e[n]
    }), t
}

function ti(e = {}, t = {}) {
    Object.keys(e).forEach(n => {
        e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n])
    }), Object.keys(t).forEach(n => {
        e[n] || document.documentElement.style.removeProperty(n)
    })
}
var nv = le({
    name: Yc,
    props: Qh,
    setup(e, {
        slots: t
    }) {
        const n = W(() => tv(ye({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
        if (Pt) {
            const o = () => {
                    document.documentElement.classList.add(`van-theme-${e.theme}`)
                },
                i = (r = e.theme) => {
                    document.documentElement.classList.remove(`van-theme-${r}`)
                };
            oe(() => e.theme, (r, l) => {
                l && i(l), o()
            }, {
                immediate: !0
            }), vn(o), Gt(i), Tt(i), oe(n, (r, l) => {
                e.themeVarsScope === "global" && ti(r, l)
            }), oe(() => e.themeVarsScope, (r, l) => {
                l === "global" && ti({}, n.value), r === "global" && ti(n.value, {})
            }), e.themeVarsScope === "global" && ti(n.value, {})
        }
        return lo(qc, e), Vi(() => {
            e.zIndex !== void 0 && Zh(e.zIndex)
        }), () => d(e.tag, {
            class: Jh(),
            style: e.themeVarsScope === "local" ? n.value : void 0
        }, {
            default: () => {
                var o;
                return [(o = t.default) == null ? void 0 : o.call(t)]
            }
        })
    }
});
const [ov, Va] = ce("icon"), iv = e => e == null ? void 0 : e.includes("/"), rv = {
    dot: Boolean,
    tag: se("i"),
    name: String,
    size: ne,
    badge: ne,
    color: String,
    badgeProps: Object,
    classPrefix: String
};
var lv = le({
    name: ov,
    props: rv,
    setup(e, {
        slots: t
    }) {
        const n = Ht(qc, null),
            o = W(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Va());
        return () => {
            const {
                tag: i,
                dot: r,
                name: l,
                size: a,
                badge: s,
                color: u
            } = e, c = iv(l);
            return d(Uc, $e({
                dot: r,
                tag: i,
                class: [o.value, c ? "" : `${o.value}-${l}`],
                style: {
                    color: u,
                    fontSize: Ce(a)
                },
                content: s
            }, e.badgeProps), {
                default: () => {
                    var f;
                    return [(f = t.default) == null ? void 0 : f.call(t), c && d("img", {
                        class: Va("image"),
                        src: l
                    }, null)]
                }
            })
        }
    }
});
const Me = ge(lv);
var av = Me;
const [sv, ko] = ce("loading"), cv = Array(12).fill(null).map((e, t) => d("i", {
    class: ko("line", String(t + 1))
}, null)), uv = d("svg", {
    class: ko("circular"),
    viewBox: "25 25 50 50"
}, [d("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
}, null)]), fv = {
    size: ne,
    type: se("circular"),
    color: String,
    vertical: Boolean,
    textSize: ne,
    textColor: String
};
var dv = le({
    name: sv,
    props: fv,
    setup(e, {
        slots: t
    }) {
        const n = W(() => ye({
                color: e.color
            }, so(e.size))),
            o = () => {
                const r = e.type === "spinner" ? cv : uv;
                return d("span", {
                    class: ko("spinner", e.type),
                    style: n.value
                }, [t.icon ? t.icon() : r])
            },
            i = () => {
                var r;
                if (t.default) return d("span", {
                    class: ko("text"),
                    style: {
                        fontSize: Ce(e.textSize),
                        color: (r = e.textColor) != null ? r : e.color
                    }
                }, [t.default()])
            };
        return () => {
            const {
                type: r,
                vertical: l
            } = e;
            return d("div", {
                class: ko([r, {
                    vertical: l
                }]),
                "aria-live": "polite",
                "aria-busy": !0
            }, [o(), i()])
        }
    }
});
const Zt = ge(dv),
    [hv, Mn] = ce("button"),
    vv = ye({}, Ki, {
        tag: se("button"),
        text: String,
        icon: String,
        type: se("default"),
        size: se("normal"),
        color: String,
        block: Boolean,
        plain: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        iconPrefix: String,
        nativeType: se("button"),
        loadingSize: ne,
        loadingText: String,
        loadingType: String,
        iconPosition: se("left")
    });
var gv = le({
    name: hv,
    props: vv,
    emits: ["click"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = El(),
            i = () => n.loading ? n.loading() : d(Zt, {
                size: e.loadingSize,
                type: e.loadingType,
                class: Mn("loading")
            }, null),
            r = () => {
                if (e.loading) return i();
                if (n.icon) return d("div", {
                    class: Mn("icon")
                }, [n.icon()]);
                if (e.icon) return d(Me, {
                    name: e.icon,
                    class: Mn("icon"),
                    classPrefix: e.iconPrefix
                }, null)
            },
            l = () => {
                let u;
                if (e.loading ? u = e.loadingText : u = n.default ? n.default() : e.text, u) return d("span", {
                    class: Mn("text")
                }, [u])
            },
            a = () => {
                const {
                    color: u,
                    plain: c
                } = e;
                if (u) {
                    const f = {
                        color: c ? u : "white"
                    };
                    return c || (f.background = u), u.includes("gradient") ? f.border = 0 : f.borderColor = u, f
                }
            },
            s = u => {
                e.loading ? rt(u) : e.disabled || (t("click", u), o())
            };
        return () => {
            const {
                tag: u,
                type: c,
                size: f,
                block: h,
                round: v,
                plain: y,
                square: p,
                loading: m,
                disabled: x,
                hairline: b,
                nativeType: S,
                iconPosition: w
            } = e, E = [Mn([c, f, {
                plain: y,
                block: h,
                round: v,
                square: p,
                loading: m,
                disabled: x,
                hairline: b
            }]), {
                [Vc]: b
            }];
            return d(u, {
                type: S,
                class: E,
                style: a(),
                disabled: x,
                onClick: s
            }, {
                default: () => [d("div", {
                    class: Mn("content")
                }, [w === "left" && r(), l(), w === "right" && r()])]
            })
        }
    }
});
const Ei = ge(gv),
    [mv, bv] = ce("action-bar-button"),
    yv = ye({}, Ki, {
        type: String,
        text: String,
        icon: String,
        color: String,
        loading: Boolean,
        disabled: Boolean
    });
var pv = le({
    name: mv,
    props: yv,
    setup(e, {
        slots: t
    }) {
        const n = El(),
            {
                parent: o,
                index: i
            } = mn(jc),
            r = W(() => {
                if (o) {
                    const a = o.children[i.value - 1];
                    return !(a && "isButton" in a)
                }
            }),
            l = W(() => {
                if (o) {
                    const a = o.children[i.value + 1];
                    return !(a && "isButton" in a)
                }
            });
        return Le({
            isButton: !0
        }), () => {
            const {
                type: a,
                icon: s,
                text: u,
                color: c,
                loading: f,
                disabled: h
            } = e;
            return d(Ei, {
                class: bv([a, {
                    last: l.value,
                    first: r.value
                }]),
                size: "large",
                type: a,
                icon: s,
                color: c,
                loading: f,
                disabled: h,
                onClick: n
            }, {
                default: () => [t.default ? t.default() : u]
            })
        }
    }
});
const Na = ge(pv),
    Ol = {
        show: Boolean,
        zIndex: ne,
        overlay: Q,
        duration: ne,
        teleport: [String, Object],
        lockScroll: Q,
        lazyRender: Q,
        beforeClose: Function,
        overlayStyle: Object,
        overlayClass: He,
        transitionAppear: Boolean,
        closeOnClickOverlay: Q
    },
    wv = Object.keys(Ol);

function xv(e, t) {
    return e > t ? "horizontal" : t > e ? "vertical" : ""
}

function $n() {
    const e = H(0),
        t = H(0),
        n = H(0),
        o = H(0),
        i = H(0),
        r = H(0),
        l = H(""),
        a = H(!0),
        s = () => l.value === "vertical",
        u = () => l.value === "horizontal",
        c = () => {
            n.value = 0, o.value = 0, i.value = 0, r.value = 0, l.value = "", a.value = !0
        };
    return {
        move: v => {
            const y = v.touches[0];
            n.value = (y.clientX < 0 ? 0 : y.clientX) - e.value, o.value = y.clientY - t.value, i.value = Math.abs(n.value), r.value = Math.abs(o.value);
            const p = 10;
            (!l.value || i.value < p && r.value < p) && (l.value = xv(i.value, r.value)), a.value && (i.value > Ra || r.value > Ra) && (a.value = !1)
        },
        start: v => {
            c(), e.value = v.touches[0].clientX, t.value = v.touches[0].clientY
        },
        reset: c,
        startX: e,
        startY: t,
        deltaX: n,
        deltaY: o,
        offsetX: i,
        offsetY: r,
        direction: l,
        isVertical: s,
        isHorizontal: u,
        isTap: a
    }
}
let go = 0;
const Ha = "van-overflow-hidden";

function Sv(e, t) {
    const n = $n(),
        o = "01",
        i = "10",
        r = c => {
            n.move(c);
            const f = n.deltaY.value > 0 ? i : o,
                h = Bc(c.target, e.value),
                {
                    scrollHeight: v,
                    offsetHeight: y,
                    scrollTop: p
                } = h;
            let m = "11";
            p === 0 ? m = y >= v ? "00" : "01" : p + y >= v && (m = "10"), m !== "11" && n.isVertical() && !(parseInt(m, 2) & parseInt(f, 2)) && rt(c, !0)
        },
        l = () => {
            document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", r, {
                passive: !1
            }), go || document.body.classList.add(Ha), go++
        },
        a = () => {
            go && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", r), go--, go || document.body.classList.remove(Ha))
        },
        s = () => t() && l(),
        u = () => t() && a();
    ao(s), Gt(u), Tt(u), oe(t, c => {
        c ? l() : a()
    })
}

function Gc(e) {
    const t = H(!1);
    return oe(e, n => {
        n && (t.value = n)
    }, {
        immediate: !0
    }), n => () => t.value ? n() : null
}
const jr = () => {
        var e;
        const {
            scopeId: t
        } = ((e = yt()) == null ? void 0 : e.vnode) || {};
        return t ? {
            [t]: ""
        } : null
    },
    [Cv, Tv] = ce("overlay"),
    _v = {
        show: Boolean,
        zIndex: ne,
        duration: ne,
        className: He,
        lockScroll: Q,
        lazyRender: Q,
        customStyle: Object,
        teleport: [String, Object]
    };
var Ev = le({
    name: Cv,
    props: _v,
    setup(e, {
        slots: t
    }) {
        const n = H(),
            o = Gc(() => e.show || !e.lazyRender),
            i = l => {
                e.lockScroll && rt(l, !0)
            },
            r = o(() => {
                var l;
                const a = ye(Tl(e.zIndex), e.customStyle);
                return Be(e.duration) && (a.animationDuration = `${e.duration}s`), Wt(d("div", {
                    ref: n,
                    style: a,
                    class: [Tv(), e.className]
                }, [(l = t.default) == null ? void 0 : l.call(t)]), [
                    [cn, e.show]
                ])
            });
        return lt("touchmove", i, {
            target: n
        }), () => {
            const l = d(yl, {
                name: "van-fade",
                appear: !0
            }, {
                default: r
            });
            return e.teleport ? d(Fi, {
                to: e.teleport
            }, {
                default: () => [l]
            }) : l
        }
    }
});
const Ov = ge(Ev),
    kv = ye({}, Ol, {
        round: Boolean,
        position: se("center"),
        closeIcon: se("cross"),
        closeable: Boolean,
        transition: String,
        iconPrefix: String,
        closeOnPopstate: Boolean,
        closeIconPosition: se("top-right"),
        destroyOnClose: Boolean,
        safeAreaInsetTop: Boolean,
        safeAreaInsetBottom: Boolean
    }),
    [Dv, za] = ce("popup");
var Iv = le({
    name: Dv,
    inheritAttrs: !1,
    props: kv,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(e, {
        emit: t,
        attrs: n,
        slots: o
    }) {
        let i, r;
        const l = H(),
            a = H(),
            s = Gc(() => e.show || !e.lazyRender),
            u = W(() => {
                const A = {
                    zIndex: l.value
                };
                if (Be(e.duration)) {
                    const j = e.position === "center" ? "animationDuration" : "transitionDuration";
                    A[j] = `${e.duration}s`
                }
                return A
            }),
            c = () => {
                i || (i = !0, l.value = e.zIndex !== void 0 ? +e.zIndex : Xh(), t("open"))
            },
            f = () => {
                i && Wo(e.beforeClose, {
                    done() {
                        i = !1, t("close"), t("update:show", !1)
                    }
                })
            },
            h = A => {
                t("clickOverlay", A), e.closeOnClickOverlay && f()
            },
            v = () => {
                if (e.overlay) return d(Ov, $e({
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: l.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? "button" : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0
                }, jr(), {
                    onClick: h
                }), {
                    default: o["overlay-content"]
                })
            },
            y = A => {
                t("clickCloseIcon", A), f()
            },
            p = () => {
                if (e.closeable) return d(Me, {
                    role: "button",
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [za("close-icon", e.closeIconPosition), Pn],
                    classPrefix: e.iconPrefix,
                    onClick: y
                }, null)
            };
        let m;
        const x = () => {
                m && clearTimeout(m), m = setTimeout(() => {
                    t("opened")
                })
            },
            b = () => t("closed"),
            S = A => t("keydown", A),
            w = s(() => {
                var A;
                const {
                    destroyOnClose: j,
                    round: P,
                    position: B,
                    safeAreaInsetTop: k,
                    safeAreaInsetBottom: _,
                    show: T
                } = e;
                if (!(!T && j)) return Wt(d("div", $e({
                    ref: a,
                    style: u.value,
                    role: "dialog",
                    tabindex: 0,
                    class: [za({
                        round: P,
                        [B]: B
                    }), {
                        "van-safe-area-top": k,
                        "van-safe-area-bottom": _
                    }],
                    onKeydown: S
                }, n, jr()), [(A = o.default) == null ? void 0 : A.call(o), p()]), [
                    [cn, T]
                ])
            }),
            E = () => {
                const {
                    position: A,
                    transition: j,
                    transitionAppear: P
                } = e, B = A === "center" ? "van-fade" : `van-popup-slide-${A}`;
                return d(yl, {
                    name: j || B,
                    appear: P,
                    onAfterEnter: x,
                    onAfterLeave: b
                }, {
                    default: w
                })
            };
        return oe(() => e.show, A => {
            A && !i && (c(), n.tabindex === 0 && Te(() => {
                var j;
                (j = a.value) == null || j.focus()
            })), !A && i && (i = !1, t("close"))
        }), Le({
            popupRef: a
        }), Sv(a, () => e.show && e.lockScroll), lt("popstate", () => {
            e.closeOnPopstate && (f(), r = !1)
        }), qe(() => {
            e.show && c()
        }), vn(() => {
            r && (t("update:show", !0), r = !1)
        }), Gt(() => {
            e.show && e.teleport && (f(), r = !0)
        }), lo(Nc, () => e.show), () => e.teleport ? d(Fi, {
            to: e.teleport
        }, {
            default: () => [v(), E()]
        }) : d(Ze, null, [v(), E()])
    }
});
const Uo = ge(Iv),
    [Av, Nt, ja] = ce("picker"),
    Xc = e => e.find(t => !t.disabled) || e[0];

function Pv(e, t) {
    const n = e[0];
    if (n) {
        if (Array.isArray(n)) return "multiple";
        if (t.children in n) return "cascade"
    }
    return "default"
}

function fi(e, t) {
    t = it(t, 0, e.length);
    for (let n = t; n < e.length; n++)
        if (!e[n].disabled) return n;
    for (let n = t - 1; n >= 0; n--)
        if (!e[n].disabled) return n;
    return 0
}
const Wa = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);

function Wr(e, t, n) {
    const o = e.findIndex(r => r[n.value] === t),
        i = fi(e, o);
    return e[i]
}

function Bv(e, t, n) {
    const o = [];
    let i = {
            [t.children]: e
        },
        r = 0;
    for (; i && i[t.children];) {
        const l = i[t.children],
            a = n.value[r];
        if (i = Be(a) ? Wr(l, a, t) : void 0, !i && l.length) {
            const s = Xc(l)[t.value];
            i = Wr(l, s, t)
        }
        r++, o.push(l)
    }
    return o
}

function $v(e) {
    const {
        transform: t
    } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
    return Number(n)
}

function Rv(e) {
    return ye({
        text: "text",
        value: "value",
        children: "children"
    }, e)
}
const Ua = 200,
    Ka = 300,
    Mv = 15,
    [Zc, vr] = ce("picker-column"),
    Jc = Symbol(Zc);
var Fv = le({
    name: Zc,
    props: {
        value: ne,
        fields: tt(Object),
        options: fn(),
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: tt(Number),
        swipeDuration: tt(ne),
        visibleOptionNum: tt(ne)
    },
    emits: ["change", "clickOption", "scrollInto"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, i, r, l, a;
        const s = H(),
            u = H(),
            c = H(0),
            f = H(0),
            h = $n(),
            v = () => e.options.length,
            y = () => e.optionHeight * (+e.visibleOptionNum - 1) / 2,
            p = k => {
                let _ = fi(e.options, k);
                const T = -_ * e.optionHeight,
                    $ = () => {
                        _ > v() - 1 && (_ = fi(e.options, k));
                        const ie = e.options[_][e.fields.value];
                        ie !== e.value && t("change", ie)
                    };
                o && T !== c.value ? a = $ : $(), c.value = T
            },
            m = () => e.readonly || !e.options.length,
            x = k => {
                o || m() || (a = null, f.value = Ua, p(k), t("clickOption", e.options[k]))
            },
            b = k => it(Math.round(-k / e.optionHeight), 0, v() - 1),
            S = W(() => b(c.value)),
            w = (k, _) => {
                const T = Math.abs(k / _);
                k = c.value + T / .003 * (k < 0 ? -1 : 1);
                const $ = b(k);
                f.value = +e.swipeDuration, p($)
            },
            E = () => {
                o = !1, f.value = 0, a && (a(), a = null)
            },
            A = k => {
                if (!m()) {
                    if (h.start(k), o) {
                        const _ = $v(u.value);
                        c.value = Math.min(0, _ - y())
                    }
                    f.value = 0, i = c.value, r = Date.now(), l = i, a = null
                }
            },
            j = k => {
                if (m()) return;
                h.move(k), h.isVertical() && (o = !0, rt(k, !0));
                const _ = it(i + h.deltaY.value, -(v() * e.optionHeight), e.optionHeight),
                    T = b(_);
                T !== S.value && t("scrollInto", e.options[T]), c.value = _;
                const $ = Date.now();
                $ - r > Ka && (r = $, l = _)
            },
            P = () => {
                if (m()) return;
                const k = c.value - l,
                    _ = Date.now() - r;
                if (_ < Ka && Math.abs(k) > Mv) {
                    w(k, _);
                    return
                }
                const $ = b(c.value);
                f.value = Ua, p($), setTimeout(() => {
                    o = !1
                }, 0)
            },
            B = () => {
                const k = {
                    height: `${e.optionHeight}px`
                };
                return e.options.map((_, T) => {
                    const $ = _[e.fields.text],
                        {
                            disabled: ie
                        } = _,
                        me = _[e.fields.value],
                        z = {
                            role: "button",
                            style: k,
                            tabindex: ie ? -1 : 0,
                            class: [vr("item", {
                                disabled: ie,
                                selected: me === e.value
                            }), _.className],
                            onClick: () => x(T)
                        },
                        G = {
                            class: "van-ellipsis",
                            [e.allowHtml ? "innerHTML" : "textContent"]: $
                        };
                    return d("li", z, [n.option ? n.option(_, T) : d("div", G, null)])
                })
            };
        return mn(Jc), Le({
            stopMomentum: E
        }), Vi(() => {
            const k = o ? Math.floor(-c.value / e.optionHeight) : e.options.findIndex($ => $[e.fields.value] === e.value),
                _ = fi(e.options, k),
                T = -_ * e.optionHeight;
            o && _ < k && E(), c.value = T
        }), lt("touchmove", j, {
            target: s
        }), () => d("div", {
            ref: s,
            class: vr(),
            onTouchstartPassive: A,
            onTouchend: P,
            onTouchcancel: P
        }, [d("ul", {
            ref: u,
            style: {
                transform: `translate3d(0, ${c.value+y()}px, 0)`,
                transitionDuration: `${f.value}ms`,
                transitionProperty: f.value ? "all" : "none"
            },
            class: vr("wrapper"),
            onTransitionend: E
        }, [B()])])
    }
});
const [Lv] = ce("picker-toolbar"), Yi = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
}, Vv = ["cancel", "confirm", "title", "toolbar"], Nv = Object.keys(Yi);
var Hv = le({
    name: Lv,
    props: Yi,
    emits: ["confirm", "cancel"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => {
                if (n.title) return n.title();
                if (e.title) return d("div", {
                    class: [Nt("title"), "van-ellipsis"]
                }, [e.title])
            },
            i = () => t("cancel"),
            r = () => t("confirm"),
            l = () => {
                var s;
                const u = (s = e.cancelButtonText) != null ? s : ja("cancel");
                if (!(!n.cancel && !u)) return d("button", {
                    type: "button",
                    class: [Nt("cancel"), Pn],
                    onClick: i
                }, [n.cancel ? n.cancel() : u])
            },
            a = () => {
                var s;
                const u = (s = e.confirmButtonText) != null ? s : ja("confirm");
                if (!(!n.confirm && !u)) return d("button", {
                    type: "button",
                    class: [Nt("confirm"), Pn],
                    onClick: r
                }, [n.confirm ? n.confirm() : u])
            };
        return () => d("div", {
            class: Nt("toolbar")
        }, [n.toolbar ? n.toolbar() : [l(), o(), a()]])
    }
});
const zv = (e, t) => {
    const n = H(e());
    return oe(e, o => {
        o !== n.value && (n.value = o)
    }), oe(n, o => {
        o !== e() && t(o)
    }), n
};

function jv(e, t, n) {
    let o, i = 0;
    const r = e.scrollLeft,
        l = n === 0 ? 1 : Math.round(n * 1e3 / 16);
    let a = r;

    function s() {
        xl(o)
    }

    function u() {
        a += (t - r) / l, e.scrollLeft = a, ++i < l && (o = mt(u))
    }
    return u(), s
}

function Wv(e, t, n, o) {
    let i, r = jo(e);
    const l = r < t,
        a = n === 0 ? 1 : Math.round(n * 1e3 / 16),
        s = (t - r) / a;

    function u() {
        xl(i)
    }

    function c() {
        r += s, (l && r > t || !l && r < t) && (r = t), _i(e, r), l && r < t || !l && r > t ? i = mt(c) : i = mt(o)
    }
    return c(), u
}
let Uv = 0;

function qi() {
    const e = yt(),
        {
            name: t = "unknown"
        } = (e == null ? void 0 : e.type) || {};
    return `${t}-${++Uv}`
}

function Qc() {
    const e = H([]),
        t = [];
    return tc(() => {
        e.value = []
    }), [e, o => (t[o] || (t[o] = i => {
        e.value[o] = i
    }), t[o])]
}

function eu(e, t) {
    if (!Pt || !window.IntersectionObserver) return;
    const n = new IntersectionObserver(r => {
            t(r[0].intersectionRatio > 0)
        }, {
            root: document.body
        }),
        o = () => {
            e.value && n.observe(e.value)
        },
        i = () => {
            e.value && n.unobserve(e.value)
        };
    Gt(i), Tt(i), ao(o)
}
const [Kv, Yv] = ce("sticky"), qv = {
    zIndex: ne,
    position: se("top"),
    container: Object,
    offsetTop: xe(0),
    offsetBottom: xe(0)
};
var Gv = le({
    name: Kv,
    props: qv,
    emits: ["scroll", "change"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            i = ji(o),
            r = Ke({
                fixed: !1,
                width: 0,
                height: 0,
                transform: 0
            }),
            l = H(!1),
            a = W(() => _l(e.position === "top" ? e.offsetTop : e.offsetBottom)),
            s = W(() => {
                if (l.value) return;
                const {
                    fixed: h,
                    height: v,
                    width: y
                } = r;
                if (h) return {
                    width: `${y}px`,
                    height: `${v}px`
                }
            }),
            u = W(() => {
                if (!r.fixed || l.value) return;
                const h = ye(Tl(e.zIndex), {
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    [e.position]: `${a.value}px`
                });
                return r.transform && (h.transform = `translate3d(0, ${r.transform}px, 0)`), h
            }),
            c = h => t("scroll", {
                scrollTop: h,
                isFixed: r.fixed
            }),
            f = () => {
                if (!o.value || to(o)) return;
                const {
                    container: h,
                    position: v
                } = e, y = We(o), p = jo(window);
                if (r.width = y.width, r.height = y.height, v === "top")
                    if (h) {
                        const m = We(h),
                            x = m.bottom - a.value - r.height;
                        r.fixed = a.value > y.top && m.bottom > 0, r.transform = x < 0 ? x : 0
                    } else r.fixed = a.value > y.top;
                else {
                    const {
                        clientHeight: m
                    } = document.documentElement;
                    if (h) {
                        const x = We(h),
                            b = m - x.top - a.value - r.height;
                        r.fixed = m - a.value < y.bottom && m > x.top, r.transform = b < 0 ? -b : 0
                    } else r.fixed = m - a.value < y.bottom
                }
                c(p)
            };
        return oe(() => r.fixed, h => t("change", h)), lt("scroll", f, {
            target: i,
            passive: !0
        }), eu(o, f), oe([zt, sn], () => {
            !o.value || to(o) || !r.fixed || (l.value = !0, Te(() => {
                const h = We(o);
                r.width = h.width, r.height = h.height, l.value = !1
            }))
        }), () => {
            var h;
            return d("div", {
                ref: o,
                style: s.value
            }, [d("div", {
                class: Yv({
                    fixed: r.fixed && !l.value
                }),
                style: u.value
            }, [(h = n.default) == null ? void 0 : h.call(n)])])
        }
    }
});
const Xv = ge(Gv),
    [tu, ni] = ce("swipe"),
    Zv = {
        loop: Q,
        width: ne,
        height: ne,
        vertical: Boolean,
        autoplay: xe(0),
        duration: xe(500),
        touchable: Q,
        lazyRender: Boolean,
        initialSwipe: xe(0),
        indicatorColor: String,
        showIndicators: Q,
        stopPropagation: Q
    },
    nu = Symbol(tu);
var Jv = le({
    name: tu,
    props: Zv,
    emits: ["change", "dragStart", "dragEnd"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            i = H(),
            r = Ke({
                rect: null,
                width: 0,
                height: 0,
                offset: 0,
                active: 0,
                swiping: !1
            });
        let l = !1;
        const a = $n(),
            {
                children: s,
                linkChildren: u
            } = zo(nu),
            c = W(() => s.length),
            f = W(() => r[e.vertical ? "height" : "width"]),
            h = W(() => e.vertical ? a.deltaY.value : a.deltaX.value),
            v = W(() => r.rect ? (e.vertical ? r.rect.height : r.rect.width) - f.value * c.value : 0),
            y = W(() => f.value ? Math.ceil(Math.abs(v.value) / f.value) : c.value),
            p = W(() => c.value * f.value),
            m = W(() => (r.active + c.value) % c.value),
            x = W(() => {
                const D = e.vertical ? "vertical" : "horizontal";
                return a.direction.value === D
            }),
            b = W(() => {
                const D = {
                    transitionDuration: `${r.swiping?0:e.duration}ms`,
                    transform: `translate${e.vertical?"Y":"X"}(${+r.offset.toFixed(2)}px)`
                };
                if (f.value) {
                    const L = e.vertical ? "height" : "width",
                        te = e.vertical ? "width" : "height";
                    D[L] = `${p.value}px`, D[te] = e[te] ? `${e[te]}px` : ""
                }
                return D
            }),
            S = D => {
                const {
                    active: L
                } = r;
                return D ? e.loop ? it(L + D, -1, c.value) : it(L + D, 0, y.value) : L
            },
            w = (D, L = 0) => {
                let te = D * f.value;
                e.loop || (te = Math.min(te, -v.value));
                let ae = L - te;
                return e.loop || (ae = it(ae, v.value, 0)), ae
            },
            E = ({
                pace: D = 0,
                offset: L = 0,
                emitChange: te
            }) => {
                if (c.value <= 1) return;
                const {
                    active: ae
                } = r, N = S(D), ee = w(N, L);
                if (e.loop) {
                    if (s[0] && ee !== v.value) {
                        const O = ee < v.value;
                        s[0].setOffset(O ? p.value : 0)
                    }
                    if (s[c.value - 1] && ee !== 0) {
                        const O = ee > 0;
                        s[c.value - 1].setOffset(O ? -p.value : 0)
                    }
                }
                r.active = N, r.offset = ee, te && N !== ae && t("change", m.value)
            },
            A = () => {
                r.swiping = !0, r.active <= -1 ? E({
                    pace: c.value
                }) : r.active >= c.value && E({
                    pace: -c.value
                })
            },
            j = () => {
                A(), a.reset(), Tn(() => {
                    r.swiping = !1, E({
                        pace: -1,
                        emitChange: !0
                    })
                })
            },
            P = () => {
                A(), a.reset(), Tn(() => {
                    r.swiping = !1, E({
                        pace: 1,
                        emitChange: !0
                    })
                })
            };
        let B;
        const k = () => clearTimeout(B),
            _ = () => {
                k(), +e.autoplay > 0 && c.value > 1 && (B = setTimeout(() => {
                    P(), _()
                }, +e.autoplay))
            },
            T = (D = +e.initialSwipe) => {
                if (!o.value) return;
                const L = () => {
                    var te, ae;
                    if (!to(o)) {
                        const N = {
                            width: o.value.offsetWidth,
                            height: o.value.offsetHeight
                        };
                        r.rect = N, r.width = +((te = e.width) != null ? te : N.width), r.height = +((ae = e.height) != null ? ae : N.height)
                    }
                    c.value && (D = Math.min(c.value - 1, D), D === -1 && (D = c.value - 1)), r.active = D, r.swiping = !0, r.offset = w(D), s.forEach(N => {
                        N.setOffset(0)
                    }), _()
                };
                to(o) ? Te().then(L) : L()
            },
            $ = () => T(r.active);
        let ie;
        const me = D => {
                !e.touchable || D.touches.length > 1 || (a.start(D), l = !1, ie = Date.now(), k(), A())
            },
            z = D => {
                e.touchable && r.swiping && (a.move(D), x.value && (!e.loop && (r.active === 0 && h.value > 0 || r.active === c.value - 1 && h.value < 0) || (rt(D, e.stopPropagation), E({
                    offset: h.value
                }), l || (t("dragStart", {
                    index: m.value
                }), l = !0))))
            },
            G = () => {
                if (!e.touchable || !r.swiping) return;
                const D = Date.now() - ie,
                    L = h.value / D;
                if ((Math.abs(L) > .25 || Math.abs(h.value) > f.value / 2) && x.value) {
                    const ae = e.vertical ? a.offsetY.value : a.offsetX.value;
                    let N = 0;
                    e.loop ? N = ae > 0 ? h.value > 0 ? -1 : 1 : 0 : N = -Math[h.value > 0 ? "ceil" : "floor"](h.value / f.value), E({
                        pace: N,
                        emitChange: !0
                    })
                } else h.value && E({
                    pace: 0
                });
                l = !1, r.swiping = !1, t("dragEnd", {
                    index: m.value
                }), _()
            },
            Z = (D, L = {}) => {
                A(), a.reset(), Tn(() => {
                    let te;
                    e.loop && D === c.value ? te = r.active === 0 ? 0 : D : te = D % c.value, L.immediate ? Tn(() => {
                        r.swiping = !1
                    }) : r.swiping = !1, E({
                        pace: te - r.active,
                        emitChange: !0
                    })
                })
            },
            pe = (D, L) => {
                const te = L === m.value,
                    ae = te ? {
                        backgroundColor: e.indicatorColor
                    } : void 0;
                return d("i", {
                    style: ae,
                    class: ni("indicator", {
                        active: te
                    })
                }, null)
            },
            Ae = () => {
                if (n.indicator) return n.indicator({
                    active: m.value,
                    total: c.value
                });
                if (e.showIndicators && c.value > 1) return d("div", {
                    class: ni("indicators", {
                        vertical: e.vertical
                    })
                }, [Array(c.value).fill("").map(pe)])
            };
        return Le({
            prev: j,
            next: P,
            state: r,
            resize: $,
            swipeTo: Z
        }), u({
            size: f,
            props: e,
            count: c,
            activeIndicator: m
        }), oe(() => e.initialSwipe, D => T(+D)), oe(c, () => T(r.active)), oe(() => e.autoplay, _), oe([zt, sn, () => e.width, () => e.height], $), oe(ph(), D => {
            D === "visible" ? _() : k()
        }), qe(T), vn(() => T(r.active)), Ui(() => T(r.active)), Gt(k), Tt(k), lt("touchmove", z, {
            target: i
        }), () => {
            var D;
            return d("div", {
                ref: o,
                class: ni()
            }, [d("div", {
                ref: i,
                style: b.value,
                class: ni("track", {
                    vertical: e.vertical
                }),
                onTouchstartPassive: me,
                onTouchend: G,
                onTouchcancel: G
            }, [(D = n.default) == null ? void 0 : D.call(n)]), Ae()])
        }
    }
});
const ou = ge(Jv),
    [Qv, Ya] = ce("tabs");
var eg = le({
    name: Qv,
    props: {
        count: tt(Number),
        inited: Boolean,
        animated: Boolean,
        duration: tt(ne),
        swipeable: Boolean,
        lazyRender: Boolean,
        currentIndex: tt(Number)
    },
    emits: ["change"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            i = a => t("change", a),
            r = () => {
                var a;
                const s = (a = n.default) == null ? void 0 : a.call(n);
                return e.animated || e.swipeable ? d(ou, {
                    ref: o,
                    loop: !1,
                    class: Ya("track"),
                    duration: +e.duration * 1e3,
                    touchable: e.swipeable,
                    lazyRender: e.lazyRender,
                    showIndicators: !1,
                    onChange: i
                }, {
                    default: () => [s]
                }) : s
            },
            l = a => {
                const s = o.value;
                s && s.state.active !== a && s.swipeTo(a, {
                    immediate: !e.inited
                })
            };
        return oe(() => e.currentIndex, l), qe(() => {
            l(e.currentIndex)
        }), Le({
            swipeRef: o
        }), () => d("div", {
            class: Ya("content", {
                animated: e.animated || e.swipeable
            })
        }, [r()])
    }
});
const [iu, oi] = ce("tabs"), tg = {
    type: se("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: xe(0),
    duration: xe(.3),
    animated: Boolean,
    ellipsis: Q,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: xe(0),
    background: String,
    lazyRender: Q,
    showHeader: Q,
    lineWidth: ne,
    lineHeight: ne,
    beforeChange: Function,
    swipeThreshold: xe(5),
    titleActiveColor: String,
    titleInactiveColor: String
}, ru = Symbol(iu);
var ng = le({
    name: iu,
    props: tg,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, i, r, l, a;
        const s = H(),
            u = H(),
            c = H(),
            f = H(),
            h = qi(),
            v = ji(s),
            [y, p] = Qc(),
            {
                children: m,
                linkChildren: x
            } = zo(ru),
            b = Ke({
                inited: !1,
                position: "",
                lineStyle: {},
                currentIndex: -1
            }),
            S = W(() => m.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
            w = W(() => ({
                borderColor: e.color,
                background: e.background
            })),
            E = (N, ee) => {
                var O;
                return (O = N.name) != null ? O : ee
            },
            A = W(() => {
                const N = m[b.currentIndex];
                if (N) return E(N, b.currentIndex)
            }),
            j = W(() => _l(e.offsetTop)),
            P = W(() => e.sticky ? j.value + o : 0),
            B = N => {
                const ee = u.value,
                    O = y.value;
                if (!S.value || !ee || !O || !O[b.currentIndex]) return;
                const Y = O[b.currentIndex].$el,
                    J = Y.offsetLeft - (ee.offsetWidth - Y.offsetWidth) / 2;
                l && l(), l = jv(ee, J, N ? 0 : +e.duration)
            },
            k = () => {
                const N = b.inited;
                Te(() => {
                    const ee = y.value;
                    if (!ee || !ee[b.currentIndex] || e.type !== "line" || to(s.value)) return;
                    const O = ee[b.currentIndex].$el,
                        {
                            lineWidth: Y,
                            lineHeight: J
                        } = e,
                        ve = O.offsetLeft + O.offsetWidth / 2,
                        Pe = {
                            width: Ce(Y),
                            backgroundColor: e.color,
                            transform: `translateX(${ve}px) translateX(-50%)`
                        };
                    if (N && (Pe.transitionDuration = `${e.duration}s`), Be(J)) {
                        const g = Ce(J);
                        Pe.height = g, Pe.borderRadius = g
                    }
                    b.lineStyle = Pe
                })
            },
            _ = N => {
                const ee = N < b.currentIndex ? -1 : 1;
                for (; N >= 0 && N < m.length;) {
                    if (!m[N].disabled) return N;
                    N += ee
                }
            },
            T = (N, ee) => {
                const O = _(N);
                if (!Be(O)) return;
                const Y = m[O],
                    J = E(Y, O),
                    ve = b.currentIndex !== null;
                b.currentIndex !== O && (b.currentIndex = O, ee || B(), k()), J !== e.active && (t("update:active", J), ve && t("change", J, Y.title)), r && !e.scrollspy && Cl(Math.ceil(Aa(s.value) - j.value))
            },
            $ = (N, ee) => {
                const O = m.find((J, ve) => E(J, ve) === N),
                    Y = O ? m.indexOf(O) : 0;
                T(Y, ee)
            },
            ie = (N = !1) => {
                if (e.scrollspy) {
                    const ee = m[b.currentIndex].$el;
                    if (ee && v.value) {
                        const O = Aa(ee, v.value) - P.value;
                        i = !0, a && a(), a = Wv(v.value, O, N ? 0 : +e.duration, () => {
                            i = !1
                        })
                    }
                }
            },
            me = (N, ee, O) => {
                const {
                    title: Y,
                    disabled: J
                } = m[ee], ve = E(m[ee], ee);
                J || (Wo(e.beforeChange, {
                    args: [ve],
                    done: () => {
                        T(ee), ie()
                    }
                }), Wc(N)), t("clickTab", {
                    name: ve,
                    title: Y,
                    event: O,
                    disabled: J
                })
            },
            z = N => {
                r = N.isFixed, t("scroll", N)
            },
            G = N => {
                Te(() => {
                    $(N), ie(!0)
                })
            },
            Z = () => {
                for (let N = 0; N < m.length; N++) {
                    const {
                        top: ee
                    } = We(m[N].$el);
                    if (ee > P.value) return N === 0 ? 0 : N - 1
                }
                return m.length - 1
            },
            pe = () => {
                if (e.scrollspy && !i) {
                    const N = Z();
                    T(N)
                }
            },
            Ae = () => {
                if (e.type === "line" && m.length) return d("div", {
                    class: oi("line"),
                    style: b.lineStyle
                }, null)
            },
            D = () => {
                var N, ee, O;
                const {
                    type: Y,
                    border: J,
                    sticky: ve
                } = e, Pe = [d("div", {
                    ref: ve ? void 0 : c,
                    class: [oi("wrap"), {
                        [Vh]: Y === "line" && J
                    }]
                }, [d("div", {
                    ref: u,
                    role: "tablist",
                    class: oi("nav", [Y, {
                        shrink: e.shrink,
                        complete: S.value
                    }]),
                    style: w.value,
                    "aria-orientation": "horizontal"
                }, [(N = n["nav-left"]) == null ? void 0 : N.call(n), m.map(g => g.renderTitle(me)), Ae(), (ee = n["nav-right"]) == null ? void 0 : ee.call(n)])]), (O = n["nav-bottom"]) == null ? void 0 : O.call(n)];
                return ve ? d("div", {
                    ref: c
                }, [Pe]) : Pe
            },
            L = () => {
                k(), Te(() => {
                    var N, ee;
                    B(!0), (ee = (N = f.value) == null ? void 0 : N.swipeRef.value) == null || ee.resize()
                })
            };
        oe(() => [e.color, e.duration, e.lineWidth, e.lineHeight], k), oe(zt, L), oe(() => e.active, N => {
            N !== A.value && $(N)
        }), oe(() => m.length, () => {
            b.inited && ($(e.active), k(), Te(() => {
                B(!0)
            }))
        });
        const te = () => {
                $(e.active, !0), Te(() => {
                    b.inited = !0, c.value && (o = We(c.value).height), B(!0)
                })
            },
            ae = (N, ee) => t("rendered", N, ee);
        return Le({
            resize: L,
            scrollTo: G
        }), vn(k), Ui(k), ao(te), eu(s, k), lt("scroll", pe, {
            target: v,
            passive: !0
        }), x({
            id: h,
            props: e,
            setLine: k,
            scrollable: S,
            onRendered: ae,
            currentName: A,
            setTitleRefs: p,
            scrollIntoView: B
        }), () => d("div", {
            ref: s,
            class: oi([e.type])
        }, [e.showHeader ? e.sticky ? d(Xv, {
            container: s.value,
            offsetTop: j.value,
            onScroll: z
        }, {
            default: () => [D()]
        }) : D() : null, d(eg, {
            ref: f,
            count: m.length,
            inited: b.inited,
            animated: e.animated,
            duration: e.duration,
            swipeable: e.swipeable,
            lazyRender: e.lazyRender,
            currentIndex: b.currentIndex,
            onChange: T
        }, {
            default: () => {
                var N;
                return [(N = n.default) == null ? void 0 : N.call(n)]
            }
        })])
    }
});
const lu = Symbol(),
    og = () => Ht(lu, null),
    [ig, qa] = ce("tab"),
    rg = le({
        name: ig,
        props: {
            id: String,
            dot: Boolean,
            type: String,
            color: String,
            title: String,
            badge: ne,
            shrink: Boolean,
            isActive: Boolean,
            disabled: Boolean,
            controls: String,
            scrollable: Boolean,
            activeColor: String,
            inactiveColor: String,
            showZeroBadge: Q
        },
        setup(e, {
            slots: t
        }) {
            const n = W(() => {
                    const i = {},
                        {
                            type: r,
                            color: l,
                            disabled: a,
                            isActive: s,
                            activeColor: u,
                            inactiveColor: c
                        } = e;
                    l && r === "card" && (i.borderColor = l, a || (s ? i.backgroundColor = l : i.color = l));
                    const h = s ? u : c;
                    return h && (i.color = h), i
                }),
                o = () => {
                    const i = d("span", {
                        class: qa("text", {
                            ellipsis: !e.scrollable
                        })
                    }, [t.title ? t.title() : e.title]);
                    return e.dot || Be(e.badge) && e.badge !== "" ? d(Uc, {
                        dot: e.dot,
                        content: e.badge,
                        showZero: e.showZeroBadge
                    }, {
                        default: () => [i]
                    }) : i
                };
            return () => d("div", {
                id: e.id,
                role: "tab",
                class: [qa([e.type, {
                    grow: e.scrollable && !e.shrink,
                    shrink: e.shrink,
                    active: e.isActive,
                    disabled: e.disabled
                }])],
                style: n.value,
                tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
                "aria-selected": e.isActive,
                "aria-disabled": e.disabled || void 0,
                "aria-controls": e.controls,
                "data-allow-mismatch": "attribute"
            }, [o()])
        }
    }),
    [lg, ag] = ce("swipe-item");
var sg = le({
    name: lg,
    setup(e, {
        slots: t
    }) {
        let n;
        const o = Ke({
                offset: 0,
                inited: !1,
                mounted: !1
            }),
            {
                parent: i,
                index: r
            } = mn(nu);
        if (!i) return;
        const l = W(() => {
                const u = {},
                    {
                        vertical: c
                    } = i.props;
                return i.size.value && (u[c ? "height" : "width"] = `${i.size.value}px`), o.offset && (u.transform = `translate${c?"Y":"X"}(${o.offset}px)`), u
            }),
            a = W(() => {
                const {
                    loop: u,
                    lazyRender: c
                } = i.props;
                if (!c || n) return !0;
                if (!o.mounted) return !1;
                const f = i.activeIndicator.value,
                    h = i.count.value - 1,
                    v = f === 0 && u ? h : f - 1,
                    y = f === h && u ? 0 : f + 1;
                return n = r.value === f || r.value === v || r.value === y, n
            }),
            s = u => {
                o.offset = u
            };
        return qe(() => {
            Te(() => {
                o.mounted = !0
            })
        }), Le({
            setOffset: s
        }), () => {
            var u;
            return d("div", {
                class: ag(),
                style: l.value
            }, [a.value ? (u = t.default) == null ? void 0 : u.call(t) : null])
        }
    }
});
const au = ge(sg),
    [cg, gr] = ce("tab"),
    ug = ye({}, Ki, {
        dot: Boolean,
        name: ne,
        badge: ne,
        title: String,
        disabled: Boolean,
        titleClass: He,
        titleStyle: [String, Object],
        showZeroBadge: Q
    });
var fg = le({
    name: cg,
    props: ug,
    setup(e, {
        slots: t
    }) {
        const n = qi(),
            o = H(!1),
            i = yt(),
            {
                parent: r,
                index: l
            } = mn(ru);
        if (!r) return;
        const a = () => {
                var y;
                return (y = e.name) != null ? y : l.value
            },
            s = () => {
                o.value = !0, r.props.lazyRender && Te(() => {
                    r.onRendered(a(), e.title)
                })
            },
            u = W(() => {
                const y = a() === r.currentName.value;
                return y && !o.value && s(), y
            }),
            c = H(""),
            f = H("");
        Vi(() => {
            const {
                titleClass: y,
                titleStyle: p
            } = e;
            c.value = y ? Ri(y) : "", f.value = p && typeof p != "string" ? Hu($i(p)) : p
        });
        const h = y => d(rg, $e({
                key: n,
                id: `${r.id}-${l.value}`,
                ref: r.setTitleRefs(l.value),
                style: f.value,
                class: c.value,
                isActive: u.value,
                controls: n,
                scrollable: r.scrollable.value,
                activeColor: r.props.titleActiveColor,
                inactiveColor: r.props.titleInactiveColor,
                onClick: p => y(i.proxy, l.value, p)
            }, Fe(r.props, ["type", "color", "shrink"]), Fe(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
                title: t.title
            }),
            v = H(!u.value);
        return oe(u, y => {
            y ? v.value = !1 : Tn(() => {
                v.value = !0
            })
        }), oe(() => e.title, () => {
            r.setLine(), r.scrollIntoView()
        }), lo(lu, u), Le({
            id: n,
            renderTitle: h
        }), () => {
            var y;
            const p = `${r.id}-${l.value}`,
                {
                    animated: m,
                    swipeable: x,
                    scrollspy: b,
                    lazyRender: S
                } = r.props;
            if (!t.default && !m) return;
            const w = b || u.value;
            if (m || x) return d(au, {
                id: n,
                role: "tabpanel",
                class: gr("panel-wrapper", {
                    inactive: v.value
                }),
                tabindex: u.value ? 0 : -1,
                "aria-hidden": !u.value,
                "aria-labelledby": p,
                "data-allow-mismatch": "attribute"
            }, {
                default: () => {
                    var j;
                    return [d("div", {
                        class: gr("panel")
                    }, [(j = t.default) == null ? void 0 : j.call(t)])]
                }
            });
            const A = o.value || b || !S ? (y = t.default) == null ? void 0 : y.call(t) : null;
            return Wt(d("div", {
                id: n,
                role: "tabpanel",
                class: gr("panel"),
                tabindex: w ? 0 : -1,
                "aria-labelledby": p,
                "data-allow-mismatch": "attribute"
            }, [A]), [
                [cn, w]
            ])
        }
    }
});
const op = ge(fg),
    ip = ge(ng),
    [dg, rp] = ce("picker-group"),
    hg = Symbol(dg);
ye({
    tabs: fn(),
    activeTab: xe(0),
    nextStepText: String,
    showToolbar: Q
}, Yi);
const su = ye({
        loading: Boolean,
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: xe(44),
        showToolbar: Q,
        swipeDuration: xe(1e3),
        visibleOptionNum: xe(6)
    }, Yi),
    vg = ye({}, su, {
        columns: fn(),
        modelValue: fn(),
        toolbarPosition: se("top"),
        columnsFieldNames: Object
    });
var gg = le({
    name: Av,
    props: vg,
    emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            i = H(e.modelValue.slice(0)),
            {
                parent: r
            } = mn(hg),
            {
                children: l,
                linkChildren: a
            } = zo(Jc);
        a();
        const s = W(() => Rv(e.columnsFieldNames)),
            u = W(() => _l(e.optionHeight)),
            c = W(() => Pv(e.columns, s.value)),
            f = W(() => {
                const {
                    columns: _
                } = e;
                switch (c.value) {
                    case "multiple":
                        return _;
                    case "cascade":
                        return Bv(_, s.value, i);
                    default:
                        return [_]
                }
            }),
            h = W(() => f.value.some(_ => _.length)),
            v = W(() => f.value.map((_, T) => Wr(_, i.value[T], s.value))),
            y = W(() => f.value.map((_, T) => _.findIndex($ => $[s.value.value] === i.value[T]))),
            p = (_, T) => {
                if (i.value[_] !== T) {
                    const $ = i.value.slice(0);
                    $[_] = T, i.value = $
                }
            },
            m = () => ({
                selectedValues: i.value.slice(0),
                selectedOptions: v.value,
                selectedIndexes: y.value
            }),
            x = (_, T) => {
                p(T, _), c.value === "cascade" && i.value.forEach(($, ie) => {
                    const me = f.value[ie];
                    Wa(me, $, s.value) || p(ie, me.length ? me[0][s.value.value] : void 0)
                }), Te(() => {
                    t("change", ye({
                        columnIndex: T
                    }, m()))
                })
            },
            b = (_, T) => {
                const $ = {
                    columnIndex: T,
                    currentOption: _
                };
                t("clickOption", ye(m(), $)), t("scrollInto", $)
            },
            S = () => {
                l.forEach(T => T.stopMomentum());
                const _ = m();
                return Te(() => {
                    t("confirm", _)
                }), _
            },
            w = () => t("cancel", m()),
            E = () => f.value.map((_, T) => d(Fv, {
                value: i.value[T],
                fields: s.value,
                options: _,
                readonly: e.readonly,
                allowHtml: e.allowHtml,
                optionHeight: u.value,
                swipeDuration: e.swipeDuration,
                visibleOptionNum: e.visibleOptionNum,
                onChange: $ => x($, T),
                onClickOption: $ => b($, T),
                onScrollInto: $ => {
                    t("scrollInto", {
                        currentOption: $,
                        columnIndex: T
                    })
                }
            }, {
                option: n.option
            })),
            A = _ => {
                if (h.value) {
                    const T = {
                            height: `${u.value}px`
                        },
                        $ = {
                            backgroundSize: `100% ${(_-u.value)/2}px`
                        };
                    return [d("div", {
                        class: Nt("mask"),
                        style: $
                    }, null), d("div", {
                        class: [Nh, Nt("frame")],
                        style: T
                    }, null)]
                }
            },
            j = () => {
                const _ = u.value * +e.visibleOptionNum,
                    T = {
                        height: `${_}px`
                    };
                return !e.loading && !h.value && n.empty ? n.empty() : d("div", {
                    ref: o,
                    class: Nt("columns"),
                    style: T
                }, [E(), A(_)])
            },
            P = () => {
                if (e.showToolbar && !r) return d(Hv, $e(Fe(e, Nv), {
                    onConfirm: S,
                    onCancel: w
                }), Fe(n, Vv))
            };
        oe(f, _ => {
            _.forEach((T, $) => {
                T.length && !Wa(T, i.value[$], s.value) && p($, Xc(T)[s.value.value])
            })
        }, {
            immediate: !0
        });
        let B;
        return oe(() => e.modelValue, _ => {
            !fr(_, i.value) && !fr(_, B) && (i.value = _.slice(0), B = _.slice(0))
        }, {
            deep: !0
        }), oe(i, _ => {
            fr(_, e.modelValue) || (B = _.slice(0), t("update:modelValue", B))
        }, {
            immediate: !0
        }), lt("touchmove", rt, {
            target: o
        }), Le({
            confirm: S,
            getSelectedOptions: () => v.value
        }), () => {
            var _, T;
            return d("div", {
                class: Nt()
            }, [e.toolbarPosition === "top" ? P() : null, e.loading ? d(Zt, {
                class: Nt("loading")
            }, null) : null, (_ = n["columns-top"]) == null ? void 0 : _.call(n), j(), (T = n["columns-bottom"]) == null ? void 0 : T.call(n), e.toolbarPosition === "bottom" ? P() : null])
        }
    }
});
const lp = ge(gg),
    [mg, Fn] = ce("cell"),
    cu = {
        tag: se("div"),
        icon: String,
        size: String,
        title: ne,
        value: ne,
        label: ne,
        center: Boolean,
        isLink: Boolean,
        border: Q,
        iconPrefix: String,
        valueClass: He,
        labelClass: He,
        titleClass: He,
        titleStyle: null,
        arrowDirection: String,
        required: {
            type: [Boolean, String],
            default: null
        },
        clickable: {
            type: Boolean,
            default: null
        }
    },
    bg = ye({}, cu, Ki);
var yg = le({
    name: mg,
    props: bg,
    setup(e, {
        slots: t
    }) {
        const n = El(),
            o = () => {
                if (t.label || Be(e.label)) return d("div", {
                    class: [Fn("label"), e.labelClass]
                }, [t.label ? t.label() : e.label])
            },
            i = () => {
                var s;
                if (t.title || Be(e.title)) {
                    const u = (s = t.title) == null ? void 0 : s.call(t);
                    return Array.isArray(u) && u.length === 0 ? void 0 : d("div", {
                        class: [Fn("title"), e.titleClass],
                        style: e.titleStyle
                    }, [u || d("span", null, [e.title]), o()])
                }
            },
            r = () => {
                const s = t.value || t.default;
                if (s || Be(e.value)) return d("div", {
                    class: [Fn("value"), e.valueClass]
                }, [s ? s() : d("span", null, [e.value])])
            },
            l = () => {
                if (t.icon) return t.icon();
                if (e.icon) return d(Me, {
                    name: e.icon,
                    class: Fn("left-icon"),
                    classPrefix: e.iconPrefix
                }, null)
            },
            a = () => {
                if (t["right-icon"]) return t["right-icon"]();
                if (e.isLink) {
                    const s = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
                    return d(Me, {
                        name: s,
                        class: Fn("right-icon")
                    }, null)
                }
            };
        return () => {
            var s;
            const {
                tag: u,
                size: c,
                center: f,
                border: h,
                isLink: v,
                required: y
            } = e, p = (s = e.clickable) != null ? s : v, m = {
                center: f,
                required: !!y,
                clickable: p,
                borderless: !h
            };
            return c && (m[c] = !!c), d(u, {
                class: Fn(m),
                role: p ? "button" : void 0,
                tabindex: p ? 0 : void 0,
                onClick: n
            }, {
                default: () => {
                    var x;
                    return [l(), i(), r(), a(), (x = t.extra) == null ? void 0 : x.call(t)]
                }
            })
        }
    }
});
const pg = ge(yg);

function uu(e) {
    return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}

function wg(e, t) {
    if (uu(e)) {
        if (t.required) return !1;
        if (t.validateEmpty === !1) return !0
    }
    return !(t.pattern && !t.pattern.test(String(e)))
}

function xg(e, t) {
    return new Promise(n => {
        const o = t.validator(e, t);
        if (pl(o)) {
            o.then(n);
            return
        }
        n(o)
    })
}

function Ga(e, t) {
    const {
        message: n
    } = t;
    return eo(n) ? n(e, t) : n || ""
}

function Sg({
    target: e
}) {
    e.composing = !0
}

function Xa({
    target: e
}) {
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}

function Cg(e, t) {
    const n = Sl();
    e.style.height = "auto";
    let o = e.scrollHeight;
    if (Ho(t)) {
        const {
            maxHeight: i,
            minHeight: r
        } = t;
        i !== void 0 && (o = Math.min(o, i)), r !== void 0 && (o = Math.max(o, r))
    }
    o && (e.style.height = `${o}px`, Cl(n))
}

function Tg(e, t) {
    return e === "number" && (e = "text", t ? ? (t = "decimal")), e === "digit" && (e = "tel", t ? ? (t = "numeric")), {
        type: e,
        inputmode: t
    }
}

function Rt(e) {
    return [...e].length
}

function mr(e, t) {
    return [...e].slice(0, t).join("")
}
const [_g, dt] = ce("field"), Eg = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: ne,
    max: Number,
    min: Number,
    formatter: Function,
    clearIcon: se("clear"),
    modelValue: xe(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: se("focus"),
    formatTrigger: se("onChange"),
    spellcheck: {
        type: Boolean,
        default: null
    },
    error: {
        type: Boolean,
        default: null
    },
    disabled: {
        type: Boolean,
        default: null
    },
    readonly: {
        type: Boolean,
        default: null
    },
    inputmode: String
}, Og = ye({}, cu, Eg, {
    rows: ne,
    type: se("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: ne,
    labelClass: He,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
        type: Boolean,
        default: null
    }
});
var kg = le({
    name: _g,
    props: Og,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = qi(),
            i = Ke({
                status: "unvalidated",
                focused: !1,
                validateMessage: ""
            }),
            r = H(),
            l = H(),
            a = H(),
            {
                parent: s
            } = mn(Hh),
            u = () => {
                var O;
                return String((O = e.modelValue) != null ? O : "")
            },
            c = O => {
                if (Be(e[O])) return e[O];
                if (s && Be(s.props[O])) return s.props[O]
            },
            f = W(() => {
                const O = c("readonly");
                if (e.clearable && !O) {
                    const Y = u() !== "",
                        J = e.clearTrigger === "always" || e.clearTrigger === "focus" && i.focused;
                    return Y && J
                }
                return !1
            }),
            h = W(() => a.value && n.input ? a.value() : e.modelValue),
            v = W(() => {
                var O;
                const Y = c("required");
                return Y === "auto" ? (O = e.rules) == null ? void 0 : O.some(J => J.required) : Y
            }),
            y = O => O.reduce((Y, J) => Y.then(() => {
                if (i.status === "failed") return;
                let {
                    value: ve
                } = h;
                if (J.formatter && (ve = J.formatter(ve, J)), !wg(ve, J)) {
                    i.status = "failed", i.validateMessage = Ga(ve, J);
                    return
                }
                if (J.validator) return uu(ve) && J.validateEmpty === !1 ? void 0 : xg(ve, J).then(Pe => {
                    Pe && typeof Pe == "string" ? (i.status = "failed", i.validateMessage = Pe) : Pe === !1 && (i.status = "failed", i.validateMessage = Ga(ve, J))
                })
            }), Promise.resolve()),
            p = () => {
                i.status = "unvalidated", i.validateMessage = ""
            },
            m = () => t("endValidate", {
                status: i.status,
                message: i.validateMessage
            }),
            x = (O = e.rules) => new Promise(Y => {
                p(), O ? (t("startValidate"), y(O).then(() => {
                    i.status === "failed" ? (Y({
                        name: e.name,
                        message: i.validateMessage
                    }), m()) : (i.status = "passed", Y(), m())
                })) : Y()
            }),
            b = O => {
                if (s && e.rules) {
                    const {
                        validateTrigger: Y
                    } = s.props, J = Ti(Y).includes(O), ve = e.rules.filter(Pe => Pe.trigger ? Ti(Pe.trigger).includes(O) : J);
                    ve.length && x(ve)
                }
            },
            S = O => {
                var Y;
                const {
                    maxlength: J
                } = e;
                if (Be(J) && Rt(O) > +J) {
                    const ve = u();
                    if (ve && Rt(ve) === +J) return ve;
                    const Pe = (Y = r.value) == null ? void 0 : Y.selectionEnd;
                    if (i.focused && Pe) {
                        const g = [...O],
                            C = g.length - +J;
                        return g.splice(Pe - C, C), g.join("")
                    }
                    return mr(O, +J)
                }
                return O
            },
            w = (O, Y = "onChange") => {
                var J, ve;
                const Pe = O;
                O = S(O);
                const g = Rt(Pe) - Rt(O);
                if (e.type === "number" || e.type === "digit") {
                    const I = e.type === "number";
                    O = kh(O, I, I), Y === "onBlur" && O !== "" && (e.min !== void 0 || e.max !== void 0) && (O = it(+O, (J = e.min) != null ? J : -1 / 0, (ve = e.max) != null ? ve : 1 / 0).toString())
                }
                let C = 0;
                if (e.formatter && Y === e.formatTrigger) {
                    const {
                        formatter: I,
                        maxlength: M
                    } = e;
                    if (O = I(O), Be(M) && Rt(O) > +M && (O = mr(O, +M)), r.value && i.focused) {
                        const {
                            selectionEnd: R
                        } = r.value, F = mr(Pe, R);
                        C = Rt(I(F)) - Rt(F)
                    }
                }
                if (r.value && r.value.value !== O)
                    if (i.focused) {
                        let {
                            selectionStart: I,
                            selectionEnd: M
                        } = r.value;
                        if (r.value.value = O, Be(I) && Be(M)) {
                            const R = Rt(O);
                            g ? (I -= g, M -= g) : C && (I += C, M += C), r.value.setSelectionRange(Math.min(I, R), Math.min(M, R))
                        }
                    } else r.value.value = O;
                O !== e.modelValue && t("update:modelValue", O)
            },
            E = O => {
                O.target.composing || w(O.target.value)
            },
            A = () => {
                var O;
                return (O = r.value) == null ? void 0 : O.blur()
            },
            j = () => {
                var O;
                return (O = r.value) == null ? void 0 : O.focus()
            },
            P = () => {
                const O = r.value;
                e.type === "textarea" && e.autosize && O && Cg(O, e.autosize)
            },
            B = O => {
                i.focused = !0, t("focus", O), Te(P), c("readonly") && A()
            },
            k = O => {
                i.focused = !1, w(u(), "onBlur"), t("blur", O), !c("readonly") && (b("onBlur"), Te(P), xh())
            },
            _ = O => t("clickInput", O),
            T = O => t("clickLeftIcon", O),
            $ = O => t("clickRightIcon", O),
            ie = O => {
                rt(O), t("update:modelValue", ""), t("clear", O)
            },
            me = W(() => {
                if (typeof e.error == "boolean") return e.error;
                if (s && s.props.showError && i.status === "failed") return !0
            }),
            z = W(() => {
                const O = c("labelWidth"),
                    Y = c("labelAlign");
                if (O && Y !== "top") return {
                    width: Ce(O)
                }
            }),
            G = O => {
                O.keyCode === 13 && (!(s && s.props.submitOnEnter) && e.type !== "textarea" && rt(O), e.type === "search" && A()), t("keypress", O)
            },
            Z = () => e.id || `${o}-input`,
            pe = () => i.status,
            Ae = () => {
                const O = dt("control", [c("inputAlign"), {
                    error: me.value,
                    custom: !!n.input,
                    "min-height": e.type === "textarea" && !e.autosize
                }]);
                if (n.input) return d("div", {
                    class: O,
                    onClick: _
                }, [n.input()]);
                const Y = {
                    id: Z(),
                    ref: r,
                    name: e.name,
                    rows: e.rows !== void 0 ? +e.rows : void 0,
                    class: O,
                    disabled: c("disabled"),
                    readonly: c("readonly"),
                    autofocus: e.autofocus,
                    placeholder: e.placeholder,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    enterkeyhint: e.enterkeyhint,
                    spellcheck: e.spellcheck,
                    "aria-labelledby": e.label ? `${o}-label` : void 0,
                    "data-allow-mismatch": "attribute",
                    onBlur: k,
                    onFocus: B,
                    onInput: E,
                    onClick: _,
                    onChange: Xa,
                    onKeypress: G,
                    onCompositionend: Xa,
                    onCompositionstart: Sg
                };
                return e.type === "textarea" ? d("textarea", $e(Y, {
                    inputmode: e.inputmode
                }), null) : d("input", $e(Tg(e.type, e.inputmode), Y), null)
            },
            D = () => {
                const O = n["left-icon"];
                if (e.leftIcon || O) return d("div", {
                    class: dt("left-icon"),
                    onClick: T
                }, [O ? O() : d(Me, {
                    name: e.leftIcon,
                    classPrefix: e.iconPrefix
                }, null)])
            },
            L = () => {
                const O = n["right-icon"];
                if (e.rightIcon || O) return d("div", {
                    class: dt("right-icon"),
                    onClick: $
                }, [O ? O() : d(Me, {
                    name: e.rightIcon,
                    classPrefix: e.iconPrefix
                }, null)])
            },
            te = () => {
                if (e.showWordLimit && e.maxlength) {
                    const O = Rt(u());
                    return d("div", {
                        class: dt("word-limit")
                    }, [d("span", {
                        class: dt("word-num")
                    }, [O]), Sc("/"), e.maxlength])
                }
            },
            ae = () => {
                if (s && s.props.showErrorMessage === !1) return;
                const O = e.errorMessage || i.validateMessage;
                if (O) {
                    const Y = n["error-message"],
                        J = c("errorMessageAlign");
                    return d("div", {
                        class: dt("error-message", J)
                    }, [Y ? Y({
                        message: O
                    }) : O])
                }
            },
            N = () => {
                const O = c("labelWidth"),
                    Y = c("labelAlign"),
                    J = c("colon") ? ":" : "";
                if (n.label) return [n.label(), J];
                if (e.label) return d("label", {
                    id: `${o}-label`,
                    for: n.input ? void 0 : Z(),
                    "data-allow-mismatch": "attribute",
                    onClick: ve => {
                        rt(ve), j()
                    },
                    style: Y === "top" && O ? {
                        width: Ce(O)
                    } : void 0
                }, [e.label + J])
            },
            ee = () => [d("div", {
                class: dt("body")
            }, [Ae(), f.value && d(Me, {
                ref: l,
                name: e.clearIcon,
                class: dt("clear")
            }, null), L(), n.button && d("div", {
                class: dt("button")
            }, [n.button()])]), te(), ae()];
        return Le({
            blur: A,
            focus: j,
            validate: x,
            formValue: h,
            resetValidation: p,
            getValidationStatus: pe
        }), lo($c, {
            customValue: a,
            resetValidation: p,
            validateWithTrigger: b
        }), oe(() => e.modelValue, () => {
            w(u()), p(), b("onChange"), Te(P)
        }), qe(() => {
            w(u(), e.formatTrigger), Te(P)
        }), lt("touchstart", ie, {
            target: W(() => {
                var O;
                return (O = l.value) == null ? void 0 : O.$el
            })
        }), () => {
            const O = c("disabled"),
                Y = c("labelAlign"),
                J = D(),
                ve = () => {
                    const Pe = N();
                    return Y === "top" ? [J, Pe].filter(Boolean) : Pe || []
                };
            return d(pg, {
                size: e.size,
                class: dt({
                    error: me.value,
                    disabled: O,
                    [`label-${Y}`]: Y
                }),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: z.value,
                valueClass: dt("value"),
                titleClass: [dt("label", [Y, {
                    required: v.value
                }]), e.labelClass],
                arrowDirection: e.arrowDirection
            }, {
                icon: J && Y !== "top" ? () => J : null,
                title: ve,
                value: ee,
                extra: n.extra
            })
        }
    }
});
const ap = ge(kg);
let mo = 0;

function Dg(e) {
    e ? (mo || document.body.classList.add("van-toast--unclickable"), mo++) : mo && (mo--, mo || document.body.classList.remove("van-toast--unclickable"))
}
const [Ig, Ln] = ce("toast"), Ag = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"], Pg = {
    icon: String,
    show: Boolean,
    type: se("text"),
    overlay: Boolean,
    message: ne,
    iconSize: ne,
    duration: wl(2e3),
    position: se("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: He,
    iconPrefix: String,
    transition: se("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: He,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: ne
};
var fu = le({
    name: Ig,
    props: Pg,
    emits: ["update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o, i = !1;
        const r = () => {
                const f = e.show && e.forbidClick;
                i !== f && (i = f, Dg(i))
            },
            l = f => t("update:show", f),
            a = () => {
                e.closeOnClick && l(!1)
            },
            s = () => clearTimeout(o),
            u = () => {
                const {
                    icon: f,
                    type: h,
                    iconSize: v,
                    iconPrefix: y,
                    loadingType: p
                } = e;
                if (f || h === "success" || h === "fail") return d(Me, {
                    name: f || h,
                    size: v,
                    class: Ln("icon"),
                    classPrefix: y
                }, null);
                if (h === "loading") return d(Zt, {
                    class: Ln("loading"),
                    size: v,
                    type: p
                }, null)
            },
            c = () => {
                const {
                    type: f,
                    message: h
                } = e;
                if (n.message) return d("div", {
                    class: Ln("text")
                }, [n.message()]);
                if (Be(h) && h !== "") return f === "html" ? d("div", {
                    key: 0,
                    class: Ln("text"),
                    innerHTML: String(h)
                }, null) : d("div", {
                    class: Ln("text")
                }, [h])
            };
        return oe(() => [e.show, e.forbidClick], r), oe(() => [e.show, e.type, e.message, e.duration], () => {
            s(), e.show && e.duration > 0 && (o = setTimeout(() => {
                l(!1)
            }, e.duration))
        }), qe(r), Vo(r), () => d(Uo, $e({
            class: [Ln([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
                [e.type]: !e.icon
            }]), e.className],
            lockScroll: !1,
            onClick: a,
            onClosed: s,
            "onUpdate:show": l
        }, Fe(e, Ag)), {
            default: () => [u(), c()]
        })
    }
});

function kl() {
    const e = Ke({
            show: !1
        }),
        t = i => {
            e.show = i
        },
        n = i => {
            ye(e, i, {
                transitionAppear: !0
            }), t(!0)
        },
        o = () => t(!1);
    return Le({
        open: n,
        close: o,
        toggle: t
    }), {
        open: n,
        close: o,
        state: e,
        toggle: t
    }
}

function Dl(e) {
    const t = rh(e),
        n = document.createElement("div");
    return document.body.appendChild(n), {
        instance: t.mount(n),
        unmount() {
            t.unmount(), document.body.removeChild(n)
        }
    }
}
const Bg = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1
};
let ln = [],
    $g = !1,
    Za = ye({}, Bg);
const Rg = new Map;

function du(e) {
    return Ho(e) ? e : {
        message: e
    }
}

function Mg() {
    const {
        instance: e,
        unmount: t
    } = Dl({
        setup() {
            const n = H(""),
                {
                    open: o,
                    state: i,
                    close: r,
                    toggle: l
                } = kl(),
                a = () => {},
                s = () => d(fu, $e(i, {
                    onClosed: a,
                    "onUpdate:show": l
                }), null);
            return oe(n, u => {
                i.message = u
            }), yt().render = s, {
                open: o,
                close: r,
                message: n
            }
        }
    });
    return e
}

function Fg() {
    if (!ln.length || $g) {
        const e = Mg();
        ln.push(e)
    }
    return ln[ln.length - 1]
}

function Ur(e = {}) {
    if (!Pt) return {};
    const t = Fg(),
        n = du(e);
    return t.open(ye({}, Za, Rg.get(n.type || Za.type), n)), t
}
const Lg = e => t => Ur(ye({
        type: e
    }, du(t))),
    sp = Lg("loading"),
    cp = e => {
        ln.length && (e ? (ln.forEach(t => {
            t.close()
        }), ln = []) : ln[0].close())
    },
    up = ge(fu),
    [Vg, br] = ce("switch"),
    Ng = {
        size: ne,
        loading: Boolean,
        disabled: Boolean,
        modelValue: He,
        activeColor: String,
        inactiveColor: String,
        activeValue: {
            type: He,
            default: !0
        },
        inactiveValue: {
            type: He,
            default: !1
        }
    };
var Hg = le({
    name: Vg,
    props: Ng,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => e.modelValue === e.activeValue,
            i = () => {
                if (!e.disabled && !e.loading) {
                    const l = o() ? e.inactiveValue : e.activeValue;
                    t("update:modelValue", l), t("change", l)
                }
            },
            r = () => {
                if (e.loading) {
                    const l = o() ? e.activeColor : e.inactiveColor;
                    return d(Zt, {
                        class: br("loading"),
                        color: l
                    }, null)
                }
                if (n.node) return n.node()
            };
        return Wi(() => e.modelValue), () => {
            var l;
            const {
                size: a,
                loading: s,
                disabled: u,
                activeColor: c,
                inactiveColor: f
            } = e, h = o(), v = {
                fontSize: Ce(a),
                backgroundColor: h ? c : f
            };
            return d("div", {
                role: "switch",
                class: br({
                    on: h,
                    loading: s,
                    disabled: u
                }),
                style: v,
                tabindex: u ? void 0 : 0,
                "aria-checked": h,
                onClick: i
            }, [d("div", {
                class: br("node")
            }, [r()]), (l = n.background) == null ? void 0 : l.call(n)])
        }
    }
});
const fp = ge(Hg),
    [hu, zg] = ce("radio-group"),
    jg = {
        shape: String,
        disabled: Boolean,
        iconSize: ne,
        direction: String,
        modelValue: He,
        checkedColor: String
    },
    vu = Symbol(hu);
var Wg = le({
    name: hu,
    props: jg,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            linkChildren: o
        } = zo(vu), i = r => t("update:modelValue", r);
        return oe(() => e.modelValue, r => t("change", r)), o({
            props: e,
            updateValue: i
        }), Wi(() => e.modelValue), () => {
            var r;
            return d("div", {
                class: zg([e.direction]),
                role: "radiogroup"
            }, [(r = n.default) == null ? void 0 : r.call(n)])
        }
    }
});
const dp = ge(Wg),
    [Ug, hp] = ce("checkbox-group"),
    Kg = Symbol(Ug),
    Il = {
        name: He,
        disabled: Boolean,
        iconSize: ne,
        modelValue: He,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean
    };
var gu = le({
    props: ye({}, Il, {
        bem: tt(Function),
        role: String,
        shape: String,
        parent: Object,
        checked: Boolean,
        bindGroup: Q,
        indeterminate: {
            type: Boolean,
            default: null
        }
    }),
    emits: ["click", "toggle"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            i = h => {
                if (e.parent && e.bindGroup) return e.parent.props[h]
            },
            r = W(() => {
                if (e.parent && e.bindGroup) {
                    const h = i("disabled") || e.disabled;
                    if (e.role === "checkbox") {
                        const v = i("modelValue").length,
                            y = i("max"),
                            p = y && v >= +y;
                        return h || p && !e.checked
                    }
                    return h
                }
                return e.disabled
            }),
            l = W(() => i("direction")),
            a = W(() => {
                const h = e.checkedColor || i("checkedColor");
                if (h && e.checked && !r.value) return {
                    borderColor: h,
                    backgroundColor: h
                }
            }),
            s = W(() => e.shape || i("shape") || "round"),
            u = h => {
                const {
                    target: v
                } = h, y = o.value, p = y === v || (y == null ? void 0 : y.contains(v));
                !r.value && (p || !e.labelDisabled) && t("toggle"), t("click", h)
            },
            c = () => {
                var h, v;
                const {
                    bem: y,
                    checked: p,
                    indeterminate: m
                } = e, x = e.iconSize || i("iconSize");
                return d("div", {
                    ref: o,
                    class: y("icon", [s.value, {
                        disabled: r.value,
                        checked: p,
                        indeterminate: m
                    }]),
                    style: s.value !== "dot" ? {
                        fontSize: Ce(x)
                    } : {
                        width: Ce(x),
                        height: Ce(x),
                        borderColor: (h = a.value) == null ? void 0 : h.borderColor
                    }
                }, [n.icon ? n.icon({
                    checked: p,
                    disabled: r.value
                }) : s.value !== "dot" ? d(Me, {
                    name: m ? "minus" : "success",
                    style: a.value
                }, null) : d("div", {
                    class: y("icon--dot__icon"),
                    style: {
                        backgroundColor: (v = a.value) == null ? void 0 : v.backgroundColor
                    }
                }, null)])
            },
            f = () => {
                const {
                    checked: h
                } = e;
                if (n.default) return d("span", {
                    class: e.bem("label", [e.labelPosition, {
                        disabled: r.value
                    }])
                }, [n.default({
                    checked: h,
                    disabled: r.value
                })])
            };
        return () => {
            const h = e.labelPosition === "left" ? [f(), c()] : [c(), f()];
            return d("div", {
                role: e.role,
                class: e.bem([{
                    disabled: r.value,
                    "label-disabled": e.labelDisabled
                }, l.value]),
                tabindex: r.value ? void 0 : 0,
                "aria-checked": e.checked,
                onClick: u
            }, [h])
        }
    }
});
const Yg = ye({}, Il, {
        shape: String
    }),
    [qg, Gg] = ce("radio");
var Xg = le({
    name: qg,
    props: Yg,
    emits: ["update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            parent: o
        } = mn(vu), i = () => (o ? o.props.modelValue : e.modelValue) === e.name, r = () => {
            o ? o.updateValue(e.name) : t("update:modelValue", e.name)
        };
        return () => d(gu, $e({
            bem: Gg,
            role: "radio",
            parent: o,
            checked: i(),
            onToggle: r
        }, e), Fe(n, ["default", "icon"]))
    }
});
const vp = ge(Xg),
    [Zg, Jg] = ce("checkbox"),
    Qg = ye({}, Il, {
        shape: String,
        bindGroup: Q,
        indeterminate: {
            type: Boolean,
            default: null
        }
    });
var em = le({
    name: Zg,
    props: Qg,
    emits: ["change", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            parent: o
        } = mn(Kg), i = a => {
            const {
                name: s
            } = e, {
                max: u,
                modelValue: c
            } = o.props, f = c.slice();
            if (a) !(u && f.length >= +u) && !f.includes(s) && (f.push(s), e.bindGroup && o.updateValue(f));
            else {
                const h = f.indexOf(s);
                h !== -1 && (f.splice(h, 1), e.bindGroup && o.updateValue(f))
            }
        }, r = W(() => o && e.bindGroup ? o.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue), l = (a = !r.value) => {
            o && e.bindGroup ? i(a) : t("update:modelValue", a), e.indeterminate !== null && t("change", a)
        };
        return oe(() => e.modelValue, a => {
            e.indeterminate === null && t("change", a)
        }), Le({
            toggle: l,
            props: e,
            checked: r
        }), Wi(() => e.modelValue), () => d(gu, $e({
            bem: Jg,
            role: "checkbox",
            parent: o,
            checked: r.value,
            onToggle: l
        }, e), Fe(n, ["default", "icon"]))
    }
});
const gp = ge(em),
    [tm, Re, jt] = ce("calendar"),
    nm = e => jt("monthTitle", e.getFullYear(), e.getMonth() + 1);

function _n(e, t) {
    const n = e.getFullYear(),
        o = t.getFullYear();
    if (n === o) {
        const i = e.getMonth(),
            r = t.getMonth();
        return i === r ? 0 : i > r ? 1 : -1
    }
    return n > o ? 1 : -1
}

function ot(e, t) {
    const n = _n(e, t);
    if (n === 0) {
        const o = e.getDate(),
            i = t.getDate();
        return o === i ? 0 : o > i ? 1 : -1
    }
    return n
}
const no = e => new Date(e),
    Ja = e => Array.isArray(e) ? e.map(no) : no(e);

function Al(e, t) {
    const n = no(e);
    return n.setDate(n.getDate() + t), n
}

function Pl(e, t) {
    const n = no(e);
    return n.setMonth(n.getMonth() + t), n.getDate() !== e.getDate() && n.setDate(0), n
}

function mu(e, t) {
    const n = no(e);
    return n.setFullYear(n.getFullYear() + t), n.getDate() !== e.getDate() && n.setDate(0), n
}
const Kr = e => Al(e, -1),
    Yr = e => Al(e, 1),
    Qa = e => Pl(e, -1),
    es = e => Pl(e, 1),
    ts = e => mu(e, -1),
    ns = e => mu(e, 1),
    ii = () => {
        const e = new Date;
        return e.setHours(0, 0, 0, 0), e
    };

function om(e) {
    const t = e[0].getTime();
    return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}
ye({}, su, {
    modelValue: fn(),
    filter: Function,
    formatter: {
        type: Function,
        default: (e, t) => t
    }
});
const im = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
    [rm] = ce("calendar-day");
var lm = le({
    name: rm,
    props: {
        item: tt(Object),
        color: String,
        index: Number,
        offset: wl(0),
        rowHeight: String
    },
    emits: ["click", "clickDisabledDate"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = W(() => {
                var u;
                const {
                    item: c,
                    index: f,
                    color: h,
                    offset: v,
                    rowHeight: y
                } = e, p = {
                    height: y
                };
                if (c.type === "placeholder") return p.width = "100%", p;
                if (f === 0 && (p.marginLeft = `${100*v/7}%`), h) switch (c.type) {
                    case "end":
                    case "start":
                    case "start-end":
                    case "multiple-middle":
                    case "multiple-selected":
                        p.background = h;
                        break;
                    case "middle":
                        p.color = h;
                        break
                }
                return v + (((u = c.date) == null ? void 0 : u.getDate()) || 1) > 28 && (p.marginBottom = 0), p
            }),
            i = () => {
                e.item.type !== "disabled" ? t("click", e.item) : t("clickDisabledDate", e.item)
            },
            r = () => {
                const {
                    topInfo: u
                } = e.item;
                if (u || n["top-info"]) return d("div", {
                    class: Re("top-info")
                }, [n["top-info"] ? n["top-info"](e.item) : u])
            },
            l = () => {
                const {
                    bottomInfo: u
                } = e.item;
                if (u || n["bottom-info"]) return d("div", {
                    class: Re("bottom-info")
                }, [n["bottom-info"] ? n["bottom-info"](e.item) : u])
            },
            a = () => n.text ? n.text(e.item) : e.item.text,
            s = () => {
                const {
                    item: u,
                    color: c,
                    rowHeight: f
                } = e, {
                    type: h
                } = u, v = [r(), a(), l()];
                return h === "selected" ? d("div", {
                    class: Re("selected-day"),
                    style: {
                        width: f,
                        height: f,
                        background: c
                    }
                }, [v]) : v
            };
        return () => {
            const {
                type: u,
                className: c
            } = e.item;
            return u === "placeholder" ? d("div", {
                class: Re("day"),
                style: o.value
            }, null) : d("div", {
                role: "gridcell",
                style: o.value,
                class: [Re("day", u), c],
                tabindex: u === "disabled" ? void 0 : -1,
                onClick: i
            }, [s()])
        }
    }
});
const [am] = ce("calendar-month"), sm = {
    date: tt(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: ne,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number
};
var cm = le({
    name: am,
    props: sm,
    emits: ["click", "clickDisabledDate"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const [o, i] = uh(), r = H(), l = H(), a = Hc(l), s = W(() => nm(e.date)), u = W(() => Ce(e.rowHeight)), c = W(() => {
            const k = e.date.getDate(),
                T = (e.date.getDay() - k % 7 + 8) % 7;
            return e.firstDayOfWeek ? (T + 7 - e.firstDayOfWeek) % 7 : T
        }), f = W(() => im(e.date.getFullYear(), e.date.getMonth() + 1)), h = W(() => o.value || !e.lazyRender), v = () => s.value, y = k => {
            const _ = T => e.currentDate.some($ => ot($, T) === 0);
            if (_(k)) {
                const T = Kr(k),
                    $ = Yr(k),
                    ie = _(T),
                    me = _($);
                return ie && me ? "multiple-middle" : ie ? "end" : me ? "start" : "multiple-selected"
            }
            return ""
        }, p = k => {
            const [_, T] = e.currentDate;
            if (!_) return "";
            const $ = ot(k, _);
            if (!T) return $ === 0 ? "start" : "";
            const ie = ot(k, T);
            return e.allowSameDay && $ === 0 && ie === 0 ? "start-end" : $ === 0 ? "start" : ie === 0 ? "end" : $ > 0 && ie < 0 ? "middle" : ""
        }, m = k => {
            const {
                type: _,
                minDate: T,
                maxDate: $,
                currentDate: ie
            } = e;
            if (T && ot(k, T) < 0 || $ && ot(k, $) > 0) return "disabled";
            if (ie === null) return "";
            if (Array.isArray(ie)) {
                if (_ === "multiple") return y(k);
                if (_ === "range") return p(k)
            } else if (_ === "single") return ot(k, ie) === 0 ? "selected" : "";
            return ""
        }, x = k => {
            if (e.type === "range") {
                if (k === "start" || k === "end") return jt(k);
                if (k === "start-end") return `${jt("start")}/${jt("end")}`
            }
        }, b = () => {
            if (e.showMonthTitle) return d("div", {
                class: Re("month-title")
            }, [n["month-title"] ? n["month-title"]({
                date: e.date,
                text: s.value
            }) : s.value])
        }, S = () => {
            if (e.showMark && h.value) return d("div", {
                class: Re("month-mark")
            }, [e.date.getMonth() + 1])
        }, w = W(() => {
            const k = Math.ceil((f.value + c.value) / 7);
            return Array(k).fill({
                type: "placeholder"
            })
        }), E = W(() => {
            const k = [],
                _ = e.date.getFullYear(),
                T = e.date.getMonth();
            for (let $ = 1; $ <= f.value; $++) {
                const ie = new Date(_, T, $),
                    me = m(ie);
                let z = {
                    date: ie,
                    type: me,
                    text: $,
                    bottomInfo: x(me)
                };
                e.formatter && (z = e.formatter(z)), k.push(z)
            }
            return k
        }), A = W(() => E.value.filter(k => k.type === "disabled")), j = (k, _) => {
            if (r.value) {
                const T = We(r.value),
                    $ = w.value.length,
                    me = (Math.ceil((_.getDate() + c.value) / 7) - 1) * T.height / $;
                _i(k, T.top + me + k.scrollTop - We(k).top)
            }
        }, P = (k, _) => d(lm, {
            item: k,
            index: _,
            color: e.color,
            offset: c.value,
            rowHeight: u.value,
            onClick: T => t("click", T),
            onClickDisabledDate: T => t("clickDisabledDate", T)
        }, Fe(n, ["top-info", "bottom-info", "text"])), B = () => d("div", {
            ref: r,
            role: "grid",
            class: Re("days")
        }, [S(), (h.value ? E : w).value.map(P)]);
        return Le({
            getTitle: v,
            getHeight: () => a.value,
            setVisible: i,
            scrollToDate: j,
            disabledDays: A
        }), () => d("div", {
            class: Re("month"),
            ref: l
        }, [b(), B()])
    }
});
const [um] = ce("calendar-header");
var fm = le({
    name: um,
    props: {
        date: Date,
        minDate: Date,
        maxDate: Date,
        title: String,
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: Number,
        switchMode: se("none")
    },
    emits: ["clickSubtitle", "panelChange"],
    setup(e, {
        slots: t,
        emit: n
    }) {
        const o = W(() => e.date && e.minDate && _n(Qa(e.date), e.minDate) < 0),
            i = W(() => e.date && e.minDate && _n(ts(e.date), e.minDate) < 0),
            r = W(() => e.date && e.maxDate && _n(es(e.date), e.maxDate) > 0),
            l = W(() => e.date && e.maxDate && _n(ns(e.date), e.maxDate) > 0),
            a = () => {
                if (e.showTitle) {
                    const v = e.title || jt("title"),
                        y = t.title ? t.title() : v;
                    return d("div", {
                        class: Re("header-title")
                    }, [y])
                }
            },
            s = v => n("clickSubtitle", v),
            u = v => n("panelChange", v),
            c = v => {
                const y = e.switchMode === "year-month",
                    p = t[v ? "next-month" : "prev-month"],
                    m = t[v ? "next-year" : "prev-year"],
                    x = v ? r.value : o.value,
                    b = v ? l.value : i.value,
                    S = v ? "arrow" : "arrow-left",
                    w = v ? "arrow-double-right" : "arrow-double-left",
                    E = () => u((v ? es : Qa)(e.date)),
                    A = () => u((v ? ns : ts)(e.date)),
                    j = d("view", {
                        class: Re("header-action", {
                            disabled: x
                        }),
                        onClick: x ? void 0 : E
                    }, [p ? p({
                        disabled: x
                    }) : d(Me, {
                        class: {
                            [Pn]: !x
                        },
                        name: S
                    }, null)]),
                    P = y && d("view", {
                        class: Re("header-action", {
                            disabled: b
                        }),
                        onClick: b ? void 0 : A
                    }, [m ? m({
                        disabled: b
                    }) : d(Me, {
                        class: {
                            [Pn]: !b
                        },
                        name: w
                    }, null)]);
                return v ? [j, P] : [P, j]
            },
            f = () => {
                if (e.showSubtitle) {
                    const v = t.subtitle ? t.subtitle({
                            date: e.date,
                            text: e.subtitle
                        }) : e.subtitle,
                        y = e.switchMode !== "none";
                    return d("div", {
                        class: Re("header-subtitle", {
                            "with-switch": y
                        }),
                        onClick: s
                    }, [y ? [c(), d("div", {
                        class: Re("header-subtitle-text")
                    }, [v]), c(!0)] : v])
                }
            },
            h = () => {
                const {
                    firstDayOfWeek: v
                } = e, y = jt("weekdays"), p = [...y.slice(v, 7), ...y.slice(0, v)];
                return d("div", {
                    class: Re("weekdays")
                }, [p.map(m => d("span", {
                    class: Re("weekday")
                }, [m]))])
            };
        return () => d("div", {
            class: Re("header")
        }, [a(), f(), h()])
    }
});
const dm = {
    show: Boolean,
    type: se("single"),
    switchMode: se("none"),
    title: String,
    color: String,
    round: Q,
    readonly: Boolean,
    poppable: Q,
    maxRange: xe(null),
    position: se("bottom"),
    teleport: [String, Object],
    showMark: Q,
    showTitle: Q,
    formatter: Function,
    rowHeight: ne,
    confirmText: String,
    rangePrompt: String,
    lazyRender: Q,
    showConfirm: Q,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Q,
    closeOnPopstate: Q,
    showRangePrompt: Q,
    confirmDisabledText: String,
    closeOnClickOverlay: Q,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Q,
    minDate: {
        type: Date,
        validator: Lr
    },
    maxDate: {
        type: Date,
        validator: Lr
    },
    firstDayOfWeek: {
        type: ne,
        default: 0,
        validator: e => e >= 0 && e <= 6
    }
};
var hm = le({
    name: tm,
    props: dm,
    emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "panelChange"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = W(() => e.switchMode !== "none"),
            i = W(() => !e.minDate && !o.value ? ii() : e.minDate),
            r = W(() => !e.maxDate && !o.value ? Pl(ii(), 6) : e.maxDate),
            l = (D, L = i.value, te = r.value) => L && ot(D, L) === -1 ? L : te && ot(D, te) === 1 ? te : D,
            a = (D = e.defaultDate) => {
                const {
                    type: L,
                    allowSameDay: te
                } = e;
                if (D === null) return D;
                const ae = ii();
                if (L === "range") {
                    Array.isArray(D) || (D = []), D.length === 1 && ot(D[0], ae) === 1 && (D = []);
                    const N = i.value,
                        ee = r.value,
                        O = l(D[0] || ae, N, ee ? te ? ee : Kr(ee) : void 0),
                        Y = l(D[1] || (te ? ae : Yr(ae)), N ? te ? N : Yr(N) : void 0);
                    return [O, Y]
                }
                return L === "multiple" ? Array.isArray(D) ? D.map(N => l(N)) : [l(ae)] : ((!D || Array.isArray(D)) && (D = ae), l(D))
            },
            s = () => {
                const D = Array.isArray(f.value) ? f.value[0] : f.value;
                return D || l(ii())
            };
        let u;
        const c = H(),
            f = H(a()),
            h = H(s()),
            v = H(),
            [y, p] = Qc(),
            m = W(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0),
            x = W(() => {
                const D = [];
                if (!i.value || !r.value) return D;
                const L = new Date(i.value);
                L.setDate(1);
                do D.push(new Date(L)), L.setMonth(L.getMonth() + 1); while (_n(L, r.value) !== 1);
                return D
            }),
            b = W(() => {
                if (f.value) {
                    if (e.type === "range") return !f.value[0] || !f.value[1];
                    if (e.type === "multiple") return !f.value.length
                }
                return !f.value
            }),
            S = () => f.value,
            w = () => {
                const D = jo(c.value),
                    L = D + u,
                    te = x.value.map((Y, J) => y.value[J].getHeight()),
                    ae = te.reduce((Y, J) => Y + J, 0);
                if (L > ae && D > 0) return;
                let N = 0,
                    ee;
                const O = [-1, -1];
                for (let Y = 0; Y < x.value.length; Y++) {
                    const J = y.value[Y];
                    N <= L && N + te[Y] >= D && (O[1] = Y, ee || (ee = J, O[0] = Y), y.value[Y].showed || (y.value[Y].showed = !0, t("monthShow", {
                        date: J.date,
                        title: J.getTitle()
                    }))), N += te[Y]
                }
                x.value.forEach((Y, J) => {
                    const ve = J >= O[0] - 1 && J <= O[1] + 1;
                    y.value[J].setVisible(ve)
                }), ee && (v.value = ee)
            },
            E = D => {
                o.value ? h.value = D : mt(() => {
                    x.value.some((L, te) => _n(L, D) === 0 ? (c.value && y.value[te].scrollToDate(c.value, D), !0) : !1), w()
                })
            },
            A = () => {
                if (!(e.poppable && !e.show))
                    if (f.value) {
                        const D = e.type === "single" ? f.value : f.value[0];
                        Lr(D) && E(D)
                    } else o.value || mt(w)
            },
            j = () => {
                e.poppable && !e.show || (o.value || mt(() => {
                    u = Math.floor(We(c).height)
                }), A())
            },
            P = (D = a()) => {
                f.value = D, A()
            },
            B = D => {
                const {
                    maxRange: L,
                    rangePrompt: te,
                    showRangePrompt: ae
                } = e;
                return L && om(D) > +L ? (ae && Ur(te || jt("rangePrompt", L)), t("overRange"), !1) : !0
            },
            k = D => {
                h.value = D, t("panelChange", {
                    date: D
                })
            },
            _ = () => {
                var D;
                return t("confirm", (D = f.value) != null ? D : Ja(f.value))
            },
            T = (D, L) => {
                const te = ae => {
                    f.value = ae, t("select", Ja(ae))
                };
                if (L && e.type === "range" && !B(D)) {
                    te([D[0], Al(D[0], +e.maxRange - 1)]);
                    return
                }
                te(D), L && !e.showConfirm && _()
            },
            $ = (D, L, te) => {
                var ae;
                return (ae = D.find(N => ot(L, N.date) === -1 && ot(N.date, te) === -1)) == null ? void 0 : ae.date
            },
            ie = W(() => y.value.reduce((D, L) => {
                var te, ae;
                return D.push(...(ae = (te = L.disabledDays) == null ? void 0 : te.value) != null ? ae : []), D
            }, [])),
            me = D => {
                if (e.readonly || !D.date) return;
                const {
                    date: L
                } = D, {
                    type: te
                } = e;
                if (te === "range") {
                    if (!f.value) {
                        T([L]);
                        return
                    }
                    const [ae, N] = f.value;
                    if (ae && !N) {
                        const ee = ot(L, ae);
                        if (ee === 1) {
                            const O = $(ie.value, ae, L);
                            if (O) {
                                const Y = Kr(O);
                                ot(ae, Y) === -1 ? T([ae, Y]) : T([L])
                            } else T([ae, L], !0)
                        } else ee === -1 ? T([L]) : e.allowSameDay && T([L, L], !0)
                    } else T([L])
                } else if (te === "multiple") {
                    if (!f.value) {
                        T([L]);
                        return
                    }
                    const ae = f.value,
                        N = ae.findIndex(ee => ot(ee, L) === 0);
                    if (N !== -1) {
                        const [ee] = ae.splice(N, 1);
                        t("unselect", no(ee))
                    } else e.maxRange && ae.length >= +e.maxRange ? Ur(e.rangePrompt || jt("rangePrompt", e.maxRange)) : T([...ae, L])
                } else T(L, !0)
            },
            z = D => t("update:show", D),
            G = (D, L) => {
                const te = L !== 0 || !e.showSubtitle;
                return d(cm, $e({
                    ref: o.value ? v : p(L),
                    date: D,
                    currentDate: f.value,
                    showMonthTitle: te,
                    firstDayOfWeek: m.value,
                    lazyRender: o.value ? !1 : e.lazyRender,
                    maxDate: r.value,
                    minDate: i.value
                }, Fe(e, ["type", "color", "showMark", "formatter", "rowHeight", "showSubtitle", "allowSameDay"]), {
                    onClick: me,
                    onClickDisabledDate: ae => t("clickDisabledDate", ae)
                }), Fe(n, ["top-info", "bottom-info", "month-title", "text"]))
            },
            Z = () => {
                if (n.footer) return n.footer();
                if (e.showConfirm) {
                    const D = n["confirm-text"],
                        L = b.value,
                        te = L ? e.confirmDisabledText : e.confirmText;
                    return d(Ei, {
                        round: !0,
                        block: !0,
                        type: "primary",
                        color: e.color,
                        class: Re("confirm"),
                        disabled: L,
                        nativeType: "button",
                        onClick: _
                    }, {
                        default: () => [D ? D({
                            disabled: L
                        }) : te || jt("confirm")]
                    })
                }
            },
            pe = () => d("div", {
                class: [Re("footer"), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [Z()]),
            Ae = () => {
                var D, L;
                return d("div", {
                    class: Re()
                }, [d(fm, {
                    date: (D = v.value) == null ? void 0 : D.date,
                    maxDate: r.value,
                    minDate: i.value,
                    title: e.title,
                    subtitle: (L = v.value) == null ? void 0 : L.getTitle(),
                    showTitle: e.showTitle,
                    showSubtitle: e.showSubtitle,
                    switchMode: e.switchMode,
                    firstDayOfWeek: m.value,
                    onClickSubtitle: te => t("clickSubtitle", te),
                    onPanelChange: k
                }, Fe(n, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), d("div", {
                    ref: c,
                    class: Re("body"),
                    onScroll: o.value ? void 0 : w
                }, [o.value ? G(h.value, 0) : x.value.map(G)]), pe()])
            };
        return oe(() => e.show, j), oe(() => [e.type, e.minDate, e.maxDate, e.switchMode], () => P(a(f.value))), oe(() => e.defaultDate, D => {
            P(D)
        }), Le({
            reset: P,
            scrollToDate: E,
            getSelectedDate: S
        }), ao(j), () => e.poppable ? d(Uo, {
            show: e.show,
            class: Re("popup"),
            round: e.round,
            position: e.position,
            closeable: e.showTitle || e.showSubtitle,
            teleport: e.teleport,
            closeOnPopstate: e.closeOnPopstate,
            safeAreaInsetTop: e.safeAreaInsetTop,
            closeOnClickOverlay: e.closeOnClickOverlay,
            "onUpdate:show": z
        }, {
            default: Ae
        }) : Ae()
    }
});
const mp = ge(hm),
    [vm, Vn] = ce("image"),
    gm = {
        src: String,
        alt: String,
        fit: String,
        position: String,
        round: Boolean,
        block: Boolean,
        width: ne,
        height: ne,
        radius: ne,
        lazyLoad: Boolean,
        iconSize: ne,
        showError: Q,
        errorIcon: se("photo-fail"),
        iconPrefix: String,
        showLoading: Q,
        loadingIcon: se("photo"),
        crossorigin: String,
        referrerpolicy: String
    };
var mm = le({
    name: vm,
    props: gm,
    emits: ["load", "error"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(!1),
            i = H(!0),
            r = H(),
            {
                $Lazyload: l
            } = yt().proxy,
            a = W(() => {
                const m = {
                    width: Ce(e.width),
                    height: Ce(e.height)
                };
                return Be(e.radius) && (m.overflow = "hidden", m.borderRadius = Ce(e.radius)), m
            });
        oe(() => e.src, () => {
            o.value = !1, i.value = !0
        });
        const s = m => {
                i.value && (i.value = !1, t("load", m))
            },
            u = () => {
                const m = new Event("load");
                Object.defineProperty(m, "target", {
                    value: r.value,
                    enumerable: !0
                }), s(m)
            },
            c = m => {
                o.value = !0, i.value = !1, t("error", m)
            },
            f = (m, x, b) => b ? b() : d(Me, {
                name: m,
                size: e.iconSize,
                class: x,
                classPrefix: e.iconPrefix
            }, null),
            h = () => {
                if (i.value && e.showLoading) return d("div", {
                    class: Vn("loading")
                }, [f(e.loadingIcon, Vn("loading-icon"), n.loading)]);
                if (o.value && e.showError) return d("div", {
                    class: Vn("error")
                }, [f(e.errorIcon, Vn("error-icon"), n.error)])
            },
            v = () => {
                if (o.value || !e.src) return;
                const m = {
                    alt: e.alt,
                    class: Vn("img"),
                    style: {
                        objectFit: e.fit,
                        objectPosition: e.position
                    },
                    crossorigin: e.crossorigin,
                    referrerpolicy: e.referrerpolicy
                };
                return e.lazyLoad ? Wt(d("img", $e({
                    ref: r
                }, m), null), [
                    [Ff("lazy"), e.src]
                ]) : d("img", $e({
                    ref: r,
                    src: e.src,
                    onLoad: s,
                    onError: c
                }, m), null)
            },
            y = ({
                el: m
            }) => {
                const x = () => {
                    m === r.value && i.value && u()
                };
                r.value ? x() : Te(x)
            },
            p = ({
                el: m
            }) => {
                m === r.value && !o.value && c()
            };
        return l && Pt && (l.$on("loaded", y), l.$on("error", p), Tt(() => {
            l.$off("loaded", y), l.$off("error", p)
        })), qe(() => {
            Te(() => {
                var m;
                (m = r.value) != null && m.complete && !e.lazyLoad && u()
            })
        }), () => {
            var m;
            return d("div", {
                class: Vn({
                    round: e.round,
                    block: e.block
                }),
                style: a.value
            }, [v(), h(), (m = n.default) == null ? void 0 : m.call(n)])
        }
    }
});
const bu = ge(mm),
    bp = ge(nv);

function bm(e, t) {
    const {
        days: n
    } = t;
    let {
        hours: o,
        minutes: i,
        seconds: r,
        milliseconds: l
    } = t;
    if (e.includes("DD") ? e = e.replace("DD", vo(n)) : o += n * 24, e.includes("HH") ? e = e.replace("HH", vo(o)) : i += o * 60, e.includes("mm") ? e = e.replace("mm", vo(i)) : r += i * 60, e.includes("ss") ? e = e.replace("ss", vo(r)) : l += r * 1e3, e.includes("S")) {
        const a = vo(l, 3);
        e.includes("SSS") ? e = e.replace("SSS", a) : e.includes("SS") ? e = e.replace("SS", a.slice(0, 2)) : e = e.replace("S", a.charAt(0))
    }
    return e
}
const [ym, pm] = ce("count-down"), wm = {
    time: xe(0),
    format: se("HH:mm:ss"),
    autoStart: Q,
    millisecond: Boolean
};
var xm = le({
    name: ym,
    props: wm,
    emits: ["change", "finish"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const {
            start: o,
            pause: i,
            reset: r,
            current: l
        } = gh({
            time: +e.time,
            millisecond: e.millisecond,
            onChange: u => t("change", u),
            onFinish: () => t("finish")
        }), a = W(() => bm(e.format, l.value)), s = () => {
            r(+e.time), e.autoStart && o()
        };
        return oe(() => e.time, s, {
            immediate: !0
        }), Le({
            start: o,
            pause: i,
            reset: s
        }), () => d("div", {
            role: "timer",
            class: pm()
        }, [n.default ? n.default(l.value) : a.value])
    }
});
const yp = ge(xm),
    [Sm, ri] = ce("empty"),
    Cm = {
        image: se("default"),
        imageSize: [Number, String, Array],
        description: String
    };
var Tm = le({
    name: Sm,
    props: Cm,
    setup(e, {
        slots: t
    }) {
        const n = () => {
                const x = t.description ? t.description() : e.description;
                if (x) return d("p", {
                    class: ri("description")
                }, [x])
            },
            o = () => {
                if (t.default) return d("div", {
                    class: ri("bottom")
                }, [t.default()])
            },
            i = qi(),
            r = x => `${i}-${x}`,
            l = x => `url(#${r(x)})`,
            a = (x, b, S) => d("stop", {
                "stop-color": x,
                offset: `${b}%`,
                "stop-opacity": S
            }, null),
            s = (x, b) => [a(x, 0), a(b, 100)],
            u = x => [d("defs", null, [d("radialGradient", {
                id: r(x),
                cx: "50%",
                cy: "54%",
                fx: "50%",
                fy: "54%",
                r: "297%",
                gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)",
                "data-allow-mismatch": "attribute"
            }, [a("#EBEDF0", 0), a("#F2F3F5", 100, .3)])]), d("ellipse", {
                fill: l(x),
                opacity: ".8",
                cx: "80",
                cy: "140",
                rx: "46",
                ry: "8",
                "data-allow-mismatch": "attribute"
            }, null)],
            c = () => [d("defs", null, [d("linearGradient", {
                id: r("a"),
                x1: "64%",
                y1: "100%",
                x2: "64%",
                "data-allow-mismatch": "attribute"
            }, [a("#FFF", 0, .5), a("#F2F3F5", 100)])]), d("g", {
                opacity: ".8",
                "data-allow-mismatch": "children"
            }, [d("path", {
                d: "M36 131V53H16v20H2v58h34z",
                fill: l("a")
            }, null), d("path", {
                d: "M123 15h22v14h9v77h-31V15z",
                fill: l("a")
            }, null)])],
            f = () => [d("defs", null, [d("linearGradient", {
                id: r("b"),
                x1: "64%",
                y1: "97%",
                x2: "64%",
                y2: "0%",
                "data-allow-mismatch": "attribute"
            }, [a("#F2F3F5", 0, .3), a("#F2F3F5", 100)])]), d("g", {
                opacity: ".8",
                "data-allow-mismatch": "children"
            }, [d("path", {
                d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
                fill: l("b")
            }, null), d("path", {
                d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
                fill: l("b")
            }, null)])],
            h = () => d("svg", {
                viewBox: "0 0 160 160"
            }, [d("defs", {
                "data-allow-mismatch": "children"
            }, [d("linearGradient", {
                id: r(1),
                x1: "64%",
                y1: "100%",
                x2: "64%"
            }, [a("#FFF", 0, .5), a("#F2F3F5", 100)]), d("linearGradient", {
                id: r(2),
                x1: "50%",
                x2: "50%",
                y2: "84%"
            }, [a("#EBEDF0", 0), a("#DCDEE0", 100, 0)]), d("linearGradient", {
                id: r(3),
                x1: "100%",
                x2: "100%",
                y2: "100%"
            }, [s("#EAEDF0", "#DCDEE0")]), d("radialGradient", {
                id: r(4),
                cx: "50%",
                cy: "0%",
                fx: "50%",
                fy: "0%",
                r: "100%",
                gradientTransform: "matrix(0 1 -.54 0 .5 -.5)"
            }, [a("#EBEDF0", 0), a("#FFF", 100, 0)])]), d("g", {
                fill: "none"
            }, [c(), d("path", {
                fill: l(4),
                d: "M0 139h160v21H0z",
                "data-allow-mismatch": "attribute"
            }, null), d("path", {
                d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
                fill: l(2),
                "data-allow-mismatch": "attribute"
            }, null), d("g", {
                opacity: ".6",
                "stroke-linecap": "round",
                "stroke-width": "7",
                "data-allow-mismatch": "children"
            }, [d("path", {
                d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
                stroke: l(3)
            }, null), d("path", {
                d: "M53 36a34 34 0 0 0 0 48",
                stroke: l(3)
            }, null), d("path", {
                d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
                stroke: l(3)
            }, null), d("path", {
                d: "M106 84a34 34 0 0 0 0-48",
                stroke: l(3)
            }, null)]), d("g", {
                transform: "translate(31 105)"
            }, [d("rect", {
                fill: "#EBEDF0",
                width: "98",
                height: "34",
                rx: "2"
            }, null), d("rect", {
                fill: "#FFF",
                x: "9",
                y: "8",
                width: "80",
                height: "18",
                rx: "1.1"
            }, null), d("rect", {
                fill: "#EBEDF0",
                x: "15",
                y: "12",
                width: "18",
                height: "6",
                rx: "1.1"
            }, null)])])]),
            v = () => d("svg", {
                viewBox: "0 0 160 160"
            }, [d("defs", {
                "data-allow-mismatch": "children"
            }, [d("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: r(5)
            }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
                x1: "95%",
                y1: "48%",
                x2: "5.5%",
                y2: "51%",
                id: r(6)
            }, [s("#EAEDF1", "#DCDEE0")]), d("linearGradient", {
                y1: "45%",
                x2: "100%",
                y2: "54%",
                id: r(7)
            }, [s("#EAEDF1", "#DCDEE0")])]), c(), f(), d("g", {
                transform: "translate(36 50)",
                fill: "none"
            }, [d("g", {
                transform: "translate(8)"
            }, [d("rect", {
                fill: "#EBEDF0",
                opacity: ".6",
                x: "38",
                y: "13",
                width: "36",
                height: "53",
                rx: "2"
            }, null), d("rect", {
                fill: l(5),
                width: "64",
                height: "66",
                rx: "2",
                "data-allow-mismatch": "attribute"
            }, null), d("rect", {
                fill: "#FFF",
                x: "6",
                y: "6",
                width: "52",
                height: "55",
                rx: "1"
            }, null), d("g", {
                transform: "translate(15 17)",
                fill: l(6),
                "data-allow-mismatch": "attribute"
            }, [d("rect", {
                width: "34",
                height: "6",
                rx: "1"
            }, null), d("path", {
                d: "M0 14h34v6H0z"
            }, null), d("rect", {
                y: "28",
                width: "34",
                height: "6",
                rx: "1"
            }, null)])]), d("rect", {
                fill: l(7),
                y: "61",
                width: "88",
                height: "28",
                rx: "1",
                "data-allow-mismatch": "attribute"
            }, null), d("rect", {
                fill: "#F7F8FA",
                x: "29",
                y: "72",
                width: "30",
                height: "6",
                rx: "1"
            }, null)])]),
            y = () => d("svg", {
                viewBox: "0 0 160 160"
            }, [d("defs", null, [d("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: r(8),
                "data-allow-mismatch": "attribute"
            }, [s("#EAEDF1", "#DCDEE0")])]), c(), f(), u("c"), d("path", {
                d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
                fill: l(8),
                "data-allow-mismatch": "attribute"
            }, null)]),
            p = () => d("svg", {
                viewBox: "0 0 160 160"
            }, [d("defs", {
                "data-allow-mismatch": "children"
            }, [d("linearGradient", {
                x1: "50%",
                y1: "100%",
                x2: "50%",
                id: r(9)
            }, [s("#EEE", "#D8D8D8")]), d("linearGradient", {
                x1: "100%",
                y1: "50%",
                y2: "50%",
                id: r(10)
            }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: r(11)
            }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
                x1: "50%",
                x2: "50%",
                y2: "100%",
                id: r(12)
            }, [s("#FFF", "#F7F8FA")])]), c(), f(), u("d"), d("g", {
                transform: "rotate(-45 113 -4)",
                fill: "none",
                "data-allow-mismatch": "children"
            }, [d("rect", {
                fill: l(9),
                x: "24",
                y: "52.8",
                width: "5.8",
                height: "19",
                rx: "1"
            }, null), d("rect", {
                fill: l(10),
                x: "22.1",
                y: "67.3",
                width: "9.9",
                height: "28",
                rx: "1"
            }, null), d("circle", {
                stroke: l(11),
                "stroke-width": "8",
                cx: "27",
                cy: "27",
                r: "27"
            }, null), d("circle", {
                fill: l(12),
                cx: "27",
                cy: "27",
                r: "16"
            }, null), d("path", {
                d: "M37 7c-8 0-15 5-16 12",
                stroke: l(11),
                "stroke-width": "3",
                opacity: ".5",
                "stroke-linecap": "round",
                transform: "rotate(45 29 13)"
            }, null)])]),
            m = () => {
                var x;
                if (t.image) return t.image();
                const b = {
                    error: y,
                    search: p,
                    network: h,
                    default: v
                };
                return ((x = b[e.image]) == null ? void 0 : x.call(b)) || d("img", {
                    src: e.image
                }, null)
            };
        return () => d("div", {
            class: ri()
        }, [d("div", {
            class: ri("image"),
            style: so(e.imageSize)
        }, [m()]), n(), o()])
    }
});
const pp = ge(Tm),
    [_m, pt, li] = ce("dialog"),
    Em = ye({}, Ol, {
        title: String,
        theme: String,
        width: ne,
        message: [String, Function],
        callback: Function,
        allowHtml: Boolean,
        className: He,
        transition: se("van-dialog-bounce"),
        messageAlign: String,
        closeOnPopstate: Q,
        showCancelButton: Boolean,
        cancelButtonText: String,
        cancelButtonColor: String,
        cancelButtonDisabled: Boolean,
        confirmButtonText: String,
        confirmButtonColor: String,
        confirmButtonDisabled: Boolean,
        showConfirmButton: Q,
        closeOnClickOverlay: Boolean,
        keyboardEnabled: Q
    }),
    Om = [...wv, "transition", "closeOnPopstate"];
var yu = le({
    name: _m,
    props: Em,
    emits: ["confirm", "cancel", "keydown", "update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            i = Ke({
                confirm: !1,
                cancel: !1
            }),
            r = x => t("update:show", x),
            l = x => {
                var b;
                r(!1), (b = e.callback) == null || b.call(e, x)
            },
            a = x => () => {
                e.show && (t(x), e.beforeClose ? (i[x] = !0, Wo(e.beforeClose, {
                    args: [x],
                    done() {
                        l(x), i[x] = !1
                    },
                    canceled() {
                        i[x] = !1
                    }
                })) : l(x))
            },
            s = a("cancel"),
            u = a("confirm"),
            c = nh(x => {
                var b, S;
                if (!e.keyboardEnabled || x.target !== ((S = (b = o.value) == null ? void 0 : b.popupRef) == null ? void 0 : S.value)) return;
                ({
                    Enter: e.showConfirmButton ? u : Fr,
                    Escape: e.showCancelButton ? s : Fr
                })[x.key](), t("keydown", x)
            }, ["enter", "esc"]),
            f = () => {
                const x = n.title ? n.title() : e.title;
                if (x) return d("div", {
                    class: pt("header", {
                        isolated: !e.message && !n.default
                    })
                }, [x])
            },
            h = x => {
                const {
                    message: b,
                    allowHtml: S,
                    messageAlign: w
                } = e, E = pt("message", {
                    "has-title": x,
                    [w]: w
                }), A = eo(b) ? b() : b;
                return S && typeof A == "string" ? d("div", {
                    class: E,
                    innerHTML: A
                }, null) : d("div", {
                    class: E
                }, [A])
            },
            v = () => {
                if (n.default) return d("div", {
                    class: pt("content")
                }, [n.default()]);
                const {
                    title: x,
                    message: b,
                    allowHtml: S
                } = e;
                if (b) {
                    const w = !!(x || n.title);
                    return d("div", {
                        key: S ? 1 : 0,
                        class: pt("content", {
                            isolated: !w
                        })
                    }, [h(w)])
                }
            },
            y = () => d("div", {
                class: [Mh, pt("footer")]
            }, [e.showCancelButton && d(Ei, {
                size: "large",
                text: e.cancelButtonText || li("cancel"),
                class: pt("cancel"),
                style: {
                    color: e.cancelButtonColor
                },
                loading: i.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: s
            }, null), e.showConfirmButton && d(Ei, {
                size: "large",
                text: e.confirmButtonText || li("confirm"),
                class: [pt("confirm"), {
                    [Lc]: e.showCancelButton
                }],
                style: {
                    color: e.confirmButtonColor
                },
                loading: i.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: u
            }, null)]),
            p = () => d(Kh, {
                class: pt("footer")
            }, {
                default: () => [e.showCancelButton && d(Na, {
                    type: "warning",
                    text: e.cancelButtonText || li("cancel"),
                    class: pt("cancel"),
                    color: e.cancelButtonColor,
                    loading: i.cancel,
                    disabled: e.cancelButtonDisabled,
                    onClick: s
                }, null), e.showConfirmButton && d(Na, {
                    type: "danger",
                    text: e.confirmButtonText || li("confirm"),
                    class: pt("confirm"),
                    color: e.confirmButtonColor,
                    loading: i.confirm,
                    disabled: e.confirmButtonDisabled,
                    onClick: u
                }, null)]
            }),
            m = () => n.footer ? n.footer() : e.theme === "round-button" ? p() : y();
        return () => {
            const {
                width: x,
                title: b,
                theme: S,
                message: w,
                className: E
            } = e;
            return d(Uo, $e({
                ref: o,
                role: "dialog",
                class: [pt([S]), E],
                style: {
                    width: Ce(x)
                },
                tabindex: 0,
                "aria-labelledby": b || w,
                onKeydown: c,
                "onUpdate:show": r
            }, Fe(e, Om)), {
                default: () => [f(), v(), m()]
            })
        }
    }
});
let qr;
const km = {
    title: "",
    width: "",
    theme: null,
    message: "",
    overlay: !0,
    callback: null,
    teleport: "body",
    className: "",
    allowHtml: !1,
    lockScroll: !0,
    transition: void 0,
    beforeClose: null,
    overlayClass: "",
    overlayStyle: void 0,
    messageAlign: "",
    cancelButtonText: "",
    cancelButtonColor: null,
    cancelButtonDisabled: !1,
    confirmButtonText: "",
    confirmButtonColor: null,
    confirmButtonDisabled: !1,
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !1
};
let Dm = ye({}, km);

function Im() {
    ({
        instance: qr
    } = Dl({
        setup() {
            const {
                state: t,
                toggle: n
            } = kl();
            return () => d(yu, $e(t, {
                "onUpdate:show": n
            }), null)
        }
    }))
}

function wp(e) {
    return Pt ? new Promise((t, n) => {
        qr || Im(), qr.open(ye({}, Dm, e, {
            callback: o => {
                (o === "confirm" ? t : n)(o)
            }
        }))
    }) : Promise.resolve(void 0)
}
ge(yu);
const Am = {
        gap: wl(24),
        icon: String,
        axis: se("y"),
        magnetic: String,
        offset: {
            type: Object,
            default: () => ({
                x: -1,
                y: -1
            })
        },
        teleport: {
            type: [String, Object],
            default: "body"
        }
    },
    [Pm, os] = ce("floating-bubble");
var Bm = le({
    name: Pm,
    inheritAttrs: !1,
    props: Am,
    emits: ["click", "update:offset", "offsetChange"],
    setup(e, {
        slots: t,
        emit: n,
        attrs: o
    }) {
        const i = H(),
            r = H({
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }),
            l = W(() => ({
                top: e.gap,
                right: zt.value - r.value.width - e.gap,
                bottom: sn.value - r.value.height - e.gap,
                left: e.gap
            })),
            a = H(!1);
        let s = !1;
        const u = W(() => {
                const S = {},
                    w = Ce(r.value.x),
                    E = Ce(r.value.y);
                return S.transform = `translate3d(${w}, ${E}, 0)`, (a.value || !s) && (S.transition = "none"), S
            }),
            c = () => {
                if (!b.value) return;
                const {
                    width: S,
                    height: w
                } = We(i.value), {
                    offset: E
                } = e;
                r.value = {
                    x: E.x > -1 ? E.x : zt.value - S - e.gap,
                    y: E.y > -1 ? E.y : sn.value - w - e.gap,
                    width: S,
                    height: w
                }
            },
            f = $n();
        let h = 0,
            v = 0;
        const y = S => {
            f.start(S), a.value = !0, h = r.value.x, v = r.value.y
        };
        lt("touchmove", S => {
            if (S.preventDefault(), f.move(S), e.axis !== "lock" && !f.isTap.value) {
                if (e.axis === "x" || e.axis === "xy") {
                    let E = h + f.deltaX.value;
                    E < l.value.left && (E = l.value.left), E > l.value.right && (E = l.value.right), r.value.x = E
                }
                if (e.axis === "y" || e.axis === "xy") {
                    let E = v + f.deltaY.value;
                    E < l.value.top && (E = l.value.top), E > l.value.bottom && (E = l.value.bottom), r.value.y = E
                }
                const w = Fe(r.value, ["x", "y"]);
                n("update:offset", w)
            }
        }, {
            target: i
        });
        const m = () => {
                a.value = !1, Te(() => {
                    if (e.magnetic === "x") {
                        const S = Ma([l.value.left, l.value.right], r.value.x);
                        r.value.x = S
                    }
                    if (e.magnetic === "y") {
                        const S = Ma([l.value.top, l.value.bottom], r.value.y);
                        r.value.y = S
                    }
                    if (!f.isTap.value) {
                        const S = Fe(r.value, ["x", "y"]);
                        n("update:offset", S), (h !== S.x || v !== S.y) && n("offsetChange", S)
                    }
                })
            },
            x = S => {
                f.isTap.value ? n("click", S) : S.stopPropagation()
            };
        qe(() => {
            c(), Te(() => {
                s = !0
            })
        }), oe([zt, sn, () => e.gap, () => e.offset], c, {
            deep: !0
        });
        const b = H(!0);
        return vn(() => {
            b.value = !0
        }), Gt(() => {
            e.teleport && (b.value = !1)
        }), () => {
            const S = Wt(d("div", $e({
                class: os(),
                ref: i,
                onTouchstartPassive: y,
                onTouchend: m,
                onTouchcancel: m,
                onClickCapture: x,
                style: u.value
            }, o), [t.default ? t.default() : d(av, {
                name: e.icon,
                class: os("icon")
            }, null)]), [
                [cn, b.value]
            ]);
            return e.teleport ? d(Fi, {
                to: e.teleport
            }, {
                default: () => [S]
            }) : S
        }
    }
});
const xp = ge(Bm),
    is = e => Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2),
    $m = e => ({
        x: (e[0].clientX + e[1].clientX) / 2,
        y: (e[0].clientY + e[1].clientY) / 2
    }),
    yr = ce("image-preview")[1],
    rs = 2.6,
    Rm = {
        src: String,
        show: Boolean,
        active: Number,
        minZoom: tt(ne),
        maxZoom: tt(ne),
        rootWidth: tt(Number),
        rootHeight: tt(Number),
        disableZoom: Boolean,
        doubleScale: Boolean,
        closeOnClickImage: Boolean,
        closeOnClickOverlay: Boolean,
        vertical: Boolean
    };
var Mm = le({
    props: Rm,
    emits: ["scale", "close", "longPress"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = Ke({
                scale: 1,
                moveX: 0,
                moveY: 0,
                moving: !1,
                zooming: !1,
                initializing: !1,
                imageRatio: 0
            }),
            i = $n(),
            r = H(),
            l = H(),
            a = H(!1),
            s = H(!1);
        let u = 0;
        const c = W(() => {
                const {
                    scale: z,
                    moveX: G,
                    moveY: Z,
                    moving: pe,
                    zooming: Ae,
                    initializing: D
                } = o, L = {
                    transitionDuration: Ae || pe || D ? "0s" : ".3s"
                };
                return (z !== 1 || s.value) && (L.transform = `matrix(${z}, 0, 0, ${z}, ${G}, ${Z})`), L
            }),
            f = W(() => {
                if (o.imageRatio) {
                    const {
                        rootWidth: z,
                        rootHeight: G
                    } = e, Z = a.value ? G / o.imageRatio : z;
                    return Math.max(0, (o.scale * Z - z) / 2)
                }
                return 0
            }),
            h = W(() => {
                if (o.imageRatio) {
                    const {
                        rootWidth: z,
                        rootHeight: G
                    } = e, Z = a.value ? G : z * o.imageRatio;
                    return Math.max(0, (o.scale * Z - G) / 2)
                }
                return 0
            }),
            v = (z, G) => {
                var Z;
                if (z = it(z, +e.minZoom, +e.maxZoom + 1), z !== o.scale) {
                    const pe = z / o.scale;
                    if (o.scale = z, G) {
                        const Ae = We((Z = r.value) == null ? void 0 : Z.$el),
                            D = {
                                x: Ae.width * .5,
                                y: Ae.height * .5
                            },
                            L = o.moveX - (G.x - Ae.left - D.x) * (pe - 1),
                            te = o.moveY - (G.y - Ae.top - D.y) * (pe - 1);
                        o.moveX = it(L, -f.value, f.value), o.moveY = it(te, -h.value, h.value)
                    } else o.moveX = 0, o.moveY = s.value ? u : 0;
                    t("scale", {
                        scale: z,
                        index: e.active
                    })
                }
            },
            y = () => {
                v(1)
            },
            p = () => {
                const z = o.scale > 1 ? 1 : 2;
                v(z, z === 2 || s.value ? {
                    x: i.startX.value,
                    y: i.startY.value
                } : void 0)
            };
        let m, x, b, S, w, E, A, j, P = !1;
        const B = z => {
                const {
                    touches: G
                } = z;
                if (m = G.length, m === 2 && e.disableZoom) return;
                const {
                    offsetX: Z
                } = i;
                i.start(z), x = o.moveX, b = o.moveY, j = Date.now(), P = !1, o.moving = m === 1 && (o.scale !== 1 || s.value), o.zooming = m === 2 && !Z.value, o.zooming && (S = o.scale, w = is(G))
            },
            k = z => {
                const {
                    touches: G
                } = z;
                if (i.move(z), o.moving) {
                    const {
                        deltaX: Z,
                        deltaY: pe
                    } = i, Ae = Z.value + x, D = pe.value + b;
                    if ((e.vertical ? i.isVertical() && Math.abs(D) > h.value : i.isHorizontal() && Math.abs(Ae) > f.value) && !P) {
                        o.moving = !1;
                        return
                    }
                    P = !0, rt(z, !0), o.moveX = it(Ae, -f.value, f.value), o.moveY = it(D, -h.value, h.value)
                }
                if (o.zooming && (rt(z, !0), G.length === 2)) {
                    const Z = is(G),
                        pe = S * Z / w;
                    E = $m(G), v(pe, E)
                }
            },
            _ = z => {
                var G;
                const Z = (G = l.value) == null ? void 0 : G.$el;
                if (!Z) return;
                const pe = Z.firstElementChild,
                    Ae = z.target === Z,
                    D = pe == null ? void 0 : pe.contains(z.target);
                !e.closeOnClickImage && D || !e.closeOnClickOverlay && Ae || t("close")
            },
            T = z => {
                if (m > 1) return;
                const G = Date.now() - j,
                    Z = 250;
                i.isTap.value && (G < Z ? e.doubleScale ? A ? (clearTimeout(A), A = null, p()) : A = setTimeout(() => {
                    _(z), A = null
                }, Z) : _(z) : G > zh && t("longPress"))
            },
            $ = z => {
                let G = !1;
                if ((o.moving || o.zooming) && (G = !0, o.moving && x === o.moveX && b === o.moveY && (G = !1), !z.touches.length)) {
                    o.zooming && (o.moveX = it(o.moveX, -f.value, f.value), o.moveY = it(o.moveY, -h.value, h.value), o.zooming = !1), o.moving = !1, x = 0, b = 0, S = 1, o.scale < 1 && y();
                    const Z = +e.maxZoom;
                    o.scale > Z && v(Z, E)
                }
                rt(z, G), T(z), i.reset()
            },
            ie = () => {
                const {
                    rootWidth: z,
                    rootHeight: G
                } = e, Z = G / z, {
                    imageRatio: pe
                } = o;
                a.value = o.imageRatio > Z && pe < rs, s.value = o.imageRatio > Z && pe >= rs, s.value && (u = (pe * z - G) / 2, o.moveY = u, o.initializing = !0, mt(() => {
                    o.initializing = !1
                })), y()
            },
            me = z => {
                const {
                    naturalWidth: G,
                    naturalHeight: Z
                } = z.target;
                o.imageRatio = Z / G, ie()
            };
        return oe(() => e.active, y), oe(() => e.show, z => {
            z || y()
        }), oe(() => [e.rootWidth, e.rootHeight], ie), lt("touchmove", k, {
            target: W(() => {
                var z;
                return (z = l.value) == null ? void 0 : z.$el
            })
        }), Le({
            resetScale: y
        }), () => {
            const z = {
                loading: () => d(Zt, {
                    type: "spinner"
                }, null)
            };
            return d(au, {
                ref: l,
                class: yr("swipe-item"),
                onTouchstartPassive: B,
                onTouchend: $,
                onTouchcancel: $
            }, {
                default: () => [n.image ? d("div", {
                    class: yr("image-wrap")
                }, [n.image({
                    src: e.src,
                    onLoad: me,
                    style: c.value
                })]) : d(bu, {
                    ref: r,
                    src: e.src,
                    fit: "contain",
                    class: yr("image", {
                        vertical: a.value
                    }),
                    style: c.value,
                    onLoad: me
                }, z)]
            })
        }
    }
});
const [Fm, Nn] = ce("image-preview"), Lm = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"], Vm = {
    show: Boolean,
    loop: Q,
    images: fn(),
    minZoom: xe(1 / 3),
    maxZoom: xe(3),
    overlay: Q,
    vertical: Boolean,
    closeable: Boolean,
    showIndex: Q,
    className: He,
    closeIcon: se("clear"),
    transition: String,
    beforeClose: Function,
    doubleScale: Q,
    overlayClass: He,
    overlayStyle: Object,
    swipeDuration: xe(300),
    startPosition: xe(0),
    showIndicators: Boolean,
    closeOnPopstate: Q,
    closeOnClickImage: Q,
    closeOnClickOverlay: Q,
    closeIconPosition: se("top-right"),
    teleport: [String, Object]
};
var pu = le({
    name: Fm,
    props: Vm,
    emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            i = H(),
            r = Ke({
                active: 0,
                rootWidth: 0,
                rootHeight: 0,
                disableZoom: !1
            }),
            l = () => {
                if (o.value) {
                    const S = We(o.value.$el);
                    r.rootWidth = S.width, r.rootHeight = S.height, o.value.resize()
                }
            },
            a = S => t("scale", S),
            s = S => t("update:show", S),
            u = () => {
                Wo(e.beforeClose, {
                    args: [r.active],
                    done: () => s(!1)
                })
            },
            c = S => {
                S !== r.active && (r.active = S, t("change", S))
            },
            f = () => {
                if (e.showIndex) return d("div", {
                    class: Nn("index")
                }, [n.index ? n.index({
                    index: r.active
                }) : `${r.active+1} / ${e.images.length}`])
            },
            h = () => {
                if (n.cover) return d("div", {
                    class: Nn("cover")
                }, [n.cover()])
            },
            v = () => {
                r.disableZoom = !0
            },
            y = () => {
                r.disableZoom = !1
            },
            p = () => d(ou, {
                ref: o,
                lazyRender: !0,
                loop: e.loop,
                class: Nn("swipe"),
                vertical: e.vertical,
                duration: e.swipeDuration,
                initialSwipe: e.startPosition,
                showIndicators: e.showIndicators,
                indicatorColor: "white",
                onChange: c,
                onDragEnd: y,
                onDragStart: v
            }, {
                default: () => [e.images.map((S, w) => d(Mm, {
                    ref: E => {
                        w === r.active && (i.value = E)
                    },
                    src: S,
                    show: e.show,
                    active: r.active,
                    maxZoom: e.maxZoom,
                    minZoom: e.minZoom,
                    rootWidth: r.rootWidth,
                    rootHeight: r.rootHeight,
                    disableZoom: r.disableZoom,
                    doubleScale: e.doubleScale,
                    closeOnClickImage: e.closeOnClickImage,
                    closeOnClickOverlay: e.closeOnClickOverlay,
                    vertical: e.vertical,
                    onScale: a,
                    onClose: u,
                    onLongPress: () => t("longPress", {
                        index: w
                    })
                }, {
                    image: n.image
                }))]
            }),
            m = () => {
                if (e.closeable) return d(Me, {
                    role: "button",
                    name: e.closeIcon,
                    class: [Nn("close-icon", e.closeIconPosition), Pn],
                    onClick: u
                }, null)
            },
            x = () => t("closed"),
            b = (S, w) => {
                var E;
                return (E = o.value) == null ? void 0 : E.swipeTo(S, w)
            };
        return Le({
            resetScale: () => {
                var S;
                (S = i.value) == null || S.resetScale()
            },
            swipeTo: b
        }), qe(l), oe([zt, sn], l), oe(() => e.startPosition, S => c(+S)), oe(() => e.show, S => {
            const {
                images: w,
                startPosition: E
            } = e;
            S ? (c(+E), Te(() => {
                l(), b(+E, {
                    immediate: !0
                })
            })) : t("close", {
                index: r.active,
                url: w[r.active]
            })
        }), () => d(Uo, $e({
            class: [Nn(), e.className],
            overlayClass: [Nn("overlay"), e.overlayClass],
            onClosed: x,
            "onUpdate:show": s
        }, Fe(e, Lm)), {
            default: () => [m(), p(), f(), h()]
        })
    }
});
let di;
const Nm = {
    loop: !0,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    vertical: !1,
    teleport: "body",
    className: "",
    showIndex: !0,
    closeable: !1,
    closeIcon: "clear",
    transition: void 0,
    beforeClose: void 0,
    doubleScale: !0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !0,
    closeIconPosition: "top-right"
};

function Hm() {
    ({
        instance: di
    } = Dl({
        setup() {
            const {
                state: e,
                toggle: t
            } = kl(), n = () => {
                e.images = []
            };
            return () => d(pu, $e(e, {
                onClosed: n,
                "onUpdate:show": t
            }), null)
        }
    }))
}
const zm = (e, t = 0) => {
        if (Pt) return di || Hm(), e = Array.isArray(e) ? {
            images: e,
            startPosition: t
        } : e, di.open(ye({}, Nm, e)), di
    },
    Sp = ge(pu),
    [jm, Hn, Wm] = ce("list"),
    Um = {
        error: Boolean,
        offset: xe(300),
        loading: Boolean,
        disabled: Boolean,
        finished: Boolean,
        scroller: Object,
        errorText: String,
        direction: se("down"),
        loadingText: String,
        finishedText: String,
        immediateCheck: Q
    };
var Km = le({
    name: jm,
    props: Um,
    emits: ["load", "update:error", "update:loading"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(e.loading),
            i = H(),
            r = H(),
            l = og(),
            a = ji(i),
            s = W(() => e.scroller || a.value),
            u = () => {
                Te(() => {
                    if (o.value || e.finished || e.disabled || e.error || (l == null ? void 0 : l.value) === !1) return;
                    const {
                        direction: y
                    } = e, p = +e.offset, m = We(s);
                    if (!m.height || to(i)) return;
                    let x = !1;
                    const b = We(r);
                    y === "up" ? x = m.top - b.top <= p : x = b.bottom - m.bottom <= p, x && (o.value = !0, t("update:loading", !0), t("load"))
                })
            },
            c = () => {
                if (e.finished) {
                    const y = n.finished ? n.finished() : e.finishedText;
                    if (y) return d("div", {
                        class: Hn("finished-text")
                    }, [y])
                }
            },
            f = () => {
                t("update:error", !1), u()
            },
            h = () => {
                if (e.error) {
                    const y = n.error ? n.error() : e.errorText;
                    if (y) return d("div", {
                        role: "button",
                        class: Hn("error-text"),
                        tabindex: 0,
                        onClick: f
                    }, [y])
                }
            },
            v = () => {
                if (o.value && !e.finished && !e.disabled) return d("div", {
                    class: Hn("loading")
                }, [n.loading ? n.loading() : d(Zt, {
                    class: Hn("loading-icon")
                }, {
                    default: () => [e.loadingText || Wm("loading")]
                })])
            };
        return oe(() => [e.loading, e.finished, e.error], u), l && oe(l, y => {
            y && u()
        }), fl(() => {
            o.value = e.loading
        }), qe(() => {
            e.immediateCheck && u()
        }), Le({
            check: u
        }), lt("scroll", u, {
            target: s,
            passive: !0
        }), () => {
            var y;
            const p = (y = n.default) == null ? void 0 : y.call(n),
                m = d("div", {
                    ref: r,
                    class: Hn("placeholder")
                }, null);
            return d("div", {
                ref: i,
                role: "feed",
                class: Hn(),
                "aria-busy": o.value
            }, [e.direction === "down" ? p : m, v(), c(), h(), e.direction === "up" ? p : m])
        }
    }
});
const Cp = ge(Km),
    [Ym, bo] = ce("notice-bar"),
    qm = {
        text: String,
        mode: String,
        color: String,
        delay: xe(1),
        speed: xe(60),
        leftIcon: String,
        wrapable: Boolean,
        background: String,
        scrollable: {
            type: Boolean,
            default: null
        }
    };
var Gm = le({
    name: Ym,
    props: qm,
    emits: ["close", "replay"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o = 0,
            i = 0,
            r;
        const l = H(),
            a = H(),
            s = Ke({
                show: !0,
                offset: 0,
                duration: 0
            }),
            u = () => {
                if (n["left-icon"]) return n["left-icon"]();
                if (e.leftIcon) return d(Me, {
                    class: bo("left-icon"),
                    name: e.leftIcon
                }, null)
            },
            c = () => {
                if (e.mode === "closeable") return "cross";
                if (e.mode === "link") return "arrow"
            },
            f = m => {
                e.mode === "closeable" && (s.show = !1, t("close", m))
            },
            h = () => {
                if (n["right-icon"]) return n["right-icon"]();
                const m = c();
                if (m) return d(Me, {
                    name: m,
                    class: bo("right-icon"),
                    onClick: f
                }, null)
            },
            v = () => {
                s.offset = o, s.duration = 0, mt(() => {
                    Tn(() => {
                        s.offset = -i, s.duration = (i + o) / +e.speed, t("replay")
                    })
                })
            },
            y = () => {
                const m = e.scrollable === !1 && !e.wrapable,
                    x = {
                        transform: s.offset ? `translateX(${s.offset}px)` : "",
                        transitionDuration: `${s.duration}s`
                    };
                return d("div", {
                    ref: l,
                    role: "marquee",
                    class: bo("wrap")
                }, [d("div", {
                    ref: a,
                    style: x,
                    class: [bo("content"), {
                        "van-ellipsis": m
                    }],
                    onTransitionend: v
                }, [n.default ? n.default() : e.text])])
            },
            p = () => {
                const {
                    delay: m,
                    speed: x,
                    scrollable: b
                } = e, S = Be(m) ? +m * 1e3 : 0;
                o = 0, i = 0, s.offset = 0, s.duration = 0, clearTimeout(r), r = setTimeout(() => {
                    if (!l.value || !a.value || b === !1) return;
                    const w = We(l).width,
                        E = We(a).width;
                    (b || E > w) && Tn(() => {
                        o = w, i = E, s.offset = -i, s.duration = i / +x
                    })
                }, S)
            };
        return Ui(p), ao(p), lt("pageshow", p), Le({
            reset: p
        }), oe(() => [e.text, e.scrollable], p), () => {
            const {
                color: m,
                wrapable: x,
                background: b
            } = e;
            return Wt(d("div", {
                role: "alert",
                class: bo({
                    wrapable: x
                }),
                style: {
                    color: m,
                    background: b
                }
            }, [u(), y(), h()]), [
                [cn, s.show]
            ])
        }
    }
});
const Tp = ge(Gm),
    [Xm, Do] = ce("key"),
    Zm = d("svg", {
        class: Do("collapse-icon"),
        viewBox: "0 0 30 24"
    }, [d("path", {
        d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
        fill: "currentColor"
    }, null)]),
    Jm = d("svg", {
        class: Do("delete-icon"),
        viewBox: "0 0 32 22"
    }, [d("path", {
        d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
        fill: "currentColor"
    }, null)]);
var pr = le({
    name: Xm,
    props: {
        type: String,
        text: ne,
        color: String,
        wider: Boolean,
        large: Boolean,
        loading: Boolean
    },
    emits: ["press"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(!1),
            i = $n(),
            r = u => {
                i.start(u), o.value = !0
            },
            l = u => {
                i.move(u), i.direction.value && (o.value = !1)
            },
            a = u => {
                o.value && (n.default || rt(u), o.value = !1, t("press", e.text, e.type))
            },
            s = () => {
                if (e.loading) return d(Zt, {
                    class: Do("loading-icon")
                }, null);
                const u = n.default ? n.default() : e.text;
                switch (e.type) {
                    case "delete":
                        return u || Jm;
                    case "extra":
                        return u || Zm;
                    default:
                        return u
                }
            };
        return () => d("div", {
            class: Do("wrapper", {
                wider: e.wider
            }),
            onTouchstartPassive: r,
            onTouchmovePassive: l,
            onTouchend: a,
            onTouchcancel: a
        }, [d("div", {
            role: "button",
            tabindex: 0,
            class: Do([e.color, {
                large: e.large,
                active: o.value,
                delete: e.type === "delete"
            }])
        }, [s()])])
    }
});
const [Qm, Qt] = ce("number-keyboard"), eb = {
    show: Boolean,
    title: String,
    theme: se("default"),
    zIndex: ne,
    teleport: [String, Object],
    maxlength: xe(1 / 0),
    modelValue: se(""),
    transition: Q,
    blurOnClose: Q,
    showDeleteKey: Q,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: Q,
    safeAreaInsetBottom: Q,
    extraKey: {
        type: [String, Array],
        default: ""
    }
};

function tb(e) {
    for (let t = e.length - 1; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1)),
            o = e[t];
        e[t] = e[n], e[n] = o
    }
    return e
}
var nb = le({
    name: Qm,
    inheritAttrs: !1,
    props: eb,
    emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n,
        attrs: o
    }) {
        const i = H(),
            r = () => {
                const m = Array(9).fill("").map((x, b) => ({
                    text: b + 1
                }));
                return e.randomKeyOrder && tb(m), m
            },
            l = () => [...r(), {
                text: e.extraKey,
                type: "extra"
            }, {
                text: 0
            }, {
                text: e.showDeleteKey ? e.deleteButtonText : "",
                type: e.showDeleteKey ? "delete" : ""
            }],
            a = () => {
                const m = r(),
                    {
                        extraKey: x
                    } = e,
                    b = Array.isArray(x) ? x : [x];
                return b.length === 0 ? m.push({
                    text: 0,
                    wider: !0
                }) : b.length === 1 ? m.push({
                    text: 0,
                    wider: !0
                }, {
                    text: b[0],
                    type: "extra"
                }) : b.length === 2 && m.push({
                    text: b[0],
                    type: "extra"
                }, {
                    text: 0
                }, {
                    text: b[1],
                    type: "extra"
                }), m
            },
            s = W(() => e.theme === "custom" ? a() : l()),
            u = () => {
                e.show && t("blur")
            },
            c = () => {
                t("close"), e.blurOnClose && u()
            },
            f = () => t(e.show ? "show" : "hide"),
            h = (m, x) => {
                if (m === "") {
                    x === "extra" && u();
                    return
                }
                const b = e.modelValue;
                x === "delete" ? (t("delete"), t("update:modelValue", b.slice(0, b.length - 1))) : x === "close" ? c() : b.length < +e.maxlength && (t("input", m), t("update:modelValue", b + m))
            },
            v = () => {
                const {
                    title: m,
                    theme: x,
                    closeButtonText: b
                } = e, S = n["title-left"], w = b && x === "default";
                if (m || w || S) return d("div", {
                    class: Qt("header")
                }, [S && d("span", {
                    class: Qt("title-left")
                }, [S()]), m && d("h2", {
                    class: Qt("title")
                }, [m]), w && d("button", {
                    type: "button",
                    class: [Qt("close"), Pn],
                    onClick: c
                }, [b])])
            },
            y = () => s.value.map(m => {
                const x = {};
                return m.type === "delete" && (x.default = n.delete), m.type === "extra" && (x.default = n["extra-key"]), d(pr, {
                    key: m.text,
                    text: m.text,
                    type: m.type,
                    wider: m.wider,
                    color: m.color,
                    onPress: h
                }, x)
            }),
            p = () => {
                if (e.theme === "custom") return d("div", {
                    class: Qt("sidebar")
                }, [e.showDeleteKey && d(pr, {
                    large: !0,
                    text: e.deleteButtonText,
                    type: "delete",
                    onPress: h
                }, {
                    default: n.delete
                }), d(pr, {
                    large: !0,
                    text: e.closeButtonText,
                    type: "close",
                    color: "blue",
                    loading: e.closeButtonLoading,
                    onPress: h
                }, null)])
            };
        return oe(() => e.show, m => {
            e.transition || t(m ? "show" : "hide")
        }), e.hideOnClickOutside && Ac(i, u, {
            eventName: "touchstart"
        }), () => {
            const m = v(),
                x = d(yl, {
                    name: e.transition ? "van-slide-up" : ""
                }, {
                    default: () => [Wt(d("div", $e({
                        ref: i,
                        style: Tl(e.zIndex),
                        class: Qt({
                            unfit: !e.safeAreaInsetBottom,
                            "with-title": !!m
                        }),
                        onAnimationend: f,
                        onTouchstartPassive: Rc
                    }, o), [m, d("div", {
                        class: Qt("body")
                    }, [d("div", {
                        class: Qt("keys")
                    }, [y()]), p()])]), [
                        [cn, e.show]
                    ])]
                });
            return e.teleport ? d(Fi, {
                to: e.teleport
            }, {
                default: () => [x]
            }) : x
        }
    }
});
const _p = ge(nb),
    [ob, yo] = ce("password-input"),
    ib = {
        info: String,
        mask: Q,
        value: se(""),
        gutter: ne,
        length: xe(6),
        focused: Boolean,
        errorInfo: String
    };
var rb = le({
    name: ob,
    props: ib,
    emits: ["focus"],
    setup(e, {
        emit: t
    }) {
        const n = i => {
                i.stopPropagation(), t("focus", i)
            },
            o = () => {
                const i = [],
                    {
                        mask: r,
                        value: l,
                        gutter: a,
                        focused: s
                    } = e,
                    u = +e.length;
                for (let c = 0; c < u; c++) {
                    const f = l[c],
                        h = c !== 0 && !a,
                        v = s && c === l.length;
                    let y;
                    c !== 0 && a && (y = {
                        marginLeft: Ce(a)
                    }), i.push(d("li", {
                        class: [{
                            [Lc]: h
                        }, yo("item", {
                            focus: v
                        })],
                        style: y
                    }, [r ? d("i", {
                        style: {
                            visibility: f ? "visible" : "hidden"
                        }
                    }, null) : f, v && d("div", {
                        class: yo("cursor")
                    }, null)]))
                }
                return i
            };
        return () => {
            const i = e.errorInfo || e.info;
            return d("div", {
                class: yo()
            }, [d("ul", {
                class: [yo("security"), {
                    [Vc]: !e.gutter
                }],
                onTouchstartPassive: n
            }, [o()]), i && d("div", {
                class: yo(e.errorInfo ? "error-info" : "info")
            }, [i])])
        }
    }
});
const Ep = ge(rb);

function _t(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function Bl(e) {
    var t = _t(e).Element;
    return e instanceof t || e instanceof Element
}

function xt(e) {
    var t = _t(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function wu(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = _t(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
var oo = Math.round;

function Gr() {
    var e = navigator.userAgentData;
    return e != null && e.brands ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function lb() {
    return !/^((?!chrome|android).)*safari/i.test(Gr())
}

function Oi(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var o = e.getBoundingClientRect(),
        i = 1,
        r = 1;
    t && xt(e) && (i = e.offsetWidth > 0 && oo(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && oo(o.height) / e.offsetHeight || 1);
    var l = Bl(e) ? _t(e) : window,
        a = l.visualViewport,
        s = !lb() && n,
        u = (o.left + (s && a ? a.offsetLeft : 0)) / i,
        c = (o.top + (s && a ? a.offsetTop : 0)) / r,
        f = o.width / i,
        h = o.height / r;
    return {
        width: f,
        height: h,
        top: c,
        right: u + f,
        bottom: c + h,
        left: u,
        x: u,
        y: c
    }
}

function xu(e) {
    var t = _t(e),
        n = t.pageXOffset,
        o = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: o
    }
}

function ab(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function sb(e) {
    return e === _t(e) || !xt(e) ? xu(e) : ab(e)
}

function Kt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function Gi(e) {
    return ((Bl(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function cb(e) {
    return Oi(Gi(e)).left + xu(e).scrollLeft
}

function Yt(e) {
    return _t(e).getComputedStyle(e)
}

function $l(e) {
    var t = Yt(e),
        n = t.overflow,
        o = t.overflowX,
        i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + i + o)
}

function ub(e) {
    var t = e.getBoundingClientRect(),
        n = oo(t.width) / e.offsetWidth || 1,
        o = oo(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1
}

function fb(e, t, n) {
    n === void 0 && (n = !1);
    var o = xt(t),
        i = xt(t) && ub(t),
        r = Gi(t),
        l = Oi(e, i, n),
        a = {
            scrollLeft: 0,
            scrollTop: 0
        },
        s = {
            x: 0,
            y: 0
        };
    return (o || !o && !n) && ((Kt(t) !== "body" || $l(r)) && (a = sb(t)), xt(t) ? (s = Oi(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : r && (s.x = cb(r))), {
        x: l.left + a.scrollLeft - s.x,
        y: l.top + a.scrollTop - s.y,
        width: l.width,
        height: l.height
    }
}

function db(e) {
    var t = Oi(e),
        n = e.offsetWidth,
        o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: o
    }
}

function Rl(e) {
    return Kt(e) === "html" ? e : e.assignedSlot || e.parentNode || (wu(e) ? e.host : null) || Gi(e)
}

function Su(e) {
    return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : xt(e) && $l(e) ? e : Su(Rl(e))
}

function hi(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = Su(e),
        i = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
        r = _t(o),
        l = i ? [r].concat(r.visualViewport || [], $l(o) ? o : []) : o,
        a = t.concat(l);
    return i ? a : a.concat(hi(Rl(l)))
}

function hb(e) {
    return ["table", "td", "th"].indexOf(Kt(e)) >= 0
}

function ls(e) {
    return !xt(e) || Yt(e).position === "fixed" ? null : e.offsetParent
}

function vb(e) {
    var t = /firefox/i.test(Gr()),
        n = /Trident/i.test(Gr());
    if (n && xt(e)) {
        var o = Yt(e);
        if (o.position === "fixed") return null
    }
    var i = Rl(e);
    for (wu(i) && (i = i.host); xt(i) && ["html", "body"].indexOf(Kt(i)) < 0;) {
        var r = Yt(i);
        if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return i;
        i = i.parentNode
    }
    return null
}

function Cu(e) {
    for (var t = _t(e), n = ls(e); n && hb(n) && Yt(n).position === "static";) n = ls(n);
    return n && (Kt(n) === "html" || Kt(n) === "body" && Yt(n).position === "static") ? t : n || vb(e) || t
}
var Gn = "top",
    ki = "bottom",
    Ro = "right",
    kn = "left",
    Tu = "auto",
    gb = [Gn, ki, Ro, kn],
    _u = "start",
    Di = "end",
    mb = [].concat(gb, [Tu]).reduce(function(e, t) {
        return e.concat([t, t + "-" + _u, t + "-" + Di])
    }, []),
    bb = "beforeRead",
    yb = "read",
    pb = "afterRead",
    wb = "beforeMain",
    xb = "main",
    Sb = "afterMain",
    Cb = "beforeWrite",
    Tb = "write",
    _b = "afterWrite",
    Xr = [bb, yb, pb, wb, xb, Sb, Cb, Tb, _b];

function Eb(e) {
    var t = new Map,
        n = new Set,
        o = [];
    e.forEach(function(r) {
        t.set(r.name, r)
    });

    function i(r) {
        n.add(r.name);
        var l = [].concat(r.requires || [], r.requiresIfExists || []);
        l.forEach(function(a) {
            if (!n.has(a)) {
                var s = t.get(a);
                s && i(s)
            }
        }), o.push(r)
    }
    return e.forEach(function(r) {
        n.has(r.name) || i(r)
    }), o
}

function Ob(e) {
    var t = Eb(e);
    return Xr.reduce(function(n, o) {
        return n.concat(t.filter(function(i) {
            return i.phase === o
        }))
    }, [])
}

function kb(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0, n(e())
            })
        })), t
    }
}

function en(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
    return [].concat(n).reduce(function(i, r) {
        return i.replace(/%s/, r)
    }, e)
}
var xn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
    Db = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
    as = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];

function Ib(e) {
    e.forEach(function(t) {
        [].concat(Object.keys(t), as).filter(function(n, o, i) {
            return i.indexOf(n) === o
        }).forEach(function(n) {
            switch (n) {
                case "name":
                    typeof t.name != "string" && console.error(en(xn, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
                    break;
                case "enabled":
                    typeof t.enabled != "boolean" && console.error(en(xn, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
                    break;
                case "phase":
                    Xr.indexOf(t.phase) < 0 && console.error(en(xn, t.name, '"phase"', "either " + Xr.join(", "), '"' + String(t.phase) + '"'));
                    break;
                case "fn":
                    typeof t.fn != "function" && console.error(en(xn, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
                    break;
                case "effect":
                    t.effect != null && typeof t.effect != "function" && console.error(en(xn, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
                    break;
                case "requires":
                    t.requires != null && !Array.isArray(t.requires) && console.error(en(xn, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
                    break;
                case "requiresIfExists":
                    Array.isArray(t.requiresIfExists) || console.error(en(xn, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
                    break;
                case "options":
                case "data":
                    break;
                default:
                    console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + as.map(function(o) {
                        return '"' + o + '"'
                    }).join(", ") + '; but "' + n + '" was provided.')
            }
            t.requires && t.requires.forEach(function(o) {
                e.find(function(i) {
                    return i.name === o
                }) == null && console.error(en(Db, String(t.name), o, o))
            })
        })
    })
}

function Ab(e, t) {
    var n = new Set;
    return e.filter(function(o) {
        var i = t(o);
        if (!n.has(i)) return n.add(i), !0
    })
}

function Xi(e) {
    return e.split("-")[0]
}

function Pb(e) {
    var t = e.reduce(function(n, o) {
        var i = n[o.name];
        return n[o.name] = i ? Object.assign({}, i, o, {
            options: Object.assign({}, i.options, o.options),
            data: Object.assign({}, i.data, o.data)
        }) : o, n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}

function Eu(e) {
    return e.split("-")[1]
}

function Bb(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function $b(e) {
    var t = e.reference,
        n = e.element,
        o = e.placement,
        i = o ? Xi(o) : null,
        r = o ? Eu(o) : null,
        l = t.x + t.width / 2 - n.width / 2,
        a = t.y + t.height / 2 - n.height / 2,
        s;
    switch (i) {
        case Gn:
            s = {
                x: l,
                y: t.y - n.height
            };
            break;
        case ki:
            s = {
                x: l,
                y: t.y + t.height
            };
            break;
        case Ro:
            s = {
                x: t.x + t.width,
                y: a
            };
            break;
        case kn:
            s = {
                x: t.x - n.width,
                y: a
            };
            break;
        default:
            s = {
                x: t.x,
                y: t.y
            }
    }
    var u = i ? Bb(i) : null;
    if (u != null) {
        var c = u === "y" ? "height" : "width";
        switch (r) {
            case _u:
                s[u] = s[u] - (t[c] / 2 - n[c] / 2);
                break;
            case Di:
                s[u] = s[u] + (t[c] / 2 - n[c] / 2);
                break
        }
    }
    return s
}
var ss = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
    Rb = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
    cs = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

function us() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}

function Mb(e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.defaultModifiers,
        o = n === void 0 ? [] : n,
        i = t.defaultOptions,
        r = i === void 0 ? cs : i;
    return function(a, s, u) {
        u === void 0 && (u = r);
        var c = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, cs, r),
                modifiersData: {},
                elements: {
                    reference: a,
                    popper: s
                },
                attributes: {},
                styles: {}
            },
            f = [],
            h = !1,
            v = {
                state: c,
                setOptions: function(x) {
                    var b = typeof x == "function" ? x(c.options) : x;
                    p(), c.options = Object.assign({}, r, c.options, b), c.scrollParents = {
                        reference: Bl(a) ? hi(a) : a.contextElement ? hi(a.contextElement) : [],
                        popper: hi(s)
                    };
                    var S = Ob(Pb([].concat(o, c.options.modifiers)));
                    c.orderedModifiers = S.filter(function(_) {
                        return _.enabled
                    }); {
                        var w = Ab([].concat(S, c.options.modifiers), function(_) {
                            var T = _.name;
                            return T
                        });
                        if (Ib(w), Xi(c.options.placement) === Tu) {
                            var E = c.orderedModifiers.find(function(_) {
                                var T = _.name;
                                return T === "flip"
                            });
                            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
                        }
                        var A = Yt(s),
                            j = A.marginTop,
                            P = A.marginRight,
                            B = A.marginBottom,
                            k = A.marginLeft;
                        [j, P, B, k].some(function(_) {
                            return parseFloat(_)
                        }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
                    }
                    return y(), v.update()
                },
                forceUpdate: function() {
                    if (!h) {
                        var x = c.elements,
                            b = x.reference,
                            S = x.popper;
                        if (!us(b, S)) {
                            console.error(ss);
                            return
                        }
                        c.rects = {
                            reference: fb(b, Cu(S), c.options.strategy === "fixed"),
                            popper: db(S)
                        }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(_) {
                            return c.modifiersData[_.name] = Object.assign({}, _.data)
                        });
                        for (var w = 0, E = 0; E < c.orderedModifiers.length; E++) {
                            if (w += 1, w > 100) {
                                console.error(Rb);
                                break
                            }
                            if (c.reset === !0) {
                                c.reset = !1, E = -1;
                                continue
                            }
                            var A = c.orderedModifiers[E],
                                j = A.fn,
                                P = A.options,
                                B = P === void 0 ? {} : P,
                                k = A.name;
                            typeof j == "function" && (c = j({
                                state: c,
                                options: B,
                                name: k,
                                instance: v
                            }) || c)
                        }
                    }
                },
                update: kb(function() {
                    return new Promise(function(m) {
                        v.forceUpdate(), m(c)
                    })
                }),
                destroy: function() {
                    p(), h = !0
                }
            };
        if (!us(a, s)) return console.error(ss), v;
        v.setOptions(u).then(function(m) {
            !h && u.onFirstUpdate && u.onFirstUpdate(m)
        });

        function y() {
            c.orderedModifiers.forEach(function(m) {
                var x = m.name,
                    b = m.options,
                    S = b === void 0 ? {} : b,
                    w = m.effect;
                if (typeof w == "function") {
                    var E = w({
                            state: c,
                            name: x,
                            instance: v,
                            options: S
                        }),
                        A = function() {};
                    f.push(E || A)
                }
            })
        }

        function p() {
            f.forEach(function(m) {
                return m()
            }), f = []
        }
        return v
    }
}
var ai = {
    passive: !0
};

function Fb(e) {
    var t = e.state,
        n = e.instance,
        o = e.options,
        i = o.scroll,
        r = i === void 0 ? !0 : i,
        l = o.resize,
        a = l === void 0 ? !0 : l,
        s = _t(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return r && u.forEach(function(c) {
            c.addEventListener("scroll", n.update, ai)
        }), a && s.addEventListener("resize", n.update, ai),
        function() {
            r && u.forEach(function(c) {
                c.removeEventListener("scroll", n.update, ai)
            }), a && s.removeEventListener("resize", n.update, ai)
        }
}
var Lb = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: Fb,
    data: {}
};

function Vb(e) {
    var t = e.state,
        n = e.name;
    t.modifiersData[n] = $b({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var Nb = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: Vb,
        data: {}
    },
    Hb = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

function zb(e) {
    var t = e.x,
        n = e.y,
        o = window,
        i = o.devicePixelRatio || 1;
    return {
        x: oo(t * i) / i || 0,
        y: oo(n * i) / i || 0
    }
}

function fs(e) {
    var t, n = e.popper,
        o = e.popperRect,
        i = e.placement,
        r = e.variation,
        l = e.offsets,
        a = e.position,
        s = e.gpuAcceleration,
        u = e.adaptive,
        c = e.roundOffsets,
        f = e.isFixed,
        h = l.x,
        v = h === void 0 ? 0 : h,
        y = l.y,
        p = y === void 0 ? 0 : y,
        m = typeof c == "function" ? c({
            x: v,
            y: p
        }) : {
            x: v,
            y: p
        };
    v = m.x, p = m.y;
    var x = l.hasOwnProperty("x"),
        b = l.hasOwnProperty("y"),
        S = kn,
        w = Gn,
        E = window;
    if (u) {
        var A = Cu(n),
            j = "clientHeight",
            P = "clientWidth";
        if (A === _t(n) && (A = Gi(n), Yt(A).position !== "static" && a === "absolute" && (j = "scrollHeight", P = "scrollWidth")), A = A, i === Gn || (i === kn || i === Ro) && r === Di) {
            w = ki;
            var B = f && A === E && E.visualViewport ? E.visualViewport.height : A[j];
            p -= B - o.height, p *= s ? 1 : -1
        }
        if (i === kn || (i === Gn || i === ki) && r === Di) {
            S = Ro;
            var k = f && A === E && E.visualViewport ? E.visualViewport.width : A[P];
            v -= k - o.width, v *= s ? 1 : -1
        }
    }
    var _ = Object.assign({
            position: a
        }, u && Hb),
        T = c === !0 ? zb({
            x: v,
            y: p
        }) : {
            x: v,
            y: p
        };
    if (v = T.x, p = T.y, s) {
        var $;
        return Object.assign({}, _, ($ = {}, $[w] = b ? "0" : "", $[S] = x ? "0" : "", $.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + p + "px)" : "translate3d(" + v + "px, " + p + "px, 0)", $))
    }
    return Object.assign({}, _, (t = {}, t[w] = b ? p + "px" : "", t[S] = x ? v + "px" : "", t.transform = "", t))
}

function jb(e) {
    var t = e.state,
        n = e.options,
        o = n.gpuAcceleration,
        i = o === void 0 ? !0 : o,
        r = n.adaptive,
        l = r === void 0 ? !0 : r,
        a = n.roundOffsets,
        s = a === void 0 ? !0 : a; {
        var u = Yt(t.elements.popper).transitionProperty || "";
        l && ["transform", "top", "right", "bottom", "left"].some(function(f) {
            return u.indexOf(f) >= 0
        }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "))
    }
    var c = {
        placement: Xi(t.placement),
        variation: Eu(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, fs(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: l,
        roundOffsets: s
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, fs(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: s
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var Wb = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: jb,
    data: {}
};

function Ub(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var o = t.styles[n] || {},
            i = t.attributes[n] || {},
            r = t.elements[n];
        !xt(r) || !Kt(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(l) {
            var a = i[l];
            a === !1 ? r.removeAttribute(l) : r.setAttribute(l, a === !0 ? "" : a)
        }))
    })
}

function Kb(e) {
    var t = e.state,
        n = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() {
            Object.keys(t.elements).forEach(function(o) {
                var i = t.elements[o],
                    r = t.attributes[o] || {},
                    l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
                    a = l.reduce(function(s, u) {
                        return s[u] = "", s
                    }, {});
                !xt(i) || !Kt(i) || (Object.assign(i.style, a), Object.keys(r).forEach(function(s) {
                    i.removeAttribute(s)
                }))
            })
        }
}
var Yb = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: Ub,
        effect: Kb,
        requires: ["computeStyles"]
    },
    qb = [Lb, Nb, Wb, Yb],
    Gb = Mb({
        defaultModifiers: qb
    });

function Xb(e, t, n) {
    var o = Xi(e),
        i = [kn, Gn].indexOf(o) >= 0 ? -1 : 1,
        r = typeof n == "function" ? n(Object.assign({}, t, {
            placement: e
        })) : n,
        l = r[0],
        a = r[1];
    return l = l || 0, a = (a || 0) * i, [kn, Ro].indexOf(o) >= 0 ? {
        x: a,
        y: l
    } : {
        x: l,
        y: a
    }
}

function Zb(e) {
    var t = e.state,
        n = e.options,
        o = e.name,
        i = n.offset,
        r = i === void 0 ? [0, 0] : i,
        l = mb.reduce(function(c, f) {
            return c[f] = Xb(f, t.rects, r), c
        }, {}),
        a = l[t.placement],
        s = a.x,
        u = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = l
}
var Jb = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Zb
};
const [Qb, Sn] = ce("popover"), ey = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"], ty = {
    show: Boolean,
    theme: se("light"),
    overlay: Boolean,
    actions: fn(),
    actionsDirection: se("vertical"),
    trigger: se("click"),
    duration: ne,
    showArrow: Q,
    placement: se("bottom"),
    iconPrefix: String,
    overlayClass: He,
    overlayStyle: Object,
    closeOnClickAction: Q,
    closeOnClickOverlay: Q,
    closeOnClickOutside: Q,
    offset: {
        type: Array,
        default: () => [0, 8]
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var ny = le({
    name: Qb,
    props: ty,
    emits: ["select", "touchstart", "update:show"],
    setup(e, {
        emit: t,
        slots: n,
        attrs: o
    }) {
        let i;
        const r = H(),
            l = H(),
            a = H(),
            s = zv(() => e.show, b => t("update:show", b)),
            u = () => ({
                placement: e.placement,
                modifiers: [{
                    name: "computeStyles",
                    options: {
                        adaptive: !1,
                        gpuAcceleration: !1
                    }
                }, ye({}, Jb, {
                    options: {
                        offset: e.offset
                    }
                })]
            }),
            c = () => l.value && a.value ? Gb(l.value, a.value.popupRef.value, u()) : null,
            f = () => {
                Te(() => {
                    s.value && (i ? i.setOptions(u()) : (i = c(), Pt && (window.addEventListener("animationend", f), window.addEventListener("transitionend", f))))
                })
            },
            h = b => {
                s.value = b
            },
            v = () => {
                e.trigger === "click" && (s.value = !s.value)
            },
            y = (b, S) => {
                b.disabled || (t("select", b, S), e.closeOnClickAction && (s.value = !1))
            },
            p = () => {
                s.value && e.closeOnClickOutside && (!e.overlay || e.closeOnClickOverlay) && (s.value = !1)
            },
            m = (b, S) => n.action ? n.action({
                action: b,
                index: S
            }) : [b.icon && d(Me, {
                name: b.icon,
                classPrefix: e.iconPrefix,
                class: Sn("action-icon")
            }, null), d("div", {
                class: [Sn("action-text"), {
                    [Lh]: e.actionsDirection === "vertical"
                }]
            }, [b.text])],
            x = (b, S) => {
                const {
                    icon: w,
                    color: E,
                    disabled: A,
                    className: j
                } = b;
                return d("div", {
                    role: "menuitem",
                    class: [Sn("action", {
                        disabled: A,
                        "with-icon": w
                    }), {
                        [Fh]: e.actionsDirection === "horizontal"
                    }, j],
                    style: {
                        color: E
                    },
                    tabindex: A ? void 0 : 0,
                    "aria-disabled": A || void 0,
                    onClick: () => y(b, S)
                }, [m(b, S)])
            };
        return qe(() => {
            f(), Vi(() => {
                var b;
                r.value = (b = a.value) == null ? void 0 : b.popupRef.value
            })
        }), Tt(() => {
            i && (Pt && (window.removeEventListener("animationend", f), window.removeEventListener("transitionend", f)), i.destroy(), i = null)
        }), oe(() => [s.value, e.offset, e.placement], f), Ac([l, r], p, {
            eventName: "touchstart"
        }), () => {
            var b;
            return d(Ze, null, [d("span", {
                ref: l,
                class: Sn("wrapper"),
                onClick: v
            }, [(b = n.reference) == null ? void 0 : b.call(n)]), d(Uo, $e({
                ref: a,
                show: s.value,
                class: Sn([e.theme]),
                position: "",
                transition: "van-popover-zoom",
                lockScroll: !1,
                "onUpdate:show": h
            }, o, jr(), Fe(e, ey)), {
                default: () => [e.showArrow && d("div", {
                    class: Sn("arrow")
                }, null), d("div", {
                    role: "menu",
                    class: Sn("content", e.actionsDirection)
                }, [n.default ? n.default() : e.actions.map(x)])]
            })])
        }
    }
});
const Op = ge(ny),
    [oy, wr] = ce("progress"),
    iy = {
        color: String,
        inactive: Boolean,
        pivotText: String,
        textColor: String,
        showPivot: Q,
        pivotColor: String,
        trackColor: String,
        strokeWidth: ne,
        percentage: {
            type: ne,
            default: 0,
            validator: e => +e >= 0 && +e <= 100
        }
    };
var ry = le({
    name: oy,
    props: iy,
    setup(e) {
        const t = W(() => e.inactive ? void 0 : e.color),
            n = () => {
                const {
                    textColor: o,
                    pivotText: i,
                    pivotColor: r,
                    percentage: l
                } = e, a = i ? ? `${l}%`;
                if (e.showPivot && a) {
                    const s = {
                        color: o,
                        left: `${+l}%`,
                        transform: `translate(-${+l}%,-50%)`,
                        background: r || t.value
                    };
                    return d("span", {
                        style: s,
                        class: wr("pivot", {
                            inactive: e.inactive
                        })
                    }, [a])
                }
            };
        return () => {
            const {
                trackColor: o,
                percentage: i,
                strokeWidth: r
            } = e, l = {
                background: o,
                height: Ce(r)
            }, a = {
                width: `${i}%`,
                background: t.value
            };
            return d("div", {
                class: wr(),
                style: l
            }, [d("span", {
                class: wr("portion", {
                    inactive: e.inactive
                }),
                style: a
            }, null), n()])
        }
    }
});
const kp = ge(ry),
    [ly, po, ay] = ce("pull-refresh"),
    Ou = 50,
    sy = ["pulling", "loosing", "success"],
    cy = {
        disabled: Boolean,
        modelValue: Boolean,
        headHeight: xe(Ou),
        successText: String,
        pullingText: String,
        loosingText: String,
        loadingText: String,
        pullDistance: ne,
        successDuration: xe(500),
        animationDuration: xe(300)
    };
var uy = le({
    name: ly,
    props: cy,
    emits: ["change", "refresh", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        let o;
        const i = H(),
            r = H(),
            l = ji(i),
            a = Ke({
                status: "normal",
                distance: 0,
                duration: 0
            }),
            s = $n(),
            u = () => {
                if (e.headHeight !== Ou) return {
                    height: `${e.headHeight}px`
                }
            },
            c = () => a.status !== "loading" && a.status !== "success" && !e.disabled,
            f = w => {
                const E = +(e.pullDistance || e.headHeight);
                return w > E && (w < E * 2 ? w = E + (w - E) / 2 : w = E * 1.5 + (w - E * 2) / 4), Math.round(w)
            },
            h = (w, E) => {
                const A = +(e.pullDistance || e.headHeight);
                a.distance = w, E ? a.status = "loading" : w === 0 ? a.status = "normal" : w < A ? a.status = "pulling" : a.status = "loosing", t("change", {
                    status: a.status,
                    distance: w
                })
            },
            v = () => {
                const {
                    status: w
                } = a;
                return w === "normal" ? "" : e[`${w}Text`] || ay(w)
            },
            y = () => {
                const {
                    status: w,
                    distance: E
                } = a;
                if (n[w]) return n[w]({
                    distance: E
                });
                const A = [];
                return sy.includes(w) && A.push(d("div", {
                    class: po("text")
                }, [v()])), w === "loading" && A.push(d(Zt, {
                    class: po("loading")
                }, {
                    default: v
                })), A
            },
            p = () => {
                a.status = "success", setTimeout(() => {
                    h(0)
                }, +e.successDuration)
            },
            m = w => {
                o = jo(l.value) === 0, o && (a.duration = 0, s.start(w))
            },
            x = w => {
                c() && m(w)
            },
            b = w => {
                if (c()) {
                    o || m(w);
                    const {
                        deltaY: E
                    } = s;
                    s.move(w), o && E.value >= 0 && s.isVertical() && (rt(w), h(f(E.value)))
                }
            },
            S = () => {
                o && s.deltaY.value && c() && (a.duration = +e.animationDuration, a.status === "loosing" ? (h(+e.headHeight, !0), t("update:modelValue", !0), Te(() => t("refresh"))) : h(0))
            };
        return oe(() => e.modelValue, w => {
            a.duration = +e.animationDuration, w ? h(+e.headHeight, !0) : n.success || e.successText ? p() : h(0, !1)
        }), lt("touchmove", b, {
            target: r
        }), () => {
            var w;
            const E = {
                transitionDuration: `${a.duration}ms`,
                transform: a.distance ? `translate3d(0,${a.distance}px, 0)` : ""
            };
            return d("div", {
                ref: i,
                class: po()
            }, [d("div", {
                ref: r,
                class: po("track"),
                style: E,
                onTouchstartPassive: x,
                onTouchend: S,
                onTouchcancel: S
            }, [d("div", {
                class: po("head"),
                style: u()
            }, [y()]), (w = n.default) == null ? void 0 : w.call(n)])])
        }
    }
});
const Dp = ge(uy),
    [fy, dy] = ce("skeleton-title"),
    hy = {
        round: Boolean,
        titleWidth: ne
    };
var vy = le({
    name: fy,
    props: hy,
    setup(e) {
        return () => d("h3", {
            class: dy([{
                round: e.round
            }]),
            style: {
                width: Ce(e.titleWidth)
            }
        }, null)
    }
});
const gy = ge(vy);
var my = gy;
const [by, yy] = ce("skeleton-avatar"), py = {
    avatarSize: ne,
    avatarShape: se("round")
};
var wy = le({
    name: by,
    props: py,
    setup(e) {
        return () => d("div", {
            class: yy([e.avatarShape]),
            style: so(e.avatarSize)
        }, null)
    }
});
const xy = ge(wy);
var Sy = xy;
const Ml = "100%",
    Cy = {
        round: Boolean,
        rowWidth: {
            type: ne,
            default: Ml
        }
    },
    [Ty, _y] = ce("skeleton-paragraph");
var Ey = le({
    name: Ty,
    props: Cy,
    setup(e) {
        return () => d("div", {
            class: _y([{
                round: e.round
            }]),
            style: {
                width: e.rowWidth
            }
        }, null)
    }
});
const Oy = ge(Ey);
var ky = Oy;
const [Dy, ds] = ce("skeleton"), Iy = "60%", Ay = {
    row: xe(0),
    round: Boolean,
    title: Boolean,
    titleWidth: ne,
    avatar: Boolean,
    avatarSize: ne,
    avatarShape: se("round"),
    loading: Q,
    animate: Q,
    rowWidth: {
        type: [Number, String, Array],
        default: Ml
    }
};
var Py = le({
    name: Dy,
    inheritAttrs: !1,
    props: Ay,
    setup(e, {
        slots: t,
        attrs: n
    }) {
        const o = () => {
                if (e.avatar) return d(Sy, {
                    avatarShape: e.avatarShape,
                    avatarSize: e.avatarSize
                }, null)
            },
            i = () => {
                if (e.title) return d(my, {
                    round: e.round,
                    titleWidth: e.titleWidth
                }, null)
            },
            r = s => {
                const {
                    rowWidth: u
                } = e;
                return u === Ml && s === +e.row - 1 ? Iy : Array.isArray(u) ? u[s] : u
            },
            l = () => Array(+e.row).fill("").map((s, u) => d(ky, {
                key: u,
                round: e.round,
                rowWidth: Ce(r(u))
            }, null)),
            a = () => t.template ? t.template() : d(Ze, null, [o(), d("div", {
                class: ds("content")
            }, [i(), l()])]);
        return () => {
            var s;
            return e.loading ? d("div", $e({
                class: ds({
                    animate: e.animate,
                    round: e.round
                })
            }, n), [a()]) : (s = t.default) == null ? void 0 : s.call(t)
        }
    }
});
const Ip = ge(Py),
    [By, hs] = ce("skeleton-image"),
    $y = {
        imageSize: ne,
        imageShape: se("square")
    };
var Ry = le({
    name: By,
    props: $y,
    setup(e) {
        return () => d("div", {
            class: hs([e.imageShape]),
            style: so(e.imageSize)
        }, [d(Me, {
            name: "photo",
            class: hs("icon")
        }, null)])
    }
});
const Ap = ge(Ry),
    [My, Ve, Fy] = ce("uploader");

function vs(e, t) {
    return new Promise(n => {
        if (t === "file") {
            n();
            return
        }
        const o = new FileReader;
        o.onload = i => {
            n(i.target.result)
        }, t === "dataUrl" ? o.readAsDataURL(e) : t === "text" && o.readAsText(e)
    })
}

function ku(e, t) {
    return Ti(e).some(n => n.file ? eo(t) ? t(n.file) : n.file.size > +t : !1)
}

function Ly(e, t) {
    const n = [],
        o = [];
    return e.forEach(i => {
        ku(i, t) ? o.push(i) : n.push(i)
    }), {
        valid: n,
        invalid: o
    }
}
const Vy = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
    Ny = e => Vy.test(e);

function Du(e) {
    return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? Ny(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var Hy = le({
    props: {
        name: ne,
        item: tt(Object),
        index: Number,
        imageFit: String,
        lazyLoad: Boolean,
        deletable: Boolean,
        reupload: Boolean,
        previewSize: [Number, String, Array],
        beforeDelete: Function
    },
    emits: ["delete", "preview", "reupload"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = () => {
                const {
                    status: c,
                    message: f
                } = e.item;
                if (c === "uploading" || c === "failed") {
                    const h = c === "failed" ? d(Me, {
                            name: "close",
                            class: Ve("mask-icon")
                        }, null) : d(Zt, {
                            class: Ve("loading")
                        }, null),
                        v = Be(f) && f !== "";
                    return d("div", {
                        class: Ve("mask")
                    }, [h, v && d("div", {
                        class: Ve("mask-message")
                    }, [f])])
                }
            },
            i = c => {
                const {
                    name: f,
                    item: h,
                    index: v,
                    beforeDelete: y
                } = e;
                c.stopPropagation(), Wo(y, {
                    args: [h, {
                        name: f,
                        index: v
                    }],
                    done: () => t("delete")
                })
            },
            r = () => t("preview"),
            l = () => t("reupload"),
            a = () => {
                if (e.deletable && e.item.status !== "uploading") {
                    const c = n["preview-delete"];
                    return d("div", {
                        role: "button",
                        class: Ve("preview-delete", {
                            shadow: !c
                        }),
                        tabindex: 0,
                        "aria-label": Fy("delete"),
                        onClick: i
                    }, [c ? c() : d(Me, {
                        name: "cross",
                        class: Ve("preview-delete-icon")
                    }, null)])
                }
            },
            s = () => {
                if (n["preview-cover"]) {
                    const {
                        index: c,
                        item: f
                    } = e;
                    return d("div", {
                        class: Ve("preview-cover")
                    }, [n["preview-cover"](ye({
                        index: c
                    }, f))])
                }
            },
            u = () => {
                const {
                    item: c,
                    lazyLoad: f,
                    imageFit: h,
                    previewSize: v,
                    reupload: y
                } = e;
                return Du(c) ? d(bu, {
                    fit: h,
                    src: c.objectUrl || c.content || c.url,
                    class: Ve("preview-image"),
                    width: Array.isArray(v) ? v[0] : v,
                    height: Array.isArray(v) ? v[1] : v,
                    lazyLoad: f,
                    onClick: y ? l : r
                }, {
                    default: s
                }) : d("div", {
                    class: Ve("file"),
                    style: so(e.previewSize)
                }, [d(Me, {
                    class: Ve("file-icon"),
                    name: "description"
                }, null), d("div", {
                    class: [Ve("file-name"), "van-ellipsis"]
                }, [c.file ? c.file.name : c.url]), s()])
            };
        return () => d("div", {
            class: Ve("preview")
        }, [u(), o(), a()])
    }
});
const zy = {
    name: xe(""),
    accept: se("image/*"),
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    lazyLoad: Boolean,
    maxCount: xe(1 / 0),
    imageFit: se("cover"),
    resultType: se("dataUrl"),
    uploadIcon: se("photograph"),
    uploadText: String,
    deletable: Q,
    reupload: Boolean,
    afterRead: Function,
    showUpload: Q,
    modelValue: fn(),
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String, Array],
    previewImage: Q,
    previewOptions: Object,
    previewFullImage: Q,
    maxSize: {
        type: [Number, String, Function],
        default: 1 / 0
    }
};
var jy = le({
    name: My,
    props: zy,
    emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "clickReupload", "update:modelValue"],
    setup(e, {
        emit: t,
        slots: n
    }) {
        const o = H(),
            i = [],
            r = H(-1),
            l = H(!1),
            a = (P = e.modelValue.length) => ({
                name: e.name,
                index: P
            }),
            s = () => {
                o.value && (o.value.value = "")
            },
            u = P => {
                if (s(), ku(P, e.maxSize))
                    if (Array.isArray(P)) {
                        const B = Ly(P, e.maxSize);
                        if (P = B.valid, t("oversize", B.invalid, a()), !P.length) return
                    } else {
                        t("oversize", P, a());
                        return
                    }
                if (P = Ke(P), r.value > -1) {
                    const B = [...e.modelValue];
                    B.splice(r.value, 1, P), t("update:modelValue", B), r.value = -1
                } else t("update:modelValue", [...e.modelValue, ...Ti(P)]);
                e.afterRead && e.afterRead(P, a())
            },
            c = P => {
                const {
                    maxCount: B,
                    modelValue: k,
                    resultType: _
                } = e;
                if (Array.isArray(P)) {
                    const T = +B - k.length;
                    P.length > T && (P = P.slice(0, T)), Promise.all(P.map($ => vs($, _))).then($ => {
                        const ie = P.map((me, z) => {
                            const G = {
                                file: me,
                                status: "",
                                message: "",
                                objectUrl: URL.createObjectURL(me)
                            };
                            return $[z] && (G.content = $[z]), G
                        });
                        u(ie)
                    })
                } else vs(P, _).then(T => {
                    const $ = {
                        file: P,
                        status: "",
                        message: "",
                        objectUrl: URL.createObjectURL(P)
                    };
                    T && ($.content = T), u($)
                })
            },
            f = P => {
                const {
                    files: B
                } = P.target;
                if (e.disabled || !B || !B.length) return;
                const k = B.length === 1 ? B[0] : [].slice.call(B);
                if (e.beforeRead) {
                    const _ = e.beforeRead(k, a());
                    if (!_) {
                        s();
                        return
                    }
                    if (pl(_)) {
                        _.then(T => {
                            c(T || k)
                        }).catch(s);
                        return
                    }
                }
                c(k)
            };
        let h;
        const v = () => t("closePreview"),
            y = P => {
                if (e.previewFullImage) {
                    const B = e.modelValue.filter(Du),
                        k = B.map(_ => (_.objectUrl && !_.url && _.status !== "failed" && (_.url = _.objectUrl, i.push(_.url)), _.url)).filter(Boolean);
                    h = zm(ye({
                        images: k,
                        startPosition: B.indexOf(P),
                        onClose: v
                    }, e.previewOptions))
                }
            },
            p = () => {
                h && h.close()
            },
            m = (P, B) => {
                const k = e.modelValue.slice(0);
                k.splice(B, 1), t("update:modelValue", k), t("delete", P, a(B))
            },
            x = P => {
                l.value = !0, r.value = P, Te(() => j())
            },
            b = () => {
                l.value || (r.value = -1), l.value = !1
            },
            S = (P, B) => {
                const k = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"],
                    _ = ye(Fe(e, k), Fe(P, k, !0));
                return d(Hy, $e({
                    item: P,
                    index: B,
                    onClick: () => t(e.reupload ? "clickReupload" : "clickPreview", P, a(B)),
                    onDelete: () => m(P, B),
                    onPreview: () => y(P),
                    onReupload: () => x(B)
                }, Fe(e, ["name", "lazyLoad"]), _), Fe(n, ["preview-cover", "preview-delete"]))
            },
            w = () => {
                if (e.previewImage) return e.modelValue.map(S)
            },
            E = P => t("clickUpload", P),
            A = () => {
                const P = e.modelValue.length < +e.maxCount,
                    B = e.readonly ? null : d("input", {
                        ref: o,
                        type: "file",
                        class: Ve("input"),
                        accept: e.accept,
                        capture: e.capture,
                        multiple: e.multiple && r.value === -1,
                        disabled: e.disabled,
                        onChange: f,
                        onClick: b
                    }, null);
                return n.default ? Wt(d("div", {
                    class: Ve("input-wrapper"),
                    onClick: E
                }, [n.default(), B]), [
                    [cn, P]
                ]) : Wt(d("div", {
                    class: Ve("upload", {
                        readonly: e.readonly
                    }),
                    style: so(e.previewSize),
                    onClick: E
                }, [d(Me, {
                    name: e.uploadIcon,
                    class: Ve("upload-icon")
                }, null), e.uploadText && d("span", {
                    class: Ve("upload-text")
                }, [e.uploadText]), B]), [
                    [cn, e.showUpload && P]
                ])
            },
            j = () => {
                o.value && !e.disabled && o.value.click()
            };
        return Tt(() => {
            i.forEach(P => URL.revokeObjectURL(P))
        }), Le({
            chooseFile: j,
            reuploadFile: x,
            closeImagePreview: p
        }), Wi(() => e.modelValue), () => d("div", {
            class: Ve()
        }, [d("div", {
            class: Ve("wrapper", {
                disabled: e.disabled
            })
        }, [w(), A()])])
    }
});
const Pp = ge(jy);
export {
    gp as $, Qy as A, yl as B, Gy as C, xc as D, Xy as E, Ze as F, Ri as G, Wt as H, cn as I, vn as J, Yy as K, Ph as L, np as M, Fi as N, Ff as O, Ca as P, Ei as Q, Uo as R, Me as S, Hi as T, bu as U, Zt as V, Cp as W, Op as X, ap as Y, fp as Z, yp as _, Vo as a, Uc as a0, op as a1, ip as a2, Ov as a3, Dp as a4, Pp as a5, lp as a6, bp as a7, pp as a8, Ep as a9, Gt as aA, Zy as aB, $i as aC, tp as aD, zm as aE, _p as aa, mp as ab, Xv as ac, xp as ad, Ip as ae, gy as af, Ap as ag, xy as ah, Oy as ai, up as aj, dp as ak, vp as al, Tp as am, kp as an, ou as ao, au as ap, sp as aq, cp as ar, wp as as, Sp as at, fl as au, Tt as av, tc as aw, Ky as ax, rh as ay, Jy as az, Af as b, W as c, le as d, Wy as e, Ye as f, yt as g, Cd as h, Ht as i, d as j, df as k, Ke as l, qy as m, Te as n, qe as o, lo as p, Pr as q, H as r, Uy as s, Br as t, Xn as u, Cf as v, oe as w, Sc as x, Uu as y, ep as z
};