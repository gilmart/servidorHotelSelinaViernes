import express from 'express'
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../Controllers/ControladorReserva.js'

let controladorHabitacion=new ControladorHabitacion() //instanciando - usando el controlador
let controladorReserva = new ControladorReserva()

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelselina/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelselina/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorID)
rutasPersonalizadas.post('/hotelselina/habitacion', controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelselina/habitacion', controladorHabitacion.editarHabitacion)

rutasPersonalizadas.get('/hotelselina/reservas',controladorReserva.buscarReservas)
rutasPersonalizadas.get('/hotelselina/reserva/:idReserva',controladorReserva.buscarReservaPorID)
rutasPersonalizadas.post('/hotelselina/reserva',controladorReserva.registrarReserva)
rutasPersonalizadas.put('/hotelselina/reserva',controladorReserva.editarReserva)




