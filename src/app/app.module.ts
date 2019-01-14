import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

import { DesafioComponent } from './components/desafios/desafios.component';
import { TareasComponent } from './components/tareas/tareas.component';

import { CategoriaService} from './services/categoria.service';
import { TareaService } from './services/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EstudianteComponent,
    ProfesorComponent,
    DesafioComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    TareaService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
