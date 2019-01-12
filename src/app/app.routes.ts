import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

import { Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { DesafioComponent } from './components/desafios/desafios.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent, },
    { path: 'login', component: LoginComponent },
    {path: 'profesor', component: ProfesorComponent},
    {path: 'tareas', component: TareasComponent},
    {path: 'desafio', component: DesafioComponent},
    { path: 'estudiante', component: EstudianteComponent, canActivate: [LoginGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]