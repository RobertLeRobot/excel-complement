/*! For license information please see taskpane.6bdf734f716c33fc923a.js.LICENSE.txt */
(() => {
    "use strict";
    var e, t, n, r, o, a = {
            14385: e => {
                e.exports = function(e, t) {
                    return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), t.hash && (e += t.hash), t.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(e) ? '"'.concat(e, '"') : e) : e
                }
            },
            98362: (e, t, n) => {
                e.exports = n.p + "assets/logo-filled.png"
            },
            60947: (e, t, n) => {
                e.exports = n.p + "a9816b3cb21342cb3f85.js"
            },
            58394: (e, t, n) => {
                e.exports = n.p + "dfdaaa4bf146369082c6.css"
            }
        },
        i = {};

    function s(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var n = i[e] = {
            exports: {}
        };
        return a[e](n, n.exports, s), n.exports
    }
    s.m = a, s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {
            a: t
        }), t
    }, s.d = (e, t) => {
        for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.p = "https://robertlerobot.github.io/excel-complement/", s.b = document.baseURI || self.location.href, (() => {
        function e(t) {
            return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, e(t)
        }

        function t() {
            t = function() {
                return r
            };
            var n, r = {},
                o = Object.prototype,
                a = o.hasOwnProperty,
                i = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                s = "function" == typeof Symbol ? Symbol : {},
                c = s.iterator || "@@iterator",
                u = s.asyncIterator || "@@asyncIterator",
                l = s.toStringTag || "@@toStringTag";

            function f(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                f({}, "")
            } catch (n) {
                f = function(e, t, n) {
                    return e[t] = n
                }
            }

            function d(e, t, n, r) {
                var o = t && t.prototype instanceof x ? t : x,
                    a = Object.create(o.prototype),
                    s = new A(r || []);
                return i(a, "_invoke", {
                    value: _(e, n, s)
                }), a
            }

            function g(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            r.wrap = d;
            var p = "suspendedStart",
                h = "suspendedYield",
                y = "executing",
                v = "completed",
                m = {};

            function x() {}

            function b() {}

            function w() {}
            var k = {};
            f(k, c, (function() {
                return this
            }));
            var E = Object.getPrototypeOf,
                L = E && E(E(N([])));
            L && L !== o && a.call(L, c) && (k = L);
            var I = w.prototype = x.prototype = Object.create(k);

            function C(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    f(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function O(t, n) {
                function r(o, i, s, c) {
                    var u = g(t[o], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg,
                            f = l.value;
                        return f && "object" == e(f) && a.call(f, "__await") ? n.resolve(f.__await).then((function(e) {
                            r("next", e, s, c)
                        }), (function(e) {
                            r("throw", e, s, c)
                        })) : n.resolve(f).then((function(e) {
                            l.value = e, s(l)
                        }), (function(e) {
                            return r("throw", e, s, c)
                        }))
                    }
                    c(u.arg)
                }
                var o;
                i(this, "_invoke", {
                    value: function(e, t) {
                        function a() {
                            return new n((function(n, o) {
                                r(e, t, n, o)
                            }))
                        }
                        return o = o ? o.then(a, a) : a()
                    }
                })
            }

            function _(e, t, r) {
                var o = p;
                return function(a, i) {
                    if (o === y) throw Error("Generator is already running");
                    if (o === v) {
                        if ("throw" === a) throw i;
                        return {
                            value: n,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var s = r.delegate;
                        if (s) {
                            var c = S(s, r);
                            if (c) {
                                if (c === m) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === p) throw o = v, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = y;
                        var u = g(e, t, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? v : h, u.arg === m) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = v, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function S(e, t) {
                var r = t.method,
                    o = e.iterator[r];
                if (o === n) return t.delegate = null, "throw" === r && e.iterator.return && (t.method = "return", t.arg = n, S(e, t), "throw" === t.method) || "return" !== r && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), m;
                var a = g(o, e.iterator, t.arg);
                if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, m;
                var i = a.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, m) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m)
            }

            function j(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function M(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(j, this), this.reset(!0)
            }

            function N(t) {
                if (t || "" === t) {
                    var r = t[c];
                    if (r) return r.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            i = function e() {
                                for (; ++o < t.length;)
                                    if (a.call(t, o)) return e.value = t[o], e.done = !1, e;
                                return e.value = n, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                throw new TypeError(e(t) + " is not iterable")
            }
            return b.prototype = w, i(I, "constructor", {
                value: w,
                configurable: !0
            }), i(w, "constructor", {
                value: b,
                configurable: !0
            }), b.displayName = f(w, l, "GeneratorFunction"), r.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
            }, r.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, f(e, l, "GeneratorFunction")), e.prototype = Object.create(I), e
            }, r.awrap = function(e) {
                return {
                    __await: e
                }
            }, C(O.prototype), f(O.prototype, u, (function() {
                return this
            })), r.AsyncIterator = O, r.async = function(e, t, n, o, a) {
                void 0 === a && (a = Promise);
                var i = new O(d(e, t, n, o), a);
                return r.isGeneratorFunction(t) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, C(I), f(I, l, "Generator"), f(I, c, (function() {
                return this
            })), f(I, "toString", (function() {
                return "[object Generator]"
            })), r.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, r.values = N, A.prototype = {
                constructor: A,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(M), !e)
                        for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(r, o) {
                        return s.type = "throw", s.arg = e, t.next = r, o && (t.method = "next", t.arg = n), !!o
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var c = a.call(i, "catchLoc"),
                                u = a.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), m
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                M(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) {
                    return this.delegate = {
                        iterator: N(e),
                        resultName: t,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = n), m
                }
            }, r
        }

        function n(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function r(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise((function(o, a) {
                    var i = e.apply(t, r);

                    function s(e) {
                        n(i, o, a, s, c, "next", e)
                    }

                    function c(e) {
                        n(i, o, a, s, c, "throw", e)
                    }
                    s(void 0)
                }))
            }
        }

        function o() {
            return a.apply(this, arguments)
        }

        function a() {
            return a = r(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = r(t().mark((function e(n) {
                                    var r, o, a, i, s, c, u, l, f, d;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, r = n.workbook, o = r.worksheets.getActiveWorksheet(), e.next = 5, o.load("name");
                                            case 5:
                                                return e.next = 7, n.sync();
                                            case 7:
                                                return o.protection.unprotect(), o.getRange().format.protection.locked = !0, a = o.getRange("B:B").getUsedRange(), e.next = 12, a.load("rowCount");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (me.debug && console.log("nb val colonne B :", a.rowCount), "2. Planning - Consultant" !== o.name) {
                                                    e.next = 32;
                                                    break
                                                }
                                                if (i = a.rowCount - 9, me.debug && console.log("nbMissions :", i), o.getRange("B2:B3").format.protection.locked = !1, !(i > 0)) {
                                                    e.next = 32;
                                                    break
                                                }
                                                return s = o.getRange("E10"), c = o.getCell(9 + i, 81), e.next = 26, s.load("address");
                                            case 26:
                                                return e.next = 28, c.load("address");
                                            case 28:
                                                return e.next = 30, n.sync();
                                            case 30:
                                                o.getRange(s.address + ":" + c.address).format.protection.locked = !1;
                                            case 32:
                                                if ("2. Planning - Missions" !== o.name) {
                                                    e.next = 60;
                                                    break
                                                }
                                                return e.next = 35, a.load("values");
                                            case 35:
                                                return e.next = 37, n.sync();
                                            case 37:
                                                return me.debug && (console.log("val colonne B :", a.values.flat()), console.log("val colonne B :", a.values.flat().filter((function(e) {
                                                    return "" !== e
                                                })))), u = a.values.flat().filter((function(e) {
                                                    return "" !== e
                                                })).length - 3, me.debug && console.log("nb Consultants :", u), l = o.getRange("B2"), e.next = 44, l.load("values");
                                            case 44:
                                                return e.next = 46, n.sync();
                                            case 46:
                                                if (l.format.protection.locked = !1, "00 - Congés/jours fériés" === l.values[0][0]) {
                                                    e.next = 60;
                                                    break
                                                }
                                                return f = o.getRange("E9"), d = o.getCell(7 + u, 81), e.next = 52, f.load("address");
                                            case 52:
                                                return e.next = 54, d.load("address");
                                            case 54:
                                                return e.next = 56, n.sync();
                                            case 56:
                                                me.debug && console.log("Plage à débloquer :", f.address + ":" + d.address), o.getRange(f.address + ":" + d.address).format.protection.locked = !1;
                                            case 60:
                                                return o.protection.protect(), me.debug && console.log("Feuille", o.name, "protégée"), e.next = 65, n.sync();
                                            case 65:
                                                me.debug = !0;
                                            case 66:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de formatProtection :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), a.apply(this, arguments)
        }

        function i() {
            return c.apply(this, arguments)
        }

        function c() {
            return c = r(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = r(t().mark((function e(n) {
                                    var r, o, a, i, s, c, u, l, f, d, g, p, h, y, v, m, x, b, w, k, E;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, r = n.workbook, (o = r.worksheets.getItem("2. Planning - Missions")).protection.unprotect(), a = r.names.getItem("Modif_Missions").getRange(), e.next = 7, a.load("address, formatConditions, rowIndex, rowCount, columnCount");
                                            case 7:
                                                return e.next = 9, n.sync();
                                            case 9:
                                                return i = o.getCell(a.rowIndex + a.rowCount - 1, a.columnCount + 3), e.next = 12, i.load("address");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                return s = a.conditionalFormats, e.next = 17, s.load("items");
                                            case 17:
                                                return e.next = 19, n.sync();
                                            case 19:
                                                return c = "A".concat(a.rowIndex + 1, ":").concat(i.address), me.debug && (console.log("modifMissionsRange :", a.address), console.log("globalVar.debug sRange: ", c)), u = o.getRange(c), e.next = 24, u.load("address");
                                            case 24:
                                                return e.next = 26, n.sync();
                                            case 26:
                                                l = s.items.length, f = 0;
                                            case 28:
                                                if (!(f < l)) {
                                                    e.next = 48;
                                                    break
                                                }
                                                return me.debug && console.log("Traitement du format ".concat(f, " sur ").concat(l)), d = s.getItemAt(f), e.next = 34, n.sync();
                                            case 34:
                                                return me.debug && (console.log("Format condition", d), console.log("Ancienne plage :", d.address)), d.setRanges(u), e.next = 38, n.sync();
                                            case 38:
                                                return g = d.getRanges(), e.next = 41, g.load("address");
                                            case 41:
                                                return e.next = 43, n.sync();
                                            case 43:
                                                me.debug && console.log("Nouvelle plage :", g.address);
                                            case 45:
                                                f++, e.next = 28;
                                                break;
                                            case 48:
                                                return p = r.names.getItemOrNullObject("Nb_Consultants"), e.next = 51, p.load("value");
                                            case 51:
                                                return e.next = 53, n.sync();
                                            case 53:
                                                if (p.isNullObject) {
                                                    e.next = 57;
                                                    break
                                                }
                                                h = p.value, e.next = 58;
                                                break;
                                            case 57:
                                                throw new Error("Le nom 'nbConsultants' n'existe pas dans le classeur");
                                            case 58:
                                                return me.debug && console.log("nbConsultants cabinet:", h), y = o.getRange("B:B").getUsedRange(), e.next = 62, y.load("values");
                                            case 62:
                                                return e.next = 64, n.sync();
                                            case 64:
                                                return v = y.values.flat().filter((function(e) {
                                                    return "" !== e
                                                })).length - 3, me.debug && (console.log("val colonne B :", y.values.flat()), console.log("val colonne B :", y.values.flat().filter((function(e) {
                                                    return "" !== e
                                                }))), console.log("nb Consultants mission:", v)), m = o.getRange("C".concat(9)), x = o.getRange("C".concat(8 + h)), e.next = 70, m.load("address");
                                            case 70:
                                                return e.next = 72, x.load("address");
                                            case 72:
                                                return e.next = 74, n.sync();
                                            case 74:
                                                return b = o.getRange(m.address + ":" + x.address), me.debug && console.log("Plage à cacher :", m.address + ":" + x.address), e.next = 79, b.load("address, rowIndex, rowCount");
                                            case 79:
                                                return e.next = 81, n.sync();
                                            case 81:
                                                if (o.getRange("".concat(b.rowIndex + 1, ":").concat(b.rowIndex + b.rowCount - 1)).rowHidden = !1, !(v < h)) {
                                                    e.next = 102;
                                                    break
                                                }
                                                return w = o.getRange("C".concat(9 + v)), k = o.getRange("C".concat(9 + h)), e.next = 88, w.load("address");
                                            case 88:
                                                return e.next = 90, k.load("address");
                                            case 90:
                                                return e.next = 92, n.sync();
                                            case 92:
                                                return E = o.getRange(w.address + ":" + k.address), me.debug && console.log("Plage à cacher :", w.address + ":" + k.address), e.next = 97, E.load("address, rowIndex, rowCount");
                                            case 97:
                                                return e.next = 99, n.sync();
                                            case 99:
                                                me.debug && (console.log("adresse rangeToHide", E.address), console.log("rangetohide.entireRow", E.entireRow)), o.getRange("".concat(E.rowIndex + 1, ":").concat(E.rowIndex + E.rowCount - 1)).rowHidden = !0;
                                            case 102:
                                                return e.next = 104, n.sync();
                                            case 104:
                                                return o.getRange("B3").select(), o.protection.protect(), e.next = 109, n.sync();
                                            case 109:
                                                me.debug = !0;
                                            case 110:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de formatMissions :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), c.apply(this, arguments)
        }

        function u() {
            return l.apply(this, arguments)
        }

        function l() {
            return l = r(t().mark((function e() {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = r(t().mark((function e(n) {
                                    var r, o, a, i, s, c, u, l, f, d, g, p;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, r = n.workbook, o = r.worksheets.getItem("2. Planning - Consultant"), a = r.names.getItem("Modif_Consultant").getRange(), e.next = 6, a.load("address, conditionalFormats, rowIndex, rowCount, columnCount");
                                            case 6:
                                                return e.next = 8, n.sync();
                                            case 8:
                                                return me.debug && console.log("Modif_Consultant :", a.address, "\nFormats conditionnels :", a.conditionalFormats), i = a.conditionalFormats, e.next = 13, i.load("items");
                                            case 13:
                                                return e.next = 15, n.sync();
                                            case 15:
                                                return s = o.getCell(a.rowIndex + a.rowCount - 1, a.columnCount + 3), e.next = 18, s.load("address");
                                            case 18:
                                                return e.next = 20, n.sync();
                                            case 20:
                                                return c = "A".concat(a.rowIndex + 1, ":").concat(s.address), me.debug && (console.log("modifMissionsRange :", a.address), console.log("globalVar.debug sRange: ", c)), u = o.getRange(c), e.next = 25, u.load("address");
                                            case 25:
                                                return e.next = 27, n.sync();
                                            case 27:
                                                l = i.items.length, me.debug && console.log("Nombre de formats conditionnels trouvés : ".concat(l)), f = 0;
                                            case 31:
                                                if (!(f < l)) {
                                                    e.next = 59;
                                                    break
                                                }
                                                return me.debug && console.log("Traitement du format ".concat(f, " sur ").concat(l)), d = i.getItemAt(f), e.next = 37, n.sync();
                                            case 37:
                                                return e.next = 39, n.sync();
                                            case 39:
                                                if (!me.debug) {
                                                    e.next = 46;
                                                    break
                                                }
                                                return g = d.getRanges(), e.next = 43, g.load("address");
                                            case 43:
                                                return e.next = 45, n.sync();
                                            case 45:
                                                console.log("Ancienne plage :", g.address);
                                            case 46:
                                                return d.setRanges(u), e.next = 49, n.sync();
                                            case 49:
                                                if (!me.debug) {
                                                    e.next = 56;
                                                    break
                                                }
                                                return p = d.getRanges(), e.next = 53, p.load("address");
                                            case 53:
                                                return e.next = 55, n.sync();
                                            case 55:
                                                console.log("Nouvelle plage :", p.address);
                                            case 56:
                                                f++, e.next = 31;
                                                break;
                                            case 59:
                                                return e.next = 61, n.sync();
                                            case 61:
                                                me.debug && console.log("Format_Consultants appliqué avec succès."), me.debug = !0;
                                            case 64:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de formatConsultants :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), l.apply(this, arguments)
        }

        function f(e, t) {
            return d.apply(this, arguments)
        }

        function d() {
            return d = r(t().mark((function e(n, o) {
                return t().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = r(t().mark((function e(r) {
                                    var a, i, s, c, u, l, f, d, g, p, h, y;
                                    return t().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, a = r.workbook, i = a.worksheets.getItem(n), s = "3. Recap" === n ? 1 : 2, i.protection.unprotect(), c = i.getRange("C".concat(o, ":XFD").concat(o)).getUsedRange(), e.next = 8, c.load("values");
                                            case 8:
                                                return e.next = 10, r.sync();
                                            case 10:
                                                return me.debug && console.log("Ligne semaine val", c.values.flat()), u = a.names.getItem("Aujourdhui").getRange(), e.next = 14, u.load("values");
                                            case 14:
                                                return e.next = 16, r.sync();
                                            case 16:
                                                if (me.debug && console.log("Date :", u.values[0][0]), l = u.values[0][0], f = c.values.flat().filter((function(e) {
                                                        return "" !== e
                                                    })), d = f.findIndex((function(e) {
                                                        return e === l
                                                    })) - s, me.debug && console.log("Nombre de semaines (colonnes) à masquer", d), !(d >= 0)) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return g = i.getCell(0, d + 3), p = i.getCell(0, 4), e.next = 26, g.load("address");
                                            case 26:
                                                return e.next = 28, p.load("address");
                                            case 28:
                                                return e.next = 30, r.sync();
                                            case 30:
                                                if (h = i.getRange("".concat(g.address, ":").concat(p.address)), !me.debug) {
                                                    e.next = 37;
                                                    break
                                                }
                                                return e.next = 34, h.load("address");
                                            case 34:
                                                return e.next = 36, r.sync();
                                            case 36:
                                                console.log("Colonnes à masquer :", h.address);
                                            case 37:
                                                return e.next = 39, h.load("columnIndex, columnCount");
                                            case 39:
                                                return e.next = 41, r.sync();
                                            case 41:
                                                if (me.debug && (console.log("adresse rangeToHide", h.address), console.log("rangetohide.entireColumn", h.entireColumn)), y = i.getRangeByIndexes(0, h.columnIndex, 1, h.columnCount), !me.debug) {
                                                    e.next = 50;
                                                    break
                                                }
                                                return e.next = 46, y.load("address");
                                            case 46:
                                                return e.next = 48, r.sync();
                                            case 48:
                                                console.log("Adresse de la plage à masquer :", y.address), console.log("entireColumn", y);
                                            case 50:
                                                return y.columnHidden = !0, e.next = 53, r.sync();
                                            case 53:
                                                return i.protection.protect({
                                                    allowFiltering: !0
                                                }), e.next = 56, r.sync();
                                            case 56:
                                                me.debug = !0;
                                            case 57:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de formatSemaine :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), d.apply(this, arguments)
        }

        function g(e) {
            return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, g(e)
        }

        function p() {
            p = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                s = a.asyncIterator || "@@asyncIterator",
                c = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof x ? t : x,
                    i = Object.create(a.prototype),
                    s = new A(r || []);
                return o(i, "_invoke", {
                    value: _(e, n, s)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                h = "suspendedYield",
                y = "executing",
                v = "completed",
                m = {};

            function x() {}

            function b() {}

            function w() {}
            var k = {};
            u(k, i, (function() {
                return this
            }));
            var E = Object.getPrototypeOf,
                L = E && E(E(N([])));
            L && L !== n && r.call(L, i) && (k = L);
            var I = w.prototype = x.prototype = Object.create(k);

            function C(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function O(e, t) {
                function n(o, a, i, s) {
                    var c = f(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            l = u.value;
                        return l && "object" == g(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, s)
                        }), (function(e) {
                            n("throw", e, i, s)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, s)
                        }))
                    }
                    s(c.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function _(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === y) throw Error("Generator is already running");
                    if (o === v) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var s = r.delegate;
                        if (s) {
                            var c = S(s, r);
                            if (c) {
                                if (c === m) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = v, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = y;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? v : h, u.arg === m) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = v, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function S(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, S(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), m;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, m;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, m) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
            }

            function j(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function M(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(j, this), this.reset(!0)
            }

            function N(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(g(t) + " is not iterable")
            }
            return b.prototype = w, o(I, "constructor", {
                value: w,
                configurable: !0
            }), o(w, "constructor", {
                value: b,
                configurable: !0
            }), b.displayName = u(w, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, u(e, c, "GeneratorFunction")), e.prototype = Object.create(I), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, C(O.prototype), u(O.prototype, s, (function() {
                return this
            })), t.AsyncIterator = O, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new O(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, C(I), u(I, c, "Generator"), u(I, i, (function() {
                return this
            })), u(I, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = N, A.prototype = {
                constructor: A,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(M), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            s = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), m
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                M(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: N(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), m
                }
            }, t
        }

        function h(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function y(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        h(a, r, o, i, s, "next", e)
                    }

                    function s(e) {
                        h(a, r, o, i, s, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function v() {
            return m.apply(this, arguments)
        }

        function m() {
            return m = y(p().mark((function e() {
                return p().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = y(p().mark((function e(t) {
                                    var n;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !0, me.debug && console.log("Activation de la feuille 2. Planning - Consultant"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 8, o();
                                            case 8:
                                                return e.next = 10, u();
                                            case 10:
                                                return e.next = 12, f("2. Planning - Consultant", 5);
                                            case 12:
                                                return n.screenUpdating = !0, e.next = 15, t.sync();
                                            case 15:
                                                me.debug = !0;
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de ActivationPlanningConsultant :", e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), m.apply(this, arguments)
        }

        function x(e, t, n) {
            return b.apply(this, arguments)
        }

        function b() {
            return b = y(p().mark((function e(t, n, r) {
                return p().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return me.debug = !0, me.debug && (console.log("Fonction modifPlanningConsultant exécutée."), console.log("modifPlanningConsultant appelée avec :", t, n, r)), e.next = 5, Excel.run(function() {
                                var e = y(p().mark((function e(o) {
                                    var a, i, s, c, u, l, f, d, g, h, y, v, m, x, b, w;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug && console.log("Début de la fonction modifPlanningConsultant"), a = o.workbook, i = a.worksheets.getActiveWorksheet(), s = a.names.getItemOrNullObject("Nb_Missions_Max"), e.next = 7, i.load("name");
                                            case 7:
                                                return e.next = 9, s.load("value");
                                            case 9:
                                                return e.next = 11, o.sync();
                                            case 11:
                                                if (s.isNullObject) {
                                                    e.next = 15;
                                                    break
                                                }
                                                c = s.value, e.next = 16;
                                                break;
                                            case 15:
                                                throw new Error("Le nom 'Nb_Missions_Max' n'existe pas dans le classeur");
                                            case 16:
                                                return e.next = 18, t.load("address, values");
                                            case 18:
                                                return e.next = 20, o.sync();
                                            case 20:
                                                return me.debug && (console.log("Feuille de calcul chargée :", i.name), console.log("Valeur de Nb_Missions_Max :", c), console.log("Adresse de la plage modifiée :", t), console.log("Numéro de la première ligne modifiée :", n + 1)), u = i.getRange("B2"), e.next = 24, u.load("values");
                                            case 24:
                                                return e.next = 26, o.sync();
                                            case 26:
                                                return me.debug && console.log("Valeur de la cellule B2 chargée :", u.values[0][0]), l = u.values[0][0], f = a.worksheets.getItem(l), e.next = 32, f.load("name");
                                            case 32:
                                                return e.next = 34, o.sync();
                                            case 34:
                                                me.debug && console.log("Feuille du consultant", f.name, "chargée"), d = t.values.flat(), me.debug && console.log("Nombre de jours renseigné :", d), me.debug && console.log("Nombre de colonnes modifiées :", t.columnCount, "\nNombres de lignes modifiées :", t.rowCount), g = 0;
                                            case 42:
                                                if (!(g < t.rowCount)) {
                                                    e.next = 71;
                                                    break
                                                }
                                                if (me.debug && console.log("Traitement de la ligne ".concat(g + 1, " sur ").concat(t.rowCount)), "" === (h = d[g])) {
                                                    e.next = 68;
                                                    break
                                                }
                                                return me.debug && console.log("Nombre de jour non vide pour la ligne :", g, "\nNombre de jour :", h), y = i.getCell(n + g, 2), e.next = 52, y.load("values");
                                            case 52:
                                                return v = i.getCell(n + g, 1), e.next = 55, v.load("values");
                                            case 55:
                                                return m = f.getRange("C7:C" + (parseInt(c) + 6)), e.next = 58, m.load("values");
                                            case 58:
                                                return e.next = 60, o.sync();
                                            case 60:
                                                if (me.debug && console.log("Nom Mission :", y.values[0][0]), x = m.values.flat(), me.debug && console.log("Valeurs aplaties de la plage C7:C :", x), -1 !== (b = x.indexOf(y.values[0][0])))
                                                    for (me.debug && console.log("Index trouvé pour la mission :", b), w = 0; w < t.columnCount; w++) f.getRange("D7").getCell(b, r + w - 3).values = [
                                                        [h]
                                                    ];
                                                else me.debug && console.log("Aucun index trouvé pour la mission.");
                                                Ee(y.values[0][0], v.values[0][0], l);
                                            case 68:
                                                g++, e.next = 42;
                                                break;
                                            case 71:
                                                return t.clear(Excel.ClearApplyTo.contents), me.debug && console.log("Contenu de la plage modifiée supprimé :", t.address), e.next = 76, o.sync();
                                            case 76:
                                                return e.next = 78, o.sync();
                                            case 78:
                                                return XXXXX, me.debug && console.log("Calcul déclenché après modification de la feuille", i.name), e.next = 83, o.sync();
                                            case 83:
                                                me.debug = !0;
                                            case 84:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de la modification du planning : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), b.apply(this, arguments)
        }

        function w(e) {
            return k.apply(this, arguments)
        }

        function k() {
            return k = y(p().mark((function e(t) {
                return p().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (me.debug = !0, me.debug && console.log("Fonction ChgtFeuilleConsultant exécutée \nevent :", t), "ThisLocalAddin" != t.triggerSource) {
                                e.next = 9;
                                break
                            }
                            return me.debug && console.log("Modification stopée car pas demandée par l'utilisateur - avant"), e.abrupt("return");
                        case 9:
                            if (me.debug && console.log("Modification stopée car pas demandée par l'utilisateur - après boucle"), !me.isProcessing) {
                                e.next = 15;
                                break
                            }
                            return me.debug && console.log("Une modification est déjà en cours de traitement. Ignorée."), e.abrupt("return");
                        case 15:
                            return me.isProcessing = !0, e.next = 18, Excel.run(function() {
                                var e = y(p().mark((function e(n) {
                                    var r, a, i, s, c, l, f, d;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug && console.log("Détection de modification dans la feuille", me.nbExecModifConsultant++, "fois"), r = n.workbook, a = r.worksheets.getActiveWorksheet(), i = "2. Planning - Consultant", s = n.workbook.worksheets.getItem(i), me.debug && console.log("Désactivation temporaire du gestionnaire onChanged"), s.onChanged.remove(w), e.prev = 9, e.next = 12, a.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (me.debug && console.log("Feuille active :", a.name), a.name !== i) {
                                                    e.next = 55;
                                                    break
                                                }
                                                return c = a.getRange(t.address), l = r.names.getItem("Modif_Consultant").getRange(), e.next = 21, n.sync();
                                            case 21:
                                                return e.next = 23, c.load("rowIndex, columnIndex, rowCount, columnCount, columnCount, address");
                                            case 23:
                                                return e.next = 25, l.load("rowIndex, columnIndex, rowCount, columnCount");
                                            case 25:
                                                return e.next = 27, n.sync();
                                            case 27:
                                                if (f = c.rowIndex >= l.rowIndex && c.rowIndex + c.rowCount <= l.rowIndex + l.rowCount && c.columnIndex >= l.columnIndex && c.columnIndex + c.columnCount <= l.columnIndex + l.columnCount, me.debug && console.log("Flag Modif dans le tableau :", f), !f) {
                                                    e.next = 45;
                                                    break
                                                }
                                                return d = a.getRange(t.address), e.next = 34, d.load("address, values, rowIndex, columnIndex, rowCount, columnCount");
                                            case 34:
                                                return e.next = 36, n.sync();
                                            case 36:
                                                return me.debug && console.log("Modification détectée dans la plage Modif_Consultant sur la cellule :", d.address), e.next = 40, x(d, d.rowIndex, d.columnIndex);
                                            case 40:
                                                return e.next = 42, n.sync();
                                            case 42:
                                                return n.application.calculate(), e.next = 45, n.sync();
                                            case 45:
                                                if (!c.address.includes("B2") && !c.address.includes("B3")) {
                                                    e.next = 55;
                                                    break
                                                }
                                                return me.debug && console.log("Modification détectée dans la plage B2:B3"), n.application.calculate(), e.next = 51, n.sync();
                                            case 51:
                                                return e.next = 53, o();
                                            case 53:
                                                return e.next = 55, u();
                                            case 55:
                                                me.debug = !0, e.next = 62;
                                                break;
                                            case 58:
                                                e.prev = 58, e.t0 = e.catch(9), me.debug = !0, console.error("Erreur lors du traitement de la modification : " + e.t0);
                                            case 62:
                                                return e.prev = 62, me.debug && console.log("Réactivation du gestionnaire onChanged"), s.onChanged.add(w), n.application.calculate(), e.next = 69, n.sync();
                                            case 69:
                                                return e.next = 71, n.sync();
                                            case 71:
                                                return me.isProcessing = !1, me.debug = !0, e.finish(62);
                                            case 74:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 58, 62, 74]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de la gestion des modifications de la feuille : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo)), me.isProcessing = !1, me.debug = !0
                            }));
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), k.apply(this, arguments)
        }

        function E(e) {
            return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, E(e)
        }

        function L() {
            L = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                s = a.asyncIterator || "@@asyncIterator",
                c = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    s = new A(r || []);
                return o(i, "_invoke", {
                    value: _(e, n, s)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                k = w && w(w(N([])));
            k && k !== n && r.call(k, i) && (b = k);
            var I = x.prototype = v.prototype = Object.create(b);

            function C(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function O(e, t) {
                function n(o, a, i, s) {
                    var c = f(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            l = u.value;
                        return l && "object" == E(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, s)
                        }), (function(e) {
                            n("throw", e, i, s)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, s)
                        }))
                    }
                    s(c.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function _(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var s = r.delegate;
                        if (s) {
                            var c = S(s, r);
                            if (c) {
                                if (c === y) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function S(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, S(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function j(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function M(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function A(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(j, this), this.reset(!0)
            }

            function N(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(E(t) + " is not iterable")
            }
            return m.prototype = x, o(I, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), e.prototype = Object.create(I), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, C(O.prototype), u(O.prototype, s, (function() {
                return this
            })), t.AsyncIterator = O, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new O(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, C(I), u(I, c, "Generator"), u(I, i, (function() {
                return this
            })), u(I, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = N, A.prototype = {
                constructor: A,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(M), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            s = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), M(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                M(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: N(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function I(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function C(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        I(a, r, o, i, s, "next", e)
                    }

                    function s(e) {
                        I(a, r, o, i, s, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function O() {
            return _.apply(this, arguments)
        }

        function _() {
            return _ = C(L().mark((function e() {
                return L().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = C(L().mark((function e(t) {
                                    var n;
                                    return L().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, me.debug && console.log("Activation de la feuille 2. Planning - Missions"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 8, o();
                                            case 8:
                                                return e.next = 10, i();
                                            case 10:
                                                return e.next = 12, f("2. Planning - Missions", 5);
                                            case 12:
                                                return n.screenUpdating = !0, e.next = 15, t.sync();
                                            case 15:
                                                me.debug = !0;
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de ActivationPlanningMission :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), _.apply(this, arguments)
        }

        function S(e, t, n) {
            return j.apply(this, arguments)
        }

        function j() {
            return j = C(L().mark((function e(t, n, r) {
                return L().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return me.debug = !1, me.debug && (console.log("Fonction modifPlanningMission exécutée."), console.log("modifPlanningMission appelée avec :", t, n, r)), e.next = 4, Excel.run(function() {
                                var e = C(L().mark((function e(o) {
                                    var a, i, s, c, u, l, f, d, g, p, h, y, v, m, x, b;
                                    return L().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug && console.log("Début de la fonction modifPlanningMission"), a = o.workbook, i = a.worksheets.getActiveWorksheet(), s = a.names.getItemOrNullObject("Nb_Missions_Max"), e.next = 7, i.load("name");
                                            case 7:
                                                return e.next = 9, s.load("value");
                                            case 9:
                                                return e.next = 11, o.sync();
                                            case 11:
                                                if (s.isNullObject) {
                                                    e.next = 15;
                                                    break
                                                }
                                                c = s.value, e.next = 16;
                                                break;
                                            case 15:
                                                throw new Error("Le nom 'Nb_Missions_Max' n'existe pas dans le classeur");
                                            case 16:
                                                return e.next = 18, t.load("address, values");
                                            case 18:
                                                return e.next = 20, o.sync();
                                            case 20:
                                                return me.debug && (console.log("Feuille de calcul chargée :", i.name), console.log("Valeur de Nb_Missions_Max :", c), console.log("Adresse de la plage modifiée :", t), console.log("Numéro de la première ligne modifiée :", n + 1)), u = i.getRange("B2"), e.next = 24, u.load("values");
                                            case 24:
                                                return e.next = 26, o.sync();
                                            case 26:
                                                l = u.values[0][0], me.debug && console.log("Valeur de la cellule B2 chargée :", u.values[0][0]), f = t.values.flat(), me.debug && console.log("Nombre de jours renseigné :", f), d = 0;
                                            case 33:
                                                if (!(d < t.rowCount)) {
                                                    e.next = 75;
                                                    break
                                                }
                                                if (me.debug && console.log("Traitement de la ligne ".concat(d + 1, " sur ").concat(t.rowCount)), "" === (g = f[d])) {
                                                    e.next = 72;
                                                    break
                                                }
                                                return me.debug && console.log("Nombre de jour non vide pour la ligne :", d, "\nNombre de jour :", g), p = i.getCell(n + d, 2), e.next = 43, p.load("values");
                                            case 43:
                                                return e.next = 45, o.sync();
                                            case 45:
                                                return me.debug && console.log("Nom du consultant :", p.values[0][0]), h = a.worksheets.getItem(p.values[0][0]), e.next = 50, h.load("name");
                                            case 50:
                                                return e.next = 52, o.sync();
                                            case 52:
                                                return me.debug && console.log("Feuille du consultant", h.name, "chargée"), y = i.getCell(n + d, 1), e.next = 57, y.load("values");
                                            case 57:
                                                return e.next = 59, o.sync();
                                            case 59:
                                                return me.debug && console.log("Nom Mission :", l, "Cellule :", n + d, 2), v = h.getRange("C7:C" + (parseInt(c) + 6)), e.next = 64, v.load("values");
                                            case 64:
                                                return e.next = 66, o.sync();
                                            case 66:
                                                if (m = v.values.flat(), me.debug && console.log("Valeurs aplaties de la plage C7:C :", m), -1 !== (x = m.indexOf(l)))
                                                    for (me.debug && console.log("Index trouvé pour la mission :", x), b = 0; b < t.columnCount; b++) h.getRange("D7").getCell(x, r + b - 3).values = [
                                                        [g]
                                                    ];
                                                else me.debug && console.log("Aucun index trouvé pour la mission.");
                                                Ee(l, y.values[0][0], p.values[0][0]);
                                            case 72:
                                                d++, e.next = 33;
                                                break;
                                            case 75:
                                                return e.next = 77, o.sync();
                                            case 77:
                                                return t.clear(Excel.ClearApplyTo.contents), me.debug && console.log("Contenu de la plage modifiée supprimé :", t.address), e.next = 82, o.sync();
                                            case 82:
                                                return XXXXX, me.debug && console.log("Calcul déclenché après modification de la feuille", i.name), e.next = 87, o.sync();
                                            case 87:
                                                me.debug = !0;
                                            case 88:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de la modification du planning mission: " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), j.apply(this, arguments)
        }

        function M(e) {
            return A.apply(this, arguments)
        }

        function A() {
            return A = C(L().mark((function e(t) {
                return L().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (me.debug = !0, me.debug && console.log("Fonction ChgtFeuilleMission exécutée."), "ThisLocalAddin" != t.triggerSource) {
                                e.next = 7;
                                break
                            }
                            return me.debug && console.log("Modification stopée car pas demandée par l'utilisateur"), e.abrupt("return");
                        case 7:
                            if (!me.isProcessing) {
                                e.next = 11;
                                break
                            }
                            return me.debug && console.log("Une modification est déjà en cours de traitement. Ignorée."), e.abrupt("return");
                        case 11:
                            return me.isProcessing = !0, e.next = 14, Excel.run(function() {
                                var e = C(L().mark((function e(n) {
                                    var r, a, s, c, u, l, f, d, g;
                                    return L().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug && console.log("Détection de modification dans la feuille", me.nbExecModifMission++, "fois"), r = n.workbook, a = r.worksheets.getActiveWorksheet(), s = "2. Planning - Missions", c = n.workbook.worksheets.getItem(s), me.debug && console.log("Désactivation temporaire du gestionnaire onChanged"), c.onChanged.remove(M), e.prev = 9, e.next = 12, a.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (me.debug && console.log("Feuille active :", a.name), a.name !== s) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return u = a.getRange(t.address), l = r.names.getItem("Modif_Missions").getRange(), e.next = 21, n.sync();
                                            case 21:
                                                return e.next = 23, u.load("rowIndex, columnIndex, rowCount, columnCount, columnCount, address");
                                            case 23:
                                                return e.next = 25, l.load("rowIndex, columnIndex, rowCount, columnCount");
                                            case 25:
                                                return e.next = 27, n.sync();
                                            case 27:
                                                if (f = u.rowIndex >= l.rowIndex && u.rowIndex + u.rowCount <= l.rowIndex + l.rowCount && u.columnIndex >= l.columnIndex && u.columnIndex + u.columnCount <= l.columnIndex + l.columnCount, me.debug && console.log("Flag Modif dans le tableau :", f), !f) {
                                                    e.next = 43;
                                                    break
                                                }
                                                return d = a.getRange(t.address), e.next = 34, d.load("address, values, rowIndex, columnIndex, rowCount, columnCount");
                                            case 34:
                                                return e.next = 36, n.sync();
                                            case 36:
                                                return e.next = 38, S(d, d.rowIndex, d.columnIndex);
                                            case 38:
                                                return e.next = 40, n.sync();
                                            case 40:
                                                return n.application.calculate(), e.next = 43, n.sync();
                                            case 43:
                                                if (!t.address.includes("B2")) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return me.debug && console.log("Modification détectée dans la plage B2"), n.application.calculate(), e.next = 49, n.sync();
                                            case 49:
                                                return e.next = 51, o();
                                            case 51:
                                                return e.next = 53, i();
                                            case 53:
                                                e.next = 59;
                                                break;
                                            case 55:
                                                e.prev = 55, e.t0 = e.catch(9), me.debug = !0, console.error("Erreur lors du traitement de la modification : " + e.t0);
                                            case 59:
                                                return e.prev = 59, me.debug && console.log("Réactivation du gestionnaire onChanged"), c.onChanged.add(M), (g = r.application).load("calculationState"), Excel.run(function() {
                                                    var e = C(L().mark((function e(t) {
                                                        return L().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return t.workbook.application.calculate(Excel.CalculationType.full), e.next = 3, t.sync();
                                                                case 3:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()), e.next = 68, n.sync();
                                            case 68:
                                                return me.debug && console.log("calculationState =", g.calculationState), me.debug = !0, me.isProcessing = !1, e.finish(59);
                                            case 72:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 55, 59, 72]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de la gestion des modifications de la feuille : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo)), me.isProcessing = !1, me.debug = !0
                            }));
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), A.apply(this, arguments)
        }

        function N(e) {
            return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, N(e)
        }

        function P() {
            P = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                s = a.asyncIterator || "@@asyncIterator",
                c = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    s = new j(r || []);
                return o(i, "_invoke", {
                    value: C(e, n, s)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                k = w && w(w(M([])));
            k && k !== n && r.call(k, i) && (b = k);
            var E = x.prototype = v.prototype = Object.create(b);

            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                function n(o, a, i, s) {
                    var c = f(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            l = u.value;
                        return l && "object" == N(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, s)
                        }), (function(e) {
                            n("throw", e, i, s)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, s)
                        }))
                    }
                    s(c.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function C(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var s = r.delegate;
                        if (s) {
                            var c = O(s, r);
                            if (c) {
                                if (c === y) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function O(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function _(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function S(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function j(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(_, this), this.reset(!0)
            }

            function M(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(N(t) + " is not iterable")
            }
            return m.prototype = x, o(E, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), e.prototype = Object.create(E), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, L(I.prototype), u(I.prototype, s, (function() {
                return this
            })), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new I(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, L(E), u(E, c, "Generator"), u(E, i, (function() {
                return this
            })), u(E, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = M, j.prototype = {
                constructor: j,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(S), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            s = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: M(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function R(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function F(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        R(a, r, o, i, s, "next", e)
                    }

                    function s(e) {
                        R(a, r, o, i, s, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function B() {
            return T.apply(this, arguments)
        }

        function T() {
            return T = F(P().mark((function e() {
                return P().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = F(P().mark((function e(t) {
                                    var n, r, o, a, i, s, c;
                                    return P().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, console.log("Activation de la feuille 3. Planning - Global"), n = t.workbook, t.application.calculate(), r = n.names.getItem("Recap_2").getRange(), e.next = 9, t.sync();
                                            case 9:
                                                return o = r.conditionalFormats, e.next = 12, o.load("items");
                                            case 12:
                                                return e.next = 14, t.sync();
                                            case 14:
                                                a = o.items.length, i = 0;
                                            case 16:
                                                if (!(i < a)) {
                                                    e.next = 36;
                                                    break
                                                }
                                                return me.debug && console.log("Traitement du format ".concat(i, " sur ").concat(a)), s = o.getItemAt(i), e.next = 22, t.sync();
                                            case 22:
                                                return me.debug && (console.log("Format condition", s), console.log("Ancienne plage :", s.address)), s.setRanges(r), e.next = 26, t.sync();
                                            case 26:
                                                return c = s.getRanges(), e.next = 29, c.load("address");
                                            case 29:
                                                return e.next = 31, t.sync();
                                            case 31:
                                                me.debug && console.log("Nouvelle plage :", c.address);
                                            case 33:
                                                i++, e.next = 16;
                                                break;
                                            case 36:
                                                return e.next = 38, t.sync();
                                            case 38:
                                                me.debug = !0;
                                            case 39:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de ActivationPlanningGlobal :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), T.apply(this, arguments)
        }

        function G(e) {
            return U.apply(this, arguments)
        }

        function U() {
            return U = F(P().mark((function e(t) {
                return P().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (me.debug = !1, me.debug && console.log("Fonction ChgtFeuilleGlobal exécutée"), !me.isProcessing) {
                                e.next = 7;
                                break
                            }
                            return me.debug && console.log("Une modification est déjà en cours de traitement. Ignorée."), e.abrupt("return");
                        case 7:
                            return me.isProcessing = !0, e.next = 10, Excel.run(function() {
                                var e = F(P().mark((function e(n) {
                                    var r, o, a, i, s, c, u, l, f, d;
                                    return P().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug && console.log("Détection de modification dans la feuille", me.nbExecModifGlobal++, "fois"), r = n.workbook, o = r.worksheets.getActiveWorksheet(), a = "3. Planning - Global", i = n.workbook.worksheets.getItem(a), me.debug && console.log("Désactivation temporaire du gestionnaire onChanged"), i.onChanged.remove(G), e.prev = 9, e.next = 12, o.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (me.debug && console.log("Feuille active :", o.name), o.name !== a) {
                                                    e.next = 53;
                                                    break
                                                }
                                                if (!t.address.includes("B3")) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return me.debug && console.log("Modification détectée dans la plage B3"), n.application.calculate(), e.next = 23, n.sync();
                                            case 23:
                                                return s = r.names.getItem("Recap_2").getRange(), e.next = 26, n.sync();
                                            case 26:
                                                return c = s.conditionalFormats, e.next = 29, c.load("items");
                                            case 29:
                                                return e.next = 31, n.sync();
                                            case 31:
                                                u = c.items.length, l = 0;
                                            case 33:
                                                if (!(l < u)) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return me.debug && console.log("Traitement du format ".concat(l, " sur ").concat(u)), f = c.getItemAt(l), e.next = 39, n.sync();
                                            case 39:
                                                return me.debug && (console.log("Format condition", f), console.log("Ancienne plage :", f.address)), f.setRanges(s), e.next = 43, n.sync();
                                            case 43:
                                                return d = f.getRanges(), e.next = 46, d.load("address");
                                            case 46:
                                                return e.next = 48, n.sync();
                                            case 48:
                                                me.debug && console.log("Nouvelle plage :", d.address);
                                            case 50:
                                                l++, e.next = 33;
                                                break;
                                            case 53:
                                                me.debug = !0, e.next = 60;
                                                break;
                                            case 56:
                                                e.prev = 56, e.t0 = e.catch(9), me.debug = !0, console.error("Erreur lors du traitement de la modification : " + e.t0);
                                            case 60:
                                                return e.prev = 60, me.debug && console.log("Réactivation du gestionnaire onChanged"), i.onChanged.add(G), e.next = 66, n.sync();
                                            case 66:
                                                return me.isProcessing = !1, me.debug = !0, e.finish(60);
                                            case 69:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 56, 60, 69]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de la gestion des modifications de la feuille : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo)), me.isProcessing = !1, me.debug = !0
                            }));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), U.apply(this, arguments)
        }

        function V(e) {
            return V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, V(e)
        }

        function J() {
            J = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                s = a.asyncIterator || "@@asyncIterator",
                c = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    s = new j(r || []);
                return o(i, "_invoke", {
                    value: C(e, n, s)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                k = w && w(w(M([])));
            k && k !== n && r.call(k, i) && (b = k);
            var E = x.prototype = v.prototype = Object.create(b);

            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                function n(o, a, i, s) {
                    var c = f(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            l = u.value;
                        return l && "object" == V(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, s)
                        }), (function(e) {
                            n("throw", e, i, s)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, s)
                        }))
                    }
                    s(c.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function C(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var s = r.delegate;
                        if (s) {
                            var c = O(s, r);
                            if (c) {
                                if (c === y) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function O(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function _(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function S(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function j(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(_, this), this.reset(!0)
            }

            function M(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(V(t) + " is not iterable")
            }
            return m.prototype = x, o(E, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), e.prototype = Object.create(E), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, L(I.prototype), u(I.prototype, s, (function() {
                return this
            })), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new I(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, L(E), u(E, c, "Generator"), u(E, i, (function() {
                return this
            })), u(E, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = M, j.prototype = {
                constructor: j,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(S), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            s = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: M(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function D(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function Y(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        D(a, r, o, i, s, "next", e)
                    }

                    function s(e) {
                        D(a, r, o, i, s, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function q() {
            return W.apply(this, arguments)
        }

        function W() {
            return W = Y(J().mark((function e() {
                return J().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = Y(J().mark((function e(t) {
                                    var n, r, o, a, i, s, c;
                                    return J().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, console.log("Activation de la feuille 3. Planning - Encadrant"), n = t.workbook, t.application.calculate(), r = n.names.getItem("Recap_3").getRange(), e.next = 9, t.sync();
                                            case 9:
                                                return o = r.conditionalFormats, e.next = 12, o.load("items");
                                            case 12:
                                                return e.next = 14, t.sync();
                                            case 14:
                                                a = o.items.length, i = 0;
                                            case 16:
                                                if (!(i < a)) {
                                                    e.next = 36;
                                                    break
                                                }
                                                return me.debug && console.log("Traitement du format ".concat(i, " sur ").concat(a)), s = o.getItemAt(i), e.next = 22, t.sync();
                                            case 22:
                                                return me.debug && (console.log("Format condition", s), console.log("Ancienne plage :", s.address)), s.setRanges(r), e.next = 26, t.sync();
                                            case 26:
                                                return c = s.getRanges(), e.next = 29, c.load("address");
                                            case 29:
                                                return e.next = 31, t.sync();
                                            case 31:
                                                me.debug && console.log("Nouvelle plage :", c.address);
                                            case 33:
                                                i++, e.next = 16;
                                                break;
                                            case 36:
                                                return e.next = 38, t.sync();
                                            case 38:
                                                me.debug = !0;
                                            case 39:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de ActivationPlanningEncadrant :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), W.apply(this, arguments)
        }

        function X(e) {
            return H.apply(this, arguments)
        }

        function H() {
            return H = Y(J().mark((function e(t) {
                return J().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (me.debug = !1, me.debug && console.log("Fonction ChgtFeuilleEncadrant exécutée"), !me.isProcessing) {
                                e.next = 7;
                                break
                            }
                            return me.debug && console.log("Une modification est déjà en cours de traitement. Ignorée."), e.abrupt("return");
                        case 7:
                            return me.isProcessing = !0, e.next = 10, Excel.run(function() {
                                var e = Y(J().mark((function e(n) {
                                    var r, o, a, i, s, c, u, l, f, d;
                                    return J().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug && console.log("Détection de modification dans la feuille", me.nbExecModifEncadrant++, "fois"), r = n.workbook, o = r.worksheets.getActiveWorksheet(), a = "3. Planning - Encadrant", i = n.workbook.worksheets.getItem(a), me.debug && console.log("Désactivation temporaire du gestionnaire onChanged"), i.onChanged.remove(X), e.prev = 9, e.next = 12, o.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                if (me.debug && console.log("Feuille active :", o.name), o.name !== a) {
                                                    e.next = 53;
                                                    break
                                                }
                                                if (!t.address.includes("B2") && !t.address.includes("B3")) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return me.debug && console.log("Modification détectée dans la plage B2:B3"), n.application.calculate(), e.next = 23, n.sync();
                                            case 23:
                                                return s = r.names.getItem("Recap_3").getRange(), e.next = 26, n.sync();
                                            case 26:
                                                return c = s.conditionalFormats, e.next = 29, c.load("items");
                                            case 29:
                                                return e.next = 31, n.sync();
                                            case 31:
                                                u = c.items.length, l = 0;
                                            case 33:
                                                if (!(l < u)) {
                                                    e.next = 53;
                                                    break
                                                }
                                                return me.debug && console.log("Traitement du format ".concat(l, " sur ").concat(u)), f = c.getItemAt(l), e.next = 39, n.sync();
                                            case 39:
                                                return me.debug && (console.log("Format condition", f), console.log("Ancienne plage :", f.address)), f.setRanges(s), e.next = 43, n.sync();
                                            case 43:
                                                return d = f.getRanges(), e.next = 46, d.load("address");
                                            case 46:
                                                return e.next = 48, n.sync();
                                            case 48:
                                                me.debug && console.log("Nouvelle plage :", d.address);
                                            case 50:
                                                l++, e.next = 33;
                                                break;
                                            case 53:
                                                me.debug = !0, e.next = 60;
                                                break;
                                            case 56:
                                                e.prev = 56, e.t0 = e.catch(9), me.debug = !0, console.error("Erreur lors du traitement de la modification : " + e.t0);
                                            case 60:
                                                return e.prev = 60, me.debug && console.log("Réactivation du gestionnaire onChanged"), i.onChanged.add(X), e.next = 66, n.sync();
                                            case 66:
                                                return me.isProcessing = !1, me.debug = !0, e.finish(60);
                                            case 69:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [9, 56, 60, 69]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de la gestion des modifications de la feuille : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo)), me.isProcessing = !1, me.debug = !0
                            }));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), H.apply(this, arguments)
        }

        function z(e) {
            return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, z(e)
        }

        function $(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return K(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? K(e, t) : void 0
                        }
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0,
                s = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    s = !0, a = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (s) throw a
                    }
                }
            }
        }

        function K(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Q() {
            Q = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                s = a.asyncIterator || "@@asyncIterator",
                c = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    s = new j(r || []);
                return o(i, "_invoke", {
                    value: C(e, n, s)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                k = w && w(w(M([])));
            k && k !== n && r.call(k, i) && (b = k);
            var E = x.prototype = v.prototype = Object.create(b);

            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                function n(o, a, i, s) {
                    var c = f(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            l = u.value;
                        return l && "object" == z(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, s)
                        }), (function(e) {
                            n("throw", e, i, s)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, s)
                        }))
                    }
                    s(c.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function C(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var s = r.delegate;
                        if (s) {
                            var c = O(s, r);
                            if (c) {
                                if (c === y) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function O(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function _(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function S(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function j(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(_, this), this.reset(!0)
            }

            function M(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(z(t) + " is not iterable")
            }
            return m.prototype = x, o(E, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), e.prototype = Object.create(E), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, L(I.prototype), u(I.prototype, s, (function() {
                return this
            })), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new I(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, L(E), u(E, c, "Generator"), u(E, i, (function() {
                return this
            })), u(E, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = M, j.prototype = {
                constructor: j,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(S), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            s = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: M(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function Z(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function ee(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        Z(a, r, o, i, s, "next", e)
                    }

                    function s(e) {
                        Z(a, r, o, i, s, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }

        function te(e) {
            document.querySelectorAll("section").forEach((function(e) {
                e.style.display = "none"
            })), document.getElementById(e).style.display = "flex"
        }

        function ne(e) {
            return re.apply(this, arguments)
        }

        function re() {
            return re = ee(Q().mark((function e(t) {
                var n, r, o;
                return Q().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (me.debug = !1, n = t.target.id, me.debug && console.log("Id du bouton :", n), "btn-open-planning" != n) {
                                e.next = 8;
                                break
                            }
                            console.log("🔗 Bouton Ouvrir le planning cliqué"), window.open("ms-excel:ofe|u|https://actuelia.sharepoint.com/:x:/r/sites/Planning-Dev/_layouts/15/Doc.aspx?sourcedoc=%7B92B818C0-9252-468E-B871-0127854FC9F7%7D&file=Planning%20-%20vDev.xlsx&action=default&mobileredirect=true", "_blank"), e.next = 14;
                            break;
                        case 8:
                            if ("btn-AjoutMission" != n) {
                                e.next = 13;
                                break
                            }
                            return e.next = 11, Excel.run(function() {
                                var e = ee(Q().mark((function e(t) {
                                    var n, r, o;
                                    return Q().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.workbook.worksheets.getItem("1. Liste des missions").getRange("B:B").getUsedRange(), e.next = 3, n.load("values");
                                            case 3:
                                                return r = t.workbook.names.getItem("Nb_Missions_Max"), e.next = 6, r.load("value");
                                            case 6:
                                                return e.next = 8, t.sync();
                                            case 8:
                                                o = n.values.flat().filter((function(e) {
                                                    return "" !== e
                                                })).length - 1, me.debug && console.log(n.values.flat()), n.values.flat().includes(0) && (o = 1), me.debug && console.log("Nb Mission :", o, "nbMissionsMax :", r.value), o < r.value ? (te("sec-userForm-AjoutMission"), document.getElementById("input-text-Mission").value = "", document.getElementById("input-text-Mission").placeholder = "Saisissez un texte", oe("Liste_Encadrant", "dropdown-Mission"), document.getElementById("btn-validate-AjoutMission").addEventListener("click", ne)) : (me.debug && console.log("Nombre de mission max atteint"), te("sec-userForm-AjoutMissionError"), document.getElementById("btn-validate-AjoutMissionError").addEventListener("click", ne));
                                            case 14:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 11:
                            e.next = 14;
                            break;
                        case 13:
                            "btn-validate-AjoutMission" == n ? (te("sec-userForm-SelectionConsultant"), oe("Liste_Consultants_Triée", "listbox-SelectionConsultant"), document.getElementById("btn-validate-SelectionConsultant").addEventListener("click", ie)) : "btn-Suppression" == n || "btn-validate-AjoutMissionError" == n ? (te("sec-userForm-SuppressionMission"), oe("Liste_Missions_Triée", "listbox-SuppressionMission"), document.getElementById("btn-validate-SuppressionMission").addEventListener("click", ne)) : "btn-validate-SuppressionMission" == n ? (te("sec-userForm-SuppressionMissionInter"), r = document.getElementById("listbox-SuppressionMission").selectedOptions.length, o = "Voulez-vous supprimer " + r + " missions ?", 1 == r && (o = "Voulez-vous supprimer " + r + " mission ?"), document.getElementById("texte-SuppressionMissionInter").innerText = o, document.getElementById("btn-validate-SuppressionMissionInter").addEventListener("click", ce)) : "btn-ModifierAffectationMission" == n ? (te("sec-userForm-ModifierAffectationMission"), oe("Liste_Consultants_Update", "listbox-AjouterConsultant"), oe("Liste_Consultant_Mission", "listbox-EnleverConsultant"), document.getElementById("btn-validate-ModifierAffectationMission").addEventListener("click", le)) : "btn-ModifierAffectationConsultant" == n ? (te("sec-userForm-ModifierAffectationConsultant"), oe("Liste_Missions_Update2", "listbox-AjouterMission"), oe("Liste_Mission_Consultant", "listbox-EnleverMission"), document.getElementById("btn-validate-ModifierAffectationConsultant").addEventListener("click", de)) : n.includes("btn-return") ? (me.debug && console.log("Bouton retour"), be()) : (me.debug = !1, console.error("Aucune action définie pour ", n));
                        case 14:
                            me.debug = !1;
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), re.apply(this, arguments)
        }

        function oe(e, t) {
            return ae.apply(this, arguments)
        }

        function ae() {
            return ae = ee(Q().mark((function e(t, n) {
                return Q().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, Excel.run(function() {
                                var e = ee(Q().mark((function e(r) {
                                    var o, a, i;
                                    return Q().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, me.debug && console.log("Ajout des options pour :", n, "à partir de la liste", t), (o = r.workbook.names.getItem(t).getRange()).load("values"), e.next = 6, r.sync();
                                            case 6:
                                                me.debug && console.log("Valeurs de ", t, ":", o.values), (a = document.getElementById(n)).innerHTML = "", o.values.forEach((function(e) {
                                                    if (e[0]) {
                                                        var t = document.createElement("option");
                                                        t.value = e[0], t.textContent = e[0], a.appendChild(t)
                                                    }
                                                })), n.includes("listbox") || ((i = document.createElement("option")).value = "", i.textContent = "Sélectionnez une option", i.selected = !0, i.disabled = !0, a.insertBefore(i, a.firstChild));
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            e.prev = 5, e.t0 = e.catch(0), console.error("Erreur lors du chargement de la liste", t, " :", e.t0);
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 5]
                ])
            }))), ae.apply(this, arguments)
        }

        function ie() {
            return se.apply(this, arguments)
        }

        function se() {
            return se = ee(Q().mark((function e() {
                var t, n, r;
                return Q().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return me.debug = !1, me.debug && console.log("Lancement fonction nouvelleMission"), t = document.getElementById("input-text-Mission").value, n = document.getElementById("dropdown-Mission").value, r = Array.from(document.getElementById("listbox-SelectionConsultant").selectedOptions).map((function(e) {
                                return e.value
                            })), me.debug && console.log("nomMission :", t, "\nnomEncadrant :", n, "\nlsConsultants :", r), e.next = 8, Excel.run(function() {
                                var e = ee(Q().mark((function e(a) {
                                    var s, c, l, f, d, g, p, h, y, v, m;
                                    return Q().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return a.application.screenUpdating = !1, s = a.workbook.worksheets.getActiveWorksheet(), c = a.workbook.worksheets.getItem("1. Liste des missions"), l = a.workbook.worksheets.getItem("Affectation des consultants"), f = a.workbook.names.getItem("Liste_Missions").getRange(), e.next = 7, s.load("name");
                                            case 7:
                                                return e.next = 9, f.load("values");
                                            case 9:
                                                return d = a.workbook.names.getItem("Nb_Missions_Max"), e.next = 12, d.load("value");
                                            case 12:
                                                return g = a.workbook.names.getItem("Liste_Consultants").getRange(), e.next = 15, g.load("values");
                                            case 15:
                                                return e.next = 17, a.sync();
                                            case 17:
                                                if (p = String(t).trim().toLowerCase(), !f.values.flat().filter((function(e) {
                                                        return "" !== e && 0 !== e
                                                    })).map((function(e) {
                                                        return String(e).trim().toLowerCase()
                                                    })).includes(p)) {
                                                    e.next = 28;
                                                    break
                                                }
                                                return a.application.screenUpdating = !0, e.next = 23, a.sync();
                                            case 23:
                                                return me.debug = !0, te("sec-userForm-AjoutMissionDejaExistante"), (h = document.getElementById("texte-AjoutMissionDejaExistante")) && (h.innerText = 'La mission "'.concat(t, '" existe déjà.')), e.abrupt("return");
                                            case 28:
                                                return y = f.values.length + 3, f.values.flat().includes(0) && (y = f.values.flat().findIndex((function(e) {
                                                    return 0 === e
                                                })) + 3), c.protection.unprotect(), e.next = 33, a.sync();
                                            case 33:
                                                return me.debug && console.log("index nouvelle mission", y), c.getCell(y, 1).values = [
                                                    [t]
                                                ], c.getCell(y, 2).values = [
                                                    [n]
                                                ], e.next = 38, a.sync();
                                            case 38:
                                                v = Q().mark((function e() {
                                                    var t, n;
                                                    return Q().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t = r[m], n = g.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, me.debug && console.log("nom :", t, "\nrangeConsultant", g.values.flat(), "indexName :", n), l.getCell(y, n + 2).values = [
                                                                    ["Affecté à la mission"]
                                                                ];
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), m = 0;
                                            case 40:
                                                if (!(m < r.length)) {
                                                    e.next = 45;
                                                    break
                                                }
                                                return e.delegateYield(v(), "t0", 42);
                                            case 42:
                                                m++, e.next = 40;
                                                break;
                                            case 45:
                                                return a.workbook.application.calculate(), e.next = 48, a.sync();
                                            case 48:
                                                return c.protection.protect(), l.calculate(), e.next = 52, a.sync();
                                            case 52:
                                                if (s.calculate(), "2. Planning - Consultant" !== s.name) {
                                                    e.next = 58;
                                                    break
                                                }
                                                return e.next = 56, u();
                                            case 56:
                                                e.next = 61;
                                                break;
                                            case 58:
                                                if ("2. Planning - Missions" !== s.name) {
                                                    e.next = 61;
                                                    break
                                                }
                                                return e.next = 61, i();
                                            case 61:
                                                return e.next = 63, o();
                                            case 63:
                                                a.application.screenUpdating = !0, me.debug = !0, te("sec-userForm-AjoutMissionOk"), document.getElementById("texte-AjoutMissionOK").innerText = "Nom : " + t + "\nEncadrant : " + n + "\nConsultants : " + r;
                                            case 67:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors l'ajout de l'ajout de mission : " + e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), se.apply(this, arguments)
        }

        function ce() {
            return ue.apply(this, arguments)
        }

        function ue() {
            return ue = ee(Q().mark((function e() {
                var t;
                return Q().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return me.debug = !1, me.debug && console.log("Lancement fonction suppressionMission"), t = Array.from(document.getElementById("listbox-SuppressionMission").selectedOptions).map((function(e) {
                                return e.value
                            })), me.debug && console.log("lsMissionsASuppr", t), e.next = 6, Excel.run(function() {
                                var e = ee(Q().mark((function e(n) {
                                    var r, a, s, c, l, f, d;
                                    return Q().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n.application.screenUpdating = !1, r = n.workbook.worksheets.getActiveWorksheet(), a = n.workbook.worksheets.getItem("Affectation des consultants"), s = n.workbook.worksheets.getItem("1. Liste des missions"), c = n.workbook.names.getItem("Liste_Missions").getRange(), e.next = 7, c.load("values");
                                            case 7:
                                                return l = n.workbook.names.getItem("Liste_Consultants").getRange(), e.next = 10, l.load("values");
                                            case 10:
                                                return e.next = 12, r.load("name");
                                            case 12:
                                                return e.next = 14, n.sync();
                                            case 14:
                                                f = Q().mark((function e() {
                                                    var r, o, i, u, f, g, p, h, y, v;
                                                    return Q().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return r = t[d], o = c.values.flat().findIndex((function(e) {
                                                                    return e === r
                                                                })) + 1, me.debug && console.log("Nom mission :", r, "\nindexMission :", o), i = a.getRangeByIndexes(o + 2, 3, 1, l.values.length), e.next = 6, i.load("values");
                                                            case 6:
                                                                return e.next = 8, n.sync();
                                                            case 8:
                                                                u = i.values.flat().map((function(e, t) {
                                                                    return "" != e ? t : -1
                                                                })).filter((function(e) {
                                                                    return -1 != e
                                                                })), f = u.map((function(e) {
                                                                    return l.values.flat()[e]
                                                                })), me.debug && console.log("rangeAffectation", i.values.flat(), "\nlsIndex", u, "\nlsConsultants", f), g = $(f), e.prev = 12, g.s();
                                                            case 14:
                                                                if ((p = g.n()).done) {
                                                                    e.next = 33;
                                                                    break
                                                                }
                                                                return h = p.value, me.debug && console.log("constName", h), y = n.workbook.worksheets.getItem(h), e.next = 20, n.sync();
                                                            case 20:
                                                                return v = y.getRangeByIndexes(o + 5, 4, 1, 78), e.next = 23, v.load("values");
                                                            case 23:
                                                                return e.next = 25, n.sync();
                                                            case 25:
                                                                if (me.debug && console.log("rangeNbJoursMissions", v.values.flat()), 0 == v.values.flat().filter((function(e) {
                                                                        return "" != e
                                                                    })).length) {
                                                                    e.next = 31;
                                                                    break
                                                                }
                                                                return v.values = [Array(78).fill("")], e.next = 31, n.sync();
                                                            case 31:
                                                                e.next = 14;
                                                                break;
                                                            case 33:
                                                                e.next = 38;
                                                                break;
                                                            case 35:
                                                                e.prev = 35, e.t0 = e.catch(12), g.e(e.t0);
                                                            case 38:
                                                                return e.prev = 38, g.f(), e.finish(38);
                                                            case 41:
                                                                return i.values = [Array(l.values.length).fill("")], s.protection.unprotect(), s.getRangeByIndexes(o + 2, 1, 1, 2).values = [Array(2).fill(0)], s.protection.protect(), e.next = 47, n.sync();
                                                            case 47:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [12, 35, 38, 41]
                                                    ])
                                                })), d = 0;
                                            case 16:
                                                if (!(d < t.length)) {
                                                    e.next = 21;
                                                    break
                                                }
                                                return e.delegateYield(f(), "t0", 18);
                                            case 18:
                                                d++, e.next = 16;
                                                break;
                                            case 21:
                                                if (n.application.calculate(), "2. Planning - Consultant" !== r.name) {
                                                    e.next = 27;
                                                    break
                                                }
                                                return e.next = 25, u();
                                            case 25:
                                                e.next = 30;
                                                break;
                                            case 27:
                                                if ("2. Planning - Missions" !== r.name) {
                                                    e.next = 30;
                                                    break
                                                }
                                                return e.next = 30, i();
                                            case 30:
                                                return e.next = 32, o();
                                            case 32:
                                                n.application.screenUpdating = !0, me.debug = !0, te("sec-userForm-SuppressionMissionOk"), document.getElementById("texte-SuppressionMissionOk").innerText = "Nom : " + t;
                                            case 36:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors l'ajout de l'ajout de mission : " + e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ue.apply(this, arguments)
        }

        function le() {
            return fe.apply(this, arguments)
        }

        function fe() {
            return fe = ee(Q().mark((function e() {
                var t, n;
                return Q().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return me.debug = !1, me.debug && console.log("Lancement fonction affectationMission"), t = Array.from(document.getElementById("listbox-AjouterConsultant").selectedOptions).map((function(e) {
                                return e.value
                            })), n = Array.from(document.getElementById("listbox-EnleverConsultant").selectedOptions).map((function(e) {
                                return e.value
                            })), me.debug && console.log("lsConsultantsAAjouter", t, "\nlsConsultantsASuppr", n), e.next = 7, Excel.run(function() {
                                var e = ee(Q().mark((function e(r) {
                                    var a, s, c, u, l, f, d, g, p, h, y, v;
                                    return Q().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r.application.screenUpdating = !1, a = r.workbook.worksheets.getItem("Affectation des consultants"), s = r.workbook.worksheets.getItem("2. Planning - Missions"), c = r.workbook.names.getItem("Liste_Missions").getRange(), e.next = 6, c.load("values");
                                            case 6:
                                                return u = r.workbook.names.getItem("Liste_Consultants").getRange(), e.next = 9, u.load("values");
                                            case 9:
                                                return e.next = 11, r.sync();
                                            case 11:
                                                return l = s.getCell(1, 1), e.next = 14, l.load("values");
                                            case 14:
                                                return e.next = 16, r.sync();
                                            case 16:
                                                f = c.values.flat().findIndex((function(e) {
                                                    return e === l.values[0][0]
                                                })) + 1, me.debug && console.log("Nom de la mission :", l.values[0][0], "indexMission", f), d = $(t), e.prev = 19, p = Q().mark((function e() {
                                                    var t, n;
                                                    return Q().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t = g.value, me.debug && console.log("constName à ajouter", t), n = u.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, a.getCell(f + 2, n + 2).values = [
                                                                    ["Affecté à la mission"]
                                                                ];
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), d.s();
                                            case 22:
                                                if ((g = d.n()).done) {
                                                    e.next = 26;
                                                    break
                                                }
                                                return e.delegateYield(p(), "t0", 24);
                                            case 24:
                                                e.next = 22;
                                                break;
                                            case 26:
                                                e.next = 31;
                                                break;
                                            case 28:
                                                e.prev = 28, e.t1 = e.catch(19), d.e(e.t1);
                                            case 31:
                                                return e.prev = 31, d.f(), e.finish(31);
                                            case 34:
                                                h = $(n), e.prev = 35, v = Q().mark((function e() {
                                                    var t, n, o, i;
                                                    return Q().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return t = y.value, me.debug && console.log("constName à suppr", t), n = r.workbook.worksheets.getItem(t), e.next = 5, r.sync();
                                                            case 5:
                                                                return o = n.getRangeByIndexes(f + 5, 4, 1, 78), e.next = 8, o.load("values");
                                                            case 8:
                                                                return e.next = 10, r.sync();
                                                            case 10:
                                                                if (me.debug && console.log("rangeNbJoursMissions", o.values.flat()), 0 == o.values.flat().filter((function(e) {
                                                                        return "" != e
                                                                    })).length) {
                                                                    e.next = 16;
                                                                    break
                                                                }
                                                                return o.values = [Array(78).fill("")], e.next = 16, r.sync();
                                                            case 16:
                                                                i = u.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, a.getCell(f + 2, i + 2).values = [
                                                                    [""]
                                                                ];
                                                            case 18:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), h.s();
                                            case 38:
                                                if ((y = h.n()).done) {
                                                    e.next = 42;
                                                    break
                                                }
                                                return e.delegateYield(v(), "t2", 40);
                                            case 40:
                                                e.next = 38;
                                                break;
                                            case 42:
                                                e.next = 47;
                                                break;
                                            case 44:
                                                e.prev = 44, e.t3 = e.catch(35), h.e(e.t3);
                                            case 47:
                                                return e.prev = 47, h.f(), e.finish(47);
                                            case 50:
                                                return e.next = 52, r.sync();
                                            case 52:
                                                return r.application.calculate(), e.next = 55, r.sync();
                                            case 55:
                                                return e.next = 57, i();
                                            case 57:
                                                return e.next = 59, o();
                                            case 59:
                                                r.application.screenUpdating = !0, me.debug = !0, te("sec-userForm-AffectationMissionOk"), document.getElementById("texte-AffectationMissionOk").innerText = "Consultant(s) ajouté(s) : " + t + "\nConsultant(s) retiré(s) : " + n;
                                            case 63:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [19, 28, 31, 34],
                                        [35, 44, 47, 50]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors l'ajout de la modification de l'affectation à la mission : " + e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), fe.apply(this, arguments)
        }

        function de() {
            return ge.apply(this, arguments)
        }

        function ge() {
            return ge = ee(Q().mark((function e() {
                var t, n;
                return Q().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return me.debug && console.log("Lancement fonction affectationConsultant"), me.debug && console.log("Lancement fonction affectationMission"), t = Array.from(document.getElementById("listbox-AjouterMission").selectedOptions).map((function(e) {
                                return e.value
                            })), n = Array.from(document.getElementById("listbox-EnleverMission").selectedOptions).map((function(e) {
                                return e.value
                            })), me.debug && console.log("lsMissionsAAjouter", t, "lsMissionsASuppr", n), e.next = 7, Excel.run(function() {
                                var e = ee(Q().mark((function e(r) {
                                    var a, i, s, c, l, f, d, g, p, h, y, v, m;
                                    return Q().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r.application.screenUpdating = !1, a = r.workbook.worksheets.getItem("Affectation des consultants"), i = r.workbook.worksheets.getItem("2. Planning - Consultant"), s = r.workbook.names.getItem("Liste_Missions").getRange(), e.next = 6, s.load("values");
                                            case 6:
                                                return c = r.workbook.names.getItem("Liste_Consultants").getRange(), e.next = 9, c.load("values");
                                            case 9:
                                                return e.next = 11, r.sync();
                                            case 11:
                                                return l = i.getCell(1, 1), e.next = 14, l.load("values");
                                            case 14:
                                                return e.next = 16, r.sync();
                                            case 16:
                                                f = l.values[0][0], d = c.values.flat().findIndex((function(e) {
                                                    return e === f
                                                })) + 1, me.debug && console.log("Nom de la mission :", f, "indexMission", d), g = $(t), e.prev = 20, h = Q().mark((function e() {
                                                    var t, n;
                                                    return Q().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t = p.value, me.debug && console.log("missionName à ajouter :", t), n = s.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, a.getCell(n + 2, d + 2).values = [
                                                                    ["Affecté à la mission"]
                                                                ];
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), g.s();
                                            case 23:
                                                if ((p = g.n()).done) {
                                                    e.next = 27;
                                                    break
                                                }
                                                return e.delegateYield(h(), "t0", 25);
                                            case 25:
                                                e.next = 23;
                                                break;
                                            case 27:
                                                e.next = 32;
                                                break;
                                            case 29:
                                                e.prev = 29, e.t1 = e.catch(20), g.e(e.t1);
                                            case 32:
                                                return e.prev = 32, g.f(), e.finish(32);
                                            case 35:
                                                y = $(n), e.prev = 36, m = Q().mark((function e() {
                                                    var t, n, o, i;
                                                    return Q().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return t = v.value, me.debug && console.log("missionName à suppr", t), n = s.values.flat().findIndex((function(e) {
                                                                    return e === t
                                                                })) + 1, o = r.workbook.worksheets.getItem(f), e.next = 6, r.sync();
                                                            case 6:
                                                                return i = o.getRangeByIndexes(n + 5, 4, 1, 78), e.next = 9, i.load("values");
                                                            case 9:
                                                                return e.next = 11, r.sync();
                                                            case 11:
                                                                if (me.debug && console.log("rangeNbJoursMissions", i.values.flat()), 0 == i.values.flat().filter((function(e) {
                                                                        return "" != e
                                                                    })).length) {
                                                                    e.next = 18;
                                                                    break
                                                                }
                                                                return me.debug && console.log("val a supprimer"), i.values = [Array(78).fill("")], e.next = 18, r.sync();
                                                            case 18:
                                                                a.getCell(n + 2, d + 2).values = [
                                                                    [""]
                                                                ];
                                                            case 19:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })), y.s();
                                            case 39:
                                                if ((v = y.n()).done) {
                                                    e.next = 43;
                                                    break
                                                }
                                                return e.delegateYield(m(), "t2", 41);
                                            case 41:
                                                e.next = 39;
                                                break;
                                            case 43:
                                                e.next = 48;
                                                break;
                                            case 45:
                                                e.prev = 45, e.t3 = e.catch(36), y.e(e.t3);
                                            case 48:
                                                return e.prev = 48, y.f(), e.finish(48);
                                            case 51:
                                                return e.next = 53, r.sync();
                                            case 53:
                                                return r.application.calculate(), e.next = 56, r.sync();
                                            case 56:
                                                return e.next = 58, u();
                                            case 58:
                                                return e.next = 60, o();
                                            case 60:
                                                r.application.screenUpdating = !0, me.debug = !0, te("sec-userForm-AffectationConsultantOk"), document.getElementById("texte-AffectationConsultantOk").innerText = "Mission(s) ajoutée(s) : " + t + "\nMission(s) retirée(s) : " + n;
                                            case 64:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [20, 29, 32, 35],
                                        [36, 45, 48, 51]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors l'ajout de la modification de l'affectation du consultant : " + e), e instanceof OfficeExtension.Error && console.error("Error debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ge.apply(this, arguments)
        }

        function pe(e) {
            return pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, pe(e)
        }

        function he() {
            he = function() {
                return t
            };
            var e, t = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                s = a.asyncIterator || "@@asyncIterator",
                c = a.toStringTag || "@@toStringTag";

            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, r) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    s = new j(r || []);
                return o(i, "_invoke", {
                    value: C(e, n, s)
                }), i
            }

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = l;
            var d = "suspendedStart",
                g = "suspendedYield",
                p = "executing",
                h = "completed",
                y = {};

            function v() {}

            function m() {}

            function x() {}
            var b = {};
            u(b, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                k = w && w(w(M([])));
            k && k !== n && r.call(k, i) && (b = k);
            var E = x.prototype = v.prototype = Object.create(b);

            function L(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function I(e, t) {
                function n(o, a, i, s) {
                    var c = f(e[o], e, a);
                    if ("throw" !== c.type) {
                        var u = c.arg,
                            l = u.value;
                        return l && "object" == pe(l) && r.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                            n("next", e, i, s)
                        }), (function(e) {
                            n("throw", e, i, s)
                        })) : t.resolve(l).then((function(e) {
                            u.value = e, i(u)
                        }), (function(e) {
                            return n("throw", e, i, s)
                        }))
                    }
                    s(c.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(e, r) {
                        function o() {
                            return new t((function(t, o) {
                                n(e, r, t, o)
                            }))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function C(t, n, r) {
                var o = d;
                return function(a, i) {
                    if (o === p) throw Error("Generator is already running");
                    if (o === h) {
                        if ("throw" === a) throw i;
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    for (r.method = a, r.arg = i;;) {
                        var s = r.delegate;
                        if (s) {
                            var c = O(s, r);
                            if (c) {
                                if (c === y) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === d) throw o = h, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = p;
                        var u = f(t, n, r);
                        if ("normal" === u.type) {
                            if (o = r.done ? h : g, u.arg === y) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (o = h, r.method = "throw", r.arg = u.arg)
                    }
                }
            }

            function O(t, n) {
                var r = n.method,
                    o = t.iterator[r];
                if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, O(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var a = f(o, t.iterator, n.arg);
                if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                var i = a.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function _(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function S(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function j(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(_, this), this.reset(!0)
            }

            function M(t) {
                if (t || "" === t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            a = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return a.next = a
                    }
                }
                throw new TypeError(pe(t) + " is not iterable")
            }
            return m.prototype = x, o(E, "constructor", {
                value: x,
                configurable: !0
            }), o(x, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), e.prototype = Object.create(E), e
            }, t.awrap = function(e) {
                return {
                    __await: e
                }
            }, L(I.prototype), u(I.prototype, s, (function() {
                return this
            })), t.AsyncIterator = I, t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new I(l(e, n, r, o), a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }))
            }, L(E), u(E, c, "Generator"), u(E, i, (function() {
                return this
            })), u(E, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, t.values = M, j.prototype = {
                constructor: j,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(S), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return s.type = "throw", s.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                            s = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc"),
                                u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                            } else {
                                if (!u) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: M(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), y
                }
            }, t
        }

        function ye(e, t, n, r, o, a, i) {
            try {
                var s = e[a](i),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }

        function ve(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        ye(a, r, o, i, s, "next", e)
                    }

                    function s(e) {
                        ye(a, r, o, i, s, "throw", e)
                    }
                    i(void 0)
                }))
            }
        }
        s.d({}, {
            T$: () => Ee,
            D_: () => me,
            Io: () => be
        });
        var me = {
            debug: !0,
            isProcessing: !1,
            nbExecModifConsultant: 1,
            nbExecModifMission: 1,
            nbExecModifEncadrant: 1,
            nbExecModifGlobal: 1
        };

        function xe() {
            return xe = ve(he().mark((function e() {
                return he().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ve(he().mark((function e(t) {
                                    var n, r, o, a;
                                    return he().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (me.debug && console.log("Initialisation du classeur : Désactivation du calcul automatique"), t.application.calculationMode = Excel.CalculationMode.manual, !me.debug) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return n = t.application, e.next = 7, n.load("calculationState");
                                            case 7:
                                                return e.next = 9, t.sync();
                                            case 9:
                                                console.log("calculationState initial", n.calculationState);
                                            case 10:
                                                return r = t.workbook, me.debug && console.log(r), r.worksheets.onActivated.add(be), (o = r.properties).load("title"), a = r.worksheets.getActiveWorksheet(), e.next = 18, a.load("name");
                                            case 18:
                                                return e.next = 20, t.sync();
                                            case 20:
                                                return ke(a.name, o.title), e.next = 23, t.sync();
                                            case 23:
                                                me.debug && console.log("Calcul automatique désactivé");
                                            case 25:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                console.error("Erreur lors de l'initialisation du classeur : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), xe.apply(this, arguments)
        }

        function be(e) {
            return we.apply(this, arguments)
        }

        function we() {
            return we = ve(he().mark((function e(t) {
                return he().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ve(he().mark((function e(t) {
                                    var n, r;
                                    return he().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.workbook.worksheets.getActiveWorksheet(), (r = t.workbook.properties).load("title"), e.next = 5, n.load("name");
                                            case 5:
                                                return e.next = 7, t.sync();
                                            case 7:
                                                ke(n.name, r.title);
                                            case 8:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), we.apply(this, arguments)
        }

        function ke(e, t) {
            try {
                document.querySelectorAll("section").forEach((function(e) {
                    e.style.display = "none"
                })), console.log("avant boucle :", e, t), "1. Liste des missions" === e ? (console.log("boucle 1 :", e, t), document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex") : "2. Planning - Missions" === e ? (console.log("boucle 2 :", e, t), document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex", document.getElementById("sec-btn-ModifierAffectationMission").style.display = "flex") : "2. Planning - Consultant" === e ? (console.log("boucle 3 :", e, t), document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex", document.getElementById("sec-btn-ModifierAffectationConsultant").style.display = "flex") : "PlanningActuelia" !== t && (console.log("boucle 4 :", e, t), document.getElementById("sec-btn-OpenPlanning").style.display = "flex")
            } catch (e) {
                console.error("Erreur lors de la mise à jour du volet :", e)
            }
        }

        function Ee(e, t, n) {
            return Le.apply(this, arguments)
        }

        function Le() {
            return Le = ve(he().mark((function e(t, n, r) {
                return he().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ve(he().mark((function e(o) {
                                    var a, i, s, c, u, l, f;
                                    return he().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !0, a = o.workbook, i = a.worksheets.getItem("Suivi Modif"), e.next = 5, i.load("name");
                                            case 5:
                                                return s = i.getRange("A:A").getUsedRange(), e.next = 8, s.load("rowCount");
                                            case 8:
                                                return e.next = 10, o.sync();
                                            case 10:
                                                return c = s.rowCount + 1, me.debug && console.log("Nombre de lignes utilisées dans wsSuivi :", c), i.getCell(c - 1, 0).values = [
                                                    [t]
                                                ], i.getCell(c - 1, 1).values = [
                                                    [n]
                                                ], i.getCell(c - 1, 2).values = [
                                                    [r]
                                                ], u = "Utilisateur inconnu", me.debug && console.log("Office.context :", Office.context), Office.context && Office.context.user && Office.context.user.displayName ? u = Office.context.user.displayName : console.warn("Impossible de récupérer le nom de l'utilisateur."), e.next = 21, o.sync();
                                            case 21:
                                                i.getCell(c - 1, 3).values = [
                                                    [u]
                                                ], l = new Date, f = "".concat(String(l.getDate()).padStart(2, "0"), "/").concat(String(l.getMonth() + 1).padStart(2, "0"), "/").concat(l.getFullYear(), " ").concat(String(l.getHours()).padStart(2, "0"), ":").concat(String(l.getMinutes()).padStart(2, "0"), ":").concat(String(l.getSeconds()).padStart(2, "0")), i.getCell(c - 1, 4).values = [
                                                    [f]
                                                ], me.debug && console.log("Informations de suivi ajoutées pour la ligne :", c), me.debug = !0;
                                            case 28:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors l'ajout du suivi des modifications : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Le.apply(this, arguments)
        }

        function Ie() {
            return Ce.apply(this, arguments)
        }

        function Ce() {
            return Ce = ve(he().mark((function e() {
                return he().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ve(he().mark((function e(t) {
                                    var n;
                                    return he().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, me.debug && console.log("Activation de la feuille 3. Recap"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 8, f("3. Recap", 4);
                                            case 8:
                                                return n.screenUpdating = !0, e.next = 11, t.sync();
                                            case 11:
                                                me.debug = !0;
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de ActivationRecap :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Ce.apply(this, arguments)
        }

        function Oe() {
            return _e.apply(this, arguments)
        }

        function _e() {
            return _e = ve(he().mark((function e() {
                return he().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Excel.run(function() {
                                var e = ve(he().mark((function e(t) {
                                    var n;
                                    return he().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return me.debug = !1, me.debug && console.log("Activation de la feuille 1. Liste des missions"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 8, f("1. Liste des missions", 3);
                                            case 8:
                                                return n.screenUpdating = !0, e.next = 11, t.sync();
                                            case 11:
                                                me.debug = !0;
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(e) {
                                me.debug = !0, console.error("Erreur lors de l'exécution de ActivationListeMissions :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                            }));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), _e.apply(this, arguments)
        }
        me.debug && console.log(me.isProcessing), Office.onReady((function(e) {
            e.host === Office.HostType.Excel && (me.debug && console.log("Office est prêt, chargement de la fonction qui se déclenche s'il y a un changement sur le fichier"), function() {
                xe.apply(this, arguments)
            }(), Excel.run(function() {
                var e = ve(he().mark((function e(t) {
                    var n, r, o, a, i, s, c;
                    return he().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return me.debug && console.log("Ajout du gestionnaire de boutons."), n = t.workbook.worksheets.getActiveWorksheet(), e.next = 4, n.load("name");
                            case 4:
                                return e.next = 6, t.sync();
                            case 6:
                                me.debug && console.log("Ajout des gestionnaires de changement pour les feuilles '1. Liste des missions', '2. Planning - Consultant', '2. Planning - Missions', '3. Planning - Encadrant, '3. Planning - Global' et '3. Recap'"), (r = t.workbook.worksheets.getItem("2. Planning - Consultant")).onActivated.add(v), r.onChanged.add(w), me.debug && console.log("Chargement des fonctions de la feuille", r), (o = t.workbook.worksheets.getItem("2. Planning - Missions")).onActivated.add(O), o.onChanged.add(M), me.debug && console.log("Chargement des fonctions de la feuille", o), (a = t.workbook.worksheets.getItem("3. Planning - Encadrant")).onActivated.add(q), a.onChanged.add(X), me.debug && console.log("Chargement des fonctions de la feuille", a), (i = t.workbook.worksheets.getItem("3. Planning - Global")).onActivated.add(B), i.onChanged.add(G), me.debug && console.log("Chargement des fonctions de la feuille", i), (s = t.workbook.worksheets.getItem("3. Recap")).onActivated.add(Ie), me.debug && console.log("Chargement des fonctions de la feuille", s), (c = t.workbook.worksheets.getItem("1. Liste des missions")).onActivated.add(Oe), me.debug && console.log("Chargement des fonctions de la feuille", c), me.debug && console.log("Gestionnaire de changement ajouté.");
                            case 38:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()).catch((function(e) {
                console.error("Erreur : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
            })), document.getElementById("btn-AjoutMission").addEventListener("click", ne), document.getElementById("btn-Suppression").addEventListener("click", ne), document.getElementById("btn-ModifierAffectationMission").addEventListener("click", ne), document.getElementById("btn-ModifierAffectationConsultant").addEventListener("click", ne), document.getElementById("btn-open-planning").addEventListener("click", ne), document.querySelectorAll('[id*="btn-return"]').forEach((function(e) {
                e.addEventListener("click", ne)
            })))
        }))
    })(), e = s(14385), t = s.n(e), n = new URL(s(60947), s.b), r = new URL(s(58394), s.b), o = new URL(s(98362), s.b), t()(n), t()(r), t()(o)
})();