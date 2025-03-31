import {
    _ as e
} from "./index-CMhunkwn.1743042423160.js";
import {
    m as i,
    q as n,
    t as m,
    v as r,
    x as d,
    y as l
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
const s = {
        __name: "ComBtn",
        props: {
            text: String,
            loading: Boolean,
            loadingText: String,
            disabled: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            return (o, p) => {
                const a = i("van-button");
                return n(), m(a, {
                    class: "com-btn",
                    disabled: t.disabled,
                    loading: t.loading,
                    "loading-text": t.loadingText ? t.loadingText : o.$t("load.submit")
                }, {
                    default: r(() => [d(l(t.text), 1)]),
                    _: 1
                }, 8, ["disabled", "loading", "loading-text"])
            }
        }
    },
    w = e(s, [
        ["__scopeId", "data-v-b1cead3b"]
    ]);
export {
    w as
    default
};