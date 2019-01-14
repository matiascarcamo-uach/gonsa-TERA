import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
private tareas: Tarea[] = [
      {titulo:"matematica", info:"busca tarea1"},
      {titulo:"ciencia", info:"busca tarea2" },
      {titulo:"lenguaje", info:"busca tarea3"},
      {titulo:"historia", info:"busca tarea4"}
  ];

  private tareasResueltas:TareaResuelta[]=[
    {titulo:"historia",info:"tarea1"},
    {titulo:"lenguaje",info: "tarea2"}
  ];
  constructor() {
    console.log ( "listo para usar" );
   }
getTareas(): Tarea[] {
  return this.tareas;
}
getTareasRe():TareaResuelta[]{
  return this.tareasResueltas;
}

}

export interface Tarea {
  titulo: string;
  info: string;
};
export interface TareaResuelta{
  titulo:string;
  info: string;
};