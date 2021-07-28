"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'La API está en /API/KIOSCO' });
    }
}
exports.indexController = new IndexController();
