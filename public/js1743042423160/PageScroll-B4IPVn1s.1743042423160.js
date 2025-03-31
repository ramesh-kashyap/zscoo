import {
    u as A
} from "./vuex-BbBGhnoV.1743042423160.js";
import {
    _ as P
} from "./index-CMhunkwn.1743042423160.js";
import {
    az as W,
    c as C,
    r,
    aA as D,
    J as x,
    b as N,
    o as O,
    a as U,
    m as d,
    q as a,
    A as i,
    aB as l,
    G as $,
    t as u,
    v as h,
    z as c,
    D as q,
    aC as G,
    g as J,
    n as w
} from "./vant-HuvvDBy8.1743042423160.js";
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
const j = {
        class: "page-container"
    },
    K = {
        key: 1,
        class: "footer"
    },
    Q = {
        __name: "PageScroll",
        props: {
            title: String,
            headerShow: {
                type: Boolean,
                default: !0
            },
            headerFixed: {
                type: Boolean,
                default: !1
            },
            type: {
                type: String,
                default: "main"
            },
            footerShow: {
                type: Boolean,
                default: !1
            },
            refresh: {
                type: [Boolean, String],
                default: "no set"
            },
            csShow: {
                type: Boolean,
                default: !1
            },
            isWatchScroll: {
                type: Boolean,
                default: !1
            },
            bgColor: {
                type: String,
                default: "#ffffff"
            }
        },
        emits: ["beforeReady", "init", "ready", "update:refresh", "onDeactivated", "refresh", "hide"],
        setup(o, {
            emit: F
        }) {
            const R = A(),
                {
                    proxy: p
                } = J(),
                f = W(),
                m = o,
                t = F,
                v = C({
                    get() {
                        return m.refresh
                    },
                    set(e) {
                        t("update:refresh", e)
                    }
                });

            function z() {
                t("refresh")
            }
            const y = r(!1),
                S = r(!1),
                g = r(!1),
                s = r(null),
                n = r(null),
                E = C(() => parseFloat(getComputedStyle(document.documentElement).fontSize));

            function M() {
                w(() => {
                    m.refresh === "no set" ? n.value = s.value : n.value = s.value.$el, n.value.addEventListener("scroll", k())
                })
            }

            function k() {
                return p.$common.debounce(() => {
                    const e = n.value.scrollTop;
                    R.commit("SET_SCROLL_TOP", e / E.value)
                }, 50)
            }

            function _() {
                w(() => {
                    t("ready")
                })
            }
            const B = p.$common.throttle(() => {
                _(), S.value = !!f.header, g.value = !!f.footer, y.value = !!f.bg
            }, 1e3);
            return D(() => {
                t("onDeactivated")
            }), x(() => {
                B()
            }), N(() => {
                t("beforeReady")
            }), O(() => {
                t("init"), m.isWatchScroll ? M() : n.value && n.value.removeEventListener("scroll", k), B()
            }), D(() => {
                t("hide")
            }), U(() => {
                t("hide")
            }), (e, b) => {
                const H = d("MainHeader"),
                    I = d("InsideHeader"),
                    L = d("van-pull-refresh"),
                    T = d("MainFooter");
                return a(), i("div", {
                    class: $(["page", {
                        nobg: y.value
                    }]),
                    style: G({
                        backgroundColor: o.bgColor
                    })
                }, [l(e.$slots, "bg", {}, void 0, !0), o.headerShow ? (a(), i("div", {
                    key: 0,
                    class: $(["headers", {
                        fixed: o.headerFixed
                    }])
                }, [S.value ? l(e.$slots, "header", {
                    key: 0
                }, void 0, !0) : o.type === "main" ? (a(), u(H, {
                    key: 1
                }, {
                    default: h(() => [l(e.$slots, "headerRight", {}, void 0, !0)]),
                    _: 3
                })) : o.type === "inside" ? (a(), u(I, {
                    key: 2,
                    title: o.title
                }, {
                    default: h(() => [l(e.$slots, "headerRight", {}, void 0, !0)]),
                    _: 3
                }, 8, ["title"])) : c("", !0)], 2)) : c("", !0), q("div", j, [o.refresh === "no set" ? (a(), i("div", {
                    key: 0,
                    class: "scroll",
                    ref_key: "scrollDom",
                    ref: s
                }, [l(e.$slots, "default", {}, void 0, !0)], 512)) : (a(), u(L, {
                    key: 1,
                    modelValue: v.value,
                    "onUpdate:modelValue": b[0] || (b[0] = V => v.value = V),
                    onRefresh: z,
                    class: "scroll",
                    ref_key: "scrollDom",
                    ref: s
                }, {
                    default: h(() => [l(e.$slots, "default", {}, void 0, !0)]),
                    _: 3
                }, 8, ["modelValue"]))]), o.footerShow ? (a(), i("div", K, [g.value ? l(e.$slots, "footer", {
                    key: 0
                }, void 0, !0) : o.type === "main" ? (a(), u(T, {
                    key: 1
                })) : c("", !0)])) : c("", !0)], 6)
            }
        }
    },
    me = P(Q, [
        ["__scopeId", "data-v-ebfcdf27"]
    ]);
export {
    me as
    default
};