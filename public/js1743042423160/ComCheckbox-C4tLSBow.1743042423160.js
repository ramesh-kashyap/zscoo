import {
    _ as i
} from "./index-CMhunkwn.1743042423160.js";
import {
    c as n,
    m as d,
    q as l,
    t as u,
    v as _,
    aB as k
} from "./vant-HuvvDBy8.1743042423160.js";
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
        __name: "ComCheckbox",
        props: {
            checked: Boolean
        },
        emits: ["update:checked"],
        setup(r, {
            emit: c
        }) {
            const m = r,
                p = c,
                o = n({
                    get() {
                        return m.checked
                    },
                    set(e) {
                        p("update:checked", e)
                    }
                });
            return (e, t) => {
                const a = d("van-checkbox");
                return l(), u(a, {
                    modelValue: o.value,
                    "onUpdate:modelValue": t[0] || (t[0] = s => o.value = s),
                    shape: "square",
                    "icon-size": "0.32rem",
                    "checked-color": "#13C1A4"
                }, {
                    default: _(() => [k(e.$slots, "default", {}, void 0, !0)]),
                    _: 3
                }, 8, ["modelValue"])
            }
        }
    },
    j = i(h, [
        ["__scopeId", "data-v-a4e60512"]
    ]);
export {
    j as
    default
};