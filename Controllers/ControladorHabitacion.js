export class ControladorHabitacion{
    constructor(){}

    buscarHabitaciones(request, response){

        let buscarHabitaciones = request.body
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta" +buscarHabitaciones,
                "datos":"aqui van los datos de las habitaciones",
                "estado":true
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
     //  response.send("estoy buscando habitaciones desde el controlador")

     }

     buscarHabitacionPorID(request, response){

        let id =request.params.idHabitacion // recibo ide de la peticion
        
        try{
            response.status(200).json({
                "mensaje":"exito en la consulta " +id,
                "datos":"aqui van los datos de buscar las habitaciones por ID",
                "estado":true
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
    // response.send("estoy buscando una habitacion por ID desde el controlador")

     }

     registrarHabitacion(request, response){

        let datosHabitacion= request.body
        try{
            response.status(200).json({
                "mensaje":"exito registrando la habitacion" +datosHabitacion ,
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
        //response.send("estoy agregando una habitacion desde el controlador")

     }

     editarHabitacion(request, response){

        let id = request.params.idHabitacion
        let datosHabitacion = request.body
        console.log(id,datosHabitacion)

        try{
            response.status(200).json({
                "mensaje":"exito en editando la habitacion" +id,
                "datos":datosHabitacion ,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,
                "estado":false
            })
        }
        //response.send("estoy agregando una habitacion desde el controlador")

     }


}
