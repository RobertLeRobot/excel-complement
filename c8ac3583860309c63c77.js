/*! For license information please see c8ac3583860309c63c77.js.LICENSE.txt */
function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _typeof(e)
}

function _regeneratorRuntime() {
    "use strict";
    _regeneratorRuntime = function() {
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
        c = a.asyncIterator || "@@asyncIterator",
        l = a.toStringTag || "@@toStringTag";

    function s(e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), e[t]
    }
    try {
        s({}, "")
    } catch (e) {
        s = function(e, t, n) {
            return e[t] = n
        }
    }

    function u(e, t, n, r) {
        var a = t && t.prototype instanceof y ? t : y,
            i = Object.create(a.prototype),
            c = new R(r || []);
        return o(i, "_invoke", {
            value: C(e, n, c)
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
    t.wrap = u;
    var d = "suspendedStart",
        g = "suspendedYield",
        h = "executing",
        p = "completed",
        m = {};

    function y() {}

    function v() {}

    function b() {}
    var x = {};
    s(x, i, (function() {
        return this
    }));
    var w = Object.getPrototypeOf,
        E = w && w(w(P([])));
    E && E !== n && r.call(E, i) && (x = E);
    var _ = b.prototype = y.prototype = Object.create(x);

    function k(e) {
        ["next", "throw", "return"].forEach((function(t) {
            s(e, t, (function(e) {
                return this._invoke(t, e)
            }))
        }))
    }

    function A(e, t) {
        function n(o, a, i, c) {
            var l = f(e[o], e, a);
            if ("throw" !== l.type) {
                var s = l.arg,
                    u = s.value;
                return u && "object" == _typeof(u) && r.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                    n("next", e, i, c)
                }), (function(e) {
                    n("throw", e, i, c)
                })) : t.resolve(u).then((function(e) {
                    s.value = e, i(s)
                }), (function(e) {
                    return n("throw", e, i, c)
                }))
            }
            c(l.arg)
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
            if (o === h) throw Error("Generator is already running");
            if (o === p) {
                if ("throw" === a) throw i;
                return {
                    value: e,
                    done: !0
                }
            }
            for (r.method = a, r.arg = i;;) {
                var c = r.delegate;
                if (c) {
                    var l = S(c, r);
                    if (l) {
                        if (l === m) continue;
                        return l
                    }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                    if (o === d) throw o = p, r.arg;
                    r.dispatchException(r.arg)
                } else "return" === r.method && r.abrupt("return", r.arg);
                o = h;
                var s = f(t, n, r);
                if ("normal" === s.type) {
                    if (o = r.done ? p : g, s.arg === m) continue;
                    return {
                        value: s.arg,
                        done: r.done
                    }
                }
                "throw" === s.type && (o = p, r.method = "throw", r.arg = s.arg)
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

    function L(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function M(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
    }

    function R(e) {
        this.tryEntries = [{
            tryLoc: "root"
        }], e.forEach(L, this), this.reset(!0)
    }

    function P(t) {
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
        throw new TypeError(_typeof(t) + " is not iterable")
    }
    return v.prototype = b, o(_, "constructor", {
        value: b,
        configurable: !0
    }), o(b, "constructor", {
        value: v,
        configurable: !0
    }), v.displayName = s(b, l, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
    }, t.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, s(e, l, "GeneratorFunction")), e.prototype = Object.create(_), e
    }, t.awrap = function(e) {
        return {
            __await: e
        }
    }, k(A.prototype), s(A.prototype, c, (function() {
        return this
    })), t.AsyncIterator = A, t.async = function(e, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new A(u(e, n, r, o), a);
        return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
            return e.done ? e.value : i.next()
        }))
    }, k(_), s(_, l, "Generator"), s(_, i, (function() {
        return this
    })), s(_, "toString", (function() {
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
    }, t.values = P, R.prototype = {
        constructor: R,
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
                return c.type = "throw", c.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                    c = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                    var l = r.call(i, "catchLoc"),
                        s = r.call(i, "finallyLoc");
                    if (l && s) {
                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                    } else if (l) {
                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                    } else {
                        if (!s) throw Error("try statement without catch or finally");
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
                iterator: P(t),
                resultName: n,
                nextLoc: r
            }, "next" === this.method && (this.arg = e), m
        }
    }, t
}

