import {
    c as m,
    r as c,
    q as u,
    A as v,
    D as s,
    H as _,
    aD as f,
    x as w,
    u as i
} from "./vant-HuvvDBy8.1743042423160.js";
import {
    e as g,
    a as x
} from "./eye_close-DHw4nQ6k.1743042423160.js";
import {
    _ as y
} from "./index-CMhunkwn.1743042423160.js";
import "./vuei18n-CNpj1MMJ.1743042423160.js";
import "./corejs-C4iS2aBk.1743042423160.js";
import "./vuex-BbBGhnoV.1743042423160.js";
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
const h = {
        class: "inp-con"
    },
    k = {
        class: "inp"
    },
    D = ["type", "placeholder"],
    P = {
        class: "icon"
    },
    B = ["src"],
    I = {
        __name: "PsdInp",
        props: {
            password: String,
            place: String
        },
        emits: ["update:password"],
        setup(o, {
            emit: n
        }) {
            const d = o,
                l = n,
                r = m({
                    get() {
                        return d.password
                    },
                    set(p) {
                        l("update:password", p)
                    }
                }),
                t = c("password");
            return (p, e) => (u(), v("div", h, [s("div", k, [_(s("input", {
                type: t.value,
                "onUpdate:modelValue": e[0] || (e[0] = a => r.value = a),
                onkeyup: "this.value=this.value.replace(/[, ]/g,'')",
                placeholder: o.place ? o.place : p.$t("user.doc6")
            }, null, 8, D), [
                [f, r.value]
            ]), s("div", P, [e[2] || (e[2] = w(" 　")), s("img", {
                src: t.value === "text" ? i(g) : i(x),
                onClick: e[1] || (e[1] = a => t.value = t.value === "text" ? "password" : "text")
            }, null, 8, B)])])]))
        }
    },
    G = y(I, [
        ["__scopeId", "data-v-8ad53e6c"]
    ]);
export {
    G as
    default
};