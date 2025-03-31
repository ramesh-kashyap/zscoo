/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */
function oe(a, e) {
    var t = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(a);
        e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(a, i).enumerable
        })), t.push.apply(t, r)
    }
    return t
}

function F(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? oe(Object(t), !0).forEach(function(r) {
            xe(a, r, t[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : oe(Object(t)).forEach(function(r) {
            Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r))
        })
    }
    return a
}

function ye(a, e) {
    if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function se(a, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, ce(r.key), r)
    }
}

function we(a, e, t) {
    return se(a.prototype, e), se(a, t), Object.defineProperty(a, "prototype", {
        writable: !1
    }), a
}

function xe(a, e, t) {
    return e = ce(e), e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a
}

function j() {
    return j = Object.assign ? Object.assign.bind() : function(a) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r])
        }
        return a
    }, j.apply(this, arguments)
}

function Be(a, e) {
    if (typeof a != "object" || a === null) return a;
    var t = a[Symbol.toPrimitive];
    if (t !== void 0) {
        var r = t.call(a, e || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(a)
}

function ce(a) {
    var e = Be(a, "string");
    return typeof e == "symbol" ? e : String(e)
}
var ve = {
    exports: {}
};
(function(a) {
    typeof window > "u" || function(e) {
        var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype,
            r = e.Blob && function() {
                try {
                    return !!new Blob
                } catch {
                    return !1
                }
            }(),
            i = r && e.Uint8Array && function() {
                try {
                    return new Blob([new Uint8Array(100)]).size === 100
                } catch {
                    return !1
                }
            }(),
            n = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder,
            u = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
            f = (r || n) && e.atob && e.ArrayBuffer && e.Uint8Array && function(s) {
                var l, h, c, b, v, o, p, m, x;
                if (l = s.match(u), !l) throw new Error("invalid data URI");
                for (h = l[2] ? l[1] : "text/plain" + (l[3] || ";charset=US-ASCII"), c = !!l[4], b = s.slice(l[0].length), c ? v = atob(b) : v = decodeURIComponent(b), o = new ArrayBuffer(v.length), p = new Uint8Array(o), m = 0; m < v.length; m += 1) p[m] = v.charCodeAt(m);
                return r ? new Blob([i ? p : o], {
                    type: h
                }) : (x = new n, x.append(o), x.getBlob(h))
            };
        e.HTMLCanvasElement && !t.toBlob && (t.mozGetAsFile ? t.toBlob = function(s, l, h) {
            var c = this;
            setTimeout(function() {
                h && t.toDataURL && f ? s(f(c.toDataURL(l, h))) : s(c.mozGetAsFile("blob", l))
            })
        } : t.toDataURL && f && (t.msToBlob ? t.toBlob = function(s, l, h) {
            var c = this;
            setTimeout(function() {
                (l && l !== "image/png" || h) && t.toDataURL && f ? s(f(c.toDataURL(l, h))) : s(c.msToBlob(l))
            })
        } : t.toBlob = function(s, l, h) {
            var c = this;
            setTimeout(function() {
                s(f(c.toDataURL(l, h)))
            })
        })), a.exports ? a.exports = f : e.dataURLtoBlob = f
    }(window)
})(ve);
var le = ve.exports,
    Ee = function(e) {
        return typeof Blob > "u" ? !1 : e instanceof Blob || Object.prototype.toString.call(e) === "[object Blob]"
    },
    fe = {
        strict: !0,
        checkOrientation: !0,
        retainExif: !1,
        maxWidth: 1 / 0,
        maxHeight: 1 / 0,
        minWidth: 0,
        minHeight: 0,
        width: void 0,
        height: void 0,
        resize: "none",
        quality: .8,
        mimeType: "auto",
        convertTypes: ["image/png"],
        convertSize: 5e6,
        beforeDraw: null,
        drew: null,
        success: null,
        error: null
    },
    Ue = typeof window < "u" && typeof window.document < "u",
    y = Ue ? window : {},
    C = function(e) {
        return e > 0 && e < 1 / 0
    },
    Re = Array.prototype.slice;

function z(a) {
    return Array.from ? Array.from(a) : Re.call(a)
}
var Ae = /^image\/.+$/;

function S(a) {
    return Ae.test(a)
}

function Te(a) {
    var e = S(a) ? a.substr(6) : "";
    return e === "jpeg" && (e = "jpg"), ".".concat(e)
}
var me = String.fromCharCode;

function Oe(a, e, t) {
    var r = "",
        i;
    for (t += e, i = e; i < t; i += 1) r += me(a.getUint8(i));
    return r
}
var Pe = y.btoa;

function ue(a, e) {
    for (var t = [], r = 8192, i = new Uint8Array(a); i.length > 0;) t.push(me.apply(null, z(i.subarray(0, r)))), i = i.subarray(r);
    return "data:".concat(e, ";base64,").concat(Pe(t.join("")))
}

function De(a) {
    var e = new DataView(a),
        t;
    try {
        var r, i, n;
        if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
            for (var u = e.byteLength, f = 2; f + 1 < u;) {
                if (e.getUint8(f) === 255 && e.getUint8(f + 1) === 225) {
                    i = f;
                    break
                }
                f += 1
            }
        if (i) {
            var s = i + 4,
                l = i + 10;
            if (Oe(e, s, 4) === "Exif") {
                var h = e.getUint16(l);
                if (r = h === 18761, (r || h === 19789) && e.getUint16(l + 2, r) === 42) {
                    var c = e.getUint32(l + 4, r);
                    c >= 8 && (n = l + c)
                }
            }
        }
        if (n) {
            var b = e.getUint16(n, r),
                v, o;
            for (o = 0; o < b; o += 1)
                if (v = n + o * 12 + 2, e.getUint16(v, r) === 274) {
                    v += 8, t = e.getUint16(v, r), e.setUint16(v, 1, r);
                    break
                }
        }
    } catch {
        t = 1
    }
    return t
}

function Fe(a) {
    var e = 0,
        t = 1,
        r = 1;
    switch (a) {
        case 2:
            t = -1;
            break;
        case 3:
            e = -180;
            break;
        case 4:
            r = -1;
            break;
        case 5:
            e = 90, r = -1;
            break;
        case 6:
            e = 90;
            break;
        case 7:
            e = 90, t = -1;
            break;
        case 8:
            e = -90;
            break
    }
    return {
        rotate: e,
        scaleX: t,
        scaleY: r
    }
}
var je = /\.\d*(?:0|9){12}\d*$/;

function he(a) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
    return je.test(a) ? Math.round(a * e) / e : a
}

function D(a) {
    var e = a.aspectRatio,
        t = a.height,
        r = a.width,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none",
        n = C(r),
        u = C(t);
    if (n && u) {
        var f = t * e;
        (i === "contain" || i === "none") && f > r || i === "cover" && f < r ? t = r / e : r = t * e
    } else n ? t = r / e : u && (r = t * e);
    return {
        width: r,
        height: t
    }
}

function Ce(a) {
    for (var e = z(new Uint8Array(a)), t = e.length, r = [], i = 0; i + 3 < t;) {
        var n = e[i],
            u = e[i + 1];
        if (n === 255 && u === 218) break;
        if (n === 255 && u === 216) i += 2;
        else {
            var f = e[i + 2] * 256 + e[i + 3],
                s = i + f + 2,
                l = e.slice(i, s);
            r.push(l), i = s
        }
    }
    return r.reduce(function(h, c) {
        return c[0] === 255 && c[1] === 225 ? h.concat(c) : h
    }, [])
}

function Le(a, e) {
    var t = z(new Uint8Array(a));
    if (t[2] !== 255 || t[3] !== 224) return a;
    var r = t[4] * 256 + t[5],
        i = [255, 216].concat(e, t.slice(4 + r));
    return new Uint8Array(i)
}
var ke = y.ArrayBuffer,
    H = y.FileReader,
    w = y.URL || y.webkitURL,
    Me = /\.\w+$/,
    Ie = y.Compressor,
    He = function() {
        function a(e, t) {
            ye(this, a), this.file = e, this.exif = [], this.image = new Image, this.options = F(F({}, fe), t), this.aborted = !1, this.result = null, this.init()
        }
        return we(a, [{
            key: "init",
            value: function() {
                var t = this,
                    r = this.file,
                    i = this.options;
                if (!Ee(r)) {
                    this.fail(new Error("The first argument must be a File or Blob object."));
                    return
                }
                var n = r.type;
                if (!S(n)) {
                    this.fail(new Error("The first argument must be an image File or Blob object."));
                    return
                }
                if (!w || !H) {
                    this.fail(new Error("The current browser does not support image compression."));
                    return
                }
                ke || (i.checkOrientation = !1, i.retainExif = !1);
                var u = n === "image/jpeg",
                    f = u && i.checkOrientation,
                    s = u && i.retainExif;
                if (w && !f && !s) this.load({
                    url: w.createObjectURL(r)
                });
                else {
                    var l = new H;
                    this.reader = l, l.onload = function(h) {
                        var c = h.target,
                            b = c.result,
                            v = {},
                            o = 1;
                        f && (o = De(b), o > 1 && j(v, Fe(o))), s && (t.exif = Ce(b)), f || s ? !w || o > 1 ? v.url = ue(b, n) : v.url = w.createObjectURL(r) : v.url = b, t.load(v)
                    }, l.onabort = function() {
                        t.fail(new Error("Aborted to read the image with FileReader."))
                    }, l.onerror = function() {
                        t.fail(new Error("Failed to read the image with FileReader."))
                    }, l.onloadend = function() {
                        t.reader = null
                    }, f || s ? l.readAsArrayBuffer(r) : l.readAsDataURL(r)
                }
            }
        }, {
            key: "load",
            value: function(t) {
                var r = this,
                    i = this.file,
                    n = this.image;
                n.onload = function() {
                    r.draw(F(F({}, t), {}, {
                        naturalWidth: n.naturalWidth,
                        naturalHeight: n.naturalHeight
                    }))
                }, n.onabort = function() {
                    r.fail(new Error("Aborted to load the image."))
                }, n.onerror = function() {
                    r.fail(new Error("Failed to load the image."))
                }, y.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(y.navigator.userAgent) && (n.crossOrigin = "anonymous"), n.alt = i.name, n.src = t.url
            }
        }, {
            key: "draw",
            value: function(t) {
                var r = this,
                    i = t.naturalWidth,
                    n = t.naturalHeight,
                    u = t.rotate,
                    f = u === void 0 ? 0 : u,
                    s = t.scaleX,
                    l = s === void 0 ? 1 : s,
                    h = t.scaleY,
                    c = h === void 0 ? 1 : h,
                    b = this.file,
                    v = this.image,
                    o = this.options,
                    p = document.createElement("canvas"),
                    m = p.getContext("2d"),
                    x = Math.abs(f) % 180 === 90,
                    L = (o.resize === "contain" || o.resize === "cover") && C(o.width) && C(o.height),
                    U = Math.max(o.maxWidth, 0) || 1 / 0,
                    R = Math.max(o.maxHeight, 0) || 1 / 0,
                    A = Math.max(o.minWidth, 0) || 0,
                    T = Math.max(o.minHeight, 0) || 0,
                    B = i / n,
                    g = o.width,
                    d = o.height;
                if (x) {
                    var G = [R, U];
                    U = G[0], R = G[1];
                    var X = [T, A];
                    A = X[0], T = X[1];
                    var N = [d, g];
                    g = N[0], d = N[1]
                }
                L && (B = g / d);
                var Y = D({
                    aspectRatio: B,
                    width: U,
                    height: R
                }, "contain");
                U = Y.width, R = Y.height;
                var V = D({
                    aspectRatio: B,
                    width: A,
                    height: T
                }, "cover");
                if (A = V.width, T = V.height, L) {
                    var $ = D({
                        aspectRatio: B,
                        width: g,
                        height: d
                    }, o.resize);
                    g = $.width, d = $.height
                } else {
                    var K = D({
                            aspectRatio: B,
                            width: g,
                            height: d
                        }),
                        J = K.width;
                    g = J === void 0 ? i : J;
                    var q = K.height;
                    d = q === void 0 ? n : q
                }
                g = Math.floor(he(Math.min(Math.max(g, A), U))), d = Math.floor(he(Math.min(Math.max(d, T), R)));
                var ge = -g / 2,
                    de = -d / 2,
                    be = g,
                    pe = d,
                    k = [];
                if (L) {
                    var Q = 0,
                        Z = 0,
                        M = i,
                        I = n,
                        _ = D({
                            aspectRatio: B,
                            width: i,
                            height: n
                        }, {
                            contain: "cover",
                            cover: "contain"
                        }[o.resize]);
                    M = _.width, I = _.height, Q = (i - M) / 2, Z = (n - I) / 2, k.push(Q, Z, M, I)
                }
                if (k.push(ge, de, be, pe), x) {
                    var ee = [d, g];
                    g = ee[0], d = ee[1]
                }
                p.width = g, p.height = d, S(o.mimeType) || (o.mimeType = b.type);
                var te = "transparent";
                b.size > o.convertSize && o.convertTypes.indexOf(o.mimeType) >= 0 && (o.mimeType = "image/jpeg");
                var re = o.mimeType === "image/jpeg";
                if (re && (te = "#fff"), m.fillStyle = te, m.fillRect(0, 0, g, d), o.beforeDraw && o.beforeDraw.call(this, m, p), !this.aborted && (m.save(), m.translate(g / 2, d / 2), m.rotate(f * Math.PI / 180), m.scale(l, c), m.drawImage.apply(m, [v].concat(k)), m.restore(), o.drew && o.drew.call(this, m, p), !this.aborted)) {
                    var ae = function(O) {
                        if (!r.aborted) {
                            var ie = function(P) {
                                return r.done({
                                    naturalWidth: i,
                                    naturalHeight: n,
                                    result: P
                                })
                            };
                            if (O && re && o.retainExif && r.exif && r.exif.length > 0) {
                                var ne = function(P) {
                                    return ie(le(ue(Le(P, r.exif), o.mimeType)))
                                };
                                if (O.arrayBuffer) O.arrayBuffer().then(ne).catch(function() {
                                    r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))
                                });
                                else {
                                    var E = new H;
                                    r.reader = E, E.onload = function(W) {
                                        var P = W.target;
                                        ne(P.result)
                                    }, E.onabort = function() {
                                        r.fail(new Error("Aborted to read the compressed image with FileReader."))
                                    }, E.onerror = function() {
                                        r.fail(new Error("Failed to read the compressed image with FileReader."))
                                    }, E.onloadend = function() {
                                        r.reader = null
                                    }, E.readAsArrayBuffer(O)
                                }
                            } else ie(O)
                        }
                    };
                    p.toBlob ? p.toBlob(ae, o.mimeType, o.quality) : ae(le(p.toDataURL(o.mimeType, o.quality)))
                }
            }
        }, {
            key: "done",
            value: function(t) {
                var r = t.naturalWidth,
                    i = t.naturalHeight,
                    n = t.result,
                    u = this.file,
                    f = this.image,
                    s = this.options;
                if (w && f.src.indexOf("blob:") === 0 && w.revokeObjectURL(f.src), n)
                    if (s.strict && !s.retainExif && n.size > u.size && s.mimeType === u.type && !(s.width > r || s.height > i || s.minWidth > r || s.minHeight > i || s.maxWidth < r || s.maxHeight < i)) n = u;
                    else {
                        var l = new Date;
                        n.lastModified = l.getTime(), n.lastModifiedDate = l, n.name = u.name, n.name && n.type !== u.type && (n.name = n.name.replace(Me, Te(n.type)))
                    }
                else n = u;
                this.result = n, s.success && s.success.call(this, n)
            }
        }, {
            key: "fail",
            value: function(t) {
                var r = this.options;
                if (r.error) r.error.call(this, t);
                else throw t
            }
        }, {
            key: "abort",
            value: function() {
                this.aborted || (this.aborted = !0, this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null, this.image.onabort()))
            }
        }], [{
            key: "noConflict",
            value: function() {
                return window.Compressor = Ie, a
            }
        }, {
            key: "setDefaults",
            value: function(t) {
                j(fe, t)
            }
        }]), a
    }();
export {
    He as C
};