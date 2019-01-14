import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  informacion: string;
  codigo: number;
  urlapi: string;

  constructor(public http: HttpClient) {
    this.informacion = '';
    this.urlapi = 'http://tera.uach.cl:8080';
  }
  getUrlApi(): string {
    return this.urlapi;
  }
  getCategorias() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'JWT' + localStorage.getItem('token')
      })
    };
    this.http.get( this.getUrlApi() +'/getallcategories', httpOptions).subscribe(data => {
      console.log(data['code']);
      console.log(data['categories']);

    });
  }
}