function asyncGeneratorStep(e, t, n, r, o, a, i) {
    try {
        var c = e[a](i),
            l = c.value
    } catch (e) {
        return void n(e)
    }
    c.done ? t(l) : Promise.resolve(l).then(r, o)
}

function _asyncToGenerator(e) {
    return function() {
        var t = this,
            n = arguments;
        return new Promise((function(r, o) {
            var a = e.apply(t, n);

            function i(e) {
                asyncGeneratorStep(a, r, o, i, c, "next", e)
            }

            function c(e) {
                asyncGeneratorStep(a, r, o, i, c, "throw", e)
            }
            i(void 0)
        }))
    }
}
import {
    ActivationPlanningConsultant,
    modifPlanningConsultant,
    ChgtFeuilleConsultant
} from "./1_ModifConsultants.js";
import {
    ActivationPlanningMission,
    modifPlanningMission,
    ChgtFeuilleMission
} from "./2_ModifMissions.js";
import {
    ActivationPlanningGlobal,
    ChgtFeuilleGlobal
} from "./3_PlanningGlobal.js";
import {
    ActivationPlanningEncadrant,
    ChgtFeuilleEncadrant
} from "./3_PlanningEncadrant.js";
import {
    formatProtection,
    formatMissions,
    formatConsultants,
    formatSemaine,
    applyNewRangeToConditionnalFormat
} from "./0_Format.js";
import {
    handleClick,
    nouvelleMission,
    suppressionMission,
    affectationMission,
    affectationConsultant
} from "./0_Gestion_des_boutons.js";
import {
    PLANNING_TITLE,
    sharepointUrl
} from "../commands/commands.js";
export var globalVar = {
    debug: !0,
    isProcessing: !1,
    nbExecModifConsultant: 1,
    nbExecModifMission: 1,
    nbExecModifEncadrant: 1,
    nbExecModifGlobal: 1
};

function initializeWorkbookSettings() {
    return _initializeWorkbookSettings.apply(this, arguments)
}

function _initializeWorkbookSettings() {
    return _initializeWorkbookSettings = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
        return _regeneratorRuntime().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run(function() {
                        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                            var n, r, o, a;
                            return _regeneratorRuntime().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (globalVar.debug && console.log("Initialisation du classeur : Désactivation du calcul automatique"), t.application.calculationMode = Excel.CalculationMode.manual, !globalVar.debug) {
                                            e.next = 10;
                                            break
                                        }
                                        return n = t.application, e.next = 7, n.load("calculationState");
                                    case 7:
                                        return e.next = 9, t.sync();
                                    case 9:
                                        console.log("calculationState initial", n.calculationState);
                                    case 10:
                                        return r = t.workbook, globalVar.debug && console.log(r), e.next = 14, r.worksheets.onActivated.removeAll();
                                    case 14:
                                        return r.worksheets.onActivated.add(handleSheetChange), (o = r.properties).load("title"), a = r.worksheets.getActiveWorksheet(), e.next = 20, a.load("name");
                                    case 20:
                                        return e.next = 22, t.sync();
                                    case 22:
                                        return handleButtonDisplay(a.name, o.title), e.next = 25, t.sync();
                                    case 25:
                                        globalVar.debug && console.log("Calcul automatique désactivé");
                                    case 27:
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
    }))), _initializeWorkbookSettings.apply(this, arguments)
}
globalVar.debug && console.log(globalVar.isProcessing), Office.onReady((function(e) {
    e.host === Office.HostType.Excel && (globalVar.debug && console.log("Office est prêt, chargement de la fonction qui se déclenche s'il y a un changement sur le fichier"), initializeWorkbookSettings(), addWorksheetChangeHandler(), initializeButton())
}));
export function handleSheetChange(e) {
    return _handleSheetChange.apply(this, arguments)
}

function _handleSheetChange() {
    return _handleSheetChange = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
        return _regeneratorRuntime().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run(function() {
                        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                            var n, r;
                            return _regeneratorRuntime().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.workbook.worksheets.getActiveWorksheet(), (r = t.workbook.properties).load("title"), e.next = 5, n.load("name");
                                    case 5:
                                        return e.next = 7, t.sync();
                                    case 7:
                                        handleButtonDisplay(n.name, r.title);
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
    }))), _handleSheetChange.apply(this, arguments)
}

