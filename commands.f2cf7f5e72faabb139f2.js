/*! For license information please see commands.f2cf7f5e72faabb139f2.js.LICENSE.txt */
(() => {
    "use strict";
    var t = {};

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(t)
    }

    function r() {
        r = function() {
            return n
        };
        var t, n = {},
            o = Object.prototype,
            i = o.hasOwnProperty,
            a = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            },
            c = "function" == typeof Symbol ? Symbol : {},
            u = c.iterator || "@@iterator",
            l = c.asyncIterator || "@@asyncIterator",
            f = c.toStringTag || "@@toStringTag";

        function s(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            s({}, "")
        } catch (t) {
            s = function(t, e, r) {
                return t[e] = r
            }
        }

        function h(t, e, r, n) {
            var o = e && e.prototype instanceof w ? e : w,
                i = Object.create(o.prototype),
                c = new G(n || []);
            return a(i, "_invoke", {
                value: j(t, r, c)
            }), i
        }

        function p(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        n.wrap = h;
        var y = "suspendedStart",
            v = "suspendedYield",
            d = "executing",
            g = "completed",
            m = {};

        function w() {}

        function b() {}

        function x() {}
        var L = {};
        s(L, u, (function() {
            return this
        }));
        var E = Object.getPrototypeOf,
            O = E && E(E(N([])));
        O && O !== o && i.call(O, u) && (L = O);
        var k = x.prototype = w.prototype = Object.create(L);

        function P(t) {
            ["next", "throw", "return"].forEach((function(e) {
                s(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function _(t, r) {
            function n(o, a, c, u) {
                var l = p(t[o], t, a);
                if ("throw" !== l.type) {
                    var f = l.arg,
                        s = f.value;
                    return s && "object" == e(s) && i.call(s, "__await") ? r.resolve(s.__await).then((function(t) {
                        n("next", t, c, u)
                    }), (function(t) {
                        n("throw", t, c, u)
                    })) : r.resolve(s).then((function(t) {
                        f.value = t, c(f)
                    }), (function(t) {
                        return n("throw", t, c, u)
                    }))
                }
                u(l.arg)
            }
            var o;
            a(this, "_invoke", {
                value: function(t, e) {
                    function i() {
                        return new r((function(r, o) {
                            n(t, e, r, o)
                        }))
                    }
                    return o = o ? o.then(i, i) : i()
                }
            })
        }

        function j(e, r, n) {
            var o = y;
            return function(i, a) {
                if (o === d) throw Error("Generator is already running");
                if (o === g) {
                    if ("throw" === i) throw a;
                    return {
                        value: t,
                        done: !0
                    }
                }
                for (n.method = i, n.arg = a;;) {
                    var c = n.delegate;
                    if (c) {
                        var u = S(c, n);
                        if (u) {
                            if (u === m) continue;
                            return u
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (o === y) throw o = g, n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    o = d;
                    var l = p(e, r, n);
                    if ("normal" === l.type) {
                        if (o = n.done ? g : v, l.arg === m) continue;
                        return {
                            value: l.arg,
                            done: n.done
                        }
                    }
                    "throw" === l.type && (o = g, n.method = "throw", n.arg = l.arg)
                }
            }
        }

        function S(e, r) {
            var n = r.method,
                o = e.iterator[n];
            if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, S(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), m;
            var i = p(o, e.iterator, r.arg);
            if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, m;
            var a = i.arg;
            return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, m) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, m)
        }

        function A(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function F(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function G(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(A, this), this.reset(!0)
        }

        function N(r) {
            if (r || "" === r) {
                var n = r[u];
                if (n) return n.call(r);
                if ("function" == typeof r.next) return r;
                if (!isNaN(r.length)) {
                    var o = -1,
                        a = function e() {
                            for (; ++o < r.length;)
                                if (i.call(r, o)) return e.value = r[o], e.done = !1, e;
                            return e.value = t, e.done = !0, e
                        };
                    return a.next = a
                }
            }
            throw new TypeError(e(r) + " is not iterable")
        }
        return b.prototype = x, a(k, "constructor", {
            value: x,
            configurable: !0
        }), a(x, "constructor", {
            value: b,
            configurable: !0
        }), b.displayName = s(x, f, "GeneratorFunction"), n.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
        }, n.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, s(t, f, "GeneratorFunction")), t.prototype = Object.create(k), t
        }, n.awrap = function(t) {
            return {
                __await: t
            }
        }, P(_.prototype), s(_.prototype, l, (function() {
            return this
        })), n.AsyncIterator = _, n.async = function(t, e, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(h(t, e, r, o), i);
            return n.isGeneratorFunction(e) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, P(k), s(k, f, "Generator"), s(k, u, (function() {
            return this
        })), s(k, "toString", (function() {
            return "[object Generator]"
        })), n.keys = function(t) {
            var e = Object(t),
                r = [];
            for (var n in e) r.push(n);
            return r.reverse(),
                function t() {
                    for (; r.length;) {
                        var n = r.pop();
                        if (n in e) return t.value = n, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, n.values = N, G.prototype = {
            constructor: G,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(F), !e)
                    for (var r in this) "t" === r.charAt(0) && i.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var r = this;

                function n(n, o) {
                    return c.type = "throw", c.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                        c = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                        var u = i.call(a, "catchLoc"),
                            l = i.call(a, "finallyLoc");
                        if (u && l) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                        } else {
                            if (!l) throw Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var n = this.tryEntries[r];
                    if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var o = n;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), F(r), m
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            F(r)
                        }
                        return o
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield: function(e, r, n) {
                return this.delegate = {
                    iterator: N(e),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = t), m
            }
        }, n
    }

    function n(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }

    function o(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(o, i) {
                var a = t.apply(e, r);

                function c(t) {
                    n(a, o, i, c, u, "next", t)
                }

                function u(t) {
                    n(a, o, i, c, u, "throw", t)
                }
                c(void 0)
            }))
        }
    }
    t.d = (e, r) => {
        for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: r[n]
        })
    }, t.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var i = "ms-excel:ofe|u|https://actuelia.sharepoint.com/:x:/r/sites/Planning/_layouts/15/Doc.aspx?sourcedoc=%7BB2D3EAFD-27C3-4815-A36C-791752E43822%7D&file=Planning%20-%20v11.xlsx&action=default&mobileredirect=true";

    function a(t) {
        return c.apply(this, arguments)
    }

    function c() {
        return c = o(r().mark((function t(e) {
            return r().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, Excel.run(function() {
                            var t = o(r().mark((function t(e) {
                                var n;
                                return r().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return (n = e.workbook.properties).load("title"), t.next = 4, e.sync();
                                        case 4:
                                            if ("PlanningActuelia" !== n.title) {
                                                t.next = 10;
                                                break
                                            }
                                            return console.log("Déjà sur le bon fichier, affichage du taskpane."), t.next = 8, Office.addin.showAsTaskpane();
                                        case 8:
                                            t.next = 12;
                                            break;
                                        case 10:
                                            console.log("Autre fichier, ouverture du planning SharePoint."), window.open(i, "_blank");
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }());
                    case 3:
                        t.next = 9;
                        break;
                    case 5:
                        t.prev = 5, t.t0 = t.catch(0), console.error("Erreur dans openPlanningFile:", t.t0), window.open(i, "_blank");
                    case 9:
                        return t.prev = 9, e && e.completed && e.completed(), t.finish(9);
                    case 12:
                    case "end":
                        return t.stop()
                }
            }), t, null, [
                [0, 5, 9, 12]
            ])
        }))), c.apply(this, arguments)
    }
    Office.onReady((function() {
        console.log("Complément Planning Actuelia prêt."), a()
    })), Office.actions.associate("openPlanningFile", a)
})();