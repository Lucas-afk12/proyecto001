"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var menuPral_1 = require("./views/menuPral");
var teclado_1 = require("./views/teclado");
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var n, n1, n2, x, d1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    return __generator(this, function (_v) {
        switch (_v.label) {
            case 0: return [4 /*yield*/, (0, menuPral_1.menuPral)()];
            case 1:
                n = _v.sent();
                _a = n;
                switch (_a) {
                    case 1: return [3 /*break*/, 2];
                    case 2: return [3 /*break*/, 6];
                    case 3: return [3 /*break*/, 10];
                    case 4: return [3 /*break*/, 13];
                    case 5: return [3 /*break*/, 16];
                    case 0: return [3 /*break*/, 18];
                }
                return [3 /*break*/, 19];
            case 2:
                _b = parseInt;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)('Dame un número')];
            case 3:
                n1 = _b.apply(void 0, [_v.sent()]);
                console.log("1.- Binario");
                console.log("2.- Hexadecimal");
                console.log("3.- Seleccionar base");
                console.log("4.- Atras");
                _c = parseInt;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)('Elige una opcion:')];
            case 4:
                x = _c.apply(void 0, [_v.sent()]);
                _e = (_d = console).log;
                _f = "la conversion seria igual a= ";
                return [4 /*yield*/, conversion(x, n1)];
            case 5:
                _e.apply(_d, [_f + (_v.sent())]);
                return [3 /*break*/, 20];
            case 6:
                _g = parseInt;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)('Dame un número')];
            case 7:
                n1 = _g.apply(void 0, [_v.sent()]);
                _h = parseInt;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)('Dame otro número')];
            case 8:
                n2 = _h.apply(void 0, [_v.sent()]);
                _k = (_j = console).log;
                return [4 /*yield*/, mc(n1, n2)];
            case 9:
                _k.apply(_j, [_v.sent()]);
                return [3 /*break*/, 20];
            case 10:
                _l = Date.bind;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)('Introduce la fecha de tu cumpleaños')];
            case 11:
                d1 = new (_l.apply(Date, [void 0, _v.sent()]))();
                _o = (_m = console).log;
                _p = "tienes: ";
                return [4 /*yield*/, edad(d1)];
            case 12:
                _o.apply(_m, [_p + (_v.sent()) + " a\u00F1os"]);
                return [3 /*break*/, 20];
            case 13:
                _q = parseInt;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)('Dame un número')];
            case 14:
                n1 = _q.apply(void 0, [_v.sent()]);
                _s = (_r = console).log;
                return [4 /*yield*/, primo(n1)];
            case 15:
                _s.apply(_r, [_v.sent()]);
                return [3 /*break*/, 20];
            case 16:
                _u = (_t = console).log;
                return [4 /*yield*/, ordenar()];
            case 17:
                _u.apply(_t, [_v.sent()]);
                return [3 /*break*/, 20];
            case 18:
                console.log('\nAdios');
                return [3 /*break*/, 20];
            case 19:
                console.log("Opción incorrecta");
                return [3 /*break*/, 20];
            case 20:
                if (n != 0) return [3 /*break*/, 0];
                _v.label = 21;
            case 21: return [2 /*return*/];
        }
    });
}); };
var conversion = function (x, n1) { return __awaiter(void 0, void 0, void 0, function () {
    var n, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(x == 1)) return [3 /*break*/, 1];
                return [2 /*return*/, n1.toString(2)];
            case 1:
                if (!(x == 2)) return [3 /*break*/, 2];
                return [2 /*return*/, n1.toString(16)];
            case 2:
                if (!(x == 3)) return [3 /*break*/, 4];
                _a = parseInt;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)("Indica a que base quieres pasar el numero")];
            case 3:
                n = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/, n1.toString(n)];
            case 4:
                if (x != 1 && x != 2 && x != 3) {
                    console.log("adios");
                }
                _b.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
var mc = function (n1, n2) { return __awaiter(void 0, void 0, void 0, function () {
    var n3, temporal, n4, n5, final;
    return __generator(this, function (_a) {
        n4 = n2;
        n5 = n1;
        while (n2 != 0) {
            temporal = n2;
            n2 = n1 % n2;
            n1 = temporal;
        }
        final = "el mcm es= " + n1 + " y el mcd es= " + (n4 * n5) / n1;
        return [2 /*return*/, final
            //Para practicar un poco saque tambien el resultado desde un objeto, aunque no sea lo mas eficiente ya que se puede realizar en menos pasos
            // interface Resultado{
            //     mcm: number;
            //     mcd: number;
            // }
            // let resultado: Resultado = {
            //    mcm: n1,
            //    mcd : (n4*n5)/n1
            // };
            // let final = `el mcm es= ${resulado.mcm} y el mcd es= ${resultado.mcd}`
            //     return final
        ];
    });
}); };
var edad = function (d1) { return __awaiter(void 0, void 0, void 0, function () {
    var edad, d2, falta, resta;
    return __generator(this, function (_a) {
        d2 = new Date();
        resta = d2.getTime() - d1.getTime();
        return [2 /*return*/, (Math.round(resta / (1000 * 60 * 60 * 24) / 365))];
    });
}); };
var primo = function (n1) { return __awaiter(void 0, void 0, void 0, function () {
    var i;
    return __generator(this, function (_a) {
        for (i = 2; i < n1; i++) {
            if (n1 % i == 0) {
                return [2 /*return*/, "el numero " + n1 + " no es primo"];
            }
        }
        ;
        return [2 /*return*/, "el numero " + n1 + "  es primo"];
    });
}); };
var ordenar = function () { return __awaiter(void 0, void 0, void 0, function () {
    var n3, numero, _a, orden, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.log("introduce los numeros que quieras ordenar cuando quieras parar de agregar numeros introduce el valor 0");
                numero = [];
                n3 = 2;
                _c.label = 1;
            case 1:
                if (!(n3 != 0)) return [3 /*break*/, 3];
                _a = parseInt;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)('Dame un número')];
            case 2:
                n3 = _a.apply(void 0, [_c.sent()]);
                numero.push(n3);
                return [3 /*break*/, 1];
            case 3:
                console.log("1.-para ordenarlo de menor a mayor");
                console.log("2.-para ordenarlo de mayor a menor");
                _b = parseInt;
                return [4 /*yield*/, (0, teclado_1.leerTeclado)('Elige 1  o 2 para ordenarloe de mayor a menor')];
            case 4:
                orden = _b.apply(void 0, [_c.sent()]);
                if (orden == 1) {
                    numero.pop();
                    return [2 /*return*/, (numero.sort(function (a, b) { return a - b; }))];
                }
                else if (orden == 2) {
                    numero.pop();
                    return [2 /*return*/, (numero.sort(function (a, b) { return b - a; }))];
                }
                else if (orden != 1 && orden != 2) {
                    console.log("Ingresa un valor correcto");
                }
                return [2 /*return*/];
        }
    });
}); };
main();
