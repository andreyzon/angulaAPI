import { Request, Response, text } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.json({text : 'La API está en /API/KIOSCO'});
    }
    
}

export const indexController = new IndexController();
