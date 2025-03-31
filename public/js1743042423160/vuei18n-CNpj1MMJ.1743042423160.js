import {
    d as At,
    h as Ln,
    c as ce,
    w as gt,
    F as Nn,
    e as Jn,
    i as Qn,
    o as qn,
    a as Zn,
    s as Tn,
    r as Ce,
    b as zn,
    f as ea,
    g as qe,
    j as ta,
    T as na
} from "./vant-HuvvDBy8.1743042423160.js";
/*!
 * shared v9.14.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const st = typeof window < "u",
    ge = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
    aa = (e, t, n) => ra({
        l: e,
        k: t,
        s: n
    }),
    ra = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    K = e => typeof e == "number" && isFinite(e),
    la = e => bn(e) === "[object Date]",
    Ee = e => bn(e) === "[object RegExp]",
    ct = e => F(e) && Object.keys(e).length === 0,
    q = Object.assign,
    sa = Object.create,
    H = (e = null) => sa(e);
let wt;
const _e = () => wt || (wt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : H());

function Ut(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const oa = Object.prototype.hasOwnProperty;

function le(e, t) {
    return oa.call(e, t)
}
const x = Array.isArray,
    G = e => typeof e == "function",
    p = e => typeof e == "string",
    U = e => typeof e == "boolean",
    V = e => e !== null && typeof e == "object",
    ca = e => V(e) && G(e.then) && G(e.catch),
    In = Object.prototype.toString,
    bn = e => In.call(e),
    F = e => {
        if (!V(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return t === null || t.constructor === Object
    },
    ia = e => e == null ? "" : x(e) || F(e) && e.toString === In ? JSON.stringify(e, null, 2) : String(e);

function ua(e, t = "") {
    return e.reduce((n, r, l) => l === 0 ? n + r : n + t + r, "")
}

function it(e) {
    let t = e;
    return () => ++t
}

function fa(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const at = e => !V(e) || x(e);

function lt(e, t) {
    if (at(e) || at(t)) throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length;) {
        const {
            src: r,
            des: l
        } = n.pop();
        Object.keys(r).forEach(a => {
            a !== "__proto__" && (V(r[a]) && !V(l[a]) && (l[a] = Array.isArray(r[a]) ? [] : H()), at(l[a]) || at(r[a]) ? l[a] = r[a] : n.push({
                src: r[a],
                des: l[a]
            }))
        })
    }
}
/*!
 * message-compiler v9.14.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function _a(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}

function ot(e, t, n) {
    return {
        start: e,
        end: t
    }
}
const ma = /\{([0-9a-zA-Z]+)\}/g;

function hn(e, ...t) {
    return t.length === 1 && da(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(ma, (n, r) => t.hasOwnProperty(r) ? t[r] : "")
}
const On = Object.assign,
    Wt = e => typeof e == "string",
    da = e => e !== null && typeof e == "object";

function pn(e, t = "") {
    return e.reduce((n, r, l) => l === 0 ? n + r : n + t + r, "")
}
const Ct = {
        USE_MODULO_SYNTAX: 1,
        __EXTEND_POINT__: 2
    },
    Ea = {
        [Ct.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
    };

function ga(e, t, ...n) {
    const r = hn(Ea[e], ...n || []),
        l = {
            message: String(r),
            code: e
        };
    return t && (l.location = t), l
}
const D = {
        EXPECTED_TOKEN: 1,
        INVALID_TOKEN_IN_PLACEHOLDER: 2,
        UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
        UNKNOWN_ESCAPE_SEQUENCE: 4,
        INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
        UNBALANCED_CLOSING_BRACE: 6,
        UNTERMINATED_CLOSING_BRACE: 7,
        EMPTY_PLACEHOLDER: 8,
        NOT_ALLOW_NEST_PLACEHOLDER: 9,
        INVALID_LINKED_FORMAT: 10,
        MUST_HAVE_MESSAGES_IN_PLURAL: 11,
        UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
        UNEXPECTED_EMPTY_LINKED_KEY: 13,
        UNEXPECTED_LEXICAL_ANALYSIS: 14,
        UNHANDLED_CODEGEN_NODE_TYPE: 15,
        UNHANDLED_MINIFIER_NODE_TYPE: 16,
        __EXTEND_POINT__: 17
    },
    La = {
        [D.EXPECTED_TOKEN]: "Expected token: '{0}'",
        [D.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
        [D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
        [D.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
        [D.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
        [D.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
        [D.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
        [D.EMPTY_PLACEHOLDER]: "Empty placeholder",
        [D.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
        [D.INVALID_LINKED_FORMAT]: "Invalid linked format",
        [D.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
        [D.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
        [D.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
        [D.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
        [D.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
        [D.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
    };

function Fe(e, t, n = {}) {
    const {
        domain: r,
        messages: l,
        args: a
    } = n, s = hn((l || La)[e] || "", ...a || []), i = new SyntaxError(String(s));
    return i.code = e, t && (i.location = t), i.domain = r, i
}

function Na(e) {
    throw e
}
const ue = " ",
    Ta = "\r",
    z = `
`,
    Ia = "\u2028",
    ba = "\u2029";

function ha(e) {
    const t = e;
    let n = 0,
        r = 1,
        l = 1,
        a = 0;
    const s = O => t[O] === Ta && t[O + 1] === z,
        i = O => t[O] === z,
        u = O => t[O] === ba,
        _ = O => t[O] === Ia,
        I = O => s(O) || i(O) || u(O) || _(O),
        T = () => n,
        g = () => r,
        v = () => l,
        k = () => a,
        y = O => s(O) || u(O) || _(O) ? z : t[O],
        A = () => y(n),
        C = () => y(n + a);

    function w() {
        return a = 0, I(n) && (r++, l = 0), s(n) && n++, n++, l++, t[n]
    }

    function m() {
        return s(n + a) && a++, a++, t[n + a]
    }

    function d() {
        n = 0, r = 1, l = 1, a = 0
    }

    function b(O = 0) {
        a = O
    }

    function L() {
        const O = n + a;
        for (; O !== n;) w();
        a = 0
    }
    return {
        index: T,
        line: g,
        column: v,
        peekOffset: k,
        charAt: y,
        currentChar: A,
        currentPeek: C,
        next: w,
        peek: m,
        reset: d,
        resetPeek: b,
        skipToPeek: L
    }
}
const de = void 0,
    Oa = ".",
    Vt = "'",
    pa = "tokenizer";

function va(e, t = {}) {
    const n = t.location !== !1,
        r = ha(e),
        l = () => r.index(),
        a = () => _a(r.line(), r.column(), r.index()),
        s = a(),
        i = l(),
        u = {
            currentType: 14,
            offset: i,
            startLoc: s,
            endLoc: s,
            lastType: 14,
            lastOffset: i,
            lastStartLoc: s,
            lastEndLoc: s,
            braceNest: 0,
            inLinked: !1,
            text: ""
        },
        _ = () => u,
        {
            onError: I
        } = t;

    function T(o, c, E, ...R) {
        const X = _();
        if (c.column += E, c.offset += E, I) {
            const M = n ? ot(X.startLoc, c) : null,
                f = Fe(o, M, {
                    domain: pa,
                    args: R
                });
            I(f)
        }
    }

    function g(o, c, E) {
        o.endLoc = a(), o.currentType = c;
        const R = {
            type: c
        };
        return n && (R.loc = ot(o.startLoc, o.endLoc)), E != null && (R.value = E), R
    }
    const v = o => g(o, 14);

    function k(o, c) {
        return o.currentChar() === c ? (o.next(), c) : (T(D.EXPECTED_TOKEN, a(), 0, c), "")
    }

    function y(o) {
        let c = "";
        for (; o.currentPeek() === ue || o.currentPeek() === z;) c += o.currentPeek(), o.peek();
        return c
    }

    function A(o) {
        const c = y(o);
        return o.skipToPeek(), c
    }

    function C(o) {
        if (o === de) return !1;
        const c = o.charCodeAt(0);
        return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c === 95
    }

    function w(o) {
        if (o === de) return !1;
        const c = o.charCodeAt(0);
        return c >= 48 && c <= 57
    }

    function m(o, c) {
        const {
            currentType: E
        } = c;
        if (E !== 2) return !1;
        y(o);
        const R = C(o.currentPeek());
        return o.resetPeek(), R
    }

    function d(o, c) {
        const {
            currentType: E
        } = c;
        if (E !== 2) return !1;
        y(o);
        const R = o.currentPeek() === "-" ? o.peek() : o.currentPeek(),
            X = w(R);
        return o.resetPeek(), X
    }

    function b(o, c) {
        const {
            currentType: E
        } = c;
        if (E !== 2) return !1;
        y(o);
        const R = o.currentPeek() === Vt;
        return o.resetPeek(), R
    }

    function L(o, c) {
        const {
            currentType: E
        } = c;
        if (E !== 8) return !1;
        y(o);
        const R = o.currentPeek() === ".";
        return o.resetPeek(), R
    }

    function O(o, c) {
        const {
            currentType: E
        } = c;
        if (E !== 9) return !1;
        y(o);
        const R = C(o.currentPeek());
        return o.resetPeek(), R
    }

    function S(o, c) {
        const {
            currentType: E
        } = c;
        if (!(E === 8 || E === 12)) return !1;
        y(o);
        const R = o.currentPeek() === ":";
        return o.resetPeek(), R
    }

    function P(o, c) {
        const {
            currentType: E
        } = c;
        if (E !== 10) return !1;
        const R = () => {
                const M = o.currentPeek();
                return M === "{" ? C(o.peek()) : M === "@" || M === "%" || M === "|" || M === ":" || M === "." || M === ue || !M ? !1 : M === z ? (o.peek(), R()) : W(o, !1)
            },
            X = R();
        return o.resetPeek(), X
    }

    function B(o) {
        y(o);
        const c = o.currentPeek() === "|";
        return o.resetPeek(), c
    }

    function te(o) {
        const c = y(o),
            E = o.currentPeek() === "%" && o.peek() === "{";
        return o.resetPeek(), {
            isModulo: E,
            hasSpace: c.length > 0
        }
    }

    function W(o, c = !0) {
        const E = (X = !1, M = "", f = !1) => {
                const N = o.currentPeek();
                return N === "{" ? M === "%" ? !1 : X : N === "@" || !N ? M === "%" ? !0 : X : N === "%" ? (o.peek(), E(X, "%", !0)) : N === "|" ? M === "%" || f ? !0 : !(M === ue || M === z) : N === ue ? (o.peek(), E(!0, ue, f)) : N === z ? (o.peek(), E(!0, z, f)) : !0
            },
            R = E();
        return c && o.resetPeek(), R
    }

    function Z(o, c) {
        const E = o.currentChar();
        return E === de ? de : c(E) ? (o.next(), E) : null
    }

    function Me(o) {
        const c = o.charCodeAt(0);
        return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95 || c === 36
    }

    function we(o) {
        return Z(o, Me)
    }

    function oe(o) {
        const c = o.charCodeAt(0);
        return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95 || c === 36 || c === 45
    }

    function Ue(o) {
        return Z(o, oe)
    }

    function We(o) {
        const c = o.charCodeAt(0);
        return c >= 48 && c <= 57
    }

    function Ve(o) {
        return Z(o, We)
    }

    function $e(o) {
        const c = o.charCodeAt(0);
        return c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102
    }

    function ae(o) {
        return Z(o, $e)
    }

    function Te(o) {
        let c = "",
            E = "";
        for (; c = Ve(o);) E += c;
        return E
    }

    function He(o) {
        A(o);
        const c = o.currentChar();
        return c !== "%" && T(D.EXPECTED_TOKEN, a(), 0, c), o.next(), "%"
    }

    function he(o) {
        let c = "";
        for (;;) {
            const E = o.currentChar();
            if (E === "{" || E === "}" || E === "@" || E === "|" || !E) break;
            if (E === "%")
                if (W(o)) c += E, o.next();
                else break;
            else if (E === ue || E === z)
                if (W(o)) c += E, o.next();
                else {
                    if (B(o)) break;
                    c += E, o.next()
                }
            else c += E, o.next()
        }
        return c
    }

    function Ye(o) {
        A(o);
        let c = "",
            E = "";
        for (; c = Ue(o);) E += c;
        return o.currentChar() === de && T(D.UNTERMINATED_CLOSING_BRACE, a(), 0), E
    }

    function Ge(o) {
        A(o);
        let c = "";
        return o.currentChar() === "-" ? (o.next(), c += `-${Te(o)}`) : c += Te(o), o.currentChar() === de && T(D.UNTERMINATED_CLOSING_BRACE, a(), 0), c
    }

    function tt(o) {
        return o !== Vt && o !== z
    }

    function xe(o) {
        A(o), k(o, "'");
        let c = "",
            E = "";
        for (; c = Z(o, tt);) c === "\\" ? E += Xe(o) : E += c;
        const R = o.currentChar();
        return R === z || R === de ? (T(D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), R === z && (o.next(), k(o, "'")), E) : (k(o, "'"), E)
    }

    function Xe(o) {
        const c = o.currentChar();
        switch (c) {
            case "\\":
            case "'":
                return o.next(), `\\${c}`;
            case "u":
                return Oe(o, c, 4);
            case "U":
                return Oe(o, c, 6);
            default:
                return T(D.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, c), ""
        }
    }

    function Oe(o, c, E) {
        k(o, c);
        let R = "";
        for (let X = 0; X < E; X++) {
            const M = ae(o);
            if (!M) {
                T(D.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${c}${R}${o.currentChar()}`);
                break
            }
            R += M
        }
        return `\\${c}${R}`
    }

    function je(o) {
        return o !== "{" && o !== "}" && o !== ue && o !== z
    }

    function Ke(o) {
        A(o);
        let c = "",
            E = "";
        for (; c = Z(o, je);) E += c;
        return E
    }

    function Be(o) {
        let c = "",
            E = "";
        for (; c = we(o);) E += c;
        return E
    }

    function h(o) {
        const c = E => {
            const R = o.currentChar();
            return R === "{" || R === "%" || R === "@" || R === "|" || R === "(" || R === ")" || !R || R === ue ? E : (E += R, o.next(), c(E))
        };
        return c("")
    }

    function $(o) {
        A(o);
        const c = k(o, "|");
        return A(o), c
    }

    function pe(o, c) {
        let E = null;
        switch (o.currentChar()) {
            case "{":
                return c.braceNest >= 1 && T(D.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), o.next(), E = g(c, 2, "{"), A(o), c.braceNest++, E;
            case "}":
                return c.braceNest > 0 && c.currentType === 2 && T(D.EMPTY_PLACEHOLDER, a(), 0), o.next(), E = g(c, 3, "}"), c.braceNest--, c.braceNest > 0 && A(o), c.inLinked && c.braceNest === 0 && (c.inLinked = !1), E;
            case "@":
                return c.braceNest > 0 && T(D.UNTERMINATED_CLOSING_BRACE, a(), 0), E = ve(o, c) || v(c), c.braceNest = 0, E;
            default:
                {
                    let X = !0,
                        M = !0,
                        f = !0;
                    if (B(o)) return c.braceNest > 0 && T(D.UNTERMINATED_CLOSING_BRACE, a(), 0), E = g(c, 1, $(o)), c.braceNest = 0, c.inLinked = !1, E;
                    if (c.braceNest > 0 && (c.currentType === 5 || c.currentType === 6 || c.currentType === 7)) return T(D.UNTERMINATED_CLOSING_BRACE, a(), 0), c.braceNest = 0, Je(o, c);
                    if (X = m(o, c)) return E = g(c, 5, Ye(o)), A(o), E;
                    if (M = d(o, c)) return E = g(c, 6, Ge(o)), A(o), E;
                    if (f = b(o, c)) return E = g(c, 7, xe(o)), A(o), E;
                    if (!X && !M && !f) return E = g(c, 13, Ke(o)), T(D.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, E.value), A(o), E;
                    break
                }
        }
        return E
    }

    function ve(o, c) {
        const {
            currentType: E
        } = c;
        let R = null;
        const X = o.currentChar();
        switch ((E === 8 || E === 9 || E === 12 || E === 10) && (X === z || X === ue) && T(D.INVALID_LINKED_FORMAT, a(), 0), X) {
            case "@":
                return o.next(), R = g(c, 8, "@"), c.inLinked = !0, R;
            case ".":
                return A(o), o.next(), g(c, 9, ".");
            case ":":
                return A(o), o.next(), g(c, 10, ":");
            default:
                return B(o) ? (R = g(c, 1, $(o)), c.braceNest = 0, c.inLinked = !1, R) : L(o, c) || S(o, c) ? (A(o), ve(o, c)) : O(o, c) ? (A(o), g(c, 12, Be(o))) : P(o, c) ? (A(o), X === "{" ? pe(o, c) || R : g(c, 11, h(o))) : (E === 8 && T(D.INVALID_LINKED_FORMAT, a(), 0), c.braceNest = 0, c.inLinked = !1, Je(o, c))
        }
    }

    function Je(o, c) {
        let E = {
            type: 14
        };
        if (c.braceNest > 0) return pe(o, c) || v(c);
        if (c.inLinked) return ve(o, c) || v(c);
        switch (o.currentChar()) {
            case "{":
                return pe(o, c) || v(c);
            case "}":
                return T(D.UNBALANCED_CLOSING_BRACE, a(), 0), o.next(), g(c, 3, "}");
            case "@":
                return ve(o, c) || v(c);
            default:
                {
                    if (B(o)) return E = g(c, 1, $(o)), c.braceNest = 0, c.inLinked = !1, E;
                    const {
                        isModulo: X,
                        hasSpace: M
                    } = te(o);
                    if (X) return M ? g(c, 0, he(o)) : g(c, 4, He(o));
                    if (W(o)) return g(c, 0, he(o));
                    break
                }
        }
        return E
    }

    function _t() {
        const {
            currentType: o,
            offset: c,
            startLoc: E,
            endLoc: R
        } = u;
        return u.lastType = o, u.lastOffset = c, u.lastStartLoc = E, u.lastEndLoc = R, u.offset = l(), u.startLoc = a(), r.currentChar() === de ? g(u, 14) : Je(r, u)
    }
    return {
        nextToken: _t,
        currentOffset: l,
        currentPosition: a,
        context: _
    }
}
const Pa = "parser",
    Aa = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function Ca(e, t, n) {
    switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default:
            {
                const r = parseInt(t || n, 16);
                return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
            }
    }
}

function Sa(e = {}) {
    const t = e.location !== !1,
        {
            onError: n,
            onWarn: r
        } = e;

    function l(m, d, b, L, ...O) {
        const S = m.currentPosition();
        if (S.offset += L, S.column += L, n) {
            const P = t ? ot(b, S) : null,
                B = Fe(d, P, {
                    domain: Pa,
                    args: O
                });
            n(B)
        }
    }

    function a(m, d, b, L, ...O) {
        const S = m.currentPosition();
        if (S.offset += L, S.column += L, r) {
            const P = t ? ot(b, S) : null;
            r(ga(d, P, O))
        }
    }

    function s(m, d, b) {
        const L = {
            type: m
        };
        return t && (L.start = d, L.end = d, L.loc = {
            start: b,
            end: b
        }), L
    }

    function i(m, d, b, L) {
        t && (m.end = d, m.loc && (m.loc.end = b))
    }

    function u(m, d) {
        const b = m.context(),
            L = s(3, b.offset, b.startLoc);
        return L.value = d, i(L, m.currentOffset(), m.currentPosition()), L
    }

    function _(m, d) {
        const b = m.context(),
            {
                lastOffset: L,
                lastStartLoc: O
            } = b,
            S = s(5, L, O);
        return S.index = parseInt(d, 10), m.nextToken(), i(S, m.currentOffset(), m.currentPosition()), S
    }

    function I(m, d, b) {
        const L = m.context(),
            {
                lastOffset: O,
                lastStartLoc: S
            } = L,
            P = s(4, O, S);
        return P.key = d, b === !0 && (P.modulo = !0), m.nextToken(), i(P, m.currentOffset(), m.currentPosition()), P
    }

    function T(m, d) {
        const b = m.context(),
            {
                lastOffset: L,
                lastStartLoc: O
            } = b,
            S = s(9, L, O);
        return S.value = d.replace(Aa, Ca), m.nextToken(), i(S, m.currentOffset(), m.currentPosition()), S
    }

    function g(m) {
        const d = m.nextToken(),
            b = m.context(),
            {
                lastOffset: L,
                lastStartLoc: O
            } = b,
            S = s(8, L, O);
        return d.type !== 12 ? (l(m, D.UNEXPECTED_EMPTY_LINKED_MODIFIER, b.lastStartLoc, 0), S.value = "", i(S, L, O), {
            nextConsumeToken: d,
            node: S
        }) : (d.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, re(d)), S.value = d.value || "", i(S, m.currentOffset(), m.currentPosition()), {
            node: S
        })
    }

    function v(m, d) {
        const b = m.context(),
            L = s(7, b.offset, b.startLoc);
        return L.value = d, i(L, m.currentOffset(), m.currentPosition()), L
    }

    function k(m) {
        const d = m.context(),
            b = s(6, d.offset, d.startLoc);
        let L = m.nextToken();
        if (L.type === 9) {
            const O = g(m);
            b.modifier = O.node, L = O.nextConsumeToken || m.nextToken()
        }
        switch (L.type !== 10 && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(L)), L = m.nextToken(), L.type === 2 && (L = m.nextToken()), L.type) {
            case 11:
                L.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(L)), b.key = v(m, L.value || "");
                break;
            case 5:
                L.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(L)), b.key = I(m, L.value || "");
                break;
            case 6:
                L.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(L)), b.key = _(m, L.value || "");
                break;
            case 7:
                L.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(L)), b.key = T(m, L.value || "");
                break;
            default:
                {
                    l(m, D.UNEXPECTED_EMPTY_LINKED_KEY, d.lastStartLoc, 0);
                    const O = m.context(),
                        S = s(7, O.offset, O.startLoc);
                    return S.value = "",
                    i(S, O.offset, O.startLoc),
                    b.key = S,
                    i(b, O.offset, O.startLoc),
                    {
                        nextConsumeToken: L,
                        node: b
                    }
                }
        }
        return i(b, m.currentOffset(), m.currentPosition()), {
            node: b
        }
    }

    function y(m) {
        const d = m.context(),
            b = d.currentType === 1 ? m.currentOffset() : d.offset,
            L = d.currentType === 1 ? d.endLoc : d.startLoc,
            O = s(2, b, L);
        O.items = [];
        let S = null,
            P = null;
        do {
            const W = S || m.nextToken();
            switch (S = null, W.type) {
                case 0:
                    W.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(W)), O.items.push(u(m, W.value || ""));
                    break;
                case 6:
                    W.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(W)), O.items.push(_(m, W.value || ""));
                    break;
                case 4:
                    P = !0;
                    break;
                case 5:
                    W.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(W)), O.items.push(I(m, W.value || "", !!P)), P && (a(m, Ct.USE_MODULO_SYNTAX, d.lastStartLoc, 0, re(W)), P = null);
                    break;
                case 7:
                    W.value == null && l(m, D.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, re(W)), O.items.push(T(m, W.value || ""));
                    break;
                case 8:
                    {
                        const Z = k(m);O.items.push(Z.node),
                        S = Z.nextConsumeToken || null;
                        break
                    }
            }
        } while (d.currentType !== 14 && d.currentType !== 1);
        const B = d.currentType === 1 ? d.lastOffset : m.currentOffset(),
            te = d.currentType === 1 ? d.lastEndLoc : m.currentPosition();
        return i(O, B, te), O
    }

    function A(m, d, b, L) {
        const O = m.context();
        let S = L.items.length === 0;
        const P = s(1, d, b);
        P.cases = [], P.cases.push(L);
        do {
            const B = y(m);
            S || (S = B.items.length === 0), P.cases.push(B)
        } while (O.currentType !== 14);
        return S && l(m, D.MUST_HAVE_MESSAGES_IN_PLURAL, b, 0), i(P, m.currentOffset(), m.currentPosition()), P
    }

    function C(m) {
        const d = m.context(),
            {
                offset: b,
                startLoc: L
            } = d,
            O = y(m);
        return d.currentType === 14 ? O : A(m, b, L, O)
    }

    function w(m) {
        const d = va(m, On({}, e)),
            b = d.context(),
            L = s(0, b.offset, b.startLoc);
        return t && L.loc && (L.loc.source = m), L.body = C(d), e.onCacheKey && (L.cacheKey = e.onCacheKey(m)), b.currentType !== 14 && l(d, D.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, m[b.offset] || ""), i(L, d.currentOffset(), d.currentPosition()), L
    }
    return {
        parse: w
    }
}

function re(e) {
    if (e.type === 14) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}

function ka(e, t = {}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: a => (n.helpers.add(a), a)
    }
}

function $t(e, t) {
    for (let n = 0; n < e.length; n++) St(e[n], t)
}

function St(e, t) {
    switch (e.type) {
        case 1:
            $t(e.cases, t), t.helper("plural");
            break;
        case 2:
            $t(e.items, t);
            break;
        case 6:
            {
                St(e.key, t),
                t.helper("linked"),
                t.helper("type");
                break
            }
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function ya(e, t = {}) {
    const n = ka(e);
    n.helper("normalize"), e.body && St(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}

function Ra(e) {
    const t = e.body;
    return t.type === 2 ? Ht(t) : t.cases.forEach(n => Ht(n)), e
}

function Ht(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null) break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = pn(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
const Da = "minifier";

function Se(e) {
    switch (e.t = e.type, e.type) {
        case 0:
            {
                const t = e;Se(t.body),
                t.b = t.body,
                delete t.body;
                break
            }
        case 1:
            {
                const t = e,
                    n = t.cases;
                for (let r = 0; r < n.length; r++) Se(n[r]);t.c = n,
                delete t.cases;
                break
            }
        case 2:
            {
                const t = e,
                    n = t.items;
                for (let r = 0; r < n.length; r++) Se(n[r]);t.i = n,
                delete t.items,
                t.static && (t.s = t.static, delete t.static);
                break
            }
        case 3:
        case 9:
        case 8:
        case 7:
            {
                const t = e;t.value && (t.v = t.value, delete t.value);
                break
            }
        case 6:
            {
                const t = e;Se(t.key),
                t.k = t.key,
                delete t.key,
                t.modifier && (Se(t.modifier), t.m = t.modifier, delete t.modifier);
                break
            }
        case 5:
            {
                const t = e;t.i = t.index,
                delete t.index;
                break
            }
        case 4:
            {
                const t = e;t.k = t.key,
                delete t.key;
                break
            }
        default:
            throw Fe(D.UNHANDLED_MINIFIER_NODE_TYPE, null, {
                domain: Da,
                args: [e.type]
            })
    }
    delete e.type
}
const Fa = "parser";

function Ma(e, t) {
    const {
        sourceMap: n,
        filename: r,
        breakLineCode: l,
        needIndent: a
    } = t, s = t.location !== !1, i = {
        filename: r,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: l,
        needIndent: a,
        indentLevel: 0
    };
    s && e.loc && (i.source = e.loc.source);
    const u = () => i;

    function _(A, C) {
        i.code += A
    }

    function I(A, C = !0) {
        const w = C ? l : "";
        _(a ? w + "  ".repeat(A) : w)
    }

    function T(A = !0) {
        const C = ++i.indentLevel;
        A && I(C)
    }

    function g(A = !0) {
        const C = --i.indentLevel;
        A && I(C)
    }

    function v() {
        I(i.indentLevel)
    }
    return {
        context: u,
        push: _,
        indent: T,
        deindent: g,
        newline: v,
        helper: A => `_${A}`,
        needIndent: () => i.needIndent
    }
}

function wa(e, t) {
    const {
        helper: n
    } = e;
    e.push(`${n("linked")}(`), ye(e, t.key), t.modifier ? (e.push(", "), ye(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function Ua(e, t) {
    const {
        helper: n,
        needIndent: r
    } = e;
    e.push(`${n("normalize")}([`), e.indent(r());
    const l = t.items.length;
    for (let a = 0; a < l && (ye(e, t.items[a]), a !== l - 1); a++) e.push(", ");
    e.deindent(r()), e.push("])")
}

function Wa(e, t) {
    const {
        helper: n,
        needIndent: r
    } = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(r());
        const l = t.cases.length;
        for (let a = 0; a < l && (ye(e, t.cases[a]), a !== l - 1); a++) e.push(", ");
        e.deindent(r()), e.push("])")
    }
}

function Va(e, t) {
    t.body ? ye(e, t.body) : e.push("null")
}

function ye(e, t) {
    const {
        helper: n
    } = e;
    switch (t.type) {
        case 0:
            Va(e, t);
            break;
        case 1:
            Wa(e, t);
            break;
        case 2:
            Ua(e, t);
            break;
        case 6:
            wa(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break;
        default:
            throw Fe(D.UNHANDLED_CODEGEN_NODE_TYPE, null, {
                domain: Fa,
                args: [t.type]
            })
    }
}
const $a = (e, t = {}) => {
    const n = Wt(t.mode) ? t.mode : "normal",
        r = Wt(t.filename) ? t.filename : "message.intl",
        l = !!t.sourceMap,
        a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
        s = t.needIndent ? t.needIndent : n !== "arrow",
        i = e.helpers || [],
        u = Ma(e, {
            mode: n,
            filename: r,
            sourceMap: l,
            breakLineCode: a,
            needIndent: s
        });
    u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(s), i.length > 0 && (u.push(`const { ${pn(i.map(T=>`${T}: _${T}`),", ")} } = ctx`), u.newline()), u.push("return "), ye(u, e), u.deindent(s), u.push("}"), delete e.helpers;
    const {
        code: _,
        map: I
    } = u.context();
    return {
        ast: e,
        code: _,
        map: I ? I.toJSON() : void 0
    }
};

function Ha(e, t = {}) {
    const n = On({}, t),
        r = !!n.jit,
        l = !!n.minify,
        a = n.optimize == null ? !0 : n.optimize,
        i = Sa(n).parse(e);
    return r ? (a && Ra(i), l && Se(i), {
        ast: i,
        code: ""
    }) : (ya(i, n), $a(i, n))
}
/*!
 * core-base v9.14.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
function Ya() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (_e().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (_e().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_e().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}
const Le = [];
Le[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
Le[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
Le[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
Le[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
Le[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
Le[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
Le[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Ga = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function xa(e) {
    return Ga.test(e)
}

function Xa(e) {
    const t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function ja(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function Ka(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : xa(t) ? Xa(t) : "*" + t
}

function Ba(e) {
    const t = [];
    let n = -1,
        r = 0,
        l = 0,
        a, s, i, u, _, I, T;
    const g = [];
    g[0] = () => {
        s === void 0 ? s = i : s += i
    }, g[1] = () => {
        s !== void 0 && (t.push(s), s = void 0)
    }, g[2] = () => {
        g[0](), l++
    }, g[3] = () => {
        if (l > 0) l--, r = 4, g[0]();
        else {
            if (l = 0, s === void 0 || (s = Ka(s), s === !1)) return !1;
            g[1]()
        }
    };

    function v() {
        const k = e[n + 1];
        if (r === 5 && k === "'" || r === 6 && k === '"') return n++, i = "\\" + k, g[0](), !0
    }
    for (; r !== null;)
        if (n++, a = e[n], !(a === "\\" && v())) {
            if (u = ja(a), T = Le[r], _ = T[u] || T.l || 8, _ === 8 || (r = _[0], _[1] !== void 0 && (I = g[_[1]], I && (i = a, I() === !1)))) return;
            if (r === 7) return t
        }
}
const Yt = new Map;

function Ja(e, t) {
    return V(e) ? e[t] : null
}

function Qa(e, t) {
    if (!V(e)) return null;
    let n = Yt.get(t);
    if (n || (n = Ba(t), n && Yt.set(t, n)), !n) return null;
    const r = n.length;
    let l = e,
        a = 0;
    for (; a < r;) {
        const s = l[n[a]];
        if (s === void 0 || G(l)) return null;
        l = s, a++
    }
    return l
}
const qa = e => e,
    Za = e => "",
    za = "text",
    er = e => e.length === 0 ? "" : ua(e),
    tr = ia;

function Gt(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function nr(e) {
    const t = K(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (K(e.named.count) || K(e.named.n)) ? K(e.named.count) ? e.named.count : K(e.named.n) ? e.named.n : t : t
}

function ar(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function rr(e = {}) {
    const t = e.locale,
        n = nr(e),
        r = V(e.pluralRules) && p(t) && G(e.pluralRules[t]) ? e.pluralRules[t] : Gt,
        l = V(e.pluralRules) && p(t) && G(e.pluralRules[t]) ? Gt : void 0,
        a = C => C[r(n, C.length, l)],
        s = e.list || [],
        i = C => s[C],
        u = e.named || H();
    K(e.pluralIndex) && ar(n, u);
    const _ = C => u[C];

    function I(C) {
        const w = G(e.messages) ? e.messages(C) : V(e.messages) ? e.messages[C] : !1;
        return w || (e.parent ? e.parent.message(C) : Za)
    }
    const T = C => e.modifiers ? e.modifiers[C] : qa,
        g = F(e.processor) && G(e.processor.normalize) ? e.processor.normalize : er,
        v = F(e.processor) && G(e.processor.interpolate) ? e.processor.interpolate : tr,
        k = F(e.processor) && p(e.processor.type) ? e.processor.type : za,
        A = {
            list: i,
            named: _,
            plural: a,
            linked: (C, ...w) => {
                const [m, d] = w;
                let b = "text",
                    L = "";
                w.length === 1 ? V(m) ? (L = m.modifier || L, b = m.type || b) : p(m) && (L = m || L) : w.length === 2 && (p(m) && (L = m || L), p(d) && (b = d || b));
                const O = I(C)(A),
                    S = b === "vnode" && x(O) && L ? O[0] : O;
                return L ? T(L)(S, b) : S
            },
            message: I,
            type: k,
            interpolate: v,
            normalize: g,
            values: q(H(), s, u)
        };
    return A
}
let Ze = null;

function lr(e) {
    Ze = e
}

function sr(e, t, n) {
    Ze && Ze.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const or = cr("function:translate");

function cr(e) {
    return t => Ze && Ze.emit(e, t)
}
const vn = Ct.__EXTEND_POINT__,
    Ie = it(vn),
    ir = {
        NOT_FOUND_KEY: vn,
        FALLBACK_TO_TRANSLATE: Ie(),
        CANNOT_FORMAT_NUMBER: Ie(),
        FALLBACK_TO_NUMBER_FORMAT: Ie(),
        CANNOT_FORMAT_DATE: Ie(),
        FALLBACK_TO_DATE_FORMAT: Ie(),
        EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Ie(),
        __EXTEND_POINT__: Ie()
    },
    Pn = D.__EXTEND_POINT__,
    be = it(Pn),
    se = {
        INVALID_ARGUMENT: Pn,
        INVALID_DATE_ARGUMENT: be(),
        INVALID_ISO_DATE_ARGUMENT: be(),
        NOT_SUPPORT_NON_STRING_MESSAGE: be(),
        NOT_SUPPORT_LOCALE_PROMISE_VALUE: be(),
        NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: be(),
        NOT_SUPPORT_LOCALE_TYPE: be(),
        __EXTEND_POINT__: be()
    };

function ie(e) {
    return Fe(e, null, void 0)
}

function kt(e, t) {
    return t.locale != null ? xt(t.locale) : xt(e.locale)
}
let mt;

function xt(e) {
    if (p(e)) return e;
    if (G(e)) {
        if (e.resolvedOnce && mt != null) return mt;
        if (e.constructor.name === "Function") {
            const t = e();
            if (ca(t)) throw ie(se.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return mt = t
        } else throw ie(se.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else throw ie(se.NOT_SUPPORT_LOCALE_TYPE)
}

function ur(e, t, n) {
    return [...new Set([n, ...x(t) ? t : V(t) ? Object.keys(t) : p(t) ? [t] : [n]])]
}

function An(e, t, n) {
    const r = p(n) ? n : Re,
        l = e;
    l.__localeChainCache || (l.__localeChainCache = new Map);
    let a = l.__localeChainCache.get(r);
    if (!a) {
        a = [];
        let s = [n];
        for (; x(s);) s = Xt(a, s, t);
        const i = x(t) || !F(t) ? t : t.default ? t.default : null;
        s = p(i) ? [i] : i, x(s) && Xt(a, s, !1), l.__localeChainCache.set(r, a)
    }
    return a
}

function Xt(e, t, n) {
    let r = !0;
    for (let l = 0; l < t.length && U(r); l++) {
        const a = t[l];
        p(a) && (r = fr(e, t[l], n))
    }
    return r
}

function fr(e, t, n) {
    let r;
    const l = t.split("-");
    do {
        const a = l.join("-");
        r = _r(e, a, n), l.splice(-1, 1)
    } while (l.length && r === !0);
    return r
}

function _r(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = t[t.length - 1] !== "!";
        const l = t.replace(/!/g, "");
        e.push(l), (x(n) || F(n)) && n[l] && (r = n[l])
    }
    return r
}
const mr = "9.14.2",
    ut = -1,
    Re = "en-US",
    jt = "",
    Kt = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function dr() {
    return {
        upper: (e, t) => t === "text" && p(e) ? e.toUpperCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && p(e) ? e.toLowerCase() : t === "vnode" && V(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && p(e) ? Kt(e) : t === "vnode" && V(e) && "__v_isVNode" in e ? Kt(e.children) : e
    }
}
let Cn;

function Bt(e) {
    Cn = e
}
let Sn;

function Er(e) {
    Sn = e
}
let kn;

function gr(e) {
    kn = e
}
let yn = null;
const Lr = e => {
        yn = e
    },
    Nr = () => yn;
let Rn = null;
const Jt = e => {
        Rn = e
    },
    Tr = () => Rn;
let Qt = 0;

function Ir(e = {}) {
    const t = G(e.onWarn) ? e.onWarn : fa,
        n = p(e.version) ? e.version : mr,
        r = p(e.locale) || G(e.locale) ? e.locale : Re,
        l = G(r) ? Re : r,
        a = x(e.fallbackLocale) || F(e.fallbackLocale) || p(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l,
        s = F(e.messages) ? e.messages : dt(l),
        i = F(e.datetimeFormats) ? e.datetimeFormats : dt(l),
        u = F(e.numberFormats) ? e.numberFormats : dt(l),
        _ = q(H(), e.modifiers, dr()),
        I = e.pluralRules || H(),
        T = G(e.missing) ? e.missing : null,
        g = U(e.missingWarn) || Ee(e.missingWarn) ? e.missingWarn : !0,
        v = U(e.fallbackWarn) || Ee(e.fallbackWarn) ? e.fallbackWarn : !0,
        k = !!e.fallbackFormat,
        y = !!e.unresolving,
        A = G(e.postTranslation) ? e.postTranslation : null,
        C = F(e.processor) ? e.processor : null,
        w = U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        m = !!e.escapeParameter,
        d = G(e.messageCompiler) ? e.messageCompiler : Cn,
        b = G(e.messageResolver) ? e.messageResolver : Sn || Ja,
        L = G(e.localeFallbacker) ? e.localeFallbacker : kn || ur,
        O = V(e.fallbackContext) ? e.fallbackContext : void 0,
        S = e,
        P = V(S.__datetimeFormatters) ? S.__datetimeFormatters : new Map,
        B = V(S.__numberFormatters) ? S.__numberFormatters : new Map,
        te = V(S.__meta) ? S.__meta : {};
    Qt++;
    const W = {
        version: n,
        cid: Qt,
        locale: r,
        fallbackLocale: a,
        messages: s,
        modifiers: _,
        pluralRules: I,
        missing: T,
        missingWarn: g,
        fallbackWarn: v,
        fallbackFormat: k,
        unresolving: y,
        postTranslation: A,
        processor: C,
        warnHtmlMessage: w,
        escapeParameter: m,
        messageCompiler: d,
        messageResolver: b,
        localeFallbacker: L,
        fallbackContext: O,
        onWarn: t,
        __meta: te
    };
    return W.datetimeFormats = i, W.numberFormats = u, W.__datetimeFormatters = P, W.__numberFormatters = B, __INTLIFY_PROD_DEVTOOLS__ && sr(W, n, te), W
}
const dt = e => ({
    [e]: H()
});

function yt(e, t, n, r, l) {
    const {
        missing: a,
        onWarn: s
    } = e;
    if (a !== null) {
        const i = a(e, n, t, l);
        return p(i) ? i : t
    } else return t
}

function Qe(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function br(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}

function hr(e, t) {
    const n = t.indexOf(e);
    if (n === -1) return !1;
    for (let r = n + 1; r < t.length; r++)
        if (br(e, t[r])) return !0;
    return !1
}

function Et(e) {
    return n => Or(n, e)
}

function Or(e, t) {
    const n = vr(t);
    if (n == null) throw ze(0);
    if (Rt(n) === 1) {
        const a = Ar(n);
        return e.plural(a.reduce((s, i) => [...s, qt(e, i)], []))
    } else return qt(e, n)
}
const pr = ["b", "body"];

function vr(e) {
    return Ne(e, pr)
}
const Pr = ["c", "cases"];

function Ar(e) {
    return Ne(e, Pr, [])
}

function qt(e, t) {
    const n = Sr(t);
    if (n != null) return e.type === "text" ? n : e.normalize([n]); {
        const r = yr(t).reduce((l, a) => [...l, Lt(e, a)], []);
        return e.normalize(r)
    }
}
const Cr = ["s", "static"];

function Sr(e) {
    return Ne(e, Cr)
}
const kr = ["i", "items"];

function yr(e) {
    return Ne(e, kr, [])
}

function Lt(e, t) {
    const n = Rt(t);
    switch (n) {
        case 3:
            return rt(t, n);
        case 9:
            return rt(t, n);
        case 4:
            {
                const r = t;
                if (le(r, "k") && r.k) return e.interpolate(e.named(r.k));
                if (le(r, "key") && r.key) return e.interpolate(e.named(r.key));
                throw ze(n)
            }
        case 5:
            {
                const r = t;
                if (le(r, "i") && K(r.i)) return e.interpolate(e.list(r.i));
                if (le(r, "index") && K(r.index)) return e.interpolate(e.list(r.index));
                throw ze(n)
            }
        case 6:
            {
                const r = t,
                    l = Mr(r),
                    a = Ur(r);
                return e.linked(Lt(e, a), l ? Lt(e, l) : void 0, e.type)
            }
        case 7:
            return rt(t, n);
        case 8:
            return rt(t, n);
        default:
            throw new Error(`unhandled node on format message part: ${n}`)
    }
}
const Rr = ["t", "type"];

function Rt(e) {
    return Ne(e, Rr)
}
const Dr = ["v", "value"];

function rt(e, t) {
    const n = Ne(e, Dr);
    if (n) return n;
    throw ze(t)
}
const Fr = ["m", "modifier"];

function Mr(e) {
    return Ne(e, Fr)
}
const wr = ["k", "key"];

function Ur(e) {
    const t = Ne(e, wr);
    if (t) return t;
    throw ze(6)
}

function Ne(e, t, n) {
    for (let r = 0; r < t.length; r++) {
        const l = t[r];
        if (le(e, l) && e[l] != null) return e[l]
    }
    return n
}

function ze(e) {
    return new Error(`unhandled node type: ${e}`)
}
const Dn = e => e;
let ke = H();

function De(e) {
    return V(e) && Rt(e) === 0 && (le(e, "b") || le(e, "body"))
}

function Fn(e, t = {}) {
    let n = !1;
    const r = t.onError || Na;
    return t.onError = l => {
        n = !0, r(l)
    }, { ...Ha(e, t),
        detectError: n
    }
}
const Wr = (e, t) => {
    if (!p(e)) throw ie(se.NOT_SUPPORT_NON_STRING_MESSAGE); {
        U(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || Dn)(e),
            l = ke[r];
        if (l) return l;
        const {
            code: a,
            detectError: s
        } = Fn(e, t), i = new Function(`return ${a}`)();
        return s ? i : ke[r] = i
    }
};

function Vr(e, t) {
    if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && p(e)) {
        U(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || Dn)(e),
            l = ke[r];
        if (l) return l;
        const {
            ast: a,
            detectError: s
        } = Fn(e, { ...t,
            location: !1,
            jit: !0
        }), i = Et(a);
        return s ? i : ke[r] = i
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = ke[n];
            return r || (ke[n] = Et(e))
        } else return Et(e)
    }
}
const Zt = () => "",
    ne = e => G(e);

function zt(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: l,
        messageCompiler: a,
        fallbackLocale: s,
        messages: i
    } = e, [u, _] = Nt(...t), I = U(_.missingWarn) ? _.missingWarn : e.missingWarn, T = U(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, g = U(_.escapeParameter) ? _.escapeParameter : e.escapeParameter, v = !!_.resolvedMessage, k = p(_.default) || U(_.default) ? U(_.default) ? a ? u : () => u : _.default : n ? a ? u : () => u : "", y = n || k !== "", A = kt(e, _);
    g && $r(_);
    let [C, w, m] = v ? [u, A, i[A] || H()] : Mn(e, u, A, s, T, I), d = C, b = u;
    if (!v && !(p(d) || De(d) || ne(d)) && y && (d = k, b = d), !v && (!(p(d) || De(d) || ne(d)) || !p(w))) return l ? ut : u;
    let L = !1;
    const O = () => {
            L = !0
        },
        S = ne(d) ? d : wn(e, u, w, d, b, O);
    if (L) return d;
    const P = Gr(e, w, m, _),
        B = rr(P),
        te = Hr(e, S, B),
        W = r ? r(te, u) : te;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const Z = {
            timestamp: Date.now(),
            key: p(u) ? u : ne(d) ? d.key : "",
            locale: w || (ne(d) ? d.locale : ""),
            format: p(d) ? d : ne(d) ? d.source : "",
            message: W
        };
        Z.meta = q({}, e.__meta, Nr() || {}), or(Z)
    }
    return W
}

function $r(e) {
    x(e.list) ? e.list = e.list.map(t => p(t) ? Ut(t) : t) : V(e.named) && Object.keys(e.named).forEach(t => {
        p(e.named[t]) && (e.named[t] = Ut(e.named[t]))
    })
}

function Mn(e, t, n, r, l, a) {
    const {
        messages: s,
        onWarn: i,
        messageResolver: u,
        localeFallbacker: _
    } = e, I = _(e, r, n);
    let T = H(),
        g, v = null;
    const k = "translate";
    for (let y = 0; y < I.length && (g = I[y], T = s[g] || H(), (v = u(T, t)) === null && (v = T[t]), !(p(v) || De(v) || ne(v))); y++)
        if (!hr(g, I)) {
            const A = yt(e, t, g, a, k);
            A !== t && (v = A)
        }
    return [v, g, T]
}

function wn(e, t, n, r, l, a) {
    const {
        messageCompiler: s,
        warnHtmlMessage: i
    } = e;
    if (ne(r)) {
        const _ = r;
        return _.locale = _.locale || n, _.key = _.key || t, _
    }
    if (s == null) {
        const _ = () => r;
        return _.locale = n, _.key = t, _
    }
    const u = s(r, Yr(e, n, l, r, i, a));
    return u.locale = n, u.key = t, u.source = r, u
}

function Hr(e, t, n) {
    return t(n)
}

function Nt(...e) {
    const [t, n, r] = e, l = H();
    if (!p(t) && !K(t) && !ne(t) && !De(t)) throw ie(se.INVALID_ARGUMENT);
    const a = K(t) ? String(t) : (ne(t), t);
    return K(n) ? l.plural = n : p(n) ? l.default = n : F(n) && !ct(n) ? l.named = n : x(n) && (l.list = n), K(r) ? l.plural = r : p(r) ? l.default = r : F(r) && q(l, r), [a, l]
}

function Yr(e, t, n, r, l, a) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: l,
        onError: s => {
            throw a && a(s), s
        },
        onCacheKey: s => aa(t, n, s)
    }
}

function Gr(e, t, n, r) {
    const {
        modifiers: l,
        pluralRules: a,
        messageResolver: s,
        fallbackLocale: i,
        fallbackWarn: u,
        missingWarn: _,
        fallbackContext: I
    } = e, g = {
        locale: t,
        modifiers: l,
        pluralRules: a,
        messages: v => {
            let k = s(n, v);
            if (k == null && I) {
                const [, , y] = Mn(I, v, t, i, u, _);
                k = s(y, v)
            }
            if (p(k) || De(k)) {
                let y = !1;
                const C = wn(e, v, t, k, v, () => {
                    y = !0
                });
                return y ? Zt : C
            } else return ne(k) ? k : Zt
        }
    };
    return e.processor && (g.processor = e.processor), r.list && (g.list = r.list), r.named && (g.named = r.named), K(r.plural) && (g.pluralIndex = r.plural), g
}

function en(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: l,
        onWarn: a,
        localeFallbacker: s
    } = e, {
        __datetimeFormatters: i
    } = e, [u, _, I, T] = Tt(...t), g = U(I.missingWarn) ? I.missingWarn : e.missingWarn;
    U(I.fallbackWarn) ? I.fallbackWarn : e.fallbackWarn;
    const v = !!I.part,
        k = kt(e, I),
        y = s(e, l, k);
    if (!p(u) || u === "") return new Intl.DateTimeFormat(k, T).format(_);
    let A = {},
        C, w = null;
    const m = "datetime format";
    for (let L = 0; L < y.length && (C = y[L], A = n[C] || {}, w = A[u], !F(w)); L++) yt(e, u, C, g, m);
    if (!F(w) || !p(C)) return r ? ut : u;
    let d = `${C}__${u}`;
    ct(T) || (d = `${d}__${JSON.stringify(T)}`);
    let b = i.get(d);
    return b || (b = new Intl.DateTimeFormat(C, q({}, w, T)), i.set(d, b)), v ? b.formatToParts(_) : b.format(_)
}
const Un = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function Tt(...e) {
    const [t, n, r, l] = e, a = H();
    let s = H(),
        i;
    if (p(t)) {
        const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!u) throw ie(se.INVALID_ISO_DATE_ARGUMENT);
        const _ = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
        i = new Date(_);
        try {
            i.toISOString()
        } catch {
            throw ie(se.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (la(t)) {
        if (isNaN(t.getTime())) throw ie(se.INVALID_DATE_ARGUMENT);
        i = t
    } else if (K(t)) i = t;
    else throw ie(se.INVALID_ARGUMENT);
    return p(n) ? a.key = n : F(n) && Object.keys(n).forEach(u => {
        Un.includes(u) ? s[u] = n[u] : a[u] = n[u]
    }), p(r) ? a.locale = r : F(r) && (s = r), F(l) && (s = l), [a.key || "", i, a, s]
}

function tn(e, t, n) {
    const r = e;
    for (const l in n) {
        const a = `${t}__${l}`;
        r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a)
    }
}

function nn(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: l,
        onWarn: a,
        localeFallbacker: s
    } = e, {
        __numberFormatters: i
    } = e, [u, _, I, T] = It(...t), g = U(I.missingWarn) ? I.missingWarn : e.missingWarn;
    U(I.fallbackWarn) ? I.fallbackWarn : e.fallbackWarn;
    const v = !!I.part,
        k = kt(e, I),
        y = s(e, l, k);
    if (!p(u) || u === "") return new Intl.NumberFormat(k, T).format(_);
    let A = {},
        C, w = null;
    const m = "number format";
    for (let L = 0; L < y.length && (C = y[L], A = n[C] || {}, w = A[u], !F(w)); L++) yt(e, u, C, g, m);
    if (!F(w) || !p(C)) return r ? ut : u;
    let d = `${C}__${u}`;
    ct(T) || (d = `${d}__${JSON.stringify(T)}`);
    let b = i.get(d);
    return b || (b = new Intl.NumberFormat(C, q({}, w, T)), i.set(d, b)), v ? b.formatToParts(_) : b.format(_)
}
const Wn = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function It(...e) {
    const [t, n, r, l] = e, a = H();
    let s = H();
    if (!K(t)) throw ie(se.INVALID_ARGUMENT);
    const i = t;
    return p(n) ? a.key = n : F(n) && Object.keys(n).forEach(u => {
        Wn.includes(u) ? s[u] = n[u] : a[u] = n[u]
    }), p(r) ? a.locale = r : F(r) && (s = r), F(l) && (s = l), [a.key || "", i, a, s]
}

function an(e, t, n) {
    const r = e;
    for (const l in n) {
        const a = `${t}__${l}`;
        r.__numberFormatters.has(a) && r.__numberFormatters.delete(a)
    }
}
Ya();

function xr() {
    return Vn().__VUE_DEVTOOLS_GLOBAL_HOOK__
}

function Vn() {
    return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {}
}
const Xr = typeof Proxy == "function",
    jr = "devtools-plugin:setup",
    Kr = "plugin:settings:set";
let Ae, bt;

function Br() {
    var e;
    return Ae !== void 0 || (typeof window < "u" && window.performance ? (Ae = !0, bt = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Ae = !0, bt = globalThis.perf_hooks.performance) : Ae = !1), Ae
}

function Jr() {
    return Br() ? bt.now() : Date.now()
}
class Qr {
    constructor(t, n) {
        this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
        const r = {};
        if (t.settings)
            for (const s in t.settings) {
                const i = t.settings[s];
                r[s] = i.defaultValue
            }
        const l = `__vue-devtools-plugin-settings__${t.id}`;
        let a = Object.assign({}, r);
        try {
            const s = localStorage.getItem(l),
                i = JSON.parse(s);
            Object.assign(a, i)
        } catch {}
        this.fallbacks = {
            getSettings() {
                return a
            },
            setSettings(s) {
                try {
                    localStorage.setItem(l, JSON.stringify(s))
                } catch {}
                a = s
            },
            now() {
                return Jr()
            }
        }, n && n.on(Kr, (s, i) => {
            s === this.plugin.id && this.fallbacks.setSettings(i)
        }), this.proxiedOn = new Proxy({}, {
            get: (s, i) => this.target ? this.target.on[i] : (...u) => {
                this.onQueue.push({
                    method: i,
                    args: u
                })
            }
        }), this.proxiedTarget = new Proxy({}, {
            get: (s, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...u) => (this.targetQueue.push({
                method: i,
                args: u,
                resolve: () => {}
            }), this.fallbacks[i](...u)) : (...u) => new Promise(_ => {
                this.targetQueue.push({
                    method: i,
                    args: u,
                    resolve: _
                })
            })
        })
    }
    async setRealTarget(t) {
        this.target = t;
        for (const n of this.onQueue) this.target.on[n.method](...n.args);
        for (const n of this.targetQueue) n.resolve(await this.target[n.method](...n.args))
    }
}

function pl(e, t) {
    const n = e,
        r = Vn(),
        l = xr(),
        a = Xr && n.enableEarlyProxy;
    if (l && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) l.emit(jr, e, t);
    else {
        const s = a ? new Qr(n, l) : null;
        (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
            pluginDescriptor: n,
            setupFn: t,
            proxy: s
        }), s && t(s.proxiedTarget)
    }
}
/*!
 * vue-i18n v9.14.2
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */
const qr = "9.14.2";

