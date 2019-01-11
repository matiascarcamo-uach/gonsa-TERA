import { Component, OnInit } from '@angular/core';
import { TareaService, Tarea } from '../../services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
tareas:any[]=[];
tareasResueltas:any[]=[];


  constructor(private _tareaSercice: TareaService) {

   }

  ngOnInit() {
    this.tareas = this._tareaSercice.getTareas();
    this.tareasResueltas = this._tareaSercice.getTareasRe();
    console.log(this.tareas);
  }


}