function addWorksheetChangeHandler() {
    Excel.run(function() {
        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
            var n, r, o, a, i, c, l;
            return _regeneratorRuntime().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return globalVar.debug && console.log("Ajout du gestionnaire de boutons."), n = t.workbook.worksheets.getActiveWorksheet(), e.next = 4, n.load("name");
                    case 4:
                        return e.next = 6, t.sync();
                    case 6:
                        return globalVar.debug && console.log("Ajout des gestionnaires de changement pour les feuilles '1. Liste des missions', '2. Planning - Consultant', '2. Planning - Missions', '3. Planning - Encadrant, '3. Planning - Global' et '3. Recap'"), r = t.workbook.worksheets.getItem("2. Planning - Consultant"), e.next = 11, r.onActivated.removeAll();
                    case 11:
                        return r.onActivated.add(ActivationPlanningConsultant), e.next = 14, r.onChanged.removeAll();
                    case 14:
                        return r.onChanged.add(ChgtFeuilleConsultant), globalVar.debug && console.log("Chargement des fonctions de la feuille", r), o = t.workbook.worksheets.getItem("2. Planning - Missions"), e.next = 20, o.onActivated.removeAll();
                    case 20:
                        return o.onActivated.add(ActivationPlanningMission), e.next = 23, o.onChanged.removeAll();
                    case 23:
                        return o.onChanged.add(ChgtFeuilleMission), globalVar.debug && console.log("Chargement des fonctions de la feuille", o), a = t.workbook.worksheets.getItem("3. Planning - Encadrant"), e.next = 29, a.onActivated.removeAll();
                    case 29:
                        return a.onActivated.add(ActivationPlanningEncadrant), e.next = 32, a.onChanged.removeAll();
                    case 32:
                        return a.onChanged.add(ChgtFeuilleEncadrant), globalVar.debug && console.log("Chargement des fonctions de la feuille", a), i = t.workbook.worksheets.getItem("3. Planning - Global"), e.next = 38, i.onActivated.removeAll();
                    case 38:
                        return i.onActivated.add(ActivationPlanningGlobal), e.next = 41, i.onChanged.removeAll();
                    case 41:
                        return i.onChanged.add(ChgtFeuilleGlobal), globalVar.debug && console.log("Chargement des fonctions de la feuille", i), c = t.workbook.worksheets.getItem("3. Recap"), e.next = 47, c.onActivated.removeAll();
                    case 47:
                        return c.onActivated.add(ActivationRecap), globalVar.debug && console.log("Chargement des fonctions de la feuille", c), l = t.workbook.worksheets.getItem("1. Liste des missions"), e.next = 53, l.onActivated.removeAll();
                    case 53:
                        l.onActivated.add(ActivationListeMissions), globalVar.debug && console.log("Chargement des fonctions de la feuille", l), globalVar.debug && console.log("Gestionnaire de changement ajouté.");
                    case 58:
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
    }))
}
export function handleButtonDisplay(e, t) {
    try {
        document.querySelectorAll("section").forEach((function(e) {
            e.style.display = "none"
        })), console.log("avant boucle :", e, t), "1. Liste des missions" === e ? (console.log("boucle 1 :", e, t), document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex") : "2. Planning - Missions" === e ? (console.log("boucle 2 :", e, t), document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex", document.getElementById("sec-btn-ModifierAffectationMission").style.display = "flex") : "2. Planning - Consultant" === e ? (console.log("boucle 3 :", e, t), document.getElementById("sec-btn-AjoutMission").style.display = "flex", document.getElementById("sec-btn-Suppression").style.display = "flex", document.getElementById("sec-btn-ModifierAffectationConsultant").style.display = "flex") : t !== PLANNING_TITLE && (console.log("boucle 4 :", e, t), document.getElementById("sec-btn-OpenPlanning").style.display = "flex")
    } catch (e) {
        console.error("Erreur lors de la mise à jour du volet :", e)
    }
}
export function initializeButton() {
    document.getElementById("btn-AjoutMission").addEventListener("click", handleClick), document.getElementById("btn-Suppression").addEventListener("click", handleClick), document.getElementById("btn-ModifierAffectationMission").addEventListener("click", handleClick), document.getElementById("btn-ModifierAffectationConsultant").addEventListener("click", handleClick), document.getElementById("btn-open-planning").addEventListener("click", handleClick), document.querySelectorAll('[id*="btn-return"]').forEach((function(e) {
        e.addEventListener("click", handleClick)
    }))
}
export function ajoutModif(e, t, n) {
    return _ajoutModif.apply(this, arguments)
}

