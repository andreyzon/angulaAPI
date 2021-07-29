import { json, request, Request, Response } from 'express';

import pool from '../database';


class GamesController {

    public async list (req: Request, res: Response) { 
        
        await pool.query("SELECT * FROM tarjeta1 ORDER BY Fecha desc LIMIT 100", function(err, result, fields){
            if (err) throw err;
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
    
       
    }
    public async getOne (req: Request, res: Response): Promise<void> {
        const { Tarjeta }  = req.params;
        console.log(Tarjeta);
        
        await pool.query("SELECT * FROM tarjeta"+Tarjeta+" WHERE Tarjeta = '"+Tarjeta+"' ORDER BY Fecha desc LIMIT 20", function(err, result, fields){
                if (err) throw err;
                res.json(result);
            });
           
    }

    public async create (req: Request, res: Response): Promise<void> {
        let Mike = req.body;         //Se captura el mensaje JSON de las placas ESP
        let auxiliar = Mike.Tarjeta; //Se saca el atributo "Tarjeta" del mensaje JSON
        console.log(auxiliar);
        
        await pool.query ("INSERT INTO tarjeta"+auxiliar+" (direccIP, Temperatura, Tarjeta) VALUES ('"+Mike.ip+"', '"+Mike.temperatura+"' , '"+Mike.Tarjeta+"')" );
        res.json({message : 'Dato guardado'});
        //let pru = Mike.Fecha; CAPTURA VARIABLES DEL JSON Mike (Todas son tipo string)
        console.log(Mike);
    }


    
    //---PARA ACTUALIZAR Y BORRAR. NO SE USAN---//

    public async update (req: Request, res: Response):Promise<void> {
       const { Tarjeta } = req.params;
       await pool.query('UPDATE datos set ? WHERE Tarjeta = ?', [req.body, Tarjeta]);
       res.json({text: 'Juego actualizado'});
    }
    public async delete (req: Request, res: Response):Promise<void> {
        const { Tarjeta } = req.params;
        await pool.query('DELETE FROM datos WHERE Tarjeta = ?', [Tarjeta]);
        res.json({text: 'El juego fue eliminado'});        
    }


}

const gamesController = new GamesController();
export default gamesController;

