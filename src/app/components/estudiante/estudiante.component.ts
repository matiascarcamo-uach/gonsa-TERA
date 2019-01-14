import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService, Categorias } from '../../services/categoria.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  NomUser: string;
  categorias: any;
  constructor(private router: Router, public _CategoriaService: CategoriaService, public http: HttpClient) {
    // this.NomUser = localStorage.getItem('name');
    if (localStorage.getItem('token')) {
      console.log('contructor');
    }
  }

  ngOnInit() {
    let us1 = localStorage.getItem('name');
    let rol = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).Rol;
    console.log(us1);
    console.log(rol);
    console.log(this.categorias = this._CategoriaService.getCategorias());
    console.log(localStorage.getItem('token'));

  }
  RedireccionTareas(){
    this.router.navigate(['/tareas']);
  }
}

