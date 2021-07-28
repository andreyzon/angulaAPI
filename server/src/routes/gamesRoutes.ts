import { Router } from 'express';

import gamesController from '../controllers/gamesController';

class GamesRoutes {

    public router: Router = Router();

    constructor() {
         this.config();
    }

    config(): void{
        this.router.get('/', gamesController.list);            //Para obtener todos los datos de todas las tarjetas ruta http://localhost:3000/API/KIOSCO
        this.router.get('/:Tarjeta', gamesController.getOne);  //Para obtener los datos de la tarjeta "x"
        this.router.post('/', gamesController.create);
        this.router.put('/:Tarjeta', gamesController.update);
        this.router.delete('/:Tarjeta', gamesController.delete);
        
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