function _ajoutModif() {
    return _ajoutModif = _asyncToGenerator(_regeneratorRuntime().mark((function e(t, n, r) {
        return _regeneratorRuntime().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run(function() {
                        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(o) {
                            var a, i, c, l, s, u, f;
                            return _regeneratorRuntime().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return globalVar.debug = !0, a = o.workbook, i = a.worksheets.getItem("Suivi Modif"), e.next = 5, i.load("name");
                                    case 5:
                                        return c = i.getRange("A:A").getUsedRange(), e.next = 8, c.load("rowCount");
                                    case 8:
                                        return e.next = 10, o.sync();
                                    case 10:
                                        return l = c.rowCount + 1, globalVar.debug && console.log("Nombre de lignes utilisées dans wsSuivi :", l), i.getCell(l - 1, 0).values = [
                                            [t]
                                        ], i.getCell(l - 1, 1).values = [
                                            [n]
                                        ], i.getCell(l - 1, 2).values = [
                                            [r]
                                        ], s = "Utilisateur inconnu", globalVar.debug && console.log("Office.context :", Office.context), Office.context && Office.context.user && Office.context.user.displayName ? s = Office.context.user.displayName : console.warn("Impossible de récupérer le nom de l'utilisateur."), e.next = 21, o.sync();
                                    case 21:
                                        i.getCell(l - 1, 3).values = [
                                            [s]
                                        ], u = new Date, f = "".concat(String(u.getDate()).padStart(2, "0"), "/").concat(String(u.getMonth() + 1).padStart(2, "0"), "/").concat(u.getFullYear(), " ").concat(String(u.getHours()).padStart(2, "0"), ":").concat(String(u.getMinutes()).padStart(2, "0"), ":").concat(String(u.getSeconds()).padStart(2, "0")), i.getCell(l - 1, 4).values = [
                                            [f]
                                        ], globalVar.debug && console.log("Informations de suivi ajoutées pour la ligne :", l), globalVar.debug = !0;
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
                        globalVar.debug = !0, console.error("Erreur lors l'ajout du suivi des modifications : " + e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                    }));
                case 2:
                case "end":
                    return e.stop()
            }
        }), e)
    }))), _ajoutModif.apply(this, arguments)
}

function ActivationRecap() {
    return _ActivationRecap.apply(this, arguments)
}

function _ActivationRecap() {
    return _ActivationRecap = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
        return _regeneratorRuntime().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run(function() {
                        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                            var n;
                            return _regeneratorRuntime().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return globalVar.debug = !1, globalVar.debug && console.log("Activation de la feuille 3. Recap"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 8, formatSemaine("3. Recap", 3);
                                    case 8:
                                        return n.screenUpdating = !0, e.next = 11, t.sync();
                                    case 11:
                                        globalVar.debug = !0;
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
                        globalVar.debug = !0, console.error("Erreur lors de l'exécution de ActivationRecap :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                    }));
                case 2:
                case "end":
                    return e.stop()
            }
        }), e)
    }))), _ActivationRecap.apply(this, arguments)
}

function ActivationListeMissions() {
    return _ActivationListeMissions.apply(this, arguments)
}

function _ActivationListeMissions() {
    return _ActivationListeMissions = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
        return _regeneratorRuntime().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, Excel.run(function() {
                        var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                            var n;
                            return _regeneratorRuntime().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return globalVar.debug = !1, globalVar.debug && console.log("Activation de la feuille 1. Liste des missions"), (n = t.application).screenUpdating = !1, n.calculate(), e.next = 8, formatSemaine("1. Liste des missions", 3);
                                    case 8:
                                        return n.screenUpdating = !0, e.next = 11, t.sync();
                                    case 11:
                                        globalVar.debug = !0;
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
                        globalVar.debug = !0, console.error("Erreur lors de l'exécution de ActivationListeMissions :", e), e instanceof OfficeExtension.Error && console.error("Error globalVar.debug info: " + JSON.stringify(e.debugInfo))
                    }));
                case 2:
                case "end":
                    return e.stop()
            }
        }), e)
    }))), _ActivationListeMissions.apply(this, arguments)
}