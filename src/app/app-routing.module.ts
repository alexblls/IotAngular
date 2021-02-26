import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/login/login.component";
import { DispositiusDetallComponent } from "./dispositius/dispositius-detall/dispositius-detall.component";
import { DispositiusListComponent } from './dispositius/dispositius-list/dispositius-list.component';
import { NouDispositiuComponent } from "./dispositius/nou-dispositiu/nou-dispositiu.component";
import { AutenticacioGuard } from "./usuari/autenticacio.guard";
import { EditarDispositiuComponent } from './dispositius/editar-dispositiu/editar-dispositiu.component';
import { DispositiusresolveService } from './dispositius/dispositiusresolve.service';

const routes: Routes = [
    {path: 'home', component: HomeComponent},

    {path: 'dispositius', 
    canActivate: [AutenticacioGuard],
    component: DispositiusListComponent},

    {path: 'dispositius/nou', 
    canActivate: [AutenticacioGuard],
    component: NouDispositiuComponent},
    
    {path: 'dispositiu/editar/:id', 
    canActivate: [AutenticacioGuard],
    resolve: { dispositiu: DispositiusresolveService},
    component: EditarDispositiuComponent},

    {path: 'dispositiu/:id', component: DispositiusDetallComponent},

    {path: 'login', component: LoginComponent},

    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}