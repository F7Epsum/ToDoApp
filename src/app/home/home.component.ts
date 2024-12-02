import { Component } from '@angular/core';
import {Tarea} from "../services/interface/tarea";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tareas: Tarea[] = [
    {id:1, Title:"Almuerzo con amigos", Description:"Ir a almorzar con amigos", Date:"20/10", Time:"14HS"},
    {id:2, Title:"Almuerzo con amigos", Description:"Ir a almorzar con amigos", Date:"24/09", Time:"11HS"},
    {id:3, Title:"Almuerzo con amigos", Description:"Ir a almorzar con amigos", Date:"26/08", Time:"13HS"},
    {id:4, Title:"Almuerzo con amigos", Description:"Ir a almorzar con amigos", Date:"28/03", Time:"19HS"},
    {id:5, Title:"Almuerzo con amigos", Description:"Ir a almorzar con amigos", Date:"13/11", Time:"16HS"}
  ]

}
