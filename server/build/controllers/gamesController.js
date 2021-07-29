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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * FROM tarjeta1 ORDER BY Fecha desc LIMIT 100", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
            //PARA OBTENER UNA COLUMNA DE LA BASE DE DATOS
            // await pool.query('SELECT Fecha FROM datos', function(err, result, fields) {
            //     if (err) throw err;
            //     let fechas = result;
            //     console.log({ fechas });
            //PARA OBTENER LA HORA DEL SISTEMA
            //     (function(){
            //         var fecha = new Date();
            //         console.log(fecha);
            //       }())
            // });    
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Tarjeta } = req.params;
            console.log(Tarjeta);
            yield database_1.default.query("SELECT * FROM tarjeta" + Tarjeta + " WHERE Tarjeta = '" + Tarjeta + "' ORDER BY Fecha desc LIMIT 20", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let Mike = req.body; //Se captura el mensaje JSON de las placas ESP
            let auxiliar = Mike.Tarjeta; //Se saca el atributo "Tarjeta" del mensaje JSON
            console.log(auxiliar);
            yield database_1.default.query("INSERT INTO tarjeta" + auxiliar + " (direccIP, Temperatura, Tarjeta) VALUES ('" + Mike.ip + "', '" + Mike.temperatura + "' , '" + Mike.Tarjeta + "')");
            res.json({ message: 'Dato guardado' });
            //let pru = Mike.Fecha; CAPTURA VARIABLES DEL JSON Mike (Todas son tipo string)
            console.log(Mike);
        });
    }
    //---PARA ACTUALIZAR Y BORRAR. NO SE USAN---//
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Tarjeta } = req.params;
            yield database_1.default.query('UPDATE datos set ? WHERE Tarjeta = ?', [req.body, Tarjeta]);
            res.json({ text: 'Juego actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Tarjeta } = req.params;
            yield database_1.default.query('DELETE FROM datos WHERE Tarjeta = ?', [Tarjeta]);
            res.json({ text: 'El juego fue eliminado' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
