var ky = Object.create;
var Ma = Object.defineProperty,
    Ly = Object.defineProperties,
    Vy = Object.getOwnPropertyDescriptor,
    jy = Object.getOwnPropertyDescriptors,
    Uy = Object.getOwnPropertyNames,
    Md = Object.getOwnPropertySymbols,
    By = Object.getPrototypeOf,
    xd = Object.prototype.hasOwnProperty,
    $y = Object.prototype.propertyIsEnumerable;
var Sd = (t, e, n) => e in t ? Ma(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    b = (t, e) => {
        for (var n in e ||= {}) xd.call(e, n) && Sd(t, n, e[n]);
        if (Md)
            for (var n of Md(e)) $y.call(e, n) && Sd(t, n, e[n]);
        return t
    },
    re = (t, e) => Ly(t, jy(e));
var Hy = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
var zy = (t, e, n, r) => {
    if (e && typeof e == "object" || typeof e == "function")
        for (let i of Uy(e)) !xd.call(t, i) && i !== n && Ma(t, i, {
            get: () => e[i],
            enumerable: !(r = Vy(e, i)) || r.enumerable
        });
    return t
};
var Wy = (t, e, n) => (n = t != null ? ky(By(t)) : {}, zy(e || !t || !t.__esModule ? Ma(n, "default", {
    value: t,
    enumerable: !0
}) : n, t));
var Ry = Hy((ro, Id) => {
    "use strict";
    (function(t, e) {
        typeof ro == "object" && typeof Id == "object" ? Id.exports = e() : typeof define == "function" && define.amd ? define([], e) : typeof ro == "object" ? ro.AOS = e() : t.AOS = e()
    })(ro, function() {
        return function(t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "dist/", e(0)
        }([function(t, e, n) {
            "use strict";

            function r(F) {
                return F && F.__esModule ? F : {
                    default: F
                }
            }
            var i = Object.assign || function(F) {
                    for (var je = 1; je < arguments.length; je++) {
                        var vt = arguments[je];
                        for (var pn in vt) Object.prototype.hasOwnProperty.call(vt, pn) && (F[pn] = vt[pn])
                    }
                    return F
                },
                o = n(1),
                s = (r(o), n(6)),
                a = r(s),
                c = n(7),
                l = r(c),
                u = n(8),
                d = r(u),
                f = n(9),
                p = r(f),
                m = n(10),
                E = r(m),
                M = n(11),
                I = r(M),
                ae = n(14),
                de = r(ae),
                W = [],
                Re = !1,
                q = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                De = function() {
                    var F = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (F && (Re = !0), Re) return W = (0, I.default)(W, q), (0, E.default)(W, q.once), W
                },
                lt = function() {
                    W = (0, de.default)(), De()
                },
                T = function() {
                    W.forEach(function(F, je) {
                        F.node.removeAttribute("data-aos"), F.node.removeAttribute("data-aos-easing"), F.node.removeAttribute("data-aos-duration"), F.node.removeAttribute("data-aos-delay")
                    })
                },
                w = function(F) {
                    return F === !0 || F === "mobile" && p.default.mobile() || F === "phone" && p.default.phone() || F === "tablet" && p.default.tablet() || typeof F == "function" && F() === !0
                },
                te = function(F) {
                    q = i(q, F), W = (0, de.default)();
                    var je = document.all && !window.atob;
                    return w(q.disable) || je ? T() : (q.disableMutationObserver || d.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), q.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", q.easing), document.querySelector("body").setAttribute("data-aos-duration", q.duration), document.querySelector("body").setAttribute("data-aos-delay", q.delay), q.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? De(!0) : q.startEvent === "load" ? window.addEventListener(q.startEvent, function() {
                        De(!0)
                    }) : document.addEventListener(q.startEvent, function() {
                        De(!0)
                    }), window.addEventListener("resize", (0, l.default)(De, q.debounceDelay, !0)), window.addEventListener("orientationchange", (0, l.default)(De, q.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)(function() {
                        (0, E.default)(W, q.once)
                    }, q.throttleDelay)), q.disableMutationObserver || d.default.ready("[data-aos]", lt), W)
                };
            t.exports = {
                init: te,
                refresh: De,
                refreshHard: lt
            }
        }, function(t, e) {}, , , , , function(t, e) {
            (function(n) {
                "use strict";

                function r(w, te, F) {
                    function je(ie) {
                        var qe = ut,
                            mn = At;
                        return ut = At = void 0, hn = ie, Pe = w.apply(mn, qe)
                    }

                    function vt(ie) {
                        return hn = ie, Me = setTimeout(jn, te), gn ? je(ie) : Pe
                    }

                    function pn(ie) {
                        var qe = ie - Xe,
                            mn = ie - hn,
                            _d = te - qe;
                        return Kt ? lt(_d, Ot - mn) : _d
                    }

                    function Vn(ie) {
                        var qe = ie - Xe,
                            mn = ie - hn;
                        return Xe === void 0 || qe >= te || qe < 0 || Kt && mn >= Ot
                    }

                    function jn() {
                        var ie = T();
                        return Vn(ie) ? io(ie) : void(Me = setTimeout(jn, pn(ie)))
                    }

                    function io(ie) {
                        return Me = void 0, pe && ut ? je(ie) : (ut = At = void 0, Pe)
                    }

                    function _a() {
                        Me !== void 0 && clearTimeout(Me), hn = 0, ut = Xe = At = Me = void 0
                    }

                    function ni() {
                        return Me === void 0 ? Pe : io(T())
                    }

                    function Tt() {
                        var ie = T(),
                            qe = Vn(ie);
                        if (ut = arguments, At = this, Xe = ie, qe) {
                            if (Me === void 0) return vt(Xe);
                            if (Kt) return Me = setTimeout(jn, te), je(Xe)
                        }
                        return Me === void 0 && (Me = setTimeout(jn, te)), Pe
                    }
                    var ut, At, Ot, Pe, Me, Xe, hn = 0,
                        gn = !1,
                        Kt = !1,
                        pe = !0;
                    if (typeof w != "function") throw new TypeError(u);
                    return te = c(te) || 0, o(F) && (gn = !!F.leading, Kt = "maxWait" in F, Ot = Kt ? De(c(F.maxWait) || 0, te) : Ot, pe = "trailing" in F ? !!F.trailing : pe), Tt.cancel = _a, Tt.flush = ni, Tt
                }

                function i(w, te, F) {
                    var je = !0,
                        vt = !0;
                    if (typeof w != "function") throw new TypeError(u);
                    return o(F) && (je = "leading" in F ? !!F.leading : je, vt = "trailing" in F ? !!F.trailing : vt), r(w, te, {
                        leading: je,
                        maxWait: te,
                        trailing: vt
                    })
                }

                function o(w) {
                    var te = typeof w > "u" ? "undefined" : l(w);
                    return !!w && (te == "object" || te == "function")
                }

                function s(w) {
                    return !!w && (typeof w > "u" ? "undefined" : l(w)) == "object"
                }

                function a(w) {
                    return (typeof w > "u" ? "undefined" : l(w)) == "symbol" || s(w) && q.call(w) == f
                }

                function c(w) {
                    if (typeof w == "number") return w;
                    if (a(w)) return d;
                    if (o(w)) {
                        var te = typeof w.valueOf == "function" ? w.valueOf() : w;
                        w = o(te) ? te + "" : te
                    }
                    if (typeof w != "string") return w === 0 ? w : +w;
                    w = w.replace(p, "");
                    var F = E.test(w);
                    return F || M.test(w) ? I(w.slice(2), F ? 2 : 8) : m.test(w) ? d : +w
                }
                var l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                        return typeof w
                    } : function(w) {
                        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
                    },
                    u = "Expected a function",
                    d = NaN,
                    f = "[object Symbol]",
                    p = /^\s+|\s+$/g,
                    m = /^[-+]0x[0-9a-f]+$/i,
                    E = /^0b[01]+$/i,
                    M = /^0o[0-7]+$/i,
                    I = parseInt,
                    ae = (typeof n > "u" ? "undefined" : l(n)) == "object" && n && n.Object === Object && n,
                    de = (typeof self > "u" ? "undefined" : l(self)) == "object" && self && self.Object === Object && self,
                    W = ae || de || Function("return this")(),
                    Re = Object.prototype,
                    q = Re.toString,
                    De = Math.max,
                    lt = Math.min,
                    T = function() {
                        return W.Date.now()
                    };
                t.exports = i
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            (function(n) {
                "use strict";

                function r(T, w, te) {
                    function F(pe) {
                        var ie = Tt,
                            qe = ut;
                        return Tt = ut = void 0, Xe = pe, Ot = T.apply(qe, ie)
                    }

                    function je(pe) {
                        return Xe = pe, Pe = setTimeout(Vn, w), hn ? F(pe) : Ot
                    }

                    function vt(pe) {
                        var ie = pe - Me,
                            qe = pe - Xe,
                            mn = w - ie;
                        return gn ? De(mn, At - qe) : mn
                    }

                    function pn(pe) {
                        var ie = pe - Me,
                            qe = pe - Xe;
                        return Me === void 0 || ie >= w || ie < 0 || gn && qe >= At
                    }

                    function Vn() {
                        var pe = lt();
                        return pn(pe) ? jn(pe) : void(Pe = setTimeout(Vn, vt(pe)))
                    }

                    function jn(pe) {
                        return Pe = void 0, Kt && Tt ? F(pe) : (Tt = ut = void 0, Ot)
                    }

                    function io() {
                        Pe !== void 0 && clearTimeout(Pe), Xe = 0, Tt = Me = ut = Pe = void 0
                    }

                    function _a() {
                        return Pe === void 0 ? Ot : jn(lt())
                    }

                    function ni() {
                        var pe = lt(),
                            ie = pn(pe);
                        if (Tt = arguments, ut = this, Me = pe, ie) {
                            if (Pe === void 0) return je(Me);
                            if (gn) return Pe = setTimeout(Vn, w), F(Me)
                        }
                        return Pe === void 0 && (Pe = setTimeout(Vn, w)), Ot
                    }
                    var Tt, ut, At, Ot, Pe, Me, Xe = 0,
                        hn = !1,
                        gn = !1,
                        Kt = !0;
                    if (typeof T != "function") throw new TypeError(l);
                    return w = a(w) || 0, i(te) && (hn = !!te.leading, gn = "maxWait" in te, At = gn ? q(a(te.maxWait) || 0, w) : At, Kt = "trailing" in te ? !!te.trailing : Kt), ni.cancel = io, ni.flush = _a, ni
                }

                function i(T) {
                    var w = typeof T > "u" ? "undefined" : c(T);
                    return !!T && (w == "object" || w == "function")
                }

                function o(T) {
                    return !!T && (typeof T > "u" ? "undefined" : c(T)) == "object"
                }

                function s(T) {
                    return (typeof T > "u" ? "undefined" : c(T)) == "symbol" || o(T) && Re.call(T) == d
                }

                function a(T) {
                    if (typeof T == "number") return T;
                    if (s(T)) return u;
                    if (i(T)) {
                        var w = typeof T.valueOf == "function" ? T.valueOf() : T;
                        T = i(w) ? w + "" : w
                    }
                    if (typeof T != "string") return T === 0 ? T : +T;
                    T = T.replace(f, "");
                    var te = m.test(T);
                    return te || E.test(T) ? M(T.slice(2), te ? 2 : 8) : p.test(T) ? u : +T
                }
                var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
                        return typeof T
                    } : function(T) {
                        return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T
                    },
                    l = "Expected a function",
                    u = NaN,
                    d = "[object Symbol]",
                    f = /^\s+|\s+$/g,
                    p = /^[-+]0x[0-9a-f]+$/i,
                    m = /^0b[01]+$/i,
                    E = /^0o[0-7]+$/i,
                    M = parseInt,
                    I = (typeof n > "u" ? "undefined" : c(n)) == "object" && n && n.Object === Object && n,
                    ae = (typeof self > "u" ? "undefined" : c(self)) == "object" && self && self.Object === Object && self,
                    de = I || ae || Function("return this")(),
                    W = Object.prototype,
                    Re = W.toString,
                    q = Math.max,
                    De = Math.min,
                    lt = function() {
                        return de.Date.now()
                    };
                t.exports = r
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            "use strict";

            function n(c) {
                var l = void 0,
                    u = void 0,
                    d = void 0;
                for (l = 0; l < c.length; l += 1)
                    if (u = c[l], u.dataset && u.dataset.aos || (d = u.children && n(u.children))) return !0;
                return !1
            }

            function r() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function i() {
                return !!r()
            }

            function o(c, l) {
                var u = window.document,
                    d = r(),
                    f = new d(s);
                a = l, f.observe(u.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }

            function s(c) {
                c && c.forEach(function(l) {
                    var u = Array.prototype.slice.call(l.addedNodes),
                        d = Array.prototype.slice.call(l.removedNodes),
                        f = u.concat(d);
                    if (n(f)) return a()
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = function() {};
            e.default = {
                isSupported: i,
                ready: o
            }
        }, function(t, e) {
            "use strict";

            function n(u, d) {
                if (!(u instanceof d)) throw new TypeError("Cannot call a class as a function")
            }

            function r() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                    function u(d, f) {
                        for (var p = 0; p < f.length; p++) {
                            var m = f[p];
                            m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(d, m.key, m)
                        }
                    }
                    return function(d, f, p) {
                        return f && u(d.prototype, f), p && u(d, p), d
                    }
                }(),
                o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = function() {
                    function u() {
                        n(this, u)
                    }
                    return i(u, [{
                        key: "phone",
                        value: function() {
                            var d = r();
                            return !(!o.test(d) && !s.test(d.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var d = r();
                            return !(!a.test(d) && !c.test(d.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), u
                }();
            e.default = new l
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(i, o, s) {
                    var a = i.node.getAttribute("data-aos-once");
                    o > i.position ? i.node.classList.add("aos-animate") : typeof a < "u" && (a === "false" || !s && a !== "true") && i.node.classList.remove("aos-animate")
                },
                r = function(i, o) {
                    var s = window.pageYOffset,
                        a = window.innerHeight;
                    i.forEach(function(c, l) {
                        n(c, a + s, o)
                    })
                };
            e.default = r
        }, function(t, e, n) {
            "use strict";

            function r(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(12),
                o = r(i),
                s = function(a, c) {
                    return a.forEach(function(l, u) {
                        l.node.classList.add("aos-init"), l.position = (0, o.default)(l.node, c.offset)
                    }), a
                };
            e.default = s
        }, function(t, e, n) {
            "use strict";

            function r(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(13),
                o = r(i),
                s = function(a, c) {
                    var l = 0,
                        u = 0,
                        d = window.innerHeight,
                        f = {
                            offset: a.getAttribute("data-aos-offset"),
                            anchor: a.getAttribute("data-aos-anchor"),
                            anchorPlacement: a.getAttribute("data-aos-anchor-placement")
                        };
                    switch (f.offset && !isNaN(f.offset) && (u = parseInt(f.offset)), f.anchor && document.querySelectorAll(f.anchor) && (a = document.querySelectorAll(f.anchor)[0]), l = (0, o.default)(a).top, f.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            l += a.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            l += a.offsetHeight;
                            break;
                        case "top-center":
                            l += d / 2;
                            break;
                        case "bottom-center":
                            l += d / 2 + a.offsetHeight;
                            break;
                        case "center-center":
                            l += d / 2 + a.offsetHeight / 2;
                            break;
                        case "top-top":
                            l += d;
                            break;
                        case "bottom-top":
                            l += a.offsetHeight + d;
                            break;
                        case "center-top":
                            l += a.offsetHeight / 2 + d
                    }
                    return f.anchorPlacement || f.offset || isNaN(c) || (u = c), l + u
                };
            e.default = s
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(r) {
                for (var i = 0, o = 0; r && !isNaN(r.offsetLeft) && !isNaN(r.offsetTop);) i += r.offsetLeft - (r.tagName != "BODY" ? r.scrollLeft : 0), o += r.offsetTop - (r.tagName != "BODY" ? r.scrollTop : 0), r = r.offsetParent;
                return {
                    top: o,
                    left: i
                }
            };
            e.default = n
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(r) {
                return r = r || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(r, function(i) {
                    return {
                        node: i
                    }
                })
            };
            e.default = n
        }])
    })
});

function Gy(t, e) {
    return Object.is(t, e)
}
var Te = null,
    oo = !1,
    so = 1,
    Un = Symbol("SIGNAL");

function ee(t) {
    let e = Te;
    return Te = t, e
}
var Sa = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: !1,
    producerNode: void 0,
    producerLastReadVersion: void 0,
    producerIndexOfThis: void 0,
    nextProducerIndex: 0,
    liveConsumerNode: void 0,
    liveConsumerIndexOfThis: void 0,
    consumerAllowSignalWrites: !1,
    consumerIsAlwaysLive: !1,
    producerMustRecompute: () => !1,
    producerRecomputeValue: () => {},
    consumerMarkedDirty: () => {},
    consumerOnSignalRead: () => {}
};

function Td(t) {
    if (oo) throw new Error("");
    if (Te === null) return;
    Te.consumerOnSignalRead(t);
    let e = Te.nextProducerIndex++;
    if (dr(Te), e < Te.producerNode.length && Te.producerNode[e] !== t && ri(Te)) {
        let n = Te.producerNode[e];
        ao(n, Te.producerIndexOfThis[e])
    }
    Te.producerNode[e] !== t && (Te.producerNode[e] = t, Te.producerIndexOfThis[e] = ri(Te) ? Fd(t, Te, e) : 0), Te.producerLastReadVersion[e] = t.version
}

function qy() {
    so++
}

function Yy(t) {
    if (!(ri(t) && !t.dirty) && !(!t.dirty && t.lastCleanEpoch === so)) {
        if (!t.producerMustRecompute(t) && !xa(t)) {
            t.dirty = !1, t.lastCleanEpoch = so;
            return
        }
        t.producerRecomputeValue(t), t.dirty = !1, t.lastCleanEpoch = so
    }
}

function Ad(t) {
    if (t.liveConsumerNode === void 0) return;
    let e = oo;
    oo = !0;
    try {
        for (let n of t.liveConsumerNode) n.dirty || Ky(n)
    } finally {
        oo = e
    }
}

function Od() {
    return Te?.consumerAllowSignalWrites !== !1
}

function Ky(t) {
    t.dirty = !0, Ad(t), t.consumerMarkedDirty?.(t)
}

function Nd(t) {
    return t && (t.nextProducerIndex = 0), ee(t)
}

function Rd(t, e) {
    if (ee(e), !(!t || t.producerNode === void 0 || t.producerIndexOfThis === void 0 || t.producerLastReadVersion === void 0)) {
        if (ri(t))
            for (let n = t.nextProducerIndex; n < t.producerNode.length; n++) ao(t.producerNode[n], t.producerIndexOfThis[n]);
        for (; t.producerNode.length > t.nextProducerIndex;) t.producerNode.pop(), t.producerLastReadVersion.pop(), t.producerIndexOfThis.pop()
    }
}

function xa(t) {
    dr(t);
    for (let e = 0; e < t.producerNode.length; e++) {
        let n = t.producerNode[e],
            r = t.producerLastReadVersion[e];
        if (r !== n.version || (Yy(n), r !== n.version)) return !0
    }
    return !1
}

function Pd(t) {
    if (dr(t), ri(t))
        for (let e = 0; e < t.producerNode.length; e++) ao(t.producerNode[e], t.producerIndexOfThis[e]);
    t.producerNode.length = t.producerLastReadVersion.length = t.producerIndexOfThis.length = 0, t.liveConsumerNode && (t.liveConsumerNode.length = t.liveConsumerIndexOfThis.length = 0)
}

function Fd(t, e, n) {
    if (kd(t), dr(t), t.liveConsumerNode.length === 0)
        for (let r = 0; r < t.producerNode.length; r++) t.producerIndexOfThis[r] = Fd(t.producerNode[r], t, r);
    return t.liveConsumerIndexOfThis.push(n), t.liveConsumerNode.push(e) - 1
}

function ao(t, e) {
    if (kd(t), dr(t), t.liveConsumerNode.length === 1)
        for (let r = 0; r < t.producerNode.length; r++) ao(t.producerNode[r], t.producerIndexOfThis[r]);
    let n = t.liveConsumerNode.length - 1;
    if (t.liveConsumerNode[e] = t.liveConsumerNode[n], t.liveConsumerIndexOfThis[e] = t.liveConsumerIndexOfThis[n], t.liveConsumerNode.length--, t.liveConsumerIndexOfThis.length--, e < t.liveConsumerNode.length) {
        let r = t.liveConsumerIndexOfThis[e],
            i = t.liveConsumerNode[e];
        dr(i), i.producerIndexOfThis[r] = e
    }
}

function ri(t) {
    return t.consumerIsAlwaysLive || (t?.liveConsumerNode?.length ?? 0) > 0
}

function dr(t) {
    t.producerNode ??= [], t.producerIndexOfThis ??= [], t.producerLastReadVersion ??= []
}

function kd(t) {
    t.liveConsumerNode ??= [], t.liveConsumerIndexOfThis ??= []
}

function Qy() {
    throw new Error
}
var Ld = Qy;

function Vd() {
    Ld()
}

function jd(t) {
    Ld = t
}
var Zy = null;

function Ud(t) {
    let e = Object.create($d);
    e.value = t;
    let n = () => (Td(e), e.value);
    return n[Un] = e, n
}

function Ta(t, e) {
    Od() || Vd(), t.equal(t.value, e) || (t.value = e, Jy(t))
}

function Bd(t, e) {
    Od() || Vd(), Ta(t, e(t.value))
}
var $d = re(b({}, Sa), {
    equal: Gy,
    value: void 0
});

function Jy(t) {
    t.version++, qy(), Ad(t), Zy?.()
}

function k(t) {
    return typeof t == "function"
}

function fr(t) {
    let n = t(r => {
        Error.call(r), r.stack = new Error().stack
    });
    return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n
}
var co = fr(t => function(n) {
    t(this), this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}` : "", this.name = "UnsubscriptionError", this.errors = n
});

function ii(t, e) {
    if (t) {
        let n = t.indexOf(e);
        0 <= n && t.splice(n, 1)
    }
}
var Se = class t {
    constructor(e) {
        this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
    }
    unsubscribe() {
        let e;
        if (!this.closed) {
            this.closed = !0;
            let {
                _parentage: n
            } = this;
            if (n)
                if (this._parentage = null, Array.isArray(n))
                    for (let o of n) o.remove(this);
                else n.remove(this);
            let {
                initialTeardown: r
            } = this;
            if (k(r)) try {
                r()
            } catch (o) {
                e = o instanceof co ? o.errors : [o]
            }
            let {
                _finalizers: i
            } = this;
            if (i) {
                this._finalizers = null;
                for (let o of i) try {
                    Hd(o)
                } catch (s) {
                    e = e ?? [], s instanceof co ? e = [...e, ...s.errors] : e.push(s)
                }
            }
            if (e) throw new co(e)
        }
    }
    add(e) {
        var n;
        if (e && e !== this)
            if (this.closed) Hd(e);
            else {
                if (e instanceof t) {
                    if (e.closed || e._hasParent(this)) return;
                    e._addParent(this)
                }(this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e)
            }
    }
    _hasParent(e) {
        let {
            _parentage: n
        } = this;
        return n === e || Array.isArray(n) && n.includes(e)
    }
    _addParent(e) {
        let {
            _parentage: n
        } = this;
        this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e
    }
    _removeParent(e) {
        let {
            _parentage: n
        } = this;
        n === e ? this._parentage = null : Array.isArray(n) && ii(n, e)
    }
    remove(e) {
        let {
            _finalizers: n
        } = this;
        n && ii(n, e), e instanceof t && e._removeParent(this)
    }
};
Se.EMPTY = (() => {
    let t = new Se;
    return t.closed = !0, t
})();
var Aa = Se.EMPTY;

function lo(t) {
    return t instanceof Se || t && "closed" in t && k(t.remove) && k(t.add) && k(t.unsubscribe)
}

function Hd(t) {
    k(t) ? t() : t.unsubscribe()
}
var Ct = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
};
var pr = {
    setTimeout(t, e, ...n) {
        let {
            delegate: r
        } = pr;
        return r?.setTimeout ? r.setTimeout(t, e, ...n) : setTimeout(t, e, ...n)
    },
    clearTimeout(t) {
        let {
            delegate: e
        } = pr;
        return (e?.clearTimeout || clearTimeout)(t)
    },
    delegate: void 0
};

function uo(t) {
    pr.setTimeout(() => {
        let {
            onUnhandledError: e
        } = Ct;
        if (e) e(t);
        else throw t
    })
}

function oi() {}
var zd = Oa("C", void 0, void 0);

function Wd(t) {
    return Oa("E", void 0, t)
}

function Gd(t) {
    return Oa("N", t, void 0)
}

function Oa(t, e, n) {
    return {
        kind: t,
        value: e,
        error: n
    }
}
var Bn = null;

function hr(t) {
    if (Ct.useDeprecatedSynchronousErrorHandling) {
        let e = !Bn;
        if (e && (Bn = {
                errorThrown: !1,
                error: null
            }), t(), e) {
            let {
                errorThrown: n,
                error: r
            } = Bn;
            if (Bn = null, n) throw r
        }
    } else t()
}

function qd(t) {
    Ct.useDeprecatedSynchronousErrorHandling && Bn && (Bn.errorThrown = !0, Bn.error = t)
}
var $n = class extends Se {
        constructor(e) {
            super(), this.isStopped = !1, e ? (this.destination = e, lo(e) && e.add(this)) : this.destination = tv
        }
        static create(e, n, r) {
            return new gr(e, n, r)
        }
        next(e) {
            this.isStopped ? Ra(Gd(e), this) : this._next(e)
        }
        error(e) {
            this.isStopped ? Ra(Wd(e), this) : (this.isStopped = !0, this._error(e))
        }
        complete() {
            this.isStopped ? Ra(zd, this) : (this.isStopped = !0, this._complete())
        }
        unsubscribe() {
            this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null)
        }
        _next(e) {
            this.destination.next(e)
        }
        _error(e) {
            try {
                this.destination.error(e)
            } finally {
                this.unsubscribe()
            }
        }
        _complete() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }
    },
    Xy = Function.prototype.bind;

function Na(t, e) {
    return Xy.call(t, e)
}
var Pa = class {
        constructor(e) {
            this.partialObserver = e
        }
        next(e) {
            let {
                partialObserver: n
            } = this;
            if (n.next) try {
                n.next(e)
            } catch (r) {
                fo(r)
            }
        }
        error(e) {
            let {
                partialObserver: n
            } = this;
            if (n.error) try {
                n.error(e)
            } catch (r) {
                fo(r)
            } else fo(e)
        }
        complete() {
            let {
                partialObserver: e
            } = this;
            if (e.complete) try {
                e.complete()
            } catch (n) {
                fo(n)
            }
        }
    },
    gr = class extends $n {
        constructor(e, n, r) {
            super();
            let i;
            if (k(e) || !e) i = {
                next: e ?? void 0,
                error: n ?? void 0,
                complete: r ?? void 0
            };
            else {
                let o;
                this && Ct.useDeprecatedNextContext ? (o = Object.create(e), o.unsubscribe = () => this.unsubscribe(), i = {
                    next: e.next && Na(e.next, o),
                    error: e.error && Na(e.error, o),
                    complete: e.complete && Na(e.complete, o)
                }) : i = e
            }
            this.destination = new Pa(i)
        }
    };

function fo(t) {
    Ct.useDeprecatedSynchronousErrorHandling ? qd(t) : uo(t)
}

function ev(t) {
    throw t
}

function Ra(t, e) {
    let {
        onStoppedNotification: n
    } = Ct;
    n && pr.setTimeout(() => n(t, e))
}
var tv = {
    closed: !0,
    next: oi,
    error: ev,
    complete: oi
};
var mr = typeof Symbol == "function" && Symbol.observable || "@@observable";

function et(t) {
    return t
}

function Fa(...t) {
    return ka(t)
}

function ka(t) {
    return t.length === 0 ? et : t.length === 1 ? t[0] : function(n) {
        return t.reduce((r, i) => i(r), n)
    }
}
var X = (() => {
    class t {
        constructor(n) {
            n && (this._subscribe = n)
        }
        lift(n) {
            let r = new t;
            return r.source = this, r.operator = n, r
        }
        subscribe(n, r, i) {
            let o = rv(n) ? n : new gr(n, r, i);
            return hr(() => {
                let {
                    operator: s,
                    source: a
                } = this;
                o.add(s ? s.call(o, a) : a ? this._subscribe(o) : this._trySubscribe(o))
            }), o
        }
        _trySubscribe(n) {
            try {
                return this._subscribe(n)
            } catch (r) {
                n.error(r)
            }
        }
        forEach(n, r) {
            return r = Yd(r), new r((i, o) => {
                let s = new gr({
                    next: a => {
                        try {
                            n(a)
                        } catch (c) {
                            o(c), s.unsubscribe()
                        }
                    },
                    error: o,
                    complete: i
                });
                this.subscribe(s)
            })
        }
        _subscribe(n) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)
        } [mr]() {
            return this
        }
        pipe(...n) {
            return ka(n)(this)
        }
        toPromise(n) {
            return n = Yd(n), new n((r, i) => {
                let o;
                this.subscribe(s => o = s, s => i(s), () => r(o))
            })
        }
    }
    return t.create = e => new t(e), t
})();

function Yd(t) {
    var e;
    return (e = t ?? Ct.Promise) !== null && e !== void 0 ? e : Promise
}

function nv(t) {
    return t && k(t.next) && k(t.error) && k(t.complete)
}

function rv(t) {
    return t && t instanceof $n || nv(t) && lo(t)
}

function La(t) {
    return k(t?.lift)
}

function Z(t) {
    return e => {
        if (La(e)) return e.lift(function(n) {
            try {
                return t(n, this)
            } catch (r) {
                this.error(r)
            }
        });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}

function K(t, e, n, r, i) {
    return new Va(t, e, n, r, i)
}
var Va = class extends $n {
    constructor(e, n, r, i, o, s) {
        super(e), this.onFinalize = o, this.shouldUnsubscribe = s, this._next = n ? function(a) {
            try {
                n(a)
            } catch (c) {
                e.error(c)
            }
        } : super._next, this._error = i ? function(a) {
            try {
                i(a)
            } catch (c) {
                e.error(c)
            } finally {
                this.unsubscribe()
            }
        } : super._error, this._complete = r ? function() {
            try {
                r()
            } catch (a) {
                e.error(a)
            } finally {
                this.unsubscribe()
            }
        } : super._complete
    }
    unsubscribe() {
        var e;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            let {
                closed: n
            } = this;
            super.unsubscribe(), !n && ((e = this.onFinalize) === null || e === void 0 || e.call(this))
        }
    }
};

function yr() {
    return Z((t, e) => {
        let n = null;
        t._refCount++;
        let r = K(e, void 0, void 0, void 0, () => {
            if (!t || t._refCount <= 0 || 0 < --t._refCount) {
                n = null;
                return
            }
            let i = t._connection,
                o = n;
            n = null, i && (!o || i === o) && i.unsubscribe(), e.unsubscribe()
        });
        t.subscribe(r), r.closed || (n = t.connect())
    })
}
var vr = class extends X {
    constructor(e, n) {
        super(), this.source = e, this.subjectFactory = n, this._subject = null, this._refCount = 0, this._connection = null, La(e) && (this.lift = e.lift)
    }
    _subscribe(e) {
        return this.getSubject().subscribe(e)
    }
    getSubject() {
        let e = this._subject;
        return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject
    }
    _teardown() {
        this._refCount = 0;
        let {
            _connection: e
        } = this;
        this._subject = this._connection = null, e?.unsubscribe()
    }
    connect() {
        let e = this._connection;
        if (!e) {
            e = this._connection = new Se;
            let n = this.getSubject();
            e.add(this.source.subscribe(K(n, void 0, () => {
                this._teardown(), n.complete()
            }, r => {
                this._teardown(), n.error(r)
            }, () => this._teardown()))), e.closed && (this._connection = null, e = Se.EMPTY)
        }
        return e
    }
    refCount() {
        return yr()(this)
    }
};
var Kd = fr(t => function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
});
var Fe = (() => {
        class t extends X {
            constructor() {
                super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null
            }
            lift(n) {
                let r = new po(this, this);
                return r.operator = n, r
            }
            _throwIfClosed() {
                if (this.closed) throw new Kd
            }
            next(n) {
                hr(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.currentObservers || (this.currentObservers = Array.from(this.observers));
                        for (let r of this.currentObservers) r.next(n)
                    }
                })
            }
            error(n) {
                hr(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.hasError = this.isStopped = !0, this.thrownError = n;
                        let {
                            observers: r
                        } = this;
                        for (; r.length;) r.shift().error(n)
                    }
                })
            }
            complete() {
                hr(() => {
                    if (this._throwIfClosed(), !this.isStopped) {
                        this.isStopped = !0;
                        let {
                            observers: n
                        } = this;
                        for (; n.length;) n.shift().complete()
                    }
                })
            }
            unsubscribe() {
                this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
            }
            get observed() {
                var n;
                return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
            }
            _trySubscribe(n) {
                return this._throwIfClosed(), super._trySubscribe(n)
            }
            _subscribe(n) {
                return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n)
            }
            _innerSubscribe(n) {
                let {
                    hasError: r,
                    isStopped: i,
                    observers: o
                } = this;
                return r || i ? Aa : (this.currentObservers = null, o.push(n), new Se(() => {
                    this.currentObservers = null, ii(o, n)
                }))
            }
            _checkFinalizedStatuses(n) {
                let {
                    hasError: r,
                    thrownError: i,
                    isStopped: o
                } = this;
                r ? n.error(i) : o && n.complete()
            }
            asObservable() {
                let n = new X;
                return n.source = this, n
            }
        }
        return t.create = (e, n) => new po(e, n), t
    })(),
    po = class extends Fe {
        constructor(e, n) {
            super(), this.destination = e, this.source = n
        }
        next(e) {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, e)
        }
        error(e) {
            var n, r;
            (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, e)
        }
        complete() {
            var e, n;
            (n = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || n === void 0 || n.call(e)
        }
        _subscribe(e) {
            var n, r;
            return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e)) !== null && r !== void 0 ? r : Aa
        }
    };
var ke = class extends Fe {
    constructor(e) {
        super(), this._value = e
    }
    get value() {
        return this.getValue()
    }
    _subscribe(e) {
        let n = super._subscribe(e);
        return !n.closed && e.next(this._value), n
    }
    getValue() {
        let {
            hasError: e,
            thrownError: n,
            _value: r
        } = this;
        if (e) throw n;
        return this._throwIfClosed(), r
    }
    next(e) {
        super.next(this._value = e)
    }
};
var tt = new X(t => t.complete());

function Qd(t) {
    return t && k(t.schedule)
}

function Zd(t) {
    return t[t.length - 1]
}

function ho(t) {
    return k(Zd(t)) ? t.pop() : void 0
}

function yn(t) {
    return Qd(Zd(t)) ? t.pop() : void 0
}

function Xd(t, e, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o)
        })
    }
    return new(n || (n = Promise))(function(o, s) {
        function a(u) {
            try {
                l(r.next(u))
            } catch (d) {
                s(d)
            }
        }

        function c(u) {
            try {
                l(r.throw(u))
            } catch (d) {
                s(d)
            }
        }

        function l(u) {
            u.done ? o(u.value) : i(u.value).then(a, c)
        }
        l((r = r.apply(t, e || [])).next())
    })
}

function Jd(t) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        n = e && t[e],
        r = 0;
    if (n) return n.call(t);
    if (t && typeof t.length == "number") return {
        next: function() {
            return t && r >= t.length && (t = void 0), {
                value: t && t[r++],
                done: !t
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Hn(t) {
    return this instanceof Hn ? (this.v = t, this) : new Hn(t)
}

function ef(t, e, n) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(t, e || []),
        i, o = [];
    return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", s), i[Symbol.asyncIterator] = function() {
        return this
    }, i;

    function s(p) {
        return function(m) {
            return Promise.resolve(m).then(p, d)
        }
    }

    function a(p, m) {
        r[p] && (i[p] = function(E) {
            return new Promise(function(M, I) {
                o.push([p, E, M, I]) > 1 || c(p, E)
            })
        }, m && (i[p] = m(i[p])))
    }

    function c(p, m) {
        try {
            l(r[p](m))
        } catch (E) {
            f(o[0][3], E)
        }
    }

    function l(p) {
        p.value instanceof Hn ? Promise.resolve(p.value.v).then(u, d) : f(o[0][2], p)
    }

    function u(p) {
        c("next", p)
    }

    function d(p) {
        c("throw", p)
    }

    function f(p, m) {
        p(m), o.shift(), o.length && c(o[0][0], o[0][1])
    }
}

function tf(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator],
        n;
    return e ? e.call(t) : (t = typeof Jd == "function" ? Jd(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
        return this
    }, n);

    function r(o) {
        n[o] = t[o] && function(s) {
            return new Promise(function(a, c) {
                s = t[o](s), i(a, c, s.done, s.value)
            })
        }
    }

    function i(o, s, a, c) {
        Promise.resolve(c).then(function(l) {
            o({
                value: l,
                done: a
            })
        }, s)
    }
}
var go = t => t && typeof t.length == "number" && typeof t != "function";

function mo(t) {
    return k(t?.then)
}

function yo(t) {
    return k(t[mr])
}

function vo(t) {
    return Symbol.asyncIterator && k(t?.[Symbol.asyncIterator])
}

function Co(t) {
    return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
}

function iv() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var Do = iv();

function bo(t) {
    return k(t?.[Do])
}

function wo(t) {
    return ef(this, arguments, function*() {
        let n = t.getReader();
        try {
            for (;;) {
                let {
                    value: r,
                    done: i
                } = yield Hn(n.read());
                if (i) return yield Hn(void 0);
                yield yield Hn(r)
            }
        } finally {
            n.releaseLock()
        }
    })
}

function Eo(t) {
    return k(t?.getReader)
}

function be(t) {
    if (t instanceof X) return t;
    if (t != null) {
        if (yo(t)) return ov(t);
        if (go(t)) return sv(t);
        if (mo(t)) return av(t);
        if (vo(t)) return nf(t);
        if (bo(t)) return cv(t);
        if (Eo(t)) return lv(t)
    }
    throw Co(t)
}

function ov(t) {
    return new X(e => {
        let n = t[mr]();
        if (k(n.subscribe)) return n.subscribe(e);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    })
}

function sv(t) {
    return new X(e => {
        for (let n = 0; n < t.length && !e.closed; n++) e.next(t[n]);
        e.complete()
    })
}

function av(t) {
    return new X(e => {
        t.then(n => {
            e.closed || (e.next(n), e.complete())
        }, n => e.error(n)).then(null, uo)
    })
}

function cv(t) {
    return new X(e => {
        for (let n of t)
            if (e.next(n), e.closed) return;
        e.complete()
    })
}

function nf(t) {
    return new X(e => {
        uv(t, e).catch(n => e.error(n))
    })
}

function lv(t) {
    return nf(wo(t))
}

function uv(t, e) {
    var n, r, i, o;
    return Xd(this, void 0, void 0, function*() {
        try {
            for (n = tf(t); r = yield n.next(), !r.done;) {
                let s = r.value;
                if (e.next(s), e.closed) return
            }
        } catch (s) {
            i = {
                error: s
            }
        } finally {
            try {
                r && !r.done && (o = n.return) && (yield o.call(n))
            } finally {
                if (i) throw i.error
            }
        }
        e.complete()
    })
}

function Ye(t, e, n, r = 0, i = !1) {
    let o = e.schedule(function() {
        n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (t.add(o), !i) return o
}

function Io(t, e = 0) {
    return Z((n, r) => {
        n.subscribe(K(r, i => Ye(r, t, () => r.next(i), e), () => Ye(r, t, () => r.complete(), e), i => Ye(r, t, () => r.error(i), e)))
    })
}

function _o(t, e = 0) {
    return Z((n, r) => {
        r.add(t.schedule(() => n.subscribe(r), e))
    })
}

function rf(t, e) {
    return be(t).pipe(_o(e), Io(e))
}

function of(t, e) {
    return be(t).pipe(_o(e), Io(e))
}

function sf(t, e) {
    return new X(n => {
        let r = 0;
        return e.schedule(function() {
            r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule())
        })
    })
}

function af(t, e) {
    return new X(n => {
        let r;
        return Ye(n, e, () => {
            r = t[Do](), Ye(n, e, () => {
                let i, o;
                try {
                    ({
                        value: i,
                        done: o
                    } = r.next())
                } catch (s) {
                    n.error(s);
                    return
                }
                o ? n.complete() : n.next(i)
            }, 0, !0)
        }), () => k(r?.return) && r.return()
    })
}

function Mo(t, e) {
    if (!t) throw new Error("Iterable cannot be null");
    return new X(n => {
        Ye(n, e, () => {
            let r = t[Symbol.asyncIterator]();
            Ye(n, e, () => {
                r.next().then(i => {
                    i.done ? n.complete() : n.next(i.value)
                })
            }, 0, !0)
        })
    })
}

function cf(t, e) {
    return Mo(wo(t), e)
}

function lf(t, e) {
    if (t != null) {
        if (yo(t)) return rf(t, e);
        if (go(t)) return sf(t, e);
        if (mo(t)) return of(t, e);
        if (vo(t)) return Mo(t, e);
        if (bo(t)) return af(t, e);
        if (Eo(t)) return cf(t, e)
    }
    throw Co(t)
}

function he(t, e) {
    return e ? lf(t, e) : be(t)
}

function N(...t) {
    let e = yn(t);
    return he(t, e)
}

function Cr(t, e) {
    let n = k(t) ? t : () => t,
        r = i => i.error(n());
    return new X(e ? i => e.schedule(r, 0, i) : r)
}

function ja(t) {
    return !!t && (t instanceof X || k(t.lift) && k(t.subscribe))
}
var Qt = fr(t => function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence"
});

function V(t, e) {
    return Z((n, r) => {
        let i = 0;
        n.subscribe(K(r, o => {
            r.next(t.call(e, o, i++))
        }))
    })
}
var {
    isArray: dv
} = Array;

function fv(t, e) {
    return dv(e) ? t(...e) : t(e)
}

function So(t) {
    return V(e => fv(t, e))
}
var {
    isArray: pv
} = Array, {
    getPrototypeOf: hv,
    prototype: gv,
    keys: mv
} = Object;

function xo(t) {
    if (t.length === 1) {
        let e = t[0];
        if (pv(e)) return {
            args: e,
            keys: null
        };
        if (yv(e)) {
            let n = mv(e);
            return {
                args: n.map(r => e[r]),
                keys: n
            }
        }
    }
    return {
        args: t,
        keys: null
    }
}

function yv(t) {
    return t && typeof t == "object" && hv(t) === gv
}

function To(t, e) {
    return t.reduce((n, r, i) => (n[r] = e[i], n), {})
}

function Ao(...t) {
    let e = yn(t),
        n = ho(t),
        {
            args: r,
            keys: i
        } = xo(t);
    if (r.length === 0) return he([], e);
    let o = new X(vv(r, e, i ? s => To(i, s) : et));
    return n ? o.pipe(So(n)) : o
}

function vv(t, e, n = et) {
    return r => {
        uf(e, () => {
            let {
                length: i
            } = t, o = new Array(i), s = i, a = i;
            for (let c = 0; c < i; c++) uf(e, () => {
                let l = he(t[c], e),
                    u = !1;
                l.subscribe(K(r, d => {
                    o[c] = d, u || (u = !0, a--), a || r.next(n(o.slice()))
                }, () => {
                    --s || r.complete()
                }))
            }, r)
        }, r)
    }
}

function uf(t, e, n) {
    t ? Ye(n, t, e) : e()
}

function df(t, e, n, r, i, o, s, a) {
    let c = [],
        l = 0,
        u = 0,
        d = !1,
        f = () => {
            d && !c.length && !l && e.complete()
        },
        p = E => l < r ? m(E) : c.push(E),
        m = E => {
            o && e.next(E), l++;
            let M = !1;
            be(n(E, u++)).subscribe(K(e, I => {
                i?.(I), o ? p(I) : e.next(I)
            }, () => {
                M = !0
            }, void 0, () => {
                if (M) try {
                    for (l--; c.length && l < r;) {
                        let I = c.shift();
                        s ? Ye(e, s, () => m(I)) : m(I)
                    }
                    f()
                } catch (I) {
                    e.error(I)
                }
            }))
        };
    return t.subscribe(K(e, p, () => {
        d = !0, f()
    })), () => {
        a?.()
    }
}

function xe(t, e, n = 1 / 0) {
    return k(e) ? xe((r, i) => V((o, s) => e(r, o, i, s))(be(t(r, i))), n) : (typeof e == "number" && (n = e), Z((r, i) => df(r, i, t, n)))
}

function Ua(t = 1 / 0) {
    return xe(et, t)
}

function ff() {
    return Ua(1)
}

function Dr(...t) {
    return ff()(he(t, yn(t)))
}

function Oo(t) {
    return new X(e => {
        be(t()).subscribe(e)
    })
}

function Ba(...t) {
    let e = ho(t),
        {
            args: n,
            keys: r
        } = xo(t),
        i = new X(o => {
            let {
                length: s
            } = n;
            if (!s) {
                o.complete();
                return
            }
            let a = new Array(s),
                c = s,
                l = s;
            for (let u = 0; u < s; u++) {
                let d = !1;
                be(n[u]).subscribe(K(o, f => {
                    d || (d = !0, l--), a[u] = f
                }, () => c--, void 0, () => {
                    (!c || !d) && (l || o.next(r ? To(r, a) : a), o.complete())
                }))
            }
        });
    return e ? i.pipe(So(e)) : i
}

function nt(t, e) {
    return Z((n, r) => {
        let i = 0;
        n.subscribe(K(r, o => t.call(e, o, i++) && r.next(o)))
    })
}

function vn(t) {
    return Z((e, n) => {
        let r = null,
            i = !1,
            o;
        r = e.subscribe(K(n, void 0, void 0, s => {
            o = be(t(s, vn(t)(e))), r ? (r.unsubscribe(), r = null, o.subscribe(n)) : i = !0
        })), i && (r.unsubscribe(), r = null, o.subscribe(n))
    })
}

function pf(t, e, n, r, i) {
    return (o, s) => {
        let a = n,
            c = e,
            l = 0;
        o.subscribe(K(s, u => {
            let d = l++;
            c = a ? t(c, u, d) : (a = !0, u), r && s.next(c)
        }, i && (() => {
            a && s.next(c), s.complete()
        })))
    }
}

function Cn(t, e) {
    return k(e) ? xe(t, e, 1) : xe(t, 1)
}

function Dn(t) {
    return Z((e, n) => {
        let r = !1;
        e.subscribe(K(n, i => {
            r = !0, n.next(i)
        }, () => {
            r || n.next(t), n.complete()
        }))
    })
}

function Zt(t) {
    return t <= 0 ? () => tt : Z((e, n) => {
        let r = 0;
        e.subscribe(K(n, i => {
            ++r <= t && (n.next(i), t <= r && n.complete())
        }))
    })
}

function $a(t) {
    return V(() => t)
}

function No(t = Cv) {
    return Z((e, n) => {
        let r = !1;
        e.subscribe(K(n, i => {
            r = !0, n.next(i)
        }, () => r ? n.complete() : n.error(t())))
    })
}

function Cv() {
    return new Qt
}

function bn(t) {
    return Z((e, n) => {
        try {
            e.subscribe(n)
        } finally {
            n.add(t)
        }
    })
}

function Nt(t, e) {
    let n = arguments.length >= 2;
    return r => r.pipe(t ? nt((i, o) => t(i, o, r)) : et, Zt(1), n ? Dn(e) : No(() => new Qt))
}

function br(t) {
    return t <= 0 ? () => tt : Z((e, n) => {
        let r = [];
        e.subscribe(K(n, i => {
            r.push(i), t < r.length && r.shift()
        }, () => {
            for (let i of r) n.next(i);
            n.complete()
        }, void 0, () => {
            r = null
        }))
    })
}

function Ha(t, e) {
    let n = arguments.length >= 2;
    return r => r.pipe(t ? nt((i, o) => t(i, o, r)) : et, br(1), n ? Dn(e) : No(() => new Qt))
}

function za(t, e) {
    return Z(pf(t, e, arguments.length >= 2, !0))
}

function Wa(...t) {
    let e = yn(t);
    return Z((n, r) => {
        (e ? Dr(t, n, e) : Dr(t, n)).subscribe(r)
    })
}

function rt(t, e) {
    return Z((n, r) => {
        let i = null,
            o = 0,
            s = !1,
            a = () => s && !i && r.complete();
        n.subscribe(K(r, c => {
            i?.unsubscribe();
            let l = 0,
                u = o++;
            be(t(c, u)).subscribe(i = K(r, d => r.next(e ? e(c, d, u, l++) : d), () => {
                i = null, a()
            }))
        }, () => {
            s = !0, a()
        }))
    })
}

function Ga(t) {
    return Z((e, n) => {
        be(t).subscribe(K(n, () => n.complete(), oi)), !n.closed && e.subscribe(n)
    })
}

function Ae(t, e, n) {
    let r = k(t) || e || n ? {
        next: t,
        error: e,
        complete: n
    } : t;
    return r ? Z((i, o) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        i.subscribe(K(o, c => {
            var l;
            (l = r.next) === null || l === void 0 || l.call(r, c), o.next(c)
        }, () => {
            var c;
            a = !1, (c = r.complete) === null || c === void 0 || c.call(r), o.complete()
        }, c => {
            var l;
            a = !1, (l = r.error) === null || l === void 0 || l.call(r, c), o.error(c)
        }, () => {
            var c, l;
            a && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)), (l = r.finalize) === null || l === void 0 || l.call(r)
        }))
    }) : et
}
var np = "https://g.co/ng/security#xss",
    S = class extends Error {
        constructor(e, n) {
            super(us(e, n)), this.code = e
        }
    };

function us(t, e) {
    return `${`NG0${Math.abs(t)}`}${e?": "+e:""}`
}

function Ci(t) {
    return {
        toString: t
    }.toString()
}
var Ro = "__parameters__";

function Dv(t) {
    return function(...n) {
        if (t) {
            let r = t(...n);
            for (let i in r) this[i] = r[i]
        }
    }
}

function rp(t, e, n) {
    return Ci(() => {
        let r = Dv(e);

        function i(...o) {
            if (this instanceof i) return r.apply(this, o), this;
            let s = new i(...o);
            return a.annotation = s, a;

            function a(c, l, u) {
                let d = c.hasOwnProperty(Ro) ? c[Ro] : Object.defineProperty(c, Ro, {
                    value: []
                })[Ro];
                for (; d.length <= u;) d.push(null);
                return (d[u] = d[u] || []).push(s), c
            }
        }
        return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = t, i.annotationCls = i, i
    })
}
var Jt = globalThis;

function ce(t) {
    for (let e in t)
        if (t[e] === ce) return e;
    throw Error("Could not find renamed property on target object.")
}

function bv(t, e) {
    for (let n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
}

function We(t) {
    if (typeof t == "string") return t;
    if (Array.isArray(t)) return "[" + t.map(We).join(", ") + "]";
    if (t == null) return "" + t;
    if (t.overriddenName) return `${t.overriddenName}`;
    if (t.name) return `${t.name}`;
    let e = t.toString();
    if (e == null) return "" + e;
    let n = e.indexOf(`
`);
    return n === -1 ? e : e.substring(0, n)
}

function cc(t, e) {
    return t == null || t === "" ? e === null ? "" : e : e == null || e === "" ? t : t + " " + e
}
var wv = ce({
    __forward_ref__: ce
});

function nn(t) {
    return t.__forward_ref__ = nn, t.toString = function() {
        return We(this())
    }, t
}

function ze(t) {
    return ip(t) ? t() : t
}

function ip(t) {
    return typeof t == "function" && t.hasOwnProperty(wv) && t.__forward_ref__ === nn
}

function x(t) {
    return {
        token: t.token,
        providedIn: t.providedIn || null,
        factory: t.factory,
        value: void 0
    }
}

function we(t) {
    return {
        providers: t.providers || [],
        imports: t.imports || []
    }
}

function ds(t) {
    return hf(t, sp) || hf(t, ap)
}

function op(t) {
    return ds(t) !== null
}

function hf(t, e) {
    return t.hasOwnProperty(e) ? t[e] : null
}

function Ev(t) {
    let e = t && (t[sp] || t[ap]);
    return e || null
}

function gf(t) {
    return t && (t.hasOwnProperty(mf) || t.hasOwnProperty(Iv)) ? t[mf] : null
}
var sp = ce({
        \u0275prov: ce
    }),
    mf = ce({
        \u0275inj: ce
    }),
    ap = ce({
        ngInjectableDef: ce
    }),
    Iv = ce({
        ngInjectorDef: ce
    }),
    A = class {
        constructor(e, n) {
            this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = x({
                token: this,
                providedIn: n.providedIn || "root",
                factory: n.factory
            }))
        }
        get multi() {
            return this
        }
        toString() {
            return `InjectionToken ${this._desc}`
        }
    };

function cp(t) {
    return t && !!t.\u0275providers
}
var _v = ce({
        \u0275cmp: ce
    }),
    Mv = ce({
        \u0275dir: ce
    }),
    Sv = ce({
        \u0275pipe: ce
    }),
    xv = ce({
        \u0275mod: ce
    }),
    Wo = ce({
        \u0275fac: ce
    }),
    si = ce({
        __NG_ELEMENT_ID__: ce
    }),
    yf = ce({
        __NG_ENV_ID__: ce
    });

function Di(t) {
    return typeof t == "string" ? t : t == null ? "" : String(t)
}

function Tv(t) {
    return typeof t == "function" ? t.name || t.toString() : typeof t == "object" && t != null && typeof t.type == "function" ? t.type.name || t.type.toString() : Di(t)
}

function Av(t, e) {
    let n = e ? `. Dependency path: ${e.join(" > ")} > ${t}` : "";
    throw new S(-200, t)
}

function al(t, e) {
    throw new S(-201, !1)
}
var G = function(t) {
        return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
    }(G || {}),
    lc;

function lp() {
    return lc
}

function dt(t) {
    let e = lc;
    return lc = t, e
}

function up(t, e, n) {
    let r = ds(t);
    if (r && r.providedIn == "root") return r.value === void 0 ? r.value = r.factory() : r.value;
    if (n & G.Optional) return null;
    if (e !== void 0) return e;
    al(t, "Injector")
}
var Ov = {},
    ai = Ov,
    uc = "__NG_DI_FLAG__",
    Go = "ngTempTokenPath",
    Nv = "ngTokenPath",
    Rv = /\n/gm,
    Pv = "\u0275",
    vf = "__source",
    _r;

function Fv() {
    return _r
}

function wn(t) {
    let e = _r;
    return _r = t, e
}

function kv(t, e = G.Default) {
    if (_r === void 0) throw new S(-203, !1);
    return _r === null ? up(t, void 0, e) : _r.get(t, e & G.Optional ? null : void 0, e)
}

function L(t, e = G.Default) {
    return (lp() || kv)(ze(t), e)
}

function D(t, e = G.Default) {
    return L(t, fs(e))
}

function fs(t) {
    return typeof t > "u" || typeof t == "number" ? t : 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4)
}

function dc(t) {
    let e = [];
    for (let n = 0; n < t.length; n++) {
        let r = ze(t[n]);
        if (Array.isArray(r)) {
            if (r.length === 0) throw new S(900, !1);
            let i, o = G.Default;
            for (let s = 0; s < r.length; s++) {
                let a = r[s],
                    c = Lv(a);
                typeof c == "number" ? c === -1 ? i = a.token : o |= c : i = a
            }
            e.push(L(i, o))
        } else e.push(L(r))
    }
    return e
}

function dp(t, e) {
    return t[uc] = e, t.prototype[uc] = e, t
}

function Lv(t) {
    return t[uc]
}

function Vv(t, e, n, r) {
    let i = t[Go];
    throw e[vf] && i.unshift(e[vf]), t.message = jv(`
` + t.message, i, n, r), t[Nv] = i, t[Go] = null, t
}

function jv(t, e, n, r = null) {
    t = t && t.charAt(0) === `
` && t.charAt(1) == Pv ? t.slice(2) : t;
    let i = We(e);
    if (Array.isArray(e)) i = e.map(We).join(" -> ");
    else if (typeof e == "object") {
        let o = [];
        for (let s in e)
            if (e.hasOwnProperty(s)) {
                let a = e[s];
                o.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : We(a)))
            } i = `{${o.join(", ")}}`
    }
    return `${n}${r?"("+r+")":""}[${i}]: ${t.replace(Rv,`
  `)}`
}
var ps = dp(rp("Optional"), 8);
var cl = dp(rp("SkipSelf"), 4);

function Sr(t, e) {
    let n = t.hasOwnProperty(Wo);
    return n ? t[Wo] : null
}

function Uv(t, e, n) {
    if (t.length !== e.length) return !1;
    for (let r = 0; r < t.length; r++) {
        let i = t[r],
            o = e[r];
        if (n && (i = n(i), o = n(o)), o !== i) return !1
    }
    return !0
}

function Bv(t) {
    return t.flat(Number.POSITIVE_INFINITY)
}

function ll(t, e) {
    t.forEach(n => Array.isArray(n) ? ll(n, e) : e(n))
}

function fp(t, e, n) {
    e >= t.length ? t.push(n) : t.splice(e, 0, n)
}

function qo(t, e) {
    return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
}

function $v(t, e) {
    let n = [];
    for (let r = 0; r < t; r++) n.push(e);
    return n
}

function Hv(t, e, n, r) {
    let i = t.length;
    if (i == e) t.push(n, r);
    else if (i === 1) t.push(r, t[0]), t[0] = n;
    else {
        for (i--, t.push(t[i - 1], t[i]); i > e;) {
            let o = i - 2;
            t[i] = t[o], i--
        }
        t[e] = n, t[e + 1] = r
    }
}

function ul(t, e, n) {
    let r = bi(t, e);
    return r >= 0 ? t[r | 1] = n : (r = ~r, Hv(t, r, e, n)), r
}

function qa(t, e) {
    let n = bi(t, e);
    if (n >= 0) return t[n | 1]
}

function bi(t, e) {
    return zv(t, e, 1)
}

function zv(t, e, n) {
    let r = 0,
        i = t.length >> n;
    for (; i !== r;) {
        let o = r + (i - r >> 1),
            s = t[o << n];
        if (e === s) return o << n;
        s > e ? i = o : r = o + 1
    }
    return ~(i << n)
}
var xr = {},
    Ke = [],
    Tr = new A(""),
    pp = new A("", -1),
    hp = new A(""),
    Yo = class {
        get(e, n = ai) {
            if (n === ai) {
                let r = new Error(`NullInjectorError: No provider for ${We(e)}!`);
                throw r.name = "NullInjectorError", r
            }
            return n
        }
    },
    gp = function(t) {
        return t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default", t
    }(gp || {}),
    Ft = function(t) {
        return t[t.Emulated = 0] = "Emulated", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
    }(Ft || {}),
    Y = function(t) {
        return t[t.None = 0] = "None", t[t.SignalBased = 1] = "SignalBased", t[t.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", t
    }(Y || {});

function Wv(t, e, n) {
    let r = t.length;
    for (;;) {
        let i = t.indexOf(e, n);
        if (i === -1) return i;
        if (i === 0 || t.charCodeAt(i - 1) <= 32) {
            let o = e.length;
            if (i + o === r || t.charCodeAt(i + o) <= 32) return i
        }
        n = i + 1
    }
}

function fc(t, e, n) {
    let r = 0;
    for (; r < n.length;) {
        let i = n[r];
        if (typeof i == "number") {
            if (i !== 0) break;
            r++;
            let o = n[r++],
                s = n[r++],
                a = n[r++];
            t.setAttribute(e, s, a, o)
        } else {
            let o = i,
                s = n[++r];
            qv(o) ? t.setProperty(e, o, s) : t.setAttribute(e, o, s), r++
        }
    }
    return r
}

function Gv(t) {
    return t === 3 || t === 4 || t === 6
}

function qv(t) {
    return t.charCodeAt(0) === 64
}

function ci(t, e) {
    if (!(e === null || e.length === 0))
        if (t === null || t.length === 0) t = e.slice();
        else {
            let n = -1;
            for (let r = 0; r < e.length; r++) {
                let i = e[r];
                typeof i == "number" ? n = i : n === 0 || (n === -1 || n === 2 ? Cf(t, n, i, null, e[++r]) : Cf(t, n, i, null, null))
            }
        } return t
}

function Cf(t, e, n, r, i) {
    let o = 0,
        s = t.length;
    if (e === -1) s = -1;
    else
        for (; o < t.length;) {
            let a = t[o++];
            if (typeof a == "number") {
                if (a === e) {
                    s = -1;
                    break
                } else if (a > e) {
                    s = o - 1;
                    break
                }
            }
        }
    for (; o < t.length;) {
        let a = t[o];
        if (typeof a == "number") break;
        if (a === n) {
            if (r === null) {
                i !== null && (t[o + 1] = i);
                return
            } else if (r === t[o + 1]) {
                t[o + 2] = i;
                return
            }
        }
        o++, r !== null && o++, i !== null && o++
    }
    s !== -1 && (t.splice(s, 0, e), o = s + 1), t.splice(o++, 0, n), r !== null && t.splice(o++, 0, r), i !== null && t.splice(o++, 0, i)
}
var mp = "ng-template";

function Yv(t, e, n, r) {
    let i = 0;
    if (r) {
        for (; i < e.length && typeof e[i] == "string"; i += 2)
            if (e[i] === "class" && Wv(e[i + 1].toLowerCase(), n, 0) !== -1) return !0
    } else if (dl(t)) return !1;
    if (i = e.indexOf(1, i), i > -1) {
        let o;
        for (; ++i < e.length && typeof(o = e[i]) == "string";)
            if (o.toLowerCase() === n) return !0
    }
    return !1
}

function dl(t) {
    return t.type === 4 && t.value !== mp
}

function Kv(t, e, n) {
    let r = t.type === 4 && !n ? mp : t.value;
    return e === r
}

function Qv(t, e, n) {
    let r = 4,
        i = t.attrs,
        o = i !== null ? Xv(i) : 0,
        s = !1;
    for (let a = 0; a < e.length; a++) {
        let c = e[a];
        if (typeof c == "number") {
            if (!s && !Dt(r) && !Dt(c)) return !1;
            if (s && Dt(c)) continue;
            s = !1, r = c | r & 1;
            continue
        }
        if (!s)
            if (r & 4) {
                if (r = 2 | r & 1, c !== "" && !Kv(t, c, n) || c === "" && e.length === 1) {
                    if (Dt(r)) return !1;
                    s = !0
                }
            } else if (r & 8) {
            if (i === null || !Yv(t, i, c, n)) {
                if (Dt(r)) return !1;
                s = !0
            }
        } else {
            let l = e[++a],
                u = Zv(c, i, dl(t), n);
            if (u === -1) {
                if (Dt(r)) return !1;
                s = !0;
                continue
            }
            if (l !== "") {
                let d;
                if (u > o ? d = "" : d = i[u + 1].toLowerCase(), r & 2 && l !== d) {
                    if (Dt(r)) return !1;
                    s = !0
                }
            }
        }
    }
    return Dt(r) || s
}

function Dt(t) {
    return (t & 1) === 0
}

function Zv(t, e, n, r) {
    if (e === null) return -1;
    let i = 0;
    if (r || !n) {
        let o = !1;
        for (; i < e.length;) {
            let s = e[i];
            if (s === t) return i;
            if (s === 3 || s === 6) o = !0;
            else if (s === 1 || s === 2) {
                let a = e[++i];
                for (; typeof a == "string";) a = e[++i];
                continue
            } else {
                if (s === 4) break;
                if (s === 0) {
                    i += 4;
                    continue
                }
            }
            i += o ? 1 : 2
        }
        return -1
    } else return e0(e, t)
}

function yp(t, e, n = !1) {
    for (let r = 0; r < e.length; r++)
        if (Qv(t, e[r], n)) return !0;
    return !1
}

function Jv(t) {
    let e = t.attrs;
    if (e != null) {
        let n = e.indexOf(5);
        if (!(n & 1)) return e[n + 1]
    }
    return null
}

function Xv(t) {
    for (let e = 0; e < t.length; e++) {
        let n = t[e];
        if (Gv(n)) return e
    }
    return t.length
}

function e0(t, e) {
    let n = t.indexOf(4);
    if (n > -1)
        for (n++; n < t.length;) {
            let r = t[n];
            if (typeof r == "number") return -1;
            if (r === e) return n;
            n++
        }
    return -1
}

function t0(t, e) {
    e: for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (t.length === r.length) {
            for (let i = 0; i < t.length; i++)
                if (t[i] !== r[i]) continue e;
            return !0
        }
    }
    return !1
}

function Df(t, e) {
    return t ? ":not(" + e.trim() + ")" : e
}

function n0(t) {
    let e = t[0],
        n = 1,
        r = 2,
        i = "",
        o = !1;
    for (; n < t.length;) {
        let s = t[n];
        if (typeof s == "string")
            if (r & 2) {
                let a = t[++n];
                i += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
            } else r & 8 ? i += "." + s : r & 4 && (i += " " + s);
        else i !== "" && !Dt(s) && (e += Df(o, i), i = ""), r = s, o = o || !Dt(r);
        n++
    }
    return i !== "" && (e += Df(o, i)), e
}

function r0(t) {
    return t.map(n0).join(",")
}

function i0(t) {
    let e = [],
        n = [],
        r = 1,
        i = 2;
    for (; r < t.length;) {
        let o = t[r];
        if (typeof o == "string") i === 2 ? o !== "" && e.push(o, t[++r]) : i === 8 && n.push(o);
        else {
            if (!Dt(i)) break;
            i = o
        }
        r++
    }
    return {
        attrs: e,
        classes: n
    }
}

function R(t) {
    return Ci(() => {
        let e = wp(t),
            n = re(b({}, e), {
                decls: t.decls,
                vars: t.vars,
                template: t.template,
                consts: t.consts || null,
                ngContentSelectors: t.ngContentSelectors,
                onPush: t.changeDetection === gp.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                dependencies: e.standalone && t.dependencies || null,
                getStandaloneInjector: null,
                signals: t.signals ?? !1,
                data: t.data || {},
                encapsulation: t.encapsulation || Ft.Emulated,
                styles: t.styles || Ke,
                _: null,
                schemas: t.schemas || null,
                tView: null,
                id: ""
            });
        Ep(n);
        let r = t.dependencies;
        return n.directiveDefs = wf(r, !1), n.pipeDefs = wf(r, !0), n.id = a0(n), n
    })
}

function o0(t) {
    return Gn(t) || vp(t)
}

function s0(t) {
    return t !== null
}

function Ee(t) {
    return Ci(() => ({
        type: t.type,
        bootstrap: t.bootstrap || Ke,
        declarations: t.declarations || Ke,
        imports: t.imports || Ke,
        exports: t.exports || Ke,
        transitiveCompileScopes: null,
        schemas: t.schemas || null,
        id: t.id || null
    }))
}

function bf(t, e) {
    if (t == null) return xr;
    let n = {};
    for (let r in t)
        if (t.hasOwnProperty(r)) {
            let i = t[r],
                o, s, a = Y.None;
            Array.isArray(i) ? (a = i[0], o = i[1], s = i[2] ?? o) : (o = i, s = i), e ? (n[o] = a !== Y.None ? [r, a] : r, e[o] = s) : n[o] = r
        } return n
}

function oe(t) {
    return Ci(() => {
        let e = wp(t);
        return Ep(e), e
    })
}

function Gn(t) {
    return t[_v] || null
}

function vp(t) {
    return t[Mv] || null
}

function Cp(t) {
    return t[Sv] || null
}

function Dp(t) {
    let e = Gn(t) || vp(t) || Cp(t);
    return e !== null ? e.standalone : !1
}

function bp(t, e) {
    let n = t[xv] || null;
    if (!n && e === !0) throw new Error(`Type ${We(t)} does not have '\u0275mod' property.`);
    return n
}

function wp(t) {
    let e = {};
    return {
        type: t.type,
        providersResolver: null,
        factory: null,
        hostBindings: t.hostBindings || null,
        hostVars: t.hostVars || 0,
        hostAttrs: t.hostAttrs || null,
        contentQueries: t.contentQueries || null,
        declaredInputs: e,
        inputTransforms: null,
        inputConfig: t.inputs || xr,
        exportAs: t.exportAs || null,
        standalone: t.standalone === !0,
        signals: t.signals === !0,
        selectors: t.selectors || Ke,
        viewQuery: t.viewQuery || null,
        features: t.features || null,
        setInput: null,
        findHostDirectiveDefs: null,
        hostDirectives: null,
        inputs: bf(t.inputs, e),
        outputs: bf(t.outputs),
        debugInfo: null
    }
}

function Ep(t) {
    t.features?.forEach(e => e(t))
}

function wf(t, e) {
    if (!t) return null;
    let n = e ? Cp : o0;
    return () => (typeof t == "function" ? t() : t).map(r => n(r)).filter(s0)
}

function a0(t) {
    let e = 0,
        n = [t.selectors, t.ngContentSelectors, t.hostVars, t.hostAttrs, t.consts, t.vars, t.decls, t.encapsulation, t.standalone, t.signals, t.exportAs, JSON.stringify(t.inputs), JSON.stringify(t.outputs), Object.getOwnPropertyNames(t.type.prototype), !!t.contentQueries, !!t.viewQuery].join("|");
    for (let i of n) e = Math.imul(31, e) + i.charCodeAt(0) << 0;
    return e += 2147483648, "c" + e
}

function Fr(t) {
    return {
        \u0275providers: t
    }
}

function c0(...t) {
    return {
        \u0275providers: Ip(!0, t),
        \u0275fromNgModule: !0
    }
}

function Ip(t, ...e) {
    let n = [],
        r = new Set,
        i, o = s => {
            n.push(s)
        };
    return ll(e, s => {
        let a = s;
        pc(a, o, [], r) && (i ||= [], i.push(a))
    }), i !== void 0 && _p(i, o), n
}

function _p(t, e) {
    for (let n = 0; n < t.length; n++) {
        let {
            ngModule: r,
            providers: i
        } = t[n];
        fl(i, o => {
            e(o, r)
        })
    }
}

function pc(t, e, n, r) {
    if (t = ze(t), !t) return !1;
    let i = null,
        o = gf(t),
        s = !o && Gn(t);
    if (!o && !s) {
        let c = t.ngModule;
        if (o = gf(c), o) i = c;
        else return !1
    } else {
        if (s && !s.standalone) return !1;
        i = t
    }
    let a = r.has(i);
    if (s) {
        if (a) return !1;
        if (r.add(i), s.dependencies) {
            let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
            for (let l of c) pc(l, e, n, r)
        }
    } else if (o) {
        if (o.imports != null && !a) {
            r.add(i);
            let l;
            try {
                ll(o.imports, u => {
                    pc(u, e, n, r) && (l ||= [], l.push(u))
                })
            } finally {}
            l !== void 0 && _p(l, e)
        }
        if (!a) {
            let l = Sr(i) || (() => new i);
            e({
                provide: i,
                useFactory: l,
                deps: Ke
            }, i), e({
                provide: hp,
                useValue: i,
                multi: !0
            }, i), e({
                provide: Tr,
                useValue: () => L(i),
                multi: !0
            }, i)
        }
        let c = o.providers;
        if (c != null && !a) {
            let l = t;
            fl(c, u => {
                e(u, l)
            })
        }
    } else return !1;
    return i !== t && t.providers !== void 0
}

function fl(t, e) {
    for (let n of t) cp(n) && (n = n.\u0275providers), Array.isArray(n) ? fl(n, e) : e(n)
}
var l0 = ce({
    provide: String,
    useValue: ce
});

function Mp(t) {
    return t !== null && typeof t == "object" && l0 in t
}

function u0(t) {
    return !!(t && t.useExisting)
}

function d0(t) {
    return !!(t && t.useFactory)
}

function Ar(t) {
    return typeof t == "function"
}

function f0(t) {
    return !!t.useClass
}
var hs = new A(""),
    jo = {},
    p0 = {},
    Ya;

function pl() {
    return Ya === void 0 && (Ya = new Yo), Ya
}
var Qe = class {},
    li = class extends Qe {
        get destroyed() {
            return this._destroyed
        }
        constructor(e, n, r, i) {
            super(), this.parent = n, this.source = r, this.scopes = i, this.records = new Map, this._ngOnDestroyHooks = new Set, this._onDestroyHooks = [], this._destroyed = !1, gc(e, s => this.processProvider(s)), this.records.set(pp, wr(void 0, this)), i.has("environment") && this.records.set(Qe, wr(void 0, this));
            let o = this.records.get(hs);
            o != null && typeof o.value == "string" && this.scopes.add(o.value), this.injectorDefTypes = new Set(this.get(hp, Ke, G.Self))
        }
        destroy() {
            this.assertNotDestroyed(), this._destroyed = !0;
            let e = ee(null);
            try {
                for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
                let n = this._onDestroyHooks;
                this._onDestroyHooks = [];
                for (let r of n) r()
            } finally {
                this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), ee(e)
            }
        }
        onDestroy(e) {
            return this.assertNotDestroyed(), this._onDestroyHooks.push(e), () => this.removeOnDestroy(e)
        }
        runInContext(e) {
            this.assertNotDestroyed();
            let n = wn(this),
                r = dt(void 0),
                i;
            try {
                return e()
            } finally {
                wn(n), dt(r)
            }
        }
        get(e, n = ai, r = G.Default) {
            if (this.assertNotDestroyed(), e.hasOwnProperty(yf)) return e[yf](this);
            r = fs(r);
            let i, o = wn(this),
                s = dt(void 0);
            try {
                if (!(r & G.SkipSelf)) {
                    let c = this.records.get(e);
                    if (c === void 0) {
                        let l = v0(e) && ds(e);
                        l && this.injectableDefInScope(l) ? c = wr(hc(e), jo) : c = null, this.records.set(e, c)
                    }
                    if (c != null) return this.hydrate(e, c)
                }
                let a = r & G.Self ? pl() : this.parent;
                return n = r & G.Optional && n === ai ? null : n, a.get(e, n)
            } catch (a) {
                if (a.name === "NullInjectorError") {
                    if ((a[Go] = a[Go] || []).unshift(We(e)), o) throw a;
                    return Vv(a, e, "R3InjectorError", this.source)
                } else throw a
            } finally {
                dt(s), wn(o)
            }
        }
        resolveInjectorInitializers() {
            let e = ee(null),
                n = wn(this),
                r = dt(void 0),
                i;
            try {
                let o = this.get(Tr, Ke, G.Self);
                for (let s of o) s()
            } finally {
                wn(n), dt(r), ee(e)
            }
        }
        toString() {
            let e = [],
                n = this.records;
            for (let r of n.keys()) e.push(We(r));
            return `R3Injector[${e.join(", ")}]`
        }
        assertNotDestroyed() {
            if (this._destroyed) throw new S(205, !1)
        }
        processProvider(e) {
            e = ze(e);
            let n = Ar(e) ? e : ze(e && e.provide),
                r = g0(e);
            if (!Ar(e) && e.multi === !0) {
                let i = this.records.get(n);
                i || (i = wr(void 0, jo, !0), i.factory = () => dc(i.multi), this.records.set(n, i)), n = e, i.multi.push(e)
            }
            this.records.set(n, r)
        }
        hydrate(e, n) {
            let r = ee(null);
            try {
                return n.value === jo && (n.value = p0, n.value = n.factory()), typeof n.value == "object" && n.value && y0(n.value) && this._ngOnDestroyHooks.add(n.value), n.value
            } finally {
                ee(r)
            }
        }
        injectableDefInScope(e) {
            if (!e.providedIn) return !1;
            let n = ze(e.providedIn);
            return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n)
        }
        removeOnDestroy(e) {
            let n = this._onDestroyHooks.indexOf(e);
            n !== -1 && this._onDestroyHooks.splice(n, 1)
        }
    };

function hc(t) {
    let e = ds(t),
        n = e !== null ? e.factory : Sr(t);
    if (n !== null) return n;
    if (t instanceof A) throw new S(204, !1);
    if (t instanceof Function) return h0(t);
    throw new S(204, !1)
}

function h0(t) {
    if (t.length > 0) throw new S(204, !1);
    let n = Ev(t);
    return n !== null ? () => n.factory(t) : () => new t
}

function g0(t) {
    if (Mp(t)) return wr(void 0, t.useValue);
    {
        let e = Sp(t);
        return wr(e, jo)
    }
}

function Sp(t, e, n) {
    let r;
    if (Ar(t)) {
        let i = ze(t);
        return Sr(i) || hc(i)
    } else if (Mp(t)) r = () => ze(t.useValue);
    else if (d0(t)) r = () => t.useFactory(...dc(t.deps || []));
    else if (u0(t)) r = () => L(ze(t.useExisting));
    else {
        let i = ze(t && (t.useClass || t.provide));
        if (m0(t)) r = () => new i(...dc(t.deps));
        else return Sr(i) || hc(i)
    }
    return r
}

function wr(t, e, n = !1) {
    return {
        factory: t,
        value: e,
        multi: n ? [] : void 0
    }
}

function m0(t) {
    return !!t.deps
}

function y0(t) {
    return t !== null && typeof t == "object" && typeof t.ngOnDestroy == "function"
}

function v0(t) {
    return typeof t == "function" || typeof t == "object" && t instanceof A
}

function gc(t, e) {
    for (let n of t) Array.isArray(n) ? gc(n, e) : n && cp(n) ? gc(n.\u0275providers, e) : e(n)
}

function rn(t, e) {
    t instanceof li && t.assertNotDestroyed();
    let n, r = wn(t),
        i = dt(void 0);
    try {
        return e()
    } finally {
        wn(r), dt(i)
    }
}

function C0() {
    return lp() !== void 0 || Fv() != null
}

function D0(t) {
    return typeof t == "function"
}
var on = 0,
    H = 1,
    O = 2,
    Le = 3,
    wt = 4,
    ot = 5,
    ui = 6,
    di = 7,
    Et = 8,
    Or = 9,
    It = 10,
    me = 11,
    fi = 12,
    Ef = 13,
    kr = 14,
    _t = 15,
    wi = 16,
    Er = 17,
    Xt = 18,
    gs = 19,
    xp = 20,
    En = 21,
    Ka = 22,
    qn = 23,
    Mt = 25,
    Tp = 1;
var Yn = 7,
    Ko = 8,
    Nr = 9,
    it = 10,
    hl = function(t) {
        return t[t.None = 0] = "None", t[t.HasTransplantedViews = 2] = "HasTransplantedViews", t
    }(hl || {});

function zn(t) {
    return Array.isArray(t) && typeof t[Tp] == "object"
}

function sn(t) {
    return Array.isArray(t) && t[Tp] === !0
}

function gl(t) {
    return (t.flags & 4) !== 0
}

function ms(t) {
    return t.componentOffset > -1
}

function ys(t) {
    return (t.flags & 1) === 1
}

function In(t) {
    return !!t.template
}

function b0(t) {
    return (t[O] & 512) !== 0
}
var mc = class {
    constructor(e, n, r) {
        this.previousValue = e, this.currentValue = n, this.firstChange = r
    }
    isFirstChange() {
        return this.firstChange
    }
};

function Ap(t, e, n, r) {
    e !== null ? e.applyValueToInputSignal(e, r) : t[n] = r
}

function jt() {
    return Op
}

function Op(t) {
    return t.type.prototype.ngOnChanges && (t.setInput = E0), w0
}
jt.ngInherit = !0;

function w0() {
    let t = Rp(this),
        e = t?.current;
    if (e) {
        let n = t.previous;
        if (n === xr) t.previous = e;
        else
            for (let r in e) n[r] = e[r];
        t.current = null, this.ngOnChanges(e)
    }
}

function E0(t, e, n, r, i) {
    let o = this.declaredInputs[r],
        s = Rp(t) || I0(t, {
            previous: xr,
            current: null
        }),
        a = s.current || (s.current = {}),
        c = s.previous,
        l = c[o];
    a[o] = new mc(l && l.currentValue, n, c === xr), Ap(t, e, i, n)
}
var Np = "__ngSimpleChanges__";

function Rp(t) {
    return t[Np] || null
}

function I0(t, e) {
    return t[Np] = e
}
var If = null;
var Rt = function(t, e, n) {
        If?.(t, e, n)
    },
    Pp = "svg",
    _0 = "math",
    M0 = !1;

function S0() {
    return M0
}

function kt(t) {
    for (; Array.isArray(t);) t = t[on];
    return t
}

function Fp(t, e) {
    return kt(e[t])
}

function ft(t, e) {
    return kt(e[t.index])
}

function kp(t, e) {
    return t.data[e]
}

function x0(t, e) {
    return t[e]
}

function Sn(t, e) {
    let n = e[t];
    return zn(n) ? n : n[on]
}

function T0(t) {
    return (t[O] & 4) === 4
}

function ml(t) {
    return (t[O] & 128) === 128
}

function A0(t) {
    return sn(t[Le])
}

function Rr(t, e) {
    return e == null ? null : t[e]
}

function Lp(t) {
    t[Er] = 0
}

function O0(t) {
    t[O] & 1024 || (t[O] |= 1024, ml(t) && pi(t))
}

function N0(t, e) {
    for (; t > 0;) e = e[kr], t--;
    return e
}

function yl(t) {
    return !!(t[O] & 9216 || t[qn]?.dirty)
}

function yc(t) {
    t[It].changeDetectionScheduler?.notify(1), yl(t) ? pi(t) : t[O] & 64 && (S0() ? (t[O] |= 1024, pi(t)) : t[It].changeDetectionScheduler?.notify())
}

function pi(t) {
    t[It].changeDetectionScheduler?.notify();
    let e = hi(t);
    for (; e !== null && !(e[O] & 8192 || (e[O] |= 8192, !ml(e)));) e = hi(e)
}

function Vp(t, e) {
    if ((t[O] & 256) === 256) throw new S(911, !1);
    t[En] === null && (t[En] = []), t[En].push(e)
}

function R0(t, e) {
    if (t[En] === null) return;
    let n = t[En].indexOf(e);
    n !== -1 && t[En].splice(n, 1)
}

function hi(t) {
    let e = t[Le];
    return sn(e) ? e[Le] : e
}
var B = {
    lFrame: Gp(null),
    bindingsEnabled: !0,
    skipHydrationRootTNode: null
};

function P0() {
    return B.lFrame.elementDepthCount
}

function F0() {
    B.lFrame.elementDepthCount++
}

function k0() {
    B.lFrame.elementDepthCount--
}

function jp() {
    return B.bindingsEnabled
}

function Up() {
    return B.skipHydrationRootTNode !== null
}

function L0(t) {
    return B.skipHydrationRootTNode === t
}

function V0() {
    B.skipHydrationRootTNode = null
}

function Q() {
    return B.lFrame.lView
}

function Ie() {
    return B.lFrame.tView
}

function Ue(t) {
    return B.lFrame.contextLView = t, t[Et]
}

function Be(t) {
    return B.lFrame.contextLView = null, t
}

function Ge() {
    let t = Bp();
    for (; t !== null && t.type === 64;) t = t.parent;
    return t
}

function Bp() {
    return B.lFrame.currentTNode
}

function j0() {
    let t = B.lFrame,
        e = t.currentTNode;
    return t.isParent ? e : e.parent
}

function er(t, e) {
    let n = B.lFrame;
    n.currentTNode = t, n.isParent = e
}

function vl() {
    return B.lFrame.isParent
}

function Cl() {
    B.lFrame.isParent = !1
}

function U0() {
    return B.lFrame.contextLView
}

function Dl() {
    let t = B.lFrame,
        e = t.bindingRootIndex;
    return e === -1 && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
}

function B0(t) {
    return B.lFrame.bindingIndex = t
}

function vs() {
    return B.lFrame.bindingIndex++
}

function $p(t) {
    let e = B.lFrame,
        n = e.bindingIndex;
    return e.bindingIndex = e.bindingIndex + t, n
}

function $0() {
    return B.lFrame.inI18n
}

function H0(t, e) {
    let n = B.lFrame;
    n.bindingIndex = n.bindingRootIndex = t, vc(e)
}

function z0() {
    return B.lFrame.currentDirectiveIndex
}

function vc(t) {
    B.lFrame.currentDirectiveIndex = t
}

function W0(t) {
    let e = B.lFrame.currentDirectiveIndex;
    return e === -1 ? null : t[e]
}

function Hp() {
    return B.lFrame.currentQueryIndex
}

function bl(t) {
    B.lFrame.currentQueryIndex = t
}

function G0(t) {
    let e = t[H];
    return e.type === 2 ? e.declTNode : e.type === 1 ? t[ot] : null
}

function zp(t, e, n) {
    if (n & G.SkipSelf) {
        let i = e,
            o = t;
        for (; i = i.parent, i === null && !(n & G.Host);)
            if (i = G0(o), i === null || (o = o[kr], i.type & 10)) break;
        if (i === null) return !1;
        e = i, t = o
    }
    let r = B.lFrame = Wp();
    return r.currentTNode = e, r.lView = t, !0
}

function wl(t) {
    let e = Wp(),
        n = t[H];
    B.lFrame = e, e.currentTNode = n.firstChild, e.lView = t, e.tView = n, e.contextLView = t, e.bindingIndex = n.bindingStartIndex, e.inI18n = !1
}

function Wp() {
    let t = B.lFrame,
        e = t === null ? null : t.child;
    return e === null ? Gp(t) : e
}

function Gp(t) {
    let e = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: t,
        child: null,
        inI18n: !1
    };
    return t !== null && (t.child = e), e
}

function qp() {
    let t = B.lFrame;
    return B.lFrame = t.parent, t.currentTNode = null, t.lView = null, t
}
var Yp = qp;

function El() {
    let t = qp();
    t.isParent = !0, t.tView = null, t.selectedIndex = -1, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
}

function q0(t) {
    return (B.lFrame.contextLView = N0(t, B.lFrame.contextLView))[Et]
}

function tr() {
    return B.lFrame.selectedIndex
}

function Kn(t) {
    B.lFrame.selectedIndex = t
}

function Il() {
    let t = B.lFrame;
    return kp(t.tView, t.selectedIndex)
}

function Ut() {
    B.lFrame.currentNamespace = Pp
}

function Y0() {
    return B.lFrame.currentNamespace
}
var Kp = !0;

function Cs() {
    return Kp
}

function Ds(t) {
    Kp = t
}

function K0(t, e, n) {
    let {
        ngOnChanges: r,
        ngOnInit: i,
        ngDoCheck: o
    } = e.type.prototype;
    if (r) {
        let s = Op(e);
        (n.preOrderHooks ??= []).push(t, s), (n.preOrderCheckHooks ??= []).push(t, s)
    }
    i && (n.preOrderHooks ??= []).push(0 - t, i), o && ((n.preOrderHooks ??= []).push(t, o), (n.preOrderCheckHooks ??= []).push(t, o))
}

function bs(t, e) {
    for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
        let o = t.data[n].type.prototype,
            {
                ngAfterContentInit: s,
                ngAfterContentChecked: a,
                ngAfterViewInit: c,
                ngAfterViewChecked: l,
                ngOnDestroy: u
            } = o;
        s && (t.contentHooks ??= []).push(-n, s), a && ((t.contentHooks ??= []).push(n, a), (t.contentCheckHooks ??= []).push(n, a)), c && (t.viewHooks ??= []).push(-n, c), l && ((t.viewHooks ??= []).push(n, l), (t.viewCheckHooks ??= []).push(n, l)), u != null && (t.destroyHooks ??= []).push(n, u)
    }
}

function Uo(t, e, n) {
    Qp(t, e, 3, n)
}

function Bo(t, e, n, r) {
    (t[O] & 3) === n && Qp(t, e, n, r)
}

function Qa(t, e) {
    let n = t[O];
    (n & 3) === e && (n &= 16383, n += 1, t[O] = n)
}

function Qp(t, e, n, r) {
    let i = r !== void 0 ? t[Er] & 65535 : 0,
        o = r ?? -1,
        s = e.length - 1,
        a = 0;
    for (let c = i; c < s; c++)
        if (typeof e[c + 1] == "number") {
            if (a = e[c], r != null && a >= r) break
        } else e[c] < 0 && (t[Er] += 65536), (a < o || o == -1) && (Q0(t, n, e, c), t[Er] = (t[Er] & 4294901760) + c + 2), c++
}

function _f(t, e) {
    Rt(4, t, e);
    let n = ee(null);
    try {
        e.call(t)
    } finally {
        ee(n), Rt(5, t, e)
    }
}

function Q0(t, e, n, r) {
    let i = n[r] < 0,
        o = n[r + 1],
        s = i ? -n[r] : n[r],
        a = t[s];
    i ? t[O] >> 14 < t[Er] >> 16 && (t[O] & 3) === e && (t[O] += 16384, _f(a, o)) : _f(a, o)
}
var Mr = -1,
    Qn = class {
        constructor(e, n, r) {
            this.factory = e, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r
        }
    };

function Z0(t) {
    return t instanceof Qn
}

function J0(t) {
    return (t.flags & 8) !== 0
}

function X0(t) {
    return (t.flags & 16) !== 0
}

function Zp(t) {
    return t !== Mr
}

function Qo(t) {
    return t & 32767
}

function eC(t) {
    return t >> 16
}

function Zo(t, e) {
    let n = eC(t),
        r = e;
    for (; n > 0;) r = r[kr], n--;
    return r
}
var Cc = !0;

function Mf(t) {
    let e = Cc;
    return Cc = t, e
}
var tC = 256,
    Jp = tC - 1,
    Xp = 5,
    nC = 0,
    Pt = {};

function rC(t, e, n) {
    let r;
    typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(si) && (r = n[si]), r == null && (r = n[si] = nC++);
    let i = r & Jp,
        o = 1 << i;
    e.data[t + (i >> Xp)] |= o
}

function Jo(t, e) {
    let n = eh(t, e);
    if (n !== -1) return n;
    let r = e[H];
    r.firstCreatePass && (t.injectorIndex = e.length, Za(r.data, t), Za(e, null), Za(r.blueprint, null));
    let i = _l(t, e),
        o = t.injectorIndex;
    if (Zp(i)) {
        let s = Qo(i),
            a = Zo(i, e),
            c = a[H].data;
        for (let l = 0; l < 8; l++) e[o + l] = a[s + l] | c[s + l]
    }
    return e[o + 8] = i, o
}

function Za(t, e) {
    t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
}

function eh(t, e) {
    return t.injectorIndex === -1 || t.parent && t.parent.injectorIndex === t.injectorIndex || e[t.injectorIndex + 8] === null ? -1 : t.injectorIndex
}

function _l(t, e) {
    if (t.parent && t.parent.injectorIndex !== -1) return t.parent.injectorIndex;
    let n = 0,
        r = null,
        i = e;
    for (; i !== null;) {
        if (r = oh(i), r === null) return Mr;
        if (n++, i = i[kr], r.injectorIndex !== -1) return r.injectorIndex | n << 16
    }
    return Mr
}

function Dc(t, e, n) {
    rC(t, e, n)
}

function th(t, e, n) {
    if (n & G.Optional || t !== void 0) return t;
    al(e, "NodeInjector")
}

function nh(t, e, n, r) {
    if (n & G.Optional && r === void 0 && (r = null), !(n & (G.Self | G.Host))) {
        let i = t[Or],
            o = dt(void 0);
        try {
            return i ? i.get(e, r, n & G.Optional) : up(e, r, n & G.Optional)
        } finally {
            dt(o)
        }
    }
    return th(r, e, n)
}

function rh(t, e, n, r = G.Default, i) {
    if (t !== null) {
        if (e[O] & 2048 && !(r & G.Self)) {
            let s = aC(t, e, n, r, Pt);
            if (s !== Pt) return s
        }
        let o = ih(t, e, n, r, Pt);
        if (o !== Pt) return o
    }
    return nh(e, n, r, i)
}

function ih(t, e, n, r, i) {
    let o = oC(n);
    if (typeof o == "function") {
        if (!zp(e, t, r)) return r & G.Host ? th(i, n, r) : nh(e, n, r, i);
        try {
            let s;
            if (s = o(r), s == null && !(r & G.Optional)) al(n);
            else return s
        } finally {
            Yp()
        }
    } else if (typeof o == "number") {
        let s = null,
            a = eh(t, e),
            c = Mr,
            l = r & G.Host ? e[_t][ot] : null;
        for ((a === -1 || r & G.SkipSelf) && (c = a === -1 ? _l(t, e) : e[a + 8], c === Mr || !xf(r, !1) ? a = -1 : (s = e[H], a = Qo(c), e = Zo(c, e))); a !== -1;) {
            let u = e[H];
            if (Sf(o, a, u.data)) {
                let d = iC(a, e, n, s, r, l);
                if (d !== Pt) return d
            }
            c = e[a + 8], c !== Mr && xf(r, e[H].data[a + 8] === l) && Sf(o, a, e) ? (s = u, a = Qo(c), e = Zo(c, e)) : a = -1
        }
    }
    return i
}

function iC(t, e, n, r, i, o) {
    let s = e[H],
        a = s.data[t + 8],
        c = r == null ? ms(a) && Cc : r != s && (a.type & 3) !== 0,
        l = i & G.Host && o === a,
        u = $o(a, s, n, c, l);
    return u !== null ? Zn(e, s, u, a) : Pt
}

function $o(t, e, n, r, i) {
    let o = t.providerIndexes,
        s = e.data,
        a = o & 1048575,
        c = t.directiveStart,
        l = t.directiveEnd,
        u = o >> 20,
        d = r ? a : a + u,
        f = i ? a + u : l;
    for (let p = d; p < f; p++) {
        let m = s[p];
        if (p < c && n === m || p >= c && m.type === n) return p
    }
    if (i) {
        let p = s[c];
        if (p && In(p) && p.type === n) return c
    }
    return null
}

function Zn(t, e, n, r) {
    let i = t[n],
        o = e.data;
    if (Z0(i)) {
        let s = i;
        s.resolving && Av(Tv(o[n]));
        let a = Mf(s.canSeeViewProviders);
        s.resolving = !0;
        let c, l = s.injectImpl ? dt(s.injectImpl) : null,
            u = zp(t, r, G.Default);
        try {
            i = t[n] = s.factory(void 0, o, t, r), e.firstCreatePass && n >= r.directiveStart && K0(n, o[n], e)
        } finally {
            l !== null && dt(l), Mf(a), s.resolving = !1, Yp()
        }
    }
    return i
}

function oC(t) {
    if (typeof t == "string") return t.charCodeAt(0) || 0;
    let e = t.hasOwnProperty(si) ? t[si] : void 0;
    return typeof e == "number" ? e >= 0 ? e & Jp : sC : e
}

function Sf(t, e, n) {
    let r = 1 << t;
    return !!(n[e + (t >> Xp)] & r)
}

function xf(t, e) {
    return !(t & G.Self) && !(t & G.Host && e)
}
var Wn = class {
    constructor(e, n) {
        this._tNode = e, this._lView = n
    }
    get(e, n, r) {
        return rh(this._tNode, this._lView, e, fs(r), n)
    }
};

function sC() {
    return new Wn(Ge(), Q())
}

function Oe(t) {
    return Ci(() => {
        let e = t.prototype.constructor,
            n = e[Wo] || bc(e),
            r = Object.prototype,
            i = Object.getPrototypeOf(t.prototype).constructor;
        for (; i && i !== r;) {
            let o = i[Wo] || bc(i);
            if (o && o !== n) return o;
            i = Object.getPrototypeOf(i)
        }
        return o => new o
    })
}

function bc(t) {
    return ip(t) ? () => {
        let e = bc(ze(t));
        return e && e()
    } : Sr(t)
}

function aC(t, e, n, r, i) {
    let o = t,
        s = e;
    for (; o !== null && s !== null && s[O] & 2048 && !(s[O] & 512);) {
        let a = ih(o, s, n, r | G.Self, Pt);
        if (a !== Pt) return a;
        let c = o.parent;
        if (!c) {
            let l = s[xp];
            if (l) {
                let u = l.get(n, Pt, r);
                if (u !== Pt) return u
            }
            c = oh(s), s = s[kr]
        }
        o = c
    }
    return i
}

function oh(t) {
    let e = t[H],
        n = e.type;
    return n === 2 ? e.declTNode : n === 1 ? t[ot] : null
}

function Tf(t, e = null, n = null, r) {
    let i = sh(t, e, n, r);
    return i.resolveInjectorInitializers(), i
}

function sh(t, e = null, n = null, r, i = new Set) {
    let o = [n || Ke, c0(t)];
    return r = r || (typeof t == "object" ? void 0 : We(t)), new li(o, e || pl(), r || null, i)
}
var Lr = (() => {
    let e = class e {
        static create(r, i) {
            if (Array.isArray(r)) return Tf({
                name: ""
            }, i, r, "");
            {
                let o = r.name ?? "";
                return Tf({
                    name: o
                }, r.parent, r.providers, o)
            }
        }
    };
    e.THROW_IF_NOT_FOUND = ai, e.NULL = new Yo, e.\u0275prov = x({
        token: e,
        providedIn: "any",
        factory: () => L(pp)
    }), e.__NG_ELEMENT_ID__ = -1;
    let t = e;
    return t
})();
var cC = "ngOriginalError";

function Ja(t) {
    return t[cC]
}
var en = class {
        constructor() {
            this._console = console
        }
        handleError(e) {
            let n = this._findOriginalError(e);
            this._console.error("ERROR", e), n && this._console.error("ORIGINAL ERROR", n)
        }
        _findOriginalError(e) {
            let n = e && Ja(e);
            for (; n && Ja(n);) n = Ja(n);
            return n || null
        }
    },
    ah = new A("", {
        providedIn: "root",
        factory: () => D(en).handleError.bind(void 0)
    }),
    ch = (() => {
        let e = class e {};
        e.__NG_ELEMENT_ID__ = lC, e.__NG_ENV_ID__ = r => r;
        let t = e;
        return t
    })(),
    wc = class extends ch {
        constructor(e) {
            super(), this._lView = e
        }
        onDestroy(e) {
            return Vp(this._lView, e), () => R0(this._lView, e)
        }
    };

function lC() {
    return new wc(Q())
}

function uC() {
    return Vr(Ge(), Q())
}

function Vr(t, e) {
    return new _e(ft(t, e))
}
var _e = (() => {
    let e = class e {
        constructor(r) {
            this.nativeElement = r
        }
    };
    e.__NG_ELEMENT_ID__ = uC;
    let t = e;
    return t
})();

function dC(t) {
    return t instanceof _e ? t.nativeElement : t
}
var Ec = class extends Fe {
    constructor(e = !1) {
        super(), this.destroyRef = void 0, this.__isAsync = e, C0() && (this.destroyRef = D(ch, {
            optional: !0
        }) ?? void 0)
    }
    emit(e) {
        let n = ee(null);
        try {
            super.next(e)
        } finally {
            ee(n)
        }
    }
    subscribe(e, n, r) {
        let i = e,
            o = n || (() => null),
            s = r;
        if (e && typeof e == "object") {
            let c = e;
            i = c.next?.bind(c), o = c.error?.bind(c), s = c.complete?.bind(c)
        }
        this.__isAsync && (o = Xa(o), i && (i = Xa(i)), s && (s = Xa(s)));
        let a = super.subscribe({
            next: i,
            error: o,
            complete: s
        });
        return e instanceof Se && e.add(a), a
    }
};

function Xa(t) {
    return e => {
        setTimeout(t, void 0, e)
    }
}
var ge = Ec;

function fC() {
    return this._results[Symbol.iterator]()
}
var Ic = class t {
    get changes() {
        return this._changes ??= new ge
    }
    constructor(e = !1) {
        this._emitDistinctChangesOnly = e, this.dirty = !0, this._onDirty = void 0, this._results = [], this._changesDetected = !1, this._changes = void 0, this.length = 0, this.first = void 0, this.last = void 0;
        let n = t.prototype;
        n[Symbol.iterator] || (n[Symbol.iterator] = fC)
    }
    get(e) {
        return this._results[e]
    }
    map(e) {
        return this._results.map(e)
    }
    filter(e) {
        return this._results.filter(e)
    }
    find(e) {
        return this._results.find(e)
    }
    reduce(e, n) {
        return this._results.reduce(e, n)
    }
    forEach(e) {
        this._results.forEach(e)
    }
    some(e) {
        return this._results.some(e)
    }
    toArray() {
        return this._results.slice()
    }
    toString() {
        return this._results.toString()
    }
    reset(e, n) {
        this.dirty = !1;
        let r = Bv(e);
        (this._changesDetected = !Uv(this._results, r, n)) && (this._results = r, this.length = r.length, this.last = r[this.length - 1], this.first = r[0])
    }
    notifyOnChanges() {
        this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
    }
    onDirty(e) {
        this._onDirty = e
    }
    setDirty() {
        this.dirty = !0, this._onDirty?.()
    }
    destroy() {
        this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe())
    }
};

function lh(t) {
    return (t.flags & 128) === 128
}
var uh = new Map,
    pC = 0;

function hC() {
    return pC++
}

function gC(t) {
    uh.set(t[gs], t)
}

function mC(t) {
    uh.delete(t[gs])
}
var Af = "__ngContext__";

function _n(t, e) {
    zn(e) ? (t[Af] = e[gs], gC(e)) : t[Af] = e
}

function dh(t) {
    return ph(t[fi])
}

function fh(t) {
    return ph(t[wt])
}

function ph(t) {
    for (; t !== null && !sn(t);) t = t[wt];
    return t
}
var _c;

function hh(t) {
    _c = t
}

function gh() {
    if (_c !== void 0) return _c;
    if (typeof document < "u") return document;
    throw new S(210, !1)
}
var Ml = new A("", {
        providedIn: "root",
        factory: () => yC
    }),
    yC = "ng",
    Sl = new A(""),
    Ze = new A("", {
        providedIn: "platform",
        factory: () => "unknown"
    });
var xl = new A("", {
    providedIn: "root",
    factory: () => gh().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null
});
var vC = "h",
    CC = "b";
var DC = () => null;

function Tl(t, e, n = !1) {
    return DC(t, e, n)
}
var mh = !1,
    bC = new A("", {
        providedIn: "root",
        factory: () => mh
    });
var Po;

function wC() {
    if (Po === void 0 && (Po = null, Jt.trustedTypes)) try {
        Po = Jt.trustedTypes.createPolicy("angular", {
            createHTML: t => t,
            createScript: t => t,
            createScriptURL: t => t
        })
    } catch {}
    return Po
}

function ws(t) {
    return wC()?.createHTML(t) || t
}
var Fo;

function EC() {
    if (Fo === void 0 && (Fo = null, Jt.trustedTypes)) try {
        Fo = Jt.trustedTypes.createPolicy("angular#unsafe-bypass", {
            createHTML: t => t,
            createScript: t => t,
            createScriptURL: t => t
        })
    } catch {}
    return Fo
}

function Of(t) {
    return EC()?.createHTML(t) || t
}
var Xo = class {
    constructor(e) {
        this.changingThisBreaksApplicationSecurity = e
    }
    toString() {
        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${np})`
    }
};

function jr(t) {
    return t instanceof Xo ? t.changingThisBreaksApplicationSecurity : t
}

function Al(t, e) {
    let n = IC(t);
    if (n != null && n !== e) {
        if (n === "ResourceURL" && e === "URL") return !0;
        throw new Error(`Required a safe ${e}, got a ${n} (see ${np})`)
    }
    return n === e
}

function IC(t) {
    return t instanceof Xo && t.getTypeName() || null
}

function _C(t) {
    let e = new Sc(t);
    return MC() ? new Mc(e) : e
}
var Mc = class {
        constructor(e) {
            this.inertDocumentHelper = e
        }
        getInertBodyElement(e) {
            e = "<body><remove></remove>" + e;
            try {
                let n = new window.DOMParser().parseFromString(ws(e), "text/html").body;
                return n === null ? this.inertDocumentHelper.getInertBodyElement(e) : (n.removeChild(n.firstChild), n)
            } catch {
                return null
            }
        }
    },
    Sc = class {
        constructor(e) {
            this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")
        }
        getInertBodyElement(e) {
            let n = this.inertDocument.createElement("template");
            return n.innerHTML = ws(e), n
        }
    };

function MC() {
    try {
        return !!new window.DOMParser().parseFromString(ws(""), "text/html")
    } catch {
        return !1
    }
}
var SC = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

function Ol(t) {
    return t = String(t), t.match(SC) ? t : "unsafe:" + t
}

function an(t) {
    let e = {};
    for (let n of t.split(",")) e[n] = !0;
    return e
}

function Ei(...t) {
    let e = {};
    for (let n of t)
        for (let r in n) n.hasOwnProperty(r) && (e[r] = !0);
    return e
}
var yh = an("area,br,col,hr,img,wbr"),
    vh = an("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    Ch = an("rp,rt"),
    xC = Ei(Ch, vh),
    TC = Ei(vh, an("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),
    AC = Ei(Ch, an("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),
    Nf = Ei(yh, TC, AC, xC),
    Dh = an("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
    OC = an("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),
    NC = an("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),
    RC = Ei(Dh, OC, NC),
    PC = an("script,style,template"),
    xc = class {
        constructor() {
            this.sanitizedSomething = !1, this.buf = []
        }
        sanitizeChildren(e) {
            let n = e.firstChild,
                r = !0,
                i = [];
            for (; n;) {
                if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, r && n.firstChild) {
                    i.push(n), n = LC(n);
                    continue
                }
                for (; n;) {
                    n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                    let o = kC(n);
                    if (o) {
                        n = o;
                        break
                    }
                    n = i.pop()
                }
            }
            return this.buf.join("")
        }
        startElement(e) {
            let n = Rf(e).toLowerCase();
            if (!Nf.hasOwnProperty(n)) return this.sanitizedSomething = !0, !PC.hasOwnProperty(n);
            this.buf.push("<"), this.buf.push(n);
            let r = e.attributes;
            for (let i = 0; i < r.length; i++) {
                let o = r.item(i),
                    s = o.name,
                    a = s.toLowerCase();
                if (!RC.hasOwnProperty(a)) {
                    this.sanitizedSomething = !0;
                    continue
                }
                let c = o.value;
                Dh[a] && (c = Ol(c)), this.buf.push(" ", s, '="', Pf(c), '"')
            }
            return this.buf.push(">"), !0
        }
        endElement(e) {
            let n = Rf(e).toLowerCase();
            Nf.hasOwnProperty(n) && !yh.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"))
        }
        chars(e) {
            this.buf.push(Pf(e))
        }
    };

function FC(t, e) {
    return (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY
}

function kC(t) {
    let e = t.nextSibling;
    if (e && t !== e.previousSibling) throw bh(e);
    return e
}

function LC(t) {
    let e = t.firstChild;
    if (e && FC(t, e)) throw bh(e);
    return e
}

function Rf(t) {
    let e = t.nodeName;
    return typeof e == "string" ? e : "FORM"
}

function bh(t) {
    return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)
}
var VC = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    jC = /([^\#-~ |!])/g;

function Pf(t) {
    return t.replace(/&/g, "&amp;").replace(VC, function(e) {
        let n = e.charCodeAt(0),
            r = e.charCodeAt(1);
        return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";"
    }).replace(jC, function(e) {
        return "&#" + e.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
var ko;

function wh(t, e) {
    let n = null;
    try {
        ko = ko || _C(t);
        let r = e ? String(e) : "";
        n = ko.getInertBodyElement(r);
        let i = 5,
            o = r;
        do {
            if (i === 0) throw new Error("Failed to sanitize html because the input is unstable");
            i--, r = o, o = n.innerHTML, n = ko.getInertBodyElement(r)
        } while (r !== o);
        let a = new xc().sanitizeChildren(Ff(n) || n);
        return ws(a)
    } finally {
        if (n) {
            let r = Ff(n) || n;
            for (; r.firstChild;) r.removeChild(r.firstChild)
        }
    }
}

function Ff(t) {
    return "content" in t && UC(t) ? t.content : null
}

function UC(t) {
    return t.nodeType === Node.ELEMENT_NODE && t.nodeName === "TEMPLATE"
}
var Es = function(t) {
    return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
}(Es || {});

function Eh(t) {
    let e = Ih();
    return e ? Of(e.sanitize(Es.HTML, t) || "") : Al(t, "HTML") ? Of(jr(t)) : wh(gh(), Di(t))
}

function Is(t) {
    let e = Ih();
    return e ? e.sanitize(Es.URL, t) || "" : Al(t, "URL") ? jr(t) : Ol(Di(t))
}

function Ih() {
    let t = Q();
    return t && t[It].sanitizer
}
var BC = /^>|^->|<!--|-->|--!>|<!-$/g,
    $C = /(<|>)/g,
    HC = "\u200B$1\u200B";

function zC(t) {
    return t.replace(BC, e => e.replace($C, HC))
}

function _h(t) {
    return t.ownerDocument.defaultView
}

function Mh(t) {
    return t instanceof Function ? t() : t
}
var Lt = function(t) {
        return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
    }(Lt || {}),
    WC;

function Nl(t, e) {
    return WC(t, e)
}

function Ir(t, e, n, r, i) {
    if (r != null) {
        let o, s = !1;
        sn(r) ? o = r : zn(r) && (s = !0, r = r[on]);
        let a = kt(r);
        t === 0 && n !== null ? i == null ? Nh(e, n, a) : es(e, n, a, i || null, !0) : t === 1 && n !== null ? es(e, n, a, i || null, !0) : t === 2 ? aD(e, a, s) : t === 3 && e.destroyNode(a), o != null && lD(e, t, o, n, i)
    }
}

function GC(t, e) {
    return t.createText(e)
}

function qC(t, e, n) {
    t.setValue(e, n)
}

function YC(t, e) {
    return t.createComment(zC(e))
}

function Sh(t, e, n) {
    return t.createElement(e, n)
}

function KC(t, e) {
    xh(t, e), e[on] = null, e[ot] = null
}

function QC(t, e, n, r, i, o) {
    r[on] = i, r[ot] = e, Ms(t, r, n, 1, i, o)
}

function xh(t, e) {
    e[It].changeDetectionScheduler?.notify(1), Ms(t, e, e[me], 2, null, null)
}

function ZC(t) {
    let e = t[fi];
    if (!e) return ec(t[H], t);
    for (; e;) {
        let n = null;
        if (zn(e)) n = e[fi];
        else {
            let r = e[it];
            r && (n = r)
        }
        if (!n) {
            for (; e && !e[wt] && e !== t;) zn(e) && ec(e[H], e), e = e[Le];
            e === null && (e = t), zn(e) && ec(e[H], e), n = e && e[wt]
        }
        e = n
    }
}

function JC(t, e, n, r) {
    let i = it + r,
        o = n.length;
    r > 0 && (n[i - 1][wt] = e), r < o - it ? (e[wt] = n[i], fp(n, it + r, e)) : (n.push(e), e[wt] = null), e[Le] = n;
    let s = e[wi];
    s !== null && n !== s && XC(s, e);
    let a = e[Xt];
    a !== null && a.insertView(t), yc(e), e[O] |= 128
}

function XC(t, e) {
    let n = t[Nr],
        i = e[Le][Le][_t];
    e[_t] !== i && (t[O] |= hl.HasTransplantedViews), n === null ? t[Nr] = [e] : n.push(e)
}

function Th(t, e) {
    let n = t[Nr],
        r = n.indexOf(e);
    n.splice(r, 1)
}

function Tc(t, e) {
    if (t.length <= it) return;
    let n = it + e,
        r = t[n];
    if (r) {
        let i = r[wi];
        i !== null && i !== t && Th(i, r), e > 0 && (t[n - 1][wt] = r[wt]);
        let o = qo(t, it + e);
        KC(r[H], r);
        let s = o[Xt];
        s !== null && s.detachView(o[H]), r[Le] = null, r[wt] = null, r[O] &= -129
    }
    return r
}

function Ah(t, e) {
    if (!(e[O] & 256)) {
        let n = e[me];
        n.destroyNode && Ms(t, e, n, 3, null, null), ZC(e)
    }
}

function ec(t, e) {
    if (e[O] & 256) return;
    let n = ee(null);
    try {
        e[O] &= -129, e[O] |= 256, e[qn] && Pd(e[qn]), tD(t, e), eD(t, e), e[H].type === 1 && e[me].destroy();
        let r = e[wi];
        if (r !== null && sn(e[Le])) {
            r !== e[Le] && Th(r, e);
            let i = e[Xt];
            i !== null && i.detachView(t)
        }
        mC(e)
    } finally {
        ee(n)
    }
}

function eD(t, e) {
    let n = t.cleanup,
        r = e[di];
    if (n !== null)
        for (let o = 0; o < n.length - 1; o += 2)
            if (typeof n[o] == "string") {
                let s = n[o + 3];
                s >= 0 ? r[s]() : r[-s].unsubscribe(), o += 2
            } else {
                let s = r[n[o + 1]];
                n[o].call(s)
            } r !== null && (e[di] = null);
    let i = e[En];
    if (i !== null) {
        e[En] = null;
        for (let o = 0; o < i.length; o++) {
            let s = i[o];
            s()
        }
    }
}

function tD(t, e) {
    let n;
    if (t != null && (n = t.destroyHooks) != null)
        for (let r = 0; r < n.length; r += 2) {
            let i = e[n[r]];
            if (!(i instanceof Qn)) {
                let o = n[r + 1];
                if (Array.isArray(o))
                    for (let s = 0; s < o.length; s += 2) {
                        let a = i[o[s]],
                            c = o[s + 1];
                        Rt(4, a, c);
                        try {
                            c.call(a)
                        } finally {
                            Rt(5, a, c)
                        }
                    } else {
                        Rt(4, i, o);
                        try {
                            o.call(i)
                        } finally {
                            Rt(5, i, o)
                        }
                    }
            }
        }
}

function Oh(t, e, n) {
    return nD(t, e.parent, n)
}

function nD(t, e, n) {
    let r = e;
    for (; r !== null && r.type & 40;) e = r, r = e.parent;
    if (r === null) return n[on];
    {
        let {
            componentOffset: i
        } = r;
        if (i > -1) {
            let {
                encapsulation: o
            } = t.data[r.directiveStart + i];
            if (o === Ft.None || o === Ft.Emulated) return null
        }
        return ft(r, n)
    }
}

function es(t, e, n, r, i) {
    t.insertBefore(e, n, r, i)
}

function Nh(t, e, n) {
    t.appendChild(e, n)
}

function kf(t, e, n, r, i) {
    r !== null ? es(t, e, n, r, i) : Nh(t, e, n)
}

function rD(t, e, n, r) {
    t.removeChild(e, n, r)
}

function Rl(t, e) {
    return t.parentNode(e)
}

function iD(t, e) {
    return t.nextSibling(e)
}

function Rh(t, e, n) {
    return sD(t, e, n)
}

function oD(t, e, n) {
    return t.type & 40 ? ft(t, n) : null
}
var sD = oD,
    Lf;

function _s(t, e, n, r) {
    let i = Oh(t, r, e),
        o = e[me],
        s = r.parent || e[ot],
        a = Rh(s, r, e);
    if (i != null)
        if (Array.isArray(n))
            for (let c = 0; c < n.length; c++) kf(o, i, n[c], a, !1);
        else kf(o, i, n, a, !1);
    Lf !== void 0 && Lf(o, r, e, n, i)
}

function Ho(t, e) {
    if (e !== null) {
        let n = e.type;
        if (n & 3) return ft(e, t);
        if (n & 4) return Ac(-1, t[e.index]);
        if (n & 8) {
            let r = e.child;
            if (r !== null) return Ho(t, r);
            {
                let i = t[e.index];
                return sn(i) ? Ac(-1, i) : kt(i)
            }
        } else {
            if (n & 32) return Nl(e, t)() || kt(t[e.index]);
            {
                let r = Ph(t, e);
                if (r !== null) {
                    if (Array.isArray(r)) return r[0];
                    let i = hi(t[_t]);
                    return Ho(i, r)
                } else return Ho(t, e.next)
            }
        }
    }
    return null
}

function Ph(t, e) {
    if (e !== null) {
        let r = t[_t][ot],
            i = e.projection;
        return r.projection[i]
    }
    return null
}

function Ac(t, e) {
    let n = it + t + 1;
    if (n < e.length) {
        let r = e[n],
            i = r[H].firstChild;
        if (i !== null) return Ho(r, i)
    }
    return e[Yn]
}

function aD(t, e, n) {
    let r = Rl(t, e);
    r && rD(t, r, e, n)
}

function Pl(t, e, n, r, i, o, s) {
    for (; n != null;) {
        let a = r[n.index],
            c = n.type;
        if (s && e === 0 && (a && _n(kt(a), r), n.flags |= 2), (n.flags & 32) !== 32)
            if (c & 8) Pl(t, e, n.child, r, i, o, !1), Ir(e, t, i, a, o);
            else if (c & 32) {
            let l = Nl(n, r),
                u;
            for (; u = l();) Ir(e, t, i, u, o);
            Ir(e, t, i, a, o)
        } else c & 16 ? Fh(t, e, r, n, i, o) : Ir(e, t, i, a, o);
        n = s ? n.projectionNext : n.next
    }
}

function Ms(t, e, n, r, i, o) {
    Pl(n, r, t.firstChild, e, i, o, !1)
}

function cD(t, e, n) {
    let r = e[me],
        i = Oh(t, n, e),
        o = n.parent || e[ot],
        s = Rh(o, n, e);
    Fh(r, 0, e, n, i, s)
}

function Fh(t, e, n, r, i, o) {
    let s = n[_t],
        c = s[ot].projection[r.projection];
    if (Array.isArray(c))
        for (let l = 0; l < c.length; l++) {
            let u = c[l];
            Ir(e, t, i, u, o)
        } else {
            let l = c,
                u = s[Le];
            lh(r) && (l.flags |= 128), Pl(t, e, l, u, i, o, !0)
        }
}

function lD(t, e, n, r, i) {
    let o = n[Yn],
        s = kt(n);
    o !== s && Ir(e, t, r, o, i);
    for (let a = it; a < n.length; a++) {
        let c = n[a];
        Ms(c[H], c, t, e, r, o)
    }
}

function uD(t, e, n, r, i) {
    if (e) i ? t.addClass(n, r) : t.removeClass(n, r);
    else {
        let o = r.indexOf("-") === -1 ? void 0 : Lt.DashCase;
        i == null ? t.removeStyle(n, r, o) : (typeof i == "string" && i.endsWith("!important") && (i = i.slice(0, -10), o |= Lt.Important), t.setStyle(n, r, i, o))
    }
}

function dD(t, e, n) {
    t.setAttribute(e, "style", n)
}

function kh(t, e, n) {
    n === "" ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n)
}

function Lh(t, e, n) {
    let {
        mergedAttrs: r,
        classes: i,
        styles: o
    } = n;
    r !== null && fc(t, e, r), i !== null && kh(t, e, i), o !== null && dD(t, e, o)
}
var cn = {};

function C(t = 1) {
    Vh(Ie(), Q(), tr() + t, !1)
}

function Vh(t, e, n, r) {
    if (!r)
        if ((e[O] & 3) === 3) {
            let o = t.preOrderCheckHooks;
            o !== null && Uo(e, o, n)
        } else {
            let o = t.preOrderHooks;
            o !== null && Bo(e, o, 0, n)
        } Kn(n)
}

function _(t, e = G.Default) {
    let n = Q();
    if (n === null) return L(t, e);
    let r = Ge();
    return rh(r, n, ze(t), e)
}

function jh(t, e, n, r, i, o) {
    let s = ee(null);
    try {
        let a = null;
        i & Y.SignalBased && (a = e[r][Un]), a !== null && a.transformFn !== void 0 && (o = a.transformFn(o)), i & Y.HasDecoratorInputTransform && (o = t.inputTransforms[r].call(e, o)), t.setInput !== null ? t.setInput(e, a, o, n, r) : Ap(e, a, r, o)
    } finally {
        ee(s)
    }
}

function fD(t, e) {
    let n = t.hostBindingOpCodes;
    if (n !== null) try {
        for (let r = 0; r < n.length; r++) {
            let i = n[r];
            if (i < 0) Kn(~i);
            else {
                let o = i,
                    s = n[++r],
                    a = n[++r];
                H0(s, o);
                let c = e[o];
                a(2, c)
            }
        }
    } finally {
        Kn(-1)
    }
}

function Ss(t, e, n, r, i, o, s, a, c, l, u) {
    let d = e.blueprint.slice();
    return d[on] = i, d[O] = r | 4 | 128 | 8 | 64, (l !== null || t && t[O] & 2048) && (d[O] |= 2048), Lp(d), d[Le] = d[kr] = t, d[Et] = n, d[It] = s || t && t[It], d[me] = a || t && t[me], d[Or] = c || t && t[Or] || null, d[ot] = o, d[gs] = hC(), d[ui] = u, d[xp] = l, d[_t] = e.type == 2 ? t[_t] : d, d
}

function Ur(t, e, n, r, i) {
    let o = t.data[e];
    if (o === null) o = pD(t, e, n, r, i), $0() && (o.flags |= 32);
    else if (o.type & 64) {
        o.type = n, o.value = r, o.attrs = i;
        let s = j0();
        o.injectorIndex = s === null ? -1 : s.injectorIndex
    }
    return er(o, !0), o
}

function pD(t, e, n, r, i) {
    let o = Bp(),
        s = vl(),
        a = s ? o : o && o.parent,
        c = t.data[e] = CD(t, a, n, e, r, i);
    return t.firstChild === null && (t.firstChild = c), o !== null && (s ? o.child == null && c.parent !== null && (o.child = c) : o.next === null && (o.next = c, c.prev = o)), c
}

function Uh(t, e, n, r) {
    if (n === 0) return -1;
    let i = e.length;
    for (let o = 0; o < n; o++) e.push(r), t.blueprint.push(r), t.data.push(null);
    return i
}

function Bh(t, e, n, r, i) {
    let o = tr(),
        s = r & 2;
    try {
        Kn(-1), s && e.length > Mt && Vh(t, e, Mt, !1), Rt(s ? 2 : 0, i), n(r, i)
    } finally {
        Kn(o), Rt(s ? 3 : 1, i)
    }
}

function Fl(t, e, n) {
    if (gl(e)) {
        let r = ee(null);
        try {
            let i = e.directiveStart,
                o = e.directiveEnd;
            for (let s = i; s < o; s++) {
                let a = t.data[s];
                if (a.contentQueries) {
                    let c = n[s];
                    a.contentQueries(1, c, s)
                }
            }
        } finally {
            ee(r)
        }
    }
}

function kl(t, e, n) {
    jp() && (_D(t, e, n, ft(n, e)), (n.flags & 64) === 64 && Wh(t, e, n))
}

function Ll(t, e, n = ft) {
    let r = e.localNames;
    if (r !== null) {
        let i = e.index + 1;
        for (let o = 0; o < r.length; o += 2) {
            let s = r[o + 1],
                a = s === -1 ? n(e, t) : t[s];
            t[i++] = a
        }
    }
}

function $h(t) {
    let e = t.tView;
    return e === null || e.incompleteFirstPass ? t.tView = Vl(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts, t.id) : e
}

function Vl(t, e, n, r, i, o, s, a, c, l, u) {
    let d = Mt + r,
        f = d + i,
        p = hD(d, f),
        m = typeof l == "function" ? l() : l;
    return p[H] = {
        type: t,
        blueprint: p,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: e,
        data: p.slice().fill(null, d),
        bindingStartIndex: d,
        expandoStartIndex: f,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof o == "function" ? o() : o,
        pipeRegistry: typeof s == "function" ? s() : s,
        firstChild: null,
        schemas: c,
        consts: m,
        incompleteFirstPass: !1,
        ssrId: u
    }
}

function hD(t, e) {
    let n = [];
    for (let r = 0; r < e; r++) n.push(r < t ? null : cn);
    return n
}

function gD(t, e, n, r) {
    let o = r.get(bC, mh) || n === Ft.ShadowDom,
        s = t.selectRootElement(e, o);
    return mD(s), s
}

function mD(t) {
    yD(t)
}
var yD = () => null;

function vD(t, e, n, r) {
    let i = Yh(e);
    i.push(n), t.firstCreatePass && Kh(t).push(r, i.length - 1)
}

function CD(t, e, n, r, i, o) {
    let s = e ? e.injectorIndex : -1,
        a = 0;
    return Up() && (a |= 128), {
        type: n,
        index: r,
        insertBeforeIndex: null,
        injectorIndex: s,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: i,
        attrs: o,
        mergedAttrs: null,
        localNames: null,
        initialInputs: void 0,
        inputs: null,
        outputs: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: e,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
    }
}

function Vf(t, e, n, r, i) {
    for (let o in e) {
        if (!e.hasOwnProperty(o)) continue;
        let s = e[o];
        if (s === void 0) continue;
        r ??= {};
        let a, c = Y.None;
        Array.isArray(s) ? (a = s[0], c = s[1]) : a = s;
        let l = o;
        if (i !== null) {
            if (!i.hasOwnProperty(o)) continue;
            l = i[o]
        }
        t === 0 ? jf(r, n, l, a, c) : jf(r, n, l, a)
    }
    return r
}

function jf(t, e, n, r, i) {
    let o;
    t.hasOwnProperty(n) ? (o = t[n]).push(e, r) : o = t[n] = [e, r], i !== void 0 && o.push(i)
}

function DD(t, e, n) {
    let r = e.directiveStart,
        i = e.directiveEnd,
        o = t.data,
        s = e.attrs,
        a = [],
        c = null,
        l = null;
    for (let u = r; u < i; u++) {
        let d = o[u],
            f = n ? n.get(d) : null,
            p = f ? f.inputs : null,
            m = f ? f.outputs : null;
        c = Vf(0, d.inputs, u, c, p), l = Vf(1, d.outputs, u, l, m);
        let E = c !== null && s !== null && !dl(e) ? kD(c, u, s) : null;
        a.push(E)
    }
    c !== null && (c.hasOwnProperty("class") && (e.flags |= 8), c.hasOwnProperty("style") && (e.flags |= 16)), e.initialInputs = a, e.inputs = c, e.outputs = l
}

function bD(t) {
    return t === "class" ? "className" : t === "for" ? "htmlFor" : t === "formaction" ? "formAction" : t === "innerHtml" ? "innerHTML" : t === "readonly" ? "readOnly" : t === "tabindex" ? "tabIndex" : t
}

function Hh(t, e, n, r, i, o, s, a) {
    let c = ft(e, n),
        l = e.inputs,
        u;
    !a && l != null && (u = l[r]) ? (Ul(t, n, u, r, i), ms(e) && wD(n, e.index)) : e.type & 3 ? (r = bD(r), i = s != null ? s(i, e.value || "", r) : i, o.setProperty(c, r, i)) : e.type & 12
}

function wD(t, e) {
    let n = Sn(e, t);
    n[O] & 16 || (n[O] |= 64)
}

function jl(t, e, n, r) {
    if (jp()) {
        let i = r === null ? null : {
                "": -1
            },
            o = SD(t, n),
            s, a;
        o === null ? s = a = null : [s, a] = o, s !== null && zh(t, e, n, s, i, a), i && xD(n, r, i)
    }
    n.mergedAttrs = ci(n.mergedAttrs, n.attrs)
}

function zh(t, e, n, r, i, o) {
    for (let l = 0; l < r.length; l++) Dc(Jo(n, e), t, r[l].type);
    AD(n, t.data.length, r.length);
    for (let l = 0; l < r.length; l++) {
        let u = r[l];
        u.providersResolver && u.providersResolver(u)
    }
    let s = !1,
        a = !1,
        c = Uh(t, e, r.length, null);
    for (let l = 0; l < r.length; l++) {
        let u = r[l];
        n.mergedAttrs = ci(n.mergedAttrs, u.hostAttrs), OD(t, n, e, c, u), TD(c, u, i), u.contentQueries !== null && (n.flags |= 4), (u.hostBindings !== null || u.hostAttrs !== null || u.hostVars !== 0) && (n.flags |= 64);
        let d = u.type.prototype;
        !s && (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) && ((t.preOrderHooks ??= []).push(n.index), s = !0), !a && (d.ngOnChanges || d.ngDoCheck) && ((t.preOrderCheckHooks ??= []).push(n.index), a = !0), c++
    }
    DD(t, n, o)
}

function ED(t, e, n, r, i) {
    let o = i.hostBindings;
    if (o) {
        let s = t.hostBindingOpCodes;
        s === null && (s = t.hostBindingOpCodes = []);
        let a = ~e.index;
        ID(s) != a && s.push(a), s.push(n, r, o)
    }
}

function ID(t) {
    let e = t.length;
    for (; e > 0;) {
        let n = t[--e];
        if (typeof n == "number" && n < 0) return n
    }
    return 0
}

function _D(t, e, n, r) {
    let i = n.directiveStart,
        o = n.directiveEnd;
    ms(n) && ND(e, n, t.data[i + n.componentOffset]), t.firstCreatePass || Jo(n, e), _n(r, e);
    let s = n.initialInputs;
    for (let a = i; a < o; a++) {
        let c = t.data[a],
            l = Zn(e, t, a, n);
        if (_n(l, e), s !== null && FD(e, a - i, l, c, n, s), In(c)) {
            let u = Sn(n.index, e);
            u[Et] = Zn(e, t, a, n)
        }
    }
}

function Wh(t, e, n) {
    let r = n.directiveStart,
        i = n.directiveEnd,
        o = n.index,
        s = z0();
    try {
        Kn(o);
        for (let a = r; a < i; a++) {
            let c = t.data[a],
                l = e[a];
            vc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && MD(c, l)
        }
    } finally {
        Kn(-1), vc(s)
    }
}

function MD(t, e) {
    t.hostBindings !== null && t.hostBindings(1, e)
}

function SD(t, e) {
    let n = t.directiveRegistry,
        r = null,
        i = null;
    if (n)
        for (let o = 0; o < n.length; o++) {
            let s = n[o];
            if (yp(e, s.selectors, !1))
                if (r || (r = []), In(s))
                    if (s.findHostDirectiveDefs !== null) {
                        let a = [];
                        i = i || new Map, s.findHostDirectiveDefs(s, a, i), r.unshift(...a, s);
                        let c = a.length;
                        Oc(t, e, c)
                    } else r.unshift(s), Oc(t, e, 0);
            else i = i || new Map, s.findHostDirectiveDefs?.(s, r, i), r.push(s)
        }
    return r === null ? null : [r, i]
}

function Oc(t, e, n) {
    e.componentOffset = n, (t.components ??= []).push(e.index)
}

function xD(t, e, n) {
    if (e) {
        let r = t.localNames = [];
        for (let i = 0; i < e.length; i += 2) {
            let o = n[e[i + 1]];
            if (o == null) throw new S(-301, !1);
            r.push(e[i], o)
        }
    }
}

function TD(t, e, n) {
    if (n) {
        if (e.exportAs)
            for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
        In(e) && (n[""] = t)
    }
}

function AD(t, e, n) {
    t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
}

function OD(t, e, n, r, i) {
    t.data[r] = i;
    let o = i.factory || (i.factory = Sr(i.type, !0)),
        s = new Qn(o, In(i), _);
    t.blueprint[r] = s, n[r] = s, ED(t, e, r, Uh(t, n, i.hostVars, cn), i)
}

function ND(t, e, n) {
    let r = ft(e, t),
        i = $h(n),
        o = t[It].rendererFactory,
        s = 16;
    n.signals ? s = 4096 : n.onPush && (s = 64);
    let a = xs(t, Ss(t, i, null, s, r, e, null, o.createRenderer(r, n), null, null, null));
    t[e.index] = a
}

function RD(t, e, n, r, i, o) {
    let s = ft(t, e);
    PD(e[me], s, o, t.value, n, r, i)
}

function PD(t, e, n, r, i, o, s) {
    if (o == null) t.removeAttribute(e, i, n);
    else {
        let a = s == null ? Di(o) : s(o, r || "", i);
        t.setAttribute(e, i, a, n)
    }
}

function FD(t, e, n, r, i, o) {
    let s = o[e];
    if (s !== null)
        for (let a = 0; a < s.length;) {
            let c = s[a++],
                l = s[a++],
                u = s[a++],
                d = s[a++];
            jh(r, n, c, l, u, d)
        }
}

function kD(t, e, n) {
    let r = null,
        i = 0;
    for (; i < n.length;) {
        let o = n[i];
        if (o === 0) {
            i += 4;
            continue
        } else if (o === 5) {
            i += 2;
            continue
        }
        if (typeof o == "number") break;
        if (t.hasOwnProperty(o)) {
            r === null && (r = []);
            let s = t[o];
            for (let a = 0; a < s.length; a += 3)
                if (s[a] === e) {
                    r.push(o, s[a + 1], s[a + 2], n[i + 1]);
                    break
                }
        }
        i += 2
    }
    return r
}

function Gh(t, e, n, r) {
    return [t, !0, 0, e, null, r, null, n, null, null]
}

function qh(t, e) {
    let n = t.contentQueries;
    if (n !== null) {
        let r = ee(null);
        try {
            for (let i = 0; i < n.length; i += 2) {
                let o = n[i],
                    s = n[i + 1];
                if (s !== -1) {
                    let a = t.data[s];
                    bl(o), a.contentQueries(2, e[s], s)
                }
            }
        } finally {
            ee(r)
        }
    }
}

function xs(t, e) {
    return t[fi] ? t[Ef][wt] = e : t[fi] = e, t[Ef] = e, e
}

function Nc(t, e, n) {
    bl(0);
    let r = ee(null);
    try {
        e(t, n)
    } finally {
        ee(r)
    }
}

function Yh(t) {
    return t[di] || (t[di] = [])
}

function Kh(t) {
    return t.cleanup || (t.cleanup = [])
}

function Qh(t, e) {
    let n = t[Or],
        r = n ? n.get(en, null) : null;
    r && r.handleError(e)
}

function Ul(t, e, n, r, i) {
    for (let o = 0; o < n.length;) {
        let s = n[o++],
            a = n[o++],
            c = n[o++],
            l = e[s],
            u = t.data[s];
        jh(u, l, r, a, c, i)
    }
}

function LD(t, e, n) {
    let r = Fp(e, t);
    qC(t[me], r, n)
}

function VD(t, e) {
    let n = Sn(e, t),
        r = n[H];
    jD(r, n);
    let i = n[on];
    i !== null && n[ui] === null && (n[ui] = Tl(i, n[Or])), Bl(r, n, n[Et])
}

function jD(t, e) {
    for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
}

function Bl(t, e, n) {
    wl(e);
    try {
        let r = t.viewQuery;
        r !== null && Nc(1, r, n);
        let i = t.template;
        i !== null && Bh(t, e, i, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), e[Xt]?.finishViewCreation(t), t.staticContentQueries && qh(t, e), t.staticViewQueries && Nc(2, t.viewQuery, n);
        let o = t.components;
        o !== null && UD(e, o)
    } catch (r) {
        throw t.firstCreatePass && (t.incompleteFirstPass = !0, t.firstCreatePass = !1), r
    } finally {
        e[O] &= -5, El()
    }
}

function UD(t, e) {
    for (let n = 0; n < e.length; n++) VD(t, e[n])
}

function BD(t, e, n, r) {
    let i = ee(null);
    try {
        let o = e.tView,
            a = t[O] & 4096 ? 4096 : 16,
            c = Ss(t, o, n, a, null, e, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null),
            l = t[e.index];
        c[wi] = l;
        let u = t[Xt];
        return u !== null && (c[Xt] = u.createEmbeddedView(o)), Bl(o, c, n), c
    } finally {
        ee(i)
    }
}

function Uf(t, e) {
    return !e || e.firstChild === null || lh(t)
}

function $D(t, e, n, r = !0) {
    let i = e[H];
    if (JC(i, e, t, n), r) {
        let s = Ac(n, t),
            a = e[me],
            c = Rl(a, t[Yn]);
        c !== null && QC(i, t[ot], a, e, c, s)
    }
    let o = e[ui];
    o !== null && o.firstChild !== null && (o.firstChild = null)
}

function ts(t, e, n, r, i = !1) {
    for (; n !== null;) {
        let o = e[n.index];
        o !== null && r.push(kt(o)), sn(o) && HD(o, r);
        let s = n.type;
        if (s & 8) ts(t, e, n.child, r);
        else if (s & 32) {
            let a = Nl(n, e),
                c;
            for (; c = a();) r.push(c)
        } else if (s & 16) {
            let a = Ph(e, n);
            if (Array.isArray(a)) r.push(...a);
            else {
                let c = hi(e[_t]);
                ts(c[H], c, a, r, !0)
            }
        }
        n = i ? n.projectionNext : n.next
    }
    return r
}

function HD(t, e) {
    for (let n = it; n < t.length; n++) {
        let r = t[n],
            i = r[H].firstChild;
        i !== null && ts(r[H], r, i, e)
    }
    t[Yn] !== t[on] && e.push(t[Yn])
}
var Zh = [];

function zD(t) {
    return t[qn] ?? WD(t)
}

function WD(t) {
    let e = Zh.pop() ?? Object.create(qD);
    return e.lView = t, e
}

function GD(t) {
    t.lView[qn] !== t && (t.lView = null, Zh.push(t))
}
var qD = re(b({}, Sa), {
        consumerIsAlwaysLive: !0,
        consumerMarkedDirty: t => {
            pi(t.lView)
        },
        consumerOnSignalRead() {
            this.lView[qn] = this
        }
    }),
    Jh = 100;

function Xh(t, e = !0, n = 0) {
    let r = t[It],
        i = r.rendererFactory,
        o = !1;
    o || i.begin?.();
    try {
        YD(t, n)
    } catch (s) {
        throw e && Qh(t, s), s
    } finally {
        o || (i.end?.(), r.inlineEffectRunner?.flush())
    }
}

function YD(t, e) {
    Rc(t, e);
    let n = 0;
    for (; yl(t);) {
        if (n === Jh) throw new S(103, !1);
        n++, Rc(t, 1)
    }
}

function KD(t, e, n, r) {
    let i = e[O];
    if ((i & 256) === 256) return;
    let o = !1;
    !o && e[It].inlineEffectRunner?.flush(), wl(e);
    let s = null,
        a = null;
    !o && QD(t) && (a = zD(e), s = Nd(a));
    try {
        Lp(e), B0(t.bindingStartIndex), n !== null && Bh(t, e, n, 2, r);
        let c = (i & 3) === 3;
        if (!o)
            if (c) {
                let d = t.preOrderCheckHooks;
                d !== null && Uo(e, d, null)
            } else {
                let d = t.preOrderHooks;
                d !== null && Bo(e, d, 0, null), Qa(e, 0)
            } if (ZD(e), eg(e, 0), t.contentQueries !== null && qh(t, e), !o)
            if (c) {
                let d = t.contentCheckHooks;
                d !== null && Uo(e, d)
            } else {
                let d = t.contentHooks;
                d !== null && Bo(e, d, 1), Qa(e, 1)
            } fD(t, e);
        let l = t.components;
        l !== null && ng(e, l, 0);
        let u = t.viewQuery;
        if (u !== null && Nc(2, u, r), !o)
            if (c) {
                let d = t.viewCheckHooks;
                d !== null && Uo(e, d)
            } else {
                let d = t.viewHooks;
                d !== null && Bo(e, d, 2), Qa(e, 2)
            } if (t.firstUpdatePass === !0 && (t.firstUpdatePass = !1), e[Ka]) {
            for (let d of e[Ka]) d();
            e[Ka] = null
        }
        o || (e[O] &= -73)
    } catch (c) {
        throw pi(e), c
    } finally {
        a !== null && (Rd(a, s), GD(a)), El()
    }
}

function QD(t) {
    return t.type !== 2
}

function eg(t, e) {
    for (let n = dh(t); n !== null; n = fh(n))
        for (let r = it; r < n.length; r++) {
            let i = n[r];
            tg(i, e)
        }
}

function ZD(t) {
    for (let e = dh(t); e !== null; e = fh(e)) {
        if (!(e[O] & hl.HasTransplantedViews)) continue;
        let n = e[Nr];
        for (let r = 0; r < n.length; r++) {
            let i = n[r],
                o = i[Le];
            O0(i)
        }
    }
}

function JD(t, e, n) {
    let r = Sn(e, t);
    tg(r, n)
}

function tg(t, e) {
    ml(t) && Rc(t, e)
}

function Rc(t, e) {
    let r = t[H],
        i = t[O],
        o = t[qn],
        s = !!(e === 0 && i & 16);
    if (s ||= !!(i & 64 && e === 0), s ||= !!(i & 1024), s ||= !!(o?.dirty && xa(o)), o && (o.dirty = !1), t[O] &= -9217, s) KD(r, t, r.template, t[Et]);
    else if (i & 8192) {
        eg(t, 1);
        let a = r.components;
        a !== null && ng(t, a, 1)
    }
}

function ng(t, e, n) {
    for (let r = 0; r < e.length; r++) JD(t, e[r], n)
}

function $l(t) {
    for (t[It].changeDetectionScheduler?.notify(); t;) {
        t[O] |= 64;
        let e = hi(t);
        if (b0(t) && !e) return t;
        t = e
    }
    return null
}
var Jn = class {
        get rootNodes() {
            let e = this._lView,
                n = e[H];
            return ts(n, e, n.firstChild, [])
        }
        constructor(e, n, r = !0) {
            this._lView = e, this._cdRefInjectingView = n, this.notifyErrorHandler = r, this._appRef = null, this._attachedToViewContainer = !1
        }
        get context() {
            return this._lView[Et]
        }
        set context(e) {
            this._lView[Et] = e
        }
        get destroyed() {
            return (this._lView[O] & 256) === 256
        }
        destroy() {
            if (this._appRef) this._appRef.detachView(this);
            else if (this._attachedToViewContainer) {
                let e = this._lView[Le];
                if (sn(e)) {
                    let n = e[Ko],
                        r = n ? n.indexOf(this) : -1;
                    r > -1 && (Tc(e, r), qo(n, r))
                }
                this._attachedToViewContainer = !1
            }
            Ah(this._lView[H], this._lView)
        }
        onDestroy(e) {
            Vp(this._lView, e)
        }
        markForCheck() {
            $l(this._cdRefInjectingView || this._lView)
        }
        detach() {
            this._lView[O] &= -129
        }
        reattach() {
            yc(this._lView), this._lView[O] |= 128
        }
        detectChanges() {
            this._lView[O] |= 1024, Xh(this._lView, this.notifyErrorHandler)
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
            if (this._appRef) throw new S(902, !1);
            this._attachedToViewContainer = !0
        }
        detachFromAppRef() {
            this._appRef = null, xh(this._lView[H], this._lView)
        }
        attachToAppRef(e) {
            if (this._attachedToViewContainer) throw new S(902, !1);
            this._appRef = e, yc(this._lView)
        }
    },
    tn = (() => {
        let e = class e {};
        e.__NG_ELEMENT_ID__ = tb;
        let t = e;
        return t
    })(),
    XD = tn,
    eb = class extends XD {
        constructor(e, n, r) {
            super(), this._declarationLView = e, this._declarationTContainer = n, this.elementRef = r
        }
        get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null
        }
        createEmbeddedView(e, n) {
            return this.createEmbeddedViewImpl(e, n)
        }
        createEmbeddedViewImpl(e, n, r) {
            let i = BD(this._declarationLView, this._declarationTContainer, e, {
                embeddedViewInjector: n,
                dehydratedView: r
            });
            return new Jn(i)
        }
    };

function tb() {
    return Hl(Ge(), Q())
}

function Hl(t, e) {
    return t.type & 4 ? new eb(e, t, Vr(t, e)) : null
}
var jN = new RegExp(`^(\\d+)*(${CC}|${vC})*(.*)`);
var nb = () => null;

function Bf(t, e) {
    return nb(t, e)
}
var Pc = class {},
    Fc = class {},
    ns = class {};

function rb(t) {
    let e = Error(`No component factory found for ${We(t)}.`);
    return e[ib] = t, e
}
var ib = "ngComponent";
var kc = class {
        resolveComponentFactory(e) {
            throw rb(e)
        }
    },
    Ts = (() => {
        let e = class e {};
        e.NULL = new kc;
        let t = e;
        return t
    })(),
    gi = class {},
    Je = (() => {
        let e = class e {
            constructor() {
                this.destroyNode = null
            }
        };
        e.__NG_ELEMENT_ID__ = () => ob();
        let t = e;
        return t
    })();

function ob() {
    let t = Q(),
        e = Ge(),
        n = Sn(e.index, t);
    return (zn(n) ? n : t)[me]
}
var sb = (() => {
        let e = class e {};
        e.\u0275prov = x({
            token: e,
            providedIn: "root",
            factory: () => null
        });
        let t = e;
        return t
    })(),
    tc = {};
var $f = new Set;

function As(t) {
    $f.has(t) || ($f.add(t), performance?.mark?.("mark_feature_usage", {
        detail: {
            feature: t
        }
    }))
}

function Hf(...t) {}

function ab() {
    let t = typeof Jt.requestAnimationFrame == "function",
        e = Jt[t ? "requestAnimationFrame" : "setTimeout"],
        n = Jt[t ? "cancelAnimationFrame" : "clearTimeout"];
    if (typeof Zone < "u" && e && n) {
        let r = e[Zone.__symbol__("OriginalDelegate")];
        r && (e = r);
        let i = n[Zone.__symbol__("OriginalDelegate")];
        i && (n = i)
    }
    return {
        nativeRequestAnimationFrame: e,
        nativeCancelAnimationFrame: n
    }
}
var ue = class t {
        constructor({
            enableLongStackTrace: e = !1,
            shouldCoalesceEventChangeDetection: n = !1,
            shouldCoalesceRunChangeDetection: r = !1
        }) {
            if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ge(!1), this.onMicrotaskEmpty = new ge(!1), this.onStable = new ge(!1), this.onError = new ge(!1), typeof Zone > "u") throw new S(908, !1);
            Zone.assertZonePatched();
            let i = this;
            i._nesting = 0, i._outer = i._inner = Zone.current, Zone.TaskTrackingZoneSpec && (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec)), e && Zone.longStackTraceZoneSpec && (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)), i.shouldCoalesceEventChangeDetection = !r && n, i.shouldCoalesceRunChangeDetection = r, i.lastRequestAnimationFrameId = -1, i.nativeRequestAnimationFrame = ab().nativeRequestAnimationFrame, ub(i)
        }
        static isInAngularZone() {
            return typeof Zone < "u" && Zone.current.get("isAngularZone") === !0
        }
        static assertInAngularZone() {
            if (!t.isInAngularZone()) throw new S(909, !1)
        }
        static assertNotInAngularZone() {
            if (t.isInAngularZone()) throw new S(909, !1)
        }
        run(e, n, r) {
            return this._inner.run(e, n, r)
        }
        runTask(e, n, r, i) {
            let o = this._inner,
                s = o.scheduleEventTask("NgZoneEvent: " + i, e, cb, Hf, Hf);
            try {
                return o.runTask(s, n, r)
            } finally {
                o.cancelTask(s)
            }
        }
        runGuarded(e, n, r) {
            return this._inner.runGuarded(e, n, r)
        }
        runOutsideAngular(e) {
            return this._outer.run(e)
        }
    },
    cb = {};

function zl(t) {
    if (t._nesting == 0 && !t.hasPendingMicrotasks && !t.isStable) try {
        t._nesting++, t.onMicrotaskEmpty.emit(null)
    } finally {
        if (t._nesting--, !t.hasPendingMicrotasks) try {
            t.runOutsideAngular(() => t.onStable.emit(null))
        } finally {
            t.isStable = !0
        }
    }
}

function lb(t) {
    t.isCheckStableRunning || t.lastRequestAnimationFrameId !== -1 || (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(Jt, () => {
        t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
            t.lastRequestAnimationFrameId = -1, Lc(t), t.isCheckStableRunning = !0, zl(t), t.isCheckStableRunning = !1
        }, void 0, () => {}, () => {})), t.fakeTopEventTask.invoke()
    }), Lc(t))
}

function ub(t) {
    let e = () => {
        lb(t)
    };
    t._inner = t._inner.fork({
        name: "angular",
        properties: {
            isAngularZone: !0
        },
        onInvokeTask: (n, r, i, o, s, a) => {
            if (db(a)) return n.invokeTask(i, o, s, a);
            try {
                return zf(t), n.invokeTask(i, o, s, a)
            } finally {
                (t.shouldCoalesceEventChangeDetection && o.type === "eventTask" || t.shouldCoalesceRunChangeDetection) && e(), Wf(t)
            }
        },
        onInvoke: (n, r, i, o, s, a, c) => {
            try {
                return zf(t), n.invoke(i, o, s, a, c)
            } finally {
                t.shouldCoalesceRunChangeDetection && e(), Wf(t)
            }
        },
        onHasTask: (n, r, i, o) => {
            n.hasTask(i, o), r === i && (o.change == "microTask" ? (t._hasPendingMicrotasks = o.microTask, Lc(t), zl(t)) : o.change == "macroTask" && (t.hasPendingMacrotasks = o.macroTask))
        },
        onHandleError: (n, r, i, o) => (n.handleError(i, o), t.runOutsideAngular(() => t.onError.emit(o)), !1)
    })
}

function Lc(t) {
    t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && t.lastRequestAnimationFrameId !== -1 ? t.hasPendingMicrotasks = !0 : t.hasPendingMicrotasks = !1
}

function zf(t) {
    t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
}

function Wf(t) {
    t._nesting--, zl(t)
}

function db(t) {
    return !Array.isArray(t) || t.length !== 1 ? !1 : t[0].data?.__ignore_ng_zone__ === !0
}
var rg = (() => {
    let e = class e {
        constructor() {
            this.handler = null, this.internalCallbacks = []
        }
        execute() {
            this.executeInternalCallbacks(), this.handler?.execute()
        }
        executeInternalCallbacks() {
            let r = [...this.internalCallbacks];
            this.internalCallbacks.length = 0;
            for (let i of r) i()
        }
        ngOnDestroy() {
            this.handler?.destroy(), this.handler = null, this.internalCallbacks.length = 0
        }
    };
    e.\u0275prov = x({
        token: e,
        providedIn: "root",
        factory: () => new e
    });
    let t = e;
    return t
})();

function rs(t, e, n) {
    let r = n ? t.styles : null,
        i = n ? t.classes : null,
        o = 0;
    if (e !== null)
        for (let s = 0; s < e.length; s++) {
            let a = e[s];
            if (typeof a == "number") o = a;
            else if (o == 1) i = cc(i, a);
            else if (o == 2) {
                let c = a,
                    l = e[++s];
                r = cc(r, c + ": " + l + ";")
            }
        }
    n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = i : t.classesWithoutHost = i
}
var is = class extends Ts {
    constructor(e) {
        super(), this.ngModule = e
    }
    resolveComponentFactory(e) {
        let n = Gn(e);
        return new mi(n, this.ngModule)
    }
};

function Gf(t) {
    let e = [];
    for (let n in t) {
        if (!t.hasOwnProperty(n)) continue;
        let r = t[n];
        r !== void 0 && e.push({
            propName: Array.isArray(r) ? r[0] : r,
            templateName: n
        })
    }
    return e
}

function fb(t) {
    let e = t.toLowerCase();
    return e === "svg" ? Pp : e === "math" ? _0 : null
}
var Vc = class {
        constructor(e, n) {
            this.injector = e, this.parentInjector = n
        }
        get(e, n, r) {
            r = fs(r);
            let i = this.injector.get(e, tc, r);
            return i !== tc || n === tc ? i : this.parentInjector.get(e, n, r)
        }
    },
    mi = class extends ns {
        get inputs() {
            let e = this.componentDef,
                n = e.inputTransforms,
                r = Gf(e.inputs);
            if (n !== null)
                for (let i of r) n.hasOwnProperty(i.propName) && (i.transform = n[i.propName]);
            return r
        }
        get outputs() {
            return Gf(this.componentDef.outputs)
        }
        constructor(e, n) {
            super(), this.componentDef = e, this.ngModule = n, this.componentType = e.type, this.selector = r0(e.selectors), this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], this.isBoundToModule = !!n
        }
        create(e, n, r, i) {
            let o = ee(null);
            try {
                i = i || this.ngModule;
                let s = i instanceof Qe ? i : i?.injector;
                s && this.componentDef.getStandaloneInjector !== null && (s = this.componentDef.getStandaloneInjector(s) || s);
                let a = s ? new Vc(e, s) : e,
                    c = a.get(gi, null);
                if (c === null) throw new S(407, !1);
                let l = a.get(sb, null),
                    u = a.get(rg, null),
                    d = a.get(Pc, null),
                    f = {
                        rendererFactory: c,
                        sanitizer: l,
                        inlineEffectRunner: null,
                        afterRenderEventManager: u,
                        changeDetectionScheduler: d
                    },
                    p = c.createRenderer(null, this.componentDef),
                    m = this.componentDef.selectors[0][0] || "div",
                    E = r ? gD(p, r, this.componentDef.encapsulation, a) : Sh(p, m, fb(m)),
                    M = 512;
                this.componentDef.signals ? M |= 4096 : this.componentDef.onPush || (M |= 16);
                let I = null;
                E !== null && (I = Tl(E, a, !0));
                let ae = Vl(0, null, null, 1, 0, null, null, null, null, null, null),
                    de = Ss(null, ae, null, M, null, null, f, p, a, null, I);
                wl(de);
                let W, Re;
                try {
                    let q = this.componentDef,
                        De, lt = null;
                    q.findHostDirectiveDefs ? (De = [], lt = new Map, q.findHostDirectiveDefs(q, De, lt), De.push(q)) : De = [q];
                    let T = pb(de, E),
                        w = hb(T, E, q, De, de, f, p);
                    Re = kp(ae, Mt), E && yb(p, q, E, r), n !== void 0 && vb(Re, this.ngContentSelectors, n), W = mb(w, q, De, lt, de, [Cb]), Bl(ae, de, null)
                } finally {
                    El()
                }
                return new jc(this.componentType, W, Vr(Re, de), de, Re)
            } finally {
                ee(o)
            }
        }
    },
    jc = class extends Fc {
        constructor(e, n, r, i, o) {
            super(), this.location = r, this._rootLView = i, this._tNode = o, this.previousInputValues = null, this.instance = n, this.hostView = this.changeDetectorRef = new Jn(i, void 0, !1), this.componentType = e
        }
        setInput(e, n) {
            let r = this._tNode.inputs,
                i;
            if (r !== null && (i = r[e])) {
                if (this.previousInputValues ??= new Map, this.previousInputValues.has(e) && Object.is(this.previousInputValues.get(e), n)) return;
                let o = this._rootLView;
                Ul(o[H], o, i, e, n), this.previousInputValues.set(e, n);
                let s = Sn(this._tNode.index, o);
                $l(s)
            }
        }
        get injector() {
            return new Wn(this._tNode, this._rootLView)
        }
        destroy() {
            this.hostView.destroy()
        }
        onDestroy(e) {
            this.hostView.onDestroy(e)
        }
    };

function pb(t, e) {
    let n = t[H],
        r = Mt;
    return t[r] = e, Ur(n, r, 2, "#host", null)
}

function hb(t, e, n, r, i, o, s) {
    let a = i[H];
    gb(r, t, e, s);
    let c = null;
    e !== null && (c = Tl(e, i[Or]));
    let l = o.rendererFactory.createRenderer(e, n),
        u = 16;
    n.signals ? u = 4096 : n.onPush && (u = 64);
    let d = Ss(i, $h(n), null, u, i[t.index], t, o, l, null, null, c);
    return a.firstCreatePass && Oc(a, t, r.length - 1), xs(i, d), i[t.index] = d
}

function gb(t, e, n, r) {
    for (let i of t) e.mergedAttrs = ci(e.mergedAttrs, i.hostAttrs);
    e.mergedAttrs !== null && (rs(e, e.mergedAttrs, !0), n !== null && Lh(r, n, e))
}

function mb(t, e, n, r, i, o) {
    let s = Ge(),
        a = i[H],
        c = ft(s, i);
    zh(a, i, s, n, null, r);
    for (let u = 0; u < n.length; u++) {
        let d = s.directiveStart + u,
            f = Zn(i, a, d, s);
        _n(f, i)
    }
    Wh(a, i, s), c && _n(c, i);
    let l = Zn(i, a, s.directiveStart + s.componentOffset, s);
    if (t[Et] = i[Et] = l, o !== null)
        for (let u of o) u(l, e);
    return Fl(a, s, i), l
}

function yb(t, e, n, r) {
    if (r) fc(t, n, ["ng-version", "17.3.12"]);
    else {
        let {
            attrs: i,
            classes: o
        } = i0(e.selectors[0]);
        i && fc(t, n, i), o && o.length > 0 && kh(t, n, o.join(" "))
    }
}

function vb(t, e, n) {
    let r = t.projection = [];
    for (let i = 0; i < e.length; i++) {
        let o = n[i];
        r.push(o != null ? Array.from(o) : null)
    }
}

function Cb() {
    let t = Ge();
    bs(Q()[H], t)
}
var ln = (() => {
    let e = class e {};
    e.__NG_ELEMENT_ID__ = Db;
    let t = e;
    return t
})();

function Db() {
    let t = Ge();
    return og(t, Q())
}
var bb = ln,
    ig = class extends bb {
        constructor(e, n, r) {
            super(), this._lContainer = e, this._hostTNode = n, this._hostLView = r
        }
        get element() {
            return Vr(this._hostTNode, this._hostLView)
        }
        get injector() {
            return new Wn(this._hostTNode, this._hostLView)
        }
        get parentInjector() {
            let e = _l(this._hostTNode, this._hostLView);
            if (Zp(e)) {
                let n = Zo(e, this._hostLView),
                    r = Qo(e),
                    i = n[H].data[r + 8];
                return new Wn(i, n)
            } else return new Wn(null, this._hostLView)
        }
        clear() {
            for (; this.length > 0;) this.remove(this.length - 1)
        }
        get(e) {
            let n = qf(this._lContainer);
            return n !== null && n[e] || null
        }
        get length() {
            return this._lContainer.length - it
        }
        createEmbeddedView(e, n, r) {
            let i, o;
            typeof r == "number" ? i = r : r != null && (i = r.index, o = r.injector);
            let s = Bf(this._lContainer, e.ssrId),
                a = e.createEmbeddedViewImpl(n || {}, o, s);
            return this.insertImpl(a, i, Uf(this._hostTNode, s)), a
        }
        createComponent(e, n, r, i, o) {
            let s = e && !D0(e),
                a;
            if (s) a = n;
            else {
                let m = n || {};
                a = m.index, r = m.injector, i = m.projectableNodes, o = m.environmentInjector || m.ngModuleRef
            }
            let c = s ? e : new mi(Gn(e)),
                l = r || this.parentInjector;
            if (!o && c.ngModule == null) {
                let E = (s ? l : this.parentInjector).get(Qe, null);
                E && (o = E)
            }
            let u = Gn(c.componentType ?? {}),
                d = Bf(this._lContainer, u?.id ?? null),
                f = d?.firstChild ?? null,
                p = c.create(l, i, f, o);
            return this.insertImpl(p.hostView, a, Uf(this._hostTNode, d)), p
        }
        insert(e, n) {
            return this.insertImpl(e, n, !0)
        }
        insertImpl(e, n, r) {
            let i = e._lView;
            if (A0(i)) {
                let a = this.indexOf(e);
                if (a !== -1) this.detach(a);
                else {
                    let c = i[Le],
                        l = new ig(c, c[ot], c[Le]);
                    l.detach(l.indexOf(e))
                }
            }
            let o = this._adjustIndex(n),
                s = this._lContainer;
            return $D(s, i, o, r), e.attachToViewContainerRef(), fp(nc(s), o, e), e
        }
        move(e, n) {
            return this.insert(e, n)
        }
        indexOf(e) {
            let n = qf(this._lContainer);
            return n !== null ? n.indexOf(e) : -1
        }
        remove(e) {
            let n = this._adjustIndex(e, -1),
                r = Tc(this._lContainer, n);
            r && (qo(nc(this._lContainer), n), Ah(r[H], r))
        }
        detach(e) {
            let n = this._adjustIndex(e, -1),
                r = Tc(this._lContainer, n);
            return r && qo(nc(this._lContainer), n) != null ? new Jn(r) : null
        }
        _adjustIndex(e, n = 0) {
            return e ?? this.length + n
        }
    };

function qf(t) {
    return t[Ko]
}

function nc(t) {
    return t[Ko] || (t[Ko] = [])
}

function og(t, e) {
    let n, r = e[t.index];
    return sn(r) ? n = r : (n = Gh(r, e, null, t), e[t.index] = n, xs(e, n)), Eb(n, e, t, r), new ig(n, t, e)
}

function wb(t, e) {
    let n = t[me],
        r = n.createComment(""),
        i = ft(e, t),
        o = Rl(n, i);
    return es(n, o, r, iD(n, i), !1), r
}
var Eb = Mb,
    Ib = () => !1;

function _b(t, e, n) {
    return Ib(t, e, n)
}

function Mb(t, e, n, r) {
    if (t[Yn]) return;
    let i;
    n.type & 8 ? i = kt(r) : i = wb(e, n), t[Yn] = i
}
var Uc = class t {
        constructor(e) {
            this.queryList = e, this.matches = null
        }
        clone() {
            return new t(this.queryList)
        }
        setDirty() {
            this.queryList.setDirty()
        }
    },
    Bc = class t {
        constructor(e = []) {
            this.queries = e
        }
        createEmbeddedView(e) {
            let n = e.queries;
            if (n !== null) {
                let r = e.contentQueries !== null ? e.contentQueries[0] : n.length,
                    i = [];
                for (let o = 0; o < r; o++) {
                    let s = n.getByIndex(o),
                        a = this.queries[s.indexInDeclarationView];
                    i.push(a.clone())
                }
                return new t(i)
            }
            return null
        }
        insertView(e) {
            this.dirtyQueriesWithMatches(e)
        }
        detachView(e) {
            this.dirtyQueriesWithMatches(e)
        }
        finishViewCreation(e) {
            this.dirtyQueriesWithMatches(e)
        }
        dirtyQueriesWithMatches(e) {
            for (let n = 0; n < this.queries.length; n++) Wl(e, n).matches !== null && this.queries[n].setDirty()
        }
    },
    os = class {
        constructor(e, n, r = null) {
            this.flags = n, this.read = r, typeof e == "string" ? this.predicate = Pb(e) : this.predicate = e
        }
    },
    $c = class t {
        constructor(e = []) {
            this.queries = e
        }
        elementStart(e, n) {
            for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(e, n)
        }
        elementEnd(e) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(e)
        }
        embeddedTView(e) {
            let n = null;
            for (let r = 0; r < this.length; r++) {
                let i = n !== null ? n.length : 0,
                    o = this.getByIndex(r).embeddedTView(e, i);
                o && (o.indexInDeclarationView = r, n !== null ? n.push(o) : n = [o])
            }
            return n !== null ? new t(n) : null
        }
        template(e, n) {
            for (let r = 0; r < this.queries.length; r++) this.queries[r].template(e, n)
        }
        getByIndex(e) {
            return this.queries[e]
        }
        get length() {
            return this.queries.length
        }
        track(e) {
            this.queries.push(e)
        }
    },
    Hc = class t {
        constructor(e, n = -1) {
            this.metadata = e, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
        }
        elementStart(e, n) {
            this.isApplyingToNode(n) && this.matchTNode(e, n)
        }
        elementEnd(e) {
            this._declarationNodeIndex === e.index && (this._appliesToNextNode = !1)
        }
        template(e, n) {
            this.elementStart(e, n)
        }
        embeddedTView(e, n) {
            return this.isApplyingToNode(e) ? (this.crossesNgTemplate = !0, this.addMatch(-e.index, n), new t(this.metadata)) : null
        }
        isApplyingToNode(e) {
            if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
                let n = this._declarationNodeIndex,
                    r = e.parent;
                for (; r !== null && r.type & 8 && r.index !== n;) r = r.parent;
                return n === (r !== null ? r.index : -1)
            }
            return this._appliesToNextNode
        }
        matchTNode(e, n) {
            let r = this.metadata.predicate;
            if (Array.isArray(r))
                for (let i = 0; i < r.length; i++) {
                    let o = r[i];
                    this.matchTNodeWithReadOption(e, n, Sb(n, o)), this.matchTNodeWithReadOption(e, n, $o(n, e, o, !1, !1))
                } else r === tn ? n.type & 4 && this.matchTNodeWithReadOption(e, n, -1) : this.matchTNodeWithReadOption(e, n, $o(n, e, r, !1, !1))
        }
        matchTNodeWithReadOption(e, n, r) {
            if (r !== null) {
                let i = this.metadata.read;
                if (i !== null)
                    if (i === _e || i === ln || i === tn && n.type & 4) this.addMatch(n.index, -2);
                    else {
                        let o = $o(n, e, i, !1, !1);
                        o !== null && this.addMatch(n.index, o)
                    }
                else this.addMatch(n.index, r)
            }
        }
        addMatch(e, n) {
            this.matches === null ? this.matches = [e, n] : this.matches.push(e, n)
        }
    };

function Sb(t, e) {
    let n = t.localNames;
    if (n !== null) {
        for (let r = 0; r < n.length; r += 2)
            if (n[r] === e) return n[r + 1]
    }
    return null
}

function xb(t, e) {
    return t.type & 11 ? Vr(t, e) : t.type & 4 ? Hl(t, e) : null
}

function Tb(t, e, n, r) {
    return n === -1 ? xb(e, t) : n === -2 ? Ab(t, e, r) : Zn(t, t[H], n, e)
}

function Ab(t, e, n) {
    if (n === _e) return Vr(e, t);
    if (n === tn) return Hl(e, t);
    if (n === ln) return og(e, t)
}

function sg(t, e, n, r) {
    let i = e[Xt].queries[r];
    if (i.matches === null) {
        let o = t.data,
            s = n.matches,
            a = [];
        for (let c = 0; s !== null && c < s.length; c += 2) {
            let l = s[c];
            if (l < 0) a.push(null);
            else {
                let u = o[l];
                a.push(Tb(e, u, s[c + 1], n.metadata.read))
            }
        }
        i.matches = a
    }
    return i.matches
}

function zc(t, e, n, r) {
    let i = t.queries.getByIndex(n),
        o = i.matches;
    if (o !== null) {
        let s = sg(t, e, i, n);
        for (let a = 0; a < o.length; a += 2) {
            let c = o[a];
            if (c > 0) r.push(s[a / 2]);
            else {
                let l = o[a + 1],
                    u = e[-c];
                for (let d = it; d < u.length; d++) {
                    let f = u[d];
                    f[wi] === f[Le] && zc(f[H], f, l, r)
                }
                if (u[Nr] !== null) {
                    let d = u[Nr];
                    for (let f = 0; f < d.length; f++) {
                        let p = d[f];
                        zc(p[H], p, l, r)
                    }
                }
            }
        }
    }
    return r
}

function Ob(t, e) {
    return t[Xt].queries[e].queryList
}

function ag(t, e, n) {
    let r = new Ic((n & 4) === 4);
    return vD(t, e, r, r.destroy), (e[Xt] ??= new Bc).queries.push(new Uc(r)) - 1
}

function Nb(t, e, n) {
    let r = Ie();
    return r.firstCreatePass && (cg(r, new os(t, e, n), -1), (e & 2) === 2 && (r.staticViewQueries = !0)), ag(r, Q(), e)
}

function Rb(t, e, n, r) {
    let i = Ie();
    if (i.firstCreatePass) {
        let o = Ge();
        cg(i, new os(e, n, r), o.index), Fb(i, t), (n & 2) === 2 && (i.staticContentQueries = !0)
    }
    return ag(i, Q(), n)
}

function Pb(t) {
    return t.split(",").map(e => e.trim())
}

function cg(t, e, n) {
    t.queries === null && (t.queries = new $c), t.queries.track(new Hc(e, n))
}

function Fb(t, e) {
    let n = t.contentQueries || (t.contentQueries = []),
        r = n.length ? n[n.length - 1] : -1;
    e !== r && n.push(t.queries.length - 1, e)
}

function Wl(t, e) {
    return t.queries.getByIndex(e)
}

function kb(t, e) {
    let n = t[H],
        r = Wl(n, e);
    return r.crossesNgTemplate ? zc(n, t, e, []) : sg(n, t, r, e)
}

function Lb(t) {
    return typeof t == "function" && t[Un] !== void 0
}

function Gl(t, e) {
    As("NgSignals");
    let n = Ud(t),
        r = n[Un];
    return e?.equal && (r.equal = e.equal), n.set = i => Ta(r, i), n.update = i => Bd(r, i), n.asReadonly = Vb.bind(n), n
}

function Vb() {
    let t = this[Un];
    if (t.readonlyFn === void 0) {
        let e = () => this();
        e[Un] = t, t.readonlyFn = e
    }
    return t.readonlyFn
}

function lg(t) {
    return Lb(t) && typeof t.set == "function"
}

function jb(t) {
    return Object.getPrototypeOf(t.prototype).constructor
}

function ye(t) {
    let e = jb(t.type),
        n = !0,
        r = [t];
    for (; e;) {
        let i;
        if (In(t)) i = e.\u0275cmp || e.\u0275dir;
        else {
            if (e.\u0275cmp) throw new S(903, !1);
            i = e.\u0275dir
        }
        if (i) {
            if (n) {
                r.push(i);
                let s = t;
                s.inputs = Lo(t.inputs), s.inputTransforms = Lo(t.inputTransforms), s.declaredInputs = Lo(t.declaredInputs), s.outputs = Lo(t.outputs);
                let a = i.hostBindings;
                a && zb(t, a);
                let c = i.viewQuery,
                    l = i.contentQueries;
                if (c && $b(t, c), l && Hb(t, l), Ub(t, i), bv(t.outputs, i.outputs), In(i) && i.data.animation) {
                    let u = t.data;
                    u.animation = (u.animation || []).concat(i.data.animation)
                }
            }
            let o = i.features;
            if (o)
                for (let s = 0; s < o.length; s++) {
                    let a = o[s];
                    a && a.ngInherit && a(t), a === ye && (n = !1)
                }
        }
        e = Object.getPrototypeOf(e)
    }
    Bb(r)
}

function Ub(t, e) {
    for (let n in e.inputs) {
        if (!e.inputs.hasOwnProperty(n) || t.inputs.hasOwnProperty(n)) continue;
        let r = e.inputs[n];
        if (r !== void 0 && (t.inputs[n] = r, t.declaredInputs[n] = e.declaredInputs[n], e.inputTransforms !== null)) {
            let i = Array.isArray(r) ? r[0] : r;
            if (!e.inputTransforms.hasOwnProperty(i)) continue;
            t.inputTransforms ??= {}, t.inputTransforms[i] = e.inputTransforms[i]
        }
    }
}

function Bb(t) {
    let e = 0,
        n = null;
    for (let r = t.length - 1; r >= 0; r--) {
        let i = t[r];
        i.hostVars = e += i.hostVars, i.hostAttrs = ci(i.hostAttrs, n = ci(n, i.hostAttrs))
    }
}

function Lo(t) {
    return t === xr ? {} : t === Ke ? [] : t
}

function $b(t, e) {
    let n = t.viewQuery;
    n ? t.viewQuery = (r, i) => {
        e(r, i), n(r, i)
    } : t.viewQuery = e
}

function Hb(t, e) {
    let n = t.contentQueries;
    n ? t.contentQueries = (r, i, o) => {
        e(r, i, o), n(r, i, o)
    } : t.contentQueries = e
}

function zb(t, e) {
    let n = t.hostBindings;
    n ? t.hostBindings = (r, i) => {
        e(r, i), n(r, i)
    } : t.hostBindings = e
}

function St(t) {
    let e = t.inputConfig,
        n = {};
    for (let r in e)
        if (e.hasOwnProperty(r)) {
            let i = e[r];
            Array.isArray(i) && i[3] && (n[r] = i[3])
        } t.inputTransforms = n
}
var Mn = class {},
    yi = class {};
var Wc = class extends Mn {
        constructor(e, n, r) {
            super(), this._parent = n, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new is(this);
            let i = bp(e);
            this._bootstrapComponents = Mh(i.bootstrap), this._r3Injector = sh(e, n, [{
                provide: Mn,
                useValue: this
            }, {
                provide: Ts,
                useValue: this.componentFactoryResolver
            }, ...r], We(e), new Set(["environment"])), this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(e)
        }
        get injector() {
            return this._r3Injector
        }
        destroy() {
            let e = this._r3Injector;
            !e.destroyed && e.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
        }
        onDestroy(e) {
            this.destroyCbs.push(e)
        }
    },
    Gc = class extends yi {
        constructor(e) {
            super(), this.moduleType = e
        }
        create(e) {
            return new Wc(this.moduleType, e, [])
        }
    };
var ss = class extends Mn {
    constructor(e) {
        super(), this.componentFactoryResolver = new is(this), this.instance = null;
        let n = new li([...e.providers, {
            provide: Mn,
            useValue: this
        }, {
            provide: Ts,
            useValue: this.componentFactoryResolver
        }], e.parent || pl(), e.debugName, new Set(["environment"]));
        this.injector = n, e.runEnvironmentInitializers && n.resolveInjectorInitializers()
    }
    destroy() {
        this.injector.destroy()
    }
    onDestroy(e) {
        this.injector.onDestroy(e)
    }
};

function ql(t, e, n = null) {
    return new ss({
        providers: t,
        parent: e,
        debugName: n,
        runEnvironmentInitializers: !0
    }).injector
}
var nr = (() => {
    let e = class e {
        constructor() {
            this.taskId = 0, this.pendingTasks = new Set, this.hasPendingTasks = new ke(!1)
        }
        get _hasPendingTasks() {
            return this.hasPendingTasks.value
        }
        add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            let r = this.taskId++;
            return this.pendingTasks.add(r), r
        }
        remove(r) {
            this.pendingTasks.delete(r), this.pendingTasks.size === 0 && this._hasPendingTasks && this.hasPendingTasks.next(!1)
        }
        ngOnDestroy() {
            this.pendingTasks.clear(), this._hasPendingTasks && this.hasPendingTasks.next(!1)
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function ug(t) {
    return Yl(t) ? Array.isArray(t) || !(t instanceof Map) && Symbol.iterator in t : !1
}

function Wb(t, e) {
    if (Array.isArray(t))
        for (let n = 0; n < t.length; n++) e(t[n]);
    else {
        let n = t[Symbol.iterator](),
            r;
        for (; !(r = n.next()).done;) e(r.value)
    }
}

function Yl(t) {
    return t !== null && (typeof t == "function" || typeof t == "object")
}

function Kl(t, e, n) {
    return t[e] = n
}

function Vt(t, e, n) {
    let r = t[e];
    return Object.is(r, n) ? !1 : (t[e] = n, !0)
}

function dg(t, e, n, r) {
    let i = Vt(t, e, n);
    return Vt(t, e + 1, r) || i
}

function Gb(t, e, n, r, i) {
    let o = dg(t, e, n, r);
    return Vt(t, e + 2, i) || o
}

function qb(t) {
    return (t.flags & 32) === 32
}

function Yb(t, e, n, r, i, o, s, a, c) {
    let l = e.consts,
        u = Ur(e, t, 4, s || null, Rr(l, a));
    jl(e, n, u, Rr(l, c)), bs(e, u);
    let d = u.tView = Vl(2, u, r, i, o, e.directiveRegistry, e.pipeRegistry, null, e.schemas, l, null);
    return e.queries !== null && (e.queries.template(e, u), d.queries = e.queries.embeddedTView(u)), u
}

function P(t, e, n, r, i, o, s, a) {
    let c = Q(),
        l = Ie(),
        u = t + Mt,
        d = l.firstCreatePass ? Yb(u, l, c, e, n, r, i, o, s) : l.data[u];
    er(d, !1);
    let f = Kb(l, c, d, t);
    Cs() && _s(l, c, f, d), _n(f, c);
    let p = Gh(f, c, f, d);
    return c[u] = p, xs(c, p), _b(p, d, c), ys(d) && kl(l, c, d), s != null && Ll(c, d, a), P
}
var Kb = Qb;

function Qb(t, e, n, r) {
    return Ds(!0), e[me].createComment("")
}

function J(t, e, n, r) {
    let i = Q(),
        o = vs();
    if (Vt(i, o, e)) {
        let s = Ie(),
            a = Il();
        RD(a, i, t, e, n, r)
    }
    return J
}

function Zb(t, e, n, r) {
    return Vt(t, vs(), n) ? e + Di(n) + r : cn
}

function Vo(t, e) {
    return t << 17 | e << 2
}

function Xn(t) {
    return t >> 17 & 32767
}

function Jb(t) {
    return (t & 2) == 2
}

function Xb(t, e) {
    return t & 131071 | e << 17
}

function qc(t) {
    return t | 2
}

function Pr(t) {
    return (t & 131068) >> 2
}

function rc(t, e) {
    return t & -131069 | e << 2
}

function ew(t) {
    return (t & 1) === 1
}

function Yc(t) {
    return t | 1
}

function tw(t, e, n, r, i, o) {
    let s = o ? e.classBindings : e.styleBindings,
        a = Xn(s),
        c = Pr(s);
    t[r] = n;
    let l = !1,
        u;
    if (Array.isArray(n)) {
        let d = n;
        u = d[1], (u === null || bi(d, u) > 0) && (l = !0)
    } else u = n;
    if (i)
        if (c !== 0) {
            let f = Xn(t[a + 1]);
            t[r + 1] = Vo(f, a), f !== 0 && (t[f + 1] = rc(t[f + 1], r)), t[a + 1] = Xb(t[a + 1], r)
        } else t[r + 1] = Vo(a, 0), a !== 0 && (t[a + 1] = rc(t[a + 1], r)), a = r;
    else t[r + 1] = Vo(c, 0), a === 0 ? a = r : t[c + 1] = rc(t[c + 1], r), c = r;
    l && (t[r + 1] = qc(t[r + 1])), Yf(t, u, r, !0), Yf(t, u, r, !1), nw(e, u, t, r, o), s = Vo(a, c), o ? e.classBindings = s : e.styleBindings = s
}

function nw(t, e, n, r, i) {
    let o = i ? t.residualClasses : t.residualStyles;
    o != null && typeof e == "string" && bi(o, e) >= 0 && (n[r + 1] = Yc(n[r + 1]))
}

function Yf(t, e, n, r) {
    let i = t[n + 1],
        o = e === null,
        s = r ? Xn(i) : Pr(i),
        a = !1;
    for (; s !== 0 && (a === !1 || o);) {
        let c = t[s],
            l = t[s + 1];
        rw(c, e) && (a = !0, t[s + 1] = r ? Yc(l) : qc(l)), s = r ? Xn(l) : Pr(l)
    }
    a && (t[n + 1] = r ? qc(i) : Yc(i))
}

function rw(t, e) {
    return t === null || e == null || (Array.isArray(t) ? t[1] : t) === e ? !0 : Array.isArray(t) && typeof e == "string" ? bi(t, e) >= 0 : !1
}
var bt = {
    textEnd: 0,
    key: 0,
    keyEnd: 0,
    value: 0,
    valueEnd: 0
};

function iw(t) {
    return t.substring(bt.key, bt.keyEnd)
}

function ow(t) {
    return sw(t), fg(t, pg(t, 0, bt.textEnd))
}

function fg(t, e) {
    let n = bt.textEnd;
    return n === e ? -1 : (e = bt.keyEnd = aw(t, bt.key = e, n), pg(t, e, n))
}

function sw(t) {
    bt.key = 0, bt.keyEnd = 0, bt.value = 0, bt.valueEnd = 0, bt.textEnd = t.length
}

function pg(t, e, n) {
    for (; e < n && t.charCodeAt(e) <= 32;) e++;
    return e
}

function aw(t, e, n) {
    for (; e < n && t.charCodeAt(e) > 32;) e++;
    return e
}

function y(t, e, n) {
    let r = Q(),
        i = vs();
    if (Vt(r, i, e)) {
        let o = Ie(),
            s = Il();
        Hh(o, s, r, t, e, r[me], n, !1)
    }
    return y
}

function Kc(t, e, n, r, i) {
    let o = e.inputs,
        s = i ? "class" : "style";
    Ul(t, n, o[s], s, r)
}

function xn(t, e) {
    return lw(t, e, null, !0), xn
}

function Ne(t) {
    uw(mw, cw, t, !0)
}

function cw(t, e) {
    for (let n = ow(e); n >= 0; n = fg(e, n)) ul(t, iw(e), !0)
}

function lw(t, e, n, r) {
    let i = Q(),
        o = Ie(),
        s = $p(2);
    if (o.firstUpdatePass && gg(o, t, s, r), e !== cn && Vt(i, s, e)) {
        let a = o.data[tr()];
        mg(o, a, i, i[me], t, i[s + 1] = vw(e, n), r, s)
    }
}

function uw(t, e, n, r) {
    let i = Ie(),
        o = $p(2);
    i.firstUpdatePass && gg(i, null, o, r);
    let s = Q();
    if (n !== cn && Vt(s, o, n)) {
        let a = i.data[tr()];
        if (yg(a, r) && !hg(i, o)) {
            let c = r ? a.classesWithoutHost : a.stylesWithoutHost;
            c !== null && (n = cc(c, n || "")), Kc(i, a, s, n, r)
        } else yw(i, a, s, s[me], s[o + 1], s[o + 1] = gw(t, e, n), r, o)
    }
}

function hg(t, e) {
    return e >= t.expandoStartIndex
}

function gg(t, e, n, r) {
    let i = t.data;
    if (i[n + 1] === null) {
        let o = i[tr()],
            s = hg(t, n);
        yg(o, r) && e === null && !s && (e = !1), e = dw(i, o, e, r), tw(i, o, e, n, s, r)
    }
}

function dw(t, e, n, r) {
    let i = W0(t),
        o = r ? e.residualClasses : e.residualStyles;
    if (i === null)(r ? e.classBindings : e.styleBindings) === 0 && (n = ic(null, t, e, n, r), n = vi(n, e.attrs, r), o = null);
    else {
        let s = e.directiveStylingLast;
        if (s === -1 || t[s] !== i)
            if (n = ic(i, t, e, n, r), o === null) {
                let c = fw(t, e, r);
                c !== void 0 && Array.isArray(c) && (c = ic(null, t, e, c[1], r), c = vi(c, e.attrs, r), pw(t, e, r, c))
            } else o = hw(t, e, r)
    }
    return o !== void 0 && (r ? e.residualClasses = o : e.residualStyles = o), n
}

function fw(t, e, n) {
    let r = n ? e.classBindings : e.styleBindings;
    if (Pr(r) !== 0) return t[Xn(r)]
}

function pw(t, e, n, r) {
    let i = n ? e.classBindings : e.styleBindings;
    t[Xn(i)] = r
}

function hw(t, e, n) {
    let r, i = e.directiveEnd;
    for (let o = 1 + e.directiveStylingLast; o < i; o++) {
        let s = t[o].hostAttrs;
        r = vi(r, s, n)
    }
    return vi(r, e.attrs, n)
}

function ic(t, e, n, r, i) {
    let o = null,
        s = n.directiveEnd,
        a = n.directiveStylingLast;
    for (a === -1 ? a = n.directiveStart : a++; a < s && (o = e[a], r = vi(r, o.hostAttrs, i), o !== t);) a++;
    return t !== null && (n.directiveStylingLast = a), r
}

function vi(t, e, n) {
    let r = n ? 1 : 2,
        i = -1;
    if (e !== null)
        for (let o = 0; o < e.length; o++) {
            let s = e[o];
            typeof s == "number" ? i = s : i === r && (Array.isArray(t) || (t = t === void 0 ? [] : ["", t]), ul(t, s, n ? !0 : e[++o]))
        }
    return t === void 0 ? null : t
}

function gw(t, e, n) {
    if (n == null || n === "") return Ke;
    let r = [],
        i = jr(n);
    if (Array.isArray(i))
        for (let o = 0; o < i.length; o++) t(r, i[o], !0);
    else if (typeof i == "object")
        for (let o in i) i.hasOwnProperty(o) && t(r, o, i[o]);
    else typeof i == "string" && e(r, i);
    return r
}

function mw(t, e, n) {
    let r = String(e);
    r !== "" && !r.includes(" ") && ul(t, r, n)
}

function yw(t, e, n, r, i, o, s, a) {
    i === cn && (i = Ke);
    let c = 0,
        l = 0,
        u = 0 < i.length ? i[0] : null,
        d = 0 < o.length ? o[0] : null;
    for (; u !== null || d !== null;) {
        let f = c < i.length ? i[c + 1] : void 0,
            p = l < o.length ? o[l + 1] : void 0,
            m = null,
            E;
        u === d ? (c += 2, l += 2, f !== p && (m = d, E = p)) : d === null || u !== null && u < d ? (c += 2, m = u) : (l += 2, m = d, E = p), m !== null && mg(t, e, n, r, m, E, s, a), u = c < i.length ? i[c] : null, d = l < o.length ? o[l] : null
    }
}

function mg(t, e, n, r, i, o, s, a) {
    if (!(e.type & 3)) return;
    let c = t.data,
        l = c[a + 1],
        u = ew(l) ? Kf(c, e, n, i, Pr(l), s) : void 0;
    if (!as(u)) {
        as(o) || Jb(l) && (o = Kf(c, null, n, i, a, s));
        let d = Fp(tr(), n);
        uD(r, s, d, i, o)
    }
}

function Kf(t, e, n, r, i, o) {
    let s = e === null,
        a;
    for (; i > 0;) {
        let c = t[i],
            l = Array.isArray(c),
            u = l ? c[1] : c,
            d = u === null,
            f = n[i + 1];
        f === cn && (f = d ? Ke : void 0);
        let p = d ? qa(f, r) : u === r ? f : void 0;
        if (l && !as(p) && (p = qa(c, r)), as(p) && (a = p, s)) return a;
        let m = t[i + 1];
        i = s ? Xn(m) : Pr(m)
    }
    if (e !== null) {
        let c = o ? e.residualClasses : e.residualStyles;
        c != null && (a = qa(c, r))
    }
    return a
}

function as(t) {
    return t !== void 0
}

function vw(t, e) {
    return t == null || t === "" || (typeof e == "string" ? t = t + e : typeof t == "object" && (t = We(jr(t)))), t
}

function yg(t, e) {
    return (t.flags & (e ? 8 : 16)) !== 0
}

function Cw(t, e, n, r, i, o) {
    let s = e.consts,
        a = Rr(s, i),
        c = Ur(e, t, 2, r, a);
    return jl(e, n, c, Rr(s, o)), c.attrs !== null && rs(c, c.attrs, !1), c.mergedAttrs !== null && rs(c, c.mergedAttrs, !0), e.queries !== null && e.queries.elementStart(e, c), c
}

function g(t, e, n, r) {
    let i = Q(),
        o = Ie(),
        s = Mt + t,
        a = i[me],
        c = o.firstCreatePass ? Cw(s, o, i, e, n, r) : o.data[s],
        l = Dw(o, i, c, a, e, t);
    i[s] = l;
    let u = ys(c);
    return er(c, !0), Lh(a, l, c), !qb(c) && Cs() && _s(o, i, l, c), P0() === 0 && _n(l, i), F0(), u && (kl(o, i, c), Fl(o, c, i)), r !== null && Ll(i, c), g
}

function h() {
    let t = Ge();
    vl() ? Cl() : (t = t.parent, er(t, !1));
    let e = t;
    L0(e) && V0(), k0();
    let n = Ie();
    return n.firstCreatePass && (bs(n, t), gl(t) && n.queries.elementEnd(t)), e.classesWithoutHost != null && J0(e) && Kc(n, e, Q(), e.classesWithoutHost, !0), e.stylesWithoutHost != null && X0(e) && Kc(n, e, Q(), e.stylesWithoutHost, !1), h
}

function z(t, e, n, r) {
    return g(t, e, n, r), h(), z
}
var Dw = (t, e, n, r, i, o) => (Ds(!0), Sh(r, i, Y0()));

function bw(t, e, n, r, i) {
    let o = e.consts,
        s = Rr(o, r),
        a = Ur(e, t, 8, "ng-container", s);
    s !== null && rs(a, s, !0);
    let c = Rr(o, i);
    return jl(e, n, a, c), e.queries !== null && e.queries.elementStart(e, a), a
}

function pt(t, e, n) {
    let r = Q(),
        i = Ie(),
        o = t + Mt,
        s = i.firstCreatePass ? bw(o, i, r, e, n) : i.data[o];
    er(s, !0);
    let a = ww(i, r, s, t);
    return r[o] = a, Cs() && _s(i, r, a, s), _n(a, r), ys(s) && (kl(i, r, s), Fl(i, s, r)), n != null && Ll(r, s), pt
}

function ht() {
    let t = Ge(),
        e = Ie();
    return vl() ? Cl() : (t = t.parent, er(t, !1)), e.firstCreatePass && (bs(e, t), gl(t) && e.queries.elementEnd(t)), ht
}

function un(t, e, n) {
    return pt(t, e, n), ht(), un
}
var ww = (t, e, n, r) => (Ds(!0), YC(e[me], ""));

function Bt() {
    return Q()
}
var cs = "en-US";
var Ew = cs;

function Iw(t) {
    typeof t == "string" && (Ew = t.toLowerCase().replace(/_/g, "-"))
}

function ve(t, e, n, r) {
    let i = Q(),
        o = Ie(),
        s = Ge();
    return vg(o, i, i[me], s, t, e, r), ve
}

function _w(t, e, n, r) {
    let i = t.cleanup;
    if (i != null)
        for (let o = 0; o < i.length - 1; o += 2) {
            let s = i[o];
            if (s === n && i[o + 1] === r) {
                let a = e[di],
                    c = i[o + 2];
                return a.length > c ? a[c] : null
            }
            typeof s == "string" && (o += 2)
        }
    return null
}

function vg(t, e, n, r, i, o, s) {
    let a = ys(r),
        l = t.firstCreatePass && Kh(t),
        u = e[Et],
        d = Yh(e),
        f = !0;
    if (r.type & 3 || s) {
        let E = ft(r, e),
            M = s ? s(E) : E,
            I = d.length,
            ae = s ? W => s(kt(W[r.index])) : r.index,
            de = null;
        if (!s && a && (de = _w(t, e, i, r.index)), de !== null) {
            let W = de.__ngLastListenerFn__ || de;
            W.__ngNextListenerFn__ = o, de.__ngLastListenerFn__ = o, f = !1
        } else {
            o = Zf(r, e, u, o, !1);
            let W = n.listen(M, i, o);
            d.push(o, W), l && l.push(i, ae, I, I + 1)
        }
    } else o = Zf(r, e, u, o, !1);
    let p = r.outputs,
        m;
    if (f && p !== null && (m = p[i])) {
        let E = m.length;
        if (E)
            for (let M = 0; M < E; M += 2) {
                let I = m[M],
                    ae = m[M + 1],
                    Re = e[I][ae].subscribe(o),
                    q = d.length;
                d.push(o, Re), l && l.push(i, r.index, q, -(q + 1))
            }
    }
}

function Qf(t, e, n, r) {
    let i = ee(null);
    try {
        return Rt(6, e, n), n(r) !== !1
    } catch (o) {
        return Qh(t, o), !1
    } finally {
        Rt(7, e, n), ee(i)
    }
}

function Zf(t, e, n, r, i) {
    return function o(s) {
        if (s === Function) return r;
        let a = t.componentOffset > -1 ? Sn(t.index, e) : e;
        $l(a);
        let c = Qf(e, n, r, s),
            l = o.__ngNextListenerFn__;
        for (; l;) c = Qf(e, n, l, s) && c, l = l.__ngNextListenerFn__;
        return i && c === !1 && s.preventDefault(), c
    }
}

function $(t = 1) {
    return q0(t)
}

function Mw(t, e) {
    let n = null,
        r = Jv(t);
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        if (o === "*") {
            n = i;
            continue
        }
        if (r === null ? yp(t, o, !0) : t0(r, o)) return i
    }
    return n
}

function $t(t) {
    let e = Q()[_t][ot];
    if (!e.projection) {
        let n = t ? t.length : 1,
            r = e.projection = $v(n, null),
            i = r.slice(),
            o = e.child;
        for (; o !== null;) {
            let s = t ? Mw(o, t) : 0;
            s !== null && (i[s] ? i[s].projectionNext = o : r[s] = o, i[s] = o), o = o.next
        }
    }
}

function xt(t, e = 0, n) {
    let r = Q(),
        i = Ie(),
        o = Ur(i, Mt + t, 16, null, n || null);
    o.projection === null && (o.projection = e), Cl(), (!r[ui] || Up()) && (o.flags & 32) !== 32 && cD(i, r, o)
}

function Tn(t, e, n, r) {
    Rb(t, e, n, r)
}

function Ii(t, e, n) {
    Nb(t, e, n)
}

function gt(t) {
    let e = Q(),
        n = Ie(),
        r = Hp();
    bl(r + 1);
    let i = Wl(n, r);
    if (t.dirty && T0(e) === ((i.metadata.flags & 2) === 2)) {
        if (i.matches === null) t.reset([]);
        else {
            let o = kb(e, r);
            t.reset(o, dC), t.notifyOnChanges()
        }
        return !0
    }
    return !1
}

function mt() {
    return Ob(Q(), Hp())
}

function An(t) {
    let e = U0();
    return x0(e, Mt + t)
}

function v(t, e = "") {
    let n = Q(),
        r = Ie(),
        i = t + Mt,
        o = r.firstCreatePass ? Ur(r, i, 1, e, null) : r.data[i],
        s = Sw(r, n, o, e, t);
    n[i] = s, Cs() && _s(r, n, s, o), er(o, !1)
}
var Sw = (t, e, n, r, i) => (Ds(!0), GC(e[me], r));

function st(t) {
    return Os("", t, ""), st
}

function Os(t, e, n) {
    let r = Q(),
        i = Zb(r, t, e, n);
    return i !== cn && LD(r, tr(), i), Os
}

function _i(t, e, n) {
    lg(e) && (e = e());
    let r = Q(),
        i = vs();
    if (Vt(r, i, e)) {
        let o = Ie(),
            s = Il();
        Hh(o, s, r, t, e, r[me], n, !1)
    }
    return _i
}

function Ns(t, e) {
    let n = lg(t);
    return n && t.set(e), n
}

function Mi(t, e) {
    let n = Q(),
        r = Ie(),
        i = Ge();
    return vg(r, n, n[me], i, t, e), Mi
}

function xw(t, e, n) {
    let r = Ie();
    if (r.firstCreatePass) {
        let i = In(t);
        Qc(n, r.data, r.blueprint, i, !0), Qc(e, r.data, r.blueprint, i, !1)
    }
}

function Qc(t, e, n, r, i) {
    if (t = ze(t), Array.isArray(t))
        for (let o = 0; o < t.length; o++) Qc(t[o], e, n, r, i);
    else {
        let o = Ie(),
            s = Q(),
            a = Ge(),
            c = Ar(t) ? t : ze(t.provide),
            l = Sp(t),
            u = a.providerIndexes & 1048575,
            d = a.directiveStart,
            f = a.providerIndexes >> 20;
        if (Ar(t) || !t.multi) {
            let p = new Qn(l, i, _),
                m = sc(c, e, i ? u : u + f, d);
            m === -1 ? (Dc(Jo(a, s), o, c), oc(o, t, e.length), e.push(c), a.directiveStart++, a.directiveEnd++, i && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[m] = p, s[m] = p)
        } else {
            let p = sc(c, e, u + f, d),
                m = sc(c, e, u, u + f),
                E = p >= 0 && n[p],
                M = m >= 0 && n[m];
            if (i && !M || !i && !E) {
                Dc(Jo(a, s), o, c);
                let I = Ow(i ? Aw : Tw, n.length, i, r, l);
                !i && M && (n[m].providerFactory = I), oc(o, t, e.length, 0), e.push(c), a.directiveStart++, a.directiveEnd++, i && (a.providerIndexes += 1048576), n.push(I), s.push(I)
            } else {
                let I = Cg(n[i ? m : p], l, !i && r);
                oc(o, t, p > -1 ? p : m, I)
            }!i && r && M && n[m].componentProviders++
        }
    }
}

function oc(t, e, n, r) {
    let i = Ar(e),
        o = f0(e);
    if (i || o) {
        let c = (o ? ze(e.useClass) : e).prototype.ngOnDestroy;
        if (c) {
            let l = t.destroyHooks || (t.destroyHooks = []);
            if (!i && e.multi) {
                let u = l.indexOf(n);
                u === -1 ? l.push(n, [r, c]) : l[u + 1].push(r, c)
            } else l.push(n, c)
        }
    }
}

function Cg(t, e, n) {
    return n && t.componentProviders++, t.multi.push(e) - 1
}

function sc(t, e, n, r) {
    for (let i = n; i < r; i++)
        if (e[i] === t) return i;
    return -1
}

function Tw(t, e, n, r) {
    return Zc(this.multi, [])
}

function Aw(t, e, n, r) {
    let i = this.multi,
        o;
    if (this.providerFactory) {
        let s = this.providerFactory.componentProviders,
            a = Zn(n, n[H], this.providerFactory.index, r);
        o = a.slice(0, s), Zc(i, o);
        for (let c = s; c < a.length; c++) o.push(a[c])
    } else o = [], Zc(i, o);
    return o
}

function Zc(t, e) {
    for (let n = 0; n < t.length; n++) {
        let r = t[n];
        e.push(r())
    }
    return e
}

function Ow(t, e, n, r, i) {
    let o = new Qn(t, n, _);
    return o.multi = [], o.index = e, o.componentProviders = 0, Cg(o, i, r && !n), o
}

function rr(t, e = []) {
    return n => {
        n.providersResolver = (r, i) => xw(r, i ? i(t) : t, e)
    }
}
var Nw = (() => {
    let e = class e {
        constructor(r) {
            this._injector = r, this.cachedInjectors = new Map
        }
        getOrCreateStandaloneInjector(r) {
            if (!r.standalone) return null;
            if (!this.cachedInjectors.has(r)) {
                let i = Ip(!1, r.type),
                    o = i.length > 0 ? ql([i], this._injector, `Standalone[${r.type.name}]`) : null;
                this.cachedInjectors.set(r, o)
            }
            return this.cachedInjectors.get(r)
        }
        ngOnDestroy() {
            try {
                for (let r of this.cachedInjectors.values()) r !== null && r.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
    };
    e.\u0275prov = x({
        token: e,
        providedIn: "environment",
        factory: () => new e(L(Qe))
    });
    let t = e;
    return t
})();

function j(t) {
    As("NgStandalone"), t.getStandaloneInjector = e => e.get(Nw).getOrCreateStandaloneInjector(t)
}

function $e(t, e, n, r) {
    return Rw(Q(), Dl(), t, e, n, r)
}

function Rs(t, e, n, r, i) {
    return Pw(Q(), Dl(), t, e, n, r, i)
}

function Ps(t, e, n, r, i, o) {
    return Fw(Q(), Dl(), t, e, n, r, i, o)
}

function Ql(t, e) {
    let n = t[e];
    return n === cn ? void 0 : n
}

function Rw(t, e, n, r, i, o) {
    let s = e + n;
    return Vt(t, s, i) ? Kl(t, s + 1, o ? r.call(o, i) : r(i)) : Ql(t, s + 1)
}

function Pw(t, e, n, r, i, o, s) {
    let a = e + n;
    return dg(t, a, i, o) ? Kl(t, a + 2, s ? r.call(s, i, o) : r(i, o)) : Ql(t, a + 2)
}

function Fw(t, e, n, r, i, o, s, a) {
    let c = e + n;
    return Gb(t, c, i, o, s) ? Kl(t, c + 3, a ? r.call(a, i, o, s) : r(i, o, s)) : Ql(t, c + 3)
}
var Fs = (() => {
    let e = class e {
        log(r) {
            console.log(r)
        }
        warn(r) {
            console.warn(r)
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac,
        providedIn: "platform"
    });
    let t = e;
    return t
})();
var Dg = new A("");

function ir(t) {
    return !!t && typeof t.then == "function"
}

function bg(t) {
    return !!t && typeof t.subscribe == "function"
}
var wg = new A(""),
    Eg = (() => {
        let e = class e {
            constructor() {
                this.initialized = !1, this.done = !1, this.donePromise = new Promise((r, i) => {
                    this.resolve = r, this.reject = i
                }), this.appInits = D(wg, {
                    optional: !0
                }) ?? []
            }
            runInitializers() {
                if (this.initialized) return;
                let r = [];
                for (let o of this.appInits) {
                    let s = o();
                    if (ir(s)) r.push(s);
                    else if (bg(s)) {
                        let a = new Promise((c, l) => {
                            s.subscribe({
                                complete: c,
                                error: l
                            })
                        });
                        r.push(a)
                    }
                }
                let i = () => {
                    this.done = !0, this.resolve()
                };
                Promise.all(r).then(() => {
                    i()
                }).catch(o => {
                    this.reject(o)
                }), r.length === 0 && i(), this.initialized = !0
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    ks = new A("");

function kw() {
    jd(() => {
        throw new S(600, !1)
    })
}

function Lw(t) {
    return t.isBoundToModule
}

function Vw(t, e, n) {
    try {
        let r = n();
        return ir(r) ? r.catch(i => {
            throw e.runOutsideAngular(() => t.handleError(i)), i
        }) : r
    } catch (r) {
        throw e.runOutsideAngular(() => t.handleError(r)), r
    }
}
var Br = (() => {
    let e = class e {
        constructor() {
            this._bootstrapListeners = [], this._runningTick = !1, this._destroyed = !1, this._destroyListeners = [], this._views = [], this.internalErrorHandler = D(ah), this.afterRenderEffectManager = D(rg), this.externalTestViews = new Set, this.beforeRender = new Fe, this.afterTick = new Fe, this.componentTypes = [], this.components = [], this.isStable = D(nr).hasPendingTasks.pipe(V(r => !r)), this._injector = D(Qe)
        }
        get destroyed() {
            return this._destroyed
        }
        get injector() {
            return this._injector
        }
        bootstrap(r, i) {
            let o = r instanceof ns;
            if (!this._injector.get(Eg).done) {
                let p = !o && Dp(r),
                    m = !1;
                throw new S(405, m)
            }
            let a;
            o ? a = r : a = this._injector.get(Ts).resolveComponentFactory(r), this.componentTypes.push(a.componentType);
            let c = Lw(a) ? void 0 : this._injector.get(Mn),
                l = i || a.selector,
                u = a.create(Lr.NULL, [], l, c),
                d = u.location.nativeElement,
                f = u.injector.get(Dg, null);
            return f?.registerApplication(d), u.onDestroy(() => {
                this.detachView(u.hostView), ac(this.components, u), f?.unregisterApplication(d)
            }), this._loadComponent(u), u
        }
        tick() {
            this._tick(!0)
        }
        _tick(r) {
            if (this._runningTick) throw new S(101, !1);
            let i = ee(null);
            try {
                this._runningTick = !0, this.detectChangesInAttachedViews(r)
            } catch (o) {
                this.internalErrorHandler(o)
            } finally {
                this.afterTick.next(), this._runningTick = !1, ee(i)
            }
        }
        detectChangesInAttachedViews(r) {
            let i = 0,
                o = this.afterRenderEffectManager;
            for (;;) {
                if (i === Jh) throw new S(103, !1);
                if (r) {
                    let s = i === 0;
                    this.beforeRender.next(s);
                    for (let {
                            _lView: a,
                            notifyErrorHandler: c
                        }
                        of this._views) jw(a, s, c)
                }
                if (i++, o.executeInternalCallbacks(), ![...this.externalTestViews.keys(), ...this._views].some(({
                        _lView: s
                    }) => Jc(s)) && (o.execute(), ![...this.externalTestViews.keys(), ...this._views].some(({
                        _lView: s
                    }) => Jc(s)))) break
            }
        }
        attachView(r) {
            let i = r;
            this._views.push(i), i.attachToAppRef(this)
        }
        detachView(r) {
            let i = r;
            ac(this._views, i), i.detachFromAppRef()
        }
        _loadComponent(r) {
            this.attachView(r.hostView), this.tick(), this.components.push(r);
            let i = this._injector.get(ks, []);
            [...this._bootstrapListeners, ...i].forEach(o => o(r))
        }
        ngOnDestroy() {
            if (!this._destroyed) try {
                this._destroyListeners.forEach(r => r()), this._views.slice().forEach(r => r.destroy())
            } finally {
                this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = []
            }
        }
        onDestroy(r) {
            return this._destroyListeners.push(r), () => ac(this._destroyListeners, r)
        }
        destroy() {
            if (this._destroyed) throw new S(406, !1);
            let r = this._injector;
            r.destroy && !r.destroyed && r.destroy()
        }
        get viewCount() {
            return this._views.length
        }
        warnIfDestroyed() {}
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function ac(t, e) {
    let n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}

function jw(t, e, n) {
    !e && !Jc(t) || Uw(t, n, e)
}

function Jc(t) {
    return yl(t)
}

function Uw(t, e, n) {
    let r;
    n ? (r = 0, t[O] |= 1024) : t[O] & 64 ? r = 0 : r = 1, Xh(t, e, r)
}
var Xc = class {
        constructor(e, n) {
            this.ngModuleFactory = e, this.componentFactories = n
        }
    },
    Zl = (() => {
        let e = class e {
            compileModuleSync(r) {
                return new Gc(r)
            }
            compileModuleAsync(r) {
                return Promise.resolve(this.compileModuleSync(r))
            }
            compileModuleAndAllComponentsSync(r) {
                let i = this.compileModuleSync(r),
                    o = bp(r),
                    s = Mh(o.declarations).reduce((a, c) => {
                        let l = Gn(c);
                        return l && a.push(new mi(l)), a
                    }, []);
                return new Xc(i, s)
            }
            compileModuleAndAllComponentsAsync(r) {
                return Promise.resolve(this.compileModuleAndAllComponentsSync(r))
            }
            clearCache() {}
            clearCacheFor(r) {}
            getModuleId(r) {}
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })();
var Bw = (() => {
    let e = class e {
        constructor() {
            this.zone = D(ue), this.applicationRef = D(Br)
        }
        initialize() {
            this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
                next: () => {
                    this.zone.run(() => {
                        this.applicationRef.tick()
                    })
                }
            }))
        }
        ngOnDestroy() {
            this._onMicrotaskEmptySubscription?.unsubscribe()
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function $w(t) {
    return [{
        provide: ue,
        useFactory: t
    }, {
        provide: Tr,
        multi: !0,
        useFactory: () => {
            let e = D(Bw, {
                optional: !0
            });
            return () => e.initialize()
        }
    }, {
        provide: Tr,
        multi: !0,
        useFactory: () => {
            let e = D(Gw);
            return () => {
                e.initialize()
            }
        }
    }, {
        provide: ah,
        useFactory: Hw
    }]
}

function Hw() {
    let t = D(ue),
        e = D(en);
    return n => t.runOutsideAngular(() => e.handleError(n))
}

function zw(t) {
    let e = $w(() => new ue(Ww(t)));
    return Fr([
        [], e
    ])
}

function Ww(t) {
    return {
        enableLongStackTrace: !1,
        shouldCoalesceEventChangeDetection: t?.eventCoalescing ?? !1,
        shouldCoalesceRunChangeDetection: t?.runCoalescing ?? !1
    }
}
var Gw = (() => {
    let e = class e {
        constructor() {
            this.subscription = new Se, this.initialized = !1, this.zone = D(ue), this.pendingTasks = D(nr)
        }
        initialize() {
            if (this.initialized) return;
            this.initialized = !0;
            let r = null;
            !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (r = this.pendingTasks.add()), this.zone.runOutsideAngular(() => {
                this.subscription.add(this.zone.onStable.subscribe(() => {
                    ue.assertNotInAngularZone(), queueMicrotask(() => {
                        r !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(r), r = null)
                    })
                }))
            }), this.subscription.add(this.zone.onUnstable.subscribe(() => {
                ue.assertInAngularZone(), r ??= this.pendingTasks.add()
            }))
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function qw() {
    return typeof $localize < "u" && $localize.locale || cs
}
var Jl = new A("", {
    providedIn: "root",
    factory: () => D(Jl, G.Optional | G.SkipSelf) || qw()
});
var Ig = new A("");
var zo = null;

function Yw(t = [], e) {
    return Lr.create({
        name: e,
        providers: [{
            provide: hs,
            useValue: "platform"
        }, {
            provide: Ig,
            useValue: new Set([() => zo = null])
        }, ...t]
    })
}

function Kw(t = []) {
    if (zo) return zo;
    let e = Yw(t);
    return zo = e, kw(), Qw(e), e
}

function Qw(t) {
    t.get(Sl, null)?.forEach(n => n())
}
var Ht = (() => {
    let e = class e {};
    e.__NG_ELEMENT_ID__ = Zw;
    let t = e;
    return t
})();

function Zw(t) {
    return Jw(Ge(), Q(), (t & 16) === 16)
}

function Jw(t, e, n) {
    if (ms(t) && !n) {
        let r = Sn(t.index, e);
        return new Jn(r, r)
    } else if (t.type & 47) {
        let r = e[_t];
        return new Jn(r, e)
    }
    return null
}
var el = class {
        constructor() {}
        supports(e) {
            return ug(e)
        }
        create(e) {
            return new tl(e)
        }
    },
    Xw = (t, e) => e,
    tl = class {
        constructor(e) {
            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || Xw
        }
        forEachItem(e) {
            let n;
            for (n = this._itHead; n !== null; n = n._next) e(n)
        }
        forEachOperation(e) {
            let n = this._itHead,
                r = this._removalsHead,
                i = 0,
                o = null;
            for (; n || r;) {
                let s = !r || n && n.currentIndex < Jf(r, i, o) ? n : r,
                    a = Jf(s, i, o),
                    c = s.currentIndex;
                if (s === r) i--, r = r._nextRemoved;
                else if (n = n._next, s.previousIndex == null) i++;
                else {
                    o || (o = []);
                    let l = a - i,
                        u = c - i;
                    if (l != u) {
                        for (let f = 0; f < l; f++) {
                            let p = f < o.length ? o[f] : o[f] = 0,
                                m = p + f;
                            u <= m && m < l && (o[f] = p + 1)
                        }
                        let d = s.previousIndex;
                        o[d] = u - l
                    }
                }
                a !== c && e(s, a, c)
            }
        }
        forEachPreviousItem(e) {
            let n;
            for (n = this._previousItHead; n !== null; n = n._nextPrevious) e(n)
        }
        forEachAddedItem(e) {
            let n;
            for (n = this._additionsHead; n !== null; n = n._nextAdded) e(n)
        }
        forEachMovedItem(e) {
            let n;
            for (n = this._movesHead; n !== null; n = n._nextMoved) e(n)
        }
        forEachRemovedItem(e) {
            let n;
            for (n = this._removalsHead; n !== null; n = n._nextRemoved) e(n)
        }
        forEachIdentityChange(e) {
            let n;
            for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange) e(n)
        }
        diff(e) {
            if (e == null && (e = []), !ug(e)) throw new S(900, !1);
            return this.check(e) ? this : null
        }
        onDestroy() {}
        check(e) {
            this._reset();
            let n = this._itHead,
                r = !1,
                i, o, s;
            if (Array.isArray(e)) {
                this.length = e.length;
                for (let a = 0; a < this.length; a++) o = e[a], s = this._trackByFn(a, o), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, o, s, a), r = !0) : (r && (n = this._verifyReinsertion(n, o, s, a)), Object.is(n.item, o) || this._addIdentityChange(n, o)), n = n._next
            } else i = 0, Wb(e, a => {
                s = this._trackByFn(i, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, i), r = !0) : (r && (n = this._verifyReinsertion(n, a, s, i)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, i++
            }), this.length = i;
            return this._truncate(n), this.collection = e, this.isDirty
        }
        get isDirty() {
            return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null
        }
        _reset() {
            if (this.isDirty) {
                let e;
                for (e = this._previousItHead = this._itHead; e !== null; e = e._next) e._nextPrevious = e._next;
                for (e = this._additionsHead; e !== null; e = e._nextAdded) e.previousIndex = e.currentIndex;
                for (this._additionsHead = this._additionsTail = null, e = this._movesHead; e !== null; e = e._nextMoved) e.previousIndex = e.currentIndex;
                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
            }
        }
        _mismatch(e, n, r, i) {
            let o;
            return e === null ? o = this._itTail : (o = e._prev, this._remove(e)), e = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null), e !== null ? (Object.is(e.item, n) || this._addIdentityChange(e, n), this._reinsertAfter(e, o, i)) : (e = this._linkedRecords === null ? null : this._linkedRecords.get(r, i), e !== null ? (Object.is(e.item, n) || this._addIdentityChange(e, n), this._moveAfter(e, o, i)) : e = this._addAfter(new nl(n, r), o, i)), e
        }
        _verifyReinsertion(e, n, r, i) {
            let o = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null);
            return o !== null ? e = this._reinsertAfter(o, e._prev, i) : e.currentIndex != i && (e.currentIndex = i, this._addToMoves(e, i)), e
        }
        _truncate(e) {
            for (; e !== null;) {
                let n = e._next;
                this._addToRemovals(this._unlink(e)), e = n
            }
            this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null)
        }
        _reinsertAfter(e, n, r) {
            this._unlinkedRecords !== null && this._unlinkedRecords.remove(e);
            let i = e._prevRemoved,
                o = e._nextRemoved;
            return i === null ? this._removalsHead = o : i._nextRemoved = o, o === null ? this._removalsTail = i : o._prevRemoved = i, this._insertAfter(e, n, r), this._addToMoves(e, r), e
        }
        _moveAfter(e, n, r) {
            return this._unlink(e), this._insertAfter(e, n, r), this._addToMoves(e, r), e
        }
        _addAfter(e, n, r) {
            return this._insertAfter(e, n, r), this._additionsTail === null ? this._additionsTail = this._additionsHead = e : this._additionsTail = this._additionsTail._nextAdded = e, e
        }
        _insertAfter(e, n, r) {
            let i = n === null ? this._itHead : n._next;
            return e._next = i, e._prev = n, i === null ? this._itTail = e : i._prev = e, n === null ? this._itHead = e : n._next = e, this._linkedRecords === null && (this._linkedRecords = new ls), this._linkedRecords.put(e), e.currentIndex = r, e
        }
        _remove(e) {
            return this._addToRemovals(this._unlink(e))
        }
        _unlink(e) {
            this._linkedRecords !== null && this._linkedRecords.remove(e);
            let n = e._prev,
                r = e._next;
            return n === null ? this._itHead = r : n._next = r, r === null ? this._itTail = n : r._prev = n, e
        }
        _addToMoves(e, n) {
            return e.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = e : this._movesTail = this._movesTail._nextMoved = e), e
        }
        _addToRemovals(e) {
            return this._unlinkedRecords === null && (this._unlinkedRecords = new ls), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
        }
        _addIdentityChange(e, n) {
            return e.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = e : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = e, e
        }
    },
    nl = class {
        constructor(e, n) {
            this.item = e, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
        }
    },
    rl = class {
        constructor() {
            this._head = null, this._tail = null
        }
        add(e) {
            this._head === null ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
        }
        get(e, n) {
            let r;
            for (r = this._head; r !== null; r = r._nextDup)
                if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, e)) return r;
            return null
        }
        remove(e) {
            let n = e._prevDup,
                r = e._nextDup;
            return n === null ? this._head = r : n._nextDup = r, r === null ? this._tail = n : r._prevDup = n, this._head === null
        }
    },
    ls = class {
        constructor() {
            this.map = new Map
        }
        put(e) {
            let n = e.trackById,
                r = this.map.get(n);
            r || (r = new rl, this.map.set(n, r)), r.add(e)
        }
        get(e, n) {
            let r = e,
                i = this.map.get(r);
            return i ? i.get(e, n) : null
        }
        remove(e) {
            let n = e.trackById;
            return this.map.get(n).remove(e) && this.map.delete(n), e
        }
        get isEmpty() {
            return this.map.size === 0
        }
        clear() {
            this.map.clear()
        }
    };

function Jf(t, e, n) {
    let r = t.previousIndex;
    if (r === null) return r;
    let i = 0;
    return n && r < n.length && (i = n[r]), r + e + i
}
var il = class {
        constructor() {}
        supports(e) {
            return e instanceof Map || Yl(e)
        }
        create() {
            return new ol
        }
    },
    ol = class {
        constructor() {
            this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
        }
        get isDirty() {
            return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null
        }
        forEachItem(e) {
            let n;
            for (n = this._mapHead; n !== null; n = n._next) e(n)
        }
        forEachPreviousItem(e) {
            let n;
            for (n = this._previousMapHead; n !== null; n = n._nextPrevious) e(n)
        }
        forEachChangedItem(e) {
            let n;
            for (n = this._changesHead; n !== null; n = n._nextChanged) e(n)
        }
        forEachAddedItem(e) {
            let n;
            for (n = this._additionsHead; n !== null; n = n._nextAdded) e(n)
        }
        forEachRemovedItem(e) {
            let n;
            for (n = this._removalsHead; n !== null; n = n._nextRemoved) e(n)
        }
        diff(e) {
            if (!e) e = new Map;
            else if (!(e instanceof Map || Yl(e))) throw new S(900, !1);
            return this.check(e) ? this : null
        }
        onDestroy() {}
        check(e) {
            this._reset();
            let n = this._mapHead;
            if (this._appendAfter = null, this._forEach(e, (r, i) => {
                    if (n && n.key === i) this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
                    else {
                        let o = this._getOrCreateRecordForKey(i, r);
                        n = this._insertBeforeOrAppend(n, o)
                    }
                }), n) {
                n._prev && (n._prev._next = null), this._removalsHead = n;
                for (let r = n; r !== null; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
            }
            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
        }
        _insertBeforeOrAppend(e, n) {
            if (e) {
                let r = e._prev;
                return n._next = e, n._prev = r, e._prev = n, r && (r._next = n), e === this._mapHead && (this._mapHead = n), this._appendAfter = e, e
            }
            return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null
        }
        _getOrCreateRecordForKey(e, n) {
            if (this._records.has(e)) {
                let i = this._records.get(e);
                this._maybeAddToChanges(i, n);
                let o = i._prev,
                    s = i._next;
                return o && (o._next = s), s && (s._prev = o), i._next = null, i._prev = null, i
            }
            let r = new sl(e);
            return this._records.set(e, r), r.currentValue = n, this._addToAdditions(r), r
        }
        _reset() {
            if (this.isDirty) {
                let e;
                for (this._previousMapHead = this._mapHead, e = this._previousMapHead; e !== null; e = e._next) e._nextPrevious = e._next;
                for (e = this._changesHead; e !== null; e = e._nextChanged) e.previousValue = e.currentValue;
                for (e = this._additionsHead; e != null; e = e._nextAdded) e.previousValue = e.currentValue;
                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
            }
        }
        _maybeAddToChanges(e, n) {
            Object.is(n, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = n, this._addToChanges(e))
        }
        _addToAdditions(e) {
            this._additionsHead === null ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
        }
        _addToChanges(e) {
            this._changesHead === null ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
        }
        _forEach(e, n) {
            e instanceof Map ? e.forEach(n) : Object.keys(e).forEach(r => n(e[r], r))
        }
    },
    sl = class {
        constructor(e) {
            this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
        }
    };

function Xf() {
    return new Xl([new el])
}
var Xl = (() => {
    let e = class e {
        constructor(r) {
            this.factories = r
        }
        static create(r, i) {
            if (i != null) {
                let o = i.factories.slice();
                r = r.concat(o)
            }
            return new e(r)
        }
        static extend(r) {
            return {
                provide: e,
                useFactory: i => e.create(r, i || Xf()),
                deps: [
                    [e, new cl, new ps]
                ]
            }
        }
        find(r) {
            let i = this.factories.find(o => o.supports(r));
            if (i != null) return i;
            throw new S(901, !1)
        }
    };
    e.\u0275prov = x({
        token: e,
        providedIn: "root",
        factory: Xf
    });
    let t = e;
    return t
})();

function ep() {
    return new eu([new il])
}
var eu = (() => {
    let e = class e {
        constructor(r) {
            this.factories = r
        }
        static create(r, i) {
            if (i) {
                let o = i.factories.slice();
                r = r.concat(o)
            }
            return new e(r)
        }
        static extend(r) {
            return {
                provide: e,
                useFactory: i => e.create(r, i || ep()),
                deps: [
                    [e, new cl, new ps]
                ]
            }
        }
        find(r) {
            let i = this.factories.find(o => o.supports(r));
            if (i) return i;
            throw new S(901, !1)
        }
    };
    e.\u0275prov = x({
        token: e,
        providedIn: "root",
        factory: ep
    });
    let t = e;
    return t
})();

function _g(t) {
    try {
        let {
            rootComponent: e,
            appProviders: n,
            platformProviders: r
        } = t, i = Kw(r), o = [zw(), ...n || []], a = new ss({
            providers: o,
            parent: i,
            debugName: "",
            runEnvironmentInitializers: !1
        }).injector, c = a.get(ue);
        return c.run(() => {
            a.resolveInjectorInitializers();
            let l = a.get(en, null),
                u;
            c.runOutsideAngular(() => {
                u = c.onError.subscribe({
                    next: p => {
                        l.handleError(p)
                    }
                })
            });
            let d = () => a.destroy(),
                f = i.get(Ig);
            return f.add(d), a.onDestroy(() => {
                u.unsubscribe(), f.delete(d)
            }), Vw(l, c, () => {
                let p = a.get(Eg);
                return p.runInitializers(), p.donePromise.then(() => {
                    let m = a.get(Jl, cs);
                    Iw(m || cs);
                    let E = a.get(Br);
                    return e !== void 0 && E.bootstrap(e), E
                })
            })
        })
    } catch (e) {
        return Promise.reject(e)
    }
}

function fe(t) {
    return typeof t == "boolean" ? t : t != null && t !== "false"
}

function Si(t, e = NaN) {
    return !isNaN(parseFloat(t)) && !isNaN(Number(t)) ? Number(t) : e
}
var Og = null;

function dn() {
    return Og
}

function Ng(t) {
    Og ??= t
}
var Ls = class {};
var Ce = new A(""),
    Rg = (() => {
        let e = class e {
            historyGo(r) {
                throw new Error("")
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: () => D(tE),
            providedIn: "platform"
        });
        let t = e;
        return t
    })();
var tE = (() => {
    let e = class e extends Rg {
        constructor() {
            super(), this._doc = D(Ce), this._location = window.location, this._history = window.history
        }
        getBaseHrefFromDOM() {
            return dn().getBaseHref(this._doc)
        }
        onPopState(r) {
            let i = dn().getGlobalEventTarget(this._doc, "window");
            return i.addEventListener("popstate", r, !1), () => i.removeEventListener("popstate", r)
        }
        onHashChange(r) {
            let i = dn().getGlobalEventTarget(this._doc, "window");
            return i.addEventListener("hashchange", r, !1), () => i.removeEventListener("hashchange", r)
        }
        get href() {
            return this._location.href
        }
        get protocol() {
            return this._location.protocol
        }
        get hostname() {
            return this._location.hostname
        }
        get port() {
            return this._location.port
        }
        get pathname() {
            return this._location.pathname
        }
        get search() {
            return this._location.search
        }
        get hash() {
            return this._location.hash
        }
        set pathname(r) {
            this._location.pathname = r
        }
        pushState(r, i, o) {
            this._history.pushState(r, i, o)
        }
        replaceState(r, i, o) {
            this._history.replaceState(r, i, o)
        }
        forward() {
            this._history.forward()
        }
        back() {
            this._history.back()
        }
        historyGo(r = 0) {
            this._history.go(r)
        }
        getState() {
            return this._history.state
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275prov = x({
        token: e,
        factory: () => new e,
        providedIn: "platform"
    });
    let t = e;
    return t
})();

function Pg(t, e) {
    if (t.length == 0) return e;
    if (e.length == 0) return t;
    let n = 0;
    return t.endsWith("/") && n++, e.startsWith("/") && n++, n == 2 ? t + e.substring(1) : n == 1 ? t + e : t + "/" + e
}

function Mg(t) {
    let e = t.match(/#|\?|$/),
        n = e && e.index || t.length,
        r = n - (t[n - 1] === "/" ? 1 : 0);
    return t.slice(0, r) + t.slice(n)
}

function or(t) {
    return t && t[0] !== "?" ? "?" + t : t
}
var Vs = (() => {
        let e = class e {
            historyGo(r) {
                throw new Error("")
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: () => D(Fg),
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    nE = new A(""),
    Fg = (() => {
        let e = class e extends Vs {
            constructor(r, i) {
                super(), this._platformLocation = r, this._removeListenerFns = [], this._baseHref = i ?? this._platformLocation.getBaseHrefFromDOM() ?? D(Ce).location?.origin ?? ""
            }
            ngOnDestroy() {
                for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
            }
            onPopState(r) {
                this._removeListenerFns.push(this._platformLocation.onPopState(r), this._platformLocation.onHashChange(r))
            }
            getBaseHref() {
                return this._baseHref
            }
            prepareExternalUrl(r) {
                return Pg(this._baseHref, r)
            }
            path(r = !1) {
                let i = this._platformLocation.pathname + or(this._platformLocation.search),
                    o = this._platformLocation.hash;
                return o && r ? `${i}${o}` : i
            }
            pushState(r, i, o, s) {
                let a = this.prepareExternalUrl(o + or(s));
                this._platformLocation.pushState(r, i, a)
            }
            replaceState(r, i, o, s) {
                let a = this.prepareExternalUrl(o + or(s));
                this._platformLocation.replaceState(r, i, a)
            }
            forward() {
                this._platformLocation.forward()
            }
            back() {
                this._platformLocation.back()
            }
            getState() {
                return this._platformLocation.getState()
            }
            historyGo(r = 0) {
                this._platformLocation.historyGo?.(r)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L(Rg), L(nE, 8))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })();
var xi = (() => {
    let e = class e {
        constructor(r) {
            this._subject = new ge, this._urlChangeListeners = [], this._urlChangeSubscription = null, this._locationStrategy = r;
            let i = this._locationStrategy.getBaseHref();
            this._basePath = oE(Mg(Sg(i))), this._locationStrategy.onPopState(o => {
                this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: o.state,
                    type: o.type
                })
            })
        }
        ngOnDestroy() {
            this._urlChangeSubscription?.unsubscribe(), this._urlChangeListeners = []
        }
        path(r = !1) {
            return this.normalize(this._locationStrategy.path(r))
        }
        getState() {
            return this._locationStrategy.getState()
        }
        isCurrentPathEqualTo(r, i = "") {
            return this.path() == this.normalize(r + or(i))
        }
        normalize(r) {
            return e.stripTrailingSlash(iE(this._basePath, Sg(r)))
        }
        prepareExternalUrl(r) {
            return r && r[0] !== "/" && (r = "/" + r), this._locationStrategy.prepareExternalUrl(r)
        }
        go(r, i = "", o = null) {
            this._locationStrategy.pushState(o, "", r, i), this._notifyUrlChangeListeners(this.prepareExternalUrl(r + or(i)), o)
        }
        replaceState(r, i = "", o = null) {
            this._locationStrategy.replaceState(o, "", r, i), this._notifyUrlChangeListeners(this.prepareExternalUrl(r + or(i)), o)
        }
        forward() {
            this._locationStrategy.forward()
        }
        back() {
            this._locationStrategy.back()
        }
        historyGo(r = 0) {
            this._locationStrategy.historyGo?.(r)
        }
        onUrlChange(r) {
            return this._urlChangeListeners.push(r), this._urlChangeSubscription ??= this.subscribe(i => {
                this._notifyUrlChangeListeners(i.url, i.state)
            }), () => {
                let i = this._urlChangeListeners.indexOf(r);
                this._urlChangeListeners.splice(i, 1), this._urlChangeListeners.length === 0 && (this._urlChangeSubscription?.unsubscribe(), this._urlChangeSubscription = null)
            }
        }
        _notifyUrlChangeListeners(r = "", i) {
            this._urlChangeListeners.forEach(o => o(r, i))
        }
        subscribe(r, i, o) {
            return this._subject.subscribe({
                next: r,
                error: i,
                complete: o
            })
        }
    };
    e.normalizeQueryParams = or, e.joinWithSlash = Pg, e.stripTrailingSlash = Mg, e.\u0275fac = function(i) {
        return new(i || e)(L(Vs))
    }, e.\u0275prov = x({
        token: e,
        factory: () => rE(),
        providedIn: "root"
    });
    let t = e;
    return t
})();

function rE() {
    return new xi(L(Vs))
}

function iE(t, e) {
    if (!t || !e.startsWith(t)) return e;
    let n = e.substring(t.length);
    return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : e
}

function Sg(t) {
    return t.replace(/\/index.html$/, "")
}

function oE(t) {
    if (new RegExp("^(https?:)?//").test(t)) {
        let [, n] = t.split(/\/\/[^\/]+/);
        return n
    }
    return t
}

function js(t, e) {
    e = encodeURIComponent(e);
    for (let n of t.split(";")) {
        let r = n.indexOf("="),
            [i, o] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
        if (i.trim() === e) return decodeURIComponent(o)
    }
    return null
}
var tu = /\s+/,
    xg = [],
    zt = (() => {
        let e = class e {
            constructor(r, i) {
                this._ngEl = r, this._renderer = i, this.initialClasses = xg, this.stateMap = new Map
            }
            set klass(r) {
                this.initialClasses = r != null ? r.trim().split(tu) : xg
            }
            set ngClass(r) {
                this.rawClass = typeof r == "string" ? r.trim().split(tu) : r
            }
            ngDoCheck() {
                for (let i of this.initialClasses) this._updateState(i, !0);
                let r = this.rawClass;
                if (Array.isArray(r) || r instanceof Set)
                    for (let i of r) this._updateState(i, !0);
                else if (r != null)
                    for (let i of Object.keys(r)) this._updateState(i, !!r[i]);
                this._applyStateDiff()
            }
            _updateState(r, i) {
                let o = this.stateMap.get(r);
                o !== void 0 ? (o.enabled !== i && (o.changed = !0, o.enabled = i), o.touched = !0) : this.stateMap.set(r, {
                    enabled: i,
                    changed: !0,
                    touched: !0
                })
            }
            _applyStateDiff() {
                for (let r of this.stateMap) {
                    let i = r[0],
                        o = r[1];
                    o.changed ? (this._toggleClass(i, o.enabled), o.changed = !1) : o.touched || (o.enabled && this._toggleClass(i, !1), this.stateMap.delete(i)), o.touched = !1
                }
            }
            _toggleClass(r, i) {
                r = r.trim(), r.length > 0 && r.split(tu).forEach(o => {
                    i ? this._renderer.addClass(this._ngEl.nativeElement, o) : this._renderer.removeClass(this._ngEl.nativeElement, o)
                })
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(_e), _(Je))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "ngClass", ""]
            ],
            inputs: {
                klass: [Y.None, "class", "klass"],
                ngClass: "ngClass"
            },
            standalone: !0
        });
        let t = e;
        return t
    })();
var nu = class {
        constructor(e, n, r, i) {
            this.$implicit = e, this.ngForOf = n, this.index = r, this.count = i
        }
        get first() {
            return this.index === 0
        }
        get last() {
            return this.index === this.count - 1
        }
        get even() {
            return this.index % 2 === 0
        }
        get odd() {
            return !this.even
        }
    },
    Hr = (() => {
        let e = class e {
            set ngForOf(r) {
                this._ngForOf = r, this._ngForOfDirty = !0
            }
            set ngForTrackBy(r) {
                this._trackByFn = r
            }
            get ngForTrackBy() {
                return this._trackByFn
            }
            constructor(r, i, o) {
                this._viewContainer = r, this._template = i, this._differs = o, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
            }
            set ngForTemplate(r) {
                r && (this._template = r)
            }
            ngDoCheck() {
                if (this._ngForOfDirty) {
                    this._ngForOfDirty = !1;
                    let r = this._ngForOf;
                    if (!this._differ && r)
                        if (0) try {} catch {} else this._differ = this._differs.find(r).create(this.ngForTrackBy)
                }
                if (this._differ) {
                    let r = this._differ.diff(this._ngForOf);
                    r && this._applyChanges(r)
                }
            }
            _applyChanges(r) {
                let i = this._viewContainer;
                r.forEachOperation((o, s, a) => {
                    if (o.previousIndex == null) i.createEmbeddedView(this._template, new nu(o.item, this._ngForOf, -1, -1), a === null ? void 0 : a);
                    else if (a == null) i.remove(s === null ? void 0 : s);
                    else if (s !== null) {
                        let c = i.get(s);
                        i.move(c, a), Tg(c, o)
                    }
                });
                for (let o = 0, s = i.length; o < s; o++) {
                    let c = i.get(o).context;
                    c.index = o, c.count = s, c.ngForOf = this._ngForOf
                }
                r.forEachIdentityChange(o => {
                    let s = i.get(o.currentIndex);
                    Tg(s, o)
                })
            }
            static ngTemplateContextGuard(r, i) {
                return !0
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(ln), _(tn), _(Xl))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "ngFor", "", "ngForOf", ""]
            ],
            inputs: {
                ngForOf: "ngForOf",
                ngForTrackBy: "ngForTrackBy",
                ngForTemplate: "ngForTemplate"
            },
            standalone: !0
        });
        let t = e;
        return t
    })();

function Tg(t, e) {
    t.context.$implicit = e.item
}
var On = (() => {
        let e = class e {
            constructor(r, i) {
                this._viewContainer = r, this._context = new ru, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = i
            }
            set ngIf(r) {
                this._context.$implicit = this._context.ngIf = r, this._updateView()
            }
            set ngIfThen(r) {
                Ag("ngIfThen", r), this._thenTemplateRef = r, this._thenViewRef = null, this._updateView()
            }
            set ngIfElse(r) {
                Ag("ngIfElse", r), this._elseTemplateRef = r, this._elseViewRef = null, this._updateView()
            }
            _updateView() {
                this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }
            static ngTemplateContextGuard(r, i) {
                return !0
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(ln), _(tn))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "ngIf", ""]
            ],
            inputs: {
                ngIf: "ngIf",
                ngIfThen: "ngIfThen",
                ngIfElse: "ngIfElse"
            },
            standalone: !0
        });
        let t = e;
        return t
    })(),
    ru = class {
        constructor() {
            this.$implicit = null, this.ngIf = null
        }
    };

function Ag(t, e) {
    if (!!!(!e || e.createEmbeddedView)) throw new Error(`${t} must be a TemplateRef, but received '${We(e)}'.`)
}
var Us = (() => {
        let e = class e {
            constructor(r, i, o) {
                this._ngEl = r, this._differs = i, this._renderer = o, this._ngStyle = null, this._differ = null
            }
            set ngStyle(r) {
                this._ngStyle = r, !this._differ && r && (this._differ = this._differs.find(r).create())
            }
            ngDoCheck() {
                if (this._differ) {
                    let r = this._differ.diff(this._ngStyle);
                    r && this._applyChanges(r)
                }
            }
            _setStyle(r, i) {
                let [o, s] = r.split("."), a = o.indexOf("-") === -1 ? void 0 : Lt.DashCase;
                i != null ? this._renderer.setStyle(this._ngEl.nativeElement, o, s ? `${i}${s}` : i, a) : this._renderer.removeStyle(this._ngEl.nativeElement, o, a)
            }
            _applyChanges(r) {
                r.forEachRemovedItem(i => this._setStyle(i.key, null)), r.forEachAddedItem(i => this._setStyle(i.key, i.currentValue)), r.forEachChangedItem(i => this._setStyle(i.key, i.currentValue))
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(_e), _(eu), _(Je))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "ngStyle", ""]
            ],
            inputs: {
                ngStyle: "ngStyle"
            },
            standalone: !0
        });
        let t = e;
        return t
    })(),
    Bs = (() => {
        let e = class e {
            constructor(r) {
                this._viewContainerRef = r, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null, this.ngTemplateOutletInjector = null
            }
            ngOnChanges(r) {
                if (this._shouldRecreateView(r)) {
                    let i = this._viewContainerRef;
                    if (this._viewRef && i.remove(i.indexOf(this._viewRef)), !this.ngTemplateOutlet) {
                        this._viewRef = null;
                        return
                    }
                    let o = this._createContextForwardProxy();
                    this._viewRef = i.createEmbeddedView(this.ngTemplateOutlet, o, {
                        injector: this.ngTemplateOutletInjector ?? void 0
                    })
                }
            }
            _shouldRecreateView(r) {
                return !!r.ngTemplateOutlet || !!r.ngTemplateOutletInjector
            }
            _createContextForwardProxy() {
                return new Proxy({}, {
                    set: (r, i, o) => this.ngTemplateOutletContext ? Reflect.set(this.ngTemplateOutletContext, i, o) : !1,
                    get: (r, i, o) => {
                        if (this.ngTemplateOutletContext) return Reflect.get(this.ngTemplateOutletContext, i, o)
                    }
                })
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(ln))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "ngTemplateOutlet", ""]
            ],
            inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector"
            },
            standalone: !0,
            features: [jt]
        });
        let t = e;
        return t
    })();
var Nn = (() => {
        let e = class e {};
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275mod = Ee({
            type: e
        }), e.\u0275inj = we({});
        let t = e;
        return t
    })(),
    ou = "browser",
    sE = "server";

function Wt(t) {
    return t === ou
}

function $s(t) {
    return t === sE
}
var $r = class {};
var Ai = class {},
    zs = class {},
    fn = class t {
        constructor(e) {
            this.normalizedNames = new Map, this.lazyUpdate = null, e ? typeof e == "string" ? this.lazyInit = () => {
                this.headers = new Map, e.split(`
`).forEach(n => {
                    let r = n.indexOf(":");
                    if (r > 0) {
                        let i = n.slice(0, r),
                            o = i.toLowerCase(),
                            s = n.slice(r + 1).trim();
                        this.maybeSetNormalizedName(i, o), this.headers.has(o) ? this.headers.get(o).push(s) : this.headers.set(o, [s])
                    }
                })
            } : typeof Headers < "u" && e instanceof Headers ? (this.headers = new Map, e.forEach((n, r) => {
                this.setHeaderEntries(r, n)
            })) : this.lazyInit = () => {
                this.headers = new Map, Object.entries(e).forEach(([n, r]) => {
                    this.setHeaderEntries(n, r)
                })
            } : this.headers = new Map
        }
        has(e) {
            return this.init(), this.headers.has(e.toLowerCase())
        }
        get(e) {
            this.init();
            let n = this.headers.get(e.toLowerCase());
            return n && n.length > 0 ? n[0] : null
        }
        keys() {
            return this.init(), Array.from(this.normalizedNames.values())
        }
        getAll(e) {
            return this.init(), this.headers.get(e.toLowerCase()) || null
        }
        append(e, n) {
            return this.clone({
                name: e,
                value: n,
                op: "a"
            })
        }
        set(e, n) {
            return this.clone({
                name: e,
                value: n,
                op: "s"
            })
        }
        delete(e, n) {
            return this.clone({
                name: e,
                value: n,
                op: "d"
            })
        }
        maybeSetNormalizedName(e, n) {
            this.normalizedNames.has(n) || this.normalizedNames.set(n, e)
        }
        init() {
            this.lazyInit && (this.lazyInit instanceof t ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(e => this.applyUpdate(e)), this.lazyUpdate = null))
        }
        copyFrom(e) {
            e.init(), Array.from(e.headers.keys()).forEach(n => {
                this.headers.set(n, e.headers.get(n)), this.normalizedNames.set(n, e.normalizedNames.get(n))
            })
        }
        clone(e) {
            let n = new t;
            return n.lazyInit = this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this, n.lazyUpdate = (this.lazyUpdate || []).concat([e]), n
        }
        applyUpdate(e) {
            let n = e.name.toLowerCase();
            switch (e.op) {
                case "a":
                case "s":
                    let r = e.value;
                    if (typeof r == "string" && (r = [r]), r.length === 0) return;
                    this.maybeSetNormalizedName(e.name, n);
                    let i = (e.op === "a" ? this.headers.get(n) : void 0) || [];
                    i.push(...r), this.headers.set(n, i);
                    break;
                case "d":
                    let o = e.value;
                    if (!o) this.headers.delete(n), this.normalizedNames.delete(n);
                    else {
                        let s = this.headers.get(n);
                        if (!s) return;
                        s = s.filter(a => o.indexOf(a) === -1), s.length === 0 ? (this.headers.delete(n), this.normalizedNames.delete(n)) : this.headers.set(n, s)
                    }
                    break
            }
        }
        setHeaderEntries(e, n) {
            let r = (Array.isArray(n) ? n : [n]).map(o => o.toString()),
                i = e.toLowerCase();
            this.headers.set(i, r), this.maybeSetNormalizedName(e, i)
        }
        forEach(e) {
            this.init(), Array.from(this.normalizedNames.keys()).forEach(n => e(this.normalizedNames.get(n), this.headers.get(n)))
        }
    };
var cu = class {
    encodeKey(e) {
        return kg(e)
    }
    encodeValue(e) {
        return kg(e)
    }
    decodeKey(e) {
        return decodeURIComponent(e)
    }
    decodeValue(e) {
        return decodeURIComponent(e)
    }
};

function lE(t, e) {
    let n = new Map;
    return t.length > 0 && t.replace(/^\?/, "").split("&").forEach(i => {
        let o = i.indexOf("="),
            [s, a] = o == -1 ? [e.decodeKey(i), ""] : [e.decodeKey(i.slice(0, o)), e.decodeValue(i.slice(o + 1))],
            c = n.get(s) || [];
        c.push(a), n.set(s, c)
    }), n
}
var uE = /%(\d[a-f0-9])/gi,
    dE = {
        40: "@",
        "3A": ":",
        24: "$",
        "2C": ",",
        "3B": ";",
        "3D": "=",
        "3F": "?",
        "2F": "/"
    };

function kg(t) {
    return encodeURIComponent(t).replace(uE, (e, n) => dE[n] ?? e)
}

function Hs(t) {
    return `${t}`
}
var Rn = class t {
    constructor(e = {}) {
        if (this.updates = null, this.cloneFrom = null, this.encoder = e.encoder || new cu, e.fromString) {
            if (e.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
            this.map = lE(e.fromString, this.encoder)
        } else e.fromObject ? (this.map = new Map, Object.keys(e.fromObject).forEach(n => {
            let r = e.fromObject[n],
                i = Array.isArray(r) ? r.map(Hs) : [Hs(r)];
            this.map.set(n, i)
        })) : this.map = null
    }
    has(e) {
        return this.init(), this.map.has(e)
    }
    get(e) {
        this.init();
        let n = this.map.get(e);
        return n ? n[0] : null
    }
    getAll(e) {
        return this.init(), this.map.get(e) || null
    }
    keys() {
        return this.init(), Array.from(this.map.keys())
    }
    append(e, n) {
        return this.clone({
            param: e,
            value: n,
            op: "a"
        })
    }
    appendAll(e) {
        let n = [];
        return Object.keys(e).forEach(r => {
            let i = e[r];
            Array.isArray(i) ? i.forEach(o => {
                n.push({
                    param: r,
                    value: o,
                    op: "a"
                })
            }) : n.push({
                param: r,
                value: i,
                op: "a"
            })
        }), this.clone(n)
    }
    set(e, n) {
        return this.clone({
            param: e,
            value: n,
            op: "s"
        })
    }
    delete(e, n) {
        return this.clone({
            param: e,
            value: n,
            op: "d"
        })
    }
    toString() {
        return this.init(), this.keys().map(e => {
            let n = this.encoder.encodeKey(e);
            return this.map.get(e).map(r => n + "=" + this.encoder.encodeValue(r)).join("&")
        }).filter(e => e !== "").join("&")
    }
    clone(e) {
        let n = new t({
            encoder: this.encoder
        });
        return n.cloneFrom = this.cloneFrom || this, n.updates = (this.updates || []).concat(e), n
    }
    init() {
        this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(e => this.map.set(e, this.cloneFrom.map.get(e))), this.updates.forEach(e => {
            switch (e.op) {
                case "a":
                case "s":
                    let n = (e.op === "a" ? this.map.get(e.param) : void 0) || [];
                    n.push(Hs(e.value)), this.map.set(e.param, n);
                    break;
                case "d":
                    if (e.value !== void 0) {
                        let r = this.map.get(e.param) || [],
                            i = r.indexOf(Hs(e.value));
                        i !== -1 && r.splice(i, 1), r.length > 0 ? this.map.set(e.param, r) : this.map.delete(e.param)
                    } else {
                        this.map.delete(e.param);
                        break
                    }
            }
        }), this.cloneFrom = this.updates = null)
    }
};
var lu = class {
    constructor() {
        this.map = new Map
    }
    set(e, n) {
        return this.map.set(e, n), this
    }
    get(e) {
        return this.map.has(e) || this.map.set(e, e.defaultValue()), this.map.get(e)
    }
    delete(e) {
        return this.map.delete(e), this
    }
    has(e) {
        return this.map.has(e)
    }
    keys() {
        return this.map.keys()
    }
};

function fE(t) {
    switch (t) {
        case "DELETE":
        case "GET":
        case "HEAD":
        case "OPTIONS":
        case "JSONP":
            return !1;
        default:
            return !0
    }
}

function Lg(t) {
    return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer
}

function Vg(t) {
    return typeof Blob < "u" && t instanceof Blob
}

function jg(t) {
    return typeof FormData < "u" && t instanceof FormData
}

function pE(t) {
    return typeof URLSearchParams < "u" && t instanceof URLSearchParams
}
var Ti = class t {
        constructor(e, n, r, i) {
            this.url = n, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = e.toUpperCase();
            let o;
            if (fE(this.method) || i ? (this.body = r !== void 0 ? r : null, o = i) : o = r, o && (this.reportProgress = !!o.reportProgress, this.withCredentials = !!o.withCredentials, o.responseType && (this.responseType = o.responseType), o.headers && (this.headers = o.headers), o.context && (this.context = o.context), o.params && (this.params = o.params), this.transferCache = o.transferCache), this.headers ??= new fn, this.context ??= new lu, !this.params) this.params = new Rn, this.urlWithParams = n;
            else {
                let s = this.params.toString();
                if (s.length === 0) this.urlWithParams = n;
                else {
                    let a = n.indexOf("?"),
                        c = a === -1 ? "?" : a < n.length - 1 ? "&" : "";
                    this.urlWithParams = n + c + s
                }
            }
        }
        serializeBody() {
            return this.body === null ? null : typeof this.body == "string" || Lg(this.body) || Vg(this.body) || jg(this.body) || pE(this.body) ? this.body : this.body instanceof Rn ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
        }
        detectContentTypeHeader() {
            return this.body === null || jg(this.body) ? null : Vg(this.body) ? this.body.type || null : Lg(this.body) ? null : typeof this.body == "string" ? "text/plain" : this.body instanceof Rn ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? "application/json" : null
        }
        clone(e = {}) {
            let n = e.method || this.method,
                r = e.url || this.url,
                i = e.responseType || this.responseType,
                o = e.transferCache ?? this.transferCache,
                s = e.body !== void 0 ? e.body : this.body,
                a = e.withCredentials ?? this.withCredentials,
                c = e.reportProgress ?? this.reportProgress,
                l = e.headers || this.headers,
                u = e.params || this.params,
                d = e.context ?? this.context;
            return e.setHeaders !== void 0 && (l = Object.keys(e.setHeaders).reduce((f, p) => f.set(p, e.setHeaders[p]), l)), e.setParams && (u = Object.keys(e.setParams).reduce((f, p) => f.set(p, e.setParams[p]), u)), new t(n, r, s, {
                params: u,
                headers: l,
                context: d,
                reportProgress: c,
                responseType: i,
                withCredentials: a,
                transferCache: o
            })
        }
    },
    zr = function(t) {
        return t[t.Sent = 0] = "Sent", t[t.UploadProgress = 1] = "UploadProgress", t[t.ResponseHeader = 2] = "ResponseHeader", t[t.DownloadProgress = 3] = "DownloadProgress", t[t.Response = 4] = "Response", t[t.User = 5] = "User", t
    }(zr || {}),
    Oi = class {
        constructor(e, n = qs.Ok, r = "OK") {
            this.headers = e.headers || new fn, this.status = e.status !== void 0 ? e.status : n, this.statusText = e.statusText || r, this.url = e.url || null, this.ok = this.status >= 200 && this.status < 300
        }
    },
    uu = class t extends Oi {
        constructor(e = {}) {
            super(e), this.type = zr.ResponseHeader
        }
        clone(e = {}) {
            return new t({
                headers: e.headers || this.headers,
                status: e.status !== void 0 ? e.status : this.status,
                statusText: e.statusText || this.statusText,
                url: e.url || this.url || void 0
            })
        }
    },
    Ws = class t extends Oi {
        constructor(e = {}) {
            super(e), this.type = zr.Response, this.body = e.body !== void 0 ? e.body : null
        }
        clone(e = {}) {
            return new t({
                body: e.body !== void 0 ? e.body : this.body,
                headers: e.headers || this.headers,
                status: e.status !== void 0 ? e.status : this.status,
                statusText: e.statusText || this.statusText,
                url: e.url || this.url || void 0
            })
        }
    },
    Gs = class extends Oi {
        constructor(e) {
            super(e, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${e.url||"(unknown url)"}` : this.message = `Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`, this.error = e.error || null
        }
    },
    qs = function(t) {
        return t[t.Continue = 100] = "Continue", t[t.SwitchingProtocols = 101] = "SwitchingProtocols", t[t.Processing = 102] = "Processing", t[t.EarlyHints = 103] = "EarlyHints", t[t.Ok = 200] = "Ok", t[t.Created = 201] = "Created", t[t.Accepted = 202] = "Accepted", t[t.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", t[t.NoContent = 204] = "NoContent", t[t.ResetContent = 205] = "ResetContent", t[t.PartialContent = 206] = "PartialContent", t[t.MultiStatus = 207] = "MultiStatus", t[t.AlreadyReported = 208] = "AlreadyReported", t[t.ImUsed = 226] = "ImUsed", t[t.MultipleChoices = 300] = "MultipleChoices", t[t.MovedPermanently = 301] = "MovedPermanently", t[t.Found = 302] = "Found", t[t.SeeOther = 303] = "SeeOther", t[t.NotModified = 304] = "NotModified", t[t.UseProxy = 305] = "UseProxy", t[t.Unused = 306] = "Unused", t[t.TemporaryRedirect = 307] = "TemporaryRedirect", t[t.PermanentRedirect = 308] = "PermanentRedirect", t[t.BadRequest = 400] = "BadRequest", t[t.Unauthorized = 401] = "Unauthorized", t[t.PaymentRequired = 402] = "PaymentRequired", t[t.Forbidden = 403] = "Forbidden", t[t.NotFound = 404] = "NotFound", t[t.MethodNotAllowed = 405] = "MethodNotAllowed", t[t.NotAcceptable = 406] = "NotAcceptable", t[t.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", t[t.RequestTimeout = 408] = "RequestTimeout", t[t.Conflict = 409] = "Conflict", t[t.Gone = 410] = "Gone", t[t.LengthRequired = 411] = "LengthRequired", t[t.PreconditionFailed = 412] = "PreconditionFailed", t[t.PayloadTooLarge = 413] = "PayloadTooLarge", t[t.UriTooLong = 414] = "UriTooLong", t[t.UnsupportedMediaType = 415] = "UnsupportedMediaType", t[t.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", t[t.ExpectationFailed = 417] = "ExpectationFailed", t[t.ImATeapot = 418] = "ImATeapot", t[t.MisdirectedRequest = 421] = "MisdirectedRequest", t[t.UnprocessableEntity = 422] = "UnprocessableEntity", t[t.Locked = 423] = "Locked", t[t.FailedDependency = 424] = "FailedDependency", t[t.TooEarly = 425] = "TooEarly", t[t.UpgradeRequired = 426] = "UpgradeRequired", t[t.PreconditionRequired = 428] = "PreconditionRequired", t[t.TooManyRequests = 429] = "TooManyRequests", t[t.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", t[t.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", t[t.InternalServerError = 500] = "InternalServerError", t[t.NotImplemented = 501] = "NotImplemented", t[t.BadGateway = 502] = "BadGateway", t[t.ServiceUnavailable = 503] = "ServiceUnavailable", t[t.GatewayTimeout = 504] = "GatewayTimeout", t[t.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", t[t.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", t[t.InsufficientStorage = 507] = "InsufficientStorage", t[t.LoopDetected = 508] = "LoopDetected", t[t.NotExtended = 510] = "NotExtended", t[t.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", t
    }(qs || {});

function au(t, e) {
    return {
        body: e,
        headers: t.headers,
        context: t.context,
        observe: t.observe,
        params: t.params,
        reportProgress: t.reportProgress,
        responseType: t.responseType,
        withCredentials: t.withCredentials,
        transferCache: t.transferCache
    }
}
var du = (() => {
    let e = class e {
        constructor(r) {
            this.handler = r
        }
        request(r, i, o = {}) {
            let s;
            if (r instanceof Ti) s = r;
            else {
                let l;
                o.headers instanceof fn ? l = o.headers : l = new fn(o.headers);
                let u;
                o.params && (o.params instanceof Rn ? u = o.params : u = new Rn({
                    fromObject: o.params
                })), s = new Ti(r, i, o.body !== void 0 ? o.body : null, {
                    headers: l,
                    context: o.context,
                    params: u,
                    reportProgress: o.reportProgress,
                    responseType: o.responseType || "json",
                    withCredentials: o.withCredentials,
                    transferCache: o.transferCache
                })
            }
            let a = N(s).pipe(Cn(l => this.handler.handle(l)));
            if (r instanceof Ti || o.observe === "events") return a;
            let c = a.pipe(nt(l => l instanceof Ws));
            switch (o.observe || "body") {
                case "body":
                    switch (s.responseType) {
                        case "arraybuffer":
                            return c.pipe(V(l => {
                                if (l.body !== null && !(l.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                return l.body
                            }));
                        case "blob":
                            return c.pipe(V(l => {
                                if (l.body !== null && !(l.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                return l.body
                            }));
                        case "text":
                            return c.pipe(V(l => {
                                if (l.body !== null && typeof l.body != "string") throw new Error("Response is not a string.");
                                return l.body
                            }));
                        case "json":
                        default:
                            return c.pipe(V(l => l.body))
                    }
                case "response":
                    return c;
                default:
                    throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)
            }
        }
        delete(r, i = {}) {
            return this.request("DELETE", r, i)
        }
        get(r, i = {}) {
            return this.request("GET", r, i)
        }
        head(r, i = {}) {
            return this.request("HEAD", r, i)
        }
        jsonp(r, i) {
            return this.request("JSONP", r, {
                params: new Rn().append(i, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
            })
        }
        options(r, i = {}) {
            return this.request("OPTIONS", r, i)
        }
        patch(r, i, o = {}) {
            return this.request("PATCH", r, au(o, i))
        }
        post(r, i, o = {}) {
            return this.request("POST", r, au(o, i))
        }
        put(r, i, o = {}) {
            return this.request("PUT", r, au(o, i))
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)(L(Ai))
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac
    });
    let t = e;
    return t
})();

function Hg(t, e) {
    return e(t)
}

function hE(t, e) {
    return (n, r) => e.intercept(n, {
        handle: i => t(i, r)
    })
}

function gE(t, e, n) {
    return (r, i) => rn(n, () => e(r, o => t(o, i)))
}
var mE = new A(""),
    fu = new A(""),
    yE = new A(""),
    vE = new A("");

function CE() {
    let t = null;
    return (e, n) => {
        t === null && (t = (D(mE, {
            optional: !0
        }) ?? []).reduceRight(hE, Hg));
        let r = D(nr),
            i = r.add();
        return t(e, n).pipe(bn(() => r.remove(i)))
    }
}
var Ug = (() => {
    let e = class e extends Ai {
        constructor(r, i) {
            super(), this.backend = r, this.injector = i, this.chain = null, this.pendingTasks = D(nr);
            let o = D(vE, {
                optional: !0
            });
            this.backend = o ?? r
        }
        handle(r) {
            if (this.chain === null) {
                let o = Array.from(new Set([...this.injector.get(fu), ...this.injector.get(yE, [])]));
                this.chain = o.reduceRight((s, a) => gE(s, a, this.injector), Hg)
            }
            let i = this.pendingTasks.add();
            return this.chain(r, o => this.backend.handle(o)).pipe(bn(() => this.pendingTasks.remove(i)))
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)(L(zs), L(Qe))
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac
    });
    let t = e;
    return t
})();
var DE = /^\)\]\}',?\n/;

function bE(t) {
    return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
}
var Bg = (() => {
        let e = class e {
            constructor(r) {
                this.xhrFactory = r
            }
            handle(r) {
                if (r.method === "JSONP") throw new S(-2800, !1);
                let i = this.xhrFactory;
                return (i.\u0275loadImpl ? he(i.\u0275loadImpl()) : N(null)).pipe(rt(() => new X(s => {
                    let a = i.build();
                    if (a.open(r.method, r.urlWithParams), r.withCredentials && (a.withCredentials = !0), r.headers.forEach((M, I) => a.setRequestHeader(M, I.join(","))), r.headers.has("Accept") || a.setRequestHeader("Accept", "application/json, text/plain, */*"), !r.headers.has("Content-Type")) {
                        let M = r.detectContentTypeHeader();
                        M !== null && a.setRequestHeader("Content-Type", M)
                    }
                    if (r.responseType) {
                        let M = r.responseType.toLowerCase();
                        a.responseType = M !== "json" ? M : "text"
                    }
                    let c = r.serializeBody(),
                        l = null,
                        u = () => {
                            if (l !== null) return l;
                            let M = a.statusText || "OK",
                                I = new fn(a.getAllResponseHeaders()),
                                ae = bE(a) || r.url;
                            return l = new uu({
                                headers: I,
                                status: a.status,
                                statusText: M,
                                url: ae
                            }), l
                        },
                        d = () => {
                            let {
                                headers: M,
                                status: I,
                                statusText: ae,
                                url: de
                            } = u(), W = null;
                            I !== qs.NoContent && (W = typeof a.response > "u" ? a.responseText : a.response), I === 0 && (I = W ? qs.Ok : 0);
                            let Re = I >= 200 && I < 300;
                            if (r.responseType === "json" && typeof W == "string") {
                                let q = W;
                                W = W.replace(DE, "");
                                try {
                                    W = W !== "" ? JSON.parse(W) : null
                                } catch (De) {
                                    W = q, Re && (Re = !1, W = {
                                        error: De,
                                        text: W
                                    })
                                }
                            }
                            Re ? (s.next(new Ws({
                                body: W,
                                headers: M,
                                status: I,
                                statusText: ae,
                                url: de || void 0
                            })), s.complete()) : s.error(new Gs({
                                error: W,
                                headers: M,
                                status: I,
                                statusText: ae,
                                url: de || void 0
                            }))
                        },
                        f = M => {
                            let {
                                url: I
                            } = u(), ae = new Gs({
                                error: M,
                                status: a.status || 0,
                                statusText: a.statusText || "Unknown Error",
                                url: I || void 0
                            });
                            s.error(ae)
                        },
                        p = !1,
                        m = M => {
                            p || (s.next(u()), p = !0);
                            let I = {
                                type: zr.DownloadProgress,
                                loaded: M.loaded
                            };
                            M.lengthComputable && (I.total = M.total), r.responseType === "text" && a.responseText && (I.partialText = a.responseText), s.next(I)
                        },
                        E = M => {
                            let I = {
                                type: zr.UploadProgress,
                                loaded: M.loaded
                            };
                            M.lengthComputable && (I.total = M.total), s.next(I)
                        };
                    return a.addEventListener("load", d), a.addEventListener("error", f), a.addEventListener("timeout", f), a.addEventListener("abort", f), r.reportProgress && (a.addEventListener("progress", m), c !== null && a.upload && a.upload.addEventListener("progress", E)), a.send(c), s.next({
                        type: zr.Sent
                    }), () => {
                        a.removeEventListener("error", f), a.removeEventListener("abort", f), a.removeEventListener("load", d), a.removeEventListener("timeout", f), r.reportProgress && (a.removeEventListener("progress", m), c !== null && a.upload && a.upload.removeEventListener("progress", E)), a.readyState !== a.DONE && a.abort()
                    }
                })))
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L($r))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })(),
    zg = new A(""),
    wE = "XSRF-TOKEN",
    EE = new A("", {
        providedIn: "root",
        factory: () => wE
    }),
    IE = "X-XSRF-TOKEN",
    _E = new A("", {
        providedIn: "root",
        factory: () => IE
    }),
    Ys = class {},
    ME = (() => {
        let e = class e {
            constructor(r, i, o) {
                this.doc = r, this.platform = i, this.cookieName = o, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
            }
            getToken() {
                if (this.platform === "server") return null;
                let r = this.doc.cookie || "";
                return r !== this.lastCookieString && (this.parseCount++, this.lastToken = js(r, this.cookieName), this.lastCookieString = r), this.lastToken
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L(Ce), L(Ze), L(EE))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })();

function SE(t, e) {
    let n = t.url.toLowerCase();
    if (!D(zg) || t.method === "GET" || t.method === "HEAD" || n.startsWith("http://") || n.startsWith("https://")) return e(t);
    let r = D(Ys).getToken(),
        i = D(_E);
    return r != null && !t.headers.has(i) && (t = t.clone({
        headers: t.headers.set(i, r)
    })), e(t)
}
var Wg = function(t) {
    return t[t.Interceptors = 0] = "Interceptors", t[t.LegacyInterceptors = 1] = "LegacyInterceptors", t[t.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", t[t.NoXsrfProtection = 3] = "NoXsrfProtection", t[t.JsonpSupport = 4] = "JsonpSupport", t[t.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", t[t.Fetch = 6] = "Fetch", t
}(Wg || {});

function xE(t, e) {
    return {
        \u0275kind: t,
        \u0275providers: e
    }
}

function TE(...t) {
    let e = [du, Bg, Ug, {
        provide: Ai,
        useExisting: Ug
    }, {
        provide: zs,
        useExisting: Bg
    }, {
        provide: fu,
        useValue: SE,
        multi: !0
    }, {
        provide: zg,
        useValue: !0
    }, {
        provide: Ys,
        useClass: ME
    }];
    for (let n of t) e.push(...n.\u0275providers);
    return Fr(e)
}
var $g = new A("");

function AE() {
    return xE(Wg.LegacyInterceptors, [{
        provide: $g,
        useFactory: CE
    }, {
        provide: fu,
        useExisting: $g,
        multi: !0
    }])
}
var Gg = (() => {
    let e = class e {};
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275mod = Ee({
        type: e
    }), e.\u0275inj = we({
        providers: [TE(AE())]
    });
    let t = e;
    return t
})();
var gu = class extends Ls {
        constructor() {
            super(...arguments), this.supportsDOMEvents = !0
        }
    },
    mu = class t extends gu {
        static makeCurrent() {
            Ng(new t)
        }
        onAndCancel(e, n, r) {
            return e.addEventListener(n, r), () => {
                e.removeEventListener(n, r)
            }
        }
        dispatchEvent(e, n) {
            e.dispatchEvent(n)
        }
        remove(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }
        createElement(e, n) {
            return n = n || this.getDefaultDocument(), n.createElement(e)
        }
        createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle")
        }
        getDefaultDocument() {
            return document
        }
        isElementNode(e) {
            return e.nodeType === Node.ELEMENT_NODE
        }
        isShadowRoot(e) {
            return e instanceof DocumentFragment
        }
        getGlobalEventTarget(e, n) {
            return n === "window" ? window : n === "document" ? e : n === "body" ? e.body : null
        }
        getBaseHref(e) {
            let n = NE();
            return n == null ? null : RE(n)
        }
        resetBaseElement() {
            Ni = null
        }
        getUserAgent() {
            return window.navigator.userAgent
        }
        getCookie(e) {
            return js(document.cookie, e)
        }
    },
    Ni = null;

function NE() {
    return Ni = Ni || document.querySelector("base"), Ni ? Ni.getAttribute("href") : null
}

function RE(t) {
    return new URL(t, document.baseURI).pathname
}
var PE = (() => {
        let e = class e {
            build() {
                return new XMLHttpRequest
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })(),
    yu = new A(""),
    Qg = (() => {
        let e = class e {
            constructor(r, i) {
                this._zone = i, this._eventNameToPlugin = new Map, r.forEach(o => {
                    o.manager = this
                }), this._plugins = r.slice().reverse()
            }
            addEventListener(r, i, o) {
                return this._findPluginFor(i).addEventListener(r, i, o)
            }
            getZone() {
                return this._zone
            }
            _findPluginFor(r) {
                let i = this._eventNameToPlugin.get(r);
                if (i) return i;
                if (i = this._plugins.find(s => s.supports(r)), !i) throw new S(5101, !1);
                return this._eventNameToPlugin.set(r, i), i
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L(yu), L(ue))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })(),
    Ks = class {
        constructor(e) {
            this._doc = e
        }
    },
    pu = "ng-app-id",
    Zg = (() => {
        let e = class e {
            constructor(r, i, o, s = {}) {
                this.doc = r, this.appId = i, this.nonce = o, this.platformId = s, this.styleRef = new Map, this.hostNodes = new Set, this.styleNodesInDOM = this.collectServerRenderedStyles(), this.platformIsServer = $s(s), this.resetHostNodes()
            }
            addStyles(r) {
                for (let i of r) this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i)
            }
            removeStyles(r) {
                for (let i of r) this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i)
            }
            ngOnDestroy() {
                let r = this.styleNodesInDOM;
                r && (r.forEach(i => i.remove()), r.clear());
                for (let i of this.getAllStyles()) this.onStyleRemoved(i);
                this.resetHostNodes()
            }
            addHost(r) {
                this.hostNodes.add(r);
                for (let i of this.getAllStyles()) this.addStyleToHost(r, i)
            }
            removeHost(r) {
                this.hostNodes.delete(r)
            }
            getAllStyles() {
                return this.styleRef.keys()
            }
            onStyleAdded(r) {
                for (let i of this.hostNodes) this.addStyleToHost(i, r)
            }
            onStyleRemoved(r) {
                let i = this.styleRef;
                i.get(r)?.elements?.forEach(o => o.remove()), i.delete(r)
            }
            collectServerRenderedStyles() {
                let r = this.doc.head?.querySelectorAll(`style[${pu}="${this.appId}"]`);
                if (r?.length) {
                    let i = new Map;
                    return r.forEach(o => {
                        o.textContent != null && i.set(o.textContent, o)
                    }), i
                }
                return null
            }
            changeUsageCount(r, i) {
                let o = this.styleRef;
                if (o.has(r)) {
                    let s = o.get(r);
                    return s.usage += i, s.usage
                }
                return o.set(r, {
                    usage: i,
                    elements: []
                }), i
            }
            getStyleElement(r, i) {
                let o = this.styleNodesInDOM,
                    s = o?.get(i);
                if (s?.parentNode === r) return o.delete(i), s.removeAttribute(pu), s;
                {
                    let a = this.doc.createElement("style");
                    return this.nonce && a.setAttribute("nonce", this.nonce), a.textContent = i, this.platformIsServer && a.setAttribute(pu, this.appId), r.appendChild(a), a
                }
            }
            addStyleToHost(r, i) {
                let o = this.getStyleElement(r, i),
                    s = this.styleRef,
                    a = s.get(i)?.elements;
                a ? a.push(o) : s.set(i, {
                    elements: [o],
                    usage: 1
                })
            }
            resetHostNodes() {
                let r = this.hostNodes;
                r.clear(), r.add(this.doc.head)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L(Ce), L(Ml), L(xl, 8), L(Ze))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })(),
    hu = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
        math: "http://www.w3.org/1998/MathML/"
    },
    Cu = /%COMP%/g,
    Jg = "%COMP%",
    FE = `_nghost-${Jg}`,
    kE = `_ngcontent-${Jg}`,
    LE = !0,
    VE = new A("", {
        providedIn: "root",
        factory: () => LE
    });

function jE(t) {
    return kE.replace(Cu, t)
}

function UE(t) {
    return FE.replace(Cu, t)
}

function Xg(t, e) {
    return e.map(n => n.replace(Cu, t))
}
var qg = (() => {
        let e = class e {
            constructor(r, i, o, s, a, c, l, u = null) {
                this.eventManager = r, this.sharedStylesHost = i, this.appId = o, this.removeStylesOnCompDestroy = s, this.doc = a, this.platformId = c, this.ngZone = l, this.nonce = u, this.rendererByCompId = new Map, this.platformIsServer = $s(c), this.defaultRenderer = new Ri(r, a, l, this.platformIsServer)
            }
            createRenderer(r, i) {
                if (!r || !i) return this.defaultRenderer;
                this.platformIsServer && i.encapsulation === Ft.ShadowDom && (i = re(b({}, i), {
                    encapsulation: Ft.Emulated
                }));
                let o = this.getOrCreateRenderer(r, i);
                return o instanceof Qs ? o.applyToHost(r) : o instanceof Pi && o.applyStyles(), o
            }
            getOrCreateRenderer(r, i) {
                let o = this.rendererByCompId,
                    s = o.get(i.id);
                if (!s) {
                    let a = this.doc,
                        c = this.ngZone,
                        l = this.eventManager,
                        u = this.sharedStylesHost,
                        d = this.removeStylesOnCompDestroy,
                        f = this.platformIsServer;
                    switch (i.encapsulation) {
                        case Ft.Emulated:
                            s = new Qs(l, u, i, this.appId, d, a, c, f);
                            break;
                        case Ft.ShadowDom:
                            return new vu(l, u, r, i, a, c, this.nonce, f);
                        default:
                            s = new Pi(l, u, i, d, a, c, f);
                            break
                    }
                    o.set(i.id, s)
                }
                return s
            }
            ngOnDestroy() {
                this.rendererByCompId.clear()
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L(Qg), L(Zg), L(Ml), L(VE), L(Ce), L(Ze), L(ue), L(xl))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })(),
    Ri = class {
        constructor(e, n, r, i) {
            this.eventManager = e, this.doc = n, this.ngZone = r, this.platformIsServer = i, this.data = Object.create(null), this.throwOnSyntheticProps = !0, this.destroyNode = null
        }
        destroy() {}
        createElement(e, n) {
            return n ? this.doc.createElementNS(hu[n] || n, e) : this.doc.createElement(e)
        }
        createComment(e) {
            return this.doc.createComment(e)
        }
        createText(e) {
            return this.doc.createTextNode(e)
        }
        appendChild(e, n) {
            (Yg(e) ? e.content : e).appendChild(n)
        }
        insertBefore(e, n, r) {
            e && (Yg(e) ? e.content : e).insertBefore(n, r)
        }
        removeChild(e, n) {
            e && e.removeChild(n)
        }
        selectRootElement(e, n) {
            let r = typeof e == "string" ? this.doc.querySelector(e) : e;
            if (!r) throw new S(-5104, !1);
            return n || (r.textContent = ""), r
        }
        parentNode(e) {
            return e.parentNode
        }
        nextSibling(e) {
            return e.nextSibling
        }
        setAttribute(e, n, r, i) {
            if (i) {
                n = i + ":" + n;
                let o = hu[i];
                o ? e.setAttributeNS(o, n, r) : e.setAttribute(n, r)
            } else e.setAttribute(n, r)
        }
        removeAttribute(e, n, r) {
            if (r) {
                let i = hu[r];
                i ? e.removeAttributeNS(i, n) : e.removeAttribute(`${r}:${n}`)
            } else e.removeAttribute(n)
        }
        addClass(e, n) {
            e.classList.add(n)
        }
        removeClass(e, n) {
            e.classList.remove(n)
        }
        setStyle(e, n, r, i) {
            i & (Lt.DashCase | Lt.Important) ? e.style.setProperty(n, r, i & Lt.Important ? "important" : "") : e.style[n] = r
        }
        removeStyle(e, n, r) {
            r & Lt.DashCase ? e.style.removeProperty(n) : e.style[n] = ""
        }
        setProperty(e, n, r) {
            e != null && (e[n] = r)
        }
        setValue(e, n) {
            e.nodeValue = n
        }
        listen(e, n, r) {
            if (typeof e == "string" && (e = dn().getGlobalEventTarget(this.doc, e), !e)) throw new Error(`Unsupported event target ${e} for event ${n}`);
            return this.eventManager.addEventListener(e, n, this.decoratePreventDefault(r))
        }
        decoratePreventDefault(e) {
            return n => {
                if (n === "__ngUnwrap__") return e;
                (this.platformIsServer ? this.ngZone.runGuarded(() => e(n)) : e(n)) === !1 && n.preventDefault()
            }
        }
    };

function Yg(t) {
    return t.tagName === "TEMPLATE" && t.content !== void 0
}
var vu = class extends Ri {
        constructor(e, n, r, i, o, s, a, c) {
            super(e, o, s, c), this.sharedStylesHost = n, this.hostEl = r, this.shadowRoot = r.attachShadow({
                mode: "open"
            }), this.sharedStylesHost.addHost(this.shadowRoot);
            let l = Xg(i.id, i.styles);
            for (let u of l) {
                let d = document.createElement("style");
                a && d.setAttribute("nonce", a), d.textContent = u, this.shadowRoot.appendChild(d)
            }
        }
        nodeOrShadowRoot(e) {
            return e === this.hostEl ? this.shadowRoot : e
        }
        appendChild(e, n) {
            return super.appendChild(this.nodeOrShadowRoot(e), n)
        }
        insertBefore(e, n, r) {
            return super.insertBefore(this.nodeOrShadowRoot(e), n, r)
        }
        removeChild(e, n) {
            return super.removeChild(this.nodeOrShadowRoot(e), n)
        }
        parentNode(e) {
            return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))
        }
        destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot)
        }
    },
    Pi = class extends Ri {
        constructor(e, n, r, i, o, s, a, c) {
            super(e, o, s, a), this.sharedStylesHost = n, this.removeStylesOnCompDestroy = i, this.styles = c ? Xg(c, r.styles) : r.styles
        }
        applyStyles() {
            this.sharedStylesHost.addStyles(this.styles)
        }
        destroy() {
            this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles)
        }
    },
    Qs = class extends Pi {
        constructor(e, n, r, i, o, s, a, c) {
            let l = i + "-" + r.id;
            super(e, n, r, o, s, a, c, l), this.contentAttr = jE(l), this.hostAttr = UE(l)
        }
        applyToHost(e) {
            this.applyStyles(), this.setAttribute(e, this.hostAttr, "")
        }
        createElement(e, n) {
            let r = super.createElement(e, n);
            return super.setAttribute(r, this.contentAttr, ""), r
        }
    },
    BE = (() => {
        let e = class e extends Ks {
            constructor(r) {
                super(r)
            }
            supports(r) {
                return !0
            }
            addEventListener(r, i, o) {
                return r.addEventListener(i, o, !1), () => this.removeEventListener(r, i, o)
            }
            removeEventListener(r, i, o) {
                return r.removeEventListener(i, o)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L(Ce))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })(),
    Kg = ["alt", "control", "meta", "shift"],
    $E = {
        "\b": "Backspace",
        "	": "Tab",
        "\x7F": "Delete",
        "\x1B": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS"
    },
    HE = {
        alt: t => t.altKey,
        control: t => t.ctrlKey,
        meta: t => t.metaKey,
        shift: t => t.shiftKey
    },
    zE = (() => {
        let e = class e extends Ks {
            constructor(r) {
                super(r)
            }
            supports(r) {
                return e.parseEventName(r) != null
            }
            addEventListener(r, i, o) {
                let s = e.parseEventName(i),
                    a = e.eventCallback(s.fullKey, o, this.manager.getZone());
                return this.manager.getZone().runOutsideAngular(() => dn().onAndCancel(r, s.domEventName, a))
            }
            static parseEventName(r) {
                let i = r.toLowerCase().split("."),
                    o = i.shift();
                if (i.length === 0 || !(o === "keydown" || o === "keyup")) return null;
                let s = e._normalizeKey(i.pop()),
                    a = "",
                    c = i.indexOf("code");
                if (c > -1 && (i.splice(c, 1), a = "code."), Kg.forEach(u => {
                        let d = i.indexOf(u);
                        d > -1 && (i.splice(d, 1), a += u + ".")
                    }), a += s, i.length != 0 || s.length === 0) return null;
                let l = {};
                return l.domEventName = o, l.fullKey = a, l
            }
            static matchEventFullKeyCode(r, i) {
                let o = $E[r.key] || r.key,
                    s = "";
                return i.indexOf("code.") > -1 && (o = r.code, s = "code."), o == null || !o ? !1 : (o = o.toLowerCase(), o === " " ? o = "space" : o === "." && (o = "dot"), Kg.forEach(a => {
                    if (a !== o) {
                        let c = HE[a];
                        c(r) && (s += a + ".")
                    }
                }), s += o, s === i)
            }
            static eventCallback(r, i, o) {
                return s => {
                    e.matchEventFullKeyCode(s, r) && o.runGuarded(() => i(s))
                }
            }
            static _normalizeKey(r) {
                return r === "esc" ? "escape" : r
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L(Ce))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac
        });
        let t = e;
        return t
    })();

function em(t, e) {
    return _g(b({
        rootComponent: t
    }, WE(e)))
}

function WE(t) {
    return {
        appProviders: [...QE, ...t?.providers ?? []],
        platformProviders: KE
    }
}

function GE() {
    mu.makeCurrent()
}

function qE() {
    return new en
}

function YE() {
    return hh(document), document
}
var KE = [{
    provide: Ze,
    useValue: ou
}, {
    provide: Sl,
    useValue: GE,
    multi: !0
}, {
    provide: Ce,
    useFactory: YE,
    deps: []
}];
var QE = [{
        provide: hs,
        useValue: "root"
    }, {
        provide: en,
        useFactory: qE,
        deps: []
    }, {
        provide: yu,
        useClass: BE,
        multi: !0,
        deps: [Ce, ue, Ze]
    }, {
        provide: yu,
        useClass: zE,
        multi: !0,
        deps: [Ce]
    }, qg, Zg, Qg, {
        provide: gi,
        useExisting: qg
    }, {
        provide: $r,
        useClass: PE,
        deps: []
    },
    []
];
var tm = (() => {
    let e = class e {
        constructor(r) {
            this._doc = r
        }
        getTitle() {
            return this._doc.title
        }
        setTitle(r) {
            this._doc.title = r || ""
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)(L(Ce))
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();
var U = "primary",
    Ki = Symbol("RouteTitle"),
    Iu = class {
        constructor(e) {
            this.params = e || {}
        }
        has(e) {
            return Object.prototype.hasOwnProperty.call(this.params, e)
        }
        get(e) {
            if (this.has(e)) {
                let n = this.params[e];
                return Array.isArray(n) ? n[0] : n
            }
            return null
        }
        getAll(e) {
            if (this.has(e)) {
                let n = this.params[e];
                return Array.isArray(n) ? n : [n]
            }
            return []
        }
        get keys() {
            return Object.keys(this.params)
        }
    };

function Kr(t) {
    return new Iu(t)
}

function JE(t, e, n) {
    let r = n.path.split("/");
    if (r.length > t.length || n.pathMatch === "full" && (e.hasChildren() || r.length < t.length)) return null;
    let i = {};
    for (let o = 0; o < r.length; o++) {
        let s = r[o],
            a = t[o];
        if (s.startsWith(":")) i[s.substring(1)] = a;
        else if (s !== a.path) return null
    }
    return {
        consumed: t.slice(0, r.length),
        posParams: i
    }
}

function XE(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0; n < t.length; ++n)
        if (!Gt(t[n], e[n])) return !1;
    return !0
}

function Gt(t, e) {
    let n = t ? _u(t) : void 0,
        r = e ? _u(e) : void 0;
    if (!n || !r || n.length != r.length) return !1;
    let i;
    for (let o = 0; o < n.length; o++)
        if (i = n[o], !am(t[i], e[i])) return !1;
    return !0
}

function _u(t) {
    return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]
}

function am(t, e) {
    if (Array.isArray(t) && Array.isArray(e)) {
        if (t.length !== e.length) return !1;
        let n = [...t].sort(),
            r = [...e].sort();
        return n.every((i, o) => r[o] === i)
    } else return t === e
}

function cm(t) {
    return t.length > 0 ? t[t.length - 1] : null
}

function kn(t) {
    return ja(t) ? t : ir(t) ? he(Promise.resolve(t)) : N(t)
}
var eI = {
        exact: um,
        subset: dm
    },
    lm = {
        exact: tI,
        subset: nI,
        ignored: () => !0
    };

function nm(t, e, n) {
    return eI[n.paths](t.root, e.root, n.matrixParams) && lm[n.queryParams](t.queryParams, e.queryParams) && !(n.fragment === "exact" && t.fragment !== e.fragment)
}

function tI(t, e) {
    return Gt(t, e)
}

function um(t, e, n) {
    if (!ar(t.segments, e.segments) || !Xs(t.segments, e.segments, n) || t.numberOfChildren !== e.numberOfChildren) return !1;
    for (let r in e.children)
        if (!t.children[r] || !um(t.children[r], e.children[r], n)) return !1;
    return !0
}

function nI(t, e) {
    return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => am(t[n], e[n]))
}

function dm(t, e, n) {
    return fm(t, e, e.segments, n)
}

function fm(t, e, n, r) {
    if (t.segments.length > n.length) {
        let i = t.segments.slice(0, n.length);
        return !(!ar(i, n) || e.hasChildren() || !Xs(i, n, r))
    } else if (t.segments.length === n.length) {
        if (!ar(t.segments, n) || !Xs(t.segments, n, r)) return !1;
        for (let i in e.children)
            if (!t.children[i] || !dm(t.children[i], e.children[i], r)) return !1;
        return !0
    } else {
        let i = n.slice(0, t.segments.length),
            o = n.slice(t.segments.length);
        return !ar(t.segments, i) || !Xs(t.segments, i, r) || !t.children[U] ? !1 : fm(t.children[U], e, o, r)
    }
}

function Xs(t, e, n) {
    return e.every((r, i) => lm[n](t[i].parameters, r.parameters))
}
var Pn = class {
        constructor(e = new ne([], {}), n = {}, r = null) {
            this.root = e, this.queryParams = n, this.fragment = r
        }
        get queryParamMap() {
            return this._queryParamMap ??= Kr(this.queryParams), this._queryParamMap
        }
        toString() {
            return oI.serialize(this)
        }
    },
    ne = class {
        constructor(e, n) {
            this.segments = e, this.children = n, this.parent = null, Object.values(n).forEach(r => r.parent = this)
        }
        hasChildren() {
            return this.numberOfChildren > 0
        }
        get numberOfChildren() {
            return Object.keys(this.children).length
        }
        toString() {
            return ea(this)
        }
    },
    sr = class {
        constructor(e, n) {
            this.path = e, this.parameters = n
        }
        get parameterMap() {
            return this._parameterMap ??= Kr(this.parameters), this._parameterMap
        }
        toString() {
            return hm(this)
        }
    };

function rI(t, e) {
    return ar(t, e) && t.every((n, r) => Gt(n.parameters, e[r].parameters))
}

function ar(t, e) {
    return t.length !== e.length ? !1 : t.every((n, r) => n.path === e[r].path)
}

function iI(t, e) {
    let n = [];
    return Object.entries(t.children).forEach(([r, i]) => {
        r === U && (n = n.concat(e(i, r)))
    }), Object.entries(t.children).forEach(([r, i]) => {
        r !== U && (n = n.concat(e(i, r)))
    }), n
}
var Zu = (() => {
        let e = class e {};
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: () => new na,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    na = class {
        parse(e) {
            let n = new Su(e);
            return new Pn(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment())
        }
        serialize(e) {
            let n = `/${Fi(e.root,!0)}`,
                r = cI(e.queryParams),
                i = typeof e.fragment == "string" ? `#${sI(e.fragment)}` : "";
            return `${n}${r}${i}`
        }
    },
    oI = new na;

function ea(t) {
    return t.segments.map(e => hm(e)).join("/")
}

function Fi(t, e) {
    if (!t.hasChildren()) return ea(t);
    if (e) {
        let n = t.children[U] ? Fi(t.children[U], !1) : "",
            r = [];
        return Object.entries(t.children).forEach(([i, o]) => {
            i !== U && r.push(`${i}:${Fi(o,!1)}`)
        }), r.length > 0 ? `${n}(${r.join("//")})` : n
    } else {
        let n = iI(t, (r, i) => i === U ? [Fi(t.children[U], !1)] : [`${i}:${Fi(r,!1)}`]);
        return Object.keys(t.children).length === 1 && t.children[U] != null ? `${ea(t)}/${n[0]}` : `${ea(t)}/(${n.join("//")})`
    }
}

function pm(t) {
    return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
}

function Zs(t) {
    return pm(t).replace(/%3B/gi, ";")
}

function sI(t) {
    return encodeURI(t)
}

function Mu(t) {
    return pm(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
}

function ta(t) {
    return decodeURIComponent(t)
}

function rm(t) {
    return ta(t.replace(/\+/g, "%20"))
}

function hm(t) {
    return `${Mu(t.path)}${aI(t.parameters)}`
}

function aI(t) {
    return Object.entries(t).map(([e, n]) => `;${Mu(e)}=${Mu(n)}`).join("")
}

function cI(t) {
    let e = Object.entries(t).map(([n, r]) => Array.isArray(r) ? r.map(i => `${Zs(n)}=${Zs(i)}`).join("&") : `${Zs(n)}=${Zs(r)}`).filter(n => n);
    return e.length ? `?${e.join("&")}` : ""
}
var lI = /^[^\/()?;#]+/;

function Du(t) {
    let e = t.match(lI);
    return e ? e[0] : ""
}
var uI = /^[^\/()?;=#]+/;

function dI(t) {
    let e = t.match(uI);
    return e ? e[0] : ""
}
var fI = /^[^=?&#]+/;

function pI(t) {
    let e = t.match(fI);
    return e ? e[0] : ""
}
var hI = /^[^&#]+/;

function gI(t) {
    let e = t.match(hI);
    return e ? e[0] : ""
}
var Su = class {
    constructor(e) {
        this.url = e, this.remaining = e
    }
    parseRootSegment() {
        return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new ne([], {}) : new ne([], this.parseChildren())
    }
    parseQueryParams() {
        let e = {};
        if (this.consumeOptional("?"))
            do this.parseQueryParam(e); while (this.consumeOptional("&"));
        return e
    }
    parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
        if (this.remaining === "") return {};
        this.consumeOptional("/");
        let e = [];
        for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
        let n = {};
        this.peekStartsWith("/(") && (this.capture("/"), n = this.parseParens(!0));
        let r = {};
        return this.peekStartsWith("(") && (r = this.parseParens(!1)), (e.length > 0 || Object.keys(n).length > 0) && (r[U] = new ne(e, n)), r
    }
    parseSegment() {
        let e = Du(this.remaining);
        if (e === "" && this.peekStartsWith(";")) throw new S(4009, !1);
        return this.capture(e), new sr(ta(e), this.parseMatrixParams())
    }
    parseMatrixParams() {
        let e = {};
        for (; this.consumeOptional(";");) this.parseParam(e);
        return e
    }
    parseParam(e) {
        let n = dI(this.remaining);
        if (!n) return;
        this.capture(n);
        let r = "";
        if (this.consumeOptional("=")) {
            let i = Du(this.remaining);
            i && (r = i, this.capture(r))
        }
        e[ta(n)] = ta(r)
    }
    parseQueryParam(e) {
        let n = pI(this.remaining);
        if (!n) return;
        this.capture(n);
        let r = "";
        if (this.consumeOptional("=")) {
            let s = gI(this.remaining);
            s && (r = s, this.capture(r))
        }
        let i = rm(n),
            o = rm(r);
        if (e.hasOwnProperty(i)) {
            let s = e[i];
            Array.isArray(s) || (s = [s], e[i] = s), s.push(o)
        } else e[i] = o
    }
    parseParens(e) {
        let n = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
            let r = Du(this.remaining),
                i = this.remaining[r.length];
            if (i !== "/" && i !== ")" && i !== ";") throw new S(4010, !1);
            let o;
            r.indexOf(":") > -1 ? (o = r.slice(0, r.indexOf(":")), this.capture(o), this.capture(":")) : e && (o = U);
            let s = this.parseChildren();
            n[o] = Object.keys(s).length === 1 ? s[U] : new ne([], s), this.consumeOptional("//")
        }
        return n
    }
    peekStartsWith(e) {
        return this.remaining.startsWith(e)
    }
    consumeOptional(e) {
        return this.peekStartsWith(e) ? (this.remaining = this.remaining.substring(e.length), !0) : !1
    }
    capture(e) {
        if (!this.consumeOptional(e)) throw new S(4011, !1)
    }
};

function gm(t) {
    return t.segments.length > 0 ? new ne([], {
        [U]: t
    }) : t
}

function mm(t) {
    let e = {};
    for (let [r, i] of Object.entries(t.children)) {
        let o = mm(i);
        if (r === U && o.segments.length === 0 && o.hasChildren())
            for (let [s, a] of Object.entries(o.children)) e[s] = a;
        else(o.segments.length > 0 || o.hasChildren()) && (e[r] = o)
    }
    let n = new ne(t.segments, e);
    return mI(n)
}

function mI(t) {
    if (t.numberOfChildren === 1 && t.children[U]) {
        let e = t.children[U];
        return new ne(t.segments.concat(e.segments), e.children)
    }
    return t
}

function Qr(t) {
    return t instanceof Pn
}

function yI(t, e, n = null, r = null) {
    let i = ym(t);
    return vm(i, e, n, r)
}

function ym(t) {
    let e;

    function n(o) {
        let s = {};
        for (let c of o.children) {
            let l = n(c);
            s[c.outlet] = l
        }
        let a = new ne(o.url, s);
        return o === t && (e = a), a
    }
    let r = n(t.root),
        i = gm(r);
    return e ?? i
}

function vm(t, e, n, r) {
    let i = t;
    for (; i.parent;) i = i.parent;
    if (e.length === 0) return bu(i, i, i, n, r);
    let o = vI(e);
    if (o.toRoot()) return bu(i, i, new ne([], {}), n, r);
    let s = CI(o, i, t),
        a = s.processChildren ? Vi(s.segmentGroup, s.index, o.commands) : Dm(s.segmentGroup, s.index, o.commands);
    return bu(i, s.segmentGroup, a, n, r)
}

function ra(t) {
    return typeof t == "object" && t != null && !t.outlets && !t.segmentPath
}

function Bi(t) {
    return typeof t == "object" && t != null && t.outlets
}

function bu(t, e, n, r, i) {
    let o = {};
    r && Object.entries(r).forEach(([c, l]) => {
        o[c] = Array.isArray(l) ? l.map(u => `${u}`) : `${l}`
    });
    let s;
    t === e ? s = n : s = Cm(t, e, n);
    let a = gm(mm(s));
    return new Pn(a, o, i)
}

function Cm(t, e, n) {
    let r = {};
    return Object.entries(t.children).forEach(([i, o]) => {
        o === e ? r[i] = n : r[i] = Cm(o, e, n)
    }), new ne(t.segments, r)
}
var ia = class {
    constructor(e, n, r) {
        if (this.isAbsolute = e, this.numberOfDoubleDots = n, this.commands = r, e && r.length > 0 && ra(r[0])) throw new S(4003, !1);
        let i = r.find(Bi);
        if (i && i !== cm(r)) throw new S(4004, !1)
    }
    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    }
};

function vI(t) {
    if (typeof t[0] == "string" && t.length === 1 && t[0] === "/") return new ia(!0, 0, t);
    let e = 0,
        n = !1,
        r = t.reduce((i, o, s) => {
            if (typeof o == "object" && o != null) {
                if (o.outlets) {
                    let a = {};
                    return Object.entries(o.outlets).forEach(([c, l]) => {
                        a[c] = typeof l == "string" ? l.split("/") : l
                    }), [...i, {
                        outlets: a
                    }]
                }
                if (o.segmentPath) return [...i, o.segmentPath]
            }
            return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, c) => {
                c == 0 && a === "." || (c == 0 && a === "" ? n = !0 : a === ".." ? e++ : a != "" && i.push(a))
            }), i) : [...i, o]
        }, []);
    return new ia(n, e, r)
}
var qr = class {
    constructor(e, n, r) {
        this.segmentGroup = e, this.processChildren = n, this.index = r
    }
};

function CI(t, e, n) {
    if (t.isAbsolute) return new qr(e, !0, 0);
    if (!n) return new qr(e, !1, NaN);
    if (n.parent === null) return new qr(n, !0, 0);
    let r = ra(t.commands[0]) ? 0 : 1,
        i = n.segments.length - 1 + r;
    return DI(n, i, t.numberOfDoubleDots)
}

function DI(t, e, n) {
    let r = t,
        i = e,
        o = n;
    for (; o > i;) {
        if (o -= i, r = r.parent, !r) throw new S(4005, !1);
        i = r.segments.length
    }
    return new qr(r, !1, i - o)
}

function bI(t) {
    return Bi(t[0]) ? t[0].outlets : {
        [U]: t
    }
}

function Dm(t, e, n) {
    if (t ??= new ne([], {}), t.segments.length === 0 && t.hasChildren()) return Vi(t, e, n);
    let r = wI(t, e, n),
        i = n.slice(r.commandIndex);
    if (r.match && r.pathIndex < t.segments.length) {
        let o = new ne(t.segments.slice(0, r.pathIndex), {});
        return o.children[U] = new ne(t.segments.slice(r.pathIndex), t.children), Vi(o, 0, i)
    } else return r.match && i.length === 0 ? new ne(t.segments, {}) : r.match && !t.hasChildren() ? xu(t, e, n) : r.match ? Vi(t, 0, i) : xu(t, e, n)
}

function Vi(t, e, n) {
    if (n.length === 0) return new ne(t.segments, {});
    {
        let r = bI(n),
            i = {};
        if (Object.keys(r).some(o => o !== U) && t.children[U] && t.numberOfChildren === 1 && t.children[U].segments.length === 0) {
            let o = Vi(t.children[U], e, n);
            return new ne(t.segments, o.children)
        }
        return Object.entries(r).forEach(([o, s]) => {
            typeof s == "string" && (s = [s]), s !== null && (i[o] = Dm(t.children[o], e, s))
        }), Object.entries(t.children).forEach(([o, s]) => {
            r[o] === void 0 && (i[o] = s)
        }), new ne(t.segments, i)
    }
}

function wI(t, e, n) {
    let r = 0,
        i = e,
        o = {
            match: !1,
            pathIndex: 0,
            commandIndex: 0
        };
    for (; i < t.segments.length;) {
        if (r >= n.length) return o;
        let s = t.segments[i],
            a = n[r];
        if (Bi(a)) break;
        let c = `${a}`,
            l = r < n.length - 1 ? n[r + 1] : null;
        if (i > 0 && c === void 0) break;
        if (c && l && typeof l == "object" && l.outlets === void 0) {
            if (!om(c, l, s)) return o;
            r += 2
        } else {
            if (!om(c, {}, s)) return o;
            r++
        }
        i++
    }
    return {
        match: !0,
        pathIndex: i,
        commandIndex: r
    }
}

function xu(t, e, n) {
    let r = t.segments.slice(0, e),
        i = 0;
    for (; i < n.length;) {
        let o = n[i];
        if (Bi(o)) {
            let c = EI(o.outlets);
            return new ne(r, c)
        }
        if (i === 0 && ra(n[0])) {
            let c = t.segments[e];
            r.push(new sr(c.path, im(n[0]))), i++;
            continue
        }
        let s = Bi(o) ? o.outlets[U] : `${o}`,
            a = i < n.length - 1 ? n[i + 1] : null;
        s && a && ra(a) ? (r.push(new sr(s, im(a))), i += 2) : (r.push(new sr(s, {})), i++)
    }
    return new ne(r, {})
}

function EI(t) {
    let e = {};
    return Object.entries(t).forEach(([n, r]) => {
        typeof r == "string" && (r = [r]), r !== null && (e[n] = xu(new ne([], {}), 0, r))
    }), e
}

function im(t) {
    let e = {};
    return Object.entries(t).forEach(([n, r]) => e[n] = `${r}`), e
}

function om(t, e, n) {
    return t == n.path && Gt(e, n.parameters)
}
var ji = "imperative",
    Ve = function(t) {
        return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t
    }(Ve || {}),
    yt = class {
        constructor(e, n) {
            this.id = e, this.url = n
        }
    },
    $i = class extends yt {
        constructor(e, n, r = "imperative", i = null) {
            super(e, n), this.type = Ve.NavigationStart, this.navigationTrigger = r, this.restoredState = i
        }
        toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`
        }
    },
    cr = class extends yt {
        constructor(e, n, r) {
            super(e, n), this.urlAfterRedirects = r, this.type = Ve.NavigationEnd
        }
        toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
        }
    },
    ct = function(t) {
        return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t
    }(ct || {}),
    Tu = function(t) {
        return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t
    }(Tu || {}),
    Fn = class extends yt {
        constructor(e, n, r, i) {
            super(e, n), this.reason = r, this.code = i, this.type = Ve.NavigationCancel
        }
        toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
        }
    },
    lr = class extends yt {
        constructor(e, n, r, i) {
            super(e, n), this.reason = r, this.code = i, this.type = Ve.NavigationSkipped
        }
    },
    Hi = class extends yt {
        constructor(e, n, r, i) {
            super(e, n), this.error = r, this.target = i, this.type = Ve.NavigationError
        }
        toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
        }
    },
    oa = class extends yt {
        constructor(e, n, r, i) {
            super(e, n), this.urlAfterRedirects = r, this.state = i, this.type = Ve.RoutesRecognized
        }
        toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    Au = class extends yt {
        constructor(e, n, r, i) {
            super(e, n), this.urlAfterRedirects = r, this.state = i, this.type = Ve.GuardsCheckStart
        }
        toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    Ou = class extends yt {
        constructor(e, n, r, i, o) {
            super(e, n), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o, this.type = Ve.GuardsCheckEnd
        }
        toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
        }
    },
    Nu = class extends yt {
        constructor(e, n, r, i) {
            super(e, n), this.urlAfterRedirects = r, this.state = i, this.type = Ve.ResolveStart
        }
        toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    Ru = class extends yt {
        constructor(e, n, r, i) {
            super(e, n), this.urlAfterRedirects = r, this.state = i, this.type = Ve.ResolveEnd
        }
        toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
        }
    },
    Pu = class {
        constructor(e) {
            this.route = e, this.type = Ve.RouteConfigLoadStart
        }
        toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`
        }
    },
    Fu = class {
        constructor(e) {
            this.route = e, this.type = Ve.RouteConfigLoadEnd
        }
        toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`
        }
    },
    ku = class {
        constructor(e) {
            this.snapshot = e, this.type = Ve.ChildActivationStart
        }
        toString() {
            return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    Lu = class {
        constructor(e) {
            this.snapshot = e, this.type = Ve.ChildActivationEnd
        }
        toString() {
            return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    Vu = class {
        constructor(e) {
            this.snapshot = e, this.type = Ve.ActivationStart
        }
        toString() {
            return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    },
    ju = class {
        constructor(e) {
            this.snapshot = e, this.type = Ve.ActivationEnd
        }
        toString() {
            return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
        }
    };
var zi = class {},
    Wi = class {
        constructor(e) {
            this.url = e
        }
    };
var Uu = class {
        constructor() {
            this.outlet = null, this.route = null, this.injector = null, this.children = new da, this.attachRef = null
        }
    },
    da = (() => {
        let e = class e {
            constructor() {
                this.contexts = new Map
            }
            onChildOutletCreated(r, i) {
                let o = this.getOrCreateContext(r);
                o.outlet = i, this.contexts.set(r, o)
            }
            onChildOutletDestroyed(r) {
                let i = this.getContext(r);
                i && (i.outlet = null, i.attachRef = null)
            }
            onOutletDeactivated() {
                let r = this.contexts;
                return this.contexts = new Map, r
            }
            onOutletReAttached(r) {
                this.contexts = r
            }
            getOrCreateContext(r) {
                let i = this.getContext(r);
                return i || (i = new Uu, this.contexts.set(r, i)), i
            }
            getContext(r) {
                return this.contexts.get(r) || null
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    sa = class {
        constructor(e) {
            this._root = e
        }
        get root() {
            return this._root.value
        }
        parent(e) {
            let n = this.pathFromRoot(e);
            return n.length > 1 ? n[n.length - 2] : null
        }
        children(e) {
            let n = Bu(e, this._root);
            return n ? n.children.map(r => r.value) : []
        }
        firstChild(e) {
            let n = Bu(e, this._root);
            return n && n.children.length > 0 ? n.children[0].value : null
        }
        siblings(e) {
            let n = $u(e, this._root);
            return n.length < 2 ? [] : n[n.length - 2].children.map(i => i.value).filter(i => i !== e)
        }
        pathFromRoot(e) {
            return $u(e, this._root).map(n => n.value)
        }
    };

function Bu(t, e) {
    if (t === e.value) return e;
    for (let n of e.children) {
        let r = Bu(t, n);
        if (r) return r
    }
    return null
}

function $u(t, e) {
    if (t === e.value) return [e];
    for (let n of e.children) {
        let r = $u(t, n);
        if (r.length) return r.unshift(e), r
    }
    return []
}
var at = class {
    constructor(e, n) {
        this.value = e, this.children = n
    }
    toString() {
        return `TreeNode(${this.value})`
    }
};

function Gr(t) {
    let e = {};
    return t && t.children.forEach(n => e[n.value.outlet] = n), e
}
var aa = class extends sa {
    constructor(e, n) {
        super(e), this.snapshot = n, Xu(this, e)
    }
    toString() {
        return this.snapshot.toString()
    }
};

function bm(t) {
    let e = II(t),
        n = new ke([new sr("", {})]),
        r = new ke({}),
        i = new ke({}),
        o = new ke({}),
        s = new ke(""),
        a = new Zr(n, r, o, s, i, U, t, e.root);
    return a.snapshot = e.root, new aa(new at(a, []), e)
}

function II(t) {
    let e = {},
        n = {},
        r = {},
        i = "",
        o = new Gi([], e, r, i, n, U, t, null, {});
    return new ca("", new at(o, []))
}
var Zr = class {
    constructor(e, n, r, i, o, s, a, c) {
        this.urlSubject = e, this.paramsSubject = n, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = c, this.title = this.dataSubject?.pipe(V(l => l[Ki])) ?? N(void 0), this.url = e, this.params = n, this.queryParams = r, this.fragment = i, this.data = o
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ??= this.params.pipe(V(e => Kr(e))), this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ??= this.queryParams.pipe(V(e => Kr(e))), this._queryParamMap
    }
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
};

function Ju(t, e, n = "emptyOnly") {
    let r, {
        routeConfig: i
    } = t;
    return e !== null && (n === "always" || i?.path === "" || !e.component && !e.routeConfig?.loadComponent) ? r = {
        params: b(b({}, e.params), t.params),
        data: b(b({}, e.data), t.data),
        resolve: b(b(b(b({}, t.data), e.data), i?.data), t._resolvedData)
    } : r = {
        params: b({}, t.params),
        data: b({}, t.data),
        resolve: b(b({}, t.data), t._resolvedData ?? {})
    }, i && Em(i) && (r.resolve[Ki] = i.title), r
}
var Gi = class {
        get title() {
            return this.data?.[Ki]
        }
        constructor(e, n, r, i, o, s, a, c, l) {
            this.url = e, this.params = n, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = c, this._resolve = l
        }
        get root() {
            return this._routerState.root
        }
        get parent() {
            return this._routerState.parent(this)
        }
        get firstChild() {
            return this._routerState.firstChild(this)
        }
        get children() {
            return this._routerState.children(this)
        }
        get pathFromRoot() {
            return this._routerState.pathFromRoot(this)
        }
        get paramMap() {
            return this._paramMap ??= Kr(this.params), this._paramMap
        }
        get queryParamMap() {
            return this._queryParamMap ??= Kr(this.queryParams), this._queryParamMap
        }
        toString() {
            let e = this.url.map(r => r.toString()).join("/"),
                n = this.routeConfig ? this.routeConfig.path : "";
            return `Route(url:'${e}', path:'${n}')`
        }
    },
    ca = class extends sa {
        constructor(e, n) {
            super(n), this.url = e, Xu(this, n)
        }
        toString() {
            return wm(this._root)
        }
    };

function Xu(t, e) {
    e.value._routerState = t, e.children.forEach(n => Xu(t, n))
}

function wm(t) {
    let e = t.children.length > 0 ? ` { ${t.children.map(wm).join(", ")} } ` : "";
    return `${t.value}${e}`
}

function wu(t) {
    if (t.snapshot) {
        let e = t.snapshot,
            n = t._futureSnapshot;
        t.snapshot = n, Gt(e.queryParams, n.queryParams) || t.queryParamsSubject.next(n.queryParams), e.fragment !== n.fragment && t.fragmentSubject.next(n.fragment), Gt(e.params, n.params) || t.paramsSubject.next(n.params), XE(e.url, n.url) || t.urlSubject.next(n.url), Gt(e.data, n.data) || t.dataSubject.next(n.data)
    } else t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data)
}

function Hu(t, e) {
    let n = Gt(t.params, e.params) && rI(t.url, e.url),
        r = !t.parent != !e.parent;
    return n && !r && (!t.parent || Hu(t.parent, e.parent))
}

function Em(t) {
    return typeof t.title == "string" || t.title === null
}
var _I = (() => {
        let e = class e {
            constructor() {
                this.activated = null, this._activatedRoute = null, this.name = U, this.activateEvents = new ge, this.deactivateEvents = new ge, this.attachEvents = new ge, this.detachEvents = new ge, this.parentContexts = D(da), this.location = D(ln), this.changeDetector = D(Ht), this.environmentInjector = D(Qe), this.inputBinder = D(ed, {
                    optional: !0
                }), this.supportsBindingToComponentInputs = !0
            }
            get activatedComponentRef() {
                return this.activated
            }
            ngOnChanges(r) {
                if (r.name) {
                    let {
                        firstChange: i,
                        previousValue: o
                    } = r.name;
                    if (i) return;
                    this.isTrackedInParentContexts(o) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)), this.initializeOutletWithName()
                }
            }
            ngOnDestroy() {
                this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this)
            }
            isTrackedInParentContexts(r) {
                return this.parentContexts.getContext(r)?.outlet === this
            }
            ngOnInit() {
                this.initializeOutletWithName()
            }
            initializeOutletWithName() {
                if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated) return;
                let r = this.parentContexts.getContext(this.name);
                r?.route && (r.attachRef ? this.attach(r.attachRef, r.route) : this.activateWith(r.route, r.injector))
            }
            get isActivated() {
                return !!this.activated
            }
            get component() {
                if (!this.activated) throw new S(4012, !1);
                return this.activated.instance
            }
            get activatedRoute() {
                if (!this.activated) throw new S(4012, !1);
                return this._activatedRoute
            }
            get activatedRouteData() {
                return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
            }
            detach() {
                if (!this.activated) throw new S(4012, !1);
                this.location.detach();
                let r = this.activated;
                return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(r.instance), r
            }
            attach(r, i) {
                this.activated = r, this._activatedRoute = i, this.location.insert(r.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(r.instance)
            }
            deactivate() {
                if (this.activated) {
                    let r = this.component;
                    this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(r)
                }
            }
            activateWith(r, i) {
                if (this.isActivated) throw new S(4013, !1);
                this._activatedRoute = r;
                let o = this.location,
                    a = r.snapshot.component,
                    c = this.parentContexts.getOrCreateContext(this.name).children,
                    l = new zu(r, c, o.injector);
                this.activated = o.createComponent(a, {
                    index: o.length,
                    injector: l,
                    environmentInjector: i ?? this.environmentInjector
                }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["router-outlet"]
            ],
            inputs: {
                name: "name"
            },
            outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
                attachEvents: "attach",
                detachEvents: "detach"
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [jt]
        });
        let t = e;
        return t
    })(),
    zu = class t {
        __ngOutletInjector(e) {
            return new t(this.route, this.childContexts, e)
        }
        constructor(e, n, r) {
            this.route = e, this.childContexts = n, this.parent = r
        }
        get(e, n) {
            return e === Zr ? this.route : e === da ? this.childContexts : this.parent.get(e, n)
        }
    },
    ed = new A("");

function MI(t, e, n) {
    let r = qi(t, e._root, n ? n._root : void 0);
    return new aa(r, e)
}

function qi(t, e, n) {
    if (n && t.shouldReuseRoute(e.value, n.value.snapshot)) {
        let r = n.value;
        r._futureSnapshot = e.value;
        let i = SI(t, e, n);
        return new at(r, i)
    } else {
        if (t.shouldAttach(e.value)) {
            let o = t.retrieve(e.value);
            if (o !== null) {
                let s = o.route;
                return s.value._futureSnapshot = e.value, s.children = e.children.map(a => qi(t, a)), s
            }
        }
        let r = xI(e.value),
            i = e.children.map(o => qi(t, o));
        return new at(r, i)
    }
}

function SI(t, e, n) {
    return e.children.map(r => {
        for (let i of n.children)
            if (t.shouldReuseRoute(r.value, i.value.snapshot)) return qi(t, r, i);
        return qi(t, r)
    })
}

function xI(t) {
    return new Zr(new ke(t.url), new ke(t.params), new ke(t.queryParams), new ke(t.fragment), new ke(t.data), t.outlet, t.component, t)
}
var Im = "ngNavigationCancelingError";

function _m(t, e) {
    let {
        redirectTo: n,
        navigationBehaviorOptions: r
    } = Qr(e) ? {
        redirectTo: e,
        navigationBehaviorOptions: void 0
    } : e, i = Mm(!1, ct.Redirect);
    return i.url = n, i.navigationBehaviorOptions = r, i
}

function Mm(t, e) {
    let n = new Error(`NavigationCancelingError: ${t||""}`);
    return n[Im] = !0, n.cancellationCode = e, n
}

function TI(t) {
    return Sm(t) && Qr(t.url)
}

function Sm(t) {
    return !!t && t[Im]
}
var AI = (() => {
    let e = class e {};
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["ng-component"]
        ],
        standalone: !0,
        features: [j],
        decls: 1,
        vars: 0,
        template: function(i, o) {
            i & 1 && z(0, "router-outlet")
        },
        dependencies: [_I],
        encapsulation: 2
    });
    let t = e;
    return t
})();

function OI(t, e) {
    return t.providers && !t._injector && (t._injector = ql(t.providers, e, `Route: ${t.path}`)), t._injector ?? e
}

function td(t) {
    let e = t.children && t.children.map(td),
        n = e ? re(b({}, t), {
            children: e
        }) : b({}, t);
    return !n.component && !n.loadComponent && (e || n.loadChildren) && n.outlet && n.outlet !== U && (n.component = AI), n
}

function qt(t) {
    return t.outlet || U
}

function NI(t, e) {
    let n = t.filter(r => qt(r) === e);
    return n.push(...t.filter(r => qt(r) !== e)), n
}

function Qi(t) {
    if (!t) return null;
    if (t.routeConfig?._injector) return t.routeConfig._injector;
    for (let e = t.parent; e; e = e.parent) {
        let n = e.routeConfig;
        if (n?._loadedInjector) return n._loadedInjector;
        if (n?._injector) return n._injector
    }
    return null
}
var RI = (t, e, n, r) => V(i => (new Wu(e, i.targetRouterState, i.currentRouterState, n, r).activate(t), i)),
    Wu = class {
        constructor(e, n, r, i, o) {
            this.routeReuseStrategy = e, this.futureState = n, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o
        }
        activate(e) {
            let n = this.futureState._root,
                r = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(n, r, e), wu(this.futureState.root), this.activateChildRoutes(n, r, e)
        }
        deactivateChildRoutes(e, n, r) {
            let i = Gr(n);
            e.children.forEach(o => {
                let s = o.value.outlet;
                this.deactivateRoutes(o, i[s], r), delete i[s]
            }), Object.values(i).forEach(o => {
                this.deactivateRouteAndItsChildren(o, r)
            })
        }
        deactivateRoutes(e, n, r) {
            let i = e.value,
                o = n ? n.value : null;
            if (i === o)
                if (i.component) {
                    let s = r.getContext(i.outlet);
                    s && this.deactivateChildRoutes(e, n, s.children)
                } else this.deactivateChildRoutes(e, n, r);
            else o && this.deactivateRouteAndItsChildren(n, r)
        }
        deactivateRouteAndItsChildren(e, n) {
            e.value.component && this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, n) : this.deactivateRouteAndOutlet(e, n)
        }
        detachAndStoreRouteSubtree(e, n) {
            let r = n.getContext(e.value.outlet),
                i = r && e.value.component ? r.children : n,
                o = Gr(e);
            for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
            if (r && r.outlet) {
                let s = r.outlet.detach(),
                    a = r.children.onOutletDeactivated();
                this.routeReuseStrategy.store(e.value.snapshot, {
                    componentRef: s,
                    route: e,
                    contexts: a
                })
            }
        }
        deactivateRouteAndOutlet(e, n) {
            let r = n.getContext(e.value.outlet),
                i = r && e.value.component ? r.children : n,
                o = Gr(e);
            for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
            r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null)
        }
        activateChildRoutes(e, n, r) {
            let i = Gr(n);
            e.children.forEach(o => {
                this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new ju(o.value.snapshot))
            }), e.children.length && this.forwardEvent(new Lu(e.value.snapshot))
        }
        activateRoutes(e, n, r) {
            let i = e.value,
                o = n ? n.value : null;
            if (wu(i), i === o)
                if (i.component) {
                    let s = r.getOrCreateContext(i.outlet);
                    this.activateChildRoutes(e, n, s.children)
                } else this.activateChildRoutes(e, n, r);
            else if (i.component) {
                let s = r.getOrCreateContext(i.outlet);
                if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
                    let a = this.routeReuseStrategy.retrieve(i.snapshot);
                    this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), wu(a.route.value), this.activateChildRoutes(e, null, s.children)
                } else {
                    let a = Qi(i.snapshot);
                    s.attachRef = null, s.route = i, s.injector = a, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(e, null, s.children)
                }
            } else this.activateChildRoutes(e, null, r)
        }
    },
    la = class {
        constructor(e) {
            this.path = e, this.route = this.path[this.path.length - 1]
        }
    },
    Yr = class {
        constructor(e, n) {
            this.component = e, this.route = n
        }
    };

function PI(t, e, n) {
    let r = t._root,
        i = e ? e._root : null;
    return ki(r, i, n, [r.value])
}

function FI(t) {
    let e = t.routeConfig ? t.routeConfig.canActivateChild : null;
    return !e || e.length === 0 ? null : {
        node: t,
        guards: e
    }
}

function Xr(t, e) {
    let n = Symbol(),
        r = e.get(t, n);
    return r === n ? typeof t == "function" && !op(t) ? t : e.get(t) : r
}

function ki(t, e, n, r, i = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = Gr(e);
    return t.children.forEach(s => {
        kI(s, o[s.value.outlet], n, r.concat([s.value]), i), delete o[s.value.outlet]
    }), Object.entries(o).forEach(([s, a]) => Ui(a, n.getContext(s), i)), i
}

function kI(t, e, n, r, i = {
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = t.value,
        s = e ? e.value : null,
        a = n ? n.getContext(t.value.outlet) : null;
    if (s && o.routeConfig === s.routeConfig) {
        let c = LI(s, o, o.routeConfig.runGuardsAndResolvers);
        c ? i.canActivateChecks.push(new la(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? ki(t, e, a ? a.children : null, r, i) : ki(t, e, n, r, i), c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new Yr(a.outlet.component, s))
    } else s && Ui(e, a, i), i.canActivateChecks.push(new la(r)), o.component ? ki(t, null, a ? a.children : null, r, i) : ki(t, null, n, r, i);
    return i
}

function LI(t, e, n) {
    if (typeof n == "function") return n(t, e);
    switch (n) {
        case "pathParamsChange":
            return !ar(t.url, e.url);
        case "pathParamsOrQueryParamsChange":
            return !ar(t.url, e.url) || !Gt(t.queryParams, e.queryParams);
        case "always":
            return !0;
        case "paramsOrQueryParamsChange":
            return !Hu(t, e) || !Gt(t.queryParams, e.queryParams);
        case "paramsChange":
        default:
            return !Hu(t, e)
    }
}

function Ui(t, e, n) {
    let r = Gr(t),
        i = t.value;
    Object.entries(r).forEach(([o, s]) => {
        i.component ? e ? Ui(s, e.children.getContext(o), n) : Ui(s, null, n) : Ui(s, e, n)
    }), i.component ? e && e.outlet && e.outlet.isActivated ? n.canDeactivateChecks.push(new Yr(e.outlet.component, i)) : n.canDeactivateChecks.push(new Yr(null, i)) : n.canDeactivateChecks.push(new Yr(null, i))
}

function Zi(t) {
    return typeof t == "function"
}

function VI(t) {
    return typeof t == "boolean"
}

function jI(t) {
    return t && Zi(t.canLoad)
}

function UI(t) {
    return t && Zi(t.canActivate)
}

function BI(t) {
    return t && Zi(t.canActivateChild)
}

function $I(t) {
    return t && Zi(t.canDeactivate)
}

function HI(t) {
    return t && Zi(t.canMatch)
}

function xm(t) {
    return t instanceof Qt || t?.name === "EmptyError"
}
var Js = Symbol("INITIAL_VALUE");

function Jr() {
    return rt(t => Ao(t.map(e => e.pipe(Zt(1), Wa(Js)))).pipe(V(e => {
        for (let n of e)
            if (n !== !0) {
                if (n === Js) return Js;
                if (n === !1 || n instanceof Pn) return n
            } return !0
    }), nt(e => e !== Js), Zt(1)))
}

function zI(t, e) {
    return xe(n => {
        let {
            targetSnapshot: r,
            currentSnapshot: i,
            guards: {
                canActivateChecks: o,
                canDeactivateChecks: s
            }
        } = n;
        return s.length === 0 && o.length === 0 ? N(re(b({}, n), {
            guardsResult: !0
        })) : WI(s, r, i, t).pipe(xe(a => a && VI(a) ? GI(r, o, t, e) : N(a)), V(a => re(b({}, n), {
            guardsResult: a
        })))
    })
}

function WI(t, e, n, r) {
    return he(t).pipe(xe(i => ZI(i.component, i.route, n, e, r)), Nt(i => i !== !0, !0))
}

function GI(t, e, n, r) {
    return he(e).pipe(Cn(i => Dr(YI(i.route.parent, r), qI(i.route, r), QI(t, i.path, n), KI(t, i.route, n))), Nt(i => i !== !0, !0))
}

function qI(t, e) {
    return t !== null && e && e(new Vu(t)), N(!0)
}

function YI(t, e) {
    return t !== null && e && e(new ku(t)), N(!0)
}

function KI(t, e, n) {
    let r = e.routeConfig ? e.routeConfig.canActivate : null;
    if (!r || r.length === 0) return N(!0);
    let i = r.map(o => Oo(() => {
        let s = Qi(e) ?? n,
            a = Xr(o, s),
            c = UI(a) ? a.canActivate(e, t) : rn(s, () => a(e, t));
        return kn(c).pipe(Nt())
    }));
    return N(i).pipe(Jr())
}

function QI(t, e, n) {
    let r = e[e.length - 1],
        o = e.slice(0, e.length - 1).reverse().map(s => FI(s)).filter(s => s !== null).map(s => Oo(() => {
            let a = s.guards.map(c => {
                let l = Qi(s.node) ?? n,
                    u = Xr(c, l),
                    d = BI(u) ? u.canActivateChild(r, t) : rn(l, () => u(r, t));
                return kn(d).pipe(Nt())
            });
            return N(a).pipe(Jr())
        }));
    return N(o).pipe(Jr())
}

function ZI(t, e, n, r, i) {
    let o = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
    if (!o || o.length === 0) return N(!0);
    let s = o.map(a => {
        let c = Qi(e) ?? i,
            l = Xr(a, c),
            u = $I(l) ? l.canDeactivate(t, e, n, r) : rn(c, () => l(t, e, n, r));
        return kn(u).pipe(Nt())
    });
    return N(s).pipe(Jr())
}

function JI(t, e, n, r) {
    let i = e.canLoad;
    if (i === void 0 || i.length === 0) return N(!0);
    let o = i.map(s => {
        let a = Xr(s, t),
            c = jI(a) ? a.canLoad(e, n) : rn(t, () => a(e, n));
        return kn(c)
    });
    return N(o).pipe(Jr(), Tm(r))
}

function Tm(t) {
    return Fa(Ae(e => {
        if (Qr(e)) throw _m(t, e)
    }), V(e => e === !0))
}

function XI(t, e, n, r) {
    let i = e.canMatch;
    if (!i || i.length === 0) return N(!0);
    let o = i.map(s => {
        let a = Xr(s, t),
            c = HI(a) ? a.canMatch(e, n) : rn(t, () => a(e, n));
        return kn(c)
    });
    return N(o).pipe(Jr(), Tm(r))
}
var Yi = class {
        constructor(e) {
            this.segmentGroup = e || null
        }
    },
    ua = class extends Error {
        constructor(e) {
            super(), this.urlTree = e
        }
    };

function Wr(t) {
    return Cr(new Yi(t))
}

function e_(t) {
    return Cr(new S(4e3, !1))
}

function t_(t) {
    return Cr(Mm(!1, ct.GuardRejected))
}
var Gu = class {
        constructor(e, n) {
            this.urlSerializer = e, this.urlTree = n
        }
        lineralizeSegments(e, n) {
            let r = [],
                i = n.root;
            for (;;) {
                if (r = r.concat(i.segments), i.numberOfChildren === 0) return N(r);
                if (i.numberOfChildren > 1 || !i.children[U]) return e_(e.redirectTo);
                i = i.children[U]
            }
        }
        applyRedirectCommands(e, n, r) {
            let i = this.applyRedirectCreateUrlTree(n, this.urlSerializer.parse(n), e, r);
            if (n.startsWith("/")) throw new ua(i);
            return i
        }
        applyRedirectCreateUrlTree(e, n, r, i) {
            let o = this.createSegmentGroup(e, n.root, r, i);
            return new Pn(o, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment)
        }
        createQueryParams(e, n) {
            let r = {};
            return Object.entries(e).forEach(([i, o]) => {
                if (typeof o == "string" && o.startsWith(":")) {
                    let a = o.substring(1);
                    r[i] = n[a]
                } else r[i] = o
            }), r
        }
        createSegmentGroup(e, n, r, i) {
            let o = this.createSegments(e, n.segments, r, i),
                s = {};
            return Object.entries(n.children).forEach(([a, c]) => {
                s[a] = this.createSegmentGroup(e, c, r, i)
            }), new ne(o, s)
        }
        createSegments(e, n, r, i) {
            return n.map(o => o.path.startsWith(":") ? this.findPosParam(e, o, i) : this.findOrReturn(o, r))
        }
        findPosParam(e, n, r) {
            let i = r[n.path.substring(1)];
            if (!i) throw new S(4001, !1);
            return i
        }
        findOrReturn(e, n) {
            let r = 0;
            for (let i of n) {
                if (i.path === e.path) return n.splice(r), i;
                r++
            }
            return e
        }
    },
    qu = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {}
    };

function n_(t, e, n, r, i) {
    let o = nd(t, e, n);
    return o.matched ? (r = OI(e, r), XI(r, e, n, i).pipe(V(s => s === !0 ? o : b({}, qu)))) : N(o)
}

function nd(t, e, n) {
    if (e.path === "**") return r_(n);
    if (e.path === "") return e.pathMatch === "full" && (t.hasChildren() || n.length > 0) ? b({}, qu) : {
        matched: !0,
        consumedSegments: [],
        remainingSegments: n,
        parameters: {},
        positionalParamSegments: {}
    };
    let i = (e.matcher || JE)(n, t, e);
    if (!i) return b({}, qu);
    let o = {};
    Object.entries(i.posParams ?? {}).forEach(([a, c]) => {
        o[a] = c.path
    });
    let s = i.consumed.length > 0 ? b(b({}, o), i.consumed[i.consumed.length - 1].parameters) : o;
    return {
        matched: !0,
        consumedSegments: i.consumed,
        remainingSegments: n.slice(i.consumed.length),
        parameters: s,
        positionalParamSegments: i.posParams ?? {}
    }
}

function r_(t) {
    return {
        matched: !0,
        parameters: t.length > 0 ? cm(t).parameters : {},
        consumedSegments: t,
        remainingSegments: [],
        positionalParamSegments: {}
    }
}

function sm(t, e, n, r) {
    return n.length > 0 && s_(t, n, r) ? {
        segmentGroup: new ne(e, o_(r, new ne(n, t.children))),
        slicedSegments: []
    } : n.length === 0 && a_(t, n, r) ? {
        segmentGroup: new ne(t.segments, i_(t, n, r, t.children)),
        slicedSegments: n
    } : {
        segmentGroup: new ne(t.segments, t.children),
        slicedSegments: n
    }
}

function i_(t, e, n, r) {
    let i = {};
    for (let o of n)
        if (fa(t, e, o) && !r[qt(o)]) {
            let s = new ne([], {});
            i[qt(o)] = s
        } return b(b({}, r), i)
}

function o_(t, e) {
    let n = {};
    n[U] = e;
    for (let r of t)
        if (r.path === "" && qt(r) !== U) {
            let i = new ne([], {});
            n[qt(r)] = i
        } return n
}

function s_(t, e, n) {
    return n.some(r => fa(t, e, r) && qt(r) !== U)
}

function a_(t, e, n) {
    return n.some(r => fa(t, e, r))
}

function fa(t, e, n) {
    return (t.hasChildren() || e.length > 0) && n.pathMatch === "full" ? !1 : n.path === ""
}

function c_(t, e, n, r) {
    return qt(t) !== r && (r === U || !fa(e, n, t)) ? !1 : nd(e, t, n).matched
}

function l_(t, e, n) {
    return e.length === 0 && !t.children[n]
}
var Yu = class {};

function u_(t, e, n, r, i, o, s = "emptyOnly") {
    return new Ku(t, e, n, r, i, s, o).recognize()
}
var d_ = 31,
    Ku = class {
        constructor(e, n, r, i, o, s, a) {
            this.injector = e, this.configLoader = n, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.applyRedirects = new Gu(this.urlSerializer, this.urlTree), this.absoluteRedirectCount = 0, this.allowRedirects = !0
        }
        noMatchError(e) {
            return new S(4002, `'${e.segmentGroup}'`)
        }
        recognize() {
            let e = sm(this.urlTree.root, [], [], this.config).segmentGroup;
            return this.match(e).pipe(V(n => {
                let r = new Gi([], Object.freeze({}), Object.freeze(b({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, U, this.rootComponentType, null, {}),
                    i = new at(r, n),
                    o = new ca("", i),
                    s = yI(r, [], this.urlTree.queryParams, this.urlTree.fragment);
                return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), this.inheritParamsAndData(o._root, null), {
                    state: o,
                    tree: s
                }
            }))
        }
        match(e) {
            return this.processSegmentGroup(this.injector, this.config, e, U).pipe(vn(r => {
                if (r instanceof ua) return this.urlTree = r.urlTree, this.match(r.urlTree.root);
                throw r instanceof Yi ? this.noMatchError(r) : r
            }))
        }
        inheritParamsAndData(e, n) {
            let r = e.value,
                i = Ju(r, n, this.paramsInheritanceStrategy);
            r.params = Object.freeze(i.params), r.data = Object.freeze(i.data), e.children.forEach(o => this.inheritParamsAndData(o, r))
        }
        processSegmentGroup(e, n, r, i) {
            return r.segments.length === 0 && r.hasChildren() ? this.processChildren(e, n, r) : this.processSegment(e, n, r, r.segments, i, !0).pipe(V(o => o instanceof at ? [o] : []))
        }
        processChildren(e, n, r) {
            let i = [];
            for (let o of Object.keys(r.children)) o === "primary" ? i.unshift(o) : i.push(o);
            return he(i).pipe(Cn(o => {
                let s = r.children[o],
                    a = NI(n, o);
                return this.processSegmentGroup(e, a, s, o)
            }), za((o, s) => (o.push(...s), o)), Dn(null), Ha(), xe(o => {
                if (o === null) return Wr(r);
                let s = Am(o);
                return f_(s), N(s)
            }))
        }
        processSegment(e, n, r, i, o, s) {
            return he(n).pipe(Cn(a => this.processSegmentAgainstRoute(a._injector ?? e, n, a, r, i, o, s).pipe(vn(c => {
                if (c instanceof Yi) return N(null);
                throw c
            }))), Nt(a => !!a), vn(a => {
                if (xm(a)) return l_(r, i, o) ? N(new Yu) : Wr(r);
                throw a
            }))
        }
        processSegmentAgainstRoute(e, n, r, i, o, s, a) {
            return c_(r, i, o, s) ? r.redirectTo === void 0 ? this.matchSegmentAgainstRoute(e, i, r, o, s) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(e, i, n, r, o, s) : Wr(i) : Wr(i)
        }
        expandSegmentAgainstRouteUsingRedirect(e, n, r, i, o, s) {
            let {
                matched: a,
                consumedSegments: c,
                positionalParamSegments: l,
                remainingSegments: u
            } = nd(n, i, o);
            if (!a) return Wr(n);
            i.redirectTo.startsWith("/") && (this.absoluteRedirectCount++, this.absoluteRedirectCount > d_ && (this.allowRedirects = !1));
            let d = this.applyRedirects.applyRedirectCommands(c, i.redirectTo, l);
            return this.applyRedirects.lineralizeSegments(i, d).pipe(xe(f => this.processSegment(e, r, n, f.concat(u), s, !1)))
        }
        matchSegmentAgainstRoute(e, n, r, i, o) {
            let s = n_(n, r, i, e, this.urlSerializer);
            return r.path === "**" && (n.children = {}), s.pipe(rt(a => a.matched ? (e = r._injector ?? e, this.getChildConfig(e, r, i).pipe(rt(({
                routes: c
            }) => {
                let l = r._loadedInjector ?? e,
                    {
                        consumedSegments: u,
                        remainingSegments: d,
                        parameters: f
                    } = a,
                    p = new Gi(u, f, Object.freeze(b({}, this.urlTree.queryParams)), this.urlTree.fragment, h_(r), qt(r), r.component ?? r._loadedComponent ?? null, r, g_(r)),
                    {
                        segmentGroup: m,
                        slicedSegments: E
                    } = sm(n, u, d, c);
                if (E.length === 0 && m.hasChildren()) return this.processChildren(l, c, m).pipe(V(I => I === null ? null : new at(p, I)));
                if (c.length === 0 && E.length === 0) return N(new at(p, []));
                let M = qt(r) === o;
                return this.processSegment(l, c, m, E, M ? U : o, !0).pipe(V(I => new at(p, I instanceof at ? [I] : [])))
            }))) : Wr(n)))
        }
        getChildConfig(e, n, r) {
            return n.children ? N({
                routes: n.children,
                injector: e
            }) : n.loadChildren ? n._loadedRoutes !== void 0 ? N({
                routes: n._loadedRoutes,
                injector: n._loadedInjector
            }) : JI(e, n, r, this.urlSerializer).pipe(xe(i => i ? this.configLoader.loadChildren(e, n).pipe(Ae(o => {
                n._loadedRoutes = o.routes, n._loadedInjector = o.injector
            })) : t_(n))) : N({
                routes: [],
                injector: e
            })
        }
    };

function f_(t) {
    t.sort((e, n) => e.value.outlet === U ? -1 : n.value.outlet === U ? 1 : e.value.outlet.localeCompare(n.value.outlet))
}

function p_(t) {
    let e = t.value.routeConfig;
    return e && e.path === ""
}

function Am(t) {
    let e = [],
        n = new Set;
    for (let r of t) {
        if (!p_(r)) {
            e.push(r);
            continue
        }
        let i = e.find(o => r.value.routeConfig === o.value.routeConfig);
        i !== void 0 ? (i.children.push(...r.children), n.add(i)) : e.push(r)
    }
    for (let r of n) {
        let i = Am(r.children);
        e.push(new at(r.value, i))
    }
    return e.filter(r => !n.has(r))
}

function h_(t) {
    return t.data || {}
}

function g_(t) {
    return t.resolve || {}
}

function m_(t, e, n, r, i, o) {
    return xe(s => u_(t, e, n, r, s.extractedUrl, i, o).pipe(V(({
        state: a,
        tree: c
    }) => re(b({}, s), {
        targetSnapshot: a,
        urlAfterRedirects: c
    }))))
}

function y_(t, e) {
    return xe(n => {
        let {
            targetSnapshot: r,
            guards: {
                canActivateChecks: i
            }
        } = n;
        if (!i.length) return N(n);
        let o = new Set(i.map(c => c.route)),
            s = new Set;
        for (let c of o)
            if (!s.has(c))
                for (let l of Om(c)) s.add(l);
        let a = 0;
        return he(s).pipe(Cn(c => o.has(c) ? v_(c, r, t, e) : (c.data = Ju(c, c.parent, t).resolve, N(void 0))), Ae(() => a++), br(1), xe(c => a === s.size ? N(n) : tt))
    })
}

function Om(t) {
    let e = t.children.map(n => Om(n)).flat();
    return [t, ...e]
}

function v_(t, e, n, r) {
    let i = t.routeConfig,
        o = t._resolve;
    return i?.title !== void 0 && !Em(i) && (o[Ki] = i.title), C_(o, t, e, r).pipe(V(s => (t._resolvedData = s, t.data = Ju(t, t.parent, n).resolve, null)))
}

function C_(t, e, n, r) {
    let i = _u(t);
    if (i.length === 0) return N({});
    let o = {};
    return he(i).pipe(xe(s => D_(t[s], e, n, r).pipe(Nt(), Ae(a => {
        o[s] = a
    }))), br(1), $a(o), vn(s => xm(s) ? tt : Cr(s)))
}

function D_(t, e, n, r) {
    let i = Qi(e) ?? r,
        o = Xr(t, i),
        s = o.resolve ? o.resolve(e, n) : rn(i, () => o(e, n));
    return kn(s)
}

function Eu(t) {
    return rt(e => {
        let n = t(e);
        return n ? he(n).pipe(V(() => e)) : N(e)
    })
}
var Nm = (() => {
        let e = class e {
            buildTitle(r) {
                let i, o = r.root;
                for (; o !== void 0;) i = this.getResolvedTitleForRoute(o) ?? i, o = o.children.find(s => s.outlet === U);
                return i
            }
            getResolvedTitleForRoute(r) {
                return r.data[Ki]
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: () => D(b_),
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    b_ = (() => {
        let e = class e extends Nm {
            constructor(r) {
                super(), this.title = r
            }
            updateTitle(r) {
                let i = this.buildTitle(r);
                i !== void 0 && this.title.setTitle(i)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(L(tm))
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    rd = new A("", {
        providedIn: "root",
        factory: () => ({})
    }),
    id = new A(""),
    w_ = (() => {
        let e = class e {
            constructor() {
                this.componentLoaders = new WeakMap, this.childrenLoaders = new WeakMap, this.compiler = D(Zl)
            }
            loadComponent(r) {
                if (this.componentLoaders.get(r)) return this.componentLoaders.get(r);
                if (r._loadedComponent) return N(r._loadedComponent);
                this.onLoadStartListener && this.onLoadStartListener(r);
                let i = kn(r.loadComponent()).pipe(V(Rm), Ae(s => {
                        this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s
                    }), bn(() => {
                        this.componentLoaders.delete(r)
                    })),
                    o = new vr(i, () => new Fe).pipe(yr());
                return this.componentLoaders.set(r, o), o
            }
            loadChildren(r, i) {
                if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
                if (i._loadedRoutes) return N({
                    routes: i._loadedRoutes,
                    injector: i._loadedInjector
                });
                this.onLoadStartListener && this.onLoadStartListener(i);
                let s = E_(i, this.compiler, r, this.onLoadEndListener).pipe(bn(() => {
                        this.childrenLoaders.delete(i)
                    })),
                    a = new vr(s, () => new Fe).pipe(yr());
                return this.childrenLoaders.set(i, a), a
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })();

function E_(t, e, n, r) {
    return kn(t.loadChildren()).pipe(V(Rm), xe(i => i instanceof yi || Array.isArray(i) ? N(i) : he(e.compileModuleAsync(i))), V(i => {
        r && r(t);
        let o, s, a = !1;
        return Array.isArray(i) ? (s = i, a = !0) : (o = i.create(n).injector, s = o.get(id, [], {
            optional: !0,
            self: !0
        }).flat()), {
            routes: s.map(td),
            injector: o
        }
    }))
}

function I_(t) {
    return t && typeof t == "object" && "default" in t
}

function Rm(t) {
    return I_(t) ? t.default : t
}
var od = (() => {
        let e = class e {};
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: () => D(__),
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    __ = (() => {
        let e = class e {
            shouldProcessUrl(r) {
                return !0
            }
            extract(r) {
                return r
            }
            merge(r, i) {
                return r
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    M_ = new A("");
var S_ = (() => {
    let e = class e {
        get hasRequestedNavigation() {
            return this.navigationId !== 0
        }
        constructor() {
            this.currentNavigation = null, this.currentTransition = null, this.lastSuccessfulNavigation = null, this.events = new Fe, this.transitionAbortSubject = new Fe, this.configLoader = D(w_), this.environmentInjector = D(Qe), this.urlSerializer = D(Zu), this.rootContexts = D(da), this.location = D(xi), this.inputBindingEnabled = D(ed, {
                optional: !0
            }) !== null, this.titleStrategy = D(Nm), this.options = D(rd, {
                optional: !0
            }) || {}, this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly", this.urlHandlingStrategy = D(od), this.createViewTransition = D(M_, {
                optional: !0
            }), this.navigationId = 0, this.afterPreactivation = () => N(void 0), this.rootComponentType = null;
            let r = o => this.events.next(new Pu(o)),
                i = o => this.events.next(new Fu(o));
            this.configLoader.onLoadEndListener = i, this.configLoader.onLoadStartListener = r
        }
        complete() {
            this.transitions?.complete()
        }
        handleNavigationRequest(r) {
            let i = ++this.navigationId;
            this.transitions?.next(re(b(b({}, this.transitions.value), r), {
                id: i
            }))
        }
        setupNavigations(r, i, o) {
            return this.transitions = new ke({
                id: 0,
                currentUrlTree: i,
                currentRawUrl: i,
                extractedUrl: this.urlHandlingStrategy.extract(i),
                urlAfterRedirects: this.urlHandlingStrategy.extract(i),
                rawUrl: i,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: ji,
                restoredState: null,
                currentSnapshot: o.snapshot,
                targetSnapshot: null,
                currentRouterState: o,
                targetRouterState: null,
                guards: {
                    canActivateChecks: [],
                    canDeactivateChecks: []
                },
                guardsResult: null
            }), this.transitions.pipe(nt(s => s.id !== 0), V(s => re(b({}, s), {
                extractedUrl: this.urlHandlingStrategy.extract(s.rawUrl)
            })), rt(s => {
                let a = !1,
                    c = !1;
                return N(s).pipe(rt(l => {
                    if (this.navigationId > s.id) return this.cancelNavigationTransition(s, "", ct.SupersededByNewNavigation), tt;
                    this.currentTransition = s, this.currentNavigation = {
                        id: l.id,
                        initialUrl: l.rawUrl,
                        extractedUrl: l.extractedUrl,
                        trigger: l.source,
                        extras: l.extras,
                        previousNavigation: this.lastSuccessfulNavigation ? re(b({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null
                        }) : null
                    };
                    let u = !r.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(),
                        d = l.extras.onSameUrlNavigation ?? r.onSameUrlNavigation;
                    if (!u && d !== "reload") {
                        let f = "";
                        return this.events.next(new lr(l.id, this.urlSerializer.serialize(l.rawUrl), f, Tu.IgnoredSameUrlNavigation)), l.resolve(null), tt
                    }
                    if (this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl)) return N(l).pipe(rt(f => {
                        let p = this.transitions?.getValue();
                        return this.events.next(new $i(f.id, this.urlSerializer.serialize(f.extractedUrl), f.source, f.restoredState)), p !== this.transitions?.getValue() ? tt : Promise.resolve(f)
                    }), m_(this.environmentInjector, this.configLoader, this.rootComponentType, r.config, this.urlSerializer, this.paramsInheritanceStrategy), Ae(f => {
                        s.targetSnapshot = f.targetSnapshot, s.urlAfterRedirects = f.urlAfterRedirects, this.currentNavigation = re(b({}, this.currentNavigation), {
                            finalUrl: f.urlAfterRedirects
                        });
                        let p = new oa(f.id, this.urlSerializer.serialize(f.extractedUrl), this.urlSerializer.serialize(f.urlAfterRedirects), f.targetSnapshot);
                        this.events.next(p)
                    }));
                    if (u && this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)) {
                        let {
                            id: f,
                            extractedUrl: p,
                            source: m,
                            restoredState: E,
                            extras: M
                        } = l, I = new $i(f, this.urlSerializer.serialize(p), m, E);
                        this.events.next(I);
                        let ae = bm(this.rootComponentType).snapshot;
                        return this.currentTransition = s = re(b({}, l), {
                            targetSnapshot: ae,
                            urlAfterRedirects: p,
                            extras: re(b({}, M), {
                                skipLocationChange: !1,
                                replaceUrl: !1
                            })
                        }), this.currentNavigation.finalUrl = p, N(s)
                    } else {
                        let f = "";
                        return this.events.next(new lr(l.id, this.urlSerializer.serialize(l.extractedUrl), f, Tu.IgnoredByUrlHandlingStrategy)), l.resolve(null), tt
                    }
                }), Ae(l => {
                    let u = new Au(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects), l.targetSnapshot);
                    this.events.next(u)
                }), V(l => (this.currentTransition = s = re(b({}, l), {
                    guards: PI(l.targetSnapshot, l.currentSnapshot, this.rootContexts)
                }), s)), zI(this.environmentInjector, l => this.events.next(l)), Ae(l => {
                    if (s.guardsResult = l.guardsResult, Qr(l.guardsResult)) throw _m(this.urlSerializer, l.guardsResult);
                    let u = new Ou(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
                    this.events.next(u)
                }), nt(l => l.guardsResult ? !0 : (this.cancelNavigationTransition(l, "", ct.GuardRejected), !1)), Eu(l => {
                    if (l.guards.canActivateChecks.length) return N(l).pipe(Ae(u => {
                        let d = new Nu(u.id, this.urlSerializer.serialize(u.extractedUrl), this.urlSerializer.serialize(u.urlAfterRedirects), u.targetSnapshot);
                        this.events.next(d)
                    }), rt(u => {
                        let d = !1;
                        return N(u).pipe(y_(this.paramsInheritanceStrategy, this.environmentInjector), Ae({
                            next: () => d = !0,
                            complete: () => {
                                d || this.cancelNavigationTransition(u, "", ct.NoDataFromResolver)
                            }
                        }))
                    }), Ae(u => {
                        let d = new Ru(u.id, this.urlSerializer.serialize(u.extractedUrl), this.urlSerializer.serialize(u.urlAfterRedirects), u.targetSnapshot);
                        this.events.next(d)
                    }))
                }), Eu(l => {
                    let u = d => {
                        let f = [];
                        d.routeConfig?.loadComponent && !d.routeConfig._loadedComponent && f.push(this.configLoader.loadComponent(d.routeConfig).pipe(Ae(p => {
                            d.component = p
                        }), V(() => {})));
                        for (let p of d.children) f.push(...u(p));
                        return f
                    };
                    return Ao(u(l.targetSnapshot.root)).pipe(Dn(null), Zt(1))
                }), Eu(() => this.afterPreactivation()), rt(() => {
                    let {
                        currentSnapshot: l,
                        targetSnapshot: u
                    } = s, d = this.createViewTransition?.(this.environmentInjector, l.root, u.root);
                    return d ? he(d).pipe(V(() => s)) : N(s)
                }), V(l => {
                    let u = MI(r.routeReuseStrategy, l.targetSnapshot, l.currentRouterState);
                    return this.currentTransition = s = re(b({}, l), {
                        targetRouterState: u
                    }), this.currentNavigation.targetRouterState = u, s
                }), Ae(() => {
                    this.events.next(new zi)
                }), RI(this.rootContexts, r.routeReuseStrategy, l => this.events.next(l), this.inputBindingEnabled), Zt(1), Ae({
                    next: l => {
                        a = !0, this.lastSuccessfulNavigation = this.currentNavigation, this.events.next(new cr(l.id, this.urlSerializer.serialize(l.extractedUrl), this.urlSerializer.serialize(l.urlAfterRedirects))), this.titleStrategy?.updateTitle(l.targetRouterState.snapshot), l.resolve(!0)
                    },
                    complete: () => {
                        a = !0
                    }
                }), Ga(this.transitionAbortSubject.pipe(Ae(l => {
                    throw l
                }))), bn(() => {
                    !a && !c && this.cancelNavigationTransition(s, "", ct.SupersededByNewNavigation), this.currentTransition?.id === s.id && (this.currentNavigation = null, this.currentTransition = null)
                }), vn(l => {
                    if (c = !0, Sm(l)) this.events.next(new Fn(s.id, this.urlSerializer.serialize(s.extractedUrl), l.message, l.cancellationCode)), TI(l) ? this.events.next(new Wi(l.url)) : s.resolve(!1);
                    else {
                        this.events.next(new Hi(s.id, this.urlSerializer.serialize(s.extractedUrl), l, s.targetSnapshot ?? void 0));
                        try {
                            s.resolve(r.errorHandler(l))
                        } catch (u) {
                            this.options.resolveNavigationPromiseOnError ? s.resolve(!1) : s.reject(u)
                        }
                    }
                    return tt
                }))
            }))
        }
        cancelNavigationTransition(r, i, o) {
            let s = new Fn(r.id, this.urlSerializer.serialize(r.extractedUrl), i, o);
            this.events.next(s), r.resolve(!1)
        }
        isUpdatingInternalState() {
            return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString()
        }
        isUpdatedBrowserUrl() {
            return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString() !== this.currentTransition?.extractedUrl.toString() && !this.currentTransition?.extras.skipLocationChange
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275prov = x({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    });
    let t = e;
    return t
})();

function x_(t) {
    return t !== ji
}
var T_ = (() => {
        let e = class e {};
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: () => D(A_),
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    Qu = class {
        shouldDetach(e) {
            return !1
        }
        store(e, n) {}
        shouldAttach(e) {
            return !1
        }
        retrieve(e) {
            return null
        }
        shouldReuseRoute(e, n) {
            return e.routeConfig === n.routeConfig
        }
    },
    A_ = (() => {
        let e = class e extends Qu {};
        e.\u0275fac = (() => {
            let r;
            return function(o) {
                return (r || (r = Oe(e)))(o || e)
            }
        })(), e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    Pm = (() => {
        let e = class e {};
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: () => D(O_),
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    O_ = (() => {
        let e = class e extends Pm {
            constructor() {
                super(...arguments), this.location = D(xi), this.urlSerializer = D(Zu), this.options = D(rd, {
                    optional: !0
                }) || {}, this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace", this.urlHandlingStrategy = D(od), this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred", this.currentUrlTree = new Pn, this.rawUrlTree = this.currentUrlTree, this.currentPageId = 0, this.lastSuccessfulId = -1, this.routerState = bm(null), this.stateMemento = this.createStateMemento()
            }
            getCurrentUrlTree() {
                return this.currentUrlTree
            }
            getRawUrlTree() {
                return this.rawUrlTree
            }
            restoredState() {
                return this.location.getState()
            }
            get browserPageId() {
                return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId
            }
            getRouterState() {
                return this.routerState
            }
            createStateMemento() {
                return {
                    rawUrlTree: this.rawUrlTree,
                    currentUrlTree: this.currentUrlTree,
                    routerState: this.routerState
                }
            }
            registerNonRouterCurrentEntryChangeListener(r) {
                return this.location.subscribe(i => {
                    i.type === "popstate" && r(i.url, i.state)
                })
            }
            handleRouterEvent(r, i) {
                if (r instanceof $i) this.stateMemento = this.createStateMemento();
                else if (r instanceof lr) this.rawUrlTree = i.initialUrl;
                else if (r instanceof oa) {
                    if (this.urlUpdateStrategy === "eager" && !i.extras.skipLocationChange) {
                        let o = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl);
                        this.setBrowserUrl(o, i)
                    }
                } else r instanceof zi ? (this.currentUrlTree = i.finalUrl, this.rawUrlTree = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl), this.routerState = i.targetRouterState, this.urlUpdateStrategy === "deferred" && (i.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, i))) : r instanceof Fn && (r.code === ct.GuardRejected || r.code === ct.NoDataFromResolver) ? this.restoreHistory(i) : r instanceof Hi ? this.restoreHistory(i, !0) : r instanceof cr && (this.lastSuccessfulId = r.id, this.currentPageId = this.browserPageId)
            }
            setBrowserUrl(r, i) {
                let o = this.urlSerializer.serialize(r);
                if (this.location.isCurrentPathEqualTo(o) || i.extras.replaceUrl) {
                    let s = this.browserPageId,
                        a = b(b({}, i.extras.state), this.generateNgRouterState(i.id, s));
                    this.location.replaceState(o, "", a)
                } else {
                    let s = b(b({}, i.extras.state), this.generateNgRouterState(i.id, this.browserPageId + 1));
                    this.location.go(o, "", s)
                }
            }
            restoreHistory(r, i = !1) {
                if (this.canceledNavigationResolution === "computed") {
                    let o = this.browserPageId,
                        s = this.currentPageId - o;
                    s !== 0 ? this.location.historyGo(s) : this.currentUrlTree === r.finalUrl && s === 0 && (this.resetState(r), this.resetUrlToCurrentUrlTree())
                } else this.canceledNavigationResolution === "replace" && (i && this.resetState(r), this.resetUrlToCurrentUrlTree())
            }
            resetState(r) {
                this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, r.finalUrl ?? this.rawUrlTree)
            }
            resetUrlToCurrentUrlTree() {
                this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
            }
            generateNgRouterState(r, i) {
                return this.canceledNavigationResolution === "computed" ? {
                    navigationId: r,
                    \u0275routerPageId: i
                } : {
                    navigationId: r
                }
            }
        };
        e.\u0275fac = (() => {
            let r;
            return function(o) {
                return (r || (r = Oe(e)))(o || e)
            }
        })(), e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })(),
    Li = function(t) {
        return t[t.COMPLETE = 0] = "COMPLETE", t[t.FAILED = 1] = "FAILED", t[t.REDIRECTING = 2] = "REDIRECTING", t
    }(Li || {});

function N_(t, e) {
    t.events.pipe(nt(n => n instanceof cr || n instanceof Fn || n instanceof Hi || n instanceof lr), V(n => n instanceof cr || n instanceof lr ? Li.COMPLETE : (n instanceof Fn ? n.code === ct.Redirect || n.code === ct.SupersededByNewNavigation : !1) ? Li.REDIRECTING : Li.FAILED), nt(n => n !== Li.REDIRECTING), Zt(1)).subscribe(() => {
        e()
    })
}

function R_(t) {
    throw t
}
var P_ = {
        paths: "exact",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "exact"
    },
    F_ = {
        paths: "subset",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "subset"
    },
    Fm = (() => {
        let e = class e {
            get currentUrlTree() {
                return this.stateManager.getCurrentUrlTree()
            }
            get rawUrlTree() {
                return this.stateManager.getRawUrlTree()
            }
            get events() {
                return this._events
            }
            get routerState() {
                return this.stateManager.getRouterState()
            }
            constructor() {
                this.disposed = !1, this.isNgZoneEnabled = !1, this.console = D(Fs), this.stateManager = D(Pm), this.options = D(rd, {
                    optional: !0
                }) || {}, this.pendingTasks = D(nr), this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred", this.navigationTransitions = D(S_), this.urlSerializer = D(Zu), this.location = D(xi), this.urlHandlingStrategy = D(od), this._events = new Fe, this.errorHandler = this.options.errorHandler || R_, this.navigated = !1, this.routeReuseStrategy = D(T_), this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore", this.config = D(id, {
                    optional: !0
                })?.flat() ?? [], this.componentInputBindingEnabled = !!D(ed, {
                    optional: !0
                }), this.eventsSubscription = new Se, this.isNgZoneEnabled = D(ue) instanceof ue && ue.isInAngularZone(), this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
                    error: r => {
                        this.console.warn(r)
                    }
                }), this.subscribeToNavigationEvents()
            }
            subscribeToNavigationEvents() {
                let r = this.navigationTransitions.events.subscribe(i => {
                    try {
                        let o = this.navigationTransitions.currentTransition,
                            s = this.navigationTransitions.currentNavigation;
                        if (o !== null && s !== null) {
                            if (this.stateManager.handleRouterEvent(i, s), i instanceof Fn && i.code !== ct.Redirect && i.code !== ct.SupersededByNewNavigation) this.navigated = !0;
                            else if (i instanceof cr) this.navigated = !0;
                            else if (i instanceof Wi) {
                                let a = this.urlHandlingStrategy.merge(i.url, o.currentRawUrl),
                                    c = {
                                        info: o.extras.info,
                                        skipLocationChange: o.extras.skipLocationChange,
                                        replaceUrl: this.urlUpdateStrategy === "eager" || x_(o.source)
                                    };
                                this.scheduleNavigation(a, ji, null, c, {
                                    resolve: o.resolve,
                                    reject: o.reject,
                                    promise: o.promise
                                })
                            }
                        }
                        L_(i) && this._events.next(i)
                    } catch (o) {
                        this.navigationTransitions.transitionAbortSubject.next(o)
                    }
                });
                this.eventsSubscription.add(r)
            }
            resetRootComponentType(r) {
                this.routerState.root.component = r, this.navigationTransitions.rootComponentType = r
            }
            initialNavigation() {
                this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), ji, this.stateManager.restoredState())
            }
            setUpLocationChangeListener() {
                this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((r, i) => {
                    setTimeout(() => {
                        this.navigateToSyncWithBrowser(r, "popstate", i)
                    }, 0)
                })
            }
            navigateToSyncWithBrowser(r, i, o) {
                let s = {
                        replaceUrl: !0
                    },
                    a = o?.navigationId ? o : null;
                if (o) {
                    let l = b({}, o);
                    delete l.navigationId, delete l.\u0275routerPageId, Object.keys(l).length !== 0 && (s.state = l)
                }
                let c = this.parseUrl(r);
                this.scheduleNavigation(c, i, a, s)
            }
            get url() {
                return this.serializeUrl(this.currentUrlTree)
            }
            getCurrentNavigation() {
                return this.navigationTransitions.currentNavigation
            }
            get lastSuccessfulNavigation() {
                return this.navigationTransitions.lastSuccessfulNavigation
            }
            resetConfig(r) {
                this.config = r.map(td), this.navigated = !1
            }
            ngOnDestroy() {
                this.dispose()
            }
            dispose() {
                this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe()
            }
            createUrlTree(r, i = {}) {
                let {
                    relativeTo: o,
                    queryParams: s,
                    fragment: a,
                    queryParamsHandling: c,
                    preserveFragment: l
                } = i, u = l ? this.currentUrlTree.fragment : a, d = null;
                switch (c) {
                    case "merge":
                        d = b(b({}, this.currentUrlTree.queryParams), s);
                        break;
                    case "preserve":
                        d = this.currentUrlTree.queryParams;
                        break;
                    default:
                        d = s || null
                }
                d !== null && (d = this.removeEmptyProps(d));
                let f;
                try {
                    let p = o ? o.snapshot : this.routerState.snapshot.root;
                    f = ym(p)
                } catch {
                    (typeof r[0] != "string" || !r[0].startsWith("/")) && (r = []), f = this.currentUrlTree.root
                }
                return vm(f, r, d, u ?? null)
            }
            navigateByUrl(r, i = {
                skipLocationChange: !1
            }) {
                let o = Qr(r) ? r : this.parseUrl(r),
                    s = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
                return this.scheduleNavigation(s, ji, null, i)
            }
            navigate(r, i = {
                skipLocationChange: !1
            }) {
                return k_(r), this.navigateByUrl(this.createUrlTree(r, i), i)
            }
            serializeUrl(r) {
                return this.urlSerializer.serialize(r)
            }
            parseUrl(r) {
                try {
                    return this.urlSerializer.parse(r)
                } catch {
                    return this.urlSerializer.parse("/")
                }
            }
            isActive(r, i) {
                let o;
                if (i === !0 ? o = b({}, P_) : i === !1 ? o = b({}, F_) : o = i, Qr(r)) return nm(this.currentUrlTree, r, o);
                let s = this.parseUrl(r);
                return nm(this.currentUrlTree, s, o)
            }
            removeEmptyProps(r) {
                return Object.entries(r).reduce((i, [o, s]) => (s != null && (i[o] = s), i), {})
            }
            scheduleNavigation(r, i, o, s, a) {
                if (this.disposed) return Promise.resolve(!1);
                let c, l, u;
                a ? (c = a.resolve, l = a.reject, u = a.promise) : u = new Promise((f, p) => {
                    c = f, l = p
                });
                let d = this.pendingTasks.add();
                return N_(this, () => {
                    queueMicrotask(() => this.pendingTasks.remove(d))
                }), this.navigationTransitions.handleNavigationRequest({
                    source: i,
                    restoredState: o,
                    currentUrlTree: this.currentUrlTree,
                    currentRawUrl: this.currentUrlTree,
                    rawUrl: r,
                    extras: s,
                    resolve: c,
                    reject: l,
                    promise: u,
                    currentSnapshot: this.routerState.snapshot,
                    currentRouterState: this.routerState
                }), u.catch(f => Promise.reject(f))
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275prov = x({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        });
        let t = e;
        return t
    })();

function k_(t) {
    for (let e = 0; e < t.length; e++)
        if (t[e] == null) throw new S(4008, !1)
}

function L_(t) {
    return !(t instanceof zi) && !(t instanceof Wi)
}
var V_ = new A("");

function km(t, ...e) {
    return Fr([{
            provide: id,
            multi: !0,
            useValue: t
        },
        [], {
            provide: Zr,
            useFactory: j_,
            deps: [Fm]
        }, {
            provide: ks,
            multi: !0,
            useFactory: U_
        },
        e.map(n => n.\u0275providers)
    ])
}

function j_(t) {
    return t.routerState.root
}

function U_() {
    let t = D(Lr);
    return e => {
        let n = t.get(Br);
        if (e !== n.components[0]) return;
        let r = t.get(Fm),
            i = t.get(B_);
        t.get($_) === 1 && r.initialNavigation(), t.get(H_, null, G.Optional)?.setUpPreloading(), t.get(V_, null, G.Optional)?.init(), r.resetRootComponentType(n.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe())
    }
}
var B_ = new A("", {
        factory: () => new Fe
    }),
    $_ = new A("", {
        providedIn: "root",
        factory: () => 1
    });
var H_ = new A("");
var Lm = [];
var Vm = {
    providers: [km(Lm)]
};
var jm = (() => {
    let e = class e {
        constructor(r) {
            this.renderer = r, this.observer = null, this.sections = [], this.navLinks = [], this.mobileMenuIcon = null, this.navMenu = null
        }
        ngAfterViewInit() {
            this.sections = Array.from(document.querySelectorAll("section[id]")), this.navLinks = Array.from(document.querySelectorAll("nav .nav-menu a")), this.mobileMenuIcon = document.getElementById("mobile-menu-icon"), this.navMenu = document.querySelector(".nav-menu"), this.setupIntersectionObserver(), this.setupNavLinkClickListeners(), this.setupMobileMenuToggle()
        }
        ngOnDestroy() {
            this.observer && this.observer.disconnect()
        }
        setupIntersectionObserver() {
            let r = {
                root: null,
                rootMargin: "0px",
                threshold: .3
            };
            this.observer = new IntersectionObserver(i => {
                i.forEach(o => {
                    o.isIntersecting && this.setActiveNavLink(o.target.id)
                })
            }, r), this.sections.forEach(i => {
                this.observer?.observe(i)
            })
        }
        setupNavLinkClickListeners() {
            this.navLinks.forEach(r => {
                this.renderer.listen(r, "click", i => {
                    i.preventDefault();
                    let o = r.getAttribute("href")?.substring(1),
                        s = document.getElementById(o ?? "");
                    s && s.scrollIntoView({
                        behavior: "smooth"
                    }), this.navMenu && this.renderer.removeClass(this.navMenu, "show")
                })
            })
        }
        setActiveNavLink(r) {
            this.navLinks.forEach(i => {
                let o = i.parentElement;
                o && (i.getAttribute("href") === `#${r}` ? this.renderer.addClass(o, "active") : this.renderer.removeClass(o, "active"))
            })
        }
        setupMobileMenuToggle() {
            this.mobileMenuIcon && this.navMenu && (this.renderer.listen(this.mobileMenuIcon, "click", r => {
                r.stopPropagation(), this.toggleMobileMenu()
            }), this.renderer.listen("document", "click", r => {
                !this.navMenu?.contains(r.target) && !this.mobileMenuIcon?.contains(r.target) && this.closeMobileMenu()
            }))
        }
        toggleMobileMenu() {
            this.navMenu && (this.navMenu.classList.contains("show") ? this.closeMobileMenu() : this.openMobileMenu())
        }
        openMobileMenu() {
            this.navMenu && this.renderer.addClass(this.navMenu, "show")
        }
        closeMobileMenu() {
            this.navMenu && this.renderer.removeClass(this.navMenu, "show")
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)(_(Je))
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-header"]
        ],
        standalone: !0,
        features: [j],
        decls: 28,
        vars: 0,
        consts: [
            ["id", "nav", 1, "nav"],
            [1, "container"],
            ["href", "#home", 1, "logo"],
            ["id", "mobile-menu-icon", "onclick", "toggleMenu()", 1, "mobile-menu-btn"],
            ["id", "nav-menu", 1, "nav-menu"],
            ["href", "#home"],
            ["href", "#about"],
            ["href", "#experience"],
            ["href", "#education"],
            ["href", "#skills"],
            ["href", "#project"],
            ["href", "#contact"]
        ],
        template: function(i, o) {
            i & 1 && (g(0, "nav", 0)(1, "div", 1)(2, "a", 2), v(3, "Dileep Kumar Varma, Penmetsa"), h(), g(4, "button", 3), v(5, "\u2630"), h(), g(6, "ul", 4)(7, "li")(8, "a", 5), v(9, "Home"), h()(), g(10, "li")(11, "a", 6), v(12, "About"), h()(), g(13, "li")(14, "a", 7), v(15, "Experience"), h()(), g(16, "li")(17, "a", 8), v(18, "Education"), h()(), g(19, "li")(20, "a", 9), v(21, "Skills"), h()(), g(22, "li")(23, "a", 10), v(24, "Projects"), h()(), g(25, "li")(26, "a", 11), v(27, "Contact"), h()()()()())
        },
        styles: ["nav[_ngcontent-%COMP%]{background-color:#000;padding:.5em 0;position:fixed;width:100%;top:0;z-index:1000;transition:all .3s ease;box-shadow:0 4px 12px #0003}nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;max-width:1400px;margin:0 auto;padding:0 20px}nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-family:Montserrat;font-size:1.8em;font-weight:700;color:#87CEEB;text-decoration:none;transition:color .3s ease,transform .3s ease;margin-left:50px}nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover{color:#87CEEB;transform:scale(1.1)}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]{list-style:none;display:flex;padding-left:100px}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#b8acac;text-decoration:none;padding:10px 15px;border-radius:5px;transition:color .3s ease;font-size:1em;font-weight:500}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#87CEEB}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#87CEEB;font-weight:700;text-decoration:underline;text-decoration-color:#87CEEB;text-decoration-thickness:1.5px;text-underline-offset:6px}#mobile-menu-icon[_ngcontent-%COMP%]{display:none;cursor:pointer;font-size:24px;transition:color .3s ease}@media screen and (max-width: 768px){nav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-left:0;margin-bottom:10px;padding-top:5px}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]{display:none;flex-direction:column;width:100%;padding-left:0;text-align:center}nav[_ngcontent-%COMP%]   .nav-menu.show[_ngcontent-%COMP%]{display:flex}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:large}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:10px}#mobile-menu-icon[_ngcontent-%COMP%]{display:block;position:absolute;top:10px;right:20px}}@media screen and (max-width: 480px){nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-size:1.5em}nav[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.9em}}"]
    });
    let t = e;
    return t
})();
var Ym = (() => {
        let e = class e {
            constructor(r, i) {
                this._renderer = r, this._elementRef = i, this.onChange = o => {}, this.onTouched = () => {}
            }
            setProperty(r, i) {
                this._renderer.setProperty(this._elementRef.nativeElement, r, i)
            }
            registerOnTouched(r) {
                this.onTouched = r
            }
            registerOnChange(r) {
                this.onChange = r
            }
            setDisabledState(r) {
                this.setProperty("disabled", r)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(Je), _(_e))
        }, e.\u0275dir = oe({
            type: e
        });
        let t = e;
        return t
    })(),
    z_ = (() => {
        let e = class e extends Ym {};
        e.\u0275fac = (() => {
            let r;
            return function(o) {
                return (r || (r = Oe(e)))(o || e)
            }
        })(), e.\u0275dir = oe({
            type: e,
            features: [ye]
        });
        let t = e;
        return t
    })(),
    Km = new A("");
var W_ = {
    provide: Km,
    useExisting: nn(() => Ca),
    multi: !0
};

function G_() {
    let t = dn() ? dn().getUserAgent() : "";
    return /android (\d+)/.test(t.toLowerCase())
}
var q_ = new A(""),
    Ca = (() => {
        let e = class e extends Ym {
            constructor(r, i, o) {
                super(r, i), this._compositionMode = o, this._composing = !1, this._compositionMode == null && (this._compositionMode = !G_())
            }
            writeValue(r) {
                let i = r ?? "";
                this.setProperty("value", i)
            }
            _handleInput(r) {
                (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(r)
            }
            _compositionStart() {
                this._composing = !0
            }
            _compositionEnd(r) {
                this._composing = !1, this._compositionMode && this.onChange(r)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(Je), _(_e), _(q_, 8))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["input", "formControlName", "", 3, "type", "checkbox"],
                ["textarea", "formControlName", ""],
                ["input", "formControl", "", 3, "type", "checkbox"],
                ["textarea", "formControl", ""],
                ["input", "ngModel", "", 3, "type", "checkbox"],
                ["textarea", "ngModel", ""],
                ["", "ngDefaultControl", ""]
            ],
            hostBindings: function(i, o) {
                i & 1 && ve("input", function(a) {
                    return o._handleInput(a.target.value)
                })("blur", function() {
                    return o.onTouched()
                })("compositionstart", function() {
                    return o._compositionStart()
                })("compositionend", function(a) {
                    return o._compositionEnd(a.target.value)
                })
            },
            features: [rr([W_]), ye]
        });
        let t = e;
        return t
    })();

function ad(t) {
    return t == null || (typeof t == "string" || Array.isArray(t)) && t.length === 0
}

function Y_(t) {
    return t != null && typeof t.length == "number"
}
var no = new A(""),
    Qm = new A(""),
    K_ = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function Q_(t) {
    return ad(t.value) ? {
        required: !0
    } : null
}

function Z_(t) {
    return ad(t.value) || K_.test(t.value) ? null : {
        email: !0
    }
}

function J_(t) {
    return e => ad(e.value) || !Y_(e.value) ? null : e.value.length < t ? {
        minlength: {
            requiredLength: t,
            actualLength: e.value.length
        }
    } : null
}

function Um(t) {
    return null
}

function Zm(t) {
    return t != null
}

function Jm(t) {
    return ir(t) ? he(t) : t
}

function Xm(t) {
    let e = {};
    return t.forEach(n => {
        e = n != null ? b(b({}, e), n) : e
    }), Object.keys(e).length === 0 ? null : e
}

function ey(t, e) {
    return e.map(n => n(t))
}

function X_(t) {
    return !t.validate
}

function ty(t) {
    return t.map(e => X_(e) ? e : n => e.validate(n))
}

function eM(t) {
    if (!t) return null;
    let e = t.filter(Zm);
    return e.length == 0 ? null : function(n) {
        return Xm(ey(n, e))
    }
}

function cd(t) {
    return t != null ? eM(ty(t)) : null
}

function tM(t) {
    if (!t) return null;
    let e = t.filter(Zm);
    return e.length == 0 ? null : function(n) {
        let r = ey(n, e).map(Jm);
        return Ba(r).pipe(V(Xm))
    }
}

function ld(t) {
    return t != null ? tM(ty(t)) : null
}

function Bm(t, e) {
    return t === null ? [e] : Array.isArray(t) ? [...t, e] : [t, e]
}

function nM(t) {
    return t._rawValidators
}

function rM(t) {
    return t._rawAsyncValidators
}

function sd(t) {
    return t ? Array.isArray(t) ? t : [t] : []
}

function ha(t, e) {
    return Array.isArray(t) ? t.includes(e) : t === e
}

function $m(t, e) {
    let n = sd(e);
    return sd(t).forEach(i => {
        ha(n, i) || n.push(i)
    }), n
}

function Hm(t, e) {
    return sd(e).filter(n => !ha(t, n))
}
var ga = class {
        constructor() {
            this._rawValidators = [], this._rawAsyncValidators = [], this._onDestroyCallbacks = []
        }
        get value() {
            return this.control ? this.control.value : null
        }
        get valid() {
            return this.control ? this.control.valid : null
        }
        get invalid() {
            return this.control ? this.control.invalid : null
        }
        get pending() {
            return this.control ? this.control.pending : null
        }
        get disabled() {
            return this.control ? this.control.disabled : null
        }
        get enabled() {
            return this.control ? this.control.enabled : null
        }
        get errors() {
            return this.control ? this.control.errors : null
        }
        get pristine() {
            return this.control ? this.control.pristine : null
        }
        get dirty() {
            return this.control ? this.control.dirty : null
        }
        get touched() {
            return this.control ? this.control.touched : null
        }
        get status() {
            return this.control ? this.control.status : null
        }
        get untouched() {
            return this.control ? this.control.untouched : null
        }
        get statusChanges() {
            return this.control ? this.control.statusChanges : null
        }
        get valueChanges() {
            return this.control ? this.control.valueChanges : null
        }
        get path() {
            return null
        }
        _setValidators(e) {
            this._rawValidators = e || [], this._composedValidatorFn = cd(this._rawValidators)
        }
        _setAsyncValidators(e) {
            this._rawAsyncValidators = e || [], this._composedAsyncValidatorFn = ld(this._rawAsyncValidators)
        }
        get validator() {
            return this._composedValidatorFn || null
        }
        get asyncValidator() {
            return this._composedAsyncValidatorFn || null
        }
        _registerOnDestroy(e) {
            this._onDestroyCallbacks.push(e)
        }
        _invokeOnDestroyCallbacks() {
            this._onDestroyCallbacks.forEach(e => e()), this._onDestroyCallbacks = []
        }
        reset(e = void 0) {
            this.control && this.control.reset(e)
        }
        hasError(e, n) {
            return this.control ? this.control.hasError(e, n) : !1
        }
        getError(e, n) {
            return this.control ? this.control.getError(e, n) : null
        }
    },
    ti = class extends ga {
        get formDirective() {
            return null
        }
        get path() {
            return null
        }
    },
    to = class extends ga {
        constructor() {
            super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null
        }
    },
    ma = class {
        constructor(e) {
            this._cd = e
        }
        get isTouched() {
            return !!this._cd?.control?.touched
        }
        get isUntouched() {
            return !!this._cd?.control?.untouched
        }
        get isPristine() {
            return !!this._cd?.control?.pristine
        }
        get isDirty() {
            return !!this._cd?.control?.dirty
        }
        get isValid() {
            return !!this._cd?.control?.valid
        }
        get isInvalid() {
            return !!this._cd?.control?.invalid
        }
        get isPending() {
            return !!this._cd?.control?.pending
        }
        get isSubmitted() {
            return !!this._cd?.submitted
        }
    },
    iM = {
        "[class.ng-untouched]": "isUntouched",
        "[class.ng-touched]": "isTouched",
        "[class.ng-pristine]": "isPristine",
        "[class.ng-dirty]": "isDirty",
        "[class.ng-valid]": "isValid",
        "[class.ng-invalid]": "isInvalid",
        "[class.ng-pending]": "isPending"
    },
    FP = re(b({}, iM), {
        "[class.ng-submitted]": "isSubmitted"
    }),
    ny = (() => {
        let e = class e extends ma {
            constructor(r) {
                super(r)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(to, 2))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""]
            ],
            hostVars: 14,
            hostBindings: function(i, o) {
                i & 2 && xn("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)("ng-pristine", o.isPristine)("ng-dirty", o.isDirty)("ng-valid", o.isValid)("ng-invalid", o.isInvalid)("ng-pending", o.isPending)
            },
            features: [ye]
        });
        let t = e;
        return t
    })(),
    ry = (() => {
        let e = class e extends ma {
            constructor(r) {
                super(r)
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(ti, 10))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""]
            ],
            hostVars: 16,
            hostBindings: function(i, o) {
                i & 2 && xn("ng-untouched", o.isUntouched)("ng-touched", o.isTouched)("ng-pristine", o.isPristine)("ng-dirty", o.isDirty)("ng-valid", o.isValid)("ng-invalid", o.isInvalid)("ng-pending", o.isPending)("ng-submitted", o.isSubmitted)
            },
            features: [ye]
        });
        let t = e;
        return t
    })();
var Ji = "VALID",
    pa = "INVALID",
    ei = "PENDING",
    Xi = "DISABLED";

function iy(t) {
    return (Da(t) ? t.validators : t) || null
}

function oM(t) {
    return Array.isArray(t) ? cd(t) : t || null
}

function oy(t, e) {
    return (Da(e) ? e.asyncValidators : t) || null
}

function sM(t) {
    return Array.isArray(t) ? ld(t) : t || null
}

function Da(t) {
    return t != null && !Array.isArray(t) && typeof t == "object"
}

function aM(t, e, n) {
    let r = t.controls;
    if (!(e ? Object.keys(r) : r).length) throw new S(1e3, "");
    if (!r[n]) throw new S(1001, "")
}

function cM(t, e, n) {
    t._forEachChild((r, i) => {
        if (n[i] === void 0) throw new S(1002, "")
    })
}
var ya = class {
        constructor(e, n) {
            this._pendingDirty = !1, this._hasOwnPendingAsyncValidator = !1, this._pendingTouched = !1, this._onCollectionChange = () => {}, this._parent = null, this.pristine = !0, this.touched = !1, this._onDisabledChange = [], this._assignValidators(e), this._assignAsyncValidators(n)
        }
        get validator() {
            return this._composedValidatorFn
        }
        set validator(e) {
            this._rawValidators = this._composedValidatorFn = e
        }
        get asyncValidator() {
            return this._composedAsyncValidatorFn
        }
        set asyncValidator(e) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = e
        }
        get parent() {
            return this._parent
        }
        get valid() {
            return this.status === Ji
        }
        get invalid() {
            return this.status === pa
        }
        get pending() {
            return this.status == ei
        }
        get disabled() {
            return this.status === Xi
        }
        get enabled() {
            return this.status !== Xi
        }
        get dirty() {
            return !this.pristine
        }
        get untouched() {
            return !this.touched
        }
        get updateOn() {
            return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
        }
        setValidators(e) {
            this._assignValidators(e)
        }
        setAsyncValidators(e) {
            this._assignAsyncValidators(e)
        }
        addValidators(e) {
            this.setValidators($m(e, this._rawValidators))
        }
        addAsyncValidators(e) {
            this.setAsyncValidators($m(e, this._rawAsyncValidators))
        }
        removeValidators(e) {
            this.setValidators(Hm(e, this._rawValidators))
        }
        removeAsyncValidators(e) {
            this.setAsyncValidators(Hm(e, this._rawAsyncValidators))
        }
        hasValidator(e) {
            return ha(this._rawValidators, e)
        }
        hasAsyncValidator(e) {
            return ha(this._rawAsyncValidators, e)
        }
        clearValidators() {
            this.validator = null
        }
        clearAsyncValidators() {
            this.asyncValidator = null
        }
        markAsTouched(e = {}) {
            this.touched = !0, this._parent && !e.onlySelf && this._parent.markAsTouched(e)
        }
        markAllAsTouched() {
            this.markAsTouched({
                onlySelf: !0
            }), this._forEachChild(e => e.markAllAsTouched())
        }
        markAsUntouched(e = {}) {
            this.touched = !1, this._pendingTouched = !1, this._forEachChild(n => {
                n.markAsUntouched({
                    onlySelf: !0
                })
            }), this._parent && !e.onlySelf && this._parent._updateTouched(e)
        }
        markAsDirty(e = {}) {
            this.pristine = !1, this._parent && !e.onlySelf && this._parent.markAsDirty(e)
        }
        markAsPristine(e = {}) {
            this.pristine = !0, this._pendingDirty = !1, this._forEachChild(n => {
                n.markAsPristine({
                    onlySelf: !0
                })
            }), this._parent && !e.onlySelf && this._parent._updatePristine(e)
        }
        markAsPending(e = {}) {
            this.status = ei, e.emitEvent !== !1 && this.statusChanges.emit(this.status), this._parent && !e.onlySelf && this._parent.markAsPending(e)
        }
        disable(e = {}) {
            let n = this._parentMarkedDirty(e.onlySelf);
            this.status = Xi, this.errors = null, this._forEachChild(r => {
                r.disable(re(b({}, e), {
                    onlySelf: !0
                }))
            }), this._updateValue(), e.emitEvent !== !1 && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(re(b({}, e), {
                skipPristineCheck: n
            })), this._onDisabledChange.forEach(r => r(!0))
        }
        enable(e = {}) {
            let n = this._parentMarkedDirty(e.onlySelf);
            this.status = Ji, this._forEachChild(r => {
                r.enable(re(b({}, e), {
                    onlySelf: !0
                }))
            }), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: e.emitEvent
            }), this._updateAncestors(re(b({}, e), {
                skipPristineCheck: n
            })), this._onDisabledChange.forEach(r => r(!1))
        }
        _updateAncestors(e) {
            this._parent && !e.onlySelf && (this._parent.updateValueAndValidity(e), e.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched())
        }
        setParent(e) {
            this._parent = e
        }
        getRawValue() {
            return this.value
        }
        updateValueAndValidity(e = {}) {
            this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), (this.status === Ji || this.status === ei) && this._runAsyncValidator(e.emitEvent)), e.emitEvent !== !1 && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !e.onlySelf && this._parent.updateValueAndValidity(e)
        }
        _updateTreeValidity(e = {
            emitEvent: !0
        }) {
            this._forEachChild(n => n._updateTreeValidity(e)), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: e.emitEvent
            })
        }
        _setInitialStatus() {
            this.status = this._allControlsDisabled() ? Xi : Ji
        }
        _runValidator() {
            return this.validator ? this.validator(this) : null
        }
        _runAsyncValidator(e) {
            if (this.asyncValidator) {
                this.status = ei, this._hasOwnPendingAsyncValidator = !0;
                let n = Jm(this.asyncValidator(this));
                this._asyncValidationSubscription = n.subscribe(r => {
                    this._hasOwnPendingAsyncValidator = !1, this.setErrors(r, {
                        emitEvent: e
                    })
                })
            }
        }
        _cancelExistingSubscription() {
            this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(), this._hasOwnPendingAsyncValidator = !1)
        }
        setErrors(e, n = {}) {
            this.errors = e, this._updateControlsErrors(n.emitEvent !== !1)
        }
        get(e) {
            let n = e;
            return n == null || (Array.isArray(n) || (n = n.split(".")), n.length === 0) ? null : n.reduce((r, i) => r && r._find(i), this)
        }
        getError(e, n) {
            let r = n ? this.get(n) : this;
            return r && r.errors ? r.errors[e] : null
        }
        hasError(e, n) {
            return !!this.getError(e, n)
        }
        get root() {
            let e = this;
            for (; e._parent;) e = e._parent;
            return e
        }
        _updateControlsErrors(e) {
            this.status = this._calculateStatus(), e && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(e)
        }
        _initObservables() {
            this.valueChanges = new ge, this.statusChanges = new ge
        }
        _calculateStatus() {
            return this._allControlsDisabled() ? Xi : this.errors ? pa : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(ei) ? ei : this._anyControlsHaveStatus(pa) ? pa : Ji
        }
        _anyControlsHaveStatus(e) {
            return this._anyControls(n => n.status === e)
        }
        _anyControlsDirty() {
            return this._anyControls(e => e.dirty)
        }
        _anyControlsTouched() {
            return this._anyControls(e => e.touched)
        }
        _updatePristine(e = {}) {
            this.pristine = !this._anyControlsDirty(), this._parent && !e.onlySelf && this._parent._updatePristine(e)
        }
        _updateTouched(e = {}) {
            this.touched = this._anyControlsTouched(), this._parent && !e.onlySelf && this._parent._updateTouched(e)
        }
        _registerOnCollectionChange(e) {
            this._onCollectionChange = e
        }
        _setUpdateStrategy(e) {
            Da(e) && e.updateOn != null && (this._updateOn = e.updateOn)
        }
        _parentMarkedDirty(e) {
            let n = this._parent && this._parent.dirty;
            return !e && !!n && !this._parent._anyControlsDirty()
        }
        _find(e) {
            return null
        }
        _assignValidators(e) {
            this._rawValidators = Array.isArray(e) ? e.slice() : e, this._composedValidatorFn = oM(this._rawValidators)
        }
        _assignAsyncValidators(e) {
            this._rawAsyncValidators = Array.isArray(e) ? e.slice() : e, this._composedAsyncValidatorFn = sM(this._rawAsyncValidators)
        }
    },
    va = class extends ya {
        constructor(e, n, r) {
            super(iy(n), oy(r, n)), this.controls = e, this._initObservables(), this._setUpdateStrategy(n), this._setUpControls(), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator
            })
        }
        registerControl(e, n) {
            return this.controls[e] ? this.controls[e] : (this.controls[e] = n, n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange), n)
        }
        addControl(e, n, r = {}) {
            this.registerControl(e, n), this.updateValueAndValidity({
                emitEvent: r.emitEvent
            }), this._onCollectionChange()
        }
        removeControl(e, n = {}) {
            this.controls[e] && this.controls[e]._registerOnCollectionChange(() => {}), delete this.controls[e], this.updateValueAndValidity({
                emitEvent: n.emitEvent
            }), this._onCollectionChange()
        }
        setControl(e, n, r = {}) {
            this.controls[e] && this.controls[e]._registerOnCollectionChange(() => {}), delete this.controls[e], n && this.registerControl(e, n), this.updateValueAndValidity({
                emitEvent: r.emitEvent
            }), this._onCollectionChange()
        }
        contains(e) {
            return this.controls.hasOwnProperty(e) && this.controls[e].enabled
        }
        setValue(e, n = {}) {
            cM(this, !0, e), Object.keys(e).forEach(r => {
                aM(this, !0, r), this.controls[r].setValue(e[r], {
                    onlySelf: !0,
                    emitEvent: n.emitEvent
                })
            }), this.updateValueAndValidity(n)
        }
        patchValue(e, n = {}) {
            e != null && (Object.keys(e).forEach(r => {
                let i = this.controls[r];
                i && i.patchValue(e[r], {
                    onlySelf: !0,
                    emitEvent: n.emitEvent
                })
            }), this.updateValueAndValidity(n))
        }
        reset(e = {}, n = {}) {
            this._forEachChild((r, i) => {
                r.reset(e ? e[i] : null, {
                    onlySelf: !0,
                    emitEvent: n.emitEvent
                })
            }), this._updatePristine(n), this._updateTouched(n), this.updateValueAndValidity(n)
        }
        getRawValue() {
            return this._reduceChildren({}, (e, n, r) => (e[r] = n.getRawValue(), e))
        }
        _syncPendingControls() {
            let e = this._reduceChildren(!1, (n, r) => r._syncPendingControls() ? !0 : n);
            return e && this.updateValueAndValidity({
                onlySelf: !0
            }), e
        }
        _forEachChild(e) {
            Object.keys(this.controls).forEach(n => {
                let r = this.controls[n];
                r && e(r, n)
            })
        }
        _setUpControls() {
            this._forEachChild(e => {
                e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange)
            })
        }
        _updateValue() {
            this.value = this._reduceValue()
        }
        _anyControls(e) {
            for (let [n, r] of Object.entries(this.controls))
                if (this.contains(n) && e(r)) return !0;
            return !1
        }
        _reduceValue() {
            let e = {};
            return this._reduceChildren(e, (n, r, i) => ((r.enabled || this.disabled) && (n[i] = r.value), n))
        }
        _reduceChildren(e, n) {
            let r = e;
            return this._forEachChild((i, o) => {
                r = n(r, i, o)
            }), r
        }
        _allControlsDisabled() {
            for (let e of Object.keys(this.controls))
                if (this.controls[e].enabled) return !1;
            return Object.keys(this.controls).length > 0 || this.disabled
        }
        _find(e) {
            return this.controls.hasOwnProperty(e) ? this.controls[e] : null
        }
    };
var ud = new A("CallSetDisabledState", {
        providedIn: "root",
        factory: () => dd
    }),
    dd = "always";

function lM(t, e) {
    return [...e.path, t]
}

function sy(t, e, n = dd) {
    ay(t, e), e.valueAccessor.writeValue(t.value), (t.disabled || n === "always") && e.valueAccessor.setDisabledState?.(t.disabled), dM(t, e), pM(t, e), fM(t, e), uM(t, e)
}

function zm(t, e) {
    t.forEach(n => {
        n.registerOnValidatorChange && n.registerOnValidatorChange(e)
    })
}

function uM(t, e) {
    if (e.valueAccessor.setDisabledState) {
        let n = r => {
            e.valueAccessor.setDisabledState(r)
        };
        t.registerOnDisabledChange(n), e._registerOnDestroy(() => {
            t._unregisterOnDisabledChange(n)
        })
    }
}

function ay(t, e) {
    let n = nM(t);
    e.validator !== null ? t.setValidators(Bm(n, e.validator)) : typeof n == "function" && t.setValidators([n]);
    let r = rM(t);
    e.asyncValidator !== null ? t.setAsyncValidators(Bm(r, e.asyncValidator)) : typeof r == "function" && t.setAsyncValidators([r]);
    let i = () => t.updateValueAndValidity();
    zm(e._rawValidators, i), zm(e._rawAsyncValidators, i)
}

function dM(t, e) {
    e.valueAccessor.registerOnChange(n => {
        t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, t.updateOn === "change" && cy(t, e)
    })
}

function fM(t, e) {
    e.valueAccessor.registerOnTouched(() => {
        t._pendingTouched = !0, t.updateOn === "blur" && t._pendingChange && cy(t, e), t.updateOn !== "submit" && t.markAsTouched()
    })
}

function cy(t, e) {
    t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, {
        emitModelToViewChange: !1
    }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1
}

function pM(t, e) {
    let n = (r, i) => {
        e.valueAccessor.writeValue(r), i && e.viewToModelUpdate(r)
    };
    t.registerOnChange(n), e._registerOnDestroy(() => {
        t._unregisterOnChange(n)
    })
}

function hM(t, e) {
    t == null, ay(t, e)
}

function gM(t, e) {
    if (!t.hasOwnProperty("model")) return !1;
    let n = t.model;
    return n.isFirstChange() ? !0 : !Object.is(e, n.currentValue)
}

function mM(t) {
    return Object.getPrototypeOf(t.constructor) === z_
}

function yM(t, e) {
    t._syncPendingControls(), e.forEach(n => {
        let r = n.control;
        r.updateOn === "submit" && r._pendingChange && (n.viewToModelUpdate(r._pendingValue), r._pendingChange = !1)
    })
}

function vM(t, e) {
    if (!e) return null;
    Array.isArray(e);
    let n, r, i;
    return e.forEach(o => {
        o.constructor === Ca ? n = o : mM(o) ? r = o : i = o
    }), i || r || n || null
}
var CM = {
        provide: ti,
        useExisting: nn(() => fd)
    },
    eo = Promise.resolve(),
    fd = (() => {
        let e = class e extends ti {
            constructor(r, i, o) {
                super(), this.callSetDisabledState = o, this.submitted = !1, this._directives = new Set, this.ngSubmit = new ge, this.form = new va({}, cd(r), ld(i))
            }
            ngAfterViewInit() {
                this._setUpdateStrategy()
            }
            get formDirective() {
                return this
            }
            get control() {
                return this.form
            }
            get path() {
                return []
            }
            get controls() {
                return this.form.controls
            }
            addControl(r) {
                eo.then(() => {
                    let i = this._findContainer(r.path);
                    r.control = i.registerControl(r.name, r.control), sy(r.control, r, this.callSetDisabledState), r.control.updateValueAndValidity({
                        emitEvent: !1
                    }), this._directives.add(r)
                })
            }
            getControl(r) {
                return this.form.get(r.path)
            }
            removeControl(r) {
                eo.then(() => {
                    let i = this._findContainer(r.path);
                    i && i.removeControl(r.name), this._directives.delete(r)
                })
            }
            addFormGroup(r) {
                eo.then(() => {
                    let i = this._findContainer(r.path),
                        o = new va({});
                    hM(o, r), i.registerControl(r.name, o), o.updateValueAndValidity({
                        emitEvent: !1
                    })
                })
            }
            removeFormGroup(r) {
                eo.then(() => {
                    let i = this._findContainer(r.path);
                    i && i.removeControl(r.name)
                })
            }
            getFormGroup(r) {
                return this.form.get(r.path)
            }
            updateModel(r, i) {
                eo.then(() => {
                    this.form.get(r.path).setValue(i)
                })
            }
            setValue(r) {
                this.control.setValue(r)
            }
            onSubmit(r) {
                return this.submitted = !0, yM(this.form, this._directives), this.ngSubmit.emit(r), r?.target?.method === "dialog"
            }
            onReset() {
                this.resetForm()
            }
            resetForm(r = void 0) {
                this.form.reset(r), this.submitted = !1
            }
            _setUpdateStrategy() {
                this.options && this.options.updateOn != null && (this.form._updateOn = this.options.updateOn)
            }
            _findContainer(r) {
                return r.pop(), r.length ? this.form.get(r) : this.form
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(no, 10), _(Qm, 10), _(ud, 8))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
                ["ng-form"],
                ["", "ngForm", ""]
            ],
            hostBindings: function(i, o) {
                i & 1 && ve("submit", function(a) {
                    return o.onSubmit(a)
                })("reset", function() {
                    return o.onReset()
                })
            },
            inputs: {
                options: [Y.None, "ngFormOptions", "options"]
            },
            outputs: {
                ngSubmit: "ngSubmit"
            },
            exportAs: ["ngForm"],
            features: [rr([CM]), ye]
        });
        let t = e;
        return t
    })();

function Wm(t, e) {
    let n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}

function Gm(t) {
    return typeof t == "object" && t !== null && Object.keys(t).length === 2 && "value" in t && "disabled" in t
}
var DM = class extends ya {
    constructor(e = null, n, r) {
        super(iy(n), oy(r, n)), this.defaultValue = null, this._onChange = [], this._pendingChange = !1, this._applyFormState(e), this._setUpdateStrategy(n), this._initObservables(), this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        }), Da(n) && (n.nonNullable || n.initialValueIsDefault) && (Gm(e) ? this.defaultValue = e.value : this.defaultValue = e)
    }
    setValue(e, n = {}) {
        this.value = this._pendingValue = e, this._onChange.length && n.emitModelToViewChange !== !1 && this._onChange.forEach(r => r(this.value, n.emitViewToModelChange !== !1)), this.updateValueAndValidity(n)
    }
    patchValue(e, n = {}) {
        this.setValue(e, n)
    }
    reset(e = this.defaultValue, n = {}) {
        this._applyFormState(e), this.markAsPristine(n), this.markAsUntouched(n), this.setValue(this.value, n), this._pendingChange = !1
    }
    _updateValue() {}
    _anyControls(e) {
        return !1
    }
    _allControlsDisabled() {
        return this.disabled
    }
    registerOnChange(e) {
        this._onChange.push(e)
    }
    _unregisterOnChange(e) {
        Wm(this._onChange, e)
    }
    registerOnDisabledChange(e) {
        this._onDisabledChange.push(e)
    }
    _unregisterOnDisabledChange(e) {
        Wm(this._onDisabledChange, e)
    }
    _forEachChild(e) {}
    _syncPendingControls() {
        return this.updateOn === "submit" && (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), this._pendingChange) ? (this.setValue(this._pendingValue, {
            onlySelf: !0,
            emitModelToViewChange: !1
        }), !0) : !1
    }
    _applyFormState(e) {
        Gm(e) ? (this.value = this._pendingValue = e.value, e.disabled ? this.disable({
            onlySelf: !0,
            emitEvent: !1
        }) : this.enable({
            onlySelf: !0,
            emitEvent: !1
        })) : this.value = this._pendingValue = e
    }
};
var bM = {
        provide: to,
        useExisting: nn(() => pd)
    },
    qm = Promise.resolve(),
    pd = (() => {
        let e = class e extends to {
            constructor(r, i, o, s, a, c) {
                super(), this._changeDetectorRef = a, this.callSetDisabledState = c, this.control = new DM, this._registered = !1, this.name = "", this.update = new ge, this._parent = r, this._setValidators(i), this._setAsyncValidators(o), this.valueAccessor = vM(this, s)
            }
            ngOnChanges(r) {
                if (this._checkForErrors(), !this._registered || "name" in r) {
                    if (this._registered && (this._checkName(), this.formDirective)) {
                        let i = r.name.previousValue;
                        this.formDirective.removeControl({
                            name: i,
                            path: this._getPath(i)
                        })
                    }
                    this._setUpControl()
                }
                "isDisabled" in r && this._updateDisabled(r), gM(r, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
            }
            ngOnDestroy() {
                this.formDirective && this.formDirective.removeControl(this)
            }
            get path() {
                return this._getPath(this.name)
            }
            get formDirective() {
                return this._parent ? this._parent.formDirective : null
            }
            viewToModelUpdate(r) {
                this.viewModel = r, this.update.emit(r)
            }
            _setUpControl() {
                this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0
            }
            _setUpdateStrategy() {
                this.options && this.options.updateOn != null && (this.control._updateOn = this.options.updateOn)
            }
            _isStandalone() {
                return !this._parent || !!(this.options && this.options.standalone)
            }
            _setUpStandalone() {
                sy(this.control, this, this.callSetDisabledState), this.control.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            _checkForErrors() {
                this._isStandalone() || this._checkParentType(), this._checkName()
            }
            _checkParentType() {}
            _checkName() {
                this.options && this.options.name && (this.name = this.options.name), !this._isStandalone() && this.name
            }
            _updateValue(r) {
                qm.then(() => {
                    this.control.setValue(r, {
                        emitViewToModelChange: !1
                    }), this._changeDetectorRef?.markForCheck()
                })
            }
            _updateDisabled(r) {
                let i = r.isDisabled.currentValue,
                    o = i !== 0 && fe(i);
                qm.then(() => {
                    o && !this.control.disabled ? this.control.disable() : !o && this.control.disabled && this.control.enable(), this._changeDetectorRef?.markForCheck()
                })
            }
            _getPath(r) {
                return this._parent ? lM(r, this._parent) : [r]
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)(_(ti, 9), _(no, 10), _(Qm, 10), _(Km, 10), _(Ht, 8), _(ud, 8))
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]
            ],
            inputs: {
                name: "name",
                isDisabled: [Y.None, "disabled", "isDisabled"],
                model: [Y.None, "ngModel", "model"],
                options: [Y.None, "ngModelOptions", "options"]
            },
            outputs: {
                update: "ngModelChange"
            },
            exportAs: ["ngModel"],
            features: [rr([bM]), ye, jt]
        });
        let t = e;
        return t
    })(),
    ly = (() => {
        let e = class e {};
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275dir = oe({
            type: e,
            selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
            ],
            hostAttrs: ["novalidate", ""]
        });
        let t = e;
        return t
    })();

function wM(t) {
    return typeof t == "number" ? t : parseInt(t, 10)
}
var hd = (() => {
    let e = class e {
        constructor() {
            this._validator = Um
        }
        ngOnChanges(r) {
            if (this.inputName in r) {
                let i = this.normalizeInput(r[this.inputName].currentValue);
                this._enabled = this.enabled(i), this._validator = this._enabled ? this.createValidator(i) : Um, this._onChange && this._onChange()
            }
        }
        validate(r) {
            return this._validator(r)
        }
        registerOnValidatorChange(r) {
            this._onChange = r
        }
        enabled(r) {
            return r != null
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275dir = oe({
        type: e,
        features: [jt]
    });
    let t = e;
    return t
})();
var EM = {
    provide: no,
    useExisting: nn(() => gd),
    multi: !0
};
var gd = (() => {
    let e = class e extends hd {
        constructor() {
            super(...arguments), this.inputName = "required", this.normalizeInput = fe, this.createValidator = r => Q_
        }
        enabled(r) {
            return r
        }
    };
    e.\u0275fac = (() => {
        let r;
        return function(o) {
            return (r || (r = Oe(e)))(o || e)
        }
    })(), e.\u0275dir = oe({
        type: e,
        selectors: [
            ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
            ["", "required", "", "formControl", "", 3, "type", "checkbox"],
            ["", "required", "", "ngModel", "", 3, "type", "checkbox"]
        ],
        hostVars: 1,
        hostBindings: function(i, o) {
            i & 2 && J("required", o._enabled ? "" : null)
        },
        inputs: {
            required: "required"
        },
        features: [rr([EM]), ye]
    });
    let t = e;
    return t
})();
var IM = {
        provide: no,
        useExisting: nn(() => md),
        multi: !0
    },
    md = (() => {
        let e = class e extends hd {
            constructor() {
                super(...arguments), this.inputName = "email", this.normalizeInput = fe, this.createValidator = r => Z_
            }
            enabled(r) {
                return r
            }
        };
        e.\u0275fac = (() => {
            let r;
            return function(o) {
                return (r || (r = Oe(e)))(o || e)
            }
        })(), e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "email", "", "formControlName", ""],
                ["", "email", "", "formControl", ""],
                ["", "email", "", "ngModel", ""]
            ],
            inputs: {
                email: "email"
            },
            features: [rr([IM]), ye]
        });
        let t = e;
        return t
    })(),
    _M = {
        provide: no,
        useExisting: nn(() => yd),
        multi: !0
    },
    yd = (() => {
        let e = class e extends hd {
            constructor() {
                super(...arguments), this.inputName = "minlength", this.normalizeInput = r => wM(r), this.createValidator = r => J_(r)
            }
        };
        e.\u0275fac = (() => {
            let r;
            return function(o) {
                return (r || (r = Oe(e)))(o || e)
            }
        })(), e.\u0275dir = oe({
            type: e,
            selectors: [
                ["", "minlength", "", "formControlName", ""],
                ["", "minlength", "", "formControl", ""],
                ["", "minlength", "", "ngModel", ""]
            ],
            hostVars: 1,
            hostBindings: function(i, o) {
                i & 2 && J("minlength", o._enabled ? o.minlength : null)
            },
            inputs: {
                minlength: "minlength"
            },
            features: [rr([_M]), ye]
        });
        let t = e;
        return t
    })();
var MM = (() => {
    let e = class e {};
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275mod = Ee({
        type: e
    }), e.\u0275inj = we({});
    let t = e;
    return t
})();
var uy = (() => {
    let e = class e {
        static withConfig(r) {
            return {
                ngModule: e,
                providers: [{
                    provide: ud,
                    useValue: r.callSetDisabledState ?? dd
                }]
            }
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275mod = Ee({
        type: e
    }), e.\u0275inj = we({
        imports: [MM]
    });
    let t = e;
    return t
})();
var xM = ["contactForm"];

function TM(t, e) {
    t & 1 && (g(0, "div"), v(1, "Name is required"), h())
}

function AM(t, e) {
    t & 1 && (g(0, "div"), v(1, "Name must be at least 2 characters long"), h())
}

function OM(t, e) {
    if (t & 1 && (g(0, "div", 21), P(1, TM, 2, 0, "div", 22)(2, AM, 2, 0, "div", 22), h()), t & 2) {
        $();
        let n = An(7);
        C(), y("ngIf", n.errors == null ? null : n.errors.required), C(), y("ngIf", n.errors == null ? null : n.errors.minlength)
    }
}

function NM(t, e) {
    t & 1 && (g(0, "div"), v(1, "Email is required"), h())
}

function RM(t, e) {
    t & 1 && (g(0, "div"), v(1, "Please enter a valid email address"), h())
}

function PM(t, e) {
    if (t & 1 && (g(0, "div", 21), P(1, NM, 2, 0, "div", 22)(2, RM, 2, 0, "div", 22), h()), t & 2) {
        $();
        let n = An(10);
        C(), y("ngIf", n.errors == null ? null : n.errors.required), C(), y("ngIf", n.errors == null ? null : n.errors.email)
    }
}

function FM(t, e) {
    t & 1 && (g(0, "div"), v(1, "Message is required"), h())
}

function kM(t, e) {
    t & 1 && (g(0, "div"), v(1, "Message must be at least 5 characters long"), h())
}

function LM(t, e) {
    if (t & 1 && (g(0, "div", 21), P(1, FM, 2, 0, "div", 22)(2, kM, 2, 0, "div", 22), h()), t & 2) {
        $();
        let n = An(13);
        C(), y("ngIf", n.errors == null ? null : n.errors.required), C(), y("ngIf", n.errors == null ? null : n.errors.minlength)
    }
}
var dy = (() => {
    let e = class e {
        constructor(r) {
            this.http = r, this.formData = {
                name: "",
                email: "",
                message: ""
            }, this.formSubmitted = !1, this.Email = "pdkv1999@gmail.com"
        }
        onSubmit() {
            if (this.formSubmitted = !0, this.contactForm.form.valid) {
                let r = "https://formspree.io/f/xldrlkep",
                    i = new fn({
                        "Content-Type": "application/json"
                    }),
                    o = re(b({}, this.formData), {
                        _replyto: this.formData.email,
                        _subject: `New contact form message from ${this.formData.name}`,
                        _to: "pdkv1999@gmail.com"
                    });
                this.http.post(r, o, {
                    headers: i
                }).subscribe(s => {
                    console.log("Email sent successfully", s), alert("Thank you! Your message has been sent."), this.resetForm()
                }, s => {
                    console.error("Error sending email", s), alert("An error occurred. Please try again.")
                })
            }
        }
        resetForm() {
            this.formData = {
                name: "",
                email: "",
                message: ""
            }, this.formSubmitted = !1, this.contactForm && this.contactForm.resetForm()
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)(_(du))
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-contact"]
        ],
        viewQuery: function(i, o) {
            if (i & 1 && Ii(xM, 5), i & 2) {
                let s;
                gt(s = mt()) && (o.contactForm = s.first)
            }
        },
        standalone: !0,
        features: [j],
        decls: 28,
        vars: 8,
        consts: [
            ["contactForm", "ngForm"],
            ["name", "ngModel"],
            ["email", "ngModel"],
            ["message", "ngModel"],
            ["id", "contact"],
            [1, "container"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-out-cubic"],
            ["data-aos", "fade-up", "data-aos-duration", "1200", "data-aos-delay", "200", 3, "ngSubmit"],
            ["type", "text", "name", "name", "placeholder", "Your Name", "required", "", "minlength", "2", 3, "ngModelChange", "ngModel"],
            ["class", "error-message", 4, "ngIf"],
            ["type", "email", "name", "email", "placeholder", "Your Email", "required", "", "email", "", 3, "ngModelChange", "ngModel"],
            ["name", "message", "placeholder", "Your Message", "required", "", "minlength", "5", 3, "ngModelChange", "ngModel"],
            ["type", "submit", "data-aos", "zoom-in", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "btn", 3, "disabled"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "social-links"],
            [1, "linkedInstyle"],
            ["href", "https://www.linkedin.com/in/pdkv1999", "target", "_blank", 1, "linkedInstyle"],
            [1, "fab", "fa-linkedin"],
            [1, "githubStyle"],
            ["href", "https://github.com/pdkv1999", "target", "_blank"],
            [1, "fab", "fa-github"],
            [2, "color", "#87CEEB"],
            [1, "error-message"],
            [4, "ngIf"]
        ],
        template: function(i, o) {
            if (i & 1) {
                let s = Bt();
                g(0, "section", 4)(1, "div", 5)(2, "h2", 6), v(3, "CONTACT"), h(), g(4, "form", 7, 0), ve("ngSubmit", function() {
                    return Ue(s), Be(o.onSubmit())
                }), g(6, "input", 8, 1), Mi("ngModelChange", function(c) {
                    return Ue(s), Ns(o.formData.name, c) || (o.formData.name = c), Be(c)
                }), h(), P(8, OM, 3, 2, "div", 9), g(9, "input", 10, 2), Mi("ngModelChange", function(c) {
                    return Ue(s), Ns(o.formData.email, c) || (o.formData.email = c), Be(c)
                }), h(), P(11, PM, 3, 2, "div", 9), g(12, "textarea", 11, 3), Mi("ngModelChange", function(c) {
                    return Ue(s), Ns(o.formData.message, c) || (o.formData.message = c), Be(c)
                }), h(), P(14, LM, 3, 2, "div", 9), g(15, "button", 12), v(16, "Send Message"), h()(), g(17, "div", 13)(18, "span", 14)(19, "a", 15), z(20, "i", 16), h()(), g(21, "span", 17)(22, "a", 18), z(23, "i", 19), h()()(), g(24, "div", 20)(25, "strong"), v(26, "Email: "), h(), v(27), h()()()
            }
            if (i & 2) {
                let s = An(5),
                    a = An(7),
                    c = An(10),
                    l = An(13);
                C(6), _i("ngModel", o.formData.name), C(2), y("ngIf", a.invalid && (a.dirty || a.touched || o.formSubmitted)), C(), _i("ngModel", o.formData.email), C(2), y("ngIf", c.invalid && (c.dirty || c.touched)), C(), _i("ngModel", o.formData.message), C(2), y("ngIf", l.invalid && (l.dirty || l.touched)), C(), y("disabled", s.form.invalid), C(12), st(o.Email)
            }
        },
        dependencies: [uy, ly, Ca, ny, ry, gd, yd, md, pd, fd, Gg, On],
        styles: ["#contact[_ngcontent-%COMP%]{padding:4em 2em;text-align:center;font-family:Montserrat,sans-serif;background:#000}#contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#87CEEB;margin-bottom:1em;font-size:1.5em}#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;background-color:#131111;padding:2em;border-radius:10px;box-shadow:0 6px 15px #00000080}#contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:calc(100% - 2em);padding:1em;margin:.5em 0;border:1px solid #444;background-color:#242222;color:#f1f1f1;border-radius:5px;box-sizing:border-box;font-size:.8em;transition:border-color .3s ease}#contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border-color:#87CEEB;outline:none}#contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:150px;resize:vertical;font-size:1em}#contact[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:linear-gradient(45deg,#87CEEB,orange);color:#000;padding:10px 12px;text-decoration:none;border-radius:5px;border:none;font-size:1em;cursor:pointer;margin-top:10px;margin-bottom:-10px;transition:background .3s ease,transform .3s ease,box-shadow .3s ease;box-shadow:0 4px 10px #0003}#contact[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:#ff8c00;transform:translateY(-2px);box-shadow:0 6px 15px #0000004d}#contact[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled{background:repeating-linear-gradient(45deg,#ccc,#ccc 2px,#bbb 2px 4px);cursor:not-allowed}#contact[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:hover{background:repeating-linear-gradient(45deg,#cac7c7,#cac7c7 2px,#bbb 2px 4px);transform:none}.error-message[_ngcontent-%COMP%]{color:#87CEEB;font-size:.8em;margin-top:.2em;text-align:left;padding-left:1em}.social-links[_ngcontent-%COMP%]{margin-top:2em;display:flex;justify-content:center;gap:15px}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f1e7e7;font-size:2em;transition:color .3s ease,transform .3s ease}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.5);color:#524f4f}.linkedInstyle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#0077b5;font-size:2.2em}.linkedInstyle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.1);color:#005582}@media screen and (max-width: 1024px){#contact[_ngcontent-%COMP%]{padding:3em 1.5em}#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:90%}}@media screen and (max-width: 768px){#contact[_ngcontent-%COMP%]{padding:2.5em 1em}#contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.3em}#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:1.5em}#contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:.9em}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.8em}.linkedInstyle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:2em}}@media screen and (max-width: 480px){#contact[_ngcontent-%COMP%]{padding:2em .5em}#contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em}#contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:1em}#contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:.8em;padding:.8em}#contact[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:120px}#contact[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:.6em 1.2em;font-size:.9em}.error-message[_ngcontent-%COMP%]{font-size:.7em}.social-links[_ngcontent-%COMP%]{gap:10px}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.6em}.linkedInstyle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.8em}}"]
    });
    let t = e;
    return t
})();
var ba = class t {
        static isArray(e, n = !0) {
            return Array.isArray(e) && (n || e.length !== 0)
        }
        static isObject(e, n = !0) {
            return typeof e == "object" && !Array.isArray(e) && e != null && (n || Object.keys(e).length !== 0)
        }
        static equals(e, n, r) {
            return r ? this.resolveFieldData(e, r) === this.resolveFieldData(n, r) : this.equalsByValue(e, n)
        }
        static equalsByValue(e, n) {
            if (e === n) return !0;
            if (e && n && typeof e == "object" && typeof n == "object") {
                var r = Array.isArray(e),
                    i = Array.isArray(n),
                    o, s, a;
                if (r && i) {
                    if (s = e.length, s != n.length) return !1;
                    for (o = s; o-- !== 0;)
                        if (!this.equalsByValue(e[o], n[o])) return !1;
                    return !0
                }
                if (r != i) return !1;
                var c = this.isDate(e),
                    l = this.isDate(n);
                if (c != l) return !1;
                if (c && l) return e.getTime() == n.getTime();
                var u = e instanceof RegExp,
                    d = n instanceof RegExp;
                if (u != d) return !1;
                if (u && d) return e.toString() == n.toString();
                var f = Object.keys(e);
                if (s = f.length, s !== Object.keys(n).length) return !1;
                for (o = s; o-- !== 0;)
                    if (!Object.prototype.hasOwnProperty.call(n, f[o])) return !1;
                for (o = s; o-- !== 0;)
                    if (a = f[o], !this.equalsByValue(e[a], n[a])) return !1;
                return !0
            }
            return e !== e && n !== n
        }
        static resolveFieldData(e, n) {
            if (e && n) {
                if (this.isFunction(n)) return n(e);
                if (n.indexOf(".") == -1) return e[n];
                {
                    let r = n.split("."),
                        i = e;
                    for (let o = 0, s = r.length; o < s; ++o) {
                        if (i == null) return null;
                        i = i[r[o]]
                    }
                    return i
                }
            } else return null
        }
        static isFunction(e) {
            return !!(e && e.constructor && e.call && e.apply)
        }
        static reorderArray(e, n, r) {
            let i;
            e && n !== r && (r >= e.length && (r %= e.length, n %= e.length), e.splice(r, 0, e.splice(n, 1)[0]))
        }
        static insertIntoOrderedArray(e, n, r, i) {
            if (r.length > 0) {
                let o = !1;
                for (let s = 0; s < r.length; s++)
                    if (this.findIndexInList(r[s], i) > n) {
                        r.splice(s, 0, e), o = !0;
                        break
                    } o || r.push(e)
            } else r.push(e)
        }
        static findIndexInList(e, n) {
            let r = -1;
            if (n) {
                for (let i = 0; i < n.length; i++)
                    if (n[i] == e) {
                        r = i;
                        break
                    }
            }
            return r
        }
        static contains(e, n) {
            if (e != null && n && n.length) {
                for (let r of n)
                    if (this.equals(e, r)) return !0
            }
            return !1
        }
        static removeAccents(e) {
            return e && (e = e.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "")), e
        }
        static isDate(e) {
            return Object.prototype.toString.call(e) === "[object Date]"
        }
        static isEmpty(e) {
            return e == null || e === "" || Array.isArray(e) && e.length === 0 || !this.isDate(e) && typeof e == "object" && Object.keys(e).length === 0
        }
        static isNotEmpty(e) {
            return !this.isEmpty(e)
        }
        static compare(e, n, r, i = 1) {
            let o = -1,
                s = this.isEmpty(e),
                a = this.isEmpty(n);
            return s && a ? o = 0 : s ? o = i : a ? o = -i : typeof e == "string" && typeof n == "string" ? o = e.localeCompare(n, r, {
                numeric: !0
            }) : o = e < n ? -1 : e > n ? 1 : 0, o
        }
        static sort(e, n, r = 1, i, o = 1) {
            let s = t.compare(e, n, i, r),
                a = r;
            return (t.isEmpty(e) || t.isEmpty(n)) && (a = o === 1 ? r : o), a * s
        }
        static merge(e, n) {
            if (!(e == null && n == null)) {
                {
                    if ((e == null || typeof e == "object") && (n == null || typeof n == "object")) return b(b({}, e || {}), n || {});
                    if ((e == null || typeof e == "string") && (n == null || typeof n == "string")) return [e || "", n || ""].join(" ")
                }
                return n || e
            }
        }
        static isPrintableCharacter(e = "") {
            return this.isNotEmpty(e) && e.length === 1 && e.match(/\S| /)
        }
        static getItemValue(e, ...n) {
            return this.isFunction(e) ? e(...n) : e
        }
        static findLastIndex(e, n) {
            let r = -1;
            if (this.isNotEmpty(e)) try {
                r = e.findLastIndex(n)
            } catch {
                r = e.lastIndexOf([...e].reverse().find(n))
            }
            return r
        }
        static findLast(e, n) {
            let r;
            if (this.isNotEmpty(e)) try {
                r = e.findLast(n)
            } catch {
                r = [...e].reverse().find(n)
            }
            return r
        }
        static deepEquals(e, n) {
            if (e === n) return !0;
            if (e && n && typeof e == "object" && typeof n == "object") {
                var r = Array.isArray(e),
                    i = Array.isArray(n),
                    o, s, a;
                if (r && i) {
                    if (s = e.length, s != n.length) return !1;
                    for (o = s; o-- !== 0;)
                        if (!this.deepEquals(e[o], n[o])) return !1;
                    return !0
                }
                if (r != i) return !1;
                var c = e instanceof Date,
                    l = n instanceof Date;
                if (c != l) return !1;
                if (c && l) return e.getTime() == n.getTime();
                var u = e instanceof RegExp,
                    d = n instanceof RegExp;
                if (u != d) return !1;
                if (u && d) return e.toString() == n.toString();
                var f = Object.keys(e);
                if (s = f.length, s !== Object.keys(n).length) return !1;
                for (o = s; o-- !== 0;)
                    if (!Object.prototype.hasOwnProperty.call(n, f[o])) return !1;
                for (o = s; o-- !== 0;)
                    if (a = f[o], !this.deepEquals(e[a], n[a])) return !1;
                return !0
            }
            return e !== e && n !== n
        }
    },
    fy = 0;

function wa(t = "pn_id_") {
    return fy++, `${t}${fy}`
}

function VM() {
    let t = [],
        e = (o, s) => {
            let a = t.length > 0 ? t[t.length - 1] : {
                    key: o,
                    value: s
                },
                c = a.value + (a.key === o ? 0 : s) + 2;
            return t.push({
                key: o,
                value: c
            }), c
        },
        n = o => {
            t = t.filter(s => s.value !== o)
        },
        r = () => t.length > 0 ? t[t.length - 1].value : 0,
        i = o => o && parseInt(o.style.zIndex, 10) || 0;
    return {
        get: i,
        set: (o, s, a) => {
            s && (s.style.zIndex = String(e(o, a)))
        },
        clear: o => {
            o && (n(i(o)), o.style.zIndex = "")
        },
        getCurrent: () => r()
    }
}
var zP = VM();
var py = ["*"];
var He = (() => {
    class t {
        static STARTS_WITH = "startsWith";
        static CONTAINS = "contains";
        static NOT_CONTAINS = "notContains";
        static ENDS_WITH = "endsWith";
        static EQUALS = "equals";
        static NOT_EQUALS = "notEquals";
        static IN = "in";
        static LESS_THAN = "lt";
        static LESS_THAN_OR_EQUAL_TO = "lte";
        static GREATER_THAN = "gt";
        static GREATER_THAN_OR_EQUAL_TO = "gte";
        static BETWEEN = "between";
        static IS = "is";
        static IS_NOT = "isNot";
        static BEFORE = "before";
        static AFTER = "after";
        static DATE_IS = "dateIs";
        static DATE_IS_NOT = "dateIsNot";
        static DATE_BEFORE = "dateBefore";
        static DATE_AFTER = "dateAfter"
    }
    return t
})();
var Ea = (() => {
        class t {
            ripple = !1;
            inputStyle = Gl("outlined");
            overlayOptions = {};
            csp = Gl({
                nonce: void 0
            });
            filterMatchModeOptions = {
                text: [He.STARTS_WITH, He.CONTAINS, He.NOT_CONTAINS, He.ENDS_WITH, He.EQUALS, He.NOT_EQUALS],
                numeric: [He.EQUALS, He.NOT_EQUALS, He.LESS_THAN, He.LESS_THAN_OR_EQUAL_TO, He.GREATER_THAN, He.GREATER_THAN_OR_EQUAL_TO],
                date: [He.DATE_IS, He.DATE_IS_NOT, He.DATE_BEFORE, He.DATE_AFTER]
            };
            translation = {
                startsWith: "Starts with",
                contains: "Contains",
                notContains: "Not contains",
                endsWith: "Ends with",
                equals: "Equals",
                notEquals: "Not equals",
                noFilter: "No Filter",
                lt: "Less than",
                lte: "Less than or equal to",
                gt: "Greater than",
                gte: "Greater than or equal to",
                is: "Is",
                isNot: "Is not",
                before: "Before",
                after: "After",
                dateIs: "Date is",
                dateIsNot: "Date is not",
                dateBefore: "Date is before",
                dateAfter: "Date is after",
                clear: "Clear",
                apply: "Apply",
                matchAll: "Match All",
                matchAny: "Match Any",
                addRule: "Add Rule",
                removeRule: "Remove Rule",
                accept: "Yes",
                reject: "No",
                choose: "Choose",
                upload: "Upload",
                cancel: "Cancel",
                pending: "Pending",
                fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                chooseYear: "Choose Year",
                chooseMonth: "Choose Month",
                chooseDate: "Choose Date",
                prevDecade: "Previous Decade",
                nextDecade: "Next Decade",
                prevYear: "Previous Year",
                nextYear: "Next Year",
                prevMonth: "Previous Month",
                nextMonth: "Next Month",
                prevHour: "Previous Hour",
                nextHour: "Next Hour",
                prevMinute: "Previous Minute",
                nextMinute: "Next Minute",
                prevSecond: "Previous Second",
                nextSecond: "Next Second",
                am: "am",
                pm: "pm",
                dateFormat: "mm/dd/yy",
                firstDayOfWeek: 0,
                today: "Today",
                weekHeader: "Wk",
                weak: "Weak",
                medium: "Medium",
                strong: "Strong",
                passwordPrompt: "Enter a password",
                emptyMessage: "No results found",
                searchMessage: "{0} results are available",
                selectionMessage: "{0} items selected",
                emptySelectionMessage: "No selected item",
                emptySearchMessage: "No results found",
                emptyFilterMessage: "No results found",
                aria: {
                    trueLabel: "True",
                    falseLabel: "False",
                    nullLabel: "Not Selected",
                    star: "1 star",
                    stars: "{star} stars",
                    selectAll: "All items selected",
                    unselectAll: "All items unselected",
                    close: "Close",
                    previous: "Previous",
                    next: "Next",
                    navigation: "Navigation",
                    scrollTop: "Scroll Top",
                    moveTop: "Move Top",
                    moveUp: "Move Up",
                    moveDown: "Move Down",
                    moveBottom: "Move Bottom",
                    moveToTarget: "Move to Target",
                    moveToSource: "Move to Source",
                    moveAllToTarget: "Move All to Target",
                    moveAllToSource: "Move All to Source",
                    pageLabel: "{page}",
                    firstPageLabel: "First Page",
                    lastPageLabel: "Last Page",
                    nextPageLabel: "Next Page",
                    prevPageLabel: "Previous Page",
                    rowsPerPageLabel: "Rows per page",
                    previousPageLabel: "Previous Page",
                    jumpToPageDropdownLabel: "Jump to Page Dropdown",
                    jumpToPageInputLabel: "Jump to Page Input",
                    selectRow: "Row Selected",
                    unselectRow: "Row Unselected",
                    expandRow: "Row Expanded",
                    collapseRow: "Row Collapsed",
                    showFilterMenu: "Show Filter Menu",
                    hideFilterMenu: "Hide Filter Menu",
                    filterOperator: "Filter Operator",
                    filterConstraint: "Filter Constraint",
                    editRow: "Row Edit",
                    saveEdit: "Save Edit",
                    cancelEdit: "Cancel Edit",
                    listView: "List View",
                    gridView: "Grid View",
                    slide: "Slide",
                    slideNumber: "{slideNumber}",
                    zoomImage: "Zoom Image",
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                    rotateRight: "Rotate Right",
                    rotateLeft: "Rotate Left",
                    listLabel: "Option List",
                    selectColor: "Select a color",
                    removeLabel: "Remove",
                    browseFiles: "Browse Files",
                    maximizeLabel: "Maximize"
                }
            };
            zIndex = {
                modal: 1100,
                overlay: 1e3,
                menu: 1e3,
                tooltip: 1100
            };
            translationSource = new Fe;
            translationObserver = this.translationSource.asObservable();
            getTranslation(n) {
                return this.translation[n]
            }
            setTranslation(n) {
                this.translation = b(b({}, this.translation), n), this.translationSource.next(this.translation)
            }
            static \u0275fac = function(r) {
                return new(r || t)
            };
            static \u0275prov = x({
                token: t,
                factory: t.\u0275fac,
                providedIn: "root"
            })
        }
        return t
    })(),
    hy = (() => {
        class t {
            static \u0275fac = function(r) {
                return new(r || t)
            };
            static \u0275cmp = R({
                type: t,
                selectors: [
                    ["p-header"]
                ],
                standalone: !0,
                features: [j],
                ngContentSelectors: py,
                decls: 1,
                vars: 0,
                template: function(r, i) {
                    r & 1 && ($t(), xt(0))
                },
                encapsulation: 2
            })
        }
        return t
    })(),
    gy = (() => {
        class t {
            static \u0275fac = function(r) {
                return new(r || t)
            };
            static \u0275cmp = R({
                type: t,
                selectors: [
                    ["p-footer"]
                ],
                standalone: !0,
                features: [j],
                ngContentSelectors: py,
                decls: 1,
                vars: 0,
                template: function(r, i) {
                    r & 1 && ($t(), xt(0))
                },
                encapsulation: 2
            })
        }
        return t
    })(),
    ur = (() => {
        class t {
            template;
            type;
            name;
            constructor(n) {
                this.template = n
            }
            getType() {
                return this.name
            }
            static \u0275fac = function(r) {
                return new(r || t)(_(tn))
            };
            static \u0275dir = oe({
                type: t,
                selectors: [
                    ["", "pTemplate", ""]
                ],
                inputs: {
                    type: "type",
                    name: [Y.None, "pTemplate", "name"]
                },
                standalone: !0
            })
        }
        return t
    })(),
    Ln = (() => {
        class t {
            static \u0275fac = function(r) {
                return new(r || t)
            };
            static \u0275mod = Ee({
                type: t
            });
            static \u0275inj = we({})
        }
        return t
    })();
var jM = ["*"],
    Yt = (() => {
        class t {
            label;
            spin = !1;
            styleClass;
            role;
            ariaLabel;
            ariaHidden;
            ngOnInit() {
                this.getAttributes()
            }
            getAttributes() {
                let n = ba.isEmpty(this.label);
                this.role = n ? void 0 : "img", this.ariaLabel = n ? void 0 : this.label, this.ariaHidden = n
            }
            getClassNames() {
                return `p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`
            }
            static \u0275fac = function(r) {
                return new(r || t)
            };
            static \u0275cmp = R({
                type: t,
                selectors: [
                    ["ng-component"]
                ],
                hostAttrs: [1, "p-element", "p-icon-wrapper"],
                inputs: {
                    label: "label",
                    spin: [Y.HasDecoratorInputTransform, "spin", "spin", fe],
                    styleClass: "styleClass"
                },
                standalone: !0,
                features: [St, j],
                ngContentSelectors: jM,
                decls: 1,
                vars: 0,
                template: function(r, i) {
                    r & 1 && ($t(), xt(0))
                },
                encapsulation: 2,
                changeDetection: 0
            })
        }
        return t
    })();
var Cd = (() => {
    class t extends Yt {
        static \u0275fac = (() => {
            let n;
            return function(i) {
                return (n || (n = Oe(t)))(i || t)
            }
        })();
        static \u0275cmp = R({
            type: t,
            selectors: [
                ["ChevronDownIcon"]
            ],
            standalone: !0,
            features: [ye, j],
            decls: 2,
            vars: 5,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]
            ],
            template: function(r, i) {
                r & 1 && (Ut(), g(0, "svg", 0), z(1, "path", 1), h()), r & 2 && (Ne(i.getClassNames()), J("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)("role", i.role))
            },
            encapsulation: 2
        })
    }
    return t
})();
var Dd = (() => {
    class t extends Yt {
        static \u0275fac = (() => {
            let n;
            return function(i) {
                return (n || (n = Oe(t)))(i || t)
            }
        })();
        static \u0275cmp = R({
            type: t,
            selectors: [
                ["ChevronLeftIcon"]
            ],
            standalone: !0,
            features: [ye, j],
            decls: 2,
            vars: 5,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["d", "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z", "fill", "currentColor"]
            ],
            template: function(r, i) {
                r & 1 && (Ut(), g(0, "svg", 0), z(1, "path", 1), h()), r & 2 && (Ne(i.getClassNames()), J("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)("role", i.role))
            },
            encapsulation: 2
        })
    }
    return t
})();
var bd = (() => {
    class t extends Yt {
        static \u0275fac = (() => {
            let n;
            return function(i) {
                return (n || (n = Oe(t)))(i || t)
            }
        })();
        static \u0275cmp = R({
            type: t,
            selectors: [
                ["ChevronRightIcon"]
            ],
            standalone: !0,
            features: [ye, j],
            decls: 2,
            vars: 5,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]
            ],
            template: function(r, i) {
                r & 1 && (Ut(), g(0, "svg", 0), z(1, "path", 1), h()), r & 2 && (Ne(i.getClassNames()), J("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)("role", i.role))
            },
            encapsulation: 2
        })
    }
    return t
})();
var wd = (() => {
    class t extends Yt {
        static \u0275fac = (() => {
            let n;
            return function(i) {
                return (n || (n = Oe(t)))(i || t)
            }
        })();
        static \u0275cmp = R({
            type: t,
            selectors: [
                ["ChevronUpIcon"]
            ],
            standalone: !0,
            features: [ye, j],
            decls: 2,
            vars: 5,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["d", "M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z", "fill", "currentColor"]
            ],
            template: function(r, i) {
                r & 1 && (Ut(), g(0, "svg", 0), z(1, "path", 1), h()), r & 2 && (Ne(i.getClassNames()), J("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)("role", i.role))
            },
            encapsulation: 2
        })
    }
    return t
})();
var le = (() => {
    class t {
        static zindex = 1e3;
        static calculatedScrollbarWidth = null;
        static calculatedScrollbarHeight = null;
        static browser;
        static addClass(n, r) {
            n && r && (n.classList ? n.classList.add(r) : n.className += " " + r)
        }
        static addMultipleClasses(n, r) {
            if (n && r)
                if (n.classList) {
                    let i = r.trim().split(" ");
                    for (let o = 0; o < i.length; o++) n.classList.add(i[o])
                } else {
                    let i = r.split(" ");
                    for (let o = 0; o < i.length; o++) n.className += " " + i[o]
                }
        }
        static removeClass(n, r) {
            n && r && (n.classList ? n.classList.remove(r) : n.className = n.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }
        static removeMultipleClasses(n, r) {
            n && r && [r].flat().filter(Boolean).forEach(i => i.split(" ").forEach(o => this.removeClass(n, o)))
        }
        static hasClass(n, r) {
            return n && r ? n.classList ? n.classList.contains(r) : new RegExp("(^| )" + r + "( |$)", "gi").test(n.className) : !1
        }
        static siblings(n) {
            return Array.prototype.filter.call(n.parentNode.children, function(r) {
                return r !== n
            })
        }
        static find(n, r) {
            return Array.from(n.querySelectorAll(r))
        }
        static findSingle(n, r) {
            return this.isElement(n) ? n.querySelector(r) : null
        }
        static index(n) {
            let r = n.parentNode.childNodes,
                i = 0;
            for (var o = 0; o < r.length; o++) {
                if (r[o] == n) return i;
                r[o].nodeType == 1 && i++
            }
            return -1
        }
        static indexWithinGroup(n, r) {
            let i = n.parentNode ? n.parentNode.childNodes : [],
                o = 0;
            for (var s = 0; s < i.length; s++) {
                if (i[s] == n) return o;
                i[s].attributes && i[s].attributes[r] && i[s].nodeType == 1 && o++
            }
            return -1
        }
        static appendOverlay(n, r, i = "self") {
            i !== "self" && n && r && this.appendChild(n, r)
        }
        static alignOverlay(n, r, i = "self", o = !0) {
            n && r && (o && (n.style.minWidth = `${t.getOuterWidth(r)}px`), i === "self" ? this.relativePosition(n, r) : this.absolutePosition(n, r))
        }
        static relativePosition(n, r, i = !0) {
            let o = ae => {
                    if (ae) return getComputedStyle(ae).getPropertyValue("position") === "relative" ? ae : o(ae.parentElement)
                },
                s = n.offsetParent ? {
                    width: n.offsetWidth,
                    height: n.offsetHeight
                } : this.getHiddenElementDimensions(n),
                a = r.offsetHeight ?? r.getBoundingClientRect().height,
                c = r.getBoundingClientRect(),
                l = this.getWindowScrollTop(),
                u = this.getWindowScrollLeft(),
                d = this.getViewport(),
                p = o(n)?.getBoundingClientRect() || {
                    top: -1 * l,
                    left: -1 * u
                },
                m, E;
            c.top + a + s.height > d.height ? (m = c.top - p.top - s.height, n.style.transformOrigin = "bottom", c.top + m < 0 && (m = -1 * c.top)) : (m = a + c.top - p.top, n.style.transformOrigin = "top");
            let M = c.left + s.width - d.width,
                I = c.left - p.left;
            s.width > d.width ? E = (c.left - p.left) * -1 : M > 0 ? E = I - M : E = c.left - p.left, n.style.top = m + "px", n.style.left = E + "px", i && (n.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))")
        }
        static absolutePosition(n, r, i = !0) {
            let o = n.offsetParent ? {
                    width: n.offsetWidth,
                    height: n.offsetHeight
                } : this.getHiddenElementDimensions(n),
                s = o.height,
                a = o.width,
                c = r.offsetHeight ?? r.getBoundingClientRect().height,
                l = r.offsetWidth ?? r.getBoundingClientRect().width,
                u = r.getBoundingClientRect(),
                d = this.getWindowScrollTop(),
                f = this.getWindowScrollLeft(),
                p = this.getViewport(),
                m, E;
            u.top + c + s > p.height ? (m = u.top + d - s, n.style.transformOrigin = "bottom", m < 0 && (m = d)) : (m = c + u.top + d, n.style.transformOrigin = "top"), u.left + a > p.width ? E = Math.max(0, u.left + f + l - a) : E = u.left + f, n.style.top = m + "px", n.style.left = E + "px", i && (n.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))")
        }
        static getParents(n, r = []) {
            return n.parentNode === null ? r : this.getParents(n.parentNode, r.concat([n.parentNode]))
        }
        static getScrollableParents(n) {
            let r = [];
            if (n) {
                let i = this.getParents(n),
                    o = /(auto|scroll)/,
                    s = a => {
                        let c = window.getComputedStyle(a, null);
                        return o.test(c.getPropertyValue("overflow")) || o.test(c.getPropertyValue("overflowX")) || o.test(c.getPropertyValue("overflowY"))
                    };
                for (let a of i) {
                    let c = a.nodeType === 1 && a.dataset.scrollselectors;
                    if (c) {
                        let l = c.split(",");
                        for (let u of l) {
                            let d = this.findSingle(a, u);
                            d && s(d) && r.push(d)
                        }
                    }
                    a.nodeType !== 9 && s(a) && r.push(a)
                }
            }
            return r
        }
        static getHiddenElementOuterHeight(n) {
            n.style.visibility = "hidden", n.style.display = "block";
            let r = n.offsetHeight;
            return n.style.display = "none", n.style.visibility = "visible", r
        }
        static getHiddenElementOuterWidth(n) {
            n.style.visibility = "hidden", n.style.display = "block";
            let r = n.offsetWidth;
            return n.style.display = "none", n.style.visibility = "visible", r
        }
        static getHiddenElementDimensions(n) {
            let r = {};
            return n.style.visibility = "hidden", n.style.display = "block", r.width = n.offsetWidth, r.height = n.offsetHeight, n.style.display = "none", n.style.visibility = "visible", r
        }
        static scrollInView(n, r) {
            let i = getComputedStyle(n).getPropertyValue("borderTopWidth"),
                o = i ? parseFloat(i) : 0,
                s = getComputedStyle(n).getPropertyValue("paddingTop"),
                a = s ? parseFloat(s) : 0,
                c = n.getBoundingClientRect(),
                u = r.getBoundingClientRect().top + document.body.scrollTop - (c.top + document.body.scrollTop) - o - a,
                d = n.scrollTop,
                f = n.clientHeight,
                p = this.getOuterHeight(r);
            u < 0 ? n.scrollTop = d + u : u + p > f && (n.scrollTop = d + u - f + p)
        }
        static fadeIn(n, r) {
            n.style.opacity = 0;
            let i = +new Date,
                o = 0,
                s = function() {
                    o = +n.style.opacity.replace(",", ".") + (new Date().getTime() - i) / r, n.style.opacity = o, i = +new Date, +o < 1 && (window.requestAnimationFrame && requestAnimationFrame(s) || setTimeout(s, 16))
                };
            s()
        }
        static fadeOut(n, r) {
            var i = 1,
                o = 50,
                s = r,
                a = o / s;
            let c = setInterval(() => {
                i = i - a, i <= 0 && (i = 0, clearInterval(c)), n.style.opacity = i
            }, o)
        }
        static getWindowScrollTop() {
            let n = document.documentElement;
            return (window.pageYOffset || n.scrollTop) - (n.clientTop || 0)
        }
        static getWindowScrollLeft() {
            let n = document.documentElement;
            return (window.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }
        static matches(n, r) {
            var i = Element.prototype,
                o = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function(s) {
                    return [].indexOf.call(document.querySelectorAll(s), this) !== -1
                };
            return o.call(n, r)
        }
        static getOuterWidth(n, r) {
            let i = n.offsetWidth;
            if (r) {
                let o = getComputedStyle(n);
                i += parseFloat(o.marginLeft) + parseFloat(o.marginRight)
            }
            return i
        }
        static getHorizontalPadding(n) {
            let r = getComputedStyle(n);
            return parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)
        }
        static getHorizontalMargin(n) {
            let r = getComputedStyle(n);
            return parseFloat(r.marginLeft) + parseFloat(r.marginRight)
        }
        static innerWidth(n) {
            let r = n.offsetWidth,
                i = getComputedStyle(n);
            return r += parseFloat(i.paddingLeft) + parseFloat(i.paddingRight), r
        }
        static width(n) {
            let r = n.offsetWidth,
                i = getComputedStyle(n);
            return r -= parseFloat(i.paddingLeft) + parseFloat(i.paddingRight), r
        }
        static getInnerHeight(n) {
            let r = n.offsetHeight,
                i = getComputedStyle(n);
            return r += parseFloat(i.paddingTop) + parseFloat(i.paddingBottom), r
        }
        static getOuterHeight(n, r) {
            let i = n.offsetHeight;
            if (r) {
                let o = getComputedStyle(n);
                i += parseFloat(o.marginTop) + parseFloat(o.marginBottom)
            }
            return i
        }
        static getHeight(n) {
            let r = n.offsetHeight,
                i = getComputedStyle(n);
            return r -= parseFloat(i.paddingTop) + parseFloat(i.paddingBottom) + parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth), r
        }
        static getWidth(n) {
            let r = n.offsetWidth,
                i = getComputedStyle(n);
            return r -= parseFloat(i.paddingLeft) + parseFloat(i.paddingRight) + parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth), r
        }
        static getViewport() {
            let n = window,
                r = document,
                i = r.documentElement,
                o = r.getElementsByTagName("body")[0],
                s = n.innerWidth || i.clientWidth || o.clientWidth,
                a = n.innerHeight || i.clientHeight || o.clientHeight;
            return {
                width: s,
                height: a
            }
        }
        static getOffset(n) {
            var r = n.getBoundingClientRect();
            return {
                top: r.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                left: r.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
            }
        }
        static replaceElementWith(n, r) {
            let i = n.parentNode;
            if (!i) throw "Can't replace element";
            return i.replaceChild(r, n)
        }
        static getUserAgent() {
            if (navigator && this.isClient()) return navigator.userAgent
        }
        static isIE() {
            var n = window.navigator.userAgent,
                r = n.indexOf("MSIE ");
            if (r > 0) return !0;
            var i = n.indexOf("Trident/");
            if (i > 0) {
                var o = n.indexOf("rv:");
                return !0
            }
            var s = n.indexOf("Edge/");
            return s > 0
        }
        static isIOS() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        }
        static isAndroid() {
            return /(android)/i.test(navigator.userAgent)
        }
        static isTouchDevice() {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0
        }
        static appendChild(n, r) {
            if (this.isElement(r)) r.appendChild(n);
            else if (r && r.el && r.el.nativeElement) r.el.nativeElement.appendChild(n);
            else throw "Cannot append " + r + " to " + n
        }
        static removeChild(n, r) {
            if (this.isElement(r)) r.removeChild(n);
            else if (r.el && r.el.nativeElement) r.el.nativeElement.removeChild(n);
            else throw "Cannot remove " + n + " from " + r
        }
        static removeElement(n) {
            "remove" in Element.prototype ? n.remove() : n.parentNode.removeChild(n)
        }
        static isElement(n) {
            return typeof HTMLElement == "object" ? n instanceof HTMLElement : n && typeof n == "object" && n !== null && n.nodeType === 1 && typeof n.nodeName == "string"
        }
        static calculateScrollbarWidth(n) {
            if (n) {
                let r = getComputedStyle(n);
                return n.offsetWidth - n.clientWidth - parseFloat(r.borderLeftWidth) - parseFloat(r.borderRightWidth)
            } else {
                if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
                let r = document.createElement("div");
                r.className = "p-scrollbar-measure", document.body.appendChild(r);
                let i = r.offsetWidth - r.clientWidth;
                return document.body.removeChild(r), this.calculatedScrollbarWidth = i, i
            }
        }
        static calculateScrollbarHeight() {
            if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
            let n = document.createElement("div");
            n.className = "p-scrollbar-measure", document.body.appendChild(n);
            let r = n.offsetHeight - n.clientHeight;
            return document.body.removeChild(n), this.calculatedScrollbarWidth = r, r
        }
        static invokeElementMethod(n, r, i) {
            n[r].apply(n, i)
        }
        static clearSelection() {
            if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0 && window.getSelection().removeAllRanges();
            else if (document.selection && document.selection.empty) try {
                document.selection.empty()
            } catch {}
        }
        static getBrowser() {
            if (!this.browser) {
                let n = this.resolveUserAgent();
                this.browser = {}, n.browser && (this.browser[n.browser] = !0, this.browser.version = n.version), this.browser.chrome ? this.browser.webkit = !0 : this.browser.webkit && (this.browser.safari = !0)
            }
            return this.browser
        }
        static resolveUserAgent() {
            let n = navigator.userAgent.toLowerCase(),
                r = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
            return {
                browser: r[1] || "",
                version: r[2] || "0"
            }
        }
        static isInteger(n) {
            return Number.isInteger ? Number.isInteger(n) : typeof n == "number" && isFinite(n) && Math.floor(n) === n
        }
        static isHidden(n) {
            return !n || n.offsetParent === null
        }
        static isVisible(n) {
            return n && n.offsetParent != null
        }
        static isExist(n) {
            return n !== null && typeof n < "u" && n.nodeName && n.parentNode
        }
        static focus(n, r) {
            n && document.activeElement !== n && n.focus(r)
        }
        static getFocusableSelectorString(n = "") {
            return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`
        }
        static getFocusableElements(n, r = "") {
            let i = this.find(n, this.getFocusableSelectorString(r)),
                o = [];
            for (let s of i) {
                let a = getComputedStyle(s);
                this.isVisible(s) && a.display != "none" && a.visibility != "hidden" && o.push(s)
            }
            return o
        }
        static getFocusableElement(n, r = "") {
            let i = this.findSingle(n, this.getFocusableSelectorString(r));
            if (i) {
                let o = getComputedStyle(i);
                if (this.isVisible(i) && o.display != "none" && o.visibility != "hidden") return i
            }
            return null
        }
        static getFirstFocusableElement(n, r = "") {
            let i = this.getFocusableElements(n, r);
            return i.length > 0 ? i[0] : null
        }
        static getLastFocusableElement(n, r) {
            let i = this.getFocusableElements(n, r);
            return i.length > 0 ? i[i.length - 1] : null
        }
        static getNextFocusableElement(n, r = !1) {
            let i = t.getFocusableElements(n),
                o = 0;
            if (i && i.length > 0) {
                let s = i.indexOf(i[0].ownerDocument.activeElement);
                r ? s == -1 || s === 0 ? o = i.length - 1 : o = s - 1 : s != -1 && s !== i.length - 1 && (o = s + 1)
            }
            return i[o]
        }
        static generateZIndex() {
            return this.zindex = this.zindex || 999, ++this.zindex
        }
        static getSelection() {
            return window.getSelection ? window.getSelection().toString() : document.getSelection ? document.getSelection().toString() : document.selection ? document.selection.createRange().text : null
        }
        static getTargetElement(n, r) {
            if (!n) return null;
            switch (n) {
                case "document":
                    return document;
                case "window":
                    return window;
                case "@next":
                    return r?.nextElementSibling;
                case "@prev":
                    return r?.previousElementSibling;
                case "@parent":
                    return r?.parentElement;
                case "@grandparent":
                    return r?.parentElement.parentElement;
                default:
                    let i = typeof n;
                    if (i === "string") return document.querySelector(n);
                    if (i === "object" && n.hasOwnProperty("nativeElement")) return this.isExist(n.nativeElement) ? n.nativeElement : void 0;
                    let s = (a => !!(a && a.constructor && a.call && a.apply))(n) ? n() : n;
                    return s && s.nodeType === 9 || this.isExist(s) ? s : null
            }
        }
        static isClient() {
            return !!(typeof window < "u" && window.document && window.document.createElement)
        }
        static getAttribute(n, r) {
            if (n) {
                let i = n.getAttribute(r);
                return isNaN(i) ? i === "true" || i === "false" ? i === "true" : i : +i
            }
        }
        static calculateBodyScrollbarWidth() {
            return window.innerWidth - document.documentElement.offsetWidth
        }
        static blockBodyScroll(n = "p-overflow-hidden") {
            document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px"), this.addClass(document.body, n)
        }
        static unblockBodyScroll(n = "p-overflow-hidden") {
            document.body.style.removeProperty("--scrollbar-width"), this.removeClass(document.body, n)
        }
        static createElement(n, r = {}, ...i) {
            if (n) {
                let o = document.createElement(n);
                return this.setAttributes(o, r), o.append(...i), o
            }
        }
        static setAttribute(n, r = "", i) {
            this.isElement(n) && i !== null && i !== void 0 && n.setAttribute(r, i)
        }
        static setAttributes(n, r = {}) {
            if (this.isElement(n)) {
                let i = (o, s) => {
                    let a = n?.$attrs?.[o] ? [n?.$attrs?.[o]] : [];
                    return [s].flat().reduce((c, l) => {
                        if (l != null) {
                            let u = typeof l;
                            if (u === "string" || u === "number") c.push(l);
                            else if (u === "object") {
                                let d = Array.isArray(l) ? i(o, l) : Object.entries(l).map(([f, p]) => o === "style" && (p || p === 0) ? `${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}` : p ? f : void 0);
                                c = d.length ? c.concat(d.filter(f => !!f)) : c
                            }
                        }
                        return c
                    }, a)
                };
                Object.entries(r).forEach(([o, s]) => {
                    if (s != null) {
                        let a = o.match(/^on(.+)/);
                        a ? n.addEventListener(a[1].toLowerCase(), s) : o === "pBind" ? this.setAttributes(n, s) : (s = o === "class" ? [...new Set(i("class", s))].join(" ").trim() : o === "style" ? i("style", s).join(";").trim() : s, (n.$attrs = n.$attrs || {}) && (n.$attrs[o] = s), n.setAttribute(o, s))
                    }
                })
            }
        }
        static isFocusableElement(n, r = "") {
            return this.isElement(n) ? n.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r}`) : !1
        }
    }
    return t
})();
var Ia = (() => {
        class t {
            document;
            platformId;
            renderer;
            el;
            zone;
            config;
            constructor(n, r, i, o, s, a) {
                this.document = n, this.platformId = r, this.renderer = i, this.el = o, this.zone = s, this.config = a
            }
            animationListener;
            mouseDownListener;
            timeout;
            ngAfterViewInit() {
                Wt(this.platformId) && this.config && this.config.ripple && this.zone.runOutsideAngular(() => {
                    this.create(), this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this))
                })
            }
            onMouseDown(n) {
                let r = this.getInk();
                if (!r || this.document.defaultView?.getComputedStyle(r, null).display === "none") return;
                if (le.removeClass(r, "p-ink-active"), !le.getHeight(r) && !le.getWidth(r)) {
                    let a = Math.max(le.getOuterWidth(this.el.nativeElement), le.getOuterHeight(this.el.nativeElement));
                    r.style.height = a + "px", r.style.width = a + "px"
                }
                let i = le.getOffset(this.el.nativeElement),
                    o = n.pageX - i.left + this.document.body.scrollTop - le.getWidth(r) / 2,
                    s = n.pageY - i.top + this.document.body.scrollLeft - le.getHeight(r) / 2;
                this.renderer.setStyle(r, "top", s + "px"), this.renderer.setStyle(r, "left", o + "px"), le.addClass(r, "p-ink-active"), this.timeout = setTimeout(() => {
                    let a = this.getInk();
                    a && le.removeClass(a, "p-ink-active")
                }, 401)
            }
            getInk() {
                let n = this.el.nativeElement.children;
                for (let r = 0; r < n.length; r++)
                    if (typeof n[r].className == "string" && n[r].className.indexOf("p-ink") !== -1) return n[r];
                return null
            }
            resetInk() {
                let n = this.getInk();
                n && le.removeClass(n, "p-ink-active")
            }
            onAnimationEnd(n) {
                this.timeout && clearTimeout(this.timeout), le.removeClass(n.currentTarget, "p-ink-active")
            }
            create() {
                let n = this.renderer.createElement("span");
                this.renderer.addClass(n, "p-ink"), this.renderer.appendChild(this.el.nativeElement, n), this.renderer.setAttribute(n, "aria-hidden", "true"), this.renderer.setAttribute(n, "role", "presentation"), this.animationListener || (this.animationListener = this.renderer.listen(n, "animationend", this.onAnimationEnd.bind(this)))
            }
            remove() {
                let n = this.getInk();
                n && (this.mouseDownListener && this.mouseDownListener(), this.animationListener && this.animationListener(), this.mouseDownListener = null, this.animationListener = null, le.removeElement(n))
            }
            ngOnDestroy() {
                this.config && this.config.ripple && this.remove()
            }
            static \u0275fac = function(r) {
                return new(r || t)(_(Ce), _(Ze), _(Je), _(_e), _(ue), _(Ea, 8))
            };
            static \u0275dir = oe({
                type: t,
                selectors: [
                    ["", "pRipple", ""]
                ],
                hostAttrs: [1, "p-ripple", "p-element"],
                standalone: !0
            })
        }
        return t
    })(),
    my = (() => {
        class t {
            static \u0275fac = function(r) {
                return new(r || t)
            };
            static \u0275mod = Ee({
                type: t
            });
            static \u0275inj = we({})
        }
        return t
    })();
var BM = ["itemsContainer"],
    $M = ["indicatorContent"],
    HM = [
        [
            ["p-header"]
        ],
        [
            ["p-footer"]
        ]
    ],
    zM = ["p-header", "p-footer"],
    WM = (t, e) => ({
        "p-carousel p-component": !0,
        "p-carousel-vertical": t,
        "p-carousel-horizontal": e
    }),
    GM = t => ({
        height: t
    }),
    qM = t => ({
        "p-carousel-prev p-link": !0,
        "p-disabled": t
    }),
    yy = (t, e, n) => ({
        "p-carousel-item p-carousel-item-cloned": !0,
        "p-carousel-item-active": t,
        "p-carousel-item-start": e,
        "p-carousel-item-end": n
    }),
    Ed = t => ({
        $implicit: t
    }),
    YM = (t, e, n) => ({
        "p-carousel-item": !0,
        "p-carousel-item-active": t,
        "p-carousel-item-start": e,
        "p-carousel-item-end": n
    }),
    KM = t => ({
        "p-carousel-next p-link": !0,
        "p-disabled": t
    }),
    QM = t => ({
        "p-carousel-indicator": !0,
        "p-highlight": t
    });

function ZM(t, e) {
    t & 1 && un(0)
}

function JM(t, e) {
    if (t & 1 && (g(0, "div", 12), xt(1), P(2, ZM, 1, 0, "ng-container", 13), h()), t & 2) {
        let n = $();
        C(2), y("ngTemplateOutlet", n.headerTemplate)
    }
}

function XM(t, e) {
    t & 1 && z(0, "ChevronLeftIcon", 18), t & 2 && y("styleClass", "carousel-prev-icon")
}

function eS(t, e) {
    t & 1 && z(0, "ChevronUpIcon", 18), t & 2 && y("styleClass", "carousel-prev-icon")
}

function tS(t, e) {
    if (t & 1 && (pt(0), P(1, XM, 1, 1, "ChevronLeftIcon", 17)(2, eS, 1, 1, "ChevronUpIcon", 17), ht()), t & 2) {
        let n = $(2);
        C(), y("ngIf", !n.isVertical()), C(), y("ngIf", n.isVertical())
    }
}

function nS(t, e) {}

function rS(t, e) {
    t & 1 && P(0, nS, 0, 0, "ng-template")
}

function iS(t, e) {
    if (t & 1 && (g(0, "span", 19), P(1, rS, 1, 0, null, 13), h()), t & 2) {
        let n = $(2);
        C(), y("ngTemplateOutlet", n.previousIconTemplate)
    }
}

function oS(t, e) {
    if (t & 1) {
        let n = Bt();
        g(0, "button", 14), ve("click", function(i) {
            Ue(n);
            let o = $();
            return Be(o.navBackward(i))
        }), P(1, tS, 3, 2, "ng-container", 15)(2, iS, 2, 1, "span", 16), h()
    }
    if (t & 2) {
        let n = $();
        y("ngClass", $e(5, qM, n.isBackwardNavDisabled()))("disabled", n.isBackwardNavDisabled()), J("aria-label", n.ariaPrevButtonLabel()), C(), y("ngIf", !n.previousIconTemplate), C(), y("ngIf", n.previousIconTemplate)
    }
}

function sS(t, e) {
    t & 1 && un(0)
}

function aS(t, e) {
    if (t & 1 && (g(0, "div", 4), P(1, sS, 1, 0, "ng-container", 20), h()), t & 2) {
        let n = e.$implicit,
            r = e.index,
            i = $();
        y("ngClass", Ps(6, yy, i.totalShiftedItems * -1 === i.value.length, r === 0, i.clonedItemsForStarting.length - 1 === r)), J("aria-hidden", i.totalShiftedItems * -1 !== i.value.length)("aria-label", i.ariaSlideNumber(r))("aria-roledescription", i.ariaSlideLabel()), C(), y("ngTemplateOutlet", i.itemTemplate)("ngTemplateOutletContext", $e(10, Ed, n))
    }
}

function cS(t, e) {
    t & 1 && un(0)
}

function lS(t, e) {
    if (t & 1 && (g(0, "div", 4), P(1, cS, 1, 0, "ng-container", 20), h()), t & 2) {
        let n = e.$implicit,
            r = e.index,
            i = $();
        y("ngClass", Ps(6, YM, i.firstIndex() <= r && i.lastIndex() >= r, i.firstIndex() === r, i.lastIndex() === r)), J("aria-hidden", i.totalShiftedItems * -1 !== i.value.length)("aria-label", i.ariaSlideNumber(r))("aria-roledescription", i.ariaSlideLabel()), C(), y("ngTemplateOutlet", i.itemTemplate)("ngTemplateOutletContext", $e(10, Ed, n))
    }
}

function uS(t, e) {
    t & 1 && un(0)
}

function dS(t, e) {
    if (t & 1 && (g(0, "div", 4), P(1, uS, 1, 0, "ng-container", 20), h()), t & 2) {
        let n = e.$implicit,
            r = e.index,
            i = $();
        y("ngClass", Ps(3, yy, i.totalShiftedItems * -1 === i.numVisible, r === 0, i.clonedItemsForFinishing.length - 1 === r)), C(), y("ngTemplateOutlet", i.itemTemplate)("ngTemplateOutletContext", $e(7, Ed, n))
    }
}

function fS(t, e) {
    t & 1 && z(0, "ChevronRightIcon", 18), t & 2 && y("styleClass", "carousel-prev-icon")
}

function pS(t, e) {
    t & 1 && z(0, "ChevronDownIcon", 18), t & 2 && y("styleClass", "carousel-prev-icon")
}

function hS(t, e) {
    if (t & 1 && (pt(0), P(1, fS, 1, 1, "ChevronRightIcon", 17)(2, pS, 1, 1, "ChevronDownIcon", 17), ht()), t & 2) {
        let n = $(2);
        C(), y("ngIf", !n.isVertical()), C(), y("ngIf", n.isVertical())
    }
}

function gS(t, e) {}

function mS(t, e) {
    t & 1 && P(0, gS, 0, 0, "ng-template")
}

function yS(t, e) {
    if (t & 1 && (g(0, "span", 19), P(1, mS, 1, 0, null, 13), h()), t & 2) {
        let n = $(2);
        C(), y("ngTemplateOutlet", n.nextIconTemplate)
    }
}

function vS(t, e) {
    if (t & 1) {
        let n = Bt();
        g(0, "button", 14), ve("click", function(i) {
            Ue(n);
            let o = $();
            return Be(o.navForward(i))
        }), P(1, hS, 3, 2, "ng-container", 15)(2, yS, 2, 1, "span", 16), h()
    }
    if (t & 2) {
        let n = $();
        y("ngClass", $e(5, KM, n.isForwardNavDisabled()))("disabled", n.isForwardNavDisabled()), J("aria-label", n.ariaNextButtonLabel()), C(), y("ngIf", !n.nextIconTemplate), C(), y("ngIf", n.nextIconTemplate)
    }
}

function CS(t, e) {
    if (t & 1) {
        let n = Bt();
        g(0, "li", 4)(1, "button", 22), ve("click", function(i) {
            let o = Ue(n).index,
                s = $(2);
            return Be(s.onDotClick(i, o))
        }), h()()
    }
    if (t & 2) {
        let n = e.index,
            r = $(2);
        y("ngClass", $e(9, QM, r._page === n)), J("data-pc-section", "indicator"), C(), Ne(r.indicatorStyleClass), y("ngClass", "p-link")("ngStyle", r.indicatorStyle)("tabindex", r._page === n ? 0 : -1), J("aria-label", r.ariaPageLabel(n + 1))("aria-current", r._page === n ? "page" : void 0)
    }
}

function DS(t, e) {
    if (t & 1) {
        let n = Bt();
        g(0, "ul", 21, 1), ve("keydown", function(i) {
            Ue(n);
            let o = $();
            return Be(o.onIndicatorKeydown(i))
        }), P(2, CS, 2, 11, "li", 9), h()
    }
    if (t & 2) {
        let n = $();
        Ne(n.indicatorsContentClass), y("ngClass", "p-carousel-indicators p-reset")("ngStyle", n.indicatorsContentStyle), C(2), y("ngForOf", n.totalDotsArray())
    }
}

function bS(t, e) {
    t & 1 && un(0)
}

function wS(t, e) {
    if (t & 1 && (g(0, "div", 23), xt(1, 1), P(2, bS, 1, 0, "ng-container", 13), h()), t & 2) {
        let n = $();
        C(2), y("ngTemplateOutlet", n.footerTemplate)
    }
}
var vy = (() => {
        class t {
            el;
            zone;
            cd;
            renderer;
            document;
            platformId;
            config;
            get page() {
                return this._page
            }
            set page(n) {
                this.isCreated && n !== this._page && (this.autoplayInterval && this.stopAutoplay(), n > this._page && n <= this.totalDots() - 1 ? this.step(-1, n) : n < this._page && this.step(1, n)), this._page = n
            }
            get numVisible() {
                return this._numVisible
            }
            set numVisible(n) {
                this._numVisible = n
            }
            get numScroll() {
                return this._numVisible
            }
            set numScroll(n) {
                this._numScroll = n
            }
            responsiveOptions;
            orientation = "horizontal";
            verticalViewPortHeight = "300px";
            contentClass = "";
            indicatorsContentClass = "";
            indicatorsContentStyle;
            indicatorStyleClass = "";
            indicatorStyle;
            get value() {
                return this._value
            }
            set value(n) {
                this._value = n
            }
            circular = !1;
            showIndicators = !0;
            showNavigators = !0;
            autoplayInterval = 0;
            style;
            styleClass;
            onPage = new ge;
            itemsContainer;
            indicatorContent;
            headerFacet;
            footerFacet;
            templates;
            _numVisible = 1;
            _numScroll = 1;
            _oldNumScroll = 0;
            prevState = {
                numScroll: 0,
                numVisible: 0,
                value: []
            };
            defaultNumScroll = 1;
            defaultNumVisible = 1;
            _page = 0;
            _value;
            carouselStyle;
            id;
            totalShiftedItems;
            isRemainingItemsAdded = !1;
            animationTimeout;
            translateTimeout;
            remainingItems = 0;
            _items;
            startPos;
            documentResizeListener;
            clonedItemsForStarting;
            clonedItemsForFinishing;
            allowAutoplay;
            interval;
            isCreated;
            swipeThreshold = 20;
            itemTemplate;
            headerTemplate;
            footerTemplate;
            previousIconTemplate;
            nextIconTemplate;
            window;
            constructor(n, r, i, o, s, a, c) {
                this.el = n, this.zone = r, this.cd = i, this.renderer = o, this.document = s, this.platformId = a, this.config = c, this.totalShiftedItems = this.page * this.numScroll * -1, this.window = this.document.defaultView
            }
            ngOnChanges(n) {
                Wt(this.platformId) && (n.value && this.circular && this._value && this.setCloneItems(), this.isCreated && (n.numVisible && (this.responsiveOptions && (this.defaultNumVisible = this.numVisible), this.isCircular() && this.setCloneItems(), this.createStyle(), this.calculatePosition()), n.numScroll && this.responsiveOptions && (this.defaultNumScroll = this.numScroll))), this.cd.markForCheck()
            }
            ngAfterContentInit() {
                this.id = wa(), Wt(this.platformId) && (this.allowAutoplay = !!this.autoplayInterval, this.circular && this.setCloneItems(), this.responsiveOptions && (this.defaultNumScroll = this._numScroll, this.defaultNumVisible = this._numVisible), this.createStyle(), this.calculatePosition(), this.responsiveOptions && this.bindDocumentListeners()), this.templates?.forEach(n => {
                    switch (n.getType()) {
                        case "item":
                            this.itemTemplate = n.template;
                            break;
                        case "header":
                            this.headerTemplate = n.template;
                            break;
                        case "footer":
                            this.footerTemplate = n.template;
                            break;
                        case "previousicon":
                            this.previousIconTemplate = n.template;
                            break;
                        case "nexticon":
                            this.nextIconTemplate = n.template;
                            break;
                        default:
                            this.itemTemplate = n.template;
                            break
                    }
                }), this.cd.detectChanges()
            }
            ngAfterContentChecked() {
                if (Wt(this.platformId)) {
                    let n = this.isCircular(),
                        r = this.totalShiftedItems;
                    if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
                        this.autoplayInterval && this.stopAutoplay(!1), this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
                        let i = this._page;
                        this.totalDots() !== 0 && i >= this.totalDots() && (i = this.totalDots() - 1, this._page = i, this.onPage.emit({
                            page: this.page
                        })), r = i * this._numScroll * -1, n && (r -= this._numVisible), i === this.totalDots() - 1 && this.remainingItems > 0 ? (r += -1 * this.remainingItems + this._numScroll, this.isRemainingItemsAdded = !0) : this.isRemainingItemsAdded = !1, r !== this.totalShiftedItems && (this.totalShiftedItems = r), this._oldNumScroll = this._numScroll, this.prevState.numScroll = this._numScroll, this.prevState.numVisible = this._numVisible, this.prevState.value = [...this._value], this.totalDots() > 0 && this.itemsContainer.nativeElement && (this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${r*(100/this._numVisible)}%, 0)` : `translate3d(${r*(100/this._numVisible)}%, 0, 0)`), this.isCreated = !0, this.autoplayInterval && this.isAutoplay() && this.startAutoplay()
                    }
                    n && (this.page === 0 ? r = -1 * this._numVisible : r === 0 && (r = -1 * this.value.length, this.remainingItems > 0 && (this.isRemainingItemsAdded = !0)), r !== this.totalShiftedItems && (this.totalShiftedItems = r))
                }
            }
            createStyle() {
                this.carouselStyle || (this.carouselStyle = this.renderer.createElement("style"), this.carouselStyle.type = "text/css", le.setAttribute(this.carouselStyle, "nonce", this.config?.csp()?.nonce), this.renderer.appendChild(this.document.head, this.carouselStyle));
                let n = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;
                if (this.responsiveOptions) {
                    this.responsiveOptions.sort((r, i) => {
                        let o = r.breakpoint,
                            s = i.breakpoint,
                            a = null;
                        return o == null && s != null ? a = -1 : o != null && s == null ? a = 1 : o == null && s == null ? a = 0 : typeof o == "string" && typeof s == "string" ? a = o.localeCompare(s, void 0, {
                            numeric: !0
                        }) : a = o < s ? -1 : o > s ? 1 : 0, -1 * a
                    });
                    for (let r = 0; r < this.responsiveOptions.length; r++) {
                        let i = this.responsiveOptions[r];
                        n += `
                    @media screen and (max-width: ${i.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/i.numVisible}%
                        }
                    }
                `
                    }
                }
                this.carouselStyle.innerHTML = n
            }
            calculatePosition() {
                if (this.responsiveOptions) {
                    let n = {
                        numVisible: this.defaultNumVisible,
                        numScroll: this.defaultNumScroll
                    };
                    if (typeof window < "u") {
                        let r = window.innerWidth;
                        for (let i = 0; i < this.responsiveOptions.length; i++) {
                            let o = this.responsiveOptions[i];
                            parseInt(o.breakpoint, 10) >= r && (n = o)
                        }
                    }
                    if (this._numScroll !== n.numScroll) {
                        let r = this._page;
                        r = Math.floor(r * this._numScroll / n.numScroll);
                        let i = n.numScroll * this.page * -1;
                        this.isCircular() && (i -= n.numVisible), this.totalShiftedItems = i, this._numScroll = n.numScroll, this._page = r, this.onPage.emit({
                            page: this.page
                        })
                    }
                    this._numVisible !== n.numVisible && (this._numVisible = n.numVisible, this.setCloneItems()), this.cd.markForCheck()
                }
            }
            setCloneItems() {
                this.clonedItemsForStarting = [], this.clonedItemsForFinishing = [], this.isCircular() && (this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible)), this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible)))
            }
            firstIndex() {
                return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1
            }
            lastIndex() {
                return this.firstIndex() + this.numVisible - 1
            }
            totalDots() {
                return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0
            }
            totalDotsArray() {
                let n = this.totalDots();
                return n <= 0 ? [] : Array(n).fill(0)
            }
            isVertical() {
                return this.orientation === "vertical"
            }
            isCircular() {
                return this.circular && this.value && this.value.length >= this.numVisible
            }
            isAutoplay() {
                return this.autoplayInterval && this.allowAutoplay
            }
            isForwardNavDisabled() {
                return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular()
            }
            isBackwardNavDisabled() {
                return this.isEmpty() || this._page <= 0 && !this.isCircular()
            }
            isEmpty() {
                return !this.value || this.value.length === 0
            }
            navForward(n, r) {
                (this.isCircular() || this._page < this.totalDots() - 1) && this.step(-1, r), this.autoplayInterval && this.stopAutoplay(), n && n.cancelable && n.preventDefault()
            }
            navBackward(n, r) {
                (this.isCircular() || this._page !== 0) && this.step(1, r), this.autoplayInterval && this.stopAutoplay(), n && n.cancelable && n.preventDefault()
            }
            onDotClick(n, r) {
                let i = this._page;
                this.autoplayInterval && this.stopAutoplay(), r > i ? this.navForward(n, r) : r < i && this.navBackward(n, r)
            }
            onIndicatorKeydown(n) {
                switch (n.code) {
                    case "ArrowRight":
                        this.onRightKey();
                        break;
                    case "ArrowLeft":
                        this.onLeftKey();
                        break
                }
            }
            onRightKey() {
                let n = [...le.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')],
                    r = this.findFocusedIndicatorIndex();
                this.changedFocusedIndicator(r, r + 1 === n.length ? n.length - 1 : r + 1)
            }
            onLeftKey() {
                let n = this.findFocusedIndicatorIndex();
                this.changedFocusedIndicator(n, n - 1 <= 0 ? 0 : n - 1)
            }
            onHomeKey() {
                let n = this.findFocusedIndicatorIndex();
                this.changedFocusedIndicator(n, 0)
            }
            onEndKey() {
                let n = [...le.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]r')],
                    r = this.findFocusedIndicatorIndex();
                this.changedFocusedIndicator(r, n.length - 1)
            }
            onTabKey() {
                let n = [...le.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')],
                    r = n.findIndex(s => le.getAttribute(s, "data-p-highlight") === !0),
                    i = le.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]'),
                    o = n.findIndex(s => s === i.parentElement);
                n[o].children[0].tabIndex = "-1", n[r].children[0].tabIndex = "0"
            }
            findFocusedIndicatorIndex() {
                let n = [...le.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')],
                    r = le.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
                return n.findIndex(i => i === r.parentElement)
            }
            changedFocusedIndicator(n, r) {
                let i = [...le.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
                i[n].children[0].tabIndex = "-1", i[r].children[0].tabIndex = "0", i[r].children[0].focus()
            }
            step(n, r) {
                let i = this.totalShiftedItems,
                    o = this.isCircular();
                if (r != null) i = this._numScroll * r * -1, o && (i -= this._numVisible), this.isRemainingItemsAdded = !1;
                else {
                    i += this._numScroll * n, this.isRemainingItemsAdded && (i += this.remainingItems - this._numScroll * n, this.isRemainingItemsAdded = !1);
                    let s = o ? i + this._numVisible : i;
                    r = Math.abs(Math.floor(s / this._numScroll))
                }
                o && this.page === this.totalDots() - 1 && n === -1 ? (i = -1 * (this.value.length + this._numVisible), r = 0) : o && this.page === 0 && n === 1 ? (i = 0, r = this.totalDots() - 1) : r === this.totalDots() - 1 && this.remainingItems > 0 && (i += this.remainingItems * -1 - this._numScroll * n, this.isRemainingItemsAdded = !0), this.itemsContainer && (this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${i*(100/this._numVisible)}%, 0)` : `translate3d(${i*(100/this._numVisible)}%, 0, 0)`, this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s"), this.totalShiftedItems = i, this._page = r, this.onPage.emit({
                    page: this.page
                }), this.cd.markForCheck()
            }
            startAutoplay() {
                this.interval = setInterval(() => {
                    this.totalDots() > 0 && (this.page === this.totalDots() - 1 ? this.step(-1, 0) : this.step(-1, this.page + 1))
                }, this.autoplayInterval), this.allowAutoplay = !0, this.cd.markForCheck()
            }
            stopAutoplay(n = !0) {
                this.interval && (clearInterval(this.interval), this.interval = void 0, n && (this.allowAutoplay = !1)), this.cd.markForCheck()
            }
            isPlaying() {
                return !!this.interval
            }
            onTransitionEnd() {
                this.itemsContainer && (this.itemsContainer.nativeElement.style.transition = "", (this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular() && (this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))
            }
            onTouchStart(n) {
                let r = n.changedTouches[0];
                this.startPos = {
                    x: r.pageX,
                    y: r.pageY
                }
            }
            onTouchMove(n) {
                n.cancelable && n.preventDefault()
            }
            onTouchEnd(n) {
                let r = n.changedTouches[0];
                this.isVertical() ? this.changePageOnTouch(n, r.pageY - this.startPos.y) : this.changePageOnTouch(n, r.pageX - this.startPos.x)
            }
            changePageOnTouch(n, r) {
                Math.abs(r) > this.swipeThreshold && (r < 0 ? this.navForward(n) : this.navBackward(n))
            }
            ariaPrevButtonLabel() {
                return this.config.translation.aria ? this.config.translation.aria.prevPageLabel : void 0
            }
            ariaSlideLabel() {
                return this.config.translation.aria ? this.config.translation.aria.slide : void 0
            }
            ariaNextButtonLabel() {
                return this.config.translation.aria ? this.config.translation.aria.nextPageLabel : void 0
            }
            ariaSlideNumber(n) {
                return this.config.translation.aria ? this.config.translation.aria.slideNumber.replace(/{slideNumber}/g, n) : void 0
            }
            ariaPageLabel(n) {
                return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, n) : void 0
            }
            bindDocumentListeners() {
                Wt(this.platformId) && (this.documentResizeListener || (this.documentResizeListener = this.renderer.listen(this.window, "resize", n => {
                    this.calculatePosition()
                })))
            }
            unbindDocumentListeners() {
                Wt(this.platformId) && this.documentResizeListener && (this.documentResizeListener(), this.documentResizeListener = null)
            }
            ngOnDestroy() {
                this.responsiveOptions && this.unbindDocumentListeners(), this.autoplayInterval && this.stopAutoplay()
            }
            static \u0275fac = function(r) {
                return new(r || t)(_(_e), _(ue), _(Ht), _(Je), _(Ce), _(Ze), _(Ea))
            };
            static \u0275cmp = R({
                type: t,
                selectors: [
                    ["p-carousel"]
                ],
                contentQueries: function(r, i, o) {
                    if (r & 1 && (Tn(o, hy, 5), Tn(o, gy, 5), Tn(o, ur, 4)), r & 2) {
                        let s;
                        gt(s = mt()) && (i.headerFacet = s.first), gt(s = mt()) && (i.footerFacet = s.first), gt(s = mt()) && (i.templates = s)
                    }
                },
                viewQuery: function(r, i) {
                    if (r & 1 && (Ii(BM, 5), Ii($M, 5)), r & 2) {
                        let o;
                        gt(o = mt()) && (i.itemsContainer = o.first), gt(o = mt()) && (i.indicatorContent = o.first)
                    }
                },
                hostAttrs: [1, "p-element"],
                inputs: {
                    page: "page",
                    numVisible: "numVisible",
                    numScroll: "numScroll",
                    responsiveOptions: "responsiveOptions",
                    orientation: "orientation",
                    verticalViewPortHeight: "verticalViewPortHeight",
                    contentClass: "contentClass",
                    indicatorsContentClass: "indicatorsContentClass",
                    indicatorsContentStyle: "indicatorsContentStyle",
                    indicatorStyleClass: "indicatorStyleClass",
                    indicatorStyle: "indicatorStyle",
                    value: "value",
                    circular: [Y.HasDecoratorInputTransform, "circular", "circular", fe],
                    showIndicators: [Y.HasDecoratorInputTransform, "showIndicators", "showIndicators", fe],
                    showNavigators: [Y.HasDecoratorInputTransform, "showNavigators", "showNavigators", fe],
                    autoplayInterval: [Y.HasDecoratorInputTransform, "autoplayInterval", "autoplayInterval", Si],
                    style: "style",
                    styleClass: "styleClass"
                },
                outputs: {
                    onPage: "onPage"
                },
                features: [St, jt],
                ngContentSelectors: zM,
                decls: 14,
                vars: 23,
                consts: [
                    ["itemsContainer", ""],
                    ["indicatorContent", ""],
                    ["role", "region", 3, "ngClass", "ngStyle"],
                    ["class", "p-carousel-header", 4, "ngIf"],
                    [3, "ngClass"],
                    [1, "p-carousel-container"],
                    ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"],
                    [1, "p-carousel-items-content", 3, "touchend", "touchstart", "touchmove", "ngStyle"],
                    [1, "p-carousel-items-container", 3, "transitionend"],
                    [3, "ngClass", 4, "ngFor", "ngForOf"],
                    [3, "ngClass", "class", "ngStyle", "keydown", 4, "ngIf"],
                    ["class", "p-carousel-footer", 4, "ngIf"],
                    [1, "p-carousel-header"],
                    [4, "ngTemplateOutlet"],
                    ["type", "button", "pRipple", "", 3, "click", "ngClass", "disabled"],
                    [4, "ngIf"],
                    ["class", "p-carousel-prev-icon", 4, "ngIf"],
                    [3, "styleClass", 4, "ngIf"],
                    [3, "styleClass"],
                    [1, "p-carousel-prev-icon"],
                    [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                    [3, "keydown", "ngClass", "ngStyle"],
                    ["type", "button", 3, "click", "ngClass", "ngStyle", "tabindex"],
                    [1, "p-carousel-footer"]
                ],
                template: function(r, i) {
                    if (r & 1) {
                        let o = Bt();
                        $t(HM), g(0, "div", 2), P(1, JM, 3, 1, "div", 3), g(2, "div", 4)(3, "div", 5), P(4, oS, 3, 7, "button", 6), g(5, "div", 7), ve("touchend", function(a) {
                            return Ue(o), Be(i.onTouchEnd(a))
                        })("touchstart", function(a) {
                            return Ue(o), Be(i.onTouchStart(a))
                        })("touchmove", function(a) {
                            return Ue(o), Be(i.onTouchMove(a))
                        }), g(6, "div", 8, 0), ve("transitionend", function() {
                            return Ue(o), Be(i.onTransitionEnd())
                        }), P(8, aS, 2, 12, "div", 9)(9, lS, 2, 12, "div", 9)(10, dS, 2, 9, "div", 9), h()(), P(11, vS, 3, 7, "button", 6), h(), P(12, DS, 3, 5, "ul", 10), h(), P(13, wS, 3, 1, "div", 11), h()
                    }
                    r & 2 && (Ne(i.styleClass), y("ngClass", Rs(18, WM, i.isVertical(), !i.isVertical()))("ngStyle", i.style), J("id", i.id), C(), y("ngIf", i.headerFacet || i.headerTemplate), C(), Ne(i.contentClass), y("ngClass", "p-carousel-content"), C(), J("aria-live", i.allowAutoplay ? "polite" : "off"), C(), y("ngIf", i.showNavigators), C(), y("ngStyle", $e(21, GM, i.isVertical() ? i.verticalViewPortHeight : "auto")), C(3), y("ngForOf", i.clonedItemsForStarting), C(), y("ngForOf", i.value), C(), y("ngForOf", i.clonedItemsForFinishing), C(), y("ngIf", i.showNavigators), C(), y("ngIf", i.showIndicators), C(), y("ngIf", i.footerFacet || i.footerTemplate))
                },
                dependencies: () => [zt, Hr, On, Bs, Us, Ia, bd, Dd, Cd, wd],
                styles: [`@layer primeng{.p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}}
`],
                encapsulation: 2,
                changeDetection: 0
            })
        }
        return t
    })(),
    Cy = (() => {
        class t {
            static \u0275fac = function(r) {
                return new(r || t)
            };
            static \u0275mod = Ee({
                type: t
            });
            static \u0275inj = we({
                imports: [Nn, Ln, my, bd, Dd, Cd, wd, Nn, Ln]
            })
        }
        return t
    })();
var Dy = (() => {
    class t {
        autofocus = !1;
        focused = !1;
        platformId = D(Ze);
        document = D(Ce);
        host = D(_e);
        ngAfterContentChecked() {
            this.autofocus === !1 ? this.host.nativeElement.removeAttribute("autofocus") : this.host.nativeElement.setAttribute("autofocus", !0), this.focused || this.autoFocus()
        }
        ngAfterViewChecked() {
            this.focused || this.autoFocus()
        }
        autoFocus() {
            Wt(this.platformId) && this.autofocus && setTimeout(() => {
                let n = le.getFocusableElements(this.host?.nativeElement);
                n.length === 0 && this.host.nativeElement.focus(), n.length > 0 && n[0].focus(), this.focused = !0
            })
        }
        static \u0275fac = function(r) {
            return new(r || t)
        };
        static \u0275dir = oe({
            type: t,
            selectors: [
                ["", "pAutoFocus", ""]
            ],
            hostAttrs: [1, "p-element"],
            inputs: {
                autofocus: [Y.HasDecoratorInputTransform, "autofocus", "autofocus", fe]
            },
            standalone: !0,
            features: [St]
        })
    }
    return t
})();
var by = (() => {
    class t extends Yt {
        pathId;
        ngOnInit() {
            this.pathId = "url(#" + wa() + ")"
        }
        static \u0275fac = (() => {
            let n;
            return function(i) {
                return (n || (n = Oe(t)))(i || t)
            }
        })();
        static \u0275cmp = R({
            type: t,
            selectors: [
                ["SpinnerIcon"]
            ],
            standalone: !0,
            features: [ye, j],
            decls: 6,
            vars: 7,
            consts: [
                ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                ["d", "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z", "fill", "currentColor"],
                [3, "id"],
                ["width", "14", "height", "14", "fill", "white"]
            ],
            template: function(r, i) {
                r & 1 && (Ut(), g(0, "svg", 0)(1, "g"), z(2, "path", 1), h(), g(3, "defs")(4, "clipPath", 2), z(5, "rect", 3), h()()()), r & 2 && (Ne(i.getClassNames()), J("aria-label", i.ariaLabel)("aria-hidden", i.ariaHidden)("role", i.role), C(), J("clip-path", i.pathId), C(3), y("id", i.pathId))
            },
            encapsulation: 2
        })
    }
    return t
})();
var IS = ["*"],
    wy = t => ({
        class: t
    });

function _S(t, e) {
    t & 1 && un(0)
}

function MS(t, e) {
    if (t & 1 && z(0, "span", 8), t & 2) {
        let n = $(3);
        y("ngClass", n.iconClass()), J("aria-hidden", !0)("data-pc-section", "loadingicon")
    }
}

function SS(t, e) {
    if (t & 1 && z(0, "SpinnerIcon", 9), t & 2) {
        let n = $(3);
        y("styleClass", n.spinnerIconClass())("spin", !0), J("aria-hidden", !0)("data-pc-section", "loadingicon")
    }
}

function xS(t, e) {
    if (t & 1 && (pt(0), P(1, MS, 1, 3, "span", 6)(2, SS, 1, 4, "SpinnerIcon", 7), ht()), t & 2) {
        let n = $(2);
        C(), y("ngIf", n.loadingIcon), C(), y("ngIf", !n.loadingIcon)
    }
}

function TS(t, e) {}

function AS(t, e) {
    if (t & 1 && P(0, TS, 0, 0, "ng-template", 10), t & 2) {
        let n = $(2);
        y("ngIf", n.loadingIconTemplate)
    }
}

function OS(t, e) {
    if (t & 1 && (pt(0), P(1, xS, 3, 2, "ng-container", 2)(2, AS, 1, 1, null, 5), ht()), t & 2) {
        let n = $();
        C(), y("ngIf", !n.loadingIconTemplate), C(), y("ngTemplateOutlet", n.loadingIconTemplate)("ngTemplateOutletContext", $e(3, wy, n.iconClass()))
    }
}

function NS(t, e) {
    if (t & 1 && z(0, "span", 8), t & 2) {
        let n = $(2);
        y("ngClass", n.iconClass()), J("data-pc-section", "icon")
    }
}

function RS(t, e) {}

function PS(t, e) {
    if (t & 1 && P(0, RS, 0, 0, "ng-template", 10), t & 2) {
        let n = $(2);
        y("ngIf", !n.icon && n.iconTemplate)
    }
}

function FS(t, e) {
    if (t & 1 && (pt(0), P(1, NS, 1, 2, "span", 6)(2, PS, 1, 1, null, 5), ht()), t & 2) {
        let n = $();
        C(), y("ngIf", n.icon && !n.iconTemplate), C(), y("ngTemplateOutlet", n.iconTemplate)("ngTemplateOutletContext", $e(3, wy, n.iconClass()))
    }
}

function kS(t, e) {
    if (t & 1 && (g(0, "span", 11), v(1), h()), t & 2) {
        let n = $();
        J("aria-hidden", n.icon && !n.label)("data-pc-section", "label"), C(), st(n.label)
    }
}

function LS(t, e) {
    if (t & 1 && (g(0, "span", 8), v(1), h()), t & 2) {
        let n = $();
        Ne(n.badgeClass), y("ngClass", n.badgeStyleClass()), J("data-pc-section", "badge"), C(), st(n.badge)
    }
}
var VS = (() => {
        class t {
            el;
            type = "button";
            iconPos = "left";
            icon;
            badge;
            label;
            disabled;
            loading = !1;
            loadingIcon;
            raised = !1;
            rounded = !1;
            text = !1;
            plain = !1;
            severity;
            outlined = !1;
            link = !1;
            tabindex;
            size;
            style;
            styleClass;
            badgeClass;
            ariaLabel;
            autofocus;
            onClick = new ge;
            onFocus = new ge;
            onBlur = new ge;
            contentTemplate;
            loadingIconTemplate;
            iconTemplate;
            templates;
            constructor(n) {
                this.el = n
            }
            spinnerIconClass() {
                return Object.entries(this.iconClass()).filter(([, n]) => !!n).reduce((n, [r]) => n + ` ${r}`, "p-button-loading-icon")
            }
            iconClass() {
                let n = {
                    "p-button-icon": !0,
                    "p-button-icon-left": this.iconPos === "left" && this.label,
                    "p-button-icon-right": this.iconPos === "right" && this.label,
                    "p-button-icon-top": this.iconPos === "top" && this.label,
                    "p-button-icon-bottom": this.iconPos === "bottom" && this.label
                };
                return this.loading ? n[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`] = !0 : this.icon && (n[this.icon] = !0), n
            }
            get buttonClass() {
                return {
                    "p-button p-component": !0,
                    "p-button-icon-only": (this.icon || this.iconTemplate || this.loadingIcon || this.loadingIconTemplate) && !this.label,
                    "p-button-vertical": (this.iconPos === "top" || this.iconPos === "bottom") && this.label,
                    "p-button-loading": this.loading,
                    "p-button-loading-label-only": this.loading && !this.icon && this.label && !this.loadingIcon && this.iconPos === "left",
                    "p-button-link": this.link,
                    [`p-button-${this.severity}`]: this.severity,
                    "p-button-raised": this.raised,
                    "p-button-rounded": this.rounded,
                    "p-button-text": this.text,
                    "p-button-outlined": this.outlined,
                    "p-button-sm": this.size === "small",
                    "p-button-lg": this.size === "large",
                    "p-button-plain": this.plain,
                    [`${this.styleClass}`]: this.styleClass
                }
            }
            ngAfterContentInit() {
                this.templates?.forEach(n => {
                    switch (n.getType()) {
                        case "content":
                            this.contentTemplate = n.template;
                            break;
                        case "icon":
                            this.iconTemplate = n.template;
                            break;
                        case "loadingicon":
                            this.loadingIconTemplate = n.template;
                            break;
                        default:
                            this.contentTemplate = n.template;
                            break
                    }
                })
            }
            badgeStyleClass() {
                return {
                    "p-badge p-component": !0,
                    "p-badge-no-gutter": this.badge && String(this.badge).length === 1
                }
            }
            focus() {
                this.el.nativeElement.firstChild.focus()
            }
            static \u0275fac = function(r) {
                return new(r || t)(_(_e))
            };
            static \u0275cmp = R({
                type: t,
                selectors: [
                    ["p-button"]
                ],
                contentQueries: function(r, i, o) {
                    if (r & 1 && Tn(o, ur, 4), r & 2) {
                        let s;
                        gt(s = mt()) && (i.templates = s)
                    }
                },
                hostAttrs: [1, "p-element"],
                hostVars: 2,
                hostBindings: function(r, i) {
                    r & 2 && xn("p-disabled", i.disabled)
                },
                inputs: {
                    type: "type",
                    iconPos: "iconPos",
                    icon: "icon",
                    badge: "badge",
                    label: "label",
                    disabled: [Y.HasDecoratorInputTransform, "disabled", "disabled", fe],
                    loading: [Y.HasDecoratorInputTransform, "loading", "loading", fe],
                    loadingIcon: "loadingIcon",
                    raised: [Y.HasDecoratorInputTransform, "raised", "raised", fe],
                    rounded: [Y.HasDecoratorInputTransform, "rounded", "rounded", fe],
                    text: [Y.HasDecoratorInputTransform, "text", "text", fe],
                    plain: [Y.HasDecoratorInputTransform, "plain", "plain", fe],
                    severity: "severity",
                    outlined: [Y.HasDecoratorInputTransform, "outlined", "outlined", fe],
                    link: [Y.HasDecoratorInputTransform, "link", "link", fe],
                    tabindex: [Y.HasDecoratorInputTransform, "tabindex", "tabindex", Si],
                    size: "size",
                    style: "style",
                    styleClass: "styleClass",
                    badgeClass: "badgeClass",
                    ariaLabel: "ariaLabel",
                    autofocus: [Y.HasDecoratorInputTransform, "autofocus", "autofocus", fe]
                },
                outputs: {
                    onClick: "onClick",
                    onFocus: "onFocus",
                    onBlur: "onBlur"
                },
                standalone: !0,
                features: [St, j],
                ngContentSelectors: IS,
                decls: 7,
                vars: 14,
                consts: [
                    ["pRipple", "", "pAutoFocus", "", 3, "click", "focus", "blur", "ngStyle", "disabled", "ngClass", "autofocus"],
                    [4, "ngTemplateOutlet"],
                    [4, "ngIf"],
                    ["class", "p-button-label", 4, "ngIf"],
                    [3, "ngClass", "class", 4, "ngIf"],
                    [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                    [3, "ngClass", 4, "ngIf"],
                    [3, "styleClass", "spin", 4, "ngIf"],
                    [3, "ngClass"],
                    [3, "styleClass", "spin"],
                    [3, "ngIf"],
                    [1, "p-button-label"]
                ],
                template: function(r, i) {
                    r & 1 && ($t(), g(0, "button", 0), ve("click", function(s) {
                        return i.onClick.emit(s)
                    })("focus", function(s) {
                        return i.onFocus.emit(s)
                    })("blur", function(s) {
                        return i.onBlur.emit(s)
                    }), xt(1), P(2, _S, 1, 0, "ng-container", 1)(3, OS, 3, 5, "ng-container", 2)(4, FS, 3, 5, "ng-container", 2)(5, kS, 2, 3, "span", 3)(6, LS, 2, 5, "span", 4), h()), r & 2 && (y("ngStyle", i.style)("disabled", i.disabled || i.loading)("ngClass", i.buttonClass)("autofocus", i.autofocus), J("type", i.type)("aria-label", i.ariaLabel)("data-pc-name", "button")("data-pc-section", "root")("tabindex", i.tabindex), C(2), y("ngTemplateOutlet", i.contentTemplate), C(), y("ngIf", i.loading), C(), y("ngIf", !i.loading), C(), y("ngIf", !i.contentTemplate && i.label), C(), y("ngIf", !i.contentTemplate && i.badge))
                },
                dependencies: [On, Bs, Us, zt, Ia, Dy, by],
                encapsulation: 2,
                changeDetection: 0
            })
        }
        return t
    })(),
    Ey = (() => {
        class t {
            static \u0275fac = function(r) {
                return new(r || t)
            };
            static \u0275mod = Ee({
                type: t
            });
            static \u0275inj = we({
                imports: [VS, Ln]
            })
        }
        return t
    })();
var Iy = (() => {
    class t {
        static \u0275fac = function(r) {
            return new(r || t)
        };
        static \u0275mod = Ee({
            type: t
        });
        static \u0275inj = we({
            imports: [Nn, Ln, Ln]
        })
    }
    return t
})();
var jS = (t, e) => ({
    "top-row": t,
    "bottom-row": e
});

function US(t, e) {
    if (t & 1 && (g(0, "div", 12), z(1, "img", 13), h()), t & 2) {
        let n = e.$implicit,
            r = $().$implicit;
        C(), y("src", n, Is)("alt", r.title)
    }
}

function BS(t, e) {
    if (t & 1 && (pt(0), g(1, "div", 5)(2, "p-carousel", 6), P(3, US, 2, 2, "ng-template", 7), h(), g(4, "div", 8)(5, "h3"), v(6), h()(), g(7, "div", 9)(8, "a", 10), v(9, "View Project"), h(), g(10, "a", 11), v(11, "GitHub"), h()()(), ht()), t & 2) {
        let n = e.$implicit,
            r = e.index;
        C(), y("ngClass", Rs(9, jS, r < 3, r >= 3)), C(), y("value", n.images)("numVisible", 1)("numScroll", 1)("circular", !0)("showNavigators", !0), C(4), st(n.title), C(2), y("href", n.link, Is), C(2), y("href", n.gitUrl, Is)
    }
}
var _y = (() => {
    let e = class e {
        constructor() {
            this.projects = []
        }
        ngOnInit() {
            this.projects = [{
                title: "Todo Management Application",
                link: "https://www.youtube.com/watch?v=3XAwT8Ifueg",
                gitUrl: "https://github.com/pdkv1999/todoapp",
                images: ["assets/todo-application/1-createtodo.png", "assets/todo-application/2-updatetodo.png", "assets/todo-application/3-pagination.png", "assets/todo-application/4-pagination.png", "assets/todo-application/5-filtering.png", "assets/todo-application/6-sorting.png"],
                delay: 300
            }, {
                title: "Employee Management System",
                link: "https://www.youtube.com/watch?v=XsTl_Lvbvys",
                gitUrl: "https://github.com/pdkv1999/employeemanagementsystem/tree/main",
                images: ["assets/employee-management-system/1-employee-management-system-homepage.png", "assets/employee-management-system/2-employee-management-system-addemployee.png", "assets/employee-management-system/3-employee-management-system-updateemployee.png", "assets/employee-management-system/4-employee-management-system-deleteemployee.png", "assets/employee-management-system/5-employee-management-system-deleteemployee2.png"],
                delay: 300
            }, {
                title: "Rock Paper Scissor Game",
                link: "https://akhilcharugulla.github.io/Rockpapaerscissor-clone-for-deployment/",
                gitUrl: "https://github.com/akhilcharugulla/Rockpapaerscissor-clone-for-deployment",
                images: ["assets/rock-paper-scissor/1-Rock paper Scissor-home.png", "assets/rock-paper-scissor/2-Rock paper Scissor-gamestart.png", "assets/rock-paper-scissor/3-Rock paper Scissor-outcome.png", "assets/rock-paper-scissor/4-Rock paper Scissor-multiplesets.png"],
                delay: 200
            }, {
                title: "Calculator Application",
                link: "https://akhilcharugulla.github.io/calculator-for-deployment/",
                gitUrl: "https://github.com/akhilcharugulla/calculator-for-deployment",
                images: ["assets/calculator/1-calculator-main page.png", "assets/calculator/2-calculator-action.png", "assets/calculator/3-calculator-someactions.png", "assets/calculator/4-calculator-someactions-clearhistory.png"],
                delay: 300
            }, ], this.responsiveOptions = [{
                breakpoint: "1400px",
                numVisible: 3,
                numScroll: 3
            }, {
                breakpoint: "1220px",
                numVisible: 2,
                numScroll: 2
            }, {
                breakpoint: "1100px",
                numVisible: 1,
                numScroll: 1
            }]
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-projects"]
        ],
        standalone: !0,
        features: [j],
        decls: 6,
        vars: 1,
        consts: [
            ["id", "project"],
            ["data-aos", "fade-up", "data-aos-duration", "1200", "data-aos-delay", "200", 1, "container"],
            ["data-aos", "fade-up", "data-aos-duration", "1200", "data-aos-easing", "ease-out-cubic"],
            [1, "project-grid"],
            [4, "ngFor", "ngForOf"],
            [1, "project-item", 3, "ngClass"],
            [3, "value", "numVisible", "numScroll", "circular", "showNavigators"],
            ["pTemplate", "item"],
            [1, "project-title"],
            [1, "project-links"],
            ["target", "_blank", 1, "p-button", "p-button-rounded", "p-button-info", 3, "href"],
            ["target", "_blank", 1, "p-button", "p-button-rounded", "p-button-secondary", "align-center", 3, "href"],
            [1, "img-container"],
            [3, "src", "alt"]
        ],
        template: function(i, o) {
            i & 1 && (g(0, "section", 0)(1, "div", 1)(2, "h2", 2), v(3, "PROJECTS"), h(), g(4, "div", 3), P(5, BS, 12, 12, "ng-container", 4), h()()()), i & 2 && (C(5), y("ngForOf", o.projects))
        },
        dependencies: [Cy, zt, Hr, vy, ur, Ey, Iy, Nn],
        styles: ["#project[_ngcontent-%COMP%]{background:#000;padding:4em;text-align:center;font-family:Roboto,sans-serif;color:#fff}#project[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#87CEEB;font-size:1.5em;margin-bottom:1em}#project[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{background:#000;border-radius:10px;padding:2em;max-width:1400px;margin:0 auto;overflow:hidden}.project-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:2em;margin-bottom:2em}.project-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;max-width:350px;margin:0 auto;padding:1em 0}.carousel-wrapper[_ngcontent-%COMP%]{width:100%;height:250px;position:relative;overflow:hidden}[_nghost-%COMP%]     .p-carousel{width:100%;height:250px;position:relative;overflow:hidden}[_nghost-%COMP%]     .p-carousel .p-carousel-content, [_nghost-%COMP%]     .p-carousel .p-carousel-container, [_nghost-%COMP%]     .p-carousel .p-carousel-items-container{height:100%}[_nghost-%COMP%]     .p-carousel .p-carousel-item{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.img-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;overflow:hidden;border-radius:10px}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center}.project-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1em;margin:.5em 0;color:#87CEEB}.project-links[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1em;margin-top:.5em;width:100%}.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;padding:.5em 1em;border-radius:20px;font-size:.9em;transition:background-color .3s ease;flex:1;max-width:120px;background:#87CEEB;color:#000;border:none;outline:none}.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.8;background:#f3a508;color:#000}.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{background:#f3a508}.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited{background:#87CEEB;color:#000}.project-links[_ngcontent-%COMP%]   a.p-button-secondary[_ngcontent-%COMP%]{border:1px solid rgba(255,255,255,.5)!important;color:#ffffffef!important;background:transparent}.project-links[_ngcontent-%COMP%]   a.p-button-secondary[_ngcontent-%COMP%]:hover{border:1px solid #e9ba5d!important;color:#fffc!important}.align-center[_ngcontent-%COMP%]{padding-left:35px!important}[_nghost-%COMP%]     .p-carousel .p-carousel-prev, [_nghost-%COMP%]     .p-carousel .p-carousel-next{position:absolute;top:45%;transform:translateY(-50%);background:#00000080;color:#fff;border:none;border-radius:50%;width:2em;height:2em;font-size:1em;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;margin:0}[_nghost-%COMP%]     .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button{background-color:#87CEEB}[_nghost-%COMP%]     .p-carousel .p-carousel-prev{left:.5em}[_nghost-%COMP%]     .p-carousel .p-carousel-next{right:.5em}[_nghost-%COMP%]     .p-carousel .p-carousel-prev span, [_nghost-%COMP%]     .p-carousel .p-carousel-next span{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .p-carousel .p-carousel-prev:not(.p-disabled):hover, [_nghost-%COMP%]     .p-carousel .p-carousel-next:not(.p-disabled):hover{background:#000000b3}@media (max-width: 1200px){.project-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 768px){#project[_ngcontent-%COMP%]{padding:2em 1em}#project[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:1em;width:95%;max-width:none}.project-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1em}.project-item[_ngcontent-%COMP%]{max-width:100%}.carousel-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]     .p-carousel{height:200px}.img-container[_ngcontent-%COMP%]{border-radius:5px}.project-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.9em}.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4em .8em}.align-center[_ngcontent-%COMP%]{padding-left:25px!important}}@media (max-width: 480px){#project[_ngcontent-%COMP%]{padding:1em .5em}#project[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:.5em;width:98%}.carousel-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]     .p-carousel{height:180px}.project-links[_ngcontent-%COMP%]{flex-wrap:wrap}.project-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{flex:0 1 auto;min-width:100px}}"]
    });
    let t = e;
    return t
})();
var My = (() => {
    let e = class e {};
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-education"]
        ],
        standalone: !0,
        features: [j],
        decls: 40,
        vars: 0,
        consts: [
            ["id", "education"],
            [1, "container"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-out-cubic"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "education-item"],
            ["href", "https://www.unt.edu/", "target", "_blank"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "300", 1, "education-item"],
            ["href", "https://www.sastra.edu/", "target", "_blank"]
        ],
        template: function(i, o) {
            i & 1 && (g(0, "section", 0)(1, "div", 1)(2, "h2", 2), v(3, "EDUCATION"), h(), g(4, "div", 3)(5, "a", 4), v(6, "University College Cork"), h(), g(7, "p"), v(8, "Masters in Business Analytics | Sept 2024"), h(), g(9, "p")(10, "strong"), v(11, "Relevant Courses: "), h(), v(12, "Python for Business Analytics, Predictive Analytics, "), z(13, "br"), v(14, " Business Data Analysis and Visualisation"), h(), g(15, "p")(16, "strong"), v(17, "Experience: "), h(), v(18, "Postgrad Tutor"), h(), g(19, "p")(20, "strong"), v(21, "Extracurricular Activities: "), h(), v(22, "Member of Access Skill Center"), h()(), g(23, "div", 5)(24, "a", 6), v(25, "Sastra University"), h(), g(26, "p"), v(27, "Bachelor of Technology in Electronics and Communication Engineering | May 2020"), h(), g(28, "p")(29, "strong"), v(30, "Relevant Courses: "), h(), v(31, "Data Visulization, Computer Networks, Programming Languages"), h(), g(32, "p")(33, "strong"), v(34, "Achievements: "), h(), v(35, "Recipient of the National Scholarship Scheme and subject topper in Mathematics"), h(), g(36, "p")(37, "strong"), v(38, "Extracurricular Activities: "), h(), v(39, "Volunteer at National Service Scheme"), h()()()())
        },
        styles: ["#education[_ngcontent-%COMP%]{background:#000;background-size:cover;padding:7em;text-align:center;font-family:Montserrat,sans-serif}#education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]{background-color:#8a81811a;padding:20px;margin-bottom:20px;border-radius:10px}#education[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.2em;color:#87CEEB;font-weight:700;text-decoration:none;padding-top:18px;display:inline-block}#education[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#87CEEB}#education[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#87CEEB;margin-bottom:30px}#education[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{color:#999}@media screen and (max-width: 1024px){#education[_ngcontent-%COMP%]{padding:5em}#education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]{padding:15px}}@media screen and (max-width: 768px){#education[_ngcontent-%COMP%]{padding:3em}#education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]{padding:15px;border-radius:1.5rem}#education[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.1em;padding-top:15px}}@media screen and (max-width: 480px){#education[_ngcontent-%COMP%]{padding:2em}#education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]{padding:10px;border-radius:1rem;margin-bottom:14px}#education[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1em;padding-top:12px}#education[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5em;margin-bottom:20px}}"]
    });
    let t = e;
    return t
})();
var Sy = (() => {
    let e = class e {};
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-about"]
        ],
        standalone: !0,
        features: [j],
        decls: 7,
        vars: 0,
        consts: [
            ["id", "about", 1, "parallax1"],
            [1, "container"],
            [1, "hero-content"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-out-cubic"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200"]
        ],
        template: function(i, o) {
            i & 1 && (g(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3), v(4, "ABOUT ME"), h(), g(5, "p", 4), v(6, " Experienced Software Engineer with 4+ years of expertise in developing and maintaining software applications. Demonstrated ownership skills by analyzing complex technical issues and providing effective solutions. Proficient in Software Development Life Cycle, Agile methodologies, and possesses a strong understanding of software development principles. Experienced in core Java concepts, OOP principles, Data Structures and Algorithms, Databases, and testing. Familiarity with AWS and cloud data management. Skilled in writing Optimized SQL queries."), h()()()())
        },
        styles: ["#about[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff0,#80808066,#333);background:#000;padding:7em 4em;text-align:center;font-family:Montserrat,sans-serif;min-height:70vh;display:flex;align-items:center;justify-content:center;flex-direction:column}#about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{color:#87CEEB}#about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#999}#about[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{background-color:#8a81811a;padding:2em;border-radius:10px;margin:0 auto;max-width:800px}#about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px}#about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:1.6}@media screen and (max-width: 768px){#about[_ngcontent-%COMP%]{padding:4em 2em;min-height:auto}#about[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{padding:1.5em}#about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}#about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}}"]
    });
    let t = e;
    return t
})();
var xy = (() => {
    let e = class e {};
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-skills"]
        ],
        standalone: !0,
        features: [j],
        decls: 41,
        vars: 0,
        consts: [
            ["id", "skills", 1, "skills"],
            [1, "container"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-out-cubic"],
            [1, "row"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "200", 1, "skill-item"],
            [1, "card"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-delay", "300", 1, "skill-item"],
            [1, "card", 2, "padding-right", "100px"]
        ],
        template: function(i, o) {
            i & 1 && (g(0, "section", 0)(1, "div", 1)(2, "h2", 2), v(3, "TECHNICAL SKILLS"), h(), g(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h3"), v(8, "Programming Languages"), h(), g(9, "p"), v(10, "Java, C++, JavaScript, Es6+, TypeScript, Nodejs, Python"), h()()(), g(11, "div", 4)(12, "div", 5)(13, "h3"), v(14, "Technologies/Frameworks"), h(), g(15, "p"), v(16, "Spring, Spring Boot, RESTful APIs, Hibernate, Angular, AngularJS, ReactJs, ExpressJs, CI/CD, Aws"), h()()(), g(17, "div", 6)(18, "div", 5)(19, "h3"), v(20, "Knowledge In"), h(), g(21, "p"), v(22, "Maven, OAuth2, Splunk, Swagger, Microservices, Docker, Json, GraphQL, Xml, Html, Css, SASS, Agile, Bootstrap, Jsp"), h()()(), g(23, "div", 4)(24, "div", 5)(25, "h3"), v(26, "Databases"), h(), g(27, "p"), v(28, "Oracle, MySQL, MongoDB"), h()()(), g(29, "div", 6)(30, "div", 5)(31, "h3"), v(32, "Other Tools"), h(), g(33, "p"), v(34, "Git, Jira, HP-Fortify, Jenkins, Postman, IntelliJ, Visual Studio, Tomcat, Kubernetes, MS-Office "), h()()(), g(35, "div", 6)(36, "div", 7)(37, "h3"), v(38, "Operating Systems"), h(), g(39, "p"), v(40, "Linux, Windows, macOS"), h()()()()()())
        },
        styles: [".skills[_ngcontent-%COMP%]{background:linear-gradient(to top,beige,#fff8dc);background:#000;padding:4em;display:flex;flex-direction:column;align-items:center;animation:fadeIn 2s ease-in;font-family:Montserrat}.skills[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:2em}.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]{background:#8a81811a;padding:20px;border-radius:15px;margin-bottom:20px;box-shadow:0 2px 5px #0000001a;display:flex;font-family:Montserrat;flex-direction:column;align-items:center;width:100%;max-width:350px}.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#87CEEB}.skills[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#87CEEB;text-align:center;font-size:1.5em}.skills[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#999}"]
    });
    let t = e;
    return t
})();
var Ty = (() => {
    let e = class e {};
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-home"]
        ],
        standalone: !0,
        features: [j],
        decls: 11,
        vars: 0,
        consts: [
            ["id", "home", 1, "parallax"],
            [1, "container"],
            [1, "hero-content"],
            [1, "hero-image"],
            ["src", "assets/Dileep/Dileep-Profile-pic.png", "alt", "Dileep"],
            ["data-aos", "fade-down", "data-aos-easing", "ease-out-cubic", "data-aos-duration", "1000", 1, "animate__animated", "animate__fadeInDown"],
            ["data-aos", "fade-up", "data-aos-easing", "ease-out-cubic", "data-aos-duration", "1200", "data-aos-delay", "200", 1, "animate__animated", "animate__fadeInUp"],
            ["href", "assets/Dileep/DileepResume.pdf", "target", "_blank", "data-aos", "zoom-in", "data-aos-duration", "1200", "data-aos-delay", "400", 1, "btn"]
        ],
        template: function(i, o) {
            i & 1 && (g(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3), z(4, "img", 4), h(), g(5, "h1", 5), v(6, "Welcome to my portfolio"), h(), g(7, "p", 6), v(8, "I am Dileep Kumar Varma, Penmetsa, a skilled Software Developer"), h(), g(9, "a", 7), v(10, "View My Resume"), h()()()())
        },
        styles: ["#home[_ngcontent-%COMP%]{background:#000;background:cover;color:#fff;width:100%;height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;font-family:Montserrat,sans-serif;position:relative}#home.parallax[_ngcontent-%COMP%]{background-attachment:fixed}#home[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]{position:relative;z-index:1}#home[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]{width:180px;height:180px;margin:0 auto;border-radius:50%;overflow:hidden;box-shadow:0 4px 8px #0003}#home[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}#home[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:#87CEEB;color:#000;padding:.5em 1em;text-decoration:none;border-radius:5px;display:inline-block;transition:background .3s ease}#home[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:#e69c08}#home[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;margin-bottom:10px}#home[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:25px}@media (max-width: 768px){#home[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px}#home[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;margin-bottom:15px}#home[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]{width:170px;height:170px}}"]
    });
    let t = e;
    return t
})();
var $S = t => ({
    "selected-item": t
});

function HS(t, e) {
    if (t & 1) {
        let n = Bt();
        g(0, "div", 7)(1, "div", 8), ve("click", function() {
            let i = Ue(n).$implicit,
                o = $();
            return Be(o.toggleItem(i))
        }), z(2, "h3", 9), g(3, "p"), v(4), h()()()
    }
    if (t & 2) {
        let n = e.$implicit,
            r = $();
        xn("selected-item", r.selectedItem === n), C(), y("ngClass", $e(6, $S, r.selectedItem === n)), J("data-aos-delay", n.delay), C(), y("innerHTML", n.title, Eh), C(2), st(n.date)
    }
}

function zS(t, e) {
    if (t & 1 && (g(0, "li"), v(1), h()), t & 2) {
        let n = e.$implicit;
        C(), Os(" ", n, " ")
    }
}

function WS(t, e) {
    if (t & 1 && (g(0, "div", 10)(1, "ul", 11), P(2, zS, 2, 1, "li", 12), h()()), t & 2) {
        let n = $();
        C(2), y("ngForOf", n.selectedItem.details)
    }
}
var Ay = (() => {
    let e = class e {
        constructor() {
            this.experienceItems = [{
                title: "Postgrad Tutor at University College Cork",
                date: "Cork, Ireland | Sept 2024 \u2013 Present",
                link: "https://www.ucc.ie/en/",
                details: ["Involved in the course IS61X5, Database Analysis and Design, instructing students in advanced database management concepts, SQL practices, and relational models through practical exercises and assessments.", "Designed and developed course materials, including quizzes, assignments, and lecture notes, strengthening student understanding of data-driven technologies and database applications."],
                delay: 200
            }, {
                title: "Member of Technical Staff at Oracle Cerner",
                date: "Bengaluru, India | Oct 2021 \u2013 Aug 2024",
                link: "https://go.oracle.com/LP=142384?src1=:ad:pas:go:dg:a_nas:l5:RC_GOOG240501P00011C00354:MainAd&gad_source=1&gclid=Cj0KCQjwzva1BhD3ARIsADQuPnWMiAg3NgZ6ys7_TyPjesEmSYfNxSebchOBN1qEClV4WwueXRwKaaEaAikWEALw_wcB",
                details: ["Managed spikes, stories, and defects for the Lab-sequence product, assessing system interactions to ensure seamless integration of APIs and design changes for new feature implementation.", "Addressed 200+ HP-Fortify vulnerabilities, enhancing overall code quality by 30% and boosting system security and efficiency.", "Designed and implemented the Visit List Filter Queue feature, improving the prioritisation of patient encounters by appointment dates and emergencies, and integrated the feature into Lab-Sequence.", "Migrated APIs from synchronous to asynchronous using Spring Reactive Programming, optimizing system performance by 50%, with deployments managed through Jenkins pipelines for continuous integration and delivery.", "Conducted unit testing with 80%+ code coverage using Junit and Mockito, contributing to product reliability, and participated in internal and external code reviews.", "Delivered optimized APIs to fetch EHR data for Cerner Millennium, resulting in a 30% increase in order processing efficiency.", "Documented REST APIs using Swagger, streamlining API clarity and standardisation for stakeholders.", "Improved SQL query performance by 2x through automation of repetitive tasks and the creation of optimized stored procedures.", "Led the migration of table cleanup jobs using a Java-based scheduler, refining data management and system performance."],
                delay: 300
            }, {
                title: "Programmer Analyst <br>at Cognizant",
                date: "Hyderabad, India | Aug 2020 \u2013 Oct 2021",
                link: "https://www.cognizant.com/in/en",
                details: ["Developed core-buy flow pages for an E-commerce web application using Kibo, elevating customer experience and application performance.", "Optimized existing codebases using HTML, CSS, and JavaScript, ensuring compliance with industry standards, while collaborating with cross-functional teams to deliver seamless UI/UX features."],
                delay: 400
            }]
        }
        ngOnInit() {
            this.selectedItem = this.experienceItems[0]
        }
        toggleItem(r) {
            this.selectedItem = r
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-experience"]
        ],
        standalone: !0,
        features: [j],
        decls: 8,
        vars: 2,
        consts: [
            ["id", "experience"],
            [1, "container"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-out-cubic"],
            [1, "experience-items"],
            ["class", "experience-item", 3, "selected-item", 4, "ngFor", "ngForOf"],
            [1, "experience-detail-container"],
            ["class", "experience-detail", "data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-out-cubic", 4, "ngIf"],
            [1, "experience-item"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "experience-summary", 3, "click", "ngClass"],
            [3, "innerHTML"],
            ["data-aos", "fade-up", "data-aos-duration", "1000", "data-aos-easing", "ease-out-cubic", 1, "experience-detail"],
            [1, "experience-details-list"],
            [4, "ngFor", "ngForOf"]
        ],
        template: function(i, o) {
            i & 1 && (g(0, "section", 0)(1, "div", 1)(2, "h2", 2), v(3, "EXPERIENCE"), h(), g(4, "div", 3), P(5, HS, 5, 8, "div", 4), h(), g(6, "div", 5), P(7, WS, 3, 1, "div", 6), h()()()), i & 2 && (C(5), y("ngForOf", o.experienceItems), C(2), y("ngIf", o.selectedItem))
        },
        dependencies: [Hr, On, zt],
        styles: ['@charset "UTF-8";#experience[_ngcontent-%COMP%]{background:#000;background-size:cover;padding:7em;text-align:center;font-family:Montserrat,sans-serif}#experience[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#87CEEB}#experience[_ngcontent-%COMP%]   .experience-items[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;margin-top:20px}#experience[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]{flex:1 1 30%;margin:10px;background:#8a81811a;border:1px solid #171616;padding:5px;border-radius:10px;position:relative;transition:all .3s ease;box-shadow:10px 10px 25px #0000001a;cursor:pointer}#experience[_ngcontent-%COMP%]   .experience-item.selected-item[_ngcontent-%COMP%]{background-color:#8a81811a;color:#999;box-shadow:10px 10px 25px #0003;border-left:10px solid darkorange}#experience[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]:hover{background-color:#726a6a;box-shadow:10px 10px 25px #00000026}p[_ngcontent-%COMP%]{color:#999}#experience[_ngcontent-%COMP%]   .experience-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:15px;color:#999}#experience[_ngcontent-%COMP%]   .experience-detail-container[_ngcontent-%COMP%]{margin-top:20px;padding:15px;color:#999!important;background-color:#8a81811a;border:1px solid rgba(138,129,129,.1);border-radius:10px;box-shadow:0 4px 6px #0000001a;opacity:1;transition:opacity .3s ease;text-align:left}#experience[_ngcontent-%COMP%]   .experience-details-list[_ngcontent-%COMP%]{padding-left:0;list-style:none}#experience[_ngcontent-%COMP%]   .experience-details-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:40px;margin-bottom:10px;color:#999;font-family:Montserrat,sans-serif;font-size:16px;line-height:1.6}#experience[_ngcontent-%COMP%]   .experience-details-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\25b2";position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#87CEEB;font-size:16px}#experience[_ngcontent-%COMP%]   .experience-detail-container.show[_ngcontent-%COMP%]{opacity:1}#experience[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#87CEEB}@media screen and (max-width: 1024px){#experience[_ngcontent-%COMP%]{padding:5em}#experience[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]{flex:1 1 45%}}@media screen and (max-width: 768px){#experience[_ngcontent-%COMP%]{padding:3em}#experience[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]{flex:1 1 100%}#experience[_ngcontent-%COMP%]   .experience-details-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px}}@media screen and (max-width: 480px){#experience[_ngcontent-%COMP%]{padding:2em}#experience[_ngcontent-%COMP%]   .experience-summary[_ngcontent-%COMP%], #experience[_ngcontent-%COMP%]   .experience-detail-container[_ngcontent-%COMP%]{padding:10px}#experience[_ngcontent-%COMP%]   .experience-details-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-left:30px;font-size:13px}#experience[_ngcontent-%COMP%]   .experience-details-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{left:5px;font-size:14px}}']
    });
    let t = e;
    return t
})();
var Oy = (() => {
    let e = class e {};
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-footer"]
        ],
        standalone: !0,
        features: [j],
        decls: 17,
        vars: 0,
        consts: [
            ["id", "footer", 1, "container"],
            ["href", "#home"],
            ["href", "#about"],
            ["href", "#experience"],
            ["href", "#contact"]
        ],
        template: function(i, o) {
            i & 1 && (g(0, "footer")(1, "div", 0)(2, "p"), v(3, "\xA9 2024 Dileep Kumar Varma. All rights reserved."), h(), g(4, "ul")(5, "li")(6, "a", 1), v(7, "Home"), h()(), g(8, "li")(9, "a", 2), v(10, "About"), h()(), g(11, "li")(12, "a", 3), v(13, "Experience"), h()(), g(14, "li")(15, "a", 4), v(16, "Contact"), h()()()()())
        },
        styles: ["footer[_ngcontent-%COMP%]{background:#000;color:#fff;text-align:center;padding:15px 0;font-family:Roboto,sans-serif;font-size:.9em;line-height:1.2}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:10px 0}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;margin:0 10px}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#87CEEB;text-decoration:none}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media screen and (max-width: 768px){footer[_ngcontent-%COMP%]{padding:12px 0;font-size:.85em}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:8px 0}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 8px}}@media screen and (max-width: 480px){footer[_ngcontent-%COMP%]{padding:10px 0;font-size:.8em}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:6px 0}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;margin:5px 0}}"]
    });
    let t = e;
    return t
})();
var GS = t => ({
        hidden: t
    }),
    qS = t => ({
        bottom: t
    }),
    Ny = (() => {
        let e = class e {
            constructor() {
                this.isBackToTop = !1, this.isHidden = !0
            }
            onScroll() {
                let r = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                    i = document.getElementById("home"),
                    o = document.getElementById("contact"),
                    s = document.getElementById("footer");
                this.isHidden = r < (i?.offsetHeight || 0), o && this.isElementInViewport(o) || s && this.isElementInViewport(s) ? this.isBackToTop = !0 : this.isBackToTop = !1
            }
            handleClick() {
                this.isBackToTop ? document.getElementById("home")?.scrollIntoView({
                    behavior: "smooth"
                }) : document.getElementById("project")?.scrollIntoView({
                    behavior: "smooth"
                })
            }
            isElementInViewport(r) {
                let i = r.getBoundingClientRect(),
                    o = window.innerHeight || document.documentElement.clientHeight;
                return i.top >= 0 && i.top <= o
            }
        };
        e.\u0275fac = function(i) {
            return new(i || e)
        }, e.\u0275cmp = R({
            type: e,
            selectors: [
                ["app-sticky-side-bar"]
            ],
            hostBindings: function(i, o) {
                i & 1 && ve("scroll", function(a) {
                    return o.onScroll(a)
                }, !1, _h)
            },
            standalone: !0,
            features: [j],
            decls: 5,
            vars: 7,
            consts: [
                [1, "sticky-sidebar", 3, "click", "ngClass"],
                [1, "content"],
                [1, "circle", 3, "ngClass"]
            ],
            template: function(i, o) {
                i & 1 && (g(0, "div", 0), ve("click", function() {
                    return o.handleClick()
                }), g(1, "div", 1), z(2, "span", 2), g(3, "p"), v(4), h()()()), i & 2 && (y("ngClass", $e(3, GS, o.isHidden)), C(2), y("ngClass", $e(5, qS, o.isBackToTop)), C(2), st(o.isBackToTop ? "Back To Top" : "Projects"))
            },
            dependencies: [zt],
            styles: ['.sticky-sidebar[_ngcontent-%COMP%]{position:fixed;bottom:50px;right:-12px;padding:10px 25px;background-color:#87CEEB;color:#000;box-shadow:2px 4px #00000014;border-radius:5px;cursor:pointer;z-index:1000;transform:skew(-20deg);transition:opacity .3s ease,visibility .3s ease}.sticky-sidebar.hidden[_ngcontent-%COMP%]{opacity:0;visibility:hidden}.sticky-sidebar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{transform:skew(20deg);display:flex;align-items:center;gap:10px}.sticky-sidebar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600;font-size:16px;margin:0}.circle[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;position:relative;width:30px;height:30px;background:#87CEEB;border-radius:50%;border:2px solid black}.circle[_ngcontent-%COMP%]:after{position:absolute;content:"";top:50%;left:50%;border:6px solid transparent;border-top:6px solid black;transform:translate(-50%) translateY(-25%);transition:transform .3s ease,border .3s ease}.circle.bottom[_ngcontent-%COMP%]:after{border-top:none;border-bottom:6px solid black;transform:translate(-50%) translateY(-75%)}']
        });
        let t = e;
        return t
    })();
var Py = Wy(Ry());
var Fy = (() => {
    let e = class e {
        constructor() {
            this.title = "portfolio-Dileep"
        }
        ngOnInit() {
            Py.init()
        }
    };
    e.\u0275fac = function(i) {
        return new(i || e)
    }, e.\u0275cmp = R({
        type: e,
        selectors: [
            ["app-root"]
        ],
        standalone: !0,
        features: [j],
        decls: 10,
        vars: 0,
        template: function(i, o) {
            i & 1 && z(0, "app-header")(1, "app-home")(2, "app-about")(3, "app-experience")(4, "app-education")(5, "app-skills")(6, "app-projects")(7, "app-contact")(8, "app-footer")(9, "app-sticky-side-bar")
        },
        dependencies: [jm, Oy, dy, _y, My, Sy, xy, Ty, Ay, Ny],
        styles: ['@font-face{font-family:Lobster;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lobster/v30/neILzCirqoswsqX9zo-mM5Ez.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Lobster;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lobster/v30/neILzCirqoswsqX9zoamM5Ez.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Lobster;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lobster/v30/neILzCirqoswsqX9zo2mM5Ez.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Lobster;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lobster/v30/neILzCirqoswsqX9zoymM5Ez.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Lobster;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/lobster/v30/neILzCirqoswsqX9zoKmMw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}']
    });
    let t = e;
    return t
})();
em(Fy, Vm).catch(t => console.error(t));
