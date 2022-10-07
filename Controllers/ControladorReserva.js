import { request } from "express"
import {ServicioReserva} from "../services/ServicioReserva.js"
export class ControladorReserva{

    constructor(){}
    async buscarReservas(request, response){
     // let buscar= request.body
      let objetoServicioReservas = new ServicioReserva()
        try {
          response.status(200).json({
            "mensaje":"exito en la consulta",
            "datos": await objetoServicioReservas.buscarReservas(),
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
 
    async buscarReservaPorID(request, response){
      let id =request.params.idReserva
      let objetoServicioHabitacion = new ServicioReserva()
        try {
            response.status(200).json({
              "mensaje":"exito en la consulta " +id,
              "datos": await objetoServicioReserva.buscarReservaPorId(id),
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

    async registrarReserva(request, response){

      let datosReserva= request.body
      let objetoServicioReserva = new ServicioReserva()
      try {
        await objetoServicioReserva.agregarReservaEnBD(datosReserva)
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

    async editarReserva(request, response){
      
      let id = request.params.idReserva
      let datosReserva = request.body

      let objetoServicioHabitacion=new ServicioReserva()
      try {
            await objetoServicioHabitacion.editarReserva(id,datosReserva)
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



