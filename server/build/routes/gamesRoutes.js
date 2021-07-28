"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.default.list); //Para obtener todos los datos de todas las tarjetas ruta http://localhost:3000/API/KIOSCO
        this.router.get('/:Tarjeta', gamesController_1.default.getOne); //Para obtener los datos de la tarjeta "x"
        this.router.post('/', gamesController_1.default.create);
        this.router.put('/:Tarjeta', gamesController_1.default.update);
        this.router.delete('/:Tarjeta', gamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
