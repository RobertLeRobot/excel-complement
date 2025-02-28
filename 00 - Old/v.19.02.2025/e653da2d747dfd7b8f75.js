/*! For license information please see e653da2d747dfd7b8f75.js.LICENSE.txt */
function _typeof(e) {
    return (
        (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
        _typeof(e)
    );
}
function _regeneratorRuntime() {
    "use strict";
    _regeneratorRuntime = function () {
        return t;
    };
    var e,
        t = {},
        n = Object.prototype,
        r = n.hasOwnProperty,
        o =
            Object.defineProperty ||
            function (e, t, n) {
                e[t] = n.value;
            },
        i = "function" == typeof Symbol ? Symbol : {},
        a = i.iterator || "@@iterator",
        c = i.asyncIterator || "@@asyncIterator",
        s = i.toStringTag || "@@toStringTag";
    function l(e, t, n) {
        return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
    }
    try {
        l({}, "");
    } catch (e) {
        l = function (e, t, n) {
            return (e[t] = n);
        };
    }
    function u(e, t, n, r) {
        var i = t && t.prototype instanceof m ? t : m,
            a = Object.create(i.prototype),
            c = new R(r || []);
        return o(a, "_invoke", { value: C(e, n, c) }), a;
    }
    function f(e, t, n) {
        try {
            return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
            return { type: "throw", arg: e };
        }
    }
    t.wrap = u;
    var d = "suspendedStart",
        g = "suspendedYield",
        h = "executing",
        p = "completed",
        y = {};
    function m() {}
    function v() {}
    function b() {}
    var x = {};
    l(x, a, function () {
        return this;
    });
    var w = Object.getPrototypeOf,
        E = w && w(w(P([])));
    E && E !== n && r.call(E, a) && (x = E);
    var _ = (b.prototype = m.prototype = Object.create(x));
    function k(e) {
        ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
                return this._invoke(t, e);
            });
        });
    }
    function S(e, t) {
        function n(o, i, a, c) {
            var s = f(e[o], e, i);
            if ("throw" !== s.type) {
                var l = s.arg,
                    u = l.value;
                return u && "object" == _typeof(u) && r.call(u, "__await")
                    ? t.resolve(u.__await).then(
                          function (e) {
                              n("next", e, a, c);
                          },
                          function (e) {
                              n("throw", e, a, c);
                          }
                      )
                    : t.resolve(u).then(
                          function (e) {
                              (l.value = e), a(l);
                          },
                          function (e) {
                              return n("throw", e, a, c);
                          }
                      );
            }
            c(s.arg);
        }
        var i;
        o(this, "_invoke", {
            value: function (e, r) {
                function o() {
                    return new t(function (t, o) {
                        n(e, r, t, o);
                    });
                }
                return (i = i ? i.then(o, o) : o());
            },
        });
    }
    function C(t, n, r) {
        var o = d;
        return function (i, a) {
            if (o === h) throw Error("Generator is already running");
            if (o === p) {
                if ("throw" === i) throw a;
                return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
                var c = r.delegate;
                if (c) {
                    var s = A(c, r);
                    if (s) {
                        if (s === y) continue;
                        return s;
                    }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                    if (o === d) throw ((o = p), r.arg);
                    r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                o = h;
                var l = f(t, n, r);
                if ("normal" === l.type) {
                    if (((o = r.done ? p : g), l.arg === y)) continue;
                    return { value: l.arg, done: r.done };
                }
                "throw" === l.type && ((o = p), (r.method = "throw"), (r.arg = l.arg));
            }
        };
    }
    function A(t, n) {
        var r = n.method,
            o = t.iterator[r];
        if (o === e)
            return (
                (n.delegate = null),
                ("throw" === r && t.iterator.return && ((n.method = "return"), (n.arg = e), A(t, n), "throw" === n.method)) ||
                    ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
                y
            );
        var i = f(o, t.iterator, n.arg);
        if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), y;
        var a = i.arg;
        return a
            ? a.done
                ? ((n[t.resultName] = a.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), y)
                : a
            : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), y);
    }
    function M(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
    }
    function L(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function R(e) {
        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(M, this), this.reset(!0);
    }
    function P(t) {
        if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
                var o = -1,
                    i = function n() {
                        for (; ++o < t.length; ) if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                        return (n.value = e), (n.done = !0), n;
                    };
                return (i.next = i);
            }
        }
        throw new TypeError(_typeof(t) + " is not iterable");
    }
    return (
        (v.prototype = b),
        o(_, "constructor", { value: b, configurable: !0 }),
        o(b, "constructor", { value: v, configurable: !0 }),
        (v.displayName = l(b, s, "GeneratorFunction")),
        (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (t.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : ((e.__proto__ = b), l(e, s, "GeneratorFunction")), (e.prototype = Object.create(_)), e;
        }),
        (t.awrap = function (e) {
            return { __await: e };
        }),
        k(S.prototype),
        l(S.prototype, c, function () {
            return this;
        }),
        (t.AsyncIterator = S),
        (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new S(u(e, n, r, o), i);
            return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                  });
        }),
        k(_),
        l(_, s, "Generator"),
        l(_, a, function () {
            return this;
        }),
        l(_, "toString", function () {
            return "[object Generator]";
        }),
        (t.keys = function (e) {
            var t = Object(e),
                n = [];
            for (var r in t) n.push(r);
            return (
                n.reverse(),
                function e() {
                    for (; n.length; ) {
                        var r = n.pop();
                        if (r in t) return (e.value = r), (e.done = !1), e;
                    }
                    return (e.done = !0), e;
                }
            );
        }),
        (t.values = P),
        (R.prototype = {
            constructor: R,
            reset: function (t) {
                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(L), !t))
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
            },
            stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function o(r, o) {
                    return (c.type = "throw"), (c.arg = t), (n.next = r), o && ((n.method = "next"), (n.arg = e)), !!o;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                        c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var s = r.call(a, "catchLoc"),
                            l = r.call(a, "finallyLoc");
                        if (s && l) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                        } else if (s) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                        } else {
                            if (!l) throw Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break;
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (a.type = e), (a.arg = t), i ? ((this.method = "next"), (this.next = i.finallyLoc), y) : this.complete(a);
            },
            complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                    "break" === e.type || "continue" === e.type ? (this.next = e.arg) : "return" === e.type ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end")) : "normal" === e.type && t && (this.next = t), y
                );
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), L(n), y;
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            L(n);
                        }
                        return o;
                    }
                }
                throw Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
                return (this.delegate = { iterator: P(t), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = e), y;
            },
        }),
        t
    );
}
function asyncGeneratorStep(e, t, n, r, o, i, a) {
    try {
        var c = e[i](a),
            s = c.value;
    } catch (e) {
        return void n(e);
    }
    c.done ? t(s) : Promise.resolve(s).then(r, o);
}
function _asyncToGenerator(e) {
    return function () {
        var t = this,
            n = arguments;
        return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
                asyncGeneratorStep(i, r, o, a, c, "next", e);
            }
            function c(e) {
                asyncGeneratorStep(i, r, o, a, c, "throw", e);
            }
            a(void 0);
        });
    };
}
import { ActivationPlanningConsultant, modifPlanningConsultant, ChgtFeuilleConsultant } from "./1_ModifConsultants.js";
import { ActivationPlanningMission, modifPlanningMission, ChgtFeuilleMission } from "./2_ModifMissions.js";
import { ActivationPlanningGlobal, ChgtFeuilleGlobal } from "./3_PlanningGlobal.js";
import { ActivationPlanningEncadrant, ChgtFeuilleEncadrant } from "./3_PlanningEncadrant.js";
import { formatProtection, formatMissions, formatConsultants, formatSemaine, applyNewRangeToConditionnalFormat } from "./0_Format.js";
import { handleClick, nouvelleMission, suppressionMission, affectationMission, affectationConsultant } from "./0_Gestion_des_boutons.js";
export var globalVar = { debug: !0, isProcessing: !1, nbExecModifConsultant: 1, nbExecModifMission: 1, nbExecModifEncadrant: 1, nbExecModifGlobal: 1 };
function openSharePointFile(e) {
    var t = "ms-excel:ofe|u|" + encodeURIComponent("https://actuelia.sharepoint.com/:x:/s/Planning/ETcP8p3lCrFKjqOO6SH_dDIBDVEJzRLLUCbO9dgVm_frKQ?e=7nqyc2");
    (window.location.href = t),
        setTimeout(function () {
            Office.context.ui.displayDialogAsync(window.location.origin + "/taskpane.html", { height: 50, width: 30 }, function (e) {
                e.status !== Office.AsyncResultStatus.Succeeded && console.error("Erreur lors de l'ouverture du taskpane :", e.error);
            });
        }, 5e3),
        e && e.completed();
}
function initializeWorkbookSettings() {
    return _initializeWorkbookSettings.apply(this, arguments);
}
function _initializeWorkbookSettings() {
    return (
        (_initializeWorkbookSettings = _asyncToGenerator(
            _regeneratorRuntime().mark(function e() {
                return _regeneratorRuntime().wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                    (e.next = 2),
                                    Excel.run(
                                        (function () {
                                            var e = _asyncToGenerator(
                                                _regeneratorRuntime().mark(function e(t) {
                                                    var n, r, o;
                                                    return _regeneratorRuntime().wrap(function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    if (
                                                                        (globalVar.debug && console.log("Initialisation du classeur : Désactivation du calcul automatique"),
                                                                        (t.application.calculationMode = Excel.CalculationMode.manual),
                                                                        !globalVar.debug)
                                                                    ) {
                                                                        e.next = 10;
                                                                        break;
                                                                    }
                                                                    return (n = t.application), (e.next = 7), n.load("calculationState");
                                                                case 7:
                                                                    return (e.next = 9), t.sync();
                                                                case 9:
                                                                    console.log("calculationState initial", n.calculationState);
                                                                case 10:
                                                                    return (
                                                                        (r = t.workbook),
                                                                        globalVar.debug && console.log(r),
                                                                        r.worksheets.onActivated.add(handleSheetChange),
                                                                        (o = r.worksheets.getActiveWorksheet()),
                                                                        (e.next = 16),
                                                                        o.load("name")
                                                                    );
                                                                case 16:
                                                                    return (e.next = 18), t.sync();
                                                                case 18:
                                                                    return handleButtonDisplay(o.name), (e.next = 21), t.sync();
                                                                case 21:
                                                                    globalVar.debug && console.log("Calcul automatique désactivé");
                                                                case 23:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })
                                            );
                                            return function (t) {
                                                return e.apply(this, arguments);
                                            };
                                        })()
                                    ).catch(function (e) {
                                        console.error("Erreur lors de l'initialisation du classeur : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo));
                                    })
                                );
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )),
        _initializeWorkbookSettings.apply(this, arguments)
    );
}
globalVar.debug && console.log(globalVar.isProcessing),
    Office.actions.associate("openSharePointFile", openSharePointFile),
    Office.onReady(function (e) {
        e.host === Office.HostType.Excel &&
            (globalVar.debug && console.log("Office est prêt, chargement de la fonction qui se déclenche s'il y a un changement sur le fichier"), initializeWorkbookSettings(), addWorksheetChangeHandler(), initializeButton());
    });
export function handleSheetChange(e) {
    return _handleSheetChange.apply(this, arguments);
}
function _handleSheetChange() {
    return (
        (_handleSheetChange = _asyncToGenerator(
            _regeneratorRuntime().mark(function e(t) {
                return _regeneratorRuntime().wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                    (e.next = 2),
                                    Excel.run(
                                        (function () {
                                            var e = _asyncToGenerator(
                                                _regeneratorRuntime().mark(function e(t) {
                                                    var n;
                                                    return _regeneratorRuntime().wrap(function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (n = t.workbook.worksheets.getActiveWorksheet()), (e.next = 3), n.load("name");
                                                                case 3:
                                                                    return (e.next = 5), t.sync();
                                                                case 5:
                                                                    handleButtonDisplay(n.name);
                                                                case 6:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })
                                            );
                                            return function (t) {
                                                return e.apply(this, arguments);
                                            };
                                        })()
                                    )
                                );
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )),
        _handleSheetChange.apply(this, arguments)
    );
}
function addWorksheetChangeHandler() {
    Excel.run(
        (function () {
            var e = _asyncToGenerator(
                _regeneratorRuntime().mark(function e(t) {
                    var n, r, o, i, a, c, s;
                    return _regeneratorRuntime().wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return globalVar.debug && console.log("Ajout du gestionnaire de boutons."), (n = t.workbook.worksheets.getActiveWorksheet()), (e.next = 4), n.load("name");
                                case 4:
                                    return (e.next = 6), t.sync();
                                case 6:
                                    globalVar.debug &&
                                        console.log(
                                            "Ajout des gestionnaires de changement pour les feuilles '1. Liste des missions', '2. Planning - Consultant', '2. Planning - Missions', '3. Planning - Encadrant, '3. Planning - Global' et '3. Recap'"
                                        ),
                                        (r = t.workbook.worksheets.getItem("2. Planning - Consultant")).onActivated.add(ActivationPlanningConsultant),
                                        r.onChanged.add(ChgtFeuilleConsultant),
                                        globalVar.debug && console.log("Chargement des fonctions de la feuille", r),
                                        (o = t.workbook.worksheets.getItem("2. Planning - Missions")).onActivated.add(ActivationPlanningMission),
                                        o.onChanged.add(ChgtFeuilleMission),
                                        globalVar.debug && console.log("Chargement des fonctions de la feuille", o),
                                        (i = t.workbook.worksheets.getItem("3. Planning - Encadrant")).onActivated.add(ActivationPlanningEncadrant),
                                        i.onChanged.add(ChgtFeuilleEncadrant),
                                        globalVar.debug && console.log("Chargement des fonctions de la feuille", i),
                                        (a = t.workbook.worksheets.getItem("3. Planning - Global")).onActivated.add(ActivationPlanningGlobal),
                                        a.onChanged.add(ChgtFeuilleGlobal),
                                        globalVar.debug && console.log("Chargement des fonctions de la feuille", a),
                                        (c = t.workbook.worksheets.getItem("3. Recap")).onActivated.add(ActivationRecap),
                                        globalVar.debug && console.log("Chargement des fonctions de la feuille", c),
                                        (s = t.workbook.worksheets.getItem("1. Liste des missions")).onActivated.add(ActivationListeMissions),
                                        globalVar.debug && console.log("Chargement des fonctions de la feuille", s),
                                        globalVar.debug && console.log("Gestionnaire de changement ajouté.");
                                case 38:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                })
            );
            return function (t) {
                return e.apply(this, arguments);
            };
        })()
    ).catch(function (e) {
        console.error("Erreur : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo));
    });
}
function handleButtonDisplay(e) {
    globalVar.debug;
    try {
        document.querySelectorAll("section").forEach(function (e) {
            e.style.display = "none";
        }),
            "1. Liste des missions" === e
                ? ((document.getElementById("sec-btn-AjoutMission").style.display = "flex"), (document.getElementById("sec-btn-Suppression").style.display = "flex"))
                : "2. Planning - Missions" === e
                ? ((document.getElementById("sec-btn-AjoutMission").style.display = "flex"),
                  (document.getElementById("sec-btn-Suppression").style.display = "flex"),
                  (document.getElementById("sec-btn-ModifierAffectationMission").style.display = "flex"))
                : "2. Planning - Consultant" === e &&
                  ((document.getElementById("sec-btn-AjoutMission").style.display = "flex"),
                  (document.getElementById("sec-btn-Suppression").style.display = "flex"),
                  (document.getElementById("sec-btn-ModifierAffectationConsultant").style.display = "flex"));
    } catch (e) {
        console.error("Erreur lors de la mise à jour du volet :", e);
    }
}
function initializeButton() {
    document.getElementById("btn-AjoutMission").addEventListener("click", handleClick),
        document.getElementById("btn-Suppression").addEventListener("click", handleClick),
        document.getElementById("btn-ModifierAffectationMission").addEventListener("click", handleClick),
        document.getElementById("btn-ModifierAffectationConsultant").addEventListener("click", handleClick),
        document.querySelectorAll('[id*="btn-return"]').forEach(function (e) {
            e.addEventListener("click", handleClick);
        });
}
export function ajoutModif(e, t, n) {
    return _ajoutModif.apply(this, arguments);
}
function _ajoutModif() {
    return (
        (_ajoutModif = _asyncToGenerator(
            _regeneratorRuntime().mark(function e(t, n, r) {
                return _regeneratorRuntime().wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                    (e.next = 2),
                                    Excel.run(
                                        (function () {
                                            var e = _asyncToGenerator(
                                                _regeneratorRuntime().mark(function e(o) {
                                                    var i, a, c, s, l, u, f;
                                                    return _regeneratorRuntime().wrap(function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (globalVar.debug = !1), (i = o.workbook), (a = i.worksheets.getItem("Suivi Modif")), (e.next = 5), a.load("name");
                                                                case 5:
                                                                    return (c = a.getRange("A:A").getUsedRange()), (e.next = 8), c.load("rowCount");
                                                                case 8:
                                                                    return (e.next = 10), o.sync();
                                                                case 10:
                                                                    return (
                                                                        (s = c.rowCount + 1),
                                                                        globalVar.debug && console.log("Nombre de lignes utilisées dans wsSuivi :", s),
                                                                        (a.getCell(s - 1, 0).values = [[t]]),
                                                                        (a.getCell(s - 1, 1).values = [[n]]),
                                                                        (a.getCell(s - 1, 2).values = [[r]]),
                                                                        (l = "Utilisateur inconnu"),
                                                                        globalVar.debug && console.log("Office.context :", Office.context),
                                                                        Office.context && Office.context.user && Office.context.user.displayName
                                                                            ? (l = Office.context.user.displayName)
                                                                            : console.warn("Impossible de récupérer le nom de l'utilisateur."),
                                                                        (e.next = 21),
                                                                        o.sync()
                                                                    );
                                                                case 21:
                                                                    (a.getCell(s - 1, 3).values = [[l]]),
                                                                        (u = new Date()),
                                                                        (f = ""
                                                                            .concat(String(u.getDate()).padStart(2, "0"), "/")
                                                                            .concat(String(u.getMonth() + 1).padStart(2, "0"), "/")
                                                                            .concat(u.getFullYear(), " ")
                                                                            .concat(String(u.getHours()).padStart(2, "0"), ":")
                                                                            .concat(String(u.getMinutes()).padStart(2, "0"), ":")
                                                                            .concat(String(u.getSeconds()).padStart(2, "0"))),
                                                                        (a.getCell(s - 1, 4).values = [[f]]),
                                                                        globalVar.debug && console.log("Informations de suivi ajoutées pour la ligne :", s),
                                                                        (globalVar.debug = !0);
                                                                case 28:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })
                                            );
                                            return function (t) {
                                                return e.apply(this, arguments);
                                            };
                                        })()
                                    ).catch(function (e) {
                                        (globalVar.debug = !0),
                                            console.error("Erreur lors l'ajout du suivi des modifications : " + e),
                                            e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo));
                                    })
                                );
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )),
        _ajoutModif.apply(this, arguments)
    );
}
function ActivationRecap() {
    return _ActivationRecap.apply(this, arguments);
}
function _ActivationRecap() {
    return (
        (_ActivationRecap = _asyncToGenerator(
            _regeneratorRuntime().mark(function e() {
                return _regeneratorRuntime().wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                    (e.next = 2),
                                    Excel.run(
                                        (function () {
                                            var e = _asyncToGenerator(
                                                _regeneratorRuntime().mark(function e(t) {
                                                    var n;
                                                    return _regeneratorRuntime().wrap(function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (
                                                                        (globalVar.debug = !1),
                                                                        globalVar.debug && console.log("Activation de la feuille 3. Recap"),
                                                                        ((n = t.application).screenUpdating = !1),
                                                                        n.calculate(),
                                                                        (e.next = 8),
                                                                        formatSemaine("3. Recap", 3)
                                                                    );
                                                                case 8:
                                                                    return (n.screenUpdating = !0), (e.next = 11), t.sync();
                                                                case 11:
                                                                    globalVar.debug = !0;
                                                                case 12:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })
                                            );
                                            return function (t) {
                                                return e.apply(this, arguments);
                                            };
                                        })()
                                    ).catch(function (e) {
                                        (globalVar.debug = !0),
                                            console.error("Erreur lors de l'exécution de ActivationRecap :", e),
                                            e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo));
                                    })
                                );
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )),
        _ActivationRecap.apply(this, arguments)
    );
}
function ActivationListeMissions() {
    return _ActivationListeMissions.apply(this, arguments);
}
function _ActivationListeMissions() {
    return (
        (_ActivationListeMissions = _asyncToGenerator(
            _regeneratorRuntime().mark(function e() {
                return _regeneratorRuntime().wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                    (e.next = 2),
                                    Excel.run(
                                        (function () {
                                            var e = _asyncToGenerator(
                                                _regeneratorRuntime().mark(function e(t) {
                                                    var n;
                                                    return _regeneratorRuntime().wrap(function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (
                                                                        (globalVar.debug = !1),
                                                                        globalVar.debug && console.log("Activation de la feuille 1. Liste des missions"),
                                                                        ((n = t.application).screenUpdating = !1),
                                                                        n.calculate(),
                                                                        (e.next = 8),
                                                                        formatSemaine("1. Liste des missions", 3)
                                                                    );
                                                                case 8:
                                                                    return (n.screenUpdating = !0), (e.next = 11), t.sync();
                                                                case 11:
                                                                    globalVar.debug = !0;
                                                                case 12:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })
                                            );
                                            return function (t) {
                                                return e.apply(this, arguments);
                                            };
                                        })()
                                    ).catch(function (e) {
                                        (globalVar.debug = !0),
                                            console.error("Erreur lors de l'exécution de ActivationListeMissions :", e),
                                            e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo));
                                    })
                                );
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, e);
            })
        )),
        _ActivationListeMissions.apply(this, arguments)
    );
}
