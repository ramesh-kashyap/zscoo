import {
    a as ki,
    c as xi
} from "./corejs-C4iS2aBk.1743042423160.js";
var J = {
    exports: {}
};
(function(Q, $) {
    (function(x, u) {
        var pi = "1.0.40",
            R = "",
            ii = "?",
            j = "function",
            M = "undefined",
            V = "object",
            q = "string",
            ei = "major",
            e = "model",
            a = "name",
            i = "type",
            o = "vendor",
            r = "version",
            p = "architecture",
            _ = "console",
            n = "mobile",
            b = "tablet",
            m = "smarttv",
            g = "wearable",
            F = "embedded",
            G = 500,
            z = "Amazon",
            O = "Apple",
            oi = "ASUS",
            ai = "BlackBerry",
            C = "Browser",
            P = "Chrome",
            hi = "Edge",
            U = "Firefox",
            S = "Google",
            ri = "Huawei",
            H = "LG",
            W = "Microsoft",
            ti = "Motorola",
            T = "Opera",
            A = "Samsung",
            si = "Sharp",
            B = "Sony",
            Y = "Xiaomi",
            X = "Zebra",
            ni = "Facebook",
            bi = "Chromium OS",
            wi = "Mac OS",
            li = " Browser",
            vi = function(w, l) {
                var s = {};
                for (var d in w) l[d] && l[d].length % 2 === 0 ? s[d] = l[d].concat(w[d]) : s[d] = w[d];
                return s
            },
            I = function(w) {
                for (var l = {}, s = 0; s < w.length; s++) l[w[s].toUpperCase()] = w[s];
                return l
            },
            ci = function(w, l) {
                return typeof w === q ? y(l).indexOf(y(w)) !== -1 : !1
            },
            y = function(w) {
                return w.toLowerCase()
            },
            fi = function(w) {
                return typeof w === q ? w.replace(/[^\d\.]/g, R).split(".")[0] : u
            },
            Z = function(w, l) {
                if (typeof w === q) return w = w.replace(/^\s\s*/, R), typeof l === M ? w : w.substring(0, G)
            },
            N = function(w, l) {
                for (var s = 0, d, k, v, c, t, f; s < l.length && !t;) {
                    var K = l[s],
                        mi = l[s + 1];
                    for (d = k = 0; d < K.length && !t && K[d];)
                        if (t = K[d++].exec(w), t)
                            for (v = 0; v < mi.length; v++) f = t[++k], c = mi[v], typeof c === V && c.length > 0 ? c.length === 2 ? typeof c[1] == j ? this[c[0]] = c[1].call(this, f) : this[c[0]] = c[1] : c.length === 3 ? typeof c[1] === j && !(c[1].exec && c[1].test) ? this[c[0]] = f ? c[1].call(this, f, c[2]) : u : this[c[0]] = f ? f.replace(c[1], c[2]) : u : c.length === 4 && (this[c[0]] = f ? c[3].call(this, f.replace(c[1], c[2])) : u) : this[c] = f || u;
                    s += 2
                }
            },
            L = function(w, l) {
                for (var s in l)
                    if (typeof l[s] === V && l[s].length > 0) {
                        for (var d = 0; d < l[s].length; d++)
                            if (ci(l[s][d], w)) return s === ii ? u : s
                    } else if (ci(l[s], w)) return s === ii ? u : s;
                return l.hasOwnProperty("*") ? l["*"] : w
            },
            gi = {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            },
            di = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            },
            ui = {
                browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [r, [a, "Chrome"]],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [r, [a, "Edge"]],
                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                    [a, r],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [r, [a, T + " Mini"]],
                    [/\bop(?:rg)?x\/([\w\.]+)/i],
                    [r, [a, T + " GX"]],
                    [/\bopr\/([\w\.]+)/i],
                    [r, [a, T]],
                    [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                    [r, [a, "Baidu"]],
                    [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                    [r, [a, "Maxthon"]],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                    [a, r],
                    [/quark(?:pc)?\/([-\w\.]+)/i],
                    [r, [a, "Quark"]],
                    [/\bddg\/([\w\.]+)/i],
                    [r, [a, "DuckDuckGo"]],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [r, [a, "UC" + C]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                    [r, [a, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [r, [a, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [r, [a, "IE"]],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [r, [a, "Yandex"]],
                    [/slbrowser\/([\w\.]+)/i],
                    [r, [a, "Smart Lenovo " + C]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                        [a, /(.+)/, "$1 Secure " + C], r
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [r, [a, U + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [r, [a, T + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [r, [a, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [r, [a, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [r, [a, T + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [r, [a, "MIUI" + li]],
                    [/fxios\/([\w\.-]+)/i],
                    [r, [a, U]],
                    [/\bqihoobrowser\/?([\w\.]*)/i],
                    [r, [a, "360"]],
                    [/\b(qq)\/([\w\.]+)/i],
                    [
                        [a, /(.+)/, "$1Browser"], r
                    ],
                    [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                    [
                        [a, /(.+)/, "$1" + li], r
                    ],
                    [/samsungbrowser\/([\w\.]+)/i],
                    [r, [a, A + " Internet"]],
                    [/metasr[\/ ]?([\d\.]+)/i],
                    [r, [a, "Sogou Explorer"]],
                    [/(sogou)mo\w+\/([\d\.]+)/i],
                    [
                        [a, "Sogou Mobile"], r
                    ],
                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
                    [a, r],
                    [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                    [a],
                    [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
                    [r, a],
                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                    [
                        [a, ni], r
                    ],
                    [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                    [a, r],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [r, [a, "GSA"]],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [r, [a, "TikTok"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [r, [a, P + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [a, P + " WebView"], r
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [r, [a, "Android " + C]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [a, r],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [r, [a, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [r, a],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [a, [r, L, gi]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [a, r],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [
                        [a, "Netscape"], r
                    ],
                    [/(wolvic|librewolf)\/([\w\.]+)/i],
                    [a, r],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [r, [a, U + " Reality"]],
                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                    [a, [r, /_/g, "."]],
                    [/(cobalt)\/([\w\.]+)/i],
                    [a, [r, /master.|lts./, ""]]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                    [
                        [p, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [p, y]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [p, "ia32"]
                    ],
                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                    [
                        [p, "arm64"]
                    ],
                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                    [
                        [p, "armhf"]
                    ],
                    [/windows (ce|mobile); ppc;/i],
                    [
                        [p, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                    [
                        [p, /ower/, R, y]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [p, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                    [
                        [p, y]
                    ]
                ],
                device: [
                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                    [e, [o, A],
                        [i, b]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                    [e, [o, A],
                        [i, n]
                    ],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [e, [o, O],
                        [i, n]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [e, [o, O],
                        [i, b]
                    ],
                    [/(macintosh);/i],
                    [e, [o, O]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [e, [o, si],
                        [i, n]
                    ],
                    [/(?:honor)([-\w ]+)[;\)]/i],
                    [e, [o, "Honor"],
                        [i, n]
                    ],
                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                    [e, [o, ri],
                        [i, b]
                    ],
                    [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [e, [o, ri],
                        [i, n]
                    ],
                    [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
                    [
                        [e, /_/g, " "],
                        [o, Y],
                        [i, n]
                    ],
                    [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                    [
                        [e, /_/g, " "],
                        [o, Y],
                        [i, b]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [e, [o, "OPPO"],
                        [i, n]
                    ],
                    [/\b(opd2\d{3}a?) bui/i],
                    [e, [o, "OPPO"],
                        [i, b]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [e, [o, "Vivo"],
                        [i, n]
                    ],
                    [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                    [e, [o, "Realme"],
                        [i, n]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [e, [o, ti],
                        [i, n]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [e, [o, ti],
                        [i, b]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [e, [o, H],
                        [i, b]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [e, [o, H],
                        [i, n]
                    ],
                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                    [e, [o, "Lenovo"],
                        [i, b]
                    ],
                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                    [
                        [e, /_/g, " "],
                        [o, "Nokia"],
                        [i, n]
                    ],
                    [/(pixel c)\b/i],
                    [e, [o, S],
                        [i, b]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [e, [o, S],
                        [i, n]
                    ],
                    [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [e, [o, B],
                        [i, n]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                        [e, "Xperia Tablet"],
                        [o, B],
                        [i, b]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [e, [o, "OnePlus"],
                        [i, n]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [e, [o, z],
                        [i, b]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                        [e, /(.+)/g, "Fire Phone $1"],
                        [o, z],
                        [i, n]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [e, o, [i, b]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [e, [o, ai],
                        [i, n]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [e, [o, oi],
                        [i, b]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [e, [o, oi],
                        [i, n]
                    ],
                    [/(nexus 9)/i],
                    [e, [o, "HTC"],
                        [i, b]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [o, [e, /_/g, " "],
                        [i, n]
                    ],
                    [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                    [e, [o, "TCL"],
                        [i, b]
                    ],
                    [/(itel) ((\w+))/i],
                    [
                        [o, y], e, [i, L, {
                            tablet: ["p10001l", "w7001"],
                            "*": "mobile"
                        }]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [e, [o, "Acer"],
                        [i, b]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [e, [o, "Meizu"],
                        [i, n]
                    ],
                    [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                    [e, [o, "Ulefone"],
                        [i, n]
                    ],
                    [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
                    [e, [o, "Energizer"],
                        [i, n]
                    ],
                    [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
                    [e, [o, "Cat"],
                        [i, n]
                    ],
                    [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                    [e, [o, "Smartfren"],
                        [i, n]
                    ],
                    [/droid.+; (a(?:015|06[35]|142p?))/i],
                    [e, [o, "Nothing"],
                        [i, n]
                    ],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                    [o, e, [i, n]],
                    [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [o, e, [i, b]],
                    [/(surface duo)/i],
                    [e, [o, W],
                        [i, b]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [e, [o, "Fairphone"],
                        [i, n]
                    ],
                    [/(u304aa)/i],
                    [e, [o, "AT&T"],
                        [i, n]
                    ],
                    [/\bsie-(\w*)/i],
                    [e, [o, "Siemens"],
                        [i, n]
                    ],
                    [/\b(rct\w+) b/i],
                    [e, [o, "RCA"],
                        [i, b]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [e, [o, "Dell"],
                        [i, b]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [e, [o, "Verizon"],
                        [i, b]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [e, [o, "Barnes & Noble"],
                        [i, b]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [e, [o, "NuVision"],
                        [i, b]
                    ],
                    [/\b(k88) b/i],
                    [e, [o, "ZTE"],
                        [i, b]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [e, [o, "ZTE"],
                        [i, n]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [e, [o, "Swiss"],
                        [i, n]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [e, [o, "Swiss"],
                        [i, b]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [e, [o, "Zeki"],
                        [i, b]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                        [o, "Dragon Touch"], e, [i, b]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [e, [o, "Insignia"],
                        [i, b]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [e, [o, "NextBook"],
                        [i, b]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                        [o, "Voice"], e, [i, n]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                        [o, "LvTel"], e, [i, n]
                    ],
                    [/\b(ph-1) /i],
                    [e, [o, "Essential"],
                        [i, n]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [e, [o, "Envizen"],
                        [i, b]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [e, [o, "MachSpeed"],
                        [i, b]
                    ],
                    [/\btu_(1491) b/i],
                    [e, [o, "Rotor"],
                        [i, b]
                    ],
                    [/(shield[\w ]+) b/i],
                    [e, [o, "Nvidia"],
                        [i, b]
                    ],
                    [/(sprint) (\w+)/i],
                    [o, e, [i, n]],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [e, /\./g, " "],
                        [o, W],
                        [i, n]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [e, [o, X],
                        [i, b]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [e, [o, X],
                        [i, n]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [o, [i, m]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [e, /^/, "SmartTV"],
                        [o, A],
                        [i, m]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                        [o, H],
                        [i, m]
                    ],
                    [/(apple) ?tv/i],
                    [o, [e, O + " TV"],
                        [i, m]
                    ],
                    [/crkey/i],
                    [
                        [e, P + "cast"],
                        [o, S],
                        [i, m]
                    ],
                    [/droid.+aft(\w+)( bui|\))/i],
                    [e, [o, z],
                        [i, m]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [e, [o, si],
                        [i, m]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [e, [o, B],
                        [i, m]
                    ],
                    [/(mitv-\w{5}) bui/i],
                    [e, [o, Y],
                        [i, m]
                    ],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [o, e, [i, m]],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                    [
                        [o, Z],
                        [e, Z],
                        [i, m]
                    ],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                        [i, m]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [o, e, [i, _]],
                    [/droid.+; (shield) bui/i],
                    [e, [o, "Nvidia"],
                        [i, _]
                    ],
                    [/(playstation [345portablevi]+)/i],
                    [e, [o, B],
                        [i, _]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [e, [o, W],
                        [i, _]
                    ],
                    [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
                    [e, [o, A],
                        [i, g]
                    ],
                    [/((pebble))app/i],
                    [o, e, [i, g]],
                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                    [e, [o, O],
                        [i, g]
                    ],
                    [/droid.+; (glass) \d/i],
                    [e, [o, S],
                        [i, g]
                    ],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [e, [o, X],
                        [i, g]
                    ],
                    [/droid.+; (glass) \d/i],
                    [e, [o, S],
                        [i, g]
                    ],
                    [/(pico) (4|neo3(?: link|pro)?)/i],
                    [o, e, [i, g]],
                    [/; (quest( \d| pro)?)/i],
                    [e, [o, ni],
                        [i, g]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [o, [i, F]],
                    [/(aeobc)\b/i],
                    [e, [o, z],
                        [i, F]
                    ],
                    [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                    [e, [i, n]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [e, [i, b]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                        [i, b]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                        [i, n]
                    ],
                    [/(android[-\w\. ]{0,9});.+buil/i],
                    [e, [o, "Generic"]]
                ],
                engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [r, [a, hi + "HTML"]],
                    [/(arkweb)\/([\w\.]+)/i],
                    [a, r],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [r, [a, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                    [a, r],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [r, a]
                ],
                os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [a, r],
                    [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                    [a, [r, L, di]],
                    [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                        [r, L, di],
                        [a, "Windows"]
                    ],
                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                    [
                        [r, /_/g, "."],
                        [a, "iOS"]
                    ],
                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                    [
                        [a, wi],
                        [r, /_/g, "."]
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [r, a],
                    [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                    [a, r],
                    [/\(bb(10);/i],
                    [r, [a, ai]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                    [r, [a, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [r, [a, U + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [r, [a, "webOS"]],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [r, [a, "watchOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [r, [a, P + "cast"]],
                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                    [
                        [a, bi], r
                    ],
                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                    [a, r],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [
                        [a, "Solaris"], r
                    ],
                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                    [a, r]
                ]
            },
            h = function(w, l) {
                if (typeof w === V && (l = w, w = u), !(this instanceof h)) return new h(w, l).getResult();
                var s = typeof x !== M && x.navigator ? x.navigator : u,
                    d = w || (s && s.userAgent ? s.userAgent : R),
                    k = s && s.userAgentData ? s.userAgentData : u,
                    v = l ? vi(ui, l) : ui,
                    c = s && s.userAgent == d;
                return this.getBrowser = function() {
                    var t = {};
                    return t[a] = u, t[r] = u, N.call(t, d, v.browser), t[ei] = fi(t[r]), c && s && s.brave && typeof s.brave.isBrave == j && (t[a] = "Brave"), t
                }, this.getCPU = function() {
                    var t = {};
                    return t[p] = u, N.call(t, d, v.cpu), t
                }, this.getDevice = function() {
                    var t = {};
                    return t[o] = u, t[e] = u, t[i] = u, N.call(t, d, v.device), c && !t[i] && k && k.mobile && (t[i] = n), c && t[e] == "Macintosh" && s && typeof s.standalone !== M && s.maxTouchPoints && s.maxTouchPoints > 2 && (t[e] = "iPad", t[i] = b), t
                }, this.getEngine = function() {
                    var t = {};
                    return t[a] = u, t[r] = u, N.call(t, d, v.engine), t
                }, this.getOS = function() {
                    var t = {};
                    return t[a] = u, t[r] = u, N.call(t, d, v.os), c && !t[a] && k && k.platform && k.platform != "Unknown" && (t[a] = k.platform.replace(/chrome os/i, bi).replace(/macos/i, wi)), t
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return d
                }, this.setUA = function(t) {
                    return d = typeof t === q && t.length > G ? Z(t, G) : t, this
                }, this.setUA(d), this
            };
        h.VERSION = pi, h.BROWSER = I([a, r, ei]), h.CPU = I([p]), h.DEVICE = I([e, o, i, _, n, m, b, g, F]), h.ENGINE = h.OS = I([a, r]), Q.exports && ($ = Q.exports = h), $.UAParser = h;
        var E = typeof x !== M && (x.jQuery || x.Zepto);
        if (E && !E.ua) {
            var D = new h;
            E.ua = D.getResult(), E.ua.get = function() {
                return D.getUA()
            }, E.ua.set = function(w) {
                D.setUA(w);
                var l = D.getResult();
                for (var s in l) E.ua[s] = l[s]
            }
        }
    })(typeof window == "object" ? window : xi)
})(J, J.exports);
var yi = J.exports;
const _i = ki(yi);
export {
    _i as U
};