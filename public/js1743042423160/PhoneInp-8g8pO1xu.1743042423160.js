import {
    c as i,
    r as x,
    m as l,
    q as I,
    A as g,
    D as e,
    x as P,
    H as r,
    I as u,
    y as S,
    j as c,
    P as k
} from "./vant-HuvvDBy8.1743042423160.js";
import {
    u as y
} from "./vuex-BbBGhnoV.1743042423160.js";
import {
    _ as N
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
const V = {
        class: "inp-con"
    },
    A = {
        class: "inp"
    },
    B = ["placeholder"],
    D = {
        __name: "PhoneInp",
        props: {
            account: [Number, String]
        },
        emits: ["update:account"],
        setup(m, {
            emit: d
        }) {
            const v = y(),
                a = i(() => v.state.global.areaId),
                _ = m,
                h = d,
                p = i({
                    get() {
                        return _.account
                    },
                    set(n) {
                        h("update:account", n)
                    }
                }),
                s = x(!1);
            return (n, o) => {
                const f = l("van-icon"),
                    w = l("AreaPopup");
                return I(), g("div", V, [e("div", A, [e("div", {
                    class: "set_area",
                    onClick: o[0] || (o[0] = t => s.value = !0)
                }, [o[3] || (o[3] = P(" + ")), r(e("span", null, S(a.value), 513), [
                    [u, a.value]
                ]), r(e("span", null, "--", 512), [
                    [u, !a.value]
                ]), c(f, {
                    name: "arrow-down",
                    class: "icon"
                })]), r(e("input", {
                    type: "text",
                    placeholder: n.$t("user.doc4"),
                    "onUpdate:modelValue": o[1] || (o[1] = t => p.value = t),
                    onkeyup: "this.value=this.value.replace(/[, ]/g,'')"
                }, null, 8, B), [
                    [k, p.value]
                ])]), c(w, {
                    show: s.value,
                    "onUpdate:show": o[2] || (o[2] = t => s.value = t)
                }, null, 8, ["show"])])
            }
        }
    },
    O = N(D, [
        ["__scopeId", "data-v-39429002"]
    ]);
export {
    O as
    default
};