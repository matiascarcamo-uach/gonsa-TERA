import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  NomUser: string;


  constructor() {
    this.NomUser = localStorage.getItem('name');
  }

  ngOnInit() {
    console.log('++++++');
    let data = localStorage.getItem('token').split('.')[1];
    let ob = JSON.parse(atob(data));
    console.log(ob);
    console.log(ob.Rol);
    //console.log(atob(data)); // datos
  }
}

