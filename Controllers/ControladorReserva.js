import { request } from "express"

export class ControladorReserva{

    constructor(){}
    buscarReservas(request, response){
      let buscar= request.body

        try {
          response.status(200).json({
            "mensaje":"exito en la consulta",
            "datos":"aqui van los datos de la busqueda de reservas",
            "estado":true  
          })  
        } catch (error) {
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
              })
        }
       
        //response.send("estoy buscando reservas desde el controlador")
    }
 
    buscarReservaPorID(request, response){

      let id =request.params.idReserva
        try {
            response.status(200).json({
              "mensaje":"exito en la consulta " +id,
              "datos":"aqui van los datos de la busqueda de reservas por id ",
              "estado":true  
            })  
          } catch (error) {
              response.status(400).json({
                  "mensaje":"ERROR en la consulta " +error,
                  "datos":null,
                  "estado":false
                })
          }
    
    
        //response.send("estoy buscando una reserva por ID desde el controlador")

    }

    registrarReserva(request, response){

      let datosReserva= request.body
      console.log(datosReserva)
        try {
            response.status(200).json({
              "mensaje":"exito en la consulta" + datosReserva,
              "datos":null,
            })  
          } catch (error) {
              response.status(400).json({
                  "mensaje":"ERROR en la consulta " +error,
                  "datos":null,
                  "estado":false
                })
          }
        //response.send("estoy agregando una reserva desde el controlador")

    }

    editarReserva(request, response){
      
      let id = request.params.idReserva
      let datosReserva = request.body
      console.log(id,datosReserva)
        try {
            response.status(200).json({
              "mensaje":"exito en la consulta" + id,
              "datos":"aqui van los editando las reservas"+ datosReserva,
              "estado":true  
            })  
          } catch (error) {
              response.status(400).json({
                  "mensaje":"ERROR en la consulta " +error,
                  "datos":null,
                  "estado":false
                })
          }
        //response.send("estoy editando una reserva desde el controlador")

    }


}