function Zr() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (_e().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (_e().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (_e().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (_e().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (_e().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const $n = ir.__EXTEND_POINT__,
    fe = it($n);
fe(), fe(), fe(), fe(), fe(), fe(), fe(), fe(), fe();
const Hn = se.__EXTEND_POINT__,
    ee = it(Hn),
    J = {
        UNEXPECTED_RETURN_TYPE: Hn,
        INVALID_ARGUMENT: ee(),
        MUST_BE_CALL_SETUP_TOP: ee(),
        NOT_INSTALLED: ee(),
        NOT_AVAILABLE_IN_LEGACY_MODE: ee(),
        REQUIRED_VALUE: ee(),
        INVALID_VALUE: ee(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ee(),
        NOT_INSTALLED_WITH_PROVIDE: ee(),
        UNEXPECTED_ERROR: ee(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: ee(),
        BRIDGE_SUPPORT_VUE_2_ONLY: ee(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ee(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ee(),
        __EXTEND_POINT__: ee()
    };

function Q(e, ...t) {
    return Fe(e, null, void 0)
}
const ht = ge("__translateVNode"),
    Ot = ge("__datetimeParts"),
    pt = ge("__numberParts"),
    Yn = ge("__setPluralRules"),
    Gn = ge("__injectWithOption"),
    vt = ge("__dispose");

function et(e) {
    if (!V(e)) return e;
    for (const t in e)
        if (le(e, t))
            if (!t.includes(".")) V(e[t]) && et(e[t]);
            else {
                const n = t.split("."),
                    r = n.length - 1;
                let l = e,
                    a = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s] in l || (l[n[s]] = H()), !V(l[n[s]])) {
                        a = !0;
                        break
                    }
                    l = l[n[s]]
                }
                a || (l[n[r]] = e[t], delete e[t]), V(l[n[r]]) && et(l[n[r]])
            }
    return e
}

function ft(e, t) {
    const {
        messages: n,
        __i18n: r,
        messageResolver: l,
        flatJson: a
    } = t, s = F(n) ? n : x(r) ? H() : {
        [e]: H()
    };
    if (x(r) && r.forEach(i => {
            if ("locale" in i && "resource" in i) {
                const {
                    locale: u,
                    resource: _
                } = i;
                u ? (s[u] = s[u] || H(), lt(_, s[u])) : lt(_, s)
            } else p(i) && lt(JSON.parse(i), s)
        }), l == null && a)
        for (const i in s) le(s, i) && et(s[i]);
    return s
}

function xn(e) {
    return e.type
}

function Xn(e, t, n) {
    let r = V(t.messages) ? t.messages : H();
    "__i18nGlobal" in n && (r = ft(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const l = Object.keys(r);
    l.length && l.forEach(a => {
        e.mergeLocaleMessage(a, r[a])
    }); {
        if (V(t.datetimeFormats)) {
            const a = Object.keys(t.datetimeFormats);
            a.length && a.forEach(s => {
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            })
        }
        if (V(t.numberFormats)) {
            const a = Object.keys(t.numberFormats);
            a.length && a.forEach(s => {
                e.mergeNumberFormat(s, t.numberFormats[s])
            })
        }
    }
}

function rn(e) {
    return ta(na, null, e, 0)
}
const ln = "__INTLIFY_META__",
    sn = () => [],
    zr = () => !1;
let on = 0;

function cn(e) {
    return (t, n, r, l) => e(n, r, qe() || void 0, l)
}
const el = () => {
    const e = qe();
    let t = null;
    return e && (t = xn(e)[ln]) ? {
        [ln]: t
    } : null
};

function Dt(e = {}, t) {
    const {
        __root: n,
        __injectWithOption: r
    } = e, l = n === void 0, a = e.flatJson, s = st ? Ce : Tn, i = !!e.translateExistCompatible;
    let u = U(e.inheritLocale) ? e.inheritLocale : !0;
    const _ = s(n && u ? n.locale.value : p(e.locale) ? e.locale : Re),
        I = s(n && u ? n.fallbackLocale.value : p(e.fallbackLocale) || x(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : _.value),
        T = s(ft(_.value, e)),
        g = s(F(e.datetimeFormats) ? e.datetimeFormats : {
            [_.value]: {}
        }),
        v = s(F(e.numberFormats) ? e.numberFormats : {
            [_.value]: {}
        });
    let k = n ? n.missingWarn : U(e.missingWarn) || Ee(e.missingWarn) ? e.missingWarn : !0,
        y = n ? n.fallbackWarn : U(e.fallbackWarn) || Ee(e.fallbackWarn) ? e.fallbackWarn : !0,
        A = n ? n.fallbackRoot : U(e.fallbackRoot) ? e.fallbackRoot : !0,
        C = !!e.fallbackFormat,
        w = G(e.missing) ? e.missing : null,
        m = G(e.missing) ? cn(e.missing) : null,
        d = G(e.postTranslation) ? e.postTranslation : null,
        b = n ? n.warnHtmlMessage : U(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        L = !!e.escapeParameter;
    const O = n ? n.modifiers : F(e.modifiers) ? e.modifiers : {};
    let S = e.pluralRules || n && n.pluralRules,
        P;
    P = (() => {
        l && Jt(null);
        const f = {
            version: qr,
            locale: _.value,
            fallbackLocale: I.value,
            messages: T.value,
            modifiers: O,
            pluralRules: S,
            missing: m === null ? void 0 : m,
            missingWarn: k,
            fallbackWarn: y,
            fallbackFormat: C,
            unresolving: !0,
            postTranslation: d === null ? void 0 : d,
            warnHtmlMessage: b,
            escapeParameter: L,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        f.datetimeFormats = g.value, f.numberFormats = v.value, f.__datetimeFormatters = F(P) ? P.__datetimeFormatters : void 0, f.__numberFormatters = F(P) ? P.__numberFormatters : void 0;
        const N = Ir(f);
        return l && Jt(N), N
    })(), Qe(P, _.value, I.value);

    function te() {
        return [_.value, I.value, T.value, g.value, v.value]
    }
    const W = ce({
            get: () => _.value,
            set: f => {
                _.value = f, P.locale = _.value
            }
        }),
        Z = ce({
            get: () => I.value,
            set: f => {
                I.value = f, P.fallbackLocale = I.value, Qe(P, _.value, f)
            }
        }),
        Me = ce(() => T.value),
        we = ce(() => g.value),
        oe = ce(() => v.value);

    function Ue() {
        return G(d) ? d : null
    }

    function We(f) {
        d = f, P.postTranslation = f
    }

    function Ve() {
        return w
    }

    function $e(f) {
        f !== null && (m = cn(f)), w = f, P.missing = m
    }
    const ae = (f, N, Y, j, me, nt) => {
        te();
        let Pe;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            l || (P.fallbackContext = n ? Tr() : void 0),
            Pe = f(P)
        }
        finally {
            __INTLIFY_PROD_DEVTOOLS__,
            l || (P.fallbackContext = void 0)
        }
        if (Y !== "translate exists" && K(Pe) && Pe === ut || Y === "translate exists" && !Pe) {
            const [Bn, hl] = N();
            return n && A ? j(n) : me(Bn)
        } else {
            if (nt(Pe)) return Pe;
            throw Q(J.UNEXPECTED_RETURN_TYPE)
        }
    };

    function Te(...f) {
        return ae(N => Reflect.apply(zt, null, [N, ...f]), () => Nt(...f), "translate", N => Reflect.apply(N.t, N, [...f]), N => N, N => p(N))
    }

    function He(...f) {
        const [N, Y, j] = f;
        if (j && !V(j)) throw Q(J.INVALID_ARGUMENT);
        return Te(N, Y, q({
            resolvedMessage: !0
        }, j || {}))
    }

    function he(...f) {
        return ae(N => Reflect.apply(en, null, [N, ...f]), () => Tt(...f), "datetime format", N => Reflect.apply(N.d, N, [...f]), () => jt, N => p(N))
    }

    function Ye(...f) {
        return ae(N => Reflect.apply(nn, null, [N, ...f]), () => It(...f), "number format", N => Reflect.apply(N.n, N, [...f]), () => jt, N => p(N))
    }

    function Ge(f) {
        return f.map(N => p(N) || K(N) || U(N) ? rn(String(N)) : N)
    }
    const xe = {
        normalize: Ge,
        interpolate: f => f,
        type: "vnode"
    };

    function Xe(...f) {
        return ae(N => {
            let Y;
            const j = N;
            try {
                j.processor = xe, Y = Reflect.apply(zt, null, [j, ...f])
            } finally {
                j.processor = null
            }
            return Y
        }, () => Nt(...f), "translate", N => N[ht](...f), N => [rn(N)], N => x(N))
    }

    function Oe(...f) {
        return ae(N => Reflect.apply(nn, null, [N, ...f]), () => It(...f), "number format", N => N[pt](...f), sn, N => p(N) || x(N))
    }

    function je(...f) {
        return ae(N => Reflect.apply(en, null, [N, ...f]), () => Tt(...f), "datetime format", N => N[Ot](...f), sn, N => p(N) || x(N))
    }

    function Ke(f) {
        S = f, P.pluralRules = S
    }

    function Be(f, N) {
        return ae(() => {
            if (!f) return !1;
            const Y = p(N) ? N : _.value,
                j = pe(Y),
                me = P.messageResolver(j, f);
            return i ? me != null : De(me) || ne(me) || p(me)
        }, () => [f], "translate exists", Y => Reflect.apply(Y.te, Y, [f, N]), zr, Y => U(Y))
    }

    function h(f) {
        let N = null;
        const Y = An(P, I.value, _.value);
        for (let j = 0; j < Y.length; j++) {
            const me = T.value[Y[j]] || {},
                nt = P.messageResolver(me, f);
            if (nt != null) {
                N = nt;
                break
            }
        }
        return N
    }

    function $(f) {
        const N = h(f);
        return N ? ? (n ? n.tm(f) || {} : {})
    }

    function pe(f) {
        return T.value[f] || {}
    }

    function ve(f, N) {
        if (a) {
            const Y = {
                [f]: N
            };
            for (const j in Y) le(Y, j) && et(Y[j]);
            N = Y[f]
        }
        T.value[f] = N, P.messages = T.value
    }

    function Je(f, N) {
        T.value[f] = T.value[f] || {};
        const Y = {
            [f]: N
        };
        if (a)
            for (const j in Y) le(Y, j) && et(Y[j]);
        N = Y[f], lt(N, T.value[f]), P.messages = T.value
    }

    function _t(f) {
        return g.value[f] || {}
    }

    function o(f, N) {
        g.value[f] = N, P.datetimeFormats = g.value, tn(P, f, N)
    }

    function c(f, N) {
        g.value[f] = q(g.value[f] || {}, N), P.datetimeFormats = g.value, tn(P, f, N)
    }

    function E(f) {
        return v.value[f] || {}
    }

    function R(f, N) {
        v.value[f] = N, P.numberFormats = v.value, an(P, f, N)
    }

    function X(f, N) {
        v.value[f] = q(v.value[f] || {}, N), P.numberFormats = v.value, an(P, f, N)
    }
    on++, n && st && (gt(n.locale, f => {
        u && (_.value = f, P.locale = f, Qe(P, _.value, I.value))
    }), gt(n.fallbackLocale, f => {
        u && (I.value = f, P.fallbackLocale = f, Qe(P, _.value, I.value))
    }));
    const M = {
        id: on,
        locale: W,
        fallbackLocale: Z,
        get inheritLocale() {
            return u
        },
        set inheritLocale(f) {
            u = f, f && n && (_.value = n.locale.value, I.value = n.fallbackLocale.value, Qe(P, _.value, I.value))
        },
        get availableLocales() {
            return Object.keys(T.value).sort()
        },
        messages: Me,
        get modifiers() {
            return O
        },
        get pluralRules() {
            return S || {}
        },
        get isGlobal() {
            return l
        },
        get missingWarn() {
            return k
        },
        set missingWarn(f) {
            k = f, P.missingWarn = k
        },
        get fallbackWarn() {
            return y
        },
        set fallbackWarn(f) {
            y = f, P.fallbackWarn = y
        },
        get fallbackRoot() {
            return A
        },
        set fallbackRoot(f) {
            A = f
        },
        get fallbackFormat() {
            return C
        },
        set fallbackFormat(f) {
            C = f, P.fallbackFormat = C
        },
        get warnHtmlMessage() {
            return b
        },
        set warnHtmlMessage(f) {
            b = f, P.warnHtmlMessage = f
        },
        get escapeParameter() {
            return L
        },
        set escapeParameter(f) {
            L = f, P.escapeParameter = f
        },
        t: Te,
        getLocaleMessage: pe,
        setLocaleMessage: ve,
        mergeLocaleMessage: Je,
        getPostTranslationHandler: Ue,
        setPostTranslationHandler: We,
        getMissingHandler: Ve,
        setMissingHandler: $e,
        [Yn]: Ke
    };
    return M.datetimeFormats = we, M.numberFormats = oe, M.rt = He, M.te = Be, M.tm = $, M.d = he, M.n = Ye, M.getDateTimeFormat = _t, M.setDateTimeFormat = o, M.mergeDateTimeFormat = c, M.getNumberFormat = E, M.setNumberFormat = R, M.mergeNumberFormat = X, M[Gn] = r, M[ht] = Xe, M[Ot] = je, M[pt] = Oe, M
}

function tl(e) {
    const t = p(e.locale) ? e.locale : Re,
        n = p(e.fallbackLocale) || x(e.fallbackLocale) || F(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t,
        r = G(e.missing) ? e.missing : void 0,
        l = U(e.silentTranslationWarn) || Ee(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0,
        a = U(e.silentFallbackWarn) || Ee(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0,
        s = U(e.fallbackRoot) ? e.fallbackRoot : !0,
        i = !!e.formatFallbackMessages,
        u = F(e.modifiers) ? e.modifiers : {},
        _ = e.pluralizationRules,
        I = G(e.postTranslation) ? e.postTranslation : void 0,
        T = p(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0,
        g = !!e.escapeParameterHtml,
        v = U(e.sync) ? e.sync : !0;
    let k = e.messages;
    if (F(e.sharedMessages)) {
        const L = e.sharedMessages;
        k = Object.keys(L).reduce((S, P) => {
            const B = S[P] || (S[P] = {});
            return q(B, L[P]), S
        }, k || {})
    }
    const {
        __i18n: y,
        __root: A,
        __injectWithOption: C
    } = e, w = e.datetimeFormats, m = e.numberFormats, d = e.flatJson, b = e.translateExistCompatible;
    return {
        locale: t,
        fallbackLocale: n,
        messages: k,
        flatJson: d,
        datetimeFormats: w,
        numberFormats: m,
        missing: r,
        missingWarn: l,
        fallbackWarn: a,
        fallbackRoot: s,
        fallbackFormat: i,
        modifiers: u,
        pluralRules: _,
        postTranslation: I,
        warnHtmlMessage: T,
        escapeParameter: g,
        messageResolver: e.messageResolver,
        inheritLocale: v,
        translateExistCompatible: b,
        __i18n: y,
        __root: A,
        __injectWithOption: C
    }
}

function Pt(e = {}, t) {
    {
        const n = Dt(tl(e)),
            {
                __extender: r
            } = e,
            l = {
                id: n.id,
                get locale() {
                    return n.locale.value
                },
                set locale(a) {
                    n.locale.value = a
                },
                get fallbackLocale() {
                    return n.fallbackLocale.value
                },
                set fallbackLocale(a) {
                    n.fallbackLocale.value = a
                },
                get messages() {
                    return n.messages.value
                },
                get datetimeFormats() {
                    return n.datetimeFormats.value
                },
                get numberFormats() {
                    return n.numberFormats.value
                },
                get availableLocales() {
                    return n.availableLocales
                },
                get formatter() {
                    return {
                        interpolate() {
                            return []
                        }
                    }
                },
                set formatter(a) {},
                get missing() {
                    return n.getMissingHandler()
                },
                set missing(a) {
                    n.setMissingHandler(a)
                },
                get silentTranslationWarn() {
                    return U(n.missingWarn) ? !n.missingWarn : n.missingWarn
                },
                set silentTranslationWarn(a) {
                    n.missingWarn = U(a) ? !a : a
                },
                get silentFallbackWarn() {
                    return U(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
                },
                set silentFallbackWarn(a) {
                    n.fallbackWarn = U(a) ? !a : a
                },
                get modifiers() {
                    return n.modifiers
                },
                get formatFallbackMessages() {
                    return n.fallbackFormat
                },
                set formatFallbackMessages(a) {
                    n.fallbackFormat = a
                },
                get postTranslation() {
                    return n.getPostTranslationHandler()
                },
                set postTranslation(a) {
                    n.setPostTranslationHandler(a)
                },
                get sync() {
                    return n.inheritLocale
                },
                set sync(a) {
                    n.inheritLocale = a
                },
                get warnHtmlInMessage() {
                    return n.warnHtmlMessage ? "warn" : "off"
                },
                set warnHtmlInMessage(a) {
                    n.warnHtmlMessage = a !== "off"
                },
                get escapeParameterHtml() {
                    return n.escapeParameter
                },
                set escapeParameterHtml(a) {
                    n.escapeParameter = a
                },
                get preserveDirectiveContent() {
                    return !0
                },
                set preserveDirectiveContent(a) {},
                get pluralizationRules() {
                    return n.pluralRules || {}
                },
                __composer: n,
                t(...a) {
                    const [s, i, u] = a, _ = {};
                    let I = null,
                        T = null;
                    if (!p(s)) throw Q(J.INVALID_ARGUMENT);
                    const g = s;
                    return p(i) ? _.locale = i : x(i) ? I = i : F(i) && (T = i), x(u) ? I = u : F(u) && (T = u), Reflect.apply(n.t, n, [g, I || T || {}, _])
                },
                rt(...a) {
                    return Reflect.apply(n.rt, n, [...a])
                },
                tc(...a) {
                    const [s, i, u] = a, _ = {
                        plural: 1
                    };
                    let I = null,
                        T = null;
                    if (!p(s)) throw Q(J.INVALID_ARGUMENT);
                    const g = s;
                    return p(i) ? _.locale = i : K(i) ? _.plural = i : x(i) ? I = i : F(i) && (T = i), p(u) ? _.locale = u : x(u) ? I = u : F(u) && (T = u), Reflect.apply(n.t, n, [g, I || T || {}, _])
                },
                te(a, s) {
                    return n.te(a, s)
                },
                tm(a) {
                    return n.tm(a)
                },
                getLocaleMessage(a) {
                    return n.getLocaleMessage(a)
                },
                setLocaleMessage(a, s) {
                    n.setLocaleMessage(a, s)
                },
                mergeLocaleMessage(a, s) {
                    n.mergeLocaleMessage(a, s)
                },
                d(...a) {
                    return Reflect.apply(n.d, n, [...a])
                },
                getDateTimeFormat(a) {
                    return n.getDateTimeFormat(a)
                },
                setDateTimeFormat(a, s) {
                    n.setDateTimeFormat(a, s)
                },
                mergeDateTimeFormat(a, s) {
                    n.mergeDateTimeFormat(a, s)
                },
                n(...a) {
                    return Reflect.apply(n.n, n, [...a])
                },
                getNumberFormat(a) {
                    return n.getNumberFormat(a)
                },
                setNumberFormat(a, s) {
                    n.setNumberFormat(a, s)
                },
                mergeNumberFormat(a, s) {
                    n.mergeNumberFormat(a, s)
                },
                getChoiceIndex(a, s) {
                    return -1
                }
            };
        return l.__extender = r, l
    }
}
const Ft = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};

function nl({
    slots: e
}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, l) => [...r, ...l.type === Nn ? l.children : [l]], []) : t.reduce((n, r) => {
        const l = e[r];
        return l && (n[r] = l()), n
    }, H())
}

function jn(e) {
    return Nn
}
const al = At({
        name: "i18n-t",
        props: q({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => K(e) || !isNaN(e)
            }
        }, Ft),
        setup(e, t) {
            const {
                slots: n,
                attrs: r
            } = t, l = e.i18n || Mt({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const a = Object.keys(n).filter(T => T !== "_"),
                    s = H();
                e.locale && (s.locale = e.locale), e.plural !== void 0 && (s.plural = p(e.plural) ? +e.plural : e.plural);
                const i = nl(t, a),
                    u = l[ht](e.keypath, i, s),
                    _ = q(H(), r),
                    I = p(e.tag) || V(e.tag) ? e.tag : jn();
                return Ln(I, _, u)
            }
        }
    }),
    un = al;

function rl(e) {
    return x(e) && !p(e[0])
}

function Kn(e, t, n, r) {
    const {
        slots: l,
        attrs: a
    } = t;
    return () => {
        const s = {
            part: !0
        };
        let i = H();
        e.locale && (s.locale = e.locale), p(e.format) ? s.key = e.format : V(e.format) && (p(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((g, v) => n.includes(v) ? q(H(), g, {
            [v]: e.format[v]
        }) : g, H()));
        const u = r(e.value, s, i);
        let _ = [s.key];
        x(u) ? _ = u.map((g, v) => {
            const k = l[g.type],
                y = k ? k({
                    [g.type]: g.value,
                    index: v,
                    parts: u
                }) : [g.value];
            return rl(y) && (y[0].key = `${g.type}-${v}`), y
        }) : p(u) && (_ = [u]);
        const I = q(H(), a),
            T = p(e.tag) || V(e.tag) ? e.tag : jn();
        return Ln(T, I, _)
    }
}
const ll = At({
        name: "i18n-n",
        props: q({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, Ft),
        setup(e, t) {
            const n = e.i18n || Mt({
                useScope: e.scope,
                __useComponent: !0
            });
            return Kn(e, t, Wn, (...r) => n[pt](...r))
        }
    }),
    fn = ll,
    sl = At({
        name: "i18n-d",
        props: q({
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, Ft),
        setup(e, t) {
            const n = e.i18n || Mt({
                useScope: e.scope,
                __useComponent: !0
            });
            return Kn(e, t, Un, (...r) => n[Ot](...r))
        }
    }),
    _n = sl;

function ol(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global; {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}

function cl(e) {
    const t = s => {
        const {
            instance: i,
            modifiers: u,
            value: _
        } = s;
        if (!i || !i.$) throw Q(J.UNEXPECTED_ERROR);
        const I = ol(e, i.$),
            T = mn(_);
        return [Reflect.apply(I.t, I, [...dn(T)]), I]
    };
    return {
        created: (s, i) => {
            const [u, _] = t(i);
            st && e.global === _ && (s.__i18nWatcher = gt(_.locale, () => {
                i.instance && i.instance.$forceUpdate()
            })), s.__composer = _, s.textContent = u
        },
        unmounted: s => {
            st && s.__i18nWatcher && (s.__i18nWatcher(), s.__i18nWatcher = void 0, delete s.__i18nWatcher), s.__composer && (s.__composer = void 0, delete s.__composer)
        },
        beforeUpdate: (s, {
            value: i
        }) => {
            if (s.__composer) {
                const u = s.__composer,
                    _ = mn(i);
                s.textContent = Reflect.apply(u.t, u, [...dn(_)])
            }
        },
        getSSRProps: s => {
            const [i] = t(s);
            return {
                textContent: i
            }
        }
    }
}

function mn(e) {
    if (p(e)) return {
        path: e
    };
    if (F(e)) {
        if (!("path" in e)) throw Q(J.REQUIRED_VALUE, "path");
        return e
    } else throw Q(J.INVALID_VALUE)
}

function dn(e) {
    const {
        path: t,
        locale: n,
        args: r,
        choice: l,
        plural: a
    } = e, s = {}, i = r || {};
    return p(n) && (s.locale = n), K(l) && (s.plural = l), K(a) && (s.plural = a), [t, i, s]
}

function il(e, t, ...n) {
    const r = F(n[0]) ? n[0] : {},
        l = !!r.useI18nComponentName;
    (U(r.globalInstall) ? r.globalInstall : !0) && ([l ? "i18n" : un.name, "I18nT"].forEach(s => e.component(s, un)), [fn.name, "I18nN"].forEach(s => e.component(s, fn)), [_n.name, "I18nD"].forEach(s => e.component(s, _n))), e.directive("t", cl(t))
}

function ul(e, t, n) {
    return {
        beforeCreate() {
            const r = qe();
            if (!r) throw Q(J.UNEXPECTED_ERROR);
            const l = this.$options;
            if (l.i18n) {
                const a = l.i18n;
                if (l.__i18n && (a.__i18n = l.__i18n), a.__root = t, this === this.$root) this.$i18n = En(e, a);
                else {
                    a.__injectWithOption = !0, a.__extender = n.__vueI18nExtend, this.$i18n = Pt(a);
                    const s = this.$i18n;
                    s.__extender && (s.__disposer = s.__extender(this.$i18n))
                }
            } else if (l.__i18n)
                if (this === this.$root) this.$i18n = En(e, l);
                else {
                    this.$i18n = Pt({
                        __i18n: l.__i18n,
                        __injectWithOption: !0,
                        __extender: n.__vueI18nExtend,
                        __root: t
                    });
                    const a = this.$i18n;
                    a.__extender && (a.__disposer = a.__extender(this.$i18n))
                }
            else this.$i18n = e;
            l.__i18nGlobal && Xn(t, l, l), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, s) => this.$i18n.te(a, s), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = a => this.$i18n.tm(a), n.__setInstance(r, this.$i18n)
        },
        mounted() {},
        unmounted() {
            const r = qe();
            if (!r) throw Q(J.UNEXPECTED_ERROR);
            const l = this.$i18n;
            delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, l.__disposer && (l.__disposer(), delete l.__disposer, delete l.__extender), n.__deleteInstance(r), delete this.$i18n
        }
    }
}

function En(e, t) {
    e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Yn](t.pluralizationRules || e.pluralizationRules);
    const n = ft(e.locale, {
        messages: t.messages,
        __i18n: t.__i18n
    });
    return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])), e
}
const fl = ge("global-vue-i18n");

function vl(e = {}, t) {
    const n = __VUE_I18N_LEGACY_API__ && U(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
        r = U(e.globalInjection) ? e.globalInjection : !0,
        l = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0,
        a = new Map,
        [s, i] = _l(e, n),
        u = ge("");

    function _(g) {
        return a.get(g) || null
    }

    function I(g, v) {
        a.set(g, v)
    }

    function T(g) {
        a.delete(g)
    } {
        const g = {
            get mode() {
                return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition"
            },
            get allowComposition() {
                return l
            },
            async install(v, ...k) {
                if (v.__VUE_I18N_SYMBOL__ = u, v.provide(v.__VUE_I18N_SYMBOL__, g), F(k[0])) {
                    const C = k[0];
                    g.__composerExtend = C.__composerExtend, g.__vueI18nExtend = C.__vueI18nExtend
                }
                let y = null;
                !n && r && (y = bl(v, g.global)), __VUE_I18N_FULL_INSTALL__ && il(v, g, ...k), __VUE_I18N_LEGACY_API__ && n && v.mixin(ul(i, i.__composer, g));
                const A = v.unmount;
                v.unmount = () => {
                    y && y(), g.dispose(), A()
                }
            },
            get global() {
                return i
            },
            dispose() {
                s.stop()
            },
            __instances: a,
            __getInstance: _,
            __setInstance: I,
            __deleteInstance: T
        };
        return g
    }
}

function Mt(e = {}) {
    const t = qe();
    if (t == null) throw Q(J.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Q(J.NOT_INSTALLED);
    const n = ml(t),
        r = El(n),
        l = xn(t),
        a = dl(e, l);
    if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition) throw Q(J.NOT_AVAILABLE_IN_LEGACY_MODE);
        return Tl(t, a, r, e)
    }
    if (a === "global") return Xn(r, e, l), r;
    if (a === "parent") {
        let u = gl(n, t, e.__useComponent);
        return u == null && (u = r), u
    }
    const s = n;
    let i = s.__getInstance(t);
    if (i == null) {
        const u = q({}, e);
        "__i18n" in l && (u.__i18n = l.__i18n), r && (u.__root = r), i = Dt(u), s.__composerExtend && (i[vt] = s.__composerExtend(i)), Nl(s, t, i), s.__setInstance(t, i)
    }
    return i
}

function _l(e, t, n) {
    const r = Jn(); {
        const l = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Pt(e)) : r.run(() => Dt(e));
        if (l == null) throw Q(J.UNEXPECTED_ERROR);
        return [r, l]
    }
}

function ml(e) {
    {
        const t = Qn(e.isCE ? fl : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t) throw Q(e.isCE ? J.NOT_INSTALLED_WITH_PROVIDE : J.UNEXPECTED_ERROR);
        return t
    }
}

function dl(e, t) {
    return ct(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function El(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}

function gl(e, t, n = !1) {
    let r = null;
    const l = t.root;
    let a = Ll(t, n);
    for (; a != null;) {
        const s = e;
        if (e.mode === "composition") r = s.__getInstance(a);
        else if (__VUE_I18N_LEGACY_API__) {
            const i = s.__getInstance(a);
            i != null && (r = i.__composer, n && r && !r[Gn] && (r = null))
        }
        if (r != null || l === a) break;
        a = a.parent
    }
    return r
}

function Ll(e, t = !1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}

function Nl(e, t, n) {
    qn(() => {}, t), Zn(() => {
        const r = n;
        e.__deleteInstance(t);
        const l = r[vt];
        l && (l(), delete r[vt])
    }, t)
}

function Tl(e, t, n, r = {}) {
    const l = t === "local",
        a = Tn(null);
    if (l && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n)) throw Q(J.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const s = U(r.inheritLocale) ? r.inheritLocale : !p(r.locale),
        i = Ce(!l || s ? n.locale.value : p(r.locale) ? r.locale : Re),
        u = Ce(!l || s ? n.fallbackLocale.value : p(r.fallbackLocale) || x(r.fallbackLocale) || F(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value),
        _ = Ce(ft(i.value, r)),
        I = Ce(F(r.datetimeFormats) ? r.datetimeFormats : {
            [i.value]: {}
        }),
        T = Ce(F(r.numberFormats) ? r.numberFormats : {
            [i.value]: {}
        }),
        g = l ? n.missingWarn : U(r.missingWarn) || Ee(r.missingWarn) ? r.missingWarn : !0,
        v = l ? n.fallbackWarn : U(r.fallbackWarn) || Ee(r.fallbackWarn) ? r.fallbackWarn : !0,
        k = l ? n.fallbackRoot : U(r.fallbackRoot) ? r.fallbackRoot : !0,
        y = !!r.fallbackFormat,
        A = G(r.missing) ? r.missing : null,
        C = G(r.postTranslation) ? r.postTranslation : null,
        w = l ? n.warnHtmlMessage : U(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
        m = !!r.escapeParameter,
        d = l ? n.modifiers : F(r.modifiers) ? r.modifiers : {},
        b = r.pluralRules || l && n.pluralRules;

    function L() {
        return [i.value, u.value, _.value, I.value, T.value]
    }
    const O = ce({
            get: () => a.value ? a.value.locale.value : i.value,
            set: h => {
                a.value && (a.value.locale.value = h), i.value = h
            }
        }),
        S = ce({
            get: () => a.value ? a.value.fallbackLocale.value : u.value,
            set: h => {
                a.value && (a.value.fallbackLocale.value = h), u.value = h
            }
        }),
        P = ce(() => a.value ? a.value.messages.value : _.value),
        B = ce(() => I.value),
        te = ce(() => T.value);

    function W() {
        return a.value ? a.value.getPostTranslationHandler() : C
    }

    function Z(h) {
        a.value && a.value.setPostTranslationHandler(h)
    }

    function Me() {
        return a.value ? a.value.getMissingHandler() : A
    }

    function we(h) {
        a.value && a.value.setMissingHandler(h)
    }

    function oe(h) {
        return L(), h()
    }

    function Ue(...h) {
        return a.value ? oe(() => Reflect.apply(a.value.t, null, [...h])) : oe(() => "")
    }

    function We(...h) {
        return a.value ? Reflect.apply(a.value.rt, null, [...h]) : ""
    }

    function Ve(...h) {
        return a.value ? oe(() => Reflect.apply(a.value.d, null, [...h])) : oe(() => "")
    }

    function $e(...h) {
        return a.value ? oe(() => Reflect.apply(a.value.n, null, [...h])) : oe(() => "")
    }

    function ae(h) {
        return a.value ? a.value.tm(h) : {}
    }

    function Te(h, $) {
        return a.value ? a.value.te(h, $) : !1
    }

    function He(h) {
        return a.value ? a.value.getLocaleMessage(h) : {}
    }

    function he(h, $) {
        a.value && (a.value.setLocaleMessage(h, $), _.value[h] = $)
    }

    function Ye(h, $) {
        a.value && a.value.mergeLocaleMessage(h, $)
    }

    function Ge(h) {
        return a.value ? a.value.getDateTimeFormat(h) : {}
    }

    function tt(h, $) {
        a.value && (a.value.setDateTimeFormat(h, $), I.value[h] = $)
    }

    function xe(h, $) {
        a.value && a.value.mergeDateTimeFormat(h, $)
    }

    function Xe(h) {
        return a.value ? a.value.getNumberFormat(h) : {}
    }

    function Oe(h, $) {
        a.value && (a.value.setNumberFormat(h, $), T.value[h] = $)
    }

    function je(h, $) {
        a.value && a.value.mergeNumberFormat(h, $)
    }
    const Ke = {
        get id() {
            return a.value ? a.value.id : -1
        },
        locale: O,
        fallbackLocale: S,
        messages: P,
        datetimeFormats: B,
        numberFormats: te,
        get inheritLocale() {
            return a.value ? a.value.inheritLocale : s
        },
        set inheritLocale(h) {
            a.value && (a.value.inheritLocale = h)
        },
        get availableLocales() {
            return a.value ? a.value.availableLocales : Object.keys(_.value)
        },
        get modifiers() {
            return a.value ? a.value.modifiers : d
        },
        get pluralRules() {
            return a.value ? a.value.pluralRules : b
        },
        get isGlobal() {
            return a.value ? a.value.isGlobal : !1
        },
        get missingWarn() {
            return a.value ? a.value.missingWarn : g
        },
        set missingWarn(h) {
            a.value && (a.value.missingWarn = h)
        },
        get fallbackWarn() {
            return a.value ? a.value.fallbackWarn : v
        },
        set fallbackWarn(h) {
            a.value && (a.value.missingWarn = h)
        },
        get fallbackRoot() {
            return a.value ? a.value.fallbackRoot : k
        },
        set fallbackRoot(h) {
            a.value && (a.value.fallbackRoot = h)
        },
        get fallbackFormat() {
            return a.value ? a.value.fallbackFormat : y
        },
        set fallbackFormat(h) {
            a.value && (a.value.fallbackFormat = h)
        },
        get warnHtmlMessage() {
            return a.value ? a.value.warnHtmlMessage : w
        },
        set warnHtmlMessage(h) {
            a.value && (a.value.warnHtmlMessage = h)
        },
        get escapeParameter() {
            return a.value ? a.value.escapeParameter : m
        },
        set escapeParameter(h) {
            a.value && (a.value.escapeParameter = h)
        },
        t: Ue,
        getPostTranslationHandler: W,
        setPostTranslationHandler: Z,
        getMissingHandler: Me,
        setMissingHandler: we,
        rt: We,
        d: Ve,
        n: $e,
        tm: ae,
        te: Te,
        getLocaleMessage: He,
        setLocaleMessage: he,
        mergeLocaleMessage: Ye,
        getDateTimeFormat: Ge,
        setDateTimeFormat: tt,
        mergeDateTimeFormat: xe,
        getNumberFormat: Xe,
        setNumberFormat: Oe,
        mergeNumberFormat: je
    };

    function Be(h) {
        h.locale.value = i.value, h.fallbackLocale.value = u.value, Object.keys(_.value).forEach($ => {
            h.mergeLocaleMessage($, _.value[$])
        }), Object.keys(I.value).forEach($ => {
            h.mergeDateTimeFormat($, I.value[$])
        }), Object.keys(T.value).forEach($ => {
            h.mergeNumberFormat($, T.value[$])
        }), h.escapeParameter = m, h.fallbackFormat = y, h.fallbackRoot = k, h.fallbackWarn = v, h.missingWarn = g, h.warnHtmlMessage = w
    }
    return zn(() => {
        if (e.proxy == null || e.proxy.$i18n == null) throw Q(J.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const h = a.value = e.proxy.$i18n.__composer;
        t === "global" ? (i.value = h.locale.value, u.value = h.fallbackLocale.value, _.value = h.messages.value, I.value = h.datetimeFormats.value, T.value = h.numberFormats.value) : l && Be(h)
    }), Ke
}
const Il = ["locale", "fallbackLocale", "availableLocales"],
    gn = ["t", "rt", "d", "n", "tm", "te"];

function bl(e, t) {
    const n = Object.create(null);
    return Il.forEach(l => {
        const a = Object.getOwnPropertyDescriptor(t, l);
        if (!a) throw Q(J.UNEXPECTED_ERROR);
        const s = ea(a.value) ? {
            get() {
                return a.value.value
            },
            set(i) {
                a.value.value = i
            }
        } : {
            get() {
                return a.get && a.get()
            }
        };
        Object.defineProperty(n, l, s)
    }), e.config.globalProperties.$i18n = n, gn.forEach(l => {
        const a = Object.getOwnPropertyDescriptor(t, l);
        if (!a || !a.value) throw Q(J.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${l}`, a)
    }), () => {
        delete e.config.globalProperties.$i18n, gn.forEach(l => {
            delete e.config.globalProperties[`$${l}`]
        })
    }
}
Zr();
__INTLIFY_JIT_COMPILATION__ ? Bt(Vr) : Bt(Wr);
Er(Qa);
gr(An);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = _e();
    e.__INTLIFY__ = !0, lr(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
export {
    vl as c, pl as s
};