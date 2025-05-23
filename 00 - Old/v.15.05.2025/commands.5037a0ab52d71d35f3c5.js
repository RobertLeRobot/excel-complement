/*! For license information please see commands.5037a0ab52d71d35f3c5.js.LICENSE.txt */
(() => {
    "use strict";
    var t = {};

    function r(t) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r(t)
    }

    function e() {
        e = function() {
            return n
        };
        var t, n = {},
            o = Object.prototype,
            i = o.hasOwnProperty,
            a = Object.defineProperty || function(t, r, e) {
                t[r] = e.value
            },
            c = "function" == typeof Symbol ? Symbol : {},
            u = c.iterator || "@@iterator",
            s = c.asyncIterator || "@@asyncIterator",
            f = c.toStringTag || "@@toStringTag";

        function l(t, r, e) {
            return Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[r]
        }
        try {
            l({}, "")
        } catch (t) {
            l = function(t, r, e) {
                return t[r] = e
            }
        }

        function h(t, r, e, n) {
            var o = r && r.prototype instanceof w ? r : w,
                i = Object.create(o.prototype),
                c = new N(n || []);
            return a(i, "_invoke", {
                value: P(t, e, c)
            }), i
        }

        function p(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
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
        l(L, u, (function() {
            return this
        }));
        var E = Object.getPrototypeOf,
            O = E && E(E(T([])));
        O && O !== o && i.call(O, u) && (L = O);
        var k = x.prototype = w.prototype = Object.create(L);

        function j(t) {
            ["next", "throw", "return"].forEach((function(r) {
                l(t, r, (function(t) {
                    return this._invoke(r, t)
                }))
            }))
        }

        function _(t, e) {
            function n(o, a, c, u) {
                var s = p(t[o], t, a);
                if ("throw" !== s.type) {
                    var f = s.arg,
                        l = f.value;
                    return l && "object" == r(l) && i.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                        n("next", t, c, u)
                    }), (function(t) {
                        n("throw", t, c, u)
                    })) : e.resolve(l).then((function(t) {
                        f.value = t, c(f)
                    }), (function(t) {
                        return n("throw", t, c, u)
                    }))
                }
                u(s.arg)
            }
            var o;
            a(this, "_invoke", {
                value: function(t, r) {
                    function i() {
                        return new e((function(e, o) {
                            n(t, r, e, o)
                        }))
                    }
                    return o = o ? o.then(i, i) : i()
                }
            })
        }

        function P(r, e, n) {
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
                    var s = p(r, e, n);
                    if ("normal" === s.type) {
                        if (o = n.done ? g : v, s.arg === m) continue;
                        return {
                            value: s.arg,
                            done: n.done
                        }
                    }
                    "throw" === s.type && (o = g, n.method = "throw", n.arg = s.arg)
                }
            }
        }

        function S(r, e) {
            var n = e.method,
                o = r.iterator[n];
            if (o === t) return e.delegate = null, "throw" === n && r.iterator.return && (e.method = "return", e.arg = t, S(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), m;
            var i = p(o, r.iterator, e.arg);
            if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, m;
            var a = i.arg;
            return a ? a.done ? (e[r.resultName] = a.value, e.next = r.nextLoc, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, m) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, m)
        }

        function A(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
        }

        function G(t) {
            var r = t.completion || {};
            r.type = "normal", delete r.arg, t.completion = r
        }

        function N(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(A, this), this.reset(!0)
        }

        function T(e) {
            if (e || "" === e) {
                var n = e[u];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        a = function r() {
                            for (; ++o < e.length;)
                                if (i.call(e, o)) return r.value = e[o], r.done = !1, r;
                            return r.value = t, r.done = !0, r
                        };
                    return a.next = a
                }
            }
            throw new TypeError(r(e) + " is not iterable")
        }
        return b.prototype = x, a(k, "constructor", {
            value: x,
            configurable: !0
        }), a(x, "constructor", {
            value: b,
            configurable: !0
        }), b.displayName = l(x, f, "GeneratorFunction"), n.isGeneratorFunction = function(t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === b || "GeneratorFunction" === (r.displayName || r.name))
        }, n.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : (t.__proto__ = x, l(t, f, "GeneratorFunction")), t.prototype = Object.create(k), t
        }, n.awrap = function(t) {
            return {
                __await: t
            }
        }, j(_.prototype), l(_.prototype, s, (function() {
            return this
        })), n.AsyncIterator = _, n.async = function(t, r, e, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(h(t, r, e, o), i);
            return n.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, j(k), l(k, f, "Generator"), l(k, u, (function() {
            return this
        })), l(k, "toString", (function() {
            return "[object Generator]"
        })), n.keys = function(t) {
            var r = Object(t),
                e = [];
            for (var n in r) e.push(n);
            return e.reverse(),
                function t() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in r) return t.value = n, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, n.values = T, N.prototype = {
            constructor: N,
            reset: function(r) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(G), !r)
                    for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(r) {
                if (this.done) throw r;
                var e = this;

                function n(n, o) {
                    return c.type = "throw", c.arg = r, e.next = n, o && (e.method = "next", e.arg = t), !!o
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var a = this.tryEntries[o],
                        c = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                        var u = i.call(a, "catchLoc"),
                            s = i.call(a, "finallyLoc");
                        if (u && s) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                        } else {
                            if (!s) throw Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var o = n;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = t, a.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, m) : this.complete(a)
            },
            complete: function(t, r) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), m
            },
            finish: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), G(e), m
                }
            },
            catch: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                        var n = e.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            G(e)
                        }
                        return o
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield: function(r, e, n) {
                return this.delegate = {
                    iterator: T(r),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = t), m
            }
        }, n
    }

    function n(t, r, e, n, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value
        } catch (t) {
            return void e(t)
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o)
    }
    t.d = (r, e) => {
        for (var n in e) t.o(e, n) && !t.o(r, n) && Object.defineProperty(r, n, {
            enumerable: !0,
            get: e[n]
        })
    }, t.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r);
    var o = "Office.AutoShowTaskpaneWithDocument";
    Office.onReady((function() {
        console.log("Complément Planning Actuelia prêt."), Excel.run(function() {
            var t, r = (t = e().mark((function t(r) {
                var n;
                return e().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return (n = r.workbook.properties).load("title"), t.next = 4, r.sync();
                        case 4:
                            if ("PlanningActuelia" !== n.title) {
                                t.next = 15;
                                break
                            }
                            return t.prev = 5, t.next = 8, Office.addin.showAsTaskpane();
                        case 8:
                            t.next = 13;
                            break;
                        case 10:
                            t.prev = 10, t.t0 = t.catch(5), console.error("Impossible d'ouvrir le taskpane :", t.t0);
                        case 13:
                            Office.context.document.settings.get(o) || (Office.context.document.settings.set(o, !0), Office.context.document.settings.saveAsync((function(t) {
                                t.status === Office.AsyncResultStatus.Failed && console.error("Erreur de saveAsync :", t.error.message)
                            })));
                        case 15:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [5, 10]
                ])
            })), function() {
                var r = this,
                    e = arguments;
                return new Promise((function(o, i) {
                    var a = t.apply(r, e);

                    function c(t) {
                        n(a, o, i, c, u, "next", t)
                    }

                    function u(t) {
                        n(a, o, i, c, u, "throw", t)
                    }
                    c(void 0)
                }))
            });
            return function(t) {
                return r.apply(this, arguments)
            }
        }()).catch((function(t) {
            console.error("Erreur lors de l’auto-open :", t)
        }))
    }))
})();