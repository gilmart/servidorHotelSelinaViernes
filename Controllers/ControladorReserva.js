import { request } from "express"
import {ServicioReserva} from "../services/ServicioReserva.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import { modeloHabitacion } from "../Models/modeloHabitacion.js"
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
      let objetoServicioReserva = new ServicioReserva()
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
      let objetoServicioHabitacion = new ServicioHabitacion()   
     
      let idHabitacion = datosReserva.idHabitacion

      console.log(datosReserva)
      console.log(idHabitacion)

      try { 



       

        let habitacion= await objetoServicioHabitacion.buscarHabitacionPorId(idHabitacion)

        await objetoServicioReserva.agregarReservaEnBD(datosReserva)
        response.status(200).json({
          "mensaje":"Exito en la consulta " +datosReserva,
          "datos":null,
          "estado":false
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

      let objetoServicioReserva=new ServicioReserva()
      try {
            await objetoServicioReserva.editarReserva(id,datosReserva)
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

    async eliminarReserva(request,response){
      let id= request.params.idReserva
      let datosReserva = request.body

      let objetoServicioReserva=new ServicioReserva()
      try{
        await objetoServicioReserva.editarReserva(id,datosReserva)
        response.status(200).json({
          "mensaje":"exito eliminando a " + id,

        })
      } catch (error) { 
       response.status(400).json({
        "mensaje":"ERROR en la consulta " +error,
        "datos":null,
        "estado":false
      })
}
    }

}



