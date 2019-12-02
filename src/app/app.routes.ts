import { RouterModule , Routes} from '@angular/router';
import { HomeComponent }from "./components/home/home.component";
import { AdoptameComponent } from "./components/adoptame/adoptame.component";
import { MascotasdiponiblesComponent } from "./components/mascotasdiponibles/mascotasdiponibles.component";
import { ProgramarcitaComponent } from "./components/programarcita/programarcita.component";
import { LoginComponent } from "./components/login/login.component";

const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'adoptame', component: AdoptameComponent},
    {path: 'mascotasdisponibles', component: MascotasdiponiblesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'programarcita', component: ProgramarcitaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);