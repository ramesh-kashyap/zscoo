import {
    c as y,
    r as v,
    w as C,
    m as d,
    O as B,
    q as u,
    t as D,
    v as R,
    D as n,
    x as G,
    y as A,
    j as g,
    H as w,
    P as I,
    A as f,
    z as M,
    I as T,
    F as j,
    E as U
} from "./vant-HuvvDBy8.1743042423160.js";
import {
    u as F
} from "./vuex-BbBGhnoV.1743042423160.js";
import {
    _ as N,
    a as Q
} from "./index-CMhunkwn.1743042423160.js";
import "./vuei18n-CNpj1MMJ.1743042423160.js";
import "./corejs-C4iS2aBk.1743042423160.js";
import "./cryptojs-CoXwImy0.1743042423160.js";
import "./qrcodejs2fix-DgOg_YiY.1743042423160.js";
import "./vueclipboard3-CqX9AMfX.1743042423160.js";
import "./uaParserJs-BOtcR8eZ.1743042423160.js";
import "./compressorjs-DrlFxDYZ.1743042423160.js";
import "./vuerouter-4LNHEVvx.1743042423160.js";
import "./axios-upsvKRUO.1743042423160.js";
import "./swiper-C1TWdcvt.1743042423160.js";
import "./bignumberjs-DOH-f-tm.1743042423160.js";
import "./validator-DDTxR21m.1743042423160.js";
import "./vanttouchemulator-Cv_in60N.1743042423160.js";
const W = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAAC7u7u6urq6urq7u7u8vLy6urq6urq6urq6urq6urq6urq8vLy4uLi/v7/BwcG7u7u8vLy6urriFnokAAAAEnRSTlMAYvn0mgnq4sjHiWlXJBgtS0m6ntQCAAAAt0lEQVQ4y4VTWxKEIAwrCMjLV+9/2F11p7WrTvLhRFIoKS0pYg85eZ9y6JHumMLAgiFMZBGrZwNfzSlz4RvKrPoy8gPGRfarbiPmX/7CLyjnPSq/oh7+PL/C726Dur8RDkRR/jZqJ2m0SmikLpyI3E7cl8iufsnQ9ohTb5ccWfghueOja5kS2wircyJj0v3r7GEATAEvCW3iQmmpVy31pqVGjwWfGzUMbDnUtLDt8eDg0cPDC8f/A+zNMG9Uvh0nAAAAAElFTkSuQmCC",
    $ = {
        class: "popup-con"
    },
    z = {
        class: "popup-title"
    },
    O = {
        class: "search-con"
    },
    J = ["placeholder"],
    K = {
        class: "list"
    },
    Z = ["onClick"],
    H = {
        class: "txt"
    },
    X = {
        __name: "AreaPopup",
        props: {
            show: Boolean
        },
        emits: ["update:show"],
        setup(L, {
            emit: E
        }) {
            const {
                _getCountryList: S
            } = Q, h = F(), k = L, q = E, _ = y(() => h.state.global.countryList), i = y({
                get() {
                    return k.show
                },
                set(t) {
                    q("update:show", t)
                }
            }), a = v(""), r = v([]), l = v([]);
            C(() => _.value, async t => {
                t.length === 0 && await S(), V(_.value)
            }, {
                immediate: !0
            });

            function V(t) {
                const e = t.filter((o, c, p) => c === p.findIndex(m => m.countryCode === o.countryCode));
                l.value = e, r.value = e, r.value.forEach(o => {
                    o.codename = o.name + o.mobilePrefix
                })
            }
            C(() => a.value, b);

            function b() {
                l.value = a.value !== "" ? x(a.value) : r.value
            }

            function x(t) {
                let e = [];
                for (let o = 0; o < r.value.length; o++) r.value[o].codename.indexOf(t) >= 0 && e.push(r.value[o]);
                return e
            }

            function P(t) {
                i.value = !1, h.commit("SET_AREAID", t)
            }
            return (t, e) => {
                const o = d("van-icon"),
                    c = d("ListEmpty"),
                    p = d("van-popup"),
                    m = B("no-space");
                return u(), D(p, {
                    show: i.value,
                    "onUpdate:show": e[3] || (e[3] = s => i.value = s),
                    position: "bottom",
                    round: ""
                }, {
                    default: R(() => [n("div", $, [n("div", z, [G(A(t.$t("user.doc28")) + " ", 1), n("div", {
                        class: "cross",
                        onClick: e[0] || (e[0] = s => i.value = !1)
                    }, [g(o, {
                        name: "cross"
                    })])]), n("div", O, [e[5] || (e[5] = n("div", {
                        class: "ico"
                    }, null, -1)), w(n("input", {
                        class: "inp",
                        type: "text",
                        placeholder: t.$t("common.doc4"),
                        "onUpdate:modelValue": e[1] || (e[1] = s => a.value = s)
                    }, null, 8, J), [
                        [I, a.value],
                        [m]
                    ]), a.value != "" ? (u(), f("div", {
                        key: 0,
                        class: "closes",
                        onClick: e[2] || (e[2] = s => a.value = "")
                    }, e[4] || (e[4] = [n("img", {
                        src: W
                    }, null, -1)]))) : M("", !0)]), n("div", K, [w(g(c, {
                        desc: t.$t("user.doc29")
                    }, null, 8, ["desc"]), [
                        [T, l.value.length === 0]
                    ]), (u(!0), f(j, null, U(l.value, s => (u(), f("div", {
                        class: "item",
                        key: s.countryCode,
                        onClick: Y => P(s.mobilePrefix)
                    }, [n("div", H, A(s.name) + "（+" + A(s.mobilePrefix) + "）", 1)], 8, Z))), 128))])])]),
                    _: 1
                }, 8, ["show"])
            }
        }
    },
    fe = N(X, [
        ["__scopeId", "data-v-0c3bba1b"]
    ]);
export {
    fe as
    default
};